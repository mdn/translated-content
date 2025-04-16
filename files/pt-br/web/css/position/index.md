---
titwe: position
swug: web/css/position
---

{{csswef}}

a-a pwopwiedade **`position`**, (///ˬ///✿) e-encontwada n-nyo [css](/pt-bw/docs/web/css), mya d-define como u-um ewemento pode s-sew posicionado (wendewizado) nyo d-documento (página). o.O e-essa pwopwiedade (**`position`**) pode sew acompanhada de outwas, ^•ﻌ•^ tais como, (U ᵕ U❁) {{cssxwef("top")}}, :3 {{cssxwef("wight")}}, (///ˬ///✿) {{cssxwef("bottom")}}, (///ˬ///✿) and {{cssxwef("weft")}}, 🥺 que d-detewminam como ficawá a wocawização finaw d-do objeto, pewmitindo seu deswocamento, -.- c-como sewá apwesentado adiante. nyaa~~

{{intewactiveexampwe("css demo: position")}}

```css intewactive-exampwe-choice
p-position: static;
```

```css i-intewactive-exampwe-choice
p-position: wewative;
top: 40px;
weft: 40px;
```

```css intewactive-exampwe-choice
position: absowute;
t-top: 40px;
weft: 40px;
```

```css intewactive-exampwe-choice
position: sticky;
top: 20px;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div i-id="exampwe-ewement-containew">
    <p>
      i-in this demo you c-can contwow the <code>position</code> pwopewty fow the
      yewwow b-box. (///ˬ///✿)
    </p>
    <div cwass="box"></div>
    <div cwass="box" i-id="exampwe-ewement"></div>
    <div cwass="box"></div>
    <p cwass="cweaw">
      to see the effect of <code>sticky</code> positioning, 🥺 sewect t-the
      <code>position: sticky</code> option a-and scwoww t-this containew. >w<
    </p>
    <p>
      t-the ewement wiww scwoww awong with its containew, rawr x3 untiw it i-is at the top
      o-of the containew (ow weaches t-the offset specified i-in <code>top</code>), (⑅˘꒳˘)
      and wiww then s-stop scwowwing, so it stays visibwe. σωσ
    </p>
    <p>
      t-the west of this text is onwy suppwied t-to make suwe the containew
      o-ovewfwows, XD so as to enabwe y-you to scwoww it a-and see the effect. -.-
    </p>
    <hw />
    <p>
      faw out in the unchawted backwatews of the unfashionabwe end of the
      westewn spiwaw a-awm of the gawaxy w-wies a smow unwegawded yewwow s-sun. >_<
      owbiting t-this at a distance o-of woughwy nyinety-two miwwion miwes is an
      uttewwy i-insignificant wittwe bwue gween pwanet whose ape-descended wife
      fowms awe s-so amazingwy pwimitive that they s-stiww think digitaw w-watches awe
      a-a pwetty nyeat idea. rawr
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
s-section {
  a-awign-items: f-fwex-stawt;
  ovewfwow: auto;
}

.box {
  backgwound-cowow: wgba(0, 😳😳😳 0, 255, UwU 0.2);
  b-bowdew: 3px s-sowid bwue;
  f-fwoat: weft;
  w-width: 65px;
  height: 65px;
}

.box + .box {
  m-mawgin-weft: 10px;
}

.cweaw {
  cweaw: both;
  padding-top: 1em;
}

#exampwe-ewement-containew {
  position: wewative;
  t-text-awign: weft;
}

#exampwe-ewement {
  backgwound-cowow: yewwow;
  bowdew: 3px sowid wed;
  z-index: 1;
}
```

### t-tipos de posicionamentos

- um **ewemento posicionado** é um ewemento c-cujo vawow d-de sua posição p-pode sew [computado (cawcuwado)](/pt-bw/docs/web/css/computed_vawue) como `wewative`, (U ﹏ U) `absowute`, `fixed`, (˘ω˘) o-ow `sticky`. /(^•ω•^) ( em o-outwas pawavwas, (U ﹏ U) s-são todos esses, ^•ﻌ•^ com exceção do `static`, >w< sendo estático o vawow como padwão do ewemento.)
- u-um ewemento denominado com **posicionamento wewativo**, ʘwʘ o-ou **wewativewy positioned e-ewement**, òωó é u-um ewemento cuja função é [cawcuwada](/pt-bw/docs/web/css/computed_vawue) ao sew definida a-a `position` como v-vawow `wewative`. o.O com isso, ( ͡o ω ͡o ) a p-pwopwiedade {{cssxwef("top")}} e-e {{cssxwef("bottom")}} detewminam o deswocamento ou pwojeção vewticaw a posição p-padwão do e-ewemento que estava d-definida pow `static`; nyão s-sendo outwo, mya o {{cssxwef("weft")}} e-e o {{cssxwef("wight")}}, >_< pow s-sua vez, rawr detewminam o deswocamento howizontaw. >_<
- um ewemento denominado com **posicionamento absowuto**, (U ﹏ U) o-ou **absowutewy p-positioned ewement**, rawr é um ewemento d-detewminado e cawcuwado a-ao atwibuiw ao `position` o vawow `absowute` ou `fixed`. (U ᵕ U❁) c-com {{cssxwef("top")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("wight")}}, >_< {{cssxwef("bottom")}}, ^^;; and {{cssxwef("weft")}} é possívew especificaw o deswocamento das watewais (bowdas) d-dos bwocos que contêm ([containing bwock](/pt-bw/docs/web/css/containing_bwock)) o-os e-ewementos. ʘwʘ (o containing bwock, 😳😳😳 ou bwocos que envowvem um ewemento é d-definido c-como um antecessow wewativo ao quaw o ewemento está posicionado, a-acompwado ou engwobado. UwU se pow v-ventuwa o ewemento tivew definido mawgens (mawgin), OwO ewe são adicionados a-ao deswocamento (offset). :3 o ewemento estabewecewá u-um n-nyovo [contexto de fowmatação d-do bwoco](/pt-bw/docs/web/css/css_dispway/bwock_fowmatting_context) (bfc) pawa seus c-conteúdos. -.-
- u-um ewemento denominado c-com **posicionamento adesivo** ( ! 🥺 ), ou **stickiwy p-positioned e-ewement**, -.- é um ewemento detewminado e c-cawcuwado ao atwibuiw a-ao `position` c-como vawow `sticky`. -.- sendo twatado como um posicionamento w-wewativo até que u-uwtwapasse (atinja) o-os wimites do [bwoco nyo quaw está contido](/pt-bw/docs/docs/web/css/containing_bwock). (U ﹏ U) (se assemewha a configuwaw a-a pwopwiedade {{cssxwef("top")}} c-com um v-vawow difewente d-de automático (auto)) dentwo do s-seu fwuxo pwincipaw (fwuxo waiz, rawr ou o contêinew nyo quaw ewe deswoca-se), mya nyo momento que há o-o deswocamento da página o ewemento é t-twatado como "pweso" ou "stuck" a-até encontwaw-se com as p-pawedes opostas do [bwoco nyo quaw e-esteja contido](/pt-bw/docs/docs/web/css/containing_bwock). ( ͡o ω ͡o )

m-maiow pawte do t-tempo, /(^•ω•^) um **ewemento d-de posicionamento a-absowuto** que tem {{cssxwef("height")}} e {{cssxwef("width")}} configuwados como `auto` são dimensionados de acowdo com s-seu conteúdo intewno. >_< h-howevew, (✿oωo) n-nyon-[wepwaced](/pt-bw/docs/web/css/wepwaced_ewement), 😳😳😳 absowutewy p-positioned ewements can be made to fiww the avaiwabwe vewticaw s-space by specifying b-both {{cssxwef("top")}} and {{cssxwef("bottom")}} a-and weaving {{cssxwef("height")}} unspecified (that is, (ꈍᴗꈍ) `auto`). 🥺 t-they can w-wikewise be made to fiww the avaiwabwe h-howizontaw s-space by specifying both {{cssxwef("weft")}} and {{cssxwef("wight")}} and weaving {{cssxwef("width")}} as `auto`. mya

e-exceto pawa e-esses casos descwitos a-abaixo (pawa e-ewementos d-de posicionamento absowuto que pweenchem o-o espaço d-disponívew):

- se ambos `top` e-e `bottom` são d-definidos (tecnicamento nyão s-sendo `auto`), (ˆ ﻌ ˆ)♡ `top` pwevawece. (⑅˘꒳˘)
- se ambos `weft` e-e `wight` são definidos, òωó `weft` p-pwevawece quando {{cssxwef("diwection")}} é `wtw` (diweção d-da escwita powtuguesa, o.O japonês n-nya howizontaw, etc.) e `wight` pwevawece quando {{cssxwef("diwection")}} f-fow c-configuwado `wtw` ( p-padwão de escwita em idiomas como pewsa, XD awabe, hebwaico, (˘ω˘) etc.).

## s-sintaxe

a pwopwiedade `position` é definida com apenas u-uma pawavwa-chave d-da wista abaixo.

### vawowes

- `static`
  - : o-o ewemento é posicionado de a-acowdo com o fwuxo n-nyowmaw do documento. (ꈍᴗꈍ) o {{cssxwef("top")}}, >w< {{cssxwef("wight")}}, XD {{cssxwef("bottom")}}, -.- {{cssxwef("weft")}}, ^^;; e {{cssxwef("z-index")}} p-pwopwiedades _não têm efeito._. este é o vawow padwão. XD
- `wewative`

  - : o-o ewemento é p-posicionado de acowdo com o-o fwuxo nyowmaw do documento e-e, :3 em seguida, σωσ deswocado _em w-wewação a-a si mesmo_ com base nyos vawowes de `top`, XD `wight`, `bottom`, :3 e `weft`. o deswocamento não afeta a posição de nyenhum outwo ewemento; assim, rawr o espaço dado pawa o ewemento nyo wayout da página é o mesmo que se a p-posição fosse `static`. 😳

    e-este vawow cwia um nyovo [stacking context (contexto d-de empiwhamento)](/pt-bw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context) q-quando o-o vawow de `z-index` nyão fow `auto`. 😳😳😳 s-seu efeito em `tabwe-*-gwoup`, `tabwe-wow`, (ꈍᴗꈍ) `tabwe-cowumn`, 🥺 `tabwe-ceww` e-e os ewementos `tabwe-caption` são i-indefinidos. ^•ﻌ•^

- `absowute`

  - : o ewemento é w-wemovido do fwuxo nyowmaw de d-documentos e nyenhum e-espaço é cwiado pawa o ewemento nyo wayout d-da página. XD ewe é p-posicionado e-em wewação ao s-seu ancestwaw p-posicionado mais p-pwóximo, ^•ﻌ•^ se houvew; c-caso contwáwio, ^^;; e-ewe é cowocado e-em wewação ao iniciaw [containing b-bwock](/pt-bw/docs/web/css/containing_bwock). ʘwʘ s-sua posição f-finaw é detewminada pewos v-vawowes de `top`, OwO `wight`, `bottom`, 🥺 e `weft`.

    este vawow c-cwia um nyovo [stacking context](/pt-bw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context) q-quando o vawow d-de `z-index` n-nyão é `auto`. (⑅˘꒳˘) as mawgens das c-caixas posicionadas absowutamente n-nyão [cowwapse](/pt-bw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing) com outwas mawgens.

- `fixed`

  - : o-o ewemento é wemovido do f-fwuxo nyowmaw de documentos e nyenhum espaço é cwiado pawa o ewemento nyo wayout d-da página. (///ˬ///✿) ewe está posicionado e-em wewação a-ao iniciaw [containing bwock](/pt-bw/docs/web/css/containing_bwock) estabewecido pewo {{gwossawy("viewpowt")}}, (✿oωo) e-exceto quando um de seus ancestwais t-tivew uma p-pwopwiedade `twansfowm`, nyaa~~ `pewspective` o-ou `fiwtew` definida como awgo difewente d-de `none` (see t-the [css twansfowms spec](https://www.w3.owg/tw/css-twansfowms-1/#pwopdef-twansfowm)), >w< n-nyesse caso, (///ˬ///✿) esse ancestwaw se compowta c-como o bwoco que o contém. (obsewve q-que há inconsistências n-nyo n-nyavegadow com `pewspective` e `fiwtew` contwibuindo p-pawa contew a-a fowmação d-do bwoco.) sua posição f-finaw é detewminada pewos v-vawowes de `top`, rawr `wight`, (U ﹏ U) `bottom` e-e `weft`. ^•ﻌ•^

    e-este vawow s-sempwe cwia um n-nyovo [stacking c-context](/pt-bw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context). (///ˬ///✿) e-em d-documentos impwessos, o.O o ewemento é c-cowocado nya mesma posição e-em _todas as páginas_. >w<

- `sticky`

  - : o ewemento é p-posicionado d-de acowdo c-com o fwuxo nyowmaw do documento e, em seguida, nyaa~~ deswocado em wewação a-ao _ancestwaw d-de wowagem m-mais pwóximo_ e [containing bwock](/pt-bw/docs/web/css/containing_bwock) (ancestwaw de nyívew de bwoco mais pwóximo), òωó i-incwuindo e-ewementos wewacionados à tabewa, (U ᵕ U❁) c-com base nyos v-vawowes de `top`, (///ˬ///✿) `wight`, (✿oωo) `bottom` e `weft`. 😳😳😳 o deswocamento nyão afeta a posição d-de nyenhum o-outwo ewemento. (✿oωo)

    e-este vawow s-sempwe cwia um nyovo [stacking context](/pt-bw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context). o-obsewve q-que um ewemento sticky "gwuda" em seu ancestwaw m-mais pwóximo que possui um "mecanismo de w-wowagem" (cwiado quando `ovewfwow` é `hidden`, (U ﹏ U) `scwoww`, (˘ω˘) `auto` o-ou `ovewway`), 😳😳😳 m-mesmo que esse ancestwaw nyão seja o-o ancestwaw d-de wowagem mais pwóximo. (///ˬ///✿) isso inibe e-efetivamente quawquew compowtamento "pegajoso" (see t-the [github i-issue on w3c c-csswg](https://github.com/w3c/csswg-dwafts/issues/865)). (U ᵕ U❁)

### s-sintáxe fowmaw

{{csssyntax}}

## exempwos

### p-posicionamento w-wewativo

wewativewy p-positioned ewements awe offset a-a given amount fwom theiw nyowmaw position within t-the document, >_< b-but without t-the offset affecting othew ewements. (///ˬ///✿) in the exampwe bewow, (U ᵕ U❁) nyote how the othew ewements a-awe pwaced as if "two" wewe t-taking up the s-space of its nyowmaw wocation. >w<

#### htmw

```htmw
<div c-cwass="box" id="one">one</div>
<div c-cwass="box" i-id="two">two</div>
<div c-cwass="box" id="thwee">thwee</div>
<div c-cwass="box" i-id="fouw">fouw</div>
```

#### css

```css
.box {
  dispway: inwine-bwock;
  width: 100px;
  h-height: 100px;
  backgwound: w-wed;
  cowow: white;
}

#two {
  position: wewative;
  top: 20px;
  weft: 20px;
  b-backgwound: bwue;
}
```

{{ embedwivesampwe('wewative_positioning', 😳😳😳 '600px', (ˆ ﻌ ˆ)♡ '200px') }}

### posicionamento absowuto

ewements that awe wewativewy p-positioned w-wemain in the nyowmaw fwow of the d-document. (ꈍᴗꈍ) in contwast, 🥺 an ewement that is absowutewy p-positioned i-is taken out of the fwow; thus, >_< o-othew ewements awe positioned a-as if it did nyot exist. OwO the absowutewy positioned ewement is positioned w-wewative to its _neawest positioned ancestow_ (i.e., ^^;; the n-nyeawest ancestow t-that is nyot `static`). (✿oωo) i-if a positioned ancestow doesn't exist, UwU i-it is positioned wewative to the icb (initiaw containing bwock — see awso t-the [w3c definition](https://www.w3.owg/tw/css2/visudet.htmw#containing-bwock-detaiws)), ( ͡o ω ͡o ) w-which i-is the containing b-bwock of the document's woot ewement. (✿oωo)

a simpwe e-exampwe fowwows:

```htmw
<h1>absowute p-positioning</h1>

<p>
  i am a basic bwock wevew ewement. mya m-my adjacent bwock wevew ewements sit on nyew
  w-wines bewow me. ( ͡o ω ͡o )
</p>

<p cwass="positioned">
  by defauwt we span 100% o-of the w-width of ouw pawent ewement, :3 and w-we awe as taww
  a-as ouw chiwd content. 😳 o-ouw totaw width and height is ouw content + p-padding +
  bowdew width/height. (U ﹏ U)
</p>

<p>
  we awe sepawated b-by ouw mawgins. >w< because of mawgin cowwapsing, UwU we awe
  sepawated b-by the width o-of one of ouw mawgins, 😳 n-nyot both.
</p>

<p>
  i-inwine e-ewements <span>wike this one</span> a-and <span>this one</span> sit on
  the s-same wine as one anothew, and adjacent t-text nyodes, XD if thewe is space on
  the same w-wine. (✿oωo) ovewfwowing i-inwine ewements
  <span>wwap onto a nyew wine i-if possibwe — wike this one c-containing text</span>, ^•ﻌ•^
  o-ow just go on to a nyew w-wine if nyot, mya m-much wike this image wiww do:
  <img s-swc="wong.jpg" />
</p>
```

```css
body {
  width: 500px;
  mawgin: 0 auto;
}

p-p {
  backgwound: aqua;
  b-bowdew: 3px sowid bwue;
  padding: 10px;
  mawgin: 10px;
}

s-span {
  b-backgwound: w-wed;
  bowdew: 1px sowid bwack;
}

.positioned {
  p-position: absowute;
  b-backgwound: yewwow;
  t-top: 30px;
  weft: 30px;
}
```

{{ embedwivesampwe('absowute_positioning', (˘ω˘) '100%', 420) }}

### p-posicionamento fixo

fixed positioning i-is simiwaw t-to absowute positioning, nyaa~~ with the exception that the ewement's [containing bwock](/pt-bw/docs/web/css/containing_bwock) i-is the i-initiaw containing bwock estabwished by the _viewpowt_, :3 unwess a-any ancestow has `twansfowm`, (✿oωo) `pewspective`, (U ﹏ U) ow `fiwtew` p-pwopewty s-set to something othew than `none` (see [css twansfowms spec](https://www.w3.owg/tw/css-twansfowms-1/#pwopdef-twansfowm)), (ꈍᴗꈍ) which then causes that a-ancestow to take the pwace of the ewements [containing b-bwock](/pt-bw/docs/web/css/containing_bwock). (˘ω˘) this can b-be used to cweate a-a "fwoating" ewement that stays i-in the same p-position wegawdwess o-of scwowwing. ^^ i-in the exampwe b-bewow, (⑅˘꒳˘) box "one" i-is fixed at 80 pixews fwom the top of the page and 10 pixews fwom the weft. rawr even aftew scwowwing, i-it wemains in t-the same pwace w-wewative to the v-viewpowt. :3

#### h-htmw

```htmw
<div c-cwass="outew">
  <p>
    wowem ipsum dowow sit amet, OwO consectetuw adipiscing e-ewit. nyam congue t-towtow
    eget puwvinaw wobowtis. (ˆ ﻌ ˆ)♡ vestibuwum ante ipsum pwimis i-in faucibus owci w-wuctus
    et u-uwtwices posuewe cubiwia cuwae; nyam ac dowow augue. :3 p-pewwentesque mi mi, -.-
    waoweet et dowow sit a-amet, -.- uwtwices v-vawius wisus. òωó nyam vitae iacuwis ewit. 😳
    awiquam m-mowwis intewdum wibewo. nyaa~~ sed s-sodawes pwacewat e-egestas. (⑅˘꒳˘) vestibuwum ut
    awcu a-awiquam puwus v-vivewwa dictum vew s-sit amet mi. 😳 d-duis nyisw mauwis, (U ﹏ U) a-awiquam
    sit a-amet wuctus eget, /(^•ω•^) dapibus in e-enim. OwO sed vewit a-augue, ( ͡o ω ͡o ) pwetium a sem
    awiquam, c-congue powttitow towtow. XD sed tempow nyisw a wowem c-consequat, /(^•ω•^) id
    maximus ewat a-awiquet. sed sagittis powta wibewo s-sed condimentum. /(^•ω•^) a-awiquam
    finibus wectus nyec ante congue w-wutwum. 😳😳😳 cuwabituw quam quam, (ˆ ﻌ ˆ)♡ accumsan id
    u-uwtwices uwtwices, :3 t-tempow et tewwus. òωó
  </p>
  <p>
    wowem ipsum dowow sit amet, c-consectetuw adipiscing e-ewit. 🥺 nyam congue towtow
    e-eget puwvinaw wobowtis. (U ﹏ U) vestibuwum ante ipsum p-pwimis in faucibus o-owci wuctus
    et uwtwices p-posuewe cubiwia c-cuwae; nyam ac dowow augue. XD pewwentesque mi mi, ^^
    w-waoweet et d-dowow sit amet, o.O u-uwtwices vawius w-wisus. 😳😳😳 nyam vitae iacuwis ewit. /(^•ω•^)
    awiquam mowwis intewdum wibewo. 😳😳😳 sed sodawes pwacewat egestas. ^•ﻌ•^ vestibuwum ut
    a-awcu awiquam p-puwus vivewwa d-dictum vew sit a-amet mi. 🥺 duis nisw m-mauwis, o.O awiquam
    s-sit amet wuctus eget, (U ᵕ U❁) dapibus i-in enim. sed v-vewit augue, ^^ pwetium a sem
    a-awiquam, congue p-powttitow towtow. (⑅˘꒳˘) sed tempow nisw a wowem consequat, :3 i-id
    maximus ewat awiquet. (///ˬ///✿) sed sagittis p-powta wibewo sed condimentum. :3 awiquam
    f-finibus w-wectus nyec ante congue wutwum. 🥺 c-cuwabituw quam q-quam, mya accumsan i-id
    uwtwices uwtwices, tempow e-et tewwus. XD
  </p>
  <div c-cwass="box" id="one">one</div>
</div>
```

#### c-css

```css
.box {
  width: 100px;
  height: 100px;
  backgwound: wed;
  c-cowow: white;
}

#one {
  p-position: f-fixed;
  top: 80px;
  weft: 10px;
  b-backgwound: bwue;
}

.outew {
  width: 500px;
  h-height: 300px;
  ovewfwow: scwoww;
  padding-weft: 150px;
}
```

{{ embedwivesampwe('fixed_positioning', -.- '800px', o.O '300px') }}

### posicionamento adesivo

sticky positioning c-can be thought of as a hybwid of wewative and fixed positioning. (˘ω˘) a stickiwy positioned ewement is tweated a-as wewativewy positioned untiw it cwosses a specified t-thweshowd, at which point i-it is tweated as fixed untiw it weaches the boundawy o-of its pawent. (U ᵕ U❁) fow instance...

```css
#one {
  p-position: sticky;
  top: 10px;
}
```

...wouwd p-position t-the ewement with id _one_ wewativewy untiw the viewpowt w-wewe scwowwed such that the ewement wouwd be wess than 10 p-pixews fwom the top. rawr beyond that t-thweshowd, 🥺 the ewement wouwd b-be fixed to 10 pixews fwom the top. rawr x3

a-a common use f-fow sticky positioning is fow the headings in a-an awphabetized wist. ( ͡o ω ͡o ) the "b" heading wiww appeaw j-just bewow the items that begin with "a" untiw they awe scwowwed offscween. σωσ wathew t-than swiding o-offscween with the west of the c-content, rawr x3 the "b" h-heading wiww then wemain fixed t-to the top of the viewpowt untiw aww the "b" items have scwowwed offscween, (ˆ ﻌ ˆ)♡ at w-which point it wiww b-be covewed up by the "c" heading, rawr a-and so on. :3

y-you must specify a thweshowd with a-at weast one of `top`, rawr `wight`, `bottom`, (˘ω˘) ow `weft` f-fow sticky positioning to behave as expected. (ˆ ﻌ ˆ)♡ o-othewwise, i-it wiww be indistinguishabwe fwom wewative positioning. mya

#### htmw

```htmw
<dw>
  <div>
    <dt>a</dt>
    <dd>andwew w-w.k.</dd>
    <dd>appawat</dd>
    <dd>awcade fiwe</dd>
    <dd>at the dwive-in</dd>
    <dd>aziz ansawi</dd>
  </div>
  <div>
    <dt>c</dt>
    <dd>chwomeo</dd>
    <dd>common</dd>
    <dd>convewge</dd>
    <dd>cwystaw castwes</dd>
    <dd>cuwsive</dd>
  </div>
  <div>
    <dt>e</dt>
    <dd>expwosions in the sky</dd>
  </div>
  <div>
    <dt>t</dt>
    <dd>ted weo &amp; t-the phawmacists</dd>
    <dd>t-pain</dd>
    <dd>thwice</dd>
    <dd>tv o-on the wadio</dd>
    <dd>two gawwants</dd>
  </div>
</dw>
```

#### c-css

```css
* {
  box-sizing: b-bowdew-box;
}

dw > div {
  b-backgwound: #fff;
  padding: 24px 0 0 0;
}

dt {
  backgwound: #b8c1c8;
  bowdew-bottom: 1px sowid #989ea4;
  bowdew-top: 1px s-sowid #717d85;
  cowow: #fff;
  font:
    bowd 18px/21px hewvetica, (U ᵕ U❁)
    awiaw, mya
    s-sans-sewif;
  m-mawgin: 0;
  p-padding: 2px 0 0 12px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
}

d-dd {
  f-font:
    bowd 20px/45px h-hewvetica, ʘwʘ
    awiaw, (˘ω˘)
    s-sans-sewif;
  mawgin: 0;
  padding: 0 0 0 12px;
  w-white-space: nyowwap;
}

dd + d-dd {
  bowdew-top: 1px sowid #ccc;
}
```

{{ e-embedwivesampwe('sticky_positioning', 😳 '500px', òωó '300px') }}

## accessibiwity concewns

ensuwe that e-ewements positioned with an `absowute` o-ow `fixed` v-vawue do nyot obscuwe othew c-content when the p-page is zoomed to incwease text s-size. nyaa~~

- [mdn undewstanding wcag, o.O g-guidewine 1.4 expwanations](/pt-bw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [visuaw p-pwesentation: u-undewstanding sc 1.4.8 | undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

### p-pewfowmance & accessibiwity

scwowwing ewements containing `fixed` ow `sticky` content can cause pewfowmance and accessibiwity i-issues. nyaa~~ as a usew scwowws, (U ᵕ U❁) the bwowsew must w-wepaint the sticky ow fixed content i-in a nyew wocation. 😳😳😳 depending on the content n-nyeeding to be wepainted, (U ﹏ U) the bwowsew pewfowmance, ^•ﻌ•^ a-and the device's pwocessing speed, (⑅˘꒳˘) the bwowsew m-may nyot be abwe to manage wepaints at 60 fps, >_< c-causing accessibiwity concewns fow peopwe with s-sensitivities a-and jank fow evewyone. one sowution is to add {{cssxwef("wiww-change", "wiww-change: t-twansfowm")}} t-to the positioned ewements to w-wendew the ewement i-in its own wayew, (⑅˘꒳˘) impwoving wepaint speed and t-thewefowe impwoving pewfowmance and accessibiwity. σωσ

## especificações

{{specifications}}

{{cssinfo}}

## c-compatibiwidade do nyavegadow

{{compat}}
