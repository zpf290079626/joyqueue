webpackJsonp([1,33],{"3p6A":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("1a0f"),o=a("vcXF"),i=a("T0gc"),s=a("fo4W"),n=a("W9DL"),l=a("95hR"),d=a("X2Oc"),c={name:"topic",components:{myTable:i.a,myDialog:s.a,topicForm:n.default},mixins:[l.a],data:function(){var t=this;return{searchData:{keyword:"",command:1},tableData:{rowData:[],colData:[{title:"ID",key:"id"},{title:"英文名",key:"code",render:function(e,a){return e("label",{style:{cursor:"pointer",color:"#3366FF"},on:{click:function(){t.$router.push({name:"/"+t.$i18n.locale+"/topic/detail",query:{id:a.item.id,code:a.item.code,namespaceId:a.item.namespace.id,namespaceCode:a.item.namespace.code}})}}},a.item.code)}},{title:"类型",key:"type",render:function(t,e){return Object(d.a)(t,e.item.type,[{value:0,txt:"Normal",color:"success"},{value:1,txt:"Broadcast",color:"warning"},{value:2,txt:"Sequential",color:"danger"}])}},{title:"队列数",key:"partitions"},{title:"归档",key:"archive",render:function(t,e){var a=e.item.archive?"已开启":"已关闭";return t("DButton",{props:{size:"small",borderless:!0,color:e.item.archive?"success":"warning"}},a)}}],btns:[{txt:"详情",method:"on-view-detail"},{txt:"删除",method:"on-del",isAdmin:!0}]},addDialog:{visible:!1,title:"添加主题",width:700,showFooter:!1},addData:{},editDialog:{visible:!1,title:"编辑主题",width:700,showFooter:!0},editData:{},editLabelDialog:{visible:!1,title:"编辑主题标签",width:700,showFooter:!0},editLabelData:{},addBrokerGroupDialog:{visible:!1,title:"添加分组",width:700,showFooter:!0},addBrokerGroupData:{}}},computed:{},methods:{goDetail:function(t){this.$router.push({name:"/"+this.$i18n.locale+"/topic/detail",query:{id:t.id,code:t.code,namespaceId:t.namespace.id,namespaceCode:t.namespace.code,tab:"producer"}})},editLabel:function(t){this.openDialog("editLabelDialog"),r.a.get(o.a["/topic"].editLabelData+"/"+t.id).then(function(t){}),this.editLabelData=t},editLabelConfirm:function(){var t=this,e={id:this.editLabelData.id,bs:this.editLabelData.bs,labels:[{bs:this.editLabelData.bs}]};r.a.post(this.urlOrigin.editLabel,{},e).then(function(e){t.editLabelDialog.visible=!1,t.$Dialog.success({content:"修改成功"}),t.getList()})},editLabelCancel:function(){this.editLabelDialog.visible=!1},addBrokerGroup:function(t){this.openDialog("addBrokerGroupDialog"),this.addBrokerGroupData=t,this.addBrokerGroupData.brokerGroupsAdd=[]},addBrokerGroupConfirm:function(){var t=this,e=this.addBrokerGroupData;r.a.post(this.urlOrigin.addBrokerGroup,{},e).then(function(e){t.addBrokerGroupDialog.visible=!1,t.$Dialog.success({content:"添加成功"}),t.getList()})},addBrokerGroupCancel:function(){this.addBrokerGroupDialog.visible=!1},choosedBrokerGroup:function(t){this.addBrokerGroupData.brokerGroupsAdd=t},isAdmin:function(t){return this.$store.getters.isAdmin},del:function(t,e){var a=this,o=this;this.$Dialog.confirm({title:"提示",content:"删除时会自动删除与该主题关联的分片分组信息，确定要删除吗？"}).then(function(){r.a.post(o.urlOrigin.del,{},t.id).then(function(e){e.code!==a.$store.getters.successCode?a.$Dialog.error({content:"删除失败"}):(a.$Message.success("删除成功"),"function"==typeof o.afterDel&&o.afterDel(t),o.getList())})}).catch(function(){})}},mounted:function(){this.getList()}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"ml20 mt30"},[a("d-select",{staticClass:"left mr5",staticStyle:{width:"13%"},attrs:{placeholder:"请选择类型"},model:{value:t.searchData.type,callback:function(e){t.$set(t.searchData,"type",e)},expression:"searchData.type"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("主题类型")]),t._v(" "),a("d-option",{attrs:{value:"-1"}},[t._v("全部")]),t._v(" "),a("d-option",{attrs:{value:"0"}},[t._v("普通主题")]),t._v(" "),a("d-option",{attrs:{value:"1"}},[t._v("广播主题")]),t._v(" "),a("d-option",{attrs:{value:"2"}},[t._v("顺序主题")])],1),t._v(" "),a("d-input",{staticClass:"left mr5",staticStyle:{width:"15%"},attrs:{placeholder:"请输入英文名"},model:{value:t.searchData.keyword,callback:function(e){t.$set(t.searchData,"keyword",e)},expression:"searchData.keyword"}},[a("span",{attrs:{slot:"prepend"},slot:"prepend"},[t._v("关键词")])]),t._v(" "),a("d-button",{attrs:{type:"primary",color:"success"},on:{click:t.getList}},[t._v("查询"),a("icon",{staticStyle:{"margin-left":"5px"},attrs:{name:"search"}})],1),t._v(" "),t.$store.getters.isAdmin?a("d-button",{staticClass:"left ml10",attrs:{type:"primary"},on:{click:function(e){return t.openDialog("addDialog")}}},[t._v("添加主题"),a("icon",{staticStyle:{"margin-left":"5px"},attrs:{name:"plus-circle"}})],1):t._e()],1),t._v(" "),a("my-table",{attrs:{data:t.tableData,showPin:t.showTablePin,page:t.page},on:{"on-size-change":t.handleSizeChange,"on-current-change":t.handleCurrentChange,"on-selection-change":t.handleSelectionChange,"on-view-detail":t.goDetail,"on-edit":t.edit,"on-edit-label":t.editLabel,"on-add-brokerGroup":t.addBrokerGroup,"on-del":t.del}}),t._v(" "),a("my-dialog",{staticClass:"add-dialog",attrs:{dialog:t.addDialog},on:{"on-dialog-cancel":function(e){return t.dialogCancel("addDialog")}}},[a("topic-form",{attrs:{type:t.$store.getters.addFormType},on:{"on-dialog-cancel":function(e){return t.dialogCancel("addDialog")}}})],1),t._v(" "),a("my-dialog",{attrs:{dialog:t.editLabelDialog},on:{"on-dialog-confirm":function(e){return t.editLabelConfirm()},"on-dialog-cancel":function(e){return t.editLabelCancel()}}},[a("grid-row",{staticClass:"mb10"},[a("grid-col",{staticClass:"label",attrs:{span:4}},[t._v("业务分组:")]),t._v(" "),a("grid-col",{staticClass:"val",attrs:{span:20}},[a("d-select",{staticClass:"left",model:{value:t.editLabelData.bs,callback:function(e){t.$set(t.editLabelData,"bs",e)},expression:"editLabelData.bs"}},[a("d-option",{attrs:{value:"sc"}},[t._v("商城")]),t._v(" "),a("d-option",{attrs:{value:"jr"}},[t._v("金融")])],1)],1)],1)],1),t._v(" "),a("my-dialog",{attrs:{dialog:t.addBrokerGroupDialog},on:{"on-dialog-confirm":function(e){return t.addBrokerGroupConfirm()},"on-dialog-cancel":function(e){return t.addBrokerGroupCancel()}}},[a("add-brokerGroup",{attrs:{data:t.addBrokerGroupData},on:{"on-choosed-brokerGroup":t.choosedBrokerGroup}})],1)],1)},staticRenderFns:[]};var u=a("VU/8")(c,p,!1,function(t){a("tfwO")},"data-v-56ca1392",null);e.default=u.exports},W9DL:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("1a0f"),o=a("M3bc"),i=a("X2Oc"),s=a("lcoF"),n=a("H/ue"),l={name:"topic-form",mixins:[s.a],components:{addBroker:n.default},props:{type:0,data:{type:Object,default:function(){return{code:"",name:"",type:0,namespace:{id:"0",code:""},partitions:5,brokerGroup:{id:0,code:"",name:""},electType:0,description:"",brokers:[]}}}},data:function(){var t=this;return{current:0,formData:this.data,partitionsDisabled:!1,namespaceList:[],brokerGroupList:[],brokerList:[],urls:{findAllNamespace:"/namespace/findAll",findAllBrokerGroup:"/brokerGroup/findAll",searchBroker:"/broker/search",add:"/topic/addWithBrokerGroup"},rules:{rule1:{code:[{required:!0,message:"请输入topic英文名",trigger:"change"},{pattern:/^[a-zA-Z/]+[a-zA-Z0-9/_-]{1,120}[a-zA-Z0-9/]+$/,message:"英文名格式不匹配",trigger:"change"}],name:Object(i.h)(),partitions:[{type:"number",required:!0,message:"请输入队列数量",trigger:"change"}],brokerGroup:[{required:!0,message:"请选择一个分组",trigger:"change"}],description:[{required:!0,message:"请输入申请描述",trigger:"change"}]},rule2:{brokers:[{type:"array",required:!0,message:"请至少选择一个Broker",trigger:"change"},{validator:function(e,a,r){void 0!==t.formData.topic.partitions&&void 0!==t.formData.topic.brokers&&t.formData.topic.brokers.length>t.formData.topic.partitions?r(new Error("勾选的broker数量不能大于队列数量")):r()},trigger:"blur"}]}},error:{code:""}}},methods:{prev:function(){this.current=this.current-1},next:function(){var t=this;this.$refs["form"+(this.current+1)].validate(function(e){e?t.current=t.current+1:t.$Message.error("验证不通过，请重新填写！")})},choosedBroker:function(t){this.formData.brokers=t},handlerTypeChange:function(t){2===t?(this.partitionsDisabled=!0,this.formData.partitions=1):(this.partitionsDisabled=!1,this.formData.partitions=5)},handlerBrokerGroupChange:function(t){this.$refs.brokers.getListByGroup(t)},getNamespaces:function(){var t=this;r.a.get(this.urls.findAllNamespace).then(function(e){t.namespaceList=e.data||[]})},getBrokerGroups:function(){var t=this;r.a.get(this.urls.findAllBrokerGroup).then(function(e){(void 0===e.data||e.data.length<1)&&(t.brokerGroupList=[{id:0,code:"",name:"全部"}]),t.brokerGroupList=[];t.brokerGroupList.push({id:0,code:"",name:"全部"}),(e.data||[]).forEach(function(e){t.brokerGroupList.push(e)})})},beforeConfirm:function(){return Object(o.e)(this.formData||{})}},computed:{},mounted:function(){this.getNamespaces(),this.getBrokerGroups()}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("d-steps",{attrs:{current:t.current}},[a("d-step",{attrs:{title:"步骤1",description:"主题信息"}}),t._v(" "),a("d-step",{attrs:{title:"步骤2",description:"Broker列表"}})],1),t._v(" "),a("div",{staticClass:"steps-content",staticStyle:{"margin-top":"15px",border:"1px solid #e9e9e9","border-radius":"6px","min-height":"200px","text-align":"left",padding:"20px 30px 40px 50px"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:0===t.current,expression:"current===0"}],staticClass:"step1"},[a("div",{staticClass:"stepForm1"},[a("d-form",{ref:"form1",staticStyle:{height:"350px","overflow-y":"auto",width:"100%"},attrs:{model:t.formData,rules:t.rules.rule1,"label-width":"110px"}},[a("d-form-item",{attrs:{label:"主题英文名：",error:t.error.code,prop:"code"}},[a("d-input",{staticStyle:{width:"70%"},attrs:{placeholder:"仅支持英文字母大小写、数字、-、_和/"},model:{value:t.formData.code,callback:function(e){t.$set(t.formData,"code",e)},expression:"formData.code"}})],1),t._v(" "),a("d-form-item",{attrs:{label:"主题类型：",prop:"type"}},[a("d-select",{staticStyle:{width:"70%"},attrs:{value:0},on:{"on-change":t.handlerTypeChange},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}},[a("d-option",{attrs:{value:0}},[t._v("普通主题")]),t._v(" "),a("d-option",{attrs:{value:1}},[t._v("广播主题")]),t._v(" "),a("d-option",{attrs:{value:2}},[t._v("顺序主题")])],1)],1),t._v(" "),a("d-form-item",{attrs:{label:"队列数量：",prop:"partitions"}},[a("d-input",{staticStyle:{width:"70%"},attrs:{disabled:t.partitionsDisabled},model:{value:t.formData.partitions,callback:function(e){t.$set(t.formData,"partitions",t._n(e))},expression:"formData.partitions"}})],1),t._v(" "),a("d-form-item",{attrs:{label:"选举类型：",prop:"electType"}},[a("d-select",{staticStyle:{width:"70%"},model:{value:t.formData.electType,callback:function(e){t.$set(t.formData,"electType",t._n(e))},expression:"formData.electType"}},[a("d-option",{attrs:{value:0}},[t._v("Raft")]),t._v(" "),a("d-option",{attrs:{value:1}},[t._v("Fix")])],1)],1),t._v(" "),a("d-form-item",{attrs:{label:"分组：",prop:"brokerGroup"}},[a("d-select",{staticStyle:{width:"70%"},on:{"on-change":t.handlerBrokerGroupChange},model:{value:t.formData.brokerGroup.id,callback:function(e){t.$set(t.formData.brokerGroup,"id",e)},expression:"formData.brokerGroup.id"}},t._l(t.brokerGroupList,function(e){return a("d-option",{key:e.id,attrs:{value:e.id}},[a("span",[t._v(t._s(e.name))]),t._v(" "),a("span",{staticStyle:{float:"right",color:"#ccc"}},[t._v(t._s(e.code))])])}),1)],1),t._v(" "),a("d-form-item",{attrs:{label:"申请描述：",prop:"description"}},[a("d-input",{staticStyle:{width:"70%"},attrs:{type:"textarea",rows:"2",placeholder:"请输入申请描述，例如用途等"},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)],1)],1),t._v(" "),a("div",{staticClass:"step-actions",staticStyle:{"text-align":"center"}},[a("d-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v("下一步")])],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current===1"}],staticClass:"step2"},[a("div",{staticClass:"stepForm2"},[a("d-form",{ref:"form",staticStyle:{"overflow-y":"auto",height:"350px"},attrs:{model:t.formData,rules:t.rules.rule2,"label-width":"100px"}},[a("add-broker",{ref:"brokers",attrs:{model:t.formData.brokers,data:t.formData},on:{"on-choosed-broker":t.choosedBroker}})],1)],1),t._v(" "),a("div",{staticClass:"step-actions",staticStyle:{"text-align":"center"}},[a("d-button",{attrs:{type:"primary"},on:{click:t.prev}},[t._v("上一步")]),t._v(" "),a("d-button",{attrs:{type:"primary"},on:{click:function(e){return t.confirm()}}},[t._v("确定")])],1)])])],1)},staticRenderFns:[]};var c=a("VU/8")(l,d,!1,function(t){a("uKqj")},"data-v-2678bdb0",null);e.default=c.exports},tfwO:function(t,e){},uKqj:function(t,e){}});
//# sourceMappingURL=1.7a15cea29f8c4f1e67ef.js.map