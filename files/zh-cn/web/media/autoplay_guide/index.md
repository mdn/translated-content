---
title: Autoplay guide for media and Web Audio APIs
slug: Web/Media/Autoplay_guide
original_slug: Web/媒体/Autoplay_guide
---

网页加载完成后立即播放音频（或带有音频轨道的视频）可能会意外地打扰到用户。尽管自动播放媒体文件是一个很实用的功能，但是我们也应该谨慎地使用它，保证只有在它被需要的时候才使用。为了让用户拥有控制权，通常浏览器会提供各种方式禁用自动播放音频功能。在这篇文章中，我们将介绍各种媒体和 Web Audio APIs 的自动播放功能，包括关于如何使用自动播放功能、如何优雅的处理阻止自动播放功能的一些简短的介绍。

当源媒体没有音轨或音轨静音时，阻止自动播放不会应用于{{HTMLElement("video")}}元素。具有活动音轨的媒体被认为是**可听的**，并且阻止自动播放适用于它们。**听不见的**媒体不受阻止自动播放的影响。

## 自动播放 和 自动播放暂停

**自动播放**是指无需用户明确请求开始播放即可导致音频开始播放的任何功能。这包括使用 HTML 属性自动播放媒体以及用户使用 JavaScript 代码在处理用户输入的上下文之外开始播放。

这意味着以下两种行为都被视为自动播放行为，因此受到浏览器阻止自动播放策略的约束：:

```html
<audio src="/music.mp4" autoplay></audio>
```

和

```js
audioElement.play();
```

以下网络功能和 API 可能会受到自动播放阻止的影响：

