import { useQuery } from "@tanstack/vue-query"
import githubApi from "../api/githubApi"
import { Label } from "../interfaces/label"

const getLabels = async():Promise<Label[]>=>{

    const {data} = await githubApi.get<Label[]>('/labels?per_page=50')
    return data
}


export const useLabels = ()=>{

    const labelsQuery = useQuery({
        queryKey:['labels'],
        queryFn: getLabels
    });

    
    return labelsQuery;

}


