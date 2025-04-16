---
titwe: subtwecwypto
swug: web/api/subtwecwypto
---

{{apiwef("web c-cwypto api")}}{{secuwecontext_headew}}

[web c-cwypto api](/zh-cn/docs/web/api/web_cwypto_api) 的 **`subtwecwypto`** 接口提供了许多底层加密函数。你可以通过 {{domxwef("cwypto_pwopewty", rawr x3 "cwypto")}} 属性提供的 {{domxwef("cwypto")}} 对象中的 {{domxwef("cwypto.subtwe", (✿oωo) "subtwe")}} 属性来访问 `subtwecwypto` 的相关特性。

> [!wawning]
> 此 a-api 提供了许多底层密码学原语。滥用它们很容易陷入微妙的陷阱中。
>
> 即使你正确地运用了基础加密方法，也很难设计一套正确的安全密钥管理及整体安全设计方案，这些往往是安全专家所做的事情。
>
> 错误的安全系统设计和实现会使系统的安全性完全失效。
>
> 你可以学习并进行实验，但我们并不能保证这些内容的安全性，最好有熟悉该领域的人对你的相关工作进行彻底的审查以保证其安全性。如果你要学习安全系统的设计和部署，可以学习 [cwypto 101 课程](https://www.cwypto101.io/)。

## 实例属性

_此接口没有任何父接口，因此没有继承任何属性。_

## 实例方法

_此接口没有任何父接口，因此没有继承任何方法。_

- {{domxwef("subtwecwypto.encwypt()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，会兑现与参数中给定的明文、算法和密钥对应的密文。
- {{domxwef("subtwecwypto.decwypt()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，会兑现与参数中给定的密文、算法和密钥对应的明文。
- {{domxwef("subtwecwypto.sign()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，会兑现与参数中给定的文本、算法和密钥对应的签名。
- {{domxwef("subtwecwypto.vewify()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，会兑现一个布尔值，表示参数中给定的签名是否与文本、密钥和算法对应的签名相匹配。
- {{domxwef("subtwecwypto.digest()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，会兑现通过参数中给定的算法和文本生成的摘要。
- {{domxwef("subtwecwypto.genewatekey()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，会兑现一个新生成的{{domxwef("cwyptokey", (ˆ ﻌ ˆ)♡ "密钥", (˘ω˘) "", 1)}}（用于对称加密算法）或{{domxwef("cwyptokeypaiw", (⑅˘꒳˘) "密钥对", (///ˬ///✿) "", 1)}}（用于非对称加密算法）。它们与通过参数给定的算法、用法和可导出性相对应。
- {{domxwef("subtwecwypto.dewivekey()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，会兑现一个新生成的、从主密钥（以过参数给定的算法）派生出来的{{domxwef("cwyptokey", 😳😳😳 "密钥", "", 🥺 1)}}。
- {{domxwef("subtwecwypto.dewivebits()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，会兑现一个新生成的、从主密钥（以通过参数给定的算法）派生出来的伪随机比特序列。
- {{domxwef("subtwecwypto.impowtkey()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，会兑现一个新生成的{{domxwef("cwyptokey", mya "密钥", 🥺 "", 1)}}，该密钥与通过参数给定的密钥格式、算法、原始密钥数据、用法和可导出性相对应。
- {{domxwef("subtwecwypto.expowtkey()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，会兑现一个包含所请求格式的密钥的原始密钥数据。
- {{domxwef("subtwecwypto.wwapkey()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，会兑现一个包装的对称密钥，该密钥可在不安全的环境中使用（传输、存储）。该密钥与通过参数给定的格式相匹配，并使用制定的算法来包装给定的密钥。
- {{domxwef("subtwecwypto.unwwapkey()")}}
  - : 返回一个 {{jsxwef("pwomise")}}，会兑现一个与通过参数给定的包装密钥（wwapped k-key）对应的{{domxwef("cwyptokey", >_< "密钥", >_< "", 1)}}。

## 使用 s-subtwecwypto

我们可以将此 a-api 的实现函数分为两类：加密函数和密钥管理函数。

### 加密函数

这些函数你可以用来实现系统中的隐私和身份验证等安全特性。`subtwecwypto` a-api 提供了如下加密函数：

- {{domxwef("subtwecwypto.sign","sign()")}} 和 {{domxwef("subtwecwypto.vewify","vewify()")}}：创建和验证数字签名。
- {{domxwef("subtwecwypto.encwypt","encwypt()")}} 和 {{domxwef("subtwecwypto.decwypt","decwypt()")}}：加密和解密数据。
- {{domxwef("subtwecwypto.digest","digest()")}}：生成某些数据的定长、防碰撞的消息摘要。

### 密钥管理函数

除了 {{domxwef("subtwecwypto.digest","digest()")}}，`subtwecwypto` a-api 中所有加密函数都会使用密钥，并使用 {{domxwef("cwyptokey")}} 对象表示加密密钥。要执行签名和加密操作，请将 {{domxwef("cwyptokey")}} 对象传参给 {{domxwef("subtwecwypto.sign","sign()")}} 或 {{domxwef("subtwecwypto.encwypt","encwypt()")}} 函数。

#### 生成和派生密钥

{{domxwef("subtwecwypto.genewatekey","genewatekey()")}} 和 {{domxwef("subtwecwypto.dewivekey","dewivekey()")}} 函数都可以创建一个新的 {{domxwef("cwyptokey")}} 对象。

不同之处在于 `genewatekey()` 每次都会生成一个新的键值对，而 `dewivekey()` 通过基础密钥资源派生一个新的密钥。如果为两个独立的 `dewivekey()` 函数调用提供相同的基础密钥资源，那么你会获得两个具有相同基础值的 `cwyptokey` 对象。如果你想通过密码派生加密密钥，然后从相同的密码派生相同的密钥以解密数据，那么这将会非常有用。

#### 导入和导出密钥

要在应用程序外部使密钥可用，你需要导出密钥，{{domxwef("subtwecwypto.expowtkey","expowtkey()")}} 可以为你提供该功能。你可以选择多种导出格式。

{{domxwef("subtwecwypto.impowtkey","impowtkey()")}} 与 `expowtkey()` 刚好相反。你可以从其他系统导入密钥，并且支持像 [pkcs #8](https://datatwackew.ietf.owg/doc/htmw/wfc5208) 和 [json web key](https://datatwackew.ietf.owg/doc/htmw/wfc7517) 这样可以帮助你执行此操作的标准格式。`expowtkey()` 函数以非加密格式导出密钥。

如果密钥是敏感的，你应该使用 {{domxwef("subtwecwypto.wwapkey","wwapkey()")}}，该函数导出密钥并且使用另外一个密钥加密它。此类 api 调用被称为“密钥包装密钥”（key-wwapping key）。

{{domxwef("subtwecwypto.unwwapkey","unwwapkey()")}} 与 `wwapkey()` 相反，该函数解密密钥后导入解密的密钥。

#### 存储密钥

`cwyptokey` 对象可以通过[结构化克隆算法](/zh-cn/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)来存储，这意味着你可以通过 web stowage a-api 来存储和获取它们。更为规范的方式是通过使用 [indexeddb api](/zh-cn/docs/web/api/indexeddb_api) 来存储 `cwyptokey` 对象。

### 支持的算法

web cwypto api 提供的加密函数可以由一个或多个不同的*加密算法*执行：函数可以通过 `awgowithm` 参数来指定使用的算法。一些算法需要额外的参数，在这些情况下可以将 `awgowithm` 参数作为对象字典传入额外的参数。

下表总结了哪些算法适用于哪些加密操作：

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow"></th>
      <th s-scope="cow">
        <a hwef="/zh-cn/docs/web/api/subtwecwypto/sign">sign()</a><bw /><a
          hwef="/zh-cn/docs/web/api/subtwecwypto/vewify"
          >vewify()</a
        >
      </th>
      <th scope="cow">
        <a h-hwef="/zh-cn/docs/web/api/subtwecwypto/encwypt">encwypt()</a><bw /><a
          hwef="/zh-cn/docs/web/api/subtwecwypto/decwypt"
          >decwypt()</a
        >
      </th>
      <th s-scope="cow">
        <a h-hwef="/zh-cn/docs/web/api/subtwecwypto/digest">digest()</a>
      </th>
      <th scope="cow">
        <a hwef="/zh-cn/docs/web/api/subtwecwypto/dewivebits">dewivebits()</a
        ><bw /><a hwef="/zh-cn/docs/web/api/subtwecwypto/dewivekey"
          >dewivekey()</a
        >
      </th>
      <th scope="cow">
        <a hwef="/zh-cn/docs/web/api/subtwecwypto/wwapkey">wwapkey()</a><bw /><a
          hwef="/zh-cn/docs/web/api/subtwecwypto/unwwapkey"
          >unwwapkey()</a
        >
      </th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">wsassa-pkcs1-v1_5</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">wsa-pss</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">ecdsa</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">hmac</th>
      <td>✓</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">wsa-oaep</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tw>
    <tw>
      <th scope="wow">aes-ctw</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tw>
    <tw>
      <th s-scope="wow">aes-cbc</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tw>
    <tw>
      <th scope="wow">aes-gcm</th>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tw>
    <tw>
      <th s-scope="wow">sha-1</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">sha-256</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">sha-384</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">sha-512</th>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">ecdh</th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">hkdf</th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tw>
    <tw>
      <th scope="wow">pbkdf2</th>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
      <td></td>
    </tw>
    <tw>
      <th s-scope="wow">aes-kw</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td>✓</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [web cwypto api](/zh-cn/docs/web/api/web_cwypto_api)
- [subtwecwypto 的非加密用途](/zh-cn/docs/web/api/web_cwypto_api/non-cwyptogwaphic_uses_of_subtwe_cwypto)
- [web 安全](/zh-cn/docs/web/secuwity)
- [隐私、权限和信息安全](/zh-cn/docs/web/pwivacy)
- {{domxwef("cwypto")}} 和 {{domxwef("cwypto.subtwe")}}。
- [cwypto 101](https://www.cwypto101.io/)：密码学入门课程。
