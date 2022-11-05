/** @jsxImportSource @emotion/react */
import { useRef, useEffect } from "react";
import styled from "@emotion/styled";
import Issue from "./Issue";
import { useIssue } from "../contexts/issueContext";
import { useLoading } from "../contexts/issueContext";
import { useError } from "../contexts/issueContext";
import Loading from "./Loading";
import Error from "./Error";
import { octokitApi, octokitPage1Api } from "../api/client";

const Main = () => {
  const [issue, setIssue] = useIssue([]);
  const [loading, setLoading] = useLoading([]);
  const [error, setError] = useError([]);
  const pageNum = useRef(1);

  useEffect(() => {
    octokitPage1Api().then(({ data }) => {
      setIssue(data);
    });
  }, []);

  const octokitApii = () => {
    pageNum.current += 1;
    setLoading(true);
    try {
      octokitApi(pageNum.current, setIssue, setLoading);
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

  useEffect(() => {
    let timer;
    window.addEventListener("scroll", () => {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;

        if (scrollHeight + scrollTop >= clientHeight - 10) {
          octokitApii();
        }
      }, 400);
    });
  }, []);

  return (
    <Layout>
      {error ? <Error /> : null}
      {loading ? <Loading /> : null}
      <ListLayout>
        {issue.map((el, idx) => {
          return (
            <div key={el.id}>
              {issue.length - 1 === idx ? (
                <Issue
                  {...issue}
                  number={el.number}
                  title={el.title}
                  login={el.user.login}
                  created_at={el.created_at}
                  comments={el.comments}
                  idx={idx}
                />
              ) : (
                <Issue
                  {...issue}
                  number={el.number}
                  title={el.title}
                  login={el.user.login}
                  created_at={el.created_at}
                  comments={el.comments}
                  idx={idx}
                />
              )}
            </div>
          );
        })}
      </ListLayout>
    </Layout>
  );
};

export default Main;

export const Layout = styled.div`
  height: 100vh;
  margin: 100px 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListLayout = styled.div`
  height: 100%;
  margin-top: 100px;
`;
