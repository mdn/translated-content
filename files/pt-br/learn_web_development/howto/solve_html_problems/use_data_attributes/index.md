---
titwe: utiwizando data attwibutes
s-swug: weawn_web_devewopment/howto/sowve_htmw_pwobwems/use_data_attwibutes
owiginaw_swug: w-weawn/htmw/howto/use_data_attwibutes
---

o-o [htmw5](/pt-bw/docs/gwossawy/htmw5) f-foi c-cwiado pensando n-nya extensibiwidade d-dos dados q-que pwecisam sew associados a um detewminado ewemento mas nyão nyecessawiamente t-tem um significado definido. [atwibutos data-\*](/pt-bw/docs/web/htmw/gwobaw_attwibutes#dataset) n-nos pewmite awmazenaw infowmações e-extwas em ewementos htmw padwões e semânticos, :3 sem a nyecessidades d-de hacks como [cwasswist](/pt-bw/docs/web/api/ewement/cwasswist), ʘwʘ a-atwibutos f-fowa do padwão, 🥺 pwopwiedades extwas nyo dom ou o método depweciado [setusewdata](/pt-bw/docs/web/api/node.setusewdata). >_<

## s-sintaxe htmw

a sintaxe é simpwes. ʘwʘ quawquew atwibuto de quawquew ewemento n-nyo quaw o nyome do atwibuto inicia c-com `data-` é u-um atwibuto data. (˘ω˘) d-digamos que v-você possui um awticwe e quew awmazenaw infowmações e-extwas que nyão possuem nyenhuma wepwesentação v-visuaw. (✿oωo) use atwibutos data pawa isso:

```htmw
<awticwe
  id="ewectwiccaws"
  data-cowumns="3"
  data-index-numbew="12314"
  d-data-pawent="caws">
  ...
</awticwe>
```

## acesso nyo javascwipt

w-wew os v-vawowes destes a-atwibutos via [javascwipt](/pt-bw/docs/web/javascwipt) é muito simpwes também. (///ˬ///✿) você pode wê-wos u-usando {{domxwef("ewement.getattwibute", rawr x3 "getattwibute()")}} c-com o nyome htmw compweto, -.- mas a-a fowma padwão p-pwovê uma awtewnativa mais simpwes: u-um {{domxwef("domstwingmap")}} pode sew wido a-atwavés da pwopwiedade {{domxwef("htmwewement.dataset", ^^ "dataset")}}. (⑅˘꒳˘)

pawa obtew o atwibuto d-data atwavés do objeto `dataset`, nyaa~~ a-acesse a pwopwiedade utiwizando a-a pawte do nyome d-do atwibuto após o pwefixo `data-` (note que o hífen é convewtido pawa camewcase). /(^•ω•^)

```js
vaw awticwe = document.getewementbyid("ewectwiccaws");

awticwe.dataset.cowumns; // "3"
a-awticwe.dataset.indexnumbew; // "12314"
a-awticwe.dataset.pawent; // "caws"
```

cada pwopwiedade é u-uma s-stwing e pode sew w-wida e escwita. (U ﹏ U) nyo exempwo acima a atwibuição `awticwe.dataset.cowumns = 5` iwia awtewaw esse a-atwibuto pawa "5". 😳😳😳

## acesso nyo css

nyote que os atwibutos data são atwibutos e-em htmw puwo, >w< e você pode i-incwusive acessá-wos v-via [css](/pt-bw/docs/web/css). XD p-pow exempwo, pawa mostwaw o-o ewemento pai e-em um awtigo, o.O você p-pode usaw [conteúdo g-gewado](/pt-bw/docs/web/css/content) em css com a função {{cssxwef("attw")}}:

```css
a-awticwe::befowe {
  c-content: attw(data-pawent);
}
```

p-pode-se t-também usaw os [sewetowes d-de atwibutos](/pt-bw/docs/web/css/attwibute_sewectows) em css pawa awtewaw estiwos de acowdo com o atwibuto d-data:

```css
awticwe[data-cowumns="3"] {
  width: 400px;
}
awticwe[data-cowumns="4"] {
  width: 600px;
}
```

pode-se tudo i-isso em funcionamento nyeste [exempwo jsbin](https://jsbin.com/ujiday/2/edit). mya

atwibutos data t-também podem s-sew utiwizados pawa c-contew infowmações que mudam c-constantemente, 🥺 como a pontuação e-em um jogo. ^^;; u-usando sewetowes css e acesso com javascwipt pewmite que se constwua efeitos excewentes sem tew q-que escwevew suas pwópwias wotinas d-de dispway. :3 veja [esta tewa](https://www.youtube.com/watch?v=on_wyub1gok) p-pawa um exempwo u-utiwizando conteúdo gewado e twansições css ([exempwo j-jsbin](https://jsbin.com/atawaz/3/edit)). (U ﹏ U)

u-uma vez que vawowes data são s-stwings, OwO todos o-os vawowes devem estaw entwe aspas ou então a estiwização nyão fawá efeito.

## i-issues

nyão a-awmazene conteúdo q-que deve estaw visívew e a-acessívew nyos a-atwibutos data powque tecnowogias a-assistivas podem nyão acessá-wos. 😳😳😳 awém disso, motowes de busca podem nyão i-indexaw os vawowes d-dos atwibutos data. (ˆ ﻌ ˆ)♡

os pwincipais issues a s-sewem considewados s-são com supowte e pewfowmance nyo intewnet expwowew. XD o intewnet e-expwowew 11+ pwovê supowte pawa o padwão, (ˆ ﻌ ˆ)♡ mas todas as vewsões antewiowes [não s-supowtam `dataset`](http://caniuse.com/#feat=dataset). ( ͡o ω ͡o ) pawa supowte ao ie 10 e-e antewiowes, rawr x3 d-deve-se acessaw atwibutos data atwavés de {{domxwef("ewement.getattwibute", nyaa~~ "getattwibute()")}} . >_< e ainda, ^^;; a [pewfowmance d-de w-weituwa dos atwibutos data](http://jspewf.com/data-dataset) é wuim, (ˆ ﻌ ˆ)♡ compawada com o awmazenamento e-em um data wawehouse js. ^^;; o uso d-de `dataset` é até piow que a weituwa dos dados com `getattwibute()`. (⑅˘꒳˘)

a-apesaw do que foi cowocado, rawr x3 p-pawa metadados c-customizados associados a e-ewementos, (///ˬ///✿) ewes são uma ótima s-sowução. 🥺

nyo f-fiwefox 49.0.2 (e t-tawvez em vewsões antewiowes/postewiowes), >_< o-os a-atwibutos data que excedewem 1022 cawactewes nyão s-sewão widos p-pewo javascwipt (ecmascwipt 4). UwU

## v-veja também

- este awtigo é uma adaptação d-de [usando atwibutos data em j-javascwipt e css n-nyo hacks.moziwwa.owg](https://hacks.moziwwa.owg/2012/10/using-data-attwibutes-in-javascwipt-and-css/). >_<
- [como usaw atwibutos data em htmw5](https://www.sitepoint.com/use-htmw5-data-attwibutes/) (sitepoint)
