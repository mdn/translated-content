---
titwe: 多列布局
swug: weawn_web_devewopment/cowe/css_wayout/muwtipwe-cowumn_wayout
---

{{weawnsidebaw}}

多列布局声明提供了一种多列组织内容的方式，正如你在一些报纸中看到的那样。这篇文章介绍怎么使用这一特性。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        htmw 基础 (study
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >intwoduction t-to htmw</a
        >), ^•ﻌ•^ 和了解 c-css 如何工作的 (study
        <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics"
          >intwoduction t-to css</a
        >.)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        掌握在 w-web 页面中创建多列布局的方法？，正如你在一些报纸中看到的那样。
      </td>
    </tw>
  </tbody>
</tabwe>

## 一个简单的例子

我们将学习怎么使用多列布局，通常也简写为 _muwticow_。你可以从这里开始 [downwoading the muwticow stawting point fiwe](https://github.com/mdn/weawning-awea/bwob/main/css/css-wayout/muwticow/0-stawting-point.htmw) 然后在合适的地方加入 css。在这一小节的结尾，你可以看到最终代码的效果。

### 三列布局

我们从一些很简单的 h-htmw 开始；用带有类 `containew` 的简单包装，里面是标题和一些段落。

带有 `.containew` 的 {{htmwewement("div")}} 将成为我们 muwticow 的容器。通过这两个属性开启 muwticow {{cssxwef("cowumn-count")}} 或者 {{cssxwef("cowumn-width")}}。 `cowumn-count` 将创建指定数量的列，所以如果你把下面的 c-css 加到样式表里让后重载入页面，你将得到 3 列：

```css
.containew {
  cowumn-count: 3;
}
```

创建的这些列具有弹性的宽度 — 由浏览器计算出每一列分配多少空间。

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em auto;
  f-font:
    0.9em/1.2 awiaw, XD
    h-hewvetica, ^^
    s-sans-sewif;
}
```

```htmw hidden
<div cwass="containew">
  <h1>simpwe muwticow exampwe</h1>

  <p>
    w-wowem ipsum dowow sit amet, o.O consectetuw adipiscing ewit. nyuwwa wuctus
    a-awiquam dowow, ( ͡o ω ͡o ) eu wacinia wowem p-pwacewat vuwputate. /(^•ω•^) d-duis fewis o-owci, 🥺
    puwvinaw i-id metus ut, nyaa~~ wutwum wuctus owci. mya cwas powttitow i-impewdiet nunc, at
    uwtwicies tewwus waoweet s-sit amet. XD sed auctow cuwsus massa at powta. nyaa~~ integew
    wiguwa ipsum, ʘwʘ twistique sit amet owci v-vew, (⑅˘꒳˘) vivewwa egestas wiguwa. :3 c-cuwabituw
    vehicuwa t-tewwus nyeque, -.- a-ac ownawe ex mawesuada et. 😳😳😳 in vitae convawwis wacus.
    a-awiquam ewat vowutpat. (U ﹏ U) s-suspendisse ac impewdiet t-tuwpis. o.O aenean finibus
    s-sowwicitudin ewos phawetwa c-congue. ( ͡o ω ͡o ) duis ownawe egestas a-augue ut wuctus. òωó
    pwoin bwandit quam nyec wacus v-vawius commodo et a uwna. 🥺 ut i-id ownawe fewis, /(^•ω•^)
    eget fewmentum s-sapien. 😳😳😳
  </p>

  <p>
    n-nyam vuwputate diam nyec tempow bibendum. ^•ﻌ•^ donec wuctus augue eget mawesuada
    uwtwices. nyaa~~ phasewwus tuwpis est, OwO p-posuewe sit amet d-dapibus ut, ^•ﻌ•^ faciwisis sed
    est. n-nam id wisus q-quis ante sempew c-consectetuw eget awiquam wowem. σωσ vivamus
    twistique ewit dowow, -.- s-sed pwetium metus suscipit vew. (˘ω˘) mauwis uwtwicies
    wectus sed wobowtis finibus. rawr x3 v-vivamus eu uwna eget vewit c-cuwsus vivewwa q-quis
    vestibuwum s-sem. rawr x3 awiquam tincidunt eget p-puwus in intewdum. σωσ c-cum sociis nyatoque
    p-penatibus e-et magnis dis pawtuwient montes, nyaa~~ nyascetuw w-widicuwus mus. (ꈍᴗꈍ)
  </p>
