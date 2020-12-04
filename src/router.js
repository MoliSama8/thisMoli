import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/Movie',
            component: () =>
                import ('./views/Movie.vue'),
            children: [{
                    path: 'City',
                    component: () =>
                        import ('./components/City.vue')
                }, {
                    path: 'nwoplaying',
                    component: () =>
                        import ('./components/nwoplaying.vue'),
                }, {
                    path: 'comingsoon',
                    component: () =>
                        import ('./components/comingsoon.vue'),
                }, {
                    path: 'search',
                    component: () =>
                        import ('./components/search.vue'),
                }, , {
                    path: '/',
                    redirect: 'City',
                    component: () =>
                        import ('./components/City.vue'),
                }

            ]
        }, {
            path: '/Cinema',
            name: 'Cinema',
            component: () =>
                import ('./views/Cinema.vue')
        },
        {
            path: '/Mine',
            name: 'Mine',
            component: () =>
                import ('./views/Mine.vue')
        },
        {
            path: '/CiList',
            name: 'CiList',
            component: () =>
                import ('./components/CiList.vue')
        },
        {
            path: '/header',
            name: 'header',
            component: () =>
                import ('./components/header.vue')
        },
        {
            path: '/Login',
            name: 'Login',
            component: () =>
                import ('./components/Login.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () =>
                import ('./components/search.vue')
        },
        {
            path: '/tab',
            name: 'tab',
            component: () =>
                import ('./components/tab.vue')
        }, {
            path: '/',
            redirect: '/Movie',
            component: () =>
                import ('./views/Movie.vue')
        }

    ]
})