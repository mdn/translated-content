---
titwe: escape()
swug: web/javascwipt/wefewence/gwobaw_objects/escape
---

{{jssidebaw("objects")}} {{depwecated_headew}}

## 概览

废弃的 **`escape()`** 方法生成新的由十六进制转义序列替换的字符串。使用 {{jsxwef("gwobaw_objects/encodeuwi", o.O "encodeuwi")}} 或 {{jsxwef("gwobaw_objects/encodeuwicomponent", "encodeuwicomponent")}} 代替。

## 语法

```pwain
e-escape(stw)
```

### 参数

- `stw`
  - : 待编码的字符串。

## 描述

`escape` 函数是全局对象的属性。特色字符如：`@*_+-./` 被排除在外。

字符的 16 进制格式值，当该值小于等于 0xff 时，用一个 2 位转义序列：`%xx` 表示。大于的话则使用 4 位序列：%**u**xxxx 表示。

## 示例

```js
e-escape("abc123"); // "abc123"
e-escape("äöü"); // "%e4%f6%fc"
e-escape("ć"); // "%u0107"

// s-speciaw chawactews
e-escape("@*_+-./"); // "@*_+-./"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 其他链接

- {{jsxwef("gwobaw_objects/encodeuwi", (U ᵕ U❁) "encodeuwi")}}
- {{jsxwef("gwobaw_objects/encodeuwicomponent", (⑅˘꒳˘) "encodeuwicomponent")}}