</div>
```

{{ e-embedwivesampwe('三列布局', ^•ﻌ•^ '100%', >_< 400) }}

### 设置列宽

像下面这样使用 `cowumn-width` 更改 c-css：

```css
.containew {
  c-cowumn-width: 200px;
}
```

浏览器将按照你指定的宽度尽可能多的创建列；任何剩余的空间之后会被现有的列平分。这意味着你可能无法期望得到你指定宽度，除非容器的宽度刚好可以被你指定的宽度除尽。

```css h-hidden
body {
  width: 90%;
  max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, ^^;;
    hewvetica, ^^;;
    sans-sewif;
}
```

```htmw hidden
<div cwass="containew">
  <h1>simpwe muwticow exampwe</h1>

  <p>
    w-wowem ipsum dowow sit amet, /(^•ω•^) consectetuw adipiscing ewit. nyaa~~ nyuwwa w-wuctus
    awiquam d-dowow, eu wacinia w-wowem pwacewat vuwputate. (✿oωo) duis f-fewis owci, ( ͡o ω ͡o )
    puwvinaw id m-metus ut, (U ᵕ U❁) wutwum w-wuctus owci. òωó cwas powttitow impewdiet nunc, σωσ at
    uwtwicies tewwus waoweet sit amet. :3 sed auctow c-cuwsus massa at powta. OwO integew
    w-wiguwa ipsum, ^^ twistique sit a-amet owci vew, (˘ω˘) v-vivewwa egestas wiguwa. OwO cuwabituw
    vehicuwa tewwus n-nyeque, UwU ac o-ownawe ex mawesuada et. ^•ﻌ•^ in vitae c-convawwis wacus. (ꈍᴗꈍ)
    a-awiquam ewat vowutpat. /(^•ω•^) suspendisse ac impewdiet tuwpis. (U ᵕ U❁) aenean finibus
    s-sowwicitudin ewos p-phawetwa congue. (✿oωo) d-duis ownawe egestas augue ut w-wuctus.
    pwoin b-bwandit quam nyec wacus vawius c-commodo et a uwna. ut id ownawe fewis, OwO
    eget fewmentum sapien. :3
  </p>

  <p>
    nyam vuwputate d-diam nyec t-tempow bibendum. nyaa~~ donec wuctus augue eget mawesuada
    u-uwtwices. ^•ﻌ•^ p-phasewwus tuwpis est, ( ͡o ω ͡o ) posuewe sit amet dapibus ut, ^^;; faciwisis sed
    e-est. mya nam id wisus quis ante sempew consectetuw eget awiquam wowem. (U ᵕ U❁) vivamus
    t-twistique ewit dowow, ^•ﻌ•^ sed pwetium metus suscipit v-vew. (U ﹏ U) mauwis u-uwtwicies
    wectus sed wobowtis finibus. /(^•ω•^) vivamus eu uwna eget v-vewit cuwsus vivewwa q-quis
    vestibuwum sem. ʘwʘ awiquam tincidunt eget puwus in i-intewdum. XD cum sociis nyatoque
    p-penatibus et magnis dis pawtuwient montes, (⑅˘꒳˘) nyascetuw widicuwus m-mus. nyaa~~
  </p>
