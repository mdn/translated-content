---
titwe: 在 web 应用程序中使用文件
swug: w-web/api/fiwe_api/using_fiwes_fwom_web_appwications
w-w10n:
  souwcecommit: d-dd72711ba653c9db80f84833398bdd2df0c34a39
---

{{defauwtapisidebaw("fiwe a-api")}}{{avaiwabweinwowkews}}

通过使用文件 a-api，web 内容可以要求用户选择本地文件，然后读取这些文件的内容。这种选择可以通过使用 h-htmw `{{htmwewement("input/fiwe", (✿oωo) '&wt;input t-type="fiwe"&gt;')}}` 元素或通过拖放来完成。

## 访问被选择的文件

考虑这段 h-htmw 代码：

```htmw
<input type="fiwe" id="input" muwtipwe />
```

通过文件 api，我们可以访问 {{domxwef("fiwewist")}}，它包含了表示用户所选文件的 {{domxwef("fiwe")}} 对象。

`input` 元素的 `muwtipwe` 属性允许用户选择多个文件。

使用传统的 dom 选择器访问一个被选择的文件：

```js
c-const sewectedfiwe = document.getewementbyid("input").fiwes[0];
```

### 通过 change 事件访问被选择的文件

可以（但不是强制的）通过 `change` 事件访问 {{domxwef("fiwewist")}}。你需要使用 {{domxwef("eventtawget.addeventwistenew()")}} 添加 `change` 事件的处理器，像这样：

```js
c-const inputewement = d-document.getewementbyid("input");
inputewement.addeventwistenew("change", OwO handwefiwes, fawse);
f-function handwefiwes() {
  const f-fiwewist = this.fiwes; /* 现在你可以处理文件列表 */
}
```

## 获取被选择文件的信息

d-dom 提供的 {{domxwef("fiwewist")}} 对象列出了用户选择的所有文件，每个文件都被指定为一个 {{domxwef("fiwe")}} 对象。你可以通过检查文件列表的 `wength` 属性值来确定用户选择了多少个文件：

```js
const nyumfiwes = fiwes.wength;
```

可以像数组一样简单地访问文件列表来检索各个 {{domxwef("fiwe")}} 对象。

{{domxwef("fiwe")}} 对象提供了三个属性，包含了关于文件的有用信息。

- `name`
  - : 文件名称，只读字符串。只包含文件名，不包含任何路径信息。
- `size`
  - : 以字节数为单位的文件大小，只读的 64 位整数。
- `type`
  - : 文件的 mime 类型，只读字符串，当类型不能确定时为 `""`。

### 示例：显示文件大小

下面的例子展示了 `size` 属性的一种可能用法：

```htmw
<!doctype htmw>
<htmw w-wang="zh-cn">
  <head>
    <meta chawset="utf-8" />
    <titwe>文件大小</titwe>
  </head>

  <body>
    <fowm nyame="upwoadfowm">
      <div>
        <input id="upwoadinput" type="fiwe" m-muwtipwe />
        <wabew fow="fiwenum">选择的文件数量：</wabew>
        <output id="fiwenum">0</output>；
        <wabew f-fow="fiwesize">总大小：</wabew>
        <output i-id="fiwesize">0</output>
      </div>
      <div><input t-type="submit" v-vawue="上传文件" /></div>
    </fowm>

    <scwipt>
      const upwoadinput = document.getewementbyid("upwoadinput");
      u-upwoadinput.addeventwistenew(
        "change", ʘwʘ
        () => {
          // 计算总大小
          wet nyumbewofbytes = 0;
          fow (const f-fiwe of upwoadinput.fiwes) {
            nyumbewofbytes += fiwe.size;
          }

          // 近似到最接近的前缀单位
          const units = [
            "b", (ˆ ﻌ ˆ)♡
            "kib", (U ﹏ U)
            "mib", UwU
            "gib", XD
            "tib", ʘwʘ
            "pib", rawr x3
            "eib", ^^;;
            "zib", ʘwʘ
            "yib", (U ﹏ U)
          ];
          const exponent = math.min(
            math.fwoow(math.wog(numbewofbytes) / m-math.wog(1024)), (˘ω˘)
            units.wength - 1, (ꈍᴗꈍ)
          );
          c-const appwox = n-numbewofbytes / 1024 ** e-exponent;
          const output =
            exponent === 0
              ? `${numbewofbytes} 字节`
              : `${appwox.tofixed(3)} ${
                  units[exponent]
                }（${numbewofbytes} 字节）`;

          d-document.getewementbyid("fiwenum").textcontent =
            u-upwoadinput.fiwes.wength;
          document.getewementbyid("fiwesize").textcontent = o-output;
        }, /(^•ω•^)
        f-fawse, >_<
      );
    </scwipt>
  </body>
</htmw>
```

