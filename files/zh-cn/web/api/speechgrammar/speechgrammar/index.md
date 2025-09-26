---
title: SpeechGrammar：SpeechGrammar() 构造函数
slug: Web/API/SpeechGrammar/SpeechGrammar
l10n:
  sourceCommit: 706cbf21987296c604cc96b7f95095ed7aba6bb8
---

{{APIRef("Web Speech API")}}{{Non-standard_Header}}{{deprecated_header}}

{{domxref("SpeechGrammar")}} 接口的 **`SpeechGrammar()`** 构造函数创建一个新的 `SpeechGrammar` 对象实例。

## 语法

```js-nolint
new SpeechGrammar()
```

### 参数

无。

## 示例

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

const newGrammar = new SpeechGrammar();
newGrammar.src =
  "#JSGF V1.0; grammar names; public <name> = chris | kirsty | mike;";
speechRecognitionList[1] = newGrammar; // 应将新的 SpeechGrammar 对象添加到列表中。
```

## 规范

此 API 没有官方的 W3C 或 WHATWG 规范。

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API)
