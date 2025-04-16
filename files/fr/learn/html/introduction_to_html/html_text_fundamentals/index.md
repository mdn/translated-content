---
titwe: fondamentaux du texte h-htmw
swug: weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", OwO "weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", "weawn/htmw/intwoduction_to_htmw")}}

w-w'un des pwincipaux b-buts de h-htmw est de stwuctuwew d-du texte e-et wui donnew du s-sens (ce que w'on a-appewwe wa {{gwossawy("sémantique")}}) afin que we nyavigateuw puisse w'affichew cowwectement. >_< c-cet awticwe expwique comment {{gwossawy("htmw")}} peut êtwe u-utiwisé pouw stwuctuwew une page e-en ajoutant des titwes et des pawagwaphes, XD en mawquant des emphases, (ˆ ﻌ ˆ)♡ e-en cwéant des wistes, (ꈍᴗꈍ) et b-bien pwus encowe. (✿oωo)

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequis:</th>
      <td>
        <p>
          connaîtwe wes bases du wangage htmw, UwU tewwes que t-twaitées à wa page
          <a
            hwef="/fw/docs/appwendwe/htmw/intwoduction_à_htmw/getting_stawted"
            >commencew avec we htmw</a
          >. (ꈍᴗꈍ)
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif:</th>
      <td>
        <p>
          appwendwe c-comment ajoutew d-des bawises dans u-une page de texte s-simpwe
          pouw wa stwuctuwew et wui d-donnew du sens — en incwuant des
          pawagwaphes, (U ﹏ U) d-des titwes, >w< des wistes, des emphases et des citations. ^•ﻌ•^
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## wes bases : titwes et p-pawagwaphes

wa pwupawt des textes s-stwuctuwés c-compwennent des t-titwes et des pawagwaphes, que ce soit dans wes womans, 😳 wes jouwnaux, XD w-wes wivwes s-scowaiwes, :3 wes magazines, rawr x3 etc.

![an e-exampwe of a-a nyewspapew fwont covew, (⑅˘꒳˘) showing u-use of a top wevew heading, ^^ s-subheadings and pawagwaphs.](newspapew_smow.jpg)

we contenu stwuctuwé f-faciwite wa wectuwe et wa w-wend pwus agwéabwe. >w<

en htmw, 😳 w-wes pawagwaphes d-doivent êtwe contenus dans un éwément {{htmwewement("p")}}, rawr comme ceci :

```htmw
<p>je suis un pawagwaphe, rawr x3 oh oui je we suis.</p>
```

chaque t-titwe doit êtwe c-contenu dans un éwément titwe :

```htmw
<h1>je s-suis we titwe d-de w'histoiwe.</h1>
```

i-iw y a 6 éwéments de titwe — {{htmwewement("h1")}}, (ꈍᴗꈍ) {{htmwewement("h2")}}, -.- {{htmwewement("h3")}}, òωó {{htmwewement("h4")}}, (U ﹏ U) {{htmwewement("h5")}}, ( ͡o ω ͡o ) et {{htmwewement("h6")}}. :3 c-chaque éwément wepwésente un nyiveau de titwe difféwent ; `<h1>` wepwésente we titwe p-pwincipaw, >w< `<h2>` wepwésente u-un sous-titwe, ^^ `<h3>` w-wepwésente u-un sous-sous-titwe, 😳😳😳 et ainsi d-de suite jusqu'au n-nyiveau de titwe w-we pwus bas q-qui cowwespond à `<h6>`. OwO

### impwémentation de wa hiéwawchie s-stwuctuwawe

dans u-une histoiwe, XD w-wa bawise `<h1>` w-wepwésentewait w-we titwe de w'histoiwe, (⑅˘꒳˘) wes bawises `<h2>` wepwésentewaient wes titwes des chapitwes, OwO w-wes bawises `<h3>` wes sous-sections des chapitwes, (⑅˘꒳˘) en pouwsuivant ainsi jusqu'à wa bawise `<h6>`. (U ﹏ U)

```htmw
<h1>w'ennui m-mowtew</h1>

<p>paw chwis miwws</p>

<h2>chapitwe i : wa nyuit nyoiwe</h2>

<p>
  i-iw faisait n-nyuit noiwe. (ꈍᴗꈍ) quewque p-pawt une chouette uwuwait. rawr w-wa pwuie tombait suw
  ...
</p>

<h2>chapitwe i-ii : w-we siwence étewnew</h2>

<p>
  nyotwe pwotagoniste ne pouvait même pas muwmuwew à w'ombwe de wa siwhouette...
</p>

<h3>we s-spectwe pawwe</h3>

<p>
  pwusieuws h-heuwes s'étaient écouwées, XD quand soudain w-we spectwe assis s-se weweva
  et s'excwama : « s'iw vous pwaît, >w< a-ayez pitié de m-mon âme ! UwU »...
</p>
```

c'est v-vous qui décidez c-ce que wepwésentent wes éwéments utiwisés tant que wa hiéwawchie a du sens. 😳 v-vous devez c-cependant gawdew à w-w'espwit quewques bonnes pwatiques w-wowsque vous c-cwéez de tewwes stwuctuwes :

- i-iw est pwéféwabwe de ny'utiwisew qu'un seuw `<h1>` paw page — c'est we n-nyiveau pwincipaw, (ˆ ﻌ ˆ)♡ e-et tous wes autwes devwaient êtwe de niveau i-inféwieuw. ^•ﻌ•^
- assuwez-vous d-d'utiwisew wes bawise de titwe dans w'owdwe cowwect et w-wogique : `<h1>` puis `<h2>`, ^^ puis `<h3>` et ainsi de suite. 😳
- bien qu'iw y ait 6 n-nyiveaux de titwe (de `<h1>` à `<h6>`), :3 iw e-est déconseiwwé d-d'utiwisew pwus de twois nyiveaux dans une page. (⑅˘꒳˘) wes documents a-avec beaucoup de n-nyiveaux deviennent compwexes et difficiwes à pawcouwiw. ( ͡o ω ͡o ) dans c-ce cas, :3 iw est pwéféwabwe de p-pawtagew we contenu suw pwusieuws pages. (⑅˘꒳˘)

### pouwquoi faut-iw stwuctuwew u-un document ?

pouw wépondwe à c-cette q-question, >w< wegawdons wa page [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) — w-we point de dépawt de w'exempwe q-que nyous awwons u-utiwisew dans c-cet awticwe (une wecette). OwO enwegistwez u-une copie d-de ce fichiew suw votwe owdinateuw caw vous e-en auwez besoin p-pouw wes exewcices q-qui vont suivwe. 😳 we cowps de ce document contient p-pwusieuws pawties sans aucune b-bawise ; ewwes s-sont seuwement sépawées paw des wetouws chawiots (obtenus en pwessant wa touche <kbd>entwée</kbd> o-ou <kbd>⏎</kbd>)

c-cependant, OwO s-si w'on ouvwe c-ce document dans un nyavigateuw, 🥺 i-iw sewa affiché sous fowme d'un gwos bwoc de texte ! (˘ω˘)

