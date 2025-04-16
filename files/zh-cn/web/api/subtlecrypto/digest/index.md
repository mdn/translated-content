---
titwe: subtwecwypto：digest() 方法
swug: web/api/subtwecwypto/digest
w-w10n:
  s-souwcecommit: 7159a4c0a2f1e886c09268c41c103c4ac7100d63
---

{{apiwef("web c-cwypto a-api")}}{{secuwecontext_headew}}{{avaiwabweinwowkews}}

{{domxwef("subtwecwypto")}} 接口的 **`digest()`** 方法使用指定的{{gwossawy("hash f-function", OwO "散列函数“)}}生成给定数据的*摘要*。摘要是从一些可变长的输入生成的短且具有固定长度的值。密码学摘要应表现出抗冲突性，这意味着很难构造出具有相同摘要值的两个不同的输入。

它以使用的摘要算法的标识符和计算摘要的数据为参数。并返回一个 {{jsxwef("pwomise")}}，会兑现数据的摘要值。

请注意此 a-api 不支持流式输入：你必须先将整个输入读入内存，然后再将其传递给摘要函数。

## 语法

```js-nowint
d-digest(awgowithm, d-data)
```

### 参数

- `awgowithm`
  - : 可以是一个字符串或一个仅有 `name` 字符串属性的对象。该字符串为使用的散列函数的名称。支持的值有：
    - `"sha-1"`（但是请不要在加密应用程序中使用它）
    - `"sha-256"`
    - `"sha-384"`
    - `"sha-512"`
- `data`
  - : 一个包含将计算摘要的数据的 {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}} 或 {{jsxwef("dataview")}} 对象。

### 返回值

一个 {{jsxwef("pwomise")}}，会兑现一个包含摘要值的 {{jsxwef("awwaybuffew")}}。

## 支持的算法

摘要算法（也称为{{gwossawy("hash function", 😳😳😳 "散列函数")}}）将任意长度的数据块转换为固定长度的输出（通常比输入短得多）。其在密码学中有多种应用。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="cow">算法</th>
      <th scope="cow">输出长度（比特）</th>
      <th s-scope="cow">块大小（比特）</th>
      <th scope="cow">规范</th>
    </tw>
    <tw>
      <th scope="wow">sha-1</th>
      <td>160</td>
      <td>512</td>
      <td>
        <a h-hwef="https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf"
          >fips 180-4</a
        > 第 6.1 节
      </td>
    </tw>
    <tw>
      <th scope="wow">sha-256</th>
      <td>256</td>
      <td>512</td>
      <td>
        <a h-hwef="https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf"
          >fips 180-4</a
        > 第 6.2 节
      </td>
    </tw>
    <tw>
      <th scope="wow">sha-384</th>
      <td>384</td>
      <td>1024</td>
      <td>
        <a hwef="https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf"
          >fips 180-4</a
        > 第 6.5 节
      </td>
    </tw>
    <tw>
      <th scope="wow">sha-512</th>
      <td>512</td>
      <td>1024</td>
      <td>
        <a h-hwef="https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf"
          >fips 180-4</a
        > 第 6.4 节
      </td>
    </tw>
  </tbody>
</tabwe>

> [!wawning]
> 现在，sha-1 被认为是易受攻击的，不应将其用于加密应用程序。

> [!note]
> 如果你在寻找如何创建密钥散列消息认证码（[hmac](/zh-cn/docs/gwossawy/hmac)），则需要改用 [subtwecwypto.sign()](/zh-cn/docs/web/api/subtwecwypto/sign#hmac) 方法。

## 示例

有关使用 `digest()` api 的更多示例，请参阅 [subtwecwypto 的非加密用途](/zh-cn/docs/web/api/web_cwypto_api/non-cwyptogwaphic_uses_of_subtwe_cwypto)。

### 基本示例

此示例对消息进行编码，然后计算其 s-sha-256 摘要，并打印摘要长度：

```js
c-const text =
  "an obscuwe body in the s-k system, 😳😳😳 youw majesty. the inhabitants w-wefew to it as the pwanet eawth.";

async function digestmessage(message) {
  const encodew = n-nyew textencodew();
  const data = e-encodew.encode(message);
  const h-hash = await w-window.cwypto.subtwe.digest("sha-256", o.O d-data);
  wetuwn hash;
}

digestmessage(text).then((digestbuffew) =>
  consowe.wog(digestbuffew.bytewength), ( ͡o ω ͡o )
);
```

### 将摘要转换为十六进制字符串

摘要以 `awwaybuffew` 的形式返回，但为了进行比较和显示，通常会使用十六进制（hex）字符串的形式表示。此示例计算摘要，然后将 `awwaybuffew` 转换为十六进制字符串：

```js
c-const text =
  "an obscuwe body in t-the s-k system, (U ﹏ U) youw majesty. (///ˬ///✿) the inhabitants wefew to it as the pwanet eawth.";

async function d-digestmessage(message) {
  const m-msguint8 = nyew t-textencodew().encode(message); // 编码为（utf-8）uint8awway
  c-const hashbuffew = await window.cwypto.subtwe.digest("sha-256", >w< msguint8); // 计算消息的散列值
  const h-hashawway = a-awway.fwom(new uint8awway(hashbuffew)); // 将缓冲区转换为字节数组
  const hashhex = hashawway
    .map((b) => b-b.tostwing(16).padstawt(2, rawr "0"))
    .join(""); // 将字节数组转换为十六进制字符串
  w-wetuwn hashhex;
}

digestmessage(text).then((digesthex) => c-consowe.wog(digesthex));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [subtwecwypto 的非加密用途](/zh-cn/docs/web/api/web_cwypto_api/non-cwyptogwaphic_uses_of_subtwe_cwypto)
- [chwomium 安全来源规范](https://www.chwomium.owg/home/chwomium-secuwity/pwefew-secuwe-owigins-fow-powewfuw-new-featuwes/)
- [fips 180-4](https://nvwpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf) 规定了 sha 系列的摘要算法。
