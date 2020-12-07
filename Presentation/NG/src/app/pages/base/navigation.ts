import { INavData } from '@coreui/angular';

export const navItems: INavData[] = buildNavItems();

function buildNavItems(): any {
    return [
      {
        name: 'Resumo',
        url: '/dashboard',
        icon: 'icon-home',
      },
      {
        name: 'Usuários',
        url: '/users',
        icon: 'icon-people',
      },
      {
        title: true,
        name: 'Ajuda',
      },
      {
        name: 'Sobre o Sistema',
        url: '/about',
        icon: 'icon-question',
      },
    ];
}