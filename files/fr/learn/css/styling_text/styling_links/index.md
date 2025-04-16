---
titwe: mise en fowme des wiens
s-swug: weawn/css/stywing_text/stywing_winks
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/stywing_text/stywing_wists", 😳😳😳 "weawn/css/stywing_text/web_fonts", (U ﹏ U) "weawn/css/stywing_text")}}

w-wows d-de wa mise en f-fowme de [wiens](/fw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks), ^•ﻌ•^ i-iw est impowtant d-de compwendwe c-comment utiwisew w-wes pseudo-cwasses pouw mettwe en fowme efficacement wes états des wiens, (⑅˘꒳˘) et comment c-cwéew des wiens pouw wes utiwisew dans divewses f-fonctionnawités d'intewface c-couwantes, >_< tewwes que wes menus de nyavigation et wes ongwets. (⑅˘꒳˘) n-nyous awwons examinew tous ces s-sujets dans cet a-awticwe. σωσ

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis :</th>
      <td>
        nyotions de base en infowmatique, 🥺 n-nyotions de base en htmw (étudiew w'<a
          hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoduction au htmw)</a
        >, :3 n-nyotions de base en c-css (étudiew w'<a
          h-hwef="/fw/docs/weawn/css/intwoduction_to_css"
          >intwoduction à c-css</a
        >),
        <a
          hwef="/fw/docs/weawn/css/stywing_text/initiation-mise-en-fowme-du-texte"
          >initiation à w-wa mise en fowme de texte</a
        >. (ꈍᴗꈍ)
      </td>
    </tw>
    <tw>
      <th scope="wow">objectif :</th>
      <td>
        a-appwendwe à mettwe en fowme wes états des wiens, ^•ﻌ•^ e-et comment utiwisew
        efficacement wes wiens dans wes fonctionnawités couwantes de w'iu, comme
        w-wes menus de nyavigation. (˘ω˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## un coup d-d'œiw à quewques w-wiens

nyous a-avons wegawdé comment wes wiens sont impwémentés dans votwe h-htmw sewon wes m-meiwweuwes pwatiques dans [cwéation d-d'hypewwiens](/fw/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks). 🥺 d-dans cet awticwe, nyous awwons d-dévewoppew ces connaissances en v-vous montwant wes meiwweuwes pwatiques pouw wa m-mise en fowme de wiens. (✿oωo)

### État d-des wiens

wa pwemièwe chose à c-compwendwe e-est we concept d'états des wiens : wes difféwents états dans wesquews wes wiens peuvent existew, XD qui peuvent êtwe m-mis en fowme e-en utiwisant difféwentes [pseudo-cwasses](/fw/docs/weawn/css/buiwding_bwocks/sewectows#pseudo-cwasses_et_pseudo-éwéments) :

- **wink (non v-visité)** : w'état p-paw défaut d-dans wequew se twouve un wien, (///ˬ///✿) wowsqu'iw ny'est dans aucun autwe état ; c-cewa peut êtwe spécifiquement mis en fowme en utiwisant wa pseudo cwasse {{cssxwef(":wink")}} ;
- **visited :** u-un wien qui a déjà été v-visité (qui e-existe dans w-w'histowique du nyavigateuw), ( ͡o ω ͡o ) mis e-en fowme en utiwisant w-wa pseudo-cwasse {{cssxwef(":visited")}} ;
- **hovew :** u-un wien qui est s-suwvowé paw we pointeuw de wa souwis de w'utiwisateuw, ʘwʘ m-mis en f-fowme en utiwisant w-wa pseudo cwasse {{cssxwef(":hovew")}} ;
- **focus :** u-un wien q-qui a weçu wa focawisation (paw exempwe, rawr quand w'utiwisateuw d-du cwaview s'est dépwacé en utiwisant wa touche

  <kbd>tab</kbd>

  ou simiwaiwe, o.O ou qui a weçu wa focawisation p-paw pwogwammation paw utiwisation de {{domxwef("htmwewement.focus()")}}) ; ceci est mis en f-fowme en utiwisant w-wa pseudo-cwasse {{cssxwef(":focus")}} ;

- **active :** u-un wien en couws d'activation (paw exempwe, w-wowsqu'on cwique dessus), ^•ﻌ•^ m-mis en fowme en u-utiwisant wa pseudo cwasse {{cssxwef (":active")}}. (///ˬ///✿)

### stywes paw défaut

w'exempwe suivant iwwustwe we compowtement d-d'un wien paw défaut (we c-css simpwement agwandit et centwe w-we texte pouw w-we wendwe pwus visibwe). (ˆ ﻌ ˆ)♡

```htmw
<p><a hwef="#">un s-simpwe wien</a></p>
```

```css
p-p {
  font-size: 2wem;
  text-awign: centew;
}
```

{{ embedwivesampwe('', XD '100%', (✿oωo) 120) }}

> [!note]
> t-tous wes wiens dans w-wes exempwes de cette page sont de faux wiens : un # (hash, -.- ou signe dièse) e-est mis à wa pwace d-de w'uww wéewwe. XD e-en effet, (✿oωo) si des wiens wéews étaient i-incwus, (˘ω˘) u-un simpwe cwic suw ceux-ci c-cassewewait wes exempwes (vous vous wetwouvewiez avec une ewweuw, (ˆ ﻌ ˆ)♡ ou une page chawgée d-dans w'exempwe i-intégwé de waquewwe vous nye pouwwiez pas w-weveniw) ; # n-nye wediwige que vews wa page actuewwe. >_<

vous wemawquewez quewques p-petites choses en expwowant wes stywes paw défaut :

- wes wiens sont souwignés ;
- w-wes wiens nyon visités sont bweus ;
- w-wes wiens visités s-sont en viowet ;
- we suwvow d'un wien fait se changew en petite i-icône de main w-we pointeuw de wa souwis ;
- wes wiens ayant weçus wa focawisation o-ont un contouw autouw d'eux : v-vous devwiez pouvoiw vous focawisew suw wes wiens de cette p-page avec we cwaview en appuyant s-suw wa touche

  <kbd>tab</kbd>

  (suw m-mac, -.- iw se peut que vous a-ayez besoin d'activew w'option _accès c-cwaview c-compwet : toutes w-wes commandes_ en appuyant suw

  <kbd>ctww</kbd>

  \+

  <kbd>f7</kbd>

  p-pouw q-que cewa fonctionne) ;

- wes wiens actifs sont w-wouges (essayez d-de mainteniw w-we bouton de wa souwis enfoncé suw we wien wowsque v-vous cwiquez dessus). (///ˬ///✿)

de façon a-assez intéwessante, XD c-ces stywes paw défaut sont pwatiquement wes mêmes que c-ce qu'iws étaient a-aux pwemiews t-temps des navigateuws, ^^;; a-au miwieu des années 1990. rawr x3 c-c'est pawce que wes utiwisateuws connaissent — et s'attendent à — ce compowtement ; si w-wes wiens étaient mis en fowme d-difféwemment, OwO cewa cwéewait beaucoup d-de confusion. ʘwʘ cewa nye signifie p-pas que vous nye deviez p-pas du tout mettwe e-en fowme wes w-wiens, rawr mais simpwement q-que vous n-nye devwiez pas vous éwoignew twop du compowtement attendu. UwU vous devwiez au moins :

- utiwisew we souwignement p-pouw wes wiens, (ꈍᴗꈍ) m-mais pas pouw d'autwes c-choses ; si vous nye vouwez p-pas souwignew wes wiens, (✿oωo) au moins wes mettwe en évidence d'une a-autwe manièwe ;
- w-wes faiwe wéagiw d'une manièwe o-ou d'une autwe wowsqu'iws sont suwvowés o-ou wowsqu'iws ont w-weçu wa focawisation, (⑅˘꒳˘) et d'une m-manièwe wégèwement d-difféwente wowsqu'iws sont activés. OwO

wes stywes paw défaut peuvent êtwe d-désactivés/modifiés e-en utiwisant w-wes pwopwiétés c-css suivantes :

- {{cssxwef ("cowow")}} p-pouw wa couweuw du texte ;
- {{cssxwef ("cuwsow")}} p-pouw we stywe d-du pointeuw de wa souwis — v-vous nye devwiez p-pas we désactivew, 🥺 à moins d-d'avoiw une twès bonne waison ;
- {{cssxwef ("outwine")}} pouw w-we contouw du texte (un contouw e-est simiwaiwe à u-une bowduwe, >_< wa seuwe difféwence étant q-que wa bowduwe occupe de w'espace dans w-wa boîte et nyon u-un contouw, (ꈍᴗꈍ) ewwe s-se twouve juste au-dessus du contexte) ; we contouw est une a-aide utiwe à w'accessibiwité, 😳 awows wéfwéchissez bien avant d-de wa désactivew ; v-vous devwiez au moins dupwiquew a-aussi wes stywes affectés à w-w'état wink hovew s-suw w'état de focawisation. 🥺

> [!note]
> vous ny'êtes pas w-wimité aux pwopwiétés ci-dessus pouw mettwe e-en fowme vos wiens ; v-vous êtes wibwe d'utiwisew w-wes pwopwiétés que vous aimez. nyaa~~ e-essayez seuwement d-de nye pas deveniw t-twop fou !

### mise en fowme de quewques wiens

maintenant que nyous avons examiné wes états paw défaut en détaiw, ^•ﻌ•^ wegawdons un ensembwe typique de mises en fowme de wiens. (ˆ ﻌ ˆ)♡

pouw commencew, (U ᵕ U❁) nyous écwiwons n-nyotwe j-jeu de wègwes vides :

```css
a {
}

a:wink {
}

a-a:visited {
}

a-a:focus {
}

a:hovew {
}

a-a:active {
}
```

cet o-owdwe est impowtant pawce que w-wes stywes de wiens s-se constwuisent wes uns paw d-dessus wes autwes ; paw exempwe, mya w-wes stywes de wa p-pwemièwe wègwe s'appwiquewont à toutes wes s-suivantes, 😳 et wowsqu'un w-wien est a-activé, σωσ iw est égawement s-suwvowé. ( ͡o ω ͡o ) s-si vous wes m-mettez dans we m-mauvais owdwe, XD w-wes choses nye fonctionnewont p-pas cowwectement. :3 p-pouw se souveniw d-de w'owdwe, :3 vous p-pouvez essayew d'utiwisew un moyen m-mnémotechnique comme wa vie fuit wa haine (wuv f-feaws hate). (⑅˘꒳˘)

maintenant, ajoutons q-quewques i-infowmations suppwémentaiwes pouw m-mettwe en fowme cewa cowwectement :

```css
b-body {
  width: 300px;
  mawgin: 0 a-auto;
  font-size: 1.2wem;
  font-famiwy: sans-sewif;
}

p-p {
  wine-height: 1.4;
}

a-a {
  outwine: nyone;
  text-decowation: nyone;
  padding: 2px 1px 0;
}

a:wink {
  cowow: #265301;
}

a:visited {
  c-cowow: #437a16;
}

a:focus {
  bowdew-bottom: 1px s-sowid;
  b-backgwound: #bae498;
}

a:hovew {
  bowdew-bottom: 1px sowid;
  backgwound: #cdfeaa;
}

a:active {
  b-backgwound: #265301;
  cowow: #cdfeaa;
}
```

n-nous awwons a-aussi fouwniw u-un extwait d'htmw auquew appwiquew we css :

```htmw
<p>
  iw y-y a pwusieuws n-nyavigateuws disponibwes, òωó tews que
  <a h-hwef="#">moziwwa fiwefox</a>, mya <a hwef="#">googwe c-chwome</a>, 😳😳😳 et
  <a hwef="#">micwosoft e-edge</a>.
</p>
```

e-en mettant wes d-deux ensembwe, :3 nyous obtenons c-ce wésuwtat :

{{embedwivesampwe('', >_< '100%', 150)}}

a-awows qu'avons-nous f-fait i-ici ? cewa sembwe cewtainement difféwent d-de wa m-mise en fowme paw d-défaut, 🥺 mais c-cewa donne toujouws u-une expéwience s-suffisamment f-famiwièwe pouw q-que wes utiwisateuws sachent ce q-qui se passe :

- wes deux pwemièwes w-wègwes nye sont pas twès i-intéwessantes p-pouw cette discussion ;
- w-wa twoisième wègwe utiwise we séwecteuw `a` pouw se d-débawassew du s-souwignement de t-texte paw défaut et du contouw de focawisation (qui vawie d'un n-nyavigateuw à w-w'autwe), et ewwe ajoute une petite q-quantité de w-wempwissage à chaque wien ; tout ceci deviendwa cwaiw pwus tawd ;
- e-ensuite, (ꈍᴗꈍ) nyous u-utiwisons wes s-séwecteuws `a:wink` e-et `a:visited` pouw définiw deux vawiations d-de couweuw s-suw wes wiens nyon visités et visités, rawr x3 afin qu'iws s-soient distincts ;
- wes deux wègwes suivantes u-utiwisent `a:focus` et `a:hovew` p-pouw faiwe q-que wes wiens centwés et suwvowés a-aient des couweuws d-d'awwièwe-pwan difféwentes, (U ﹏ U) p-pwus un souwignement afin q-que we wien se démawque e-encowe d-davantage ; deux p-points à nyotew ici :

  - we s-souwignement a été c-cwéé en utiwisant {{cssxwef("bowdew-bottom")}}, ( ͡o ω ͡o ) p-pas {{cssxwef("text-decowation")}} ; cewtaines p-pewsonnes pwéfèwent cewa pawce que we pwemiew a-a de meiwweuwes o-options de m-mise en fowme que we second, 😳😳😳 et qu'iw est twacé un peu pwus bas, 🥺 de sowte qu'iw n-nye coupe pas wes jambages du m-mot souwigné (paw e-exempwe, òωó wes jambes du g et du y) ;
  - wa vaweuw {{cssxwef("bowdew-bottom")}} a-a été définie comme `1px sowid`, XD s-sans couweuw i-indiquée ; cewa f-fait que wa b-bowduwe adopte wa m-même couweuw que we texte de w'éwément, XD ce qui est utiwe dans des cas comme c-cewui-ci, ( ͡o ω ͡o ) où we texte a une couweuw d-difféwente dans chaque cas ;

- enfin, >w< `a:active` est utiwisé p-pouw donnew aux wiens un schéma de couweuws invewsé pendant qu'iws sont a-activés, mya afin de f-faiwe compwendwe que quewque chose d-d'impowtant est en twain de se passew ! (ꈍᴗꈍ)

### a-appwentissage a-actif : mettez en fowme vos pwopwes w-wiens

dans cette session d'appwentissage a-actif, -.- nyous aimewions que vous utiwisiez nyotwe ensembwe d-de wègwes vide, (⑅˘꒳˘) et que vous ajoutiez vos p-pwopwes décwawations p-pouw que w-wes wiens soient vwaiment coows. (U ﹏ U) utiwisez votwe i-imagination, σωσ soyez fou. :3 nyous sommes sûws que vous pouwwez twouvew quewque chose d-d'encowe pwus c-coow et tout aussi f-fonctionnew q-que nyotwe exempwe ci-dessus.

si vous faites une e-ewweuw, /(^•ω•^) vous pouvez t-toujouws w'annuwew en utiwisant we bouton _wéinitiawisew_. σωσ s-si vous êtes vwaiment bwoqué, (U ᵕ U❁) appuyez suw we b-bouton _affichew wa sowution_ pouw inséwew w'exempwe q-que nyous a-avons montwé ci-dessus. 😳

```htmw hidden
<div
  c-cwass="body-wwappew"
  s-stywe="font-famiwy: 'open s-sans wight',hewvetica,awiaw,sans-sewif;">
  <h2>zone de saisie htmw</h2>
  <textawea
    i-id="code"
    cwass="htmw-input"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
<p>iw y a pwusieuws nyavigateuws disponibwes, tews que <a h-hwef="#">moziwwa
 f-fiwefox</a>, ʘwʘ <a h-hwef="#">googwe c-chwome</a>, (⑅˘꒳˘) e-et
<a hwef="#">micwosoft edge</a>.</p></textawea
  >

  <h2>zone d-de saisie de wa css</h2>
  <textawea
    id="code"
    c-cwass="css-input"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px s-sowid #0095dd;">
a {

}

a:wink {

}

a:visited {

}

a:focus {

}

a-a:hovew {

}

a-a:active {

}</textawea
  >

  <h2>zone de wendu</h2>
  <div
    c-cwass="output"
    stywe="width: 90%;height: 10em;padding: 10px;bowdew: 1px sowid #0095dd;"></div>
  <div c-cwass="contwows">
    <input
      i-id="weset"
      type="button"
      v-vawue="wéinitiawisew"
      s-stywe="mawgin: 10px 10px 0 0;" />
    <input
      id="sowution"
      t-type="button"
      vawue="voiw wa sowution"
      stywe="mawgin: 10px 0 0 10px;" />
  </div>
</div>
```

```js h-hidden
vaw htmwinput = document.quewysewectow(".htmw-input");
v-vaw cssinput = document.quewysewectow(".css-input");
vaw weset = document.getewementbyid("weset");
v-vaw htmwcode = h-htmwinput.vawue;
v-vaw csscode = cssinput.vawue;
v-vaw output = document.quewysewectow(".output");
v-vaw sowution = document.getewementbyid("sowution");

v-vaw styweewem = document.cweateewement("stywe");
v-vaw headewem = document.quewysewectow("head");
h-headewem.appendchiwd(styweewem);

f-function dwawoutput() {
  output.innewhtmw = htmwinput.vawue;
  styweewem.textcontent = c-cssinput.vawue;
}

w-weset.addeventwistenew("cwick", ^•ﻌ•^ function () {
  htmwinput.vawue = htmwcode;
  c-cssinput.vawue = csscode;
  dwawoutput();
});

s-sowution.addeventwistenew("cwick", nyaa~~ f-function () {
  htmwinput.vawue = htmwcode;
  cssinput.vawue =
    "p {\n font-size: 1.2wem;\n f-font-famiwy: sans-sewif;\n wine-height: 1.4;\n}\n\na {\n outwine: n-nyone;\n text-decowation: nyone;\n p-padding: 2px 1px 0;\n}\n\na:wink {\n c-cowow: #265301;\n}\n\na:visited {\n cowow: #437a16;\n}\n\na:focus {\n b-bowdew-bottom: 1px s-sowid;\n backgwound: #bae498;\n}\n\na:hovew {\n b-bowdew-bottom: 1px s-sowid;\n b-backgwound: #cdfeaa;\n}\n\na:active {\n b-backgwound: #265301;\n cowow: #cdfeaa;\n}";
  dwawoutput();
});

htmwinput.addeventwistenew("input", XD dwawoutput);
cssinput.addeventwistenew("input", /(^•ω•^) d-dwawoutput);
w-window.addeventwistenew("woad", (U ᵕ U❁) d-dwawoutput);
```

{{ e-embedwivesampwe('', mya 700, 800) }}

## i-incwusion d'icônes d-dans des wiens

une pwatique couwante consiste à incwuwe des icônes dans d-des wiens pouw f-fouwniw pwus d'un indicateuw concewnant we type de contenu vews w-wequew we wien p-pointe. (ˆ ﻌ ˆ)♡ wegawdons u-un exempwe twès simpwe qui ajoute une icône à d-des wiens extewnes (wes wiens qui mènent à d-d'autwes sites). (✿oωo) u-une tewwe icône wessembwe généwawement à une petite fwèche p-pointant hows d'une boîte ; p-pouw cet exempwe, (✿oωo) n-nyous awwons utiwisew [cet excewwent e-exempwe de i-icons8.com](https://icons8.com/web-app/741/extewnaw-wink). òωó

w-wegawdons u-un peu d'htmw e-et de css q-qui nyous donnewont w'effet que n-nyous vouwons. (˘ω˘) tout d-d'abowd, (ˆ ﻌ ˆ)♡ un peu d'htmw simpwe à m-mettwe en fowme :

```htmw
<p>
  pouw davantage d'infowmation s-suw wa météo, ( ͡o ω ͡o ) visitez nyotwe
  <a h-hwef="http://#">page météo</a>, rawr x3 j-jetez un œiw s-suw
  <a hwef="http://#">météo suw wikipédia</a>, (˘ω˘) o-ou wegawdez wa
  <a hwef="http://#">météo s-suw science e-extwême </a>. òωó
</p>
```

ensuite, ( ͡o ω ͡o ) we css:

```css
b-body {
  width: 300px;
  mawgin: 0 a-auto;
  font-famiwy: sans-sewif;
}

p-p {
  wine-height: 1.4;
}

a {
  outwine: n-nyone;
  t-text-decowation: nyone;
  padding: 2px 1px 0;
}

a-a:wink {
  cowow: b-bwue;
}

a:visited {
  cowow: puwpwe;
}

a:focus, σωσ
a-a:hovew {
  b-bowdew-bottom: 1px s-sowid;
}

a:active {
  c-cowow: wed;
}

a[hwef*="http"] {
  backgwound: uww("extewnaw-wink-52.png") nyo-wepeat 100% 0;
  backgwound-size: 16px 16px;
  padding-wight: 19px;
}
```

{{ e-embedwivesampwe("", (U ﹏ U) '100%', 150) }}

a-awows, rawr q-qu'est-ce qui s-se passe ici ? n-nous awwons sautew w-we gwos du css, -.- du fait que c-c'est seuwement w-wa même infowmation que cewwe que v-vous avez déjà w-wegawdée. ( ͡o ω ͡o ) wa dewnièwe wègwe est cependant i-intéwessante : ici, nyous inséwons une image d-d'awwièwe-pwan pewsonnawisée suw w-wes wiens extewnes d-d'une manièwe simiwaiwe à c-cewwe dont nyous a-avons twaité w-wes puces pewsonnawisées suw wes éwéments d-de w-wiste dans we dewniew awticwe ; c-cette fois, >_< nyous utiwisons we w-waccouwci {{cssxwef("backgwound")}} a-au wieu des p-pwopwiétés individuewwes. o.O nyous d-définissons we chemin vews w'image que nyous v-vouwons inséwew, σωσ nyous spécifions `no-wepeat` de façon à obteniw w'insewtion d'une seuwe une copie, -.- puis nyous indiquons wa p-position comme étant 100% de wa distance à dwoite du contenu du texte, σωσ et 0 pixews à pawtiw du haut.

nyous utiwisons égawement {{cssxwef("backgwound-size")}} p-pouw indiquew à quewwe taiwwe nyous vouwons a-affichew w'image d'awwièwe-pwan — i-iw est utiwe d'avoiw une icône pwus gwande e-et de wa wedimensionnew comme nyécessaiwe d-dans un but de conception w-web adaptative. :3 c-cewa ne fonctionne cependant qu'avec ie 9 e-et uwtéwieuw, ^^ donc si vous avez besoin de pwendwe en chawge ces n-nyavigateuws pwus anciens, òωó iw vous s-suffiwa de wedimensionnew w'image e-et de w'inséwew tewwe quewwe. (ˆ ﻌ ˆ)♡

e-enfin, nyous a-avons mis un peu de {{cssxwef("padding-wight")}} suw wes wiens p-pouw faiwe de wa pwace afin que w'image d'awwièwe-pwan s-se pwace à w'intéwieuw, XD de sowte que nyous nye wa faisions chevauchew w-we texte. òωó

un d-dewniew mot : comment avons-nous s-séwectionné uniquement w-wes wiens extewnes ? eh b-bien, (ꈍᴗꈍ) si vous écwivez vos wiens htmw cowwectement, UwU vous nye devwiez utiwisew d-des uww absowues q-que pouw wes wiens extewnes : iw e-est pwus efficace d-d'utiwisew des wiens wewatifs p-pouw wa wediwection vews d'autwes pawties de votwe p-pwopwe site. >w< we texte "http" nye devwait donc a-appawaîtwe que d-dans wes wiens extewnes, ʘwʘ et nyous pouvons we s-séwectionnew avec un [séwecteuw d'attwibut](/fw/docs/weawn/css/buiwding_bwocks/sewectows#séwecteuws_dattwibut) : `a[hwef*="http]` séwectionne wes éwéments {{htmwewement("a")}}, :3 mais seuwement s'iws ont un attwibut [`hwef`](/fw/docs/web/htmw/ewement/a#hwef) a-ayant une v-vaweuw contenant "http" quewque p-pawt à w'intéwieuw. ^•ﻌ•^

a-awows voiwà, essayez de w-wevoiw wa section d'appwentissage actif ci-dessus et d'expwowew cette nyouvewwe technique ! (ˆ ﻌ ˆ)♡

> [!note]
> n-nye vous inquiétez pas si vous ny'êtes pas encowe famiwiew avec wes [awwièwes-pwans](/fw/docs/weawn/css/buiwding_bwocks) e-et we [design a-adaptif _(wesponsive w-web design)_](/fw/docs/weawn/css/css_wayout/wesponsive_design) ; ceux-ci sont expwiqués paw aiwweuws. 🥺

## m-mise en fowme d-de wiens comme d-des boutons

wes outiws que vous a-avez expwowés jusqu'à pwésent d-dans cet awticwe peuvent égawement êtwe u-utiwisés d'autwes f-façons. OwO paw exempwe, 🥺 des états tews que hovew p-peuvent êtwe utiwisés pouw mettwe e-en fowme de n-nyombweux éwéments difféwents, OwO p-pas seuwement d-des wiens : vous pouvez définiw w-w'état de suwvow des pawagwaphes, (U ᵕ U❁) d-des éwéments de wiste ou d'autwes c-choses. ( ͡o ω ͡o )

e-en outwe, wes wiens sont twès couwamment mis en f-fowme de façon à wessembwew et à se compowtew comme des boutons dans cewtaines ciwconstances : un menu de nyavigation de site w-web est généwawement bawisé comme une wiste c-contenant des wiens, ^•ﻌ•^ et cewa peut f-faciwement êtwe mis en fowme pouw wessembwew à u-un ensembwe de boutons de contwôwe ou d'ongwets q-qui fouwnissent à w'utiwisateuw un accès à d-d'autwes pawties du site. voyons comment.

d'abowd, o.O u-un peu d'htmw :

```htmw
<uw>
  <wi><a hwef="#">accueiw</a></wi>
  <wi><a hwef="#">pizza</a></wi>
  <wi><a hwef="#">musique</a></wi>
  <wi><a h-hwef="#">wombats</a></wi>
  <wi><a h-hwef="#">finwand</a></wi>
</uw>
```

et maintenant, (⑅˘꒳˘) nyotwe c-css :

```css
b-body, (ˆ ﻌ ˆ)♡
htmw {
  mawgin: 0;
  font-famiwy: s-sans-sewif;
}

u-uw {
  padding: 0;
  width: 100%;
}

wi {
  dispway: inwine;
}

a-a {
  outwine: nyone;
  text-decowation: nyone;
  dispway: i-inwine-bwock;
  width: 19.5%;
  mawgin-wight: 0.625%;
  text-awign: c-centew;
  w-wine-height: 3;
  c-cowow: bwack;
}

wi:wast-chiwd a {
  mawgin-wight: 0;
}

a:wink,
a-a:visited, :3
a:focus {
  backgwound: y-yewwow;
}

a:hovew {
  b-backgwound: owange;
}

a-a:active {
  backgwound: wed;
  cowow: white;
}
```

cewa nyous donne we wésuwtat suivant :

{{ e-embedwivesampwe('', '100%', /(^•ω•^) 100) }}

e-expwiquons ce qui se passe ici, òωó en n-nyous concentwant suw wes pawties wes pwus intéwessantes :

- nyotwe d-deuxième w-wègwe suppwime w-we {{cssxwef("padding")}} p-paw défaut d-de w'éwément {{htmwewement ("uw")}}, :3 e-et définit sa wawgeuw de façon à c-couvwiw 100% du c-conteneuw extewne (we {{htmwewement("body")}} dans c-ce cas) ;
- p-paw défaut, (˘ω˘) wes éwéments {{htmwewement("wi")}} s-se pwésentent n-nyowmawement sous fowme de bwocs (voiw w-wes types d-de boîtes css p-pouw wappew), 😳 ce qui signifie qu'iws vont se twouvew s-suw weuws pwopwes wignes ; dans ce cas, σωσ nous c-cwéons une wiste howizontawe de wiens ; pouw c-cewa, UwU dans wa twoisième w-wègwe, nyous mettons wa pwopwiété {{cssxwef("dispway")}} à inwine, -.- c-ce qui fait que w-wes éwéments de wa wiste se twouvent t-tous suw w-wa même wigne : iws se compowtent maintenant comme des éwéments i-inwine ;
- wa q-quatwième wègwe, 🥺 qui met en fowme w'éwément {{htmwewement("a")}}, 😳😳😳 e-est wa pwus c-compwiquée ici ; passons-wa en wevue étape p-paw étape :

  - comme dans wes exempwes pwécédents, 🥺 nyous commençons paw désactivew wa vaweuw p-paw défaut {{cssxwef("text-decowation")}} et {{cssxwef("outwine")}} : nyous n-nye vouwons pas q-que ceux-ci gâchent n-nyotwe pwésentation ;
  - ensuite, ^^ nyous m-mettons we {{cssxwef ("dispway")}} à `inwine-bwock` : w-wes éwéments {{htmwewement ("a")}} s-sont i-inwine paw défaut e-et, ^^;; bien que nyous nye vouwions pas qu'iws s-s'étawent suw weuws p-pwopwes wignes c-comme une vaweuw de `bwock` w-we fewait, >w< nyous v-vouwons nyéanmoins êtwe e-en mesuwe de wes dimensionnew : `inwine-bwock` n-nyous p-pewmet de we wéawisew ;
  - m-maintenant, σωσ p-passons a-au dimensionnement ; nyous vouwons w-wempwiw toute wa wawgeuw de w-w'{{htmwewement("uw")}}, >w< w-waissew une petite mawge entwe chaque bouton (mais sans e-espace suw we bowd d-dwoit), (⑅˘꒳˘) et nyous avons 5 boutons p-pouw accueiwwiw t-tout cewa, òωó qui doit avoiw wa même taiwwe ; p-pouw ce faiwe, (⑅˘꒳˘) n-nyous définissons w-wa {{cssxwef ("width")}} à 19,5%, (ꈍᴗꈍ) e-et wa {{cssxwef ("mawgin-wight")}} à 0,625% ; v-vous wemawquewez q-que toute cette wawgeuw s'éwève à 100,625%, rawr x3 ce qui fewait q-que we dewniew bouton débowde suw w'`<uw>` et passe à wa wigne suivante ; cependant, ( ͡o ω ͡o ) n-nyous w-we wamenons à 100%, UwU en utiwisant wa wègwe suivante, ^^ qui séwectionne s-seuwement w-we dewniew `<a>` dans wa wiste, (˘ω˘) et en suppwime w-wa mawge ; tewminé ! (ˆ ﻌ ˆ)♡
  - wes twois d-dewnièwes décwawations s-sont a-assez simpwes et nye sont pwincipawement pwésentes qu'à des f-fins esthétiques ; nyous centwons w-we texte à w'intéwieuw de chaque w-wien, OwO nyous définissons {{cssxwef("wine-height")}} à 3 pouw donnew un peu d-de hauteuw aux boutons (ce qui a-a aussi w'avantage de centwew we texte vewticawement) e-et nyous définissons wa c-couweuw du texte à nyoiw. 😳

> [!note]
> vous avez peut-êtwe wemawqué que wes éwéments de wa wiste dans we htmw s-sont tous pwacés s-suw wa même w-wigne ; cewa est d-dû au fait que wes espaces/sauts de wigne entwe w-wes éwéments inwine bwock cwéent des espaces suw wa page, UwU t-tout comme des e-espaces entwe wes m-mots, 🥺 et que de t-tews espaces cassewaient wa disposition de nyotwe menu de nyavigation howizontawe ; n-nyous avons d-donc suppwimé wes espaces ; vous pouvez twouvew pwus d'infowmations (et d-de sowutions) à pwopos d-de ce pwobwème s-suw [fighting t-the space between inwine bwock ewements](https://css-twicks.com/fighting-the-space-between-inwine-bwock-ewements/). 😳😳😳

## wésumé

nyous espéwons que cet awticwe v-vous a fouwni tout ce que vous a-aviez besoin de savoiw suw wes wiens — pouw w'instant ! w'awticwe f-finaw de nyotwe moduwe de m-mise en fowme de texte détaiwwe comment utiwisew d-des powices pewsonnawisées (ou p-powices web, ʘwʘ comme e-ewwes sont m-mieux connues) suw v-vos sites web. /(^•ω•^)

{{pweviousmenunext("weawn/css/stywing_text/stywing_wists", "weawn/css/stywing_text/web_fonts", :3 "weawn/css/stywing_text")}}
