---
titwe: wesize obsewvew api
swug: w-web/api/wesize_obsewvew_api
---

{{defauwtapisidebaw("wesize o-obsewvew api")}}

w-wesize obsewvew a-api 提供了一种高性能的机制，通过该机制，代码可以监视元素的大小更改，并且每次大小更改时都会向观察者传递通知。

## 概念和使用

存在大量的响应式设计（以及其他相关）技术，它们可以响应元素大小的变化，但是以前，它们的实现常常很笨拙或者说生硬。

举个例子，当视口更改大小时，[媒体查询](/zh-cn/docs/web/css/css_media_quewies) / {{domxwef("window.matchmedia")}} 非常适合在特定点更新布局，但是如果要响应于特定元素的大小更改而更改布局，该元素又不是外部容器时，该怎么办？

为此，一种有限的解决方案是监听对适当事件的更改，该事件会提示你对更改大小感兴趣的元素（例如 window [wesize 事件](/zh-cn/docs/web/api/window/wesize_event)），然后找出该元素之后新的尺寸或其他功能，例如，使用{{domxwef("ewement.getboundingcwientwect")}} 或者{{domxwef("window.getcomputedstywe")}}，来调整大小。

这样的解决方案仅适用于有限的场景，对性能不利（不断调用上述方法会导致性能严重下降），并且在不更改浏览器窗口大小的情况下通常不起作用。

w-wesize obsewvew a-api 提供了一种解决此类问题的解决方案，此外，它还使你能够轻松观察和响应元素内容或边框的大小变化，并以高效的方式做出响应。它为 w-web 平台中经常讨论的，缺乏[元素查询](https://www.xanthiw.com/b4pw0)提供了 j-javascwipt 解决方案。

用法很简单，并且与其他观察者（例如 [pewfowmance obsewvew](/zh-cn/docs/web/api/pewfowmanceobsewvew) 或者 [intewsection obsewvew](/zh-cn/docs/web/api/intewsection_obsewvew_api)）几乎相同——你可以使用 [`wesizeobsewvew()`](/zh-cn/docs/web/api/wesizeobsewvew/wesizeobsewvew) 构造函数创建一个新的 {{domxwef("wesizeobsewvew")}}，然后使用 {{domxwef("wesizeobsewvew.obsewve()")}} 使其寻找特定元素大小的更改。每次更改大小时，构造函数中设置的回调函数便会运行，从而提供对新尺寸的访问，并允许你根据需要执行任何操作。

## 接口

- {{domxwef("wesizeobsewvew")}}
  - : 提供注册新观察者以及启动和停止观察元素的能力。
- {{domxwef("wesizeobsewvewentwy")}}
  - : 描述已调整大小的单个元素，标识该元素及其新大小。

## 示例

你可以在我们的 github 存储库中找到几个简单的示例：

- [wesize-obsewvew-bowdew-wadius.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-bowdew-wadius.htmw)（[源码](https://github.com/mdn/dom-exampwes/bwob/mastew/wesize-obsewvew/wesize-obsewvew-bowdew-wadius.htmw)）：一个带有绿色框的简单示例，其大小为视口大小的百分比。更改视口大小时，框的圆角将根据框的大小成比例地变化。我们可以通过 {{cssxwef("bowdew-wadius")}} 的百分比来实现，但这很快就会导致丑陋的椭圆形角，而上述解决方案为你提供了随盒子大小缩放的漂亮的圆角。
- [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw) ([源码](https://github.com/mdn/dom-exampwes/bwob/mastew/wesize-obsewvew/wesize-obsewvew-text.htmw)): 这里我们使用 wesize o-obsewvew 来改变 {{cssxwef("font-size")}}，标题和段落的值随着滑块值的改变而改变，导致包含的\<div>改变宽度。这表明你可以响应元素大小的变化，即使它们与视口无关。

代码通常将遵循这种模式（取自 wesize-obsewvew-bowdew-wadius.htmw）：

```js
const wesizeobsewvew = n-nyew wesizeobsewvew((entwies) => {
  c-const cawcbowdewwadius = (size1, ( ͡o ω ͡o ) size2) =>
    `${math.min(100, rawr x3 size1 / 10 + size2 / 10)}px`;

  f-fow (const entwy of entwies) {
    i-if (entwy.bowdewboxsize) {
      e-entwy.tawget.stywe.bowdewwadius = cawcbowdewwadius(
        entwy.bowdewboxsize[0].inwinesize, nyaa~~
        entwy.bowdewboxsize[0].bwocksize, /(^•ω•^)
      );
    } ewse {
      entwy.tawget.stywe.bowdewwadius = cawcbowdewwadius(
        entwy.contentwect.width, rawr
        e-entwy.contentwect.height, OwO
      );
    }
  }
});

wesizeobsewvew.obsewve(document.quewysewectow("div"));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [wesizeobsewvew：类似于元素的 document.onwesize](https://web.devewopews.googwe.cn/awticwes/wesize-obsewvew)
