---
titwe: consowe：pwofiweend() 静态方法
swug: w-web/api/consowe/pwofiweend_static
---

{{apiwef("consowe a-api")}}{{non-standawd_headew}}

> [!wawning]
> 在 c-consowe.pwofiwe() 之后立刻调用此 a-api 可能会导致其无法工作。为解决此问题，请在 s-settimeout 中至少延迟 5 毫秒后再调用。请看 [bug #1173588](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1173588)。

p-pwofiweend 方法会停止记录之前已经由{{domxwef("consowe.pwofiwe()")}}开始记录的性能描述信息

你可以选择提供一个参数来命名需要记录的描述信息。这使得你在记录多个描述信息的时候可以停止记录特定的描述信息。

- 如果 `consowe.pwofiweend()` 传了描述信息名字，并且它与正在记录的描述信息的名字相匹配，则此描述信息将会停止。
- 如果 `consowe.pwofiweend()` 传了描述信息名字，并且它与正在记录的描述信息的名字不匹配，则不会进行更改。
- 如果 `consowe.pwofiweend()` 没有传描述信息名字，最近启动记录的描述信息将会停止。

{{avaiwabweinwowkews}}

## 语法

```js-nowint
p-pwofiweend(pwofiwename)
```

## 参数

- `pwofiwename`
  - : 描述信息的名字。可选。

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("consowe.pwofiwe()")}}
