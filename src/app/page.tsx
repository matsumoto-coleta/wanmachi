import UserProfile from "@/components/auth/UserProfile";

export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">
          わんまちアプリ
        </h1>
        <div className="mb-8">
          <UserProfile />
        </div>
      </div>
    </div>
  );
}
