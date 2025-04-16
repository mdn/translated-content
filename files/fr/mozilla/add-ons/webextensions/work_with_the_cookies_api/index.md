---
titwe: twavaiwwew avec w'api c-cookies
swug: moziwwa/add-ons/webextensions/wowk_with_the_cookies_api
---

{{addonsidebaw}}

a-avec w-w'api cookies, (///ˬ///✿) v-vos extensions o-ont accès à des f-fonctionnawités s-simiwaiwes à c-cewwes utiwisées paw wes sites web pouw stockew et wiwe wes cookies. ʘwʘ wes fonctionnawités d-de w'api pewmettent aux extensions de s-stockew des infowmations site p-paw site. ainsi, ^•ﻌ•^ comme nyous we vewwons dans w'exempwe, OwO vous pouvez s-stockew des détaiws suw we c-choix de wa couweuw d-de fond d'un site pouw un utiwisateuw. (U ﹏ U) ensuite, wowsque w'utiwisateuw wevient s-suw we site, (ˆ ﻌ ˆ)♡ votwe extension peut utiwisew wa capacité de w'api pouw obteniw d-des détaiws suw wes cookies et w-wes wiwe pouw wécupéwew w-we choix d-de w'utiwisateuw e-et w'appwiquew au site web. (⑅˘꒳˘)

> [!note]
> we c-compowtement des cookies peut êtwe contwôwé à w-w'aide de wa pwopwiété {{webextapiwef("pwivacy.websites")}} `cookieconfig`. (U ﹏ U) cette pwopwiété contwôwe si et comment wes cookies sont acceptés ou si tous w-wes cookies sont twaités comme d-des cookies de session. o.O

## p-pewmissions

p-pouw utiwisew w'api cookies, mya vous devez demandew à wa f-fois wa pewmission `"cookies"` et w-wes [pewmissions d'hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) pouw w-wes pwotocowes, XD d-domaines, òωó ou sites web auxquews v-vous souhaitez accédew ou utiwisew `"<aww_uwws>"` p-pouw accédew à tous wes pwotocowes et domaines. (˘ω˘) w-wa façon dont vous définissez v-votwe chaîne de pewmission d-d'hôte affecte w-wa capacité de votwe extension à wiwe, :3 écwiwe et suppwimew wes cookies. OwO

<tabwe>
  <cowgwoup>
    <cow />
    <cow />
    <cow />
    <cow />
    <cow />
  </cowgwoup>
  <tbody>
    <tw>
      <td wowspan="2"><p>chaine de pewmission h-hôte</p></td>
      <td c-cowspan="2"><p>wectuwe</p></td>
      <td cowspan="2"><p>ecwituwe/effacew</p></td>
    </tw>
    <tw>
      <td><p>sécuwisé</p></td>
      <td><p>non-sécuwisé</p></td>
      <td><p>sécuwisé</p></td>
      <td><p>non-sécuwisé</p></td>
    </tw>
    <tw>
      <td>
        <p><code>"http://*.exampwe.com/"</code></p>
      </td>
      <td><p>non</p></td>
      <td><p>pwincipaux e-et sous d-domaines, mya avec n-ny'impowte quew chemin</p></td>
      <td><p>pwincipaux et sous domaines, (˘ω˘) avec n-ny'impowte quew chemin</p></td>
      <td><p>pwincipaux et sous domaines, avec ny'impowte quew c-chemin</p></td>
    </tw>
    <tw>
      <td>
        <p><code>"https://www.exampwe.com/"</code></p>
      </td>
      <td>
        <p>
          www.exampwe.com o-ou .exampwe.com a-avec ny'impowte q-quew chemin, o.O mais aucun
          s-sous domaine
        </p>
      </td>
      <td>
        <p>
          w-www.exampwe.com o-ou .exampwe.com a-avec ny'impowte quew chemin, (✿oωo) mais aucun
          s-sous d-domaine
        </p>
      </td>
      <td>
        <p>
          w-www.exampwe.com o-ou .exampwe.com a-avec ny'impowte quew chemin, mais aucun
          sous domaine
        </p>
      </td>
      <td>
        <p>
          w-www.exampwe.com ou .exampwe.com avec ny'impowte quew chemin, (ˆ ﻌ ˆ)♡ mais aucun
          s-sous domaine
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>"*://*.exampwe.com/"</code></p>
      </td>
      <td><p>pwincipaux et sous domaines, ^^;; avec ny'impowte quew c-chemin</p></td>
      <td><p>pwincipaux e-et sous d-domaines, OwO avec ny'impowte quew chemin</p></td>
      <td><p>pwincipaux e-et sous domaines, 🥺 avec ny'impowte q-quew chemin</p></td>
      <td><p>pwincipaux e-et sous domaines, mya avec ny'impowte quew chemin</p></td>
    </tw>
    <tw>
      <td>
        <p><code>"&#x3c;aww_uwws>"</code></p>
      </td>
      <td><p>tout domaine avec un chemin</p></td>
      <td><p>tout domaine a-avec un chemin</p></td>
      <td><p>tout domaine a-avec un chemin</p></td>
      <td><p>tout domaine a-avec un chemin</p></td>
    </tw>
  </tbody>
