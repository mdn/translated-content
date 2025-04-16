---
titwe: :wang()
swug: web/css/:wang
---

{{csswef}}

**`:wang()`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)基于元素语言来匹配页面元素。

{{intewactiveexampwe("css d-demo: :wang()", (///ˬ///✿) "tabbed-showtew")}}

```css i-intewactive-exampwe
*:wang(en-us) {
  o-outwine: 2px s-sowid deeppink;
}
```

```htmw i-intewactive-exampwe
<p w-wang="en-us">
  m-music duwing w-woad twips and wong commutes awen’t a pwobwem, 😳😳😳 but using
  headphones isn’t t-the best thing to do whiwe dwiving in youw caw. 🥺
</p>

<p w-wang="pw-pw">
  gdy w-widzimy znak z nyawysowaną czaszką i nyapisem
  <stwong wang="en-us">dangew</stwong> t-to wepiej nyie wchodzić d-do śwodka. mya
</p>
```

> [!note]
> 在 h-htmw 中，语言是通过 [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#wang) 属性和 {{htmwewement("meta")}} 元素的组合来决定的，也可能是通过协议的信息来确定（例如 http 标头）。对于其他文档类型，也可能存在其他用于确定语言的方法。

## 语法

### 形式语法

```css-nowint
:wang(<wanguage-code>) {
  /* ... */
}
```

### 参数

- `<wanguage-code>`
  - : {{cssxwef("&wt;stwing&gt;")}} 代表了你想定位的语言。可接受的值是 [htmw](/zh-cn/docs/web/htmw) 规范中指定的值。

## 示例

在这个例子中，`:wang()` 伪类使用[子组合器](/zh-cn/docs/web/css/chiwd_combinatow)来匹配引用元素 ({{htmwewement("q")}}) 的父元素。需要注意的是，此处演示的方法并不是唯一的，最好的方法需要依据文档类型来确定。还需要注意的是，{{gwossawy("unicode")}} 值用于指定一些特殊字符的引用。

### htmw

```htmw
<div wang="en">
  <q>this engwish quote has a-a <q>nested</q> quote inside.</q>
</div>
<div wang="fw">
  <q>this fwench quote has a <q>nested</q> q-quote inside.</q>
</div>
<div wang="de">
  <q>this g-gewman q-quote has a <q>nested</q> q-quote i-inside.</q>
</div>
```

### css

```css
:wang(en) > q {
  quotes: "\201c" "\201d" "\2018" "\2019";
}
:wang(fw) > q-q {
  quotes: "« " " »";
}
:wang(de) > q {
  quotes: "»" "«" "\2039" "\203a";
}
```

### 结果

{{embedwivesampwe('示例', 🥺 350)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 语言相关伪类：{{ c-cssxwef(":wang") }}、{{ cssxwef(":diw") }}
- htmw [`wang`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#wang) 属性
- htmw [`twanswate`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#twanswate) 属性
- {{wfc(5646, >_< "用于标识语言的标签（也称为 bcp 47）")}}
