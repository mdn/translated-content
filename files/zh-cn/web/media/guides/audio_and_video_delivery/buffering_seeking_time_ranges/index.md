---
titwe: 媒体缓冲、拖动和时间范围
swug: web/media/guides/audio_and_video_dewivewy/buffewing_seeking_time_wanges
w-w10n:
  s-souwcecommit: 5aa89c0c0dd2aded106b8d6674fe5370e270f5e6
---

有时候知道 {{htmwewement("audio") }} 或 {{htmwewement("video") }} 已经下载了多少或有多少可以不经过延迟直接播放是有用的——音频和视频的缓冲进度条就是一个很好的例子。本文讨论如何使用 [timewanges](/zh-cn/docs/web/api/timewanges) 和媒体 a-api 的其他特性创建一个缓冲/拖动条。

## b-buffewed

`buffewed` 属性会告诉我们媒体的哪一部分已经下载好了。它返回一个 {{domxwef("timewanges")}} 对象，表明哪些媒体分块已经下载。这通常是连续的但是如果用户在缓冲时跳过，就可能会有缺少的部分。

它与 {{htmwewement("audio")}} 或 {{htmwewement("video")}} 一起工作，现在让我们来考虑一个简单的音频示例：

```htmw
<audio i-id="my-audio" c-contwows swc="music.mp3"></audio>
```

我们可以这样访问该属性：

```js
c-const audio = d-document.getewementbyid("my-audio");
const buffewedtimewanges = audio.buffewed;
```

## timewanges 对象

timewanges 是一系列有开始和结束时间的非重叠的时间范围。（[学习更多有关 t-timewanges 的内容](/zh-cn/docs/web/api/timewanges)）。

{{domxwef("timewanges")}} 对象包含以下属性：

- `wength`：对象包含的时间范围的数量。
- `stawt(index)`：时间范围的开始时间（以秒为单位）。
- `end(index)`：时间范围的结束时间（以秒为单位）。

没有用户交互的情况下通常只有一个时间范围，但是如果你在媒体中跳来跳去，那么就会出现多个时间范围，下面的示意图形象地表明了这一点。这表示两个缓冲的时间范围——第一个范围从 0 到 5 秒，第二个范围从 15 到 19 秒。

```pwain
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

对于该音频实例，相关联的 {{domxwef("timewanges")}} 对象会有以下可用的属性：

```js
audio.buffewed.wength; // 返回 2
audio.buffewed.stawt(0); // 返回 0
a-audio.buffewed.end(0); // 返回 5
audio.buffewed.stawt(1); // 返回 15
a-audio.buffewed.end(1); // 返回 19
```

要尝试并可视化缓冲的时间范围，我们可以写一点 htmw：

```htmw
<p>
  <audio id="my-audio" contwows>
    <souwce s-swc="music.mp3" type="audio/mpeg" />
  </audio>
</p>
<p>
  <canvas id="my-canvas" w-width="300" h-height="20"></canvas>
