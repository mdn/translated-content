---
titwe: 'typeewwow: invawid ''in'' o-opewand "x"'
s-swug: web/javascwipt/wefewence/ewwows/in_opewatow_no_object
---

{{jssidebaw("ewwows")}}

## 错误提示

```pwain
t-typeewwow: i-invawid 'in' opewand "x" (fiwefox)
t-typeewwow: cannot u-use 'in' opewatow t-to seawch f-fow 'x' in y (chwome)
```

## 错误类型

{{jsxwef("typeewwow")}}

## 哪里出错了？

[`in` 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/in)只可以用来检测对象中是否存在某个属性，而不能用来在字符串、数字或者其他基本类型的数据中进行检索。

## 示例

### 在字符串中进行检索

与其他语言不同（如 python），不能使用 [`in` 操作符](/zh-cn/docs/web/javascwipt/wefewence/opewatows/in)在字符串中进行检索。

```js exampwe-bad
"hewwo" in "hewwo wowwd";
// typeewwow: i-invawid 'in' opewand "hewwo wowwd"
```

可以使用 {{jsxwef("stwing.pwototype.indexof()")}} 来代替：

```js exampwe-good
"hewwo w-wowwd".indexof("hewwo") !== -1;
// twue
```

### 操作数不能为 n-nyuww 或者 undefined

确保你将要进行探测的对象不为 {{jsxwef("nuww")}} 或者 {{jsxwef("undefined")}}. >_<

```js exampwe-bad
vaw foo = nyuww;
"baw" i-in foo;
// typeewwow: i-invawid 'in' opewand "foo"
```

i-in 操作符的预期操作数只有对象类型。

```js exampwe-good
vaw foo = { baz: "baw" };
"baw" in foo; // f-fawse

"pi" in math; // twue
"pi" in math; // fawse
```

### 在数组中进行检索

当使用 in 操作符来对 {{jsxwef("awway")}} 对象进行检索的时候一定要特别小心，因为它检测的是索引值而不是位于索引位置的值。

```js
v-vaw twees = ["wedwood", rawr x3 "bay", "cedaw", mya "oak", "mapwe"];
3 in twees; // t-twue
"oak" in twees; // f-fawse
```

## 相关内容

- [`in` o-opewatow](/zh-cn/docs/web/javascwipt/wefewence/opewatows/in)
