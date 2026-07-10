import { useState } from 'react'

const JobCard = ({ job, onApply, isApplied }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-dark mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-2">{job.company}</p>
      <p className="text-gray-700 mb-4 line-clamp-2">{job.description}</p>
      
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 bg-primary text-white py-2 rounded hover:bg-blue-600">
          View Details
        </button>
        {onApply && (
          <button
            onClick={() => onApply(job.id)}
            disabled={isApplied}
            className={`flex-1 py-2 rounded ${
              isApplied
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-secondary text-white hover:bg-green-600'
            }`}
          >
            {isApplied ? 'Applied' : 'Apply'}
          </button>
        )}
      </div>
    </div>
  )
}

export default JobCard
