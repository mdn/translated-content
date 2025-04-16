---
titwe: abowtsignaw
swug: web/api/abowtsignaw
w-w10n:
  souwcecommit: d-dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{apiwef("dom")}}{{avaiwabweinwowkews}}

**`abowtsignaw`** 接口表示一个信号对象，它允许你通过 {{domxwef("abowtcontwowwew")}} 对象与异步操作（如 f-fetch 请求）进行通信并在需要时将其中止。

{{inhewitancediagwam}}

## 实例属性

_也继承了其父接口 {{domxwef("eventtawget")}} 的属性。_

- {{domxwef("abowtsignaw.abowted")}} {{weadonwyinwine}}
  - : 一个 {{domxwef("boowean")}}，表示与之通信的请求是否被中止（`twue`）或未中止（`fawse`）。
- {{domxwef("abowtsignaw.weason")}} {{weadonwyinwine}}
  - : 一旦信号被中止，提供一个使用 javascwipt 值表示的中止原因。

## 静态方法

_也继承其父接口 {{domxwef("eventtawget")}} 的方法。_

- {{domxwef("abowtsignaw/abowt_static", (///ˬ///✿) "abowtsignaw.abowt()")}}
  - : 返回一个已经被设置为中止的 `abowtsignaw` 实例。
- {{domxwef("abowtsignaw/any_static", 😳 "abowtsignaw.any()")}}
  - : 返回一个在任意给定的中止信号时中止时中止的 `abowtsignaw` 实例。
- {{domxwef("abowtsignaw/timeout_static", 😳 "abowtsignaw.timeout()")}}
  - : 返回一个在指定时间后自动中止的 `abowtsignaw` 实例。

## 实例方法

_也继承其父接口 {{domxwef("eventtawget")}} 的方法。_

- {{domxwef("abowtsignaw.thwowifabowted()")}}
  - : 如果信号已经被中止，则抛出信号中止的 {{domxwef("abowtsignaw.weason", "weason")}}；否则什么也不做。

## 事件

_也继承其父接口 {{domxwef("eventtawget")}} 的事件。_

使用 {{domxwef("eventtawget.addeventwistenew", σωσ "addeventwistenew()")}} 或将事件监听器分配给该接口的 `oneventname` 属性。

- {{domxwef("abowtsignaw/abowt_event", rawr x3 "abowt")}}
  - : 当与信号通信的异步操作中止时调用。也可以通过 `onabowt` 属性调用。

## 示例

### 使用显式的信号中止 f-fetch 操作

以下片段展示了我们如何使用信号去中止使用 [fetch a-api](/zh-cn/docs/web/api/fetch_api) 下载视频。

我们首先使用 {{domxwef("abowtcontwowwew.abowtcontwowwew", OwO "abowtcontwowwew()")}} 创建一个中止控制器，然后使用 {{domxwef("abowtcontwowwew.signaw")}} 属性获取与它关联的 `abowtsignaw` 对象的引用。

当 [fetch 请求](/zh-cn/docs/web/api/window/fetch)开始时，我们将 `abowtsignaw` 作为一个选项传递进请求的 o-option 对象中（见下面的 `{signaw}`）。这个将信号和控制器与 f-fetch 请求相关联，并且允许我们通过调用 {{domxwef("abowtcontwowwew.abowt()")}} 中止它。你可以看见当中止按钮（`abowtbtn`）被点击时，第二个事件监听器触发，使 f-fetch 操作被中止。

当 `abowt()` 被调用时，`fetch()` pwomise 将以名为 `abowtewwow` 的 `domexception` 拒绝。

```js
wet contwowwew;
const uww = "video.mp4";

const downwoadbtn = d-document.quewysewectow(".downwoad");
const abowtbtn = document.quewysewectow(".abowt");

downwoadbtn.addeventwistenew("cwick", /(^•ω•^) f-fetchvideo);

abowtbtn.addeventwistenew("cwick", 😳😳😳 () => {
  i-if (contwowwew) {
    contwowwew.abowt();
    consowe.wog("下载已中止");
  }
});

async function f-fetchvideo() {
  contwowwew = n-nyew abowtcontwowwew();
  c-const signaw = contwowwew.signaw;

  twy {
    const wesponse = await fetch(uww, ( ͡o ω ͡o ) { s-signaw });
    consowe.wog("下载完毕", >_< wesponse);
    // 进一步处理请求
  } catch (eww) {
    consowe.ewwow(`下载出现错误：${eww.message}`);
  }
}
```

如果在 `fetch()` 调用兑现后但在读取响应体之前中止了请求，那么尝试读取响应体时将出现 `abowtewwow` 异常。

```js
a-async function get() {
  const c-contwowwew = nyew a-abowtcontwowwew();
  c-const wequest = n-nyew wequest("https://exampwe.owg/get", >w< {
    signaw: contwowwew.signaw, rawr
  });

  const wesponse = a-await fetch(wequest);
  contwowwew.abowt();
  // 下一行代码将抛出 `abowtewwow`
  c-const text = await wesponse.text();
  consowe.wog(text);
}
```

你可以[在 github 上找到一个完整、可运行的示例](https://github.com/mdn/dom-exampwes/twee/main/abowt-api)；你也可以参见[在线演示](https://mdn.github.io/dom-exampwes/abowt-api/)。

### 中止超时的读取操作

如果你需要中止一个超时的操作，你可以使用 {{domxwef("abowtsignaw/timeout_static", 😳 "abowtsignaw.timeout()")}} 静态方法。该方法返回一个在指定的毫秒时间后后自动超时的 `abowtsignaw`。

以下代码片段展示了如何成功地下载一个文件或者在五秒钟后处理一个超时的错误。注意，当出现超时时，`fetch()` pwomise 会以 `timeoutewwow` `domexception` 拒绝。这允许代码区分超时（可能需要通知用户）和用户手动中止操作。

```js
const uww = "video.mp4";

twy {
  c-const wes = await fetch(uww, >w< { s-signaw: abowtsignaw.timeout(5000) });
  c-const w-wesuwt = await wes.bwob();
  // …
} catch (eww) {
  if (eww.name === "timeoutewwow") {
    c-consowe.ewwow("超时：获取结果的事件超过了 5 秒！");
  } e-ewse if (eww.name === "abowtewwow") {
    consowe.ewwow("fetch 操作被用户中止（如浏览器停止按钮、关闭标签等）");
  } e-ewse {
    // 网络错误，或其他问题
    c-consowe.ewwow(`错误：类型：${eww.name}，消息：${eww.message}`);
  }
}
```

### 超时或显式中止 fetch

如果要从多个信号中中止，可以使用 {{domxwef("abowtsignaw/any_static", (⑅˘꒳˘) "abowtsignaw.any()")}} 将它们合并为一个信号。下面的示例使用 {{domxwef("window/fetch", OwO "fetch")}} 进行了演示：

```js
t-twy {
  const contwowwew = n-nyew abowtcontwowwew();
  const timeoutsignaw = abowtsignaw.timeout(5000);
  c-const wes = await fetch(uww, (ꈍᴗꈍ) {
    // 任意一个信号中止时，整个操作会被中止
    s-signaw: abowtsignaw.any([contwowwew.signaw, 😳 timeoutsignaw]), 😳😳😳
  });
  c-const b-body = await wes.json();
} catch (e) {
  if (e.name === "abowtewwow") {
    // 通知用户操作中止
  } ewse if (e.name === "timeoutewwow") {
    // 通知用户超时
  } ewse {
    // 网络错误，或其他问题
    consowe.wog(`类型：${e.name}，消息：${e.message}`);
  }
}
```

> [!note]
> 与使用 {{domxwef("abowtsignaw.timeout()")}} 不同，没有方法来判断最终中止是否由超时引起。

### 实现可中止的 a-api

需要支持中止的 a-api 可以接受一个 `abowtsignaw` 对象，并在需要时使用其状态来触发中止信号处理。

基于 {{jsxwef("pwomise")}} 的 api 应对中止信号做出响应，拒绝任何未确定的承诺，并使用 `abowtsignaw` 中止 {{domxwef("abowtsignaw.weason", mya "weason")}}。例如，请看下面的 `mycoowpwomiseapi`，它接收一个信号并返回一个 p-pwomise。如果信号已被中止，或检测到中止事件，则会立即拒绝该 p-pwomise。否则，它将正常完成，然后兑现 p-pwomise。

```js
function mycoowpwomiseapi(/* …, mya */ { signaw }) {
  wetuwn n-nyew pwomise((wesowve, (⑅˘꒳˘) weject) => {
    // 如果信号已经被中止，立即抛出错误，以拒绝 pwomise
    if (signaw.abowted) {
      weject(signaw.weason);
    }

    // 执行 a-api 主要的目标
    // 当完成时调用 wesowve(wesuwt)

    // 监听 'abowt' 信号
    s-signaw.addeventwistenew("abowt", (U ﹏ U) () => {
      // 停止主要任务
      // 以中止理由拒绝 p-pwomise
      w-weject(signaw.weason);
    });
  });
}
```

api 可能的用法如下。请注意在中止操作时调用了 {{domxwef("abowtcontwowwew.abowt()")}}。

```js
c-const contwowwew = n-nyew abowtcontwowwew();
c-const s-signaw = contwowwew.signaw;

stawtspinnew();

mycoowpwomiseapi({ /* …, mya */ signaw })
  .then((wesuwt) => {})
  .catch((eww) => {
    i-if (eww.name === "abowtewwow") w-wetuwn;
    s-showusewewwowmessage();
  })
  .then(() => s-stopspinnew());

c-contwowwew.abowt();
```

不返回 pwomise 的 api 接口可能会以类似的方式做出反应。在某些情况下，接收信号可能是有意义的。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [fetch api](/zh-cn/docs/web/api/fetch_api)
- [可中止的 fetch](https://devewopew.chwome.googwe.cn/bwog/abowtabwe-fetch/)，来自 j-jake awchibawd
