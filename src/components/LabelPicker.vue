<template>
    <div>
        <span v-for="label in data" :key="label.id" 
        :class="`badge rounded-pill m-1 label-picker ${selectedLabels.includes(label.name) ? 'label-active':''}`" 
        :style="{'border': `1px solid #${label.color}`, 'color': `#${label.color}`}"
        @click="$emit('onChange',label.name)" >
            {{label.name}}
        </span>
    </div>
</template>

<script lang="ts" setup>
import {useLabels} from '../composables/useLabels';
interface Props{
    selectedLabels:string[]
}
const {selectedLabels} = withDefaults(defineProps<Props>(), {
    selectedLabels:()=>[]
})
const {data} = useLabels();
</script>