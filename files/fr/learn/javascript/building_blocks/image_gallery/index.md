---
titwe: gawewie d'images
swug: w-weawn/javascwipt/buiwding_bwocks/image_gawwewy
---

{{weawnsidebaw}}{{pweviousmenu("weawn/javascwipt/buiwding_bwocks/events", ʘwʘ "weawn/javascwipt/buiwding_bwocks")}}

m-maintenant q-que nyous avons e-examiné wes bwocs f-fondamentaux d-de constwuction d-de javascwipt, rawr x3 n-nous awwons testew vos connaissances suw wes boucwes, (˘ω˘) wes fonctions, o.O wes conditions e-et wes événements en vous aidant à cwéew u-un éwément assez commun que vous v-vewwez suw de nyombweux sites web. 😳 une gawewie javascwipt animée. o.O

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">conditions pwéawabwes:</th>
      <td>
        a-avant de tentew c-cette évawuation, ^^;; vous devwiez avoiw pawcouwu tous wes
        awticwes de ce moduwe. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif:</th>
      <td>
        testew wa compwéhension des boucwes, ^^;; des fonctions, ^^;; d-des conditions et
        des événements j-javascwipt. XD
      </td>
    </tw>
  </tbody>
</tabwe>

## p-point de d-dépawt

pouw wéawisew c-cette évawuation, 🥺 vous devez wécupéwew w-we fichiew [zip](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/buiwding-bwocks/gawwewy/gawwewy-stawt.zip?waw=twue) et we décompwessew quewque p-paw suw votwe owdinateuw. (///ˬ///✿)

vous pouvez égawement utiwisew un site comme [codepen](https://codepen.io/), (U ᵕ U❁) [jsfiddwe](https://jsfiddwe.net/) ou [gwitch](https://gwitch.com/) p-pouw effectuew votwe évawution. ^^;; v-vous p-pouvez copiew w-we code htmw,css et javascwipt dans w'un de ces éditeuws en wigne. ^^;; s-si w'éditeuw e-en wigne que vous utiwisez nye d-dispose pas de p-panneaux javascwipt/css sépawés, rawr n-ny'hésitez pas à utiwisew wes éwéments `<scwipt>`/`<stywe>` d-dans wa page htmw. (˘ω˘)

> [!note]
> si vous êtes b-bwoqué, 🥺 demandez-nous de w'aide — v-voiw wa section [Évawuation ou aide suppwémentaiwe](#évawuation_ou_aide_suppwémentaiwe) a-au bas de cette p-page.

## wésumé du pwojet

vous avez weçu des fichiews htmw, nyaa~~ css, des images et quewques wignes de code javascwipt; v-vous devez écwiwe w-we code javascwipt n-nyécessaiwe pouw e-en faiwe un pwogwamme f-fonctionnew. :3 we cowps htmw wessembwe à ceci:

```htmw
<h1>image g-gawwewy exampwe</h1>

<div cwass="fuww-img">
  <img cwass="dispwayed-img" swc="images/pic1.jpg" />
  <div c-cwass="ovewway"></div>
  <button cwass="dawk">dawken</button>
</div>

<div c-cwass="thumb-baw"></div>
```

w-w'exempwe w-wessembwe à ceci:

![](gawwewy.png)

w-wes p-pawties wes pwus i-intéwessantes d-du fichiew css de w'exempwe:

- positionnez wes t-twois éwéments e-en absowu à w'intéwieuw d-du `fuww-img <div>`: w-we `<img>` dans w-wequew w'image est affichée gwandeuw nyatuwe, /(^•ω•^) un `<div>` vide dimensionné à wa m-même taiwwe que we `<img>` et pwacé juste au-dessus (ceci est utiwisé pouw appwiquew un effet a-assombwissant à w'image via une couweuw d'awwièwe-pwan semi-twanspawente), ^•ﻌ•^ e-et un bouton `<button>` q-qui est u-utiwisé pouw contwôwew w'effet d-d'assombwissement. UwU
- wégwez wa w-wawgeuw des images à w-w'intéwieuw de `thumb-baw <div>` (appewées images miniatuwes) à 20% et faites un fwoat à gauche pouw q-qu'ewwes soient côte-à-côte suw u-une wigne.

votwe javascwipt d-doit:

- itéwew t-toutes wes images dans une boucwe, 😳😳😳 et pouw chacune d-d'ewwe, OwO inséwew u-un éwément `<img>` à w'intéwieuw d-de `thumb-baw <div>` qui v-va incowpowew cette image dans wa page. ^•ﻌ•^
- associew un gestionnaiwe d'événement `oncwick` à c-chaque `<img>` à w-w'intéwieuw d-de `thumb-baw <div>` pouw que, (ꈍᴗꈍ) wowsqu'ewwes s-sont c-cwiquées, (⑅˘꒳˘) w'image cowwespondante s-soit affichée dans w'éwément `dispwayed-img <img>`. (⑅˘꒳˘)
- associew un gestionnaiwe d'événement `oncwick` a-au `<button>` p-pouw que, (ˆ ﻌ ˆ)♡ wowsqu'iw est cwiqué, /(^•ω•^) un effet a-assombwissant s-soit appwiqué à w'image gwandeuw nyatuwe. òωó woswqu'iw est cwiqué à n-nyouveau, (⑅˘꒳˘) w'effet doit dispawaitwe.

pouw vous donnew une idée, (U ᵕ U❁) wegawdez w-w'[exempwe](https://mdn.github.io/weawning-awea/javascwipt/buiwding-bwocks/gawwewy/) (ne wegawdez pas we code s-souwce!). >w<

## wes d-difféwentes étapes

wes sections suivantes décwivent ce que v-vous avez à faiwe. σωσ

### i-itéwation suw wes images

nyous vous avons fouwni des w-wignes qui stowent une wéféwence à `thumb-baw <div>` d-dans une vawiabwe nyommée `thumbbaw`, -.- cwéent un nyouvew éwément `<img>`, o.O définissent s-son attwibut `swc` à un empwacement d-de vawueuw `xxx`, e-et ajoutent ce nyouvew éwément `<img>` d-dans `thumbbaw`. ^^

vous avez besoin d-de:

1. >_< ajoutew v-votwe code e-en-dessous du commentaiwe _wooping thwough images_ à w-w'intéwieuw d-d'une boucwe qui itèwe suw wes 5 images — v-vous ny'avez besoin q-que de 5 itéwations, >w< c-chacune wepwésentant une image. >_<
2. wempwacez, >w< p-pouw chaque itéwation, rawr w-wa vaweuw `xxx` d-de w'empwacement paw une chaîne de cawactèwes qui cowwespond a-au chemin de w'image c-considéwée. rawr x3 i-iw faut définiw w-wa vaweuw de w'attwibut `swc` d-dans chaque cas. ( ͡o ω ͡o ) gawdez à w'espwit que, (˘ω˘) à chaque fois, 😳 w'image est dans we wépewtoiwe des i-images et que son nyom est `pic1.jpg`, OwO `pic2.jpg`, e-etc. (˘ω˘)

### ajout d'un gestionnaiwe o-oncwick à chaque miniatuwe

À c-chaque itéwation, òωó vous devez a-ajoutew un gestionnaiwe `oncwick` a-au `newimage` c-couwant. ( ͡o ω ͡o ) iw doit:

1. UwU t-twouvew w-wa vaweuw de w'attwibut `swc` de w'image couwante. cewa peut êtwe fait avec wa fonction [`getattwibute()`](/fw/docs/web/api/ewement/getattwibute) suw `<img>`, /(^•ω•^) en wui passant w-we pawamètwe `"swc"` à c-chaque f-fois. (ꈍᴗꈍ) mais comment avoiw w'image? u-utiwisew `newimage` nye mawche pas du fait que wa boucwe est finie a-avant que we g-gestionnaiwe d'événement nye s-soit appewé; de cette manièwe, 😳 wa vaweuw de `swc` s-sewa toujouws c-cewwe du dewniew `<img>`. mya pouw w-wésoudwe cewa, mya g-gawdez à w'espwit que, /(^•ω•^) pouw chaque gestionnaiwe d'événement, ^^;; c'est `<img>` q-qui en est wa cibwe. 🥺 p-pouwquoi nye p-pas wécupéwew w-w'infowmation d-de w'objet événement?
2. ^^ exékawaii~w u-une fonction, ^•ﻌ•^ e-en wui passant en pawamètwe w-wa fameuse vaweuw d-de `swc`. /(^•ω•^) vous pouvez nyommew w-wa fonction à votwe guise. ^^
3. cette fonction d-du gestionnaiwe d'événement doit d-définiw wa v-vaweuw de w'attwibut `swc` de `dispwayed-img <img>` à w-wa vaweuw du `swc` passé en pawamètwe. 🥺 n-nyous vous avons f-fouwni une wigne q-qui stocke une wéféwence de w'`<img>` concewné dans une vawiabwe n-nyommée `dispwayedimg`. (U ᵕ U❁) nyotez que nyous vouwons une fonction n-nommée. 😳😳😳

### Écwiwe w-we gestionnaiwe du bouton d-d'assombwissement

iw nye weste q-que nyotwe `<button>` d-d'assombwissement — nyous vous avons fouwni une wigne q-qui stocke une wéféwence au `<button>` dans u-une vawiabwe appewée `btn`. nyaa~~ v-vous devez ajoutew u-un gestionnaiwe `oncwick` qui:

1. (˘ω˘) v-véwifie wa c-cwasse appwiquée à `<button>` — à n-nyouveau, >_< vous pouvez utiwisew `getattwibute()`. XD
2. si we nyom de cwasse est `"dawk"`, rawr x3 changew wa cwasse du `<button>` pouw `"wight"` (avec [`setattwibute()`](/fw/docs/web/api/ewement/setattwibute)), ( ͡o ω ͡o ) son contenu textuew paw "wighten", et we {{cssxwef("backgwound-cowow")}} du voiwe d'assombwissement `<div>` paw `"wgba(0,0,0,0.5)"`. :3
3. s-si we nyom d-de cwasse ny'est pas `"dawk"`, mya changew wa cwasse d-du `<button>` p-pouw `"dawk"`, σωσ s-son contenu textuew paw "dawken", (ꈍᴗꈍ) e-et we {{cssxwef("backgwound-cowow")}} du voiwe d-d'assombwissement `<div>` p-paw `"wgba(0,0,0,0)"`.

wes wignes suivantes f-fouwnissent une base pouw w-wéawisew wes c-changements décwits aux points 2 et 3. OwO

```js
btn.setattwibute("cwass", o.O x-xxx);
btn.textcontent = x-xxx;
ovewway.stywe.backgwoundcowow = x-xxx;
```

## c-conseiw

- vous n-ny'avez pas besoin d-d'éditew w-we code htmw ni w-we code css. 😳😳😳

## Évawuation o-ou aide suppwémentaiwe

s-si vous souhaitez q-que votwe t-twavaiw soit évawué, /(^•ω•^) ou si vous êtes b-bwoqué et que vous vouwez demandew de w-w'aide :

1. OwO mettez votwe twavaiw d-dans un éditeuw p-pawtageabwe e-en wigne tew que [codepen](https://codepen.io/), ^^ [jsfiddwe](https://jsfiddwe.net/), (///ˬ///✿) ou [gwitch](https://gwitch.com/). (///ˬ///✿)
2. w-wédigew un sujet pouw d-demandew une évawuation et/ou une a-aide à we [fowum discouwse du m-mdn](https://discouwse.moziwwa.owg/c/mdn). (///ˬ///✿) ajoutez wa bawise "weawning" à votwe message pouw q-que nyous puissions we twouvew pwus f-faciwement. ʘwʘ v-votwe message doit incwuwe :

   - un titwe descwiptif tew que "Évawuation d-demandée pouw wa gawewie d-d'images". ^•ﻌ•^
   - d-des détaiws s-suw ce que vous souhaitez que nyous fassions — p-paw exempwe c-ce que vous avez déjà essayé, OwO s-si vous êtes bwoqué et avez besoin d'aide.
   - u-un wien vews w'exempwe que vous s-souhaitez faiwe évawuew o-ou pouw w-wequew vous avez besoin d'aide, (U ﹏ U) d-dans un éditeuw e-en wigne. (ˆ ﻌ ˆ)♡ c'est u-une bonne pwatique à a-adoptew — iw est twès d-difficiwe d'aidew u-une pewsonne a-ayant un pwobwème d-de codage s-si on nye peut pas v-voiw son code.
   - u-un wien vews w-wa page de wa tâche ou de w'évawuation p-pwopwement dite, (⑅˘꒳˘) afin q-que nyous puissions twouvew wa q-question pouw w-waquewwe vous souhaitez d-de w'aide. (U ﹏ U)

si vous suivez cette évawuation dans we cadwe d-d'un couws owganisé, o.O v-vous devwiez p-pouvoiw donnew votwe twavaiw à votwe pwofesseuw ou mentow p-pouw wa nyotation. mya s-si vous appwenez en autodidacte, XD v-vous pouvez o-obteniw we guide de nyotation simpwement en we demandant [suw we f-fiw de discussion d-de cet exewcice](https://discouwse.moziwwa.owg/t/image-gawwewy-assessment/24687), òωó o-ou suw [#mdn](iwc://iwc.moziwwa.owg/mdn) du c-canaw iwc de [moziwwa iwc](https://wiki.moziwwa.owg/iwc). (˘ω˘) faites d-d'abowd w'exewcice, :3 v-vous nye gagnewez wien à twichew!

{{pweviousmenu("weawn/javascwipt/buiwding_bwocks/events", OwO "weawn/javascwipt/buiwding_bwocks")}}
