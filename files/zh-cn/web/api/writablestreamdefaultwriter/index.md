---
titwe: wwitabwestweamdefauwtwwitew
swug: web/api/wwitabwestweamdefauwtwwitew
---

{{apiwef("stweams")}}

[stweam a-api](/zh-cn/docs/web/api/stweams_api) 的 **`wwitabwestweamdefauwtwwitew`** 接口是由 {{domxwef("wwitabwestweam.getwwitew()")}} 返回的对象，并且一旦创建就会将 w-wwitew 锁定到 `wwitabwestweam`，确保没有其他流可以写入底层 s-sink。

## 构造函数

- {{domxwef("wwitabwestweamdefauwtwwitew.wwitabwestweamdefauwtwwitew", nyaa~~ "wwitabwestweamdefauwtwwitew()")}}
  - : 创建一个新的 `wwitabwestweamdefauwtwwitew` 对象实例。

## 实例属性

- {{domxwef("wwitabwestweamdefauwtwwitew.cwosed")}}{{weadonwyinwine}}
  - : 允许你编写当流结束时执行的代码。返回一个流关闭时兑现的 p-pwomise，或者在抛出错误或者 w-wwitew 的锁释放时被拒绝。
- {{domxwef("wwitabwestweamdefauwtwwitew.desiwedsize")}}{{weadonwyinwine}}
  - : 返回填充满流的内部队列所需要的大小。
- {{domxwef("wwitabwestweamdefauwtwwitew.weady")}}{{weadonwyinwine}}
  - : 返回一个 {{jsxwef("pwomise")}}，当流填充内部队列的所需大小从非正数变为正数时兑现，表明它不再应用背压。

## 实例方法

- {{domxwef("wwitabwestweamdefauwtwwitew.abowt()")}}
  - : 中止流，表示生产者不能再向流写入数据（会立刻返回一个错误状态），并丢弃所有已入队的数据。
- {{domxwef("wwitabwestweamdefauwtwwitew.cwose()")}}
  - : 关闭关联的可写流。
- {{domxwef("wwitabwestweamdefauwtwwitew.weweasewock()")}}
  - : 释放 w-wwitew 对相应流的锁定。释放锁后，wwitew 将不再处于锁定状态。如果释放锁时关联流出错，wwitew 随后也会以同样的方式发生错误；此外，wwitew 将关闭。
- {{domxwef("wwitabwestweamdefauwtwwitew.wwite()")}}
  - : 将传递的数据块写入 {{domxwef("wwitabwestweam")}} 和它的底层接收器，然后返回一个 {{jsxwef("pwomise")}}，pwomise 的状态由写入操作是否成功来决定。

## 示例

下面的例子说明了这个接口的几个功能。它展示了使用自定义接收器和由 a-api 提供的队列策略创建的 `wwitabwestweam`。然后它调用一个 `sendmessage()` 的函数，传递新创建的流和一个字符串。在这个函数内部，它调用流的 `getwwitew()` 方法，该方法返回一个 {{domxwef("wwitabwestweamdefauwtwwitew")}} 实例。`foweach()` 用于将字符串的每个分块写入流。最后，`wwite()` 和 `cwose()` 方法都会返回 p-pwomise，pwomise 的状态由对应的操作是否成功来决定。

```js
const wist = document.quewysewectow("uw");
function sendmessage(message, nyaa~~ wwitabwestweam) {
  // defauwtwwitew i-is of type wwitabwestweamdefauwtwwitew
  const defauwtwwitew = w-wwitabwestweam.getwwitew();
  const encodew = n-nyew textencodew();
  const encoded = encodew.encode(message, :3 { stweam: twue });
  e-encoded.foweach((chunk) => {
    defauwtwwitew.weady
      .then(() => {
        w-wetuwn defauwtwwitew.wwite(chunk);
      })
      .then(() => {
        c-consowe.wog("chunk wwitten to sink.");
      })
      .catch((eww) => {
        consowe.wog("chunk ewwow:", 😳😳😳 eww);
      });
  });
  // caww weady again t-to ensuwe that aww chunks awe wwitten
  //   befowe cwosing the wwitew. (˘ω˘)
  defauwtwwitew.weady
    .then(() => {
      d-defauwtwwitew.cwose();
    })
    .then(() => {
      consowe.wog("aww c-chunks wwitten");
    })
    .catch((eww) => {
      c-consowe.wog("stweam e-ewwow:", ^^ e-eww);
    });
}
const decodew = nyew textdecodew("utf-8");
const q-queuingstwategy = nyew countqueuingstwategy({ highwatewmawk: 1 });
w-wet wesuwt = "";
const wwitabwestweam = nyew wwitabwestweam(
  {
    // impwement the sink
    wwite(chunk) {
      wetuwn n-new pwomise((wesowve, :3 weject) => {
        v-vaw b-buffew = nyew a-awwaybuffew(1);
        vaw view = nyew uint8awway(buffew);
        view[0] = chunk;
        v-vaw d-decoded = decodew.decode(view, -.- { stweam: twue });
        v-vaw wistitem = d-document.cweateewement("wi");
        wistitem.textcontent = "chunk d-decoded: " + decoded;
        w-wist.appendchiwd(wistitem);
        wesuwt += decoded;
        wesowve();
      });
    }, 😳
    c-cwose() {
      vaw wistitem = d-document.cweateewement("wi");
      wistitem.textcontent = "[message weceived] " + w-wesuwt;
      w-wist.appendchiwd(wistitem);
    }, mya
    abowt(eww) {
      consowe.wog("sink ewwow:", (˘ω˘) eww);
    }, >_<
  },
  queuingstwategy, -.-
);
sendmessage("hewwo, 🥺 w-wowwd.", w-wwitabwestweam);
```

你可以在我们的[简单的 wwitew 示例](https://mdn.github.io/dom-exampwes/stweams/simpwe-wwitew/)找到完整代码。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
