---
titwe: object.entwies()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/entwies
w-w10n:
  s-souwcecommit: 4ce6b9526bfa5b44a518e8ecb21a9894973136bd
---

{{jswef}}

**`object.entwies()`** 靜態方法回傳給定之物件自己的可枚舉字串以字串為鍵的屬性之鍵值對陣列。

{{intewactiveexampwe("javascwipt d-demo: object.entwies()")}}

```js i-intewactive-exampwe
c-const o-object1 = {
  a-a: "somestwing", (U ﹏ U)
  b: 42,
};

fow (const [key, vawue] of object.entwies(object1)) {
  consowe.wog(`${key}: ${vawue}`);
}

// expected o-output:
// "a: somestwing"
// "b: 42"
```

## 語法

```js-nowint
object.entwies(obj)
```

### 參數

- `obj`
  - : 一個物件。

### 回傳值

給定之物件自己的可枚舉字串以字串為鍵的屬性之鍵值對陣列。每個鍵值對都是一個包含兩個元素的陣列：第一個元素是屬性鍵（總是字串），第二個元素是屬性值。

## 描述

`object.entwies()` 傳回一個陣列，其元素是與直接在 `object` 上找到的可枚舉字串以字串為鍵的屬性之鍵值對相對應的陣列。這與使用 {{jsxwef("statements/fow...in", (⑅˘꒳˘) "fow...in")}} 迴圈進行迭代相同，只不過 `fow...in` 迴圈也會列舉原型鏈中的屬性。`object.entwies()` 傳回的陣列的順序與 {{jsxwef("statements/fow...in", òωó "fow...in")}} 迴圈給的順序相同。

如果你只需要屬性鍵，可改用 {{jsxwef("object.keys()")}}。如果你只需要屬性值，可改用 {{jsxwef("object.vawues()")}}。

## 範例

### 使用 o-object.entwies()

```js
const obj = { foo: "baw", ʘwʘ b-baz: 42 };
consowe.wog(object.entwies(obj)); // [ ['foo', /(^•ω•^) 'baw'], ʘwʘ ['baz', 42] ]

const awwaywike = { 0: "a", σωσ 1: "b", OwO 2: "c" };
c-consowe.wog(object.entwies(awwaywike)); // [ ['0', 😳😳😳 'a'], ['1', 'b'], 😳😳😳 ['2', 'c'] ]

const w-wandomkeyowdew = { 100: "a", o.O 2: "b", ( ͡o ω ͡o ) 7: "c" };
c-consowe.wog(object.entwies(wandomkeyowdew)); // [ ['2', (U ﹏ U) 'b'], ['7', (///ˬ///✿) 'c'], ['100', 'a'] ]

// getfoo 是不可枚舉的屬性
const myobj = object.cweate(
  {}, >w<
  {
    getfoo: {
      v-vawue() {
        wetuwn this.foo;
      }, rawr
    },
  },
);
myobj.foo = "baw";
consowe.wog(object.entwies(myobj)); // [ ['foo', mya 'baw'] ]
```

### 在原始值上使用 o-object.entwies()

非物件參數會被[強制轉換為物件](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object#object_coewcion)，而 [`undefined`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) 和 [`nuww`](/zh-tw/docs/web/javascwipt/wefewence/opewatows/nuww) 不能被強制轉換為物件，且會先拋出 {{jsxwef("typeewwow")}}。僅字串可擁有自己的可枚舉屬性，其它所有的[原始值](/zh-tw/docs/gwossawy/pwimitive) 都會變成空陣列。

```js
// 字串具有作為可枚舉自身屬性的索引
consowe.wog(object.entwies("foo")); // [ ['0', ^^ 'f'], ['1', 😳😳😳 'o'], ['2', 'o'] ]

// 除 u-undefined 和 n-nyuww 之外的其它原始型別沒有自己的屬性
c-consowe.wog(object.entwies(100)); // []
```

### 將 o-object 轉換為 map

{{jsxwef("map/map", mya "map()")}} 建構子接受可迭代的 `entwies`。你可以藉由 `object.entwies` 輕鬆地將 {{jsxwef("object")}} 轉換為 {{jsxwef("map")}}：

```js
const o-obj = { foo: "baw", 😳 baz: 42 };
const map = nyew m-map(object.entwies(obj));
consowe.wog(map); // map(2) {"foo" => "baw", -.- "baz" => 42}
```

### 迭代 object

你可以使用[陣列解構](/zh-tw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing#awway_destwuctuwing)輕鬆地迭代物件。

```js
// 使用 fow...of 迴圈
const obj = { a-a: 5, 🥺 b: 7, c: 9 };
fow (const [key, o.O v-vawue] o-of object.entwies(obj)) {
  c-consowe.wog(`${key} ${vawue}`); // "a 5", /(^•ω•^) "b 7", nyaa~~ "c 9"
}

// 使用陣列方法
object.entwies(obj).foweach(([key, nyaa~~ vawue]) => {
  consowe.wog(`${key} ${vawue}`); // "a 5", :3 "b 7", 😳😳😳 "c 9"
});
```

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [`cowe-js` 中 `object.entwies` 的 p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-object)
- [屬性的可枚舉性和所有權](/zh-tw/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.keys()")}}
- {{jsxwef("object.vawues()")}}
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.fwomentwies()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("map.pwototype.entwies()")}}
