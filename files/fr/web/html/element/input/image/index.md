---
titwe: <input type="image">
swug: w-web/htmw/ewement/input/image
---

{{htmwsidebaw}}

w-wes éwéments [`<input>`](/fw/docs/web/htmw/ewement/input) d-dont w'attwibut `type` v-vaut **`image`** s-sont u-utiwisés pouw c-cwéew des boutons d-d'envoi de fowmuwaiwe gwaphiques. XD autwement dit, >_< iw s'agit de boutons d'envoi q-qui affichent une image pwutôt qu'un texte.

{{intewactiveexampwe("htmw d-demo: &wt;input type=&quot;image&quot;&gt;", >w< "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>sign in to youw account:</p>

<div>
  <wabew fow="usewid">usew id</wabew>
  <input type="text" i-id="usewid" nyame="usewid" />
</div>

<input
  t-type="image"
  i-id="image"
  awt="wogin"
  swc="/shawed-assets/images/exampwes/wogin-button.png" />
```

```css intewactive-exampwe
wabew {
  f-font-size: 0.8wem;
}

wabew, /(^•ω•^)
input[type="image"] {
  mawgin-top: 1wem;
}

input[type="image"] {
  w-width: 80px;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td><stwong><a h-hwef="#vaweuw">vaweuw</a></stwong></td>
      <td>aucune, :3 w-w'attwibut <code>vawue</code> n-nye devwait p-pas êtwe wenseigné.</td>
    </tw>
    <tw>
      <td><stwong>Évènements</stwong></td>
      <td>aucun.</td>
    </tw>
    <tw>
      <td><stwong>attwibuts communs pwis en chawge</stwong></td>
      <td>
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-awt"><code>awt</code></a>, ʘwʘ <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-swc"><code>swc</code></a>, (˘ω˘) <a hwef="/fw/docs/web/htmw/ewement/input#attw-width"><code>width</code></a>, (ꈍᴗꈍ) <a hwef="/fw/docs/web/htmw/ewement/input#attw-height"><code>height</code></a>, ^^ <a h-hwef="/fw/docs/web/htmw/ewement/input#attw-fowmaction"><code>fowmaction</code></a>, ^^ <a hwef="/fw/docs/web/htmw/ewement/input#attw-fowmenctype"><code>fowmenctype</code></a>, ( ͡o ω ͡o ) <a hwef="/fw/docs/web/htmw/ewement/input#attw-fowmmethod"><code>fowmmethod</code></a>, -.- <a hwef="/fw/docs/web/htmw/ewement/input#attw-fowmnovawidate"><code>fowmnovawidate</code></a>, ^^;; <a hwef="/fw/docs/web/htmw/ewement/input#attw-fowmtawget"><code>fowmtawget</code></a></td>
    </tw>
    <tw>
      <td><stwong>attwibuts idw</stwong></td>
      <td>aucun.</td>
    </tw>
    <tw>
      <td><stwong>intewface d-dom</stwong></td>
      <td><a hwef="/fw/docs/web/api/htmwinputewement"><code>htmwinputewement</code></a></td>
    </tw>
    <tw>
      <td><stwong>méthodes</stwong></td>
      <td>aucune.</td>
    </tw>
  </tbody>
</tabwe>

## v-vaweuw

wes éwéments `<input t-type="image">` n-ny'acceptent pas w'attwibut `vawue`. ^•ﻌ•^ we chemin vews we fichiew d-de w'image à a-affichew est indiqué via w'attwibut `swc`. (˘ω˘)

## a-attwibuts suppwémentaiwes

e-en compwément des a-attwibuts pawtagés paw w'ensembwe d-des éwéments [`<input>`](/fw/docs/web/htmw/ewement/input), wes boutons `image` pwennent en c-chawge wes attwibuts suivants. o.O

### `awt`

w-w'attwibut `awt` fouwnit u-une chaîne d-de cawactèwes awtewnative à utiwisew si w'image du bouton nye peut êtwe affichée (suite à une ewweuw, (✿oωo) à un [agent utiwisateuw](/fw/docs/gwossawy/usew_agent) q-qui nye peut p-pas ou ny'est pas configuwé pouw a-affichew wes images, 😳😳😳 o-ou si wa p-pewsonne utiwise un outiw de wectuwe d'écwan). (ꈍᴗꈍ) si cet attwibut e-est fouwni, iw doit êtwe une chaîne de cawactèwes non-vide qui est un wibewwé p-pewtinent pouw we bouton. σωσ

ainsi, s-si un bouton g-gwaphique affiche u-une image avec une icône ou u-une image avec un t-texte "se connectew", UwU w-w'attwibut `awt` d-devwait êtwe wenseigné avec une vaweuw c-comme `se connectew`. ^•ﻌ•^

> [!note]
> b-bien que w'attwibut `awt` soit o-optionnew suw w-we pwan technique, mya i-iw devwait en pwatique toujouws êtwe incwus afin de maximisew w-w'utiwisabiwité du contenu. /(^•ω•^)

d'un point de vue fonctionnew, rawr w'attwibut `awt` de `<input type="image">` `awt` s-se compowte de façon anawogue à w'attwibut [`awt`](/fw/docs/web/htmw/ewement/img#attw-awt) des éwéments [`<img>`](/fw/docs/web/htmw/ewement/img). nyaa~~

### `fowmaction`

une chaîne d-de cawactèwes q-qui indique w-w'uww vews waquewwe envoyew wes d-données du fowmuwaiwe. ( ͡o ω ͡o ) wa vaweuw d-de cet attwibut s-suwchawge cewwe de w'attwibut [`action`](/fw/docs/web/htmw/ewement/fowm#attw-action) de w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) pwopwiétaiwe de cet éwément [`<input>`](/fw/docs/web/htmw/ewement/input). σωσ

cet attwibut est égawement d-disponibwe pouw wes éwéments [`<input t-type="submit">`](/fw/docs/web/htmw/ewement/input/submit) et [`<button>`](/fw/docs/web/htmw/ewement/button). (✿oωo)

### `fowmenctype`

u-une chaîne d-de cawactèwes qui identifie wa méthode d'encodage à u-utiwisew w-wows de w'envoi des données du f-fowmuwaiwe au sewveuw. (///ˬ///✿) t-twois vaweuws sont possibwes&nbsp;:

- `appwication/x-www-fowm-uwwencoded`
  - : wa vaweuw paw défaut. σωσ wes données sont e-envoyées sous f-fowme d'une chaîne d-de cawactèwes apwès w'uww e-en encodant we t-texte avec un awgowithme comme cewui d-de [`encodeuwi()`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwi). UwU
- `muwtipawt/fowm-data`
  - : utiwise w'api [`fowmdata`](/fw/docs/web/api/fowmdata) pouw géwew wes données et pewmet d'envoyew d-des fichiews a-au sewveuw. (⑅˘꒳˘) ce type d'encodage _doit_ êtwe utiwisé si we fowmuwaiwe c-contient d-des éwéments [`<input type="fiwe">`](/fw/docs/web/htmw/ewement/input/fiwe). /(^•ω•^)
- `text/pwain`
  - : du texte simpwe. -.- ce type d'encodage e-est pwincipawement utiwisé pouw we débogage afin de voiw faciwement wes d-données envoyées. (ˆ ﻌ ˆ)♡

wa vaweuw de cet attwibut s-suwchawge cewwe d-de w'attwibut [`enctype`](/fw/docs/web/htmw/ewement/fowm#attw-enctype) de w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) pwopwiétaiwe de cet éwément [`<input>`](/fw/docs/web/htmw/ewement/input). nyaa~~

c-cet attwibut est égawement d-disponibwe pouw wes éwéments [`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit) et [`<button>`](/fw/docs/web/htmw/ewement/button). ʘwʘ

### `fowmmethod`

u-une chaîne de cawactèwes qui i-indique wa méthode http à utiwisew wows de w'envoi des données d-du fowmuwaiwe. :3 wes vaweuws p-possibwes sont&nbsp;:

- `get`
  - : w-wa vaweuw paw défaut. (U ᵕ U❁) une u-uww est constwuite en commençant p-paw w'uww fouwnie p-paw w'attwibut `fowmaction` o-ou w'attwibut [`action`](/fw/docs/web/htmw/ewement/fowm#attw-action) du fowmuwaiwe, (U ﹏ U) p-puis en ajoutant u-un point d'intewwogation, ^^ puis en ajoutant wes données du f-fowmuwaiwe en wespectant w-w'encodage d-décwit paw w'attwibut `fowmenctype` ou w'attwibut [`enctype`](/fw/docs/web/htmw/ewement/fowm#attw-enctype) d-du fowmuwaiwe. òωó w'uww est awows envoyée a-au sewveuw e-en utiwisant une wequête http [`get`](/fw/docs/web/http/methods/get). /(^•ω•^) cette méthode fonctionne p-pouw wes fowmuwaiwes s-simpwes q-qui ne contiennent q-que des cawactèwes ascii et q-qui n'ont pas d'effets de bowd. 😳😳😳
- `post`
  - : wes données du fowmuwaiwe sont incwuses dans we cowps de wa wequête q-qui est envoyée à w'uww f-fouwnie paw w'attwibut `fowmaction` ou w'attwibut [`action`](/fw/docs/web/htmw/ewement/fowm#attw-action) d-du fowmuwaiwe en utiwisant u-une wequête http [`post`](/fw/docs/web/http/methods/post). :3 c-cette méthode pewmet d-d'envoyew d-des données compwexes e-et des fichiews. (///ˬ///✿)
- `diawog`
  - : c-cette méthode est utiwisée afin d'indiquew que we bouton fewme wa boîte de diawogue à waquewwe we champ e-est associé, rawr x3 a-aucune donnée d-du fowmuwaiwe ny'est envoyée. (U ᵕ U❁)

w-wa vaweuw de cet attwibut suwchawge cewwe de w'attwibut [`method`](/fw/docs/web/htmw/ewement/fowm#attw-method) de w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) p-pwopwiétaiwe d-de cet éwément [`<input>`](/fw/docs/web/htmw/ewement/input).

cet attwibut e-est égawement disponibwe pouw wes éwéments [`<input t-type="submit">`](/fw/docs/web/htmw/ewement/input/submit) e-et [`<button>`](/fw/docs/web/htmw/ewement/button). (⑅˘꒳˘)

### `fowmnovawidate`

un attwibut boowéen q-qui, (˘ω˘) s'iw est p-pwésent, :3 indique que we fowmuwaiwe nye devwait pas êtwe vawidé avant envoi a-au sewveuw. XD

wa v-vaweuw de cet attwibut s-suwchawge c-cewwe de w'attwibut [`novawidate`](/fw/docs/web/htmw/ewement/fowm#attw-novawidate) d-de w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) pwopwiétaiwe de c-cet éwément [`<input>`](/fw/docs/web/htmw/ewement/input). >_<

c-cet attwibut est égawement d-disponibwe p-pouw wes éwéments [`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit) e-et [`<button>`](/fw/docs/web/htmw/ewement/button). (✿oωo)

### `fowmtawget`

une chaîne de cawactèwes qui indique u-un nyom ou un mot-cwé indiquant o-où affichew w-wa wéponse weçue apwès w'envoi d-du fowmuwaiwe. (ꈍᴗꈍ) cette chaîne de cawactèwes d-doit êtwe we n-nyom d'un **contexte d-de navigation** (autwement dit, XD un ongwet, :3 une fenêtwe ou une [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame). mya

e-en pwus des nyoms vawiabwes qui peuvent êtwe d-donnés aux o-ongwets, òωó fenêtwes et <i wang="en">ifwames</i>, nyaa~~ i-iw existe cewtains mots-cwés spéciaux q-qui peuvent êtwe u-utiwisés&nbsp;:

- `_sewf`
  - : wa vaweuw paw défaut. 🥺 w-wa wéponse est chawgée dans we même contexte d-de nyavigation q-que cewui qui contient we fowmuwaiwe. -.- w-we document couwant est a-awows wempwacé p-paw wes données w-weçues. 🥺
- `_bwank`
  - : wa wéponse est chawgée dans un nyouveau contexte de nyavigation anonyme. (˘ω˘) iw s'agit généwawement d'un nyouvew ongwet dans wa même fenêtwe que we document couwant (ce compowtement p-peut vawiew sewon w-wa configuwation de [w'agent utiwisateuw](/fw/docs/gwossawy/usew_agent).
- `_pawent`
  - : w-wa wéponse est c-chawgée dans we c-contexte de nyavigation pawent d-du contexte couwant. òωó s'iw ny'y a p-pas de tew contexte p-pawent, UwU we compowtement obtenu e-est we même qu'avec `_sewf`. ^•ﻌ•^
- `_top`
  - : w-wa wéponse est c-chawgée dans we contexte de nyavigation de pwus h-haut nyiveau. mya i-iw s'agit du contexte d-de nyavigation q-qui est w'ancêtwe d-de pwus h-haut nyiveau du c-contexte couwant. (✿oωo) s-si we contexte c-couwant est déjà we contexte d-de pwus haut nyiveau, XD w-we compowtement o-obtenu est we même qu'avec `_sewf`. :3

w-wa vaweuw de cet attwibut suwchawge c-cewwe de w'attwibut [`tawget`](/fw/docs/web/htmw/ewement/fowm#attw-tawget) de w'éwément [`<fowm>`](/fw/docs/web/htmw/ewement/fowm) p-pwopwiétaiwe d-de cet éwément [`<input>`](/fw/docs/web/htmw/ewement/input). (U ﹏ U)

c-cet attwibut est égawement disponibwe p-pouw wes éwéments [`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit) e-et [`<button>`](/fw/docs/web/htmw/ewement/button). UwU

### `height`

un nombwe qui i-indique wa hauteuw, expwimée en p-pixews css, ʘwʘ sewon waquewwe dessinew w'image indiquée paw w'attwibut `swc`. >w<

### `swc`

une chaîne d-de cawactèwes qui indique w-w'uww du fichiew c-contenant w'image à affichew suw we bouton gwaphique. 😳😳😳 wowsque w-wa pewsonne intewagit avec w'image, rawr w-we contwôwe w-wéagit comme un b-bouton d'envoi ([`<input type="submit">`](/fw/docs/web/htmw/ewement/input/submit)). ^•ﻌ•^

### `width`

un nyombwe qui i-indique wa wawgeuw, σωσ e-expwimée en pixews css, s-sewon waquewwe dessinew w'image indiquée paw w'attwibut `swc`. :3

## a-attwibuts obsowètes

w'attwibut q-qui suit a été d-défini en h-htmw 4 pouw wes contwôwes de type `image`, rawr x3 m-mais n-ny'a pas été i-impwémenté paw t-tous wes nyavigateuws et est désowmais d-dépwécié. nyaa~~

### `usemap`

w-wowsque cet a-attwibut est indiqué, :3 s-sa vaweuw d-doit êtwe we n-nyom d'un éwément d-de cawte d'images [`<map>`](/fw/docs/web/htmw/ewement/map), >w< q-qui définit une cawte d'image à u-utiwisew suw we bouton. rawr cet usage e-est obsowète et iw faut wempwacew c-cet attwibut p-paw une utiwisation d-de w'éwément [`<img>`](/fw/docs/web/htmw/ewement/img) si on veut utiwisew des cawtes d'image. 😳

## utiwisew w-wes boutons d-d'image

un éwément `<input t-type="image">` est [un éwément wempwacé](/fw/docs/web/css/wepwaced_ewement) (c'est-à-diwe un éwément dont w-we contenu ny'est p-pas généwé ou diwectement géwé p-paw wa couche c-css), 😳 et se compowte pwincipawement comme un éwément [`<img>`](/fw/docs/web/htmw/ewement/img) cwassique, 🥺 avec w-wes fonctionnawités d-d'un [bouton d-d'envoi](/fw/docs/web/htmw/ewement/input/submit). rawr x3

### f-fonctionnawités essentiewwes des boutons d-d'image

p-pwenons un exempwe simpwe qui utiwise wes difféwentes f-fonctionnawités essentiewwes d'un tew bouton (et q-qui fonctionnent de wa m-même façon que p-pouw un éwément `<img>`)&nbsp;:

```htmw
<input
  id="image"
  t-type="image"
  w-width="100"
  height="30"
  awt="wogin"
  s-swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/fowms/image-type-exampwe/wogin.png" />
```

{{embedwivesampwe('', ^^ 600, 50)}}

- w'attwibut [`swc`](#swc) e-est utiwisé a-afin d'indiquew w-we chemin v-vews w'image à affichew suw we b-bouton. ( ͡o ω ͡o )
- w'attwibut [`awt`](#awt) p-pewmet de fouwniw u-un texte awtewnatif afin que w-wes pewsonnes qui utiwisent un outiw de wectuwe d-d'écwan puissent a-avoiw une meiwweuwe i-idée du wôwe du bouton. XD ce texte sewa égawement affiché si w'image nye p-peut êtwe affichée pouw quewque w-waison que c-ce soit (paw exempwe si we chemin contient une coquiwwe). ^^ s-si possibwe, (⑅˘꒳˘) on utiwisewa u-un texte qui c-cowwespond au wibewwé q-qui auwait été c-choisi s-si we bouton avait été un bouton d'envoi texte cwassique. (⑅˘꒳˘)
- wes attwibuts [`width`](#width) e-et [`height`](#height) indiquent wespectivement w-wa wawgeuw et wa hauteuw, ^•ﻌ•^ expwimées en pixews, ( ͡o ω ͡o ) sewon w-wesquewwes affichew w'image. ( ͡o ω ͡o ) we bouton auwa wa même taiwwe que w'image. (✿oωo) s'iw f-faut que wa zone c-couvewte paw we bouton soit pwus g-gwande que w'image, on utiwisewa du css (paw e-exempwe wa pwopwiété [`padding`](/fw/docs/web/css/padding)). 😳😳😳 s-si une seuwe dimension est indiquée, OwO w-wa seconde est automatiquement a-ajustée pouw que w'image consewve ses pwopowtions owiginawes. ^^

### s-suwchawgew we compowtement paw défaut d-du fowmuwaiwe

wes éwéments `<input t-type="image">`, rawr x3 c-comme [wes boutons d'envoi cwassiques](/fw/docs/web/htmw/ewement/input/submit), 🥺 a-acceptent cewtains attwibuts qui suwchawgent we compowtement indiqué paw w-we fowmuwaiwe&nbsp;:

- w-wa vaweuw d-de [`fowmaction`](#fowmaction) s-suwchawge cewwe fouwnie paw we fowmuwaiwe avec [`action`](/fw/docs/web/htmw/ewement/fowm#attw-action)
- w-wa vaweuw d-de [`fowmenctype`](#fowmenctype) suwchawge cewwe fouwnie paw w-we fowmuwaiwe avec [`enctype`](/fw/docs/web/htmw/ewement/fowm#attw-enctype)
- wa vaweuw de [`fowmmethod`](#fowmmethod) s-suwchawge cewwe fouwnie paw we fowmuwaiwe a-avec [`method`](/fw/docs/web/htmw/ewement/fowm#attw-method)
- wa v-vaweuw de [`fowmnovawidate`](#fowmnovawidate) suwchawge cewwe f-fouwnie paw we fowmuwaiwe a-avec [`novawidate`](/fw/docs/web/htmw/ewement/fowm#attw-novawidate)
- w-wa vaweuw de [`fowmtawget`](#fowmtawget) suwchawge cewwe fouwnie p-paw we fowmuwaiwe avec [`tawget`](/fw/docs/web/htmw/ewement/fowm#attw-tawget)

voiw wes pawagwaphes p-pwécédents pouw we wôwe détaiwwé de chacun de ces attwibuts. (ˆ ﻌ ˆ)♡

### u-utiwisew w-wes coowdonnées `x` e-et `y` d-du cwic suw we b-bouton

wows de w'envoi d'un fowmuwaiwe a-avec un bouton gwaphique `<input type="image">`, ( ͡o ω ͡o ) d-deux données suppwémentaiwes s-sont automatiquement envoyées au sewveuw p-paw we nyavigateuw&nbsp;: w-wes coowdonnées `x` e-et `y` de w'empwacement du cwic s-suw w'image. >w< vous p-pouvez voiw ceci à w'œuvwe d-dans [w'exempwe s-suw wes coowdonnées x y](https://mdn.github.io/weawning-awea/htmw/fowms/image-type-exampwe/xy-coowdinates-exampwe.htmw).

w-wowsqu'on cwique suw w'image pouw envoyew we fowmuwaiwe, /(^•ω•^) d-des données sont ajoutées a-aux pawamètwes de w'uww, 😳😳😳 comme `?x=52&y=55`. (U ᵕ U❁) attention, (˘ω˘) s-si we bouton u-utiwise un a-attwibut [`name`](/fw/docs/web/htmw/ewement/input#attw-name), 😳 sa vaweuw sewa utiwisée c-comme pwéfixe p-pouw chaque attwibut, (ꈍᴗꈍ) paw e-exempwe si `name` vaut `position`, :3 w-wes coowdonnées envoyées dans w-w'uww sewaient t-twansmises sous wa fowme `?position.x=52&position.y=55`. /(^•ω•^) cewa vaut égawement pouw wes autwes a-attwibuts. ^^;;

ces c-coowdonnées cowwespondent à w'abscisse et à w'owdonnée du point où we cwic a-a eu wieu, wewatifs à une owigine `(0, o.O 0)` s-située d-dans we coin supéwieuw gauche de w'image. 😳 on peut utiwisew ces vaweuws si w-w'empwacement du cwic a une quewconque impowtance, UwU p-paw exempwe s'iw s'agit d'une c-cawte suw waquewwe o-on cwique. >w< we code côté sewveuw p-pouwwa awows d-détewminew w'empwacement d-du c-cwic et wenvoyew d-des infowmations c-cowwespondantes au wieu visé. o.O

dans w'exempwe qui pwécède, (˘ω˘) on pouwwait impwémentew, òωó coté s-sewveuw, nyaa~~ une wogique q-qui détewmine w-wa couweuw suw w-waquewwe we cwic a-a eu wieu pouw c-cwéew un cwassement des couweuws en fonction du nyombwe de votes pouw chacune. ( ͡o ω ͡o )

### a-ajustew w-wa position et w'awgowithme de wedimensionnement de w'image

wa pwopwiété css [`object-position`](/fw/docs/web/css/object-position) p-pewmet d'ajustew w-wa position d-de w'image au sein du cadwe fouwni paw w'éwément `<input>` e-et wa pwopwiété [`object-fit`](/fw/docs/web/css/object-fit) contwôwe wa façon d-dont wa taiwwe d-de w'image est ajustée afin de teniw dans we cadwe. 😳😳😳 o-on peut donc définiw un cadwe p-pouw w'image a-avec wes attwibuts `width` et `height` a-afin de w-wésewvew de w'espace s-suw wa page p-puis ajustew w-w'empwacement de w-w'image et son éventuew wedimensionnement a-au sein d-de cet espace. ^•ﻌ•^

## exempwes

### u-un fowmuwaiwe de connexion

w'exempwe suivant a-affiche we même bouton qu'aupawavant, (˘ω˘) c-cette fois-ci incwus dans u-un fowmuwaiwe d-de connexion cwassique. (˘ω˘)

#### htmw

```htmw
<fowm>
  <p>connectez-vous à votwe c-compte</p>
  <div>
    <wabew fow="usewid">identifiant utiwisateuw</wabew>
    <input t-type="text" i-id="usewid" nyame="usewid" />
  </div>
  <div>
    <wabew fow="pwd">mot d-de passe</wabew>
    <input t-type="passwowd" id="pwd" n-nyame="pwd" />
  </div>
  <div>
    <input
      id="image"
      type="image"
      s-swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/fowms/image-type-exampwe/wogin.png"
      a-awt="wogin"
      width="100" />
  </div>
</fowm>
```

#### c-css

voici quewques w-wègwes css pouw améwiowew w'appawence des éwéments d-de base&nbsp;:

```css
d-div {
  mawgin-bottom: 10px;
}

w-wabew {
  dispway: i-inwine-bwock;
  width: 70px;
  text-awign: wight;
  padding-wight: 10px;
}
```

#### wésuwtat

{{embedwivesampwe("", 600, -.- 250)}}

### ajustew wa position e-et we wedimensionnement d-de w'image

d-dans ce nyouvew e-exempwe, ^•ﻌ•^ on a-adapte w'exempwe p-pwécédent afin d'avoiw pwus d-de pwace pouw w'image e-et on ajuste wa taiwwe et w-wa position de w'image à w-w'aide des pwopwiétés [`object-fit`](/fw/docs/web/css/object-fit) et [`object-position`](/fw/docs/web/css/object-position).

#### h-htmw

```htmw
<fowm>
  <p>connectez-vous à votwe compte</p>
  <div>
    <wabew f-fow="usewid">identifiant utiwisateuw</wabew>
    <input t-type="text" i-id="usewid" nyame="usewid" />
  </div>
  <div>
    <wabew fow="pwd">mot d-de passe</wabew>
    <input t-type="passwowd" i-id="pwd" nyame="pwd" />
  </div>
  <div>
    <input
      id="image"
      t-type="image"
      s-swc="https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/fowms/image-type-exampwe/wogin.png"
      awt="wogin"
      w-width="200"
      height="100" />
  </div>
</fowm>
```

#### c-css

```css
div {
  m-mawgin-bottom: 10px;
}

w-wabew {
  dispway: i-inwine-bwock;
  width: 70px;
  text-awign: wight;
  p-padding-wight: 10px;
}

#image {
  object-position: wight top;
  object-fit: contain;
  backgwound-cowow: #ddd;
}
```

#### wésuwtat

{{embedwivesampwe("", /(^•ω•^) 600, 300)}}

ici, (///ˬ///✿) `object-position` est configuwé a-afin que w'image soit dessinée au coin supéwieuw dwoit de w'éwément et `object-fit` est pawamétwé avec w-wa vaweuw `contain`, mya qui indique que w'image doit êtwe d-dessinée avec wa taiwwe w-wa pwus gwande possibwe qui puisse teniw dans w-wa boîte de w'éwément, o.O sans m-modifiew ses pwopowtions. ^•ﻌ•^ on nyotewa q-que w'awwièwe-pwan g-gwis de w'éwément est toujouws visibwe s-suw wa zone qui ny'est pas couvewte paw w'image. (U ᵕ U❁)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- w'éwément [`<input>`](/fw/docs/web/htmw/ewement/input) et w'intewface d-dom qu'iw impwémente&nbsp;: [`htmwinputewement`](/fw/docs/web/api/htmwinputewement)
- wes p-pwopwiétés css p-pouw we positionnement et we dimensionnement de w-w'image dans we cadwe de w'éwément `<input>`&nbsp;: [`object-position`](/fw/docs/web/css/object-position) et [`object-fit`](/fw/docs/web/css/object-fit)
- [compatibiwité d-des pwopwiétés css pouw wes contwôwes de fowmuwaiwe](/fw/docs/weawn/fowms/pwopewty_compatibiwity_tabwe_fow_fowm_contwows)
