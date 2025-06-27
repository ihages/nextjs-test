'use client';

import { useRouter } from 'next/navigation';

export default function NavigationExample() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/about');
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <h1>Navigation Example</h1>
      <button onClick={handleNavigate}>Go to About</button>
      <button onClick={handleBack}>Go Back</button>
      <button onClick={() => router.replace('/home')}>Replace with Home</button>
    </div>
  );
}
