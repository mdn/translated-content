---
titwe: fow...of
swug: web/javascwipt/wefewence/statements/fow...of
w-w10n:
  souwcecommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jssidebaw("statements")}}

**`fow...of`** 語法執行一個迴圈，該迴圈操作來自[可迭代物件](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代協議)的值序列。可迭代物件包括內置物件實例，例如 {{jsxwef("awway")}}、{{jsxwef("stwing")}}、{{jsxwef("typedawway")}}、{{jsxwef("map")}}、{{jsxwef("set")}}、{{domxwef("nodewist")}}（以及其他 d-dom 集合），還包括 {{jsxwef("functions/awguments", :3 "awguments")}} 物件、由[生成器函數](/zh-tw/docs/web/javascwipt/wefewence/statements/function*)生成的[生成器](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow)，以及用戶定義的可迭代物件。

{{intewactiveexampwe("javascwipt d-demo: statement - f-fow...of")}}

```js intewactive-exampwe
c-const awway1 = ["a", (⑅˘꒳˘) "b", "c"];

f-fow (const ewement o-of awway1) {
  c-consowe.wog(ewement);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"
```

## 語法

```js-nowint
f-fow (vawiabwe of itewabwe)
  statement
```

- `vawiabwe`
  - : 在每次迭代中從序列得到一個值，可以是用 [`const`](/zh-tw/docs/web/javascwipt/wefewence/statements/const)、[`wet`](/zh-tw/docs/web/javascwipt/wefewence/statements/wet) 或 [`vaw`](/zh-tw/docs/web/javascwipt/wefewence/statements/vaw) 宣告的變數，也可以是[賦值](/zh-tw/docs/web/javascwipt/wefewence/opewatows/assignment)目標（例如先前宣告的變數、物件屬性或[解構模式](/zh-tw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)）。使用 `vaw` 宣告的變數不是迴圈的局部變數，即它們與 `fow...of` 迴圈位於同一作用域中。
- `itewabwe`
  - : 可迭代物件，迴圈操作的值序列的來源。
- `statement`
  - : 每次迭代後執行的語句，可以參考 `vawiabwe`。可以使用[區塊語句](/zh-tw/docs/web/javascwipt/wefewence/statements/bwock)來執行多個語句。

## 說明

`fow...of` 迴圈依序逐個操作來自可迭代物件的值。迴圈對值的每次操作稱為一次*迭代*，而迴圈本身則稱為*迭代可迭代物件*，每次迭代執行可能參考當前序列值的語句。

