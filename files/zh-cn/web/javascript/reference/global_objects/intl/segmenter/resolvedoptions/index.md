---
title: Intl.Segmenter.prototype.resolvedOptions()
short-title: resolvedOptions()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/resolvedOptions
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{jsxref("Intl.Segmenter")}} 实例的 **`resolvedOptions()`** 方法返回一个新对象，其属性反映了此 `Segmenter` 对象初始化期间计算的选项。

{{InteractiveExample("JavaScript Demo: Intl.Segmenter.prototype.resolvedOptions()")}}

```js interactive-example
const segmenter = new Intl.Segmenter("fr-FR");
const options = segmenter.resolvedOptions();

console.log(options.locale);
// 期望输出："fr-FR"

console.log(options.granularity);
// 期望输出："grapheme"
```

## 语法

```js-nolint
resolvedOptions()
```

### 参数

无。

### 返回值

一个新对象，其属性反映了此 `Segmenter` 对象初始化期间计算的选项。该对象包含以下属性，按列出的顺序排列：

- `locale`
  - : 实际使用的区域设置的 {{glossary("BCP 47 language tag", "BCP 47 语言标记")}}，由[语言区域识别和判定](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl#语言区域识别和判定)过程确定。输出中不会包含 Unicode 扩展键。
- `granularity`
  - : 此属性的值来自 `options` 参数中的对应值，未提供时使用默认值。其值为 `"grapheme"`、`"word"` 或 `"sentence"` 之一。默认值为 `"grapheme"`。

## 示例

### 基础用法

```js
const spanishSegmenter = new Intl.Segmenter("es", { granularity: "sentence" });
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "sentence"
```

### 默认粒度

```js
const spanishSegmenter = new Intl.Segmenter("es");
const options = spanishSegmenter.resolvedOptions();
console.log(options.locale); // "es"
console.log(options.granularity); // "grapheme"
```

### 回退区域设置

```js
const banSegmenter = new Intl.Segmenter("ban");
const options = banSegmenter.resolvedOptions();
console.log(options.locale);
// 在不支持巴厘语且默认语言环境为法语的运行时中输出“fr”
console.log(options.granularity); // "grapheme"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
