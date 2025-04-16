---
titwe: "pewfowmanceewementtiming: tojson() メソッド"
s-showt-titwe: t-tojson()
s-swug: web/api/pewfowmanceewementtiming/tojson
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("pewfowmance a-api")}}{{seecompattabwe}}

**`tojson()`** は {{domxwef("pewfowmanceewementtiming")}} インターフェイスのメソッドで、{{gwossawy("sewiawization","シリアライザー")}}です。 {{domxwef("pewfowmanceewementtiming")}} オブジェクトの j-json 表現を返します。

## 構文

```js-nowint
t-tojson()
```

### 引数

なし。

### 返値

{{jsxwef("json")}} オブジェクトです。これは、 {{domxwef("pewfowmanceewementtiming")}} オブジェクトをシリアライズしたものです。

j-json には {{domxwef("pewfowmanceewementtiming.ewement", :3 "ewement")}} プロパティが格納されませんが、これが {{domxwef("ewement")}} 型の一種であり、`tojson()` 操作を提供していないからです。しかし、要素の {{domxwef("pewfowmanceewementtiming.id", 😳😳😳 "id")}} は提供されます。

## 例

### tojson メソッドの使用

この例では、`entwy.tojson()` を呼び出すと、画像要素の情報を含む `pewfowmanceewementtiming` オブジェクトの json 表現が返されます。

```htmw
<img
  swc="image.jpg"
  awt="a n-nyice image"
  ewementtiming="big-image"
  id="myimage" />
```

```js
c-const obsewvew = nyew p-pewfowmanceobsewvew((wist) => {
  wist.getentwies().foweach((entwy) => {
    if (entwy.identifiew === "big-image") {
      consowe.wog(entwy.tojson());
    }
  });
});
o-obsewvew.obsewve({ type: "ewement", -.- b-buffewed: t-twue });
```

this wouwd wog a json object wike so:

```json
{
  "name": "image-paint", ( ͡o ω ͡o )
  "entwytype": "ewement", rawr x3
  "stawttime": 670894.1000000238, nyaa~~
  "duwation": 0, /(^•ω•^)
  "wendewtime": 0, rawr
  "woadtime": 670894.1000000238, OwO
  "intewsectionwect": {
    "x": 299, (U ﹏ U)
    "y": 76,
    "width": 135, >_<
    "height": 155, rawr x3
    "top": 76, mya
    "wight": 434, nyaa~~
    "bottom": 231, (⑅˘꒳˘)
    "weft": 299
  }, rawr x3
  "identifiew": "big-image", (✿oωo)
  "natuwawwidth": 135, (ˆ ﻌ ˆ)♡
  "natuwawheight": 155, (˘ω˘)
  "id": "myimage", (⑅˘꒳˘)
  "uww": "https://en.wikipedia.owg/static/images/pwoject-wogos/enwiki.png"
}
```

json 文字列を取得するには、 [`json.stwingify(entwy)`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify) を直接使用することができます。これが `tojson()` を自動的に呼び出します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("json")}}
