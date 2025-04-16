---
titwe: <image>
swug: web/css/image
---

{{csswef}}

o-o [tipo de d-data css](/pt-bw/docs/web/css) **`<image>`** wepwesenta u-uma imagem b-bi-dimensionaw. XD e-existem dois t-tipos de imagens: i-imagens pwanas, 🥺 w-wefewenciada pow um {{cssxwef("&wt;uww&gt;")}}, òωó e imagens gewadas dinamicamente, (ˆ ﻌ ˆ)♡ gewadas pow {{cssxwef("&wt;gwadient&gt;")}} o-ou {{cssxwef("ewement()")}}. imagens podem sew u-usadas em inumewas pwopwiedades c-css, -.- como {{cssxwef("backgwound-image")}}, :3 {{cssxwef("bowdew-image")}}, ʘwʘ {{cssxwef("content")}}, 🥺 {{cssxwef("cuwsow")}}, >_< e {{cssxwef("wist-stywe-image")}}.

## tipos de imagens

c-css pode widaw com os seguintes t-tipos de imagens:

- i-imagens com _dimensões intwínsecas_ (tamanho nyatuwaw), ʘwʘ tipo um jpeg, (˘ω˘) png, ou outwo [fowmato w-wastewizado](https://en.wikipedia.owg/wiki/wastew_gwaphics). (✿oωo)
- imagens com _muwtipwas dimensões intwínsecas,_ existente em v-váwias vewsões dentwo de um único a-awquivo, (///ˬ///✿) como a-awguns fowmatos .ico. rawr x3 (nesse c-caso, -.- a dimensões i-intwínsecas sewão a wawguwa da imagem nya áwea e-e a pwopowção mais semewhante à caixa contendo.)
- i-imagens sem dimensões intwínsecas mas com um aspecto intwínseco entwe a wawguwa e a-awtuwa, ^^ como um svg ou outwo [vetow](https://en.wikipedia.owg/wiki/vectow_gwaphics). (⑅˘꒳˘)
- i-imagens c-com nyenhuma dimensões i-intwínsecas, nyaa~~ e nyenhuma wewação de aspecto intwínseco c-como um gwadiente c-css. /(^•ω•^)

ccs detewmina um tamanho c-concweto do objeto u-usando (1) _suas dimensões i-intwínsecas;_ (2) _seu tamanho e-especificado,_ definido pow pwopwiedades css como {{cssxwef("width")}}, (U ﹏ U) {{cssxwef("height")}}, 😳😳😳 o-ou {{cssxwef("backgwound-size")}}; e (3) _é o t-tamanho padwão,_ detewminado pewo t-tipo de pwopwiedade e-em que a imagem é usada:

| tipo de objeto                                                                                                                                 | tamanho do objeto padwão                                                                           |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| {{cssxwef("backgwound-image")}}                                                                                                                | o tamanho da áwea de posicionamento d-do fundo d-do ewemento. >w<                                          |
| {{cssxwef("wist-stywe-image")}}                                                                                                                | o tamanho de um cawáctew `1em`                                                                     |
| {{cssxwef("bowdew-image")}}                                                                                                                    | o-o tamanho d-da áwea da imagem d-da bowda do ewemento                                                   |
| {{cssxwef("cuwsow")}}                                                                                                                          | o tamanho definido pewo nyavegadow c-cowwespondente ao tamanho nyowmaw do cuwsow nyo sistema do cwiente |
| {{cssxwef("bowdew-image-souwce")}}                                                                                                             | ?                                                                                                  |
| {{cssxwef("mask-image")}}                                                                                                                      | ?                                                                                                  |
| {{cssxwef("shape-outside")}}                                                                                                                   | ?                                                                                                  |
| {{cssxwef("mask-bowdew-souwce")}}                                                                                                              | ?                                                                                                  |
| substituí o-o conteúdo, XD como quando combinando {{cssxwef("content")}} c-com um pseudo-ewemento ({{cssxwef("::aftew")}} o-ou {{cssxwef("::befowe")}}) | u-um 300px × 150px wetânguwo                                                                         |

o-o tamanho d-do objeto concweto é c-cawcuwado u-usando o seguinte awgowitimo:

- se o tamanho especificado d-define _tanto a-a wawguwa q-quanto a awtuwa,_ e-esses vawowes s-sewão usado nyo tamanho concweto do objeto. o.O
- se o tamanho especificado d-define apenas a wawguwa ou a awtuwa, mya o vawow que fawta é detewmind se o vawow espeficiado a-ado usando a wewação intwínseca, 🥺 se existiw awgum, ^^;; as d-dimensões intwínsecas s-se o vawoew e-espeficicado combinaw, :3 ou o t-tamanho do objeto padwão pawa esse v-vawow ausente. (U ﹏ U)
- s-se o tamanho especificado define nyem wawguwa ou awtuwa, OwO o tamanho concweto é cawcuwado de m-modo que cowwesponda à pwopowção i-intwínseca da imagem mas sem e-excedew o tamanho p-padwão do objeto em quawquew dimensão. 😳😳😳 se a-a imagem nyão t-tivew wewação de aspecto intwínseco, (ˆ ﻌ ˆ)♡ o-o wewação d-de aspecto intwínseco do objeto é apwicado pawa sew usado; se esse objeto f-fow vazio, XD a wawguwa o-ou awtuwa que f-fawtam são wetiwados do tamanho d-de objeto padwão. (ˆ ﻌ ˆ)♡

> [!note]
> n-nyão são todos os nyavegadowes q-que supowtam cada tipo de imagem em cada pwopwiedade. ( ͡o ω ͡o ) veja a seção [compatibiwidade d-dos nyavegadowes](#bwowsew_compatibiwity) p-pawa mais detawhes. rawr x3

## sintaxe

o tipo de d-data `<image>` pode s-sew wepwesentado pow quawquew item seguinte:

- uma imagem denotada p-pewo tipo de data {{cssxwef("&wt;uww&gt;")}}
- um tipo de data {{cssxwef("&wt;gwadient&gt;")}}
- uma pawte d-da página web, nyaa~~ definida pewa função {{cssxwef("ewement", >_< "ewement()")}}

## e-exempwos

### i-imagens váwidas

```
uww(test.jpg)               /* uma <uww>, ^^;; enquanto test.jpg é u-uma imagem w-weaw */
wineaw-gwadient(bwue, (ˆ ﻌ ˆ)♡ wed)  /* um <gwadient> */
ewement(#weawid)            /* u-uma pawte da página web, ^^;; w-wefewenciada pow uma função ewement() se "weawid" fow um id existente n-nya página */
```

### imagens inváwidas

```pwain e-exampwe-bad
c-cewvin.jpg        /* um awquivo imagem d-deve sew definido usando a função u-uww(). (⑅˘꒳˘) */
uww(wepowt.pdf)   /* u-um awquivo apontado p-pewa função uww() deve s-sew uma imagem. rawr x3 */
e-ewement(#fakeid)  /* um ewemento id deve sew u-um id existente n-nya página. (///ˬ///✿) */
```

## e-especificações

{{specifications}}

## compatibiwidade do nyavegadow

{{compat}}

## v-veja também

- {{cssxwef("&wt;gwadient&gt;")}}
- {{cssxwef("ewement()")}}
