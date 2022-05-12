<template>
    <div class="easy-slider">
        <div class="slider-num">
            <h3>{{chosedNum}}</h3>
        </div>
        <div class="slider-content" ref="slider">
            <div class="slider-position" :style="{width: movLeft+'px'}">
                 <i class="circle" :style="{top: iconTop, left: movLeft+'px'}" 
                    @touchstart.stop.prevent="startMove" 
                    @touchmove="moving" 
                    @touchend="endMove"></i>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent, onMounted, ref, reactive } from 'vue'

export default defineComponent({
    props:{
       startNum:{
           type: Number,
           default: 0
       },
       step:{
           type: Number,
           default: 100
       },
       stepNum:{
           type: Number,
           default: 4
       },
    },
    setup(props) {
        const iconTop = '-0.3rem';  /*-(icon高度/2-slider高度/2)*/
        const pos = ref(0);
        const {startNum, step, stepNum} = reactive(props);
        const endNum = ref(startNum + step * stepNum);
        const chosedNum = ref(0);
        const sliderUnit = ref(0);
        const movLeft = ref(0);
        let slider = ref(null);

        const startMove = (evt)=>{
            pos.value = evt.changedTouches[0].clientX;
        }
        const moving = (evt)=>{
            if(evt.changedTouches[0]){
                movLeft.value = evt.changedTouches[0].clientX - pos.value;
                if(evt.changedTouches[0].clientX + 16  > slider.value.len){
                    movLeft.value = slider.value.len - 16;
                    //pos.value = slider.value.len;
                }
                else if(evt.changedTouches[0].clientX < 0){
                    movLeft.value = 0;
                    //pos.value = 0;
                }
                chosedNum.value = movLeft.value/sliderUnit.value;
            }

        }
        const endMove = (evt)=>{
            
        }
        onMounted(() => {
            slider.value.len = parseInt(slider.value.clientWidth,10);
            sliderUnit.value = parseInt(slider.value.len,10)/(endNum.value-startNum);
        })
        return{
            iconTop,
            endNum,
            chosedNum,
            slider,
            movLeft,
            startMove,
            moving,
            endMove
        }
    },
})
</script>
<style lang="scss" src="./index.scss" scoped></style>
