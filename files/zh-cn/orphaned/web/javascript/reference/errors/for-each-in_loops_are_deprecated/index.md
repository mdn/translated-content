---
title: 'Warning: JavaScript 1.6''s for-each-in loops are deprecated'
slug: orphaned/Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
original_slug: Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
---
{{jsSidebar("Errors")}}

## 消息

```plain
警告: JavaScript 1.6's 版本的 for-each-in 遍历不再赞成使用; 建议用 ES6 的 for-of 替换
```

## 错误类型

警告

## 出了什么问题？

JavaScript 1.6's {{jsxref("Statements/for_each...in", "for each (variable in obj)")}}语法不赞成使用，将在未来版本移除它。

## 实例

### 遍历对象

{{jsxref("Statements/for_each...in", "for each...in")}} 用来遍历指定对象。

#### 不赞成这么使用

> **警告：**
>
> ```js example-bad
> var object = { a: 10, b: 20 };
> ```
>
> ```js example-bad
> for each (var x in object) {
>    console.log(x);        // 10
>                           // 20
>  }
> ```

#### 替换语法

你可以使用 {{jsxref("Statements/for...in", "for...in")}} 遍历指定对象，获取每次循环的值：

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var x = object[key];
  console.log(x);        // 10
                         // 20
}
```

也可以使用{jsxref("Statements/for...of", "for...of")}} (ES2015) 和 {{jsxref("Object.values")}} (ES2017), 你可以获取指定对象的值得数组然后像这样遍历它：

```js example-good
var object = { a: 10, b: 20 };

for (var x of Object.values(object)) {
  console.log(x);        // 10
                         // 20
}
```

### 数组遍历

{{jsxref("Statements/for_each...in", "for each...in")}} 被用于遍历制定数组。

#### 不赞成这么使用

> **警告：**
>
> ```js example-bad
> var array = [10, 20, 30];
> ```
>
> ```js example-bad
> for each (var x in array) {
>    console.log(x);        // 10
>                           // 20
>                           // 30
>  }
> ```

#### 替换语法

现在最好用{{jsxref("Statements/for...of", "for...of")}} (ES2015) 替换

```js example-good
var array = [10, 20, 30];

for (var x of array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

### 遍历一个空数组

{{jsxref("Statements/for_each...in", "for each...in")}} 如果指定值是 `null` o 或 `undefined 什么都遍历不出来。` {{jsxref("Statements/for...of", "for...of")}} 在这种情况会抛出异常。

#### 不赞成这么使用

> **警告：**
>
> ```js example-bad
> function func(array) {
>    for each (var x in array) {
>      console.log(x);
>    }
>  }
>  func([10, 20]);        // 10
>                         // 20
>  func(null);            // prints nothing
>  func(undefined);       // prints nothing
> ```

#### 替换语法

用{{jsxref("Statements/for...of", "for...of")}} 重写{{jsxref("Statements/for_each...in", "for each...in")}} 后值可以为 `null` 和 `undefined` ，同时你需要警惕{{jsxref("Statements/for...of", "for...of")}}抛出的异常。

```js example-good
function func(array) {
  if (array) {
    for (var x of array) {
      console.log(x);
    }
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // prints nothing
func(undefined);       // prints nothing
```

### 遍历对象键值对

#### 不赞成这么使用

不赞成使用{{jsxref("Statements/for_each...in", "for each...in")}}和{{jsxref("Iterator")}} 对象来遍历指定对象的键值对。

> **警告：**
>
> ```js example-bad
> var object = { a: 10, b: 20 };
> ```
>
> ```js example-bad
> for each (var [key, value] in Iterator(object)) {
>    console.log(key, value);  // "a", 10
>                              // "b", 20
>  }
> ```

#### 替换语法

你可以使用 {{jsxref("Statements/for...in", "for...in")}} 遍历指定对象，获取每次循环的值：

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var value = object[key];
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

也可以使用{jsxref("Statements/for...of", "for...of")}} (ES2015) 和 {{jsxref("Object.values")}} (ES2017), 你可以获取指定对象的值得数组然后像这样遍历它：

```js example-good
var object = { a: 10, b: 20 };

for (var [key, value] of Object.entries(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

## 参见

- {{jsxref("Statements/for...of", "for...of")}}
- {{jsxref("Object.values")}}
- {{jsxref("Object.entries")}}
