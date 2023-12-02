"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[756],{3816:function(e,s,r){var a=r(1413),t=r(2791),l=r(7689),n=r(1087),c=r(1134),o=r(9085),u=r(9434),i=r(3689),d=r(184);s.Z=function(e){var s=(0,c.cI)({defaultValues:{username:"",password:""}}),r=s.register,m=s.handleSubmit,f=(0,u.I0)(),b=(0,l.s0)(),p=(0,u.v9)((function(e){return e.auth})),x=p.isSuccess,h=p.isError;return(0,t.useEffect)((function(){return function(){f((0,i.mc)())}}),[]),(0,t.useEffect)((function(){h&&(o.Am.error(e.errorMessage),f((0,i.mc)())),x&&(o.Am.success(e.successMessage),f((0,i.mc)()),b(e.afterSuccess))}),[x,h,b,f,e.errorMessage,e.successMessage,e.afterSuccess]),(0,d.jsx)("div",{className:"h-[100%]  flex justify-center",children:(0,d.jsx)("div",{className:"py-6 px-8 max-2-sm max-2-lg mt-10 rounded shadow-xl border border-blue-500",children:(0,d.jsxs)("form",{className:"space-y-6 ",onSubmit:m((function(s){f(e.dispatcher(s))})),method:"POST",children:[(0,d.jsxs)("h3",{className:"text-xl font-medium text-gray-900 dark:text-white",children:["Sign ",e.upOrIn," to our platform"]}),(0,d.jsxs)("div",{className:"mb-6",children:[(0,d.jsx)("label",{className:"block text-gray-800 font-bold",children:"Email:"}),(0,d.jsx)("input",(0,a.Z)({type:"email",name:"email",id:"email",placeholder:"user@email.com",className:"w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 :ring-blue-600"},r("username")))]}),(0,d.jsxs)("div",{className:"mb-6",children:[(0,d.jsx)("label",{className:"block text-gray-800 font-bold",children:"Password:"}),(0,d.jsx)("input",(0,a.Z)({type:"password",name:"password",id:"password",placeholder:"******",className:"w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-blue-600 :ring-blue-600"},r("password"))),(0,d.jsx)("button",{type:"submit",className:"cursor-pointer py-2 px-4 block mt-6 bg-blue-500 hover:bg-blue-600 text-white font-bold w-full text-center rounded",children:e.buttonName})]}),(0,d.jsx)("br",{}),e.alreadyOrNot,"?"," ",(0,d.jsx)(n.rU,{to:e.alreadyOrNotPath,className:"text-blue-700 hover:underline dark:text-blue-500",children:e.createOrLogin})]})})})}},756:function(e,s,r){r.r(s);r(2791);var a=r(3689),t=r(3816),l=r(184);s.default=function(){return(0,l.jsx)(t.Z,{dispatcher:a.a$,upOrIn:"up",alreadyOrNot:"Already registered",alreadyOrNotPath:"/",buttonName:"Register",createOrLogin:"Login",successMessage:"Registered successfully",afterSuccess:"/",errorMessage:"Register is failed, please try again"})}}}]);
//# sourceMappingURL=756.2ac5b280.chunk.js.map