<template>
    <div class="row mt-5">
        <div class="col-8">
            <span v-if="issuesQuery.isLoading.value">Loading...</span>
            <template v-else>
                <IssueList :issues="issues || []" :state="state" @onStateChange="(newState) => onStateChange(newState)" />
                <div className='d-flex mt-2 justify-content-between align-items-center'>
                    <button class='btn btn-outline-primary' @click="prevPage" :disabled="issuesQuery.isFetching.value">
                        Prev
                    </button>
                    <span v-if="issuesQuery.isFetching.value">Loading...</span>
                    <span v-else>{{ page }}</span>
                    <button class='btn btn-outline-primary' @click="nextPage"
                        :disabled="issuesQuery.isFetching.value">Next</button>
                </div>

            </template>

        </div>
        <div class="col-4">
            <LabelPicker @onChange="(label) => onLabelChange(label)" :selectedLabels="selectedLabels" />

        </div>

    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import IssueList from '../components/IssueList.vue';
import LabelPicker from '../components/LabelPicker.vue';
import { useIssues } from '../composables/useIssues';
import { State } from '../interfaces/issue';
const selectedLabels = ref<string[]>([]);
const state = ref<State>();
const { issuesQuery, nextPage, prevPage, page } = useIssues({ labels: selectedLabels.value, state });
const { data: issues } = issuesQuery;

const onLabelChange = (labelName: string): void => {
    selectedLabels.value.includes(labelName) ?
        selectedLabels.value = selectedLabels.value.filter(label => label !== labelName) :
        selectedLabels.value.push(labelName);

}
const onStateChange = (newState: State) => {
    state.value = newState;
}
</script>