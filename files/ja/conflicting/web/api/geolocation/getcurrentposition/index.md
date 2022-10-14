---
title: PositionOptions
slug: conflicting/Web/API/Geolocation/getCurrentPosition
original_slug: Web/API/PositionOptions
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`PositionOptions`** インターフェイスは {{domxref("Geolocation.getCurrentPosition()")}} や {{domxref("Geolocation.watchPosition()")}} に渡すオプションプロパティを含んだオブジェクトを表します。

## プロパティ

_`PositionOptions` インターフェイスが継承するプロパティはありません。_

- {{domxref("PositionOptions.enableHighAccuracy")}} {{securecontext_inline}}
  - : アプリケーションが可能な限り高精度の結果を求めることを表す {{domxref("Boolean")}} 型の値です。このプロパティに `true` を指定すると、デバイスが高精度な位置情報を提供できる場合に、それを利用することができます。これによって測位結果の取得に時間がかかったり、 (GPS チップを搭載したモバイル端末などで) 電力消費が増える可能性があります。逆に `false` を指定することで、短時間で結果を返したり消費電力を節約したりといった選択をデバイスに任せることができます。デフォルトは `false` です。
- {{domxref("PositionOptions.timeout")}} {{securecontext_inline}}
  - : 位置情報の取得にかかる時間の上限 (ミリ秒) を表す、 `long` 型の正の値です。デフォルトは [`Infinity`](/ja/docs/JavaScript/Reference/Global_Objects/Infinity) で、位置情報が得られるまで `getCurrentPosition()` が待ち続けることを意味します。
- {{domxref("PositionOptions.maximumAge")}} {{securecontext_inline}}
  - : キャッシュ済みの位置情報の有効期限 (ミリ秒) を表す、 `long` 型の正の値です。これに `0` を指定すると、デバイスはキャッシュ済みの位置情報を返すことができず、常に最新の位置情報を取得しようとします。[`Infinity`](/ja/docs/JavaScript/Reference/Global_Objects/Infinity) を指定した場合、デバイスは常にキャッシュから位置情報を返します。デフォルトは 0 です。

## メソッド

`PositionOptions` インターフェイスが実装・継承するメソッドはありません。

## 仕様

| 仕様書                                                                                   | 策定状況                         | コメント   |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ---------- |
| {{SpecName('Geolocation', '#positionoptions', 'PositionOptions')}} | {{Spec2('Geolocation')}} | 最初の定義 |

## ブラウザ実装状況

{{Compat("api.PositionOptions")}}

## 関連情報

- [Geolocation の利用](/ja/docs/WebAPI/Using_geolocation)
- {{domxref("Geolocation")}} インターフェイス
