---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

**`Intl.Segmenter`** 对象支持语言敏感的文本分割，允许你将一个字符串分割成有意义的片段（字、词、句）。

{{InteractiveExample("JavaScript 演示：Intl.Segmenter")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const iterator = segmenterFr.segment(string)[Symbol.iterator]();

console.log(iterator.next().value.segment);
// 期望输出："Que"

console.log(iterator.next().value.segment);
// 期望输出：" "
```

## 构造函数

- {{jsxref("Intl/Segmenter/Segmenter", "Intl.Segmenter()")}}
  - : 创建一个新的 `Intl.Segmenter` 对象。

## 静态方法

- {{jsxref("Intl/Segmenter/supportedLocalesOf", "Intl.Segmenter.supportedLocalesOf()")}}
  - : 返回一个数组，其中包括了传入参数中的受支持的语言，而不必受限于运行时的默认区域设置。

## 实例属性

以下属性定义在 `Intl.Segmenter.prototype` 上，由所有 `Intl.Segmenter` 实例共享。

- {{jsxref("Object/constructor", "Intl.Segmenter.prototype.constructor")}}
  - : 创建该实例对象的构造函数。对于 `Intl.Segmenter` 实例，初始值为 {{jsxref("Intl/Segmenter/Segmenter", "Intl.Segmenter")}} 构造函数。
- `Intl.Segmenter.prototype[Symbol.toStringTag]`
  - : [`[Symbol.toStringTag]`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 属性的初始值为字符串 `"Intl.Segmenter"`。该属性在 {{jsxref("Object.prototype.toString()")}} 中使用。

## 实例方法

- {{jsxref("Intl/Segmenter/resolvedOptions", "Intl.Segmenter.prototype.resolvedOptions()")}}
  - : 返回一个新的对象，对象的属性反映了这个 `Intl.Segmenter` 实例初始化期间计算的区域设置和粒度选项。
- {{jsxref("Intl/Segmenter/segment", "Intl.Segmenter.prototype.segment()")}}
  - : 返回一个新的可迭代的 [`Segments`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) 实例，包含了根据当前 `Intl.Segmenter` 实例的区域设置和粒度选项生成的字符串片段。

## 示例

### 基础用法及与 String.prototype.split() 的区别

如果我们使用 [`String.prototype.split(" ")`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/split) 来将一段文本分割成词汇，如果这段文本的语言并不是使用空格来分割词汇的话，那我们就不能保证得到的是正确的结果（例如日语、中文、泰语、老挝语、高棉语、缅甸语等语言）。

```js example-bad
const str = "吾輩は猫である。名前はたぬき。";
console.table(str.split(" "));
// ['吾輩は猫である。名前はたぬき。']
// 这两个句子并没有得到正确的分割。
```

```js example-good
const str = "吾輩は猫である。名前はたぬき。";
const segmenterJa = new Intl.Segmenter("ja-JP", { granularity: "word" });

const segments = segmenterJa.segment(str);
console.table(Array.from(segments));
// [{segment: '吾輩', index: 0, input: '吾輩は猫である。名前はたぬき。', isWordLike: true},
// 等等
// ]
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [FormatJS 中 `Intl.Segmenter` 的 polyfill](https://formatjs.github.io/docs/polyfills/intl-segmenter/)
- {{jsxref("Intl")}}
