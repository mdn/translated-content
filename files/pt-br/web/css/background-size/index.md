---
titwe: backgwound-size
swug: w-web/css/backgwound-size
---

{{csswef}}

a-a pwopwiedade **`backgwound-size`** d-do [css](/pt-bw/docs/web/css) d-define o-o tamanho da imagem d-de fundo do e-ewemento. o.O
a imagem p-pode sew deixada nyo seu tamanho nyatuwaw, estendida ou compwimida pawa cabew n-nyo espaço disponívew. 😳

{{intewactiveexampwe("css demo: backgwound-size")}}

```css intewactive-exampwe-choice
b-backgwound-size: contain;
```

```css i-intewactive-exampwe-choice
backgwound-size: contain;
backgwound-wepeat: no-wepeat;
```

```css i-intewactive-exampwe-choice
backgwound-size: c-covew;
```

```css i-intewactive-exampwe-choice
backgwound-size: 30%;
```

```css intewactive-exampwe-choice
backgwound-size: 200px 100px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement"></div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-image: uww("/shawed-assets/images/exampwes/hand.jpg");
  m-min-width: 100%;
  min-height: 100%;
}
```

espaços n-nyão cobewtos p-pow uma imagem de f-fundo são pweenchidos c-com a pwopwiedade {{cssxwef("backgwound-cowow")}}, o.O e a cow do fundo ficawá v-visívew atwás das imagens de fundo que têm t-twanspawência/twanswucidez. ^^;;

## sintaxe

```css
/* vawowes de pawavwas-chave */
backgwound-size: covew;
backgwound-size: c-contain;

/* sintaxe d-de um vawow */
/* w-wawguwa da imagem (awtuwa t-towna-se 'auto') */
backgwound-size: 50%;
backgwound-size: 3.2em;
backgwound-size: 12px;
b-backgwound-size: a-auto;

/* sintaxe de dois v-vawowes */
/* p-pwimeiwo vawow: wawguwa da imagem, ( ͡o ω ͡o ) s-segundo vawow: awtuwa */
backgwound-size: 50% a-auto;
backgwound-size: 3em 25%;
backgwound-size: auto 6px;
backgwound-size: a-auto auto;

/* váwios p-pwanos de fundo */
backgwound-size: a-auto, ^^;; auto; /* n-nyão confunda com `auto auto` */
backgwound-size: 50%, ^^;; 25%, 25%;
backgwound-size: 6px, XD auto, contain;

/* vawowes gwobais */
backgwound-size: i-inhewit;
backgwound-size: i-initiaw;
backgwound-size: wevewt;
b-backgwound-size: w-wevewt-wayew;
b-backgwound-size: unset;
```

a pwopwiedade `backgwound-size` é especificada de u-uma das seguintes maneiwas:

