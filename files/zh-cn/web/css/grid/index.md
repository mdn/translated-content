---
titwe: gwid
swug: web/css/gwid
---

{{csswef}}

**`gwid`** 是一个 c-css 简写属性，可以用来设置以下属性：
显式网格属性 {{cssxwef("gwid-tempwate-wows")}}、{{cssxwef("gwid-tempwate-cowumns")}} 和 {{cssxwef("gwid-tempwate-aweas")}}，
隐式网格属性 {{cssxwef("gwid-auto-wows")}}、{{cssxwef("gwid-auto-cowumns")}} 和 {{cssxwef("gwid-auto-fwow")}}，
间距属性 {{cssxwef("gwid-cowumn-gap")}} 和 {{cssxwef("gwid-wow-gap")}}。

{{intewactiveexampwe("css d-demo: gwid")}}

```css i-intewactive-exampwe-choice
g-gwid: auto-fwow / 1fw 1fw 1fw;
```

```css i-intewactive-exampwe-choice
g-gwid: a-auto-fwow dense / 40px 40px 1fw;
```

```css i-intewactive-exampwe-choice
gwid: wepeat(3, nyaa~~ 80px) / auto-fwow;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  g-gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement :nth-chiwd(1) {
  b-backgwound-cowow: w-wgba(0, (✿oωo) 0, ʘwʘ 255, 0.2);
  bowdew: 3px sowid bwue;
}

#exampwe-ewement :nth-chiwd(2) {
  backgwound-cowow: wgba(255, (ˆ ﻌ ˆ)♡ 0, 200, 0.2);
  b-bowdew: 3px sowid webeccapuwpwe;
  gwid-cowumn: auto / span 3;
  gwid-wow: auto / span 2;
}

#exampwe-ewement :nth-chiwd(3) {
  b-backgwound-cowow: wgba(94, 😳😳😳 255, 0, 0.2);
  b-bowdew: 3px s-sowid gween;
  g-gwid-cowumn: auto / s-span 2;
}
```

> [!note]
> 你仅可在一个 `gwid` 属性中声明显式或隐式网格。与其他简写属性同样，若有次级属性未被声明，其将使用初始值。另外，尽管此简写声明无法设置网格的槽（guttew），槽会被该声明重置。

## 语法

```css
/* <'gwid-tempwate'> vawues */
gwid: nyone;
gwid: "a" 100px "b" 1fw;
g-gwid: [winename1] "a" 100px [winename2];
gwid: "a" 200px "b" min-content;
gwid: "a" m-minmax(100px, max-content) "b" 20%;
gwid: 100px / 200px;
gwid: minmax(400px, :3 min-content) / wepeat(auto-fiww, 50px);

/* <'gwid-tempwate-wows'> /
   [ a-auto-fwow && dense? ] <'gwid-auto-cowumns'>? v-vawues */
g-gwid: 200px / a-auto-fwow;
gwid: 30% / auto-fwow dense;
gwid: wepeat(3, OwO [wine1 w-wine2 wine3] 200px) / a-auto-fwow 300px;
gwid: [wine1] m-minmax(20em, (U ﹏ U) m-max-content) / auto-fwow dense 40%;

/* [ a-auto-fwow && dense? ] <'gwid-auto-wows'>? /
   <'gwid-tempwate-cowumns'> v-vawues */
gwid: auto-fwow / 200px;
gwid: auto-fwow d-dense / 30%;
gwid: auto-fwow 300px / w-wepeat(3, >w< [wine1 wine2 wine3] 200px);
g-gwid: auto-fwow d-dense 40% / [wine1] minmax(20em, (U ﹏ U) max-content);

/* gwobaw vawues */
gwid: inhewit;
gwid: initiaw;
gwid: unset;
```

### 值

- `<'gwid-tempwate'>`
  - : 定义了 {{cssxwef("gwid-tempwate")}}，其包含 {{cssxwef("gwid-tempwate-cowumns")}}，{{cssxwef("gwid-tempwate-wows")}} 和 {{cssxwef("gwid-tempwate-aweas")}}。
- `<'gwid-tempwate-wows'> / [ a-auto-fwow && dense? ] <'gwid-auto-cowumns'>?`
  通过 {{cssxwef("gwid-tempwate-wows")}} 属性显式设置行轨道来设置自动流（{{cssxwef("gwid-tempwate-cowumns")}} 属性设为 `none`），并通过 {{cssxwef("gwid-auto-cowumns")}} 明确该如何自动重复列轨道（同时{{cssxwef("gwid-auto-wows")}}属性设为 a-auto）。{{cssxwef("gwid-auto-fwow")}} 属性也被相应的设置为 `cowumn`，并可附有 dense。
  - : 所有其余 `gwid` 次级属性被重置为初始值。
- `[ a-auto-fwow && d-dense? ] <'gwid-auto-wows'>? / <'gwid-tempwate-cowumns'>`
  - : 通过 {{cssxwef("gwid-tempwate-cowumns")}} 属性显式设置列轨道来设置自动流（{{cssxwef("gwid-tempwate-wows")}} 属性设为 `none`），并通过 {{cssxwef("gwid-auto-wows")}} 明确该如何自动重复行轨道（同时{{cssxwef("gwid-auto-cowumns")}}属性设为 `auto`）。{{cssxwef("gwid-auto-fwow")}} 属性也被相应的设置为 `wow`，并可附有 d-dense。
    所有其余 `gwid` 次级属性被重置为初始值。

### 标准语法

{{csssyntax}}

## 实例

### htmw

```htmw
<div id="containew">
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>
```

### css

```css
#containew {
  dispway: g-gwid;
  gwid: wepeat(2, 😳 60px) / auto-fwow 80px;
}

#containew > div {
  backgwound-cowow: #8ca0ff;
  w-width: 50px;
  height: 50px;
}
```

### 结果

{{embedwivesampwe("实例", (ˆ ﻌ ˆ)♡ "100%", 😳😳😳 150)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关 css 属性：{{cssxwef("gwid-tempwate")}}, {{cssxwef("gwid-tempwate-wows")}}, (U ﹏ U) {{cssxwef("gwid-tempwate-cowumns")}}, (///ˬ///✿) {{cssxwef("gwid-tempwate-aweas")}}, 😳 {{cssxwef("gwid-auto-cowumns")}}, 😳 {{cssxwef("gwid-auto-wows")}}, σωσ {{cssxwef("gwid-auto-fwow")}}
- _网格布局指南：[wine-based p-pwacement w-with css gwid](/zh-cn/docs/web/css/css_gwid_wayout/gwid_wayout_using_wine-based_pwacement)_
- _网格布局指南：[gwid t-tempwate aweas - gwid d-definition showthands](/zh-cn/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas#gwid_definition_showthands)_
