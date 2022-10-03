---
title: <frameset>
slug: Web/HTML/Element/frameset
---

{{HTMLRef}}{{Deprecated_header}}

**HTML の `<frameset>` 要素**は、 {{HTMLElement("frame")}} 要素を包含するために使用する HTML 要素です。

> **メモ:** {{HTMLElement("iframe")}} の使用が支持されたことからフレームの使用は好ましくないため、一般的に現行のウェブサイトではこの要素を使用しません。

## 属性

他のすべての HTML 要素と同様に、この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)に対応しています。

- {{htmlattrdef("cols")}}
  - : この属性は、フレームセット内の水平方向の領域の数と寸法を指定します。
- {{htmlattrdef("rows")}}
  - : この属性は、フレームセット内の垂直方向の領域の数と寸法を指定します。

## 例

```html
<frameset cols="50%,50%">
  <frame src="https://developer.mozilla.org/ja/docs/Web/HTML/Element/frameset" />
  <frame src="https://developer.mozilla.org/ja/docs/Web/HTML/Element/frame" />
</frameset>
```

## ブラウザーの互換性

{{Compat("html.elements.frameset")}}

## 関連情報

- {{HTMLElement("frame")}}
- {{HTMLElement("iframe")}}
