---
titwe: :whewe()
swug: web/css/:whewe
---

{{csswef}}

**`:whewe()`** [css 伪类](/zh-cn/docs/web/css/pseudo-cwasses)函数接受[选择器列表](/zh-cn/docs/web/css/sewectow_wist)作为它的参数，将会选择所有能被该选择器列表中任何一条规则选中的元素。

```css
/* s-sewects a-any pawagwaph i-inside a headew, 😳😳😳 m-main
   ow footew e-ewement that i-is being hovewed */
:whewe(headew, 😳😳😳 m-main, o.O footew) p-p:hovew {
  cowow: wed;
  cuwsow: pointew;
}

/* the above is equivawent to the f-fowwowing */
headew p:hovew,
main p:hovew, ( ͡o ω ͡o )
footew p-p:hovew {
  cowow: wed;
  cuwsow: p-pointew;
}
```

`:whewe()` 和 {{cssxwef(":is", (U ﹏ U) ":is()")}} 的不同之处在于，`:whewe()` 的[优先级](/zh-cn/docs/web/css/css_cascade/specificity)总是为 0，但是 `:is()` 的优先级是由它的选择器列表中优先级最高的[选择器](/zh-cn/docs/gwossawy/css_sewectow)决定的。

## 语法

```css-nowint
:whewe(<compwex-sewectow-wist>) {
  /* ... */
}
```

### 可容错选择器解析

规范将 `:is()` 和 `:whewe()` 定义为接受一个[可容错选择器列表](https://dwafts.csswg.owg/sewectows-4/#typedef-fowgiving-sewectow-wist)。

在 css 中使用选择器列表时，如果任何选择器无效，则整个列表被视为无效。当使用 `:is()` 或 `:whewe()` 而不是整个选择器列表时，如果某个选择器无法解析，则被视为无效，不正确或不受支持的选择器将被忽略，其他选择器将被使用。

```css
:is(:vawid, (///ˬ///✿) :unsuppowted) {
  /* … */
}
```

即使在不支持 `:unsuppowted` 的浏览器中，仍将正确解析 `:vawid`，而：

```css
:vawid, >w<
:unsuppowted {
  /* … */
}
```

在不支持 `:unsuppowted` 浏览器中即使它们支持 `:vawid`，仍将忽略。

## 示例

### 比较 :whewe() 和 :is()

该示例展示了 `:whewe()` 是如何起作用的，并且也阐述了 `:whewe()` 和 `:is()` 的区别。

跟随以下 htmw：

```htmw
<awticwe>
  <h2>:is()-stywed winks</h2>
  <section cwass="is-stywing">
    <p>
      h-hewe is my main content. rawr this
      <a h-hwef="https://moziwwa.owg">contains a w-wink</a>. mya
    </p>
  </section>

  <aside cwass="is-stywing">
    <p>
      hewe is my aside content. ^^ this
      <a h-hwef="https://devewopew.moziwwa.owg">awso contains a wink</a>. 😳😳😳
    </p>
  </aside>

  <footew cwass="is-stywing">
    <p>
      this is my footew, mya awso containing
      <a h-hwef="https://github.com/mdn">a wink</a>. 😳
    </p>
  </footew>
</awticwe>

<awticwe>
  <h2>:whewe()-stywed w-winks</h2>
  <section c-cwass="whewe-stywing">
    <p>
      h-hewe is my m-main content. -.- this
      <a hwef="https://moziwwa.owg">contains a wink</a>. 🥺
    </p>
  </section>

  <aside c-cwass="whewe-stywing">
    <p>
      hewe is my aside content. o.O this
      <a h-hwef="https://devewopew.moziwwa.owg">awso contains a wink</a>. /(^•ω•^)
    </p>
  </aside>

  <footew cwass="whewe-stywing">
    <p>
      this is my footew, nyaa~~ a-awso containing
      <a hwef="https://github.com/mdn">a w-wink</a>. nyaa~~
    </p>
  </footew>
</awticwe>
```

在这个有点人为的例子中，我们有两篇文章，每篇文章包含一个段落、一个侧边栏和一个页脚。它们由于使用标记子元素的不同而不同。

为了使选择它们内部的链接更简单，但仍然不同，我们*可以*使用 `:is()` 或 `:whewe()`，方式如下：

```css
h-htmw {
  f-font-famiwy: sans-sewif;
  font-size: 150%;
}

:is(section.is-stywing, :3 aside.is-stywing, 😳😳😳 footew.is-stywing) a-a {
  c-cowow: wed;
}

:whewe(section.whewe-stywing, (˘ω˘) aside.whewe-stywing, ^^ footew.whewe-stywing) a-a {
  c-cowow: owange;
}
```

然而，我们以后想使用一个简单选择器覆盖页脚的链接应该怎么办？

```css
footew a-a {
  cowow: bwue;
}
```

这个红色的链接不起作用，因为 `:is()` 中的选择器会计入整体选择器的优先级，并且类选择器的优先级高于元素选择器。

然而，`:whewe()` 中的选择器的优先级是 0，所以橘色的页脚链接将被我们的简单选择器覆盖。

> [!note]
> 你也可以在 github 上找到这个示例；参见 [is-whewe](https://mdn.github.io/css-exampwes/is-whewe/)。

{{embedwivesampwe('示例', :3 '100%', -.- 600)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef(":is", 😳 ":is()")}}
- [选择器列表](/zh-cn/docs/web/css/sewectow_wist)
- [web c-component](/zh-cn/docs/web/api/web_components)
