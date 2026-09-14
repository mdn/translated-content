---
title: "console: dirxml() 静的メソッド"
short-title: dirxml()
slug: Web/API/console/dirxml_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}}

**`console.dirxml()`** 静的メソッドは、指定した XML/HTML 要素の子孫要素を対話式ツリーを表示します。要素として表示できない場合は、代わりに JavaScript オブジェクトのビューを表示します。出力は、子ノードの内容を見ることができる展開可能なノードの階層的なリストとして表示されます。

## 構文

```js-nolint
console.dirxml(object)
```

### 引数

- `object`
  - : プロパティを出力する JavaScript オブジェクト

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Microsoft Edge's documentation for `console.dirxml()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#dirxml)
- [Node.js documentation for `console.dirxml()`](https://nodejs.org/docs/latest/api/console.html#consoledirxmldata)
- [Google Chrome's documentation for `console.dirxml()`](https://developer.chrome.com/docs/devtools/console/api/#dirxml)
