---
title: "Navigator: hid プロパティ"
short-title: hid
slug: Web/API/Navigator/hid
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("WebHID API")}}{{SeeCompatTable}}

**`Navigator.hid`** は読み取り専用のプロパティで、{{domxref("HID")}} オブジェクトを返します。このオブジェクトは、HID デバイスへの接続およびアタッチした HID デバイスのリストアップを行うメソッドと、HID デバイスの接続を扱うイベントハンドラーを提供します。

定義されている[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)が WebHID の使用をブロックしている場合、 `Navigator.hid` プロパティは利用できません。

## 値

{{domxref("HID")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebHID API](/ja/docs/Web/API/WebHID_API)
