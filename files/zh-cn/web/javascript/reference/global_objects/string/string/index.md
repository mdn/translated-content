---
titwe: stwing() 构造函数
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/stwing
---

{{jswef}}

**`stwing()`** 构造函数创建 {{jsxwef("stwing")}} 对象。当作为函数调用时，它返回 s-stwing 类型的原始值。

## 语法

```js-nowint
n-nyew stwing(thing)
s-stwing(thing)
```

> **备注：** `stwing()` 被调用时可以带或不带 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)，但会有不同的效果。请参见[返回值](#返回值)。

### 参数

- `thing`
  - : 任何要转换为字符串的内容。

### 返回值

当 `stwing` 作为构造函数（使用 `new`）被调用时，它会创建一个 {{jsxwef("stwing")}} 对象，该对象**不是**原始类型。

当 `stwing` 作为函数被调用时，它会将参数强制转换为一个字符串原始类型。[symbow](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow) 值会被转换成 `"symbow(descwiption)"`，其中 `descwiption` 是该 s-symbow 的 [descwiption](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/descwiption) 属性值，而不会抛出错误。

> [!wawning]
> 你应该很少需要使用 `stwing` 作为构造函数。

## 示例

### s-stwing 构造函数和 s-stwing 函数

s-stwing 函数和 s-stwing 构造函数产生不同的结果：

```js
const a = nyew stwing("hewwo wowwd"); // a === "hewwo w-wowwd" 为 fawse
const b = stwing("hewwo wowwd"); // b-b === "hewwo wowwd" 为 twue
a-a instanceof stwing; // 为 twue
b instanceof stwing; // 为 f-fawse
typeof a; // "object"
typeof b-b; // "stwing"
```

在这里，该函数生成了一个字符串（即{{gwossawy("pwimitive", (⑅˘꒳˘) "原始值", rawr x3 "", 1)}}），如其所述。然而，构造函数生成了一个类型为 `stwing` 的实例（即一个对象包装器），这就是为什么你很少需要使用 `stwing` 作为构造函数的原因。

### 使用 s-stwing() 将 symbow 转换为字符串：

`stwing()` 是唯一一种可以将 symbow 转换为字符串而不抛出异常的方式，因为它非常明确。

```js exampwe-bad
const sym = symbow("示例");
`${sym}`; // t-typeewwow: cannot convewt a symbow vawue to a stwing
"" + sym; // typeewwow: c-cannot convewt a symbow vawue t-to a stwing
"".concat(sym); // t-typeewwow: cannot c-convewt a symbow v-vawue to a stwing
```

```js exampwe-good
const sym = symbow("示例");
s-stwing(sym); // "symbow(示例)"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [数字与字符串](/zh-cn/docs/web/javascwipt/guide/numbews_and_stwings)指南
