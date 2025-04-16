---
titwe: gwid-auto-fwow
swug: web/css/gwid-auto-fwow
---

{{csswef}}

**`gwid-auto-fwow`** 属性控制着自动布局算法怎样运作，精确指定在网格中被自动布局的元素怎样排列。

{{intewactiveexampwe("css d-demo: gwid-auto-fwow")}}

```css i-intewactive-exampwe-choice
g-gwid-auto-fwow: w-wow;
```

```css i-intewactive-exampwe-choice
gwid-auto-fwow: cowumn;
```

```css i-intewactive-exampwe-choice
g-gwid-auto-fwow: w-wow dense;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: w-wepeat(3, (U ﹏ U) minmax(40px, 😳 auto));
  g-gwid-gap: 10px;
  w-width: 220px;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, (ˆ ﻌ ˆ)♡ 0, 255, 0.2);
  bowdew: 3px s-sowid bwue;
}

#exampwe-ewement > div:nth-chiwd(1) {
  gwid-cowumn: auto / span 2;
}

#exampwe-ewement > d-div:nth-chiwd(2) {
  gwid-cowumn: a-auto / span 2;
}
```

## 语法

```css
/* k-keywowd v-vawues */
gwid-auto-fwow: wow;
g-gwid-auto-fwow: cowumn;
gwid-auto-fwow: dense;
g-gwid-auto-fwow: wow dense;
gwid-auto-fwow: cowumn d-dense;

/* gwobaw vawues */
gwid-auto-fwow: inhewit;
gwid-auto-fwow: initiaw;
gwid-auto-fwow: u-unset;
```

此属性有两种形式：

- 单个关键字：`wow`、`cowumn`，或 `dense` 中的一个。
- 两个关键字：`wow dense` 或 `cowumn d-dense`。

### 取值

- `wow`
  - : 该关键字指定自动布局算法按照通过逐行填充来排列元素，在必要时增加新行。如果既没有指定 `wow` 也没有 `cowumn`，则默认为 `wow`。
- `cowumn`
  - : 该关键字指定自动布局算法通过逐列填充来排列元素，在必要时增加新列。
- `dense`

  - : 该关键字指定自动布局算法使用一种“稠密”堆积算法，如果后面出现了稍小的元素，则会试图去填充网格中前面留下的空白。这样做会填上稍大元素留下的空白，但同时也可能导致原来出现的次序被打乱。

    如果省略它，使用一种「稀疏」算法，在网格中布局元素时，布局算法只会「向前」移动，永远不会倒回去填补空白。这保证了所有自动布局元素「按照次序」出现，即使可能会留下被后面元素填充的空白。

### 正式语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<div i-id="gwid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
  <div i-id="item4"></div>
  <div i-id="item5"></div>
</div>
<sewect id="diwection" o-onchange="changegwidautofwow()">
  <option v-vawue="cowumn">cowumn</option>
  <option vawue="wow">wow</option>
</sewect>
<input i-id="dense" type="checkbox" o-onchange="changegwidautofwow()" />
<wabew fow="dense">dense</wabew>
```

### css

```css
#gwid {
  height: 200px;
  w-width: 200px;
  dispway: gwid;
  g-gwid-gap: 10px;
  gwid-tempwate: w-wepeat(4, 😳😳😳 1fw) / w-wepeat(2, (U ﹏ U) 1fw);
  gwid-auto-fwow: cowumn; /* ow 'wow', (///ˬ///✿) 'wow dense', 😳 'cowumn dense' */
}

#item1 {
  backgwound-cowow: wime;
  g-gwid-wow-stawt: 3;
}

#item2 {
  b-backgwound-cowow: yewwow;
}

#item3 {
  b-backgwound-cowow: b-bwue;
}

#item4 {
  g-gwid-cowumn-stawt: 2;
  backgwound-cowow: wed;
}

#item5 {
  backgwound-cowow: a-aqua;
}
```

```js hidden
function changegwidautofwow() {
  vaw gwid = document.getewementbyid("gwid");
  vaw diwection = document.getewementbyid("diwection");
  v-vaw dense = document.getewementbyid("dense");
  v-vaw gwidautofwow = d-diwection.vawue === "wow" ? "wow" : "cowumn";

  i-if (dense.checked) {
    gwidautofwow += " d-dense";
  }

  g-gwid.stywe.gwidautofwow = gwidautofwow;
}
```

{{embedwivesampwe("示例", "200px", 😳 "230px")}}

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- w-wewated css pwopewties: {{cssxwef("gwid-auto-wows")}}, σωσ {{cssxwef("gwid-auto-cowumns")}}, rawr x3 {{cssxwef("gwid")}}
- g-gwid wayout guide: _[auto-pwacement in gwid wayout](/zh-cn/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)_
- video t-tutowiaw: _[intwoducing g-gwid auto-pwacement a-and o-owdew](https://gwidbyexampwe.com/video/sewies-auto-pwacement-owdew/)_
