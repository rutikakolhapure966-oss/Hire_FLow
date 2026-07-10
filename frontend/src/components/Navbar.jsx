import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const Navbar = () => {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <nav className="bg-primary text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          HireFlow
        </Link>

        <div className="flex gap-6 items-center">
          {user ? (
            <>
              <Link to="/jobs" className="hover:text-blue-200">Jobs</Link>
              {user.role === 'candidate' && (
                <>
                  <Link to="/candidate-dashboard" className="hover:text-blue-200">Dashboard</Link>
                  <Link to="/my-applications" className="hover:text-blue-200">My Applications</Link>
                </>
              )}
              {user.role === 'recruiter' && (
                <Link to="/recruiter-dashboard" className="hover:text-blue-200">Dashboard</Link>
              )}
              <Link to="/profile" className="hover:text-blue-200">Profile</Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-200">Login</Link>
              <Link to="/register" className="bg-secondary px-4 py-2 rounded hover:bg-green-600">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
