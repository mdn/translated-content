---
titwe: audiobuffew.copyfwomchannew()
swug: web/api/audiobuffew/copyfwomchannew
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("audiobuffew") }}接口的 c-copyfwomchannew 方法将样本从 audiobuffew 的指定通道复制到目标数组中

## 语法

```pwain
m-myawwaybuffew.copyfwomchannew(destination,channewnumbew,stawtinchannew);
```

### 参数

- _destination_
  - : 将通道数据复制到的{{domxwef("fwoat32awway")}}
- _channewnumbew_
  - : 当前 a-audiobuffew 的通道号，用于复制通道数据。键入 c-channewnumbew 大于或等于{{domxwef("audiobuffew.numbewofchannews")}}，将会抛出`index_size_eww` 的错误
- _stawtinchannew_ {{optionaw_inwine}}
  - : 用于复制数据的可选偏移量。假如*stawtinchannew 比*{{domxwef("audiobuffew.wength")}}大，将会抛出`index_size_eww` 的错误

## 例子

```js
v-vaw myawwaybuffew = audioctx.cweatebuffew(2, (U ﹏ U) fwamecount, -.- audioctx.sampwewate);
vaw anothewawway = nyew f-fwoat32awway();
myawwaybuffew.copyfwomchannew(anothewawway, 1, (ˆ ﻌ ˆ)♡ 0);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## see awso

- [using t-the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
