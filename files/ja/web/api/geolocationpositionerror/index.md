---
title: GeolocationPositionError
slug: Web/API/GeolocationPositionError
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

**`GeolocationPositionError`** インターフェイスは位置情報の取得時に発生したエラーの理由を表します。

## インスタンスプロパティ

_`GeolocationPositionError` インターフェイスが継承するプロパティはありません。_

- {{domxref("GeolocationPositionError.code")}} {{ReadOnlyInline}}
  - : `unsigned short` でエラーコードを表します。以下の値になる可能性があります。

    | 値  | 関連付けられた定数     | 説明                                                                                                                                                            |
    | --- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `1` | `PERMISSION_DENIED`    | ページに必要な権限がないため、位置情報の取得に失敗しました。例えば、[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)によってブロックされたなどです。 |
    | `2` | `POSITION_UNAVAILABLE` | 1 つ以上の位置の内部ソースが内部エラーを返したために、位置情報の取得に失敗しました。                                                                            |
    | `3` | `TIMEOUT`              | 位置情報を取得するための制限時間が情報を取得する前に終了しました。                                                                                              |

- {{domxref("GeolocationPositionError.message")}} {{ReadOnlyInline}}
  - : エラーの詳細を説明する、人間が読める文字列返します。仕様書の注では、主にデバッグ用途を想定しており、ユーザーインターフェイスに直接表示するものではないとしています。

## インスタンスメソッド

_`GeolocationPositionError` インターフェイスが実装・継承しているメソッドはありません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [位置情報 API の使用](/ja/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
