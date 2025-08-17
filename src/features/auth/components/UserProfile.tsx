"use client";

import { useAuth } from "@/hooks/useAuth";

export default function UserProfile() {
  const { user, loading, signOut } = useAuth();

  if (loading) {
    return <div>読み込み中...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium text-gray-900">ユーザー情報</h3>
          <p className="text-sm text-gray-600">メール: {user.email}</p>
          <p className="text-sm text-gray-600">
            登録日: {new Date(user.created_at).toLocaleDateString("ja-JP")}
          </p>
        </div>
        <button
          type="button"
          onClick={signOut}
          className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          ログアウト
        </button>
      </div>
    </div>
  );
}
