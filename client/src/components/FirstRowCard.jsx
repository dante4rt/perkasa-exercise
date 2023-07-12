import { useEffect } from "react"
import ApexCharts from 'apexcharts';

export default function FirstRowCard() {
    const getTrafficChannelsChartOptions = () => {

        let trafficChannelsChartColors = {
            strokeColor: '#ffffff'
        }

        return {
            series: [55, 45],
            labels: ['Female', 'Male'],
            colors: ['#FF9EB3', '#0057FF'],
            chart: {
                type: 'donut',
                height: 270,
                fontFamily: 'Inter, sans-serif',
                toolbar: {
                    show: false
                },
            },
            responsive: [{
                breakpoint: 430,
                options: {
                    chart: {
                        height: 300
                    }
                }
            }],
            stroke: {
                colors: [trafficChannelsChartColors.strokeColor]
            },
            states: {
                hover: {
                    filter: {
                        type: 'darken',
                        value: 0.9
                    }
                }
            },
            tooltip: {
                shared: true,
                followCursor: false,
                fillSeriesColor: false,
                inverseOrder: true,
                style: {
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif'
                },
                x: {
                    show: true,
                    formatter: function (_, { seriesIndex, w }) {
                        const label = w.config.labels[seriesIndex];
                        return label
                    }
                },
                y: {
                    formatter: function (value) {
                        return value + '%';
                    }
                }
            },
            grid: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: true,
                position: 'bottom'
            },
        };
    }
    const getTrafficChannelsChartOptionsTwo = () => {

        let trafficChannelsChartColors = {
            strokeColor: '#ffffff'
        }

        return {
            series: [55, 45],
            labels: ['Not Married', 'Married'],
            colors: ['#6CCCFF', '#7C00FF'],
            chart: {
                type: 'donut',
                height: 270,
                fontFamily: 'Inter, sans-serif',
                toolbar: {
                    show: false
                },
            },
            responsive: [{
                breakpoint: 430,
                options: {
                    chart: {
                        height: 300
                    }
                }
            }],
            stroke: {
                colors: [trafficChannelsChartColors.strokeColor]
            },
            states: {
                hover: {
                    filter: {
                        type: 'darken',
                        value: 0.9
                    }
                }
            },
            tooltip: {
                shared: true,
                followCursor: false,
                fillSeriesColor: false,
                inverseOrder: true,
                style: {
                    fontSize: '14px',
                    fontFamily: 'Inter, sans-serif'
                },
                x: {
                    show: true,
                    formatter: function (_, { seriesIndex, w }) {
                        const label = w.config.labels[seriesIndex];
                        return label
                    }
                },
                y: {
                    formatter: function (value) {
                        return value + '%';
                    }
                }
            },
            grid: {
                show: false
            },
            dataLabels: {
                enabled: false
            },
            legend: {
                show: true,
                position: 'bottom'
            },
        };
    }

    useEffect(() => {
        if (document.getElementById('traffic-by-device')) {
            const chart = new ApexCharts(document.getElementById('traffic-by-device'), getTrafficChannelsChartOptions());
            chart.render();
        }
        if (document.getElementById('traffic-by-device-2')) {
            const chart = new ApexCharts(document.getElementById('traffic-by-device-2'), getTrafficChannelsChartOptionsTwo());
            chart.render();
        }
    }, [])
    return (
        <div className="h-auto">
            <div className="flex flex-col gap-4 bg-white border border-gray-200 rounded-lg shadow-md p-6 py-5 mb-6">
            <div>
                <h3 className="flex items-center mb-2 mt-2 text-3xl font-semibold text-gray-900 dark:text-white">
                    Company Overview
                </h3>
            </div>
            <div className='flex gap-6'>
                <div className="w-[65%] flex flex-col gap-5">
                    <div className="p-4 flex bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 h-48">

                        <div className="w-[100%]">
                            <h3 className="text-base font-semibold">
                                Total Employees
                            </h3>
                            <div className="flex pt-2">
                                <div className=" mt-4">
                                    <span className="text-xl font-bold leading-none text-gray-900 sm:text-5xl dark:text-white">
                                        2,420
                                    </span>
                                    <div
                                        className="inline-flex mt-6 items-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        data-dropdown-toggle="weekly-sales-dropdown"
                                    >
                                        <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
                                            <svg
                                                className="w-5 h-5"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                            425
                                        </div>
                                        <div className="pl-1">
                                            {" "}vs last month
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[100%] flex flex-row-reverse">
                                    <img src="./greenChart.png" className="object-cover" width={"60%"} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 flex bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800 h-48">

                        <div className="w-[100%]">
                            <h3 className="text-base font-semibold">
                                Total Department
                            </h3>
                            <div className="flex">
                                <div className="mt-4 pt-2">
                                    <span className="text-xl font-bold leading-none text-gray-900 sm:text-5xl dark:text-white">
                                        100
                                    </span>
                                    <div
                                        className="inline-flex mt-6 items-center text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                                        data-dropdown-toggle="weekly-sales-dropdown"
                                    >
                                        <div className="flex items-center justify-end flex-1 text-base font-medium text-red-500 dark:text-green-400">
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    clipRule="evenodd"
                                                    fillRule="evenodd"
                                                    d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z"
                                                />
                                            </svg>
                                            52
                                        </div>
                                        <div className="pl-1">
                                        {" "}vs last month
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[100%] flex flex-row-reverse">
                                    <img src="./redChart.png" className="object-cover" width={"60%"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[100%] bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="flex h-0 items-center justify-between mb-4 dark:border-gray-700">
                        <div>
                            <h3 className="text-base font-semibold">
                                Diversity
                            </h3>
                        </div>
                    </div>
                    <div className="flex mt-8 gap-4">
                        <div className="w-[50%] bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800 flex flex-col justify-center">
                        <h3 className="text-base font-semibold flex justify-center">
                                Gender
                            </h3>
                            <div id="traffic-by-device" />
                        </div>
                        <div className="w-[50%] bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                        <h3 className="text-base font-semibold flex justify-center">
                                Status
                            </h3>
                            <div id="traffic-by-device-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}