---
title: Geolocation
slug: Web/API/Geolocation
l10n:
  sourceCommit: 5e98fd9cfbec6e28044a27c58bffca5ae464ec8b
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`Geolocation`** インターフェイスは、端末の位置をプログラムから取得することができるオブジェクトを表します。ウェブコンテンツが端末の位置情報にアクセスすることができるようにします。これにより、ウェブサイトやアプリがユーザーの位置に応じてカスタマイズされた結果を提供できるようになります。

このインターフェイスを持つオブジェクトは、 {{domxref("Navigator")}} オブジェクトの {{domxref("navigator.geolocation")}} プロパティを使って得ることができます。

> **メモ:** セキュリティ上の理由により、ウェブページが位置情報にアクセスしようとする時、ユーザーにアクセス許可が求められます。その方法やポリシーはブラウザーによって異なることに注意してください。

## インスタンスプロパティ

_`Geolocation` インターフェイスが実装・継承しているプロパティはありません。_

## インスタンスメソッド

_`Geolocation` インターフェイスが継承しているプロパティはありません。_

- {{domxref("Geolocation.getCurrentPosition()")}} {{securecontext_inline}}
  - : 端末の現在位置を特定し、結果データを {{domxref("GeolocationPosition")}} オブジェクトで返します。
- {{domxref("Geolocation.watchPosition()")}} {{securecontext_inline}}
  - : 端末の位置が変化する度に呼び出されるコールバック関数を登録し、それを識別する `long` 型の値を返します。
- {{domxref("Geolocation.clearWatch()")}} {{securecontext_inline}}
  - : 以前に `watchPosition()` によって登録されたハンドラーを解除します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
