import UiIndex from '../src/index.vue'
import xhtml from '@hai2007/browser/xhtml'
import Vue from 'vue'

describe('index.js: ', function() {

    beforeAll(function() {
        xhtml.append(document.body, "<div id='test'></div>")
    });

    it('vue组件测试', function() {

        let el = document.getElementById('test')

        let vm = new Vue({
            el,
            render: h => h(UiIndex)
        })

        // 进行测试
        expect((vm.$children[0].$refs.h2.innerText + "").trim()).toBe('默认的内容')

    })

})