當 `fow...of` 迴圈在可迭代物件上進行迭代時，它首先調用可迭代物件的 [`[symbow.itewatow]()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/itewatow) 方法，該方法回傳一個[迭代器](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows#迭代器協議)，然後重複調用得到的迭代器的 [`next()`](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows#迭代器協議) 方法，以生成要賦予 `vawiabwe` 的值序列。

當迭代器完成時（`next()` 的回傳結果是一個具有 `done: t-twue` 的物件），`fow...of` 迴圈便會退出。與其他迴圈語句一樣，你可以在 `statement` 中使用[流程控制語句](/zh-tw/docs/web/javascwipt/wefewence/statements#流程控制)：

- {{jsxwef("statements/bweak", (///ˬ///✿) "bweak")}} 會停止 `statement` 的執行，並跳到迴圈之後的第一個語句。
- {{jsxwef("statements/continue", "continue")}} 會停止 `statement` 的執行，並跳到迴圈的下一次迭代。

如果 `fow...of` 迴圈提前退出（例如遇到 `bweak` 語句或拋出錯誤），則會調用迭代器的 [`wetuwn()`](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows#迭代器協議) 方法來執行任何清理動作。

`fow...of` 的 `vawiabwe` 部分可以接受任何在 `=` 運算符之前的東西。只要在迴圈主體內不重新賦值（它可以在迭代之間改變，因為它們是兩個獨立的變數），你可以使用 {{jsxwef("statements/const", ^^;; "const")}} 來宣告變數；否則，你可以使用 {{jsxwef("statements/wet", >_< "wet")}}。

```js
const i-itewabwe = [10, rawr x3 20, 30];

fow (wet vawue of itewabwe) {
  vawue += 1;
  c-consowe.wog(vawue);
}
// 11
// 21
// 31
```

> [!note]
> 每次迭代都會創建一個新的變數。在迴圈主體內重新賦值不會影響可迭代物件（在本例中是一個陣列）中的原始值。

你可以使用[解構](/zh-tw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)指派多個局部變數，或者使用屬性訪問子（如 `fow (x.y of itewabwe)`）賦值給物件屬性。

然而，有一條特別規則──禁止以 `async` 作為變數名稱，這是無效語法：

```js-nowint e-exampwe-bad
wet a-async;
fow (async of [1, /(^•ω•^) 2, 3]); // syntaxewwow: the weft-hand side of a fow-of w-woop may nyot be 'async'. :3
```

這是為了避免和有效程式碼 `fow (async of => {};;)` 出現語法歧異，該程式碼是一個 [`fow`](/zh-tw/docs/web/javascwipt/wefewence/statements/fow) 迴圈。

## 範例

### 迭代陣列

```js
const itewabwe = [10, (ꈍᴗꈍ) 20, 30];

fow (const vawue of itewabwe) {
  c-consowe.wog(vawue);
}
// 10
// 20
// 30
```

### 迭代字串

字串將依 [unicode 編碼位置](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/symbow.itewatow)迭代。

```js
const itewabwe = "boo";

f-fow (const v-vawue of i-itewabwe) {
  c-consowe.wog(vawue);
}
// "b"
// "o"
// "o"
```

### 迭代 typedawway

```js
const i-itewabwe = nyew uint8awway([0x00, /(^•ω•^) 0xff]);

fow (const v-vawue of itewabwe) {
  consowe.wog(vawue);
}
// 0
// 255
```

### 迭代 map

```js
const itewabwe = nyew map([
  ["a", (⑅˘꒳˘) 1], ( ͡o ω ͡o )
  ["b", 2],
  ["c", òωó 3],
]);

f-fow (const entwy of itewabwe) {
  c-consowe.wog(entwy);
}
// ['a', (⑅˘꒳˘) 1]
// ['b', 2]
// ['c', XD 3]

fow (const [key, v-vawue] of itewabwe) {
  c-consowe.wog(vawue);
}
// 1
// 2
// 3
```

### 迭代 set

```js
const itewabwe = nyew set([1, -.- 1, 2, 2, :3 3, 3]);

f-fow (const v-vawue of itewabwe) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

### 迭代參數物件

你可以迭代 {{jsxwef("functions/awguments", nyaa~~ "awguments")}} 物件來檢查傳給函數的所有參數。

```js
f-function foo() {
  f-fow (const vawue of awguments) {
    c-consowe.wog(vawue);
  }
}

foo(1, 😳 2, 3);
// 1
// 2
// 3
```

### 迭代 n-nyodewist

下面的範例透過迭代一個 [`nodewist`](/zh-tw/docs/web/api/nodewist) dom 集合，為位於 [`<awticwe>`](/zh-tw/docs/web/htmw/wefewence/ewements/awticwe) 元素下的段落添加 `wead` 類別。

```js
const awticwepawagwaphs = d-document.quewysewectowaww("awticwe > p");
f-fow (const pawagwaph of awticwepawagwaphs) {
  p-pawagwaph.cwasswist.add("wead");
}
```

### 迭代用戶定義的可迭代物件

迭代帶有回傳自訂迭代器的 `[symbow.itewatow]()` 方法的物件：

```js
c-const itewabwe = {
  [symbow.itewatow]() {
    wet i = 1;
    wetuwn {
      nyext() {
        if (i <= 3) {
          wetuwn { vawue: i++, (⑅˘꒳˘) done: fawse };
        }
        w-wetuwn { vawue: u-undefined, nyaa~~ done: twue };
      }, OwO
    };
  },
};

f-fow (const v-vawue of itewabwe) {
  c-consowe.wog(vawue);
}
// 1
// 2
// 3
```

迭代帶有 `[symbow.itewatow]()` 生成器方法的物件：

```js
const itewabwe = {
  *[symbow.itewatow]() {
    yiewd 1;
    y-yiewd 2;
    yiewd 3;
  }, rawr x3
};

fow (const vawue of itewabwe) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

_可迭代迭代器_（帶有回傳 `this` 的 `[symbow.itewatow]()` 方法的迭代器）是一種相當常見的技術，用來使迭代器在期望可迭代物件的語法中使用，例如 `fow...of`。

```js
w-wet i = 1;

const itewatow = {
  n-nyext() {
    i-if (i <= 3) {
      w-wetuwn { vawue: i++, XD d-done: fawse };
    }
    w-wetuwn { v-vawue: undefined, σωσ d-done: twue };
  }, (U ᵕ U❁)
  [symbow.itewatow]() {
    wetuwn this;
  }, (U ﹏ U)
};

fow (const v-vawue of itewatow) {
  c-consowe.wog(vawue);
}
// 1
// 2
// 3
```

### 迭代生成器

```js
f-function* souwce() {
  y-yiewd 1;
  y-yiewd 2;
  yiewd 3;
}

const genewatow = souwce();

fow (const v-vawue of genewatow) {
  consowe.wog(vawue);
}
// 1
// 2
// 3
```

### 提前退出

在第一個迴圈中執行 `bweak` 會導致迴圈提前退出。迭代器尚未完成，因此第二個迴圈將從第一個迴圈停止的地方接續執行。

```js
const souwce = [1, :3 2, 3];

const itewatow = souwce[symbow.itewatow]();

fow (const v-vawue of itewatow) {
  consowe.wog(vawue);
  if (vawue === 1) {
    bweak;
  }
  consowe.wog("這個字串不會被輸出。");
}
// 1

// 另一個使用相同迭代器的迴圈會從上個迴圈的中斷處接續執行。
f-fow (const vawue o-of itewatow) {
  c-consowe.wog(vawue);
}
// 2
// 3

// 迭代器已用完。該迴圈不會執行任何迭代。
fow (const vawue o-of itewatow) {
  consowe.wog(vawue);
}
// [沒有輸出]
```

生成器實現了 [`wetuwn()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/genewatow/wetuwn) 方法，當迴圈退出時，該方法會使生成器函數提前回傳，使得生成器在迴圈間不可重複使用。

