import Vue from 'vue';
import Chart from 'chart.js';

export default Vue.extend({
    template: `
        <div>
            <canvas width="800" height="600" v-el:canvas></canvas>
            {{{ legend }}} 
        </div>
    `,

    props: ['url'],

    data() {
        return {
            legend: ''
        };
    },

    ready() {
        this.$http.get(this.url)
            .then(response => {
                const data = response.data;

                this.render({
                    labels: Object.keys(data),
                    datasets: [
                        {
                            label: "Revenue",
                            fillColor: "rgba(220,220,220,0.2)",
                            strokeColor: "rgba(220,220,220,1)",
                            pointColor: "rgba(220,220,220,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(220,220,220,1)",
                            data: Object.keys(data).map(key => data[key])
                        }
                    ]
                });
            });
    },

    methods: {
        render(data) {
            const chart = new Chart(
                this.$els.canvas.getContext('2d')
            ).Line(data);

            this.legend = chart.generateLegend();
        }
    }
});
