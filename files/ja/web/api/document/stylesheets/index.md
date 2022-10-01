---
title: DocumentOrShadowRoot.styleSheets
slug: Web/API/Document/styleSheets
original_slug: Web/API/DocumentOrShadowRoot/styleSheets
---

{{SeeCompatTable}}{{APIRef("Shadow DOM")}}

{{domxref("DocumentOrShadowRoot")}} インターフェイスの **`styleSheets`** 読み取り専用プロパティは、 {{domxref('CSSStyleSheet')}} オブジェクトの {{domxref('StyleSheetList')}} を返します。ドキュメントに明示的にリンクまたは埋め込まれたスタイルシートの場合。

## 例

```js
function getStyleSheet(unique_title) {
  for (var i=0; i<document.styleSheets.length; i++) {
    var sheet = document.styleSheets[i];
    if (sheet.title == unique_title) {
      return sheet;
    }
  }
}
```

### Notes

返されるリストは次の順序で並べられます:

- {{htmlelement("link")}} ヘッダから取得したスタイルシートが最初に配置され、ヘッダ順に並べ替えられます。
- DOM から取得したスタイルシートは、[ツリー順](https://dom.spec.whatwg.org/#concept-tree-order)にソートされた後に配置されます。

## 仕様

| 仕様                                                                                                                             | ステータス                       | 備考     |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('Shadow DOM','#extensions-to-the-documentorshadowroot-mixin','DocumentOrShadowRoot')}} | {{Spec2('Shadow DOM')}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}
