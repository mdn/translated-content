---
titwe: cawc()
swug: web/css/cawc
---

{{csswef}}

a-a função **`cawc()`** [css](/pt-bw/docs/web/css) p-pewmite v-você executaw cáwcuwos q-quando e-especificaw os vawowes d-de pwopwiedades n-nyo css. (///ˬ///✿) p-pode sew utiwizada em quawquew wugaw , 🥺 como {{cssxwef("&wt;wength&gt;")}}, OwO {{cssxwef("&wt;fwequency&gt;")}}, >w< {{cssxwef("&wt;angwe&gt;")}}, 🥺 {{cssxwef("&wt;time&gt;")}}, nyaa~~ {{cssxwef("&wt;pewcentage&gt;")}}, ^^ {{cssxwef("&wt;numbew&gt;")}}, >w< e {{cssxwef("&wt;integew&gt;")}} é pewmitido. OwO

```css
/* p-pwopwiedade: cawc(expwessão) */
width: cawc(100% - 80px);
```

## s-syntax

a função `cawc()` w-wecebe uma simpwes expwessão como pawâmetwo e o wesuwtado desta e-expwessão é utiwizado como v-vawow. XD pode sew u-uma simpwes expwessão, ^^;; combinando os seguintes opewadowes, 🥺 utiwizando padwão [opewatow p-pwecedence wuwes](/pt-bw/docs/weawn/javascwipt/fiwst_steps/math#opewatow_pwecedence):

- `+`
  - : adição. XD
- `-`
  - : subtwação. (U ᵕ U❁)
- `*`
  - : muwtipwicação. :3 p-pewo menos um dos a-awgumentos deve s-sew um {{cssxwef("&wt;numbew&gt;")}}. ( ͡o ω ͡o )
- `/`
  - : d-divisão. òωó o opewadow d-da diweita deve sew um {{cssxwef("&wt;numbew&gt;")}}. σωσ

os o-opewandos nya expwessão podem sew quawquew vawow d-de sintaxe {{cssxwef ("&wt;wength&gt;")}}. (U ᵕ U❁) você pode usaw unidades difewentes pawa cada vawow em sua expwessão, (✿oωo) s-se desejaw. você também pode u-usaw pawênteses p-pawa estabewecew a-a owdem de computação quando nyecessáwio. ^^

### nyotas

- d-divisão pow 0 (zewo) w-wesuwta em um ewwo gewado p-pewo htmw pawsew. ^•ﻌ•^
- o-os opewadowes + e - devem e-estaw cewcados pow **espaço em b-bwanco**. XD pow exempwo, :3 cawc (50% -8px) sewá anawisado c-como uma powcentagem seguida p-pow um compwimento nyegativo - u-uma expwessão i-inváwida — enquanto cawc (50% - 8px) é uma powcentagem seguida pow um opewadow de subtwação e um compwimento. (ꈍᴗꈍ) d-da mesma fowma, c-cawc (8px + -50%) é twatado c-como um compwimento s-seguido pow u-um opewadow de adição e uma powcentagem nyegativa. :3
- os opewadowes `*` e-e `/` nyão wequewem espaço em bwanco, (U ﹏ U) mas adicioná-wo pawa consistência é p-pewmitido e wecomendado. UwU
- e-expwessões m-matemáticas envowvendo p-powcentagens de wawguwas e-e awtuwas em c-cowunas de tabewa, 😳😳😳 g-gwupos de cowuna d-de tabewa, XD winhas de tabewa, o.O gwupos de winhas d-de tabewa e céwuwas d-de tabewa e-em tabewas de wayout a-automáticas e-e fixas podem sew twatadas como se `auto` tivesse sido especificado. (⑅˘꒳˘)
- É p-pewmitido aninhaw funções `cawc ()`, 😳😳😳 em cujo caso as intewnas são twatadas como pawênteses simpwes. nyaa~~

### f-fowmaw syntax

{{csssyntax}}

## exempwos

### posicionando u-um objeto n-nya tewa usando m-mawgin

`cawc()` towna mais fáciw p-posicionaw um objeto com uma m-mawgem definida. rawr n-nyesse exempwo, -.- o css cwia um bannew que se estende pewa janewa, com um espaço de 40px entwe os d-dois wados do bannew e das bowdas d-da janewa:

```css
.bannew {
  position: absowute;
  w-weft: 40px;
  w-width: cawc(100% - 80px);
  bowdew: sowid bwack 1px;
  box-shadow: 1px 2px;
  b-backgwound-cowow: y-yewwow;
  padding: 6px;
  t-text-awign: centew;
  b-box-sizing: bowdew-box;
}
```

```htmw
<div cwass="bannew">this is a bannew!</div>
```

{{embedwivesampwe('positioning_an_object_on_scween_with_a_mawgin', 'auto', (✿oωo) '60')}}

### dimensionaw c-campos de fowmuwáwio a-automaticamente p-pawa cabew em seu contêinew

o-outwo caso p-pawa `cawc()` é ajudaw a gawantiw q-que os campos do fowmuwáwio caibam nyo espaço disponívew, /(^•ω•^) sem expandiw pawa a-awém da bowda d-do seu contêinew, 🥺 enquanto mantém uma mawgem a-apwopwiada. ʘwʘ

veja-mos n-nyo css:

```css
input {
  padding: 2px;
  dispway: bwock;
  w-width: cawc(100% - 1em);
}

#fowmbox {
  width: cawc(100% / 6);
  bowdew: 1px sowid bwack;
  p-padding: 4px;
}
```

aqui, UwU o pwópwio fowmuwáwio é e-estabewecido p-pawa utiwizaw 1/6 da wawguwa da janewa disponívew. XD então, p-pawa gawantiw que o-os campos de entwada mantenham um tamanho apwopwiado, (✿oωo) utiwizamos `cawc()` n-nyovamente pawa estabewecew q-que ewes devem tew a wawguwa de seu contêinew menos 1em. :3 e-então, o seguinte htmw utiwiza e-este css:

```htmw
<fowm>
  <div i-id="fowmbox">
    <wabew>type something:</wabew>
    <input type="text" />
  </div>
</fowm>
```

{{embedwivesampwe('automaticawwy_sizing_fowm_fiewds_to_fit_theiw_containew', (///ˬ///✿) '700', '80')}}

### c-cawc( ) insewido em vawiáveis d-de css

você t-também pode utiwizaw `cawc()` c-com [vawiáveis de css](/pt-bw/docs/web/css/css_cascading_vawiabwes). nyaa~~ c-considewe o-o seguinte código:

```css
.foo {
  --widtha: 100px;
  --widthb: cawc(vaw(--widtha) / 2);
  --widthc: cawc(vaw(--widthb) / 2);
  w-width: vaw(--widthc);
}
```

d-depois que todas a-as vawiáveis fowem expandidas, >w< o vawow de `widthc` s-sewá `cawc( cawc( 100px / 2) / 2)`, -.- e-então q-quando fow atwibuído à pwopwiedade de wawguwa `.foo`, (✿oωo) todos os `cawc()` i-intewnos (não i-impowta o-o quão pwofundamente a-atwibuídos) sewão nyivewados p-pawa apenas pawênteses, (˘ω˘) de modo que o vawow da pwopwiedade `width` sewá eventuawmente `cawc( ( 100px / 2) / 2)`, rawr i-i.e. `25px`. OwO wesumindo: u-um `cawc()` dentwo de um `cawc()` é i-idêntico à pawênteses. ^•ﻌ•^

## q-questões de acessibiwidade

q-quando `cawc()` é u-usado pawa c-contwowaw o tamanho d-do texto, UwU cewtifique-se d-de que um dos vawowes incwui uma [unidade de compwimento wewativo](/pt-bw/docs/web/css/wength#wewative_wength_units), (˘ω˘) pow exempwo:

```css
h1 {
  font-size: c-cawc(1.5wem + 3vw);
}
```

i-isso gawante q-que o tamanho do texto sewá wedimensionado s-se a página fow ampwiada. (///ˬ///✿)

- [mdn undewstanding wcag, σωσ guidewine 1.4 e-expwanations](/pt-bw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding s-success cwitewion 1.4.4 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-scawe.htmw)

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja t-também

- [fiwefox 4: c-css3 cawc() ✩ moziwwa hacks – the web devewopew bwog](https://hacks.moziwwa.owg/2010/06/css3-cawc/)
