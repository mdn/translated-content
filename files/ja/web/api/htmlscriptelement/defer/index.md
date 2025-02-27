---
title: "HTMLScriptElement: defer プロパティ"
short-title: defer
slug: Web/API/HTMLScriptElement/defer
l10n:
  sourceCommit: 3d57022613fbc562cc948938972aeffcaece819b
---

{{APIRef("HTML DOM")}}

**`defer`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、スクリプトの実行方法を論理値で制御します。クラシックスクリプトの場合、`defer` プロパティを `true` に設定すると、外部スクリプトは文書が構文解析された後、`DOMContentLoaded` イベントを発行する前に実行されます。[モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules)の場合、`defer` プロパティは何の効果もありません。

これは {{HTMLElement("script")}} 要素の `defer` 属性を反映します。

## 値

論理値です。

## 例

```html
<script id="el" src="/example.js" defer></script>
```

```js
const el = document.getElementById("el");
console.log(el.defer); // 出力: true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLScriptElement.async")}}
