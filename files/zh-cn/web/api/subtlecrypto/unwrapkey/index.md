---
title: SubtleCrypto.unwrapKey()
slug: Web/API/SubtleCrypto/unwrapKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} 接口的 **`unwrapKey()`** 方法“解开密钥的包装”。这意味着它将一个已导出且加密（也被称为“包装”）的密钥作为输入。它会解密这个密钥然后导入它，返回一个可用于 [Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 {{domxref("CryptoKey")}} 对象。

与 [`SubtleCrypto.importKey()`](/zh-CN/docs/Web/API/SubtleCrypto/importKey) 一样，你需要指定密钥的[导入格式](/zh-CN/docs/Web/API/SubtleCrypto/importKey#supported_formats)及其他属性以导入详细信息（如是否可导出、可用于哪些操作等等）。

但因为 `unwrapKey()` 还需要解密导入的密钥，所以还需要传入解密时必须使用的密钥。这有时也被称为“解包密钥”（unwrapping key）。

`unwrapKey()` 的逆函数是 {{domxref("SubtleCrypto.wrapKey()")}}：`unwrapKey` 由解密 + 导入组成，而 `wrapKey` 由加密 + 导出组成。

## 语法

```js-nolint
unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgo, unwrappedKeyAlgo, extractable, keyUsages)
```

### 参数

- `format`
  - : 描述要解包的密钥的数据格式的字符串。它可以是以下值之一：
    - `raw`：[Raw](/zh-CN/docs/Web/API/SubtleCrypto/importKey#raw) 格式。
    - `pkcs8`：[PKCS #8](/zh-CN/docs/Web/API/SubtleCrypto/importKey#pkcs_8) 格式。
    - `spki`：[SubjectPublicKeyInfo](/zh-CN/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo) 格式。
    - `jwk`：[JSON Web Key](/zh-CN/docs/Web/API/SubtleCrypto/importKey#json_web_key) 格式。
- `wrappedKey`
  - : 一个包含给定格式的密钥的 {{jsxref("ArrayBuffer")}}。
- `unwrappingKey`
  - : 用于解密已包装的密钥的 {{domxref("CryptoKey")}}。此密钥必须设置了 `unwrapKey` 这一用途。
- `unwrapAlgo`
  - : 指定用于解密已包装的密钥的[算法](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#supported_algorithms)，以及其他要求的参数：
    - 要使用 [RSA-OAEP](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep)，请传入 [`RsaOaepParams`](/zh-CN/docs/Web/API/RsaOaepParams) 对象。
    - 要使用 [AES-CTR](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)，请传入 [`AesCtrParams`](/zh-CN/docs/Web/API/AesCtrParams) 对象。
    - 要使用 [AES-CBC](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)，请传入 [`AesCbcParams`](/zh-CN/docs/Web/API/AesCbcParams) 对象。
    - 要使用 [AES-GCM](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)，请传入 [`AesGcmParams`](/zh-CN/docs/Web/API/AesGcmParams) 对象。
    - 要使用 [AES-KW](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey#aes-kw)，请传入字符串 `"AES-KW"` 或形如 `{ "name": "AES-KW }` 的对象。
- `unwrappedKeyAlgo`
  - : 定义了要解包装的密钥类型，并提供额外的特定于算法的参数的对象。
    - 对于 [RSASSA-PKCS1-v1_5](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5)、[RSA-PSS](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsa-pss) 或 [RSA-OAEP](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep)：传递 [`RsaHashedImportParams`](/zh-CN/docs/Web/API/RsaHashedImportParams) 对象。
    - 对于 [ECDSA](/zh-CN/docs/Web/API/SubtleCrypto/sign#ecdsa) 或 [ECDH](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#ecdh)：传入 [`EcKeyImportParams`](/zh-CN/docs/Web/API/EcKeyImportParams) 对象。
    - 对于 [HMAC](/zh-CN/docs/Web/API/SubtleCrypto/sign#hmac)：传入 [`HmacImportParams`](/zh-CN/docs/Web/API/HmacImportParams) 对象。
    - 对于 [AES-CTR](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)、[AES-CBC](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)、[AES-GCM](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) 或 [AES-KW](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey#aes-kw)：传入标识算法的字符串，或一个 `{ "name": ALGORITHM }` 形式的对象，其中的 `ALGORITHM` 是算法的名称。
- `extractable`
  - : 一个布尔值，表示是否可以使用 [`SubtleCrypto.exportKey()`](/zh-CN/docs/Web/API/SubtleCrypto/exportKey) 过 [`SubtleCrypto.wrapKey()`](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey) 方法来导出密钥。
- `keyUsages`
  - : 一个[数组](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array)，表示生成出来的密钥可被用于做什么，数组元素可能的值有：
    - `encrypt`：密钥可用于[加密](/zh-CN/docs/Web/API/SubtleCrypto/encrypt)消息。
    - `decrypt`：密钥可用于[解密](/zh-CN/docs/Web/API/SubtleCrypto/decrypt)消息。
    - `sign`：密钥可用于对消息进行[签名](/zh-CN/docs/Web/API/SubtleCrypto/sign)。
    - `verify`：密钥可用于[验证](/zh-CN/docs/Web/API/SubtleCrypto/verify)签名。
    - `deriveKey`：密钥可用于[派生新的密钥](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey)。
    - `deriveBits`：密钥可用于[派生比特序列](/zh-CN/docs/Web/API/SubtleCrypto/deriveBits)。
    - `wrapKey`：密钥可用于[包装一个密钥](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey)。
    - `unwrapKey`：密钥可用于解开一个密钥的包装。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，会兑现为表示解包装后的密钥的 [`CryptoKey`](/zh-CN/docs/Web/API/CryptoKey) 对象。

### 异常

当发生以下几种异常时，promise 会被拒绝：

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 当解包密钥不是所给定的解包算法的密钥，或该密钥的用途（`keyUsages` 值）不包含 `unwrap` 时，会抛出此异常。
- `NotSupported` {{domxref("DOMException")}}
  - : 当尝试使用未知或不适用于加密/包装的算法时，会抛出此异常。
- `SyntaxError` {{domxref("DOMException")}}
  - : 当 `keyUsages` 为空，而解包后的密钥的类型为 `secret` 或 `private` 时，会抛出此异常。
- {{jsxref("TypeError")}}
  - : 当尝试使用无效格式时，会抛出此异常。

## 支持的算法

`unwrapKey()` 方法支持的算法与 [`wrapKey()`](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey#supported_algorithms) 方法所支持的相同。

## 示例

> **备注：** 你可以在 Github 上[尝试可用的示例](https://mdn.github.io/dom-examples/web-crypto/unwrap-key/index.html)。

### 解包装“raw”格式的密钥

在这个示例中，我们解包了一个 AES-GCM 对称加密密钥。密钥以“raw”格式导出，并使用 AES-KW 算法加密，加密密钥派生自密码。

要解包密钥，我们要求用户输入密码，并使用 PBKDF2 和盐来派生 AES-KW 解包密钥。解包使用的盐需要与用于派生原始 AES-KW 包装密钥的盐相同。

一旦我们有了解包密钥，我们就将它与已包装的密钥和其他的参数传入 `unwrapKey()`。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/unwrap-key/raw.js)

```js
/*
用于派生包装密钥的盐，
与用户提供的密码一起使用。
其必须与原先在派生密钥时使用的盐相同。
*/
const saltBytes = [
  89, 113, 135, 234, 168, 204, 21, 36, 55, 93, 1, 132, 242, 242, 192, 156,
];

/*
包装的密钥。
*/
const wrappedKeyBytes = [
  171, 223, 14, 36, 201, 233, 233, 120, 164, 68, 217, 192, 226, 80, 224, 39,
  199, 235, 239, 60, 212, 169, 100, 23, 61, 54, 244, 197, 160, 80, 109, 230,
  207, 225, 57, 197, 175, 71, 80, 209,
];

/*
将字节序列转换为 ArrayBuffer。
*/
function bytesToArrayBuffer(bytes) {
  const bytesAsArrayBuffer = new ArrayBuffer(bytes.length);
  const bytesUint8 = new Uint8Array(bytesAsArrayBuffer);
  bytesUint8.set(bytes);
  return bytesAsArrayBuffer;
}

/*
从用户输入获取一些密钥材料，用于派生密钥（deriveKey）方法。
密钥材料是一个由用户提供的密码。
*/
function getKeyMaterial() {
  let password = window.prompt("Enter your password");
  let enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
使用 PBKDF2 派生 AES-KW 密钥
*/
async function getUnwrappingKey() {
  // 1. 获得密钥材料（用户提供的密码）
  const keyMaterial = await getKeyMaterial();
  // 2. 初始化盐的参数
  // 盐必须与派生密钥时使用的相匹配。
  // 在这个示例中，它由常量“saltBytes”提供。
  const saltBuffer = bytesToArrayBuffer(saltBytes);
  // 3. 由密钥材料和盐派生密钥
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: saltBuffer,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-KW", length: 256 },
    true,
    ["wrapKey", "unwrapKey"],
  );
}

/*
从包含原始字节序列的 ArrayBuffer 解包装 AES 密钥。
以包含字节序列的数组为参数，返回一个 Promise，
会兑现为表示密钥的 CryptoKey。
*/
async function unwrapSecretKey(wrappedKey) {
  // 1. 获取解包密钥
  const unwrappingKey = await getUnwrappingKey();
  // 2. 初始化已包装的密钥
  const wrappedKeyBuffer = bytesToArrayBuffer(wrappedKey);
  // 3. 解开密钥的包装
  return window.crypto.subtle.unwrapKey(
    "raw", // 导入的格式
    wrappedKeyBuffer, // 表示要解包的密钥的 ArrayBuffer
    unwrappingKey, // 表示加密密钥时使用的 CryptoKey
    "AES-KW", // 加密密钥时使用的算法
    "AES-GCM", // 解包密钥使用的算法
    true, // 解包后的密钥的可导出性
    ["encrypt", "decrypt"], // 解包后的密钥的用途
  );
}
```

### 解包装“pkcs8”格式的密钥

在这个示例中，我们解包了 RSA-PSS 私有签名密钥。原密钥被导出为“pkcs8”格式，且使用 AES-GCM 算法加密，加密密钥派生自密码。

要解包密钥，我们要求用户输入密码，并使用 PBKDF2 和盐来派生 AES-GCM 解包密钥。解包使用的盐需要与用于派生原始 AES-GCM 包装密钥的盐相同。

一旦我们有了解包密钥，我们就将它与已包装的密钥和其他的参数传入 `unwrapKey()`。注意，使用 AES-GCM 时我们必须向 `unwrapKey()` 传入初始向量（iv）值，且其值必须与在对应的 `wrapKey()` 操作中使用的值相同。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/unwrap-key/pkcs8.js)

```js
/*
用于派生包装密钥的盐，
与用户提供的密码一起使用。
其必须与原先在派生密钥时使用的盐相同。
*/
const saltBytes = [
  180, 253, 62, 216, 47, 35, 90, 55, 218, 233, 103, 10, 172, 143, 161, 177,
];

/*
在解包装时用于解密的 IV 必须与原先在加密密钥时使用的 IV 相同。
*/
const ivBytes = [212, 187, 26, 247, 172, 51, 37, 151, 27, 177, 249, 142];

/*
已包装的密钥。
*/
const wrappedKeyBytes = [
  6, 155, 182, 208, 7, 141, 44, 18, 3, 151, 58, 126, 68, 100, 252, 225, 241, 11,
  25, 201, 153, 171, 102, 174, 150, 29, 62, 195, 110, 138, 106, 109, 14, 6, 108,
  148, 104, 221, 22, 93, 102, 221, 146, 25, 65, 112, 4, 140, 79, 194, 164, 163,
  156, 250, 108, 11, 14, 220, 78, 194, 161, 17, 14, 57, 121, 70, 13, 28, 220,
  210, 78, 32, 46, 217, 36, 165, 220, 170, 244, 152, 214, 150, 83, 2, 138, 128,
  11, 251, 227, 213, 72, 100, 158, 10, 162, 40, 195, 60, 248, 77, 37, 156, 34,
  10, 213, 171, 67, 147, 73, 231, 31, 63, 80, 176, 103, 206, 187, 164, 214, 250,
  49, 223, 185, 5, 48, 241, 17, 1, 253, 59, 185, 181, 209, 255, 42, 223, 175,
  90, 159, 174, 169, 205, 156, 120, 195, 1, 135, 165, 226, 46, 119, 27, 97, 183,
  23, 197, 227, 85, 138, 235, 79, 158, 167, 59, 62, 194, 34, 210, 214, 240, 215,
  101, 233, 63, 138, 53, 87, 253, 189, 27, 66, 150, 76, 242, 76, 102, 174, 179,
  163, 184, 205, 11, 161, 224, 19, 110, 34, 175, 192, 101, 117, 169, 86, 66, 56,
  241, 128, 13, 156, 165, 125, 139, 110, 138, 50, 108, 129, 251, 137, 26, 186,
  110, 117, 113, 207, 179, 59, 213, 18, 175, 14, 203, 192, 2, 97, 131, 125, 167,
  227, 182, 87, 72, 123, 54, 156, 60, 195, 88, 224, 96, 46, 126, 245, 251, 247,
  147, 110, 147, 173, 82, 106, 93, 210, 55, 71, 127, 133, 41, 37, 181, 17, 106,
  16, 158, 220, 136, 43, 75, 133, 96, 240, 151, 116, 40, 44, 254, 2, 32, 74,
  226, 193, 172, 48, 211, 71, 109, 163, 143, 30, 92, 28, 30, 183, 25, 16, 176,
  207, 77, 93, 139, 242, 114, 91, 218, 126, 123, 234, 18, 9, 245, 53, 46, 172,
  215, 62, 92, 249, 191, 17, 27, 0, 58, 151, 33, 23, 169, 93, 177, 253, 152,
  147, 198, 196, 226, 42, 202, 166, 99, 250, 127, 40, 221, 196, 121, 195, 198,
  235, 30, 159, 159, 95, 182, 107, 175, 137, 177, 49, 72, 63, 131, 162, 198,
  186, 22, 255, 230, 237, 195, 56, 147, 177, 101, 52, 227, 125, 32, 180, 242,
  47, 92, 212, 6, 148, 218, 107, 125, 137, 123, 15, 51, 107, 159, 228, 238, 212,
  60, 54, 184, 48, 110, 248, 252, 208, 46, 23, 149, 78, 169, 201, 68, 242, 193,
  251, 156, 227, 42, 90, 109, 102, 172, 61, 207, 124, 96, 98, 79, 37, 218, 16,
  212, 139, 162, 0, 183, 235, 171, 75, 18, 84, 160, 120, 173, 156, 187, 99, 24,
  58, 88, 213, 148, 24, 193, 111, 75, 169, 10, 158, 207, 148, 84, 249, 156, 248,
  19, 221, 2, 175, 1, 8, 74, 221, 212, 244, 123, 34, 223, 175, 54, 166, 101, 51,
  175, 141, 80, 87, 9, 146, 72, 223, 46, 251, 199, 192, 2, 22, 125, 16, 15, 99,
  26, 159, 165, 133, 172, 169, 26, 236, 44, 86, 182, 162, 81, 143, 249, 15, 207,
  12, 232, 15, 205, 199, 78, 133, 199, 19, 232, 183, 33, 183, 72, 117, 72, 27,
  43, 254, 13, 17, 252, 1, 143, 137, 154, 10, 4, 77, 85, 24, 85, 143, 200, 81,
  76, 171, 43, 124, 42, 191, 150, 70, 10, 90, 178, 198, 40, 233, 233, 225, 146,
  231, 209, 254, 2, 90, 216, 5, 97, 105, 204, 82, 88, 81, 99, 92, 159, 116, 192,
  223, 148, 252, 12, 24, 197, 211, 187, 212, 98, 252, 201, 154, 184, 65, 54, 47,
  13, 106, 151, 168, 208, 112, 212, 74, 204, 36, 233, 98, 104, 58, 103, 1, 194,
  13, 26, 109, 101, 60, 42, 3, 215, 20, 25, 99, 176, 63, 28, 112, 102, 121, 190,
  96, 198, 228, 196, 78, 38, 82, 37, 248, 42, 150, 115, 6, 10, 22, 101, 42, 237,
  175, 69, 232, 212, 231, 40, 193, 70, 211, 245, 106, 231, 175, 150, 88, 105,
  170, 139, 238, 196, 64, 218, 250, 47, 165, 22, 36, 196, 161, 30, 79, 175, 14,
  133, 88, 129, 182, 56, 140, 147, 168, 134, 91, 68, 172, 110, 195, 134, 156,
  68, 78, 249, 215, 68, 250, 11, 23, 70, 59, 156, 99, 75, 249, 159, 84, 16, 206,
  93, 16, 130, 34, 66, 210, 82, 252, 53, 251, 84, 59, 226, 212, 154, 15, 20,
  163, 58, 228, 109, 53, 214, 151, 237, 10, 169, 107, 180, 123, 174, 159, 182,
  8, 240, 115, 115, 220, 131, 128, 79, 80, 61, 133, 58, 24, 98, 193, 225, 56,
  36, 159, 254, 199, 49, 44, 160, 28, 81, 140, 163, 24, 143, 114, 31, 237, 235,
  250, 83, 72, 215, 44, 232, 182, 45, 39, 182, 193, 248, 65, 174, 186, 52, 219,
  30, 198, 48, 1, 134, 151, 81, 114, 38, 124, 7, 213, 205, 138, 28, 22, 216, 76,
  46, 224, 241, 88, 156, 7, 62, 23, 104, 34, 54, 25, 156, 93, 212, 133, 182, 61,
  93, 255, 195, 68, 244, 234, 53, 132, 151, 140, 72, 146, 127, 113, 227, 34,
  243, 218, 222, 47, 218, 113, 18, 173, 203, 158, 133, 90, 156, 214, 77, 20,
  113, 1, 231, 164, 52, 55, 69, 132, 24, 68, 131, 212, 7, 153, 34, 179, 113,
  156, 81, 127, 83, 57, 29, 195, 90, 64, 211, 115, 202, 188, 5, 42, 188, 142,
  203, 109, 231, 53, 206, 72, 220, 90, 23, 12, 1, 178, 122, 60, 221, 68, 6, 14,
  154, 108, 203, 171, 142, 159, 249, 13, 55, 52, 110, 214, 33, 147, 164, 181,
  50, 79, 164, 200, 83, 251, 40, 105, 223, 50, 0, 115, 240, 146, 23, 122, 80,
  204, 169, 38, 198, 154, 31, 29, 23, 236, 39, 35, 131, 147, 242, 163, 138, 158,
  236, 117, 7, 108, 33, 132, 98, 50, 111, 46, 146, 251, 82, 34, 85, 5, 130, 237,
  67, 40, 170, 235, 124, 92, 66, 71, 239, 12, 97, 136, 251, 1, 206, 13, 51, 232,
  92, 46, 35, 95, 5, 123, 24, 183, 99, 243, 124, 75, 155, 89, 66, 54, 72, 17,
  255, 99, 137, 199, 232, 204, 9, 248, 78, 35, 218, 136, 117, 239, 102, 240,
  187, 40, 89, 244, 140, 109, 229, 120, 116, 54, 207, 171, 11, 248, 190, 199,
  81, 53, 109, 8, 188, 51, 93, 165, 34, 255, 165, 191, 198, 130, 220, 41, 192,
  166, 194, 69, 104, 124, 158, 122, 236, 176, 24, 60, 87, 240, 42, 158, 143, 37,
  143, 208, 155, 249, 230, 21, 4, 230, 56, 194, 62, 235, 132, 14, 50, 180, 216,
  134, 28, 25, 159, 64, 199, 161, 236, 60, 233, 160, 172, 68, 169, 2, 5, 252,
  190, 20, 54, 115, 248, 63, 93, 107, 156, 8, 96, 85, 32, 189, 118, 66, 114,
  126, 64, 203, 97, 235, 13, 18, 102, 192, 51, 59, 5, 122, 171, 96, 129, 40, 32,
  154, 4, 191, 234, 75, 184, 112, 201, 244, 110, 50, 216, 44, 88, 139, 175, 58,
  112, 7, 52, 25, 64, 112, 40, 148, 187, 39, 234, 96, 151, 16, 158, 114, 113,
  109, 164, 47, 108, 94, 148, 35, 232, 221, 33, 110, 126, 170, 25, 234, 45, 165,
  180, 210, 193, 120, 247, 155, 127,
];

/*
解包装的签名密钥。
*/
let signingKey;

const signButton = document.querySelector(".pkcs8 .sign-button");

/*
将字节数组转换为 ArrayBuffer。
*/
function bytesToArrayBuffer(bytes) {
  const bytesAsArrayBuffer = new ArrayBuffer(bytes.length);
  const bytesUint8 = new Uint8Array(bytesAsArrayBuffer);
  bytesUint8.set(bytes);
  return bytesAsArrayBuffer;
}

/*
从用户输入获取一些密钥材料，用于派生密钥（deriveKey）方法。
密钥材料是一个由用户提供的密码。
*/
function getKeyMaterial() {
  let password = window.prompt("Enter your password");
  let enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
使用 PBKDF2 派生 AES-GCM 密钥。
*/
async function getUnwrappingKey() {
  // 1. 获得密钥材料（用户提供的密码）
  const keyMaterial = await getKeyMaterial();
  // 2. 初始化盐的参数
  // 盐必须与派生密钥时使用的相匹配。
  // 在这个示例中，它由常量“saltBytes”提供。
  const saltBuffer = bytesToArrayBuffer(saltBytes);
  // 3. 由密钥材料和盐派生密钥
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: saltBuffer,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["wrapKey", "unwrapKey"],
  );
}

/*
从包含原始字节序列的 ArrayBuffer 解包装 RSA-PSS 私有签名密钥。
以包含字节序列的数组为参数，返回一个 Promise，
会兑现为表示私有密钥的 CryptoKey。
*/
async function unwrapPrivateKey(wrappedKey) {
  // 1. 获取解包密钥
  const unwrappingKey = await getUnwrappingKey();
  // 2. 初始化已包装的密钥
  const wrappedKeyBuffer = bytesToArrayBuffer(wrappedKey);
  // 3. 初始化 iv
  const ivBuffer = bytesToArrayBuffer(ivBytes);
  // 4. 解开密钥的包装
  return window.crypto.subtle.unwrapKey(
    "pkcs8", // 导入的格式
    wrappedKeyBuffer, // 表示要解包的密钥的 ArrayBuffer
    unwrappingKey, // 表示加密密钥时使用的 CryptoKey
    {
      // 用于加密密钥的算法参数
      name: "AES-GCM",
      iv: ivBuffer,
    },
    {
      // 用于解开密钥包装的算法参数
      name: "RSA-PSS",
      hash: "SHA-256",
    },
    true, // 解包后的密钥的可导出性
    ["sign"], // 解包后的密钥的用途
  );
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`SubtleCrypto.importKey()`](/zh-CN/docs/Web/API/SubtleCrypto/importKey)
- [PKCS #8 格式](https://datatracker.ietf.org/doc/html/rfc5208)。
- [SubjectPublicKeyInfo 格式](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1)。
- [JSON Web Key 格式](https://datatracker.ietf.org/doc/html/rfc7517)。
- [AES-KW 规范](https://datatracker.ietf.org/doc/html/rfc3394)。
