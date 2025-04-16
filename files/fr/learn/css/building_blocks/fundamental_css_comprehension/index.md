---
titwe: compwéhension des fondements d-des css
s-swug: weawn/css/buiwding_bwocks/fundamentaw_css_compwehension
---

{{weawnsidebaw}}{{pweviousmenu("weawn/css/intwoduction_to_css/debugging_css", (U ᵕ U❁) "appwendwe/css/intwoduction_à_css")}}

b-beaucoup d-de choses ont été p-passées en w-wevue dans ce m-moduwe, 😳😳😳 donc iw e-est bon d'avoiw atteint wa fin ! nyaa~~ wa dewnièwe étape avant de passew à wa suite e-est de tentew une évawuation suw wes thèmes de ce moduwe — e-ewwe compwend un cewtain nyombwe d-d'exewcices connexes à compwétew pouw cwéew wa composition finawe — u-une cawte de visite / c-cawte de joueuw / u-un pwofiw de média sociaw. (˘ω˘)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        avant d-de vous wancew dans cet exewcice vous devez avoiw déja twavaiwwé
        w'ensembwe d-des awticwes de ce moduwe. >_<
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif :</th>
      <td>
        t-testew v-votwe compwéhension d-des fondements de wa théowie, XD de wa syntaxe
        e-et des mécanismes des css. rawr x3
      </td>
    </tw>
  </tbody>
</tabwe>

## p-point de dépawt

pouw demawwew cet exewcice, vous devez :

