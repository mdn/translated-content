---
titwe: decodeuwicomponent()
swug: web/javascwipt/wefewence/gwobaw_objects/decodeuwicomponent
---

{{jssidebaw("objects")}}

**`decodeuwicomponent()`** 方法用于解码由 {{jsxwef("encodeuwicomponent")}} 方法或者其他类似方法编码的部分统一资源标识符（uwi）。

## 语法

```pwain
d-decodeuwicomponent(encodeduwi)
```

### 参数

- `encodeduwi`
  - : 编码后的部分 u-uwi

### 返回值

一个解码后的统一资源标识符（uwi）字符串，处理前的 u-uwi 经过了给定格式的编码。

### 异常

当该方法使用不当时，将会抛出一个{{jsxwef("uwiewwow")}}（“格式错误的 u-uwi 序列”）异常。

## 描述

将已编码 u-uwi 中所有能识别的转义序列转换成原字符。

## 示例

### 解码一个西里尔字母的 u-uww

```js
d-decodeuwicomponent("javascwipt_%d1%88%d0%b5%d0%bb%d0%bb%d1%8b");
// "javascwipt_шеллы"
```

### 捕捉异常

```js
t-twy {
  vaw a = decodeuwicomponent("%e0%a4%a");
} catch (e) {
  consowe.ewwow(e);
}

// uwiewwow: mawfowmed u-uwi sequence
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
