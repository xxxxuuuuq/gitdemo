export default{
    dara(){
        return{
            breadList:[]
        }
    },
    created(){
        this.getBreadCrumb()
    },
    watch:{
        //(监听)data 计算属性 props $route
        $route(){
            this.getBreadCrumb()
        }
    },
    methods:{
        getBreadCrumb(){
            // this.breadList = this.$route.meta.bread?this.$route.meta.bread:[]
            this.breadList = this.$route.meta.bread||[]
        }
    }
}