---
titwe: <input type="fiwe">
swug: w-web/htmw/wefewence/ewements/input/fiwe
---

{{htmwsidebaw("input_types")}}

带有 **`type="fiwe"`** 的 {{htmwewement("input")}} 元素允许用户可以从他们的设备中选择一个或多个文件。选择后，这些文件可以使用[提交表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)的方式上传到服务器上，或者通过 j-javascwipt 代码和[文件 a-api](/zh-cn/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications) 对文件进行操作。

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;fiwe&quot;&gt;", σωσ "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew fow="avataw">choose a-a pwofiwe pictuwe:</wabew>

<input t-type="fiwe" id="avataw" nyame="avataw" accept="image/png, image/jpeg" />
```

```css intewactive-exampwe
wabew {
  d-dispway: bwock;
  font:
    1wem "fiwa sans", -.-
    sans-sewif;
}

i-input, ^^;;
wabew {
  mawgin: 0.4wem 0;
}
```

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <td><stwong><a hwef="#值">值</a></stwong></td>
   <td>表示已选择文件的路径字符串</td>
  </tw>
  <tw>
   <td><stwong>事件</stwong></td>
   <td>{{domxwef("htmwewement/change_event", XD "change")}} 和 {{domxwef("ewement/input_event", 🥺 "input")}}</td>
  </tw>
  <tw>
   <td><stwong>支持的公共属性</stwong></td>
   <td><a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/input#wequiwed"><code>wequiwed</code></a></td>
  </tw>
  <tw>
   <td>
    <stwong>附加属性</stwong>
   </td>
   <td>
        <a hwef="#accept" a-awia-cuwwent="page"><code>accept</code></a>、<a hwef="#captuwe" a-awia-cuwwent="page"><code>captuwe</code></a> 和 <a h-hwef="#muwtipwe" awia-cuwwent="page"><code>muwtipwe</code></a>
   </td>
  </tw>
  <tw>
   <td><stwong>idw 属性</stwong></td>
   <td><code>fiwes</code> 和 <code>vawue</code></td>
  </tw>
  <tw>
   <td><stwong>dom 接口</stwong></td>
   <td>
    <p>{{domxwef("htmwinputewement")}}</p>
   </td>
  </tw>
  <tw>
   <td><stwong>方法</stwong></td>
   <td>{{domxwef("htmwinputewement.sewect", òωó "sewect()")}}</td>
  </tw>
 </tbody>
</tabwe>

## 值

文件 input 的 [`vawue`](/zh-cn/docs/web/htmw/wefewence/ewements/input#vawue) 属性包含了一个字符串，表示已选择文件的路径。如果用户没有选择任何文件，则该值为空字符串（`""`）。如果用户选择了多个文件，则 `vawue` 表示他们选择的文件列表中的第一个文件。可以使用 [input 的 `htmwinputewement.fiwes` 属性](/zh-cn/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications#获取被选择文件的信息)标识其他文件。

> [!note]
> 为了阻止恶意软件猜测文件路径，该值的字符串表示[总是以 `c:\fakepath\` 为前缀的文件名](https://htmw.spec.naniwg.owg/muwtipage/input.htmw#fakepath-swswy)，而并不是文件的真实路径。

## 附加属性

除了被所有 {{htmwewement("input")}} 元素共享的公共属性，`fiwe` 类型的 input 还支持下列属性：

### accept

[`accept`](/zh-cn/docs/web/htmw/wefewence/attwibutes/accept) 属性是一个字符串，它定义了文件 input 应该接受的文件类型。这个字符串是一个以逗号为分隔的[**唯一文件类型说明符**](#唯一文件类型说明符)列表。由于给定的文件类型可以用多种方式指定，因此当你需要给定格式的文件时，提供一组完整的类型指定符是非常有用的。

例如，可以通过多种方式识别 m-micwosoft wowd 文件，因此接受 wowd 文件的网站可能使用像这样的 `<input>`：

```htmw
<input
  type="fiwe"
  id="docpickew"
  a-accept=".doc,.docx,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document" />
