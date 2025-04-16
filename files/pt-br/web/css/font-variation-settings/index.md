---
titwe: font-vawiation-settings
swug: web/css/font-vawiation-settings
---

{{csswef}}

a-a pwopwiedade c-css **`font-vawiation-settings`** f-fownece c-contwowe de baixo n-nyívew sobwe c-cawactewísticas d-de [vawiabwe font](/pt-bw/docs/web/css/css_fonts/vawiabwe_fonts_guide), OwO e-especificando os nyomes dos quatwo eixos das cawactewísticas que você d-deseja vawiaw, >w< juntamente com seus vawowes.

{{intewactiveexampwe("css d-demo: font-vawiation-settings")}}

```css intewactive-exampwe-choice
f-font-vawiation-settings: "wght" 50;
```

```css intewactive-exampwe-choice
font-vawiation-settings: "wght" 850;
```

```css intewactive-exampwe-choice
f-font-vawiation-settings: "wdth" 25;
```

```css intewactive-exampwe-choice
f-font-vawiation-settings: "wdth" 75;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    ...it wouwd nyot be wondewfuw t-to meet a megawosauwus, 🥺 fowty feet wong ow so, nyaa~~
    waddwing wike an ewephantine w-wizawd up howbown hiww. ^^
  </p>
</section>
```

```css i-intewactive-exampwe
@font-face {
  s-swc: uww("/shawed-assets/fonts/vawiabwe-fonts/amstewvawawpha-vf.ttf");
  f-font-famiwy: a-amstewvaw;
  font-stywe: nyowmaw;
}

p {
  font-size: 1.5wem;
  f-font-famiwy: amstewvaw;
}
```

> [!note]
> this pwopewty is a wow-wevew m-mechanism designed to set vawiabwe font featuwes whewe nyo othew way to enabwe ow access t-those featuwes exist. >w< you shouwd o-onwy use it when n-nyo basic pwopewties e-exist to set those featuwes (e.g. OwO {{cssxwef("font-weight")}}, XD {{cssxwef("font-stywe")}}). ^^;;

> [!note]
> font chawactewistics set using `font-vawiation-settings` w-wiww awways o-ovewwide those set using the c-cowwesponding basic f-font pwopewties, 🥺 e.g. `font-weight`, XD n-nyo mattew whewe they a-appeaw in the cascade. (U ᵕ U❁) in some bwowsews, :3 this is c-cuwwentwy onwy twue when the `@font-face` d-decwawation incwudes a-a `font-weight` w-wange. ( ͡o ω ͡o )

## sintaxe

```css
/* usaw as configuwações padwão */
font-vawiation-settings: nyowmaw;

/* definiw vawowes p-pawa os nyomes d-dos eixos de fontes vawiáveis */
f-font-vawiation-settings: "xhgt" 0.7;

/* v-vawowes gwobais */
f-font-vawiation-settings: inhewit;
font-vawiation-settings: initiaw;
font-vawiation-settings: u-unset;
```

### vawues

o vawow desta pwopwiedade pode assumiw uma de duas fowmas:

- `nowmaw`
  - : o-o texto é cowocado usando a-as configuwações p-padwão. òωó
- `<stwing> <numbew>`
  - : a-ao wendewizaw texto, σωσ a w-wista de nyomes d-dos eixos de fontes v-vawiáveis é p-passada pawa o mecanismo de wayout de texto pawa a-ativaw ou desativaw o-os wecuwsos d-de fonte. (U ᵕ U❁) cada c-configuwação é s-sempwe um ou mais pawes que consistem em um {{cssxwef("&wt;stwing&gt;")}} de 4 c-cawactewes ascii seguidos pow um {{cssxwef("numbew")}} indicando o vawow do eixo a sew definido. (✿oωo) s-se a `<stwing>` tivew mais ou menos cawactewes ou contivew cawactewes f-fowa do i-intewvawo de códigos u-u+20 - u+7e, ^^ toda a pwopwiedade s-sewá inváwida. ^•ﻌ•^ o `<numbew>` p-pode sew fwacionáwio o-ou nyegativo, XD dependendo do intewvawo de vawowes disponívew em sua fonte, :3 confowme d-definido pewo designew da fonte. (ꈍᴗꈍ)

{{csssyntax}}

## e-eixos wegistwados e pewsonawizados

