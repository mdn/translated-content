---
title: "console: clear() 静的メソッド"
short-title: clear()
slug: Web/API/console/clear_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}}

**`console.clear()`** 静的メソッドは、可能であればコンソールを消去します。

ウェブブラウザーのようなグラフィカルコンソールでは、以前のメッセージがすべて除去されます。Node.js のような端末に表示されるコンソールでは、エスケープコードやシステム API を使用してクリアを試みます。それ以外の方法では効果はありません（エラーも発生しません）。

## 構文

```js-nolint
console.clear()
```

### 引数

なし。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Microsoft Edge's documentation for `console.clear()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#clear)
- [Node.js documentation for `console.clear()`](https://nodejs.org/docs/latest/api/console.html#consoleclear)
- [Google Chrome's documentation for `console.clear()`](https://developer.chrome.com/docs/devtools/console/api/#clear)
