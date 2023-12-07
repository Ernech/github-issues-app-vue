<template>
    <div class="row mb-5">
        <div class="col-12 mb-3">
            <router-link to="./issues/list">Go Back</router-link>
        </div>
        <span v-if="issueQuery.isLoading.value && commentsQuery.isLoading.value">Loading...</span>
        <template v-else-if="!issue">
            <router-link to="/issues/list" />
        </template>
        <template v-else>
            <h2>{{issue.title}}</h2>
            <IssueComent :issue="issue"/>
            <IssueComent v-for="issue in commentsQuery.data.value" :key="issue.id" :issue="issue"/>
            
            
        </template>
        
        
    </div>
</template>
<script lang="ts" setup>
import IssueComent from '../components/IssueComent.vue';
import { useIssue } from '../composables/useIssue';
import { useRoute } from 'vue-router';
const route = useRoute();
const {issueQuery,commentsQuery} = useIssue(Number(route.params.id));
const {data:issue} = issueQuery
</script>