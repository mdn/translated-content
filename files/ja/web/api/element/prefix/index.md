---
title: "Element: prefix プロパティ"
short-title: prefix
slug: Web/API/Element/prefix
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef("DOM")}}

**`Element.prefix`** は読み取り専用プロパティで、指定された要素の名前空間の接頭辞を、接頭辞が指定されていない場合は `null` を返します。

## 値

文字列です。

## 例

次の例はコンソールに "x" を記録します。

```xml
<x:div onclick="console.log(this.prefix)"/>
```

## 注

これは、名前空間を認識するパーサーを使用しているとき、すなわち、文書が XML の MIME タイプで送信されたときのみ動作します。HTML 文書では動作しません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Element.namespaceURI")}}
- {{domxref("Element.localName")}}
- {{domxref("Attr.prefix")}}
