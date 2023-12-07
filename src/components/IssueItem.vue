<template>
    <div class="carb bg-light text-dark mb-2 issue" @click="navigateToIssue(issue.number)">
        <div class="card-body d-flex align-items-center">

            <i v-if="issue.state === 'open'" class="pi pi-info-circle" style="font-size: 1rem ; color: red; margin-right: 10px;" />
            <i v-else class="pi pi-check-circle" style="font-size: 1rem ; color: green; margin-right: 10px;" />
            
            <div class="d-flex flex-column flex-fill px-2">
                <span>{{issue.title}} <br/>State:{{issue.state}}</span>
                <span class="issue-subinfo">#{{issue.number}} opened {{timeSince(issue.created_at)}} <span class="fw-bold">{{issue.user.login}}</span></span>
               <div>

                   <span v-for="label in issue.labels" :key="label.id"
                   class="badge rounded-pill m-1"
                   :style="{'background-color': `#${label.color}`, 'color': `black`}"
                   >{{label.name}}</span>
                </div>
            </div>
            
            <div className='d-flex align-items-center'>
                <img :src="issue.user.avatar_url" alt="User Avatar" className="avatar" />
                <span className='px-2'>{{issue.comments}}</span>
                <i class="pi pi-comment" style="font-size: 1rem" />
            </div>
        </div>

    </div>
</template>
<script setup lang="ts">
import { Issue } from '../interfaces/issue';
import {timeSince} from '../helpers/time-since';
import { useRouter } from 'vue-router';
const router = useRouter()
interface Props{
    issue:Issue
}

const {issue} = defineProps<Props>()
const navigateToIssue=(issueNumber:number)=>{
    router.push(`/issues/issue/${issueNumber}`);
}
</script>