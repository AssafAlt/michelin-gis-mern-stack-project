"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[807],{4815:function(e,n,r){r.d(n,{c:function(){return a}});var a=["Gaillimh/Galway","Lios D\xfain Bhearna/Lisdoonvarna","Ballydehob","Baltimore","Corcaigh/Cork","City Centre","Cill Chainnigh/Kilkenny","Blackrock","Baile Mhic And\xe1in/Thomastown","Aird Mh\xf3r/Ardmore","Waternish","Dalry","Belfast","Peat Inn","Leith","Edinburgh","Anstruther","Grasmere","Bowness-on-Windermere","Cartmel","Newcastle upon Tyne","Menai Bridge/Porthaethwy","Langho","Pateley Bridge","Birkenhead","Fence","Llandrillo","Machynlleth","Oldstead","Chester","Harome","Leeds","Montgomery/Trefaldwyn","South Dalton","Baslow","Winteringham","Ilfracombe","Llanddewi Skirrid","Padstow","Birmingham","Port Isaac","Hampton in Arden","Mountsorrel","Whitebrook","Penarth","Portscatho","Kenilworth","Knowstone","Stratford-upon-Avon","Cheltenham","Chagford","Upper Hambleton","Bristol","Chew Magna","Malmesbury","Castle Combe","Colerne","Bath","Lympstone","Hunstanton","Torquay","Oxford","Murcott","Morston","East Chisenbury","Newbury","Marlow","Burchett's Green","Shinfield","Bray","Winchester","Bagshot","Ascot","Egham","Kew","Chiswick","Little Dunmow","Hammersmith","Kensington","Marylebone","Regent's Park","Fulham","Bloomsbury","Mayfair","Soho","Belgravia","Ripley","Westminster","Chelsea","Saint James's","Victoria","Clerkenwell","London","Shoreditch","Finsbury","Spitalfields","City of London","Bermondsey","Clapham Common","Wandsworth","Dorking","Horsham","Gravetye","Seasalter","Biddenden","Fordwich","Saint Helier/Saint-H\xe9lier","Auchterarder","Summerhouse","Aughton","Nottingham","Great Milton","Cambridge","North Kensington","Hyde Park"]},8128:function(e,n,r){r.d(n,{$:function(){return a}});var a=["Creative","Classic cuisine","Modern cuisine","Japanese","Modern British","Creative British","French","Seafood","Classic French","Spanish","Asian influences","Traditional British","Regional cuisine","Italian","Indian","Mediterranean cuisine","Chinese","Creative French","Scandinavian","Modern French"]},5807:function(e,n,r){r.r(n);var a=r(1413),t=r(2791),i=r(1134),l=r(9434),s=r(7689),o=r(9085),d=r(5964),c=r(8128),u=r(4815),h=r(184);n.default=function(){var e=(0,i.cI)({defaultValues:{name:"",latitude:"",longitude:"",city:"",region:"",cuisine:"",url:"",stars:""}}),n=e.register,r=e.handleSubmit,m=(0,l.I0)(),x=(0,s.s0)(),p=(0,l.v9)((function(e){return e.point})),b=p.isSuccess,y=p.isError;(0,t.useEffect)((function(){y&&(o.Am.error("Failed to add restaurant, please try again"),m((0,d.mc)())),b&&(o.Am.success("Restaurant added successfully"),m((0,d.mc)()),x("/home"))}),[b,y,x,m]);return(0,h.jsx)("div",{className:"h-full flex justify-center",children:(0,h.jsx)("div",{className:"py-6 px-8 h-[95%] w-[60%] mt-1 bg-white rounded shadow-xl",children:(0,h.jsxs)("form",{className:"space-y-2",onSubmit:r((function(e){m((0,d.pR)(e))})),method:"POST",children:[(0,h.jsx)("h3",{className:"text-xl font-medium text-gray-900 dark:text-white",children:"Add a Restaurant"}),(0,h.jsxs)("div",{className:"mt-2",children:[(0,h.jsx)("label",{className:"block text-gray-800 font-bold",children:"Name:"}),(0,h.jsx)("input",(0,a.Z)({type:"text",name:"name",id:"name",placeholder:"restaurant's name",className:"w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "},n("name")))]}),(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("label",{className:"block text-gray-800 font-bold",children:"Latitude:"}),(0,h.jsx)("input",(0,a.Z)({type:"text",name:"latitude",placeholder:"xx.xxxxxx",className:"w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "},n("latitude")))]}),(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("label",{className:"block text-gray-800 font-bold",children:"Longitude:"}),(0,h.jsx)("input",(0,a.Z)({type:"text",name:"longitude",placeholder:"xx.xxxxxx",className:"w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "},n("longitude")))]}),(0,h.jsx)("div",{className:"",children:(0,h.jsxs)("select",(0,a.Z)((0,a.Z)({name:"city",placeholder:"user@email.com",className:"w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "},n("city")),{},{children:[(0,h.jsx)("option",{value:"",children:"City"}),u.c.map((function(e){return(0,h.jsx)("option",{value:e,children:e})}))]}))}),(0,h.jsx)("div",{className:"",children:(0,h.jsxs)("select",(0,a.Z)((0,a.Z)({name:"region",className:"w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "},n("region")),{},{children:[(0,h.jsx)("option",{value:"",children:"Country"}),(0,h.jsx)("option",{value:"United Kingdom",children:"United Kingdom"}),(0,h.jsx)("option",{value:"Ireland",children:"Ireland"})]}))}),(0,h.jsx)("div",{className:"",children:(0,h.jsxs)("select",(0,a.Z)((0,a.Z)({name:"cuisine",placeholder:"user@email.com",className:"w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "},n("cuisine")),{},{children:[(0,h.jsx)("option",{value:"",children:"Cuisine"}),c.$.map((function(e){return(0,h.jsx)("option",{value:e,children:e})}))]}))}),(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("label",{className:"block text-gray-800 font-bold",children:"Restaurant Website:"}),(0,h.jsx)("input",(0,a.Z)({type:"text",name:"url",id:"url",placeholder:"www.restaurantwebsite.com",className:"w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 "},n("url")))]}),(0,h.jsx)("div",{className:"mb-2",children:(0,h.jsxs)("select",(0,a.Z)((0,a.Z)({},n("stars")),{},{className:"px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm",children:[(0,h.jsx)("option",{value:"",children:"Stars"}),(0,h.jsx)("option",{value:"1",children:"1"}),(0,h.jsx)("option",{value:"2",children:"2"}),(0,h.jsx)("option",{value:"3",children:"3"})]}))}),(0,h.jsx)("div",{className:"flex justify-center",children:(0,h.jsx)("button",{type:"submit",className:"cursor-pointer py-2 px-4 block mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold w-25% text-center rounded",children:"Add Resturant"})})]})})})}}}]);
//# sourceMappingURL=807.f34ba9b9.chunk.js.map