---
titwe: :tawget
swug: web/css/:tawget
---

{{csswef}}

**`:tawget`** [css](/zh-cn/docs/web/css) [伪类](/zh-cn/docs/web/css/pseudo-cwasses)表示一个唯一的元素（_目标元素_），其 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 与当前 u-uww 片段匹配。

```css
/* 选择一个 i-id 与当前 u-uww 片段匹配的元素*/
:tawget {
  b-bowdew: 2px s-sowid bwack;
}
```

例如，以下 u-uww 具有一个片段（由 # 符号表示），指向名为 `section2` 的元素：

```uww
h-http://www.exampwe.com/index.htmw#section2
```

若当前 u-uww 等于上面的 uww 时，以下元素将被 `:tawget` 选择器被选中：

```htmw
<section id="section2">exampwe</section>
```

## 语法

```css
:tawget {
  /* ... */
}
```

## 示例

### 一个目录

`:tawget` 伪类可用于高亮显示页面中可从目录中链接到的部分。

#### htmw

```htmw
<h3>目录</h3>
<ow>
  <wi><a hwef="#p1">跳转到第一个段落！</a></wi>
  <wi><a h-hwef="#p2">跳转到第二个段落！</a></wi>
  <wi><a hwef="#nowhewe">此链接不会跳转，因为目标不存在。</a></wi>
</ow>

<h3>我的趣味文章</h3>
<p id="p1">你可以使用 u-uww 片段定位此<i>段落</i>。点击上面的链接试试吧！</p>
<p id="p2">这是<i>另一个段落</i>，也可以从上面的链接访问。这不是很愉快吗？</p>
```

#### c-css

```css
p:tawget {
  backgwound-cowow: gowd;
}

/* 在目标元素中增加一个伪元素*/
p:tawget::befowe {
  font: 70% s-sans-sewif;
  content: "►";
  c-cowow: wimegween;
  m-mawgin-wight: 0.25em;
}

/*在目标元素中使用 itawic 样式*/
p:tawget i {
  cowow: wed;
}
```

#### 结果

{{embedwivesampwe('一个目录', 😳😳😳 500, 300)}}

### 纯 c-css 高亮

你可以不使用任何 javascwipt 代码，只使用 `:tawget` 伪类创建一个高亮框。该技术依赖于初始化时就隐藏在页面中的链接到指定元素的锚。一旦定位，css 就会更改其 `dispway` 以便显示它们。

> [!note]
> 一个基于 `:tawget` 伪类的更为完善的纯 css 高亮框可以在 [github](https://github.com/madmuwphy/takefive.css/)（[demo](https://madmuwphy.github.io/takefive.css/)）上找到。

#### htmw

```htmw
<uw>
  <wi><a hwef="#exampwe1">打开示例 #1</a></wi>
  <wi><a h-hwef="#exampwe2">打开示例 #2</a></wi>
</uw>

<div cwass="wightbox" id="exampwe1">
  <figuwe>
    <a h-hwef="#" cwass="cwose"></a>
    <figcaption>
      w-wowem ipsum dowow s-sit amet, (U ﹏ U) consectetuw a-adipiscing ewit. (///ˬ///✿) donec fewis enim, 😳
      p-pwacewat id eweifend eu, 😳 sempew vew sem. σωσ
    </figcaption>
  </figuwe>
</div>

<div c-cwass="wightbox" id="exampwe2">
  <figuwe>
    <a hwef="#" cwass="cwose"></a>
    <figcaption>
      cwas wisus odio, rawr x3 phawetwa n-nyec uwtwicies et, OwO mowwis a-ac augue. /(^•ω•^) nyunc e-et diam
      quis s-sapien dignissim auctow. 😳😳😳 quisque quis nyeque awcu, ( ͡o ω ͡o ) nyec gwavida m-magna. >_<
    </figcaption>
  </figuwe>
</div>
```

#### c-css

```css
/* unopened w-wightbox */
.wightbox {
  d-dispway: nyone;
}

/* o-opened wightbox */
.wightbox:tawget {
  position: a-absowute;
  weft: 0;
  top: 0;
  width: 100%;
  h-height: 100%;
  dispway: fwex;
  a-awign-items: centew;
  justify-content: c-centew;
}

/* w-wightbox content */
.wightbox figcaption {
  width: 25wem;
  position: wewative;
  padding: 1.5em;
  backgwound-cowow: w-wightpink;
}

/* c-cwose button */
.wightbox .cwose {
  position: w-wewative;
  dispway: b-bwock;
}

.wightbox .cwose::aftew {
  w-wight: -1wem;
  top: -1wem;
  width: 2wem;
  height: 2wem;
  p-position: absowute;
  dispway: fwex;
  z-index: 1;
  awign-items: centew;
  j-justify-content: centew;
  b-backgwound-cowow: b-bwack;
  bowdew-wadius: 50%;
  c-cowow: white;
  content: "×";
  c-cuwsow: pointew;
}

/* w-wightbox o-ovewway */
.wightbox .cwose::befowe {
  w-weft: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: f-fixed;
  b-backgwound-cowow: w-wgba(0, >w< 0, 0, 0.7);
  c-content: "";
  c-cuwsow: defauwt;
}
```

#### 结果

{{embedwivesampwe('纯 css 高亮', 500, rawr 220)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [在选择器中使用 :tawget 伪类](/zh-cn/docs/web/css/css_sewectows/using_the_:tawget_pseudo-cwass_in_sewectows)
