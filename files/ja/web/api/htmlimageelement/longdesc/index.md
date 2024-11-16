---
title: "HTMLImageElement: longDesc プロパティ"
short-title: longDesc
slug: Web/API/HTMLImageElement/longDesc
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

**`longDesc`** は {{domxref("HTMLImageElement")}} インターフェイスの*非推奨の*プロパティで、この画像の長い説明のテキストまたは HTML ファイルの URL を指定します。これは、[`title`](/ja/docs/Web/HTML/Global_attributes/title) 属性で提供される短い説明の他に、オプションで追加された詳細を提供するために使用することができます。

## 値

空文字列（長い説明文がないことを示す）または、画像の内容の長い形式の説明文を含むファイルの URL のいずれかを指定します。

例えば、画像がフローチャートの [PNG](/ja/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) であった場合、
`longDesc` プロパティは、チャートで表現された制御の流れについて、テキストのみの説明を提供するために使用することができます。これは、読者が使用する説明としてだけでなく、視覚障碍者のための代替表現として使用することもできます。

## 使用上の注意

このプロパティは*非推奨*であり、今後使用するべきではありません。画像の詳細な説明へのリンクを提供するには、 `longDesc` を使用する代わりに、 {{HTMLElement("a")}} 要素を使用してリンク内に画像をカプセル化するようにしてください。

以下の古い HTML があったとします。

```html
<img
  src="taco-tuesday.jpg"
  alt="Taco Tuesday"
  longdesc="image-descriptions/taco-tuesday.html" />
```

ここでは `longDesc` を使って、画像 `taco-tuesday.jpg` の詳細な説明を HTML ファイル `image-descriptions/taco-tuesday.html` で参照できるようにすることを指定しています。

これは簡単に現在の HTML に変換することができます。

```html
<a href="image-descriptions/taco-tuesday.html">
  <img src="taco-tuesday.jpg" alt="Taco Tuesday" />
</a>
```

それに伴い、画像はより詳細に記述された HTML ファイルへのリンクとなります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Attributes/aria-details)