- The {{Glossary("HTML")}} {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements
- The [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API)

从用户的角度来看，网页或应用程序自动地发出噪音而没有警告可能会令人讨厌、不便或令人反感。因此，浏览器通常仅允许在特定情况下进行自动播放。

### Autoplay 功能

据新政策，媒体内容将在满足以下至少一个的条件下自动播放：

- 音频被静音或其音量设置为 0
- 用户和网页已有交互行为（包括点击、触摸、按下某个键等等）
- 网站已被列入白名单；如果浏览器确定用户经常与媒体互动，这可能会自动发生，也可能通过首选项或其他用户界面功能手动发生
- 自动播放策略应用到{{HTMLElement("iframe")}}或者其文档上

否则，播放可能会被阻止。导致播放被阻塞的确切情况以及将网站列入白名单的具体方法因浏览器而异，但最好是遵循以上的原则。

详情，请参阅 [Google Chrome](https://developers.google.com/web/updates/2017/09/autoplay-policy-changes) 和 [WebKit](https://webkit.org/blog/7734/auto-play-policy-changes-for-macos/) 的自动播放政策。

> **备注：** 换句话说，如果在尚无任何用户交互的页面中通过编程方式启动播放，则通常会阻止任何包含音频在内的媒体的播放。

## 能自动播放的媒体元素

既然我们已经介绍了什么是自动播放以及什么可以阻止自动播放，接下来我们将介绍您的网站或应用程序如何在页面加载时自动播放媒体，如何检测何时自动播放失败，以及当自动播放被浏览器拒绝时的应对技巧。

### autoplay 属性

想让内容自动播放的最简单方法是将[`autoplay`](/zh-CN/docs/Web/HTML/Element/audio#autoplay)属性添加到{{HTMLElement("audio")}}或{{HTMLElement("video")}}元素。并将{{domxref("HTMLMediaElement.autoplay", "autoplay")}}属性设置为 `true` ，当 `autoplay` 的属性为 `true` 时，媒体元素将在发生以下情况后尽快自动开始播放：

- 页面允许使用自动播放功能
- 媒体元素已在页面加载期间创建
- 假设网络性能或带宽没有显着变化，且已收到足够的媒体流并已开始播放，继续播放直至媒体结束而不会中断。

#### 例子 1: autoplay 属性

使用 `autoplay` 属性的{{HTMLElement("audio")}}元素就像如下：

```html
<audio id="musicplayer" autoplay>
  <source src="/music/chapter1.mp4" />
</audio>
```

#### 例子 2：检测自动播放失败

如果你依靠自动播放功能去做一些重要的事情，或者自动播放失败会以任何方式影响你的应用程序，那你可能会想知道自动播放什么时候没有开始。不幸的是，对于[`autoplay`](/zh-CN/docs/Web/HTML/Element/audio#autoplay)属性，识别自动播放是否成功开始是很棘手的。自动播放失败时**不会触发**任何事件。也没有抛出异常或可以设置回调，甚至在媒体元素上都没有标记来告诉你自动播放是否起作用。你实际能做的就是检查一些值，然后根据这些值猜测自动播放是否起作用。

如果您能够调整查看内容的方向，那么更好的方法是，依靠知道媒体播放已成功开始，而不是在媒体启动失败时知道。您可以通过侦听要在媒体元素上触发的[`play`](/zh-CN/docs/Web/API/HTMLMediaElement/play_event)事件来轻松实现此目的。

当媒体暂停后恢复时以及发生自动播放时都会发送`play`事件。这意味着第一次触发`play`事件时，您知道您的媒体是在页面打开后第一次启动的。

考虑以下 HTML 作为媒体元素:

```html
<video src="myvideo.mp4" autoplay onplay=handleFirstPlay(event)">
```
这里我们有一个 {{HTMLElement("video")}} 元素，它设置了[`autoplay`](/zh-CN/docs/Web/HTML/Element/video#autoplay) 属性，并设置了 {{domxref("HTMLMediaElement.onplay", "onplay")}} 事件处理程序；该事件由名为`handleFirstPlay()` 的函数处理，该函数接收`play`事件作为输入。

`handleFirstPlay()` 看起来像这样:

```js
function handleFirstPlay(event) {
  let vid = event.target;

  vid.onplay = null;

  // Start whatever you need to do after playback has started
}
```

从{{domxref("Event")}}对象的{{domxref("Event.target", "target")}}获取对视频元素的引用后，该元素的 `onplay` 处理程序将设置为 `null`。这将阻止任何未来的播放事件被传递给处理程序。当文档位于后台选项卡时，如果用户暂停并恢复视频或浏览器自动暂停和恢复视频，则可能会发生这种情况。

此时，您的网站或应用程序可以开始执行依赖于视频启动的任何操作。

> **备注：** 此方法不区分自动播放和用户手动开始播放。

### play() 方法

术语“自动播放”还指脚本尝试在处理用户输入事件的上下文之外触发包含音频的媒体播放的场景。这是通过调用媒体元素的{{domxref("HTMLMediaElement.play", "play()")}}方法来完成的。

> **备注：** 强烈建议您尽可能使用自动播放属性，因为自动播放属性对自动播放首选项的支持比其他自动播放媒体的方式更广泛。它还让浏览器负责开始播放，并优化播放的时间。

#### 示例：播放视频

这个简单的示例播放文档中找到的第一个{{HTMLElement("video")}}元素。除非文档有权自动播放媒体，否则 `play()` 不会让播放开始。

```js
document.querySelector("video").play();
```

#### 示例：处理 play() 失败

当您使用{{domxref("HTMLMediaElement.play", "play()")}}方法启动媒体时，更容易检测到自动播放媒体的故障。 `play()` 返回一个{{jsxref("Promise")}}，一旦媒体成功开始播放，该 Promise 就会被解析；当播放无法开始时（例如自动播放被拒绝），该 Promise 将被拒绝。当自动播放失败时，您可能希望为用户提供一种手动告诉浏览器要求用户授予播放媒体权限的方法。

您可以使用这样的代码来完成这项工作:

```js
let startPlayPromise = videoElem.play();

if (startPlayPromise !== undefined) {
  startPlayPromise
    .catch((error) => {
      if (error.name === "NotAllowedError") {
        showPlayButton(videoElem);
      } else {
        // Handle a load or playback error
      }
    })
    .then(() => {
      // Start whatever you need to do only after playback
      // has begun.
    });
}
```
我们对 play() 的结果做的第一件事是确保它不是`undefined`。我们检查这一点是因为在早期版本的 HTML 规范中，play() 没有返回值。最近添加了返回一个允许您确定操作成功或失败的承诺。检查`undefined`可防止此代码在旧版本的 Web 浏览器上失败并出现错误。

然后我们向 Promise 添加一个 {{jsxref("Promise.catch", "catch()")}} 处理程序。这将查看错误的{{domxref("DOMException.name", "name")}}以查看它是否为 `NotAllowedError`。这表示由于权限问题导致播放失败，例如自动播放被拒绝。如果是这样的话，我们应该提供一个用户界面，让用户手动开始播放；这是由函数 `showPlayButton()` 处理的。

任何其他错误都会被适当处理。

如果 `play()` 返回的 Promise 已正确解决，则 `then()` 子句将运行，并且可以在自动播放开始时开始执行任何需要执行的操作。

## Autoplay using the Web Audio API

In the [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API), a web site or app can start playing audio using the `start()` method on a source node linked to the {{domxref("AudioContext")}}. Doing so outside the context of handling a user input event is subject to autoplay rules.

_More content will come soon; autoplay blocking is still being worked on at Mozilla. If others have it already, they are welcome to pitch in with this section..._

## The autoplay feature policy

In addition to the browser-side management and control over autoplay functionality described above, a web server can also express its willingness to allow autoplay to function. The {{Glossary("HTTP")}} {{HTTPHeader("Permissions-Policy")}} header's [`autoplay`](/zh-CN/docs/Web/HTTP/Headers/Permissions-Policy/autoplay) directive is used to control which domains, if any, can be used to autoplay media. By default, the `autoplay` feature policy is set to `'self'` (_including the single quote characters_), indicating that autoplay is permitted as they're hosted on the same domain as the document.

You can also specify `'none'` to disable autoplay entirely, `'*'` to allow autoplay from all domains, or one or more specific origins from which media can be automatically played. These origins are separated by space characters.

> **备注：** The specified feature policy applies to the document and every {{HTMLElement("iframe")}} nested within it, unless those frames include an [`allow`](/zh-CN/docs/Web/HTML/Element/iframe#allow), which sets a new feature policy for that frame and all frames nested within it.

When using the [`allow`](/zh-CN/docs/Web/HTML/Element/iframe#allow) attribute on an `<iframe>` to specify a feature policy for that frame and its nested frames, you can also specify the value `'src'` to allow autoplay of media only from the same domain as that specified by the frame's [`src`](/zh-CN/docs/Web/HTML/Element/iframe#src) attribute.

### Example: Allowing autoplay only from the document's domain

To use the {{HTTPHeader("Permissions-Policy")}} header to only allow media to autoplay from the document's {{Glossary("origin")}}:

```plain
Permissions-Policy: autoplay 'self'
```

To do the same for an {{HTMLElement("iframe")}}:

```html
<iframe src="mediaplayer.html" allow="autoplay 'src'"> </iframe>
```

### Example: Allowing autoplay and fullscreen mode

Adding [Fullscreen API](/zh-CN/docs/Web/API/Fullscreen_API) permission to the previous example results in a `Permissions-Policy` header like the following if fullscreen access is allowed regardless of the domain; a domain restriction can be added as well as needed.

```plain
Permissions-Policy: autoplay 'self'; fullscreen
```

The same permissions, grated using the `<iframe>` element's `allow` property, look like this:

```html
<iframe src="mediaplayer.html" allow="autoplay 'src'; fullscreen"> </iframe>
```

### Example: Allowing autoplay from specific sources

The `Permissions-Policy` header to allow media to be played from both the document's (or `<iframe>`'s) own domain and `https://example.media` looks like this:

```plain
Permissions-Policy: autoplay 'self' https://example.media
```

An {{HTMLElement("iframe")}} can be written to specify that this autoplay policy should be applied to itself and any child frames would be written thusly:

```html
<iframe
  width="300"
  height="200"
  src="mediaplayer.html"
  allow="autoplay 'src' https://example.media">
</iframe>
```

### Example: Disabling autoplay

Setting the `autoplay` feature policy to `'none'` disables autoplay entirely for the document or `<iframe>` and all nested frames. The HTTP header is:

```plain
Permissions-Policy: autoplay 'none'
```

Using the `<iframe>`'s `allow` attribute:

```html
<iframe src="mediaplayer.html" allow="autoplay 'none'"> </iframe>
```

## Best practices

Tips and recommended best practices to help you make the most of working with autoplay are offered here.

### Handling autoplay failure with media controls

A common use case for autoplay is to automatically begin to play a video clip that goes along with an article, an advertisement, or a preview of the page's main functionality. To autoplay videos like these, you have two options: don't have an audio track, or have an audio track but configure the {{HTMLElement("video")}} element to mute the audio by default, like this:

```html
<video src="/videos/awesomevid.webm" controls autoplay muted></video>
```

This video element is configured to include the user controls (typically play/pause, scrubbing through the video's timeline, volume control, and muting); also, since the [`muted`](/zh-CN/docs/Web/HTML/Element/video#muted) attribute is included, the video will autoplay but with the audio muted. The user has the option, however, of re-enabling the audio by clicking on the unmute button in the controls.

## Browser configuration options

Browsers may have preferences that control the way autoplay works, or how autoplay blocking is handled. Here, any such preferences that may be of special significance or importance to you as a web developer are listed. These include any that may aid in testing or debugging as well as any that could be set in a way that you need to be prepared to handle.

### Firefox

- `media.allowed-to-play.enabled`
  - : A Boolean preference which specifies whether or not the {{domxref("HTMLMediaElement.allowedToPlay")}} property is exposed to the web. This is currently `false` by default (except in nightly builds, where it's `true` by default). If this is `false`, the `allowedToPlay` property is missing from the `HTMLMediaElement` interface, and is thus not present on either {{HTMLElement("audio")}} or {{HTMLElement("video")}} elements.
- `media.autoplay.allow-extension-background-pages`
  - : This Boolean preference, if `true`, allows browser extensions' background scripts to autoplay audio media. Setting this value to `false` disables this capability. The default value is `true`.
- `media.autoplay.allow-muted`
  - : A Boolean preference which if `true` (the default) allows audio media which is currently muted to be automatically played. If this has been changed to `false`, media with an audio track will not be permitted to play even if muted.
- `media.autoplay.block-webaudio`
  - : A Boolean preference which indicates whether or not to apply autoplay blocking to the [Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API). The default is `true`.
- `media.autoplay.default`
  - : An integer preference which specifies whether per-domain configuration for autoplay support by default is allowed (`0`), blocked (`1`), or prompt-on-use (`2`). The default value is `0`.
- `media.autoplay.enabled.user-gestures-needed` (Nightly builds only)
  - : A Boolean preference which controls whether or not detection of user gestures is allowed to override the setting of `media.autoplay.default`. If `media.autoplay.default` is _not_ set to `0` (autoplay allowed by default), this preference being `true` allows autoplay of media with audio tracks anyway if the page has been activated by user gestures, and media that isn't audible is not restricted at all.
- `media.block-autoplay-until-in-foreground`
  - : A Boolean preference which indicates whether or not media playback is blocked when started on a background tab. The default value, `true`, means that even when otherwise available, autoplay won't take place until after a tab is brought to the foreground. This prevents the distracting situation in which a tab begins playing sound and the user can't find the tab among all their tabs and windows.

## 参见

- [Web media technologies](/zh-CN/docs/Web/Media)
- [Video and audio content](/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content) (Learning guide)
- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [Cross-browser audio basics](/zh-CN/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/Cross-browser_audio_basics)
