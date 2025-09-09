---
title: rel="modulepreload"
slug: Web/HTML/Reference/Attributes/rel/modulepreload
l10n:
  sourceCommit: 0389dd29e0827791ad9d2f6b8cda217c121f9c19
---

{{HTMLSidebar}}

**`modulepreload`** キーワードを {{HTMLElement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Reference/Elements/link#rel) 属性に指定すると、[モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules)とその依存関係を先取りして取得し、後で実行するために文書のモジュールマップに保存するための宣言的な方法を提供します。

事前読み込みされたモジュールとその依存関係を早期にダウンロードすることができ、全体のダウンロードと処理時間を大幅に縮小することができます。
これは、各モジュールが処理され、依存関係が発見されたときに、ページがモジュールを並列に取得することを可能にするからです。
しかし、すべてを事前読み込みさせることはできないことに注意してください。
事前読み込みされたものは、使い勝手に悪影響を与えるかもしれない他の処理とのバランスを取る必要があります。

`rel="modulepreload"` を持つリンクは [`rel="preload"`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) を持つリンクと似ています。
主な違いは、 `preload` はファイルをダウンロードしてキャッシュに格納するだけですが、 `modulepreload` はモジュールを取得し、解釈してコンパイルし、その結果をモジュールマップに格納して実行できるようにします。

`modulepreload` を使用する場合、フェッチリクエストモードは常に [`cors`](/ja/docs/Web/API/Request/mode#cors) であり、 [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) プロパティを使用してリクエストの[資格情報モード](/ja/docs/Web/API/Request/credentials)を決定します。
`crossorigin` が [`anonymous`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin#anonymous) または [`""`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin#sect1) (既定) に設定されていた場合、資格情報モードは [`same-origin`](/ja/docs/Web/API/Request/credentials#same-origin) となり、Cookie や認証のようなユーザー資格情報は `same-origin` のリクエストに対してのみ送信されます。
`crossorigin` が [`use-credentials`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin#use-credentials) に設定されている場合、資格情報モードは [`include`](/ja/docs/Web/API/Request/credentials#include) となり、オリジン内・オリジン間の両方のリクエストに対してユーザー資格情報が送信されます。

[`as`](/ja/docs/Web/HTML/Reference/Elements/link#as) 属性は `rel="modulepreload"` のリンクではオプションで、 `"script"` が既定です。
`"script"` または `"audioworklet"`、`"paintworklet"`、`"serviceworker"`、`"sharedworker"`、`"worker"` などのスクリプトに似た出力先に設定することができます。
他の出力先が使用された場合、 "error" という名前の [`Event`](/ja/docs/Web/API/Event/Event) が要素に発生します。

ブラウザーはさらに、モジュールリソースの依存関係を自動的に取得することを選ぶ可能性があります。
しかし、これはブラウザー独自の最適化であることに注意してください。すべてのブラウザーでモジュールの依存関係を確実に事前読み込みさせる唯一の手法は、個別に指定することです！
さらに、`load` または `error` という名前のイベントが、指定されたリソースの読み込みに成功または失敗した直後に発生します。
依存関係が自動的に取得される場合、メインスレッドでは追加のイベントは発生しません （サービスワーカーやサーバーで追加のリクエストを監視することはできます）。

## 例

[basic-modules](https://github.com/mdn/js-examples/tree/main/module-examples/basic-modules) の例（[ライブ版](https://mdn.github.io/js-examples/module-examples/basic-modules/)）で考えてみましょう。これは [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules#basic_example_structure)ガイドで紹介したものです。

これは下記の通りのファイル構造で、最上位のモジュール `main.js` から構成され、 2 つの依存モジュール `modules/canvas.js` と `modules/square.js` を `import` 文を使用して静的にインポートしています。

```plain
index.html
main.js
modules/
    canvas.js
    square.js
```

下記の例の HTML は `<script>` 要素の中で `main.js` がどのように取得されるかを示しています。
ブラウザーは `main.js` が読み込まれた後に初めて、 2 つの依存モジュールを発見して取得します。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Basic JavaScript module example</title>
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>
    <script type="module" src="main.js"></script>
  </head>
  <body></body>
</html>
```

下記の HTML は、メインファイルと各依存モジュールに `<link>` 要素の `rel="modulepreload"` を使用するようにこの例を更新したものです。
これは、 3 つのモジュールがすべて必要になる前に非同期で並列にダウンロードを始めるため、より高速になります。
`main.js` が解釈され、依存モジュールがわかる時点で、それらはすでにフェッチされ、ダウンロードされています。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Basic JavaScript module example</title>
    <link rel="modulepreload" href="main.js" />
    <link rel="modulepreload" href="modules/canvas.js" />
    <link rel="modulepreload" href="modules/square.js" />
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>

    <script type="module" src="main.js"></script>
  </head>
  <body></body>
</html>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [投機的読み込み](/ja/docs/Web/Performance/Guides/Speculative_loading)で、`<link rel="modulepreload">` や他にも同様のパフォーマンス改善機能の比較ができます。
- [Preloading modules](https://web.dev/articles/modulepreload) (web.dev)
