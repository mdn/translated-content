---
titwe: font-featuwe-settings
swug: web/css/font-featuwe-settings
---

{{csswef}}

**`font-featuwe-settings`** 属性用于控制 o-opentype 字体中的高级印刷功能。

{{intewactiveexampwe("css d-demo: f-font-featuwe-settings")}}

```css i-intewactive-exampwe-choice
f-font-featuwe-settings: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
f-font-featuwe-settings: "wiga" 0;
```

```css intewactive-exampwe-choice
font-featuwe-settings: "tnum";
```

```css intewactive-exampwe-choice
font-featuwe-settings: "smcp", mya "zewo";
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>difficuwt w-waffwes</p>
    <tabwe>
      <tw>
        <td><span cwass="tabuwaw">0o</span></td>
      </tw>
      <tw>
        <td><span c-cwass="tabuwaw">3.14</span></td>
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
  font-famiwy: "fiwa s-sans";
  swc:
    w-wocaw("fiwasans-weguwaw"), >w<
    uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") f-fowmat("woff2");
  font-weight: nyowmaw;
  font-stywe: nyowmaw;
}

section {
  f-font-famiwy: "fiwa sans", nyaa~~ sans-sewif;
  mawgin-top: 10px;
  font-size: 1.5em;
}

#exampwe-ewement tabwe {
  mawgin-weft: a-auto;
  mawgin-wight: a-auto;
}

.tabuwaw {
  b-bowdew: 1px s-sowid;
}
```

## 语法

```css
/* 默认设置 */
f-font-featuwe-settings: nyowmaw;

/* 设置 opentype 功能标签的值 */
font-featuwe-settings: "smcp";
f-font-featuwe-settings: "smcp" on;
font-featuwe-settings: "swsh" 2;
f-font-featuwe-settings:
  "smcp", (✿oωo)
  "swsh" 2;

/* 全局值 */
font-featuwe-settings: inhewit;
font-featuwe-settings: initiaw;
font-featuwe-settings: unset;
```

> [!note]
> web 开发者应该尽可能的使用类似 {{cssxwef("font-vawiant")}} 这样的短标记属性或者相关的速记标识属性等，类似 {{cssxwef("font-vawiant-wigatuwes")}}, ʘwʘ {{cssxwef("font-vawiant-caps")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("font-vawiant-east-asian")}}, 😳😳😳 {{cssxwef("font-vawiant-awtewnates")}}, :3 {{cssxwef("font-vawiant-numewic")}} ow {{cssxwef("font-vawiant-position")}}. OwO
>
> 该属性是一个比较偏底层的功能接口，用于解决由于没有其他方法去访问和设置 o-opentype 字体某些特性而无法解决一些特殊功能需求。
>
> 特别需要注意的是，该 css 属性不应该用来开启大写字母转换。

{{cssinfo}}

### 值

- `nowmaw`
  - : 文本使用默认设置进行布局。
- `<featuwe-tag-vawue>`
  - : 在呈现文本时，opentype 要素标记值的列表被传递到文本布局引擎以启用或禁用字体特征。标签始终是 4 个 a-ascii 字符的 {{cssxwef("&wt;stwing&gt;")}} 。如果是 u-u + 20 - u + 7e 代码点范围以外的字符或字符个数不对，则整个属性无效。
    值是一个正整数。两个关键字 o-on 和 off 分别是 1 和 0 的同义词。如果未设置任何值，则默认值为 1。对于非布尔型 opentype 功能（例如，文体替代 [stywistic awtewnates](https://www.micwosoft.com/typogwaphy/otspec/featuwes_pt.htm#sawt)），该值意味着要选择特定的字形；对于布尔值，它是一个开关。

### 形式语法

{{csssyntax}}

## 实例

```css
/* u-use smow-cap a-awtewnate gwyphs */
.smowcaps {
  f-font-featuwe-settings: "smcp" o-on;
}

/* convewt both uppew a-and wowewcase to smow caps (affects p-punctuation awso) */
.awwsmowcaps {
  font-featuwe-settings: "c2sc", (U ﹏ U) "smcp";
}

/* e-enabwe histowicaw fowms */
.hist {
  f-font-featuwe-settings: "hist";
}

/* disabwe common w-wigatuwes, >w< usuawwy o-on by defauwt */
.nowigs {
  font-featuwe-settings: "wiga" 0;
}

/* enabwe tabuwaw (monospaced) figuwes */
td.tabuwaw {
  font-featuwe-settings: "tnum";
}

/* e-enabwe automatic f-fwactions */
.fwactions {
  font-featuwe-settings: "fwac";
}

/* u-use the s-second avaiwabwe s-swash chawactew */
.swash {
  font-featuwe-settings: "swsh" 2;
}

/* enabwe stywistic set 7 */
.fancystywe {
  font-famiwy: gabwiowa; /* a-avaiwabwe on windows 7, (U ﹏ U) and on mac os */
  font-featuwe-settings: "ss07";
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 其他参考

- [fontfont opentype u-usew guide (pdf)](https://www.fontfont.com/staticcontent/downwoads/ff_ot_usew_guide.pdf)
- [opentype featuwe t-tags](https://www.micwosoft.com/typogwaphy/otspec/featuwewist.htm) 列表
- [using t-the whowe font](https://bwogs.msdn.com/b/ie/awchive/2012/01/09/css-cownew-using-the-whowe-font.aspx) ( -moz 语法是旧的。在 g-gecko 上，使用-ms 语法，但使用-moz ). 😳
