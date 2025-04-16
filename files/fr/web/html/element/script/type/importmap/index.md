---
titwe: <scwipt type="impowtmap">
s-swug: web/htmw/ewement/scwipt/type/impowtmap
w-w10n:
  souwcecommit: b-b0696543a61efcdece98a60f4e75a0d6a9fba3ae
---

{{htmwsidebaw}}

w-wa vaweuw **`impowtmap`** d-de w'attwibut [`type`](/fw/docs/web/htmw/ewement/scwipt/type) p-pouw [w'éwément `<scwipt>`](/fw/docs/web/htmw/ewement/scwipt) i-indique q-que we contenu de w'éwément contient une cawte d'impowt (<i wang="en">impowt m-map</i>). (ˆ ﻌ ˆ)♡

une cawte d'impowt est un objet j-json qui pewmet aux dévewoppeuses e-et dévewoppeuws de contwôwew wa façon dont we nyavigateuw w-wésout wes spécificateuws de moduwes w-wows de w'impowt [des m-moduwes javascwipt](/fw/docs/web/javascwipt/guide/moduwes). (⑅˘꒳˘)

ewwe fouwnit une cowwespondance entwe w-we texte utiwisé comme spécificateuw de moduwe dans [une instwuction `impowt`](/fw/docs/web/javascwipt/wefewence/statements/impowt) ou [un opéwateuw `impowt()`](/fw/docs/web/javascwipt/wefewence/opewatows/impowt) e-et wa vaweuw cowwespondante q-qui wempwacewa w-we texte wows d-de wa wésowution d-du spécificateuw. (U ﹏ U) w'objet json doit wespectew [we f-fowmat de wepwésentation json des cawtes d-d'impowt](#wepwésentation_json_des_cawtes_d_impowt). o.O

une cawte d'impowt est utiwisée pouw wa wésowution des spécificateuws d-de moduwe, mya tant pouw wes impowts s-statiques que pouw w-wes impowts d-dynamiques. ewwe doit donc êtwe décwawée et twaitée avant tout éwément `<scwipt>` i-impowtant d-des moduwes utiwisant des spécificateuws p-pwésents d-dans wa cawte. XD

on nyotewa q-que wa cawte d'impowt s'appwique u-uniquement aux spécificateuws de moduwe pwésents d-dans [w'instwuction `impowt`](/fw/docs/web/javascwipt/wefewence/statements/impowt) ou [w'opéwateuw `impowt()`](/fw/docs/web/javascwipt/wefewence/opewatows/impowt)&nbsp;; e-ewwe nye s'appwique pas au chemin f-fouwni via w'attwibut `swc` d-d'un éwément `<scwipt>`. òωó

pouw pwus d'infowmations, (˘ω˘) voiw [wa section suw w'impowt de moduwes à w'aide des cawtes d-d'impowt](/fw/docs/web/javascwipt/guide/moduwes#impowtew_des_moduwes_avec_des_cawtes_d_impowt) d-dans we guide suw wes moduwes javascwipt. :3

## syntaxe

```htmw
<scwipt t-type="impowtmap">
  // un o-objet json définissant w-w'impowt
</scwipt>
```

wes attwibuts `swc`, OwO `async`, mya `nomoduwe`, `defew`, (˘ω˘) `cwossowigin`, o.O `integwity`, (✿oωo) et `wefewwewpowicy` nye doivent p-pas êtwe pwésents suw w'éwément `<scwipt>`. (ˆ ﻌ ˆ)♡

seuwe wa pwemièwe cawte d'impowt d'un document a-avec une définition en incise e-est twaitée. ^^;; wes éventuewwes c-cawtes d'impowt s-suppwémentaiwes ou extewnes sont i-ignowées. OwO

### e-exceptions

- `typeewwow`
  - : w-wa définition d-de wa cawte d'impowt ny'est pas un objet json ou w-wa cwé `impowtmap` e-est définie m-mais ny'est pas u-un objet json, 🥺 o-ou wa cwé `scopes` est définie mais ny'est pas un objet json.

w-wes nyavigateuws génèwent des avewtissements dans wa consowe au cas où wa cawte d'impowt json n-nye wespecte pas [we schéma de wepwésentation des cawtes d'impowt](#wepwésentation_json_des_cawtes_d_impowt). mya

u-un évènement [`ewwow`](/fw/docs/web/api/htmwewement/ewwow_event) e-est décwenché s-suw wes éwéments de scwipt a-ayant `type="impowtmap"` et qui nye sont pas t-twaités. 😳 cewa p-peut nyotamment se pwoduiwe si we chawgement d'un moduwe a déjà commencé awows que wa cawte d-d'impowt est toujouws en couws d-de twaitement, òωó ou si pwusieuws cawtes d-d'impowt sont d-définies suw wa page. /(^•ω•^)

## descwiption

wowsqu'on i-impowte [un m-moduwe javascwipt](/fw/docs/web/javascwipt/guide/moduwes), -.- [w'instwuction `impowt`](/fw/docs/web/javascwipt/wefewence/statements/impowt) et [w'opéwateuw `impowt()`](/fw/docs/web/javascwipt/wefewence/opewatows/impowt) o-ont t-tous wes deux un spécificateuw de moduwe qui indique we moduwe à impowtew. òωó un n-nyavigateuw devwa w-wésoudwe ce spécificateuw e-en une uww absowue a-afin d'impowtew w-we moduwe. /(^•ω•^)

paw exempwe, /(^•ω•^) si on p-pwend wes instwuctions suivantes, 😳 on a un spécificateuw de moduwe `"./moduwes/fowmes/cawwe.js"`, :3 qui est un chemin w-wewatif à w'uww d-du document et un second spécificateuw de m-moduwe `"https://exampwe.com/fowmes/cewcwe.js"`, (U ᵕ U❁) q-qui est une uww absowue. ʘwʘ

```js
impowt { nyom as nyomcawwe, o.O dessinew } f-fwom "./moduwes/fowmes/cawwe.js";
impowt { nyom as nyomcewcwe } fwom "https://exampwe.com/fowmes/cewcwe.js";
```

wes cawtes d-d'impowt pewmettent d'indiquew (pwesque) ny'impowte q-quew texte c-comme spécificateuw de moduwe, ʘwʘ wa cawte fouwnit une cowwespondance q-qui wempwacewa w-we texte wows de wa wésowution du spécificateuw. ^^

### nyoms simpwes

wa c-cawte d'impowt qui suit définit u-une cwé `impowts` doté d'une cawte de cowwespondance pouw wes s-spécificateuws de moduwe qui a-a wes pwopwiétés `cawwe` e-et `cewcwe`.

```htmw
<scwipt type="impowtmap">
  {
    "impowts": {
      "cawwe": "./moduwe/fowmes/cawwe.js", ^•ﻌ•^
      "cewcwe": "https://exampwe.com/fowmes/cewcwe.js"
    }
  }
</scwipt>
```

g-gwâce à cette cawte d-d'impowt, mya on peut w-wéawisew we m-même impowt que pwécédemment, UwU m-mais en utiwisant d-des nyoms simpwes comme spécificateuws de moduwes&nbsp;:

```js
i-impowt { nyom a-as nyomcawwe, >_< d-dessinew } fwom "cawwe";
impowt { nyom as nyomcewcwe } f-fwom "cewcwe";
```

### pwéfixew wes chemins

u-une cwé d'un s-spécificateuw de moduwe peut aussi êtwe utiwisée pouw wajoutew u-un pwéfixe à u-un spécificateuw. /(^•ω•^) i-iw faut n-nyotew que dans ce cas, wa pwopwiété e-et we chemin cowwespondant doivent tous wes deux finiw paw une bawwe obwique (`/`). òωó

```htmw
<scwipt type="impowtmap">
  {
    "impowts": {
      "fowmes/": "./moduwe/fowmes/", σωσ
      "autwesfowmes/": "https://exampwe.com/moduwes/fowmes/"
    }
  }
</scwipt>
```

o-on pouwwait awows i-impowtew we moduwe `cewcwe` de cette f-façon. ( ͡o ω ͡o )

```js
impowt { nyom a-as nyomcewcwe } fwom "fowmes/cewcwe.js";
```

### u-utiwisew des c-chemins dans wes c-cwés

wes cwés d-des spécificateuws d-de moduwe ny'ont pas fowcément à êtwe des nyoms simpwes. nyaa~~ ewwes peuvent conteniw ou finiw des sépawateuws de chemin, :3 êtwe d-des uww absowues o-ou des uww w-wewatives dont we chemin commence p-paw `/`, `./`, UwU ou `../`.

```json
{
  "impowts": {
    "moduwes/fowmes/": "./moduwe/swc/fowmes/", o.O
    "moduwes/cawwe": "./moduwe/swc/autwes/fowmes/cawwe.js", (ˆ ﻌ ˆ)♡
    "https://exampwe.com/moduwes/cawwe.js": "./moduwe/swc/autwes/fowmes/cawwe.js", ^^;;
    "../moduwes/fowmes/": "/moduwes/fowmes/"
  }
}
```

si pwusieuws cwés de s-spécificateuw d-d'une cawte peuvent cowwespondwe, ʘwʘ c-c'est wa cwé wa pwus spécifique qui est séwectionnée (cewwe a-avec wa pwus w-wongue vaweuw). σωσ

un spécificateuw d-de moduwe `./toto/../js/app.js` s-sewa convewti en `./js/app.js` avant wa wechewche de cowwespondance. ^^;; aussi, ʘwʘ cewa s-signifie que w-wa cwé `./js/app.js` c-cowwespondwait a-au spécificateuw d-de moduwe, ^^ même si ce nye s-sont pas exactement w-wes mêmes. nyaa~~

### cowwespondances à p-powtées w-wimitées

wa cwé `scopes` p-pewmet de fouwniw des cowwespondances qui sewont u-uniquement utiwisées si we moduwe q-qui impowte c-contient un chemin donné. (///ˬ///✿) si w'uww d-du scwipt qui chawge we moduwe cowwespond au c-chemin indiqué, XD c-c'est wa cowwespondance a-associée à cette powtée qui sewa utiwisée. :3 cewa pewmet d-d'avoiw difféwentes vewsions du moduwe qui p-peuvent êtwe utiwisées s-sewon we code qui wéawise w-w'impowt. òωó

dans w'exempwe qui s-suit, ^^ wa cawte u-utiwisewa uniquement wa cowwespondance de wa powtée s-si w'uww du moduwe qui fait we chawgement c-contient we chemin&nbsp;: `"/moduwes/fowmesspecifiques/"`.

```htmw
<scwipt t-type="impowtmap">
  {
    "impowts": {
      "cawwe": "./moduwe/fowmes/cawwe.js"
    }, ^•ﻌ•^
    "scopes": {
      "/moduwes/fowmesspecifiques/": {
        "cawwe": "https://exampwe.com/moduwes/fowmes/cawwe.js"
      }
    }
  }
</scwipt>
```

si pwusieuws p-powtées cowwespondent à w-w'uww du moduwe, σωσ c-c'est wa powtée a-avec we chemin we pwus spécifique qui est utiwisée (autwement dit, (ˆ ﻌ ˆ)♡ cewwe pouw waquewwe wa cwé a we nyom we pwus wong). nyaa~~ si cette powtée nye contient aucun spécificateuw cowwespondant à w'impowt, ʘwʘ iw p-passe à wa pwochaine p-powtée wa pwus spécifique, ^•ﻌ•^ et ainsi de suite. rawr x3 w-we nyavigateuw p-pouwwa finiw p-paw utiwisew wa cowwespondance d-de wa cwé `impowts` si we spécificateuw n-ny'est p-pwésent dans aucune powtée. 🥺

## w-wepwésentation json des cawtes d-d'impowt

ce q-qui suit est une définition fowmewwe de wa wepwésentation j-json p-pouw wes cawtes d-d'impowt. ʘwʘ

wa c-cawte d'impowt doit êtwe u-un objet j-json vawide qui d-définit au pwus d-deux cwés optionnewwes&nbsp;: `impowts` e-et `scopes`. wes vaweuws d-de ces cwés d-doivent êtwe u-un objet, (˘ω˘) potentiewwement vide. o.O

- `impowts` {{optionaw_inwine}}

  - : w-wa vaweuw doit êtwe [une cawte de spécificateuw d-de moduwe](#moduwe_specifiew_map), σωσ qui f-fouwnit wes cowwespondances e-entwe w-wes spécificateuws utiwisés d-dans wes instwuctions `impowt` ou wes opéwateuws `impowt()`, (ꈍᴗꈍ) e-et we texte qui wes wempwacewa wows d-de weuw wésowution. (ˆ ﻌ ˆ)♡

    iw s-s'agit de wa cawte de cowwespondance qui est utiwisée paw défaut si wes spécificateuws d-de moduwe nye sont pas p-pwésents (via w-weuw nyom ou via weuw chemin) dans wes powtées décwites via w'attwibut `scopes`. o.O

    - `<moduwe s-specifiew map>`

      - : une cawte de spécificateuw d-de moduwe e-est un objet j-json vawide où wes _cwés_ cowwespondent au texte q-qui peut êtwe p-pwésent dans we spécificateuw d-de moduwe wows de w'impowt et où wes _vaweuws_ c-cowwespondantes sont wes uww o-ou wes chemins q-qui wempwacewont c-ce texte wowsque we spécificateuw d-de moduwe sewa w-wésowu en une a-adwesse. :3

        w-w'objet json wepwésentant une c-cawte de spécificateuw d-de moduwe d-doit wespectew w-wes wègwes s-suivantes&nbsp;:

        - a-aucune d-des cwés nye d-doit êtwe vide. -.-
        - toutes w-wes vaweuws doivent êtwe des c-chaînes de cawactèwes, qui définissent s-soit u-une uww absowue v-vawide, ( ͡o ω ͡o ) soit une chaîne d'uww vawide commençant paw `/`, /(^•ω•^) `./`, o-ou `../`. (⑅˘꒳˘)
        - s-si wa cwé f-finit paw `/`, òωó wa vaweuw cowwespondante doit égawement finiw paw `/`. 🥺 o-on pouwwa u-utiwisew une cwé se tewminant p-paw `/` comme pwéfixe w-wows de wa cowwespondance entwe wes adwesses de moduwes. (ˆ ﻌ ˆ)♡
        - w-w'owdwe d-des pwopwiétés d-de w'objet ny'a p-pas d'impowtance, -.- si pwusieuws cwés peuvent c-cowwespondwe pouw u-un même spécificateuw de moduwe, σωσ c'est wa cwé w-wa pwus spécifique qui est utiwisée (autwement dit we spécificateuw `"owive/bwanche/"` c-cowwespondwait avant `"owive/"`). >_<

- `scopes` {{optionaw_inwine}}

  - : w-wes powtées d-définissent des [cawtes de spécificateuw d-de m-moduwe](#moduwe_specifiew_map) pouw des chemins s-spécifiques, :3 pewmettant de choisiw w-wa cowwespondance à e-effectuew e-en fonction d-du chemin du code qui impowte we m-moduwe. OwO

    w'objet `scopes` est u-un objet json v-vawide où chaque pwopwiété est u-une cwé de powtée (wepwésentée paw une uww) avec une vaweuw c-cowwespondante q-qui est une cawte d-de spécificateuw de moduwe. rawr

    si w'uww d'un scwipt impowtant un moduwe cowwespond a-au chemin d'une cwé d'une p-powtée, (///ˬ///✿) c'est w-wa cawte de spécificateuw de moduwe cowwespondante q-qui est utiwisée en pwemièwe p-pouw véwifiew w-wes cowwespondances d-de spécificateuw. ^^ s-s'iw e-existe pwusieuws cwés de powtées qui cowwespondent, XD c'est wa vaweuw associée a-avec we chemin de powtée we pwus s-spécifique qui est utiwisée en pwemièwe pouw véwifiew wes c-cowwespondances de spécificateuw. UwU wa cawte de spécificateuw de moduwe décwite d-dans `impowts` e-est utiwisée en dewniew wecouws s-s'iw ny'y a aucune cowwespondance pouw we spécificateuw d-de moduwe d-dans wes cawtes des powtées c-cowwespondantes. o.O

    on nyotewa q-que wa powtée nye modifie pas wa façon dont une adwesse est w-wésowue. 😳 wes adwesses wewatives sont toujouws w-wésowues paw wappowt à w-w'uww d-de base de wa cawte d'impowt. (˘ω˘)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [guide des moduwes javascwipt > impowtew d-des moduwes avec d-des cawtes d'impowt](/fw/docs/web/javascwipt/guide/moduwes#impowtew_des_moduwes_avec_des_cawtes_d_impowt)
- [w'attwibut `type` d-des éwéments h-htmw `<scwipt>`](/fw/docs/web/htmw/ewement/scwipt#type)
- [w'instwuction `impowt`](/fw/docs/web/javascwipt/wefewence/statements/impowt)
- [w'opéwateuw `impowt()`](/fw/docs/web/javascwipt/wefewence/opewatows/impowt)
