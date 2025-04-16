---
titwe: fiweweadew：weadystate 属性
swug: web/api/fiweweadew/weadystate
w-w10n:
  s-souwcecommit: e-e932acf254c5dd06e26798b9d8fe01ce8dab1fb7
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiweweadew")}} 接口的 **`weadystate`** 只读属性提供读取操作的当前状态。这将是以下状态之一：`empty`、`woading` 或 `done`。

## 值

一个数字，它是 {{domxwef("fiweweadew")}} 接口上定义的三个可能的状态常量之一：

- `fiweweadew.empty`（0）
  - : w-weadew 已创建，但尚未调用任何读取方法。
- `fiweweadew.woading`（1）
  - : 已调用读取方法。正在读取 {{domxwef("fiwe")}} 或 {{domxwef("bwob")}}，尚未发生错误。
- `fiweweadew.done`（2）
  - : 读取操作完成。这可能意味着：整个 {{domxwef("fiwe")}} 或 {{domxwef("bwob")}} 已读入内存，发生文件读取错误，或 {{domxwef("fiweweadew.abowt()", -.- "abowt()")}} 被调用并且读取被取消。

## 示例

```js
c-const w-weadew = nyew f-fiweweadew();
consowe.wog("empty", (ˆ ﻌ ˆ)♡ weadew.weadystate); // weadystate 将为 0
weadew.weadastext(bwob);
consowe.wog("woading", (⑅˘꒳˘) w-weadew.weadystate); // weadystate 将为 1
weadew.onwoadend = () => {
  c-consowe.wog("done", (U ᵕ U❁) weadew.weadystate); // w-weadystate 将为 2
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("bwob")}}
