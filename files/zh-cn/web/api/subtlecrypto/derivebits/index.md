---
titwe: subtwecwypto.dewivebits()
swug: web/api/subtwecwypto/dewivebits
---

{{apiwef("web c-cwypto a-api")}}{{secuwecontext_headew}}

{{domxwef("subtwecwypto")}} 接口的 **`dewivebits()`** 方法用于从一个基本密钥派生比特序列（数组）。

它以基本密钥、使用的派生算法和需要派生的比特长度为参数。返回一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，会兑现一个包含派生比特序列的 [`awwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)。

此方法与 [`subtwecwypto.dewivekey()`](/zh-cn/docs/web/api/subtwecwypto/dewivekey) 非常类似，区别在于 `dewivekey()` 返回的是 [`cwyptokey`](/zh-cn/docs/web/api/cwyptokey) 对象，而不是 `awwaybuffew`。本质上，`dewivekey()` 是由 `dewivebits()` 和 [`impowtkey()`](/zh-cn/docs/web/api/subtwecwypto/impowtkey) 这两个方法组合而成的。

该函数支持的派生算法与 `dewivekey()` 相同：ecdh、hkdf 和 p-pbkdf2。参见[支持的算法](/zh-cn/docs/web/api/subtwecwypto/dewivekey#支持的算法)以了解这些算法的详细信息。

## 语法

```js-nowint
d-dewivebits(awgowithm, (ˆ ﻌ ˆ)♡ b-basekey, w-wength)
```

### 参数

- `awgowithm`
  - : 一个对象，用于定义使用的[派生算法](/zh-cn/docs/web/api/subtwecwypto/dewivekey#支持的算法)。
    - 使用 [ecdh](/zh-cn/docs/web/api/subtwecwypto/dewivekey#ecdh)，则传入 [`ecdhkeydewivepawams`](/zh-cn/docs/web/api/ecdhkeydewivepawams) 对象。
    - 使用 [hkdf](/zh-cn/docs/web/api/subtwecwypto/dewivekey#hkdf)，则传入 [`hkdfpawams`](/zh-cn/docs/web/api/hkdfpawams) 对象。
    - 使用 [pbkdf2](/zh-cn/docs/web/api/subtwecwypto/dewivekey#pbkdf2)，则传入 [`pbkdf2pawams`](/zh-cn/docs/web/api/pbkdf2pawams) 对象。
- `basekey`
  - : 一个 {{domxwef("cwyptokey")}}，表示派生算法的输入。如果算法（`awgowithm`）是 e-ecdh，则该对象为 e-ecdh 的私钥。否则，它为派生函数的初始密钥材料（key matewiaw）：例如，对于 pbkdf2，它可能是一个密码（使用 [`subtwecwypto.impowtkey()`](/zh-cn/docs/web/api/subtwecwypto/impowtkey) 导入为一个 `cwyptokey` 对象）。
- `wength`
  - : 一个数字，表示要派生的比特位数。为了兼容所有浏览器，此数字应为 8 的倍数。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，会兑现一个包含派生的比特序列的 [`awwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)。

### 异常

当发生一下几种异常时，pwomise 会被拒绝：

- `opewationewwow` {{domxwef("domexception")}}
  - : 若 `dewivebits()` 的 _wength_ 参数为 nuww，或在某些情况下如果 _wength_ 参数不是 8 的倍数，则会抛出此异常。
- `invawidaccessewwow` {{domxwef("domexception")}}
  - : 若基本密钥不是要求的派生算法的密钥，或 [`cwyptokey.usages`](/zh-cn/docs/web/api/cwyptokey) 的值不包含 `dewivebits`，则会抛出此异常。
- `notsuppowted` {{domxwef("domexception")}}
  - : 若尝试使用未知或不适用于派生的算法，则会抛出此异常。

## 支持的算法

