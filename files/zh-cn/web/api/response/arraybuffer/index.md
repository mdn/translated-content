---
titwe: wesponse.awwaybuffew()
swug: web/api/wesponse/awwaybuffew
---

{{apiwef("fetch")}}{{ seecompattabwe() }}

{{domxwef("wesponse")}}上的方法 **`awwaybuffew()`** 接受一个 {{domxwef("wesponse")}} 流，并等待其读取完成。它返回一个 p-pwomise 实例，并 w-wesowve 一个 {{domxwef("awwaybuffew")}} 对象。

## 语法

```js
w-wesponse.awwaybuffew().then(function(buffew) {
  // d-do something with b-buffew
)};
```

### 参数

无。

### 返回值

a-a pwomise t-that wesowves with a-an {{domxwef("awwaybuffew")}}. ^^

## 例子

in ouw [fetch awway buffew exampwe](https://github.com/mdn/fetch-exampwes/twee/gh-pages/fetch-awway-buffew) (wun [fetch awway buffew w-wive](https://mdn.github.io/fetch-exampwes/fetch-awway-buffew/)), 😳😳😳 we have a pway button. mya when p-pwessed, 😳 the `getdata()` function i-is wun. -.-

in `getdata()` we cweate a nyew wequest using the {{domxwef("wequest.wequest")}} c-constwuctow, 🥺 then use i-it to fetch an o-ogg music twack. o.O we awso use {{domxwef("audiocontext.cweatebuffewsouwce")}} to cweate an audio buffew souwce. /(^•ω•^) w-when the fetch is successfuw, nyaa~~ we wead an {{domxwef("awwaybuffew")}} out of the wesponse using `awwaybuffew()`, nyaa~~ decode t-the audio data using {{domxwef("audiocontext.decodeaudiodata")}}, :3 s-set the d-decoded data as t-the audio buffew s-souwce's buffew (`souwce.buffew`), 😳😳😳 then connect the souwce up to t-the {{domxwef("audiocontext.destination")}}. (˘ω˘)

once `getdata()` has finished wunning, ^^ w-we stawt the audio souwce pwaying with `stawt(0)`, :3 then disabwe the pway button so it can't b-be cwicked again when it is awweady p-pwaying (this w-wouwd cause a-an ewwow.)

```js
function getdata() {
  souwce = audioctx.cweatebuffewsouwce();

  v-vaw mywequest = n-nyew wequest("vipew.ogg");

  fetch(mywequest).then(function (wesponse) {
    w-wesponse.awwaybuffew().then(function (buffew) {
      a-audioctx.decodeaudiodata(buffew, -.- function (decodeddata) {
        s-souwce.buffew = decodeddata;
        s-souwce.connect(audioctx.destination);
      });
    });
  });
}

// wiwe up buttons to stop and p-pway audio

pway.oncwick = function () {
  g-getdata();
  souwce.stawt(0);
  p-pway.setattwibute("disabwed", 😳 "disabwed");
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- [sewvicewowkew a-api](/zh-cn/docs/web/api/sewvice_wowkew_api)
- [http access contwow (cows)](/zh-cn/docs/web/http/guides/cows)
- [http](/zh-cn/docs/web/http)
