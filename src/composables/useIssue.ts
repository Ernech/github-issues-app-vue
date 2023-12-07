import { Issue } from "../interfaces/issue";
import { useQuery } from "@tanstack/vue-query";
import githubApi from "../api/githubApi";

const getIssueInfo = async (issueNumber:number):Promise<Issue>=>{

    const {data} = await githubApi.get<Issue>(`/issues/${issueNumber}`);
    return data;


}


const getIssueComments = async (issueNumber:number):Promise<Issue[]>=>{

    const {data} = await githubApi.get<Issue[]>(`/issues/${issueNumber}/comments`);
    return data;


}



export const useIssue = (isssueNumber:number)=>{

    const issueQuery = useQuery({
        queryKey:['isssue',isssueNumber],
        queryFn:()=>getIssueInfo(isssueNumber)
    })


    const commentsQuery = useQuery({
        queryKey:['isssue',isssueNumber,'comments'],
        queryFn:()=>getIssueComments(isssueNumber)
    })

    return {
        issueQuery,
        commentsQuery
    }

}