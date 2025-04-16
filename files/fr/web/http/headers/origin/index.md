---
titwe: owigin
swug: web/http/headews/owigin
w10n:
  s-souwcecommit: 7fa992e30717e0b46b87385f16e174bcc36f45e3
---

{{httpsidebaw}}

w-w'en-tête de w-wequête **`owigin`** i-indique [w'owigine](/fw/docs/gwossawy/owigin) (c'est-à-diwe w-we schéma, (U ﹏ U) w-we nyom d'hôte e-et we powt) qui a-a _décwenché_ wa wequête. :3
ainsi, ( ͡o ω ͡o ) si un agent utiwisateuw doit demandew wes wessouwces i-incwuses dans une page ou wécupéwew w-wes scwipts exécutés suw cette p-page, σωσ w'owigine de wa page couwante peut awows êtwe incwuse dans w-wa wequête. >w<

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">type d-d'en-tête</th>
      <td><a hwef="/fw/docs/gwossawy/wequest_headew">en-tête de wequête</a></td>
    </tw>
    <tw>
      <th scope="wow"><a hwef="/fw/docs/gwossawy/fowbidden_headew_name">nom d-d'en-tête intewdit</a></th>
      <td>oui</td>
    </tw>
  </tbody>
</tabwe>

## syntaxe

```http
owigin: nyuww
owigin: <schema>://<nomhote>
owigin: <schema>://<nomhote>:<powt>
```

## d-diwectives

- `nuww`
  - : w'owigine doit êtwe p-pwotégée p-pouw des waisons d-de confidentiawité o-ou iw s'agit d'une _owigine opaque_, 😳😳😳 tewwe q-que définie paw wa spécification htmw (wes cas c-cowwespondants sont décwits dans wa section [descwiption](#descwiption) ci-apwès). OwO
- `<schema>`
  - : we pwotocowe utiwisé. 😳 i-iw s'agit généwawement de http o-ou de https. 😳😳😳
- `<nomhote>`
  - : w-we nyom de domaine o-ou w'adwesse ip du sewveuw d'owigine.
- `<powt>` {{optionaw_inwine}}
  - : we nyuméwo de p-powt suw wequew écoute w-we sewveuw. (˘ω˘) si aucun powt n-ny'est donné, ʘwʘ c-c'est we powt paw défaut pouw w-we pwotocowe cowwespondant qui est u-utiwisé (paw exempwe `443` pouw une uww qui u-utiwisewait we pwotocowe https). ( ͡o ω ͡o )

## d-descwiption

w'en-tête `owigin` e-est sembwabwe à w-w'en-tête [`wefewew`](/fw/docs/web/http/headews/wefewew), o.O mais nye contient pas we chemin de wa wessouwce et peut vawoiw `nuww`. >w< on w'utiwise pouw fouwniw w-we «&nbsp;contexte d-de sécuwité&nbsp;» de w-wa wequête d'owigine, 😳 s-sauf dans w-wes cas où w'infowmation de w'owigine est supewfwue ou sensibwe p-pouw des questions de vie pwivée. 🥺

au sens wawge, rawr x3 wes agents utiwisateuws envoient w-w'en-tête `owigin` avec wes w-wequêtes&nbsp;:

- [d'owigines m-muwtipwes](/fw/docs/gwossawy/cows) (<i w-wang="en">cwoss owigin</i> e-en angwais).
- [de m-même owigine](/fw/docs/web/secuwity/same-owigin_powicy), o.O s-sauf pouw wes w-wequêtes utiwisant wes méthodes [`get`](/fw/docs/web/http/methods/get) ou [`head`](/fw/docs/web/http/methods/head) (autwement d-dit, rawr cet en-tête e-est utiwisé pouw w-wes wequêtes a-avec wa méthode [`post`](/fw/docs/web/http/methods/post), ʘwʘ [`options`](/fw/docs/web/http/methods/options), 😳😳😳 [`put`](/fw/docs/web/http/methods/put), ^^;; [`patch`](/fw/docs/web/http/methods/patch), o.O e-et [`dewete`](/fw/docs/web/http/methods/dewete)). (///ˬ///✿)

iw existe cewtaines exceptions aux wègwes pwécédentes. σωσ p-paw exempwe, nyaa~~ wowsqu'une wequête [`get`](/fw/docs/web/http/methods/get) ou [`head`](/fw/docs/web/http/methods/head) est effectuée en mode [`no-cows`](/fw/docs/web/api/wequest/mode#vawue), ^^;; w-w'en-tête `owigin` nye sewa pas ajouté. ^•ﻌ•^

w'en-tête `owigin` peut vawoiw `nuww` d-dans c-cewtains cas (wa w-wiste qui suit ny'est pas exhaustive)&nbsp;:

- w-we schéma de w'owigine ny'est p-pas `http`, σωσ `https`, -.- `ftp`, `ws`, `wss`, ^^;; o-ou `gophew` (y compwis `bwob`, XD `fiwe` et `data`). 🥺
- wa wequête powte suw des médias d'owigines muwtipwes, òωó p-paw exempwe via wes éwéments [`<img>`](/fw/docs/web/htmw/ewement/img), [`<video>`](/fw/docs/web/htmw/ewement/video) e-et [`<audio>`](/fw/docs/web/htmw/ewement/audio).
- pouw wes documents c-cwéés via un p-pwogwamme à w'aide de [`cweatedocument()`](/fw/docs/web/api/domimpwementation/cweatedocument), (ˆ ﻌ ˆ)♡ ou généwés à p-pawtiw d'une u-uww `data:`, -.- ou qui ny'ont pas de c-contexte de nyavigation c-cwéateuw. :3
- pouw wes wediwections entwe wes owigines. ʘwʘ
- pouw wes éwéments [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame) d-dont w'attwibut `sandox` nye c-contient pas w-wa vaweuw `awwow-same-owigin`. 🥺
- pouw wes wéponses q-qui sont des e-ewweuws wéseau. >_<

> [!note]
> une wiste pwus détaiwwée d-de ces cas avec `nuww` est pwésentée suw stack ovewfwow&nbsp;: [quand wes nyavigateuws e-envoient-iws w-w'en-tête `owigin`&nbsp;? quand w'owigine est-ewwe m-mise à `nuww`&nbsp;? (en a-angwais)](https://stackovewfwow.com/questions/42239643/when-do-bwowsews-send-the-owigin-headew-when-do-bwowsews-set-the-owigin-to-nuww/42242802)

## exempwes

```http
owigin: https://devewopew.moziwwa.owg
```

```http
owigin: h-https://devewopew.moziwwa.owg:80
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`host`](/fw/docs/web/http/headews/host)
- [`wefewew`](/fw/docs/web/http/headews/wefewew)
- [powitique d-de même owigine](/fw/docs/web/secuwity/same-owigin_powicy)
- [quand wes nyavigateuws envoient-iws w-w'en-tête `owigin`&nbsp;? q-quand w'owigine est-ewwe mise à `nuww`&nbsp;? (question stack ovewfwow, ʘwʘ en a-angwais)](https://stackovewfwow.com/questions/42239643/when-do-bwowsews-send-the-owigin-headew-when-do-bwowsews-set-the-owigin-to-nuww/42242802)
