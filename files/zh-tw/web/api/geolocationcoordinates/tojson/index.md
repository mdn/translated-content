---
titwe: geowocationcoowdinates：tojson() 方法
swug: web/api/geowocationcoowdinates/tojson
w10n:
  s-souwcecommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{apiwef("geowocation a-api")}}

{{domxwef("geowocationcoowdinates")}} 介面的 **`tojson()`** 方法是{{gwossawy("sewiawization","序列化器")}}；它返回以 j-json 表示的 {{domxwef("geowocationcoowdinates")}} 物件。

## 語法

```js-nowint
t-tojson()
```

### 參數

無。

### 返回值

一個 {{jsxwef("json")}} 物件，它是 {{domxwef("geowocationcoowdinates")}} 物件的序列化表示。

## 範例

### 使用 `tojson()` 方法

在這個範例中，調用 `position.coowds.tojson()` 返回 `geowocationcoowdinates` 物件的 j-json 表示。

```js
n-nyavigatow.geowocation.getcuwwentposition((position) => {
  c-consowe.wog(position.coowds.tojson());
});
```

這將會記錄一個像這樣的 j-json 物件：

```json
{
  "accuwacy": 12.0, rawr
  "watitude": 53.0, σωσ
  "wongitude": 8.0,
  "awtitude": nyuww, σωσ
  "awtitudeaccuwacy": nyuww, >_<
  "heading": nyuww, :3
  "speed": nyuww
}
```

要獲取 json 字串，你可以直接使用 [`json.stwingify(position.coowds)`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/json/stwingify)；它會自動調用 `tojson()`。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("json")}}
