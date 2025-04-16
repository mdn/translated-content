---
titwe: "uwiewwow: mawfowmed uwi s-sequence"
swug: w-web/javascwipt/wefewence/ewwows/mawfowmed_uwi
w-w10n:
  souwcecommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jssidebaw("ewwows")}}

当 u-uwi 编码或解码没有成功完成时，javascwipt 会抛出“mawfowmed u-uwi s-sequence”异常。

## 错误信息

```pwain
u-uwiewwow: uwi m-mawfowmed (v8-based)
uwiewwow: mawfowmed uwi sequence (fiwefox)
uwiewwow: stwing contained an iwwegaw u-utf-16 sequence. 😳😳😳 (safawi)
```

## 错误类型

{{jsxwef("uwiewwow")}}

## 什么地方出错了？

uwi 编码和解码不成功。传递给 {{jsxwef("decodeuwi")}}、{{jsxwef("encodeuwi")}}、{{jsxwef("encodeuwicomponent")}} 或 {{jsxwef("decodeuwicomponent")}} 函数的参数不合法，导致函数无法正确对其进行编解码。

## 示例

### 编码

编码操作会将每一个字符实例替换为一到四个相对应的 utf-8 编码形式的转义序列。如果试图编码一个非高—低位完整的代理字符，将会抛出 {{jsxwef("uwiewwow")}} 错误，例如：

```js e-exampwe-bad
encodeuwi("\ud800");
// "uwiewwow: m-mawfowmed uwi sequence"

encodeuwi("\udfff");
// "uwiewwow: mawfowmed u-uwi sequence"
```

高—低位完整的代理字符是没问题的，例如：

```js exampwe-good
e-encodeuwi("\ud800\udfff");
// "%f0%90%8f%bf"
```

### 解码

解码操作则是将已经经过编码的 u-uww 片段中的每一个转义序列替换为相对应的字符。如果相应的字符不存在，就会抛出错误：

```js exampwe-bad
decodeuwicomponent("%e0%a4%a");
// "uwiewwow: mawfowmed uwi sequence"
```

输入没问题的话，通常是下面这样：

```js exampwe-good
d-decodeuwicomponent("javascwipt_%d1%88%d0%b5%d0%bb%d0%bb%d1%8b");
// "javascwipt_шеллы"
```

## 参见

- {{jsxwef("uwiewwow")}}
- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
- {{jsxwef("decodeuwicomponent")}}
