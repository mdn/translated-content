---
title: Server-side rendering (サーバーサイドレンダリング) (SSR)
slug: Glossary/SSR
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**サーバーサイドレンダリング** (SSR) とは、サーバー側で HTM Lコンテンツを生成し、クライアントに送信する手法を指します。 SSR は、 {{glossary("CSR", "クライアントサイドレンダリング")}} （クライアントが JavaScript を使用して HTML コンテンツを生成する）とは対照的です。両方の手法は相互に排他的ではなく、同じアプリケーション内で併用できます。 

{{glossary("SSG", "静的 サイト")}}は、 SSR と見なすことができ（ SS Rインフラストラクチャを使用して生成することもできます）、微妙な違いがあります。静的サイトのコンテンツは、リクエスト時ではなくビルド時に生成されます。静的サイトは多くの場合、サーバーにデプロイする必要がなく、 CDN から配信できます。 

SSR / CSR の区別は、リアルタイム更新やユーザー固有のコンテンツなど、動的なコンテンツを持つサイトでより意味を持ちます。このような場合、サーバーはリクエストごとに HTML コンテンツをオンザフライで生成します。これは、あらゆるページを事前に生成することは現実的ではないためです。HTM Lファイルにはほぼ完全なページコンテンツが含まれており、JavaScriptアセットはインタラクティブ機能を実現するためのみに使用されます。

SSR の利点は次のとおりです。 

- アクセシビリティ： インターネットの速度が遅い場合、ユーザーがJavaScriptを無効にしている場合、またはブラウザが古くて JavaScript が実行できない場合など、 JavaScript なしでもページは（ある程度）使用できます。ただし、インタラクティブ機能やクライアントサイドのロジックは動作しません。
- クローラーフレンドリー： 検索エンジン、ソーシャルメディアクローラー、その他のボットは、 JavaScript を実行せずにコンテンツを簡単に読み取ることができます。主要な検索エンジンは JavaScript を実行できるため、純粋な CSR サイトはインデックスできますが、ソーシャルメディアクローラーは通常 JavaScript を実行できないことに注意してください。
- パフォーマンス： サーバーは必要なコンテンツを事前に把握でき、必要なデータをすべて一度に取得できます。一方、 CSR では、クライアントは最初のページをレンダリングするときにのみ追加の依存関係を認識することが多く、リクエストのウォーターフォールが発生します。

SSR と CSR はどちらもパフォーマンス面でトレードオフがあり、 SSR と CSR を組み合わせることで両方の手法の利点を活かすことができます。例えば、サーバーは空のプレースホルダを含むページのスケルトンを生成し、クライアントは必要に応じて追加データを取得してページを更新することができます。

## See also

- [Introduction to client-side frameworks > server-side rendering](/en-US/docs/Learn_web_development/Core/Frameworks_libraries/Introduction#server-side_rendering)
- [Server-side scripting](https://en.wikipedia.org/wiki/Server-side_scripting) on Wikipedia
- {{glossary("CSR", "Client-side rendering")}}
- {{glossary("SSG", "Static site generator")}}
- {{glossary("SPA", "Single-page application")}}
