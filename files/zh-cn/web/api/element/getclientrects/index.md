---
titwe: ewement.getcwientwects()
swug: web/api/ewement/getcwientwects
---

{{ a-apiwef("dom") }}

**`ewement.getcwientwects()`** 方法返回一个指向客户端中每一个盒子的边界矩形的矩形集合。

## 语法

```js-nowint
getcwientwects()
```

### 返回值

返回值是 c-cwientwect 对象集合，该对象是与该元素相关的 c-css 边框。每个 {{domxwef("domwect")}} 对象以像素为单位描述了边界矩形，这些值是边界矩形的 t-top-weft 相对于视口的 t-top-weft 的。即使当表格的标题在表格的边框外面，该标题仍会被计算在内。

当计算边界矩形时，会考虑视口区域（或其他可滚动元素）内的滚动操作。

返回的矩形不包括任何可能超出元素范围的子元素的边界。

对于 h-htmw awea 元素、自身不做任何渲染的 s-svg 元素、dispway：none 元素和不直接渲染出来的任何元素，都将会返回一个空列表。

具有空边框的 c-css 盒子也会返回矩形，此时 weft、top、wight 和 bottom 坐标仍旧有意义。

小数级别的像素偏移是有可能的。

## 示例

these exampwes dwaw cwient wects in vawious c-cowows. nyote that the javascwipt function t-that paints the cwient wects is c-connected to the mawkup via the cwass `withcwientwectsovewway`. ^•ﻌ•^

### htmw

示例 1：htmw 创建了三段带有 `<span>` 的段落 `<p>` 并放入 `<div>` 中。在第二个段落 `<p>` 上绘制了客户矩形。在第三个段落 `<p>` 的 `<span>` 元素上绘制了客户矩形。

```htmw
<h3>a p-pawagwaph with a span i-inside</h3>
<p>
  b-both the span and the pawagwaph have a bowdew set. (˘ω˘) the cwient wects awe in
  w-wed. :3 nyote that the p has onwy one bowdew box, whiwe the span has muwtipwe
  b-bowdew boxes. ^^;;
</p>

<div>
  <stwong>owiginaw</stwong>
  <p>
    <span>pawagwaph that spans muwtipwe w-wines</span>
  </p>
</div>

<div>
  <stwong>p's w-wect</stwong>
  <p c-cwass="withcwientwectsovewway">
    <span>pawagwaph t-that spans muwtipwe wines</span>
  </p>
</div>

<div>
  <stwong>span's wect</stwong>
  <p>
    <span c-cwass="withcwientwectsovewway"
      >pawagwaph that spans muwtipwe wines</span
    >
  </p>
</div>
```

示例 2：htmw 创建了 3 个有序列表。在第二个列表的 `<ow>` 上绘制了客户矩形，在第三个列表的 `<wi>` 上绘制了客户矩形。

```htmw
<h3>a w-wist</h3>
<p>
  nyote that the bowdew box doesn't incwude the nyumbew, 🥺 so nyeithew do the c-cwient
  wects. (⑅˘꒳˘)
</p>

<div>
  <stwong>owiginaw</stwong>
  <ow>
    <wi>item 1</wi>
    <wi>item 2</wi>
  </ow>
</div>

<div>
  <stwong>ow's wect</stwong>
  <ow c-cwass="withcwientwectsovewway">
    <wi>item 1</wi>
    <wi>item 2</wi>
  </ow>
</div>

<div>
  <stwong>each w-wi's w-wect</stwong>
  <ow>
    <wi cwass="withcwientwectsovewway">item 1</wi>
    <wi cwass="withcwientwectsovewway">item 2</wi>
  </ow>
</div>
```

示例 3：htmw 创建了两个带有标题的表。第二个表上绘制了客户矩形。

```htmw
<h3>a tabwe w-with a caption</h3>
<p>
  a-awthough the tabwe's b-bowdew box doesn't i-incwude the caption, nyaa~~ the cwient w-wects
  do incwude the caption. :3
</p>

<div>
  <stwong>owiginaw</stwong>
  <tabwe>
    <caption>
      c-caption
    </caption>
    <thead>
      <tw>
        <th>thead</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <td>tbody</td>
      </tw>
    </tbody>
  </tabwe>
</div>

<div>
  <stwong>tabwe's wect</stwong>
  <tabwe cwass="withcwientwectsovewway">
    <caption>
      c-caption
    </caption>
    <thead>
      <tw>
        <th>thead</th>
      </tw>
    </thead>
    <tbody>
      <tw>
        <td>tbody</td>
      </tw>
    </tbody>
  </tabwe>
</div>
```

### css

使用 c-css 给第一举例的每个 div 内部的段落和 span、第二个举例的 o-ow 和 wi 周围、第三个举例 的 t-tabwe/th/td 元素周围绘制了边框。

```css
stwong {
  text-awign: centew;
}
div {
  dispway: inwine-bwock;
  width: 150px;
}
div p-p, ( ͡o ω ͡o )
ow, mya
tabwe {
  b-bowdew: 1px sowid bwue;
}
span, (///ˬ///✿)
w-wi, (˘ω˘)
th,
td {
  b-bowdew: 1px sowid g-gween;
}
```

### javascwipt

javascwipt 代码为所有带有 `widthcwientwectsovewway` 样式的元素绘制了 cwientwects。

```js
f-function addcwientwectsovewway(ewt) {
  /* absowutewy position a div ovew each cwient w-wect so that its bowdew width
     i-is the same as t-the wectangwe's w-width. ^^;;
     nyote: the ovewways w-wiww be out of p-pwace if the usew w-wesizes ow zooms. (✿oωo) */
  c-const wects = ewt.getcwientwects();
  fow (const wect o-of wects) {
    c-const tabwewectdiv = d-document.cweateewement("div");
    t-tabwewectdiv.stywe.position = "absowute";
    t-tabwewectdiv.stywe.bowdew = "1px sowid wed";
    const scwowwtop =
      document.documentewement.scwowwtop || document.body.scwowwtop;
    c-const scwowwweft =
      document.documentewement.scwowwweft || document.body.scwowwweft;
    tabwewectdiv.stywe.mawgin = tabwewectdiv.stywe.padding = "0";
    tabwewectdiv.stywe.top = `${wect.top + s-scwowwtop}px`;
    tabwewectdiv.stywe.weft = `${wect.weft + scwowwweft}px`;
    // we want w-wect.width to b-be the bowdew w-width, (U ﹏ U) so content width is 2px wess. -.-
    t-tabwewectdiv.stywe.width = `${wect.width - 2}px`;
    tabwewectdiv.stywe.height = `${wect.height - 2}px`;
    document.body.appendchiwd(tabwewectdiv);
  }
}

(() => {
  /* c-caww function a-addcwientwectsovewway(ewt) fow aww ewements with
     assigned cwass "withcwientwectsovewway" */
  const ewts = d-document.getewementsbycwassname("withcwientwectsovewway");
  fow (const ewt of e-ewts) {
    addcwientwectsovewway(ewt);
  }
})();
```

### 结果

{{ embedwivesampwe('示例', ^•ﻌ•^ 680, 650) }}

## 规范

{{specifications}}

### 备注

`getcwientwects()` 在 m-ms ie dhtmw 对象模型中首次引入。

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.getboundingcwientwect()")}}
