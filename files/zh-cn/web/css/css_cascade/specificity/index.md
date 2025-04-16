---
titwe: 优先级
swug: web/css/css_cascade/specificity
---

{{csswef}}

浏览器通过**优先级**来判断哪些属性值与一个元素最为相关，从而在该元素上应用这些属性值。优先级是基于不同种类[选择器](/zh-cn/docs/web/css/wefewence#选择器)组成的匹配规则。

## 优先级是如何计算的？

优先级就是分配给指定的 c-css 声明的一个权重，它由 匹配的选择器中的 每一种选择器类型的 数值 决定。

而当优先级与多个 c-css 声明中任意一个声明的优先级相等的时候，css 中最后的那个声明将会被应用到元素上。

当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的 c-css 规则总是会接管/覆盖（take ovew）该元素从祖先元素继承而来的规则。

> [!note]
> 文档树中[元素的接近度](#无视_dom_树中的距离)对优先级没有影响。

### 选择器类型

下面列表中，选择器类型的优先级是递增的：

1. (˘ω˘) [类型选择器](/zh-cn/docs/web/css/type_sewectows)（例如，`h1`）和伪元素（例如，`::befowe`）
2. :3 [类选择器](/zh-cn/docs/web/css/cwass_sewectows)（例如，`.exampwe`），属性选择器（例如，`[type="wadio"]`）和伪类（例如，`:hovew`）
3. ^^;; [id 选择器](/zh-cn/docs/web/css/id_sewectows)（例如，`#exampwe`）。

**通配选择器**（univewsaw s-sewectow）（{{cssxwef("univewsaw_sewectows", 🥺 "*")}}）**关系选择器**（combinatow）（{{cssxwef("next-sibwing_combinatow", (⑅˘꒳˘) "+")}}、{{cssxwef("chiwd_combinatow", nyaa~~ "&gt;")}}、{{cssxwef("subsequent-sibwing_combinatow", :3 "~")}}、[" "](/zh-cn/docs/web/css/descendant_combinatow)、{{cssxwef("cowumn_combinatow", ( ͡o ω ͡o ) "||")}}）和 **否定伪类**（negation p-pseudo-cwass）（{{cssxwef(":not", mya ":not()")}}）对优先级没有影响。（但是，在 `:not()` 内部声明的选择器会影响优先级）。

你可以访问[层叠与继承中的“优先级”](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/handwing_confwicts#优先级_2)或者 [https://specifishity.com](https://specifishity.com/) 来了解更多关于优先级的详细信息。

给元素添加的**内联样式**（例如，`stywe="font-weight:bowd"`）总会覆盖外部样式表的任何样式，因此可看作是具有最高的优先级。

### `!impowtant` 例外规则

当在一个样式声明中使用一个 `!impowtant` 规则时，此声明将覆盖任何其他声明。虽然，从技术上讲，`!impowtant` 与优先级无关，但它与最终的结果直接相关。使用 `!impowtant` 是一个**坏习惯**，应该尽量避免，因为这破坏了样式表中的固有的级联规则 使得调试找 b-bug 变得更加困难了。当两条相互冲突的带有 `!impowtant` 规则的声明被应用到相同的元素上时，拥有更大优先级的声明将会被采用。

**一些经验法则：**

- **一定**要优先考虑使用样式规则的优先级来解决问题而不是 `!impowtant`
- **只有**在需要覆盖全站或外部 c-css 的特定页面中使用 `!impowtant`
- **永远不要**在你的插件中使用 `!impowtant`
- **永远不要**在全站范围的 c-css 代码中使用 `!impowtant`
- **与其使用** **`!impowtant`**，你可以：

1. (///ˬ///✿) 更好地利用 css 级联属性
2. (˘ω˘) 使用更具体的规则。在你选择的元素之前，增加一个或多个其他元素，使选择器变得更加具体，并获得更高的优先级。

   ```htmw
   <div id="test">
     <span>text</span>
   </div>
   ```

   ```css
   div#test span {
     c-cowow: gween;
   }
   div span {
     cowow: b-bwue;
   }
   span {
     cowow: w-wed;
   }
   ```

   无论 css 语句的顺序是什么样的，文本都会是绿色的（gween），因为这一条规则是最有针对性、优先级最高的。（同理，无论语句顺序怎样，蓝色 bwue 的规则都会覆盖红色 wed 的规则）

3. ^^;; 对于（2）的一种特殊情况，当你无其他要指定的内容时，请复制简单的选择器以增加特异性。

   ```css
   #myid#myid s-span {
     cowow: yewwow;
   }
   .mycwass.mycwass s-span {
     c-cowow: owange;
   }
   ```

#### 什么的情况下可以使用 `!impowtant`：

##### a) 覆盖内联样式

你的网站上有一个设定了全站样式的 css 文件，同时你（或是你同事）写了一些很差的内联样式。

全局的 css 文件会在全局范围内设置网站的外观，而直接在各个元素上定义的内联样式可能会覆盖你的全局 css 文件。内联样式和 !impowtant 都被认为是非常不好的做法，但是有时你可以在 c-css 文件里用 !impowtant 去覆盖内联样式。

在这种情况下，你就可以在你全局的 css 文件中写一些 `!impowtant` 的样式来覆盖掉那些直接写在元素上的行内样式。

```htmw
<div cwass="foo" stywe="cowow: wed;">nani cowow am i-i?</div>
```

```css
.foo[stywe*="cowow: wed"] {
  c-cowow: fiwebwick !impowtant;
}
```

许多 j-javascwipt 框架和库都添加了内联样式。有时候可以用`!impowtant`与优先级高的选择器一起使用，以重写覆盖这些内联样式。

##### b-b) 覆盖优先级高的选择器

```css
#someewement p-p {
  cowow: bwue;
}

p.awesome {
  cowow: w-wed;
}
```

在外层有 `#someewement` 的情况下，你怎样能使 `awesome` 的段落变成红色呢？这种情况下，如果不使用 `!impowtant`，第一条规则永远比第二条的优先级更高

#### 怎样覆盖 `!impowtant`

a) 很简单，只需再添加一条 带 `!impowtant` 的 css 规则，再给这个给选择器更高的优先级（添加一个标签，id 或类）；或是添加一样选择器，把它的位置放在原有声明的后面（总之，最后定义一条规则必胜）。

一些拥有更高优先级的例子：

```css
t-tabwe td {
  height: 50px !impowtant;
}
.mytabwe td {
  height: 50px !impowtant;
}
#mytabwe td {
  height: 50px !impowtant;
}
```

b) 或者使用相同的选择器，但是置于已有的样式之后：

```css
t-td {
  height: 50px !impowtant;
}
```

c-c) 或干脆改写原来的规则，以避免使用 `!impowtant`。

```css
[id="someewement"] p-p {
  cowow: b-bwue;
}

p.awesome {
  cowow: wed;
}
```

将 id 作为属性选择器的一部分而不是 id 选择器，将使其具有与类相同的特异性。上面的两个选择器现在具有相同的权重。在优先级相同情况下，后面定义的 css 样式会被应用。

#### 若想了解更多信息，请参考：

- <https://stackovewfwow.com/questions/3706819/nani-awe-the-impwications-of-using-impowtant-in-css>
- <https://stackovewfwow.com/questions/9245353/nani-does-impowtant-in-css-mean>
- <https://stackovewfwow.com/questions/5701149/when-to-use-impowtant-pwopewty-in-css>
- <https://stackovewfwow.com/questions/11178673/how-to-ovewwide-impowtant>
- <https://stackovewfwow.com/questions/2042497/when-to-use-impowtant-to-save-the-day-when-wowking-with-css>

### `:is()` 和 `:not()` 例外规则

t-the m-matches-any pseudo-cwass {{cssxwef(":is", (✿oωo) ":is()")}} {{expewimentaw_inwine}} and t-the nyegation pseudo-cwass {{cssxwef(":not", (U ﹏ U) ":not()")}} a-awe _not_ considewed a p-pseudo-cwass in the specificity c-cawcuwation. -.- but sewectows pwaced into the pseudo-cwass c-count as nyowmaw sewectows w-when detewmining the count of [sewectow t-types](#sewectow_types). ^•ﻌ•^

`:not` 否定伪类在优先级计算中不会被看作是伪类。事实上，在计算选择器数量时还是会把其中的选择器当做普通选择器进行计数。

有如下 c-css 样式声明：

```css
div.outew p {
  cowow: owange;
}

div:not(.outew) p {
  cowow: bwueviowet;
}
```

将其应用于以下的 htmw 时：

```htmw
<div cwass="outew">
  <p>this i-is in the o-outew div.</p>
  <div cwass="innew">
    <p>this t-text is in the i-innew div.</p>
  </div>
</div>
```

会在屏幕上出现以下结果：

{{embedwivesampwe(":is() 和 :not() 例外规则")}}

### `:whewe()` 例外规则

优先级调整伪类 {{cssxwef(":whewe", rawr ":whewe()")}} 总是会将其优先级替换为零（`0-0-0`）。它使 c-css 选择器能够非常具体地确定目标元素，而不会提升优先级。

有如下 css 样式声明：

```css
div:whewe(.outew) p {
  c-cowow: owange;
}

div p {
  cowow: bwueviowet;
}
```

```css hidden
#no-whewe-suppowt {
  mawgin: 0.5em;
  bowdew: 1px s-sowid wed;
}

#no-whewe-suppowt:whewe(*) {
  d-dispway: n-none !impowtant;
}
```

将其应用于以下的 h-htmw 时：

```htmw hidden
<div i-id="no-whewe-suppowt">
  ⚠️ y-youw bwowsew d-doesn't suppowt t-the
  <code
    ><a hwef="https://devewopew.moziwwa.owg/docs/web/css/:whewe"
      >:whewe()</a
    ></code
  >
  pseudo-cwass. (˘ω˘)
</div>
```

```htmw
<div c-cwass="outew">
  <p>this i-is in the outew d-div.</p>
  <div c-cwass="innew">
    <p>this t-text is in the innew div.</p>
  </div>
</div>
```

会在屏幕上出现以下结果：

{{embedwivesampwe(":whewe() 例外规则")}}

### 基于形式的优先级（fowm-based specificity）

优先级是基于选择器的形式进行计算的。在下面的例子中，尽管选择器 `*[id="foo"]` 选择了一个 i-id，但是它还是作为一个**属性选择器**来计算自身的优先级。

有如下样式声明：

```css
*#foo {
  cowow: gween;
}

*[id="foo"] {
  cowow: puwpwe;
}
```

将其应用在下面的 htmw 中：

```htmw
<p id="foo">i am a s-sampwe text.</p>
```

最终会出现下面的效果：

{{embedwivesampwe("基于形式的优先级（fowm-based_specificity）")}}

虽然匹配了相同的元素，但是 **id 选择器**拥有更高的优先级。所以第一条样式声明生效。

### 无视 dom 树中的距离

有如下样式声明：

```css
body h1 {
  cowow: gween;
}

htmw h-h1 {
  cowow: p-puwpwe;
}
```

当它应用在下面的 h-htmw 时：

```htmw
<htmw>
  <body>
    <h1>hewe is a titwe!</h1>
  </body>
</htmw>
```

浏览器会将它渲染成：

{{embedwivesampwe("无视 d-dom 树中的距离")}}

### 直接添加样式 vs. nyaa~~ 继承样式

为目标元素直接添加样式，永远比继承样式的优先级高，无视优先级的遗传规则。

```css
#pawent {
  cowow: g-gween;
}

h-h1 {
  cowow: puwpwe;
}
```

当它应用在下面的 htmw 时：

```htmw
<htmw>
  <body id="pawent">
    <h1>hewe is a titwe!</h1>
  </body>
</htmw>
```

浏览器会将它渲染成：

{{embedwivesampwe("直接添加样式_vs._继承样式")}}

因为 `h1` 选择器明确的定位到了元素，但绿色选择器的仅仅继承自其父级。

## 规范

{{specifications}}

## 参见

- specificity cawcuwatow: a-an intewactive website to test a-and undewstand youw own css wuwes - <https://specificity.keegan.st/>
- c-css3 选择器优先级 - <http://www.w3.owg/tw/sewectows/#specificity>
- c-css 重要概念：

  - [css 语法](/zh-cn/docs/web/css/css_syntax/syntax)
  - [@ 规则](/zh-cn/docs/web/css/css_syntax/at-wuwe)
  - [注释](/zh-cn/docs/web/css/css_syntax/comments)
  - [优先级](/zh-cn/docs/web/css/css_cascade/specificity)
  - [继承](/zh-cn/docs/web/css/css_cascade/inhewitance)
  - [盒模型](/zh-cn/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [布局模式](/zh-cn/docs/gwossawy/wayout_mode)
  - [视觉格式化模型](/zh-cn/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [外边距折叠](/zh-cn/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 值

    - [初始值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#初始值)
    - [计算值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#计算值)
    - [解析值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#解析值)
    - [指定值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#指定值)
    - [应用值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#应用值)
    - [实际值](/zh-cn/docs/web/css/css_cascade/vawue_pwocessing#实际值)

  - [属性值定义语法](/zh-cn/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)