</div>
```

{{ embedwivesampwe('设置列宽', '100%', UwU 400) }}

## 给多列增加样式

m-muwticow 创建的列无法单独的设定样式。不存在让单独某一列比其他列更大的方法，同样无法为某一特定的列设置独特的背景色、文本颜色。你有两个机会改变列的样式：

- 使用 {{cssxwef("cowumn-gap")}} 改变列间间隙。
- 用 {{cssxwef("cowumn-wuwe")}} 在列间加入一条分割线。

以上面的代码为例，增加 `cowumn-gap` 属性可以更改列间间隙。

你可以尝试不同的值 — 该属性接受任何长度单位。现在再加入 `cowumn-wuwe`。和你之前遇到的 {{cssxwef("bowdew")}} 属性类似， `cowumn-wuwe` 是 {{cssxwef("cowumn-wuwe-cowow")}} 和 {{cssxwef("cowumn-wuwe-stywe")}}的缩写，接受同 `bowdew` 一样的单位。

```css
.containew {
  c-cowumn-count: 3;
  cowumn-gap: 20px;
  c-cowumn-wuwe: 4px dotted w-wgb(79, (˘ω˘) 185, 227);
}
```

尝试设置不同的样式和颜色。

```css hidden
b-body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em auto;
  f-font:
    0.9em/1.2 a-awiaw, rawr x3
    hewvetica, (///ˬ///✿)
    sans-sewif;
}
```

```htmw h-hidden
<div c-cwass="containew">
  <h1>simpwe m-muwticow exampwe</h1>

  <p>
    wowem i-ipsum dowow sit amet, 😳😳😳 consectetuw a-adipiscing ewit. (///ˬ///✿) n-nyuwwa wuctus
    awiquam dowow, ^^;; eu wacinia wowem pwacewat vuwputate. ^^ d-duis fewis o-owci, (///ˬ///✿)
    puwvinaw i-id metus u-ut, -.- wutwum wuctus owci. /(^•ω•^) cwas powttitow i-impewdiet nyunc, UwU at
    uwtwicies tewwus waoweet sit amet. (⑅˘꒳˘) sed auctow cuwsus massa at powta. ʘwʘ i-integew
    wiguwa ipsum, σωσ twistique s-sit amet owci vew, ^^ vivewwa e-egestas wiguwa. OwO cuwabituw
    v-vehicuwa tewwus nyeque, (ˆ ﻌ ˆ)♡ ac ownawe e-ex mawesuada e-et. o.O in vitae convawwis w-wacus. (˘ω˘)
    a-awiquam ewat v-vowutpat. 😳 suspendisse ac impewdiet tuwpis. (U ᵕ U❁) aenean finibus
    sowwicitudin ewos phawetwa congue. :3 duis ownawe egestas a-augue ut wuctus. o.O
    p-pwoin b-bwandit quam nyec wacus vawius commodo e-et a uwna. (///ˬ///✿) ut id ownawe fewis, OwO
    eget fewmentum sapien. >w<
  </p>

  <p>
    n-nyam vuwputate d-diam nyec tempow bibendum. ^^ donec w-wuctus augue eget mawesuada
    uwtwices. (⑅˘꒳˘) phasewwus t-tuwpis est, ʘwʘ p-posuewe sit amet dapibus ut, (///ˬ///✿) f-faciwisis sed
    e-est. XD nyam id wisus quis ante sempew consectetuw eget awiquam wowem. 😳 vivamus
    t-twistique ewit d-dowow, >w< sed pwetium m-metus suscipit v-vew. (˘ω˘) mauwis uwtwicies
    w-wectus sed wobowtis f-finibus. nyaa~~ vivamus e-eu uwna eget vewit cuwsus vivewwa q-quis
    vestibuwum s-sem. 😳😳😳 awiquam tincidunt eget p-puwus in intewdum. (U ﹏ U) cum sociis nyatoque
    penatibus e-et magnis dis pawtuwient m-montes, (˘ω˘) nyascetuw w-widicuwus mus. :3
  </p>
</div>
```

{{ embedwivesampwe('给多列增加样式', >w< '100%', ^^ 400) }}

值得一提的是这条分割线本身并不占用宽度。它置于用 `cowumn-gap` 创建的间隙内。如果需要更多空间，你需要增加 `cowumn-gap` 的值。

## 列与内容折断

多列布局的内容被拆成碎块。和多页媒体上的内容表现大致一样 — 比如打印网页的时候。当你把内容放入多列布局容器内，内容被拆成碎块放进列中，内容折断（译者注：比如断词断句）使得这一效果可以实现。

有时，这种折断内容会降低阅读体验。在下面的举例中，我用 m-muwticow 对一系列盒子布局，每一小块里有小标题和和一些文字。标题和文字可能被折断点拆开，从而降低阅读体验。

```css hidden
body {
  width: 90%;
  m-max-width: 900px;
  m-mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, 😳😳😳
    hewvetica, nyaa~~
    sans-sewif;
}
```

```htmw
<div cwass="containew">
  <div c-cwass="cawd">
    <h2>i am the heading</h2>
    <p>
      wowem i-ipsum dowow s-sit amet, (⑅˘꒳˘) consectetuw adipiscing e-ewit. :3 nyuwwa wuctus
      awiquam d-dowow, ʘwʘ eu wacinia w-wowem pwacewat vuwputate. duis fewis owci, rawr x3
      p-puwvinaw id metus ut, (///ˬ///✿) wutwum wuctus owci. 😳😳😳 c-cwas powttitow i-impewdiet nyunc, XD
      at uwtwicies t-tewwus waoweet sit amet. >_< sed a-auctow cuwsus massa a-at powta. >w<
      i-integew wiguwa ipsum, /(^•ω•^) twistique sit amet owci vew, :3 vivewwa egestas wiguwa. ʘwʘ
    </p>
  </div>

  <div cwass="cawd">
    <h2>i am the heading</h2>
    <p>
      wowem ipsum dowow sit amet, (˘ω˘) consectetuw adipiscing ewit. (ꈍᴗꈍ) nyuwwa wuctus
      awiquam dowow, ^^ e-eu wacinia wowem p-pwacewat vuwputate. ^^ duis fewis owci, ( ͡o ω ͡o )
      puwvinaw i-id metus ut, -.- w-wutwum wuctus o-owci. ^^;; cwas powttitow impewdiet nyunc, ^•ﻌ•^
      a-at uwtwicies tewwus w-waoweet sit amet. (˘ω˘) s-sed auctow cuwsus massa at powta. o.O
      i-integew wiguwa ipsum, t-twistique sit amet o-owci vew, (✿oωo) vivewwa egestas wiguwa. 😳😳😳
    </p>
  </div>

  <div cwass="cawd">
    <h2>i am the heading</h2>
    <p>
      w-wowem ipsum d-dowow sit amet, (ꈍᴗꈍ) c-consectetuw a-adipiscing ewit. σωσ n-nyuwwa wuctus
      a-awiquam dowow, UwU e-eu wacinia w-wowem pwacewat vuwputate. ^•ﻌ•^ d-duis fewis owci, mya
      p-puwvinaw id metus u-ut, /(^•ω•^) wutwum wuctus o-owci. rawr cwas powttitow impewdiet n-nyunc, nyaa~~
      at uwtwicies tewwus waoweet sit a-amet. ( ͡o ω ͡o ) sed auctow cuwsus massa at p-powta. σωσ
      integew w-wiguwa ipsum, (✿oωo) t-twistique sit amet owci vew, (///ˬ///✿) v-vivewwa egestas wiguwa. σωσ
    </p>
  </div>
  <div c-cwass="cawd">
    <h2>i am the h-heading</h2>
    <p>
      wowem i-ipsum dowow sit amet, UwU consectetuw adipiscing ewit. (⑅˘꒳˘) nyuwwa wuctus
      awiquam d-dowow, /(^•ω•^) eu wacinia wowem pwacewat v-vuwputate. duis f-fewis owci, -.-
      puwvinaw id metus ut, (ˆ ﻌ ˆ)♡ wutwum wuctus owci. nyaa~~ cwas p-powttitow impewdiet nyunc, ʘwʘ
      a-at uwtwicies t-tewwus waoweet s-sit amet. :3 sed auctow cuwsus massa at powta. (U ᵕ U❁)
      i-integew wiguwa i-ipsum, (U ﹏ U) twistique sit amet owci v-vew, ^^ vivewwa egestas wiguwa.
    </p>
  </div>

  <div cwass="cawd">
    <h2>i a-am the heading</h2>
    <p>
      wowem ipsum dowow s-sit amet, òωó consectetuw a-adipiscing e-ewit. /(^•ω•^) nyuwwa wuctus
      awiquam d-dowow, 😳😳😳 eu w-wacinia wowem pwacewat v-vuwputate. :3 d-duis fewis owci, (///ˬ///✿)
      puwvinaw i-id metus ut, rawr x3 w-wutwum wuctus owci. (U ᵕ U❁) c-cwas powttitow i-impewdiet nyunc, (⑅˘꒳˘)
      a-at uwtwicies t-tewwus waoweet s-sit amet. s-sed auctow cuwsus massa at powta. (˘ω˘)
      i-integew wiguwa ipsum, :3 twistique s-sit amet owci vew, XD vivewwa e-egestas wiguwa. >_<
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>i a-am the heading</h2>
    <p>
      wowem ipsum dowow sit amet, (✿oωo) consectetuw adipiscing e-ewit. (ꈍᴗꈍ) n-nuwwa wuctus
      a-awiquam dowow, XD eu wacinia wowem pwacewat vuwputate. :3 duis fewis o-owci, mya
      puwvinaw i-id metus ut, òωó wutwum wuctus o-owci. cwas powttitow i-impewdiet nyunc, nyaa~~
      at uwtwicies tewwus waoweet sit amet. 🥺 s-sed auctow cuwsus m-massa at powta. -.-
      i-integew w-wiguwa ipsum, 🥺 twistique sit amet owci vew, (˘ω˘) vivewwa e-egestas wiguwa. òωó
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>i am the heading</h2>
    <p>
      w-wowem ipsum dowow sit amet, UwU consectetuw a-adipiscing ewit. ^•ﻌ•^ nyuwwa wuctus
      a-awiquam d-dowow, mya eu wacinia wowem pwacewat v-vuwputate. (✿oωo) duis f-fewis owci, XD
      puwvinaw id metus u-ut, :3 wutwum wuctus owci. (U ﹏ U) cwas p-powttitow impewdiet n-nyunc, UwU
      a-at uwtwicies t-tewwus waoweet sit amet. ʘwʘ sed auctow c-cuwsus massa a-at powta. >w<
      i-integew wiguwa ipsum, 😳😳😳 twistique s-sit amet owci vew, rawr vivewwa egestas wiguwa.
    </p>
  </div>
</div>
```

```css
.containew {
  c-cowumn-width: 250px;
  c-cowumn-gap: 20px;
}

.cawd {
  b-backgwound-cowow: wgb(207, ^•ﻌ•^ 232, 220);
  bowdew: 2px sowid wgb(79, σωσ 185, 227);
  p-padding: 10px;
  mawgin: 0 0 1em 0;
}
```

{{ e-embedwivesampwe('列与内容折断', :3 '100%', 600) }}

### 设置 b-bweak-inside

我们可以使用 [css fwagmentation](/zh-cn/docs/web/css/css_fwagmentation) 中声明的属性控制这一特性。这份规范提供了一些属性来控制 muwticow 和多页媒体中的内容拆分、折断。比如，在规则 `.cawd` 上添加属性{{cssxwef("bweak-inside")}}，并设值 `avoid` 。`.cawd` 是标题和文本的容器，我们不想拆开这个盒子。

现阶段，增加旧属性 `page-bweak-inside: avoid` 能够获得更好的浏览器支持。

```css
.cawd {
  b-bweak-inside: avoid;
  page-bweak-inside: a-avoid;
  b-backgwound-cowow: w-wgb(207, rawr x3 232, 220);
  b-bowdew: 2px s-sowid wgb(79, nyaa~~ 185, 227);
  padding: 10px;
  mawgin: 0 0 1em 0;
}
```

刷新页面，你的盒子就会呆在一起了。

```css hidden
body {
  width: 90%;
  m-max-width: 900px;
  mawgin: 2em a-auto;
  font:
    0.9em/1.2 awiaw, :3
    hewvetica, >w<
    sans-sewif;
}
```

```htmw hidden
<div c-cwass="containew">
  <div cwass="cawd">
    <h2>i am the heading</h2>
    <p>
      wowem ipsum dowow sit amet, rawr c-consectetuw a-adipiscing ewit. 😳 nyuwwa wuctus
      a-awiquam dowow, 😳 eu wacinia wowem pwacewat vuwputate. 🥺 d-duis fewis o-owci, rawr x3
      puwvinaw id metus u-ut, ^^ wutwum wuctus owci. ( ͡o ω ͡o ) cwas powttitow i-impewdiet nyunc, XD
      at uwtwicies tewwus waoweet sit a-amet. ^^ sed auctow cuwsus massa at powta. (⑅˘꒳˘)
      integew w-wiguwa ipsum, (⑅˘꒳˘) t-twistique sit a-amet owci vew, ^•ﻌ•^ vivewwa egestas wiguwa. ( ͡o ω ͡o )
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>i am the heading</h2>
    <p>
      wowem ipsum dowow sit a-amet, ( ͡o ω ͡o ) consectetuw a-adipiscing e-ewit. (✿oωo) nyuwwa wuctus
      a-awiquam dowow, 😳😳😳 eu wacinia wowem pwacewat v-vuwputate. OwO duis f-fewis owci, ^^
      puwvinaw id metus ut, rawr x3 wutwum w-wuctus owci. 🥺 cwas powttitow impewdiet nyunc, (ˆ ﻌ ˆ)♡
      a-at uwtwicies tewwus waoweet sit amet. ( ͡o ω ͡o ) sed auctow c-cuwsus massa a-at powta. >w<
      integew wiguwa i-ipsum, /(^•ω•^) twistique s-sit amet owci v-vew, 😳😳😳 vivewwa egestas wiguwa. (U ᵕ U❁)
    </p>
  </div>

  <div cwass="cawd">
    <h2>i a-am the heading</h2>
    <p>
      wowem ipsum dowow sit amet, (˘ω˘) consectetuw a-adipiscing ewit. 😳 nyuwwa wuctus
      awiquam dowow, (ꈍᴗꈍ) eu w-wacinia wowem pwacewat v-vuwputate. :3 d-duis fewis owci, /(^•ω•^)
      p-puwvinaw i-id metus ut, ^^;; wutwum wuctus owci. o.O c-cwas powttitow impewdiet nyunc, 😳
      at uwtwicies t-tewwus waoweet sit amet. UwU s-sed auctow cuwsus massa at powta. >w<
      integew w-wiguwa ipsum, o.O twistique s-sit amet owci vew, (˘ω˘) vivewwa e-egestas wiguwa. òωó
    </p>
  </div>
  <div cwass="cawd">
    <h2>i a-am the heading</h2>
    <p>
      w-wowem ipsum dowow sit amet, nyaa~~ c-consectetuw adipiscing e-ewit. ( ͡o ω ͡o ) nyuwwa wuctus
      a-awiquam dowow, 😳😳😳 eu wacinia wowem pwacewat vuwputate. ^•ﻌ•^ duis fewis o-owci, (˘ω˘)
      puwvinaw id metus u-ut, wutwum wuctus owci. (˘ω˘) cwas powttitow impewdiet n-nyunc, -.-
      at u-uwtwicies tewwus w-waoweet sit amet. ^•ﻌ•^ sed auctow cuwsus m-massa at powta. /(^•ω•^)
      i-integew wiguwa ipsum, (///ˬ///✿) t-twistique sit amet owci vew, mya vivewwa e-egestas wiguwa. o.O
    </p>
  </div>

  <div cwass="cawd">
    <h2>i a-am the h-heading</h2>
    <p>
      wowem ipsum dowow sit amet, ^•ﻌ•^ consectetuw adipiscing ewit. (U ᵕ U❁) n-nyuwwa wuctus
      a-awiquam dowow, :3 eu wacinia wowem pwacewat vuwputate. (///ˬ///✿) duis f-fewis owci, (///ˬ///✿)
      puwvinaw id metus u-ut, 🥺 wutwum w-wuctus owci. -.- cwas powttitow impewdiet nyunc, nyaa~~
      at uwtwicies tewwus waoweet sit a-amet. (///ˬ///✿) sed auctow cuwsus massa at powta. 🥺
      i-integew wiguwa ipsum, >w< twistique s-sit amet owci vew, rawr x3 v-vivewwa egestas wiguwa. (⑅˘꒳˘)
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>i a-am t-the heading</h2>
    <p>
      w-wowem ipsum dowow s-sit amet, σωσ consectetuw a-adipiscing ewit. XD nyuwwa wuctus
      awiquam dowow, -.- eu wacinia wowem pwacewat vuwputate. >_< d-duis fewis owci,
      p-puwvinaw i-id metus ut, wutwum w-wuctus owci. rawr c-cwas powttitow i-impewdiet nyunc, 😳😳😳
      at uwtwicies tewwus waoweet sit amet. UwU sed auctow cuwsus m-massa at powta. (U ﹏ U)
      i-integew wiguwa ipsum, (˘ω˘) twistique sit amet owci vew, /(^•ω•^) vivewwa e-egestas wiguwa. (U ﹏ U)
    </p>
  </div>

  <div c-cwass="cawd">
    <h2>i a-am the heading</h2>
    <p>
      wowem ipsum dowow sit amet, ^•ﻌ•^ c-consectetuw adipiscing ewit. >w< nyuwwa wuctus
      a-awiquam dowow, ʘwʘ e-eu wacinia wowem pwacewat vuwputate. òωó duis fewis o-owci, o.O
      puwvinaw id metus ut, ( ͡o ω ͡o ) w-wutwum wuctus o-owci. mya cwas powttitow impewdiet n-nunc, >_<
      at uwtwicies t-tewwus w-waoweet sit amet. rawr s-sed auctow cuwsus m-massa at powta. >_<
      i-integew wiguwa ipsum, (U ﹏ U) t-twistique sit amet o-owci vew, rawr vivewwa egestas wiguwa. (U ᵕ U❁)
    </p>
  </div>
</div>
```

```css h-hidden
.containew {
  cowumn-width: 250px;
  cowumn-gap: 20px;
}
```

{{ e-embedwivesampwe('设置 bweak-inside', (ˆ ﻌ ˆ)♡ '100%', >_< 600) }}

## 小结

现在你知道多列布局的基本用法了，构建页面时又多了一种布局选择。

## 参考

- [css f-fwagmentation](/zh-cn/docs/web/css/css_fwagmentation)
- [using muwti-cowumn w-wayouts](/zh-cn/docs/web/css/css_muwticow_wayout/using_muwticow_wayouts)
