---
title: "HTMLMediaElement: canPlayType() メソッド"
short-title: canPlayType()
slug: Web/API/HTMLMediaElement/canPlayType
l10n:
  sourceCommit: 2b554506d84d016d3ddf612c593bd8315833c64d
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} の **`canPlayType()`** メソッドは、現在のブラウザーが指定された MIME タイプのメディアを再生できるかどうかを報告します。

## 構文

```js-nolint
canPlayType(type)
```

### 引数

- `type`
  - : 文字列で、メディアの MIME タイプと（オプションで） [`codecs` 引数](/ja/docs/Web/Media/Formats/codecs_parameter)で対応しているコーデックのカンマ区切りのリストで指定します。

### 返値

メディアを再生できる可能性がどの程度あるかを示す文字列です。
この文字列は以下の値のいずれかです。

- `""` (空文字列)
  - : このメディアは現在の機器では再生できません。
- `probably`
  - : このメディアは、おそらくこのデバイスで再生可能です。
- `maybe`
  - : メディアが再生可能かどうかを判断するための十分な情報がありません（実際に再生が試みられるまで）。

## 例

```js
let obj = document.createElement("video");
console.log(obj.canPlayType("video/mp4")); // "maybe"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.canPlayType()` メソッドを定義しているインターフェイス
- {{domxref("MediaCapabilities")}}
- [ウェブコンテンツのメディア対応に関する問題への対応](/ja/docs/Web/Media/Formats/Support_issues)
- [メディア種別と形式のガイド](/ja/docs/Web/Media/Guides/Formats)
- [よくあるメディア種別のコーデック](/ja/docs/Web/Media/Formats/codecs_parameter)
