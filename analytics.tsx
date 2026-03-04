import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  Clock,
  Globe,
} from "lucide-react";

const monthlyData = [
  { month: "Jan", pageViews: 12400, sessions: 5400, users: 3200, bounce: 42 },
  { month: "Feb", pageViews: 13980, sessions: 6398, users: 3800, bounce: 38 },
  { month: "Mar", pageViews: 29800, sessions: 11800, users: 7200, bounce: 35 },
  { month: "Apr", pageViews: 23908, sessions: 9908, users: 6100, bounce: 40 },
  { month: "May", pageViews: 31800, sessions: 13800, users: 8400, bounce: 33 },
  { month: "Jun", pageViews: 28800, sessions: 12800, users: 7800, bounce: 36 },
  { month: "Jul", pageViews: 34300, sessions: 15300, users: 9200, bounce: 31 },
];

const deviceData = [
  { device: "Desktop", visitors: 4200 },
  { device: "Mobile", visitors: 3800 },
  { device: "Tablet", visitors: 1200 },
];

const topPages = [
  { page: "/dashboard", views: 12453, avgTime: "3:24" },
  { page: "/products", views: 9821, avgTime: "2:45" },
  { page: "/analytics", views: 7654, avgTime: "4:12" },
  { page: "/settings", views: 5432, avgTime: "2:18" },
  { page: "/users", views: 4321, avgTime: "3:05" },
];

const countryData = [
  { country: "United States", visitors: 5432, flag: "🇺🇸" },
  { country: "United Kingdom", visitors: 3210, flag: "🇬🇧" },
  { country: "Canada", visitors: 2145, flag: "🇨🇦" },
  { country: "Germany", visitors: 1987, flag: "🇩🇪" },
  { country: "Australia", visitors: 1654, flag: "🇦🇺" },
];

const metrics = [
  {
    name: "Page Views",
    value: "245,892",
    change: "+12.5%",
    icon: Eye,
    color: "blue",
  },
  {
    name: "Unique Visitors",
    value: "45,234",
    change: "+8.2%",
    icon: Users,
    color: "green",
  },
  {
    name: "Avg. Session",
    value: "3m 24s",
    change: "+5.1%",
    icon: Clock,
    color: "purple",
  },
  {
    name: "Bounce Rate",
    value: "35.2%",
    change: "-3.4%",
    icon: MousePointer,
    color: "orange",
  },
];

export function Analytics() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Analytics</h1>
          <p className="mt-2 text-gray-600">
            Track your website performance and user engagement
          </p>
        </div>
        <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 90 days</option>
          <option>Last year</option>
        </select>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.name}
            className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div
                className={`w-12 h-12 bg-${metric.color}-100 rounded-lg flex items-center justify-center`}
              >
                <metric.icon className={`w-6 h-6 text-${metric.color}-600`} />
              </div>
              <span className="text-sm font-medium text-green-600">
                {metric.change}
              </span>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-600">{metric.name}</p>
              <p className="mt-1 text-2xl font-semibold text-gray-900">
                {metric.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Overview */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Traffic Overview
            </h3>
            <p className="text-sm text-gray-600">Monthly traffic statistics</p>
          </div>
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={monthlyData}>
              <defs>
                <linearGradient id="colorPageViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSessions" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="pageViews"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorPageViews)"
                name="Page Views"
              />
              <Area
                type="monotone"
                dataKey="sessions"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorSessions)"
                name="Sessions"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Device Breakdown */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Device Breakdown
            </h3>
            <p className="text-sm text-gray-600">Visitors by device type</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={deviceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="device" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Bar dataKey="visitors" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* User Growth */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900">User Growth</h3>
            <p className="text-sm text-gray-600">New users over time</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#8b5cf6"
                strokeWidth={3}
                dot={{ fill: "#8b5cf6", r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Pages */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Top Pages</h3>
            <p className="text-sm text-gray-600">Most visited pages</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Page
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Views
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Avg. Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topPages.map((page, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {page.page}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {page.views.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {page.avgTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Top Countries */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg font-semibold text-gray-900">
                Top Countries
              </h3>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Visitors by location
            </p>
          </div>
          <div className="p-6 space-y-4">
            {countryData.map((country, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{country.flag}</span>
                  <span className="text-sm font-medium text-gray-900">
                    {country.country}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{
                        width: `${(country.visitors / 5432) * 100}%`,
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-900 w-16 text-right">
                    {country.visitors.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