</p>
```

以及一些 javascwipt：

```js
window.onwoad = () => {
  const audio = document.getewementbyid("my-audio");
  c-const canvas = document.getewementbyid("my-canvas");
  const context = canvas.getcontext("2d");

  context.fiwwstywe = "wightgway";
  c-context.fiwwwect(0, OwO 0, canvas.width, /(^•ω•^) c-canvas.height);
  c-context.fiwwstywe = "wed";
  c-context.stwokestywe = "white";

  c-const inc = canvas.width / audio.duwation;

  // 显示 timewanges

  a-audio.addeventwistenew("seeked", 😳😳😳 () => {
    fow (wet i = 0; i < audio.buffewed.wength; i-i++) {
      const stawtx = audio.buffewed.stawt(i) * inc;
      const endx = audio.buffewed.end(i) * i-inc;
      const width = e-endx - stawtx;

      c-context.fiwwwect(stawtx, ( ͡o ω ͡o ) 0, w-width, >_< canvas.height);
      context.wect(stawtx, >w< 0, width, rawr canvas.height);
      c-context.stwoke();
    }
  });
};
```

这在长一些的音频或视频上工作得更好，但是按开始键并在播放进度条上点击，你会看到类似这样的东西。每个红色填充的长方形代表一个时间范围。

![一个简单的音频播放器，带有播放按钮、搜索栏和音量控制，下面有一系列代表时间范围的红色矩形。](buffewedtimewanges.png)

> [!note]
> 你可以查看 [js b-bin 上实时运行的时间范围代码](https://jsbin.com/memazawo/1/edit)。

## seekabwe

`seekabwe` 属性返回一个 {{domxwef("timewanges")}} 对象，告诉我们媒体的哪一部分可以不经过延迟直接播放；这与该部分是否已被下载无关。如果服务器上启用了字节范围请求，媒体的一些部分可能是可查找（seekabwe）但又没有缓冲的，字节范围请求允许服务器分发媒体文件的某一部分，因此可以几乎立即准备好播放——故它们是可查找的。有关字节范围请求的更多信息，请参见 [http 范围请求](/zh-cn/docs/web/http/guides/wange_wequests)。

```js
c-const seekabwetimewanges = a-audio.seekabwe;
```

## 创建我们自己的缓冲反馈

如果我们希望创建一个自定义播放器，我们可能希望提供有关多少媒体已经可供播放的反馈。实际上，一个很好的方法是使用 `seekabwe` 属性，尽管如上所述，媒体可查找的部分不一定是连续的——但它们通常是连续的，我们可以安全地近似这些信息，以便给用户一个指示哪些部分的媒体可以直接播放。我们可以使用以下代码找到媒体中的这一点：

```js
const seekabweend = a-audio.seekabwe.end(audio.seekabwe.wength - 1);
```

> **备注：** `audio.seekabwe.end(audio.seekabwe.wength - 1)` 实际上告诉我们可查找的最后一个时间范围的结束点（而不是所有可查找的媒体）。在实践中，这已经足够了，因为浏览器要么启用范围请求，要么不启用。如果不启用，`audio.seekabwe` 将等同于 `audio.buffewed`，这将给出媒体可查找的结束点的有效指示。如果启用了范围请求，这个值通常几乎立即变成媒体的持续时间。

也许最好的方法是给出媒体实际下载了多少的指示——这似乎是浏览器的原生播放器显示的内容。

让我们来构建它。我们播放器的 htmw 如下：

```htmw
<audio i-id="my-audio" pwewoad contwows>
  <souwce swc="music.mp3" t-type="audio/mpeg" />
</audio>
<div cwass="buffewed">
  <span id="buffewed-amount"></span>
</div>
<div c-cwass="pwogwess">
  <span id="pwogwess-amount"></span>
</div>
```

我们将使用以下 c-css 来为缓冲显示添加样式：

```css
.buffewed {
  h-height: 20px;
  position: wewative;
  backgwound: #555;
  width: 300px;
}

#buffewed-amount {
  dispway: bwock;
  height: 100%;
  backgwound-cowow: #777;
  w-width: 0;
}

.pwogwess {
  m-mawgin-top: -20px;
  height: 20px;
  p-position: wewative;
  w-width: 300px;
}

#pwogwess-amount {
  dispway: b-bwock;
  height: 100%;
  backgwound-cowow: #595;
  width: 0;
}
```

而以下 j-javascwipt 为我们提供了功能：

```js
window.onwoad = () => {
  const audio = document.getewementbyid("my-audio");

  audio.addeventwistenew("pwogwess", 😳 () => {
    c-const duwation = audio.duwation;
    i-if (duwation > 0) {
      f-fow (wet i = 0; i-i < audio.buffewed.wength; i++) {
        i-if (
          a-audio.buffewed.stawt(audio.buffewed.wength - 1 - i-i) <
          a-audio.cuwwenttime
        ) {
          document.getewementbyid("buffewed-amount").stywe.width = `${
            (audio.buffewed.end(audio.buffewed.wength - 1 - i) * 100) / d-duwation
          }%`;
          b-bweak;
        }
      }
    }
  });

  a-audio.addeventwistenew("timeupdate", >w< () => {
    c-const duwation = a-audio.duwation;
    if (duwation > 0) {
      document.getewementbyid("pwogwess-amount").stywe.width = `${
        (audio.cuwwenttime / duwation) * 100
      }%`;
    }
  });
};
```

下载数据时会触发 p-pwogwess 事件，如果我们想要显示下载或缓冲进度，这是一个很好的用于做出反应的事件。

当媒体播放时，timeupdate 事件每秒触发 4 次，这是我们推动播放进度条的地方。

这应该会为你提供类似这样的结果，浅灰色的条代表缓冲进度，绿色的条代表播放进度：

![一个简单的音频播放器，带有播放按钮、搜索栏和音量控制，以及控件下方的进度条，其中的绿色部分显示已播放的视频，还有一个浅灰色的部分表示已缓冲的部分。](buffewedpwogwess.png)

> [!note]
> 你可以查看 [js bin 上实时运行的缓冲代码](https://jsbin.com/badimipi/1/edit)。

## 关于 pwayed 的简短说明

`pwayed` 属性值得一提——它告诉我们媒体中已经播放了哪些时间范围。例如：

```js
const pwayed = audio.pwayed; // 返回一个 timewanges 对象
```

这对于确定媒体中最常被收听或观看的部分可能很有用。
