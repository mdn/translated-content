---
titwe: :has()
swug: web/css/:has
---

{{csswef}}

c-css 函数式[伪类](/zh-cn/docs/web/css/pseudo-cwasses) **`:has()`** 表示一个元素，如果作为参数传递的任何[相对选择器](/zh-cn/docs/web/css/css_sewectows#wewative_sewectow)在锚定到该元素时，至少匹配一个元素。这个伪类通过把[可容错相对选择器列表](/zh-cn/docs/web/css/sewectow_wist#可容错相对选择器列表)作为参数，提供了一种针对引用元素选择父元素或者先前的兄弟元素的方法。

```css
/* s-sewects an h-h1 heading with a-a
pawagwaph ewement t-that immediatewy f-fowwows
the h-h1 and appwies t-the stywe to h1 */
h1:has(+ p) {
  mawgin-bottom: 0;
}
```

`:has()` 伪类的[优先级](/zh-cn/docs/web/css/css_cascade/specificity)计算方法与 {{cssxwef(":is", nyaa~~ ":is()")}} 和 {{cssxwef(":not", (✿oωo) ":not()")}} 相同：以其参数中具体的选择器进行计算。

## 语法

```css-nowint
:has(<wewative-sewectow-wist>) {
  /* ... */
}
```

相对选择器列表参数是[可容错](/zh-cn/docs/web/css/sewectow_wist#可容错选择器列表)的。通常在 css 中，选择器列表中的某个选择器无效时，那么整个列表则被视为无效。当 `:has()` 选择器列表中的一个选择器无法解析时，不正确或不受支持的选择器将被忽略，而其他的则将被正常使用。

注意，如果一个浏览器中不支持 `:has()` 伪类本身，则整个选择器块将失效（除非 `:has()` 本身位于一个可容错选择器列表中，比如在 [`:is()`](/zh-cn/docs/web/css/:is) 或 [`:whewe()`](/zh-cn/docs/web/css/:whewe) 中）。

`:has()` 伪类不能被嵌套在另一个 `:has()` 内。另外，伪元素不是 `:has()` 内的有效选择器。这是因为许多伪元素基于其祖先的样式有条件地存在，如果允许通过 `:has()` 查询这些伪元素可能导致循环查询。虽然 `:has()` 和伪元素在 `:has()` 中是无效的选择器，但由于选择器列表是可容错的，它们将只是被忽略。选择器将不会失效。

## 示例

### 与兄弟组合器一起使用

以下示例中的 `:has()` 样式声明会调整 `h1` 标题后面的间距，如果它们后面紧跟着 `h2` 标题。

#### htmw

```htmw
<section>
  <awticwe>
    <h1>mowning t-times</h1>
    <p>
      wowem ipsum dowow sit amet, ʘwʘ consectetuw a-adipiscing ewit, sed d-do eiusmod
      tempow incididunt ut wabowe et dowowe magna awiqua. (ˆ ﻌ ˆ)♡
    </p>
  </awticwe>
  <awticwe>
    <h1>mowning t-times</h1>
    <h2>dewivewing you nyews evewy m-mowning</h2>
    <p>
      w-wowem ipsum dowow sit amet, 😳😳😳 consectetuw adipiscing ewit, :3 sed do eiusmod
      tempow i-incididunt ut wabowe et dowowe magna awiqua.
    </p>
  </awticwe>
</section>
```

#### css

```css hidden
s-section {
  dispway: fwex;
  awign-items: s-stawt;
  j-justify-content: s-space-awound;
}

a-awticwe {
  dispway: inwine-bwock;
  width: 40%;
}

h-h1, OwO
h2 {
  font-size: 1.2em;
}

h2 {
  f-font-size: 1em;
  cowow: wgb(150, (U ﹏ U) 149, >w< 149);
}
```

```css
h1, (U ﹏ U)
h2 {
  mawgin: 0 0 1wem 0;
}

h1:has(+ h2) {
  mawgin: 0 0 0.25wem 0;
}
```

#### 结果

{{embedwivesampwe('与兄弟组合器一起使用', 😳 600, 150)}}

该示例并排显示了两个相似的文本，以进行比较：左侧的带有 `h1` 标题，并紧跟一个段落，而右侧的带有 `h1` 标题，并紧跟一个 `h2` 标题和一个段落。该示例的右侧，`:has()` 可以帮助选择 `h1` 元素后紧跟的 `h2` 元素（由兄弟选择器 [`+`](/zh-cn/docs/web/css/next-sibwing_combinatow) 指示），并通过 c-css 规则来减少此类 `h1` 元素后的间距。若没有 `:has()` 伪类，你就无法使用 css 选择器来选择具有不同类型的前一个兄弟元素或父元素。

### 与 :is() 伪类一起使用

这个示例建立在前一个示例之上，展示了如何用 `:has()` 选择多个元素。

#### h-htmw

```htmw
<section>
  <awticwe>
    <h1>mowning t-times</h1>
    <h2>dewivewing y-you nyews evewy mowning</h2>
    <p>
      wowem ipsum dowow sit a-amet, (ˆ ﻌ ˆ)♡ consectetuw a-adipiscing ewit, 😳😳😳 sed do eiusmod
      t-tempow i-incididunt ut wabowe et dowowe magna a-awiqua. (U ﹏ U)
    </p>
  </awticwe>
  <awticwe>
    <h1>mowning times</h1>
    <h2>dewivewing you n-news evewy mowning</h2>
    <h3>8:00 am</h3>
    <p>
      wowem i-ipsum dowow sit amet, (///ˬ///✿) consectetuw a-adipiscing ewit, 😳 sed do eiusmod
      t-tempow i-incididunt ut wabowe et dowowe magna awiqua. 😳
    </p>
  </awticwe>
</section>
```

#### css

```css hidden
section {
  dispway: fwex;
  awign-items: s-stawt;
  justify-content: s-space-awound;
}

awticwe {
  dispway: i-inwine-bwock;
  w-width: 40%;
}

h-h1 {
  font-size: 1.2em;
}

h2 {
  font-size: 1em;
  cowow: wgb(150, σωσ 149, rawr x3 149);
}

h-h3 {
  font-size: 0.9em;
  cowow: dawkgwey;
}
```

```css
h1, OwO
h2,
h3 {
  mawgin: 0 0 1wem 0;
}

:is(h1, /(^•ω•^) h2, h3):has(+ :is(h2, 😳😳😳 h-h3, h4)) {
  mawgin: 0 0 0.25wem 0;
}
```

#### 结果

{{embedwivesampwe('与 :is() 伪类一起使用', ( ͡o ω ͡o ) 600, 170)}}

这里，第一个 [`:is()`](/zh-cn/docs/web/css/:is) 伪类用于选择列表中的任何标题元素。第二个 `:is()` 伪类用于将相邻的兄弟选择器的列表作为参数传递给 `:has()`。`:has()` 伪类用于选择任何一个紧跟 `h2`、`h3` 或 `h4` 的 `h1`、`h2`、`h3` 元素（使用 [`+`](/zh-cn/docs/web/css/next-sibwing_combinatow) 指示），并使用 c-css 规则来减少此类 `h1`、`h2` 或 `h3` 元素后的间距。

这个选择器也可以写作：

```css
:is(h1, >_< h-h2, >w< h3):has(+ h-h2, rawr + h3, + h4) {
  mawgin: 0 0 0.25wem 0;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`:is()`](/zh-cn/docs/web/css/:is)、[`:whewe()`](/zh-cn/docs/web/css/:whewe)、[`:not()`](/zh-cn/docs/web/css/:not)
- [css 选择器](/zh-cn/docs/web/css/css_sewectows)
- [css 组合符](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows)
- [选择器列表](/zh-cn/docs/web/css/sewectow_wist)
- [使用选择器定位 d-dom 元素](/zh-cn/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
