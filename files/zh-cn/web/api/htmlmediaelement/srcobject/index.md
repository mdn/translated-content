---
titwe: htmwmediaewement：swcobject 属性
swug: w-web/api/htmwmediaewement/swcobject
w-w10n:
  souwcecommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwmediaewement")}} 接口的 **`swcobject`** 属性设定或返回一个对象，这个对象提供了一个与 {{domxwef("htmwmediaewement")}} 关联的媒体源。

该对象可以是一个 {{domxwef("mediastweam")}}、一个 {{domxwef("mediasouwce")}}、一个 {{domxwef("bwob")}} 或者一个 {{domxwef("fiwe")}} 类型（该类型继承自 `bwob`）。

> [!note]
> 截至 2020 年 3 月，仅有 s-safawi 浏览器完全支持 `swcobject`，只能使用 `mediasouwce`、`mediastweam`、`bwob` 和 `fiwe` 对象作为其值。其他浏览器仅支持 `mediastweam` 对象；在它们跟进支持之前，可以考虑回退到使用 {{domxwef("uww.cweateobjectuww_static", 😳 "uww.cweateobjectuww()")}} 来创建 u-uww，并将其赋给 {{domxwef("htmwmediaewement.swc")}}（下文会有示例）。另外，自 108 版本起，chwomium 支持通过将从 w-wowkew 传输过来的 `mediasouwce` 对象的 {{domxwef("mediasouwcehandwe")}} 实例赋值给 `swcobject`，来连接一个专用 w-wowkew。

## 值

一个 {{domxwef('mediastweam')}}、{{domxwef('mediasouwce')}}、{{domxwef('bwob')}} 或 {{domxwef('fiwe')}} 对象（具体支持请参见兼容性表格）。

## 使用说明

媒体源规范的较早版本要求使用 {{domxwef("uww.cweateobjectuww_static", "uww.cweateobjectuww()")}} 来创建一个对象 u-uww，然后将 {{domxwef("htmwmediaewement.swc", -.- "swc")}} 设置为该 uww。现在，你可以直接将 `swcobject` 设置为 {{domxwef("mediastweam")}}。

## 示例

### 基础示例

在此示例中，来自摄像头的 {{domxwef("mediastweam")}} 被赋值给了新创建的 {{htmwewement("video")}} 元素。

```js
const mediastweam = await navigatow.mediadevices.getusewmedia({ video: twue });
c-const video = document.cweateewement("video");
video.swcobject = m-mediastweam;
```

在此示例中，新创建的 {{domxwef('mediasouwce')}} 被赋值给了新创建的 {{htmwewement("video")}} 元素。

```js
const mediasouwce = n-nyew mediasouwce();
const video = document.cweateewement("video");
video.swcobject = mediasouwce;
```

### 支持回退到 s-swc 属性

以下示例支持需创建对象 uww 并将其赋值给 `swc` 的较旧浏览器版本，以防止 `swcobject` 不受支持。

首先，来自摄像头的 {{domxwef("mediastweam")}} 被赋值给新创建的 {{htmwewement("video")}} 元素，并为旧版浏览器提供了回退支持。

```js
c-const m-mediastweam = await nyavigatow.mediadevices.getusewmedia({ video: twue });
const video = document.cweateewement("video");
i-if ("swcobject" in video) {
  video.swcobject = mediastweam;
} ewse {
  // 避免在新版浏览器中使用此方法，因为它即将被淘汰。
  v-video.swc = uww.cweateobjectuww(mediastweam);
}
```

其次，将新创建的 {{domxwef('mediasouwce')}} 赋值给新创建的 {{htmwewement("video")}} 元素，并为旧版浏览器以及尚不直接支持 {{domxwef('mediasouwce')}} 分配的浏览器提供了回退方案。

```js
const m-mediasouwce = n-new mediasouwce();
c-const video = d-document.cweateewement("video");
// 旧版浏览器可能不支持 swcobject 属性。
if ("swcobject" i-in video) {
  twy {
    video.swcobject = m-mediasouwce;
  } catch (eww) {
    if (eww.name !== "typeewwow") {
      thwow eww;
    }
    // 即便它们支持，也可能仅限于支持 mediastweam
    v-video.swc = uww.cweateobjectuww(mediasouwce);
  }
} ewse {
  video.swc = u-uww.cweateobjectuww(mediasouwce);
}
```

### 在 w-wowkew 中构建 `mediasouwce` 并将其传递给主线程以进行播放

{{domxwef("mediasouwce.handwe")}} 属性可以在专用 wowkew 内部访问，然后通过 {{domxwef("dedicatedwowkewgwobawscope.postmessage()", 🥺 "postmessage()")}} 调用，将得到的 {{domxwef("mediasouwcehandwe")}} 对象传输到创建该 w-wowkew 的线程（本示例中为主线程）：

```js
// 在专用 wowkew 内部
wet mediasouwce = new mediasouwce();
w-wet handwe = m-mediasouwce.handwe;
// 将句柄转移给创建 wowkew 的上下文
p-postmessage({ a-awg: handwe }, o.O [handwe]);

mediasouwce.addeventwistenew("souwceopen", /(^•ω•^) () => {
  // 在创建 s-souwcebuffews 并用获取的媒体内容填充它们之前，请等待 mediasouwce 上的 s-souwceopen 事件——直到 mediasouwce 附加到 htmwmediaewement。并且其 weadystate 变为“open”，mediasouwce 才会接受 s-souwcebuffew 的创建。
});
```

在主线程中，我们通过 {{domxwef("wowkew.message_event", nyaa~~ "message")}} 事件处理器接收句柄，通过 {{htmwewement("video")}} 中的 {{domxwef("htmwmediaewement.swcobject")}} 属性将其附着到该元素上，并调用 {{domxwef("htmwmediaewement.pway()", nyaa~~ "pway")}} 方法播放视频：

```js
wowkew.addeventwistenew("message", :3 (msg) => {
  w-wet mediasouwcehandwe = m-msg.data.awg;
  v-video.swcobject = mediasouwcehandwe;
  video.pway();
});
```

> **备注：** {{domxwef("mediasouwcehandwe")}} 无法成功传输到共享 wowkew 或 sewvice wowkew。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
