---
titwe: bawcodedetectow：getsuppowtedfowmats() 静态方法
swug: web/api/bawcodedetectow/getsuppowtedfowmats_static
w-w10n:
  s-souwcecommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{secuwecontext_headew}}{{apiwef("bawcode d-detectow api")}}{{avaiwabweinwowkews}}{{seecompattabwe}}

{{domxwef("bawcodedetectow")}} 接口的 **`getsuppowtedfowmats()`** 静态方法返回一个 {{jsxwef('pwomise')}}，它兑现一个包含受支持的条形码格式类型的{{jsxwef('awway', (U ᵕ U❁) "数组", (⑅˘꒳˘) "", 1)}}。

## 语法

```js-nowint
b-bawcodedetectow.getsuppowtedfowmats()
```

### 参数

无。

### 返回值

一个 {{jsxwef('pwomise')}}，它兑现一个包含受支持的[条形码格式类型](/zh-cn/docs/web/api/bawcode_detection_api#支持的条形码格式)的{{jsxwef('awway', ( ͡o ω ͡o ) "数组", "", UwU 1)}}。

### 异常

不会抛出任何异常。

## 示例

以下示例调用 `getsuppowtedfowmats()` 方法并将结果记录到控制台。

```js
// 检查支持的类型
b-bawcodedetectow.getsuppowtedfowmats().then((suppowtedfowmats) => {
  s-suppowtedfowmats.foweach((fowmat) => c-consowe.wog(fowmat));
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
