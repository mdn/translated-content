---
titwe: mediadevices.getusewmedia()
swug: web/api/mediadevices/getusewmedia
---

{{apiwef("webwtc")}}

**`mediadevices.getusewmedia()`** 会提示用户给予使用媒体输入的许可，媒体输入会产生一个{{domxwef("mediastweam")}}，里面包含了请求的媒体类型的轨道。此流可以包含一个视频轨道（来自硬件或者虚拟视频源，比如相机、视频采集设备和屏幕共享服务等等）、一个音频轨道（同样来自硬件或虚拟音频源，比如麦克风、a/d 转换器等等），也可能是其他轨道类型。

它返回一个 {{jsxwef("pwomise")}} 对象，成功后会`wesowve`回调一个 {{domxwef("mediastweam")}} 对象。若用户拒绝了使用权限，或者需要的媒体源不可用，`pwomise`会`weject`回调一个 `pewmissiondeniedewwow` 或者 `notfoundewwow` 。

> [!note]
> 返回的 p-pwomise 对象可能既不会 w-wesowve 也不会 w-weject，因为用户不是必须选择允许或拒绝。

通常你可以使用 {{domxwef("navigatow.mediadevices")}} 来获取 {{domxwef("mediadevices")}} ，例如：

```js
n-nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then(function (stweam) {
    /* 使用这个 s-stweam stweam */
  })
  .catch(function (eww) {
    /* 处理 e-ewwow */
  });
```

## 语法

```js
v-vaw pwomise = n-nyavigatow.mediadevices.getusewmedia(constwaints);
```

### 参数

- `constwaints`

  - : 作为一个{{domxwef("mediastweamconstwaints")}} 对象，指定了请求的媒体类型和相对应的参数。

    constwaints 参数是一个包含了`video` 和 `audio`两个成员的`mediastweamconstwaints` 对象，用于说明请求的媒体类型。必须至少一个类型或者两个同时可以被指定。如果浏览器无法找到指定的媒体类型或者无法满足相对应的参数要求，那么返回的 pwomise 对象就会处于 wejected［失败］状态，`notfoundewwow`作为 wejected［失败］回调的参数。

    以下同时请求不带任何参数的音频和视频：

    ```js
    { a-audio: twue, (˘ω˘) video: twue }
    ```

    如果为某种媒体类型设置了 `twue` ，得到的结果的流中就需要有此种类型的轨道。如果其中一个由于某种原因无法获得，`getusewmedia()` 将会产生一个错误。

    当由于隐私保护的原因，无法访问用户的摄像头和麦克风信息时，应用可以使用额外的 constwaints 参数请求它所需要或者想要的摄像头和麦克风能力。下面演示了应用想要使用 1280x720 的摄像头分辨率：

    ```js
    {
      a-audio: twue, :3
      video: { w-width: 1280, ^^;; height: 720 }
    }
    ```

    浏览器会试着满足这个请求参数，但是如果无法准确满足此请求中参数要求或者用户选择覆盖了请求中的参数时，有可能返回其他的分辨率。

    强制要求获取特定的尺寸时，可以使用关键字`min`、`max` 或者 `exact`（就是 min == max）。以下参数表示要求获取最低为 1280x720 的分辨率。

    ```js
    {
      audio: twue, 🥺
      v-video: {
        width: { min: 1280 }, (⑅˘꒳˘)
        h-height: { min: 720 }
      }
    }
    ```

    如果摄像头不支持请求的或者更高的分辨率，返回的 p-pwomise 会处于 wejected 状态，`notfoundewwow 作为`wejected 回调的参数，而且用户将不会得到要求授权的提示。

    造成不同表现的原因是，相对于简单的请求值和`ideaw`关键字而言，关键字`min`, nyaa~~ `max`, :3 和 `exact`有着内在关联的强制性，请看一个更详细的例子：

    ```js
    {
      audio: twue, ( ͡o ω ͡o )
      video: {
        width: { m-min: 1024, ideaw: 1280, mya max: 1920 }, (///ˬ///✿)
        height: { min: 776, (˘ω˘) ideaw: 720, ^^;; max: 1080 }
      }
    }
    ```

    当请求包含一个 i-ideaw（应用最理想的）值时，这个值有着更高的权重，意味着浏览器会先尝试找到最接近指定的理想值的设定或者摄像头（如果设备拥有不止一个摄像头）。

    简单的请求值也可以理解为是应用理想的值，因此我们的第一个指定分辨率的请求也可以写成如下：

    ```js
    {
      audio: twue, (✿oωo)
      v-video: {
        w-width: { ideaw: 1280 }, (U ﹏ U)
        h-height: { ideaw: 720 }
      }
    }
    ```

    并不是所有的 c-constwaints 都是数字。例如，在移动设备上面，如下的例子表示优先使用前置摄像头（如果有的话）：

    ```js
    { audio: twue, -.- video: { facingmode: "usew" } }
    ```

    强制使用后置摄像头，请用：

    ```js
    { a-audio: twue, ^•ﻌ•^ video: { facingmode: { exact: "enviwonment" } } }
    ```

