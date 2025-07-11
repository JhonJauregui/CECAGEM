'use client';

import { 
  Card,
  CardBody,
  CardHeader,
} from "@heroui/react";
import { Button } from "@heroui/react";
import { Table, TableBody, TableCell, TableHeader, TableRow,TableColumn } from "@heroui/react";

export default function AdminDashboard() {
  // Datos de ejemplo
  const stats = [
    { title: "Total Usuarios", value: "2,345", change: "+12%", icon: "👥" },
    { title: "Ventas", value: "$34,543", change: "+8.2%", icon: "💰" },
    { title: "Órdenes", value: "1,234", change: "-3.1%", icon: "📦" },
    { title: "Productos", value: "567", change: "+5.6%", icon: "🛍️" },
  ];

  const recentOrders = [
    { id: "#1234", customer: "Juan Pérez", amount: "$234.00", status: "Completado" },
    { id: "#1235", customer: "María García", amount: "$156.50", status: "Pendiente" },
    { id: "#1236", customer: "Carlos López", amount: "$89.99", status: "En Proceso" },
  ];

  return (
    <div className="space-y-6">
      {/* Título */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <div className="flex items-center space-x-2">
          <Button variant="solid">Exportar</Button>
          <Button>Nuevo Pedido</Button>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <p className="text-sm font-medium">
                {stat.title}
              </p>
              <span className="text-2xl">{stat.icon}</span>
            </CardHeader>
            <CardBody>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.change} desde el mes pasado
              </p>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Tabla de órdenes */}
      <Card>
        <CardHeader>
          <p>Órdenes Recientes</p>
        </CardHeader>
        <CardBody>
          <Table>
            <TableHeader>
              <TableRow>
                <TableColumn>ID</TableColumn>
                <TableColumn>Cliente</TableColumn>
                <TableColumn>Monto</TableColumn>
                <TableColumn>Estado</TableColumn>
                <TableColumn className="text-right">Acciones</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.amount}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      order.status === 'Completado' ? 'bg-green-100 text-green-800' :
                      order.status === 'Pendiente' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Ver
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardBody>
      </Card>

      {/* Sección adicional */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <p>Acciones Rápidas</p>
          </CardHeader>
          <CardBody className="space-y-2">
            <Button variant="solid" className="w-full">
              Agregar Producto
            </Button>
            <Button variant="solid" className="w-full">
              Nuevo Usuario
            </Button>
          </CardBody>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <p>Actividad Reciente</p>
          </CardHeader>
          <CardBody>
            {/* Aquí puedes agregar una lista de actividades */}
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center mr-3">
                  <span>👤</span>
                </div>
                <div>
                  <p className="text-sm font-medium">Nuevo usuario registrado</p>
                  <p className="text-sm text-muted-foreground">Hace 2 horas</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}