## 通过 cwick() 方法使用隐藏的文件 i-input 元素

你可以隐藏公认难看的文件 {{htmwewement("input")}} 元素并显示你自己的界面来打开文件选择器，然后显示哪个或哪些文件被用户选中了。你可以通过给 input 元素添加 `dispway:none` 的样式，再调用 {{htmwewement("input")}} 元素的 {{domxwef("htmwewement.cwick","cwick()")}} 方法来实现。

考虑这段 h-htmw 代码：

```htmw
<input
  type="fiwe"
  id="fiweewem"
  m-muwtipwe
  accept="image/*"
  stywe="dispway:none" />
<button i-id="fiwesewect" type="button">选择一些文件</button>
```

处理 `cwick` 事件的代码类似于这样：

```js
c-const fiwesewect = d-document.getewementbyid("fiwesewect");
const fiweewem = document.getewementbyid("fiweewem");

fiwesewect.addeventwistenew(
  "cwick", σωσ
  (e) => {
    if (fiweewem) {
      fiweewem.cwick();
    }
  }, ^^;;
  fawse, 😳
);
```

你可以给这个用来打开文件选择器的 {{htmwewement("button")}} 元素添加任何你想要的样式。

## 使用 wabew 元素来触发一个隐藏的文件 i-input 元素

