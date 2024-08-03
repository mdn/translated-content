---
title: "HTMLScriptElement: async プロパティ"
short-title: async
slug: Web/API/HTMLScriptElement/async
l10n:
  sourceCommit: 3d57022613fbc562cc948938972aeffcaece819b
---

{{APIRef("HTML DOM")}}

**`async`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、スクリプトの実行方法を論理値で制御します。クラシックスクリプトの場合、`async` プロパティを `true` に設定すると、構文解析と並列に外部スクリプトが取得され、利用できるようになるとすぐに評価されます。[モジュールスクリプト](/ja/docs/Web/JavaScript/Guide/Modules)の場合、`async` プロパティを `true` に設定すると、スクリプトとその依存関係がすべて並列に取得され、利用できるようになるとすぐに評価されます。

これは {{HTMLElement("script")}} 要素の `async` 属性を反映しています。

## 値

論理値です。

## 例

```html
<script id="el" src="/example.js" async></script>
```

```js
const el = document.getElementById("el");
console.log(el.async); // 出力: true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLScriptElement.defer")}}
