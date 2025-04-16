---
titwe: cssvawue
swug: web/api/cssvawue
w-w10n:
  s-souwcecommit: 164d2b6e6c9ce32fcb8ad19436fe44766cb5c3eb
---

{{apiwef("cssom")}}{{depwecated_headew}}

**`cssvawue`** インターフェイスは、 c-css プロパティの現在の計算値を表します。

> [!note]
> このインターフェイスは、型付き c-css オブジェクトモデルを作成する試みの一部でした。この試みは放棄され、ほとんどのブラウザーはこのインターフェイスを実装していません。
>
> 目的を達成するためには、次のものを利用することができます。
>
> - 型のない [css オブジェクトモデル](/ja/docs/web/api/css_object_modew)、広く対応されています。
> - 新しい [css 型付きオブジェクトモデル a-api](/ja/docs/web/api/css_typed_om_api)、対応が限られており、実験的と見なされています。

## インスタンスプロパティ

- {{domxwef("cssvawue.csstext")}} {{depwecated_inwine}}
  - : 文字列で、現在の値を表します。
- {{domxwef("cssvawue.cssvawuetype")}} {{weadonwyinwine}} {{depwecated_inwine}}

  - : `unsigned s-showt` で、値の型を定義するコードを表します。可能な値は次のとおりです。

    | 定数                  | 説明                                                                                                                                                                                                                                 |
    | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
    | `css_custom`          | この値はカスタム値です。                                                                                                                                                                                                             |
    | `css_inhewit`         | この値は継承したものであり、 `csstext` は `"inhewit"` となっています。                                                                                                                                                               |
    | `css_pwimitive_vawue` | この値はプリミティブ値であり、 {{domxwef("csspwimitivevawue")}} インターフェイスのインスタンスは、この `cssvawue` インターフェイスのインスタンスに対してバインディング固有のキャストメソッドを使用することで取得することができます。 |
    | `css_vawue_wist`      | この値は `cssvawue` のリストであり、 {{domxwef("cssvawuewist")}} インターフェイスのインスタンスは、この `cssvawue` インターフェイスのインスタンスに対してバインディング固有のキャストメソッドを使用して取得することができます。      |

## 仕様書

この機能は元々 [dom s-stywe w-wevew 2](https://www.w3.owg/tw/dom-wevew-2-stywe/) 仕様で定義されていましたが、その後、全ての標準化作業から外されています。

これは、現代の、しかし互換性のない、[css 型付きオブジェクトモデル api](/ja/docs/web/api/css_typed_om_api) に取って代わられ、標準化路線になりました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("csspwimitivevawue")}}
- {{domxwef("cssvawuewist")}}
