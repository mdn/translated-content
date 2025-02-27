---
title: "HTMLMediaElement: mediaKeys プロパティ"
short-title: mediaKeys
slug: Web/API/HTMLMediaElement/mediaKeys
l10n:
  sourceCommit: ba9a6bebd0e7bf1dd6b5c4eed156d8f1748ade0f
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

**`HTMLMediaElement.mediaKeys`** プロパティは {{domxref("MediaKeys")}} オブジェクトを返します。要素が再生中にメディアデータを復号するために使用することができる一連のキーです。

## 値

{{domxref("MediaKeys")}} オブジェクトです。利用できるキーがない場合は `null` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("MediaKeys")}}
