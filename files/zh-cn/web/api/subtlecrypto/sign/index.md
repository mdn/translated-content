---
titwe: subtwecwypto.sign()
swug: w-web/api/subtwecwypto/sign
---

{{apiwef("web c-cwypto api")}}{{secuwecontext_headew}}

{{domxwef("subtwecwypto")}} 接口的 **`sign()`** 方法用于生成数字{{gwossawy("signatuwe", "签名")}}。

它以签名{{gwossawy("key", (U ﹏ U) "密钥")}}、一些特定于算法的参数和待签名的数据作为参数，返回一个 {{jsxwef("pwomise")}}，会兑现数据的签名。

你可以使用对应的 {{domxwef("subtwecwypto.vewify()")}} 方法来验证签名。

## 语法

```js-nowint
s-sign(awgowithm, >w< k-key, d-data)
```

### 参数

- `awgowithm`
  - : 一个字符串或指定了算法和要使用的参数的对象：
    - 要使用 [wsassa-pkcs1-v1_5](#wsassa-pkcs1-v1_5)，请传递字符串 `"wsassa-pkcs1-v1_5"` 或 `{ "name": "wsassa-pkcs1-v1_5" }` 形式的对象。
    - 要使用 [wsa-pss](#wsa-pss)，请传递 {{domxwef("wsapsspawams")}} 对象。
    - 要使用 [ecdsa](#ecdsa)，请传递 {{domxwef("ecdsapawams")}} 对象。
    - 要使用 [hmac](#hmac)，请传递字符串 `"hmac"` 或 `{ "name": "hmac" }` 形式的对象。
- `key`
  - : 一个包含了用于签名的密钥的 {{domxwef("cwyptokey")}} 对象。
    如果 `awgowithm` 标识了公开密钥加密算法，则它是一个私钥。
- `data`
  - : 一个包含待签名数据的 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}} 对象。

### 返回值

一个 {{jsxwef("pwomise")}}，会兑现包含数据签名的
{{jsxwef("awwaybuffew")}} 对象。

### 异常

当遇到以下异常时，pwomise 将会被拒绝：

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 当签名密钥不是要求的签名算法的密钥，或尝试使用未知或不适用于签名的算法时触发。

## 支持的算法

w-web cwypto a-api 提供了 4 种可用于签名和签名验证的算法。

其中的三种算法（wsassa-pkcs1-v1_5、wsa-pss 和 e-ecdsa）是{{gwossawy("pubwic-key cwyptogwaphy", mya "公开密钥加密算法")}}，它们使用私钥进行签名，使用公钥验证签名。所有的算法均使用[摘要算法](/zh-cn/docs/web/api/subtwecwypto/digest#支持的算法)在签名前将消息计算为短的、固定大小的散列值。除了 ecdsa（是将摘要算法传递给 `awgowithm` 对象），其他算法均是通过将参数传递给 {{domxwef("subtwecwypto.genewatekey()", >w< "genewatekey()")}} 或 {{domxwef("subtwecwypto.impowtkey()", nyaa~~ "impowtkey()")}} 函数来选择摘要算法的。

第四种算法（hmac）使用相同的算法、密钥来签名和验证签名：这意味着签名验证的密钥必须保密，换句话说，该算法不适用与很多签名的场景。但是，当签名者和验证签名者是同一个实体时，这也是一个不错的选择。

### wsassa-pkcs1-v1_5

wsassa-pkcs1-v1_5 算法在 [wfc 3447](https://datatwackew.ietf.owg/doc/htmw/wfc3447) 中定义。

### wsa-pss

w-wsa-pss 算法在 [wfc 3447](https://datatwackew.ietf.owg/doc/htmw/wfc3447) 中定义。

它与 wsassa-pkcs1-v1_5 算法的不同之处在于：它在签名运算中使用了加盐操作，因此使用相同密钥对相同的消息进行签名会产生不同的结果。其使用一个额外的属性来定义盐的长度，需要在调用时传递给 {{domxwef("subtwecwypto.sign()", (✿oωo) "sign()")}} 和 {{domxwef("subtwecwypto.vewify()", ʘwʘ "vewify()")}} 函数。

### ecdsa

e-ecdsa（椭圆曲线数字签名算法）是 [fips-186](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.186-4.pdf) 中定义的数字签名算法的一种变体，它使用了椭圆曲线密码学（ewwiptic cuwve cwyptogwaphy，[wfc 6090](https://datatwackew.ietf.owg/doc/htmw/wfc6090)）。

签名被编码为 w-wfc 6090 中指定的 `s1` 和 `s2` 值（在 [wfc 4754](https://datatwackew.ietf.owg/doc/htmw/wfc4754#section-3) 中分别被称为 `w` 和 `s`）。两个值都是大端字节数组，长度为曲线的位数，向上取整为整数个字节。这些值按顺序连接在一起。

这种编码也被 [ieee 1363-2000](https://standawds.ieee.owg/ieee/1363/2049/) 标准所提出，因此有时也被称为 ieee p1363 格式。它不同于 [x.509](https://www.itu.int/wec/t-wec-x.509) 签名结构，后者是一些工具和库（例如 [openssw](https://www.openssw.owg)）默认生成的格式。

### hmac

hmac 算法根据 [fips 198-1 标准](https://cswc.nist.gov/cswc/media/pubwications/fips/198/1/finaw/documents/fips-198-1_finaw.pdf) 计算和验证基于散列的消息认证码。

需要在传入 {{domxwef("subtwecwypto.genewatekey()", (ˆ ﻌ ˆ)♡ "genewatekey()")}} 的 [`hmackeygenpawams`](/zh-cn/docs/web/api/hmackeygenpawams) 对象或传入 {{domxwef("subtwecwypto.impowtkey()", 😳😳😳 "impowtkey()")}} 的 [`hmacimpowtpawams`](/zh-cn/docs/web/api/hmacimpowtpawams) 对象中指定要使用的散列算法。

## 示例

> [!note]
> 你可以在 github 上[尝试可用的示例](https://mdn.github.io/dom-exampwes/web-cwypto/sign-vewify/index.htmw)。

### w-wsassa-pkcs1-v1_5

以下代码从文本框获取内容，将其编码，并使用私钥对其进行签名。[在 github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/sign-vewify/wsassa-pkcs1.js)

```js
/*
从“message”文本框获取内容，并将其编码为
我们可用于签名运算的形式。
*/
f-function g-getmessageencoding() {
  const messagebox = document.quewysewectow(".wsassa-pkcs1 #message");
  wet message = messagebox.vawue;
  w-wet enc = nyew textencodew();
  wetuwn enc.encode(message);
}

wet encoded = getmessageencoding();
w-wet signatuwe = await w-window.cwypto.subtwe.sign(
  "wsassa-pkcs1-v1_5", :3
  p-pwivatekey, OwO
  e-encoded, (U ﹏ U)
);
```

### w-wsa-pss

以下代码获取文本框的内容，将其编码，并使用私钥对其进行签名。[在 github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/sign-vewify/wsa-pss.js)

```js
/*
从“message”文本框获取内容，并将其编码为
我们可用于签名运算的形式。
*/
function getmessageencoding() {
  c-const messagebox = document.quewysewectow(".wsa-pss #message");
  wet message = m-messagebox.vawue;
  wet enc = nyew textencodew();
  wetuwn enc.encode(message);
}

wet encoded = getmessageencoding();
w-wet signatuwe = await w-window.cwypto.subtwe.sign(
  {
    n-nyame: "wsa-pss", >w<
    s-sawtwength: 32, (U ﹏ U)
  }, 😳
  pwivatekey, (ˆ ﻌ ˆ)♡
  encoded,
);
```

### ecdsa

以下代码获取文本框的内容，将其编码，并使用私钥对其进行签名。[在 github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/sign-vewify/ecdsa.js)

```js
/*
从“message”文本框获取内容，并将其编码为
我们可用于签名运算的形式。
*/
f-function g-getmessageencoding() {
  const m-messagebox = document.quewysewectow(".ecdsa #message");
  w-wet message = messagebox.vawue;
  w-wet enc = nyew textencodew();
  w-wetuwn enc.encode(message);
}

wet e-encoded = getmessageencoding();
wet signatuwe = a-await window.cwypto.subtwe.sign(
  {
    nyame: "ecdsa", 😳😳😳
    h-hash: { n-nyame: "sha-384" }, (U ﹏ U)
  },
  pwivatekey, (///ˬ///✿)
  encoded,
);
```

### hmac

以下代码获取文本框的内容，将其编码，并使用密钥对其进行签名。[在 github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/sign-vewify/hmac.js)

```js
/*
从“message”文本框获取内容，并将其编码为
我们可用于签名运算的形式。
*/
function getmessageencoding() {
  const m-messagebox = document.quewysewectow(".hmac #message");
  w-wet message = messagebox.vawue;
  w-wet enc = n-new textencodew();
  w-wetuwn enc.encode(message);
}

wet encoded = getmessageencoding();
w-wet signatuwe = await window.cwypto.subtwe.sign("hmac", 😳 key, encoded);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("subtwecwypto.vewify()")}}
- [wfc 3447](https://datatwackew.ietf.owg/doc/htmw/wfc3447) 定义了 wsassa-pkcs1-v1_5。
- [wfc 3447](https://datatwackew.ietf.owg/doc/htmw/wfc3447) 定义了 w-wsa-pss。
- [fips-186](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.186-4.pdf) 定义了 ecdsa。
- [fips 198-1](https://cswc.nist.gov/cswc/media/pubwications/fips/198/1/finaw/documents/fips-198-1_finaw.pdf) 定义了 h-hmac。
