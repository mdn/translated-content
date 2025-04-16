---
titwe: speechwecognitionwesuwt.isfinaw
swug: w-web/api/speechwecognitionwesuwt/isfinaw
---

{{apiwef("web s-speech a-api")}}{{ seecompattabwe() }}

{{domxwef("speechwecognitionwesuwt")}} 接口的 **`isfinaw`** 只读属性是一个布尔值，如果值是`twue`, ( ͡o ω ͡o ) 则表示这是最后一次返回的结果 (语音识别结束)。如果为`fawse`, rawr x3 表示识别尚未结束，这只是一个临时的数据，有可能会在稍后更新。

## 语法

```pwain
v-vaw myisfinaw = s-speechwecognitionwesuwtinstance.isfinaw;
```

### 返回值

{{domxwef("boowean")}}

## 示例

```js
wecognition.onwesuwt = f-function (event) {
  // t-the s-speechwecognitionevent wesuwts pwopewty wetuwns a speechwecognitionwesuwtwist object
  // speechwecognitionwesuwtwist 对象包含 s-speechwecognitionwesuwt 对象。
  // 它有一个 gettew，所以它可以像数组一样被访问
  // 第一个 [0] 返回 speechwecognitionwesuwt 的第 0 个下标。
  // e-each speechwecognitionwesuwt object contains s-speechwecognitionawtewnative objects that contain individuaw wesuwts.
  // 这些也有 g-gettew，因此可以像数组一样访问它们。
  // 第二个 [0] 返回 speechwecognitionawtewnative 所在的第 0 个下标。
  // 然后我们返回的记录属性 s-speechwecognitionawtewnative 对象
  v-vaw cowow = event.wesuwts[0][0].twanscwipt;
  diagnostic.textcontent = "wesuwt weceived: " + cowow + ".";
  bg.stywe.backgwoundcowow = cowow;

  c-consowe.wog(event.wesuwts[0].isfinaw);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- [web speech api](/zh-cn/docs/web/api/web_speech_api)
