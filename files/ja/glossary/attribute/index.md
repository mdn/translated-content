---
title: Attribute (属性)
slug: Glossary/Attribute
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**属性** (attribute) 属性は {{Glossary("HTML")}} と {{Glossary("XML")}} の{{Glossary("element", "要素")}}を拡張し、動作を変更したりメタデータを提供したりします。

属性は常に `name="value"` の形を取ります（属性の識別子に関連付けられた値が続きます）。等号や値のない属性を見かけることもあります。これは HTML では空文字列を提供する略記法です。しかし、これは XML では有効ではありません。XML はすべての属性に明確な値が必要です。

HTML 属性にはたくさんの{{Glossary("Boolean/HTML", "論理属性")}}があります。これらの属性の値は、その属性の有無によってのみ制御されます。詳しくは、{{Glossary("Boolean/HTML", "論理属性")}}を参照してください。

## 属性の反映

属性は、特定のインターフェイスのの特定のプロパティに反映されることがあります。

これは、JavaScript で、対応するインターフェイスのプロパティを通じて属性の値を直接読み書きできるということ、またその逆も同様であることを意味します。
これらの反映プロパティは、{{domxref("Element")}} インターフェイスの {{domxref("Element.getAttribute()","getAttribute()")}} および {{domxref("Element.setAttribute()","setAttribute()")}} メソッドを使用して属性を取得・設定するよりも、より自然なプログラミング手法を提供します。

情報については、[属性の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes)を参照してください。

## 関連情報

- [HTML 属性リファレンス](/ja/docs/Web/HTML/Reference/Attributes)
- [属性の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes)
- HTML の[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)についての情報
- XML StartTag Attribute Recommendation - [W3C XML Recommendation](https://www.w3.org/TR/xml/#sec-starttags)
- 関連用語:
  - {{Glossary("Element", "要素")}}
  - {{Glossary("Tag", "タグ")}}
  - {{Glossary("HTML")}}
  - {{Glossary("XML")}}
  - {{Glossary("Boolean/HTML", "論理属性")}}
  - {{Glossary("Enumerated", "列挙型属性")}}
