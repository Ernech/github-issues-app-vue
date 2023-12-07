<template>
    <div class="col-12">
        <div class="card border-white mt-2">
            <div class="card-header bg-dark text-light">
                <img :src="issue.user.avatar_url" alt="User Avatar" className="avatar" />
                <span className="mx-2">{{issue.user.login}}</span>
            </div>
            <div class="card-body text-dark">
                <p>{{issue.body}}</p>
            </div>

        </div>        
    </div>
</template>
<script lang="ts" setup>
import { Issue } from '../interfaces/issue';

interface Props{
    issue:Issue
}
const {issue} =defineProps<Props>()
</script>
