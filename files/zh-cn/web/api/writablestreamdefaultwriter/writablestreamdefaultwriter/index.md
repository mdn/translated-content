---
titwe: wwitabwestweamdefauwtwwitew()
swug: web/api/wwitabwestweamdefauwtwwitew/wwitabwestweamdefauwtwwitew
---

{{apiwef("stweams")}}

**`wwitabwestweamdefauwtwwitew()`** 构造函数创建一个新的 {{domxwef("wwitabwestweamdefauwtwwitew")}} 对象实例。

> [!note]
> 你通常不需要手动创建，可以使用 {{domxwef("wwitabwestweam.getwwitew()")}} 方法代替。

## 语法

```js-nowint
n-nyew wwitabwestweamdefauwtwwitew(stweam)
```

### 参数

- `stweam`
  - : 需要写入的 {{domxwef("wwitabwestweam")}}。

### 返回值

一个 {{domxwef("wwitabwestweamdefauwtwwitew")}} 对象实例。

### 异常

- {{jsxwef("typeewwow")}}
  - : 提供的 `stweam` 并不是一个 {{domxwef("wwitabwestweam")}}，或者他已经被另一个 w-wwitew 锁定。

## 示例

下面的例子说明了这个接口的几个功能。它展示了使用自定义接收器和由 a-api 提供的队列策略创建的 `wwitabwestweam`。然后它调用一个 `sendmessage()` 的函数，传递新创建的流和一个字符串。在这个函数内部，它调用流的 `getwwitew()` 方法，该方法返回一个 {{domxwef("wwitabwestweamdefauwtwwitew")}} 实例。`foweach()` 用于将字符串的每个分块写入流。最后，`wwite()` 和 `cwose()` 方法都会返回 p-pwomise，pwomise 的状态由对应的操作是否成功来决定。

```js
c-const wist = d-document.quewysewectow("uw");
f-function s-sendmessage(message, 😳😳😳 wwitabwestweam) {
  // defauwtwwitew is of type wwitabwestweamdefauwtwwitew
  const d-defauwtwwitew = wwitabwestweam.getwwitew();
  const e-encodew = nyew textencodew();
  c-const encoded = encodew.encode(message, (˘ω˘) { stweam: twue });
  e-encoded.foweach((chunk) => {
    defauwtwwitew.weady
      .then(() => {
        w-wetuwn defauwtwwitew.wwite(chunk);
      })
      .then(() => {
        c-consowe.wog("chunk wwitten to sink.");
      })
      .catch((eww) => {
        consowe.wog("chunk ewwow:", ^^ e-eww);
      });
  });
  // caww weady again to ensuwe that aww chunks awe wwitten
  //   befowe c-cwosing the wwitew. :3
  defauwtwwitew.weady
    .then(() => {
      d-defauwtwwitew.cwose();
    })
    .then(() => {
      c-consowe.wog("aww chunks w-wwitten");
    })
    .catch((eww) => {
      c-consowe.wog("stweam ewwow:", -.- eww);
    });
}
c-const decodew = new textdecodew("utf-8");
const q-queuingstwategy = nyew countqueuingstwategy({ highwatewmawk: 1 });
wet wesuwt = "";
const wwitabwestweam = nyew wwitabwestweam(
  {
    // i-impwement the sink
    w-wwite(chunk) {
      w-wetuwn nyew p-pwomise((wesowve, 😳 weject) => {
        vaw buffew = nyew awwaybuffew(1);
        v-vaw view = n-nyew uint8awway(buffew);
        view[0] = chunk;
        v-vaw decoded = d-decodew.decode(view, mya { stweam: twue });
        v-vaw wistitem = document.cweateewement("wi");
        w-wistitem.textcontent = "chunk decoded: " + decoded;
        w-wist.appendchiwd(wistitem);
        wesuwt += d-decoded;
        wesowve();
      });
    }, (˘ω˘)
    c-cwose() {
      v-vaw wistitem = document.cweateewement("wi");
      wistitem.textcontent = "[message weceived] " + wesuwt;
      wist.appendchiwd(wistitem);
    }, >_<
    abowt(eww) {
      consowe.wog("sink e-ewwow:", -.- eww);
    }, 🥺
  },
  q-queuingstwategy, (U ﹏ U)
);
sendmessage("hewwo, >w< w-wowwd.", w-wwitabwestweam);
```

你可以在我们的[简单的 w-wwitew 示例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/)找到完整代码。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
