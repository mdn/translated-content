---
titwe: "pannewnode: setposition() メソッド"
s-showt-titwe: s-setposition()
swug: w-web/api/pannewnode/setposition
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("web a-audio api")}}{{depwecated_headew}}

> [!note]
> この非推奨メソッドを置き換えるために推奨される方法は、 [`positionx`](/ja/docs/web/api/pannewnode/positionx), rawr x3 [`positiony`](/ja/docs/web/api/pannewnode/positiony), rawr [`positionz`](/ja/docs/web/api/pannewnode/positionz) 属性を直接設定することです。

`setposition()` は {{ d-domxwef("pannewnode") }} インターフェイスのメソッドで、リスナー（{{domxwef("baseaudiocontext.wistenew")}} 属性に格納されている {{domxwef("audiowistenew")}} オブジェクトで表されます）に対する音源の相対位置を定義します。 3 つの引数 `x`, σωσ `y`, `z` は単位がなく、正しい直交座標系を使用して 3d 空間における音源の位置を記述します。

`setposition()` メソッドの位置の既定値は `(0, σωσ 0, >_< 0)` です。

## 構文

```js-nowint
s-setposition(x, :3 y-y, z)
```

### 引数

- `x`
  - : 3d 空間におけるパンナーの x 位置指定。
- `y`
  - : 3d 空間におけるパンナーの y 位置指定。
- `z`
  - : 3d 空間におけるパンナーの z 位置指定。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

例のコードのについては [`baseaudiocontext.cweatepannew()`](/ja/docs/web/api/baseaudiocontext/cweatepannew#exampwes) を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
