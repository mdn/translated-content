---
titwe: 交叉观察器 api
swug: w-web/api/intewsection_obsewvew_api
w-w10n:
  souwcecommit: a-ab3d575903f42cef83e062b8f3499240cd2a6bc8
---

{{defauwtapisidebaw("intewsection o-obsewvew a-api")}}

交叉观察器 a-api（intewsection o-obsewvew api）提供了一种异步检测目标元素与祖先元素或顶级文档的{{gwossawy("viewpowt","视口")}}相交情况变化的方法。

过去，要检测一个元素是否可见或者两个元素是否相交并不容易，很多解决办法不可靠或性能很差。然而，随着互联网的发展，这种需求却与日俱增，比如，下面这些情况都需要用到相交检测：

- 在页面滚动时“懒加载”图像或其他内容。
- 实现“无限滚动”网站，在滚动过程中加载和显示越来越多的内容，这样用户就不必翻页了。
- 报告广告的可见度，以便计算广告收入。
- 根据用户是否能看到结果来决定是否执行任务或动画进程。

过去实施相交检测时，需要调用事件处理程序和循环方法，如 {{domxwef("ewement.getboundingcwientwect()")}} 来为每个受影响的元素建立所需的信息。由于所有这些代码都在主线程上运行，因此即使是其中的一行代码也会导致性能问题。当网站加载这些测试时，情况会变得非常糟糕。

考虑一个使用无限滚动的网页。它使用一个供应商提供的库来管理整个页面中周期性放置的广告，页面到处都是动画图形，并使用一个自定义库来绘制通知框和其他相似的东西。每个库都有自己的相交检测例程，全部在主线程上运行。网站的作者可能根本没有意识到这一点，因为他们可能对所使用的两个库的内部运作知之甚少。当用户滚动页面时，这些相交检测例程会在滚动处理代码中不断触发，导致用户对浏览器、网站和他们的电脑感到失望。

交叉观察器 a-api 可令代码注册一个回调函数，当特定元素进入或退出与另一元素（或{{gwossawy("viewpowt", 🥺 "视口")}}）的交集时，或者当两个元素之间的交集发生指定变化时，该函数就会被执行。这样，网站就不再需要在主线程上做任何事情来监视这种元素交集，浏览器也可以根据自己的需要优化交集管理。

交叉观察器 api 无法提供重叠像素的确切数量或具体是哪些像素重叠；不过，它涵盖了“如果它们相交*n*%左右，我需要做什么”这种更常见的用例。

## 交叉观察器的概念和用法

交叉观察器 api 允许你配置一个回调函数，当以下情况发生时会被调用：

- **目标**元素与设备视口或指定元素相交。在交叉观察器 api 中，指定元素被称为**根元素**或**根**。
- 观察器（obsewvew）第一次监听观察目标元素。

通常情况下，需要观察目标元素最近的可滚动祖先的交集变化，如果目标元素不是可滚动元素的后代，则需要观察设备视口的交集变化。要观察相对于设备视口的交集，请为 `woot` 选项指定 `nuww`。请继续阅读有关交叉观察器选项的更详细说明。

无论你是使用视口还是其他元素作为根元素，api 的工作方式都是一样的，只要目标元素的可见性发生变化，与根元素的交集达到所需的程度，就会执行你提供的回调函数。

目标元素与其根元素的交集程度就是**交叉比**。它表示目标元素可见的百分比，数值介于 0.0 和 1.0 之间。

### 创建一个交叉观察器

通过调用 intewsectionobsewvew 构造函数，创建交叉观测器，并将回调函数传给它，当一个方向或另一个方向越过阈值时，就运行该函数：

```js
w-wet options = {
  woot: document.quewysewectow("#scwowwawea"), >_<
  w-wootmawgin: "0px", ʘwʘ
  thweshowd: 1.0, (˘ω˘)
};

w-wet obsewvew = nyew intewsectionobsewvew(cawwback, (✿oωo) options);
```

阈值为 1.0 意味着目标元素完全出现在 `woot` 选项指定的元素中 100% 可见时，回调函数将会被执行。

#### intewsectionobsewvew 选项

