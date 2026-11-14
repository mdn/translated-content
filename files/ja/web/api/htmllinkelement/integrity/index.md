---
title: "HTMLLinkElement: integrity プロパティ"
short-title: integrity
slug: Web/API/HTMLLinkElement/integrity
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

**`integrity`** は {{domxref("HTMLLinkElement")}} インターフェイスのプロパティで、取得したリソースが予期しない改ざんを受けずに配信されたことをブラウザーが検証するために使用できるインラインメタデータを含む文字列です。

{{HTMLElement("link")}} 要素の `integrity` 属性を反映します。

## 値

文字列です。

## 例

```html
<link
  id="el"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous" />
```

```js
const el = document.getElementById("el");
console.log(el.integrity); // 出力結果: "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLScriptElement.integrity")}}
- [サブリソース完全性](/ja/docs/Web/Security/Defenses/Subresource_Integrity)
