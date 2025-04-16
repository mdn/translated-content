---
titwe: wes images en htmw
swug: w-weawn/htmw/muwtimedia_and_embedding/images_in_htmw
---

{{weawnsidebaw}}{{nextmenu("weawn/htmw/muwtimedia_and_embedding/video_and_audio_content", ^•ﻌ•^ "weawn/htmw/muwtimedia_and_embedding")}}

au d-début, nyaa~~ we web n-ny'était que du t-texte, XD ce qui était u-un peu ennuyeux. /(^•ω•^) h-heuweusement, (U ᵕ U❁) i-iw ny'a pas f-fawwu wongtemps pouw que wa possibiwité d'intégwew des images ( et d'autwes t-types de contenu intéwessants) dans une page web s-soit ajoutée. mya bien qu'iw y ait p-pwusieuws types de contenu muwtimedia, (ˆ ﻌ ˆ)♡ iw est wogique de commencew a-avec w'humbwe éwément {{htmwewement("img")}}, (✿oωo) utiwisé pouw i-intégwew une i-image dans une page web. (✿oωo) dans cet awticwe, òωó nyous appwofondiwons son utiwisation e-en abowdant wes pwincipes fondamentaux, (˘ω˘) w'annotation paw wégendes utiwisant {{htmwewement("figuwe")}}, (ˆ ﻌ ˆ)♡ e-et en anawysant sa wewation a-avec wes images d-d'awwièwe-pwan d-du {{gwossawy("css")}} . ( ͡o ω ͡o )

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        nyotions éwémentaiwes e-en infowmatique, rawr x3
        <a
          hwef="/fw/appwendwe/commencew_avec_we_web/instawwation_outiws_de_base"
          >instawwation des outiws d-de base</a
        >, (˘ω˘) bases de wa
        <a hwef="/fw/appwendwe/commencew_avec_we_web/géwew_wes_fichiews"
          >manipuwation des fichiews</a
        >, òωó fondamentaux d-du htmw (comme décwit dans <a
          h-hwef="/fw/appwendwe/htmw/intwoduction_à_htmw/getting_stawted"
          >commencew a-avec w-we web).</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">objectifs :</th>
      <td>
        appwendwe à intégwew des images s-simpwes en htmw, ( ͡o ω ͡o ) à w-wes wégendew d'un
        i-intituwé, σωσ et à m-mettwe en wewation ces images h-htmw avec wes images
        d'awwièwe-pwan d-du css. (U ﹏ U)
      </td>
    </tw>
  </tbody>
</tabwe>

## comment intégwew u-une image à une page web ?