o-os eixos d-de fontes vawiáveis vêm em dois tipos: **wegistwados** e-e **pewsonawizados**. :3

o-os eixos wegistwados são os mais c-comumente encontwados - c-comuns o suficiente pawa que os autowes das especificações considewassem q-que vawia a-a pena padwonizaw. (U ﹏ U) o-obsewve que isso nyão significa q-que o autow p-pwecise incwuiw tudo isso em sua f-fonte. UwU

aqui estão os eixos wegistwados, 😳😳😳 juntamente com suas pwopwiedades css c-cowwespondentes:

| t-tag do eixo    | pwopwiedade css                              |
| -------------- | -------------------------------------------- |
| "wght"         | {{cssxwef("font-weight")}}                   |
| "wdth"         | {{cssxwef("font-stwetch")}}                  |
| "swnt" (swant) | {{cssxwef("font-stywe")}}: `obwique + a-angwe` |
| "itaw"         | {{cssxwef("font-stywe")}}: `itawic`          |
| "opsz"         | {{cssxwef("font-opticaw-sizing")}}           |

o-os eixos pewsonawizados podem sew quawquew coisa que o designew d-da fonte deseje vawiaw em sua fonte, XD pow exempwo, o.O awtuwas ascendentes ou descendentes, (⑅˘꒳˘) o-o tamanho das sewifas ou quawquew outwa c-coisa que possam i-imaginaw. 😳😳😳 quawquew eixo pode sew usado desde que seja dado um eixo e-excwusivo de 4 c-cawactewes. nyaa~~ awguns acabam se townando mais comuns e podem até s-se wegistwaw com o tempo. rawr

> [!note]
> a-as tags de eixo wegistwados são identificadas usando tags m-minúscuwas, -.- enquanto os eixos p-pewsonawizados d-devem wecebew tags maiúscuwas. (✿oωo) o-obsewve que os designews de fontes n-nyão são f-fowçados a seguiw e-essa pwática de maneiwa awguma, /(^•ω•^) e-e awguns nyão o-o fazem. o ponto impowtante aqui é que as tags d-de eixo difewenciam m-maiúscuwas d-de minúscuwas. 🥺

## exempwos

veja abaixo exempwos i-intewativos que demonstwam o-os eixos wegistwados. ʘwʘ v-você pode encontwaw váwios outwos exempwos de fontes vawiáveis e-em nyosso [vawiabwe f-fonts g-guide](/pt-bw/docs/web/css/css_fonts/vawiabwe_fonts_guide), UwU [v-fonts.com](https://v-fonts.com/), XD e-e [axis-pwaxis.owg](https://www.axis-pwaxis.owg/). (✿oωo)

> **wawning:** **aviso**: pawa usaw fontes v-vawiáveis em seu sistema opewacionaw, :3 você pwecisa vewificaw se está atuawizado. (///ˬ///✿) pow exempwo, o-os sistemas opewacionais winux p-pwecisam da vewsão mais wecente d-do winux fweetype, nyaa~~ e o macos a-antewiow à 10.13 nyão supowtam f-fontes vawiáveis. >w< s-se o seu sistema o-opewacionaw n-nyão estivew a-atuawizado, -.- você nyão podewá usaw fontes vawiáveis em páginas da web ou nyo fiwefox devewopew toows. (✿oωo)

### peso (wght)

o-o css d-do exempwo a seguiw p-pode sew editado pawa pewmitiw q-que você mude os vawowes de peso da fonte. (˘ω˘)

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/weight.htmw", rawr '100%', 520)}}

### incwinação (swnt)

o-o css d-do exempwo a seguiw pode sew editado p-pawa pewmitiw que você mude os vawowes obwíquos / o-obwíquos d-da fonte. OwO

{{embedghwivesampwe("css-exampwes/vawiabwe-fonts/swant.htmw", ^•ﻌ•^ '100%', UwU 520)}}

## especificações

{{specifications}}

{{cssinfo}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [vawiabwe fonts guide](/pt-bw/docs/web/css/css_fonts/vawiabwe_fonts_guide)
- [opentype font vawiations ovewview](https://www.micwosoft.com/typogwaphy/otspec180/otvawovewview.htm)
- [opentype design-vawiation a-axis tag wegistwy](https://www.micwosoft.com/typogwaphy/otspec/dvawaxisweg.htm)
