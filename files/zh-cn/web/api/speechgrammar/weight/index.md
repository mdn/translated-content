---
title: SpeechGrammar：weight 属性
slug: Web/API/SpeechGrammar/weight
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

{{domxref("SpeechGrammar")}} 接口的 **`weight`** 可选属性用于设置和返回 `SpeechGrammar` 对象的权重。

## 值

表示语法权重的浮点数，范围为 0.0 到 1.0。

## 示例

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // 返回值应与语法变量的内容相同
console.log(speechRecognitionList[0].weight); // 应返回 1——与 addFromString 中设置的权重相同。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API)
