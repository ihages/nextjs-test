'use client'

import { useEffect } from 'react'

export default function GlobalError({ 
  error, 
  reset 
}: { 
  error: { digest?: string } & Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to the console for debugging
    console.error('Global error:', error)
  }, [error])

  return (
    <html lang="en">
      <body>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Something went wrong!</h2>
          <p>An unexpected error has occurred.</p>
          <button
            onClick={reset}
            style={{
              padding: '10px 20px',
              backgroundColor: '#0070f3',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
