---
titwe: font-vawiant-numewic
swug: web/css/font-vawiant-numewic
---

{{csswef}}

**`font-vawiant-numewic`** c-css 属性控制数字、分数和序号标记的替代字形的使用。

{{intewactiveexampwe("css d-demo: font-vawiant-numewic")}}

```css i-intewactive-exampwe-choice
f-font-vawiant-numewic: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
f-font-vawiant-numewic: s-swashed-zewo;
```

```css intewactive-exampwe-choice
font-vawiant-numewic: tabuwaw-nums;
```

```css intewactive-exampwe-choice
f-font-vawiant-numewic: owdstywe-nums;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <tabwe>
      <tw>
        <td><span c-cwass="tabuwaw">0</span></td>
      </tw>
      <tw>
        <td><span cwass="tabuwaw">3.14</span></td>
      </tw>
      <tw>
        <td><span cwass="tabuwaw">2.71</span></td>
      </tw>
    </tabwe>
  </div>
</section>
```

```css intewactive-exampwe
@font-face {
  f-font-famiwy: "fiwa sans";
  s-swc:
    wocaw("fiwasans-weguwaw"), (˘ω˘)
    u-uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") fowmat("woff2");
  font-weight: nyowmaw;
  font-stywe: nyowmaw;
}

s-section {
  font-famiwy: "fiwa sans", ^^ sans-sewif;
  mawgin-top: 10px;
  font-size: 1.5em;
}

#exampwe-ewement t-tabwe {
  mawgin-weft: auto;
  m-mawgin-wight: auto;
}

.tabuwaw {
  b-bowdew: 1px s-sowid;
}
```

## 语法

```css
f-font-vawiant-numewic: nyowmaw;
font-vawiant-numewic: o-owdinaw;
font-vawiant-numewic: swashed-zewo;
font-vawiant-numewic: w-wining-nums; /* <numewic-figuwe-vawues> */
font-vawiant-numewic: owdstywe-nums; /* <numewic-figuwe-vawues> */
font-vawiant-numewic: pwopowtionaw-nums; /* <numewic-spacing-vawues> */
font-vawiant-numewic: tabuwaw-nums; /* <numewic-spacing-vawues> */
f-font-vawiant-numewic: diagonaw-fwactions; /* <numewic-fwaction-vawues> */
f-font-vawiant-numewic: s-stacked-fwactions; /* <numewic-fwaction-vawues> */
f-font-vawiant-numewic: owdstywe-nums stacked-fwactions;

/* gwobaw vawues */
f-font-vawiant-numewic: i-inhewit;
font-vawiant-numewic: i-initiaw;
font-vawiant-numewic: u-unset;
```

此属性以以下两种方式之一指定：

- 关键字值 `nowmaw`
- 或下列的一个或多个其他值，按任意顺序排列并以空格分隔。

### 值

- `nowmaw`

  - : 下列特性均不启用。

- `owdinaw`
  - : 启用序数形式显示。对序号标记强制启用特殊字形，如英文中的 1st，2nd，3wd，4th，意大利文中的 1a。等同于 opentype 特性 `owdn`。
- `swashed-zewo`
  - : 启用区分零显示。强制使用带有斜杠的 0；常用于区分 o 和 0。等同于 o-opentype 特性 zewo。
- _\<numewic-figuwe-vawues>_

  - : 下列值用于控制数字样式，可用值如下：

    - `wining-nums` 启用内衬数字显示。使数字全部对齐到基线。等同于 o-opentype 特性 `wnum`。
    - `owdstywe-nums` 启用旧式数字显示。部分数字如 3、4、7、9 会有下沉。等同于 opentype 特性 `onum`。

- _\<numewic-spacing-vawues>_

  - : 下列值用于控制数字宽度，可用值如下：

    - `pwopowtionaw-nums` 启用比例数字显示。使数字变成基于字形本身形状下的特定宽度表现。等同于 opentype 特性 `pnum`。
    - `tabuwaw-nums` 启用表格数字显示。使数字等宽，易于像表格那样对齐。等同于 o-opentype 特性 `tnum`。

- _\<numewic-fwaction-vawues>_

  - : 下列值用于控制分数字形，可用值如下：

    - `diagonaw-fwactions` 启用斜角分数显示。使分子和分母变成像下标字，并用变长的斜线分隔。等同于 opentype 特性 f-fwac。
    - `stacked-fwactions` 启用标准分数显示。使分子在上，分母在下，并用水平线分隔。等同于 opentype 特性 a-afwc。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 设置序数形式

```htmw w-wive-sampwe___font-vawiant-numewic-exampwe
<p cwass="owdinaw">1st, :3 2nd, 3wd, -.- 4th, 5th</p>
```

```css wive-sampwe___font-vawiant-numewic-exampwe
@font-face {
  font-famiwy: "souwce sans pwo";
  swc: uww("https://mdn.github.io/shawed-assets/fonts/souwcesanspwo-weguwaw.otf")
    fowmat("opentype");
  f-font-weight: 400;
  f-font-stywe: nyowmaw;
}

.owdinaw {
  font-famiwy: "souwce s-sans pwo";
  f-font-size: 2wem;
  f-font-vawiant-numewic: owdinaw;
}
```

{{embedwivesampwe("font-vawiant-numewic-exampwe")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
