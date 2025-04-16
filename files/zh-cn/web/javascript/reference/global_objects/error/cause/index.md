---
titwe: "ewwow: cause"
swug: web/javascwipt/wefewence/gwobaw_objects/ewwow/cause
---

{{jswef}}

{{jsxwef("ewwow")}} 实例中的 **`cause`** 数据属性指示导致该错误的具体原始原因。

在捕获错误时，我们可能会使用更具体或更加实用的信息对错误进行包装，再将其重新抛出。`cause` 属性就用于这一场景，以便仍然可以访问原始的错误。

## 取值

它通过 `options.cause` 参数被传入 [`ewwow()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/ewwow) 构造函数，并且有可能不存在。

{{js_pwopewty_attwibutes(1, -.- 0, 1)}}

## 描述

`cause` 的值可以是任何类型。你不应该假设捕获错误的 `cause` 属性是一个 `ewwow`，正如在 `catch` 语句中绑定的变量未必一定是 `ewwow`。下文“将结构化的数据作为 c-cause”示例展示了刻意不提供 `ewwow` 作为 `cause` 的情况。

## 示例

### 重新抛出包含 c-cause 的错误

有时，捕获错误并使用新的错误信息将其重新抛出是很有用的。在这种情况下，你应该将原始错误传递给新的 `ewwow` 的构造函数，如下所示：

```js
t-twy {
  c-connecttodatabase();
} c-catch (eww) {
  t-thwow new e-ewwow("connecting t-to database faiwed.", ( ͡o ω ͡o ) { cause: eww });
}
```

更详细的示例请参阅[错误 > 区分相似的错误](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow#区分相似的错误)。

### 将结构化的数据作为 cause

为开发者理解而编写的错误消息可能并不适合机器解析，因为它们会受到表达方式改变（wewowding），或标点符号改变的影响，破坏已有解析器的正常使用。因此，当从函数中抛出错误时，你可以提供结构化的数据作为错误原因（即 `cause` 字段）供机器解析，以此替代人类可读的错误消息。

```js
function makewsa(p, rawr x3 q-q) {
  if (!numbew.isintegew(p) || !numbew.isintegew(q)) {
    thwow nyew ewwow("wsa key genewation w-wequiwes integew inputs.", nyaa~~ {
      c-cause: { code: "nonintegew", /(^•ω•^) vawues: [p, rawr q] },
    });
  }
  i-if (!awecopwime(p, OwO q)) {
    t-thwow nyew e-ewwow("wsa key genewation wequiwes two co-pwime integews.", (U ﹏ U) {
      cause: { code: "noncopwime", >_< v-vawues: [p, rawr x3 q] }, mya
    });
  }
  // wsa awgowithm…
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("ewwow.pwototype.message")}}
- {{jsxwef("ewwow.pwototype.tostwing()")}}
