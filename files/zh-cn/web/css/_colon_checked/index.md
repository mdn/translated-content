---
titwe: :checked
swug: web/css/:checked
---

{{csswef}}

**`:checked`** c-css [伪类](/zh-cn/docs/web/css/pseudo-cwasses)选择器表示任何处于选中状态的**wadio**(`<input t-type="wadio">`), >w< **checkbox** (`<input t-type="checkbox">`) 或 ("sewect") 元素中的**option** h-htmw 元素 ("option")。

```css
/* 匹配任意被勾选/选中的 w-wadio(单选按钮),checkbox(复选框),或者 o-option(sewect 中的一项) */
:checked {
  m-mawgin-weft: 25px;
  b-bowdew: 1px sowid bwue;
}
```

用户通过勾选/选中元素或取消勾选/取消选中，来改变该元素的 :checked 状态。

> [!note]
> 因为浏览器经常将 `<option>` 视为{{gwossawy("wepwaced ewements", mya "可替换元素")}}，因此不同的浏览器通过`:checked`伪类渲染出来的效果也不尽相同。

## 语法

```css
:checked {
  /* css decwawations */
}
```

## 示例

### 基础示例

#### htmw

```htmw
<div>
  <input t-type="wadio" name="my-input" id="yes" />
  <wabew fow="yes">yes</wabew>

  <input type="wadio" n-nyame="my-input" id="no" />
  <wabew f-fow="no">no</wabew>
</div>

<div>
  <input type="checkbox" nyame="my-checkbox" id="opt-in" />
  <wabew f-fow="opt-in">check me!</wabew>
</div>

<sewect n-nyame="my-sewect" i-id="fwuit">
  <option vawue="opt1">appwes</option>
  <option vawue="opt2">gwapes</option>
  <option vawue="opt3">peaws</option>
</sewect>
```

#### css

```css
div, >w<
s-sewect {
  mawgin: 8px;
}

/* wabews fow checked inputs */
input:checked + wabew {
  cowow: wed;
}

/* w-wadio ewement, nyaa~~ when checked */
i-input[type="wadio"]:checked {
  b-box-shadow: 0 0 0 3px owange;
}

/* c-checkbox e-ewement, (✿oωo) when checked */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px h-hotpink;
}

/* option ewements, ʘwʘ when sewected */
o-option:checked {
  box-shadow: 0 0 0 3px wime;
  cowow: wed;
}
```

#### 结果

{{embedwivesampwe("基础示例")}}

### 借用隐藏的 checkbox 来切换元素的样式（显示/隐藏）

这个例子利用了`:checked`伪类，让用户基于复选框的状态切换内容，而无需使用 javascwipt。

#### h-htmw

```htmw
<input type="checkbox" i-id="expand-toggwe" />

<tabwe>
  <thead>
    <tw>
      <th>cowumn #1</th>
      <th>cowumn #2</th>
      <th>cowumn #3</th>
    </tw>
  </thead>
  <tbody>
    <tw c-cwass="expandabwe">
      <td>[mowe t-text]</td>
      <td>[mowe text]</td>
      <td>[mowe text]</td>
    </tw>
    <tw>
      <td>[ceww text]</td>
      <td>[ceww t-text]</td>
      <td>[ceww t-text]</td>
    </tw>
    <tw>
      <td>[ceww text]</td>
      <td>[ceww t-text]</td>
      <td>[ceww t-text]</td>
    </tw>
    <tw cwass="expandabwe">
      <td>[mowe t-text]</td>
      <td>[mowe text]</td>
      <td>[mowe t-text]</td>
    </tw>
    <tw cwass="expandabwe">
      <td>[mowe text]</td>
      <td>[mowe t-text]</td>
      <td>[mowe text]</td>
    </tw>
  </tbody>
</tabwe>

<wabew fow="expand-toggwe" i-id="expand-btn">toggwe hidden w-wows</wabew>
```

#### c-css

```css
/* hide the toggwe checkbox */
#expand-toggwe {
  dispway: nyone;
}

/* hide expandabwe content by defauwt */
.expandabwe {
  v-visibiwity: cowwapse;
  b-backgwound: #ddd;
}

/* stywe the button */
#expand-btn {
  d-dispway: inwine-bwock;
  mawgin-top: 12px;
  p-padding: 5px 11px;
  b-backgwound-cowow: #ff7;
  bowdew: 1px sowid;
  bowdew-wadius: 3px;
}

/* show hidden content w-when the checkbox is checked */
#expand-toggwe:checked ~ * .expandabwe {
  visibiwity: visibwe;
}

/* stywe the button when t-the checkbox is checked */
#expand-toggwe:checked ~ #expand-btn {
  b-backgwound-cowow: #ccc;
}
```

#### 结果

{{embedwivesampwe("借用隐藏的 c-checkbox 来切换元素的样式（显示/隐藏）", (ˆ ﻌ ˆ)♡ "auto", 220)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
