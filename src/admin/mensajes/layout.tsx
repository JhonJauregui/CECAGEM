// components/AdminLayout.js
    import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type AdminLayoutProps = {
  children: ReactNode;
};

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();

    const menuItems = [
        {
        name: 'Dashboard',
        href: '/admin',
        icon: '📊',
        current: router.pathname === '/admin'
        },
        {
        name: 'Usuarios',
        href: '/admin/usuarios',
        icon: '👥',
        current: router.pathname === '/admin/usuarios'
        },
        {
        name: 'Productos',
        href: '/admin/productos',
        icon: '📦',
        current: router.pathname === '/admin/productos'
        },
        {
        name: 'Órdenes',
        href: '/admin/ordenes',
        icon: '🛒',
        current: router.pathname === '/admin/ordenes'
        },
        {
        name: 'Reportes',
        href: '/admin/reportes',
        icon: '📈',
        current: router.pathname === '/admin/reportes'
        },
        {
        name: 'Configuración',
        href: '/admin/configuracion',
        icon: '⚙️',
        current: router.pathname === '/admin/configuracion'
        }
    ];

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="min-h-screen bg-gray-100">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
            <div 
            className="fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
            />
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex items-center justify-between h-16 px-4 bg-gray-800">
          <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          <button
            onClick={toggleSidebar}
            className="lg:hidden text-gray-300 hover:text-white"
          >
            ✕
          </button>
        </div>
        
        <nav className="mt-8">
          <div className="px-2 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                  item.current
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </nav>

        {/* User section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm">👤</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">Administrador</p>
              <p className="text-xs text-gray-400">admin@ejemplo.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:ml-64">
        {/* Top header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <button
                  onClick={toggleSidebar}
                  className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                >
                  <span className="sr-only">Abrir menú</span>
                  ☰
                </button>
                <h2 className="ml-4 lg:ml-0 text-lg font-semibold text-gray-900">
                  {menuItems.find(item => item.current)?.name || 'Dashboard'}
                </h2>
              </div>
              
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  🔔
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  ⚙️
                </button>
                <button className="p-2 text-gray-400 hover:text-gray-500">
                  🚪
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Page content */}
        <main className="p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
