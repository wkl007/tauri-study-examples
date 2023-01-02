import HomePage from '@/pages/home/HomePage';
import HttpPage from '@/pages/http/HttpPage';
import CustomizationPage from '@/pages/customization/CustomizationPage';

export const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/http',
    component: HttpPage,
  },
  {
    path: '/customization',
    component: CustomizationPage,
  },
];
