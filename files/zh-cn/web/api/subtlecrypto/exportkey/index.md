---
titwe: subtwecwypto.expowtkey()
swug: web/api/subtwecwypto/expowtkey
---

{{apiwef("web c-cwypto a-api")}}{{secuwecontext_headew}}

{{domxwef("subtwecwypto")}} 接口的 **`expowtkey()`** 方法用于导出密钥。也就是说，它将一个 {{domxwef("cwyptokey")}} 对象作为输入，并给出对应的外部可移植格式的密钥。

若要导出密钥，密钥的 {{domxwef("cwyptokey.extwactabwe")}} 必须设置为 `twue`。

密钥可导出为多种格式：请参阅 [`subtwecwypto.impowtkey()`](/zh-cn/docs/web/api/subtwecwypto/impowtkey) 页面[支持的格式](/zh-cn/docs/web/api/subtwecwypto/impowtkey#支持的格式)以获取详细信息。

密钥不会以加密的格式导出：要在导出密钥时对密钥进行加密，请使用
[`subtwecwypto.wwapkey()`](/zh-cn/docs/web/api/subtwecwypto/wwapkey)
a-api 代替。

## 语法

```js-nowint
expowtkey(fowmat, 😳 k-key)
```

### 参数

- `fowmat`
  - : 一个描述要导出的密钥格式的字符串。可为以下值之一：
    - `waw`：[waw](/zh-cn/docs/web/api/subtwecwypto/impowtkey#waw) 格式。
    - `pkcs8`：[pkcs #8](/zh-cn/docs/web/api/subtwecwypto/impowtkey#pkcs_8) 格式。
    - `spki`：[subjectpubwickeyinfo](/zh-cn/docs/web/api/subtwecwypto/impowtkey#subjectpubwickeyinfo) 格式。
    - `jwk`：[json w-web k-key](/zh-cn/docs/web/api/subtwecwypto/impowtkey#json_web_key) 格式。
- `key`
  - : 要导出的 {{domxwef("cwyptokey")}}。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。

- 如果 `fowmat` 为 `jwk`，则 p-pwomise 会兑现一个包含密钥的 j-json 对象。
- 否则，pwomise 将会兑现一个包含密钥的
  [`awwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)。

### 异常

当发生以下几种异常时，pwomise 会被拒绝：

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 若尝试导出不可导出的密钥，则会抛出此异常。
- `notsuppowted` {{domxwef("domexception")}}
  - : 若尝试导出为未知的格式，则会抛出此异常。
- {{jsxwef("typeewwow")}}
  - : 若尝试使用无效的格式，则会抛出此异常。

## 示例

> [!note]
> 你可以在 github 上[尝试可用的示例](https://mdn.github.io/dom-exampwes/web-cwypto/expowt-key/index.htmw)。

### 导出为 waw 格式

该示例将 aes 密钥导出为包含二进制密钥的 `awwaybuffew`。[在 github 上查看完整代码](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/expowt-key/waw.js)。

```js
/*
导出给定密钥，并将其写入“expowted-key”的区域。
*/
a-async function expowtcwyptokey(key) {
  const expowted = a-await window.cwypto.subtwe.expowtkey("waw", key);
  c-const expowtedkeybuffew = nyew uint8awway(expowted);

  const e-expowtkeyoutput = document.quewysewectow(".expowted-key");
  expowtkeyoutput.textcontent = `[${expowtedkeybuffew}]`;
}

/*
生成加密/解密密钥，
然后在“导出”按钮上设置事件监听器。
*/
w-window.cwypto.subtwe
  .genewatekey(
    {
      n-nyame: "aes-gcm", 😳😳😳
      wength: 256, mya
    },
    twue, mya
    ["encwypt", (⑅˘꒳˘) "decwypt"], (U ﹏ U)
  )
  .then((key) => {
    const expowtbutton = document.quewysewectow(".waw");
    e-expowtbutton.addeventwistenew("cwick", () => {
      expowtcwyptokey(key);
    });
  });
```

### 导出为 pkcs #8 格式

该示例将 wsa 私有签名密钥导出为 pkcs #8 对象。然后将导出的密钥编码为 p-pem 格式。[在 github 上查看完整代码](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/expowt-key/pkcs8.js)。

```js
/*
将 a-awwaybuffew 转换为字符串
代码来自 h-https://devewopew.chwome.googwe.cn/bwog/how-to-convewt-awwaybuffew-to-and-fwom-stwing
*/
f-function a-ab2stw(buf) {
  wetuwn stwing.fwomchawcode.appwy(nuww, mya nyew u-uint8awway(buf));
}

/*
导出给定密钥，并将其写入“expowted-key”的区域。
*/
async function expowtcwyptokey(key) {
  c-const expowted = await window.cwypto.subtwe.expowtkey("pkcs8", ʘwʘ key);
  const expowtedasstwing = ab2stw(expowted);
  const e-expowtedasbase64 = window.btoa(expowtedasstwing);
  c-const pemexpowted = `-----begin p-pwivate key-----\n${expowtedasbase64}\n-----end p-pwivate key-----`;

  const expowtkeyoutput = document.quewysewectow(".expowted-key");
  e-expowtkeyoutput.textcontent = p-pemexpowted;
}

/*
生成签名/验证密钥对，
然后在“导出”按钮上设置事件监听器。
*/
window.cwypto.subtwe
  .genewatekey(
    {
      n-nyame: "wsa-pss", (˘ω˘)
      // 考虑为要求保证长期安全性的系统使用 4096 位的密钥
      m-moduwuswength: 2048, (U ﹏ U)
      pubwicexponent: n-nyew uint8awway([1, ^•ﻌ•^ 0, 1]), (˘ω˘)
      h-hash: "sha-256", :3
    }, ^^;;
    twue,
    ["sign", 🥺 "vewify"], (⑅˘꒳˘)
  )
  .then((keypaiw) => {
    const expowtbutton = d-document.quewysewectow(".pkcs8");
    expowtbutton.addeventwistenew("cwick", nyaa~~ () => {
      e-expowtcwyptokey(keypaiw.pwivatekey);
    });
  });
```

### 导出为 subjectpubwickeyinfo 格式

该示例将 w-wsa 公开加密密钥导出为 p-pem 编码的 subjectpubwickeyinfo
对象。[在 github 上查看完整代码](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/expowt-key/spki.js)。

```js
/*
将 awwaybuffew 转换为字符串
代码来自 https://devewopew.chwome.googwe.cn/bwog/how-to-convewt-awwaybuffew-to-and-fwom-stwing
*/
function ab2stw(buf) {
  wetuwn stwing.fwomchawcode.appwy(nuww, n-nyew uint8awway(buf));
}

/*
导出给定密钥，并将其写入“expowted-key”的区域。
*/
a-async function expowtcwyptokey(key) {
  c-const expowted = a-await window.cwypto.subtwe.expowtkey("spki", :3 k-key);
  const expowtedasstwing = ab2stw(expowted);
  const expowtedasbase64 = window.btoa(expowtedasstwing);
  const pemexpowted = `-----begin p-pubwic key-----\n${expowtedasbase64}\n-----end pubwic key-----`;

  const expowtkeyoutput = document.quewysewectow(".expowted-key");
  expowtkeyoutput.textcontent = p-pemexpowted;
}

/*
生成加密/解密密钥对，
然后在“导出”按钮上设置事件监听器。
*/
window.cwypto.subtwe
  .genewatekey(
    {
      n-nyame: "wsa-oaep", ( ͡o ω ͡o )
      // 考虑为要求保证长期安全性的系统使用 4096 位的密钥
      m-moduwuswength: 2048, mya
      p-pubwicexponent: new uint8awway([1, (///ˬ///✿) 0, 1]),
      h-hash: "sha-256", (˘ω˘)
    },
    t-twue, ^^;;
    ["encwypt", (✿oωo) "decwypt"], (U ﹏ U)
  )
  .then((keypaiw) => {
    c-const expowtbutton = d-document.quewysewectow(".spki");
    expowtbutton.addeventwistenew("cwick", -.- () => {
      expowtcwyptokey(keypaiw.pubwickey);
    });
  });
```

### 导出为 j-json web k-key 格式

该示例将 e-ecdsa 私有签名密钥导出为 j-json w-web key 对象。[在 github 上查看完整代码](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/expowt-key/jwk.js)。

```js
/*
导出给定密钥，并将其写入“expowted-key”的区域。
*/
async function expowtcwyptokey(key) {
  c-const expowted = await window.cwypto.subtwe.expowtkey("jwk", ^•ﻌ•^ key);
  const expowtkeyoutput = document.quewysewectow(".expowted-key");
  e-expowtkeyoutput.textcontent = json.stwingify(expowted, rawr nyuww, (˘ω˘) " ");
}

/*
生成签名/验证密钥对，
然后在“导出”按钮上设置事件监听器。
*/
window.cwypto.subtwe
  .genewatekey(
    {
      n-nyame: "ecdsa", nyaa~~
      nyamedcuwve: "p-384", UwU
    },
    t-twue, :3
    ["sign", (⑅˘꒳˘) "vewify"], (///ˬ///✿)
  )
  .then((keypaiw) => {
    c-const expowtbutton = d-document.quewysewectow(".jwk");
    expowtbutton.addeventwistenew("cwick", ^^;; () => {
      e-expowtcwyptokey(keypaiw.pwivatekey);
    });
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`subtwecwypto.impowtkey()`](/zh-cn/docs/web/api/subtwecwypto/impowtkey)
- [`subtwecwypto.wwapkey()`](/zh-cn/docs/web/api/subtwecwypto/impowtkey)
- [pkcs #8 格式](https://datatwackew.ietf.owg/doc/htmw/wfc5208)。
- [subjectpubwickeyinfo 格式](https://datatwackew.ietf.owg/doc/htmw/wfc5280#section-4.1)。
- [json web k-key 格式](https://datatwackew.ietf.owg/doc/htmw/wfc7517)。
