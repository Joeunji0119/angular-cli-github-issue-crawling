import { Octokit } from "octokit";
import { TOKEN } from "../config";

const octokit = new Octokit({
  auth: TOKEN.USER,
});

export const octokitPage1Api = async () => {
  const { data } = await octokit.request("GET /repos/{owner}/{repo}/issues", {
    owner: "angular",
    repo: "angular-cli",
    state: "open",
    sort: "comments",
    per_page: 10,
    page: 1,
  });
  return { data };
};

export const octokitApi = (pageNum, setIssue, setLoading) => {
  octokit
    .request("GET /repos/{owner}/{repo}/issues", {
      owner: "angular",
      repo: "angular-cli",
      state: "open",
      sort: "comments",
      per_page: 10,
      page: pageNum,
    })
    .then(({ data }) => {
      setIssue((prev) => [...prev, ...data]);
      setLoading(false);
    });
};

export const DetailApi = async (id) => {
  const { data } = await octokit.request(`GET /repos/{owner}/{repo}/issues/${id}`, {
    owner: "angular",
    repo: "angular-cli",
  });
  return { data };
};