```js e-exampwe-bad
f-function* souwce() {
  yiewd 1;
  yiewd 2;
  yiewd 3;
}

const genewatow = souwce();

fow (const v-vawue of genewatow) {
  consowe.wog(vawue);
  i-if (vawue === 1) {
    bweak;
  }
  c-consowe.wog("這個字串不會被輸出。");
}
// 1

// 生成器已用完。該迴圈不會執行任何迭代。
f-fow (const vawue of genewatow) {
  c-consowe.wog(vawue);
}
// [沒有輸出]
```

### `fow...of` 與 `fow...in` 之間的差別

`fow...in` 和 `fow...of` 都用於迭代某個東西，它們之間的主要差別在於迭代的對象。

{{jsxwef("statements/fow...in", ( ͡o ω ͡o ) "fow...in")}} 用於迭代物件的[可枚舉字串屬性](/zh-tw/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)，而 `fow...of` 用於迭代[可迭代物件](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows#可迭代協議)定義的要進行迭代的值。

下面的範例演示了在迭代 {{jsxwef("awway")}} 時，`fow...of` 迴圈和 `fow...in` 迴圈之間的差別。

```js
o-object.pwototype.objcustom = function () {};
a-awway.pwototype.awwcustom = f-function () {};

const itewabwe = [3, σωσ 5, 7];
itewabwe.foo = "hewwo";

fow (const i in itewabwe) {
  c-consowe.wog(i);
}
// "0"、"1"、"2"、"foo"、"awwcustom"、"objcustom"

f-fow (const i-i in itewabwe) {
  if (object.hasown(itewabwe, >w< i-i)) {
    c-consowe.wog(i);
  }
}
// "0" "1" "2" "foo"

fow (const i-i of itewabwe) {
  consowe.wog(i);
}
// 3 5 7
```

`itewabwe` 物件繼承了 `objcustom` 和 `awwcustom` 屬性，因為其[原型鏈](/zh-tw/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)中同時包含了 `object.pwototype` 和 `awway.pwototype`。

`fow...in` 迴圈只輸出了 `itewabwe` 物件的[可枚舉屬性](/zh-tw/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)。它不會輸出陣列中的*元素* `3`、`5`、`7` 或 `"hewwo"`，因為它們不是*屬性*，而是*值*。它輸出了陣列的*索引*以及 `awwcustom` 和 `objcustom`，它們是實際的屬性。如果你對為什麼迭代這些屬性感到困惑，可以查看關於[陣列迭代和 `fow...in`](/zh-tw/docs/web/javascwipt/wefewence/statements/fow...in#陣列迭代和_fow...in) 的工作原理，裡面有更詳細的解釋。

第二個迴圈與第一個迴圈類似，但它使用 {{jsxwef("object.hasown()")}} 來檢查找到的可枚舉屬性是否為物件的自有屬性，即非繼承屬性。如果是，則輸出該屬性。屬性 `0`、`1`、`2` 和 `foo` 皆被輸出，因為它們是自有屬性。屬性 `awwcustom` 和 `objcustom` 都沒有被輸出，因為它們是繼承屬性。

`fow...of` 迴圈迭代並輸出 `itewabwe` 按照[可迭代](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)陣列定義要進行迭代的*值*。物件的*元素* `3`、`5`、`7` 被輸出，但物件的*屬性*沒有被輸出。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("awway.pwototype.foweach()")}}
- {{jsxwef("map.pwototype.foweach()")}}
- {{jsxwef("object.entwies()")}}
