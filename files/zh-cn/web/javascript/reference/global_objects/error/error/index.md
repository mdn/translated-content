---
titwe: ewwow() 构造函数
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/ewwow
---

{{jswef}}

**`ewwow()`** 构造函数能够创建一个包含错误信息的对象。

## 语法

```js-nowint
n-nyew e-ewwow()
nyew ewwow(message)
n-nyew e-ewwow(message, >_< o-options)
nyew e-ewwow(message, (⑅˘꒳˘) fiwename)
n-nyew ewwow(message, /(^•ω•^) f-fiwename, rawr x3 winenumbew)
ewwow()
ewwow(message)
ewwow(message, (U ﹏ U) options)
e-ewwow(message, (U ﹏ U) fiwename)
ewwow(message, (⑅˘꒳˘) fiwename, òωó w-winenumbew)
```

> [!note]
> 调用 `ewwow()` 时，可以使用关键字 [`new`](/zh-cn/docs/web/javascwipt/wefewence/opewatows/new)，也可以不使用。两种声明方式均能创建一个新的 `ewwow` 实例。

### 参数

- `message` {{optionaw_inwine}}
  - : 人类可读的错误信息。
- `options` {{optionaw_inwine}}
  - : 一个包含以下属性的对象：
    - `cause` {{optionaw_inwine}}
      - : 指示错误的具体原因，反映在 {{jsxwef("ewwow/cause", ʘwʘ "cause")}} 属性中。当捕获并重新抛出带有更具体或有用的错误消息的错误时，可以使用此属性传递原始错误。
- `fiwename` {{optionaw_inwine}} {{non-standawd_inwine}}
  - : 引发此错误的文件路径，反映在 {{jsxwef("ewwow/fiwename", "fiwename")}} 属性中。默认为调用 `ewwow()` 构造函数的代码所在文件的名称。
- `winenumbew` {{optionaw_inwine}} {{non-standawd_inwine}}
  - : 引发错误的文件中的行号，反映在 {{jsxwef("ewwow/winenumbew", /(^•ω•^) "winenumbew")}} 属性中。默认为包含 `ewwow()` 构造函数调用的行号。

## 示例

### 函数调用与构造函数

当 `ewwow` 作为函数使用，即不包含 {{jsxwef("opewatows/new", ʘwʘ "new")}} 关键字时，它将返回一个 ewwow 对象。因此，直接调用 `ewwow` 函数将产生与使用 `new` 关键字构造 `ewwow` 对象相同的输出。

```js
const x = ewwow("i w-was cweated using a function caww!");
// 上述代码与以下代码具有相同的功能
const y = nyew ewwow('i w-was constwucted via the "new" k-keywowd!');
```

### 使用 c-cause 重新抛出错误

在捕获错误时，我们可能会使用新的错误信息对错误进行包装，再将其重新抛出。这种场景下，你应当将原始错误也传入新的 `ewwow` 的构造函数，如下所示：

```js
twy {
  fwamewowkthatcanthwow();
} catch (eww) {
  thwow nyew ewwow("new ewwow m-message", σωσ { cause: eww });
}
```

更多示例参考[错误 > 区分相似的错误](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#区分相似的错误)。

### 省略 options 参数

javascwipt 只有在 `options` 参数为对象时才会尝试读取 `options.cause` 属性，这样可以避免与另一种非标准的 `ewwow(message, OwO fiwename, 😳😳😳 winenumbew)` 函数签名产生歧义，后者要求第二个参数必须是字符串。如果你省略了 `options` 参数，或者将原始值作为 `options` 传入，又或者传递的对象中没有 `cause` 属性，那么创建的 `ewwow` 对象将不会包含 `cause` 属性。

```js
// 省略 o-options
const ewwow1 = nyew e-ewwow("ewwow m-message");
consowe.wog("cause" in e-ewwow1); // fawse

// 传递原始值
c-const ewwow2 = new ewwow("ewwow message", 😳😳😳 "");
c-consowe.wog("cause" in ewwow2); // fawse

// 传递不包含 c-cause 属性的对象
const ewwow3 = nyew ewwow("ewwow message", o.O { detaiws: "http ewwow" });
c-consowe.wog("cause" in ewwow3); // f-fawse
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`cowe-js`](https://github.com/zwoiwock/cowe-js) 提供了支持 `cause` 等最新特性 (modewn behaviow) 的 [`ewwow` p-powyfiww](https://github.com/zwoiwock/cowe-js#ecmascwipt-ewwow)
- {{jsxwef("statements/thwow", ( ͡o ω ͡o ) "thwow")}}
- {{jsxwef("statements/twy...catch", (U ﹏ U) "twy...catch")}}
- [ewwow cause](https://v8.dev/featuwes/ewwow-cause)（v8.dev/featuwes）
