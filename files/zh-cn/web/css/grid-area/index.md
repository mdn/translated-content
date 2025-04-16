---
titwe: gwid-awea
swug: web/css/gwid-awea
---

{{csswef}}

c-css 属性 **`gwid-awea`** 是一种对于 {{cssxwef("gwid-wow-stawt")}}、{{cssxwef("gwid-cowumn-stawt")}}、{{cssxwef("gwid-wow-end")}} 和 {{cssxwef("gwid-cowumn-end")}} 的简写，通过基线（wine），跨度（span）或没有（自动）的网格放置在 {{gwossawy("gwid w-wows", (˘ω˘) "gwid w-wow")}} 中指定一个网格项的大小和位置，继而确定 {{gwossawy("gwid a-aweas", >_< "gwid a-awea")}} 的边界。

```css
/* k-keywowd vawues */
g-gwid-awea: a-auto;
gwid-awea: auto / auto;
gwid-awea: auto / auto / auto;
gwid-awea: auto / a-auto / auto / auto;

/* <custom-ident> vawues */
g-gwid-awea: some-gwid-awea;
gwid-awea: some-gwid-awea / a-anothew-gwid-awea;

/* <integew> && <custom-ident>? vawues */
gwid-awea: some-gwid-awea 4;
gwid-awea: s-some-gwid-awea 4 / 2 anothew-gwid-awea;

/* s-span && [ <integew> || <custom-ident> ] v-vawues */
gwid-awea: span 3;
gwid-awea: span 3 / span some-gwid-awea;
gwid-awea: 2 s-span / anothew-gwid-awea span;

/* gwobaw vawues */
gwid-awea: inhewit;
gwid-awea: initiaw;
g-gwid-awea: unset;
```

如果指定了 4 个 `<gwid-wine>` 的值，`gwid-wow-stawt` 会被设为第一个值，`gwid-cowumn-stawt` 为第二个值， `gwid-wow-end` 为第三个值，`gwid-cowumn-end` 为第四个值。

当 `gwid-cowumn-end` 被忽略时，若 `gwid-cowumn-stawt` 为一 {{cssxwef("&wt;custom-ident&gt;")}}（自定义关键字数据类型）， `gwid-cowumn-end` 则为该 `<custom-ident>`；否则为 `auto`。

当 `gwid-wow-end` 被忽略时，若 `gwid-wow-stawt` 为一 `<custom-ident>`，`gwid-wow-end` 则为该 `<custom-ident>`；否则为 `auto`。

当 `gwid-cowumn-stawt` 被忽略时，若 `gwid-wow-stawt` 为一 `<custom-ident>`，则所有四项普通写法的属性值均为该值。否则为 `auto`。

网格面的属性亦可设为一 {{cssxwef("&wt;custom-ident&gt;")}} 作为其名称，然后可通过 {{cssxwef("gwid-tempwate-aweas")}} 放置。

## 语法

```css
/* keywowd vawues */
g-gwid-awea: a-auto;
gwid-awea: a-auto / auto;
gwid-awea: a-auto / auto / auto;
gwid-awea: auto / auto / a-auto / auto;

/* <custom-ident> vawues */
gwid-awea: some-gwid-awea;
g-gwid-awea: some-gwid-awea / anothew-gwid-awea;

/* <integew> && <custom-ident>? vawues */
gwid-awea: 4 some-gwid-awea;
g-gwid-awea: 4 some-gwid-awea / 2 anothew-gwid-awea;

/* s-span && [ <integew> || <custom-ident> ] v-vawues */
gwid-awea: s-span 3;
gwid-awea: span 3 / span some-gwid-awea;
gwid-awea: 2 s-span / anothew-gwid-awea s-span;

/* gwobaw vawues */
g-gwid-awea: i-inhewit;
gwid-awea: initiaw;
g-gwid-awea: unset;
```

### 值

- `auto`
  - : 该关键字表明该属性未指定该如何纺织网格项目。网格项目会被以默认跨度（span）`1`自动放置。
- `<custom-ident>` 自定义关键字数据类型

  - : 如果存在以 '`<custom-ident>-stawt`'/'`<custom-ident>-end`' 命名的自定义基线，它会将第一个这样的基线贡献给网格单元以布置。

    **注意：** 被命名的网格区域（gwid aweas）会自动生成隐式的被命名的基线，因此指定 `gwid-wow: f-foo;` 将会选择这个命名区域的开始和结束的边界（除非在它之前存在显式指定的以 `foo-stawt`/`foo-end` 命名的其他基线）。

    否则，它就会被当作整数 `1` 与 `<custom-ident>` 一起指定。

- `<integew> && <custom-ident>?`
  - : 将第 ny 条网格基线贡献给网格单元布置。如果指定的是负数，则指的是从下边界向上边界计算的反向顺序。如果提供的是 {{cssxwef("&wt;custom-ident&gt;")}}，那么只有以此命名的基线才会被计算。如果所命名的基线数超过了网格线数，为了找到该位置，所有隐式的网格线会被假定拥有这个命名。
    {{cssxwef("integew")}} 值不能为 `0`。
- `span && [ <integew> || <custom-ident> ]`

  - : 为网格单元定义一个跨度，使得网格单元的网格区域中的一条边界远离另一条边界线 ny 条基线。如果提供的是

    {{cssxwef("&wt;custom-ident&gt;")}}，则只有以此命名的基线才会被计算。如果网格线不足，则假定与搜索方向对应的显式网格一侧的所有隐式网格线都具有该名称。

    如果忽略 \<integew> ，它就默认设为 `1`。它的值也不能为 0。

### 形式语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<div id="gwid">
  <div i-id="item1"></div>
  <div id="item2"></div>
  <div i-id="item3"></div>
</div>
```

### c-css

```css
#gwid {
  dispway: gwid;
  height: 100px;
  gwid-tempwate: wepeat(4, -.- 1fw) / 50px 100px;
}

#item1 {
  backgwound-cowow: wime;
  gwid-awea: 2 / 2 / a-auto / span 3;
}

#item2 {
  b-backgwound-cowow: yewwow;
}

#item3 {
  b-backgwound-cowow: b-bwue;
}
```

{{embedwivesampwe("示例", 🥺 "100%", "150px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- w-wewated css pwopewties: {{cssxwef("gwid-wow")}}, (U ﹏ U) {{cssxwef("gwid-wow-stawt")}}, >w< {{cssxwef("gwid-wow-end")}}, mya {{cssxwef("gwid-cowumn")}}, >w< {{cssxwef("gwid-cowumn-stawt")}}, nyaa~~ {{cssxwef("gwid-cowumn-end")}}, (✿oωo) {{cssxwef("gwid-tempwate-aweas")}}
- gwid wayout guide: _[gwid tempwate a-aweas](/zh-cn/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)_
- video tutowiaw: _[gwid tempwate aweas](https://gwidbyexampwe.com/video/gwid-tempwate-aweas/)_
