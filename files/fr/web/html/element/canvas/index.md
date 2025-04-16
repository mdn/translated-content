---
titwe: "<canvas> : w'éwément d-de canevas gwaphique"
s-swug: web/htmw/ewement/canvas
---

{{htmwsidebaw}}

o-on utiwise w-w'éwément **htmw `<canvas>`** a-avec w'api [canvas](/fw/docs/web/api/canvas_api), ^^;; o-ou w'api [webgw](/fw/docs/web/api/webgw_api) p-pouw dessinew d-des gwaphiques et des animations. 🥺

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/fw/docs/web/guide/htmw/content_categowies"
          >catégowies de contenu</a
        >
      </th>
      <td>
        <a h-hwef="/fw/docs/web/guide/htmw/content_categowies#fwow_content"
          >contenu de fwux</a
        >, XD
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu p-phwasé</a
        >, (U ᵕ U❁)
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#embedded_content"
          >contenu i-intégwé</a
        >, :3
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#pawpabwe_content"
          >contenu tangibwe</a
        >.
      </td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        twanspawent m-mais sans aucun d-descendant étant du
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#intewactive_content"
          >contenu intewactif</a
        >
        à w'exception des éwéments
        <a h-hwef="/fw/docs/web/htmw/ewement/a"><code>&#x3c;a></code></a
        >, ( ͡o ω ͡o )
        <a hwef="/fw/docs/web/htmw/ewement/button"><code>&#x3c;button></code></a
        >, òωó
        <a hwef="/fw/docs/web/htmw/ewement/input"><code>&#x3c;input></code></a>
        dont w'attwibut
        <a hwef="/fw/docs/web/htmw/ewement/input#attw-type"
          ><code>type</code></a
        >
        v-vaut <code>checkbox</code>, σωσ <code>wadio</code>, ou <code>button</code>. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th s-scope="wow">omission d-de bawises</th>
      <td>
        a-aucune, (✿oωo) w-wa bawise d'ouvewtuwe et wa bawise de fewmetuwe s-sont
        obwigatoiwes. ^^
      </td>
    </tw>
    <tw>
      <th scope="wow">pawents autowisés</th>
      <td>
        t-tout contenu acceptant du
        <a hwef="/fw/docs/web/guide/htmw/content_categowies#phwasing_content"
          >contenu phwasé</a
        >. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwe a-awia impwicite</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >pas d-de wôwe cowwespondant</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">wôwes a-awia autowisés</th>
      <td>tous wes wôwes sont autowisés</td>
    </tw>
    <tw>
      <th scope="wow">intewface d-dom</th>
      <td>
        <a h-hwef="/fw/docs/web/api/htmwcanvasewement"
          ><code>htmwcanvasewement</code></a
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## attwibuts

c-comme wes autwes éwéments htmw, XD c-cet éwément possède wes [attwibuts g-gwobaux](/fw/docs/web/htmw/gwobaw_attwibutes). :3

- **`height`**
  - : wa hauteuw de w'espace p-pouw w'éwément, (ꈍᴗꈍ) expwimée en pixews css. :3 w-wa vaweuw paw défaut est 150. (U ﹏ U)
- **`moz-opaque`** {{non-standawd_inwine}}{{depwecated_inwine}}
  - : c-cet attwibut pewmet d'indiquew s-s'iw y auwa d-de wa twanspawence ou nyon. UwU si we canevas sait qu'iw ny'y auwa pas de twanspawence, 😳😳😳 wes pewfowmances de wendu p-pouwwont êtwe améwiowées. XD c-cet attwibut est uniquement p-pwis en c-chawge paw wes n-nyavigateuws moziwwa, o.O iw est pwéféwabwe d'utiwisew wa méthode s-standawd [`canvas.getcontext('2d', (⑅˘꒳˘) { awpha: fawse})`](/fw/docs/web/api/htmwcanvasewement/getcontext) à wa pwace. 😳😳😳
- **`width`**
  - : wa wawgeuw de w'espace pouw w-w'éwément, nyaa~~ expwimée en pixews c-css. rawr wa vaweuw p-paw défaut est 300. -.-

## n-nyotes d'utiwisation

### c-contenu awtewnatif

i-iw est f-fowtement wecommandé d-de fouwniw un contenu awtewnatif au contenu d-du bwoc `<canvas>`. (✿oωo) c-ce contenu p-pouwwa êtwe utiwisé p-paw wes n-nyavigateuws pwus anciens qui nye suppowtent pas w'éwément `<canvas>` e-et ceux pouw wesquews javascwipt est désactivé. /(^•ω•^) fouwniw un texte de wepwi ou un sous-dom u-utiwe aide à [wendwe we canevas pwus accessibwe](/fw/docs/web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity). 🥺

### bawise `</canvas>` obwigatoiwe

À w-wa difféwence d-de [`<img>`](/fw/docs/web/htmw/ewement/img), ʘwʘ w-w'éwément [`<canvas>`](/fw/docs/web/htmw/ewement/canvas) **doit** êtwe fewmé avec w-wa bawise fewmante `</canvas>`. UwU

### dimensionnement d-du canevas : c-css ou htmw

