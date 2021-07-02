import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Direction',
		component: () => import('../views/Direction.vue'),
	},
	{
		path: '/list',
		name: 'List',
		component: () => import('../views/List.vue'),
	},
	{
		path: '/map',
		name: 'Map',
		component: () => import('../views/Map.vue'),
	},
	// {
	// 	path: '/:catchAll(.*)',
	// 	name: 'NotFound',
	// 	component: () => import('../views/NotFound.vue'),
	// },
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
