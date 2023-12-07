<template>
    <div class="card border-white">
        <div class="card-header bg-dark">
            <div class="nav nav-pills card-header-pills">
                <li class="nav-item" @click="$emit('onStateChange',undefined)">
                    <a :class="`nav-link ${!state ? 'active' : ''}`">All</a>
                </li>
                <li class="nav-item" @click="$emit('onStateChange',State.Open)">
                   <a :class="`nav-link ${state ===State.Open ? 'active' : ''}`">Opened</a>
                </li>
                <li class="nav-item" @click="$emit('onStateChange',State.Close)">
                    <a :class="`nav-link ${state === State.Close ? 'active' : ''}`">Closed</a>
                </li>
            </div>
        </div>
        <div class="card-body text-dark">
            <IssueItem v-for="issue in data" :key="issue.id" :issue="issue"/>
        </div>
        
    </div>
</template>
<script lang="ts" setup>
import { Issue } from '../interfaces/issue';
import IssueItem from './IssueItem.vue';
import { State } from '../interfaces/issue';
import { ref } from 'vue';
interface Props{
    issues:Issue[],
    state?:State
}
const {issues} = defineProps<Props>()
const data = ref(issues);

</script>