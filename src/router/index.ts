import { RouteRecordRaw, RouterHistory, createRouter, createWebHistory } from "vue-router"


const routes: RouteRecordRaw[] = [

    {
        path: '/issues',
        component: ()=>import('../views/GitApp.vue'),
        children: [
            {
                path: 'list',
                component: ()=> import('../views/ListView.vue')
            },
            {
                path: 'issue/:id',
                component: ()=>import('../views/IssueView.vue')

            },
        ]
    }
    ,
    { path: '/issues/:pathMatch(.*)*', redirect: '/issues/list' },
    { path: '/', redirect: '/issues/list' },
    { path: '/:pathMatch(.*)*', component: ()=> import('../views/NotFound.vue') }
]

const history: RouterHistory = createWebHistory()

const router = createRouter({
    routes, history
})

export default router;