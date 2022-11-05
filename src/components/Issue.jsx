/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Advertisement } from "./Advertisement";

const Issue = ({ number, title, login, created_at, comments, idx }) => {
  return (
    <>
      {idx === 4 && <Advertisement />}
      <Link key={number} to={`/${number}`}>
        <LayoutIssue>
          <IssueInfoBox>
            <IssueNumTitle>
              <IssueNum>#{number}</IssueNum>
              <IssueTitle>{title}</IssueTitle>
            </IssueNumTitle>
            <IssueNameDate>
              <IssueName>작성자 :{login}</IssueName>
              <IssueDate>작성일 :{created_at}</IssueDate>
            </IssueNameDate>
          </IssueInfoBox>
          <CommentNum>코멘트 :{comments}</CommentNum>
        </LayoutIssue>
      </Link>
    </>
  );
};

export default Issue;

export const LayoutIssue = styled.div`
  width: 1000px;
  height: 100px;
  border-bottom: solid 1px black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  z-index: 1;
  color: black;

  @media (max-width: 1000px) {
    width: 700px;
    height: 100px;
    font-size: 17px;
  }

  @media (max-width: 768px) {
    width: 500px;
    height: 100px;
    font-size: 13px;
  }
`;

export const IssueInfoBox = styled.div`
  margin-left: 20px;
`;

export const IssueNumTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 20px;
`;

export const IssueNum = styled.div`
  margin-right: 20px;
`;
export const IssueTitle = styled.div``;

export const IssueNameDate = styled.div`
  display: flex;
  justify-content: flex-start;
  font-size: 15px;
`;

export const IssueName = styled.div`
  margin-right: 20px;
`;

export const IssueDate = styled.div``;

export const CommentNum = styled.div`
  margin-right: 20px;
`;
