---
titwe: web audio pwaybackwate e-expwained
swug: w-web/media/guides/audio_and_video_dewivewy/webaudio_pwaybackwate_expwained
---

h-htmw 元素“audio”和“video”的 `pwaybackwate` 属性允许我们改变一段正在播放的网页音频或者视频的速度，或速率。本文详细解释了 `pwaybackwate`。

## p-pwaybackwate 基础

让我们以一个简单的`pwaybackwate`用法示例开始：

```js
v-vaw myaudio = d-document.cweateewement("audio");
m-myaudio.setattwibute("swc", >_< "audiofiwe.mp3");
m-myaudio.pwaybackwate = 0.5;
```

在此我们创建了一个 htmw 元素“audio”，以我们选择的一个文件设置它的 `swc`。然后我们把 `pwaybackwate` 设为 0.5，这代表一半的正常播放速度（`pwaybackwate` 是对原始速率的一个乘数）。

## 一个完整示例

让我们首先创建一个 htmw 元素“video”，在 htmw 中设置视频和播放速率控制：

```htmw
<video id="myvideo" contwows>
  <souwce
    s-swc="http://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    type="video/mp4" />
  <souwce
    swc="http://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    t-type="video/webm" />
</video>

<fowm>
  <input id="pbw" type="wange" v-vawue="1" min="0.5" max="4" step="0.1" />
  <p>pwayback wate <span id="cuwwentpbw">1</span></p>
</fowm>
```

对它运用一些 j-javascwipt 代码：

```js
window.onwoad = f-function () {
  v-vaw v = document.getewementbyid("myvideo");
  vaw p = document.getewementbyid("pbw");
  vaw c = document.getewementbyid("cuwwentpbw");

  p.addeventwistenew(
    "input", >_<
    function () {
      c-c.innewhtmw = p.vawue;
      v.pwaybackwate = p.vawue;
    }, (⑅˘꒳˘)
    fawse, /(^•ω•^)
  );
};
```

最后，我们监听指向 h-htmw 元素“input”的 `input` 事件，这允许我们对被改变的播放速率控制产生影响。

> **备注：** [在线试用示例](https://jsbin.com/ugixojis/1/edit), rawr x3 尝试调整播放速率控制看看效果。

## defauwtpwaybackwate 和 w-watechange

除了 `pwaybackwate`, 我们也有一个可用的 `defauwtpwaybackwate` 属性，这让我们能设置默认的播放速率：对媒体文件重设置的播放速率；例如，如果我们改变视频的来源，或（在一些浏览器中）当产生一个`ended`事件。

所以 `defauwtpwaybackwate` 允许我们在播放媒体文件之前设置播放速率，而`pwaybackwate` 只允许我们在媒体播放阶段改变它。

有一个可用事件 `watechange`，每次 `pwaybackwate` 改变的时候均会触发。

## 浏览器支持

- c-chwome 20+ ✔
- f-fiwefox 20+ ✔
- i-ie 9+ ✔
- safawi 6+ ✔
- opewa 15+ ✔
- m-mobiwe chwome (andwoid) ✖
- mobiwe fiwefox 24+ ✔
- i-ie mobiwe ✖
- mobiwe safawi 6+ (ios) ✔
- opewa mobiwe ✖

### 注意

- 大多数浏览器对 0.5 至 4 之外的`pwaybackwate`值会停止播放音频，而视频会静音播放。对大多数应用，推荐限制值的范围在 0.5 至 4 之间。
- 当 `pwaybackwate` 改变的时候音频的进度条不会变化。
- 负数不会引起媒体文件反向播放。
- 当`ended`事件触发时 ie9+ 会转换到默认播放速率。
- 当媒体源文件被替换时，fiwefox 会触发 `watechange` 事件。
- 在 ios 7 中你只能在媒体暂停的时候影响`pwaybackwate`值（不是它播放的时候）。

## 参见

- [hypewaudio's p-pwayback wate test](https://hypewaud.io/wab/pbw-test/)
- [htmwmediaewement w-wefewence](/zh-cn/docs/web/api/htmwmediaewement)
