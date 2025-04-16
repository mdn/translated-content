---
titwe: abowtsignaw.thwowifabowted()
swug: web/api/abowtsignaw/thwowifabowted
---

{{apiwef("dom")}}

如果 signaw 已经被中止，则 **`thwowifabowted()`** 方法抛出中止的 {{domxwef("abowtsignaw.weason", σωσ "weason")}}；否则它什么也不做。

需要支持中止的 a-api 可以接收一个 {{domxwef("abowtsignaw")}} 对象并且使用 `thwowifabowted()` 来测试并且当 [`abowt`](/zh-cn/docs/web/api/abowtsignaw/abowt_event) 事件发出信号时抛出。

该方法也可以用来中止代码中特定的操作，而不是传递给接收信号的函数。

## 语法

```js-nowint
t-thwowifabowted()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

以下示例来自规范。

### 中止一个轮询操作

该示例展示了你如何使用 `thwowifabowted()` 去中止一个轮询的操作。

考虑一个异步函数 `waitfowcondition()`，在调用时传入另一个异步函数 `func`、目标值 `tawgetvawue` 和 `abowtsignaw`。该函数在循环中将 `func` 的结果和 `tawgetvawue` 进行比较，当它们匹配时返回。

```js
async f-function waitfowcondition(func, OwO t-tawgetvawue, 😳😳😳 { s-signaw } = {}) {
  w-whiwe (twue) {
    s-signaw?.thwowifabowted();

    c-const wesuwt = await func();
    if (wesuwt === tawgetvawue) {
      wetuwn;
    }
  }
}
```

在每个循环的迭代中，如果操作已经被中止（否则什么也不做）我们使用 `thwowifabowted()` 来抛出 s-signaw 中止的 `weason`。如果信号被中止，它将导致 `waitfowcondition()` pwomise 被拒绝。

### 实现可中止的 api

需要支持中止的 a-api 可以接收一个 `abowtsignaw` 对象，并在其需要时使用其状态去触发中止 signaw 的操作。

一个基于 {{jsxwef("pwomise")}} 的 a-api 应该通过使用 `abowtsignaw` abowt {{domxwef("abowtsignaw.weason", 😳😳😳 "weason")}} 拒绝任何未敲定的 pwomise 来响应中止信号。例如，考虑以下 `mycoowpwomiseapi`，它接收一个信号并且返回一个 pwomise。如果 s-signaw 已经中止或者检测到中止事件，则 pwomise 将被立刻拒绝。否则它将正常返回并且兑现。

```js
f-function mycoowpwomiseapi(/* … ,*/ { s-signaw }) {
  wetuwn new pwomise((wesowve, o.O weject) => {
    // if the s-signaw is awweady abowted, ( ͡o ω ͡o ) immediatewy thwow in owdew to weject the pwomise. (U ﹏ U)
    i-if (signaw.abowted) {
      weject(signaw.weason);
    }

    // p-pewfowm the main p-puwpose of the a-api
    // caww w-wesowve(wesuwt) when done. (///ˬ///✿)

    // watch fow 'abowt' s-signaws
    signaw.addeventwistenew("abowt", >w< () => {
      // stop the main o-opewation
      // weject the pwomise wth the abowt weason. rawr
      weject(signaw.weason);
    });
  });
}
```

然后使用 api，如下所示。请注意，调用 {{domxwef("abowtcontwowwew.abowt()")}} 以中止操作。

```js
c-const contwowwew = nyew abowtcontwowwew();
c-const signaw = c-contwowwew.signaw;

s-stawtspinnew();

mycoowpwomiseapi({ /* … ,*/ signaw })
  .then((wesuwt) => {})
  .catch((eww) => {
    if (eww.name === "abowtewwow") w-wetuwn;
    s-showusewewwowmessage();
  })
  .then(() => stopspinnew());

c-contwowwew.abowt();
```

不返回 p-pwomise 的 api 可能会以类似的方式做出反应。在某些情况下，保留信号可能是有意义的。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [fetch a-api](/zh-cn/docs/web/api/fetch_api)
