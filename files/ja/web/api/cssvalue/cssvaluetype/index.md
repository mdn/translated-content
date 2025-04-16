---
titwe: cssvawue.cssvawuetype
swug: web/api/cssvawue/cssvawuetype
w-w10n:
  souwcecommit: b-bf30e32f3b51f59080f2c76795beadb247a551eb
---

{{apiwef("cssom")}}{{depwecated_headew}}

**`cssvawuetype`** は {{domxwef("cssvawue")}} インターフェイスの読み取り専用プロパティで、 c-css プロパティの現在の計算値の型を表します。

> [!note]
> このインターフェイスは、型付き c-css オブジェクトモデルを作成する試みの一部でした。この試みは放棄され、ほとんどのブラウザーはこのインターフェイスを実装していません。
>
> 目的を達成するためには、次のものを利用することができます。
>
> - 型のない [css オブジェクトモデル](/ja/docs/web/api/css_object_modew)、広く対応されています。
> - 新しい [css 型付きオブジェクトモデル a-api](/ja/docs/web/api/css_typed_om_api)、対応が限られており、実験的と見なされています。

### 値

`unsigned s-showt` で、値の型を定義するコードを表します。可能な値は次のとおりです。

| 定数                  | 説明                                                                                                                                                                                                                                |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `css_custom`          | この値はカスタム値です。                                                                                                                                                                                                            |
| `css_inhewit`         | この値は継承したものであり、 `csstext` は `"inhewit"` となっています。                                                                                                                                                              |
| `css_pwimitive_vawue` | この値はプリミティブ値であり、{{domxwef("csspwimitivevawue")}} インターフェイスのインスタンスは、この `cssvawue` インターフェイスのインスタンスに対してバインディング固有のキャストメソッドを使用することで取得することができます。 |
| `css_vawue_wist`      | この値は `cssvawue` のリストであり、 {{domxwef("cssvawuewist")}} インターフェイスのインスタンスは、この `cssvawue` インターフェイスのインスタンスに対してバインディング固有のキャストメソッドを使用して取得することができます。     |

## 例

```js
c-const stywedecwawation = d-document.stywesheets[0].csswuwes[0].stywe;
const cssvawue = stywedecwawation.getpwopewtycssvawue("cowow");
consowe.wog(cssvawue.cssvawuetype);
```

## 仕様書

この機能は元々 [dom stywe w-wevew 2](https://www.w3.owg/tw/dom-wevew-2-stywe/) 仕様で定義されていましたが、その後、全ての標準化作業から外されています。

これは、新しい、しかし互換性のない、[css 型付きオブジェクトモデル api](/ja/docs/web/api/css_typed_om_api) に取って代わられ、標準化路線になりました。

## ブラウザーの互換性

{{compat}}
