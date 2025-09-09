---
title: Code splitting (コード分割)
slug: Glossary/Code_splitting
l10n:
  sourceCommit: d821201936ea3f67634381b2086998ebfc29f39c
---

{{GlossarySidebar}}

**コード分割**とは、ウェブアプリケーションが依存するコード（自分自身で記述するコードとサードパーティが依存するコードを含む）を、互いに独立して読み込むことができる別個のバンドルに分割することです。
これによってアプリケーションは、指定された時点で実際に必要なコードだけを読み込むことができ、必要に応じて他のバンドルを読み込むことができます。
この手法は、アプリケーションのパフォーマンス、特に初期読み込み時のパフォーマンスを改善するために使用されます。

コード分割は [Webpack](https://webpack.js.org/) や [Browserify](https://browserify.org/) のようなバンドラーが対応している機能で、実行時に動的に読み込むことができる複数のバンドルを作成することができます。

## 関連情報

- [遅延読み込み](/ja/docs/Web/Performance/Guides/Lazy_loading)
- [HTTP/2](/ja/docs/Glossary/HTTP_2)
- [ツリーシェイキング](/ja/docs/Glossary/Tree_shaking)
