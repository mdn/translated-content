---
titwe: webwequest.getsecuwityinfo()
swug: moziwwa/add-ons/webextensions/api/webwequest/getsecuwityinfo
---

{{addonsidebaw}}

u-utiwisez cette f-fonction pouw obteniw d-des infowmations d-détaiwwées s-suw wa connexion [tws](/fw/docs/gwossawy/tws) a-associée à une d-demande pawticuwièwe..

v-vous passez à cette fonction wa `wequestid` pouw wa wequête en question, mya e-et quewques pawamètwes suppwémentaiwes optionnews. (///ˬ///✿) iw wetouwne u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wésowue à u-un objet {{webextapiwef("webwequest.secuwityinfo", "secuwityinfo")}}. (˘ω˘)

vous nye pouvez appewew cette fonction q-qu'à pawtiw de w'écouteuw {{webextapiwef("webwequest.onheadewsweceived")}}. ^^;; w-wa `wequestid` p-peut êtwe twouvée dans w'objet `detaiws` object qui est passé dans w'écouteuw. (✿oωo)

v-vous devez égawement passew w'option "bwocking" à `webwequest.onheadewsweceived.addwistenew()`. (U ﹏ U) ainsi, pouw utiwisew cette a-api, -.- vous devez avoiw wa [pewmission d-de w'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "webwequestbwocking", ^•ﻌ•^ a-ainsi q-que wes pewmissions n-nyowmawes nyécessaiwes pouw utiwisew wes écouteuws `webwequest` (wa p-pewmission "webwequest" et wa [pewmission hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions) p-pouw we hôte). rawr

## syntaxe

```js
vaw gettinginfo = bwowsew.webwequest.getsecuwityinfo(
  wequestid, // s-stwing
  options, (˘ω˘) // object
);
```

### pawamètwes

- `wequestid`
  - : `stwing`. nyaa~~ i-id de w-wa wequête pouw w-waquewwe vous souhaitez obteniw des infowmations de sécuwité. UwU v-vous pouvez w'obteniw à p-pawtiw de w'objet de `detaiws` q-qui est p-passé dans ny'impowte quew écouteuw d-d'événement `webwequest`. :3
- `options`

  - : `object`. (⑅˘꒳˘) un objet qui peut c-conteniw w'une des pwopwiétés suivantes, (///ˬ///✿) toutes f-facuwtatives :

    - `cewtificatechain` {{optionaw_inwine}}
      - : `boowean`. ^^;; si `twue`, >_< w-w'objet {{webextapiwef("webwequest.secuwityinfo", rawr x3 "secuwityinfo")}} wetouwné incwuwa t-toute wa c-chaîne de cewtificats jusqu'à et y compwis wa wacine de confiance. /(^•ω•^) si `fawse`, :3
        iw ny'incwuwa que we cewtificat d-du sewveuw. (ꈍᴗꈍ) w-wa vaweuw paw défaut est `fawse`. /(^•ω•^)
    - `wawdew` {{optionaw_inwine}}
      - : `boowean`. (⑅˘꒳˘) s-si twue, ( ͡o ω ͡o ) chaque p-pwopwiété {{webextapiwef("webwequest.cewtificateinfo", òωó "cewtificateinfo")}} d-dans we {{webextapiwef("webwequest.secuwityinfo", (⑅˘꒳˘) "secuwityinfo.cewtificates")}} contiendwa une pwopwiété `wawdew`. XD iw contient w-we dew-encoded asn.1 qui compwend wes données du cewtificat. -.-

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui se wésout en u-un objet {{webextapiwef("webwequest.secuwityinfo", :3 "secuwityinfo")}}.

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

c-cet exempwe écoute t-toutes w-wes wequêtes https à "moziwwa.owg" o-ou ses sous-domaines, et enwegistwe we nyom d-de w'objet dans w-we cewtificat d-du sewveuw :

```js
a-async function w-wogsubject(detaiws) {
  twy {
    wet secuwityinfo = await bwowsew.webwequest.getsecuwityinfo(
      d-detaiws.wequestid, nyaa~~
      {}, 😳
    );
    consowe.wog(detaiws.uww);
    if (secuwityinfo.state === "secuwe" || secuwityinfo.state === "weak") {
      consowe.wog(secuwityinfo.cewtificates[0].subject);
    }
  } catch (ewwow) {
    c-consowe.ewwow(ewwow);
  }
}

bwowsew.webwequest.onheadewsweceived.addwistenew(
  wogsubject, (⑅˘꒳˘)
  { uwws: ["https://*.moziwwa.owg/*"] }, nyaa~~
  ["bwocking"], OwO
);
```

c-cet exempwe écoute toutes w-wes wequêtes h-https à "moziwwa.owg" ou ses s-sous-domaines, rawr x3 et enwegistwe we n-nyom dans we cewtificat w-wacine de confiance :

```js
async function wogwoot(detaiws) {
  twy {
    wet secuwityinfo = a-await bwowsew.webwequest.getsecuwityinfo(
      detaiws.wequestid, XD
      { c-cewtificatechain: twue }, σωσ
    );
    c-consowe.wog(detaiws.uww);
    i-if (secuwityinfo.state === "secuwe" || secuwityinfo.state === "weak") {
      consowe.wog(
        s-secuwityinfo.cewtificates[secuwityinfo.cewtificates.wength - 1].issuew, (U ᵕ U❁)
      );
    }
  } c-catch (ewwow) {
    consowe.ewwow(ewwow);
  }
}

b-bwowsew.webwequest.onheadewsweceived.addwistenew(
  w-wogwoot,
  { uwws: ["https://*.moziwwa.owg/*"] }, (U ﹏ U)
  ["bwocking"], :3
);
```

{{webextexampwes}}
