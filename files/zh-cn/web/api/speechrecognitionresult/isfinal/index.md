---
title: SpeechRecognitionResult.isFinal
slug: Web/API/SpeechRecognitionResult/isFinal
---

{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

{{domxref("SpeechRecognitionResult")}} 接口的 **`isFinal`** 只读属性是一个布尔值，如果值是`true`, 则表示这是最后一次返回的结果 (语音识别结束)。如果为`false`, 表示识别尚未结束，这只是一个临时的数据，有可能会在稍后更新。

## 语法

```plain
var myIsFinal = speechRecognitionResultInstance.isFinal;
```

### 返回值

{{domxref("Boolean")}}

## 示例

```js
recognition.onresult = function (event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // SpeechRecognitionResultList 对象包含 SpeechRecognitionResult 对象。
  // 它有一个 getter，所以它可以像数组一样被访问
  // 第一个 [0] 返回 SpeechRecognitionResult 的第 0 个下标。
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // 这些也有 getter，因此可以像数组一样访问它们。
  // 第二个 [0] 返回 SpeechRecognitionAlternative 所在的第 0 个下标。
  // 然后我们返回的记录属性 SpeechRecognitionAlternative 对象
  var color = event.results[0][0].transcript;
  diagnostic.textContent = "Result received: " + color + ".";
  bg.style.backgroundColor = color;

  console.log(event.results[0].isFinal);
};
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Web Speech API](/zh-CN/docs/Web/API/Web_Speech_API)
