import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useAuth from '../hooks/useAuth'

const LandingPage = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary to-blue-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">Welcome to HireFlow</h1>
            <p className="text-xl mb-8">Modern Applicant Tracking System for Seamless Recruitment</p>
            {!user ? (
              <div className="flex gap-4 justify-center">
                <Link
                  to="/login"
                  className="bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-gray-100"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-secondary text-white px-8 py-3 rounded font-semibold hover:bg-green-600"
                >
                  Register
                </Link>
              </div>
            ) : (
              <Link
                to="/jobs"
                className="inline-block bg-secondary text-white px-8 py-3 rounded font-semibold hover:bg-green-600"
              >
                Browse Jobs
              </Link>
            )}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">For Candidates</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Browse & Search Jobs</li>
                  <li>✓ Apply Easily</li>
                  <li>✓ Track Applications</li>
                  <li>✓ Manage Profile</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">For Recruiters</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Post Job Listings</li>
                  <li>✓ Manage Applicants</li>
                  <li>✓ Track Status</li>
                  <li>✓ Build Company Profile</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold mb-3">For Admins</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>✓ Manage Users</li>
                  <li>✓ Monitor System</li>
                  <li>✓ Review Jobs</li>
                  <li>✓ Generate Reports</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default LandingPage
