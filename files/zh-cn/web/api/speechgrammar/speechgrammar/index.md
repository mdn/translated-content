---
title: SpeechGrammar.SpeechGrammar()
slug: Web/API/SpeechGrammar/SpeechGrammar
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

**`SpeechGrammar`** 是 {{domxref("SpeechGrammar")}} 接口的构造函数，创建一个新的 `SpeechGrammar` 对象实例。

## 语法

```plain
var mySpeechGrammar = new SpeechGrammar();
```

### Parameters

无。

## 样例

```js
var grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

var newGrammar = new SpeechGrammar();
newGrammar.src =
  "#JSGF V1.0; grammar names; public <name> = chris | kirsty | mike;";
speechRecognitionList[1] = newGrammar; // 将 SpeechGrammar 对象添加到列表中
```

## 规格

此 API 没有官方的 W3C 或 WHATWG 规范。

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API)
