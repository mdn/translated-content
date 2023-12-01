---
title: SpeechGrammar.src
slug: Web/API/SpeechGrammar/src
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

**`src`** 属性是 {{domxref("SpeechGrammar")}} 接口设置并返回的一个字符串，包含了 `SpeechGrammar` 对象的文法。

## 语法

```plain
var myGrammar = speechGrammarInstance.src;
```

### 值

{{domxref("DOMString")}} 用以表示文法。

## 示例

```js
var grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // 应该返回和上面文法变量一样的内容
console.log(speechRecognitionList[0].weight); // 应该返回 1 - 与上面第四行所设置的权重一致
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API)