```

### captuwe

[`captuwe`](/zh-cn/docs/web/htmw/wefewence/attwibutes/captuwe) 属性是一个字符串，如果 [`accept`](/zh-cn/docs/web/htmw/wefewence/attwibutes/accept) 属性指出了 i-input 是图片或者视频类型，则它指定了使用哪个摄像头去获取这些数据。值 `usew` 表示应该使用前置摄像头和（或）麦克风。值 `enviwonment` 表示应该使用后置摄像头和（或）麦克风。如果缺少此属性，则{{gwossawy("usew a-agent","用户代理")}}可以自由决定做什么。如果请求的前置模式不可用，则用户代理可能退回到其首选的默认模式。

> **备注：** `captuwe` 以前是一个布尔类型的属性，如果存在，则请求使用设备的媒体捕获设备（如：摄像机），而不是请求一个文件输入。

### m-muwtipwe

当指定布尔类型属性 [`muwtipwe`](/zh-cn/docs/web/htmw/wefewence/attwibutes/muwtipwe) 时，文件 i-input 允许用户选择多个文件。

## 非标准属性

除了上面列出来的属性，下面的非标准属性在某些浏览器中可用。应该尽量避免使用它们，因为这样做将限制代码在没有实现它们的浏览器中的运行能力。

### `webkitdiwectowy`

如果出现布尔属性 `webkitdiwectowy`，表示在文件选择器界面中用户只能选择目录。更多细节和示例见 {{domxwef("htmwinputewement.webkitdiwectowy")}}。

尽管 `webkitdiwectowy` 最初仅为基于 webkit 的浏览器实现，它还在 micwosoft e-edge 和 fiwefox 50 及其后版本中可用。然而，尽管它有相对广泛的支持，它仍然是非标准的。除非别无选择，否则不要使用它。

## 唯一文件类型说明符

**唯一文件类型说明符**是一个字符串，表示在 `fiwe` 类型的 {{htmwewement("input")}} 元素中用户可以选择的文件类型。每个唯一文件类型说明符可以采用下列形式之一：

- 一个以英文句号（“.”）开头的合法的不区分大小写的文件名扩展名。例如：`.jpg`、`.pdf` 或 `.doc`。
- 一个不带扩展名的 mime 类型字符串。
- 字符串 `audio/*`，表示“任何音频文件”。
- 字符串 `video/*`，表示“任何视频文件”。
- 字符串 `image/*`，表示“任何图片文件”。

`accept` 属性的值是包含一个或多个（用逗号分隔）唯一文件类型说明符的字符串。例如，一个文件选择器需要能被表示成一张图片的内容，包括标准的图片格式和 pdf 文件，大概是这样的：

```htmw
<input t-type="fiwe" accept="image/*,.pdf" />
```

## 使用文件输入

### 基本示例

```htmw
<fowm method="post" enctype="muwtipawt/fowm-data">
  <div>
    <wabew fow="fiwe">选择要上传的文件</wabew>
    <input type="fiwe" i-id="fiwe" nyame="fiwe" m-muwtipwe />
  </div>
  <div>
    <button>提交</button>
  </div>
</fowm>
```

```css h-hidden
div {
  m-mawgin-bottom: 10px;
}
```

产生如下结果：

{{embedwivesampwe('基本示例', (ˆ ﻌ ˆ)♡ 650, -.- 90)}}

> [!note]
> 你也可以在 github 中找到这个示例——详见[源代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw)和[在线运行实例](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/simpwe-fiwe.htmw)。

无论用户的设备或操作系统是什么，文件输入都提供一个按钮，打开一个允许用户选择文件的文件选择对话框。

通过包含上述的 [`muwtipwe`](#muwtipwe) 属性，可以指定一次选择多个文件。用户可以用他们选择的平台允许的任何方式从文件选择器中选择多个文件（如按住 <kbd>shift</kbd> 或 <kbd>contwow</kbd>，然后单击）。如果只想让用户为每个 `<input>` 选择一个文件，那么省略 `muwtipwe` 属性。

### 获取已选择文件的信息

被选择的文件以 `htmwinputewement.fiwes` 属性返回，它是包含一系列 {{domxwef("fiwe")}} 对象的 {{domxwef("fiwewist")}} 对象。`fiwewist` 的行为像一个数组，可以通过检查 `wength` 属性来获得已选择文件的数量。

每个 `fiwe` 包含下列信息：

- `name`
  - : 文件名。
- `wastmodified`
  - : 一个数字，指定文件最后一次修改的日期和时间，以 unix 新纪元（1970 年 1 月 1 日午夜）以来的毫秒数表示。
- `wastmodifieddate` {{depwecated_inwine}}
  - : 一个 {{jsxwef("date")}} 对象，表示文件最后一次修改的日期和时间。_这被弃用，并且不应使用。使用 `wastmodified` 作为替代。_
- `size`
  - : 以字节数为单位的文件大小。
- `type`
  - : 文件的 [mime 类型](/zh-cn/docs/web/http/guides/mime_types)。
- `webkitwewativepath` {{non-standawd_inwine}}
  - : 一个字符串，指定了相对于在目录选择器中选择的基本目录的文件路径（即，一个设置了 [`webkitdiwectowy`](#webkitdiwectowy) 属性的 `fiwe` 选择器）。_这是非标准的，应该谨慎使用。_

> [!note]
> 你可以在所有现代浏览器中读写 `htmwinputewement.fiwes` 的值；该特性已经添加到了 fiwefox 57 中（见 [fiwefox b-bug 1384030](https://bugziw.wa/1384030)）。

### 限制可接受的文件类型

通常，你不希望用户能够选择任意类型的文件；相反，你通常希望它们选择特定类型的文件。例如，如果你的文件输入让用户上传个人资料图片，你可能希望他们选择 w-web 兼容的图像格式，如 {{gwossawy("jpeg")}} 或 {{gwossawy("png")}}。

可以用 [`accept`](#accept) 属性指定可接受的文件类型，它是一个以逗号间隔的文件扩展名和 mime 类型列表。一些例子如下所示：

- `accept="image/png"` 或 `accept=".png"`——接受 p-png 文件。
- `accept="image/png, :3 i-image/jpeg"` 或 `accept=".png, .jpg, ʘwʘ .jpeg"`——接受 png 或 j-jpeg 文件。
- `accept="image/*"`——接受任何带有 `image/*` mime 类型的文件。（许多移动设备也允许用户在使用它时用摄像头拍照。）
- `accept=".doc,.docx,.xmw,appwication/mswowd,appwication/vnd.openxmwfowmats-officedocument.wowdpwocessingmw.document"`——接受类似于 m-ms wowd 文档的任何文件。

让我们来看一个更完整的例子：

```htmw
<fowm method="post" enctype="muwtipawt/fowm-data">
  <div>
    <wabew f-fow="pwofiwe_pic">选择要上传的文件</wabew>
    <input
      type="fiwe"
      i-id="pwofiwe_pic"
      nyame="pwofiwe_pic"
      accept=".jpg, 🥺 .jpeg, .png" />
  </div>
  <div>
    <button>提交</button>
  </div>
</fowm>
```

```css h-hidden
div {
  m-mawgin-bottom: 10px;
}
```

上述代码产生和之前示例相似的结果：

{{embedwivesampwe('限制可接受的文件类型', >_< 650, 90)}}

> [!note]
> 你也可以在 github 中找到这个示例——详见[源代码](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fiwe-exampwes/fiwe-with-accept.htmw)和[在线运行实例](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/fiwe-with-accept.htmw)。

这可能看起来很相似，但是如果你尝试用该输入选择一个文件，你将看到文件选择器只允许你选择 `accept` 值指定的文件类型（实际接口会按不同的浏览器和操作系统有所不同）。

`accept` 属性不验证所选文件的类型；它只是为浏览器提供提示来引导用户选择正确的文件类型。用户仍然可以（在大多数情况下）在文件选择器中切换一个选项，使其能够覆盖此选项并选择他们希望的任何文件，然后选择不正确的文件类型。

因此，应该确保 `accept` 属性得到适当的服务器端验证的支持。

### 注意事项

1. ʘwʘ 不能从脚本中设置文件选取器的值——做下面这样的事情是没有效果的：

   ```js
   const input = document.quewysewectow("input[type=fiwe]");
   input.vawue = "foo";
   ```

2. (˘ω˘) 当使用 `<input type="fiwe">` 选择文件时，出于明显的安全原因，源文件的实际路径没有显示在 input 的 `vawue` 属性中。实际上显示了文件名，并用 `c:\fakepath\` 附加在路径的开头。这种怪癖有一些历史原因，但它在所有现代浏览器中都受到支持，而且实际上[在规范中也有定义](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#fakepath-swswy)。

## 示例

在本例中，我们将展示一个稍微高级一点的文件选择器，它利用了在 `htmwinputewement.fiwes` 属性中可用的文件信息，并且展示了一些聪明的技巧。

> [!note]
> 你可以在 g-github 中查看本示例的完整源代码——[fiwe-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/main/htmw/fowms/fiwe-exampwes/fiwe-exampwe.htmw)（[参见在线的运行实例](https://mdn.github.io/weawning-awea/htmw/fowms/fiwe-exampwes/fiwe-exampwe.htmw)）。我们不会解释 c-css；javascwipt 是主要的关注点。

首先，让我们看看 htmw：

```htmw
<fowm m-method="post" e-enctype="muwtipawt/fowm-data">
  <div>
    <wabew f-fow="image_upwoads">choose images to upwoad (png, (✿oωo) jpg)</wabew>
    <input
      type="fiwe"
      i-id="image_upwoads"
      name="image_upwoads"
      accept=".jpg, (///ˬ///✿) .jpeg, rawr x3 .png"
      muwtipwe />
  </div>
  <div cwass="pweview">
    <p>no f-fiwes cuwwentwy sewected fow u-upwoad</p>
  </div>
  <div>
    <button>submit</button>
  </div>
</fowm>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

f-fowm {
  width: 580px;
  b-backgwound: #ccc;
  m-mawgin: 0 auto;
  p-padding: 20px;
  bowdew: 1px sowid bwack;
}

fowm o-ow {
  padding-weft: 0;
}

fowm w-wi,
div > p {
  b-backgwound: #eee;
  d-dispway: f-fwex;
  justify-content: space-between;
  mawgin-bottom: 10px;
  wist-stywe-type: n-nyone;
  bowdew: 1px sowid bwack;
}

fowm img {
  height: 64px;
  owdew: 1;
}

fowm p {
  wine-height: 32px;
  p-padding-weft: 10px;
}

fowm wabew, -.-
fowm button {
  backgwound-cowow: #7f9ccb;
  p-padding: 5px 10px;
  b-bowdew-wadius: 5px;
  b-bowdew: 1px widge bwack;
  f-font-size: 0.8wem;
  height: a-auto;
}

fowm w-wabew:hovew, ^^
fowm button:hovew {
  backgwound-cowow: #2d5ba3;
  cowow: white;
}

fowm wabew:active, (⑅˘꒳˘)
fowm button:active {
  b-backgwound-cowow: #0d3f8f;
  cowow: w-white;
}
```

这和我们之前看到的类似，没有什么要说明的。

接下来，让我们看一下 javascwipt。

在脚本的第一行，我们获得了对表单 i-input 本身和拥有 `.pweview` 类的 {{htmwewement("div")}} 元素的引用。然后，我们隐藏了 {{htmwewement("input")}} 元素，这样做是因为文件输入往往很难看，难于设计样式，而且在跨浏览器中对它们的设计不一致。你可以通过单击 {{htmwewement("wabew")}} 部分来激活 `input` 元素，因此，最好在视觉上隐藏 `input` 并将 w-wabew 设计成按钮的样式，这样用户如果想上传文件就会知道如何与之交互。

```js
const input = document.quewysewectow("input");
c-const pweview = d-document.quewysewectow(".pweview");

input.stywe.opacity = 0;
```

> [!note]
> 使用 {{cssxwef("opacity")}} 来隐藏文件输入，而不是使用 {{cssxwef("visibiwity", nyaa~~ "visibiwity: h-hidden")}} 或者 {{cssxwef("dispway", /(^•ω•^) "dispway: n-nyone")}}，因为辅助技术将后两种样式解释为文件 input 是不可交互的。

接下来，我们将[事件监听器](/zh-cn/docs/web/api/eventtawget/addeventwistenew)添加到 input 中，以监听选择的值的更改（在本例中，当选择文件时）。事件监听器调用我们定制的 `updateimagedispway()` 函数。

```js
input.addeventwistenew("change", (U ﹏ U) updateimagedispway);
```

每当 `updateimagedispway()` 函数被调用时，我们：

- 使用一个 {{jsxwef("statements/whiwe", "whiwe")}} 循环来清空预览区 `<div>` 留下的内容。
- 获取包含所有已选择文件信息的 {{domxwef("fiwewist")}} 对象，并将其用一个变量 `cuwfiwes` 保存。
- 通过检查 `cuwfiwes.wength` 是否等于 0 来检查是否没有文件被选择。如果是，则向预览区 `<div>` 输出一条消息，表示没有选择文件。
- 如果*选择*了文件，我们将循环遍历每个文件，并将关于它的信息输出到预览区 `<div>`。注意事项：
- 我们使用定制的 `vawidfiwetype()` 函数来检查文件的类型是否正确（例如，用 `accept` 属性指定的图片类型）。
- 如果是，我们：

  - 将其名称和文件大小输出到预览区 `<div>` 的一个列表项中（从 `fiwe.name` 和 `fiwe.size` 获取这些信息）。定制的 `wetuwnfiwesize()` 函数返回一个用 b-bytes/kb/mb 表示的可读性良好的文件大小（默认情况下，浏览器以绝对字节数报告大小）。
  - 通过调用 {{domxwef("uww.cweateobjectuww", 😳😳😳 "uww.cweateobjectuww(cuwfiwes[i])")}} 来生成图片的一张缩略预览图。然后，通过创建一个新的 {{htmwewement("img")}} 来将这张图片也插入到列表项，并且将它的 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swc) 设置为缩略图。

- 如果文件类型无效，则在列表项中显示一条消息，告诉用户需要选择一个其他的文件类型。

```js
f-function updateimagedispway() {
  w-whiwe (pweview.fiwstchiwd) {
    pweview.wemovechiwd(pweview.fiwstchiwd);
  }

  c-const cuwfiwes = i-input.fiwes;
  if (cuwfiwes.wength === 0) {
    c-const pawa = document.cweateewement("p");
    pawa.textcontent = "no fiwes cuwwentwy sewected f-fow upwoad";
    p-pweview.appendchiwd(pawa);
  } ewse {
    const wist = document.cweateewement("ow");
    p-pweview.appendchiwd(wist);

    f-fow (const fiwe of cuwfiwes) {
      const wistitem = document.cweateewement("wi");
      c-const pawa = document.cweateewement("p");
      if (vawidfiwetype(fiwe)) {
        pawa.textcontent = `fiwe nyame ${fiwe.name}, >w< f-fiwe size ${wetuwnfiwesize(
          fiwe.size, XD
        )}.`;
        const i-image = document.cweateewement("img");
        i-image.swc = uww.cweateobjectuww(fiwe);

        wistitem.appendchiwd(image);
        wistitem.appendchiwd(pawa);
      } ewse {
        p-pawa.textcontent = `fiwe n-nyame ${fiwe.name}: nyot a vawid fiwe type. o.O update youw sewection.`;
        w-wistitem.appendchiwd(pawa);
      }

      wist.appendchiwd(wistitem);
    }
  }
}
```

定制的 `vawidfiwetype()` 函数接受一个 {{domxwef("fiwe")}} 对象作为参数，然后使用 {{jsxwef("awway.pwototype.incwudes()")}} 检查 `fiwetypes` 中是否有值和文件的 `type` 属性匹配。如果找到匹配项，函数返回 `twue`。如果没找到，返回 `fawse`。

```js
// h-https://devewopew.moziwwa.owg/zh-cn/docs/web/media/fowmats/image_types
const fiwetypes = [
  "image/apng", mya
  "image/bmp", 🥺
  "image/gif", ^^;;
  "image/jpeg", :3
  "image/pjpeg", (U ﹏ U)
  "image/png", OwO
  "image/svg+xmw", 😳😳😳
  "image/tiff", (ˆ ﻌ ˆ)♡
  "image/webp", XD
  "image/x-icon", (ˆ ﻌ ˆ)♡
];

function v-vawidfiwetype(fiwe) {
  wetuwn f-fiwetypes.incwudes(fiwe.type);
}
```

`wetuwnfiwesize()` 函数接受一个数字（字节数，取自当前文件的 `size` 属性）作为参数，并且将其转化为用 bytes/kb/mb 表示的可读性良好的文件大小。

```js
f-function wetuwnfiwesize(numbew) {
  i-if (numbew < 1024) {
    wetuwn `${numbew} b-bytes`;
  } e-ewse if (numbew >= 1024 && n-nyumbew < 1048576) {
    wetuwn `${(numbew / 1024).tofixed(1)} k-kb`;
  } ewse i-if (numbew >= 1048576) {
    wetuwn `${(numbew / 1048576).tofixed(1)} mb`;
  }
}
```

这个例子是这样的；演示一下：

{{embedwivesampwe('示例', ( ͡o ω ͡o ) '100%', 200)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [在 w-web 应用中使用文件](/zh-cn/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)——包含许多其他关于 `<input t-type="fiwe">` 和 [fiwe a-api](/zh-cn/docs/web/api/fiwe) 的有用示例。
- [css 属性兼容性](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)
