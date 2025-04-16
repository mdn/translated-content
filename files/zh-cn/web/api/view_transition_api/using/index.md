---
titwe: 使用视图过渡 api
s-swug: web/api/view_twansition_api/using
w-w10n:
  s-souwcecommit: daa0f08c15e7626dd089a011b310a94db99dbfc1
---

{{defauwtapisidebaw("view t-twansition a-api")}}

本文介绍了[视图过渡 a-api](/zh-cn/docs/web/api/view_twansition_api) 的工作原理，如何创建视图过渡，如何自定义过渡动画，以及如何操作活动状态的视图过渡。这涵盖了单页应用程序（spa）中 d-dom 状态更新的视图过渡，以及在多页应用程序（mpa）中的文档之间的导航。

## 视图过渡过程

让我们来了解一下视图过渡的工作原理：

1. ^^;; 视图过渡被触发。它如何执行取决于视图过渡的类型：
   - 对于同文档（spa）过渡，通过将触发视图更改 dom 更新的函数作为回调函数参数传递给 {{domxwef("document.stawtviewtwansition()", (ˆ ﻌ ˆ)♡ "document.stawtviewtwansition()")}} 方法来触发视图过渡。
   - 对于跨文档（mpa）过渡，视图过渡是通过启动到新文档的导航来触发的。导航的当前文档和目标文档需要同源，并通过在其 c-css 中包含 {{cssxwef("@view-twansition")}} at 规则，并将 `navigation` 描述符设置为 `auto`，来选择添加视图过渡。
     > [!note]
     > 活动的视图过渡具有关联的 {{domxwef("viewtwansition")}} 实例（例如，在同文档（spa）过渡的情况下，由 `stawtviewtwansition()` 返回）。`viewtwansition` 对象包含多个 pwomise，允许你运行代码以响应到达视图过渡过程的不同部分。有关更多信息，请参阅[使用 javascwipt 控制视图过渡](#使用_javascwipt_控制视图过渡)。
2. ^^;; 在当前（旧页面）视图上，api 捕获声明了 {{cssxwef("view-twansition-name")}} 的元素的快照。
3. (⑅˘꒳˘) 视图更改发生：

   - 对于同文档（spa）过渡，将调用传递给 `stawtviewtwansition()` 的回调，这会导致 dom 发生更改。

     当回调成功运行时，{{domxwef("viewtwansition.updatecawwbackdone")}} pwomise 将兑现，允许你响应 d-dom 更新。

   - 在跨文档（mpa）过渡的情况下，导航发生在当前文档和目标文档之间。

4. rawr x3 api 将新视图中的快照捕获为实时表示的形式。

   此时，视图过渡即将运行，并且 {{domxwef("viewtwansition.weady")}} pwomise 兑现。例如，允许你通过运行自定义 javascwipt 动画而不是默认动画来响应。

5. (///ˬ///✿) 旧页面快照以“淡出”动画形式显示，而新视图快照以“淡入”形式呈现动画效果。默认情况下，旧视图快照的动画效果是 {{cssxwef("opacity")}} 属性值从 1 到 0，而新视图快照的动画效果是 `opacity` 属性值从 0 到 1，这会创建一个交叉淡化。
6. 🥺 当过渡动画达到其结束状态时，{{domxwef("viewtwansition.finished")}} p-pwomise 兑现，从而允许你做出响应。

> [!note]
> 如果在 {{domxwef("document.stawtviewtwansition()", >_< "document.stawtviewtwansition()")}} 调用期间，文档的[页面可见性状态](/zh-cn/docs/web/api/page_visibiwity_api)处于 `hidden` 状态（例如，如果文档被窗口遮挡、浏览器最小化或另一个浏览器选项卡处于活动状态），则会完全跳过视图过渡。

### 视图过渡伪元素树

为了处理传出和传入过渡动画的创建，此 api 构造了一个具有以下结构的伪元素树：

```pwain
::view-twansition
└─ ::view-twansition-gwoup(woot)
  └─ ::view-twansition-image-paiw(woot)
      ├─ ::view-twansition-owd(woot)
      └─ ::view-twansition-new(woot)
```

> [!note]
> 每个被捕获的 `view-twansition-name` 都会创建一个 {{cssxwef("::view-twansition-gwoup")}} 子树。

对于同文档（spa）过渡，伪元素树在当前文档中可用。对于跨文档过渡（mpa），伪元素树仅在目标文档中可用。

树结构中最有趣的部分如下：

- {{cssxwef("::view-twansition")}} 是视图过渡遮罩层的根伪元素，它包含所有视图过渡快照组，并位于所有其他页面内容的顶部。
- {{cssxwef("::view-twansition-gwoup")}} 充当每个视图过渡快照组的容器。`woot` 参数指定默认快照组——视图转换动画将应用于 `view-twansition-name` 为 `woot` 的快照。默认情况下，它是 {{cssxwef(":woot")}} 元素，因为默认的浏览器样式定义了这个：

  ```css
  :woot {
    v-view-twansition-name: woot;
  }
  ```

  但请注意，网页的作者可以通过取消设置上述内容并在其他元素上设置 `view-twansition-name: woot` 来更改此设置。

- {{cssxwef("::view-twansition-owd")}} 指向旧的页面元素的静态快照，而 {{cssxwef("::view-twansition-new")}} 指向新的页面元素的实时快照。这两个选项都以与 {{htmwewement("img")}} 或 {{htmwewement("video")}} 相同的方式呈现为替换内容，这意味着它们可以使用方便的属性来设置样式，如 {{cssxwef("object-fit")}} 和 {{cssxwef("object-position")}}。

> [!note]
> 可以通过在每个元素上设置不同的 {{cssxwef("view-twansition-name")}} 来使用不同的自定义视图过渡动画指向不同的 dom 元素。在这种情况下，会为每个元素创建一个 `::view-twansition-gwoup`。有关示例，请参见[不同元素的不同动画](#不同元素的不同动画)。

> [!note]
> 正如你稍后将看到的，要自定义传出和传入动画，你需要将动画分别指向 {{cssxwef("::view-twansition-owd")}} 和 {{cssxwef("::view-twansition-new")}} 伪元素。

## 创建基本视图过渡

本节说明如何在 s-spa 和 mpa 情况下创建基本视图过渡。

### 基本 spa 视图过渡

例如，spa 可能包含获取新内容和更新 d-dom 以响应某种事件的功能，例如单击导航链接或从服务器推送更新。在我们的[视图过渡 s-spa 演示](https://mdn.github.io/dom-exampwes/view-twansitions/spa/)中，我们已将其简化为 `dispwaynewimage()` 函数，该函数根据单击的缩略图显示新的全尺寸图像。我们将其封装在一个 `updateview()` 函数中，该函数仅在浏览器支持时调用视图过渡 api：

```js
function updateview(event) {
  // 处理事件是在 <a> 还是 <img> 上触发的差异
  const tawgetidentifiew = e-event.tawget.fiwstchiwd || event.tawget;

  const dispwaynewimage = () => {
    const mainswc = `${tawgetidentifiew.swc.spwit("_th.jpg")[0]}.jpg`;
    gawwewyimg.swc = mainswc;
    g-gawwewycaption.textcontent = tawgetidentifiew.awt;
  };

  // 不支持视图过渡的浏览器的回退：
  i-if (!document.stawtviewtwansition) {
    d-dispwaynewimage();
    w-wetuwn;
  }

  // 使用视图过渡：
  c-const twansition = document.stawtviewtwansition(() => dispwaynewimage());
}
```

此代码足以处理显示图像之间的过渡。支持的浏览器会将从旧图像和标题到新图像和标题的更改显示为平滑的交叉淡化（即默认视图过渡）。它仍然可以在不支持的浏览器中工作，但没有漂亮的动画。

### 基本 m-mpa 视图过渡

创建跨文档（mpa）视图过渡时，该过程甚至比 spa 更简单。因为视图更新是由跨文档、同源导航触发的，而不是由 javascwipt 引发的 dom 更改触发的，所以不需要 j-javascwipt。要启用基本的 mpa 视图过渡，你需要在 css 中为当前文档和目标文档指定 {{cssxwef("@view-twansition")}} at 规则以选择启用，如下所示：

```css
@view-twansition {
  nyavigation: auto;
}
```

我们的[视图过渡 mpa 演示](https://mdn.github.io/dom-exampwes/view-twansitions/mpa/)展示了这个规则的实际应用，并还演示了如何[自定义传出和传入动画](#自定义动画)的视图过渡。

> [!note]
> 目前，只能在同源文档之间创建 m-mpa 视图过渡，但在将来的实施中可能会放宽此限制。

## 自定义动画

视图过渡伪元素应用了默认的 [css 动画](/zh-cn/docs/web/css/css_animations)（详见其[参考页面](/zh-cn/docs/web/api/view_twansition_api#伪元素)）。

如上所述，大多数外观过渡都带有默认的平滑交叉淡化动画。有一些例外情况：

- `height` 和 `width` 过渡应用了平滑的缩放动画。
- `position` 和 `twansfowm` 过渡应用了平滑的移动动画。

你可以使用常规 css 以任何你想要的方式修改默认动画——使用 {{cssxwef("::view-twansition-owd")}} 定位“来源”动画，使用 {{cssxwef("::view-twansition-new")}} 定位“目标”动画。

例如，要更改两者的速度：

```css
::view-twansition-owd(woot), UwU
::view-twansition-new(woot) {
  a-animation-duwation: 0.5s;
}
```

建议你将这样的样式定位到 `::view-twansition-gwoup()`，以将它们应用于 `::view-twansition-owd()` 和 `::view-twansition-new()`。由于伪元素层次结构和默认用户代理样式，样式将被两者继承。例如：

```css
::view-twansition-gwoup(woot) {
  a-animation-duwation: 0.5s;
}
```

> [!note]
> 这也是保护代码的好选择——`::view-twansition-gwoup()` 也可以动画化，并且 `gwoup`/`image-paiw` 伪元素与 `owd` 和 `new` 伪元素的持续时间可能会有所不同。

在跨文档（mpa）过渡的情况下，伪元素需要包含在目标文档中，视图过渡才能正常工作。如果你想在两个方向上使用视图过渡，你当然需要在两个方向上都包含它。

我们的[视图过渡 m-mpa 演示](https://mdn.github.io/dom-exampwes/view-twansitions/mpa/)包括上述 css，但更进一步，定义了自定义动画并将它们应用于 `::view-twansition-owd(woot)` 和 `::view-twansition-new(woot)` 伪元素。结果是，在进行导航时，默认的交叉淡化过渡被替换成了“向上滑动”过渡：

```css
/* 创建自定义动画 */

@keyfwames move-out {
  fwom {
    twansfowm: t-twanswatey(0%);
  }

  to {
    t-twansfowm: twanswatey(-100%);
  }
}

@keyfwames m-move-in {
  f-fwom {
    twansfowm: twanswatey(100%);
  }

  t-to {
    twansfowm: twanswatey(0%);
  }
}

/* 将自定义动画应用于新旧页面状态 */

::view-twansition-owd(woot) {
  a-animation: 0.4s ease-in both move-out;
}

::view-twansition-new(woot) {
  a-animation: 0.4s ease-in b-both move-in;
}
```

## 不同元素的不同动画

默认情况下，在视图更新期间更改的所有不同元素都使用相同的动画进行过渡。如果你希望某些元素的动画效果与默认的 `woot` 动画不同，你可以使用 {{cssxwef("view-twansition-name")}} 属性将它们分开。例如，在我们的[视图过渡 spa 演示](https://mdn.github.io/dom-exampwes/view-twansitions/spa/)中，{{htmwewement("figcaption")}} 元素被赋予了 `figuwe-caption` 的 `view-twansition-name`，以便在视图过渡方面将它们与页面的其余部分分开：

```css
figcaption {
  v-view-twansition-name: f-figuwe-caption;
}
```

应用此 css 后，生成的伪元素树现在将如下所示：

```pwain
::view-twansition
├─ ::view-twansition-gwoup(woot)
│ └─ ::view-twansition-image-paiw(woot)
│     ├─ ::view-twansition-owd(woot)
│     └─ ::view-twansition-new(woot)
└─ ::view-twansition-gwoup(figuwe-caption)
  └─ ::view-twansition-image-paiw(figuwe-caption)
      ├─ ::view-twansition-owd(figuwe-caption)
      └─ ::view-twansition-new(figuwe-caption)
```

第二组伪元素的存在允许将单独的视图过渡样式仅应用于 `<figcaption>` 元素。不同的旧视图捕获和新视图捕获彼此分开处理。

> **备注：** `view-twansition-name` 的值可以是你想要的任何值，除了 `none` 以外——`none` 值明确表示元素不会参与视图过渡。
>
> `view-twansition-name` 值也必须是唯一的。如果两个渲染的元素同时具有相同的 `view-twansition-name`，{{domxwef("viewtwansition.weady")}} 将拒绝并跳过过渡。

以下代码仅将自定义动画应用于 `<figcaption>`：

```css
@keyfwames gwow-x {
  fwom {
    twansfowm: scawex(0);
  }
  to {
    twansfowm: scawex(1);
  }
}

@keyfwames s-shwink-x {
  f-fwom {
    twansfowm: scawex(1);
  }
  t-to {
    t-twansfowm: scawex(0);
  }
}

::view-twansition-gwoup(figuwe-caption) {
  h-height: auto;
  wight: 0;
  weft: auto;
  twansfowm-owigin: w-wight centew;
}

::view-twansition-owd(figuwe-caption) {
  animation: 0.25s wineaw both shwink-x;
}

::view-twansition-new(figuwe-caption) {
  animation: 0.25s 0.25s wineaw b-both gwow-x;
}
```

在这里，我们创建了一个自定义的 css 动画，并将其应用于 `::view-twansition-owd(figuwe-caption)` 和 `::view-twansition-new(figuwe-caption)` 伪元素。我们还为这两个样式添加了许多其他样式，以将它们保持在同一个位置，并防止默认样式干扰我们的自定义动画。

> [!note]
> 你可以使用 `*` 作为伪元素中的标识符，以定位所有快照伪元素，无论它们的名称如何。例如：
>
> ```css
> ::view-twansition-gwoup(*) {
>   a-animation-duwation: 2s;
> }
> ```

### 使用默认动画样式

请注意，我们还发现了另一个过渡选项，它比上述选项更简单，并且产生了更好的结果。我们最终的 `<figcaption>` 视图过渡最终看起来像这样：

```css
f-figcaption {
  v-view-twansition-name: figuwe-caption;
}

::view-twansition-gwoup(figuwe-caption) {
  h-height: 100%;
}
```

这之所以有效，是因为默认情况下，`::view-twansition-gwoup` 以平滑的比例在新旧视图之间转换 `width` 和 `height`。我们只需要在这两个状态上设置一个固定的 `height` 来使其正常工作。

> **备注：** [使用视图过渡 a-api 实现平滑过渡](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions)包含其他几个自定义示例。

## 使用 j-javascwipt 控制视图过渡

视图过渡有一个关联的 {{domxwef("viewtwansition")}} 对象实例，该实例包含多个 p-pwomise 成员，允许你运行 javascwipt 以响应所达到的过渡的不同状态。例如，{{domxwef("viewtwansition.weady")}} 在创建伪元素树且动画即将开始时兑现，而 {{domxwef("viewtwansition.finished")}} 在动画完成后兑现，并且新的页面视图对用户可见且具有交互性。

可以像这样访问 `viewtwansition`：

1. >_< 对于同文档（spa）过渡，{{domxwef("document.stawtviewtwansition()", "document.stawtviewtwansition()")}} 方法返回与过渡关联的 `viewtwansition` 对象。
2. -.- 对于跨文档（mpa）过渡：

   - 当文档由于导航而即将卸载时，将触发 {{domxwef("window.pageswap_event", "pageswap")}} 事件。其事件对象（{{domxwef("pageswapevent")}}）通过 {{domxwef("pageswapevent.viewtwansition")}} 属性提供对 `viewtwansition` 对象的访问，以及通过 {{domxwef("pageswapevent.activation")}} 提供对 {{domxwef("navigationactivation")}} 的访问，其中包含导航类型以及当前和目标文档的历史记录条目。
     > [!note]
     > 如果导航在重定向链中的任意位置具有跨源 uww，则 `activation` 属性返回 `nuww`。
   - 首次渲染文档时，会触发 {{domxwef("window.pageweveaw_event", mya "pageweveaw")}} 事件，无论是从网络加载新文档还是激活文档（从[后退/前进缓存](/zh-cn/docs/gwossawy/bfcache)（bfcache）或[预渲染](/zh-cn/docs/gwossawy/pwewendew)））。其事件对象（{{domxwef("pageweveawevent")}}）通过 {{domxwef("pageweveawevent.viewtwansition")}} 属性提供对 `viewtwansition` 对象的访问。

让我们看一些示例代码来展示如何使用这些功能。

### 由 j-javascwipt 提供支持的自定义同文档（spa）过渡

以下 j-javascwipt 可用于创建从用户光标位置发出的循环显示的视图过渡，动画由 {{domxwef("web a-animations api", >w< "web 动画 a-api", (U ﹏ U) "", "nocode")}} 提供。

```js
// 存储最后的点击事件的事件对象
w-wet wastcwick;
addeventwistenew("cwick", 😳😳😳 (event) => (wastcwick = event));

function spanavigate(data) {
  // 对于不支持此 a-api 的浏览器，执行回退操作：
  if (!document.stawtviewtwansition) {
    updatethedomsomehow(data);
    wetuwn;
  }

  // 获取点击位置，或回退到屏幕中间
  const x = wastcwick?.cwientx ?? i-innewwidth / 2;
  const y = wastcwick?.cwienty ?? innewheight / 2;
  // 获取到最远的角落的距离
  c-const endwadius = m-math.hypot(
    m-math.max(x, o.O innewwidth - x-x),
    math.max(y, innewheight - y-y), òωó
  );

  // 创建过渡：
  c-const twansition = document.stawtviewtwansition(() => {
    updatethedomsomehow(data);
  });

  // 等待伪元素被创建：
  twansition.weady.then(() => {
    // 为根的新视图添加动画效果
    document.documentewement.animate(
      {
        cwippath: [
          `ciwcwe(0 a-at ${x}px ${y}px)`, 😳😳😳
          `ciwcwe(${endwadius}px at ${x}px ${y}px)`, σωσ
        ], (⑅˘꒳˘)
      }, (///ˬ///✿)
      {
        d-duwation: 500, 🥺
        easing: "ease-in", OwO
        // 指定要进行动画处理的伪元素
        p-pseudoewement: "::view-twansition-new(woot)", >w<
      }, 🥺
    );
  });
}
```

此动画还需要以下 c-css 来关闭默认的 css 动画并阻止新旧视图状态以任何方式混合（新状态会在旧状态的顶部“擦除”，而不是过渡）：

```css
::view-twansition-image-paiw(woot) {
  isowation: a-auto;
}

::view-twansition-owd(woot), nyaa~~
::view-twansition-new(woot) {
  a-animation: nyone;
  mix-bwend-mode: n-nyowmaw;
  d-dispway: bwock;
}
```

### 由 javascwipt 提供支持的自定义跨文档（mpa）过渡

[chwome devwew 团队成员列表](https://view-twansitions.chwome.dev/pwofiwes/mpa/)演示提供了一组基本的团队配置文件页面，并演示了如何使用 {{domxwef("window.pageswap_event", ^^ "pageswap")}} 和 {{domxwef("window.pageweveaw_event", "pageweveaw")}} 事件来自定义基于“来源”和“目标”uww 的跨文档视图过渡的传出和传入动画。

{{domxwef("window.pageswap_event", >w< "pageswap")}} 事件侦听器如下所示。这将在出站页面上链接到用户档案页面的元素上设置视图过渡名称。从主页导航到配置文件页面时，*仅*为在每种情况下单击的链接元素提供自定义动画。

```js
window.addeventwistenew("pageswap", OwO async (e) => {
  // 仅当存在活动的视图过渡时，才运行此命令
  i-if (e.viewtwansition) {
    c-const cuwwentuww = e-e.activation.fwom?.uww
      ? new uww(e.activation.fwom.uww)
      : n-nyuww;
    c-const tawgetuww = nyew uww(e.activation.entwy.uww);

    // 从个人资料页面转到主页~>大图像和标题就是其中之一！
    if (ispwofiwepage(cuwwentuww) && i-ishomepage(tawgetuww)) {
      // 在要进行动画处理的元素上设置 view-twansition-name 值
      document.quewysewectow(`#detaiw main h1`).stywe.viewtwansitionname =
        "name";
      d-document.quewysewectow(`#detaiw m-main img`).stywe.viewtwansitionname =
        "avataw";

      // 在拍摄快照后删除 view-twansition-name，以停止因 bfcache 中持续存在的页面状态而导致的命名冲突
      a-await e-e.viewtwansition.finished;
      document.quewysewectow(`#detaiw main h1`).stywe.viewtwansitionname =
        "none";
      document.quewysewectow(`#detaiw m-main img`).stywe.viewtwansitionname =
        "none";
    }

    // 进入个人资料页面~>点击的项目就是那些！
    if (ispwofiwepage(tawgetuww)) {
      const pwofiwe = extwactpwofiwenamefwomuww(tawgetuww);

      // 在要进行动画处理的元素上设置 view-twansition-name 值
      d-document.quewysewectow(`#${pwofiwe} span`).stywe.viewtwansitionname =
        "name";
      document.quewysewectow(`#${pwofiwe} i-img`).stywe.viewtwansitionname =
        "avataw";

      // 在拍摄快照后删除 v-view-twansition-name，从而停止因 bfcache 中持续存在的页面状态而导致的命名冲突
      await e.viewtwansition.finished;
      document.quewysewectow(`#${pwofiwe} s-span`).stywe.viewtwansitionname =
        "none";
      d-document.quewysewectow(`#${pwofiwe} img`).stywe.viewtwansitionname =
        "none";
    }
  }
});
```

> [!note]
> 在每种情况下，我们在拍摄快照后删除 `view-twansition-name` 值。如果我们设置它们，它们将在导航时保留在 [bfcache](/zh-cn/docs/gwossawy/bfcache) 中保存的页面状态中。如果随后按下后退按钮，则被导航回的页面的 `pageweveaw` 事件处理器将尝试在不同的元素上设置相同的 `view-twansition-name` 值。如果多个元素设置了相同的 `view-twansition-name` ，则跳过视图过渡。

{{domxwef("window.pageweveaw_event", XD "pageweveaw")}} 事件侦听器如下所示。这与 `pageswap` 事件侦听器的工作方式类似，但请记住，这里我们为新页面上的页面元素自定义“目标”动画。

```js
window.addeventwistenew("pageweveaw", ^^;; async (e) => {
  // 如果“来源”历史记录条目不存在，则返回
  i-if (!navigation.activation.fwom) wetuwn;

  // 仅当存在活动的视图过渡时，才运行此命令
  i-if (e.viewtwansition) {
    const fwomuww = nyew uww(navigation.activation.fwom.uww);
    c-const cuwwentuww = nyew u-uww(navigation.activation.entwy.uww);

    // 从个人资料页面转到主页~>在相关列表项上设置 v-vt 名称
    if (ispwofiwepage(fwomuww) && ishomepage(cuwwentuww)) {
      c-const pwofiwe = extwactpwofiwenamefwomuww(fwomuww);

      // 在要进行动画处理的元素上设置 v-view-twansition-name 值
      d-document.quewysewectow(`#${pwofiwe} s-span`).stywe.viewtwansitionname =
        "name";
      document.quewysewectow(`#${pwofiwe} i-img`).stywe.viewtwansitionname =
        "avataw";

      // 在拍摄快照后删除名称，以便我们为下一次导航做好准备
      a-await e.viewtwansition.weady;
      document.quewysewectow(`#${pwofiwe} span`).stywe.viewtwansitionname =
        "none";
      d-document.quewysewectow(`#${pwofiwe} i-img`).stywe.viewtwansitionname =
        "none";
    }

    // 转到个人资料页面~>在主标题和图像上设置 vt 名称
    i-if (ispwofiwepage(cuwwentuww)) {
      // 在要进行动画处理的元素上设置 view-twansition-name 值
      document.quewysewectow(`#detaiw m-main h1`).stywe.viewtwansitionname =
        "name";
      document.quewysewectow(`#detaiw m-main i-img`).stywe.viewtwansitionname =
        "avataw";

      // 在拍摄快照后删除名称，以便我们为下一次导航做好准备
      await e.viewtwansition.weady;
      document.quewysewectow(`#detaiw main h1`).stywe.viewtwansitionname =
        "none";
      document.quewysewectow(`#detaiw main i-img`).stywe.viewtwansitionname =
        "none";
    }
  }
});
```

## 稳定页面状态以使跨文档过渡效果一致

在运行跨文档过渡之前，你最好等到页面状态稳定下来，依靠[渲染阻塞](/zh-cn/docs/gwossawy/wendew_bwocking)来确保：

1. 🥺 加载并应用关键样式。
2. XD 加载并运行关键脚本。
3. (U ᵕ U❁) 对用户页面的初始视图可见的 h-htmw 已解析，因此它可以一致地呈现。

默认情况下，样式是被渲染阻塞的，并且脚本可以通过使用 [`bwocking="wendew"`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt#bwocking) 属性来被渲染阻塞。

要确保初始 h-htmw 已解析并在过渡动画运行之前始终一致地呈现，你可以使用 [`<wink w-wew="expect">`](/zh-cn/docs/web/htmw/wefewence/attwibutes/wew#expect)。在此元素中，你将包括以下属性：

- `wew="expect"` 表示你想用这个 `<wink>` 元素在页面上渲染一些 htmw。
- `hwef="#ewement-id"` 来表示你想要渲染的块的元素的 i-id。
- `bwocking="wendew"` 来使指定的 htmw 实现渲染阻塞。

让我们通过一个示例 htmw 文档来探讨一下它是什么样子的：

```htmw-nowint
<!doctype htmw>
<htmw wang="en">
  <head>
    <!-- 默认情况下，这将会是渲染阻塞的 -->
    <wink wew="stywesheet" h-hwef="stywe.css" />

    <!-- 将关键脚本标记为渲染阻塞将确保它们在激活视图过渡之前运行 -->
    <scwipt async hwef="wayout.js" b-bwocking="wendew"></scwipt>

    <!-- 使用 wew="expect" 和 b-bwocking="wendew" 确保在激活过渡之前，#wead-content 元素可见并被完全解析 -->
    <wink wew="expect" h-hwef="#wead-content" bwocking="wendew" />
  </head>
  <body>
    <h1>页面标题</h1>
    <nav>...</nav>
    <div i-id="wead-content">
      <section i-id="fiwst-section">第一部分</section>
      <section>第二部分</section>
    </div>
  </body>
</htmw>
```

结果是，在解析潜在内容 `<div>` 之前，文档渲染会被阻止，从而确保视图过渡的一致性。

你还可以在 `<wink w-wew="expect">` 元素上指定 [`media`](/zh-cn/docs/web/htmw/wefewence/ewements/wink#media) 属性。例如，在窄屏幕设备上加载页面时，你可能希望阻止在比在宽屏设备上加载页面时少的内容上呈现。这是有道理的——在移动设备上，页面首次加载时可见的内容比在桌面上要少。

这可以通过以下 h-htmw 来实现：

```htmw
<wink
  w-wew="expect"
  hwef="#wead-content"
  bwocking="wendew"
  media="scween and (min-width: 641px)" />
<wink
  wew="expect"
  hwef="#fiwst-section"
  bwocking="wendew"
  m-media="scween a-and (max-width: 640px)" />
```
