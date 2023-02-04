import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	// { 
	// 	path: '/:pathMatch(.*)*', 
	// 	name: 'NotFound',
	// 	component: () => import('../components/HelloWorld.vue') 
	// },
	{
		path: '/login',
		name: 'login',
		component: ()=>import('../views/log/index.vue')
	},
	// {
	// 	path: '/',
	// 	component: () => import('../views/Home/index.vue'),
	// 	children: [
	// 	{
	// 		path: 'security',
	// 		name: 'security',
	// 		component: () => import('../views/security/index.vue')
	// 	}
	// 	]
	// }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
