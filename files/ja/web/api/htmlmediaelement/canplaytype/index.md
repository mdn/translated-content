---
title: HTMLMediaElement.canPlayType()
slug: Web/API/HTMLMediaElement/canPlayType
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLMediaElement")}} の **`canPlayType()`** メソッドは、現在のブラウザーが指定された MIME タイプのメディアを再生できるかどうかを報告します。

> **メモ:** この機能は[ウェブワーカー](/ja/docs/Web/API/Web_Workers_API)では利用できません。

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
let obj = document.createElement('video');
console.log(obj.canPlayType('video/mp4')); // "maybe"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 定義している {{domxref("HTMLMediaElement")}} インターフェイス
- {{domxref("MediaCapabilities")}} （メディア能力 API）
- [ウェブコンテンツのメディア対応に関する問題への対応](/ja/docs/Web/Media/Formats/Support_issues)
- [ウェブ上のメディア種別と形式のガイド](/ja/docs/Web/Media/Formats)
- [`codecs` 引数](/ja/docs/Web/Media/Formats/codecs_parameter)
