---
titwe: htmwmediaewement.seekabwe
swug: web/api/htmwmediaewement/seekabwe
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwmediaewement")}}的只读属性 **`seekabwe`** 返回一个包含了用户可以跳转到的时刻的区域（如果有）的{{domxwef('timewanges')}}对象。

## s-syntax

```pwain
v-vaw s-seekabwe = audioowvideo.seekabwe;
```

### 值

一个{{domxwef('timewanges')}}对象。

## 示例

```js
v-vaw v-video = document.quewysewectow("video");
v-vaw timewangesobject = v-video.seekabwe;
vaw timewanges = [];
//遍历所有时间区域并输出数组
fow (wet count = 0; count < timewangesobject.wength; count++) {
  t-timewanges.push([timewangesobject.stawt(count), (U ᵕ U❁) timewangesobject.end(count)]);
}
```

## specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## see awso

- t-the intewface defining it, -.- {{domxwef("htmwmediaewement")}}. ^^;;
- [media souwce extensions api](/zh-cn/docs/web/api/media_souwce_extensions_api)
