class Test {
    constructor(desc, fn, io, custom) {
        this.desc = desc;
        this.fn = fn;
        this.io = io;
        this.custom = custom;
    }

    performTest(input){
        return this.fn.apply(this.fn, input);
    }

    get testsPass(){
        if (this.custom){
            return this.custom();
        }

        let result = true;

        for (let test of this.io){
            let fnResult = this.performTest(test[0]);

            result = result && fnResult === test[1];
        }

        return result;
    }

    get testData(){
        if (this.custom){
            return this.io();
        }

        let data = [];

        for (let [idx, test] of this.io.entries()){
            let fnResult = this.performTest(test[0]);

            data.push({
                index: idx,
                input: test[0],
                expected: test[1],
                output: typeof fnResult === typeof undefined ? "null" : fnResult,
                success: fnResult === test[1]
            });
        }

        return data;
    }

    get slug(){
        return this.desc.replace(/\s/g, '').toLowerCase();
    }

    get signature (){
        if (this.custom){
            return "";
        }

        let text = this.fn.toString();
        let sig = (/\(.*\)/).exec(text)[0];
        return this.fn.name + " " + sig;
    }
}

Vue.component('test', {
    props: ['test'],
    template:
    `<div class="alert alert-primary" role="alert">
        <a class="btn btn-sm btn-secondary float-right" data-toggle="collapse" :href="'#'+test.slug" v-if="test.testData && test.testData.length">
            <i class="fa fa-plus-circle"></i> Detalhes
        </a>

        <h4 :class="test.testsPass ? 'text-success' : 'text-danger'">
            {{test.desc}}
            <code v-if="test.signature">{{test.signature}}</code>                        
        </h4>

        <div :id="test.slug" class="collapse">
            <div v-for="data in test.testData" style="margin-bottom: 1em">
                <h5 :class="data.success ? 'text-success' : 'text-danger'">Caso {{data.index}}</h5>
                <template v-if="data.input && data.input.length">
                    <b>Input:</b> <code>{{data.input.toString()}}</code><br>
                </template>
                
                <b>Output:</b> <code>{{data.output.toString()}}</code>
                
                <template v-if="!data.success">
                    <br>
                    <b>Expected:</b> <code>{{data.expected.toString()}}</code>
                </template>
            </div>
        </div>
    </div>`
});