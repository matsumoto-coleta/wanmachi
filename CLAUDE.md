# CLAUDE.md

このファイルは、このリポジトリでコードを扱う際のClaude Code (claude.ai/code) に対するガイダンスを提供します。

## 開発コマンド

**コア開発**
- `pnpm dev` - 開発サーバーを http://localhost:3000 で起動
- `pnpm build` - 本番用ビルド
- `pnpm start` - 本番サーバー起動

**コード品質 (Biome)**
- `pnpm lint` - リント問題をチェック
- `pnpm lint-fix` - リント問題を自動修正
- `pnpm format` - フォーマットをチェック
- `pnpm format-fix` - フォーマットを自動修正
- `pnpm check` - リントとフォーマットの両方をチェック
- `pnpm check-fix` - リントとフォーマットの両方を自動修正

**パッケージ管理**
- `pnpm install` - 依存関係をインストール
- `pnpm add <package>` - 実行時依存関係を追加
- `pnpm add -D <package>` - 開発依存関係を追加

**ツールバージョン管理 (mise)**
- `mise install` - 必要なNode.js 24.3.0、npm 11.4.2、pnpm 10.12.4をインストール
- `mise current` - 現在のツールバージョンを確認

## アーキテクチャ

**Next.js App Routerの構造**
- Next.js 15.4.6をApp Routerで使用（Pages Routerではない）
- `src/app/`ディレクトリでファイルベースルーティング
- `src/app/layout.tsx`でルートレイアウト（フォント（Geist）とメタデータを処理）
- `src/app/page.tsx`でホームページ

**技術スタック**
- React 19.1.0とTypeScript 5.x（strict mode）
- スタイリングにTailwind CSS 4.x
- リント/フォーマットにBiome（カスタムルール設定済み）
- next/fontとGeistフォントファミリーを使用したフォント最適化
- 認証にSupabase Auth（@supabase/supabase-js、@supabase/ssr）

**コード品質設定**
- Biomeは`biome.json`でカスタムルールを設定
- JavaScript/TypeScriptでダブルクォート使用
- 2スペースインデント
- インポート整理が有効
- コンソールログはerror/warn/info/tableに制限
- 各種TypeScriptとReact固有のルールを設定

## ディレクトリ構造

**フィーチャーベースアーキテクチャ**
```
src/
├── app/                 # Next.js App Router ページ
├── components/         # 汎用コンポーネント
│   ├── ui/            # 基本UIコンポーネント（Button、Input等）
│   └── layout/        # レイアウト関連コンポーネント
├── features/          # 機能別コンポーネント
│   └── auth/         # 認証機能
│       ├── components/  # 認証専用コンポーネント
│       ├── hooks/      # 認証専用フック（必要時）
│       └── types/      # 認証関連型定義
├── hooks/             # 全体で使用するカスタムフック
├── lib/              # 外部ライブラリ設定
└── middleware.ts     # Next.js ミドルウェア（認証制御）
└── utils             # 全体共通のロジックのうち、React Hooksがないもの
└── constants         # 定数定義
```

**コンポーネント分類ルール**
- `components/`: 複数の機能・ページで再利用される汎用コンポーネント
- `features/`: 特定の機能に特化したコンポーネント（ページ固有でも可）
- `hooks/`: 全体で使用される可能性があるフック
- `features/*/hooks/`: その機能専用のフック

## 認証システム

**Supabase Auth統合**
- Email/パスワード認証を実装済み
- Server Components（@supabase/ssr）とClient Components対応
- ミドルウェアによる自動認証チェック・リダイレクト
- 環境変数：`.env.local`にSupabase URLとAnon Keyを設定

**認証フロー**
- 新規登録：`/signup` → メール確認 → 自動ログイン
- ログイン：`/login` → ホームページリダイレクト
- 未認証時：保護されたページから`/login`へリダイレクト
- ログアウト：ホームページのユーザープロフィールから実行

## 重要な注意事項

- このプロジェクトはパッケージマネージャーとして**pnpm**を使用（npm/yarnではない）
- BiomeがほとんどのリントタスクでESLintを置き換える
- ファイルパスはメインアプリケーションコードに`src/app/`構造を使用
- 認証が必要なページは自動的に保護される（middleware.ts）