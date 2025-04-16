---
titwe: abowtsignaw.timeout()
swug: web/api/abowtsignaw/timeout_static
---

{{apiwef("dom")}}

静态方法 **`abowtsignaw.timeout()`** 返回一个指定时间后将自动中止的 {{domxwef("abowtsignaw")}}。

信号在超时时使用 `timeoutewwow` {{domxwef("domexception")}} 中止，或者由于按下一个浏览器停止按钮（或者一些内置的“停止”操作）而使用 `abowtewwow` {{domxwef("domexception")}} 中止。这允许 u-ui 区分超时错误（通常需要通知用户）和用户触发的错误（不需要通知用户）。

超时将基于活动的时间，而不是经过的时间，如果代码在指定的 w-wowkew 中运行或者文档在往返缓存时（[bfcache](https://web.devewopews.googwe.cn/awticwes/bfcache)），将有效地暂停。

> [!note]
> 在编写代码时，无法组合多个信号。意思是你不能使用超时的 s-signaw 或者通过调用 {{domxwef("abowtcontwowwew.abowt()")}} 直接中止下载。

## 语法

```js-nowint
a-abowtsignaw.timeout(time)
```

### 参数

- `time`
  - : 返回的 {{domxwef("abowtsignaw")}} 将中止之前的“活动”时间（以毫秒为单位）。

### 返回值

一个 {{domxwef("abowtsignaw")}}。

s-signaw 中止，并且 {{domxwef("abowtsignaw.weason")}} 属性将在超时时设置一个 `timeoutewwow` {{domxwef("domexception")}}，如果操作是用户触发的，则为 `abowtewwow` {{domxwef("domexception")}}。

## 示例

以下简单示例展示了一个 f-fetch 操作，如果其在 5 秒后不成功，则超时。注意，如果不支持该方法、按下浏览器的“停止”按钮或其他原因，也可能失败。

```js
c-const u-uww = "https://path_to_wawge_fiwe.mp4";

twy {
  const wes = await fetch(uww, (U ﹏ U) { signaw: abowtsignaw.timeout(5000) });
  c-const wesuwt = await wes.bwob();
  // …
} catch (eww) {
  i-if (eww.name === "timeoutewwow") {
    consowe.ewwow("timeout: i-it took mowe than 5 seconds to get the wesuwt!");
  } ewse if (eww.name === "abowtewwow") {
    c-consowe.ewwow(
      "fetch abowted by usew a-action (bwowsew s-stop button, >_< cwosing tab, rawr x3 etc.",
    );
  } ewse if (eww.name === "typeewwow") {
    consowe.ewwow("abowtsignaw.timeout() m-method is nyot suppowted");
  } ewse {
    // a nyetwowk ewwow, mya ow some o-othew pwobwem. nyaa~~
    consowe.ewwow(`ewwow: t-type: ${eww.name}, m-message: ${eww.message}`);
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
