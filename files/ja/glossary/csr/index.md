---
title: Client-side rendering (クライアントサイドレンダリング) (CSR)
slug: Glossary/CSR
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**クライアントサイドレンダリング** (CSR) はブラウザー内で JavaScript を使用して HTML コンテンツを作る手法を指します。 CSR は、サーバーが HTML コンテンツを作る {{glossary("SSR", "server-side rendering")}} と対照的です。これらの 2 つの技術は互いに排他的でなく、同じアプリケーションで使えます。

純粋な CSR アプリは以下のような HTML コンテンツを返します。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <title>My App</title>
    <script src="bundle.js"></script>
  </head>
  <body>
    <div id="root"></div>
    <noscript>
      <p>このアプリはJavaScriptの実行が必要です。</p>
    </noscript>
  </body>
</html>
```

そして、実際のページコンテンツは、`bundle.js`内の JavaScript によって [DOM操作](/ja/docs/Web/API/Document_Object_Model) を使って作ります。

CSR のメリットは以下の通りです。

- 操作のしやすさ: ルート遷移を含むあらゆるページ更新において、ページ全体の再読み込みが不要です。これにより、アプリの動作がより速く、応答性が高く感じられます。
- パフォーマンス: サーバーは初めの HTML コンテンツと JavaScript アセットを送るだけで良いです。続きのページの更新は API から取ることができ、これは完全な HTML ページを取得するよりも速く、サーバーへの負荷も減ります。

SSR と CSR はどちらもパフォーマンス上のトレードオフがあり、SSR と CSR を組み合わせることで互いの技術のメリットを活かすことができます。例えば、サーバー側で空のプレースホルダーを含むページ骨組みを生成し、クライアント側で追加データを取って必要に応じてページを書き換えられます。

{{glossary("SPA", "単一ページアプリケーション")}} は、サイトが CSR で無くても良いことに気をつけてください。[React](/ja/docs/Learn_web_development/Core/Frameworks_libraries/React_getting_started), [Vue](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Vue_getting_started), や [Svelte](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Svelte_getting_started) のようなモダンなフレームワークでは、SSR 機能を備えた SPA を作るために使えます。

## 関連情報

- [クライアントサイドフレームワークの概要 > サーバーサイドレンダリング](/ja/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#サーバーサイドレンダリング)
- Wikipedia の [動的ウェブページ](https://ja.wikipedia.org/wiki/%E5%8B%95%E7%9A%84%E3%82%A6%E3%82%A7%E3%83%96%E3%83%9A%E3%83%BC%E3%82%B8)
- {{glossary("SSR", "Server-side rendering")}}
- {{glossary("SSG", "Static site generator")}}
- {{glossary("SPA", "単一ページアプリケーション")}}
