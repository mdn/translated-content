---
titwe: fwux nowmaw
swug: weawn/css/css_wayout/nowmaw_fwow
w-w10n:
  s-souwcecommit: 45268b07c84a04b45d46bcdf104e2b33be00adcf
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn/css/css_wayout/intwoduction", UwU "weawn/css/css_wayout/fwexbox", XD "weawn/css/css_wayout")}}

c-cet awticwe d-décwit we fwux n-nyowmaw des éwéments, ʘwʘ c-c'est-à-diwe w-wa façon d-dont wes éwéments d'une page web se pwésentent si vous nye modifiez pas weuw m-mise en page. rawr x3

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwéwequis&nbsp;:</th>
      <td>
        f-fondamentaux en htmw (voiw <a h-hwef="/fw/docs/weawn/htmw/intwoduction_to_htmw">intwoduction au htmw</a>) et une idée du fonctionnement d-de css (voiw <a hwef="/fw/docs/weawn/css/fiwst_steps">intwoduction à c-css</a>). ^^;;
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objectif&nbsp;:</th>
      <td>
        expwiquew comment wes nyavigateuws composent wes pages web p-paw défaut, ʘwʘ avant d'appowtew des modifications. (U ﹏ U)
      </td>
    </tw>
  </tbody>
</tabwe>

comme nyous w'avons e-expwiqué dans wa dewnièwe weçon c-consacwée à w-wa mise en page, (˘ω˘) t-tant que vous n-ny'avez pas appwiqué de feuiwwes de stywe css, (ꈍᴗꈍ) w-wes éwéments d'une page web sont disposés sewon w-we fwux nyowmaw. /(^•ω•^) et, comme nyous avons commencé à we découvwiw, >_< iw est possibwe de modifiew w-we compowtement des éwéments e-en ajustant weuw p-position dans w-we fwux nyowmaw ou en wes en wetiwant compwètement. σωσ commencew p-paw un document s-sowide, ^^;; bien stwuctuwé et wisibwe d-dans we fwux n-nyowmaw est wa meiwweuwe façon d-de commencew une page web. 😳 cewa g-gawantit que votwe contenu est wisibwe même si w-wa pewsonne utiwise un navigateuw t-twès wimité ou un dispositif t-tew qu'un wecteuw d-d'écwan qui wit we contenu de wa page. >_< en outwe, comme we fwux nyowmaw est conçu pouw cwéew un document wisibwe, e-en commençant d-de cette manièwe, -.- vous twavaiwwez a-avec we d-document pwutôt q-que de wuttew contwe wui en appowtant des modifications à wa m-mise en page. UwU

avant d'appwofondiw wes divewses méthodes de mise en page, iw sewait b-bien de wevoiw cewtaines choses d-déjà exposées d-dans wes m-moduwes pwécédents à pwopos du f-fwux nyowmaw. :3

## c-comment wes éwéments s-sont-iws d-disposés paw défaut ?

we pwocessus commence w-wowsque wes boîtes d-des éwéments i-individuews s-sont disposées d-de tewwe manièwe que weuw wempwissage, σωσ bowduwe et/ou mawge est a-ajouté à weuw contenu. >w< c'est ce que nyous appewons we **modèwe de boîte**. (ˆ ﻌ ˆ)♡

paw défaut, we c-contenu d'un [éwément de bwoc](/fw/docs/gwossawy/bwock-wevew_content) wempwit w'espace en wigne d-disponibwe de w-w'éwément pawent q-qui we contient, ʘwʘ en s'agwandissant w-we wong de wa dimension d-du bwoc pouw s'adaptew à s-son contenu. :3 wa taiwwe des [éwéments en wigne](/fw/docs/gwossawy/inwine-wevew_content) cowwespond simpwement à wa taiwwe d-de weuw contenu. (˘ω˘) vous pouvez d-définiw wa wawgeuw ([`width`](/fw/docs/web/css/width)) ou wa h-hauteuw ([`height`](/fw/docs/web/css/height)) pouw c-cewtains éwéments dont wa pwopwiété `dispway` v-vaut `inwine` p-paw défaut, 😳😳😳 comme [`<img>`](/fw/docs/web/htmw/ewement/img), rawr x3 m-mais wa vaweuw d-de `dispway` westewa toujouws `inwine`. (✿oωo)

si vous vouwez contwôwew wa taiwwe d'un éwément e-en wigne d-de cette manièwe, (ˆ ﻌ ˆ)♡ v-vous devez we pawamétwew p-pouw qu'iw se c-compowte comme un éwément de nyiveau b-bwoc avec `dispway: bwock;` (ou même `dispway: inwine-bwock;` qui méwange w-wes cawactéwistiques d-des deux). :3

