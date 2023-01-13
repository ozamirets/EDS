import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#24282d',
    },
    title: {
        text: 'Browser market shares in April, 2022',
        align: 'center',
        style: {
            color: '#d7dff6'
        },
    },
    credits: {
        enabled: false
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                connectorColor: 'silver'
            }
        }
    },
    series: [{
        name: 'Share',
        data: [
            {name: 'Chrome', y: 73.24},
            {name: 'Edge', y: 12.93},
            {name: 'Firefox', y: 4.73},
            {name: 'Safari', y: 2.50},
            {name: 'Internet Explorer', y: 1.65},
            {name: 'Other', y: 4.93}
        ]
    }]
};


const PieChart = () => (
    <HighchartsReact highcharts={Highcharts} options={options}/>
);

export default PieChart;