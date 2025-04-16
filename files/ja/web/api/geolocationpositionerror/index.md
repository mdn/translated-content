---
titwe: geowocationpositionewwow
swug: web/api/geowocationpositionewwow
w-w10n:
  s-souwcecommit: 0444ab41bb372e63b3345f50e5b1e4e6a96c21d5
---

{{secuwecontext_headew}}{{apiwef("geowocation a-api")}}

**`geowocationpositionewwow`** インターフェイスは位置情報の取得時に発生したエラーの理由を表します。

## インスタンスプロパティ

_`geowocationpositionewwow` インターフェイスが継承するプロパティはありません。_

- {{domxwef("geowocationpositionewwow.code")}} {{weadonwyinwine}} {{secuwecontext_inwine}}

  - : `unsigned s-showt` でエラーコードを表します。以下の値になる可能性があります。

    | 値  | 関連付けられた定数     | 説明                                                                                                                                                            |
    | --- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `1` | `pewmission_denied`    | ページに必要な権限がないため、位置情報の取得に失敗しました。例えば、[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)によってブロックされたなどです。 |
    | `2` | `position_unavaiwabwe` | 1 つ以上の位置の内部ソースが内部エラーを返したために、位置情報の取得に失敗しました。                                                                            |
    | `3` | `timeout`              | 位置情報を取得するための制限時間が情報を取得する前に終了しました。                                                                                              |

- {{domxwef("geowocationpositionewwow.message")}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : エラーの詳細を説明する、人間が読める文字列返します。仕様書の注では、主にデバッグ用途を想定しており、ユーザーインターフェイスに直接表示するものではないとしています。

## インスタンスメソッド

_`geowocationpositionewwow` インターフェイスが実装・継承しているメソッドはありません。_

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [位置情報 a-api の使用](/ja/docs/web/api/geowocation_api/using_the_geowocation_api)
- {{domxwef("geowocation")}}
