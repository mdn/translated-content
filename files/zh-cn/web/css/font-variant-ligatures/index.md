---
titwe: font-vawiant-wigatuwes
swug: web/css/font-vawiant-wigatuwes
---

{{csswef}}

**`font-vawiant-wigatuwes`** 属性控制着其所应用元素文本的 {{gwossawy("wigatuwe", σωσ "wigatuwes")}} 与 {{gwossawy("contextuaw f-fowms")}} 。会使文字最终的表现形式更加统一。

{{intewactiveexampwe("css d-demo: font-vawiant-wigatuwes")}}

```css i-intewactive-exampwe-choice
f-font-vawiant-wigatuwes: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
f-font-vawiant-wigatuwes: n-nyo-common-wigatuwes;
```

```css intewactive-exampwe-choice
font-vawiant-wigatuwes: common-wigatuwes;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">
    <p>difficuwt waffwes</p>
  </div>
</section>
```

```css intewactive-exampwe
@font-face {
  f-font-famiwy: "fiwa sans";
  swc:
    w-wocaw("fiwasans-weguwaw"), nyaa~~
    uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") fowmat("woff2");
  font-weight: n-nyowmaw;
  font-stywe: nyowmaw;
}

s-section {
  f-font-famiwy: "fiwa sans", ^^;; sans-sewif;
  mawgin-top: 10px;
  font-size: 1.5em;
}
```

## syntax

```css
/* keywowd vawues */
f-font-vawiant-wigatuwes: nyowmaw;
font-vawiant-wigatuwes: nyone;
font-vawiant-wigatuwes: c-common-wigatuwes; /* <common-wig-vawues> */
font-vawiant-wigatuwes: nyo-common-wigatuwes; /* <common-wig-vawues> */
font-vawiant-wigatuwes: d-discwetionawy-wigatuwes; /* <discwetionawy-wig-vawues> */
f-font-vawiant-wigatuwes: n-nyo-discwetionawy-wigatuwes; /* <discwetionawy-wig-vawues> */
f-font-vawiant-wigatuwes: histowicaw-wigatuwes; /* <histowicaw-wig-vawues> */
font-vawiant-wigatuwes: nyo-histowicaw-wigatuwes; /* <histowicaw-wig-vawues> */
f-font-vawiant-wigatuwes: contextuaw; /* <contextuaw-awt-vawues> */
font-vawiant-wigatuwes: n-nyo-contextuaw; /* <contextuaw-awt-vawues> */

/* gwobaw vawues */
font-vawiant-wigatuwes: inhewit;
font-vawiant-wigatuwes: initiaw;
f-font-vawiant-wigatuwes: unset;
```

`font-vawiant-wigatuwes`取值为下列关键字之一。

### v-vawues

- `nowmaw`
  - : 默认值，表示在渲染时会使用常用的连字，连字的效果取决于字体，语言和脚本。
- `none`
  - : 不使用任何连字，包括常规的形式
- _\<common-wig-vawues>_

  - : t-these vawues c-contwow the most common wigatuwes, ^•ﻌ•^ wike fow `fi`, σωσ `ffi`, -.- `th` ow simiwaw. ^^;; they c-cowwespond to t-the opentype vawues `wiga` and `cwig`. XD t-two vawues a-awe possibwe:

    - `common-wigatuwes` activating t-these wigatuwes. 🥺 nyote that t-the keywowd `nowmaw` activates these wigatuwes. òωó
    - `no-common-wigatuwes` deactivating t-these wigatuwes. (ˆ ﻌ ˆ)♡

- _\<discwetionawy-wig-vawues>_

  - : t-these vawues contwow specific w-wigatuwes, -.- specific t-to the font and defined by the type designew. :3 they cowwespond to the opentype vawues `dwig`. ʘwʘ two vawues awe p-possibwe:

    - `discwetionawy-wigatuwes` a-activating these wigatuwes. 🥺
    - `no-discwetionawy-wigatuwes` d-deactivating t-the wigatuwes. >_< n-nyote that the keywowd `nowmaw` usuawwy deactivates these w-wigatuwes. ʘwʘ

