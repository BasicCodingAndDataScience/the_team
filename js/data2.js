var myConfig =
        {
            "type": "line",
            "utc": true,
            "title": {
                "text": "Homeless Veterans",
                "font-size": "24px",
                "adjust-layout":true
            },
            "plotarea": {
                "margin": "dynamic 45 60 dynamic",
            },
            "legend": {
                "layout": "float",
                "background-color": "none",
                "border-width": 0,
                "shadow": 0,
                "align":"center",
                "adjust-layout":true,
                "item":{
                  "padding": 7,
                  "marginRight": 17,
                  "cursor":"hand"
                }
                     },
            "scale-x": {
               "labels" : ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016"],
                "label": {
                    "text": "Year",
                },
                "minor-ticks": 0,
                "thousands-separator": ","
            },
            "crosshair-x": {
                "line-color": "#efefef",
                "plot-label": {
                    "border-radius": "5px",
                    "border-width": "1px",
                    "border-color": "#f6f7f8",
                    "padding": "10px",
                    "font-weight": "bold"
                },
                "scale-label": {
                    "font-color": "#000",
                    "background-color": "#f6f7f8",
                    "border-radius": "5px"
                }
            },
            "tooltip": {
                "visible": false
            },
            "plot": {
                "highlight":true,
                "tooltip-text": "%t views: %v<br>%k",
                "shadow": 0,
                "line-width": "2px",
                "marker": {
                    "type": "circle",
                    "size": 3
                },
                "highlight-state": {
                    "line-width":3
                },
                "animation":{
                  "effect":1,
                  "sequence":2,
                  "speed":100,
                }
            },
            "series": [
                {
                    "values": [
                        73367,
                        74087,
                        65455,
                        60579,
                        55619,
                        49689,
                        47725,
                        39471

                    ],
                    "text": "Homeless Veterans",
                    "line-color": "#007790",
                    "legend-item":{
                      "background-color": "#007790",
                      "borderRadius":5,
                       "font-color":"white"
                    },
                    "legend-marker": {
                        "visible":false
                    },
                    "marker": {
                        "background-color": "#007790",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69dbf1"
                    },
                    "highlight-marker":{
                      "size":6,
                      "background-color": "#007790",
                    }
                },
                {
                    "values": [
                        43409,
                        43437,
                        40033,
                        35143,
                        34909,
                        32119,
                        31505,
                        26404

                    ],
                    "text": "Sheltered Veterans",
                    "line-color": "#009872",
                    "legend-item":{
                      "background-color": "#009872",
                      "borderRadius":5,
                       "font-color":"white"
                    },
                    "legend-marker": {
                        "visible":false
                    },
                    "marker": {
                        "background-color": "#009872",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#69f2d0"
                    },
                    "highlight-marker":{
                      "size":6,
                      "background-color": "#009872",
                    }
                },
                {
                    "values": [
                        29958,
                        30650,
                        25422,
                        25436,
                        20710,
                        17570,
                        16220,
                        13067

                    ],
                    "text": "Unsheltered Veterans",
                    "line-color": "#da534d",
                    "legend-item":{
                      "background-color": "#da534d",
                      "borderRadius":5,
                      "font-color":"white"
                    },
                    "legend-marker": {
                        "visible":false
                    },
                    "marker": {
                        "background-color": "#da534d",
                        "border-width": 1,
                        "shadow": 0,
                        "border-color": "#faa39f"
                    },
                    "highlight-marker":{
                      "size":6,
                      "background-color": "#da534d",
                    }
                }
            ]
        };

zingchart.render({
	id : 'myChart2',
	data : myConfig,
	height: '100%',
	width: '100%'
});
