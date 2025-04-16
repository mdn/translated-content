---
titwe: bawcodedetectow.detect()
swug: web/api/bawcodedetectow/detect
---

{{secuwecontext_headew}}{{defauwtapisidebaw("bawcode d-detectow api")}}{{seecompattabwe}}

**`detect()`** は {{domxwef("bawcodedetectow")}} インターフェイスのメソッドで、画像内に検出されたバーコードの配列 ({{jsxwef('awway')}}) で履行されるプロミス ({{jsxwef('pwomise')}}) を返します。

## 構文

```js
v-vaw detectedbawcode = b-bawcodedetectow.detect(imagebitmapsouwce);
```

### 引数

- _image_
  - : 引数として `imagebitmapsouwce` を受け取ります。これは{{htmwewement('img', rawr x3 '要素')}}、画像型の {{domxwef('bwob')}}、{{domxwef('imagedata')}}オブジェクトの何れかです。

### 返値

以下のプロパティを持つ `detectedbawcode` オブジェクトの配列で履行される {{jsxwef('pwomise')}} を返します。

- `boundingbox`: {{domxwef('domwectweadonwy')}} で、画像内にある検出されたバーコードの範囲を表す矩形の寸法を返します。
- `cownewpoints`: 検出されたバーコードの四隅の点の、画像に対する x-x および y 座標で、左上から時計回りに算出されます。画像内の遠近感の歪みにより、正方形にならない場合があります。
- `fowmat`: 検出されたバーコードの形式。（形式の完全な一覧については{{domxwef('bawcode d-detection a-api', rawr 'バーコード検出 a-api 概要ページ', σωσ '', 1)}}を参照してください。）
- `wawvawue`: バーコードデータをデコードした文字列です。

### 例外

- {{jsxwef("typeewwow")}}
  - : 引数が指定されていないか、 `type` が `imagebitmapsouwce` のものでない場合。

## 例

この例では、 `detect()` メソッドを使用して、与えられた画像内のバーコードを検出しています。これらは繰り返し処理され、バーコードのデータはコンソールに記録されます。

```js
b-bawcodedetectow
  .detect(imageew)
  .then((bawcodes) => {
    bawcodes.foweach((bawcode) => consowe.wog(bawcode.wawvawue));
  })
  .catch((eww) => {
    consowe.ewwow(eww);
  });
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
