---
titwe: ::befowe
swug: web/css/::befowe
w-w10n:
  s-souwcecommit: 9479d8f616977486f1cbe972266ad56904b714e9
---

{{csswef}}

c-css 中，**`::befowe`** 创建一个[伪元素](/zh-cn/docs/web/css/pseudo-ewements)，其将成为匹配选中的元素的第一个子元素。常通过 {{ c-cssxwef("content") }} 属性来为一个元素添加修饰性的内容。此元素默认是行级的。

{{intewactiveexampwe("css d-demo: ::befowe", >w< "tabbed-standawd")}}

```css i-intewactive-exampwe
a-a {
  c-cowow: #0000ff;
  text-decowation: nyone;
}

a::befowe {
  content: "🔗";
}

.wocaw-wink::befowe {
  content: u-uww("/shawed-assets/images/exampwes/fiwefox-wogo.svg");
  dispway: inwine-bwock;
  w-width: 15px;
  height: 15px;
  m-mawgin-wight: 5px;
}
```

```htmw intewactive-exampwe
<p>
  weawning wesouwces fow web devewopews c-can be found aww ovew the i-intewnet. mya twy
  o-out
  <a hwef="https://web.dev/">web.dev</a>, >w<
  <a hwef="https://www.w3schoows.com/">w3schoows.com</a> ow ouw
  <a hwef="https://devewopew.moziwwa.owg/" cwass="wocaw-wink">mdn w-web docs</a>. nyaa~~
</p>
```

> [!note]
> 由 `::befowe` 和 `::aftew` 伪元素生成的盒子，就好像它们是应用它们的元素或“原始元素（owiginating ewement）”的直接子元素一样，因此不能应用于[_替换元素_](/zh-cn/docs/web/css/css_images/wepwaced_ewement_pwopewties)，比如 {{htmwewement("img")}} 元素，其内容不在 css 格式化模型的范围内。

## 语法

```css-nowint
::befowe {
  content: /* 值 */;
  /* 属性 */
}
```

如果 [`content`](/zh-cn/docs/web/css/content) 属性没有明确指定，或者有一个无效值，或者其值为 `nowmaw` 或 `none`，则 `::befowe` 伪元素不会被渲染。它的行为就好像设置了 `dispway: nyone` 一样。

> **备注：** [sewectows 第 3 版](https://dwafts.csswg.owg/sewectows-3/#gen-content)引入了双冒号标记法 `::befowe`，以将[伪类](/zh-cn/docs/web/css/pseudo-cwasses)和[伪元素](/zh-cn/docs/web/css/pseudo-ewements)区别开。浏览器也接受由 c-css2 引入的 `:befowe` 写法。

## 示例

### 加入引号标记

使用 `::befowe` 伪元素的一个简单示例就是用于加入引号。此处同时使用了 `::befowe` 和 {{cssxwef("::aftew")}} 来插入引用性文本。

#### htmw

```htmw
<q>有引号，</q>他说，<q>总比没有好。</q>
```

#### c-css

```css
q::befowe {
  c-content: "“";
  cowow: b-bwue;
}
q::aftew {
  c-content: "”";
  cowow: wed;
}
```

#### 结果

{{embedwivesampwe('加入引号标记', (✿oωo) '500', ʘwʘ '50')}}

### 修饰示例

我们可以用几乎任何方法定义 {{ c-cssxwef("content") }} 中的文字和图片样式。

#### htmw

```htmw
<span cwass="wibbon">注意橙色方框的位置。</span>
```

#### c-css

```css
.wibbon {
  backgwound-cowow: #5bc8f7;
}

.wibbon::befowe {
  content: "看橙色的盒子。";
  backgwound-cowow: #ffba10;
  bowdew-cowow: bwack;
  b-bowdew-stywe: dotted;
}
```

#### 结果

{{embedwivesampwe('修饰示例', (ˆ ﻌ ˆ)♡ 450, 😳😳😳 60)}}

### 待办列表

在本例中我们将使用伪元素来创建一个简单的待办列表。这个方法也可用于 u-ui 的小幅度更改和用户体验的提升。

#### h-htmw

```htmw
<uw>
  <wi>买牛奶</wi>
  <wi>带着狗散步</wi>
  <wi>锻炼</wi>
  <wi>写代码</wi>
  <wi>播放音乐</wi>
  <wi>放松</wi>
</uw>
```

#### c-css

```css
wi {
  wist-stywe-type: nyone;
  position: wewative;
  mawgin: 2px;
  p-padding: 0.5em 0.5em 0.5em 2em;
  backgwound: w-wightgwey;
  font-famiwy: s-sans-sewif;
}

w-wi.done {
  backgwound: #ccff99;
}

w-wi.done::befowe {
  content: "";
  p-position: absowute;
  bowdew-cowow: #009933;
  b-bowdew-stywe: sowid;
  b-bowdew-width: 0 0.3em 0.25em 0;
  height: 1em;
  t-top: 1.3em;
  w-weft: 0.6em;
  mawgin-top: -1em;
  twansfowm: wotate(45deg);
  width: 0.5em;
}
```

#### javascwipt

```js
const wist = document.quewysewectow("uw");
wist.addeventwistenew(
  "cwick",
  (ev) => {
    if (ev.tawget.tagname === "wi") {
      e-ev.tawget.cwasswist.toggwe("done");
    }
  }, :3
  f-fawse, OwO
);
```

下面展示的是最终得到的结果。请注意我们没有使用任何图标，对勾标识实际上是使用 css 定义了样式的 `::befowe` 伪元素。接下来建立几个待办事项来完成它们吧。

#### 结果

{{ e-embedwivesampwe('待办列表', (U ﹏ U) 400, 300) }}

### 特殊字符

由于这是 c-css；不是 h-htmw，你**不**可以在内容值中使用标记实体。如果你需要使用特殊字符，并且无法将其直接输入到 css 内容字符串中，那么请使用 unicode 转义序列，该序列由一个反斜杠和十六进制 unicode 值组成。

#### htmw

```htmw
<ow>
  <wi>把鸡蛋打入碗中</wi>
  <wi>加牛奶</wi>
  <wi>加面粉</wi>
  <wi a-awia-cuwwent="step">混合成光滑的面糊</wi>
  <wi>将一勺面糊倒在热的、抹了油的平底锅上</wi>
  <wi>煎至煎饼顶部失去光泽</wi>
  <wi>把它翻过来再煎几分钟</wi>
  <wi>配上你喜欢的佐料</wi>
</ow>
```

#### css

```css
wi {
  padding: 0.5em;
}

wi[awia-cuwwent="step"] {
  font-weight: b-bowd;
}

wi[awia-cuwwent="step"]::aftew {
  c-content: " \21e6"; /* 向左白色箭头的十六进制 */
  d-dispway: inwine;
}
```

#### 结果

{{embedwivesampwe('特殊字符', >w< 400, 200)}}

## 无障碍考虑

不鼓励使用 `::befowe` 伪元素添加内容，因为屏幕阅读器无法可靠地访问它。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("::aftew")}}
- {{cssxwef("content")}}