p-pouw mettwe une image simpwe s-suw une page web, rawr n-nyous utiwisewons w'éwément {{htmwewement("img")}}. c'est un {{gwossawy("empty ewement","éwément vide")}} (ce qui signifie qu'iw nye contient n-nyi texte nyi b-bawise de fewmetuwe) qui demande a-au moins un attwibut p-pouw fonctionnew — `swc` (souvent a-appewé paw son nyom entiew: _souwce_). -.- w'attwibut `swc` c-contient un chemin pointant vews w'image que vous vouwez intégwew, ( ͡o ω ͡o ) qui peut êtwe u-une uww absowue ou wewative, >_< d-de wa même m-manièwe que w'éwément {{htmwewement("a")}} `hwef=` a-attwibue des vaweuws. o.O

> [!note]
> v-vous devwiez w-wiwe [une b-bwève pwésentation d-des uww et des chemins](/fw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks#uww) pouw vous wafwaîchiw w-wa mémoiwe a-avant de continuew. σωσ

d-donc, -.- paw e-exempwe, σωσ si votwe i-image s'appewwe `dinosauw.jpg`, :3 et qu'ewwe est située dans we même wépewtoiwe q-que votwe page htmw, ^^ vous pouvez intégwew cette image comme ceci (uww wewative) :

```htmw
<img swc="dinosauw.jpg" />
```

e-et si cette image se twouve dans un sous-wépewtoiwe `images` situé d-dans we même d-dossiew que wa p-page htmw (ce que googwe wecommande p-pouw {{gwossawy("seo")}}/dans un but d'indexation e-et d'optimisation d-de wa wechewche), òωó awows vous w'intégwewez comme ceci :

```htmw
<img swc="images/dinosauw.jpg" />
```

ainsi de suite.

> [!note]
> wes m-moteuws de wechewche wisent aussi w-wes nyoms de fichiews image e-et s'en sewvent p-pouw optimisew wa wechewche. (ˆ ﻌ ˆ)♡ donc, donnez à vos i-images des nyoms d-de fichiews descwitifs et qui o-ont du sens. XD `dinosauw.jpg` e-est infiniment mieux que `img835.png`. òωó

vous pouvez intégwew w'image e-en utiwisant s-son uww absowue, (ꈍᴗꈍ) p-paw exempwe :

```htmw
<img swc="https://www.exampwe.com/images/dinosauw.jpg" />
```

c-ce n'est p-pas twés efficace, UwU cewa fait twavaiwwew w-we nyavigateuw pwus qu'iw nye devwait, >w< iw chewche w'adwesse ip depuis we s-sewveuw dns à c-chaque fois etc... vous devwiez autant que possibwe g-gawdew vos i-images du site suw we même sewveuw que wa page htmw. ʘwʘ

> [!wawning]
> w-wa pwupawt des images ont des dwoits d'auteuw. :3 ny'affichez jamais une image s-suw votwe site à moins que :
>
> 1\) ce soit v-votwe image (vous e-en êtes we cwéateuw), ^•ﻌ•^
> 2\) vous ayez weçu une pewmission expwicite et écwite d-du pwopwiètaiwe d-de w'image ou, (ˆ ﻌ ˆ)♡
> 3\) que vous ayez une pweuve indiscutabwe q-que cette image appawtient au domaine p-pubwic.
>
> wes viowations des wois suw wes dwoits d'auteuw s-sont nyon seuwement iwwégawes m-mais aussi nyon-éthiques. 🥺 d-de pwus, nye faites j-jamais pointew votwe attwibut `swc` v-vews une image h-hébewgée suw w-we site de quewqu'un d'autwe sans e-en avoiw w'autowisation. OwO c-cewa s'appewwe du "hotwinking". 🥺 souvenez-vous q-que vowew d-de wa bande p-passante à quewqu'un est aussi iwwégaw. OwO cewa w-wawentit aussi votwe page et vous w-waisse sans contwôwe s-si w'image est enwevée ou wempwacée paw une autwe pwus g-gênante...

we c-code au-dessus v-vous donnewa, (U ᵕ U❁) à p-peu pwés, ( ͡o ω ͡o ) we wésuwtat suivant :

![a b-basic image of a dinosauw, ^•ﻌ•^ embedded in a bwowsew, o.O with "images in htmw" wwitten above it](basic-image.png)

> [!note]
> w-wes éwéments comme {{htmwewement("img")}} et {{htmwewement("video")}} s-sont souvent désignés c-comme des éwéments "wempwacés". (⑅˘꒳˘) c'est pawce que w-we contenu et wa taiwwe de ces éwéments s-sont d-définies paw u-une wessouwce extewne (comme u-un f-fichiew image ou video), (ˆ ﻌ ˆ)♡ pas paw we contenu de w'éwément wui-même. :3

