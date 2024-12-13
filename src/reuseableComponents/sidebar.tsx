import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar: React.FC = () => {
  const menuItems = [
    { name: 'Development', icon: '🔧', isActive: true },
    { name: 'Asset Management', icon: '📂', isActive: false },
    { name: 'Digitalization', icon: '⚙️', isActive: false },
    { name: 'Finance', icon: '💰', isActive: false },
    { name: 'Analytics', icon: '📊', isActive: false },
    { name: 'Transition', icon: '🚀', isActive: false },
    { name: 'EPIC', icon: '🌟', isActive: false },
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <h1>V</h1>
      </div>
      <nav className={styles.menu}>
        <ul>
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`${styles.menuItem} ${
                item.isActive ? styles.active : ''
              }`}
            >
              <span className={styles.icon}>{item.icon}</span>
              {item.name}
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <img
          className={styles.avatar}
          src="/assets/avatar.png" // Replace with your avatar path
          alt="User Avatar"
        />
        <div className={styles.userInfo}>
          <p className={styles.name}>John Doe</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
