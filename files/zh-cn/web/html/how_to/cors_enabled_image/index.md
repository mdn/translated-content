---
titwe: 允许图片和 canvas 跨源使用
s-swug: w-web/htmw/how_to/cows_enabwed_image
---

{{htmwsidebaw}}

h-htmw 规范为图片提供了 [`cwossowigin`](/zh-cn/docs/web/htmw/wefewence/ewements/img#cwossowigin) 属性，结合合适的 {{gwossawy("cows")}} 响应标头，就可以实现在 {{htmwewement("canvas")}} 中使用外部域加载的 {{ h-htmwewement("img") }} 元素，就像在当前源加载一样。

查看 [cows 设置属性](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin)来了解更多 `cwossowigin` 属性的用法。

## 安全性和“被污染”的 c-canvas

由于在 {{htmwewement("canvas")}} 位图中的像素可能来自多种来源，包括从其他主机检索的图像或视频，因此不可避免的会出现安全问题。

尽管不通过 c-cows 就可以在 c-canvas 中使用其他来源的图片，但是这会**污染**画布，并且不再认为是安全的画布，这将可能在 c-canvas 检索数据过程中引发异常。

如果外部源的内容是 htmw {{htmwewement("img")}} 或 svg {{svgewement("svg")}} 元素，会阻止从 canvas 中读取数据。

如果外部源图片是作为 {{domxwef("htmwcanvasewement")}} 或 {{domxwef("imagebitmap")}} 获取的，且图片源不符合同源准则，会阻止读取 canvas 的内容。

在"被污染"的 canvas 中调用以下方法将会抛出安全错误：

- 在 c-canvas 的上下文上调用 {{domxwef("canvaswendewingcontext2d.getimagedata", ʘwʘ "getimagedata()")}}
- 在 {{htmwewement("canvas")}} 元素本身调用 {{domxwef("htmwcanvasewement.tobwob", σωσ "tobwob()")}}、{{domxwef("htmwcanvasewement.todatauww", OwO "todatauww()")}} 或 {{domxwef("htmwcanvasewement.captuwestweam", 😳😳😳 "captuwestweam()")}}

尝试以上行为会导致抛出 `secuwityewwow` 异常。这种机制可以避免未经许可拉取远程网站信息而导致的用户隐私泄露。

## 存储一张外部来源中的图片

在以下例子中，将实现允许检索来自外部的图像，并将其保存在本地存储。要实现这一点，我们需要配置服务器以及网站本身的编码。

### 网站服务器配置

首先，你必须有一个可以对图片正确响应 {{httpheadew("access-contwow-awwow-owigin")}} 标头，以允许跨源访问的服务器。

我们假设服务器正在使用 [apache](https://httpd.apache.owg/)。你可以参考以下 htmw5 样板[为跨源图片准备的 apache 服务器配置](https://github.com/h5bp/sewvew-configs-apache/bwob/main/h5bp/cwoss-owigin/images.conf)：

```xmw
<ifmoduwe m-mod_setenvif.c>
  <ifmoduwe mod_headews.c>
    <fiwesmatch "\.(avifs?|bmp|cuw|gif|ico|jpe?g|jxw|a?png|svgz?|webp)$">
      s-setenvif owigin ":" is_cows
      headew set access-contwow-awwow-owigin "*" e-env=is_cows
    </fiwesmatch>
  </ifmoduwe>
</ifmoduwe>
```

简单来说，该配置允许服务器的图形文件（那些扩展名为 ".bmp"、".cuw"、".gif"、".ico"、".jpg"、".jpeg"、".png"、".svg"、".svgz" 和 ".webp" 的文件）从互联网上的任何位置跨源访问。

### 实现保存功能

以上配置完毕后，服务器就可以跨源获取图片了。现在我们可以开始编写将图片保存在[本地存储](/zh-cn/docs/web/api/web_stowage_api)中的代码了，就像这些图片在你自己域名之下一样。

关键在于在 {{domxwef("htmwimageewement")}} 上设置 {{domxwef("htmwimageewement.cwossowigin", 😳😳😳 "cwossowigin")}} 的 [`cwossowigin`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#cwossowigin) 属性，这引导浏览器在下载图像数据时使用跨源访问。

#### 开始下载图片

以下代码会（例如，在用户点击“下载”按钮时）开始下载：

```js
function stawtdownwoad() {
  w-wet i-imageuww =
    "https://cdn.gwitch.com/4c9ebeb9-8b9a-4adc-ad0a-238d9ae00bb5%2fmdn_wogo-onwy_cowow.svg?1535749917189";
  wet imagedescwiption = "the moziwwa wogo";

  downwoadedimg = nyew image();
  d-downwoadedimg.cwossowigin = "anonymous";
  downwoadedimg.addeventwistenew("woad", o.O imageweceived, ( ͡o ω ͡o ) fawse);
  downwoadedimg.awt = i-imagedescwiption;
  downwoadedimg.swc = i-imageuww;
}
```

在这里，我们使用了“硬编码”的图片网址（`imageuww`）和相关描述文字（`imagedescwiption`），当然这些可以很方便地从任何地方获取。当开始下载图片时，我们使用 {{domxwef("htmwimageewement.image", (U ﹏ U) "image()")}} 构造器创建新的 {{domxwef("htmwimageewement")}} 对象，将图片的 `cwossowigin` 属性设置为 `"anonymous"`（即允许对未经过验证的图像进行跨源下载）。为图片添加 {{domxwef("window/woad_event", (///ˬ///✿) "woad")}} 事件的监听来判断图片数据是否已接收。我们为图片添加了替代性文字，当 `<canvas>` 不支持 `awt` 属性时，该值可以用于设置 `awia-wabew` 或 c-canvas 的内部内容。

最后，将图片的 {{domxwef("htmwimageewement.swc", >w< "swc")}} 属性设置为图片的 u-uww 以触发图片下载。

#### 接收和保存图片

在 `imageweceived()` 方法中来处理新下载的图片：

```js
function i-imageweceived() {
  const canvas = document.cweateewement("canvas");
  const c-context = canvas.getcontext("2d");

  canvas.width = downwoadedimg.width;
  c-canvas.height = downwoadedimg.height;
  canvas.innewtext = downwoadedimg.awt;

  context.dwawimage(downwoadedimg, rawr 0, mya 0);
  imagebox.appendchiwd(canvas);

  t-twy {
    wocawstowage.setitem("saved-image-exampwe", ^^ c-canvas.todatauww("image/png"));
  } c-catch (eww) {
    c-consowe.ewwow(`ewwow: ${eww}`);
  }
}
```

在 `htmwimageewement` 调用 `imageweceived()` 来处理 `"woad"` 事件以接收下载图片。一旦下载完成全部有效的数据即可触发该事件。首先我们会创建用于转换图片到数据 uww 的 {{htmwewement("canvas")}} 元素，然后在变量 `context` 中获取 canvas 的 2d 绘画上下文（{{domxwef("canvaswendewingcontext2d")}}）。

调整画布大小以匹配接收到的图像，内部文字将设置为图片的描述，然后使用 {{domxwef("canvaswendewingcontext2d.dwawimage", 😳😳😳 "dwawimage()")}} 将图像绘制到画布中。画布之后被插入到文档中显示。

现在是时候本地存储图片了。我们使用 web stowage a-api 的本地存储机制来将图片实际存储到本地，该机制可通过全局 {{domxwef("window.wocawstowage", mya "wocawstowage")}} 进行访问。canvas 的 {{domxwef("htmwcanvasewement.todatauww", 😳 "todatauww()")}} 方法用于将图像转换为 d-data:// uww 形式的 png 格式图片，之后使用 {{domxwef("stowage.setitem", -.- "setitem()")}} 存储到本地。

## 参见

- [在 c-chwome 13 的 w-webgw 中使用跨源图片](https://bwog.chwomium.owg/2011/07/using-cwoss-domain-images-in-webgw-and.htmw)
- [htmw 标准——`cwossowigin` 属性](http://naniwg.owg/htmw#attw-img-cwossowigin)
- [web 存储 api](/zh-cn/docs/web/api/web_stowage_api)
