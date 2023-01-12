import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import StorageIcon from '@mui/icons-material/Storage';
import ApiIcon from '@mui/icons-material/Api';
import SummarizeIcon from '@mui/icons-material/Summarize';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import EdgesensorLowIcon from '@mui/icons-material/EdgesensorLow';
import EdgesensorHighIcon from '@mui/icons-material/EdgesensorHigh';
import HubIcon from '@mui/icons-material/Hub';
import DnsIcon from '@mui/icons-material/Dns';
import HighQualityIcon from '@mui/icons-material/HighQuality';
import TollIcon from '@mui/icons-material/Toll';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import SignalCellularAlt2BarIcon from '@mui/icons-material/SignalCellularAlt2Bar';
import TimelapseIcon from '@mui/icons-material/Timelapse';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import TimerIcon from '@mui/icons-material/Timer';

const BRDs = [
    {
        name: 'BRD-23-G4',
        description: 'Just published BRD',
        icon: <PublishedWithChangesIcon sx={{ color: 'info.green.main' }} />,
        timeSelectors: [
            {
                name: 'Frequency',
                icon: <SignalCellularAlt2BarIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Duration',
                icon: <TimelapseIcon />,
                domainSelectors: [
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                ]
            },
            {
                name: 'Scheduling',
                icon: <ScheduleIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]

            },
            {
                name: 'Delay',
                icon: <MoreTimeIcon />,
                domainSelectors: [
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                name: 'Timeout',
                icon: <TimerIcon />,
                domainSelectors: [
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
        ]},
    {
        name: 'BRD-21-G4',
        description: 'Pending',
        icon: <QueryBuilderIcon sx={{ color: '#f4ab62' }} />,
        timeSelectors: [
            {
                name: 'Delay',
                icon: <MoreTimeIcon />,
                domainSelectors: [
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                name: 'Timeout',
                icon: <TimerIcon />,
                domainSelectors: [
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Scheduling',
                icon: <ScheduleIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]

            },
        ],
    },
    {
        name: 'BRD-25-J5',
        description: '90 Days Churn customer',
        icon: <ModelTrainingIcon sx={{ color: '#3fb2d2' }} />,
        timeSelectors: [
            {
                name: 'Scheduling',
                icon: <ScheduleIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]

            },
            {
                name: 'Delay',
                icon: <MoreTimeIcon />,
                domainSelectors: [
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                name: 'Frequency',
                icon: <SignalCellularAlt2BarIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Duration',
                icon: <TimelapseIcon />,
                domainSelectors: [
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                ]
            },
        ],
    },
    {
        name: 'BRD-23-G2',
        description: 'Just published BRD',
        icon: <PublishedWithChangesIcon sx={{ color: 'info.green.main' }} />,
        timeSelectors: [
            {
                name: 'Frequency',
                icon: <SignalCellularAlt2BarIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Duration',
                icon: <TimelapseIcon />,
                domainSelectors: [
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                ]
            },
            {
                name: 'Scheduling',
                icon: <ScheduleIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]

            },
            {
                name: 'Delay',
                icon: <MoreTimeIcon />,
                domainSelectors: [
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                name: 'Timeout',
                icon: <TimerIcon />,
                domainSelectors: [
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
        ],
    },
    {
        name: 'BRD-23-G1',
        description: 'Just published BRD',
        icon: <PublishedWithChangesIcon sx={{ color: 'info.green.main' }} />,
        timeSelectors: [
            {
                name: 'Frequency',
                icon: <SignalCellularAlt2BarIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Duration',
                icon: <TimelapseIcon />,
                domainSelectors: [
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                ]
            },
            {
                name: 'Scheduling',
                icon: <ScheduleIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]

            },
            {
                name: 'Delay',
                icon: <MoreTimeIcon />,
                domainSelectors: [
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                name: 'Timeout',
                icon: <TimerIcon />,
                domainSelectors: [
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
        ],
    },
    {
        name: 'BRD-21-G2',
        description: 'Pending',
        icon: <QueryBuilderIcon sx={{ color: '#f4ab62' }} />,
        timeSelectors: [
            {
                name: 'Delay',
                icon: <MoreTimeIcon />,
                domainSelectors: [
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                name: 'Timeout',
                icon: <TimerIcon />,
                domainSelectors: [
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Scheduling',
                icon: <ScheduleIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]

            },
        ],
    },
    {
        name: 'BRD-25-J2',
        description: 'Warning',
        icon: <WarningAmberIcon sx={{ color: '#df003c' }} />,
        timeSelectors: [
            {
                name: 'Delay',
                icon: <MoreTimeIcon />,
                domainSelectors: [
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                name: 'Scheduling',
                icon: <ScheduleIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]

            },
            {
                name: 'Frequency',
                icon: <SignalCellularAlt2BarIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Timeout',
                icon: <TimerIcon />,
                domainSelectors: [
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
        ],
    },
    {
        name: 'BRD-25-J1',
        description: 'Warning',
        icon: <WarningAmberIcon sx={{ color: '#df003c' }} />,
        timeSelectors: [
            {
                name: 'Delay',
                icon: <MoreTimeIcon />,
                domainSelectors: [
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },

                ]
            },
            {
                name: 'Scheduling',
                icon: <ScheduleIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]

            },
            {
                name: 'Frequency',
                icon: <SignalCellularAlt2BarIcon />,
                domainSelectors: [
                    {
                        name: 'Quality',
                        icon: <HighQualityIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name: 'Timeout',
                icon: <TimerIcon />,
                domainSelectors: [
                    {
                        name: 'Quantity',
                        icon: <ProductionQuantityLimitsIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Loading',
                        icon: <HourglassBottomIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                    {
                        name: 'Tolerance',
                        icon: <TollIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Edge',
                                icon: <EdgesensorLowIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Far edge',
                                icon: <EdgesensorHighIcon />,
                                dataProducts: [
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ],
                    },
                    {
                        name: 'Volume',
                        icon: <EqualizerIcon />,
                        deploymentSelectors: [
                            {
                                name: 'Core',
                                icon: <HubIcon />,
                                dataProducts: [
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                            {
                                name: 'Servers',
                                icon: <DnsIcon />,
                                dataProducts: [
                                    {name: 'Report', icon: <SummarizeIcon />},
                                    {name: 'Alert', icon: <WarningAmberIcon />},
                                    {name: 'REST', icon: <ApiIcon />},
                                    {name: 'Database', icon: <StorageIcon />},
                                    {name: 'Configuration', icon: <SettingsSuggestIcon />},
                                ]
                            },
                        ]
                    },
                ]
            },
        ],
    },
];

export default BRDs;