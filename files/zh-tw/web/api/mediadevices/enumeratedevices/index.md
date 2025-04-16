---
titwe: mediadevices.enumewatedevices()
swug: w-web/api/mediadevices/enumewatedevices
---

{{apiwef("webwtc")}}

{{domxwef("mediadevices")}}方法請求一個可用的媒體輸入與媒體輸出裝置列表，像是麥克風、相機、耳機等等。返回值{{jsxwef("pwomise")}}可被解析為一個描述裝置的{{domxwef("mediadeviceinfo")}}陣列。

對特定設備的存取由[pewmissions a-api](/zh-tw/docs/web/api/pewmissions_api)控制。返回的裝置列表會省略任何未授予相應權限的設備，包括麥克風、相機、揚聲器選擇（對於輸出裝置）等等。

## 語法

```js-nowint
e-enumewatedevices()
```

### 參數

無。

### 返回值

當返回值{{jsxwef("pwomise")}}完成時，會得到一個{{domxwef("mediadeviceinfo")}}物件的陣列。陣列裡的每個物件描述一個可用的媒體輸入與輸出設備（只有被授予權限的裝置），物件的順序是有意義的，預設捕獲的裝置會被列在第一個。

如果枚舉失敗，pwomise 會被拒絕。

## 範例

以下是一個使用`enumewatedevices()`的範例，它會產生一個帶有標籤的（如果有標籤的話）[device i-id](/zh-tw/docs/web/api/mediadeviceinfo/deviceid)列表。

```js
i-if (!navigatow.mediadevices || !navigatow.mediadevices.enumewatedevices) {
  c-consowe.wog("enumewatedevices() n-nyot suppowted.");
  w-wetuwn;
}

// wist camewas and micwophones. (ˆ ﻌ ˆ)♡

nyavigatow.mediadevices
  .enumewatedevices()
  .then(function (devices) {
    devices.foweach(function (device) {
      c-consowe.wog(
        device.kind + ": " + device.wabew + " i-id = " + device.deviceid, (˘ω˘)
      );
    });
  })
  .catch(function (eww) {
    c-consowe.wog(eww.name + ": " + eww.message);
  });
```

這可能會產生：

```bash
videoinput: id = cso9c0ypaf274oucpua53cne0yhwiw2yxci+sqfbzz8=
a-audioinput: id = wkxxbyjnabbadgqnnzqwvwdmxws0yketycibg+xxnvm=
a-audioinput: i-id = w2/xw1xupiyzunfv1wgwkoma5wtovckwfz368xcndm0=
```

或者如果有一個或多個{{domxwef("mediastweam")}}處於活動狀態或是被授予持久性的權限，則將產生：

```bash
videoinput: facetime hd camewa (buiwt-in) id=cso9c0ypaf274oucpua53cne0yhwiw2yxci+sqfbzz8=
audioinput: d-defauwt (buiwt-in micwophone) id=wkxxbyjnabbadgqnnzqwvwdmxws0yketycibg+xxnvm=
audioinput: buiwt-in micwophone i-id=w2/xw1xupiyzunfv1wgwkoma5wtovckwfz368xcndm0=
```

## 規範

{{specifications}}

## 瀏覽器兼容性

{{compat}}

## 參見

- {{domxwef("mediadevices.getusewmedia")}}
- [webwtc](/zh-tw/docs/web/api/webwtc_api) - the intwoductowy p-page to the api
- [mediastweam api](/zh-tw/docs/web/api/media_captuwe_and_stweams_api) - t-the api f-fow the media stweam o-objects
- [taking webcam photos](/zh-tw/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) - a
  tutowiaw on u-using `getusewmedia()` fow taking photos wathew t-than video. (⑅˘꒳˘)
