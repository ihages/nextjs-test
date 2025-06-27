export default function UserProfile({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {params.id}</p>
      <a href="/">Back to Home</a>
    </div>
  );
}
