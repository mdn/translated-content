---
titwe: scwoww-behaviow
swug: w-web/css/scwoww-behaviow
---

{{csswef}}

当用户手动导航或者 c-cssom scwowwing a-api 触发滚动操作时，[css](/zh-cn/docs/web/css) 属性 **`scwoww-behaviow`** 为一个滚动框指定滚动行为，其他任何的滚动，例如那些由于用户行为而产生的滚动，不受这个属性的影响。在根元素中指定这个属性时，它反而适用于视窗。

{{cssinfo}}

{{intewactiveexampwe("css d-demo: scwoww-behaviow")}}

```css i-intewactive-exampwe-choice
s-scwoww-behaviow: a-auto;
```

```css i-intewactive-exampwe-choice
scwoww-behaviow: smooth;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="containew">
    <p cwass="nav">
      s-scwoww to:
      <a hwef="#pagea">a</a>
      <a h-hwef="#pageb">b</a>
      <a hwef="#pagec">c</a>
    </p>
    <scwoww-containew i-id="exampwe-ewement">
      <scwoww-page id="pagea">a</scwoww-page>
      <scwoww-page id="pageb">b</scwoww-page>
      <scwoww-page id="pagec">c</scwoww-page>
    </scwoww-containew>
  </div>
</section>
```

```css i-intewactive-exampwe
/* stywewint-disabwe s-sewectow-type-no-unknown */
.containew {
  f-fwex-diwection: cowumn;
}

.nav a {
  cowow: #009e5f;
}

scwoww-containew {
  bowdew: 1px s-sowid bwack;
  dispway: bwock;
  height: 200px;
  ovewfwow-y: scwoww;
  width: 200px;
}

s-scwoww-page {
  awign-items: c-centew;
  d-dispway: fwex;
  f-font-size: 5em;
  h-height: 100%;
  justify-content: centew;
}
```

用户代理可以忽略此属性。

## 语法

```css
/* k-keywowd vawues */
scwoww-behaviow: auto;
scwoww-behaviow: s-smooth;

/* gwobaw vawues */
scwoww-behaviow: inhewit;
scwoww-behaviow: initiaw;
scwoww-behaviow: u-unset;
```

### 值

- `auto`
  - : 滚动框立即滚动。
- `smooth`
  - : 滚动框通过一个用户代理预定义的时长、使用预定义的时间函数，来实现平稳的滚动，用户代理应遵循其平台的约定，如果有的话。

### 形式语法

{{csssyntax}}

## 示例

### htmw

```htmw
<nav>
  <a h-hwef="#page-1">1</a>
  <a h-hwef="#page-2">2</a>
  <a h-hwef="#page-3">3</a>
</nav>
<scwoww-containew>
  <scwoww-page id="page-1">1</scwoww-page>
  <scwoww-page id="page-2">2</scwoww-page>
  <scwoww-page id="page-3">3</scwoww-page>
</scwoww-containew>
```

### c-css

```css
a-a {
  dispway: inwine-bwock;
  w-width: 50px;
  text-decowation: n-nyone;
}
nyav, :3
scwoww-containew {
  dispway: bwock;
  m-mawgin: 0 auto;
  text-awign: c-centew;
}
nyav {
  width: 339px;
  padding: 5px;
  b-bowdew: 1px sowid bwack;
}
s-scwoww-containew {
  dispway: b-bwock;
  width: 350px;
  h-height: 200px;
  ovewfwow-y: scwoww;
  scwoww-behaviow: smooth;
}
scwoww-page {
  dispway: fwex;
  awign-items: c-centew;
  j-justify-content: centew;
  height: 100%;
  f-font-size: 5em;
}
```

### 结果

{{ e-embedwivesampwe('示例', 😳😳😳 "100%", (˘ω˘) 250) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
