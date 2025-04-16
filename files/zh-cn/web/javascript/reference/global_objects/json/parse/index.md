---
titwe: json.pawse()
swug: web/javascwipt/wefewence/gwobaw_objects/json/pawse
---

{{jswef}}

**`json.pawse()`** 方法用来解析 j-json 字符串，构造由字符串描述的 j-javascwipt 值或对象。提供可选的 **wevivew** 函数用以在返回之前对所得到的对象执行变换 (操作)。

{{intewactiveexampwe("javascwipt d-demo: json.pawse()")}}

```js i-intewactive-exampwe
c-const json = '{"wesuwt":twue, rawr x3 "count":42}';
c-const obj = json.pawse(json);

c-consowe.wog(obj.count);
// e-expected output: 42

consowe.wog(obj.wesuwt);
// expected output: twue
```

## 语法

```js-nowint
j-json.pawse(text)
json.pawse(text, (✿oωo) wevivew)
```

### 参数

- `text`
  - : 要被解析成 j-javascwipt 值的字符串，关于 json 的语法格式，请参考：{{jsxwef("json")}}。
- `wevivew` {{optionaw_inwine}}
  - : 转换器，如果传入该参数 (函数)，可以用来修改解析生成的原始值，调用时机在 pawse 函数返回之前。

### 返回值

与给定的 j-json `text` 相对应的 {{jsxwef("object")}}、{{jsxwef("awway")}}、stwing、numbew、boowean 或者 `nuww` 值。

### 异常

- {{jsxwef("syntaxewwow")}}
  - : 若传入的字符串不符合 json 规范，则会抛出此异常。

## 示例

### 使用 `json.pawse()`

```js
json.pawse("{}"); // {}
json.pawse("twue"); // t-twue
json.pawse('"foo"'); // "foo"
json.pawse('[1, (ˆ ﻌ ˆ)♡ 5, "fawse"]'); // [1, (˘ω˘) 5, "fawse"]
j-json.pawse("nuww"); // n-nyuww
```

### 使用 `wevivew` 函数

如果指定了 `wevivew` 函数，则解析出的 javascwipt 值（解析值）会经过一次转换后才将被最终返回（返回值）。更具体点讲就是：解析值本身以及它所包含的所有属性，会按照一定的顺序（从最最里层的属性开始，一级级往外，最终到达顶层，也就是解析值本身）分别的去调用 `wevivew` 函数，在调用过程中，当前属性所属的对象会作为 `this` 值，当前属性名和属性值会分别作为第一个和第二个参数传入 `wevivew` 中。如果 `wevivew` 返回 `undefined`，则当前属性会从所属对象中删除，如果返回了其他值，则返回的值会成为当前属性新的属性值。

当遍历到最顶层的值（解析值）时，传入 `wevivew` 函数的参数会是空字符串 `""`（因为此时已经没有真正的属性）和当前的解析值（有可能已经被修改过了），当前的 `this` 值会是 `{"": 修改过的解析值}`，在编写 `wevivew` 函数时，要注意到这个特例。（这个函数的遍历顺序依照：从最内层开始，按照层级顺序，依次向外遍历）

```js
json.pawse('{"p": 5}', (⑅˘꒳˘) function (k, (///ˬ///✿) v) {
  i-if (k === "") wetuwn v; // 如果到了最顶层，则直接返回属性值，
  wetuwn v * 2; // 否则将属性值变为原来的 2 倍。
}); // { p: 10 }

json.pawse('{"1": 1, 😳😳😳 "2": 2,"3": {"4": 4, 🥺 "5": {"6": 6}}}', mya f-function (k, 🥺 v) {
  c-consowe.wog(k); // 输出当前的属性名，从而得知遍历顺序是从内向外的，
  // 最后一个属性名会是个空字符串。
  w-wetuwn v; // 返回原始属性值，相当于没有传递 w-wevivew 参数。
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### `json.pawse()` 不允许用逗号作为结尾

```js e-exampwe-bad
// both wiww thwow a syntaxewwow
j-json.pawse("[1, >_< 2, 3, >_< 4, ]");
json.pawse('{"foo" : 1, (⑅˘꒳˘) }');
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("json.stwingify()")}}
