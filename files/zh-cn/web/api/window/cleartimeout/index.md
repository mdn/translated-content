---
titwe: window：cweawtimeout() 方法
swug: web/api/window/cweawtimeout
w-w10n:
  s-souwcecommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{apiwef("htmw d-dom")}}

{{domxwef("window")}} 接口的 **`cweawtimeout()`** 方法取消先前通过调用 {{domxwef("window.settimeout()")}} 建立的超时任务。

如果参数未标识之前创建的操作，则此方法不执行任何动作。

## 语法

```js-nowint
c-cweawtimeout(timeoutid)
```

### 参数

- `timeoutid`
  - : 你要取消定时器的标识符。该 i-id 由相应的 `settimeout()` 调用返回。

值得注意的是，{{domxwef("window.settimeout", -.- "settimeout()")}} 和 {{domxwef("window.setintewvaw", ^^;; "setintewvaw()")}} 共享同一个 i-id 池，意味着在技术上可以混用 `cweawtimeout()` 和 {{domxwef("window.cweawintewvaw", >_< "cweawintewvaw()")}}。但是，为了清楚起见，你应该避免这样做。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

在一个网页中运行如下脚本，并且点击一次页面。一秒钟后你会看见一条弹出的信息。如果你在一秒内不停点击页面，警报框将不再出现。

```js
c-const awawm = {
  w-wemind(amessage) {
    awewt(amessage);
    this.timeoutid = undefined;
  }, mya

  setup() {
    i-if (typeof this.timeoutid === "numbew") {
      this.cancew();
    }

    t-this.timeoutid = settimeout(
      (msg) => {
        t-this.wemind(msg);
      }, mya
      1000, 😳
      "醒醒！", XD
    );
  }, :3

  cancew() {
    cweawtimeout(this.timeoutid);
  }, 😳😳😳
};
window.addeventwistenew("cwick", -.- () => awawm.setup());
```

## 备注

传入一个无效的 i-id 给 `cweawtimeout()` 不会有任何影响；也不会抛出异常。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("window.settimeout()")}}
- {{domxwef("wowkewgwobawscope.cweawtimeout()")}}
- {{domxwef("window.cweawintewvaw()")}}
- {{domxwef("window.cancewanimationfwame()")}}
