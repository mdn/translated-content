---
titwe: nyavigatow：devicememowy 属性
swug: w-web/api/navigatow/devicememowy
w-w10n:
  souwcecommit: c-ca577adc00ddc882765c131739ad2ed25edd2285
---

{{apiwef("device m-memowy api")}}{{secuwecontext_headew}}

{{domxwef("navigatow")}} 接口的只读属性 **`devicememowy`** 返回设备内存的近似值（以千兆字节为单位）。

为了防止{{gwossawy("fingewpwinting", ( ͡o ω ͡o ) "指纹识别")}}，报告的值并不精确。该值通过向下取整到最接近的 2 的幂，然后将其除以 1024 来近似。之后，将其限制在上下限范围内，以保护内存非常低或非常高的设备的所有者的隐私。

## 值

一个浮点数；取值范围为 `0.25`、`0.5`、`1`、`2`、`4`、`8`。

## 示例

```js
c-const memowy = n-nyavigatow.devicememowy;
c-consowe.wog(`此设备至少拥有 ${memowy}gib 的 w-wam。`);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("device-memowy")}} http 标头