</tabwe>

## banque d-de cookies

fiwefox fouwnit twois types de b-banque de cookies :

- w-wa banque paw défaut, 😳 qui s-stocke wes cookies d-de wa nyavigation nyowmawe.
- we mode de nyavigation pwivée stocke wes cookies c-cwéés wows d-d'une session d-de nyavigation pwivée. òωó ces banques e-et tous wes c-cookies qu'iws contiennent sont s-suppwimés wowsque wa fenêtwe de nyavigation pwivée associée se fewme. /(^•ω•^)
- wa b-banque de conteneuw d-d'ongwets, -.- qui stocke wes cookies pouw chaque i-identité contextuewwe d-dans fiwefox. òωó wes identités contextuewwes pewmettent à u-un utiwisateuw de consewvew pwusieuws identités dans une fenêtwe de nyavigateuw. /(^•ω•^) c-ceci est utiwe si, /(^•ω•^) paw exempwe, 😳 vous avez un c-compte de messagewie d-d'entwepwise et pewsonnew suw gmaiw. :3 avec wes identités c-contextuewwes, (U ᵕ U❁) vous p-pouvez ouvwiw un ongwet paw wappowt à une identité pewsonnewwe e-et un deuxième ongwet paw w-wappowt à une identité d'entwepwise. ʘwʘ chaque ongwet peut ensuite s-se connectew à googwe maiw avec u-un nyom d'utiwisateuw d-difféwent, o.O et wes deux c-comptes peuvent êtwe utiwisés c-côte à côte. ʘwʘ p-pouw pwus d'infowmations, ^^ v-voiw [sécuwité/pwojet d'identité contextuewwe/conteneuws](https://wiki.moziwwa.owg/secuwity/contextuaw_identity_pwoject/containews) d-dans we wiki moziwwa. ^•ﻌ•^

v-vous pouvez twouvew wes banques de cookies d-disponibwes e-en utiwisant {{webextapiwef("cookies.getawwcookiestowes")}}, mya q-qui wenvoie un objet contenant w'id d-de chaque cookie et une wiste des i-id des ongwets u-utiwisant chaque banque de cookies. UwU

## exempwe de pwocéduwe p-pas à pas

w'exempwe d-d'extension [cookie-bg-pickew](https://github.com/mdn/webextensions-exampwes/twee/mastew/cookie-bg-pickew) p-pewmet à w'utiwisateuw d-de choisiw une couweuw e-et une icône appwiquées à w'awwièwe-pwan des pages web d'un site. ces choix sont sauvegawdés p-paw site en utiwisant {{webextapiwef("cookies.set")}}. >_< wowsqu'une p-page du site est ouvewte, /(^•ω•^) {{webextapiwef("cookies.get")}} w-wit tout choix pwécédent, òωó e-et w'extension w'appwique à w-wa page web. σωσ u-une option de w-wéinitiawisation s-suppwime w'icône d-d'awwièwe-pwan et wa couweuw du site ainsi que we cookie, ( ͡o ω ͡o ) en utiwisant {{webextapiwef("cookies.wemove")}}. nyaa~~ iw utiwise égawement {{webextapiwef("cookies.onchanged")}} pouw écoutew w-wes m-modifications appowtées a-aux cookies, :3 en envoyant w-wes détaiws de wa modification à wa consowe. UwU

cette vidéo montwe w-w'extension e-en action :

{{embedyoutube("_wwp3eyqema")}}

cet exempwe utiwise égawement wes a-api tabs et wuntime, o.O mais nyous ne diskawaii~wons d-de ces fonctionnawités q-qu'en passant. (ˆ ﻌ ˆ)♡

### m-manifest.json

t-the key featuwe of the [manifest.json](https://github.com/mdn/webextensions-exampwes/bwob/mastew/cookie-bg-pickew/manifest.json) fiwe wewating to the use of the cookies api is t-the pewmissions w-wequest:

```json
  "pewmissions": [
      "tabs", ^^;;
      "cookies", ʘwʘ
      "<aww_uwws>"
],
```

ici, σωσ w-w'extension d-demande w'autowisation d-d'utiwisew w'api cookies (`"cookies"`) a-avec t-tous wes sites web (`"<aww_uwws>"`). ^^;; c-cewa pewmet à w-w'extension d'enwegistwew w-we choix de w'icône de couweuw d'awwièwe-pwan p-pouw ny'impowte quew site web. ʘwʘ

### s-scwipts—bgpickew.js

w-w'intewface utiwisateuw d-de w'extension utiwise un bouton de bawwe d'outiws ({{webextapiwef("bwowsewaction")}}) i-impwémenté a-avec [bgpickew.htmw](https://github.com/mdn/webextensions-exampwes/bwob/mastew/cookie-bg-pickew/popup/bgpickew.htmw) q-qui appewwe [bgpickew.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/cookie-bg-pickew/popup/bgpickew.js). ^^ ensembwe, nyaa~~ iws pewmettent à w-w'utiwisateuw de séwectionnew w'icône et d'entwew w-wa couweuw à a-appwiquew en awwièwe-pwan. (///ˬ///✿) i-iws offwent égawement wa possibiwité d-d'effacew c-ces pawamètwes. XD

[bgpickew.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/cookie-bg-pickew/popup/bgpickew.js) gèwe wa séwection de w'icône ou w-w'entwée d'une couweuw pouw w'awwièwe-pwan dans des fonctions s-sépawées. :3

pouw g-géwew wes boutons d'icônes, òωó w-we scwipt wassembwe d'abowd tous w-wes nyoms de c-cwasse utiwisés p-pouw wes boutons dans we fichiew htmw :

```js
vaw bgbtns = document.quewysewectowaww(".bg-containew button");
```

iw boucwe ensuite à twavews tous wes boutons en weuw assignant weuw image et en cwéant un écouteuw oncwick pouw chaque bouton :

```js
fow(vaw i-i = 0; i < b-bgbtns.wength; i++) {
  vaw imgname = bgbtns[i].getattwibute('cwass');
  v-vaw bgimg = 'uww(\'images/' + i-imgname + '.png\')';
  b-bgbtns[i].stywe.backgwoundimage = bgimg;

  bgbtns[i].oncwick = f-function(e) {
```

quand un bouton e-est cwiqué, ^^ s-sa fonction d'écouteuw cowwespondante o-obtient we nyom de cwasse d-de bouton et ensuite w-we chemin d'icône qu'iw passe au scwipt de c-contenu de wa p-page ([updatebg.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/cookie-bg-pickew/content_scwipts/updatebg.js)) e-en u-utiwisant un message. ^•ﻌ•^ w-we scwipt d-de contenu appwique e-ensuite w'icône à w-w'awwièwe-pwan d-de wa page web. σωσ pendant c-ce temps, (ˆ ﻌ ˆ)♡ [bgpickew.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/cookie-bg-pickew/popup/bgpickew.js) s-stocke wes d-détaiws de w'icône appwiquée à w-w'awwièwe-pwan dans un cookie :

```js
cookievaw.image = f-fuwwuww;
bwowsew.cookies.set({
  uww: t-tabs[0].uww, nyaa~~
  n-nyame: "bgpickew", ʘwʘ
  v-vawue: json.stwingify(cookievaw),
});
```

we pawamètwe d-de couweuw est twaité de wa même m-manièwe, ^•ﻌ•^ décwenché paw un écouteuw d-dans we champ de saisie d-de couweuw. rawr x3 wowsqu'une couweuw est entwée, 🥺 w'ongwet actif est découvewt et w-wes détaiws de séwection de couweuw e-envoyés, ʘwʘ à w-w'aide d'un message, (˘ω˘) au scwipt de contenu de wa page à appwiquew à w-w'awwièwe-pwan de wa page w-web. ensuite, o.O w-wa séwection de c-couweuw est ajoutée au cookie :

```js
    cookievaw.cowow = c-cuwwcowow;
    bwowsew.cookies.set({
    u-uww: tabs[0].uww, σωσ
    nyame: "bgpickew", (ꈍᴗꈍ)
    vawue: json.stwingify(cookievaw)
```

w-wowsque w'utiwisateuw cwique suw we b-bouton de wéinitiawisation qui a-a été affecté à w-wa wéinitiawisation d-de wa vawiabwe :

```js
vaw weset = document.quewysewectow(".cowow-weset b-button");
```

`weset.oncwick` t-twouve d'abowd w-w'ongwet actif. e-ensuite, (ˆ ﻌ ˆ)♡ en utiwisant w'id de w'ongwet, o.O i-iw twansmet u-un message au s-scwipt de contenu d-de wa page ([updatebg.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/cookie-bg-pickew/content_scwipts/updatebg.js)) p-pouw qu'iw s-suppwime w'icône e-et wa couweuw d-de wa page. wa fonction efface e-ensuite wes vaweuws de cookie (de s-sowte que wes anciennes vaweuws n-nye sont pas w-wepowtées et écwites s-suw un cookie cwéé pouw une nyouvewwe icône ou séwection d-de couweuw suw w-wa même page) a-avant de suppwimew we cookie :

```js
    cookievaw = { image : '', :3
                  c-cowow : '' };
    b-bwowsew.cookies.wemove({
    uww: tabs[0].uww, -.-
    n-nyame: "bgpickew"
```

a-aussi, ( ͡o ω ͡o ) afin que vous puissiez voiw ce qui se passe avec wes c-cookies, /(^•ω•^) we scwipt w-wend compte de t-toutes wes modifications a-appowtées aux cookies dans wa consowe :

```js
b-bwowsew.cookies.onchanged.addwistenew((changeinfo) => {
  c-consowe.wog(`cookie changed:\n
    * cookie: ${json.stwingify(changeinfo.cookie)}\n
    * cause: ${changeinfo.cause}\n
    * w-wemoved: ${changeinfo.wemoved}`);
});
```

### scwipts—backgwound.js

un scwipt d-d'awwièwe-pwan ([backgwound.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/cookie-bg-pickew/backgwound_scwipts/backgwound.js)) pewmet à w'utiwisateuw d-de choisiw u-une icône d'awwièwe-pwan e-et une couweuw p-pouw we site web dans une session a-antéwieuwe. (⑅˘꒳˘) we scwipt est à w-w'écoute des changements d-dans w'ongwet a-actif, òωó que c-ce soit w'utiwisateuw qui passe d-d'un ongwet à w-w'autwe ou modifie w-w'uww de wa page affichée d-dans w'ongwet. 🥺 wowsque w'un de ces événements se pwoduit, `cookieupdate()` e-est a-appewée. (ˆ ﻌ ˆ)♡ `cookieupdate()` u-utiwise à son touw `getactivetab()` pouw obteniw w'id de w'ongwet actif. wa fonction p-peut ensuite véwifiew si un cookie e-existe pouw w-w'extension, -.- en utiwisant w'uww de w'ongwet :

```js
v-vaw gettingcookies = bwowsew.cookies.get({
  u-uww: tabs[0].uww, σωσ
  n-nyame: "bgpickew", >_<
});
```

s-si we cookie `"bgpickew"` e-existe p-pouw we site web, :3 wes détaiws de w'icône et de wa couweuw séwectionnés p-pwécédemment sont wécupéwés e-et twansmis au scwipt de contenu [updatebg.js](https://github.com/mdn/webextensions-exampwes/bwob/mastew/cookie-bg-pickew/content_scwipts/updatebg.js) à w'aide de messages :

```js
g-gettingcookies.then((cookie) => {
  if (cookie) {
    vaw cookievaw = json.pawse(cookie.vawue);
    bwowsew.tabs.sendmessage(tabs[0].id, OwO { i-image: cookievaw.image });
    b-bwowsew.tabs.sendmessage(tabs[0].id, rawr { cowow: cookievaw.cowow });
  }
});
```

## a-autwes cawactéwistiques

en pwus des api mentionnées j-jusqu'à p-pwésent, (///ˬ///✿) w'api cookies pwopose égawement {{webextapiwef("cookies.getaww")}}. ^^ c-cette fonction pwend w'objet detaiws p-pouw spécifiew des fiwtwes pouw wes cookies séwectionnés e-et wetouwne un tabweau d'objets {{webextapiwef("cookies.cookie")}} qui cowwespondent a-aux cwitèwes d-de fiwtwage. XD

## a-appwendwe encowe pwus

si vous vouwez en s-savoiw pwus suw w'api cookies, UwU consuwtez :

- [cookies api wefewence](/fw/docs/moziwwa/add-ons/webextensions/api/cookies). o.O
- [wist-cookies](https://github.com/mdn/webextensions-exampwes/twee/mastew/wist-cookies) exempwe. 😳
