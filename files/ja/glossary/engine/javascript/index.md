---
title: JavaScript engine (JavaScript エンジン)
slug: Glossary/Engine/JavaScript
l10n:
  sourceCommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{GlossarySidebar}}

**JavaScript エンジン**は、 {{glossary("JavaScript")}} コードを構文解析して実行するインタープリターです。現行の JavaScript エンジンは、ジャストインタイム (JIT) コンパイルを使用して、JavaScript コードをコンピューターのプロセッサーで実行できるマシンコードに変換します。JavaScript エンジンは通常、クライアント側のコードを実行するためにウェブ{{glossary("browser", "ブラウザー")}}で開発および使用されますが、 {{glossary("Node.js")}} などのサーバー側環境でも使用することができます。

ブラウザーでは、JavaScript エンジンは、{{glossary("DOM", "ドキュメントオブジェクトモデル")}}および {{glossary("WebIDL", "Web IDL")}} バインディングを介して、レンダリングエンジンと連動して動作します。一部の JavaScript エンジンは、通常の JavaScript コードと同じサンドボックスで {{glossary("WebAssembly")}} コードも実行します。

JavaScript エンジンと、ブラウザーの重要な部分である{{glossary("engine/rendering", "レンダリングエンジン")}}を混同しないでください。

有名な JavaScript エンジンには次のようなものがあります。

- [V8](https://v8.dev/)
- [SpiderMonkey](https://spidermonkey.dev/)
- [JavaScriptCore](https://developer.apple.com/documentation/javascriptcore)

## 関連情報

- [JavaScript エンジン](https://ja.wikipedia.org/wiki/JavaScriptエンジン) (Wikipedia)
- [JavaScript 実装](/ja/docs/Web/JavaScript/Reference/JavaScript_technologies_overview#javascript_implementations)
- 関連する用語:
  - {{glossary("Engine", "エンジン")}}
  - {{glossary("JavaScript")}}
  - {{glossary("WebAssembly")}}
  - {{glossary("Browser", "ブラウザー")}}
  - {{glossary("Node.js")}}
