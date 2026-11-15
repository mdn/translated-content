---
title: "HTMLSourceElement: type プロパティ"
short-title: type
slug: Web/API/HTMLSourceElement/type
l10n:
  sourceCommit: 9f7e7e9075e9f2b1937d2c8000f52a8ff76bff52
---

{{APIRef("HTML DOM")}}

**`type`** は {{domxref("HTMLSourceElement")}} インターフェイスのプロパティで、メディアリソースの {{glossary("MIME type", "MIME タイプ")}}を表す文字列です。

このプロパティは、{{HTMLElement("source")}} 要素の `type` 属性を反映します。

## 値

文字列です。

## 例

```html
<video>
  <source
    id="el"
    src="large.webp"
    type="video/webp"
    media="screen and (width >= 600px)" />
</video>
```

```js
const el = document.getElementById("el");
console.log(el.type); // 出力結果: "video/webp"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLSourceElement.src")}}
- {{domxref("HTMLSourceElement.srcset")}}
- {{domxref("HTMLSourceElement.media")}}
- {{domxref("HTMLSourceElement.sizes")}}
- {{htmlelement("source")}}
- {{htmlelement("picture")}}
- {{htmlelement("audio")}}
- {{htmlelement("video")}}
- [ウェブ上のメディア形式](/ja/docs/Web/Media/Guides/Formats)
- [ウェブ開発者向けの重要な MIME タイプ](/ja/docs/Web/HTTP/Guides/MIME_types#ウェブ開発者向けの重要な_mime_タイプ)
- [Media Capabilities API](/ja/docs/Web/API/Media_Capabilities_API)
