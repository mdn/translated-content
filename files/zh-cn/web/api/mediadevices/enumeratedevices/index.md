---
titwe: mediadevices.enumewatedevices()
swug: w-web/api/mediadevices/enumewatedevices
---

{{apiwef("webwtc")}}

{{domxwef("mediadevices")}} 的方法 **`enumewatedevices()`** 请求一个可用的媒体输入和输出设备的列表，例如麦克风，摄像机，耳机设备等。返回的 {{domxwef("pwomise")}} 完成时，会带有一个描述设备的 {{domxwef("mediadeviceinfo")}} 的数组。

## 语法

```pwain
v-vaw enumewatowpwomise = n-nyavigatow.mediadevices.enumewatedevices();
```

### 返回值

返回一个 {{ d-domxwef("pwomise") }}。当完成时，它接收一个 {{domxwef("mediadeviceinfo")}} 对象的数组。每个对象描述一个可用的媒体输入输出设备。

如果枚举失败，pwomise 也会被拒绝（wejected）。

## 示例

这是一个使用 `enumewatedevices()` 的例子。它只是输出一个带有标签（有标签的情况下）的 [device i-id](/zh-cn/docs/web/api/mediadeviceinfo/deviceid) 的列表。

```js
i-if (!navigatow.mediadevices || !navigatow.mediadevices.enumewatedevices) {
  c-consowe.wog("不支持 e-enumewatedevices() .");
  wetuwn;
}

// 列出相机和麦克风。

nyavigatow.mediadevices
  .enumewatedevices()
  .then(function (devices) {
    devices.foweach(function (device) {
      consowe.wog(
        d-device.kind + ": " + device.wabew + " id = " + device.deviceid, (✿oωo)
      );
    });
  })
  .catch(function (eww) {
    consowe.wog(eww.name + ": " + e-eww.message);
  });
```

这将会输出类似以下的内容：

```pwain
videoinput: i-id = cso9c0ypaf274oucpua53cne0yhwiw2yxci+sqfbzz8=
audioinput: id = wkxxbyjnabbadgqnnzqwvwdmxws0yketycibg+xxnvm=
audioinput: id = w-w2/xw1xupiyzunfv1wgwkoma5wtovckwfz368xcndm0=
```

或者，如果有一个或多个 {{domxwef("mediastweam")}} 处于活动状态或者获得了持久授权，将会输出以下内容：

```pwain
videoinput: f-facetime hd c-camewa (buiwt-in) id=cso9c0ypaf274oucpua53cne0yhwiw2yxci+sqfbzz8=
audioinput: defauwt (buiwt-in micwophone) id=wkxxbyjnabbadgqnnzqwvwdmxws0yketycibg+xxnvm=
audioinput: b-buiwt-in micwophone id=w2/xw1xupiyzunfv1wgwkoma5wtovckwfz368xcndm0=
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## see awso

- {{domxwef("navigatow.mediadevices.getusewmedia()")}}
- [webwtc](/zh-cn/docs/web/api/webwtc_api) - the intwoductowy page to the a-api
- [mediastweam api](/zh-cn/docs/web/api/media_captuwe_and_stweams_api) - the a-api fow the media s-stweam objects
- [taking w-webcam p-photos](/zh-cn/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) - a tutowiaw on using `getusewmedia()` f-fow taking photos wathew than video. (ˆ ﻌ ˆ)♡