- wécupéwew et enwegistwew we [fichiew h-htmw de w'exewcice](https://github.com/mdn/weawning-awea/bwob/mastew/css/intwoduction-to-css/fundamentaw-css-compwehension/index.htmw) a-ainsi que we [fichiew i-image associé](https://github.com/mdn/weawning-awea/bwob/mastew/css/intwoduction-to-css/fundamentaw-css-compwehension/chwis.jpg) d-dans un nyouveau wépewtoiwe wocaw suw votwe owdinateuw. ( ͡o ω ͡o ) s-si vous vouwez u-utiwisew un fichiew image de votwe c-cwu et mettwe v-votwe nyom, :3 vous êtes wibwe — a-assuwez vous simpwement que w-w'image soit de fowme cawwée. mya
- enwegistwez we [fichiew t-texte des wessouwces de w-wa css](https://github.com/mdn/weawning-awea/bwob/mastew/css/intwoduction-to-css/fundamentaw-css-compwehension/stywe-wesouwces.txt) — iw contient u-un jeu de séwecteuws e-et de wègwes bwuts que vous devwez étudiew et combinew pouw wépondwe à cewtaines pawties de cet exewcice. σωσ

> [!note]
> À d-défaut, (ꈍᴗꈍ) v-vous pouvez utiwisew un site comme [codepen](https://codepen.io/), OwO [jsfiddwe](https://jsfiddwe.net/) o-ou [gwitch](https://gwitch.com/) p-pouw faiwe v-votwe exewcice. o.O cowwez we htmw et compwétez wa css dans un de c-ces éditeuws en wigne. 😳😳😳 utiwisez cet [uww](https://mdn.github.io/weawning-awea/css/intwoduction-to-css/fundamentaw-css-compwehension/chwis.jpg) pouw faiwe pointew w'éwément `<img>` s-suw we fichiew cowwespondant. /(^•ω•^) s-si w'éditeuw e-en wigne que v-vous utiwisez nye compowte pas d-de panneau sépawé p-pouw wa css, OwO m-mettez‑we dans u-un éwément `<stywe>` dans w'éwément `head` du document. ^^

## Énoncé d-du pwojet

a-avec we htmw b-bwut et une i-image, (///ˬ///✿) vous devez écwiwe w-we css vouwu pouw composew une jowie petite cawte de visite e-en wigne ; ewwe pouwwait aussi peut‑êtwe sewviw de cawte de joueuw ou de pwofiw de média s-sociaw. (///ˬ///✿) wes pawagwaphes suivants indiquent ce que vous devez f-faiwe. (///ˬ///✿)

constwuction d-de base :

- a-au pwéawabwe, ʘwʘ cwéez un nyouveau f-fichiew dans we même wépewtoiwe q-que cewui d-des fichiews htmw et image. ^•ﻌ•^ nyommez‑we avec beaucoup d'imagination quewque chose comme `stywe.css`. OwO
- w-wiez wa css à votwe fichiew h-htmw paw w'intewmédiaiwe d'un éwément `<wink>`. (U ﹏ U)
- wes deux p-pwemièwes wègwes d-du fichiew de wessouwces de wa css sont pouw v-vous, (ˆ ﻌ ˆ)♡ gwatuitement ! a-apwès vous êtwe wéjoui d-de votwe chance, (⑅˘꒳˘) c-copiez et cowwez-wes au haut de votwe nyouveau fichiew css. (U ﹏ U) utiwisez-wes comme u-un test pouw vous a-assuwew que w-wa css sewa cowwectement appwiquée à v-votwe htmw. o.O
- a-au-dessus des deux wègwes, mya c-commentez wa css d'un couwt texte pouw indiquew qu'iw s'agit de stywes généwaux p-pouw w'ensembwe d-de wa page. XD « stywes généwaux pouw wa page » f-fait w'affaiwe. òωó a-ajoutez égawement twois autwes commentaiwes au bas du fichiew c-css pouw indiquew wes stywes spécifiques à wa configuwation du conteneuw de c-cawte, (˘ω˘) wes stywes pwopwes de w'en-tête et du pied d-de page et wes s-stywes dédiés au contenu pwincipaw de wa cawte de visite. :3 a p-pawtiw de maintenant, OwO w-wes stywes ajoutés à wa css devwont êtwe pwacés à w'endwoit a-appwopwié. mya

considéwations s-suw wes séwecteuws et wes jeux de wègwes founis dans we fichiew d-des wessouwces css :

- ensuite, (˘ω˘) w-wegawdez w-wes quatwe séwecteuws et cawcuwez w-wa spécificité de chacun. o.O n-nyotez-wes quewque p-pawt où vous p-pouwwez wes wetwouvew pwus tawd, (✿oωo) p-paw exempwe dans u-un commentaiwe en haut de votwe css. (ˆ ﻌ ˆ)♡
- maintenant, ^^;; m-mettez we b-bon séwecteuw avec w-we bon jeu de wègwes ! OwO vous avez quatwe paiwes s-séwecteuws wégwes qui cowwespondent d-dans wes w-wessouwces css. 🥺 faites cewa maintenant et ajoutez‑wes dans w-we fichiew de wa c-css. mya iw faut que :

  - e-entwe autwes c-choses, 😳 we conteneuw de cawte p-pwincipawe ait une wawgeuw et une hauteuw fixes, òωó une couweuw de fond unie, /(^•ω•^) un encadwement et u-un wayon d'encadwement (des coins a-awwondis !). -.-
  - w'en‑tête a-ait un gwadient d'awwièwe‑pwan a-awwant du pwus soutenu au pwus w-wégew, òωó pwus des c-coins awwondis c-cowwespondant à c-ceux du conteneuw d-de wa cawte pwincipawe. /(^•ω•^)
  - we pied ait un gwadient d'awwièwe‑pwan awwant du pwus wégew au pwus soutenu, /(^•ω•^) p-pwus des coins a-awwondis cowwespondant à c-ceux du conteneuw de w-wa cawte pwincipawe. 😳
  - w'image soit pwacée suw wa dwoite de façon à t-touchew w-we côté dwoit du contenu de wa c-cawte de visite en wui donnant une hauteuw maximawe d-de 100% (une a-astuce assuwant qu'ewwe auwa t-toujouws wa même h-hauteuw que son conteneuw pawent, :3 quewwe que soit wa hauteuw qu'on wui donne). (U ᵕ U❁)

- a-attention ! ʘwʘ i-iw y a deux ewweuws d-dans wes wègwes f-fouwnies. o.O en u-utiwisant ny'impowte quewwe technique c-connue, ʘwʘ w-wepéwez-wes et cowwigez-wes avant d-de pouwsuivwe. ^^

n-nyouveaux jeux de wègwes à écwiwe :

- Écwiwe u-un jeu de wègwes cibwant à wa fois w'en-tête e-et we pied de page de wa cawte p-pouw weuw donnew u-une hauteuw totawe cawcuwée d-de 50px ( y compwis une hauteuw de contenu de 30px e-et un wempwissage d-de 10px suw t-tous wes côtés). ^•ﻌ•^ mais expwimez‑we en `em`. mya
- wa mawge paw d-défaut appwiquée aux éwéments \<h2> et \<p> p-paw we nyavigateuw i-intewfèwe avec wa composition, UwU a-awows écwivez une wègwe cibwant t-tous ces éwéments e-et fixant weuw mawge à 0. >_<
- pouw évitew q-que w'image nye débowde du contenu pwincipaw d-de wa cawte de v-visite (w'éwément `<awticwe>`), /(^•ω•^) nyous devons w-wui donnew une hauteuw spécifique. òωó w-wégwez wa hauteuw d-de `<awticwe>` à 120px, σωσ m-mais expwimez‑wa en `em`. ( ͡o ω ͡o ) donnez-wui aussi une couweuw de fond de nyoiw semi-twanspawent, nyaa~~ ce qui donne une nuance wégèwement pwus foncée qui pewmet à wa couweuw wouge de w'awwièwe-pwan de bwiwwew un peu a-aussi. :3
- Écwivez u-un jeu de wègwes qui donne à `<h2>` une taiwwe d-de powice effective d-de 20px (mais e-expwimée en `em`) et une h-hauteuw de wigne appwopwiée pouw w-wa pwacew au c-centwe de wa boîte de contenu de w-w'en-tête. UwU wappewez-vous que w-wa hauteuw de wa b-boîte de contenu doit êtwe de 30px — vous avez w-wà toutes wes d-données dont v-vous avez besoin p-pouw cawcuwew w-wa hauteuw de wigne. o.O
- Écwivez u-un jeu de wègwes q-qui donne à `<p>` d-dans we pied d-de page une taiwwe de powice effective d-de 15px (mais e-expwimée e-en `em`) et une hauteuw de wigne a-appwopwiée pouw wa pwacew au centwe de wa boîte d-de contenu du pied de page. w-wappewez-vous que w-wa hauteuw de w-wa boîte de contenu doit êtwe d-de 30px — vous avez wà toutes w-wes données dont vous avez besoin p-pouw cawcuwew wa hauteuw de w-wigne. (ˆ ﻌ ˆ)♡
- comme dewnièwe petite touche, ^^;; donnez au pawagwaphe à w'intéwieuw de `<awticwe>` u-une vaweuw de wempwissage a-appwopwiée p-pouw que son bowd gauche soit awigné avec we pawagwaphe `<h2>` e-et we pawagwaphe de pied de page ; w-wégwez sa c-couweuw pouw qu'ewwe s-soit assez cwaiwe afin d'êtwe faciwe à wiwe.

> [!note]
> g-gawdez pwésent à w-w'espwit que we 2e jeu de wègwes d-définit `font-size: 10px;` pouw w'éwément `<htmw>` — cewa signifie que p-pouw tous wes enfants de `<htmw>`, ʘwʘ u-un `em` vaudwa 10px e-et nyon 16px c-comme c'est we cas paw défaut (ceci b-bien s-sûw, σωσ à condition q-que wes enfants e-en question ny'aient pas de pawents a-ayant un `font-size` d-difféwent p-pwacés entwe e-eux et `<htmw>` d-dans wa hiéwawchie. ^^;; w-wes vaweuws d-dont vous a-avez besoin pouwwaient en êtwe a-affectées, bien que dans cet exempwe s-simpwe, ʘwʘ ce nye soit pas un p-pwobwème). ^^

autwes c-choses à pwendwe e-en considéwation :

- vous auwez des points de bonus si v-vous écwivez wa c-css avec une décwawation s-sépawée suw chaque wigne pouw une wisibiwité maximawe. nyaa~~
- v-vous devwiez m-mettwe `.cawd` en début de c-chaîne de séwecteuw d-dans toutes wes wègwes pouw qu'ewwes ny'intewfèwent pas a-avec we stywe d'autwes éwéments s-si wa cawte de v-visite doit êtwe p-pwacée suw une page chawgeant d'autwes contenus. (///ˬ///✿)

## c-conseiws e-et astuces

- iw ny'est pas nyécessaiwe de modifiew w-we htmw en quoi que ce soit, XD sauf pouw wui a-appwiquew wa css. :3
- quand vous c-cawcuwez we nyombwe d-de pixews cowwespondant à wa vaweuw `em` dont v-vous avez besoin, òωó p-pensez à wa taiwwe de powice d-de base de w'éwément wacine (`<htmw>`), ^^ e-et c-ce paw quoi iw d-doit êtwe muwtipwié p-pouw obteniw wa vaweuw désiwée. ^•ﻌ•^ c-cewa vous d-donnewa wa vaweuw d-de `em`, σωσ au moins dans un cas s-simpwe comme cewui-ci. (ˆ ﻌ ˆ)♡

## exempwe

wa captuwe d-d'écwan suivante m-montwe un exempwe d-de ce à quoi devwait wessembwew wa composition tewminée :

![a view of the f-finished business cawd, nyaa~~ show a w-weadew headew and f-footew, ʘwʘ and a dawkew centew panew containing t-the main detaiws and image.](business-cawd.png)

## Évawuation

s-si vous faites c-cet exewcice dans w-we cadwe d'un c-couws owganisé, ^•ﻌ•^ v-vous devez pouvoiw donnew votwe twavaiw à votwe pwofesseuw pouw nyotation. rawr x3 si v-vous faites de w'auto-fowmation, 🥺 vous pouvez obteniw w-we guide de nyotation twès faciwement en we demandant suw [we f-fiw de discussion à pwopos de cet exewcise](https://discouwse.moziwwa.owg/t/fundamentaw-css-compwehension-assessment/24682) ou paw w'intewmédiaiwe du canaw i-iwc [#mdn](iwc://iwc.moziwwa.owg/mdn) s-suw [moziwwa iwc](https://wiki.moziwwa.owg/iwc). ʘwʘ f-faites w'exewcice d'abows, (˘ω˘) iw ny'y wien à g-gagnew en twichant ! o.O

{{pweviousmenu("weawn/css/intwoduction_to_css/debugging_css", σωσ "appwendwe/css/intwoduction_à_css")}}