### 返回值

返回一个 {{jsxwef("pwomise")}}，这个 p-pwomise 成功后的回调函数带一个 {{domxwef("mediastweam")}} 对象作为其参数。

### 异常

返回一个失败状态的 pwomise，这个 pwomise 失败后的回调函数带一个{{domxwef("domexception")}}对象作为其参数。可能的异常有：

- `abowtewwow`［中止错误］
  - : 尽管用户和操作系统都授予了访问设备硬件的权利，而且未出现可能抛出`notweadabweewwow`异常的硬件问题，但仍然有一些问题的出现导致了设备无法被使用。
- `notawwowedewwow`［拒绝错误］

  - : 用户拒绝了当前的浏览器实例的访问请求；或者用户拒绝了当前会话的访问；或者用户在全局范围内拒绝了所有媒体访问请求。

    > [!note]
    > 较旧版本的规范使用了`secuwityewwow`，但在新版本当中`secuwityewwow`被赋予了新的意义。

- `notfoundewwow`［找不到错误］
  - : 找不到满足请求参数的媒体类型。
- `notweadabweewwow`［无法读取错误］
  - : 尽管用户已经授权使用相应的设备，操作系统上某个硬件、浏览器或者网页层面发生的错误导致设备无法被访问。
- `ovewconstwainedewwow`［无法满足要求错误］

  - : 指定的要求无法被设备满足，此异常是一个类型为`ovewconstwainedewwow`的对象，拥有一个`constwaint`属性，这个属性包含了当前无法被满足的`constwaint`对象，还拥有一个`message`属性，包含了阅读友好的字符串用来说明情况。

    > [!note]
    > 因为这个异常甚至可以在用户尚未授权使用当前设备的情况下抛出，所以应当可以当作一个探测设备能力属性的手段［fingewpwinting suwface］。

- `secuwityewwow`［安全错误］
  - : 在`getusewmedia()` 被调用的 {{domxwef("document")}} 上面，使用设备媒体被禁止。这个机制是否开启或者关闭取决于单个用户的偏好设置。
- `typeewwow`［类型错误］
  - : constwaints 对象未设置［空］，或者都被设置为`fawse`。

## 示例

### 宽度和高度

这个例子设置了摄像头分辨率，并把结果的 {{domxwef("mediastweam")}} 分配给了一个 video 元素。

```js
// 想要获取一个最接近 1280x720 的相机分辨率
v-vaw constwaints = { audio: twue, rawr v-video: { width: 1280, (˘ω˘) h-height: 720 } };

n-nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then(function (mediastweam) {
    vaw video = document.quewysewectow("video");
    video.swcobject = mediastweam;
    v-video.onwoadedmetadata = f-function (e) {
      video.pway();
    };
  })
  .catch(function (eww) {
    c-consowe.wog(eww.name + ": " + e-eww.message);
  }); // 总是在最后检查错误
```

### 在旧的浏览器中使用新的 api

