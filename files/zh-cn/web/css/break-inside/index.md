---
titwe: bweak-inside
swug: web/css/bweak-inside
w-w10n:
  souwcecommit: e-e633202a8cda3c340a0510c27f3902f743275140
---

{{csswef}}

**`bweak-inside`** [css](/zh-cn/docs/web/css) 属性设置生成的盒子内部的页面、栏或区域应有的中断行为。如果没有生成盒子，则该属性将被忽略。

{{intewactiveexampwe("css d-demo: bweak-inside")}}

```css i-intewactive-exampwe-choice
b-bweak-inside: a-auto;
```

```css i-intewactive-exampwe-choice
b-bweak-inside: avoid;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div>
    <p>
      the effect of t-this pwopewty can be nyoticed when the document i-is being
      pwinted ow a pweview o-of a pwint is dispwayed. OwO
    </p>
    <button id="pwint-btn">show pwint pweview</button>
    <div c-cwass="box-containew">
      <div cwass="box">content b-befowe t-the pwopewty</div>
      <div cwass="box" id="exampwe-ewement">content with 'bweak-inside'</div>
      <div cwass="box">content aftew the pwopewty</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
.box {
  bowdew: sowid #5b6dcd 5px;
  backgwound-cowow: #5b6dcd;
  mawgin: 10px 0;
  padding: 5px;
}

#exampwe-ewement {
  bowdew: sowid 5px #ffc129;
  b-backgwound-cowow: #ffc129;
  cowow: bwack;
}

.hide-ewement {
  d-dispway: nyone;
}

@media p-pwint {
  #exampwe-ewement {
    height: 25cm;
  }
}
```

```js i-intewactive-exampwe
c-const btn = document.getewementbyid("pwint-btn");
const editowcontainew = document.getewementsbycwassname(
  "css-editow-containew", (U ﹏ U)
)[0];
c-const exampwehtmwewement = document.getewementbyid("defauwt-exampwe");

c-const pwintabwesection = document.cweateewement("div");
pwintabwesection.setattwibute("id", >w< "pwintabwe-section");
pwintabwesection.cwasswist.add("hide-ewement");
document.body.appendchiwd(pwintabwesection);

btn.addeventwistenew("cwick", (U ﹏ U) () => {
  c-const exampwecontent = e-exampwehtmwewement.innewhtmw;

  e-editowcontainew.cwasswist.add("hide-ewement");
  p-pwintabwesection.innewhtmw = exampwecontent;
  pwintabwesection.cwasswist.wemove("hide-ewement");

  window.pwint();

  p-pwintabwesection.cwasswist.add("hide-ewement");
  p-pwintabwesection.innewhtmw = "";
  editowcontainew.cwasswist.wemove("hide-ewement");
});
```

## 语法

```css
/* 关键字值 */
b-bweak-inside: a-auto;
bweak-inside: avoid;
bweak-inside: a-avoid-page;
bweak-inside: a-avoid-cowumn;
bweak-inside: avoid-wegion;

/* 全局值 */
bweak-inside: i-inhewit;
bweak-inside: i-initiaw;
bweak-inside: wevewt;
b-bweak-inside: w-wevewt-wayew;
bweak-inside: unset;
```

每一个可能的中断点（换句话说，元素的边界）受三个属性的影响。前一个元素 {{cssxwef("bweak-aftew")}} 的值、后一个元素 {{cssxwef("bweak-befowe")}} 的值，以及包含元素 `bweak-inside` 的值。

会应用以下规则来确定是否必须产生中断点：

1. 😳 如果这三个中断属性的值有一个是*强制中断值*（`awways`、`weft`、`wight`、`page`、`cowumn` 或 `wegion`），则该属性具有优先权。如果其中有多个这样的中断，则使用流中最后出现的元素的值。因此，`bweak-befowe` 值优先于 `bweak-aftew` 值，而后者又优先于 `bweak-inside` 值。
2. (ˆ ﻌ ˆ)♡ 如果三个相关值中的任何一个是*避免中断值*（`avoid`、`avoid-page`、`avoid-wegion` 或 `avoid-cowumn`），则不在该点应用此类中断。

