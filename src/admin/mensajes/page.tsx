// pages/admin/index.js
import AdminLayout from '../../components/AdminLayout';

const AdminDashboard = () => {
  const stats = [
    {
      name: 'Total Usuarios',
      value: '2,651',
      change: '+12%',
      changeType: 'positive',
      icon: '👥'
    },
    {
      name: 'Ventas del Mes',
      value: '$45,231',
      change: '+8.2%',
      changeType: 'positive',
      icon: '💰'
    },
    {
      name: 'Órdenes Activas',
      value: '324',
      change: '-2.1%',
      changeType: 'negative',
      icon: '📦'
    },
    {
      name: 'Productos',
      value: '1,845',
      change: '+15.3%',
      changeType: 'positive',
      icon: '🛍️'
    }
  ];

  const recentOrders = [
    {
      id: '#12345',
      customer: 'Juan Pérez',
      amount: '$234.00',
      status: 'Completado',
      date: '2025-07-10'
    },
    {
      id: '#12346',
      customer: 'María García',
      amount: '$156.50',
      status: 'Pendiente',
      date: '2025-07-10'
    },
    {
      id: '#12347',
      customer: 'Carlos López',
      amount: '$89.99',
      status: 'En Proceso',
      date: '2025-07-09'
    },
    {
      id: '#12348',
      customer: 'Ana Martínez',
      amount: '$445.00',
      status: 'Completado',
      date: '2025-07-09'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completado':
        return 'bg-green-100 text-green-800';
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'En Proceso':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">¡Bienvenido, Administrador!</h1>
        <p className="text-gray-600">Aquí tienes un resumen de tu negocio hoy.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
              </div>
              <div className="text-2xl">{stat.icon}</div>
            </div>
            <div className="mt-2">
              <span className={`text-sm font-medium ${
                stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </span>
              <span className="text-sm text-gray-500 ml-1">desde el mes pasado</span>
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Orders */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Órdenes Recientes</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Orden
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Cliente
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Monto
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Estado
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Fecha
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {order.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.customer}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {order.amount}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {order.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Acciones Rápidas</h3>
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                <span className="mr-2">➕</span>
                Agregar Producto
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                <span className="mr-2">👥</span>
                Nuevo Usuario
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                <span className="mr-2">📊</span>
                Ver Reportes
              </button>
              <button className="w-full flex items-center justify-center px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors">
                <span className="mr-2">📧</span>
                Enviar Newsletter
              </button>
            </div>
          </div>

          {/* System Status */}
          <div className="border-t border-gray-200 p-6">
            <h4 className="text-sm font-medium text-gray-900 mb-3">Estado del Sistema</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Servidor</span>
                <span className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Base de Datos</span>
                <span className="flex items-center text-sm text-green-600">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Conectado
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Backup</span>
                <span className="flex items-center text-sm text-blue-600">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Hace 2h
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AdminDashboard.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};

export default AdminDashboard;
