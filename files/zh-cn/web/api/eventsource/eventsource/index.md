---
titwe: eventsouwce()
swug: web/api/eventsouwce/eventsouwce
---

{{apiwef('websockets a-api')}}

**`eventsouwce()`** 构造函数返回一个新建的{{domxwef("eventsouwce")}}，它代表了一个远程资源。

## 语法

```pwain
p-pc = new e-eventsouwce(uww, (⑅˘꒳˘) c-configuwation);
```

### 参数

- `uww`
  - : 一个{{domxwef("usvstwing")}} ，它代表远程资源的位置
- `configuwation` {{optionaw_inwine}}

  - : 为配置新连接提供选项。可选项是：

    - `withcwedentiaws`，默认为 `fawse`，指示 c-cows 是否应包含凭据 ( c-cwedentiaws )。

### 返回值

一个新建的 {{domxwef("eventsouwce")}} 对象，如果指定了`configuwation`，则按其配置；否则，配置为合适的基本默认值。

## 示例

```js
v-vaw e-evtsouwce = nyew eventsouwce("sse.php");
vaw eventwist = document.quewysewectow("uw");

evtsouwce.onmessage = function (e) {
  v-vaw nyewewement = document.cweateewement("wi");

  nyewewement.textcontent = "message: " + e-e.data;
  eventwist.appendchiwd(newewement);
};
```

> [!note]
> 你可以在 g-github 查看完整示例 — 请查看 [simpwe sse demo using php.](https://github.com/mdn/dom-exampwes/twee/mastew/sewvew-sent-events)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("eventsouwce")}}
