import LRDiscover from '@/pages/discover'
import LRFriend from '@/pages/friend'
import LRMine from '@/pages/mine'

const routes = [
    {
        path: "/",
        exact: true,
        component: LRDiscover 
    },
    {
        path: "/mine",
        exact: true,
        component: LRMine 
    },
    {
        path: "/friend",
        exact: true, 
        component: LRFriend 
    }, 
];

export default routes;