# Core & Curve Codex 引き継ぎ書

## プロジェクト概要

Core & Curve は、女性向けのボディメイク、姿勢改善、90日プログラムを紹介する静的LPです。

## 現在の公開URL

`https://lupisflora-n.github.io/core-curve/`

## 技術構成

- HTML: `index.html`
- CSS: `style.css`
- JavaScript: 現在は主に `index.html` 内に直書き
- 画像: PNG/JPG中心
- 公開方式: GitHub Pages と推定
- Cloudflare候補設定: `wrangler.jsonc`

## 現在の安全運用ルール

- mainへ直接pushしない。
- Pull Requestを勝手にmergeしない。
- force pushしない。
- GitHub Pages設定を勝手に変更しない。
- Cloudflare設定を勝手に変更しない。
- 料金、サービス内容、実績、レビュー、プロフィール事実を変更しない。
- LINE / Instagram / note URLを変更しない。
- 元画像を削除しない。

## 今回確認したこと

- PR #9 のSEO基盤修正は `main` に反映済み。
- 公開URLでも `noindex` は消えている。
- meta description、canonical、OGP、Twitter Card、favicon指定がある。
- `target="_blank"` の外部リンク6件に `rel="noopener"` がある。
- LINE URLは4件、Instagram URLは1件、note URLは1件で維持されている。

## 今回作成したブランチ

- `codex/image-lightweight-first-pass`
- `codex/scroll-lock-timing`
- `codex/js-extract-scroll-effects`
- `codex/innerhtml-safe-first-pass`
- `codex/hosting-docs-handoff`

## Pull Request状況

GitHub連携の権限不足により、CodexからPR作成はできませんでした。各ブランチはpush済みで、GitHub上のPR作成画面から作成できます。

## 変更したファイル

ブランチごとに変更内容が分かれています。

- 画像軽量化: `index.html`, `bodytrainerayaka2-light.webp`, `contest-win-light.webp`
- スクロールロック改善: `index.html`
- JS外部化第一段階: `index.html`, `script.js`
- innerHTML安全化第一段階: `index.html`
- 運用メモ/引き継ぎ: `docs/hosting-notes.md`, `CODEX_HANDOFF_CORE_CURVE.md`

## 変更していない重要項目

- 料金
- サービス内容
- 実績
- レビュー
- プロフィール事実
- LINE / Instagram / note URL
- セクション構成
- 元画像
- GitHub Pages設定
- Cloudflare設定

## 画像軽量化の状況

調査では、重い画像は以下でした。

- `優勝2.png`: 約6.8MB
- `bodytrainerayaka2.png`: 約2.3MB
- `90日プロジェクト2.png`: 約2.1MB
- `９０日モニター2.png`: 約1.9MB
- `profile_ayaka.png`: 約1.7MB

第一段階では、`優勝2.png` と `bodytrainerayaka2.png` のWebP版を作成しました。元画像は削除していません。

## 6秒スクロールロックの状況

現状のmainでは、初回表示時に `body.is-locked` によって最大6秒スクロールできない仕組みがあります。改善ブランチでは、ユーザーがタップやスクロール操作をした場合に早期解除するようにしました。

## JS外部ファイル化の状況

第一段階では、診断ロジックには触れず、スクロール演出と残り人数表示だけを `script.js` に移すブランチを作成しました。

## innerHTML安全化の状況

第一段階では、単純な文字表示だけ `textContent` に置き換えました。レビュー本文やプロフィール本文のようにHTML装飾が必要な箇所は、表示崩れを避けるため次回対応に残しています。

## Cloudflare / GitHub Pages整理の状況

設定変更はしていません。`docs/hosting-notes.md` に、GitHub Pages運用とCloudflare候補設定の違いを記録しました。

## 残タスク

- GitHub上で各ブランチのPull Requestを作成する。
- スマホ実機で表示確認する。
- 画像軽量化の残り画像を1〜2枚ずつ進める。
- 診断ロジックを含むJS外部化の次段階を検討する。
- 残った `innerHTML` をDOM生成へ置き換えるか判断する。
- 独自ドメインへ移行する場合は `canonical` / `og:url` / `twitter:url` を更新する。

## 次にやるべきこと

1. 画像軽量化PRをスマホで確認する。
2. 問題なければmergeを検討する。
3. 次にスクロールロック改善PRを確認する。
4. その後、JS外部化とinnerHTML安全化を順に確認する。

## トラブル時のRevert方針

問題が起きた場合は、該当PRをrevertしてください。revertは、変更を打ち消して前の状態に戻す操作です。たとえると、貼った新しい札をはがして元の札に戻すことです。

## 初心者向け用語説明

- branch: 本番を壊さず試す作業台。
- Pull Request: 本番に出す前の確認書。
- merge: 作業台の成果を本番に反映すること。
- revert: 変更を打ち消して前の状態に戻すこと。
- noindex: 検索結果に出さないでくださいという札。
- meta description: お店の紹介文。
- canonical: 本店住所の札。
- OGP: SNSでシェアされたときの名刺。
- WebP: 画像を軽い封筒に入れ直した形式。
- innerHTML: HTMLをそのまま差し込む強い道具。便利ですが、外から来た文字に使うと危険になることがあります。
