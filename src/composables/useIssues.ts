import { useQuery } from "@tanstack/vue-query";
import githubApi from "../api/githubApi"
import { Issue, State } from "../interfaces/issue";
import { Ref, ref } from "vue";


interface Props{
    page?:number;
    labels:string[];
    state?:Ref<State | undefined>
}

const getIssues=async({page=1,labels,state}:Props):Promise<Issue[]>=>{

    const params = new URLSearchParams();

   if(state && state.value) params.append('state',state?.value);
    if(labels.length>0){
        const labelsParams = labels.join(',')
        params.append('labels',labelsParams);
    }

    params.append('per_page','5');
    params.append('page',page.toString())

    const {data} = await githubApi.get<Issue[]>('/issues',{params});
    return data;
}


export const useIssues=({labels,state}:Props)=>{

    
    const page = ref(1);
    
    const issuesQuery = useQuery({
        queryKey:['issues',{ state, labels, page}],
        queryFn: ()=>getIssues({page:page.value,labels,state})
    });
    
    const nextPage =()=>{
        page.value+=1;
        
    }

    const prevPage = ()=>{
        if(page.value>1) page.value-=1;
    }
    return {
        prevPage,
        nextPage,
        issuesQuery,
        page,
        labels,
        state
    };
} 

