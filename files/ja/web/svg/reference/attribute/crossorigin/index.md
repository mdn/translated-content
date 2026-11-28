---
title: crossorigin
slug: Web/SVG/Reference/Attribute/crossorigin
l10n:
  sourceCommit: 367c50159a45a513a77bd3941a4fac4bb83d6934
---

`crossorigin` 属性は、{{SVGElement("image")}}、{{SVGElement("feImage")}}、{{SVGElement("script")}} の各要素で使用でき、要素が取得するデータに対するオリジン間リソース共有 ([CORS](/ja/docs/Web/HTTP/Guides/CORS)) リクエストを構成できるようにします。

次の表に、使用できるキーワードとその意味を示します。

| キーワード        | 説明                                                                                                |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| `anonymous`       | この要素に対するクライアントの CORS リクエストでは、資格情報フラグが `same-origin` に設定されます。 |
| `use-credentials` | この要素に対するクライアントの CORS リクエストでは、資格情報フラグが `include` に設定されます。     |
| `""`              | `crossorigin` または `crossorigin=""` のように属性に空の値を設定すると、`anonymous` と同じです。    |

この属性は、HTML の [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) 属性と同じ処理規則に従います。

## 例

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <image
    href="https://example.com/mdn_logo_dark.png"
    height="200"
    width="200"
    crossorigin="use-credentials" />
</svg>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
