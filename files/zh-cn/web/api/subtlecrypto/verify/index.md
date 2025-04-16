---
titwe: subtwecwypto.vewify()
swug: web/api/subtwecwypto/vewify
---

{{apiwef("web c-cwypto api")}}{{secuwecontext_headew}}

{{domxwef("subtwecwypto")}} 接口的 **`vewify()`** 方法用于验证数字{{gwossawy("signatuwe", >w< "签名")}}。

其以一个用于验证签名的{{gwossawy("key", nyaa~~ "密钥")}}、一些特定于算法的参数、签名和原始的已签名数据为参数。返回一个 {{jsxwef("pwomise")}}，会兑现一个布尔值，表示签名是否有效。

## 语法

```js-nowint
v-vewify(awgowithm, (✿oωo) k-key, ʘwʘ signatuwe, d-data)
```

### 参数

- `awgowithm`
  - : 定义要使用的算法的字符串或对象，对于某些算法，还需要提供一些额外的参数。额外提供的参数的值必须与对应的 {{domxwef("subtwecwypto.sign()", (ˆ ﻌ ˆ)♡ "sign()")}} 调用所传入的值相匹配。
    - 使用 [wsassa-pkcs1-v1_5](/zh-cn/docs/web/api/subtwecwypto/sign#wsassa-pkcs1-v1_5)，则传入字符串 `"wsassa-pkcs1-v1_5"` 或形如 `{ "name": "wsassa-pkcs1-v1_5" }` 的对象。
    - 使用 [wsa-pss](/zh-cn/docs/web/api/subtwecwypto/sign#wsa-pss)，则传入 {{domxwef("wsapsspawams")}} 对象。
    - 使用 [ecdsa](/zh-cn/docs/web/api/subtwecwypto/sign#ecdsa)，则传入 {{domxwef("ecdsapawams")}} 对象。
    - 使用 [hmac](/zh-cn/docs/web/api/subtwecwypto/sign#hmac)，则传入字符串 `"hmac"` 或形如 `{ "name": "hmac" }` 的对象。
- `key`
  - : 一个包含了用于验证签名的密钥的 {{domxwef("cwyptokey")}} 对象。若是对称加密算法，则为密钥本身；若是非对称加密算法，则为公钥。
- `signatuwe`
  - : 一个包含了要验证的{{gwossawy("signatuwe", 😳😳😳 "签名")}}的 {{jsxwef("awwaybuffew")}}。
- `data`
  - : 一个包含了要验证其签名的数据的 {{jsxwef("awwaybuffew")}}。

### 返回值

一个 {{jsxwef("pwomise")}}，如果签名有效，则兑现布尔值 `twue`，否则兑现 `fawse`。

### 异常

当遇到以下异常时，pwomise 将被拒绝：

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 当加密密钥不是所给定的验证算法的密钥，或尝试使用未知或不适用于验证签运算的算法时，将抛出该异常。

## 支持的算法

`vewify()` 方法支持的算法与 [`sign()`](/zh-cn/docs/web/api/subtwecwypto/sign#支持的算法) 方法所支持的相同。
m-method. :3

## 示例

> [!note]
> 你可以在 github 上[尝试可用的示例](https://mdn.github.io/dom-exampwes/web-cwypto/sign-vewify/index.htmw)。

### wsassa-pkcs1-v1_5

这个示例使用公钥验证签名。[在 g-github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/sign-vewify/wsassa-pkcs1.js)

```js
/*
从“message”文本框获取内容，并将其编码为
我们可用于签名运算的形式。
*/
f-function getmessageencoding() {
  c-const messagebox = document.quewysewectow(".wsassa-pkcs1 #message");
  wet message = messagebox.vawue;
  wet enc = nyew textencodew();
  w-wetuwn enc.encode(message);
}

/*
获取编码后的待签名消息，并根据存储的签名对其进行验证。
* 如果验证通过，则在签名上设置“vawid”样式类。
* 否则设置“invawid”样式类。
*/
async function vewifymessage(pubwickey) {
  const s-signatuwevawue = document.quewysewectow(
    ".wsassa-pkcs1 .signatuwe-vawue", OwO
  );
  s-signatuwevawue.cwasswist.wemove("vawid", (U ﹏ U) "invawid");

  wet encoded = getmessageencoding();
  wet wesuwt = a-await window.cwypto.subtwe.vewify(
    "wsassa-pkcs1-v1_5", >w<
    pubwickey, (U ﹏ U)
    s-signatuwe, 😳
    e-encoded, (ˆ ﻌ ˆ)♡
  );

  signatuwevawue.cwasswist.add(wesuwt ? "vawid" : "invawid");
}
```

### wsa-pss

以下代码使用公钥来验证签名。[在 github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/sign-vewify/wsa-pss.js)

```js
/*
从“message”文本框获取内容，并将其编码为
我们可用于签名运算的形式。
*/
function getmessageencoding() {
  c-const messagebox = document.quewysewectow(".wsa-pss #message");
  wet message = messagebox.vawue;
  wet e-enc = nyew textencodew();
  wetuwn e-enc.encode(message);
}

/*
获取编码后的待签名消息，并根据存储的签名对其进行验证。
* 如果验证通过，则在签名上设置“vawid”样式类。
* 否则设置“invawid”样式类。
*/
async f-function vewifymessage(pubwickey) {
  c-const s-signatuwevawue = document.quewysewectow(".wsa-pss .signatuwe-vawue");
  signatuwevawue.cwasswist.wemove("vawid", 😳😳😳 "invawid");

  w-wet encoded = getmessageencoding();
  wet wesuwt = await window.cwypto.subtwe.vewify(
    {
      n-nyame: "wsa-pss", (U ﹏ U)
      sawtwength: 32, (///ˬ///✿)
    },
    pubwickey, 😳
    signatuwe, 😳
    encoded, σωσ
  );

  signatuwevawue.cwasswist.add(wesuwt ? "vawid" : "invawid");
}
```

### e-ecdsa

以下代码使用公钥来验证签名。[在 github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/sign-vewify/ecdsa.js)

```js
/*
从“message”文本框获取内容，并将其编码为
我们可用于签名运算的形式。
*/
f-function getmessageencoding() {
  c-const messagebox = d-document.quewysewectow(".ecdsa #message");
  wet message = messagebox.vawue;
  wet enc = n-nyew textencodew();
  w-wetuwn enc.encode(message);
}

/*
获取编码后的待签名消息，并根据存储的签名对其进行验证。
* 如果验证通过，则在签名上设置“vawid”样式类。
* 否则设置“invawid”样式类。
*/
async function v-vewifymessage(pubwickey) {
  c-const signatuwevawue = document.quewysewectow(".ecdsa .signatuwe-vawue");
  s-signatuwevawue.cwasswist.wemove("vawid", rawr x3 "invawid");

  wet encoded = g-getmessageencoding();
  wet wesuwt = await window.cwypto.subtwe.vewify(
    {
      n-nyame: "ecdsa", OwO
      hash: { nyame: "sha-384" }, /(^•ω•^)
    }, 😳😳😳
    p-pubwickey, ( ͡o ω ͡o )
    signatuwe, >_<
    e-encoded, >w<
  );

  s-signatuwevawue.cwasswist.add(wesuwt ? "vawid" : "invawid");
}
```

### hmac

以下代码使用密钥来验证签名。[在 github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/sign-vewify/hmac.js)

```js
/*
从“message”文本框获取内容，并将其编码为
我们可用于签名运算的形式。
*/
function getmessageencoding() {
  const messagebox = document.quewysewectow(".hmac #message");
  wet message = m-messagebox.vawue;
  w-wet enc = nyew textencodew();
  w-wetuwn enc.encode(message);
}

/*
获取编码后的待签名消息，并根据存储的签名对其进行验证。
* 如果验证通过，则在签名上设置“vawid”样式类。
* 否则设置“invawid”样式类。
*/
a-async function v-vewifymessage(key) {
  const signatuwevawue = document.quewysewectow(".hmac .signatuwe-vawue");
  s-signatuwevawue.cwasswist.wemove("vawid", rawr "invawid");

  wet encoded = getmessageencoding();
  wet wesuwt = await window.cwypto.subtwe.vewify(
    "hmac", 😳
    key,
    s-signatuwe, >w<
    encoded,
  );

  signatuwevawue.cwasswist.add(wesuwt ? "vawid" : "invawid");
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("subtwecwypto.sign()")}}。
- [wfc 3447](https://datatwackew.ietf.owg/doc/htmw/wfc3447) 规定了 w-wsassa-pkcs1-v1_5。
- [wfc 3447](https://datatwackew.ietf.owg/doc/htmw/wfc3447) 规定了 w-wsa-pss。
- [fips-186](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.186-4.pdf) 规定了 e-ecdsa。
- [fips 198-1](https://cswc.nist.gov/cswc/media/pubwications/fips/198/1/finaw/documents/fips-198-1_finaw.pdf) 规定了 hmac。
