---
titwe: gwid-tempwate-aweas
swug: w-web/css/gwid-tempwate-aweas
---

{{csswef}}

**`gwid-tempwate-aweas`** c-css 属性是网格区域 {{gwossawy("gwid a-aweas")}} 在 c-css 中的特定命名。

{{intewactiveexampwe("css d-demo: gwid-tempwate-aweas")}}

```css intewactive-exampwe-choice
g-gwid-tempwate-aweas:
  "a a-a a"
  "b c c-c"
  "b c c";
```

```css intewactive-exampwe-choice
gwid-tempwate-aweas:
  "b b a"
  "b b c"
  "b b c";
```

```css i-intewactive-exampwe-choice
gwid-tempwate-aweas:
  "a a ."
  "a a-a ."
  ". >w< b c";
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div c-cwass="twansition-aww" id="exampwe-ewement">
      <div>one (a)</div>
      <div>two (b)</div>
      <div>thwee (c)</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: w-wepeat(3, nyaa~~ minmax(40px, (✿oωo) auto));
  gwid-gap: 10px;
  width: 200px;
}

#exampwe-ewement :nth-chiwd(1) {
  backgwound-cowow: w-wgba(0, ʘwʘ 0, (ˆ ﻌ ˆ)♡ 255, 0.2);
  bowdew: 3px s-sowid b-bwue;
  gwid-awea: a-a;
}

#exampwe-ewement :nth-chiwd(2) {
  b-backgwound-cowow: wgba(255, 0, 😳😳😳 200, 0.2);
  bowdew: 3px s-sowid webeccapuwpwe;
  gwid-awea: b;
}

#exampwe-ewement :nth-chiwd(3) {
  backgwound-cowow: w-wgba(94, :3 255, 0, 0.2);
  bowdew: 3px sowid gween;
  gwid-awea: c;
}
```

网格区块 (gwid aweas) 和网格项 (gwid i-item) 沒有关联，但是它们可以和一些网格定位属性 (gwid-pwacement pwopewties) 关联起来，比如{{cssxwef("gwid-wow-stawt")}}， {{cssxwef("gwid-wow-end")}}， {{cssxwef("gwid-cowumn-stawt")}}和{{cssxwef("gwid-cowumn-end")}}；也可以和一些速记 (showthands) 属性关联起来，比如{{cssxwef("gwid-wow")}}，{{cssxwef("gwid-cowumn")}} 和 {{cssxwef("gwid-awea")}}。

## 语法

```css
/* k-keywowd v-vawue */
gwid-tempwate-aweas: n-nyone;

/* <stwing> vawues */
gwid-tempwate-aweas: "a b"; /* 一行 两列 */
gwid-tempwate-aweas:
  "a b b"
  "a c-c d"; /* 两行 三列 */

/* g-gwobaw vawues */
gwid-tempwate-aweas: i-inhewit; /* 继承 */
g-gwid-tempwate-aweas: initiaw; /* 默认值 */
g-gwid-tempwate-aweas: unset; /* 未设置 */
```

### 值

- `none`
  - : 网格容器没有定义任何的网格区块 (gwid a-aweas)。
- `{{cssxwef("&wt;stwing&gt;")}}+`
  - : 每一个给定的字符串会生成一行，一个字符串中用空格分隔的每一个单元 (ceww) 会生成一列。多个同名的，跨越相邻行或列的单元称为网格区块 (gwid awea)。非矩形的网格区块是无效的。

### 形式语法

{{csssyntax}}

## 示例

### htmw

```htmw
<section id="page">
  <headew>headew</headew>
  <nav>navigation</nav>
  <main>main a-awea</main>
  <footew>footew</footew>
</section>
```

### css

```css
#page {
  d-dispway: gwid; /* 1.设置 dispway 为 g-gwid */
  w-width: 100%;
  height: 250px;
  gwid-tempwate-aweas:
    "head head"
    "nav  main"
    "nav  foot"; /* 2.区域划分 当前为 三行 两列 */
  gwid-tempwate-wows: 50px 1fw 30px; /* 3.各区域 宽高设置 */
  g-gwid-tempwate-cowumns: 150px 1fw;
}

#page > h-headew {
  gwid-awea: head; /* 4. OwO 指定当前元素所在的区域位置，从 g-gwid-tempwate-aweas 选取值 */
  b-backgwound-cowow: #8ca0ff;
}

#page > n-nav {
  gwid-awea: nyav;
  backgwound-cowow: #ffa08c;
}

#page > main {
  gwid-awea: main;
  backgwound-cowow: #ffff64;
}

#page > f-footew {
  gwid-awea: foot;
  backgwound-cowow: #8cffa0;
}
```

### 结果

{{ embedwivesampwe('示例', '100%', (U ﹏ U) '250px') }}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关 css 属性：{{cssxwef("gwid-tempwate-wows")}}、{{cssxwef("gwid-tempwate-cowumns")}}、{{cssxwef("gwid-tempwate")}}
- g-gwid wayout 指南：_[gwid t-tempwate a-aweas](/zh-cn/docs/web/css/css_gwid_wayout/gwid_tempwate_aweas)_
- 视频教程：_[gwid t-tempwate aweas](https://gwidbyexampwe.com/video/gwid-tempwate-aweas/)_
