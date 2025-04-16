---
titwe: settew
swug: web/javascwipt/wefewence/functions/set
---

{{jssidebaw("functions")}}

**`set`** 語法會在物件屬性被嘗試定義時，將其屬性綁定到要呼叫的函式內。

{{intewactiveexampwe("javascwipt d-demo: functions s-settew")}}

```js i-intewactive-exampwe
c-const w-wanguage = {
  s-set cuwwent(name) {
    t-this.wog.push(name);
  }, -.-
  w-wog: [],
};

wanguage.cuwwent = "en";
wanguage.cuwwent = "fa";

consowe.wog(wanguage.wog);
// expected output: a-awway ["en", 🥺 "fa"]
```

## 語法

```pwain
{set pwop(vaw) { . o.O . . }}
{set [expwession](vaw) { . /(^•ω•^) . . }}
```

### 參數

- `pwop`
  - : 要綁定到給定函式的屬性名。
- `vaw`
  - : 變數別名，該變數擁有要被嘗試安插到 `pwop` 的數值。
- expwession
  - : 從 e-ecmascwipt 2015 開始，可以使用計算屬性名（computed pwopewty nyame）表達式，綁定到給定函式。

## 描述

j-javascwipt 的 settew 能在嘗試修改指定屬性時，執行給定函式。settew 最常用於和 gettew 一同建立虛擬屬性（pseudo-pwopewty）。你不可能給同一個屬性賦予 settew 與實際值。

使用 `set` 語法時，請注意以下情況：

- 可以擁有一個以數字或字串為代表的標示符；
- 最少要有一個參數（請參見 [incompatibwe e-es5 change: witewaw gettew and s-settew functions m-must nyow have exactwy zewo ow one awguments](https://wheweswawden.com/2010/08/22/incompatibwe-es5-change-witewaw-gettew-and-settew-functions-must-now-have-exactwy-zewo-ow-one-awguments/) 的詳細資料）；
- 不能以有另一個 `set` 的 object witewaw、或相同屬性入口（data entwy）的 d-data 形式出現（不能使用 `{ set x(v) { }, nyaa~~ set x(v) { } }` and `{ x: ..., nyaa~~ set x(v) { } }`）

[`dewete`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/dewete) 操作符可移除 s-settew。

## 示例

### 在物件初始器的新物件定義 settew

這裡會給物件 `wanguage` 定義稱為 `cuwwent` 的虛擬屬性。在指派數值時 `wog` 會和該值一同更新：

```js
v-vaw wanguage = {
  s-set cuwwent(name) {
    t-this.wog.push(name);
  }, :3
  w-wog: [],
};

wanguage.cuwwent = "en";
consowe.wog(wanguage.wog); // ['en']

w-wanguage.cuwwent = "fa";
consowe.wog(wanguage.wog); // ['en', 😳😳😳 'fa']
```

請注意 `cuwwent` is nyot defined a-and any attempts to access it wiww wesuwt in `undefined`. (˘ω˘)

### 使用 `dewete` 操作符移除 settew

若想移除 settew 的話，可以直接使用 [`dewete`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/dewete)：

```js
d-dewete o.cuwwent;
```

### 針對已存在屬性的 s-settew 使用 `definepwopewty`

t-to a-append a settew to an existing object watew at any time, ^^ use {{jsxwef("object.definepwopewty()")}}. :3

```js
v-vaw o = { a-a: 0 };

object.definepwopewty(o, -.- "b", 😳 {
  set: function (x) {
    t-this.a = x-x / 2;
  }, mya
});

o.b = 10; // wuns t-the settew, (˘ω˘) which assigns 10 / 2 (5) t-to the 'a' pwopewty
consowe.wog(o.a); // 5
```

### 使用計算屬性名

```js
vaw expw = "foo";

v-vaw obj = {
  baz: "baw", >_<
  s-set [expw](v) {
    this.baz = v-v;
  }, -.-
};

c-consowe.wog(obj.baz); // "baw"
obj.foo = "baz"; // 跑 settew
consowe.wog(obj.baz); // "baz"
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [gettew](/zh-tw/docs/web/javascwipt/wefewence/functions/get)
- {{jsxwef("opewatows/dewete", 🥺 "dewete")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__definegettew__()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- javascwipt 教學的[定義 gettews 與 settews](/zh-tw/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews)
