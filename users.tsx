import { useState } from "react";
import {
  Search,
  Filter,
  UserPlus,
  MoreVertical,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    role: "Admin",
    status: "active",
    avatar: "AJ",
    location: "New York, USA",
    phone: "+1 234 567 8901",
    joinDate: "Jan 15, 2024",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob.smith@example.com",
    role: "User",
    status: "active",
    avatar: "BS",
    location: "London, UK",
    phone: "+44 20 7946 0958",
    joinDate: "Jan 20, 2024",
  },
  {
    id: 3,
    name: "Carol White",
    email: "carol.white@example.com",
    role: "Manager",
    status: "active",
    avatar: "CW",
    location: "Sydney, Australia",
    phone: "+61 2 9374 4000",
    joinDate: "Feb 1, 2024",
  },
  {
    id: 4,
    name: "David Brown",
    email: "david.brown@example.com",
    role: "User",
    status: "inactive",
    avatar: "DB",
    location: "Toronto, Canada",
    phone: "+1 416 555 0100",
    joinDate: "Feb 5, 2024",
  },
  {
    id: 5,
    name: "Emma Davis",
    email: "emma.davis@example.com",
    role: "User",
    status: "active",
    avatar: "ED",
    location: "Berlin, Germany",
    phone: "+49 30 1234567",
    joinDate: "Feb 10, 2024",
  },
  {
    id: 6,
    name: "Frank Miller",
    email: "frank.miller@example.com",
    role: "Manager",
    status: "active",
    avatar: "FM",
    location: "Tokyo, Japan",
    phone: "+81 3 1234 5678",
    joinDate: "Feb 15, 2024",
  },
  {
    id: 7,
    name: "Grace Lee",
    email: "grace.lee@example.com",
    role: "User",
    status: "pending",
    avatar: "GL",
    location: "Singapore",
    phone: "+65 6123 4567",
    joinDate: "Feb 20, 2024",
  },
  {
    id: 8,
    name: "Henry Wilson",
    email: "henry.wilson@example.com",
    role: "Admin",
    status: "active",
    avatar: "HW",
    location: "Paris, France",
    phone: "+33 1 42 86 82 00",
    joinDate: "Feb 25, 2024",
  },
];

const roleColors = {
  Admin: "bg-purple-100 text-purple-700",
  Manager: "bg-blue-100 text-blue-700",
  User: "bg-gray-100 text-gray-700",
};

const statusColors = {
  active: "bg-green-100 text-green-700",
  inactive: "bg-red-100 text-red-700",
  pending: "bg-yellow-100 text-yellow-700",
};

export function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [selectedUser, setSelectedUser] = useState<number | null>(null);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">Users</h1>
          <p className="mt-2 text-gray-600">
            Manage your team members and their account permissions
          </p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <UserPlus className="w-5 h-5" />
          Add User
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Total Users</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900">
            {users.length}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Active</p>
          <p className="mt-1 text-2xl font-semibold text-green-600">
            {users.filter((u) => u.status === "active").length}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Inactive</p>
          <p className="mt-1 text-2xl font-semibold text-red-600">
            {users.filter((u) => u.status === "inactive").length}
          </p>
        </div>
        <div className="bg-white rounded-lg border border-gray-200 p-4">
          <p className="text-sm text-gray-600">Pending</p>
          <p className="mt-1 text-2xl font-semibold text-yellow-600">
            {users.filter((u) => u.status === "pending").length}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-gray-400" />
            <select
              value={filterRole}
              onChange={(e) => setFilterRole(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Roles</option>
              <option value="Admin">Admin</option>
              <option value="Manager">Manager</option>
              <option value="User">User</option>
            </select>
          </div>
        </div>
      </div>

      {/* Users Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">{user.avatar}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{user.name}</h3>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
              </div>
              <button
                onClick={() =>
                  setSelectedUser(selectedUser === user.id ? null : user.id)
                }
                className="text-gray-400 hover:text-gray-600"
              >
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin className="w-4 h-4" />
                {user.location}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                {user.phone}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                Joined {user.joinDate}
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2">
              <span
                className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  roleColors[user.role as keyof typeof roleColors]
                }`}
              >
                {user.role}
              </span>
              <span
                className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                  statusColors[user.status as keyof typeof statusColors]
                }`}
              >
                {user.status}
              </span>
            </div>

            {selectedUser === user.id && (
              <div className="mt-4 pt-4 border-t border-gray-200 flex gap-2">
                <button className="flex-1 px-3 py-2 text-sm bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors">
                  Edit
                </button>
                <button className="flex-1 px-3 py-2 text-sm bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
          <p className="text-gray-500">No users found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
