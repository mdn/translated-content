---
title: "HTMLMediaElement: preload プロパティ"
short-title: preload
slug: Web/API/HTMLMediaElement/preload
l10n:
  sourceCommit: 81e8c2870cff074b1daa7685788c51f5cac4e75c
---

{{APIRef("HTML DOM")}}

**`preload`** は {{domxref("HTMLMediaElement")}} インターフェイスのプロパティで、製作者がどうすればもっとも使い勝手が良くなると考えているかについて、ブラウザーに与えるヒントを示す文字列です。

これは {{HTMLElement("audio")}} 要素と {{HTMLElement("video")}} 要素の `preload` 属性を反映しています。

## 値

文字列です。取りうる値は次の通りです。

- `none`
  - : このメディアを事前読み込みすべきではないことを示します。
- `metadata`
  - : メディアのメタデータ（長さなど）のみを取得することを示します。
- `auto`
  - : ユーザーが使用する予定がなくても、メディアファイル全体をダウンロードすることができることを示します。
- _空文字列_
  - : `auto` の値の別名です。

## 例

```html-nolint
<video
  id="el"
  controls
  src="https://example.com/media.mp4"
  poster="https://example.com/media.jpg"
  width="800"
  height="600"
  preload="metadata">
  申し訳ありませんが、お使いのブラウザーは埋め込み動画に対応していません。<a href="https://example.com/media.mp4" download="media.mp4">ダウンロードする</a>ことで、お好きな動画プレイヤーでご覧いただけますのでご安心ください！
</video>
```

```js
const el = document.getElementById("el");
console.log(el.preload); // 出力: "metadata"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
