---
title: "console: warn() 静的メソッド"
short-title: warn()
slug: Web/API/console/warn_static
l10n:
  sourceCommit: bcc977bc3e79a87edd64cd9ef977b515f63daa2c
---

{{APIRef("Console API")}} {{AvailableInWorkers}}

**`console.warn()`** メソッドは、コンソールに "warning" ログレベルで警告メッセージを出力します。このメッセージは、コンソールが警告出力の表示に設定されている場合にのみユーザーに表示されます。ほとんどの場合、ログレベルはコンソールのユーザーインターフェース内で設定されます。メッセージには、黄色や警告アイコンなどの特別な書式化が行われます。

## 構文

```js-nolint
console.warn(val1)
console.warn(val1, /* …, */ valN)
console.warn(msg)
console.warn(msg, subst1, /* …, */ substN)
```

## 引数

- `val1` … `valN`
  - : 出力する JavaScript 値のリスト。これらのそれぞれの値の表現が、指定された順序でコンソールに出力され、それぞれの間には何らかの区切りが挿入されます。`val1` が文字列である場合の特別な場合については、後述します。
- `msg`
  - : 置換文字列をゼロ個以上含む JavaScript 文字列。置換文字列は、置換文字列の数まで順に `subst1` から `substN` で置き換えられます。置換の仕組みについては、[文字列置換の使用](/ja/docs/Web/API/console#文字列置換の使用)を参照してください。
- `subst1` … `substN`
  - : `msg` 内の置換文字列を置き換える JavaScript 値。置換値が置換文字列の数より多い場合、余分な値は書式文字列が存在しない場合と同様に、詳細なアサーションメッセージの後にコンソールへ直接出力されます。

詳細については、[コンソールへのテキストの出力](/ja/docs/Web/API/console#コンソールへのテキストの出力)（{{domxref("console")}} のドキュメント）を参照してください。

### 返値

なし ({{jsxref("undefined")}})。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Microsoft Edge's documentation for `console.warn()`](https://learn.microsoft.com/en-us/microsoft-edge/devtools/console/api#warn)
- [Node.js documentation for `console.warn()`](https://nodejs.org/docs/latest/api/console.html#consolewarndata-args)
- [Google Chrome's documentation for `console.warn()`](https://developer.chrome.com/docs/devtools/console/api/#warn)
