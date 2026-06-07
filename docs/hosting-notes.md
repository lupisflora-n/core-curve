# Core & Curve 公開方式メモ

## 初心者向け一言

このLPは、いまは GitHub Pages で公開されていると考えるのが安全です。`wrangler.jsonc` は Cloudflare でも公開できる可能性を示す設定メモのようなものですが、今回は設定変更しません。

## 事実として確認できたこと

- 公開URL: `https://lupisflora-n.github.io/core-curve/`
- GitHubリポジトリ: `lupisflora-n/core-curve`
- `index.html` と `style.css` がリポジトリ直下にあります。
- `wrangler.jsonc` が存在します。
- `wrangler.jsonc` の `assets.directory` は `.` です。
- これは、リポジトリ直下の静的ファイルをCloudflare Workers/Assetsで配信する候補設定に見えます。

## 推定

- 現在の本番公開は GitHub Pages です。
- GitHub Pages の公開元は `main` ブランチ直下の可能性が高いです。
- Cloudflare設定は、過去または将来の公開候補として残っている可能性があります。

## 今すぐ触らない理由

- GitHub Pages設定変更は本番公開に直接影響します。
- Cloudflare設定変更も公開経路が変わる可能性があります。
- 初心者オーナーが確認する前に公開方式を変えると、「どこが本番か」が分かりにくくなります。

## 今後の判断ポイント

- 独自ドメインを使うか。
- GitHub Pagesのまま運用するか。
- Cloudflareで高速化や独自ドメイン運用をするか。
- Cloudflareへ移行する場合、`canonical`、`og:url`、`twitter:url` も新しい正式URLへ変更する必要があります。

## 用語メモ

- GitHub Pages: GitHubに置いたHTMLをそのまま公開する仕組み。たとえると、倉庫の棚をそのままお店として開けるようなものです。
- Cloudflare: 表示高速化や公開の仕組みを細かく管理できるサービス。たとえると、お店の前に案内係や高速道路を用意するようなものです。
- `wrangler.jsonc`: Cloudflare用の設定ファイル。たとえると、Cloudflareでお店を開く場合の設計図です。
- canonical: 正式URLを検索エンジンへ伝える札。たとえると、本店住所の札です。
