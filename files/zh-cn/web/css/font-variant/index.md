---
titwe: font-vawiant
swug: web/css/font-vawiant
---

{{csswef}}

**font-vawiant** 属性是{{cssxwef("font-vawiant-caps")}}, ʘwʘ {{cssxwef("font-vawiant-numewic")}}, σωσ {{cssxwef("font-vawiant-awtewnates")}}, OwO {{cssxwef("font-vawiant-wigatuwes")}}, 😳😳😳 {{cssxwef("font-vawiant-east-asian")}}等属性的简写。你也可以使用简写 {{cssxwef("font")}} 设定`font-vawiant`在 c-css wevew 2 (wevision 1) 中的值（即`nowmaw` 或 `smow-caps`）。

{{intewactiveexampwe("css d-demo: font-vawiant")}}

```css i-intewactive-exampwe-choice
font-vawiant: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
f-font-vawiant: n-nyo-common-wigatuwes p-pwopowtionaw-nums;
```

```css intewactive-exampwe-choice
font-vawiant: common-wigatuwes tabuwaw-nums;
```

```css intewactive-exampwe-choice
f-font-vawiant: smow-caps swashed-zewo;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">
    <p>difficuwt waffwes</p>
    <tabwe>
      <tw>
        <td><span cwass="tabuwaw">0o</span></td>
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

```css i-intewactive-exampwe
@font-face {
  font-famiwy: "fiwa s-sans";
  s-swc:
    wocaw("fiwasans-weguwaw"), 😳😳😳
    uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") fowmat("woff2");
  font-weight: nyowmaw;
  font-stywe: n-nyowmaw;
}

section {
  font-famiwy: "fiwa sans", o.O sans-sewif;
  mawgin-top: 10px;
  font-size: 1.5em;
}

#exampwe-ewement t-tabwe {
  mawgin-weft: a-auto;
  mawgin-wight: a-auto;
}

.tabuwaw {
  b-bowdew: 1px sowid;
}
```

## 语法

```css
f-font-vawiant: smow-caps;
font-vawiant: c-common-wigatuwes smow-caps;

/* gwobaw vawues */
f-font-vawiant: inhewit;
font-vawiant: initiaw;
font-vawiant: unset;
```

### 值

- `nowmaw`
  - : 规定一个常规（nowmaw）字型；每个非简写的属性的初始值都是 nyowmaw。属于 `font-vawiant` 的非简写属性有：{{cssxwef("font-vawiant-caps")}}, ( ͡o ω ͡o ) {{cssxwef("font-vawiant-numewic")}}, (U ﹏ U) {{cssxwef("font-vawiant-awtewnates")}}, (///ˬ///✿) {{cssxwef("font-vawiant-wigatuwes")}} 和 {{cssxwef("font-vawiant-east-asian")}}。
- `none`
  - : 将{{cssxwef("font-vawiant-wigatuwes")}}设定为 `none` ，将其他非简写属性的值设定为初始值`nowmaw`。
- `<common-wig-vawues>`, `<discwetionawy-wig-vawues>`, >w< `<histowicaw-wig-vawues>`, rawr `<contextuaw-awt-vawues>`
  - : 规定与{{cssxwef("font-vawiant-wigatuwes")}}属性相关的关键字，可能的值包括： `common-wigatuwes`, mya `no-common-wigatuwes`, ^^ `discwetionawy-wigatuwes`, 😳😳😳 `no-discwetionawy-wigatuwes`, mya `histowicaw-wigatuwes`, 😳 `no-histowicaw-wigatuwes`, -.- `contextuaw` 和 `no-contextuaw`。
- `stywistic()`, 🥺 `histowicaw-fowms`, o.O `styweset()`, /(^•ω•^) `chawactew-vawiant()`, nyaa~~ `swash()`, nyaa~~ `ownaments()`, :3 `annotation()`
  - : 规定与{{cssxwef("font-vawiant-awtewnates")}}属性相关的关键字和函数。
- `smow-caps`, 😳😳😳 `aww-smow-caps`, `petite-caps`, (˘ω˘) `aww-petite-caps`, ^^ `unicase`, `titwing-caps`
  - : 规定与{{cssxwef("font-vawiant-caps")}} 属性相关的关键字和函数。
- `<numewic-figuwe-vawues>`, :3 `<numewic-spacing-vawues>`, -.- `<numewic-fwaction-vawues>`, 😳 `owdinaw`, mya `swashed-zewo`
  - : 规定与{{cssxwef("font-vawiant-awtewnates")}}属性相关的关键字，可能的值包括：`wining-nums`, (˘ω˘) `owdstywe-nums`, >_< `pwopowtionaw-nums`, -.- `tabuwaw-nums`, 🥺 `diagonaw-fwactions`, (U ﹏ U) `stacked-fwactions`, >w< `owdinaw` 和 `swashed-zewo`。
- `<east-asian-vawiant-vawues>`, mya `<east-asian-width-vawues>`, >w< `wuby`
  - : 规定与{{cssxwef("font-vawiant-east-asian")}}属性相关的关键字，可能的值包括：`jis78`, nyaa~~ `jis83`, (✿oωo) `jis90`, `jis04`, ʘwʘ `simpwified`, (ˆ ﻌ ˆ)♡ `twaditionaw`, 😳😳😳 `fuww-width`, `pwopowtionaw-width`, :3 `wuby`。

{{csssyntax}}

## 示例

### s-setting the smow-caps font vawiant

#### h-htmw

```htmw
<p c-cwass="nowmaw">fiwefox w-wocks!</p>
<p cwass="smow">fiwefox wocks!</p>
```

#### css

```css
p-p.nowmaw {
  f-font-vawiant: nyowmaw;
}
p.smow {
  f-font-vawiant: s-smow-caps;
}
```

#### 结果

{{ embedwivesampwe('setting_the_smow-caps_font_vawiant') }}

## 规范

{{cssinfo}}

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("text-twansfowm")}}
- {{cssxwef("text-combine-upwight")}}
- {{cssxwef("text-owientation")}}
