// import { component } from "vue/types/umd";



export default [
    {
      path:"/",
      name:"layout",
      component:()=>import("../views/layOut"),
      redirect:"/index",
      children:[
        {
          path:"/index",
          name:"index",
          component:()=>import("../views/index/HomeIndex")
        },
        {
          path:"/orders/list",
          name:"orders-list",
          component:()=>import("../views/orders/ordersList"),
          meta:{bread:["订单管理","订单列表"]}
        },
        {
          path:"/waybill/list",
          name:"waybill-ilist",
          // component:()=>import("../views/orders/waybilMan"),
          component:()=>import("../views/waybill/WaybillList"),
          meta:{bread:["运单管理","运单列表"],keepAlive:true}
        },
        {
          path:"/waybill/list/detail",
          name:"waybill-list-datail",
          meta:{bread:["运单管理","运单列表","运单详情"]},
          component:()=>import("../views/waybill/waybillDetail")
        },
        {
          path:"/depart/data",
          name:"depart-data",
          meta:{bread:["发车管理","发车数据单"]},
          component:()=>import("../views/depart/departData")

        },
        {
          path:"/customer/info",
          name:"customer-info",
          meta:{bread:["财务管理","客户对账单"]},
          component:()=>import("../views/finance/financeReconciliation")
        }
      ]
    },
    {
      path:"/login",
      name:"login",
      component:()=>import("../views/loginVue")
    },

  ] 