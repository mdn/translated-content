---
title: "HTMLMediaElement: duration プロパティ"
short-title: duration
slug: Web/API/HTMLMediaElement/duration
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} の読み取り専用プロパティ **`duration`** は、この要素のメディアの長さを秒単位で表します。

## 値

メディアの再生時間を秒単位で示す倍精度浮動小数点値。メディアデータがない場合、値 `NaN` を返します。ライブメディアストリームのように、要素のメディアの再生時間が不明な場合、 `duration` の値は `+Infinity` となります。

## 例

```js
const obj = document.createElement("video");
console.log(obj.duration); // NaN
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブメディア技術](/ja/docs/Web/Media)
- {{domxref("HTMLMediaElement.currentTime")}}: メディアの現在の再生位置
- {{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素
