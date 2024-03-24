---
title: <frameset>
slug: Web/HTML/Element/frameset
l10n:
  sourceCommit: 8536cae9363a37725f9a5dcca4e064addbcc9506
---

{{HTMLSidebar}}{{Deprecated_header}}

**`<frameset>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{HTMLElement("frame")}} 要素を保持するために使用します。

> **メモ:** {{HTMLElement("iframe")}} の使用に置き換わったためフレームの使用は推奨されなくなったので、現在のウェブサイトではこの要素はほとんど使用しません。

## 属性

他のすべての HTML 要素と同様に、この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)に対応しています。

- `cols` {{Deprecated_Inline}}
  - : この属性は、フレームセット内の水平方向の領域の数と寸法を指定します。
- `rows` {{Deprecated_Inline}}
  - : この属性は、フレームセット内の垂直方向の領域の数と寸法を指定します。

## 例

### フレームセット文書

フレームセット文書では、{{HTMLElement("body")}} 要素の代わりに {{HTMLElement("frameset")}} 要素があります。{{HTMLElement("frame")}} 要素は `<frameset>` の中に配置されます。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <!-- Document metadata goes here -->
  </head>
  <frameset cols="50%, 50%">
    <frame src="https://developer.mozilla.org/en/HTML/Element/iframe" />
    <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
  </frameset>
</html>
```

文書の {{HTMLElement("body")}} 内に別の HTML ページを埋め込みたい場合は、{{HTMLElement("iframe")}} 要素を使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("frame")}}
- {{HTMLElement("iframe")}}
