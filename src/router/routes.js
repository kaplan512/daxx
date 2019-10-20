import Table from '../components/Table'
import Create from '../components/CreateItem'

const routes = [
    {
        path: '/',
        name: 'table',
        component: Table,
    },
    {
        path: '/create/:id?',
        name: 'create',
        component: Create,
    }
]

// Always leave this as last one
// if (process.env.MODE !== 'ssr') {
//   routes.push({
//     path: '*',
//     component: () => import('pages/Error404.vue')
//   })
// }

export default routes
