---
title: "HTMLLinkElement: disabled プロパティ"
short-title: disabled
slug: Web/API/HTMLLinkElement/disabled
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

**`disabled`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、リンクが無効かどうかを表す論理値です。`rel` プロパティが `stylesheet` に設定されたスタイルシートリンクでのみ効果があります。

読み込み時の HTML に `disabled` 属性が指定されている場合、ページの読み込み中にスタイルシートは読み込まれません。代わりに、`disabled` プロパティが `false` に設定されるか、`disabled` 属性が削除されたときにのみスタイルシートが読み込まれます。JavaScript で `disabled` プロパティを設定すると、そのスタイルシートは文書の {{domxref("Document.styleSheets")}} リストから削除されます。

このプロパティは、{{HTMLElement("link")}} 要素の `disabled` 属性を反映します。

## 値

論理値です。

## 例

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  disabled
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.disabled); // 出力結果: true

// スタイルシートを有効にするには disabled プロパティを false に設定する
el.disabled = false;
console.log(el.disabled); // 出力結果: false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLScriptElement.integrity")}}
- [サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)
