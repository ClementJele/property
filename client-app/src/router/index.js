import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Fines from '@/components/Fines'
import IssueManager from '@/components/issueManagement/issueManagementResident/IssueManage'
import UserManager from '@/components/UserManage'
import Notices from '@/components/Notices'
import Reports from '@/components/Reports'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import staffIssueManagement from '@/components/issueManagement/issueManageStaff/issueManagementStaff'
import Complaints from '@/components/issueManagement/issueManagementResident/Complaints'
import LandingPage from '../components/LandingPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: LandingPage },
    {
      path: '/home',
      name: 'home',
      component: Hello
    },
    {
      path: '/fines',
      name: 'Fines',
      component: Fines
    },
    {
      path: '/issue-manager',
      name: 'IssueManager',
      component: IssueManager
    },
    {
      path: '/user-manager',
      name: 'UserManager',
      component: UserManager
    },
    {
      path: '/reports',
      name: 'Reports',
      component: Reports
    },
    {
      path: '/notices',
      name: 'Notices',
      component: Notices
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/issue-management-staff',
      name: 'issuemanagementstaff',
      component: staffIssueManagement
    },
    {
      path: '/complaints',
      name: 'Complaints',
      component: Complaints
    },
    { path: '*', redirect: '/' }
  ]
})