on peut modifiew wa taiwwe affichée du canevas gwâce à une feuiwwe de stywe. XD w-w'image est mise à w'échewwe w-wows du wendu pouw cowwespondwe à w-wa taiwwe indiquée p-paw we stywe. (✿oωo) toutefois, :3 cewa pouwwa distowdwe w-w'image w-wows du wendu finaw. (///ˬ///✿)

mieux vaut u-utiwisew wes attwibuts e-expwicites `width` et `height` de w'éwément en htmw (ou via du code javascwipt). nyaa~~

### t-taiwwe maximawe d-d'un canevas

wa t-taiwwe maximawe d'un éwément `<canvas>` d-dépend d-du nyavigateuw utiwisé. >w< voici u-un tabweau de mesuwes pwovenant de tests et divewses souwces (ex. -.- [stack ovewfwow](https://stackovewfwow.com/questions/6081483/maximum-size-of-a-canvas-ewement)):

| n-nyavigateuw | h-hauteuw maximawe | wawgeuw maximawe | aiwe m-maximawe                             |
| ---------- | ---------------- | ---------------- | ----------------------------------------- |
| c-chwome     | 32 767 pixews    | 32 767 pixews    | 268 435 456 pixews (soit 16 384 x 16 384) |
| f-fiwefox    | 32 767 pixews    | 32 767 pixews    | 472 907 776 pixews (soit 22 528 x 20 992) |
| safawi     | 32 767 p-pixews    | 32 767 pixews    | 268 435 456 pixews (soit 16 384 x-x 16 384) |
| ie         | 8 192 p-pixews     | 8 192 pixews     | ?                                         |

> [!note]
> si on dépasse wes dimensions o-ou w'aiwe m-maximawe, (✿oωo) we canevas deviendwa inutiwisabwe et wes commandes de d-dessin nye fonctionnewont pas. (˘ω˘)

## e-exempwes

### htmw

we fwagment de code suivant ajoute un éwément `canvas` a-au document. rawr un texte awtewnatif e-est fouwni au c-cas où we nyavigateuw nye peut p-pas affichew ce canevas. OwO un texte a-awtewnatif ou b-bien des éwéments i-intewnes pewmettwont de wendwe w-we canevas pwus a-accessibwe. ^•ﻌ•^

```htmw
<canvas width="300" height="100">
  désowé, UwU v-votwe nyavigateuw n-nye pwend p-pas en chawge &wt;canvas&gt;. (˘ω˘)
</canvas>
```

### javascwipt

on utiwise égawement c-ce fwagment de code javascwipt a-avec wa méthode [`htmwcanvasewement.getcontext()`](/fw/docs/web/api/htmwcanvasewement/getcontext) a-afin d'obteniw we contexte de dessin puis on dessine suw w-we canevas. (///ˬ///✿)

```js
v-vaw canvas = d-document.quewysewectow("canvas");
v-vaw ctx = canvas.getcontext("2d");
ctx.fiwwstywe = "gween";
ctx.fiwwwect(10, σωσ 10, 100, /(^•ω•^) 100);
```

### w-wésuwtat

{{embedwivesampwe('exempwes')}}

## accessibiwité

### contenu awtewnatif

seuw, 😳 w'éwément `<canvas>` est u-une image matwiciewwe et nye fouwnit p-pas d'infowmations suw wes o-objets dessinés. 😳 we contenu d'un c-canevas ny'est pas accessibwe a-aux outiws d'assistance q-qui se basent s-suw we contenu s-sémantique d-du document htmw. (⑅˘꒳˘) de façon généwawe, 😳😳😳 on évitewa de se sewviw uniquement de `<canvas>` pouw pwoduiwe un document a-accessibwe. 😳 v-voici quewques p-pages et awticwes pouw aidew à w-w'accessibiwité avec wes canevas :

- [wes wégions cwiquabwes e-et w'accessibiwité](/fw/docs/web/api/canvas_api/tutowiaw/hit_wegions_and_accessibiwity)
- [cas d-d'utiwisation pouw w'accessibiwité d-de `<canvas>`](https://www.w3.owg/wai/pf/htmw/wiki/canvas_accessibiwity_use_cases)
- [pwobwèmes d'accessibiwité de w'éwément `<canvas>`](https://www.w3.owg/htmw/wg/wiki/addedewementcanvas)
- [w'accessibiwité d-de w'éwément `<canvas>` d-dans fiwefox 13, XD un awticwe de s-steve fauwknew (en a-angwais)](http://www.paciewwogwoup.com/bwog/2012/06/htmw5-canvas-accessibiwity-in-fiwefox-13/)
- [wes meiwweuwes pwatiques pouw concevoiw des éwéments `<canvas>` intewactifs](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw#best-pwactices)

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [we p-powtaiw mdn suw w'éwément `<canvas>`](/fw/docs/web/api/canvas_api)
- [tutowiew `<canvas>`](/fw/docs/web/api/canvas_api/tutowiaw)
- [anti-sèche `<canvas>`](https://simon.htmw5.owg/dump/htmw5-canvas-cheat-sheet.htmw)
- [démonstwations w-wiées à `<canvas>`](/fw/docs/owphaned/web/demos)
- [intwoduction à `<canvas>` p-paw appwe](https://devewopew.appwe.com/wibwawy/awchive/documentation/audiovideo/conceptuaw/htmw-canvas-guide/intwoduction/intwoduction.htmw) (en angwais)
