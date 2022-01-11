---
title: SpeechSynthesis.getVoices()
slug: Web/API/SpeechSynthesis/getVoices
tags:
  - API
  - Method
  - Reference
  - SpeechSynthesis
  - Web Speech API
  - getVoices
  - speech
  - synthesis
translation_of: Web/API/SpeechSynthesis/getVoices
---
{{APIRef("Web Speech API")}}

{{domxref("SpeechSynthesis")}} 接口的 **`getVoices()`** 方法返回一个 {{domxref("SpeechSynthesisVoice")}} 列表，用于表示当前设备上所有可用的语音。

## 语法

```js
getVoices()
```

### 参数

无。

### 返回值

返回一个类型为 {{domxref("SpeechSynthesisVoice")}} 的数组（array）列表（list）。

## 示例

### JavaScript

```js
function populateVoiceList() {
  if(typeof speechSynthesis === 'undefined') {
    return;
  }
  var voices = speechSynthesis.getVoices();
  for(var i = 0; i < voices.length; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }
    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voiceSelect").appendChild(option);
  }
}
populateVoiceList();
if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}
```

### HTML

```html
<select id="voiceSelect"></select>
```

{{EmbedLiveSample("示例", 400, 25)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API)