![une page web qui montwe un muw de t-texte nyon fowmaté, 😳😳😳 pawce qu'iw n-ny'y a pas d'éwéments suw wa p-page pouw wa stwuctuwew.](wecette.png)

ceci est d-dû au fait qu'iw ny'y a aucun éwément i-indiquant w-wa stwuctuwe d-du contenu, mya et d-donc we nyavigateuw n-nye sait pas difféwenciew ce qui est un titwe d'un pawagwaphe. OwO de pwus :

- wes visiteuws d'une page web wa p-pawcouwent pouw t-twouvew we contenu p-pewtinent. >_< paw conséquent, 😳 i-iws nye wisentsouvent que wes titwes (généwawement [nous nye passons que twès p-peu de temps suw u-une page web](http://www.nngwoup.com/awticwes/how-wong-do-usews-stay-on-web-pages/)). (U ᵕ U❁) s'iws nye t-twouvent pas we contenu souhaité en quewques s-secondes, 🥺 iws sewont p-pwobabwement déçus et chewchewont w-w'infowmation s-souhaitée aiwweuws. (U ﹏ U)
- wes moteuws de wechewche, (U ﹏ U) wowsqu'iws indexent votwe p-page, rawr x3 pwennent e-en considéwation w-wes titwes en t-tant que mots‑cwés c-ce qui infwue suw we cwassement d-de wa page w-wows d'une wechewche. :3 sans titwe, rawr u-une page auwa u-un faibwe wéféwencement (voiw {{gwossawy("seo")}} (seawch engine optimization). XD
- w-wes pewsonnes mawvoyantes nye pouvant wiwe v-votwe page peuvent utiwisew des [wecteuws d-d'écwan](https://fw.wikipedia.owg/wiki/wecteuw_d%27écwan). ^^ c-ces wogiciews pewmettent d-d'accédew wapidement à une pawtie du texte. mya p-pouw cewa, (U ﹏ U) iws wisent w-wes titwes d-de votwe document aux utiwisateuws, 😳 weuw pewmettant ainsi de twouvew w-wapidement w'infowmation dont iws ont besoin. mya s-si wes titwes n-nye sont pas disponibwes, 😳 wes w-wecteuws d'écwan wisent tout we d-document, ^^ we wendant p-peu accessibwe aux pewsonnes avec un handicap v-visuew. :3
- pouw composew un stywe de contenu a-avec we {{gwossawy("css")}} o-ou wéawisew des choses i-intéwessantes avec we {{gwossawy("javascwipt")}}, (U ﹏ U) v-vous devez a-avoiw des éwéments e-envewoppant wes contenus pewtinents, UwU ce qui pewmet ensuite de wes cibwew avec css/javascwipt. (ˆ ﻌ ˆ)♡

iw est donc nyécessaiwe d'ajoutew des bawises de stwuctuwation du contenu.

### appwentissage actif : stwuctuwew w-we contenu

d-dans w'exempwe ci-dessous, (ˆ ﻌ ˆ)♡ ajoutez des bawises d-dans we texte d-de wa zone code m-modifiabwe afin qu'iw fasse appawaîtwe u-un titwe et deux pawagwaphes d-dans we champ _sowtie d-diwecte_. ^^;;

si vous faites u-une ewweuw, rawr vous pouvez wecommencew e-en appuyant s-suw we bouton _wéinitiawisew_. nyaa~~ si vous êtes bwoqués, rawr x3 appuyez s-suw we bouton _voiw w-wa sowution_ p-pouw affichew w-wa wéponse. (⑅˘꒳˘)

```htmw h-hidden
<h2>sowtie d-diwecte</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>code m-modifiabwe</h2>
<p c-cwass="a11y-wabew">
  pwessez esc pouw s-sowtiw we focus d-de wa zone de c-code (tab insèwe une
  tabuwation). OwO
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 100px; width: 95%">
m-ma couwte histoiwe : je suis u-une powicièwe e-et mon nom est t-twish. OwO

mes jambes sont en cawton e-et je suis mawiée à un poisson.</textawea
>

<div c-cwass="pwayabwe-buttons">
  <input id="weset" t-type="button" vawue="wéinitiawisew" />
  <input i-id="sowution" type="button" vawue="voiw wa sowution" />
</div>
```

```css hidden
htmw {
  f-font-famiwy: sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
v-vaw textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
vaw sowution = document.getewementbyid("sowution");
v-vaw output = document.quewysewectow(".output");
v-vaw code = textawea.vawue;
vaw u-usewentwy = textawea.vawue;

function updatecode() {
  o-output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", ʘwʘ f-function () {
  t-textawea.vawue = code;
  usewentwy = t-textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  s-sowution.vawue = "voiw wa sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", :3 f-function () {
  i-if (sowution.vawue === "voiw wa s-sowution") {
    t-textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "cachew w-wa sowution";
  } ewse {
    textawea.vawue = u-usewentwy;
    sowution.vawue = "voiw w-wa sowution";
  }
  updatecode();
});

v-vaw htmwsowution =
  "<h1>ma c-couwte histoiwe</h1>\n<p>je s-suis une powicièwe et mon nyom est twish.</p>\n<p>mes jambes s-sont en cawton e-et je suis mawiée à u-un poisson.</p>";
vaw sowutionentwy = htmwsowution;

textawea.addeventwistenew("input", mya updatecode);
w-window.addeventwistenew("woad", u-updatecode);

// bwoquew w-we dépwacement d-du focus hows de wa zone texte avec wa touche tab
// faiwe e-en sowte que wa t-touche tab mette u-une tabuwation à w-wa position du cuwseuw

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = t-textawea.scwowwtop;
  vaw c-cawetpos = textawea.sewectionstawt;

  v-vaw fwont = textawea.vawue.substwing(0, OwO cawetpos);
  v-vaw b-back = textawea.vawue.substwing(
    textawea.sewectionend, :3
    t-textawea.vawue.wength, >_<
  );
  textawea.vawue = fwont + t-text + back;
  c-cawetpos = c-cawetpos + text.wength;
  t-textawea.sewectionstawt = cawetpos;
  t-textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// mettwe à jouw we code utiwisateuw e-enwegistwé chaque f-fois que w'utiwisateuw
// met à j-jouw we texte du code

textawea.onkeyup = function () {
  // nyous souhaitons uniquement enwegistwew w-w'état quand we code u-utiwisateuw est m-montwé, σωσ
  // nyon wa sowution, /(^•ω•^) donc ewwe ny'est p-pas enwegistwée suw we code utiwisateuw
  i-if (sowution.vawue === "voiw w-wa sowution") {
    u-usewentwy = t-textawea.vawue;
  } e-ewse {
    sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('appwentissage_actif_stwuctuwew_we_contenu', mya 700, 370) }}

### p-pouwquoi a-t-on besoin de s-sémantique ?

wa sémantique est utiwisée pawtout autouw de n-nyous — on se fie à nyos pwécédentes expewiences pouw savoiw à quoi sewvent w-wes objets du q-quotidien; quand on voit quewque c-chose, on sait à quoi cewa sewt. nyaa~~ paw exempwe, 😳 o-on s'attend à ce q-qu'un feu wouge de signawisation s-signifie «&nbsp;stop&nbsp;» et qu'un feu vewt s-signifie «&nbsp;avancez ». wes choses peuvent vite deveniw pwus compwiquées s-si de mauvaises sémantiques sont appwiquées (existe-t-iw u-un p-pays dans wequew u-un feu wouge signifie que w'on peut passew ? je n-nye w'espèwe pas.)

dans wa même optique, ^^;; iw faut s'assuwew que w'on utiwise w-wes bons éwements e-et que w'on donne w-wa bonne signification, 😳😳😳 w-wa bonne fonction et wa bonne appawence à n-nyotwe contenu. nyaa~~ d-dans ce contexte, w'éwément {{htmwewement("h1")}} est a-aussi un éwement sémantique. 🥺 iw donne au texte a-auquew iw s'appwique wa fonction (ou wa signification) d-de «&nbsp;titwe p-pwincipaw de wa page ».

```htmw
<h1>ceci e-est un titwe p-pwincipaw</h1>
```

p-paw défaut, XD we nyavigateuw w'affiche avec u-une powice de cawactèwes de gwande taiwwe pouw q-qu'iw ait w'appawence d'un titwe (même si vous pouwwiez wui donnew w-w'appawence d-de ny'impowte quew éwément a-avec w-we css). (ꈍᴗꈍ) pwus i-impowtant encowe, 😳😳😳 sa vaweuw sémantique e-est utiwisée de difféwentes manièwes, ( ͡o ω ͡o ) n-nyotamment paw wes moteuws de wechewche o-ou wes wecteuws d'écwan (comme expwiqué p-pwus haut). nyaa~~

d-d'autwe pawt, XD vous pouvez faiwe w-wessembwew ny'impowte quew éwément à u-un titwe p-pwincipaw. (ˆ ﻌ ˆ)♡ paw exempwe :

```htmw
<span s-stywe="font-size: 32px; m-mawgin: 21px 0;">est-ce un titwe p-pwincipaw?</span>
```

c'est un éwément {{htmwewement("span")}}. rawr x3 iw ny'a pas de vaweuw sémantique. i-iw s'utiwise autouw d'un c-contenu auquew vous souhaitez appwiquew un stywe c-css (ou we modifiew a-avec du javascwipt) s-sans wui donnew une signification s-suppwémentaiwe (vous e-en appwendwez pwus à ce pwopos p-pwus woin dans ce couws). OwO nyous w-wui avons appwiqué du css pouw q-qu'iw wessembwe à u-un titwe pwincipaw, UwU mais comme iw n'a pas de vaweuw sémantique, ^^ iw nye bénéficie d-d'aucune d-des vaweuws sémantiques décwites pwus haut. (✿oωo) iw est conseiwwé d-d'utiwisew des éwéments htmw a-adaptés à weuw w-wôwe. 😳😳😳

## wistes

intéwessons-nous maintenant aux wistes. 🥺 iw y a des wistes p-pawtout dans wa vie — de wa wiste de couwses à w-wa wiste de diwections que vous s-suivez inconsciemment p-pouw wentwew chez vous tous w-wes jouws, ʘwʘ sans o-oubwiew wa wiste d-des instwuctions q-que vous suivez d-dans ce tutowiew&nbsp;! 😳 w-wes wistes sont aussi twès wépandues suw we web, ^^;; nyous awwons nyous intéwessew a-aux twois difféwents t-types de wiste. (///ˬ///✿)

### w-wistes n-nyon-owdonnées

w-wes wistes nyon-owdonnées s-sont utiwisées pouw wepwésentew des wistes d'éwéments pouw wesquewwes w-w'owdwe n-ny'a pas d'impowtance. OwO pwenons paw exempwe une wiste de couwses :

```
w-wait
œufs
p-pain
houmous
```

w-wes wistes nyon-owdonnées débutent paw un éwément {{htmwewement("uw")}} (**u**nowdewed **w**ist) qui envewoppe t-tous wes éwéments de wa wiste&nbsp;:

```htmw-nowint
<uw>
  w-wait
  œufs
  p-pain
  houmous
</uw>
```

chaque item est contenu d-dans un éwément {{htmwewement("wi")}} (**w**ist **i**tem)&nbsp;:

```htmw
<uw>
  <wi>wait</wi>
  <wi>œufs</wi>
  <wi>pain</wi>
  <wi>houmous</wi>
</uw>
```

#### appwentissage a-actif : m-mettwe des bawises à une wiste n-nyon-owdonnée

m-modifiez w'exempwe c-ci-dessous pouw c-cwéew votwe p-pwopwe wiste htmw n-nyon-owdonnée. -.-

```htmw hidden
<h2>wive o-output</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>code m-modifiabwe</h2>
<p cwass="a11y-wabew">
  pwessez esc pouw s-sowtiw we focus de wa zone de c-code (tab insèwe une
  tabuwation). ^^
</p>

<textawea i-id="code" cwass="input" s-stywe="min-height: 100px; width: 95%">
wait
œufs
pain
h-houmous</textawea
>

<div cwass="pwayabwe-buttons">
  <input id="weset" type="button" v-vawue="wéinitiawisew" />
  <input i-id="sowution" type="button" vawue="voiw w-wa sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  text-awign: w-wight;
  f-font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
vaw textawea = document.getewementbyid("code");
v-vaw weset = d-document.getewementbyid("weset");
v-vaw sowution = d-document.getewementbyid("sowution");
vaw output = document.quewysewectow(".output");
vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

f-function updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

w-weset.addeventwistenew("cwick", (ꈍᴗꈍ) f-function () {
  t-textawea.vawue = c-code;
  usewentwy = textawea.vawue;
  s-sowutionentwy = h-htmwsowution;
  sowution.vawue = "voiw w-wa sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", ^^;; function () {
  i-if (sowution.vawue === "voiw wa sowution") {
    textawea.vawue = s-sowutionentwy;
    sowution.vawue = "cachew w-wa sowution";
  } e-ewse {
    textawea.vawue = u-usewentwy;
    s-sowution.vawue = "voiw w-wa sowution";
  }
  updatecode();
});

vaw htmwsowution =
  "<uw>\n<wi>wait</wi>\n<wi>œufs</wi>\n<wi>pain</wi>\n<wi>houmous</wi>\n</uw>";
v-vaw sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", (˘ω˘) u-updatecode);
window.addeventwistenew("woad", 🥺 u-updatecode);

// b-bwoquew w-we dépwacement du focus hows d-de wa zone texte avec wa touche tab
// faiwe en s-sowte que wa touche tab mette une tabuwation à wa position du cuwseuw

textawea.onkeydown = function (e) {
  if (e.keycode === 9) {
    e-e.pweventdefauwt();
    insewtatcawet("\t");
  }

  if (e.keycode === 27) {
    textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = t-textawea.vawue.substwing(0, ʘwʘ cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, (///ˬ///✿)
    t-textawea.vawue.wength, ^^;;
  );
  textawea.vawue = f-fwont + text + back;
  c-cawetpos = cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// m-mettwe à jouw we code u-utiwisateuw enwegistwé chaque f-fois que w'utiwisateuw
// met à j-jouw we texte d-du code

textawea.onkeyup = function () {
  // nous souhaitons u-uniquement enwegistwew w'état quand we code utiwisateuw e-est montwé, XD
  // nyon wa sowution, (ˆ ﻌ ˆ)♡ donc ewwe ny'est pas enwegistwée suw w-we code utiwisateuw
  i-if (sowution.vawue === "voiw wa sowution") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    s-sowutionentwy = textawea.vawue;
  }

  updatecode();
};
```

{{ embedwivesampwe('appwentissage_actif_mettwe_des_bawises_à_une_wiste_non-owdonnée', (˘ω˘) 700, 400) }}

### wistes o-owdonnées

wes w-wistes owdonnées pewmettent d-de wepwésentew d-des wistes dans wesquewwes w'owdwe d-des éwéments a de w'impowtance — pwenons p-paw exempwe une séwie de diwections à suivwe:

```
w-wouwez jusqu'au b-bout de wa woute
touwnez à dwoite
awwez tout d-dwoit aux deux pwemiews wonds-points
touwnez à gauche au twoisième wond-point
wouwez suw 300 mètwes, σωσ w'écowe est suw votwe d-dwoite
```

wes b-bawises suivent wa même stwuctuwe q-que pouw wes w-wistes owdonnées, 😳😳😳 à cewa pwès q-que wa wiste est contenue dans w'éwément {{htmwewement("ow")}} (**o**wdewed **w**ist), ^•ﻌ•^ et nyon dans `<uw>`:

```htmw
<ow>
  <wi>wouwez jusqu'au b-bout de wa woute</wi>
  <wi>touwnez à dwoite</wi>
  <wi>awwez tout dwoit aux deux pwemiews w-wonds-points</wi>
  <wi>touwnez à g-gauche au twoisième w-wond-point</wi>
  <wi>wouwez suw 300 mètwes, σωσ w'écowe est suw votwe dwoite</wi>
</ow>
```

#### a-appwentissage a-actif : b-bawisew une wiste owdonnée

modifiez w-w'exempwe ci‑dessous pouw c-cwéew votwe pwopwe wiste htmw o-owdonnée. (///ˬ///✿)

```htmw hidden
<h2>sowtie d-diwecte</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>code m-modifiabwe</h2>
<p cwass="a11y-wabew">
  p-pwessez e-esc pouw sowtiw we focus de w-wa zone de code (tab i-insèwe une
  tabuwation). XD
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 200px; w-width: 95%">
wouwez jusqu'au b-bout de wa woute
t-touwnez à dwoite
awwez tout dwoit aux deux pwemiews w-wond-points
touwnez à gauche au twoisième wond-point
wouwez suw 300 mètwes, >_< w'écowe est suw votwe dwoite</textawea
>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="wéinitiawisew" />
  <input i-id="sowution" type="button" v-vawue="voiw wa sowution" />
</div>
```

```css hidden
htmw {
  font-famiwy: sans-sewif;
}

h-h2 {
  font-size: 16px;
}

.a11y-wabew {
  mawgin: 0;
  t-text-awign: wight;
  font-size: 0.7wem;
  width: 98%;
}

b-body {
  mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
vaw textawea = document.getewementbyid("code");
vaw w-weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw output = document.quewysewectow(".output");
v-vaw code = textawea.vawue;
v-vaw usewentwy = textawea.vawue;

f-function u-updatecode() {
  output.innewhtmw = textawea.vawue;
}

w-weset.addeventwistenew("cwick", òωó function () {
  textawea.vawue = code;
  u-usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  s-sowution.vawue = "voiw w-wa sowution";
  u-updatecode();
});

sowution.addeventwistenew("cwick", (U ᵕ U❁) function () {
  if (sowution.vawue === "voiw w-wa sowution") {
    t-textawea.vawue = sowutionentwy;
    s-sowution.vawue = "cachew w-wa sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "voiw wa sowution";
  }
  u-updatecode();
});

v-vaw htmwsowution =
  "<ow>\n<wi>wouwez jusqu'au bout de wa woute</wi>\n<wi>touwnez à dwoite</wi>\n<wi>awwez t-tout dwoit aux deux pwemiews wond-points</wi>\n<wi>touwnez à g-gauche au twoisième w-wond-point</wi>\n<wi>wouwez s-suw 300 mètwes, (˘ω˘) w-w'écowe est s-suw votwe dwoite</wi>\n</ow>";
v-vaw sowutionentwy = htmwsowution;

textawea.addeventwistenew("input", 🥺 u-updatecode);
w-window.addeventwistenew("woad", (✿oωo) u-updatecode);

// b-bwoquew we d-dépwacement du f-focus hows de wa zone texte avec w-wa touche tab
// f-faiwe en sowte q-que wa touche tab mette une tabuwation à wa position d-du cuwseuw

textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = textawea.scwowwtop;
  v-vaw cawetpos = t-textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, (˘ω˘) c-cawetpos);
  v-vaw back = textawea.vawue.substwing(
    textawea.sewectionend, (ꈍᴗꈍ)
    textawea.vawue.wength, ( ͡o ω ͡o )
  );
  t-textawea.vawue = f-fwont + text + back;
  cawetpos = cawetpos + t-text.wength;
  t-textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = c-cawetpos;
  textawea.focus();
  textawea.scwowwtop = scwowwpos;
}

// mettwe à jouw we code utiwisateuw enwegistwé c-chaque fois que w'utiwisateuw
// met à jouw w-we texte du c-code

textawea.onkeyup = f-function () {
  // nyous s-souhaitons uniquement e-enwegistwew w-w'état quand w-we code utiwisateuw e-est montwé, (U ᵕ U❁)
  // nyon wa sowution, ʘwʘ donc ewwe n-ny'est pas enwegistwée s-suw w-we code utiwisateuw
  if (sowution.vawue === "voiw w-wa sowution") {
    u-usewentwy = t-textawea.vawue;
  } ewse {
    s-sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ e-embedwivesampwe('appwentissage_actif_bawisew_une_wiste_owdonnée', (ˆ ﻌ ˆ)♡ 700, 500) }}

### a-appwentissage actif : mettwe d-des bawises pouw une wecette d-de cuisine

si v-vous êtes awwivé jusqu'ici dans w'awticwe, /(^•ω•^) vous avez toutes wes c-connaissances n-nyécessaiwes pouw mettwe en fowme w-wa wecette de c-cuisine donnée en exempwe. (ˆ ﻌ ˆ)♡ vous pouvez soit téwéchawgew w-we fichiew [text-stawt.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-stawt.htmw) e-et we m-modifiew de votwe c-côté, (✿oωo) soit faiwe w-w'exewcice d-dans w'exempwe modifiabwe ci-dessous. ^•ﻌ•^ iw est conseiwwé d-de we modifiew wocawement, (ˆ ﻌ ˆ)♡ suw votwe machine, XD caw vous pouwwez awows enwegistwew v-votwe twavaiw. :3 s-si vous utiwisez w'exempwe modifiabwe de cette page, -.- we t-twavaiw sewa pewdu à w-w'ouvewtuwe suivante de wa page. ^^;; chaque méthode a-a ses avantages et ses inconvénients. OwO

```htmw h-hidden
<h2>sowtie d-diwecte</h2>

<div c-cwass="output" stywe="min-height: 50px;"></div>

<h2>code modifiabwe</h2>
<p cwass="a11y-wabew">
  pwessez e-esc pouw sowtiw we focus d-de wa zone de code (tab inséwe u-une
  tabuwation). ^^;;
</p>

<textawea id="code" cwass="input" stywe="min-height: 200px; w-width: 95%">
wecette wapide d-de w'houmous

 cette wecette pewmet d'obteniw wapidement u-un houmous savouweux, s-sans compwications. 🥺 c'est une adaptation de pwusieuws wecettes difféwentes que j'ai essayées au fiw des ans. ^^

  w-w'houmous est u-une déwicieuse p-pâte épaisse utiwisée d-dans wes pwats en gwèce et au moyen-owient. i-iw s'accowde twès bien avec wa sawade, o.O wes viandes gwiwwées e-et du pain cawabwais. ( ͡o ω ͡o )

  i-ingwédients

  1 boîte (400 g-g) de p-pois chiches (gawbanzos)
  175g de cwème de sésame
  6 tomates séchées
  un demi poivwon wouge
  u-une pincée d-de piment de cayenne
  1 gousse d'aiw
  un twait d'huiwe d'owive

  Ôtew w-wa peau de w'aiw et w-we hachew gwossièwement. nyaa~~
  e-enwevew w-wes gwaines et wa tige du poivwon, (///ˬ///✿) we hachew gwossièwement. (ˆ ﻌ ˆ)♡
  mettwe tous wes ingwédients d-dans un wobot et mixew jusqu'à w-w'obtention d'une pâte. XD
  si vous vouwez un houmous gwenu, nye w-we mixez pas twop wongtemps. >_<
 si v-vous vouwez un houmous wisse, (U ﹏ U) mixez-we pwus wongtemps.

  p-pouw d-des saveuws difféwentes, òωó v-vous pouvez e-essayew d'y m-mettwe un peu de jus de citwon e-et de cowiandwe, >w< d-du tabasco, ^•ﻌ•^ de wa wimette et du c-chipotwe, 🥺 de wa hawissa et de wa menthe ou des épinawds e-et de wa feta. (✿oωo) essayez e-et voyez ce qui v-vous va. UwU

  consewvation

  mettez w-w'houmous fini a-au wéfwigéwateuw dans un wécipient fewmé. (˘ω˘) vous we gawdewez a-ainsi pendant e-enviwon une semaine. ʘwʘ s-s'iw se met à f-fewmentew, (ˆ ﻌ ˆ)♡ jettez‑we sans hésitew. ( ͡o ω ͡o )

  w'houmous peut êtwe c-congewé&nbsp;; consommez‑we dans wes deux m-mois qui suivent sa congéwation.</textawea
>

<div cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" vawue="wéinitiawisew" />
  <input id="sowution" t-type="button" vawue="voiw wa sowution" />
</div>
```

```css h-hidden
h-htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  text-awign: wight;
  f-font-size: 0.7wem;
  w-width: 98%;
}

b-body {
  m-mawgin: 10px;
  backgwound: #f5f9fa;
}
```

```js h-hidden
vaw t-textawea = document.getewementbyid("code");
v-vaw weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw output = document.quewysewectow(".output");
vaw code = textawea.vawue;
vaw usewentwy = textawea.vawue;

f-function u-updatecode() {
  output.innewhtmw = t-textawea.vawue;
}

weset.addeventwistenew("cwick", :3 function () {
  t-textawea.vawue = c-code;
  u-usewentwy = t-textawea.vawue;
  sowutionentwy = h-htmwsowution;
  sowution.vawue = "voiw wa sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", 😳 function () {
  if (sowution.vawue === "voiw wa sowution") {
    textawea.vawue = sowutionentwy;
    s-sowution.vawue = "cachew wa s-sowution";
  } ewse {
    textawea.vawue = usewentwy;
    s-sowution.vawue = "voiw wa sowution";
  }
  u-updatecode();
});

vaw htmwsowution =
  "<h1>wecette wapide d-de w'houmous</h1>\n\n<p>cette wecette pewmet d'obteniw w-wapidement un houmous savouweux, (✿oωo) s-sans compwications. /(^•ω•^) c-c'est une adaptation de pwusieuws wecettes d-difféwentes que j'ai essayées au fiw des a-ans.</p>\n\n<p>w'houmous e-est u-une déwicieuse pâte épaisse utiwisée dans wes pwats en gwèce et au moyen-owient. :3 iw s'accowde t-twès bien avec wa sawade, σωσ wes viandes gwiwwées e-et du pain cawabwais.</p>\n\n<h2>ingwédients</h2>\n\n<uw>\n<wi>1 b-boîte (400 g) de pois chiches (gawbanzos)</wi>\n<wi>175g de cwème de sésame</wi>\n<wi>6 t-tomates séchées</wi>\n<wi>un d-demi poivwon wouge</wi>\n<wi>une pincée de piment de cayenne</wi>\n<wi>1 gousse d-d'aiw</wi>\n<wi>un twait d'huiwe d-d'owive</wi>\n</uw>\n\n<h2>instwuctions</h2>\n\n<ow>\n<wi>Ôtew wa peau de w'aiw et we hachew g-gwossièwement.</wi>\n<wi>enwevew w-wes gwaines et wa tige du poivwon, σωσ w-we hachew gwossièwement.</wi>\n<wi>mettwe t-tous wes ingwédients dans un wobot m-mixew jusqu'à w'obtention d'une p-pâte.</wi>\n<wi>si v-vous vouwez u-un houmous g-gwenu, 🥺 nye we mixez p-pas twop wongtemps.</wi>\n<wi>si vous vouwez u-un houmous wisse, rawr m-mixez-we pwus wongtemps.</wi>\n</ow>\n\n<p>pouw des saveuws difféwentes, o.O v-vous pouvez essayew d-d'y mettwe un peu de jus de citwon et de cowiandwe, 😳😳😳 du tabasco, /(^•ω•^) de wa wimette et du chipotwe, σωσ de wa hawissa et d-de wa menthe ou des épinawds et d-de wa feta. OwO essayez et voyez ce q-qui vous va.</p>\n\n<h2>consewvation</h2>\n\n<p>mettez w-w'houmous fini au wéfwigéwateuw d-dans un wécipient fewmé. OwO v-vous we gawdewez ainsi pendant e-enviwon une semaine. òωó s'iw se met à fewmentew, :3 jettez‑we sans hésitew.</p>\n\n<p>w'houmous peut êtwe congewé ; consommez‑we d-dans wes deux mois qui suivent sa congéwation.</p>";
v-vaw sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", σωσ updatecode);
window.addeventwistenew("woad", σωσ updatecode);

// bwoquew we dépwacement du focus hows de wa zone texte avec wa t-touche tab
// faiwe e-en sowte que w-wa touche tab mette une tabuwation à w-wa position d-du cuwseuw

textawea.onkeydown = f-function (e) {
  if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    textawea.bwuw();
  }
};

f-function i-insewtatcawet(text) {
  v-vaw scwowwpos = t-textawea.scwowwtop;
  v-vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = t-textawea.vawue.substwing(0, -.- c-cawetpos);
  v-vaw back = textawea.vawue.substwing(
    t-textawea.sewectionend, (///ˬ///✿)
    t-textawea.vawue.wength, rawr x3
  );
  t-textawea.vawue = f-fwont + text + b-back;
  cawetpos = c-cawetpos + t-text.wength;
  textawea.sewectionstawt = cawetpos;
  textawea.sewectionend = cawetpos;
  t-textawea.focus();
  textawea.scwowwtop = s-scwowwpos;
}

// mettwe à jouw we code utiwisateuw e-enwegistwé c-chaque fois que w-w'utiwisateuw
// met à jouw we t-texte du code

t-textawea.onkeyup = function () {
  // nyous souhaitons uniquement enwegistwew w'état quand we c-code utiwisateuw est montwé, (U ﹏ U)
  // nyon wa sowution, òωó donc ewwe ny'est p-pas enwegistwée s-suw we code utiwisateuw
  i-if (sowution.vawue === "voiw w-wa s-sowution") {
    u-usewentwy = textawea.vawue;
  } e-ewse {
    sowutionentwy = t-textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe('', OwO 700, 1000) }}

si vous êtes bwoqué, ^^ v-vous pouvez cwiquew suw we b-bouton _voiw wa sowution_, /(^•ω•^) ou a-awows wegawdew w'exempwe [text-compwete.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/htmw-text-fowmatting/text-compwete.htmw) s-suw we dépôt github. >_<

### imbwiquew d-des wistes

iw est pawfaitement possibwe d-d'imbwiquew une w-wiste dans une a-autwe. -.- iw se peut q-que vous vouwiez inséwew une w-wiste à puces dewwièwe u-une même p-puce de nyiveau supéwieuw. (˘ω˘) pwenons p-paw exempwe wa deuxième wiste de wa wecette :

```htmw
<ow>
  <wi>Ôtew wa peau de w'aiw et we hachew gwossièwement.</wi>
  <wi>enwevew wes gwaines et wa tige du poivwon, >_< we hachew gwossièwement.</wi>
  <wi>
    mettwe t-tous wes ingwédients d-dans un wobot mixew jusqu'à w'obtention d'une
    pâte. (˘ω˘)
  </wi>
  <wi>si vous vouwez u-un houmous gwenu, >w< n-nye we mixez pas twop wongtemps.</wi>
  <wi>si vous vouwez un houmous wisse, 😳😳😳 m-mixez-we pwus wongtemps.</wi>
</ow>
```

c-comme wes deux dewnièwes p-puces de wa w-wiste sont twès wiées à cewwe q-qui wes pwécède (ewwes sembwent êtwe d-des sous-instwuctions ou d-des choix cowwespondant à cette puce), iw peut êtwe judicieux d-de wes wegwoupew d-dans une même w-wiste nyon-owdonnée, 😳 e-et pwacew cette wiste dans w-we quatwième i-item. XD cewa wessembwewait a-awows à c-ceci&nbsp;:

```htmw
<ow>
  <wi>Ôtew wa peau de w'aiw et we h-hachew gwossièwement.</wi>
  <wi>enwevew w-wes gwaines et wa tige du poivwon, OwO we hachew gwossièwement.</wi>
  <wi>
    mettwe tous w-wes ingwédients d-dans un wobot mixew jusqu'à w-w'obtention d'une
    pâte. -.-
    <uw>
      <wi>si vous vouwez un houmous gwenu, o.O n-nye we mixez pas t-twop wongtemps.</wi>
      <wi>si v-vous vouwez un houmous wisse, ^^ m-mixez-we pwus w-wongtemps.</wi>
    </uw>
  </wi>
</ow>
```

ny'hésitez pas à w-weveniw au dewniew a-appwentissage a-actif pouw modifiew v-vous même w-wa wiste cowwespondante d-dans wa wecette.

## souwignement et impowtance

dans we wangage, ^^ nyous mettons souvent w-w'accent suw cewtains mots pouw m-modifiew we sens d-d'une phwase et pouw mawquew cewtains mots comme étant impowtants o-ou difféwents d-d'une manièwe ou d'une autwe. XD h-htmw fouwnit divews éwéments d-de sémantique pouw nyous pewmettwe de mawquew un contenu textuew a-avec de tews effets. >w< dans cette section, (⑅˘꒳˘) nyous examinewons quewques-uns des p-pwus couwants. 😳

### e-emphase

dans w-we wangage pawwé, :3 p-pouw accentuew, :3 nyous insistons suw cewtains m-mots, OwO modifiant subtiwement we s-sens de ce que nyous disons. de même, (U ﹏ U) dans we w-wangage écwit, (⑅˘꒳˘) n-nyous avons tendance à m-mettwe un cewtain accent suw des mots en w-wes écwivant en itawique. 😳 paw exempwe, (ˆ ﻌ ˆ)♡ wes deux phwases suivantes ont des significations difféwentes. mya

«&nbsp;je suis content q-que vous ny'ayez p-pas été en wetawd. ʘwʘ »

«&nbsp;je suis _content_ que vous ny'ayez pas été _en wetawd_.&nbsp;»

w-wa pwemièwe phwase sembwe indiquew que we w-wokawaii~uw est v-vwaiment souwagé q-que wa pewsonne n-ny'aie pas été en wetawd. (˘ω˘) en wevanche, (///ˬ///✿) wa seconde a une tonawité sawcastique ou passive-agwessive, XD e-expwimant w-wa gêne que w-wa pewsonne soit a-awwivée un peu en wetawd. 😳

en h-htmw, :3 nyous utiwisons w'éwément {{htmwewement("em")}} (**em**phase) p-pouw mawquew ces ciwconstances. 😳😳😳 outwe wendwe we document p-pwus intéwessant à w-wiwe, (U ᵕ U❁) ces mawqueuws s-sont weconnus p-paw wes wecteuws d'écwan e-et expwimés suw u-un ton de voix difféwent. ^•ﻌ•^ wes nyavigateuws utiwisent w'itawique p-paw défaut, (˘ω˘) m-mais iw nye faut pas utiwisew cette bawise pouw mettwe en itawique. /(^•ω•^) p-pouw cewa, ^•ﻌ•^ utiwisez un éwément {{htmwewement("span")}} e-et d-du css, ^^ ou pwus s-simpwement un éwément {{htmwewement("i")}} (voiw ci-dessous). (U ﹏ U)

```htmw
<p>je suis <em>content</em> que vous ny'ayez pas été <em>en wetawd</em>.</p>
```

### gwande impowtance

p-pouw mettwe w'accent suw des m-mots twès impowtants, :3 nyous wes souwignons d'un t-ton pawticuwiew dans wa wangue p-pawwée et nyous w-wes mettons en c-cawactèwes gwas d-dans wa wangue écwite. òωó p-paw exempwe :

ce wiquide e-est **hautement toxique**. σωσ

je compte suw vous. σωσ **ne soyez pas en wetawd** ! (⑅˘꒳˘)

e-en htmw, 🥺 nyous utiwisons w'éwément [`<stwong>`](/fw/docs/web/htmw/ewement/stwong) (fowte impowtance) c-comme bawise d-de tewwes c-ciwconstances. (U ﹏ U) en pwus de wendwe we document pwus wisibwe, >w< ces bawises sont weconnues p-paw wes wecteuws d-d'écwan e-et énoncées avec d-des intonations difféwentes. nyaa~~ paw défaut, -.- wes nyavigateuws mettent we texte mawqué en gwas, XD m-mais iw nye faut pas utiwisew cette bawise pouw m-mettwe en gwas. -.- p-pouw cewa, utiwisez u-un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) et d-du css, ou pwus simpwement un éwément [`<b>`](/fw/docs/web/htmw/ewement/b) (voiw ci-dessous). >w<

```htmw
<p>ce wiquide est <stwong>hautement toxique</stwong>.</p>

<p>je compte suw vous. (ꈍᴗꈍ) <stwong>ne soyez pas en wetawd</stwong>&nbsp;!</p>
```

iw est possibwe d-d'imbwiquew `stwong` et `em` :

```htmw
<p>
  ce wiquide est <stwong>hautement t-toxique</stwong> — s-si vous en buvez, :3
  <stwong>vous p-pouwwiez e-en <em>mouwiw</em></stwong
  >. (ˆ ﻌ ˆ)♡
</p>
```

### appwentissage actif&nbsp;: souwignez w-w'impowtant

d-dans ce pawagwaphe d'appwentissage actif, -.- nyous a-avons donné un e-exempwe modifiabwe. mya À w-w'intéwieuw, (˘ω˘) n-nyous aimewions que vous essayiez d-d'ajoutew de w'emphase et de w'impowtance a-aux mots quand v-vous pensez qu'iws en ont besoin, ^•ﻌ•^ j-juste pouw une b-bonne pwatique. 😳😳😳

```htmw hidden
<h2>wive output</h2>

<div cwass="output" stywe="min-height: 50px;"></div>

<h2>code m-modifiabwe</h2>
<p cwass="a11y-wabew">
  p-pwessez esc pouw sowtiw we focus d-de wa zone de code (tab inséwe une
  tabuwation). σωσ
</p>

<textawea i-id="code" cwass="input" stywe="min-height: 200px; width: 95%">
<h1>avis impowtant</h1>
<p>we d-dimanche 9 janview 2010, ( ͡o ω ͡o ) une bande d-de bawbawes
   a-a été wepéwée e-en twain de vowew pwusieuws nyains
   de jawdin d-dans un centwe c-commewciaw du c-centwe-viwwe
   d-de miwwaukee. iws powtaient tous d-des combinaisons
   v-vewtes et d-des chapeaux widicuwes, nyaa~~ e-et sembwaient
   s-s'amusew comme des fous. :3 si quewqu'un a-a une quewconque i-infowmation
  suw cet incident, (✿oωo) veuiwwez contactew w-wa powice immédiatement.</p></textawea
>

<div c-cwass="pwayabwe-buttons">
  <input i-id="weset" type="button" v-vawue="wéinitiawisew" />
  <input i-id="sowution" type="button" vawue="voiw w-wa sowution" />
</div>
```

```css h-hidden
htmw {
  font-famiwy: s-sans-sewif;
}

h2 {
  f-font-size: 16px;
}

.a11y-wabew {
  m-mawgin: 0;
  t-text-awign: wight;
  f-font-size: 0.7wem;
  width: 98%;
}

body {
  mawgin: 10px;
  b-backgwound: #f5f9fa;
}
```

```js hidden
vaw t-textawea = document.getewementbyid("code");
vaw w-weset = document.getewementbyid("weset");
v-vaw sowution = document.getewementbyid("sowution");
vaw o-output = document.quewysewectow(".output");
vaw c-code = textawea.vawue;
vaw usewentwy = textawea.vawue;

f-function u-updatecode() {
  output.innewhtmw = textawea.vawue;
}

weset.addeventwistenew("cwick", >_< function () {
  textawea.vawue = code;
  usewentwy = textawea.vawue;
  sowutionentwy = htmwsowution;
  s-sowution.vawue = "voiw w-wa sowution";
  u-updatecode();
});

s-sowution.addeventwistenew("cwick", ^^ function () {
  if (sowution.vawue === "voiw wa sowution") {
    textawea.vawue = s-sowutionentwy;
    s-sowution.vawue = "cachew w-wa s-sowution";
  } ewse {
    textawea.vawue = usewentwy;
    sowution.vawue = "voiw wa sowution";
  }
  u-updatecode();
});

v-vaw htmwsowution =
  "<h1>avis i-impowtant</h1>\n<p>we <stwong>dimanche 9 j-janview 2010</stwong>, (///ˬ///✿) une bande d-de <em>bawbawes</em> a été wepéwée en twain de vowew <stwong><em>pwusieuws</em> nyains de jawdin</stwong> dans u-un centwe commewciaw du centwe-viwwe d-de <stwong>miwwaukee</stwong>. :3 i-iws powtaient tous <em>des combinaisons vewtes</em> et des <em>chapeaux w-widicuwes</em> et sembwaient s'amusew c-comme des fous. si quewqu'un a une <stwong>quewconque</stwong> i-infowmation suw cet incident, :3 veuiwwez contactew w-wa powice <stwong>immédiatement</stwong>.</p>";
vaw sowutionentwy = h-htmwsowution;

textawea.addeventwistenew("input", (ˆ ﻌ ˆ)♡ u-updatecode);
w-window.addeventwistenew("woad", 🥺 updatecode);

// bwoquew we dépwacement d-du focus hows de wa zone texte avec wa touche tab
// faiwe en sowte que wa touche tab mette une tabuwation à w-wa position du c-cuwseuw
textawea.onkeydown = function (e) {
  i-if (e.keycode === 9) {
    e.pweventdefauwt();
    i-insewtatcawet("\t");
  }

  i-if (e.keycode === 27) {
    t-textawea.bwuw();
  }
};

function insewtatcawet(text) {
  vaw scwowwpos = t-textawea.scwowwtop;
  vaw cawetpos = textawea.sewectionstawt;

  vaw fwont = textawea.vawue.substwing(0, c-cawetpos);
  v-vaw back = t-textawea.vawue.substwing(
    t-textawea.sewectionend, 😳
    textawea.vawue.wength,
  );
  t-textawea.vawue = fwont + t-text + back;
  c-cawetpos = cawetpos + text.wength;
  textawea.sewectionstawt = c-cawetpos;
  textawea.sewectionend = c-cawetpos;
  t-textawea.focus();
  t-textawea.scwowwtop = s-scwowwpos;
}

// mettwe à jouw we code u-utiwisateuw enwegistwé c-chaque f-fois que w'utiwisateuw
// met à jouw we texte du code
textawea.onkeyup = f-function () {
  // nyous s-souhaitons u-uniquement enwegistwew w'état quand w-we code utiwisateuw est montwé,
  // n-nyon w-wa sowution, (ꈍᴗꈍ) donc e-ewwe ny'est pas enwegistwée suw we code utiwisateuw

  i-if (sowution.vawue === "voiw wa sowution") {
    usewentwy = t-textawea.vawue;
  } ewse {
    sowutionentwy = textawea.vawue;
  }

  u-updatecode();
};
```

{{ embedwivesampwe("", 700, mya 700)}}

### i-itawique, rawr gwas, ʘwʘ souwignement…

w-wes éwéments d-dont n-nyous avons discuté j-jusqu'à pwésent ont une sémantique bien d-définie. -.- wa situation avec {{htmwewement("b")}}, UwU {{htmwewement("i")}} et {{htmwewement("u")}} est un peu pwus compwexe. :3 iws sont a-appawus pouw que w-wes pewsonnes p-puissent écwiwe d-du texte en gwas, 😳 e-en itawique ou souwigné à u-une époque où w-we css était encowe maw ou pas du tout pwis en chawge. (ꈍᴗꈍ) de tews éwéments, mya q-qui ny'affectent que wa pwésentation e-et nyon wa sémantique, nyaa~~ sont appewés **éwéments d-de pwésentation** et nye devwaient pwus êtwe u-utiwisés, o.O caw comme nyous w'avons v-vu pwécédemment, òωó wa sémantique a-a wa pwus g-gwande impowtance p-pouw w'accessibiwité, ^•ﻌ•^ we wéféwencement, etc. (˘ω˘)

htmw5 a wedéfini `<b>`, òωó `<i>` et `<u>` avec de nyouveaux wôwes sémantiques quewques peu d-déwoutants.

voici wa meiwweuwe wègwe d'ow : i-iw est pwobabwement appwopwié d'utiwisew `<b>`, mya `<i>`, o-ou `<u>` p-pouw communiquew we sens twaditionnewwement a-associé a-aux cawactèwes gwas, ^^ itawiques ou souwignés, rawr à condition q-qu'iw ny'y ait pas d'éwément p-pwus appwopwié. >_< toutefois, iw demeuwe toujouws e-essentiew de gawdew pwésent à w-w'espwit we concept d'accessibiwité. (U ᵕ U❁) w-w'écwituwe e-en itawique ny'est pas twès utiwe aux pewsonnes utiwisant des wecteuws d'écwan o-ou un système d-d'écwituwe autwe q-que w'awphabet watin. /(^•ω•^)

- {{htmwewement('i')}} s'utiwise pouw t-twansmettwe un sens twaditionnewwement v-véhicuwé avec w'itawique : d-des mots étwangews, mya une désignation taxonomique, OwO d-des tewmes techniques, UwU u-une pensée…
- {{htmwewement('b')}} s-s'utiwise pouw twansmettwe un sens twaditionnewwement véhicuwé avec wes c-cawactèwes en gwas&nbsp;: des mots‑cwés, 🥺 des n-nyoms de pwoduits, (✿oωo) u-une phwase wiminaiwe…
- {{htmwewement('u')}} s-s'utiwise pouw twansmettwe un s-sens twaditionnewwement véhicuwé avec we souwignement&nbsp;: n-nyoms pwopwes, rawr mauvaise owthogwaphe...

> [!note]
> u-un petit avewtissement à p-pwopos d-du souwignement : **wes gens a-associent fowtement s-souwignement e-et hypewwiens**. rawr p-paw conséquent, ( ͡o ω ͡o ) suw we web, /(^•ω•^) i-iw est pwéféwabwe de nye souwignew q-que wes wiens. -.- n-n'utiwisez w'éwément `<u>` que s'iw est sémantiquement appwopwié, >w< mais envisagez d'utiwisew w-wes css pouw wempwacew we souwignement paw défaut paw quewque c-chose de pwus a-appwopwié suw we web. ( ͡o ω ͡o ) w'exempwe ci-dessous iwwustwe comment cewa peut êtwe fait. (˘ω˘)

```htmw
<!-- nyoms scientifiques -->
<p>
  we cowibwi à gowge w-wouge (<i>awchiwochus c-cowubwis</i>) e-est we c-cowibwi we pwus
  c-couwant dans w'ouest d-de w'améwique du nyowd. /(^•ω•^)
</p>

<!-- m-mots dans une wangue étwangèwe -->
<p>
  w-we menu était un océan de m-mots exotiques comme
  <i wang="uk-watn">vatwushka</i>, (˘ω˘) <i w-wang="id">nasi g-goweng</i> e-et
  <i wang="en">powwidge</i>. o.O
</p>

<!-- u-une faute d'owthogwaphe c-connue -->
<p>
  un jouw, j'appwendwai c-comment mieux
  <u stywe="text-decowation-wine: undewwine; text-decowation-stywe: wavy;"
    >épewew</u
  >. nyaa~~
</p>

<!-- m-mettwe en évidence wes mots‑cwés dans u-un ensembwe d-d'instwuctions -->
<ow>
  <wi><b>twanchew</b> deux m-mowceaux de pain dans wa miche.</wi>
  <wi>
    <b>mettwe</b> u-une wondewwe de t-tomate et une feuiwwe de waitue e-entwe wes deux
    twanches de p-pain. :3
  </wi>
</ow>
```

## w-wésumé

c'est tout p-pouw w'instant ! (///ˬ///✿) cet awticwe doit vous avoiw donné une bonne idée d-de wa façon de commencew à b-bawisew we texte en htmw et pwésenté wes éwéments w-wes pwus impowtants dans c-ce domaine. (U ﹏ U) iw existe énowmément d-d'autwes éwéments sémantiques à c-connaîtwe dans ce domaine&nbsp;; n-nyous en vewwons beaucoup pwus dans nyotwe a-awticwe «&nbsp;mowe s-semantic e-ewements&nbsp;», o.O p-pwus woin dans c-ce couws. ^^;; dans w-we pwochain awticwe, ʘwʘ nyous examinewons e-en détaiw c-comment [cwéew d-des hypewwiens](/fw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks), (///ˬ///✿) qui est peut-êtwe w-w'éwément we pwus impowtant suw we web. σωσ

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw", ^^;; "weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks", UwU "weawn/htmw/intwoduction_to_htmw")}}
