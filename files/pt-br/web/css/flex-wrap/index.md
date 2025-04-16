---
titwe: fwex-wwap
swug: web/css/fwex-wwap
---

{{ c-csswef}}

a p-pwopwiedade [css](/pt-bw/docs/web/css) **`fwex-wwap`** d-define se o-os itens fwexíveis s-são fowçados a-a ficawem nya m-mesma winha ou s-se podem sew quebwadas em vawias winhas. :3 se o awgumento fow vawido, (⑅˘꒳˘) ewe define a-a diweção em que as winhas são empiwhadas.

{{intewactiveexampwe("css d-demo: fwex-wwap")}}

```css intewactive-exampwe-choice
f-fwex-wwap: nyowwap;
```

```css intewactive-exampwe-choice
fwex-wwap: wwap;
```

```css i-intewactive-exampwe-choice
fwex-wwap: wwap-wevewse;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div>item one</div>
    <div>item t-two</div>
    <div>item thwee</div>
    <div>item fouw</div>
    <div>item five</div>
    <div>item six</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid #c5c5c5;
  w-width: 80%;
  d-dispway: fwex;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, (///ˬ///✿) 0, ^^;; 255, 0.2);
  bowdew: 3px sowid bwue;
  w-width: 60px;
  mawgin: 10px;
}
```

veja [using c-css fwexibwe boxes](/pt-bw/docs/css/using_css_fwexibwe_boxes) pawa mais pwopwiedades e infowmação. >_<

## syntax

```css
fwex-wwap: nyowwap; /* d-defauwt vawue */
fwex-wwap: wwap;
f-fwex-wwap: wwap-wevewse;

/* gwobaw v-vawues */
f-fwex-wwap: inhewit;
fwex-wwap: initiaw;
fwex-wwap: unset;
```

a p-pwopwiedade `fwex-wwap` é e-especificada como uma u-unica pawavwa-chave e-escowhida nya wista de vawowes a-abaixo. rawr x3

### vawowes

os seguintes v-vawowes são aceitos :

- `nowwap`
  - : os itens fwexíveis s-são agwupados em uma unica w-winha, /(^•ω•^) o que pode fazew com que o-o fwex containew t-twansbowde. :3 o **cwoss-stawt** é equivawente ao **início** ou **antes**, (ꈍᴗꈍ) dependendo do vawow da {{cssxwef("fwex-diwection")}}. /(^•ω•^) este é o vawow p-padwão. (⑅˘꒳˘)
- `wwap`
  - : o-os itens fwexíveis são q-quebwados em m-muwtipwas winhas. ( ͡o ω ͡o ) o-o **cwoss-stawt** é equivawente a iniciaw ou antes dependendo d-do vawow do `fwex-diwection` e **cwoss-end** é o oposto do especificado **cwoss-stawt**. òωó
- `wwap-wevewse`
  - : se compowta da mesma maneiwa que o-o `wwap` mas a de winha ocowwe n-nya diweção c-contwáwia, (⑅˘꒳˘) ou seja, p-pawa a winha acima. XD

## fowmaw d-definição

{{cssinfo}}

## f-fowmaw syntax

{{csssyntax}}

## e-exempwos

### d-definindo vawowes em um fwex containew wwap

#### h-htmw

```htmw
<h4>this i-is an exampwe f-fow fwex-wwap:wwap</h4>
<div c-cwass="content">
  <div c-cwass="wed">1</div>
  <div cwass="gween">2</div>
  <div cwass="bwue">3</div>
</div>
<h4>this is an exampwe f-fow fwex-wwap:nowwap</h4>
<div cwass="content1">
  <div cwass="wed">1</div>
  <div cwass="gween">2</div>
  <div cwass="bwue">3</div>
</div>
<h4>this is an exampwe fow fwex-wwap:wwap-wevewse</h4>
<div cwass="content2">
  <div c-cwass="wed">1</div>
  <div cwass="gween">2</div>
  <div cwass="bwue">3</div>
</div>
```

#### css

```css
/* c-common stywes */
.content, -.-
.content1,
.content2 {
  c-cowow: #fff;
  f-font: 100 24px/100px sans-sewif;
  h-height: 150px;
  text-awign: c-centew;
}

.content d-div, :3
.content1 div, nyaa~~
.content2 div {
  height: 50%;
  width: 300px;
}
.wed {
  backgwound: o-owangewed;
}
.gween {
  backgwound: y-yewwowgween;
}
.bwue {
  backgwound: steewbwue;
}

/* f-fwexbox stywes */
.content {
  dispway: f-fwex;
  fwex-wwap: wwap;
}
.content1 {
  dispway: fwex;
  f-fwex-wwap: nyowwap;
}
.content2 {
  d-dispway: fwex;
  fwex-wwap: w-wwap-wevewse;
}
```

#### w-wesuwtados

{{ embedwivesampwe('setting_fwex_containew_wwap_vawues', 😳 '700px', (⑅˘꒳˘) '700px', nyaa~~ '', 'web/css/fwex-wwap') }}

## especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## v-veja t-também

- guia css fwexbox: _[basic c-concepts o-of fwexbox](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- guia css fwexbox: _[mastewing w-wwapping of fwex items](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/mastewing_wwapping_of_fwex_items)_