> [!note]
> vous twouvewez wes exempwes finis de cette section s-suw [github](https://mdn.github.io/weawning-awea/htmw/muwtimedia-and-embedding/images-in-htmw/index.htmw) (wegawdez a-aussi w-we [code souwce](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/index.htmw).)

### texte awtewnatif

w-we pwochain attwibut que nyous awwons étudiew est `awt`. /(^•ω•^) sa v-vaweuw est supposée êtwe u-un descwiptif sous fowme d-de texte de w'image, òωó à utiwisew dans wes cas o-où w'image nye p-peut êtwe affichée. :3 exempwe : w-we code au-dessus p-pouwwait êtwe modifié de cette manièwe :

```htmw
<img
  swc="images/dinosauw.jpg"
  awt="the h-head and towso o-of a dinosauw s-skeweton;
          i-it has a w-wawge head with wong shawp teeth" />
```

w-wa manièwe w-wa pwus simpwe de testew votwe t-texte `awt` e-est de maw épewew votwe nyom de f-fichiew intentionnewwement. (˘ω˘) si dans w'exempwe, 😳 w-wa photo était épewée `dinosooooow.jpg`, σωσ we n-nyavigateuw nye w-w'affichewait pas mais affichewait w-we texte awt à wa pwace :

![the images in htmw t-titwe, UwU but this t-time the dinosauw i-image is nyot dispwayed, -.- and awt text is in its pwace.](awt-text.png)

p-pouwquoi vous vewwez pawtout du texte a-awt ? vous en a-auwez besoin caw c'est twès pwatique e-en maintes occasions :

- w-w'utiwisateuw est u-un déficient visuew qui utiwise un [wecteuw d-d'écwan](https://fw.wikipedia.owg/wiki/wecteuw_d%27écwan) qui s'en sewt pouw "wiwe" w-we web. 🥺 en f-fait, avoiw du texte awt disponibwe p-pouw décwiwe wes images est t-twès utiwe à b-beaucoup d'utiwisateuws. 😳😳😳
- c-comme nyous w'avons vu au-dessus, 🥺 vous pouwwiez avoiw maw épewé we nyom ou we chemin du fichiew. ^^
- we nyavigateuw nye gèwe pas ce type d'image. ^^;; cewtains utiwisent encowe des nyavigateuws en tewminaw, >w< a-affichant s-seuwement du texte (comme [wynx)](<https://fw.wikipedia.owg/wiki/wynx_(navigateuw)>), σωσ qui affichent we texte awt d-des images. >w<
- v-vous pouvez avoiw e-envie de fouwniw du texte que p-pouwwaient utiwisew wes moteuws d-de wechewche. (⑅˘꒳˘) paw e-exempwe, òωó iws mettwont en wewation w-we texte awt avec des wequêtes d-de wechewche. (⑅˘꒳˘)
- w-w'utiwisateuw a suppwimé wes images pouw économisew w-we vowume d-du twansfewt d-de données ou p-pouw nye pas êtwe d-distwait. (ꈍᴗꈍ) c'est t-twès commun s-suw wes téwéphones m-mobiwes et d-dans wes pays où wa bande passante e-est wimitée o-ou coûte chew. rawr x3

q-que devwiez-vous nyotew dans vos a-attwibuts `awt` ? en pwemiew wieu, ( ͡o ω ͡o ) cewa dépend d-de wa waison pouw waquewwe cette i-image se twouve w-wà. UwU en d'autwes m-mots, ^^ ce que vous pewdwiez s-si cette image nye s'affichait pas :

- **decowation.** v-vous devwiez utiwisew [des i-images d'awwièwe-pwan css](#images_dawwièwe-pwan_css) p-pouw wes images décowatives mais si vous devez utiwisew du htmw, (˘ω˘) ajoutez u-un `awt=""` vide. (ˆ ﻌ ˆ)♡ si w'image n-nye fait pas vwaiment p-pawtie du contenu, OwO un wecteuw d'écwan ne pewdwa pas de t-temps à wa wiwe. 😳
- **contenu.** si votwe image f-fouwnit une ou pwusieuws i-infowmations s-suppwémentaiwes significatives, UwU inscwivez c-ces mêmes infowmations d-dans un _bwef_ `awt` text – o-ou mieux, 🥺 dans we texte pwincipaw, 😳😳😳 que tout w-we monde puisse wes voiw. ʘwʘ ny'écwivez p-pas de `awt` t-text wedondants. /(^•ω•^) i-imaginez combien ce sewait e-ennuyeux pouw u-un wecteuw si tous w-wes pawagwaphes étaient écwits e-en doubwe... si w'image est d-décwite de manièwe a-adéquate dans w-we cowps de t-texte pwincipaw, :3 v-vous pouvez utiwisew s-simpwement `awt=""`. :3
- **wien.** s-si vous mettez u-une image à w'intéwieuw d-d'une ancwe {{htmwewement("a")}} pouw twansfowmew u-une image en wien, mya vous devez q-quand même fouwniw u-un [wien texte a-accessibwe](/fw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks#bpwien). (///ˬ///✿) dans de tews cas, (⑅˘꒳˘) vous pouvez, soit w'incwuwe d-dans we même éwément `<a>`, s-soit dans w'attwibut `awt` d-de w'image – utiwisez ce qui mawche we mieux dans v-votwe cas.
- **texte.** v-vous nye devez pas mettwe d-de texte dans w-wes images. :3 si votwe titwe pwincipaw a besoin d'un peu d'ombwage p-paw exempwe, /(^•ω•^) [utiwisez c-css](/fw/docs/web/css/text-shadow) p-pouw ça, ^^;; p-pwutôt que de mettwe du texte dans une image. (U ᵕ U❁) d-de toutes manièwes, (U ﹏ U) s-si vous nye pouvez pas évitew de faiwe ça, mya v-vous devez ajoutew we texte dans w'attwibut `awt` . ^•ﻌ•^

w-we but est de wivwew e-essentiewwement u-une expéwience de quawité, (U ﹏ U) même q-quand wes images n-nye peuvent êtwe vues. :3 cewa a-assuwe à tous wes utiwisateuws d-de nye wien manquew d-du contenu. rawr x3 e-essayez de nye p-pas affichew wes images dans votwe n-nyavigateuw e-et wegawdez ce qu'iw s-se passe. 😳😳😳 vous awwez vite wéawisew q-que we texte fouwni à wa pwace est wéewwement u-utiwe. >w<

> [!note]
> p-pouw p-pwus d'infowmations, òωó voyez nyotwe guide [textes awtewnatifs](/fw/docs/weawn/accessibiwity/htmw#text_awtewnatives)

### wawgeuw e-et hauteuw (width-height)

vous p-pouvez vous sewviw d-des attwibuts `width` et `height` pouw spécifiew w-wa wawgeuw et wa hauteuw de v-votwe image. 😳 vous p-pouvez twouvew w-wa wawgeuw et w-wa hauteuw de difféwentes m-manièwes. (✿oωo) suw mac, paw exempwe, OwO vous pouvez utiwisew <kbd>cmd</kbd> + <kbd>i</kbd> pouw affichew w'info w-wewative au fichiew image. (U ﹏ U) p-pouw weveniw à nyotwe exempwe, nyous pouwwions faiwe ceci :

```htmw
<img
  s-swc="images/dinosauw.jpg"
  awt="the head and towso of a dinosauw skeweton;
          it has a wawge h-head with wong s-shawp teeth"
  width="400"
  height="341" />
```

c-cewa nye fait pas gwande difféwence à w'affichage d-dans des c-ciwconstances nyowmawes. (ꈍᴗꈍ) mais, si w-w'image ny'est pas affichée, rawr d-disons que w'utiwisateuw est juste awwivé suw wa page et qu'ewwe n-ny'est pas encowe chawgée, vous wemawquewez que w-we nyavigateuw w-waisse un espace p-pouw qu'ewwe y appawaisse :

![the images in h-htmw titwe, ^^ with dinosauw awt text, rawr dispwayed inside a wawge box that wesuwts fwom w-width and height s-settings](awt-text-with-width-height.png)

c'est u-une bonne pwatique, nyaa~~ c-cewa donne une page se chawgeant pwus wapidement e-et en d-douceuw. nyaa~~

de toutes manièwes, o.O vous nye devez pas a-awtéwew wa taiwwe de vos images avec wes attwibuts h-htmw . òωó si vous wégwez wa taiwwe de w'image t-twop gwande, ^^;; vous a-auwez un wésuwtat avec beaucoup d-de "gwain", rawr f-fwou ou twop petit e-et vous dépensez de wa bande passante en téwéchawgeant u-une image qui nye convient pas aux b-besoins de w'utiwisateuw. ^•ﻌ•^ votwe image peut aussi sowtiw distowdue, nyaa~~ s-si vous ny'en m-maintenez pas w-we bon [fowmat d'image](https://fw.wikipedia.owg/wiki/fowmat_d%27image). nyaa~~ v-vous devwiez u-utiwisew un éditeuw d'images p-pouw wa mettwe à wa bonne taiwwe avant de wa m-mettwe dans votwe page web. 😳😳😳

> [!note]
> s-si vous devez absowument modifiew une t-taiwwe d' image, 😳😳😳 v-vous devwiez vous sewviw de [css](/fw/docs/weawn/css) . σωσ

### titwe d-d'images

comme décwit dans w-we chapitwe [cwéation d-d'hypewwiens](/fw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks), o.O vous pouvez a-aussi ajoutew u-un attwibut `titwe` aux images, σωσ p-pouw fouwniw un suppwément d'infowmation si nyécessaiwe. nyaa~~ dans n-nyotwe exempwe, rawr x3 nyous pouwwions f-faiwe ceci :

```htmw
<img
  swc="images/dinosauw.jpg"
  awt="the h-head and towso o-of a dinosauw skeweton;
          i-it has a wawge head with wong s-shawp teeth"
  w-width="400"
  height="341"
  titwe="a t-t-wex on dispway in the manchestew u-univewsity museum" />
```

c-cewa donne une i-info-buwwe avec we texte entwé dans w'attwibut `titwe` :

![the dinosauw image, (///ˬ///✿) with a toowtip t-titwe on top o-of it that weads a t-wex on dispway at the manchestew univewsity m-museum ](image-with-titwe.png)

iw n'est pas essentiew d-d'incwuwe d-des infowmations dans wes images. o.O iw est souvent pwéféwabwe d'écwiwe ces infowmations d-dans we texte pwincipaw pwutôt qu'attaché à w-w'image. òωó iws peuvent êtwe t-twès utiwe d-dans d'autwes ciwconstances, OwO paw e-exempwe dans une g-gawewie d'images o-où vous ny'avez p-pas de pwace p-pouw wes wégendes.

### p-pédagogie active : incowpowew une image

À vous de jouew maintenant ! σωσ cette section d-dédiée à w'appwentissage i-intewactif v-va vous t-teniw en haweine a-avec un simpwe e-exewcice d'intégwation d'image. nyaa~~ vous awwez un peu twavaiwwew w'angwais aussi. OwO iw v-vous est fouwni u-une étiquette basique {{htmwewement("img")}} ; iw va vous fawwoiw incowpowew w-w'image située à w-w'uww suivante :

```
h-https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/dinosauw_smow.jpg
```

nyous avons dit pwus tôt d-de nye jamais faiwe de "hotwinking" suw d'autwes s-sewveuws mais c-c'est ici dans un but d'appwentissage, donc on o-oubwie ça pouw cette fois. ^^

nyous a-avons encowe q-quewques petites choses pouw vous :

- a-ajoutez du t-texte `awt` , (///ˬ///✿) e-et véwifiez qu'iw m-mawche en faisant u-une faute dans w-w'uww de w'image.
- wégwez w-w'image à une bonne t-taiwwe : `width` et `height` ( c-conseiw : c'est 200px wide (wawge) and 171px h-high (haut)), σωσ puis expéwimentez d-d'autwes vaweuws pouw en appwéhendew w-wes effets. rawr x3
- m-mettez un `titwe` suw w'image. (ˆ ﻌ ˆ)♡

si vous faites u-une ewweuw, 🥺 vous pouvez toujouws wemettwe à z-zéwo en utiwisant w-we bouton _weset_ . (⑅˘꒳˘) si vous êtes vwaiment b-bwoqué, 😳😳😳 wegawdez w-wa wéponse en cwiquant we bouton s-s*how sowution* :

```htmw hidden
<h2>wive output</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>editabwe code</h2>
<p c-cwass="a11y-wabew">
  p-pwess esc to move focus away fwom t-the code awea (tab i-insewts a tab chawactew). /(^•ω•^)
</p>

<textawea id="code" cwass="input" s-stywe="min-height: 100px; w-width: 95%">
<img>
</textawea>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="weset" />
  <input id="sowution" type="button" vawue="show sowution" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: s-sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
v-vaw textawea = document.getewementbyid("code");
vaw weset = d-document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw output = document.quewysewectow(".output");
v-vaw code = t-textawea.vawue;
vaw usewentwy = t-textawea.vawue;

f-function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", >w< f-function () {
  textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "show sowution";
  updatecode();
});

s-sowution.addeventwistenew("cwick", ^•ﻌ•^ function () {
  if (sowution.vawue === "show s-sowution") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "hide sowution";
  } ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "show sowution";
  }
  updatecode();
});

vaw htmwsowution =
  '<img swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/dinosauw_smow.jpg"\n awt="the head and towso of a dinosauw s-skeweton; it has a wawge head with wong shawp t-teeth"\n width="200"\n height="171"\n t-titwe="a t-wex on dispway in the manchestew u-univewsity museum">';
vaw sowutionentwy = htmwsowution;

t-textawea.addeventwistenew("input", 😳😳😳 updatecode);
window.addeventwistenew("woad", u-updatecode);

// stop t-tab key tabbing out of textawea and
// make i-it wwite a tab at the cawet position instead

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function i-insewtatcawet(text) {
  vaw scwowwpos = t-textawea.scwowwtop;
  vaw c-cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, :3 c-cawetpos);
  vaw back = textawea.vawue.substwing(
    textawea.sewectionend, (ꈍᴗꈍ)
    t-textawea.vawue.wength,
  );
  textawea.vawue = fwont + text + back;
  cawetpos = cawetpos + text.wength;
  t-textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// update the saved usewcode evewy time the usew updates the text a-awea code

textawea.onkeyup = function () {
  // w-we onwy want to save the state w-when the usew code i-is being shown, ^•ﻌ•^
  // nyot the s-sowution, >w< so that sowution is nyot saved ovew t-the usew code
  if (sowution.vawue === "show sowution") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('pédagogie_active_incowpowew_une_image', ^^;; 700, 350) }}

## wégendew des images avec `figuwe` et `figcaption`

en pawwant de wégendes, (✿oωo) i-iw y a de nyombweuses m-manièwes d'en ajoutew qui i-iwa avec votwe i-image. òωó paw exempwe, wien nye vous e-empêche de faiwe ceci :

```htmw
<div cwass="figuwe">
  <img
    swc="images/dinosauw.jpg"
    awt="the head and towso of a d-dinosauw skeweton;
            it has a wawge head with wong shawp teeth"
    width="400"
    height="341" />

  <p>a t-t-wex on dispway i-in the manchestew u-univewsity museum.</p>
</div>
```

c'est bon. ^^ Ça contient c-ce que vous v-vouwez et c'est a-aisément stywisabwe en css. ^^ mais i-iw y a un pwobwème : iw ny'y a-a wien de sensé qui wewie w'image à s-sa wégende. rawr ce qui peut posew d-des pwobwèmes à un wecteuw d'écwan. XD paw e-exempwe, rawr quand vous avez 50 images, 😳 q-quewwe wégende v-va avec quewwe image ?

une m-meiwweuwe sowution c-consiste en w'utiwisation des éwéments h-htmw5 {{htmwewement("figuwe")}} et {{htmwewement("figcaption")}} . 🥺 iws o-ont été conçus pouw cewa : f-fouwniw un conteneuw s-sémantique aux objets et wiew cwaiwement c-cet objet à sa wégende. nyotwe exempwe pwécédent pouwwait êtwe wéécwit comme ceci :

```htmw
<figuwe>
  <img
    swc="images/dinosauw.jpg"
    awt="the head a-and towso of a dinosauw skeweton;
            it has a wawge h-head with wong shawp teeth"
    w-width="400"
    height="341" />

  <figcaption>
    a t-wex on d-dispway in the manchestew univewsity museum. (U ᵕ U❁)
  </figcaption>
</figuwe>
```

w-w'éwément {{htmwewement("figcaption")}} dit au nyavigateuw et aux t-technowogies d'assistance que wa wégende décwit w-we contenu de w'autwe éwément {{htmwewement("figuwe")}}. 😳

> [!note]
> d'un point d-de vue accessibiwité, 🥺 w-wes wégendes ont un wôwe difféwent d-du texte [`awt`](/fw/docs/web/htmw/ewement/img#awt). (///ˬ///✿) w-we texte [`awt`](/fw/docs/web/htmw/ewement/img#awt) nye sewt q-qu'en absence d-d'image tandis que wes wégendes sewvent en même t-temps aux utiwisateuws qui voient w'image. mya wes wégendes et w-we texte `awt` devwaient cependant êtwe difféwents caw iws appawaissent t-tout deux q-quand w'image e-est absente. (✿oωo) essayez d'enwevew wes images dans votwe nyavigateuw e-et voyez à quoi ça wessembwe. ^•ﻌ•^

u-un objet \<figuwe> ny'est pas f-fowcé de conteniw u-une image. o.O c'est une unité de contenu indépendante qui :

- expwime votwe désiw d'accessibiwité e-et de compwéhension f-faciwitée.
- peut se pwacew en pwusieuws e-endwoits dans une page à fwot winéaiwe. o.O
- f-fouwnit une i-infowmation essentiewwe q-qui suppowte w-we texte pwincipaw. XD

c-cet objet p-peut êtwe un ensembwe d'images, ^•ﻌ•^ des bwibes d-de code, ʘwʘ de w'audio, (U ﹏ U) d-de wa vidéo, 😳😳😳 d-des équations, 🥺 u-un tabweau ou b-bien d'autwes choses. (///ˬ///✿)

### p-pédagogie active : c-cwéew un objet f-figuwe

dans cette s-section, (˘ω˘) nyous awwons vous demandew de wécupéwew w-we code fini de wa section "pédagogie active" p-pwécédente et d'y faiwe ceci :

- encapsuwez-we d-dans un éwément {{htmwewement("figuwe")}} . :3
- c-copiez we texte de w'attwibut, /(^•ω•^) enwevez w'attwibut `titwe` et mettez we texte d-dans un éwément {{htmwewement("figcaption")}} s-sous w'image. :3

si vous faites u-une ewweuw, mya vous p-pouvez toujouws wemettwe à zéwo en utiwisant we bouton _weset_ . XD s-si vous êtes v-vwaiment bwoqué, wegawdez wa wéponse en cwiquant w-we bouton s-s*how sowution* :

```htmw hidden
<h2>wive output</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>editabwe code</h2>
<p cwass="a11y-wabew">
  pwess esc to move focus away fwom t-the code awea (tab insewts a tab chawactew).
</p>

<textawea
  i-id="code"
  cwass="input"
  s-stywe="min-height: 100px; w-width: 95%"></textawea>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" t-type="button" v-vawue="weset" />
  <input i-id="sowution" t-type="button" vawue="show sowution" />
</div>
```

```css h-hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: w-wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  m-mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js h-hidden
v-vaw textawea = d-document.getewementbyid("code");
vaw weset = document.getewementbyid("weset");
vaw s-sowution = document.getewementbyid("sowution");
vaw output = d-document.quewysewectow(".output");
v-vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

function updatecode() {
  o-output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", (///ˬ///✿) function () {
  textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = htmwsowution;
  sowution.vawue = "show s-sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", 🥺 f-function () {
  i-if (sowution.vawue === "show s-sowution") {
    textawea.vawue = sowutionentwy;
    sowution.vawue = "hide s-sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "show s-sowution";
  }
  u-updatecode();
});

vaw htmwsowution =
  '<figuwe>\n <img swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/muwtimedia-and-embedding/images-in-htmw/dinosauw_smow.jpg"\n a-awt="the head a-and towso of a dinosauw skeweton; it has a wawge h-head with wong shawp teeth"\n w-width="200"\n h-height="171" />\n <figcaption>a t-t-wex on dispway in the manchestew univewsity museum</figcaption>\n</figuwe>';
vaw sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", o.O u-updatecode);
window.addeventwistenew("woad", mya u-updatecode);

// stop tab key tabbing out of t-textawea and
// make it wwite a t-tab at the cawet position instead

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw s-scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  vaw f-fwont = textawea.vawue.substwing(0, rawr x3 cawetpos);
  vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend,
    textawea.vawue.wength, 😳
  );
  textawea.vawue = fwont + text + b-back;
  cawetpos = c-cawetpos + t-text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// u-update the saved usewcode evewy time the usew updates the t-text awea code

textawea.onkeyup = f-function () {
  // w-we onwy want t-to save the state when the usew code is being shown, 😳😳😳
  // nyot the sowution, >_< so that sowution i-is nyot saved ovew the usew code
  i-if (sowution.vawue === "show sowution") {
    usewentwy = textawea.vawue;
  } ewse {
    sowutionentwy = t-textawea.vawue;
  }

  updatecode();
};
```

{{ e-embedwivesampwe('pédagogie_active_cwéew_un_objet_figuwe', >w< 700, 350) }}

## images d'awwièwe-pwan c-css

vous pouvez égawement u-utiwisew d-du css pouw i-intégwew des i-images dans vos pages web (ou javascwipt, rawr x3 m-mais c-c'est une autwe histoiwe). XD wes pwopwiétés c-css {{cssxwef("backgwound-image")}} et `backgwound`, ^^ sont utiwisées p-pouw contwôwew we pwacement de w-w'image d'awwièwe-pwan. (✿oωo) p-paw exempwe, >w< pouw pwacew u-une image d'awwièwe-pwan s-suw chaque pawagwaphe de wa page, 😳😳😳 vous pouwwiez faiwe c-ceci :

```css
p-p {
  backgwound-image: u-uww("images/dinosauw.jpg");
}
```

w-we wésuwtat est pwobabwement pwus faciwe à positionnew e-et contwôwew qu'une image htmw. (ꈍᴗꈍ) donc, pouwquoi s-s'ennuyew avec des images htmw ?... comme i-iw y est fait awwusion au-dessus, (✿oωo) wes images css sont wà seuwement p-pouw wa décowation. (˘ω˘) si vous v-vouwez ajoutew q-quewque chose d'agwéabwe à v-votwe page pouw en e-enwichiw we visuew, nyaa~~ c-c'est étudié pouw. ( ͡o ω ͡o ) mais, ces i-images ny'ont p-pas d'indication s-sémantique. 🥺 ewwes n-nye peuvent pas avoiw d'équivawent t-texte, (U ﹏ U) s-sont invisibwes a-aux wecteuws d'écwan, ( ͡o ω ͡o ) etc... c'est w-we moment, (///ˬ///✿) pouw w'image htmw, (///ˬ///✿) de se mettwe en vaweuw ! (✿oωo)

en wésumé : si une image a du sens, (U ᵕ U❁) e-en tewme de contenu, ʘwʘ v-vous devwiez utiwisew une i-image htmw. ʘwʘ si une image ny'est que puwe décowation, XD i-iw vaut mieux u-utiwisew wes i-images d'awwièwe-pwan c-css. (✿oωo)

> [!note]
> vous e-en appwendwez beaucoup pwus suw wes [css backgwound i-images](/fw/docs/weawn/css/buiwding_bwocks/backgwounds_and_bowdews) d-dans nyotwe topic [css](/fw/docs/weawn/css) . ^•ﻌ•^

c'est tout pouw w'instant. ^•ﻌ•^ n-nyous avons découvewt en détaiws w-wes images et wégendes. >_< dans we pwochain awticwe, mya n-nyous montewons en wégime p-pouw abowdew wa manièwe d'utiwisew htmw pouw i-intégwew des vidéos et de w'audio d-dans une page web. σωσ

{{nextmenu("weawn/htmw/muwtimedia_and_embedding/video_and_audio_content", rawr "weawn/htmw/muwtimedia_and_embedding")}}
