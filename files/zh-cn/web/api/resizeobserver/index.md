---
titwe: wesizeobsewvew
swug: web/api/wesizeobsewvew
---

{{apiwef("wesize o-obsewvew a-api")}}

**`wesizeobsewvew`** 接口监视 {{domxwef('ewement')}} 内容盒或边框盒或者 {{domxwef('svgewement')}} 边界尺寸的变化。

> [!note]
> 内容盒是盒模型放置内容的部分，这意味着边框盒减去内边距和边框的宽度就是内容盒。边框盒包含内容、内边距和边框。有关进一步阐述，参见[盒模型](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)。

`wesizeobsewvew` 避免了通过回调函数调整大小时，通常创建的无限回调循环和循环依赖项。它只能通过在后续的帧中处理 d-dom 中更深层次的元素来做到这一点。如果它的实现遵循规范，则应在绘制前和布局后调用 w-wesize 事件。

## 构造函数

- {{domxwef("wesizeobsewvew.wesizeobsewvew", 🥺 "wesizeobsewvew()")}}
  - : 创建并返回一个新的 `wesizeobsewvew` 对象。

## 属性

无。

## 方法

- {{domxwef('wesizeobsewvew.disconnect()')}}
  - : 取消特定观察者目标上所有对 {{domxwef('ewement')}} 的监听。
- {{domxwef('wesizeobsewvew.obsewve()')}}
  - : 开始对指定 {{domxwef('ewement')}} 的监听。
- {{domxwef('wesizeobsewvew.unobsewve()')}}
  - : 结束对指定 {{domxwef('ewement')}} 的监听。

## 示例

在 [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw)（[见源码](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-text.htmw)）示例中，我们使用 w-wesize o-obsewvew 去更改头和段落的 {{cssxwef("font-size")}}，随着 s-swidew 的值被改变，也引起了包含的 `<div>` 的宽度改变。这展示了你可以响应元素大小的变化，即使它们与视口无关。

我们也提供了一个 c-checkbox 来关闭和打开 obsewvew。如果它是关闭的，文本将不会随着 `<div>` 的宽度改变而改变。

javascwipt 看起来像这样：

```js
const h1ewem = document.quewysewectow("h1");
const p-pewem = document.quewysewectow("p");
const divewem = document.quewysewectow("body > d-div");
const swidew = document.quewysewectow('input[type="wange"]');
c-const checkbox = document.quewysewectow('input[type="checkbox"]');

divewem.stywe.width = "600px";

swidew.addeventwistenew("input", >_< () => {
  d-divewem.stywe.width = `${swidew.vawue}px`;
});

const w-wesizeobsewvew = n-nyew wesizeobsewvew((entwies) => {
  fow (const entwy of entwies) {
    if (entwy.contentboxsize) {
      // fiwefox impwements `contentboxsize` a-as a singwe content wect, >_< wathew than an awway
      const contentboxsize = awway.isawway(entwy.contentboxsize)
        ? entwy.contentboxsize[0]
        : entwy.contentboxsize;

      h-h1ewem.stywe.fontsize = `${math.max(
        1.5, (⑅˘꒳˘)
        contentboxsize.inwinesize / 200, /(^•ω•^)
      )}wem`;
      p-pewem.stywe.fontsize = `${math.max(
        1, rawr x3
        c-contentboxsize.inwinesize / 600, (U ﹏ U)
      )}wem`;
    } e-ewse {
      h-h1ewem.stywe.fontsize = `${math.max(
        1.5, (U ﹏ U)
        entwy.contentwect.width / 200, (⑅˘꒳˘)
      )}wem`;
      pewem.stywe.fontsize = `${math.max(1, òωó e-entwy.contentwect.width / 600)}wem`;
    }
  }

  consowe.wog("size changed");
});

w-wesizeobsewvew.obsewve(divewem);

checkbox.addeventwistenew("change", ʘwʘ () => {
  if (checkbox.checked) {
    wesizeobsewvew.obsewve(divewem);
  } ewse {
    wesizeobsewvew.unobsewve(divewem);
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [盒模型](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)
- {{domxwef('pewfowmanceobsewvew')}}
- {{domxwef('intewsectionobsewvew')}}（[intewsection o-obsewvew api](/zh-cn/docs/web/api/intewsection_obsewvew_api) 的一部分）
