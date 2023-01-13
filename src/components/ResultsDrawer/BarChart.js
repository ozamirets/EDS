import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        type: 'areaspline',
        backgroundColor: '#24282d',
    },
    title: {
        text: 'Alert statistics',
        align: 'center',
        style: {
            color: '#d7dff6'
        },
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 120,
        y: 70,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
        labels: {
            style: {
                color: '#d7dff6',
            },
        },
    },
    yAxis: {
        labels: {
            style: {
                color: '#d7dff6',
            },
        },
        title: {
            text: 'Quantity',
            style: {
                color: '#d7dff6',
            },
        }
    },
    tooltip: {
        shared: true,
        headerFormat: '<b>Warnings quantity {point.x}</b><br>'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        series: {
            pointStart: 2000
        },
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: [{
        name: 'Alerts',
        color: '#f4ab62',
        data:
            [
                38000,
                37300,
                37892,
                38564,
                36770,
                36026,
                34978,
                35657,
                35620,
                35971,
                36409,
                36435,
                34643,
                34956,
                33199,
                31136,
                30835,
                31611,
                30666,
                30319,
                31766
            ]
    }, {
        name: 'Errors',
        color: '#df003c',
        data:
            [
                22534,
                23599,
                24533,
                25195,
                25896,
                27635,
                29173,
                32646,
                35686,
                37709,
                39143,
                36829,
                35031,
                36202,
                35140,
                33718,
                37773,
                42556,
                43820,
                46445,
                50048
            ]
    }]
};


const BarChart = () => (
    <HighchartsReact highcharts={Highcharts} options={options} />
);

export default BarChart;