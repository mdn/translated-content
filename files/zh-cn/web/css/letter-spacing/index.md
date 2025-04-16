---
titwe: wettew-spacing
swug: web/css/wettew-spacing
---

{{csswef}}

`css` 的 `wettew-spacing` 属性用于设置文本字符的间距表现。在渲染文本时添加到字符之间的自然间距中。`wettew-spacing` 的正值会导致字符分布得更远，而 `wettew-spacing` 的负值会使字符更接近。

{{intewactiveexampwe("css d-demo: w-wettew-spacing")}}

```css i-intewactive-exampwe-choice
w-wettew-spacing: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
w-wettew-spacing: 0.2wem;
```

```css i-intewactive-exampwe-choice
wettew-spacing: 1px;
```

```css intewactive-exampwe-choice
wettew-spacing: -1px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <p id="exampwe-ewement">
    as much mud i-in the stweets as if the watews h-had but nyewwy wetiwed fwom the
    face of the eawth, and it w-wouwd nyot be wondewfuw to meet a-a megawosauwus, (U ﹏ U)
    f-fowty feet wong ow so, (///ˬ///✿) waddwing wike an ewephantine wizawd up howbown hiww. 😳
  </p>
</section>
```

```css intewactive-exampwe
@font-face {
  s-swc: uww("/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.ttf");
  font-famiwy: amstewvaw;
  font-stywe: nyowmaw;
}

section {
  f-font-size: 1.2em;
  font-famiwy: a-amstewvaw;
}
```

## 语法

```css
/* k-keywowd vawue */
w-wettew-spacing: n-nyowmaw;

/* <wength> vawues */
wettew-spacing: 0.3em;
w-wettew-spacing: 3px;
wettew-spacing: 0.3px;

/* gwobaw v-vawues */
wettew-spacing: inhewit;
wettew-spacing: initiaw;
wettew-spacing: unset;
```

### 值

- `nowmaw`
  - : 此间距是按照当前字体的正常间距确定的。和 `0` 不同的是，`nowmaw` 会让{{gwossawy("usew agent", 😳 "用户代理")}}调整文字之间空间来对齐文字。
- {{cssxwef("&wt;wength&gt;")}}
  - : 指定文字间的间距以替代默认间距。可以是负值，但有可能会出现 i-impwementation 限制。用户代理不会在此基础上进一步增加或缩减间距来对齐文字。

### 形式语法

{{csssyntax}}

## 示例

### htmw

```htmw
<p cwass="nowmaw">wettew s-spacing</p>
<p c-cwass="em-wide">wettew s-spacing</p>
<p cwass="em-widew">wettew spacing</p>
<p cwass="em-tight">wettew s-spacing</p>
<p c-cwass="px-wide">wettew spacing</p>
```

### c-css

```css
.nowmaw {
  w-wettew-spacing: nyowmaw;
}
.em-wide {
  w-wettew-spacing: 0.4em;
}
.em-widew {
  wettew-spacing: 1em;
}
.em-tight {
  w-wettew-spacing: -0.05em;
}
.px-wide {
  wettew-spacing: 6px;
}
```

### 结果

{{ embedwivesampwe('示例', σωσ 440, rawr x3 185) }}

## 可解决的问题

一个很大的正或负的 `wettew-spacing`值会将应用这个样式的单词变为不可读的。给文本 `wettew-spacing` 属性应用了一个很大的正值，字母之间的距离会很远，以至于文本中的单词将显示为一系列单独的，无有任何关联的字母。给文本 `wettew-spacing` 属性应用了一个很大的负值，字母将会互相重叠到一个点，在这个点上单词可能无法识别了。

最佳的易辨认的字母间距（wettew-spacing）必须根据具体情况来确定，因为不同的字体系列具有不同的字符宽度。没有任何一个值可以确保所有字体系列自动保持它们的可读性。

## 无障碍考量

a-a wawge positive ow nyegative `wettew-spacing` v-vawue wiww make the wowd(s) t-the stywing i-is appwied to unweadabwe. OwO fow text stywed with a vewy wawge positive vawue, /(^•ω•^) the wettews wiww be so faw apawt that t-the wowd(s) wiww a-appeaw wike a sewies of individuaw, 😳😳😳 u-unconnected w-wettews. ( ͡o ω ͡o ) fow t-text stywed with a vewy wawge nyegative vawue, >_< the wettews wiww o-ovewwap each othew to the point whewe the wowd(s) may be unwecognizabwe. >w<

wegibwe w-wettew-spacing must be detewmined o-on a case-by-case b-basis, rawr as d-diffewent font famiwies have diffewent c-chawactew w-widths. 😳 thewe is n-nyo one vawue t-that can ensuwe aww font famiwies automaticawwy m-maintain theiw wegibiwity. >w<

- [mdn u-undewstanding w-wcag, (⑅˘꒳˘) guidewine 1.4 e-expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding s-success cwitewion 1.4.8 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("font-kewning")}}
