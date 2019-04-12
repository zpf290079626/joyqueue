webpackJsonp([11,34],{"0XKz":function(e,t){},IbON:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("T0gc"),o=a("fo4W"),i=a("95hR"),l=a("aLe8"),n=a("M3bc"),d={name:"metric",components:{myTable:r.a,myDialog:o.a,metricForm:l.default},mixins:[i.a],data:function(){return{searchData:{keyword:""},searchRules:{},tableData:{rowData:[],colData:[{title:"ID",key:"id"},{title:"代码",key:"code"},{title:"别名",key:"aliasCode"},{title:"名称",key:"name"},{title:"类型",key:"type",formatter:function(e){var t=void 0;switch(e.type){case 1:t="原子";break;case 2:t="聚集"}return t}},{title:"指标来源",key:"source"}],btns:[{txt:"编辑",method:"on-edit"},{txt:"删除",method:"on-del"}]},addDialog:{visible:!1,title:"新建指标",showFooter:!0},addData:{},editData:{},editDialog:{visible:!1,title:"编辑指标",showFooter:!0}}},methods:{openDialog:function(e){this[e].visible=!0},beforeEditData:function(e){var t=Object(n.e)(e);return void 0===t.groupField||""===t.groupField?t.groupFieldArray=[]:t.groupFieldArray=t.groupField.split(","),this.editData=t,this.editData}},mounted:function(){this.getList()}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"ml20 mt30"},[a("d-input",{staticClass:"left mr10",staticStyle:{width:"20%"},attrs:{placeholder:"请输入代码/名称/来源"},model:{value:e.searchData.keyword,callback:function(t){e.$set(e.searchData,"keyword",t)},expression:"searchData.keyword"}}),e._v(" "),a("d-button",{attrs:{type:"primary",color:"success"},on:{click:e.getList}},[e._v("查询"),a("icon",{staticStyle:{"margin-left":"5px"},attrs:{name:"search"}})],1),e._v(" "),a("d-button",{staticClass:"left ml10",attrs:{type:"primary"},on:{click:function(t){return e.openDialog("addDialog")}}},[e._v("新建指标"),a("icon",{staticStyle:{"margin-left":"5px"},attrs:{name:"plus-circle"}})],1)],1),e._v(" "),a("my-table",{attrs:{data:e.tableData,showPin:e.showTablePin,page:e.page},on:{"on-size-change":e.handleSizeChange,"on-current-change":e.handleCurrentChange,"on-selection-change":e.handleSelectionChange,"on-edit":e.edit,"on-del":e.del}}),e._v(" "),a("my-dialog",{attrs:{dialog:e.addDialog},on:{"on-dialog-confirm":function(t){return e.addConfirm()},"on-dialog-cancel":function(t){return e.dialogCancel("addDialog")}}},[a("metric-form",{ref:"addForm",attrs:{type:e.$store.getters.addFormType}})],1),e._v(" "),a("my-dialog",{attrs:{dialog:e.editDialog},on:{"on-dialog-confirm":function(t){return e.editConfirm()},"on-dialog-cancel":function(t){return e.dialogCancel("editDialog")}}},[a("metric-form",{ref:"editForm",attrs:{data:e.editData,type:e.$store.getters.editFormType}})],1)],1)},staticRenderFns:[]};var c=a("VU/8")(d,s,!1,function(e){a("0XKz")},"data-v-5469a6b8",null);t.default=c.exports},aLe8:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={name:"metric-form",mixins:[a("lcoF").a],props:{type:0,data:{type:Object,default:function(){return{code:"",aliasCode:"",name:"",type:1,source:"",aggregator:"",groupField:"",groupFieldArray:[],summaryLevel:""}}}},methods:{getFormData:function(){return void 0===this.formData.groupFieldArray||this.formData.groupFieldArray===[]?this.formData.groupField="":this.formData.groupField=this.formData.groupFieldArray.join(","),this.formData}},data:function(){return{formData:this.data,rules:{code:[{required:!0,message:"请填写代码",trigger:"change"}],aliasCode:[{required:!0,message:"请输入别名，尽量缩写",trigger:"change"}],name:[{required:!0,message:"请输入名称",trigger:"change"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],source:[{required:!0,message:"请输入来源代码",trigger:"change"}],provider:[{required:!0,message:"请输入指标提供方",trigger:"change"}]},error:{code:"",aliasCode:""}}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("d-form",{ref:"form",staticStyle:{height:"350px","overflow-y":"auto",width:"100%","padding-right":"20px"},attrs:{model:e.formData,rules:e.rules,"label-width":"100px"}},[a("d-form-item",{attrs:{label:"代码:",prop:"code",error:e.error.code}},[a("d-input",{staticStyle:{width:"60%"},attrs:{placeholder:"如app_slice_pending"},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}})],1),e._v(" "),a("d-form-item",{attrs:{label:"别名:",prop:"aliasCode",error:e.error.aliasCode}},[a("d-input",{staticStyle:{width:"60%"},attrs:{placeholder:"如backlog"},model:{value:e.formData.aliasCode,callback:function(t){e.$set(e.formData,"aliasCode",t)},expression:"formData.aliasCode"}})],1),e._v(" "),a("d-form-item",{attrs:{label:"名称:",prop:"name"}},[a("d-input",{staticStyle:{width:"60%"},attrs:{placeholder:"如积压"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("d-form-item",{attrs:{label:"类型:",prop:"type"}},[a("d-select",{staticStyle:{width:"60%"},attrs:{placeholder:"类型"},model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",e._n(t))},expression:"formData.type"}},[a("d-option",{attrs:{value:1}},[e._v("原子")]),e._v(" "),a("d-option",{attrs:{value:2}},[e._v("聚集")])],1)],1),e._v(" "),a("d-form-item",{attrs:{label:"来源:",prop:"source"}},[a("d-input",{staticStyle:{width:"60%"},attrs:{placeholder:"指标来源"},model:{value:e.formData.source,callback:function(t){e.$set(e.formData,"source",t)},expression:"formData.source"}})],1),e._v(" "),a("d-form-item",{attrs:{label:"提供方:",prop:"source"}},[a("d-input",{staticStyle:{width:"60%"},attrs:{placeholder:"指标提供方"},model:{value:e.formData.provider,callback:function(t){e.$set(e.formData,"provider",t)},expression:"formData.provider"}})],1),e._v(" "),a("d-form-item",{attrs:{label:"描述:"}},[a("d-input",{staticStyle:{width:"60%"},attrs:{placeholder:"描述"},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1)],1)},staticRenderFns:[]};var i=a("VU/8")(r,o,!1,function(e){a("w6wj")},"data-v-1dd1b6f8",null);t.default=i.exports},w6wj:function(e,t){}});
//# sourceMappingURL=11.64fcf0e8fcc1d3c0478e.js.map