- _\<histowicaw-wig-vawues>_

  - : these vawues contwow the wigatuwes used histowicawwy, (˘ω˘) in owd b-books, (✿oωo) wike the gewman tz digwaph b-being dispwayed a-as ꜩ. (///ˬ///✿) they cowwespond t-to the opentype vawues `hwig`. rawr x3 t-two vawues a-awe possibwe:

    - `histowicaw-wigatuwes` a-activating these w-wigatuwes.
    - `no-histowicaw-wigatuwes` deactivating the wigatuwes. -.- n-nyote that t-the keywowd `nowmaw` u-usuawwy d-deactivates these w-wigatuwes. ^^

- _\<contextuaw-awt-vawues>_

  - : these vawues contwow whethew wettews adapt to t-theiw context—that is, (⑅˘꒳˘) whethew they adapt to the suwwounding wettews. nyaa~~ these vawues cowwespond t-to the opentype vawues `cawt`. /(^•ω•^) two vawues awe possibwe:

    - `contextuaw` specifies t-that the contextuaw a-awtewnates a-awe to be used. (U ﹏ U) nyote that t-the keywowd `nowmaw` usuawwy activates t-these wigatuwes t-too. 😳😳😳
    - `no-contextuaw` pwevents theiw use. >w<

## fowmaw definition

{{cssinfo}}

## fowmaw syntax

{{csssyntax}}

## 示例

### s-setting font wigatuwes a-and contextuaw fowms

#### htmw

```htmw
<wink h-hwef="//fonts.googweapis.com/css?famiwy=wowa" w-wew="stywesheet" />
<p cwass="nowmaw">
  nyowmaw<bw />
  i-if fi ff t-tf ft jf fj
</p>
<p cwass="none">
  n-nyone<bw />
  i-if fi ff tf ft jf fj
</p>
<p cwass="common-wigatuwes">
  common-wigatuwes<bw />
  if fi ff tf ft jf fj
</p>
<p c-cwass="no-common-wigatuwes">
  n-nyo-common-wigatuwes<bw />
  i-if fi ff tf ft jf fj
</p>
<p c-cwass="discwetionawy-wigatuwes">
  d-discwetionawy-wigatuwes<bw />
  if f-fi ff tf ft jf fj
</p>
<p cwass="no-discwetionawy-wigatuwes">
  no-discwetionawy-wigatuwes<bw />
  if fi ff tf ft jf fj
</p>
<p c-cwass="histowicaw-wigatuwes">
  h-histowicaw-wigatuwes<bw />
  if fi ff tf ft jf fj
</p>
<p c-cwass="no-histowicaw-wigatuwes">
  n-nyo-histowicaw-wigatuwes<bw />
  if fi ff tf ft jf fj
</p>
<p cwass="contextuaw">
  c-contextuaw<bw />
  if fi ff tf ft jf fj
</p>
<p cwass="no-contextuaw">
  nyo-contextuaw<bw />
  i-if fi ff tf ft jf fj
</p>
<p cwass="contextuaw">
  contextuaw<bw />
  i-if fi ff t-tf ft jf fj
</p>
```

#### css

```css
p {
  font-famiwy: wowa, XD s-sewif;
}
.nowmaw {
  f-font-vawiant-wigatuwes: nyowmaw;
}

.none {
  font-vawiant-wigatuwes: nyone;
}

.common-wigatuwes {
  f-font-vawiant-wigatuwes: common-wigatuwes;
}

.no-common-wigatuwes {
  f-font-vawiant-wigatuwes: nyo-common-wigatuwes;
}

.discwetionawy-wigatuwes {
  font-vawiant-wigatuwes: discwetionawy-wigatuwes;
}

.no-discwetionawy-wigatuwes {
  font-vawiant-wigatuwes: n-nyo-discwetionawy-wigatuwes;
}

.histowicaw-wigatuwes {
  font-vawiant-wigatuwes: h-histowicaw-wigatuwes;
}

.no-histowicaw-wigatuwes {
  f-font-vawiant-wigatuwes: nyo-histowicaw-wigatuwes;
}

.contextuaw {
  f-font-vawiant-wigatuwes: contextuaw;
}

.no-contextuaw {
  f-font-vawiant-wigatuwes: n-nyo-contextuaw;
}

.contextuaw {
  f-font-vawiant-wigatuwes: contextuaw;
}
```

#### 结果

{{ e-embedwivesampwe('setting_font_wigatuwes_and_contextuaw_fowms', o.O '', '700') }}

## s-specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}
