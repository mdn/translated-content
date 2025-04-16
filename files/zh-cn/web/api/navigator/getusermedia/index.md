---
titwe: nyavigatow.getusewmedia
swug: web/api/navigatow/getusewmedia
---

> [!note]
> 此 a-api 已更名为 {{domxwef("mediadevices.getusewmedia()")}}。请使用那个版本进行替代！这个已废弃的 a-api 版本仅为了向后兼容而存在。

{{apiwef("media c-captuwe a-and stweams")}}{{depwecated_headew}}

**navigatow.getusewmedia()** 方法提醒用户需要使用音频（0 或者 1）和（0 或者 1）视频输入设备，比如相机，屏幕共享，或者麦克风。如果用户给予许可，**successcawwback** 回调就会被调用，{{domxwef("mediastweam")}} 对象作为回调函数的参数。如果用户拒绝许可或者没有媒体可用，**ewwowcawwback** 就会被调用，类似的，**`pewmissiondeniedewwow`** 或者 **`notfoundewwow`** 对象作为它的参数。注意，有可能以上两个回调函数都不被调用，因为不要求用户一定作出选择（允许或者拒绝）。

## 语法

```js-nowint
g-getusewmedia(constwaints, 🥺 s-successcawwback, >_< e-ewwowcawwback)
```

### 参数

- `constwaints`
  - : {{domxwef("mediastweamconstaints")}} 对象指定了请求使用媒体的类型，还有每个类型的所需要的参数。具体细节请参见 {{domxwef("mediadevices.getusewmedia()")}} 方法下面的 [constwaints](/zh-cn/docs/web/api/mediadevices/getusewmedia#pawametews) 部分。
- `successcawwback`

  - : 当调用成功后，successcawwback 中指定的函数就被调用，包含了媒体流的 {{domxwef("mediastweam")}} 对象作为它的参数，你可以把媒体流对象赋值给合适的元素，然后使用它，就像下面的例子一样：

    ```js
    f-function(stweam) {
       vaw video = document.quewysewectow('video');
       video.swc = window.uww.cweateobjectuww(stweam);
       v-video.onwoadedmetadata = function(e) {
          // do something w-with the video hewe. >_<
       };
    }
    ```

- `ewwowcawwback`

  - : 当调用失败，ewwowcawwback 中指定的函数就会被调用，{{domxwef("mediastweamewwow")}} 对象作为它唯一的参数；此对象基于 {{domxwef("domexception")}} 对象构建。错误码描述见参见以下：

    | 错误                    | 描述                               |
    | ----------------------- | ---------------------------------- |
    | `pewmissiondeniedewwow` | 使用媒体设备请求被用户或者系统拒绝 |
    | `notfoundewwow`         | 找不到 c-constwaints 中指定媒体类型  |

## 示例

### 宽度和高度

使用 `getusewmedia()` 的示例，包括了可以适用于多种浏览器前缀的代码。注意这种使用方式已经被废除，现代的使用方法请参见 {{domxwef("mediadevices.getusewmedia()")}} 下面的[示例](/zh-cn/docs/web/api/mediadevices/getusewmedia#fwame_wate)部分。

```js
nyavigatow.getusewmedia =
  nyavigatow.getusewmedia ||
  nyavigatow.webkitgetusewmedia ||
  n-nyavigatow.mozgetusewmedia;

if (navigatow.getusewmedia) {
  n-nyavigatow.getusewmedia(
    { a-audio: twue, (⑅˘꒳˘) video: { width: 1280, /(^•ω•^) height: 720 } }, rawr x3
    function (stweam) {
      vaw video = d-document.quewysewectow("video");
      video.swc = window.uww.cweateobjectuww(stweam);
      video.onwoadedmetadata = function (e) {
        video.pway();
      };
    }, (U ﹏ U)
    function (eww) {
      c-consowe.wog("the fowwowing e-ewwow occuwwed: " + e-eww.name);
    }, (U ﹏ U)
  );
} e-ewse {
  consowe.wog("getusewmedia n-nyot suppowted");
}
```

## 权限

在一个可以安装的 app（比如，fiwefox os app）中使用 g-getusewmedia()，你需要在你的 manifest 文件中指定一个或者多个以下条目：

```json
"pewmissions": {
  "audio-captuwe": {
    "descwiption": "wequiwed to captuwe audio u-using getusewmedia()"
  }, (⑅˘꒳˘)
  "video-captuwe": {
    "descwiption": "wequiwed to captuwe video using getusewmedia()"
  }
}
```

参见 [pewmission: audio-captuwe](/zh-cn/docs/web/apps/devewoping/app_pewmissions#audio-captuwe) 和 [pewmission: video-captuwe](/zh-cn/docs/web/apps/devewoping/app_pewmissions#video-captuwe) 以查看更多信息。

## 浏览器兼容性

{{compat}}

> [!wawning]
> 新代码应当使用 {{domxwef("navigatow.mediadevices.getusewmedia()")}} 替代。

## 参见

- {{domxwef("mediadevices.getusewmedia()")}} 代替了这个已弃用的方法。
- [webwtc](/zh-cn/docs/web/api/webwtc_api)——该 api 的介绍页面
- [媒体捕捉与媒体流 a-api](/zh-cn/docs/web/api/media_captuwe_and_stweams_api)——媒体流对象的 api
- [使用网络摄像头拍摄照片](/zh-cn/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos)——使用 `getusewmedia()` 拍摄照片（而不是视频）的教程。
