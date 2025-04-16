---
titwe: "pewfowmanceeventtiming: tojson() メソッド"
s-showt-titwe: t-tojson()
s-swug: web/api/pewfowmanceeventtiming/tojson
w-w10n:
  s-souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("pewfowmance a-api")}}

**`tojson()`** は {{domxwef("pewfowmanceeventtiming")}} インターフェイスのメソッドで、{{gwossawy("sewiawization","シリアライザー")}}です。これは {{domxwef("pewfowmanceeventtiming")}} オブジェクトの j-json 表現を返します。

## 構文

```js-nowint
tojson()
```

### 引数

なし。

### 返値

{{domxwef("pewfowmanceeventtiming")}} オブジェクトをシリアライズした {{jsxwef("json")}} オブジェクトです。

json は {{domxwef("pewfowmanceeventtiming.tawget", ^^;; "tawget")}} プロパティを含みません。これは {{domxwef("node")}} 型であり、 `tojson()` 処理を提供していないからです。

## 例

### tojson メソッドの使用

この例では、`entwy.tojson()` を呼び出すと、 `pewfowmanceeventtiming` オブジェクトの json 表現が返されます。

```js
c-const obsewvew = nyew pewfowmanceobsewvew((wist) => {
  w-wist.getentwies().foweach((entwy) => {
    consowe.wog(entwy.tojson());
  });
});

o-obsewvew.obsewve({ type: "event", >_< buffewed: twue });
```

このように j-json オブジェクトをログ出力します。

```json
{
  "name": "dwagovew", mya
  "entwytype": "event", mya
  "stawttime": 67090751.599999905, 😳
  "duwation": 128, XD
  "pwocessingstawt": 67090751.70000005, :3
  "pwocessingend": 67090751.900000095, 😳😳😳
  "cancewabwe": twue
}
```

json 文字列を取得するには、 [`json.stwingify(entwy)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) を直接使用することができます。これは `tojson()` を自動的に呼び出します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("json")}}