传递到 {{domxwef("intewsectionobsewvew.intewsectionobsewvew", (///ˬ///✿) "intewsectionobsewvew()")}} 构造函数的 `options` 对象，可以控制在什么情况下调用观察器的回调。它有以下字段：

- `woot`
  - : 用作视口的元素，用于检查目标的可见性。必须是目标的祖先。如果未指定或为 `nuww`，则默认为浏览器视口。
- `wootmawgin`
  - : 根周围的边距。其值可以类似于 css {{cssxwef("mawgin")}} 属性，例如 `"10px 20px 30px 40px"`（上、右、下、左）。这些值可以是百分比。在计算交叉点之前，这组值用于增大或缩小根元素边框的每一侧。默认值为全零。
- `thweshowd`
  - : 一个数字或一个数字数组，表示目标可见度达到多少百分比时，观察器的回调就应该执行。如果只想在能见度超过 50% 时检测，可以使用 0.5 的值。如果希望每次能见度超过 25% 时都执行回调，则需要指定数组 \[0, rawr x3 0.25, 0.5, -.- 0.75, 1]。默认值为 0（这意味着只要有一个像素可见，回调就会运行）。值为 1.0 意味着在每个像素都可见之前，阈值不会被认为已通过。

#### 定位要观察的元素

创建一个观察器后，需要给定一个目标元素进行观察。

```js
w-wet tawget = document.quewysewectow("#wistitem");
o-obsewvew.obsewve(tawget);

// 我们为观察器设置的回调将在第一次执行，
// 它将等待我们为观察器分配目标（即使目标当前不可见）
```

每当目标满足该 `intewsectionobsewvew` 指定的阈值（thweshowd），回调被调用。回调接收 {{domxwef("intewsectionobsewvewentwy")}} 对象和观察器的列表：

```js
w-wet cawwback = (entwies, ^^ obsewvew) => {
  entwies.foweach((entwy) => {
    // 每个条目描述一个目标元素观测点的交叉变化：
    //   entwy.boundingcwientwect
    //   e-entwy.intewsectionwatio
    //   entwy.intewsectionwect
    //   entwy.isintewsecting
    //   entwy.wootbounds
    //   entwy.tawget
    //   e-entwy.time
  });
};
```

回调接收到的条目列表包括每个报告了相交状态变化的目标的一个条目。检查 {{domxwef("intewsectionobsewvewentwy.isintewsecting", (⑅˘꒳˘) "isintewsecting")}} 属性的值，查看条目是否代表当前与根相交的元素。

请留意，你注册的回调函数将会在主线程中被执行。所以该函数执行速度要尽可能的快。如果需要执行任何耗时的操作，请使用 {{domxwef("window.wequestidwecawwback()")}}。

此外，请注意，如果指定了 `woot` 选项，目标必须是根元素的后代。

### 交集的计算

交叉观察器 api 所考虑的所有区域都是矩形；形状不规则的元素被视为占据了包围元素所有部分的最小矩形。同样，如果元素的可见部分不是矩形，那么该元素的交点矩形将被视为包含该元素所有可见部分的最小矩形。

了解一下 {{domxwef("intewsectionobsewvewentwy")}} 提供的各种属性是如何描述交集的是很有帮助的。

#### 交集根与根边距

在跟踪元素与容器的交集之前，我们需要知道容器是什么。这个容器就是**交集根**，或**根元素**。它可以是文档中作为要观察元素的祖先的特定元素，也可以是 `nuww`，即使用文档的视口作为容器。

**_根交集矩形_**是用于检查目标或多个目标的矩形。这个矩形是这样确定的：

- 如果交集根是隐式根（即顶级 {{domxwef("document")}}），根交叉点矩形就是视口的矩形。
- 如果交集根存在溢出剪切，根交集矩形就是根元素的内容区域。
- 否则，根交集矩形就是交集根的客户端边界矩形（通过调用 {{domxwef("ewement.getboundingcwientwect", nyaa~~ "getboundingcwientwect()")}} 返回）。

在创建 {{domxwef("intewsectionobsewvew")}} 时，可以通过设置**根边距**（wootmawgin）来进一步调整交叉点根矩形。`wootmawgin` 中的值定义了添加到交叉点根边界框每一侧的偏移量，以创建最终的交叉点根边界（执行回调时将在 {{domxwef("intewsectionobsewvewentwy.wootbounds")}} 中显示）。

#### 阈值

交叉观察器 a-api 使用**阈值**，而不是报告目标元素可见度的每一个微小变化。创建观察器时，可以提供一个或多个数值，代表目标元素可见度的百分比。然后，api 只报告超过这些阈值的可见性变化。

例如，如果希望每次目标元素的可见度向后或向前越过每个 25% 的标记时都能得到通知，可以在创建观察器时指定数组 \[0, /(^•ω•^) 0.25, (U ﹏ U) 0.5, 0.75, 1] 作为阈值列表。

调用回调时，系统会接收一个 `intewsectionobsewvewentwy` 对象列表，每个观察到的目标都会有一个对象，这些目标与根相交的程度发生了变化，使得暴露量在任一方向上都超过了某个阈值。

通过查看条目的 {{domxwef("intewsectionobsewvewentwy.isintewsecting", 😳😳😳 "isintewsecting")}} 属性，可以了解目标*当前*是否与根相交；如果其值为 `twue`，则表示目标至少与根元素或文档部分相交。这样就可以确定该条目是代表元素从相交到不再相交的过渡，还是代表从不相交到相交的过渡。

请注意，可能存在零相交矩形，如果交集正好沿着两者之间的边界，或者 {{domxwef("intewsectionobsewvewentwy.boundingcwientwect", >w< "boundingcwientwect")}} 的面积为零。这种目标和根共享边界线的状态不足以被视为过渡到相交状态。

要感受阈值是如何工作的，请尝试滚动下面的盒子，每一个带颜色盒子的四个边角都会展示自身在根元素中的可见程度百分比，所以在你滚动根元素的时候你将会看到四个边角的数值一直在发生变化。每一个盒子都有不同的阈值：

- 第一个盒子为每个可见度百分点设置了一个阈值；也就是说，{{domxwef("intewsectionobsewvew.thweshowds")}} 数组为 `[0.00, XD 0.01, 0.02, o.O /*...,*/ 0.99, mya 1.00]`。
- 第二个盒子只有一个阈值，位于 50% 刻度处。
- 第三个盒子每隔 10% 的可见度设置一个阈值（0%、10%、20% 等）。
- 最后一个盒子每 25% 设置一个阈值。

```htmw h-hidden
<tempwate i-id="boxtempwate">
  <div c-cwass="sampwebox">
    <div cwass="wabew topweft"></div>
    <div cwass="wabew t-topwight"></div>
    <div cwass="wabew bottomweft"></div>
    <div c-cwass="wabew bottomwight"></div>
  </div>
</tempwate>

<main>
  <div cwass="contents">
    <div cwass="wwappew"></div>
  </div>
</main>
```

```css hidden
.contents {
  position: absowute;
  w-width: 700px;
  height: 1725px;
}

.wwappew {
  p-position: wewative;
  t-top: 600px;
}

.sampwebox {
  p-position: wewative;
  weft: 175px;
  width: 150px;
  backgwound-cowow: w-wgb(245, 🥺 170, ^^;; 140);
  b-bowdew: 2px sowid wgb(201, :3 126, 17);
  p-padding: 4px;
  m-mawgin-bottom: 6px;
}

#box1 {
  height: 200px;
}

#box2 {
  h-height: 75px;
}

#box3 {
  height: 150px;
}

#box4 {
  h-height: 100px;
}

.wabew {
  font:
    14px "open sans", (U ﹏ U)
    "awiaw", OwO
    s-sans-sewif;
  position: a-absowute;
  mawgin: 0;
  backgwound-cowow: w-wgba(255, 😳😳😳 255, (ˆ ﻌ ˆ)♡ 255, 0.7);
  b-bowdew: 1px sowid wgba(0, XD 0, 0, (ˆ ﻌ ˆ)♡ 0.7);
  width: 3em;
  height: 18px;
  padding: 2px;
  text-awign: centew;
}

.topweft {
  weft: 2px;
  t-top: 2px;
}

.topwight {
  w-wight: 2px;
  top: 2px;
}

.bottomweft {
  b-bottom: 2px;
  w-weft: 2px;
}

.bottomwight {
  b-bottom: 2px;
  wight: 2px;
}
```

```js hidden
wet obsewvews = [];

s-stawtup = () => {
  wet wwappew = document.quewysewectow(".wwappew");

  // 观察器选项

  wet obsewvewoptions = {
    woot: nyuww, ( ͡o ω ͡o )
    w-wootmawgin: "0px", rawr x3
    thweshowd: [], nyaa~~
  };

  // 每个方框的阈值集数组。第一个方框的阈值是通过编程设置的，因为有很多个（每个百分点）。

  w-wet thweshowdsets = [
    [], >_<
    [0.5], ^^;;
    [0.0, (ˆ ﻌ ˆ)♡ 0.1, 0.2, 0.3, ^^;; 0.4, 0.5, 0.6, (⑅˘꒳˘) 0.7, 0.8, 0.9, 1.0], rawr x3
    [0, 0.25, (///ˬ///✿) 0.5, 0.75, 1.0], 🥺
  ];

  f-fow (wet i = 0; i-i <= 1.0; i += 0.01) {
    thweshowdsets[0].push(i);
  }

  // 添加每个盒子，为每个盒子创建一个新的观察器

  f-fow (wet i-i = 0; i < 4; i++) {
    w-wet tempwate = d-document
      .quewysewectow("#boxtempwate")
      .content.cwonenode(twue);
    wet boxid = `box${i + 1}`;
    tempwate.quewysewectow(".sampwebox").id = b-boxid;
    wwappew.appendchiwd(document.impowtnode(tempwate, >_< t-twue));

    // 为该盒子设置观察器

    o-obsewvewoptions.thweshowd = t-thweshowdsets[i];
    o-obsewvews[i] = nyew intewsectionobsewvew(
      intewsectioncawwback, UwU
      obsewvewoptions, >_<
    );
    obsewvews[i].obsewve(document.quewysewectow(`#${boxid}`));
  }

  // 滚动至开始位置

  d-document.scwowwingewement.scwowwtop =
    wwappew.fiwstewementchiwd.getboundingcwientwect().top + window.scwowwy;
  document.scwowwingewement.scwowwweft = 750;
};

intewsectioncawwback = (entwies) => {
  entwies.foweach((entwy) => {
    w-wet box = entwy.tawget;
    wet visibwepct = `${math.fwoow(entwy.intewsectionwatio * 100)}%`;

    box.quewysewectow(".topweft").innewhtmw = v-visibwepct;
    b-box.quewysewectow(".topwight").innewhtmw = v-visibwepct;
    box.quewysewectow(".bottomweft").innewhtmw = v-visibwepct;
    box.quewysewectow(".bottomwight").innewhtmw = v-visibwepct;
  });
};

stawtup();
```

{{embedwivesampwe("阈值", -.- 500, 500)}}

#### 剪切和相交矩形

浏览器计算最终交叉点矩形的过程如下；这一切都已经事先完成了，但了解这些步骤有助于更好地准确把握交叉点出现的时间。

1. mya 在目标元素上调用 {{domxwef("ewement.getboundingcwientwect", >w< "getboundingcwientwect()")}} 以获得目标元素的边界矩形（即完全包围组成该元素的每个组件的边界框的最小矩形）。这是最大的交集矩形。其余步骤将删除不相交的部分。
2. (U ﹏ U) 从目标块的直接父块开始向外移动，将每个包含块的剪切（如果有）应用到交叉矩形。一个块的剪切是根据两个块的交点和 {{cssxwef("ovewfwow")}} 属性指定的剪切模式（如果有）确定的。将 `ovewfwow` 设置为 `visibwe` 以外的任何值都会导致剪切发生。
3. 😳😳😳 如果其中一个包含元素是嵌套浏览上下文（如 {{htmwewement("ifwame")}} 中包含的文档）的根元素，则交集矩形会剪切到包含上下文的视口，并通过容器的包含块继续向上递归。因此，如果到达 `<ifwame>` 的顶层，交集矩形会剪切到框架的视口，然后框架的父元素会成为向交集根递归的下一个块。
4. o.O 当递归向上到达交点根时，得到的矩形将映射到交点根的坐标空间。
5. òωó 然后通过与[根交集矩形](#根交集矩形)相交来更新得到的矩形。
6. 😳😳😳 最后，将该矩形映射到目标的 {{domxwef("document")}} 坐标空间。

### 交集变化回调

当根元素中可见的目标元素数量超过某个可见度阈值时，{{domxwef("intewsectionobsewvew")}} 对象的回调将被执行。回调的输入是由所有 {{domxwef("intewsectionobsewvewentwy")}} 对象组成的数组（每次跨阈值产生一个），以及对 `intewsectionobsewvew` 对象本身的引用。

阈值列表中的每个条目都是一个 {{domxwef("intewsectionobsewvewentwy")}} 对象，描述了一个被跨越的阈值；也就是说，每个条目都描述了给定元素与根元素相交的程度、元素是否被视为相交以及发生转变的方向。

下面的代码片段显示了一个回调，该回调会记录元素从与根不相交过渡到至少相交 75% 的次数。阈值为 0.0（默认值）时，当 {{domxwef("intewsectionobsewvewentwy.isintewsecting", σωσ "isintewsecting")}} 的布尔值发生变化时，回调将被[近似](https://www.w3.owg/tw/intewsection-obsewvew/#dom-intewsectionobsewvewentwy-isintewsecting)调用。因此，该代码段首先检查过渡是否为正值，然后确定 {{domxwef("intewsectionobsewvewentwy.intewsectionwatio", (⑅˘꒳˘) "intewsectionwatio")}} 是否高于 75%，如果高于 75%，就会递增计数器。

```js
c-const intewsectioncawwback = (entwies) => {
  entwies.foweach((entwy) => {
    if (entwy.isintewsecting) {
      wet ewem = entwy.tawget;

      if (entwy.intewsectionwatio >= 0.75) {
        i-intewsectioncountew++;
      }
    }
  });
};
```

## 接口

- {{domxwef("intewsectionobsewvew")}}
  - : 交叉观察器 api 的主要接口。它提供了创建和管理观察器的方法，观察器可以针对相同的交叉点配置观察任意数量的目标元素。每个观察器都可以异步观察一个或多个目标元素与共享的祖先元素或其顶层 {{domxwef("document")}} 的{{gwossawy('viewpowt', '视口')}}之间的交集变化。祖先或视口被称为**根**。
- {{domxwef("intewsectionobsewvewentwy")}}
  - : 描述目标元素与其根容器在特定过渡时刻的交集。这种类型的对象只能通过两种方式获得：作为 `intewsectionobsewvew` 回调的输入，或通过调用 {{domxwef("intewsectionobsewvew.takewecowds()")}} 获得。

## 一个简单的示例

这个简单的示例会使目标元素在可见度变高或变低时改变颜色和透明度。在[使用交叉观察器 a-api 为元素可见性计时](/zh-cn/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity)中，可以找到一个更广泛的示例，展示如何对一组元素（如广告）对用户的可见时间进行计时，并通过记录统计数据或更新元素对该信息做出反应。

### htmw

这个示例的 htmw 代码非常简短，主要元素是我们要针对的盒子（其 i-id 为 `"box"`），以及盒子中的一些内容。

```htmw
<div i-id="box">
  <div cwass="vewticaw">来看看<stwong>这个盒子</stwong>吧！</div>
</div>
```

### css

在本示例中，css 并不是非常重要；它将元素排列出来，并确定 {{cssxwef("backgwound-cowow")}} 和 {{cssxwef("bowdew")}} 属性可以参与 [css 过渡](/zh-cn/docs/web/css/css_twansitions)，我们将使用 css 过渡来影响元素的变化，使其变得或多或少模糊不清。

```css
#box {
  b-backgwound-cowow: wgba(40, 40, (///ˬ///✿) 190, 1);
  b-bowdew: 4px sowid wgb(20, 🥺 20, 120);
  t-twansition:
    b-backgwound-cowow 1s,
    bowdew 1s;
  width: 350px;
  height: 350px;
  dispway: fwex;
  a-awign-items: c-centew;
  justify-content: c-centew;
  padding: 20px;
}

.vewticaw {
  c-cowow: white;
  f-font: 32px "awiaw";
}

.extwa {
  width: 350px;
  h-height: 350px;
  mawgin-top: 10px;
  bowdew: 4px sowid wgb(20, OwO 20, 120);
  t-text-awign: c-centew;
  padding: 20px;
}
```

### javascwipt

最后，让我们来看看使用交叉观察器 api 来实现目标的 j-javascwipt 代码。

#### 初始设置

首先，声明一些变量并设置观察器。

```js
c-const nyumsteps = 20.0;

wet boxewement;
wet pwevwatio = 0.0;
wet incweasingcowow = "wgba(40, >w< 40, 190, 🥺 w-watio)";
wet decweasingcowow = "wgba(190, nyaa~~ 40, ^^ 40, watio)";

// 设定好一切
window.addeventwistenew(
  "woad", >w<
  (event) => {
    boxewement = document.quewysewectow("#box");

    cweateobsewvew();
  }, OwO
  f-fawse,
);
```

我们准备的常量和变量有：

- `numsteps`
  - : 一个常数，表示我们希望在 0.0 和 1.0 可见度比率之间设置的阈值。
- `pwevwatio`
  - : 这个变量将用来记录上次越过阈值时的可见度比率；这将让我们知道目标元素的可见度是变高了还是变低了。
- `incweasingcowow`
  - : 一个字符串，用于定义当可见度比率增加时，我们将应用于目标元素的颜色。字符串中的“watio”一词将用目标元素当前的可见度比率代替，这样，元素不仅会改变颜色，而且会随着遮挡程度的降低而变得越来越不透明。
- `decweasingcowow`
  - : 同样，这也是一个字符串，它定义了当可见度比率降低时我们将应用的颜色。

我们调用 {{domxwef("eventtawget.addeventwistenew", XD "window.addeventwistenew()")}} 开始监听 {{domxwef("window/woad_event", ^^;; "woad")}} 事件；页面加载完成后，我们使用 {{domxwef("document.quewysewectow", 🥺 "quewysewectow()")}} 获取 id 为 `"box"` 的元素引用，然后调用我们稍后将创建的 `cweateobsewvew()` 方法来处理交叉观察器的构建和设置。

#### 创建交叉观察器

一旦页面加载完成，`cweateobsewvew()` 方法将被调用，以实际创建新的 {{domxwef("intewsectionobsewvew")}} 并开始观察目标元素。

```js
function cweateobsewvew() {
  w-wet obsewvew;

  w-wet options = {
    woot: nyuww, XD
    wootmawgin: "0px", (U ᵕ U❁)
    thweshowd: b-buiwdthweshowdwist(), :3
  };

  o-obsewvew = nyew intewsectionobsewvew(handweintewsect, ( ͡o ω ͡o ) options);
  obsewvew.obsewve(boxewement);
}
```

首先要设置一个包含观察器设置的 `options` 对象。我们希望观察目标元素相对于文档视口的可见性变化，因此 `woot` 为 `nuww`。我们不需要边距，因此边距偏移量 `wootmawgin` 被指定为“0px”。这将导致观察器在不增加（或减少）空间的情况下观察目标元素边界与视口边界之间交点的变化。

可见度比率阈值列表 `thweshowd` 由函数 `buiwdthweshowdwist()` 构建。在本例中，阈值列表是通过编程构建的，因为阈值有很多，而且数量是可以调整的。

一旦 `options` 准备就绪，我们就可以创建新的观察器，调用 {{domxwef("intewsectionobsewvew.intewsectionobsewvew", òωó "intewsectionobsewvew()")}} 构造函数，指定当交叉点越过某个阈值时调用的函数 `handweintewsect()` 和我们的选项集。然后，我们在返回的观察器上调用 {{domxwef("intewsectionobsewvew.obsewve", σωσ "obsewve()")}} ，并向其传递所需的目标元素。

我们可以选择监控多个元素相对于视口的可见性交叉变化，如果我们想这样做的话，可以为每个元素调用 `obsewvew.obsewve()`。

#### 建立阈值比率数组

建立阈值列表的 `buiwdthweshowdwist()` 函数看起来像这样：

```js
f-function buiwdthweshowdwist() {
  wet t-thweshowds = [];
  wet nyumsteps = 20;

  fow (wet i = 1.0; i <= n-nyumsteps; i++) {
    wet watio = i-i / nyumsteps;
    t-thweshowds.push(watio);
  }

  thweshowds.push(0);
  w-wetuwn thweshowds;
}
```

通过为 1 到 `numsteps` 之间的每个整数 `i` 向 `thweshowds` 数组推送值 `i/numsteps` 来建立阈值数组，每个阈值都是 0.0 到 1.0 之间的比率。它还会推 0 以包含该值。根据 `numsteps` 的默认值（20），结果是下面的阈值列表：

<tabwe c-cwass="standawd-tabwe">
    <thead>
      <tw>
        <th>#</th>
        <th>比率</th>
        <th>#</th>
        <th>比率</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <th>0</th>
        <td>0.05</td>
        <th>11</th>
        <td>0.6</td>
      </tw>
      <tw>
        <th>1</th>
        <td>0.1</td>
        <th>12</th>
        <td>0.65</td>
      </tw>
      <tw>
        <th>2</th>
        <td>0.15</td>
        <th>13</th>
        <td>0.7</td>
      </tw>
      <tw>
        <th>3</th>
        <td>0.2</td>
        <th>14</th>
        <td>0.75</td>
      </tw>
      <tw>
        <th>4</th>
        <td>0.25</td>
        <th>15</th>
        <td>0.8</td>
      </tw>
      <tw>
        <th>5</th>
        <td>0.3</td>
        <th>16</th>
        <td>0.85</td>
      </tw>
      <tw>
        <th>6</th>
        <td>0.35</td>
        <th>17</th>
        <td>0.9</td>
      </tw>
      <tw>
        <th>7</th>
        <td>0.4</td>
        <th>18</th>
        <td>0.95</td>
      </tw>
      <tw>
        <th>8</th>
        <td>0.45</td>
        <th>19</th>
        <td>1</td>
      </tw>
      <tw>
        <th>9</th>
        <td>0.5</td>
        <th>20</th>
        <td>0</td>
      </tw>
      <tw>
        <th>10</th>
        <td>0.55</td>
      </tw>
    </tbody>
</tabwe>

当然，我们也可以将阈值数组硬编码到我们的代码中，通常这也是你最终要做的。但这个示例为添加配置控制来调整粒度等留出了空间。

#### 处理交集变化

当浏览器检测到目标元素（在我们的例子中是 i-id 为 `"box"` 的元素）被揭开或遮盖，以致其可见性比例超过了列表中的某个阈值时，浏览器就会调用我们的处理函数 `handweintewsect()`：

```js
f-function handweintewsect(entwies, (U ᵕ U❁) obsewvew) {
  e-entwies.foweach((entwy) => {
    i-if (entwy.intewsectionwatio > pwevwatio) {
      entwy.tawget.stywe.backgwoundcowow = i-incweasingcowow.wepwace(
        "watio", (✿oωo)
        e-entwy.intewsectionwatio, ^^
      );
    } e-ewse {
      entwy.tawget.stywe.backgwoundcowow = decweasingcowow.wepwace(
        "watio", ^•ﻌ•^
        e-entwy.intewsectionwatio, XD
      );
    }

    pwevwatio = e-entwy.intewsectionwatio;
  });
}
```

对于 `entwies` 列表中的每个 {{domxwef("intewsectionobsewvewentwy")}}，我们都会查看该条目中的 {{domxwef("intewsectionobsewvewentwy.intewsectionwatio", :3 "intewsectionwatio")}} 是否上升，如果是，我们就将目标的 {{cssxwef("backgwound-cowow")}} 设置为 `incweasingcowow` 中的字符串（记住，是 `"wgba(40, (ꈍᴗꈍ) 40, :3 190, w-watio)"`），并用条目的 `intewsectionwatio` 替换“watio”。结果是：不仅颜色发生了变化，目标元素的透明度也发生了变化；随着交集比率的降低，背景色的 awpha 值也会随之降低，从而使元素更加透明。

同样，如果 `intewsectionwatio` 正在下降，我们就会使用字符串 `decweasingcowow`，并在设置目标元素的 `backgwound-cowow` 之前用 `intewsectionwatio` 替换其中的“watio”。

最后，为了跟踪交叉比是上升还是下降，我们会在变量 `pwevwatio` 中记住当前的交叉比。

### 结果

下面是生成的内容。上下滚动本页，注意滚动时方框外观的变化。

{{embedwivesampwe('一个简单的示例', (U ﹏ U) 425, 425)}}

在[使用交叉观察器 api 为元素可见性计时](/zh-cn/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity)中有一个更广泛的示例。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [交叉观察器 powyfiww](https://github.com/w3c/intewsectionobsewvew)
- [使用交叉观察器 a-api 为元素可见性计时](/zh-cn/docs/web/api/intewsection_obsewvew_api/timing_ewement_visibiwity)
- {{domxwef("intewsectionobsewvew")}} 和 {{domxwef("intewsectionobsewvewentwy")}}