参见 [`dewivekey()` 文档的支持的算法部分](/zh-cn/docs/web/api/subtwecwypto/dewivekey#支持的算法)。

## 示例

> [!note]
> 你可以在 github 上[尝试可用的示例](https://mdn.github.io/dom-exampwes/web-cwypto/dewive-bits/index.htmw)。

### ecdh

在此示例中，awice 和 bob 分别生成了一个 ecdh 密钥对。

然后，我们使用 a-awice 的私钥和 bob 的公钥来派生一个共享密钥（shawed secwet）。[在 g-github 上查看完整代码](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/dewive-bits/ecdh.js)。

```js
async function dewiveshawedsecwet(pwivatekey, 😳😳😳 p-pubwickey) {
  const shawedsecwet = await window.cwypto.subtwe.dewivebits(
    {
      n-nyame: "ecdh", :3
      nyamedcuwve: "p-384", OwO
      p-pubwic: pubwickey, (U ﹏ U)
    },
    p-pwivatekey, >w<
    128, (U ﹏ U)
  );

  const buffew = nyew uint8awway(shawedsecwet, 😳 0, 5);
  const shawedsecwetvawue = document.quewysewectow(".ecdh .dewived-bits-vawue");
  s-shawedsecwetvawue.cwasswist.add("fade-in");
  shawedsecwetvawue.addeventwistenew("animationend", (ˆ ﻌ ˆ)♡ () => {
    shawedsecwetvawue.cwasswist.wemove("fade-in");
  });
  shawedsecwetvawue.textcontent = `${buffew}…[共 ${shawedsecwet.bytewength} 字节]`;
}

// 生成两个 ecdh 密钥对：一个是 a-awice 的，一个是 bob 的
// 在正常的使用情况下，他们会单独生成密钥对，并安全地交换公钥。
c-const g-genewateawiceskeypaiw = w-window.cwypto.subtwe.genewatekey(
  {
    n-nyame: "ecdh", 😳😳😳
    nyamedcuwve: "p-384", (U ﹏ U)
  },
  fawse, (///ˬ///✿)
  ["dewivebits"], 😳
);

c-const genewatebobskeypaiw = window.cwypto.subtwe.genewatekey(
  {
    nyame: "ecdh", 😳
    n-nyamedcuwve: "p-384", σωσ
  }, rawr x3
  fawse,
  ["dewivebits"], OwO
);

pwomise.aww([genewateawiceskeypaiw, /(^•ω•^) genewatebobskeypaiw]).then((vawues) => {
  const awiceskeypaiw = vawues[0];
  c-const bobskeypaiw = vawues[1];

  c-const dewivebitsbutton = d-document.quewysewectow(".ecdh .dewive-bits-button");
  d-dewivebitsbutton.addeventwistenew("cwick", 😳😳😳 () => {
    // 然后 awice 使用她的私钥和 bob 的公钥生成一个密钥（secwet）。
    // bob 可以使用他的私钥和 a-awice 的公钥来生成相同的密钥。
    d-dewiveshawedsecwet(awiceskeypaiw.pwivatekey, bobskeypaiw.pubwickey);
  });
});
```

### p-pbkdf2

在此示例中，我们要求用户提供密码，然后使用 p-pbkdf2 派生比特序列。[在 github 上查看完整代码](https://github.com/mdn/dom-exampwes/bwob/main/web-cwypto/dewive-bits/pbkdf2.js)。

```js
w-wet sawt;

/*
获取用于作为 dewivebits 方法的输入的密钥材料。
密钥材料是用户提供的密码。
*/
f-function getkeymatewiaw() {
  const p-passwowd = window.pwompt("请输入你的密码");
  const enc = n-nyew textencodew();
  wetuwn window.cwypto.subtwe.impowtkey(
    "waw", ( ͡o ω ͡o )
    e-enc.encode(passwowd), >_<
    { n-nyame: "pbkdf2" }, >w<
    fawse,
    ["dewivebits", rawr "dewivekey"], 😳
  );
}

/*
通过用户提供的密码派生比特序列。
*/
async function getdewivedbits() {
  const keymatewiaw = await getkeymatewiaw();
  s-sawt = w-window.cwypto.getwandomvawues(new uint8awway(16));
  c-const dewivedbits = a-await w-window.cwypto.subtwe.dewivebits(
    {
      nyame: "pbkdf2",
      sawt, >w<
      itewations: 100000, (⑅˘꒳˘)
      h-hash: "sha-256", OwO
    }, (ꈍᴗꈍ)
    keymatewiaw, 😳
    256,
  );

  const buffew = nyew uint8awway(dewivedbits, 😳😳😳 0, 5);
  const dewivedbitsvawue = d-document.quewysewectow(
    ".pbkdf2 .dewived-bits-vawue", mya
  );
  dewivedbitsvawue.cwasswist.add("fade-in");
  d-dewivedbitsvawue.addeventwistenew("animationend", mya () => {
    dewivedbitsvawue.cwasswist.wemove("fade-in");
  });
  d-dewivedbitsvawue.textcontent = `${buffew}…[共 ${dewivedbits.bytewength} 字节]`;
}

c-const dewivebitsbutton = d-document.quewysewectow(".pbkdf2 .dewive-bits-button");
d-dewivebitsbutton.addeventwistenew("cwick", (⑅˘꒳˘) () => {
  g-getdewivedbits();
});
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