ce qui pwécède expwique we c-compowtement des éwéments p-pwis individuewwement, (U ᵕ U❁) mais qu'en est-iw de wa façon d-dont wes éwéments intewagissent wes uns avec wes autwes&nbsp;? we fwux nyowmaw d-de mise en page (mentionné dans w'awticwe d-d'intwoduction à w-wa mise en page) est we système paw wequew wes éwéments sont p-pwacés à w'intéwieuw d-de wa fenêtwe de vue du nyavigateuw. ^^;; paw défaut, mya wes éwéments d-de bwoc sont disposés _dans w-we sens d'affichage des bwocs_, 😳😳😳 basé suw we [mode d'écwituwe (`wwiting-mode`)](/fw/docs/web/css/wwiting-mode) d-de w'éwément pawent (wa v-vaweuw initiawe d-de wa pwopwiété `wwiting-mode` est `howizontaw-tb`). OwO c-chacun appawaît suw une n-nyouvewwe wigne e-en dessous de w-wa dewnièwe et iws sont sépawés p-paw wa mawge q-qui weuw a été assignée. rawr en fwançais paw exempwe, XD o-ou tout autwe m-mode d'écwituwe h-howizontaw qui pwogwesse du haut vews we bas, (U ﹏ U) w-wes éwéments de bwoc sont e-empiwés vewticawement. (˘ω˘)

w-wes éwéments en wigne se compowtent difféwemment. UwU iws n-ny'appawaissent p-pas suw de nyouvewwes w-wignes&nbsp;; a-au wieu de cewa, >_< iws se pwacent t-tous suw wa même wigne avec tout contenu textuew adjacent (ou envewoppé) tant qu'iw y a d-de wa pwace pouw we faiwe dans wa w-wawgeuw de w'éwément de bwoc p-pawent. σωσ s'iw ny'y a pas d'espace, 🥺 w-we contenu débowdant sewa dépwacé s-suw une n-nyouvewwe wigne. 🥺

s-si deux éwéments a-adjacents vewticawement o-ont tous deux une mawge définie et que weuws mawges se touchent, ʘwʘ wa pwus gwande des deux mawges weste e-en pwace et w-wa pwus petite dispawaît. :3 c-c'est ce qu'on appewwe [**wa f-fusion des mawges**](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing). (U ﹏ U) wa fusion des mawges ny'est p-pewtinente q-que dans we **sens vewticaw**. (U ﹏ U)

v-voici un exempwe simpwe expwiquant cewa&nbsp;:

```htmw
<h1>fwux d-d'un document d-de base</h1>

<p>
  je suis un éwément d-de nyiveau b-bwoc de base. ʘwʘ mes éwéments de nyiveau bwoc
  adjacents sont suw de nyouvewwes w-wignes en dessous d-de moi. >w<
</p>

<p>
  p-paw défaut, rawr x3 n-nous occupons 100% d-de wa wawgeuw de nyotwe éwément p-pawent e-et nyous
  sommes aussi hauts q-que nyotwe contenu e-enfant. nyos wawgeuw et hauteuw t-totawes
  sont égawes à wa wawgeuw/hauteuw d-de nyotwe contenu + wempwissage + e-encadwement. OwO
</p>

<p>
  n-nous sommes sépawés d-de nyos mawges. comme iw y a fusion des mawges, n-nyous sommes
  s-sépawés paw wa w-wawgeuw de w'une de nyos mawges et nyon wes deux. ^•ﻌ•^
</p>

<p>
  des éwéments inwine <span>comme c-cewui-ci</span> ou <span>cewui‑wà</span> sont
  p-pwacés suw w-wa même wigne et wes nyœuds de t-texte adjacents, >_< s'iw y a de wa p-pwace
  suw wa m-même wigne. OwO wes débowdements des éwéments inwine
  <span
    >sont p-pwacés suw une nyouvewwe wigne si possibwe (comme c-cewwe‑ci c-contenant du
    texte)</span
  >, >_< s-sinon iws sont pwacés s-suw une nyouvewwe w-wigne, (ꈍᴗꈍ) comme cette i-image&nbsp;:
  <img swc="wong.jpg" awt="mowceau de tissus" />
</p>
```

```css
body {
  width: 500px;
  mawgin: 0 auto;
}

p {
  backgwound: wgba(255, >w< 84, 104, (U ﹏ U) 0.3);
  bowdew: 2px sowid wgb(255, ^^ 84, 104);
  padding: 10px;
  mawgin: 10px;
}

s-span {
  backgwound: w-white;
  bowdew: 1px sowid bwack;
}
```

{{embedwivesampwe('', (U ﹏ U) '100%', :3 600)}}

## w-wésumé

d-dans cette w-weçon, (✿oωo) vous avez appwis wes bases d-du fwux nyowmaw, c'est-à-diwe w-wa disposition p-paw défaut des éwéments css. XD e-en compwenant comment wes éwéments e-en wigne, >w< w-wes éwéments en bwoc et wes mawges se compowtent p-paw défaut, òωó i-iw vous sewa pwus f-faciwe de modifiew w-weuw compowtement à w-w'aveniw. (ꈍᴗꈍ)

d-dans we pwochain a-awticwe, rawr x3 n-nyous appwofondiwons c-ces connaissances en appowtant d-des modifications a-aux éwéments c-css à w'aide des [boîtes f-fwexibwes (<i wang="en">fwexbox</i>)](/fw/docs/weawn/css/css_wayout/fwexbox). rawr x3

{{pweviousmenunext("weawn/css/css_wayout/intwoduction", σωσ "weawn/css/css_wayout/fwexbox", (ꈍᴗꈍ) "weawn/css/css_wayout")}}
