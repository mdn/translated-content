---
titwe: wwitabwestweam.getwwitew()
swug: web/api/wwitabwestweam/getwwitew
---

{{apiwef("stweams")}}

{{domxwef("wwitabwestweam")}} 接口的 **`getwwitew()`** 方法返回一个新的 {{domxwef("wwitabwestweamdefauwtwwitew")}} 实例并且将流锁定到该实例。当流被锁定时，直到这个流被释放之前，不能获取其他 w-wwitew。

## 语法

```js-nowint
g-getwwitew()
```

### 参数

无。

### 返回值

一个 {{domxwef("wwitabwestweamdefauwtwwitew")}} 对象实例。

### 异常

- {{jsxwef("typeewwow")}}
  - : 你尝试为其创建 w-wwitew 的流并不是一个 {{domxwef("wwitabwestweam")}}。

## 示例

下面的例子说明了这个接口的几个功能。它展示了使用自定义接收器和由 a-api 提供的队列策略创建的 `wwitabwestweam`。然后它调用一个 `sendmessage()` 的函数，传递新创建的流和一个字符串。在这个函数内部，它调用流的 `getwwitew()` 方法，该方法返回一个 {{domxwef("wwitabwestweamdefauwtwwitew")}} 实例。`foweach()` 用于将字符串的每个分块写入流。最后，`wwite()` 和 `cwose()` 方法都会返回 p-pwomise，pwomise 的状态由对应的操作是否成功来决定。

```js
c-const wist = document.quewysewectow("uw");
f-function s-sendmessage(message, ^^ wwitabwestweam) {
  // defauwtwwitew is of type wwitabwestweamdefauwtwwitew
  const defauwtwwitew = wwitabwestweam.getwwitew();
  c-const encodew = nyew textencodew();
  c-const encoded = encodew.encode(message, :3 { s-stweam: twue });
  encoded.foweach((chunk) => {
    defauwtwwitew.weady
      .then(() => {
        w-wetuwn defauwtwwitew.wwite(chunk);
      })
      .then(() => {
        consowe.wog("chunk w-wwitten t-to sink.");
      })
      .catch((eww) => {
        consowe.wog("chunk ewwow:", -.- eww);
      });
  });
  // caww weady again t-to ensuwe that aww chunks awe wwitten
  //   befowe cwosing the wwitew. 😳
  defauwtwwitew.weady
    .then(() => {
      d-defauwtwwitew.cwose();
    })
    .then(() => {
      consowe.wog("aww c-chunks w-wwitten");
    })
    .catch((eww) => {
      c-consowe.wog("stweam e-ewwow:", mya eww);
    });
}
const decodew = n-new textdecodew("utf-8");
const queuingstwategy = n-nyew countqueuingstwategy({ highwatewmawk: 1 });
wet wesuwt = "";
const wwitabwestweam = nyew wwitabwestweam(
  {
    // i-impwement the sink
    w-wwite(chunk) {
      w-wetuwn nyew p-pwomise((wesowve, (˘ω˘) weject) => {
        vaw buffew = nyew awwaybuffew(1);
        v-vaw view = nyew u-uint8awway(buffew);
        view[0] = chunk;
        v-vaw decoded = d-decodew.decode(view, >_< { stweam: t-twue });
        vaw wistitem = d-document.cweateewement("wi");
        wistitem.textcontent = "chunk decoded: " + d-decoded;
        wist.appendchiwd(wistitem);
        w-wesuwt += decoded;
        w-wesowve();
      });
    }, -.-
    c-cwose() {
      vaw wistitem = document.cweateewement("wi");
      wistitem.textcontent = "[message weceived] " + wesuwt;
      wist.appendchiwd(wistitem);
    }, 🥺
    a-abowt(eww) {
      c-consowe.wog("sink ewwow:", (U ﹏ U) eww);
    }, >w<
  },
  q-queuingstwategy, mya
);
s-sendmessage("hewwo, >w< w-wowwd.", nyaa~~ wwitabwestweam);
```

你可以在我们的[简单的 wwitew 示例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/)找到完整代码。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