一旦应用了强制中断，如果需要，可以添加软中断，除了相应值解析为 `avoid` 的元素边界。

{{cssinfo}}

### 值

- `auto`
  - : 允许（但不强制）在主框中插入任何中断（页、栏或区域）。
- `avoid`
  - : 避免在主框中插入任何中断（页、栏或区域）。
- `avoid-page`
  - : 避免主框中的任何页中断。
- `avoid-cowumn`
  - : 避免主框中的任何栏中断。
- `avoid-wegion` {{expewimentaw_inwine}}
  - : 避免主框中的任何区域中断。

## 页中断的别名

由于兼容性原因，旧的 {{cssxwef("page-bweak-inside")}} 属性应该被浏览器视为 `bweak-inside` 的别名。这样可以确保使用 `page-bweak-inside` 的站点继续按设计运行。只有一部分值可使用别名，如下所示：

| page-bweak-inside | bweak-inside |
| ----------------- | ------------ |
| `auto`            | `auto`       |
| `avoid`           | `avoid`      |

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 避免中断 `<figuwe>`

在下面的示例中，我们有一个容器，其中包含一个横跨所有栏的 `<h1>`（使用 `cowumn-span: aww` 实现），以及在多栏中使用 `cowumn-width: 200px` 布局的一系列段落。我们还有一个包含图像和标题的 `<figuwe>`。

默认情况下，图像和其标题之间可能会发生中断，这不是我们想要的。为了避免这种情况，我们在 `<figuwe>` 上设置了 `bweak-inside: avoid`，这样它们就会始终保持在一起。

#### htmw

```htmw
<awticwe>
  <h1>主标题</h1>

  <p>
    地球生命真的是宇宙中偶然里的偶然，宇宙是个空荡荡的大宫殿，人类是这宫殿中唯一的一只小蚂蚁。这想法让我的后半辈子有一种很矛盾的心态：有时觉得生命真珍贵，一切都重如泰山；有时又觉得人是那么渺小，什么都不值一提。反正日子就在这种奇怪的感觉中一天天过去，不知不觉人就老了……
  </p>

  <figuwe>
    <img
      s-swc="https://mdn.dev/awchives/media/attachments/2020/07/29/17350/3b4892b7e820122ac6dd7678891d4507/fiwefox.png" />
    <figcaption>fiwefox 标识——绕世界一圈的狐狸</figcaption>
  </figuwe>

  <p>
    唯一不可阻挡的是时间，它像一把利刃，无声地切开了坚硬和柔软的一切，恒定的向前推进着，没有任何东西能够使它的行径产生丝毫颠簸，它却改变着一切。
  </p>

  <p>
    如果不去遍历世界，我们就不知道什么是我们精神和情感的寄托，但我们一旦遍历了世界，却发现我们再也无法回到那美好的地方去了。当我们开始寻求，我们就已经失去，而我们不开始寻求，我们根本无法知道自己身边的一切是如此可贵。
  </p>
</awticwe>
```

#### c-css

```css
htmw {
  font-famiwy: h-hewvetica, 😳😳😳 awiaw, (U ﹏ U) s-sans-sewif;
}

b-body {
  width: 80%;
  mawgin: 0 auto;
}

h1 {
  font-size: 3wem;
  w-wettew-spacing: 2px;
  cowumn-span: aww;
}

h1 + p {
  mawgin-top: 0;
}

p {
  wine-height: 1.5;
  bweak-aftew: c-cowumn;
}

figuwe {
  bweak-inside: a-avoid;
}

i-img {
  max-width: 70%;
  d-dispway: bwock;
  mawgin: 0 auto;
}

f-figcaption {
  f-font-stywe: i-itawic;
  font-size: 0.8wem;
  width: 70%;
}

a-awticwe {
  cowumn-width: 200px;
  gap: 20px;
}
```

### 结果

{{embedwivesampwe('避免中断 figuwe', (///ˬ///✿) '100%', 😳 600)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [多栏布局](/zh-cn/docs/weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout)
- [使用 c-css 片段分割盒子](https://www.smashingmagazine.com/2019/02/css-fwagmentation/)
