---
title: "HTMLScriptElement: noModule プロパティ"
short-title: noModule
slug: Web/API/HTMLScriptElement/noModule
l10n:
  sourceCommit: a16dd5636df94af17c519d5e1eaaaf967acd8203
---

{{APIRef("HTML DOM")}}

**`noModule`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、[ES モジュール](/ja/docs/Web/JavaScript/Guide/Modules)に対応したブラウザーでスクリプトを実行するかどうかを論理値で示します。実際、これは JavaScript モジュールに対応していない古いブラウザーで代替スクリプトを提供するために使用することができます。

これは {{HTMLElement("script")}} 要素の `nomodule` 属性を反映したものです。

## 値

論理値で、`true` は ES モジュールに対応しているブラウザーではスクリプトを実行しないことを意味し、`false` はそうでないことを意味します。

## 例

```html
<script id="el" nomodule>
  // ブラウザーが JavaScript モジュールに対応している場合、以下のスクリプトは実行されません。
  console.log("このブラウザーは JavaScript モジュールに対応していません");
</script>
```

```js
const el = document.getElementById("el");
console.log(el.noModule); // 出力: true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
