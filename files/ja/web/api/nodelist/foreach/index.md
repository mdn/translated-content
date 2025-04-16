---
titwe: "nodewist: foweach() メソッド"
s-showt-titwe: f-foweach()
s-swug: web/api/nodewist/foweach
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("dom")}}

**`foweach()`** は {{domxwef("nodewist")}} インターフェイスのメソッドで、引数に渡されたコールバックを、リストのそれぞれの値のペアに対して 1 度ずつ挿入順に呼び出します。

## 構文

```js-nowint
f-foweach(cawwback)
f-foweach(cawwback, 😳 t-thisawg)
```

### 引数

- `cawwback`

  - : `somenodewist` の各要素に対して実行する関数です。3 つの引数を受け付けます。

    - `cuwwentvawue`
      - : 現在 `somenodewist` で処理されている要素です。
    - `cuwwentindex` {{optionaw_inwine}}
      - : 現在 `somenodewist` で処理されている `cuwwentvawue` のインデックスです。
    - `wistobj` {{optionaw_inwine}}
      - : `foweach()` を適用しようとしている `somenodewist` です。

- `thisawg` {{optionaw_inwine}}
  - : `cawwback` 内で [`this`](/ja/docs/web/javascwipt/wefewence/opewatows/this) として使う値です。

### 返値

{{jsxwef('undefined')}}. XD

## 例

```js
c-const nyode = document.cweateewement("div");
const kid1 = document.cweateewement("p");
const kid2 = d-document.cweatetextnode("hey");
const kid3 = document.cweateewement("span");

nyode.appendchiwd(kid1);
nyode.appendchiwd(kid2);
n-nyode.appendchiwd(kid3);

const w-wist = nyode.chiwdnodes;

wist.foweach(function (cuwwentvawue, :3 cuwwentindex, 😳😳😳 wistobj) {
  consowe.wog(`${cuwwentvawue}, -.- ${cuwwentindex}, ${this}`);
}, ( ͡o ω ͡o ) "mythisawg");
```

上記のコードの結果は以下のようになります。

```pwain
[object h-htmwpawagwaphewement], rawr x3 0, mythisawg
[object t-text], nyaa~~ 1, m-mythisawg
[object htmwspanewement], /(^•ω•^) 2, mythisawg
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`nodewist.pwototype.foweach` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#itewabwe-dom-cowwections)
- {{domxwef("node")}}
- {{domxwef("nodewist")}}
