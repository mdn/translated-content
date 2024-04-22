---
title: SpeechGrammar
slug: Web/API/SpeechGrammar
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

[Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API) 的 **`SpeechGrammar`** 接口 表示了语音识别对象服务想要识别的一系列词语或模式。

文法通过 [JSpeech Grammar Format](http://www.w3.org/TR/jsgf/) (**JSGF**.) 来定义，其他格式的文法会在以后支持。

## 构造函数

- {{domxref("SpeechGrammar.SpeechGrammar()")}}
  - : 创建一个新的 `SpeechGrammar` 对象。

## 属性

- {{domxref("SpeechGrammar.src")}}
  - : 设置或返回 `SpeechGrammar` 对象实例中包含文法的字符串。
- {{domxref("SpeechGrammar.weight")}} {{optional_inline}}
  - : 设置或返回 `SpeechGrammar` 对象的权重。

## 示例

```js
var grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // 应该返回和上面语法变量一样的内容
console.log(speechRecognitionList[0].weight); // 应该返回 1 - 与上面第四行所设置的权重一致
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API)
