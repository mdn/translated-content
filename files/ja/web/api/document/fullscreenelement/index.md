---
title: DocumentOrShadowRoot.fullscreenElement
slug: Web/API/Document/fullscreenElement
original_slug: Web/API/DocumentOrShadowRoot/fullscreenElement
---

{{ApiRef("Fullscreen API")}}

**`DocumentOrShadowRoot.fullscreenElement`** プロパティは読み取り専用で、この文書内で現在全画面モードで表示されている {{ domxref("Element") }} を返し、全画面モードを使用していない場合は `null` を返します。

このプロパティは読み取り専用ですが、変更されても (strict モードでも) 例外は発生しません。設定しても何もせず、無視されます。

## 構文

```
var element = document.fullscreenElement;
```

### 返値

現在全画面モードになっている {{domxref("Element")}} オブジェクト。全画面モードがこの `document` で使用されていない場合、返値は `null` です。

## 例

この例は `isVideoInFullscreen()` 関数を表し、 `fullscreenElement` からの返値を調べています。文書が全画面モードで (`fullscreenElement` が `null` ではなく)、全画面の要素の {{domxref("Node.nodeName", "nodeName")}} が `VIDEO`、すなわち {{HTMLElement("video")}} 要素を表す場合、この関数は `true`、すなわち動画が全画面モードであることを表します。

```js
function isVideoInFullscreen() {
  if (document.fullscreenElement && document.fullscreenElement.nodeName == 'VIDEO') {
    return true;
  }
  return false;
}
```

## 仕様書

| 仕様書                                                                                                                   | 状態                             | 備考     |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------- |
| {{SpecName("Fullscreen", "#dom-document-fullscreenelement", "Document.fullscreenElement")}} | {{Spec2("Fullscreen")}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Fullscreen API](/ja/docs/Web/API/Fullscreen_API)
- [Fullscreen API ガイド](/ja/docs/Web/API/Fullscreen_API/Guide)
- {{ domxref("Element.requestFullscreen()") }}
- {{ domxref("Document.exitFullscreen()") }}
- {{ cssxref(":fullscreen") }} and {{cssxref("::backdrop")}}
- {{HTMLElement("iframe")}} の {{ HTMLAttrXRef("allowfullscreen", "iframe") }} 属性