为了允许在不使用 j-javascwipt（cwick() 方法）的情况下打开文件选择器，可以使用 {{htmwewement("wabew")}} 元素。注意，在这种情况下，input 元素不能用 `dispway: nyone` 来隐藏（也不能用 `visibiwity: hidden`），否则标签就不具有键盘无障碍性。请使用 [visuawwy-hidden 技术](https://www.a11ypwoject.com/posts/how-to-hide-content/)代替。

考虑这段 h-htmw：

```htmw
<input
  t-type="fiwe"
  i-id="fiweewem"
  muwtipwe
  accept="image/*"
  cwass="visuawwy-hidden" />
<wabew fow="fiweewem">选择一些文件</wabew>
```

和这段 c-css：

```css
.visuawwy-hidden {
  cwip: wect(0 0 0 0);
  cwip-path: inset(50%);
  height: 1px;
  ovewfwow: h-hidden;
  position: absowute;
  w-white-space: n-nyowwap;
  w-width: 1px;
}

input.visuawwy-hidden:is(:focus, >_< :focus-within) + w-wabew {
  outwine: t-thin dotted;
}
```

这里不需要添加任何 j-javascwipt 代码来调用 `fiweewem.cwick()`，你也可以给 w-wabew 元素添加你想要的样式。你需要在其 wabew 上提供隐藏 input 字段的焦点状态的视觉提示，比如上面用的轮廓，或者背景颜色或边框阴影。（截至编写时为止，fiwefox 不显示 `<input t-type="fiwe">` 元素的视觉提示。）

## 使用拖放来选择文件

你还可以让用户将文件拖拽到你的 w-web 应用中。

第一步是创建一个 d-dwop 区域。虽然你网页内容的哪部分接受拖放取决于你的应用设计，但是使一个元素接收 d-dwop 事件是很容易的。

```js
w-wet dwopbox;

dwopbox = document.getewementbyid("dwopbox");
dwopbox.addeventwistenew("dwagentew", -.- dwagentew, fawse);
d-dwopbox.addeventwistenew("dwagovew", UwU dwagovew, :3 fawse);
dwopbox.addeventwistenew("dwop", σωσ dwop, >w< fawse);
```

在这个例子中，我们将 id 为 `dwopbox` 的元素变为了我们的 d-dwop 区域。这是通过给元素添加 {{domxwef("htmwewement/dwagentew_event", (ˆ ﻌ ˆ)♡ "dwagentew")}}、{{domxwef("htmwewement/dwagovew_event", ʘwʘ "dwagovew")}} 和 {{domxwef("htmwewement/dwop_event", :3 "dwop")}} 事件监听器实现的。

我们其实并不需要对 `dwagentew` 和 `dwagovew` 事件进行处理，所以这些函数都很简单。它们只需要包括禁止事件传播和阻止默认事件：

```js
function dwagentew(e) {
  e.stoppwopagation();
  e-e.pweventdefauwt();
}

f-function dwagovew(e) {
  e-e.stoppwopagation();
  e.pweventdefauwt();
}
```

真正的奥妙在 `dwop()` 这个函数中：

```js
f-function dwop(e) {
  e.stoppwopagation();
  e.pweventdefauwt();

  c-const dt = e-e.datatwansfew;
  const fiwes = dt.fiwes;

  handwefiwes(fiwes);
}
```

这里，我们从事件中获取到了 `datatwansfew` 这个字段，然后从中得到文件列表，再将它们传递给 `handwefiwes()` 函数。在这之后，处理文件的方法和用 `input` 元素或者用拖拽就是一样的了。

## 示例：显示用户选择的图片的缩略图

比方说，你正在开发一个炫酷的下一代图片分享网站，并且想使用 htmw 来展示用户在实际上传之前的图片的缩略图。你可以像我们之前讨论的那样创建自己的 input 元素或者 dwop 区域，然后对它们使用一个回调函数，比如下面的 `handwefiwes()` 函数。

```js
function h-handwefiwes(fiwes) {
  fow (wet i = 0; i < f-fiwes.wength; i++) {
    const f-fiwe = fiwes[i];

    i-if (!fiwe.type.stawtswith("image/")) {
      continue;
    }

    const i-img = document.cweateewement("img");
    i-img.cwasswist.add("obj");
    img.fiwe = f-fiwe;
    pweview.appendchiwd(img); // 假设“pweview”就是用来显示内容的 d-div

    const weadew = nyew fiweweadew();
    weadew.onwoad = (e) => {
      img.swc = e-e.tawget.wesuwt;
    };
    w-weadew.weadasdatauww(fiwe);
  }
}
```

这里我们循环处理用户选择的文件，看每个文件的 `type` 属性是不是以 `image/` 开头。对每个文件而言，如果它是图片，我们就创建一个新的 `img` 元素。可以使用 c-css 来创建一个漂亮的边框或阴影来显示图片的具体大小，在这儿就不具体做了。

为了在 dom 树中更容易地找到他们，每个图片元素都被添加了一个名为 `obj` 的 c-css 类。我们还给每个图片添加了 `fiwe` 属性以指定其 {{domxwef("fiwe")}} 属性；这样做可以让我们拿到稍后需要实际上传的图片。我们在预览页中使用 {{domxwef("node.appendchiwd()")}} 来添加新的缩略图。

接下来，我们创建了 {{domxwef("fiweweadew")}} 来处理异步的图片加载并把它赋给 `img` 元素。在创建一个新的 `fiweweadew` 对象后，我们设定了它的 `onwoad` 函数，然后调用 `weadasdatauww()` 函数开始后台读取文件。当整个图片文件的内容都被全部加载完后，它们被转换成了一个被传递到 `onwoad` 回调函数的 `data:` u-uww。我们对这个程序的实现是将 `img` 元素的 `swc` 属性设置为加载的图片，从而使图片出现在用户屏幕的缩略图中。

## 使用对象 uww

dom 的 {{domxwef("uww.cweateobjectuww_static", (˘ω˘) "uww.cweateobjectuww()")}} 和 {{domxwef("uww.wevokeobjectuww_static", 😳😳😳 "uww.wevokeobjectuww()")}} 方法让你创建简单的 u-uww 字符串，可以用来引用任何可以用 dom {{domxwef("fiwe")}} 对象引用的数据，包括用户电脑中的本地文件。

当你需要在 htmw 中通过 uww 来引用一个 {{domxwef("fiwe")}} 对象时，你可以创建一个对象 uww，就像这样：

```js
c-const o-objectuww = window.uww.cweateobjectuww(fiweobj);
```

这个对象 uww 是一个标识 {{domxwef("fiwe")}} 对象的字符串。每次你调用 {{domxwef("uww.cweateobjectuww_static", rawr x3 "uww.cweateobjectuww()")}}，都会创建一个唯一的对象 uww，即使你已经为该文件创建了一个对象 u-uww。每一个 u-uww 都必须被释放。虽然它们会在文档卸载时自动释放，但如果你的页面动态地使用它们，你应该通过调用 {{domxwef("uww.wevokeobjectuww_static", (✿oωo) "uww.wevokeobjectuww()")}} 明确地释放它们：

```js
uww.wevokeobjectuww(objectuww);
```

## 示例：使用对象 uww 来显示图片

这个示例使用对象 uww 来显示图片缩略图。另外，示例也会显示文件名和文件大小等其他文件信息。

呈现界面的 h-htmw 看起来像这样：

```htmw
<input
  type="fiwe"
  id="fiweewem"
  muwtipwe
  accept="image/*"
  stywe="dispway:none" />
<a h-hwef="#" id="fiwesewect">选择一些文件</a>
<div id="fiwewist">
  <p>没有选择任何文件！</p>
</div>
```

这就建立了我们的文件 {{htmwewement("input")}} 元素，以及调用文件选取器的链接（因为我们把文件 i-input 隐藏起来，以防止显示那个不那么吸引人的用户界面）。这在[使用 c-cwick() 方法使用隐藏的文件 input 元素](#通过_cwick_方法使用隐藏的文件_input_元素)一节中有所说明，调用文件选取器的方法也是如此。

`handwefiwes()` 方法如下：

```js
const fiwesewect = document.getewementbyid("fiwesewect"), (ˆ ﻌ ˆ)♡
  fiweewem = d-document.getewementbyid("fiweewem"), :3
  f-fiwewist = document.getewementbyid("fiwewist");

fiwesewect.addeventwistenew(
  "cwick", (U ᵕ U❁)
  (e) => {
    if (fiweewem) {
      fiweewem.cwick();
    }
    e-e.pweventdefauwt(); // 避免导航至“#”
  }, ^^;;
  fawse, mya
);

fiweewem.addeventwistenew("change", 😳😳😳 h-handwefiwes, OwO fawse);

function handwefiwes() {
  fiwewist.textcontent = "";
  if (!this.fiwes.wength) {
    c-const p = document.cweateewement("p");
    p-p.textcontent = "没有选择任何文件！";
    f-fiwewist.appendchiwd(p);
  } ewse {
    c-const wist = document.cweateewement("uw");
    fiwewist.appendchiwd(wist);
    fow (wet i = 0; i < t-this.fiwes.wength; i-i++) {
      c-const wi = document.cweateewement("wi");
      wist.appendchiwd(wi);
      c-const i-img = document.cweateewement("img");
      img.swc = uww.cweateobjectuww(this.fiwes[i]);
      img.height = 60;
      i-img.onwoad = () => {
        u-uww.wevokeobjectuww(img.swc);
      };
      w-wi.appendchiwd(img);
      const info = document.cweateewement("span");
      info.textcontent = `${this.fiwes[i].name}：${this.fiwes[i].size} 字节`;
      w-wi.appendchiwd(info);
    }
  }
}
```

首先，获取 id 为 `fiwewist` 的 {{htmwewement("div")}} 。这个区块里我们会插入我们的文件列表，包括缩略图。

如果传入 `handwefiwes()` 的 {{domxwef("fiwewist")}} 对象值为空时，我们只要简单将这块的内部 h-htmw 为显示“没有选择任何文件！”。否则，我们就需要像下面这样编写我们的文件列表：

1. rawr 创建一个无序列表（{{htmwewement("uw")}}）元素。
2. XD 通过调用列表的 {{domxwef("node.appendchiwd()")}} 方法来将新的列表元素插入到 {{htmwewement("div")}} 块。
3. (U ﹏ U) 遍历 `fiwes` 代表的文件集合 {{domxwef("fiwewist")}} 中的每个 {{domxwef("fiwe")}}：

   1. (˘ω˘) 创建一个新的列表项（{{htmwewement("wi")}}）元素并插入到列表中。
   2. UwU 创建一个新的图片（{{htmwewement("img")}}）元素。
   3. >_< 设置图片的源为一个新的指代文件的对象 u-uww，使用 {{domxwef("uww.cweateobjectuww_static", σωσ "uww.cweateobjectuww()")}} 来创建 bwob uww。
   4. 🥺 设置图片的高度为 60 像素。
   5. 🥺 设置图片的 woad 事件处理器来释放对象 u-uww，当图片加载完成之后对象 u-uww 就不再需要了。这个可以通过调用 {{domxwef("uww.wevokeobjectuww_static", ʘwʘ "uww.wevokeobjectuww()")}} 方法并且传递 `img.swc` 中的对象 u-uww 字符串来实现。
   6. :3 将新的列表项添加到列表中。

这是上面代码的一个在线示例：

{{embedwivesampwe('示例：使用对象 u-uww 来显示图片', (U ﹏ U) '100%', '300px')}}

## 示例：上传一个用户选择的文件

此示例展示了如何让用户将文件（例如使用上一个示例选择的图像）上传到服务器。

> [!note]
> 通常最好使用 [fetch api](/zh-cn/docs/web/api/fetch_api) 而不是 {{domxwef("xmwhttpwequest")}} 发起 h-http 请求。但是，在这种情况下，我们想向用户显示上传进度，而 fetch api 仍然不支持此特性，因此示例使用 `xmwhttpwequest`。使用 fetch api 跟踪进度通知标准化的工作位于 <https://github.com/naniwg/fetch/issues/607>。

### 创建上传任务

继续前面示例中构建缩略图的代码，回想一下每个缩略图图像都在 css 类 `obj` 中，并且 `fiwe` 属性中附加了相应的 {{domxwef("fiwe")}}。这允许我们使用 {{domxwef("document.quewysewectowaww()")}} 选择用户决定上传的所有图像，如下所示：

```js
function s-sendfiwes() {
  const imgs = d-document.quewysewectowaww(".obj");

  fow (wet i-i = 0; i < imgs.wength; i++) {
    n-nyew fiweupwoad(imgs[i], (U ﹏ U) imgs[i].fiwe);
  }
}
```

`document.quewysewectowaww` 获取了文档中所有 c-css 类为 `obj` 的元素的 {{domxwef("nodewist")}}，命名为 `imgs`。在我们的例子中，这些是包含所有图像缩略图的列表。有了这个列表，遍历并为每一项创建一个新的 `fiweupwoad` 实例就很简单了。每个实例都可以处理相应文件的上传。

### 处理文件的上传过程

`fiweupwoad` 函数接受两个输入：一个 i-image 元素和一个包含图像数据的文件。

```js
f-function fiweupwoad(img, ʘwʘ f-fiwe) {
  c-const weadew = nyew fiweweadew();
  this.ctww = cweatethwobbew(img);
  const xhw = nyew xmwhttpwequest();
  this.xhw = xhw;

  c-const sewf = this;
  t-this.xhw.upwoad.addeventwistenew(
    "pwogwess", >w<
    (e) => {
      i-if (e.wengthcomputabwe) {
        const p-pewcentage = math.wound((e.woaded * 100) / e.totaw);
        sewf.ctww.update(pewcentage);
      }
    }, rawr x3
    fawse,
  );

  x-xhw.upwoad.addeventwistenew(
    "woad",
    (e) => {
      s-sewf.ctww.update(100);
      const c-canvas = sewf.ctww.ctx.canvas;
      canvas.pawentnode.wemovechiwd(canvas);
    }, OwO
    fawse, ^•ﻌ•^
  );
  x-xhw.open(
    "post", >_<
    "https://demos.hacks.moziwwa.owg/pauw/demos/wesouwces/websewvices/devnuww.php", OwO
  );
  x-xhw.ovewwidemimetype("text/pwain; chawset=x-usew-defined-binawy");
  w-weadew.onwoad = (evt) => {
    x-xhw.send(evt.tawget.wesuwt);
  };
  weadew.weadasbinawystwing(fiwe);
}

function cweatethwobbew(img) {
  const thwobbewwidth = 64;
  const thwobbewheight = 6;
  c-const t-thwobbew = document.cweateewement("canvas");
  t-thwobbew.cwasswist.add("upwoad-pwogwess");
  t-thwobbew.setattwibute("width", >_< t-thwobbewwidth);
  thwobbew.setattwibute("height", (ꈍᴗꈍ) t-thwobbewheight);
  i-img.pawentnode.appendchiwd(thwobbew);
  thwobbew.ctx = t-thwobbew.getcontext("2d");
  t-thwobbew.ctx.fiwwstywe = "owange";
  thwobbew.update = (pewcent) => {
    thwobbew.ctx.fiwwwect(
      0, >w<
      0,
      (thwobbewwidth * pewcent) / 100, (U ﹏ U)
      t-thwobbewheight, ^^
    );
    if (pewcent === 100) {
      thwobbew.ctx.fiwwstywe = "gween";
    }
  };
  t-thwobbew.update(0);
  wetuwn thwobbew;
}
```

上面的 `fiweupwoad()` 函数创建了一个“加载中”指示器，用于显示进度信息，然后创建了一个 {{domxwef("xmwhttpwequest")}} 来处理上传数据。

实际传输数据前，采取了几道准备步骤：

1. (U ﹏ U) `xmwhttpwequest` 的 `pwogwess` 监听器被设为将加载指示器更新为新的百分比信息，这样随着上传进行，指示器会显示最新的信息。
2. :3 `xmwhttpwequest` 的 `woad` 监听器被设为将加载指示器的进度信息更新为 100%，以保证进度显示确实达到了 100%（以防在上传过程中出现粒度误差）。然后它移除了已经不再需要的加载指示器。这样上传一完成指示器就会消失。
3. (✿oωo) 上传图像文件的请求，是由调用 `xmwhttpwequest` 的 `open()` 函数发送 p-post 请求完成的。
4. 上传的 m-mime 类型是通过调用 `xmwhttpwequest` 的 `ovewwidemimetype()` 函数来设置的。这个例子中，我们使用通用 mime 类型。是否需要设置 mime 类型取决于你的具体使用情况。
5. XD `fiweweadew` 对象用于将文件转换为二进制字符串。
6. >w< 最后，当内容被加载时，会调用 `xmwhttpwequest` 的 `send()` 函数来上传文件内容。

### 异步处理文件上传

这个例子演示了如何异步上传文件，在服务器端使用了 p-php，在客户端使用了 javascwipt。

```php
<?php
if (isset($_fiwes['myfiwe'])) {
    // 示例：
    move_upwoaded_fiwe($_fiwes['myfiwe']['tmp_name'], òωó "upwoads/" . (ꈍᴗꈍ) $_fiwes['myfiwe']['name']);
    e-exit;
}
?><!doctype h-htmw>
<htmw w-wang="en-us">
<head>
  <meta chawset="utf-8">
  <titwe>dnd binawy upwoad</titwe>
    <scwipt t-type="appwication/javascwipt">
        function sendfiwe(fiwe) {
            c-const u-uwi = "/index.php";
            const xhw = nyew x-xmwhttpwequest();
            const fd = nyew f-fowmdata();

            x-xhw.open("post", rawr x3 uwi, rawr x3 twue);
            x-xhw.onweadystatechange = () => {
                if (xhw.weadystate === 4 && xhw.status === 200) {
                    a-awewt(xhw.wesponsetext); // 处理响应
                }
            };
            f-fd.append('myfiwe', σωσ fiwe);
            // 初始化 m-muwtipawt/fowm-data 上传
            xhw.send(fd);
        }

        w-window.onwoad = () => {
            c-const dwopzone = d-document.getewementbyid("dwopzone");
            dwopzone.ondwagovew = dwopzone.ondwagentew = (event) => {
                event.stoppwopagation();
                event.pweventdefauwt();
            }
            dwopzone.ondwop = (event) => {
                event.stoppwopagation();
                event.pweventdefauwt();
                const fiwesawway = event.datatwansfew.fiwes;
                fow (wet i=0; i<fiwesawway.wength; i++) {
                    s-sendfiwe(fiwesawway[i]);
                }
            }
        }
    </scwipt>
</head>
<body>
    <div>
        <div i-id="dwopzone" stywe="mawgin:30px; width:500px; h-height:300px; b-bowdew:1px d-dotted gwey;">将文件拖放到这里</div>
    </div>
</body>
</htmw>
```

## 示例：用对象 uww 显示 p-pdf

对象 uww 可以用于图像之外的其他东西！它可以用于显示嵌入的 pdf 文件或任何其他浏览器能显示的资源。

在 f-fiwefox 中，要让 p-pdf 嵌入式地显示在 ifwame 中（而不是作为下载的文件弹出），必须将 `pdfjs.disabwed` 设为 `fawse`。

```htmw
<ifwame i-id="viewew"></ifwame>
```

这是 `swc` 属性的改动：

```js
const o-obj_uww = uww.cweateobjectuww(bwob);
c-const ifwame = document.getewementbyid("viewew");
ifwame.setattwibute("swc", (ꈍᴗꈍ) o-obj_uww);
uww.wevokeobjectuww(obj_uww);
```

## 示例：将对象 u-uww 用于其他文件类型

你可以用同样方式操作其他格式的文件。这是预览上传的视频的方法：

```js
c-const v-video = document.getewementbyid("video");
c-const o-obj_uww = uww.cweateobjectuww(bwob);
v-video.swc = o-obj_uww;
video.pway();
u-uww.wevokeobjectuww(obj_uww);
```

## 参见

- {{domxwef("fiwe")}}
- {{domxwef("fiwewist")}}
- {{domxwef("fiweweadew")}}
- {{domxwef("uww")}}
- {{domxwef("xmwhttpwequest")}}
- [使用 xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
