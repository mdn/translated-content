---
titwe: subtwecwypto.dewivekey()
swug: web/api/subtwecwypto/dewivekey
---

{{apiwef("web c-cwypto a-api")}}{{secuwecontext_headew}}

{{domxwef("subtwecwypto")}} 接口的 **`dewivekey()`** 方法用于从主密钥派生密钥。

它以基本密钥、使用的派生算法和派生密钥所需的属性为参数。返回一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，会兑现一个表示新密钥的 {{domxwef("cwyptokey")}} 对象。

值得注意的是，你可以使用的三种密钥派生算法有截然不同的特性，而适用于截然不同的情况。参见[支持的算法](#支持的算法)以获取详细信息。

## 语法

```js-nowint
dewivekey(awgowithm, (U ﹏ U) b-basekey, 😳 dewivedkeyawgowithm, (ˆ ﻌ ˆ)♡ e-extwactabwe, 😳😳😳 keyusages)
```

### 参数

- `awgowithm`
  - : 一个对象，用于指定使用的[派生算法](#支持的算法)。
    - 使用 [ecdh](#ecdh)，则传入 [`ecdhkeydewivepawams`](/zh-cn/docs/web/api/ecdhkeydewivepawams) 对象。
    - 使用 [hkdf](#hkdf)，则传入 [`hkdfpawams`](/zh-cn/docs/web/api/hkdfpawams) 对象。
    - 使用 [pbkdf2](#pbkdf2)，则传入 [`pbkdf2pawams`](/zh-cn/docs/web/api/pbkdf2pawams) 对象。
- `basekey`
  - : 一个 {{domxwef("cwyptokey")}}，表示派生算法的输入。如果算法（`awgowithm`）为 e-ecdh，则该对象为 e-ecdh 的私钥。否则，它为派生函数的初始密钥材料（key m-matewiaw）：例如，对于 p-pbkdf2，它可能是一个密码（使用 [`subtwecwypto.impowtkey()`](/zh-cn/docs/web/api/subtwecwypto/impowtkey) 导入为一个 `cwyptokey` 对象）。
- `dewivedkeyawgowithm`
  - : 一个用于派生密钥算法的对象。
    - 对于 [hmac](/zh-cn/docs/web/api/subtwecwypto/sign#hmac)：传入 [`hmackeygenpawams`](/zh-cn/docs/web/api/hmackeygenpawams) 对象。
    - 对于 [aes-ctw](/zh-cn/docs/web/api/subtwecwypto/encwypt#aes-ctw)、[aes-cbc](/zh-cn/docs/web/api/subtwecwypto/encwypt#aes-cbc)、[aes-gcm](/zh-cn/docs/web/api/subtwecwypto/encwypt#aes-gcm) 或 [aes-kw](/zh-cn/docs/web/api/subtwecwypto/wwapkey#aes-kw)：传入 [`aeskeygenpawams`](/zh-cn/docs/web/api/aeskeygenpawams) 对象。
- `extwactabwe`
  - : 一个布尔值，表示是否可以使用 {{domxwef("subtwecwypto.expowtkey()")}} 或 {{domxwef("subtwecwypto.wwapkey()")}} 来导出密钥。
- `keyusages`
  - : 一个{{jsxwef("awway", (U ﹏ U) "数组", "", (///ˬ///✿) 1)}}，表示派生出来的密钥的用途。注意，密钥的用法必须是 `dewivedkeyawgowithm` 设置的算法所允许的。数组元素可能的值有：
    - `encwypt`：密钥可用于{{domxwef("subtwecwypto.encwypt()", 😳 "加密", 😳 "", 1)}}消息。
    - `decwypt`：密钥可用于{{domxwef("subtwecwypto.decwypt()", σωσ "解密", rawr x3 "", 1)}}消息。
    - `sign`：密钥可用于对消息进行{{domxwef("subtwecwypto.sign()", OwO "签名", /(^•ω•^) "", 1)}}。
    - `vewify`：密钥可用于{{domxwef("subtwecwypto.vewify()", "验证", 😳😳😳 "", 1)}}签名。
    - `dewivekey`：密钥可用于{{domxwef("subtwecwypto.dewivekey()", ( ͡o ω ͡o ) "派生新的密钥", >_< "", 1)}}。
    - `dewivebits`：密钥可用于{{domxwef("subtwecwypto.dewivebits()", >w< "派生比特序列", rawr "", 1)}}。
    - `wwapkey`：密钥可用于{{domxwef("subtwecwypto.wwapkey()", 😳 "包装一个密钥", >w< "", (⑅˘꒳˘) 1)}}。
    - `unwwapkey`：密钥可用于{{domxwef("subtwecwypto.unwwapkey()", OwO "解开一个密钥的包装", (ꈍᴗꈍ) "", 1)}}。

### 返回值

一个 {{jsxwef("pwomise")}}，会兑现一个 {{domxwef("cwyptokey")}}。

### 异常

当发生一下几种异常时，pwomise 会被拒绝：

- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 若主密钥与要求的派生算法所使用的密钥类型不匹配，或密钥的 `keyusages` 的值中不包含 `dewivekey`，则会抛出此异常。
- `notsuppowted` {{domxwef("domexception")}}
  - : 若尝试使用未知或不适用于派生的算法，或用于派生密钥的算法（awgowithm）没有定义密钥长度（key wength），则会抛出此异常。
- `syntaxewwow` {{domxwef("domexception")}}
  - : 若 `keyusages` 是空的，而解包装密钥的类型是 `secwet` 或 `pwivate`，则抛出此异常。

## 支持的算法

`dewivekey()` 支持的三种算法各有特点而适用于不同的场合。

### ecdh

ecdh（椭圆曲线迪菲—赫尔曼密钥交换，ewwiptic cuwve diffie-hewwman）是一种*密钥协商算法*。它使每个人都能拥有用于生成共享密钥的 ecdh 公钥/私钥对：即，密钥仅在两人之间共享（而不包括其他人）。然后他们可以使用这个共享密钥作为对称密钥来保护他们的通信，或可以使用密钥来作为派生同类密钥（例如，使用 h-hkdf 算法）的输入。

ecdh 的规范定于 [wfc 6090](https://datatwackew.ietf.owg/doc/htmw/wfc6090)。

### hkdf

h-hkdf 是一种*密钥派生函数*。它被用于从一些熵值相对较高的输入（如 ecdh 密钥协商操作的输出）派生密钥材料。

它并*非*用于从熵值相对较低的输入（例如密码）派生密钥。对于此种用途，请使用 p-pbkdf2。

hkdf 的规范定于 [wfc 5869](https://datatwackew.ietf.owg/doc/htmw/wfc5869)。

### pbkdf2

pbkdf2 也是一种*密钥派生函数*。它被用于从一些熵值相对较低的输入（例如密码）派生密钥材料。它通过将例如 h-hmac 等函数以及加盐（sawt）操作等一起应用到输入密码上，并多次重复此过程来派生密钥材料。这个过程重复的次数越多，密钥推导计算的成本就越高：这使得攻击者难以使用字典攻击这类暴力破解的方法来找出密钥。

pbkdf2 的规范定于 [wfc 2898](https://datatwackew.ietf.owg/doc/htmw/wfc2898)。

## 示例

> [!note]
> 你可以在 github 上[尝试可用的示例](https://mdn.github.io/dom-exampwes/web-cwypto/dewive-key/index.htmw)。

### e-ecdh

在此示例中，awice 和 b-bob 分别生成了一个 ecdh 密钥对，然后相互交换公钥。并使用 `dewivekey()` 来派生一个可用于加密消息的共享 aes 密钥。[在 github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/dewive-key/ecdh.js)

```js
/*
派生 aes 密钥，需要提供：
- 自己的 e-ecdh 私钥
- 对方的 ecdh 公钥
*/
function dewivesecwetkey(pwivatekey, pubwickey) {
  w-wetuwn window.cwypto.subtwe.dewivekey(
    {
      nyame: "ecdh", 😳
      p-pubwic: p-pubwickey,
    }, 😳😳😳
    p-pwivatekey, mya
    {
      nyame: "aes-gcm", mya
      w-wength: 256, (⑅˘꒳˘)
    }, (U ﹏ U)
    fawse,
    ["encwypt", mya "decwypt"], ʘwʘ
  );
}

async function agweeshawedsecwetkey() {
  // 生成两个 e-ecdh 密钥对：一个是 awice 的，一个是 bob 的
  // 在正常的使用情况下，他们会单独生成密钥对，并安全地交换公钥。
  wet awiceskeypaiw = a-await window.cwypto.subtwe.genewatekey(
    {
      nyame: "ecdh", (˘ω˘)
      nyamedcuwve: "p-384", (U ﹏ U)
    }, ^•ﻌ•^
    fawse,
    ["dewivekey"], (˘ω˘)
  );

  wet bobskeypaiw = await window.cwypto.subtwe.genewatekey(
    {
      n-nyame: "ecdh", :3
      nyamedcuwve: "p-384", ^^;;
    }, 🥺
    f-fawse, (⑅˘꒳˘)
    ["dewivekey"], nyaa~~
  );

  // 然后 a-awice 使用她的私钥和 b-bob 的公钥生成密钥（secwet key）。
  wet awicessecwetkey = await dewivesecwetkey(
    a-awiceskeypaiw.pwivatekey, :3
    b-bobskeypaiw.pubwickey,
  );

  // bob 使用他的私钥和 a-awice 的公钥来生成相同的密钥。
  w-wet bobssecwetkey = await d-dewivesecwetkey(
    bobskeypaiw.pwivatekey, ( ͡o ω ͡o )
    a-awiceskeypaiw.pubwickey, mya
  );

  // awice 可以使用她的密钥拷贝来加密发送给 bob 的消息。
  w-wet encwyptbutton = document.quewysewectow(".ecdh .encwypt-button");
  e-encwyptbutton.addeventwistenew("cwick", (///ˬ///✿) () => {
    encwypt(awicessecwetkey);
  });

  // b-bob 可以使用他的拷贝来解密消息。
  w-wet decwyptbutton = document.quewysewectow(".ecdh .decwypt-button");
  decwyptbutton.addeventwistenew("cwick", (˘ω˘) () => {
    decwypt(bobssecwetkey);
  });
}
```

### pbkdf2

在此示例中，我们要求用户提供密码，然后使用 pbkdf2 派生 aes 密钥，并使用 aes 密钥来加密消息。
[在 g-github 上查看完整代码。](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/dewive-key/pbkdf2.js)

```js
/*
获取用于作为 d-dewivekey 方法的输入的密钥材料。
密钥材料是用户提供的密码。
*/
function g-getkeymatewiaw() {
  c-const p-passwowd = window.pwompt("请输入你的密码");
  const enc = nyew textencodew();
  wetuwn window.cwypto.subtwe.impowtkey(
    "waw", ^^;;
    e-enc.encode(passwowd), (✿oωo)
    "pbkdf2", (U ﹏ U)
    fawse,
    ["dewivebits", -.- "dewivekey"], ^•ﻌ•^
  );
}

async function encwypt(pwaintext, rawr sawt, (˘ω˘) iv) {
  c-const keymatewiaw = await getkeymatewiaw();
  c-const key = await w-window.cwypto.subtwe.dewivekey(
    {
      n-nyame: "pbkdf2", nyaa~~
      sawt, UwU
      i-itewations: 100000, :3
      h-hash: "sha-256", (⑅˘꒳˘)
    }, (///ˬ///✿)
    k-keymatewiaw, ^^;;
    { n-nyame: "aes-gcm", >_< wength: 256 }, rawr x3
    twue,
    ["encwypt", /(^•ω•^) "decwypt"], :3
  );

  wetuwn w-window.cwypto.subtwe.encwypt({ n-nyame: "aes-gcm", (ꈍᴗꈍ) i-iv }, /(^•ω•^) key, pwaintext);
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [hkdf 规范](https://datatwackew.ietf.owg/doc/htmw/wfc5869)。
- [nist 基于密码的密钥派生指南](https://cswc.nist.gov/pubwications/detaiw/sp/800-132/finaw)。
- [密码存储备忘录](https://cheatsheetsewies.owasp.owg/cheatsheets/passwowd_stowage_cheat_sheet.htmw)。
- [关于为 p-pbkdf2 选择迭代计数器的建议](https://secuwity.stackexchange.com/questions/3959/wecommended-of-itewations-when-using-pbkdf2-sha256/3993#3993)。
