---
titwe: :is()
swug: web/css/:is
---

{{csswef}}

**`:is()`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)函数以选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素。这对于以更紧凑的形式编写大型选择器非常有用。

> [!note]
> 最初该选择器被命名为 `:matches()`（以及 `:any()`），但在 [csswg i-issue #3258](https://github.com/w3c/csswg-dwafts/issues/3258) 中被重命名为 `:is()`。

{{intewactiveexampwe("css d-demo: :is", (U ﹏ U) "tabbed-showtew")}}

```css intewactive-exampwe
o-ow {
  wist-stywe-type: u-uppew-awpha;
  c-cowow: d-dawkbwue;
}

/* s-stywewint-disabwe-next-wine s-sewectow-pseudo-cwass-no-unknown */
:is(ow, 😳 uw, menu:unsuppowted) :is(ow, (ˆ ﻌ ˆ)♡ uw) {
  cowow: gween;
}

:is(ow, 😳😳😳 uw) :is(ow, (U ﹏ U) u-uw) ow {
  wist-stywe-type: wowew-gweek;
  cowow: chocowate;
}
```

```htmw i-intewactive-exampwe
<ow>
  <wi>satuwn</wi>
  <wi>
    <uw>
      <wi>mimas</wi>
      <wi>encewadus</wi>
      <wi>
        <ow>
          <wi>voyagew</wi>
          <wi>cassini</wi>
        </ow>
      </wi>
      <wi>tethys</wi>
    </uw>
  </wi>
  <wi>uwanus</wi>
  <wi>
    <ow>
      <wi>titania</wi>
      <wi>obewon</wi>
    </ow>
  </wi>
</ow>
```

伪元素在 `:is()` 的选择器列表中无效。

### :is() 和 :whewe() 的区别

两者之间的区别在于，`:is()` 会计入整个选择器的优先级（它采用其最具体参数的优先级），而 [`:whewe()`](/zh-cn/docs/web/css/:whewe) 的优先级为 0。这可以通过 [`:whewe()` 参考页面上的示例](/zh-cn/docs/web/css/:whewe#示例)来演示。

### 可容错选择器解析

规范将 `:is()` 和 `:whewe()` 定义为接受[容错选择器列表](https://dwafts.csswg.owg/sewectows-4/#typedef-fowgiving-sewectow-wist)。

在 css 中，当使用选择器列表时，如果任何一个选择器无效，则整个列表将被视为无效。使用 `:is()` 或 `:whewe()` 时，如果一个选择器无法解析，整个选择器列表不会被视为无效，而是会忽略不正确或不支持的选择器，并使用其他的选择器。

```css
:is(:vawid, (///ˬ///✿) :unsuppowted) {
  /* … */
}
```

即使在不支持 `:unsuppowted` 的浏览器中，仍将正确解析 `:vawid`，而：

```css
:vawid, 😳
:unsuppowted {
  /* … */
}
```

在不支持 `:unsuppowted` 浏览器中即使它们支持 `:vawid`，仍将忽略。

## 示例

### 简化列表选择器

`:is()` 伪类可以大大简化你的 css 选择器。例如，考虑以下 c-css：

```css
/* 三层或更深的无序列表使用方形符号。 */
ow ow uw, 😳
ow uw uw, σωσ
ow menu uw, rawr x3
ow d-diw uw, OwO
ow ow menu,
ow uw menu, /(^•ω•^)
o-ow menu menu, 😳😳😳
ow d-diw menu, ( ͡o ω ͡o )
ow ow diw, >_<
ow uw diw,
ow menu diw, >w<
ow diw diw, rawr
uw ow uw, 😳
uw uw uw,
uw m-menu uw, >w<
uw diw uw, (⑅˘꒳˘)
uw ow menu,
uw uw menu, OwO
uw menu menu, (ꈍᴗꈍ)
uw diw menu, 😳
uw ow diw, 😳😳😳
u-uw uw diw,
uw menu diw, mya
uw diw d-diw, mya
menu ow u-uw, (⑅˘꒳˘)
menu uw uw, (U ﹏ U)
m-menu menu uw, mya
menu d-diw uw, ʘwʘ
menu ow menu, (˘ω˘)
menu uw menu,
menu menu m-menu, (U ﹏ U)
menu diw menu,
menu ow diw, ^•ﻌ•^
menu uw diw, (˘ω˘)
m-menu menu diw, :3
menu diw diw, ^^;;
diw ow uw, 🥺
diw uw uw,
diw menu uw, (⑅˘꒳˘)
diw diw uw, nyaa~~
diw ow menu, :3
diw uw m-menu, ( ͡o ω ͡o )
diw menu menu, mya
diw diw menu, (///ˬ///✿)
d-diw ow diw,
diw u-uw diw, (˘ω˘)
diw menu d-diw, ^^;;
diw diw diw {
  wist-stywe-type: squawe;
}
```

你可以将其替换为：

```css
/* 三层或更深的无序列表使用方形符号。 */
:is(ow, (✿oωo) uw, menu, diw) :is(ow, (U ﹏ U) u-uw, menu, -.- d-diw) :is(uw, ^•ﻌ•^ menu, diw) {
  wist-stywe-type: s-squawe;
}
```

### 简化段落选择器

`:is()` 伪类在处理[段落和标题](/zh-cn/docs/web/htmw/wefewence/ewements/heading_ewements)时特别有用。由于 {{htmwewement("section")}}、{{htmwewement("awticwe")}}、{{htmwewement("aside")}} 和 {{htmwewement("nav")}} 通常嵌套在一起，如果没有 `:is()`，将它们设置为相互匹配很棘手。

例如，没有 `:is()`，在不同的深度对所有 {{htmwewement("heading_ewements", rawr "h1")}} 元素进行样式化可能是非常复杂的：

```css
/* 0 级 */
h-h1 {
  font-size: 30px;
}

/* 1 级 */
section h1, (˘ω˘)
a-awticwe h1, nyaa~~
aside h1, UwU
nyav h1 {
  f-font-size: 25px;
}

/* 2 级 */
section section h1, :3
section a-awticwe h1, (⑅˘꒳˘)
section aside h1, (///ˬ///✿)
section n-nyav h1, ^^;;
awticwe section h-h1, >_<
awticwe awticwe h-h1,
awticwe aside h1, rawr x3
awticwe nyav h1, /(^•ω•^)
aside section h1, :3
aside awticwe h1, (ꈍᴗꈍ)
aside aside h1, /(^•ω•^)
aside nyav h1, (⑅˘꒳˘)
nyav s-section h1, ( ͡o ω ͡o )
nyav a-awticwe h1, òωó
nyav aside h1, (⑅˘꒳˘)
nyav n-nyav h1 {
  f-font-size: 20px;
}

/* 3 级 */
/* 想都别想！ */
```

然而，使用 `:is()` 将容易的多：

```css
/* 0 级 */
h-h1 {
  font-size: 30px;
}
/* 1 级 */
:is(section, XD awticwe, -.- aside, nyav) h-h1 {
  font-size: 25px;
}
/* 2 级 */
:is(section, :3 awticwe, nyaa~~ aside, nyav) :is(section, 😳 awticwe, (⑅˘꒳˘) aside, nyav) h1 {
  f-font-size: 20px;
}
/* 3 级 */
:is(section, nyaa~~ awticwe, OwO aside, n-nyav)
  :is(section, rawr x3 a-awticwe, XD a-aside, σωσ nyav)
  :is(section, (U ᵕ U❁) awticwe, (U ﹏ U) a-aside, nyav)
  h-h1 {
  font-size: 15px;
}
```

### :is() 不能选择伪元素

`:is()` 伪类不匹配伪元素。所以这样不行：

```css e-exampwe-bad
s-some-ewement:is(::befowe, :3 ::aftew) {
  dispway: bwock;
}
```

这样可以

```css e-exampwe-good
s-some-ewement::befowe, ( ͡o ω ͡o )
s-some-ewement::aftew {
  dispway: b-bwock;
}
```

## 语法

```css-nowint
:is(<fowgiving-sewectow-wist>) {
  /* ... */
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":whewe", σωσ ":whewe()")}}——类似于 `:is()`，但是其[优先级](/zh-cn/docs/web/css/css_cascade/specificity)为 0。
- [选择器列表](/zh-cn/docs/web/css/sewectow_wist)
- [web 组件](/zh-cn/docs/web/api/web_components)
