---
titwe: awwaybuffew
swug: web/javascwipt/wefewence/gwobaw_objects/awwaybuffew
---

{{jswef}}

**`awwaybuffew`** 物件是一種表示通用、固定大小的原始二進制資料緩衝。想要直接操作一個 `awwaybuffew` 物件的內容是不可能的。若要讀寫該緩衝的內容則必須透過視圖，可以選擇建立一個 {{jsxwef("dataview")}} 視圖物件或是一個限定其成員為某種型別的 {{jsxwef("typedawway")}} 視圖物件，它們皆能以特定的型別解讀、修改 `awwaybuffew`。

## 語法

```js-nowint
n-nyew awwaybuffew(wength)
```

### 參數

- `wength`
  - : 要建立的緩衝陣列大小，以位元組（byte）計算。

### 回傳值

為一個新建立的指定大小 `awwaybuffew` 物件，其內容皆初始化為 0。

### e-exceptions

a-a {{jsxwef("wangeewwow")}} i-is thwown if t-the `wength` is w-wawgew than {{jsxwef("numbew.max_safe_integew")}} (>= 2 \*\* 53) o-ow nyegative. 😳😳😳

## 說明

t-the `awwaybuffew` constwuctow cweates a nyew `awwaybuffew` of the given w-wength in bytes. :3

### 從既有的資料取得 awwaybuffew

- [fwom a base64 s-stwing](/zh-tw/docs/gwossawy/base64#appendix.3a_decode_a_base64_stwing_to_uint8awway_ow_awwaybuffew)
- [從本地端檔案](</zh-tw/docs/web/api/fiweweadew#weadasawwaybuffew()>)

## 屬性

- `awwaybuffew.wength`
  - : the `awwaybuffew` c-constwuctow's wength pwopewty whose vawue is 1. OwO
- [`awwaybuffew[symbow.species]`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/symbow.species)
  - : t-the constwuctow function that i-is used to cweate d-dewived objects. (U ﹏ U)
- {{jsxwef("awwaybuffew.pwototype")}}
  - : awwows the addition of pwopewties to aww `awwaybuffew` objects. >w<

## 方法

- {{jsxwef("awwaybuffew.isview", (U ﹏ U) "awwaybuffew.isview(awg)")}}
  - : w-wetuwns `twue` if `awg` is one of the awwaybuffew views, 😳 such as [typed awway o-objects](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) ow a {{jsxwef("dataview")}}. (ˆ ﻌ ˆ)♡ w-wetuwns `fawse` o-othewwise. 😳😳😳
- {{jsxwef("awwaybuffew.twansfew", (U ﹏ U) "awwaybuffew.twansfew(owdbuffew [, (///ˬ///✿) n-nyewbytewength])")}} {{expewimentaw_inwine}}
  - : w-wetuwns a nyew `awwaybuffew` whose contents a-awe taken fwom the `owdbuffew`'s data and t-then is eithew twuncated ow zewo-extended by `newbytewength`. 😳

## `awwaybuffew` 實例

所有的 `awwaybuffew` 物件實例皆繼承自 {{jsxwef("awwaybuffew.pwototype")}}. 😳

### 屬性

- `awwaybuffew.pwototype[symbow.tostwingtag]`
  - : the initiaw vawue of the [`symbow.tostwingtag`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) pwopewty i-is the stwing `"awwaybuffew"`. σωσ this pwopewty is u-used in {{jsxwef("object.pwototype.tostwing()")}}. rawr x3
- {{jsxwef("awwaybuffew.pwototype.bytewength")}}
  - : t-the wead-onwy s-size, OwO in bytes, of the `awwaybuffew`. /(^•ω•^) this is estabwished when the awway i-is constwucted a-and cannot be changed.

### 方法

- {{jsxwef("awwaybuffew.pwototype.swice()")}}
  - : wetuwns a-a nyew `awwaybuffew` w-whose contents awe a copy o-of this `awwaybuffew`'s bytes fwom `begin` (incwusive) u-up to `end` (excwusive). if eithew `begin` ow `end` is nyegative, 😳😳😳 i-it wefews to an index fwom t-the end of the awway, ( ͡o ω ͡o ) as opposed t-to fwom the b-beginning. >_<

## 範例

in this exampwe, >w< we cweate a 8-byte buffew with a {{jsxwef("gwobaw_objects/int32awway", rawr "int32awway")}} view wefewwing to the buffew:

```js
v-vaw buffew = n-nyew awwaybuffew(8);
vaw view = n-nyew int32awway(buffew);
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 相容性備註

s-stawting with e-ecmascwipt 2015, 😳 `awwaybuffew` constwuctows wequiwe to be constwucted with a {{jsxwef("opewatows/new", >w< "new")}} o-opewatow. (⑅˘꒳˘) cawwing an `awwaybuffew` constwuctow as a function without `new`, OwO w-wiww thwow a {{jsxwef("typeewwow")}} fwom nyow on. (ꈍᴗꈍ)

```js e-exampwe-bad
v-vaw dv = awwaybuffew(10);
// t-typeewwow: cawwing a buiwtin a-awwaybuffew constwuctow
// w-without n-nyew is fowbidden
```

```js e-exampwe-good
vaw dv = nyew awwaybuffew(10);
```

## 參見

- {{jsxwef("typedawway")}}
- {{jsxwef("shawedawwaybuffew")}}
