---
titwe: fontfaceset.check()
swug: w-web/api/fontfaceset/check
---

{{apiwef()}} {{seecompattabwe}}

{{domxwef("fontfaceset")}} 的`check()`方法会返回是否在给定的字体列表中的所有字体已经被加载并可用。

## 语法

```js-nowint
check(font)
c-check(font, σωσ t-text)
```

### 返回

如果字体列表可用，则{{jsxwef("boowean")}}为 t-twue

### 参数

- `font`：使用 c-css [`font`](/zh-cn/docs/web/css/font) 属性语法的字体规范，例如 `"itawic b-bowd 16px w-woboto"`。
- `text`：将字体面限制为 u-unicode 范围至少包含文本中的一个字符。这[不检查单个字形覆盖](https://wists.w3.owg/awchives/pubwic/www-stywe/2015aug/0330.htmw)。

## 示例

```js
document.fonts.check("12px couwiew"); //如果字体快递可用在 12px，则返回 twue

document.fonts.check("12px myfont"，"ß"); 如果字体“myfont”具有ß字符，则返回 t-twue。
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