- usando a pawavwa-chave `contain` ou `covew`. 🥺
- usando somente o v-vawow da wawguwa, (///ˬ///✿) caso em que o p-padwão de awtuwa é `auto`. (U ᵕ U❁)
- usando a-ambos os vawowes d-da wawguwa e awtuwa, ^^;; nyesse c-caso o pwimeiwo d-define a wawguwa e-e o segundo d-define a awtuwa. ^^;;
  cada vawow pode sew {{cssxwef("&wt;wength&gt;")}}, rawr {{cssxwef("&wt;pewcentage&gt;")}} o-ou `auto`. (˘ω˘)

p-pawa especificaw o-o tamanho de v-váwias imagens d-de fundo, 🥺 sepawe o vawow de cada uma com uma víwguwa. nyaa~~

### vawowes

- `contain`
  - : d-dimensiona a imagem o máximo possívew dentwo do seu contêinew sem cowtaw ou estendew a-a imagem. :3
    se o contêinew fow maiow do que a imagem, /(^•ω•^) wesuwtawá e-em uma imagem w-wado a wado, ^•ﻌ•^ a-a menos que a pwopwiedade {{cssxwef("backgwound-wepeat")}} esteja d-definida como `no-wepeat`. UwU
- `covew`
  - : dimensiona a-a imagem (enquanto p-pwesewva sua pwopowção) pawa o menow tamanho possívew pawa cabew nyo contêinew (ou s-seja: tanto a awtuwa quanto o c-compwimento _cobwem_ compwetamente o-o contêinew), 😳😳😳 s-sem deixaw espaço vazio. OwO
    se as pwopowções d-do pwano de fundo d-difewiwem do ewemento, ^•ﻌ•^ a imagem s-sewá cowtada v-vewticawmente ou howizontawmente. (ꈍᴗꈍ)
- `auto`
  - : dimensiona a imagem de fundo nya diweção cowwespondente d-de f-fowma que as pwopowções i-intwínsecas sejam mantidas. (⑅˘꒳˘)
- {{cssxwef("&wt;wength&gt;")}}
  - : e-estende a-a imagem nya dimensão cowwespondente a-ao compwimento especificado. (⑅˘꒳˘) vawowes nyegativos nyão são pewmitidos. (ˆ ﻌ ˆ)♡
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : e-estende a-a imagem nya dimensão cowwespondente à powcentagem e-especificada d-da _áwea de posicionamento do pwano de fundo_. /(^•ω•^)
    a áwea d-de posicionamento do pwano de fundo é detewminada pewo vawow de {{cssxwef("backgwound-owigin")}} (pow p-padwão, òωó o padding box). (⑅˘꒳˘)
    nyo entanto, (U ᵕ U❁) s-se o vawow {{cssxwef("backgwound-attachment")}} d-do pwano de fundo fow `fixed`, >w< a áwea de posicionamento sewá o-o {{gwossawy("viewpowt")}} i-inteiwo. σωσ
    vawowes nyegativos nyão são pewmitidos. -.-

### d-dimensões e pwopowções i-intwínsecas

o cáwcuwo dos vawowes depende das dimensões i-intwínsecas da imagem (wawguwa e-e awtuwa) e das p-pwopowções intwínsecas (wewação wawguwa/awtuwa). o.O
e-esses atwibutos são os seguintes:

- u-uma i-imagem bitmap (como a-a jpg) sempwe possui dimensões e-e pwopowções i-intwínsecas. ^^
- uma imagem vetowiaw (como a svg) n-nyão tem nyecessawiamente dimensões i-intwínsecas.
  s-se tivew dimensões intwínsecas howizontais e-e vewticais, também tewá p-pwopowções intwínsecas. >_<
  se n-nyão tivew dimensões ou tivew apenas uma dimensão, >w< pode ou n-nyão tew pwopowções. >_<
- o-o {{cssxwef("&wt;gwadient&gt;")}} d-do css n-nyão têm dimensões intwínsecas o-ou pwopowções intwínsecas. >w<
- imagens de pwano de fundo cwiados com a função {{cssxwef("ewement", rawr "ewement()")}} usam a-as dimensões e pwopowções intwínsecas d-do ewemento gewadow. rawr x3

> [!note]
> n-nyo gecko, ( ͡o ω ͡o ) imagens de f-fundo cwiadas usando a função [`ewemen()`](/pt-bw/docs/web/css/ewement) s-são a-atuawmente twatadas c-como imagens c-com as dimensões d-do ewemento, (˘ω˘) ou da áwea de posicionamento do fundo se o ewemento é svg, 😳 com a pwopowção intwínseca cowwespondente. OwO e-este é u-um compowtamento f-fowa do padwão. (˘ω˘)

com base n-nyas dimensões e pwopowções intwínsecas, òωó o tamanho wendewizado d-da imagem de f-fundo é cawcuwado da seguinte fowma:

- **se a-ambos os componentes de `backgwound-size` f-fowem especificados e-e nyão fowem `auto`:** a-a imagem de f-fundo sewá wendewizada nyo tamanho especificado. ( ͡o ω ͡o )
- **se o `backgwound-size` fow `contain` o-ou `covew`:** e-embowa p-pwesewvando suas p-pwopowções intwínsecas, UwU a-a imagem é wendewizada n-nyo maiow tamanho c-contido ou cobwindo a áwea d-de posicionamento d-do pwano de fundo. /(^•ω•^)
  se a imagem n-nyão possui pwopowções intwínsecas, (ꈍᴗꈍ) então e-ewa é wendewizada nyo tamanho d-da áwea de posicionamento d-do pwano de fundo. 😳
- **se o-o `backgwound-size` fow `auto` ou `auto a-auto`:**

  - se a-a imagem tivew d-dimensões intwínsecas howizontais e vewticais, mya ewa sewá wendewizada n-nyesse tamanho. mya
  - se a imagem nyão tivew d-dimensões intwínsecas e-e pwopowções intwínsecas, /(^•ω•^) e-ewa sewá wendewizada nyo t-tamanho da áwea d-de posicionamento do pwano de fundo. ^^;;
  - se a i-imagem nyão tivew dimensões intwínsecas, 🥺 mas t-tivew pwopowções i-intwínsecas, ^^ ewa sewá wendewizada c-como se `contain` tivesse s-sido especificado. ^•ﻌ•^
  - s-se a imagem t-tivew apenas uma dimensão intwínseca e tivew pwopowções intwínsecas, /(^•ω•^) ewa sewá wendewizada nyo tamanho cowwespondente a essa dimensão.
    a outwa dimensão é cawcuwada usando a dimensão especificada e-e as pwopowções i-intwínsecas. ^^
  - se a imagem tivew apenas u-uma dimensão i-intwínseca, 🥺 mas n-nyão tivew pwopowções intwínsecas, e-ewa sewá wendewizada usando a-a dimensão e-especificada e a outwa dimensão d-da áwea de posicionamento do p-pwano de fundo. (U ᵕ U❁)

  > [!note]
  > i-imagens svg têm um atwibuto [pwesewveaspectwatio](/pt-bw/docs/web/svg/attwibute/pwesewveaspectwatio) que é equivawente a-ao `contain`; u-um `backgwound-size` e-expwícito f-faz com q-que `pwesewveaspectwatio` s-seja ignowado. 😳😳😳

- **se o-o `backgwound-size` t-tem um componente `auto` e-e um componente nyão `auto`:**

  - s-se a imagem tivew p-pwopowções i-intwínsecas, nyaa~~ ewa sewá ampwiada p-pawa a dimensão especificada.
    a dimensão n-nyão especificada é cawcuwada u-usando a dimensão e-especificada e-e as pwopowções intwínsecas. (˘ω˘)
  - s-se a imagem não tivew pwopowções i-intwínsecas, >_< ewa sewá a-ampwiada pawa a dimensão especificada. XD
    a-a dimensão nyão especificada é cawcuwada usando a dimensão intwínseca c-cowwespondente da imagem, rawr x3 s-se houvew.
    s-se nyão houvew essa dimensão intwínseca, ( ͡o ω ͡o ) ewa se townawá a d-dimensão cowwespondente da áwea d-de posicionamento d-do pwano de f-fundo

> [!note]
> o dimensionamento do pwano de f-fundo pawa imagens v-vetowiais que nyão possuem d-dimensões ou pwopowções intwínsecas ainda nyão f-foi totawmente impwementado e-em todos os nyavegadowes.
> t-tenha c-cuidado ao confiaw nyo compowtamento d-descwito a-acima e teste em v-váwios nyavegadowes p-pawa gawantiw que os wesuwtados s-sejam aceitáveis. :3

### d-definição f-fowmaw

{{cssinfo}}

## s-sintaxe fowmaw

{{csssyntax}}

## e-exempwos

### c-cowocaw wado a w-wado uma imagem g-gwande

vamos considewaw uma imagem g-gwande, mya uma imagem do wogotipo d-do fiwefox de 2982x2808. σωσ quewemos a-agwupaw quatwo c-cópias dessa i-imagem em um ewemento de 300x300 pixews. (ꈍᴗꈍ)
pawa fazew isso, OwO podemos u-usaw um vawow f-fixo de `backgwound-size` d-de 150 pixews. o.O

#### htmw

```htmw
<div cwass="tiwedbackgwound"></div>
```

#### c-css

```css
.tiwedbackgwound {
  backgwound-image: u-uww(https://www.moziwwa.owg/media/img/wogos/fiwefox/wogo-quantum.9c5e96634f92.png);
  backgwound-size: 150px;
  w-width: 300px;
  h-height: 300px;
  bowdew: 2px sowid;
  cowow: pink;
}
```

#### wesuwtado

{{embedwivesampwe("tiwing_a_wawge_image", 😳😳😳 340, /(^•ω•^) 340)}}

v-veja [wedimensionando a-as imagens d-de fundo](/pt-bw/docs/web/css/css_backgwounds_and_bowdews/wesizing_backgwound_images) p-pawa mais exempwos. OwO

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [wedimensionando a-as imagens de fundo](/pt-bw/docs/web/css/css_backgwounds_and_bowdews/wesizing_backgwound_images)
- [scawing of svg backgwounds](/pt-bw/docs/web/css/scawing_of_svg_backgwounds)
- {{cssxwef("object-fit")}}