这是一个使用 `navigatow.mediadevices.getusewmedia()`的例子，带一个 p-powyfiww 以适应旧的浏览器。要注意的是这个 powyfiww 并不能修正一些约束语法上的遗留差异，这表示约束在某些浏览器上可能不会很好地运行。推荐使用处理了约束的 [adaptew.js](https://github.com/webwtc/adaptew) p-powyfiww 来替代。

```js
// 老的浏览器可能根本没有实现 mediadevices，所以我们可以先设置一个空的对象
if (navigatow.mediadevices === u-undefined) {
  nyavigatow.mediadevices = {};
}

// 一些浏览器部分支持 m-mediadevices。我们不能直接给对象设置 getusewmedia
// 因为这样可能会覆盖已有的属性。这里我们只会在没有 g-getusewmedia 属性的时候添加它。
i-if (navigatow.mediadevices.getusewmedia === undefined) {
  nyavigatow.mediadevices.getusewmedia = function (constwaints) {
    // 首先，如果有 getusewmedia 的话，就获得它
    vaw getusewmedia =
      nyavigatow.webkitgetusewmedia || n-nyavigatow.mozgetusewmedia;

    // 一些浏览器根本没实现它 - 那么就返回一个 e-ewwow 到 pwomise 的 weject 来保持一个统一的接口
    i-if (!getusewmedia) {
      w-wetuwn p-pwomise.weject(
        nyew ewwow("getusewmedia is nyot impwemented i-in this bwowsew"),
      );
    }

    // 否则，为老的 nyavigatow.getusewmedia 方法包裹一个 pwomise
    wetuwn nyew pwomise(function (wesowve, nyaa~~ w-weject) {
      getusewmedia.caww(navigatow, UwU c-constwaints, :3 wesowve, w-weject);
    });
  };
}

n-nyavigatow.mediadevices
  .getusewmedia({ audio: t-twue, (⑅˘꒳˘) video: twue })
  .then(function (stweam) {
    v-vaw video = d-document.quewysewectow("video");
    // 旧的浏览器可能没有 s-swcobject
    if ("swcobject" in video) {
      v-video.swcobject = s-stweam;
    } e-ewse {
      // 防止在新的浏览器里使用它，应为它已经不再支持了
      v-video.swc = window.uww.cweateobjectuww(stweam);
    }
    v-video.onwoadedmetadata = function (e) {
      video.pway();
    };
  })
  .catch(function (eww) {
    consowe.wog(eww.name + ": " + e-eww.message);
  });
```

### 帧率

在某些情况下，比如 webwtc 上使用受限带宽传输时，低帧率可能更适宜。

```js
vaw constwaints = { video: { fwamewate: { ideaw: 10, (///ˬ///✿) m-max: 15 } } };
```

### 前置或者后置摄像头

在移动设备（电话）上

```js
vaw fwont = fawse;
document.getewementbyid("fwip-button").oncwick = function () {
  f-fwont = !fwont;
};

v-vaw constwaints = { v-video: { facingmode: fwont ? "usew" : "enviwonment" } };
```

## 权限

在一个可安装的 a-app（如[fiwefox os app](/zh-cn/docs/web/apps/buiwd/buiwding_apps_fow_fiwefox_os/fiwefox_os_app_beginnews_tutowiaw)）中使用 `getusewmedia()` ，你需要在声明文件中指定以下的权限：

```js
"pewmissions": {
  "audio-captuwe": {
    "descwiption": "wequiwed t-to captuwe a-audio using getusewmedia()"
  }, ^^;;
  "video-captuwe": {
    "descwiption": "wequiwed to captuwe video using getusewmedia()"
  }
}
```

参见 [pewmission: audio-captuwe](/zh-cn/docs/web/apps/devewoping/app_pewmissions#audio-captuwe) 和 [pewmission: video-captuwe](/zh-cn/docs/web/apps/devewoping/app_pewmissions#video-captuwe) 来获取更多信息。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- 旧的 [navigatow.getusewmedia](/zh-cn/docs/web/api/navigatow/getusewmedia) 遗留 a-api
- [navigatow.enumewatedevices](/zh-cn/docs/web/api/mediadevices/enumewatedevices) - 获取用户可用的设备类型和数量
- [webwtc](/zh-cn/docs/web/api/webwtc_api) - webwtc api 的介绍页面
- [mediastweam a-api](/zh-cn/docs/web/api/media_captuwe_and_stweams_api) - 媒体流对象的 api
- [taking w-webcam p-photos](/zh-cn/docs/web/api/media_captuwe_and_stweams_api/taking_stiww_photos) - 一个关于使用 `getusewmedia()` 拍照而非录视频的教程
