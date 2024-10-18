---
title: "HTMLIFrameElement: allowFullscreen プロパティ"
short-title: allowFullscreen
slug: Web/API/HTMLIFrameElement/allowFullscreen
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

**`allowFullscreen`** は {{domxref("HTMLIFrameElement")}} インターフェイスのプロパティで、{{HTMLElement("iframe")}} 要素の `allowfullscreen` 属性を反映する論理値であり、この iframe のコンテンツが {{domxref("Element.requestFullscreen", "requestFullscreen()")}} を使用することを許可するかどうかを示します。

> [!NOTE]
> このプロパティは古いプロパティとみなされています。`allow="fullscreen"` および {{domxref("HTMLIFrameElement.allow")}} を代わりに使用してください。

## 値

論理値です。

## 例

```html
<iframe id="el" allowfullscreen></iframe>
```

```js
const el = document.getElementById("el");
console.log(el.allowFullscreen); // 出力: true
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [全画面 API](/ja/docs/Web/API/Fullscreen_API)
- {{domxref("Element.requestFullscreen()")}}
- [権限ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)
- {{httpheader("Permissions-Policy/fullscreen", "fullscreen")}} 権限ポリシーディレクティブ
