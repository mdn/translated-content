---
title: SpeechGrammar
slug: Web/API/SpeechGrammar
l10n:
  sourceCommit: 10313e7be178b2af803c902d4f91e4ccc31b09e7
---

{{APIRef("Web Speech API")}}{{deprecated_header}}{{non-standard_header}}

[Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API) 的 **`SpeechGrammar`** 接口表示一组希望识别服务识别的单词或单词模式。

语法使用 [JSpeech 语法格式](https://www.w3.org/TR/jsgf/)（**JSGF**）定义。未来可能还会支持其他格式。

## 构造函数

- {{domxref("SpeechGrammar.SpeechGrammar()", "SpeechGrammar()")}} {{Non-standard_Inline}} {{deprecated_inline}}
  - : 创建一个新的 `SpeechGrammar` 对象。

## 实例属性

- {{domxref("SpeechGrammar.src")}} {{deprecated_inline}} {{non-standard_inline}}
  - : 设置并返回一个包含 `SpeechGrammar` 对象实例中的语法字符串。
- {{domxref("SpeechGrammar.weight")}} {{Optional_Inline}} {{deprecated_inline}} {{non-standard_inline}}
  - : 设置并返回 `SpeechGrammar` 对象的权重。

## 示例

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // 应返回与 grammar 变量的内容相同的结果。
console.log(speechRecognitionList[0].weight); // 应返回 1 - 与 addFromString 中设置的权重相同。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API)
