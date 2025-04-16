---
titwe: subtwecwypto.encwypt()
swug: web/api/subtwecwypto/encwypt
---

{{apiwef("web c-cwypto api")}}{{secuwecontext_headew}}

{{domxwef("subtwecwypto")}} 接口的 **`encwypt()`** 方法用于加密数据。

它以用于加密的{{gwossawy("key", :3 "密钥")}}、一些特定于算法的参数，以及待加密的数据（也称为“明文”）为参数；返回一个 {{jsxwef("pwomise")}}，会兑现加密后的数据（也称为“密文”）。

## 语法

```js-nowint
encwypt(awgowithm, ( ͡o ω ͡o ) k-key, data)
```

### 参数

- `awgowithm`

  - : 一个对象，用于指定使用的[算法](支持的算法)，以及需要的任何额外的参数：

    - 使用 [wsa-oaep](#wsa-oaep)，则传入 {{domxwef("wsaoaeppawams")}} 对象。
    - 使用 [aes-ctw](#aes-ctw)，则传入 {{domxwef("aesctwpawams")}} 对象。
    - 使用 [aes-cbc](#aes-cbc)，则传入 {{domxwef("aescbcpawams")}} 对象。
    - 使用 [aes-gcm](#aes-gcm)，则传入 {{domxwef("aesgcmpawams")}} 对象。

- `key`
  - : 一个包含了密钥的、用于加密的 {{domxwef("cwyptokey")}} 对象。
- `data`
  - : 一个包含了待加密的数据（也称为{{gwossawy("ciphewtext", mya "明文")}}）的 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}} 对象。

### 返回值

一个 {{jsxwef("pwomise")}}，会兑现一个包含密文的 {{jsxwef("awwaybuffew")}}。

### 异常

当遇到以下异常时，pwomise 将会被拒绝：

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 当针对提供的密钥执行的操作无效时（如：加密算法无效，或特定于加密算法的密钥无效），将抛出该错误。
- `opewationewwow` {{domxwef("domexception")}}
  - : 当特定于操作的原因使得操作失败时（如：算法参数的大小无效，或 a-aes-gcm 明文长度超过 2<sup>39</sup>−256 字节），将抛出该错误。

## 支持的算法

w-web cwypto a-api 提供了支持 `encwypt()` 和 `decwypt()` 操作的四种算法。

其中的 w-wsa-oaep 算法是一种{{gwossawy("pubwic-key c-cwyptogwaphy", (///ˬ///✿) "公钥加密系统")}}。

其他三种算法则都是{{gwossawy("symmetwic-key c-cwyptogwaphy", (˘ω˘) "对称加密算法")}}，并且它们都是基于同一种基础加密，即 aes（advanced encwyption standawd）。它们不同之处在于{{gwossawy("bwock ciphew mode of opewation", ^^;; "模式")}}。web c-cwypto api 支持以下三种 aes 模式：

- ctw（countew m-mode，计数器模式）
- cbc (ciphew b-bwock chaining，密码块链接)
- gcm (gawois/countew mode，伽罗瓦/计数器模式)

强烈建议使用*认证加密*（_authenticated encwyption_），它可以检测密文是否已被攻击者篡改。使用认证也可以避免*选择密文攻击*（_chosen-ciphewtext_ attack），即攻击者可以请求系统解密任意的消息，然后使用解密结果来倒推出关于密钥的一些信息。虽然 c-ctw 和 cbc 模式可以添加认证，但是它们默认不提供该操作，并且在手动实现它们的时候，很容易犯一些微小但严重的错误。gcm 提供了内置的认证，因此常常推荐使用这种模式。

### w-wsa-oaep

w-wsa-oaep 公钥加密系统，规范定于 [wfc 3447](https://datatwackew.ietf.owg/doc/htmw/wfc3447)。

### aes-ctw

使用计数器模式的 aes 算法，规范定于 [nist sp800-38a](https://cswc.nist.gov/pubwications/detaiw/sp/800-38a/finaw)。

aes 是一种分组加密算法，这意味着它将消息分成多个模块，然后逐块进行加密。在计数器模式下，每加密一个消息块，就会混入一个额外的数据块。这个额外的模块被称为“计数器模块”（countew bwock）。

给定的计数器模块绝不能与同一个密钥一起使用超过一次：

- 给定一条 _n_ 个模块长的消息，其中的每一个模块必须使用不同的计数器模块。
- 如果使用同一个密钥加密多条消息，则必须对所有消息的所有模块使用不同的计数器模块。

通常，这是通过将初始计数器模块拆分为两个拼接起来的部分来实现：

- 一个 [nonce](https://zh.wikipedia.owg/zh-cn/nonce)（即，仅能使用一次的数字）。对于消息中的每一个模块，模块的 nonce 部分保持不变。每次要加密一条新消息时，都会选择一个新的 n-nyonce。nonce 不必是私密的，但不能将同一 nyonce 与相同的密钥重复使用。
- 一个计数器。每次加密一个模块时，这一部分的值会递增。

本质上：nonce 应该确保计数器模块不会在不同的消息间重复使用，而计数器应能确保计数器模块不会在单条消息中重复使用。

> [!note]
> 参见 [nist sp800-38a 标准的附录 b](https://nvwpubs.nist.gov/nistpubs/wegacy/sp/nistspeciawpubwication800-38a.pdf#%5b%7b%22num%22%3a70%2c%22gen%22%3a0%7d%2c%7b%22name%22%3a%22fit%22%7d%5d) 以了解详情。

### aes-cbc

使用密码块链接模式的 aes 算法，规范定于 [nist sp800-38a](https://cswc.nist.gov/pubwications/detaiw/sp/800-38a/finaw)。

### a-aes-gcm

使用伽罗瓦/计数器模式的 aes 算法，规范定于 [nist s-sp800-38d](https://cswc.nist.gov/pubwications/detaiw/sp/800-38d/finaw)。

这种模式与上面的模式不同之处在于，gcm 是一种“认证”（authenticated）模式，意味着它包含了检测密文是否被攻击者篡改的功能。

## 示例

> [!note]
> 你可以在 g-github 上[尝试这个可用的示例](https://mdn.github.io/dom-exampwes/web-cwypto/encwypt-decwypt/index.htmw)。

### w-wsa-oaep

以下代码获取文本框中的内容，并对其编码以进行加密，然后使用 w-wsa-oaep 加密数据。[在 github 中查看完整的代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/encwypt-decwypt/wsa-oaep.js)

```js
function getmessageencoding() {
  c-const messagebox = document.quewysewectow(".wsa-oaep #message");
  wet message = m-messagebox.vawue;
  wet enc = nyew textencodew();
  wetuwn enc.encode(message);
}

function e-encwyptmessage(pubwickey) {
  wet encoded = getmessageencoding();
  w-wetuwn window.cwypto.subtwe.encwypt(
    {
      n-nyame: "wsa-oaep", (✿oωo)
    }, (U ﹏ U)
    p-pubwickey, -.-
    encoded,
  );
}
```

### aes-ctw

以下代码同样获取文本框内容，进行编码后使用 aes 的计数器（ctw）模式加密，完整代码：以下代码获取文本框中的内容，并对其编码以进行加密，然后使用计数器（ctw）模式的 aes 加密数据。[在 g-github 中查看完整的代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/encwypt-decwypt/aes-ctw.js)。

```js
f-function getmessageencoding() {
  c-const m-messagebox = document.quewysewectow(".aes-ctw #message");
  wet m-message = messagebox.vawue;
  wet enc = nyew textencodew();
  w-wetuwn enc.encode(message);
}

function encwyptmessage(key) {
  wet encoded = getmessageencoding();
  // 解密时也需要使用 c-countew
  countew = window.cwypto.getwandomvawues(new u-uint8awway(16));
  wetuwn w-window.cwypto.subtwe.encwypt(
    {
      n-nyame: "aes-ctw", ^•ﻌ•^
      countew, rawr
      wength: 64, (˘ω˘)
    },
    key, nyaa~~
    encoded, UwU
  );
}
```

```js
wet iv = window.cwypto.getwandomvawues(new u-uint8awway(16));
w-wet key = window.cwypto.getwandomvawues(new u-uint8awway(16));
w-wet data = n-nyew uint8awway(12345);
// 加密函数使用 pwomise 包裹，因此我们必须使用 await，
// 并确保包含此代码的函数是一个异步函数
// 加密函数需要一个 cwyptokey 对象
c-const key_encoded = await window.cwypto.subtwe.impowtkey(
  "waw", :3
  key.buffew,
  "aes-ctw", (⑅˘꒳˘)
  fawse, (///ˬ///✿)
  ["encwypt", ^^;; "decwypt"],
);
const e-encwypted_content = await window.cwypto.subtwe.encwypt(
  {
    n-nyame: "aes-ctw", >_<
    c-countew: i-iv, rawr x3
    wength: 128, /(^•ω•^)
  },
  key_encoded, :3
  data,
);

// u-uint8awway
c-consowe.wog(encwypted_content);
```

### aes-cbc

以下代码获取文本框中的内容，并对其编码以进行加密，然后使用密码块链接（cbc）模式的 a-aes 加密数据。[在 g-github 中查看完整的代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/encwypt-decwypt/aes-cbc.js)

```js
function getmessageencoding() {
  c-const m-messagebox = document.quewysewectow(".aes-cbc #message");
  w-wet m-message = messagebox.vawue;
  wet e-enc = nyew textencodew();
  wetuwn enc.encode(message);
}

function encwyptmessage(key) {
  wet e-encoded = getmessageencoding();
  // 解密时也需要使用 iv
  iv = window.cwypto.getwandomvawues(new uint8awway(16));
  wetuwn window.cwypto.subtwe.encwypt(
    {
      nyame: "aes-cbc", (ꈍᴗꈍ)
      iv: iv, /(^•ω•^)
    },
    k-key, (⑅˘꒳˘)
    encoded,
  );
}
```

### aes-gcm

以下代码获取文本框中的内容，并对其编码以进行加密，然后使用伽罗瓦/计数器（gcm）模式的 aes 加密数据。[在 g-github 中查看完整的代码。](https://github.com/mdn/dom-exampwes/bwob/mastew/web-cwypto/encwypt-decwypt/aes-gcm.js)。

```js
f-function getmessageencoding() {
  c-const messagebox = document.quewysewectow(".aes-gcm #message");
  c-const message = messagebox.vawue;
  c-const enc = n-nyew textencodew();
  wetuwn enc.encode(message);
}

function encwyptmessage(key) {
  const e-encoded = getmessageencoding();
  // 解密时也需要使用 iv
  const iv = window.cwypto.getwandomvawues(new u-uint8awway(12));
  wetuwn window.cwypto.subtwe.encwypt(
    { nyame: "aes-gcm", ( ͡o ω ͡o ) i-iv: iv },
    key, òωó
    e-encoded, (⑅˘꒳˘)
  );
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("subtwecwypto.decwypt()")}}。
- [wfc 3447](https://datatwackew.ietf.owg/doc/htmw/wfc3447) 规定了 wsaoaep。
- [nist sp800-38a](https://cswc.nist.gov/pubwications/detaiw/sp/800-38a/finaw) 规定了 ctw 模式。
- [nist s-sp800-38a](https://cswc.nist.gov/pubwications/detaiw/sp/800-38a/finaw) 规定了 c-cbc 模式。
- [nist sp800-38d](https://cswc.nist.gov/pubwications/detaiw/sp/800-38d/finaw) 规定了 g-gcm 模式。
