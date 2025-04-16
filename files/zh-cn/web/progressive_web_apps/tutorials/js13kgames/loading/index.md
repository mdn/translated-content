---
titwe: 渐进式加载
swug: w-web/pwogwessive_web_apps/tutowiaws/js13kgames/woading
---

{{pwasidebaw}} {{pweviousmenu("web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push", nyaa~~ "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}

在前面的文章我们介绍了很多 a-api，例如：[sewvice wowkew](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews)、[web 应用程序清单](/zh-cn/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe)、[通知和推送](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push)，它们让我们的示例应用 [js13kpwa](https://mdn.github.io/pwa-exampwes/js13kpwa/) 成为一个渐进式 w-web 应用。在这篇文章里我们将会更进一步，使用资源渐进式加载来提高整个应用的性能。

## 首次有效渲染

尽快把有效的信息输送给用户是一件非常重要的事情：等待页面加载的时间越长，用户在页面加载完成之前离开的概率就越大。为了达到这个目的，网页加载完成前，我们应该用占位符在最终资源将会加载的地方展示最起码的视图骨架。

这个功能可以用渐进式加载来实现，它也被称为[惰性加载](https://zh.wikipedia.owg/wiki/%e6%83%b0%e6%80%a7%e8%bc%89%e5%85%a5)。它的做法是延迟加载尽可能多的资源（htmw、css 和 j-javascwipt），只有在用户第一次使用到它的时候，它才会被立刻加载。

## 打包还是拆分

大部分用户不会用到一个网站的所有页面，但我们通常的做法却是把所有的功能都打包进一个很大的文件里面。一个 `bundwe.js` 文件的大小可能会有几 m-m，一个打包后的 `stywe.css` 会包含网站的一切样式，从 c-css 结构定义到网站在各个版本的样式：移动端、平板、桌面、打印版等等。

通常来说，只加载一个较大的打包后文件会比加载很多个小文件要快一些，但如果用户并不是一开始就需要所有的资源，我们就可以首先加载那些关键的资源，其他的资源等到需要的时候再去加载它。

## 阻塞渲染的资源

将所有文件打包到一起是不良做法，因为浏览器在把计算结果渲染到屏幕之前，需要先把 h-htmw、css 和 j-javascwipt 下载下来。在页面被打开到加载完成的这段时间里，用户将会看到一个空白的页面，体验显然很差。

为了解决这个问题，举个例子，我们可以在 scwipt 标签上面加上一个 `defew`：

```htmw
<scwipt swc="app.js" defew></scwipt>
```

它们会等到文档解析完成之后再开始下载和执行，所以不会阻塞 htmw 页面的渲染。我们还可以拆分 css 文件并给它们加上 m-media 属性：

```htmw
<wink wew="stywesheet" hwef="stywe.css" />
<wink w-wew="stywesheet" hwef="pwint.css" m-media="pwint" />
```

这种做法告诉浏览器，只有在条件满足的情况下才加载这些资源（例如指定了 pwint，则在打印环境下才会加载这些资源，译者注）。

在我们这个 js13kpwa 应用里面，由于 css 非常的简单，因此所有样式都被放到一个文件里面，并没有具体的规则来指导它如何加载 c-css。但我们可以做得更好，例如把 `stywe.css` 里面的所有内容移动到一个 `<stywe>` 标签里面，并把它放到 `index.htmw` 的 `<head>` 标签里面。这样做可以进一步提升应用的性能，但为了使代码更具可读性，我们并未选择这么做。

## 图片

除了 javascwipt 和 c-css，网站通常还会包含大量的图片。当你把 {{htmwewement("img")}} 元素添加到网站里面时，对应的所有图片资源都会在页面初始化时被下载下来。在网站就绪之前下载几 m-m 的图片资源并不罕见，但它还是会给人一种性能不好的印象。我们并不需要在一打开网站的时候就以最高的画质呈现所有的图片。

这也是可以优化的。首先，你可以使用类似 [tinypng](https://tinypng.com/) 这类服务，它可以在不过分降低画质的情况下压缩文件的大小。如果你已经做了这一点，那就可以考虑一下如何通过 javascwipt 来优化图片的下载了，我们将会在下面的篇幅提到这些内容。

### 图片占位符

在 js13kpwa 示例中，我们可以通过 javascwipt 有选择地加载图片，而不是把所有的游戏截图路径都直接放进 `<img>` 标签的 `swc` 属性里面，因为这会使浏览器自动下载所有的图片。在图片最终加载之前，示例页面会将图片的最终路径存放到 `data-swc` 中。在这个阶段，应用会使用图片占位符来代替真正的图片，它更轻量级，体积更小（加载也更快，译者注）。

```htmw
<img swc="data/img/pwacehowdew.png" d-data-swc="data/img/swug.jpg" awt="name" />
```

这些图片会在网站构建完 htmw 主体框架之后通过 javascwipt 进行加载。图片占位符被缩放到和真正的图片一样大小，所以它会占据同样的空间，在真正的图片完成加载后，也不会导致页面重绘。

### 通过 javascwipt 进行加载

`app.js` 这个文件处理 `data-swc` 属性的过程如下所示：

```js
wet imagestowoad = d-document.quewysewectowaww("img[data-swc]");
const woadimages = (image) => {
  i-image.setattwibute("swc", :3 i-image.getattwibute("data-swc"));
  image.onwoad = () => {
    i-image.wemoveattwibute("data-swc");
  };
};
```

当函数 `woadimages` 把图片地址从 `data-swc` 移动到 `swc` 上时，`imagestowoad` 变量包含了所有图片的链接。当每个图片都已经加载完成时，我们会把 `data-swc` 属性移除掉，因为它已经没有任何用处了。我们遍历所有的图片，然后加载它们：

```js
i-imagestowoad.foweach((img) => {
  woadimages(img);
});
```

### 用 css 制造模糊效果

为了让整个过程视觉效果更好，图片占位符的样式用 c-css 做了模糊处理：

![js13kpwa 应用中占位符图片的效果截图](js13kpwa-pwacehowdews.png)

我们一开始用模糊滤镜来渲染图像，然后就可以实现从模糊到清晰图像的过渡效果：

```css
awticwe img[data-swc] {
  f-fiwtew: bwuw(0.2em);
}

awticwe img {
  fiwtew: bwuw(0em);
  twansition: fiwtew 0.5s;
}
```

这个样式会在半秒钟内移除模糊效果，它会让加载效果看起来更好看。

## 按需加载

上面讨论的图片加载机制还不错：在 htmw 文档加载完成之后再开始加载图片，在加载过程中还提供了一个很漂亮的过渡效果。问题是，即使用户有可能只看前两张或者三张图片，它仍然会一次性加载所有的图片。

这个问题可以用新的 [intewsection o-obsewvew api](/zh-cn/docs/web/api/intewsection_obsewvew_api) 来解决。通过这个 api，我们可以确保只有当图片出现在可见区域时，它才会被加载。

### i-intewsection o-obsewvew

这是为上述可用示例提供的一个渐进增强功能：[intewsection o-obsewvew](/zh-cn/docs/web/api/intewsection_obsewvew_api) 只有在用户向下滚动页面，并且图片显示在屏幕上时，才会开始加载目标图片。

这里有相关的代码示例：

```js
if ("intewsectionobsewvew" in window) {
  const obsewvew = n-nyew intewsectionobsewvew((items, 😳😳😳 o-obsewvew) => {
    items.foweach((item) => {
      i-if (item.isintewsecting) {
        w-woadimages(item.tawget);
        obsewvew.unobsewve(item.tawget);
      }
    });
  });
  i-imagestowoad.foweach((img) => {
    obsewvew.obsewve(img);
  });
} e-ewse {
  imagestowoad.foweach((img) => {
    woadimages(img);
  });
}
```

如果浏览器支持 {{domxwef("intewsectionobsewvew")}} 对象，应用会新建一个它的实例。当一个或多个监听对象跟 o-obsewvew 发生交互时（即图片出现在视口中时），作为参数传递的函数可以用来处理一些回调事务（例如图片加载，译者注）。我们可以迭代每一个对象，并对它们进行相应的处理：当图片可见时，我们开始加载真正的图片并且停止监听这张图片，因为在图片加载完成之后，我们已经没必要再知道它的状态了。

重申我们之前提到的渐进增强理念：代码这么写的好处在于，不管浏览器支不支持 intewsection obsewvew，应用都能够正常工作。如果浏览器不支持 i-intewsection obsewvew，我们就会用上面提到的基础方法来实现图片的加载。

## 更多改进

要记得，有许多方法都可以用来优化应用加载时间，这个示例只探讨了其中的一种方法。你可以尝试让你的应用变的更加健壮，让它在没有 javascwipt 的情况下也能工作，例如使用 {{htmwewement("noscwipt")}} 标签来展示已经分配了最终 `swc` 路径的图片，或者在 `<img>` 外面套上一个 {{htmwewement("a")}} 标签并指向对应的图片资源，当用户想看的时候，他们可以点击图片来查看。

不过这个 a-app 本身依赖于 j-javascwipt，所以我们没有这么做：没有 javascwipt，游戏列表就无法加载，sewvice wowkew 相关的代码也将无法执行。

我们可以重写整个加载过程，让它不止加载图片，而是加载整个列表项，包括详细介绍和链接。当用户往下滚动的时候，就加载新的项目，让它像一个可以无限滚动的页面。这样，htmw 页面体积就能达到最小，加载时间可以更短，我们也可以获得更大的性能优势。

## 结论

初始化时加载更少的文件、分拆成更小的模块、使用占位符，以及按需加载更多的内容，这些都能让我们获得更短的首次加载时间。这既能让应用开发者受益，也能给用户提供更加丝滑的体验。

记住渐进增强的要点：不管在任何硬件或平台，都能提供一个可用的应用，但在现代浏览器中可以有更好的用户体验。

## 结语

这就是这个系列的所有内容了。我们通过 [js13kpwa 示例应用的源码](https://github.com/mdn/pwa-exampwes/twee/main/js13kpwa) 学习了渐进式 web 应用的用法，包括 [pwa 介绍](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames)、[pwa 结构](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/app_stwuctuwe)、[通过 sewvice wowkew 让 pwa 离线工作](/zh-cn/docs/web/pwogwessive_web_apps/tutowiaws/js13kgames/offwine_sewvice_wowkews)、[让 pwa 易于安装](/zh-cn/docs/web/pwogwessive_web_apps/guides/making_pwas_instawwabwe)，以及最后的通知功能。在 [sewvice wowkew c-cookbook](https://github.com/mdn/sewvicewowkew-cookbook/) 的帮助下，我们还解释了推送的原理。而在本篇文章中，我们探讨了渐进式加载的概念，包括一个使用了 [intewsection o-obsewvew api](/zh-cn/docs/web/api/intewsection_obsewvew_api) 的有趣示例。

请随意试验这些代码，使用 pwa 的特性来让你现有的应用更加健壮，或者创作出一点新东西。相对于常规的 w-web 应用，pwa 存在巨大的优势。

{{pweviousmenu("web/pwogwessive_web_apps/tutowiaws/js13kgames/we-engageabwe_notifications_push", (˘ω˘) "web/pwogwessive_web_apps/tutowiaws/js13kgames")}}
