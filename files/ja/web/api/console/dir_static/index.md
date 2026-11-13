---
title: "console: dir() 静的メソッド"
short-title: dir()
slug: Web/API/console/dir_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.dir()`** 静的メソッドは、指定された JavaScript オブジェクトのプロパティ一覧を表示します。ブラウザーのコンソールでは、出力は階層リストとして表示され、子オブジェクトの内容を確認できる展開する三角記号が付いています。

他のログ出力メソッドとは異なり、`console.dir()` はオブジェクトを整形して表示しようとはしません。例えば、DOM 要素を `console.dir()` に渡した場合、要素インスペクターと同様に表示されるのではなく、プロパティのリストが表示されます。

![Firefox コンソールで `console.dir(document.location)` を実行した際のスクリーンショット。ページの URL と、次のプロパティのブロックを確認できます。プロパティが関数またはオブジェクトの場合、展開三角記号が先頭に付加されます。](console-dir.png)

{{glossary("Node.js", "Node")}} や {{glossary("Deno")}} のようなランタイムでは、コンソール出力は端末に送信されるため対話的ではなく、`options` 引数によってオブジェクトの表示方法をカスタマイズできます。

## 構文

```js-nolint
console.dir(object)
console.dir(object, options)
```

### 引数

- `object`
  - : プロパティを表示すべき JavaScript オブジェクト。
- `options` {{optional_inline}}
  - : 次のプロパティを持つオブジェクト（すべてオプションです）。
    - `colors` {{non-standard_inline}} {{optional_inline}}
      - : 論理値: `true`の場合、オブジェクトのプロパティをその型に応じてスタイル設定します。デフォルト値は`true`です。
    - `depth` {{non-standard_inline}} {{optional_inline}}
      - : オブジェクトがそれ以外のオブジェクトや配列を含む場合に、出力する入れ子階層の数を表す数値。値 `null` は「すべての階層を出力する」ということを意味します。デフォルトは 2 です。
    - `showHidden` {{non-standard_inline}} {{optional_inline}}
      - : 論理値: `true` の場合、オブジェクトの列挙不可能なプロパティとシンボルプロパティを表示します。デフォルトは `false` です。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Microsoft Edge's documentation for `console.dir()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#dir)
- [Node.js documentation for `console.dir()`](https://nodejs.org/docs/latest/api/console.html#consoledirobj-options)
- [Google Chrome's documentation for `console.dir()`](https://developer.chrome.com/docs/devtools/console/api/#dir)
