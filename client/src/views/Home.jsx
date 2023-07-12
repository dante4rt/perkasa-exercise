import ApexCharts from 'apexcharts';
import { useEffect, useState } from 'react';
import FirstRowCard from '../components/FirstRowCard';
import SecondRowCard from '../components/SecondRowCard';
import ThirdRowCard from '../components/ThirdRowCard';

export default function Home() {
    const getMainChartOptions = () => {
        let mainChartColors = {
            borderColor: '#F3F4F6',
            labelColor: '#6B7280',
            opacityFrom: 0.45,
            opacityTo: 0,
        }

        return {
            chart: {
                height: 420,
                type: 'area',
                fontFamily: 'Inter, sans-serif',
                foreColor: mainChartColors.labelColor,
                toolbar: {
                    show: false
                }
            },
            fill: {
                type: 'gradient',
                gradient: {
                    enabled: true,
                    opacityFrom: mainChartColors.opacityFrom,
                    opacityTo: mainChartColors.opacityTo
                }
            },
            dataLabels: {
                enabled: false
            },
            tooltip: {
                style: {
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif',
                },
            },
            grid: {
                show: true,
                borderColor: mainChartColors.borderColor,
                strokeDashArray: 1,
                padding: {
                    left: 35,
                    bottom: 15
                }
            },
            series: [
                {
                    name: 'Revenue',
                    data: [10, 8, 9, 7],
                    color: '#E02423'
                },
                // {
                //     name: 'Revenue (previous period)',
                //     data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
                //     color: '#FDBA8C'
                // }
            ],
            markers: {
                size: 5,
                strokeColors: '#ffffff',
                hover: {
                    size: undefined,
                    sizeOffset: 3
                }
            },
            xaxis: {
                categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
                labels: {
                    style: {
                        colors: [mainChartColors.labelColor],
                        fontSize: '14px',
                        fontWeight: 500,
                    },
                },
                axisBorder: {
                    color: mainChartColors.borderColor,
                },
                axisTicks: {
                    color: mainChartColors.borderColor,
                },
                crosshairs: {
                    show: true,
                    position: 'back',
                    stroke: {
                        color: mainChartColors.borderColor,
                        width: 1,
                        dashArray: 10,
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [mainChartColors.labelColor],
                        fontSize: '14px',
                        fontWeight: 500,
                    },
                    formatter: function (value) {
                        return '$' + value;
                    }
                },
            },
            legend: {
                fontSize: '14px',
                fontWeight: 500,
                fontFamily: 'Inter, sans-serif',
                labels: {
                    colors: [mainChartColors.labelColor]
                },
                itemMargin: {
                    horizontal: 10
                }
            },
            responsive: [
                {
                    breakpoint: 1024,
                    options: {
                        xaxis: {
                            labels: {
                                show: false
                            }
                        }
                    }
                }
            ]
        };

    }

    useEffect(() => {
        if (document.getElementById('main-chart')) {
            const chart = new ApexCharts(document.getElementById('main-chart'), getMainChartOptions());
            chart.render();
        }

        if (document.getElementById('new-products-chart')) {
            const options = {
                colors: ['#1A56DB', '#FDBA8C'],
                series: [
                    {
                        name: 'Quantity',
                        color: '#DAD6FF',
                        data: [
                            { x: 'Mo', y: 170 },
                            { x: 'Tu', y: 180 },
                            { x: 'We', y: 164 },
                            { x: 'Th', y: 145 },
                            { x: 'Fr', y: 194 },
                            { x: 'Sa', y: 170 },
                            { x: 'Su', y: 155 },
                        ]
                    }
                ],
                chart: {
                    type: 'bar',
                    height: '200px',
                    fontFamily: 'Inter, sans-serif',
                    foreColor: '#4B5563',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '90%',
                        borderRadius: 3
                    }
                },
                tooltip: {
                    shared: false,
                    intersect: false,
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Inter, sans-serif'
                    },
                },
                states: {
                    hover: {
                        filter: {
                            type: 'darken',
                            value: 1
                        }
                    }
                },
                stroke: {
                    show: true,
                    width: 5,
                    colors: ['transparent']
                },
                grid: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    floating: false,
                    labels: {
                        show: true
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                },
                yaxis: {
                    show: false
                },
                fill: {
                    opacity: 1
                }
            };

            const chart = new ApexCharts(document.getElementById('new-products-chart'), options);
            chart.render();
        }

        if (document.getElementById('new-products-chart-two')) {
            const options = {
                colors: ['#1A56DB', '#FDBA8C'],
                series: [
                    {
                        name: 'Quantity',
                        color: '#C3D8FF',
                        data: [
                            { x: 'Mo', y: 170 },
                            { x: 'Tu', y: 180 },
                            { x: 'We', y: 164 },
                            { x: 'Th', y: 145 },
                            { x: 'Fr', y: 194 },
                            { x: 'Sa', y: 170 },
                            { x: 'Su', y: 155 },
                        ]
                    }
                ],
                chart: {
                    type: 'bar',
                    height: '200px',
                    fontFamily: 'Inter, sans-serif',
                    foreColor: '#4B5563',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '90%',
                        borderRadius: 3
                    }
                },
                tooltip: {
                    shared: false,
                    intersect: false,
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Inter, sans-serif'
                    },
                },
                states: {
                    hover: {
                        filter: {
                            type: 'darken',
                            value: 1
                        }
                    }
                },
                stroke: {
                    show: true,
                    width: 5,
                    colors: ['transparent']
                },
                grid: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    floating: false,
                    labels: {
                        show: true
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                },
                yaxis: {
                    show: false
                },
                fill: {
                    opacity: 1
                }
            };

            const chart = new ApexCharts(document.getElementById('new-products-chart-two'), options);
            chart.render();
        }

        if (document.getElementById('sales-by-category')) {
            const options = {
                colors: ['#1A56DB', '#FDBA8C'],
                series: [
                    {
                        name: 'Desktop PC',
                        color: '#1A56DB',
                        data: [
                            { x: '01 Feb', y: 170 },
                            { x: '02 Feb', y: 180 },
                            { x: '03 Feb', y: 164 },
                            { x: '04 Feb', y: 145 },
                            { x: '05 Feb', y: 194 },
                            { x: '06 Feb', y: 170 },
                            { x: '07 Feb', y: 155 },
                        ]
                    },
                    {
                        name: 'Phones',
                        color: '#FDBA8C',
                        data: [
                            { x: '01 Feb', y: 120 },
                            { x: '02 Feb', y: 294 },
                            { x: '03 Feb', y: 167 },
                            { x: '04 Feb', y: 179 },
                            { x: '05 Feb', y: 245 },
                            { x: '06 Feb', y: 182 },
                            { x: '07 Feb', y: 143 }
                        ]
                    },
                    {
                        name: 'Gaming/Console',
                        color: '#17B0BD',
                        data: [
                            { x: '01 Feb', y: 220 },
                            { x: '02 Feb', y: 194 },
                            { x: '03 Feb', y: 217 },
                            { x: '04 Feb', y: 279 },
                            { x: '05 Feb', y: 215 },
                            { x: '06 Feb', y: 263 },
                            { x: '07 Feb', y: 183 }
                        ]
                    }
                ],
                chart: {
                    type: 'bar',
                    height: '420px',
                    fontFamily: 'Inter, sans-serif',
                    foreColor: '#4B5563',
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '90%',
                        borderRadius: 3
                    }
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Inter, sans-serif'
                    },
                },
                states: {
                    hover: {
                        filter: {
                            type: 'darken',
                            value: 1
                        }
                    }
                },
                stroke: {
                    show: true,
                    width: 5,
                    colors: ['transparent']
                },
                grid: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
                xaxis: {
                    floating: false,
                    labels: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                },
                yaxis: {
                    show: false
                },
                fill: {
                    opacity: 1
                }
            };

            const chart = new ApexCharts(document.getElementById('sales-by-category'), options);
            chart.render();
        }

        const getSignupsChartOptions = () => {
            let signupsChartColors = {}

            if (document.documentElement.classList.contains('dark')) {
                signupsChartColors = {
                    backgroundBarColors: ['#374151', '#374151', '#374151', '#374151', '#374151', '#374151', '#374151']
                };
            } else {
                signupsChartColors = {
                    backgroundBarColors: ['#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB', '#E5E7EB']
                };
            }

            return {
                series: [{
                    name: 'Users',
                    data: [1334, 2435, 1753, 1328, 1155, 1632, 1336]
                }],
                labels: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
                chart: {
                    type: 'bar',
                    height: '140px',
                    foreColor: '#4B5563',
                    fontFamily: 'Inter, sans-serif',
                    toolbar: {
                        show: false
                    }
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        color: '#1A56DB'
                    }
                },
                plotOptions: {
                    bar: {
                        columnWidth: '25%',
                        borderRadius: 3,
                        colors: {
                            backgroundBarColors: signupsChartColors.backgroundBarColors,
                            backgroundBarRadius: 3
                        },
                    },
                    dataLabels: {
                        hideOverflowingLabels: false
                    }
                },
                xaxis: {
                    floating: false,
                    labels: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    },
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    style: {
                        fontSize: '14px',
                        fontFamily: 'Inter, sans-serif'
                    }
                },
                states: {
                    hover: {
                        filter: {
                            type: 'darken',
                            value: 0.8
                        }
                    }
                },
                fill: {
                    opacity: 1
                },
                yaxis: {
                    show: false
                },
                grid: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                legend: {
                    show: false
                },
            };
        }

        if (document.getElementById('week-signups-chart')) {
            const chart = new ApexCharts(document.getElementById('week-signups-chart'), getSignupsChartOptions());
            chart.render();
        }

    }, [])

    return (
        <main className="pt-2 md:ml-64 h-auto bg-[#0f1728]">
            <div className="container bg-white pt-0 rounded-s-3xl">
                <div className='flex w-auto justify-between p-6'>
                    <div className='flex flex-col pl-3'>
                        <div className='font-bold text-lg text-blue-800'>COMPANY NAME</div>
                        <div className='pt-6'>
                            <div className='text-3xl font-normal pb-2'>Welcome, John</div>
                            <div className='font-light text-sm text-gray-500'>You're working at ABC Company</div>
                        </div>
                    </div>
                    <div>
                        {/* 2 */}
                        <div className="relative w-[100%] mr-24">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg>

                            </div>
                            <input
                                name="start"
                                type="text"
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="Search"
                            />
                        </div>
                    </div>
                </div>
                <div className="p-8">
                    <FirstRowCard />
                    <SecondRowCard />
                    <ThirdRowCard />
                </div>

            </div>
        </main>
    )
}