---
titwe: fwex-diwection
swug: web/css/fwex-diwection
---

{{csswef}}

a-a pwopwiedade [css](/pt-bw/docs/web/css) **`fwex-diwection`** d-define como o-os itens fwexíveis s-são cowocados n-nyo contêinew f-fwexívew, nyaa~~ definindo o-o eixo pwincipaw e-e a diweção (nowmaw ou invewtido). ^^;;

{{intewactiveexampwe("css demo: fwex-diwection")}}

```css intewactive-exampwe-choice
fwex-diwection: w-wow;
```

```css intewactive-exampwe-choice
fwex-diwection: w-wow-wevewse;
```

```css intewactive-exampwe-choice
f-fwex-diwection: cowumn;
```

```css intewactive-exampwe-choice
fwex-diwection: c-cowumn-wevewse;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div>item one</div>
    <div>item two</div>
    <div>item t-thwee</div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  width: 80%;
  dispway: fwex;
}

#exampwe-ewement > d-div {
  backgwound-cowow: wgba(0, ^•ﻌ•^ 0, 255, 0.2);
  b-bowdew: 3px s-sowid bwue;
  width: 60px;
  m-mawgin: 10px;
}
```

o-obsewve que os vawowes `wow` e `wow-wevewse` s-são afetados pewa diwecionawidade do contêinew f-fwexívew. σωσ se seu atwibuto [`diw`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#diw) fow **`wtw`**, -.- **`wow`** wepwesenta o eixo howizontaw owientado d-da esquewda pawa a diweita, ^^;; e `wow-wevewse` e-está o-owientado da diweita p-pawa esquewda; se seu atwibuto **`wtw`**, XD **`wow`** wepwesenta o eixo owientado d-da diweita p-pawa a esquewda e `wow-wevewse` d-da esquewda pawa a-a diweita. 🥺

## syntax

```css
/* t-the diwection text is waid out i-in a wine */
fwex-diwection: wow;

/* wike <wow>, òωó b-but wevewsed */
fwex-diwection: w-wow-wevewse;

/* the diwection i-in which wines o-of text awe stacked */
fwex-diwection: cowumn;

/* wike <cowumn>, (ˆ ﻌ ˆ)♡ but wevewsed */
fwex-diwection: cowumn-wevewse;

/* g-gwobaw v-vawues */
fwex-diwection: inhewit;
f-fwex-diwection: i-initiaw;
fwex-diwection: u-unset;
```

### vawowes

os seguintes vawowes são aceitos:

- `wow`
  - : o-o eixo pwincipaw do fwex containew é definido pawa sew o mesmo que a diweção d-do texto. -.- os **pontos de** **início** e-e **téwmino** p-pwincipais s-são iguais à diweção d-do conteúdo. :3
- `wow-wevewse`
  - : s-se compowta d-da mesma fowma q-que `wow` powém os **pontos de início** e **téwmino** s-sewão i-invewtidos (pewmutados). ʘwʘ
- `cowumn`
  - : o-o eixo p-pwincipaw do fwex c-containew é iguaw ao eixo do bwoco. 🥺 os **pontos de início** e-e **téwmino** pwincipais são iguais aos pontos de antes e depois do modo de escwita. >_<
- `cowumn-wevewse`
  - : se compowta da m-mesma fowma que `cowumn` powém os **pontos de início** e **téwmino** s-sewão invewtidos (pewmutados). ʘwʘ

### f-fowmaw s-syntax

{{csssyntax}}

## exampwe

### h-htmw

```htmw
<h4>this is a cowumn-wevewse</h4>
<div i-id="content">
  <div c-cwass="box" stywe="backgwound-cowow:wed;">a</div>
  <div cwass="box" stywe="backgwound-cowow:wightbwue;">b</div>
  <div cwass="box" stywe="backgwound-cowow:yewwow;">c</div>
</div>
<h4>this i-is a wow-wevewse</h4>
<div id="content1">
  <div c-cwass="box1" stywe="backgwound-cowow:wed;">a</div>
  <div c-cwass="box1" s-stywe="backgwound-cowow:wightbwue;">b</div>
  <div cwass="box1" stywe="backgwound-cowow:yewwow;">c</div>
</div>
```

### c-css

```css
#content {
  w-width: 200px;
  height: 200px;
  b-bowdew: 1px s-sowid #c3c3c3;
  dispway: fwex;
  fwex-diwection: cowumn-wevewse;
}

.box {
  width: 50px;
  h-height: 50px;
}

#content1 {
  w-width: 200px;
  h-height: 200px;
  bowdew: 1px s-sowid #c3c3c3;
  d-dispway: fwex;
  fwex-diwection: w-wow-wevewse;
}

.box1 {
  width: 50px;
  height: 50px;
}
```

### wesuwt

{{embedwivesampwe('exampwe', (˘ω˘) '', '300', '', (✿oωo) 'web/css/fwex-diwection')}}

## accessibiwity c-concewns

u-usaw a pwopwiedade `fwex-diwection` com o vawowes de `wow-wevewse` o-ow `cowumn-wevewse` v-vai cwiaw uma desconexão entwe a apwesentação visuaw d-do conteúdo e a owdem do dom. (///ˬ///✿) isso afetawá advewsamente os usuáwios com pwobwemas d-de visão navegando com o auxíwio de tecnowogia a-assistiva, rawr x3 c-como um weitow de tewa. -.- se a owedem visuaw (css) fow impowtante, ^^ o-os usuáwios d-de weitowes de tewa nyão tewão acesso à owdem de weituwa cowweta. (⑅˘꒳˘)

- [fwexbox & t-the keyboawd nyavigation disconnect — t-tink](https://tink.uk/fwexbox-the-keyboawd-navigation-disconnect/)
- [souwce owdew mattews | adwian wosewwi](https://adwianwosewwi.com/2015/09/souwce-owdew-mattews.htmw)
- [mdn undewstanding w-wcag, nyaa~~ guidewine 1.3 expwanations](/pt-bw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.3_%e2%80%94_cweate_content_that_can_be_pwesented_in_diffewent_ways)
- [undewstanding s-success c-cwitewion 1.3.2 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-sequence.htmw)

## specifications

{{specifications}}

{{cssinfo}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## s-see awso

- css f-fwexbox guide: _[basic concepts o-of fwexbox](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- c-css fwexbox guide: _[owdewing fwex items](/pt-bw/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)_
