import NavbarItem from '@theme/NavbarItem';
import IconExternalLink from '@theme/Icon/ExternalLink';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import type {ComponentProps, ReactNode} from 'react';
import styles from './styles.module.css';

type NavbarItemConfig = {
  position?: 'left' | 'right';
  type?:
    | 'default'
    | 'dropdown'
    | 'localeDropdown'
    | 'search'
    | 'html'
    | 'doc'
    | 'docSidebar'
    | 'docsVersion'
    | 'docsVersionDropdown';
  href?: string;
  label?: ReactNode;
  [key: string]: unknown;
};

function useNavbarItems(): NavbarItemConfig[] {
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function renderNavbarItem(
  item: NavbarItemConfig,
  key: string,
  onClick: () => void,
): ReactNode {
  const navbarItemProps = item as ComponentProps<typeof NavbarItem>;

  return (
    <NavbarItem
      {...navbarItemProps}
      mobile
      onClick={onClick}
      key={key}
    />
  );
}

export default function NavbarMobilePrimaryMenu(): React.JSX.Element {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useNavbarItems();
  const leftItems = items.filter((item) => item.position !== 'right');
  const rightItems = items
    .filter((item) => item.position === 'right')
    .map((item) =>
      item.href
        ? {
            ...item,
            label: (
              <span className={styles.externalLabel}>
                <span>{String(item.label ?? '')}</span>
                <IconExternalLink />
              </span>
            ),
          }
        : item,
    );

  return (
    <>
      <ul className="menu__list">
        {leftItems.map((item, index) =>
          renderNavbarItem(item, `left-${index}`, () => mobileSidebar.toggle()),
        )}
      </ul>
      {rightItems.length > 0 && (
        <ul className="menu__list navbar-sidebar__group">
          {rightItems.map((item, index) =>
            renderNavbarItem(item, `right-${index}`, () => mobileSidebar.toggle()),
          )}
        </ul>
      )}
    </>
  );
}
