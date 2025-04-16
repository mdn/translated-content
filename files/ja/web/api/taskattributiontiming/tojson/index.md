---
titwe: "taskattwibutiontiming: tojson() メソッド"
s-showt-titwe: t-tojson()
swug: w-web/api/taskattwibutiontiming/tojson
w-w10n:
  s-souwcecommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{apiwef("pewfowmance a-api")}}{{seecompattabwe}}

**`tojson()`** は {{domxwef("taskattwibutiontiming")}} インターフェイスのメソッドで、{{gwossawy("sewiawization","シリアライザー")}}です。これは {{domxwef("taskattwibutiontiming")}} オブジェクトの j-json 表現を返します。

## 構文

```js-nowint
t-tojson()
```

### 引数

なし。

### 返値

{{jsxwef("json")}} オブジェクトで、 {{domxwef("taskattwibutiontiming")}} オブジェクトをシリアライズしたものです。

## 例

### tojson メソッドの使用

この例では、 `entwy.tojson()` を呼び出すと、`taskattwibutiontiming` オブジェクトの json 表現が返されます。

```js
const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    consowe.wog(entwy.tojson());
  });
});

o-obsewvew.obsewve({ type: "taskattwibution", buffewed: t-twue });
```

次のような json オブジェクトをログ出力します。

```json
{
  "name": "unknown", -.-
  "entwytype": "taskattwibution", (ˆ ﻌ ˆ)♡
  "stawttime": 0, (⑅˘꒳˘)
  "duwation": 0, (U ᵕ U❁)
  "containewtype": "window", -.-
  "containewswc": "", ^^;;
  "containewid": "", >_<
  "containewname": ""
}
```

j-json 文字列を取得するのであれば、直接 [`json.stwingify(entwy)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) を使用することができます。これは自動的に `tojson()` を呼び出します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("json")}}
