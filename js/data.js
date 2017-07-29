var myConfig = {
backgroundColor:'#FBFCFE',
 	type: "ring",
 	title: {
 	  text: "Homelessness by Age",
 	  fontFamily: 'Lato',
 	  fontSize: 14,
 	  // border: "1px solid black",
 	  padding: "15",
 	  fontColor : "#1E5D9E",
 	},
 	subtitle: {
 	  text: "2016",
 	  fontFamily: 'Lato',
 	  fontSize: 12,
 	  fontColor: "#777",
 	  padding: "5"
 	},
 	plot: {
 	  slice:'50%',
 	  borderWidth:0,
 	  backgroundColor:'#FBFCFE',
 	  animation:{
 	    effect:2,
 	    sequence:3
 	  },
 	  valueBox: [
 	    {
 	      type: 'all',
 	      text: '%t',
 	      placement: 'out'
 	    },
 	    {
 	      type: 'all',
 	      text: '%npv%',
 	      placement: 'in'
 	    }
 	  ]
 	},
  tooltip:{
 	    fontSize:16,
 	    anchor:'c',
 	    x:'50%',
 	    y:'50%',
 	    sticky:true,
 	    backgroundColor:'none',
 	    borderWidth:0,
 	    thousandsSeparator:',',
 	    text:'<span style="color:%color">Age: %t</span><br><span style="color:%color">Population: %v</span>',
      mediaRules:[
        {
            maxWidth:500,
       	    y:'54%',
        }
      ]
  },
 	plotarea: {
 	  backgroundColor: 'transparent',
 	  borderWidth: 0,
 	  borderRadius: "0 0 0 10",
 	  margin: "70 0 10 0"
 	},
 	legend : {
    toggleAction:'remove',
    backgroundColor:'#FBFCFE',
    borderWidth:0,
    adjustLayout:true,
    align:'center',
    verticalAlign:'bottom',
    marker: {
        type:'circle',
        cursor:'pointer',
        borderWidth:0,
        size:5
    },
    item: {
        fontColor: "#777",
        cursor:'pointer',
        offsetX:-6,
        fontSize:12
    },
    mediaRules:[
        {
            maxWidth:500,
            visible:false
        }
    ]
 	},
 	scaleR:{
 	  refAngle:270
 	},
	series : [
		{
		  text: "Under 18",
			values : [120819],
			lineColor: "#00BAF2",
			backgroundColor: "#00BAF2",
			lineWidth: 1,
			marker: {
			  backgroundColor: '#00BAF2'
			}
		},
		{
		  text: "18 to 24",
			values : [50001],
			lineColor: "#E80C60",
			backgroundColor: "#E80C60",
			lineWidth: 1,
			marker: {
			  backgroundColor: '#E80C60'
			}
		},
		{
		  text: "Over 24",
			values : [379108],
			lineColor: "#9B26AF",
			backgroundColor: "#9B26AF",
			lineWidth: 1,
			marker: {
			  backgroundColor: '#9B26AF'
			}
		}
	]
};

zingchart.render({
	id : 'myChart',
  data: {
    gui:{
      contextMenu:{
        button:{
          visible: true,
          lineColor: "#2D66A4",
          backgroundColor: "#2D66A4"
        },
        gear: {
          alpha: 1,
          backgroundColor: "#2D66A4"
        },
        position: "right",
        backgroundColor:"#306EAA", /*sets background for entire contextMenu*/
        docked: true,
        item:{
          backgroundColor:"#306EAA",
          borderColor:"#306EAA",
          borderWidth: 0,
          fontFamily: "Lato",
          color:"#fff"
        }

      },
    },
    graphset: [myConfig]
  },
	height: '499',
	width: '99%'
});
