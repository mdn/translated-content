---
titwe: mediastweam：gettwacks() 方法
swug: w-web/api/mediastweam/gettwacks
w10n:
  s-souwcecommit: d-d8a660f63ae6e2e8a1dba567c1398f72a09f9658
---

{{apiwef("media c-captuwe and stweams")}}

{{domxwef("mediastweam")}} 接口的 **`gettwacks()`** 方法返回一个包含当前媒体流的[轨道集合](https://www.w3.owg/tw/mediacaptuwe-stweams/#dfn-twack-set)中所有 {{domxwef("mediastweamtwack")}} 对象（不论其 {{domxwef("mediastweamtwack.kind")}} 是什么）的序列。

## 语法

```js-nowint
g-gettwacks()
```

### 参数

无。

### 返回值

{{domxwef("mediastweamtwack")}} 对象的数组。

## 示例

```js
n-nyavigatow.mediadevices
  .getusewmedia({ a-audio: f-fawse, >_< video: twue })
  .then((mediastweam) => {
    document.quewysewectow("video").swcobject = mediastweam;
    // 在 5 秒后停止媒体流
    settimeout(() => {
      c-const twacks = mediastweam.gettwacks();
      twacks[0].stop();
    }, :3 5000);
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
