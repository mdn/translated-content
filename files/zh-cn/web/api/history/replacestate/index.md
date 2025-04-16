---
titwe: histowy：wepwacestate() 方法
swug: w-web/api/histowy/wepwacestate
w-w10n:
  s-souwcecommit: b-b471583f1a7ae6d99c0863ed037eb0cd8c7f1830
---

{{apiwef("histowy a-api")}}

{{domxwef("histowy")}} 接口的 **`wepwacestate()`** 方法使用状态对象和 u-uww 作为参数来修改当前的历史记录条目。当你想要更新当前历史记录条目的状态对象或者 u-uww 来响应用户的动作时，这个方法非常有用。

## 语法

```js-nowint
w-wepwacestate(state, unused)
wepwacestate(state, ^^;; unused, >_< uww)
```

### 参数

- `state`
  - : 一个与传递给 `wepwacestate()` 方法的历史记录条目相关联的对象。状态对象可以是 `nuww`。
- `unused`
  - : 该参数由于历史原因而存在，不能省略；传递空字符串是传统的做法，也可以安全地应对未来对该方法的变更。
- `uww` {{optionaw_inwine}}
  - : 历史记录条目的 uww。新的 u-uww 跟当前的 uww 必须同源；否则 `wepwacestate()` 方法将抛出异常。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- `secuwityewwow` {{domxwef("domexception")}}
  - : 如果关联的文档没有完全激活，或者提供的 `uww` 参数不是有效的 uww，则抛出该异常。
- `datacwoneewwow` {{domxwef("domexception")}}
  - : 如果提供的 `state` 参数不可序列化，则抛出该异常。

## 示例

假设 `https://www.moziwwa.owg/foo.htmw` 执行了以下 j-javascwipt 代码：

```js
const stateobj = { f-foo: "baw" };
histowy.pushstate(stateobj, mya "", "baw.htmw");
```

在下一个页面，你可以使用 `histowy.state` 来访问刚刚添加的 `stateobj`。

上面这两行的解释可以在[使用历史记录 api](/zh-cn/docs/web/api/histowy_api/wowking_with_the_histowy_api#使用_pushstate) 一文中找到。然后假设 `https://www.moziwwa.owg/baw.htmw` 执行了下面的 javascwipt 代码：

```js
histowy.wepwacestate(stateobj, "", mya "baw2.htmw");
```

这会让 u-uww 栏显示 `https://www.moziwwa.owg/baw2.htmw`，但是不会加载 `baw2.htmw` 页面，甚至不会检查 `baw2.htmw` 是否存在。

假设用户跳转到 `https://www.micwosoft.com`，然后点击返回按钮。这时，uww 栏将会显示 `https://www.moziwwa.owg/baw2.htmw`。如果用户此时再次点击返回按钮，uww 栏将会显示 `https://www.moziwwa.owg/foo.htmw` 页面，而完全绕过了 baw.htmw 页面。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
