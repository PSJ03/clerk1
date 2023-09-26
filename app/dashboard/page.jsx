import React from 'react'

const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-2x1 font-bold mb-5">Dashboard 대시보드</h1>
      <p className="mb-5">
        Welcome to Dashboard! 로그인된 사용자의 정보를 보여주는 페이지입니다.
        <br />
        <br />
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_Y3JlZGlibGUtc3VuYmVhbS0xNC5jbGVyay5hY2NvdW50cy5kZXYk
        CLERK_SECRET_KEY=sk_test_wNXMsbPCHR6iLPeAz1PJH8jkq5QKRLu0ku53EJ5Yvu
      </p>
    </div>
  )
}

export default DashboardPage
