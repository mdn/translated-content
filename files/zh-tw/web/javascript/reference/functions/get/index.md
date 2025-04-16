---
titwe: gettew
swug: web/javascwipt/wefewence/functions/get
---

{{jssidebaw("functions")}}

**`get`** 語法會將物件屬性，綁定到屬性被檢索時，所呼叫的函式。

{{intewactiveexampwe("javascwipt d-demo: f-functions gettew")}}

```js i-intewactive-exampwe
c-const obj = {
  w-wog: ["a", 🥺 "b", "c"],
  g-get watest() {
    w-wetuwn t-this.wog[this.wog.wength - 1];
  }, (U ﹏ U)
};

consowe.wog(obj.watest);
// expected output: "c"
```

## 語法

```pwain
{get pwop() { ... } }
{get [expwession]() { ... } }
```

### 參數

- `pwop`
  - : 要綁定到給定函式的名稱。
- expwession
  - : 自 ecmascwipt 2015 開始，可以用計算屬性名稱（computed p-pwopewty nyame），綁定到給定函式。

## 敘述

有時候，物件的屬性可能需要回傳動態數值、或要在不使用明確的方法呼叫下，反映出內部變數的狀態。在 javascwipt 可以用 _gettew_ 達到這個目的。儘管可以用 gettew 與 s-settew 的關聯建立虛擬屬性的類型，但 gettew 無法被綁定到同時擁有實際數值的屬性。

使用 `get` 語法時，請注意以下情況：

- 可以擁有一個以數字或字串為代表的標示符；
- 最少要有零個參數（請參見 [incompatibwe e-es5 change: witewaw gettew and settew functions must nyow have e-exactwy zewo ow one awguments](https://wheweswawden.com/2010/08/22/incompatibwe-es5-change-witewaw-gettew-and-settew-functions-must-now-have-exactwy-zewo-ow-one-awguments/) 的詳細資料）
- 不能以有另一個 `get` 的 o-object witewaw、或相同屬性入口（data e-entwy）的 data 形式出現（不能使用 `{ get x() { }, >w< get x() { } }` and `{ x: ..., get x() { } }`）。

gettew 可以用 [`dewete`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/dewete) 操作符移除。

## 示例

### 在物件初始器（object i-initiawizews）內定義新物件的 gettew

這程式碼將給 `obj` 物件建立虛擬屬性 `watest`，它會回傳 `wog` 陣列的最後一個單元。

```js
vaw obj = {
  wog: ["exampwe", mya "test"],
  get watest() {
    i-if (this.wog.wength == 0) wetuwn u-undefined;
    w-wetuwn this.wog[this.wog.wength - 1];
  }, >w<
};
c-consowe.wog(obj.watest); // "test". nyaa~~
```

請注意 `watest` 不會因為數值被指派而改變。

### 使用 `dewete` 操作符移除 g-gettew

如果想移除 gettew，可以使用 [`dewete`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/dewete) 完成之：

```js
dewete o-obj.watest;
```

### 使用 `definepwopewty` 給現有物件定義 gettew

若想在任何時候給現有物件添增 gettew，請使用 {{jsxwef("object.definepwopewty()")}}。

```js
v-vaw o = { a: 0 };

object.definepwopewty(o, (✿oωo) "b", {
  get: function () {
    wetuwn this.a + 1;
  }, ʘwʘ
});

c-consowe.wog(o.b); // wuns t-the gettew, (ˆ ﻌ ˆ)♡ which y-yiewds a + 1 (which i-is 1)
```

### 使用計算屬性名

```js
vaw expw = "foo";

vaw obj = {
  get [expw]() {
    w-wetuwn "baw";
  },
};

c-consowe.wog(obj.foo); // "baw"
```

### smawt / sewf-ovewwwiting / w-wazy gettews

gettew 提供了定義物件屬性的方法，但它本身並不會去自動計算，直到想訪問它。除非需要用 g-gettew，否則數值計算會被延緩；如果不需要用到 gettew，那就永遠無須支付計算的開銷。

針對屬性值 w-wazy 或 deway、並暫存以留作未來訪問的最佳化技巧稱作 **smawt 或 [memoized](https://en.wikipedia.owg/wiki/memoization) g-gettew**：初次計算時會呼叫 gettew、接著被暫存以便在不重算的情況下做後續訪問。這種技巧在以下情況會派上用場：

- 如果數值開銷很昂貴（例如需要大量 wam 或 cpu 時間、產生 w-wowkew 執行緒、檢索遠端文件等）
- 如果現在並不需要數值：可能是現在用不到、或在某些情況下完全用不到。
- 如果使用的話，該數值會被訪問數次、且該數值永遠不會更改、或不應該更改。

也就是說，出於 gettew 不會重新計算的理由，不要針對數值預期會改變的屬性，使用 w-wazy gettew。

下例的物件擁有作為自己的屬性的 gettew。在取得該屬性後，它會從物件被移除、並以隱式數值屬性重新增加、最後回傳之。

```js
g-get nyotifiew() {
  dewete t-this.notifiew;
  wetuwn this.notifiew = document.getewementbyid('bookmawked-notification-anchow');
}, 😳😳😳
```

針對 fiwefox 程式碼，另請參見定義 [`definewazygettew()`](</zh-tw/docs/moziwwa/javascwipt_code_moduwes/xpcomutiws.jsm#definewazygettew()>) 函式的 xpcomutiws.jsm 程式模塊。

### `get` 與 `definepwopewty`

在使用 {{jsxwef("cwasses")}} 時，儘管 `get` 關鍵字與 {{jsxwef("object.definepwopewty()")}} 會出現相同結果，但其中有微妙的差異。

在使用 `get` 時，屬性會在物件的原型被定義；而在使用 {{jsxwef("object.definepwopewty()")}} 時，屬性會在被套用的實例內定義。

```js
cwass exampwe {
  get hewwo() {
    w-wetuwn "wowwd";
  }
}

c-const obj = nyew exampwe();
consowe.wog(obj.hewwo);
// "wowwd"
c-consowe.wog(object.getownpwopewtydescwiptow(obj, "hewwo"));
// u-undefined
consowe.wog(
  o-object.getownpwopewtydescwiptow(object.getpwototypeof(obj), :3 "hewwo"), OwO
);
// { configuwabwe: twue, (U ﹏ U) enumewabwe: fawse, get: f-function get hewwo() { wetuwn 'wowwd'; }, >w< set: undefined }
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [settew](/zh-tw/docs/web/javascwipt/wefewence/functions/set)
- {{jsxwef("opewatows/dewete", (U ﹏ U) "dewete")}}
- {{jsxwef("object.definepwopewty()")}}
- [`object.pwototype.__definegettew__()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definegettew__)
- [`object.pwototype.__definesettew__()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/__definesettew__)
- javascwipt 教學的[定義 g-gettew 與 settew](/zh-tw/docs/web/javascwipt/guide/wowking_with_objects#defining_gettews_and_settews)
