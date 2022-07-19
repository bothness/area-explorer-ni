const e={light:{name:"light",text:"#222",muted:"#777",pale:"#f0f0f0",background:"#fff"},dark:{name:"dark",text:"#fff",muted:"#bbb",pale:"#333",background:"#222"}},t={options:"https://raw.githubusercontent.com/MaireBrolly/test_jsons/main/v9/places_test.csv",places:"https://raw.githubusercontent.com/MaireBrolly/test_jsons/main/v13/"},a={dea:{name:"District Electoral Area",pl:"District Electoral Areas"},lgd:{name:"Local Government District",pl:"Districts"},ctry:{name:"Country",pl:"Countries"}},o={age10yr:[{code:"0-9"},{code:"10-19"},{code:"20-29"},{code:"30-39"},{code:"40-49"},{code:"50-59"},{code:"60-69"},{code:["70-79","80plus"],label:"70+"}],economic:[{code:"employee"},{code:"self-employed"},{code:"student",label:"student (employed)"},{code:"unemployed"},{code:"inactive"}],health:[{code:"good"},{code:"fair"},{code:"bad"}],topic_new:[{code:"bread"},{code:"milk"},{code:"ham"},{code:"cheese"},{code:"eggs"}],ethnicity:[{code:"white",label:"White"},{code:"asian",label:"Asian"},{code:"black",label:"Black"},{code:"mixed",label:"Mixed"},{code:"other",label:"Other"}],population:[{code:"female"},{code:"male"}],tenure:[{code:"owned",label:"owner occupied"},{code:"shared_ownership",label:"shared ownership"},{code:"rented_private",label:"rented (private)"},{code:"rented_social",label:"rented (social)"},{code:"rent_free",label:"rent (free)"}],travel:[{code:"car_van",label:"car and van"},{code:"bus"},{code:"bicycle"},{code:"foot",label:"on foot"},{code:"home",label:"home worker"},{code:"other"}]},c="https://raw.githubusercontent.com/kham1508/map_tiles/main/basemap_styles/style-omt.json",l={crd:{id:"crd",promoteId:"areacd",type:"vector",url:"https://raw.githubusercontent.com/kham1508/map_tiles/main/lgd2012/{z}/{x}/{y}.pbf",maxzoom:12},dea:{id:"dea",promoteId:"areacd",type:"vector",url:"https://raw.githubusercontent.com/kham1508/map_tiles/main/dea/{z}/{x}/{y}.pbf",minzoom:6,maxzoom:12}},r={lgd:{source:"crd",sourceLayer:"lgd2012",code:"areacd",name:"areanm"},dea:{source:"dea",sourceLayer:"dea",code:"areacd",name:"areanm"}},d={fill:{"fill-color":"rgba(255,255,255,0)","fill-opacity":0},line:{"line-color":"rgba(255,255,255,0)","line-width":1,"line-opacity":0},"fill-active":{"fill-color":["case",["==",["feature-state","selected"],!0],"rgba(255,255,255,0)","grey"],"fill-opacity":["case",["==",["feature-state","hovered"],!0],.3,["!=",["feature-state","selected"],!0],.1,0]},"fill-self":{"fill-color":["case",["==",["feature-state","selected"],!0],"rgb(17,140,123)","grey"],"fill-opacity":["case",["==",["feature-state","hovered"],!0],.3,.1]},"fill-child":{"fill-color":["case",["==",["feature-state","highlighted"],!0],"rgb(17,140,123)","rgba(255,255,255,0)"],"fill-opacity":["case",["==",["feature-state","hovered"],!0],.3,["==",["feature-state","highlighted"],!0],.1,0]},"line-active":{"line-color":["case",["==",["feature-state","selected"],!0],"rgb(17,140,123)","grey"],"line-width":2,"line-opacity":1},"line-self":{"line-color":"rgb(17,140,123)","line-width":2,"line-opacity":["case",["==",["feature-state","selected"],!0],1,0]},"line-child":{"line-color":"rgb(17,140,123)","line-width":1,"line-opacity":["case",["==",["feature-state","highlighted"],!0],1,0]}};export{a,c as b,o as c,d,l as e,r as m,e as t,t as u};
