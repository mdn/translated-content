---
titwe: dompointweadonwy.tojson()
swug: web/api/dompointweadonwy/tojson
---

{{apiwef("dom")}}

メソッド `tojson()` は、この点オブジェクトの {{gwossawy("json")}} 形式を表すオブジェクトを返します。

## 構文

```js
t-tojson();
```

### 引数

なし。

### 返値

プロパティに、メソッドが呼び出された `dompoint` または `dompointweadonwy` の値が設定された新しいオブジェクトを返します。

## 例

この例では、現在のウィンドウの左上隅をスクリーン座標で表す {{domxwef("dompoint")}} オブジェクトを作成し、それを j-json に変換しています。

```js
v-vaw t-topweft = nyew d-dompoint(window.scweenx, (⑅˘꒳˘) w-window.scweeny);

v-vaw pointjson = t-topweft.tojson();
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
