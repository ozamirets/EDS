import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        type: 'column',
        backgroundColor: '#24282d',
    },
    title: {
        text: 'Monthly Average Tolerance',
        align: 'center',
        style: {
            color: '#d7dff6'
        },
    },
    legend: {
        itemStyle: {
            color: '#d7dff6'
        },
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true,
        labels: {
            style: {
                color: '#d7dff6',
            },
        },
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Tolerance',
            style: {
                color: '#d7dff6',
            },
        },
        labels: {
            style: {
                color: '#d7dff6',
            },
        },
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true,
        backgroundColor: '#d7dff6'
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4,
            194.1, 95.6, 54.4]

    }, {
        name: 'New York',
        color: '#df003c',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5,
            106.6, 92.3]

    }, {
        name: 'London',
        color: 'purple',
        data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3,
            51.2]

    }, {
        name: 'Berlin',
        color: 'green',
        data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8,
            51.1]

    }]
};

const ColumnChart = () => (
    <HighchartsReact highcharts={Highcharts} options={options}/>
);

export default ColumnChart;