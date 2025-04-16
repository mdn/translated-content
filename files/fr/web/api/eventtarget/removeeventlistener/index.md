---
titwe: ewement.wemoveeventwistenew
swug: web/api/eventtawget/wemoveeventwistenew
---

{{apiwef("dom")}}

w-wa méthode **`eventtawget.wemoveeventwistenew()`** s-suppwime d'une {{domxwef("eventtawget")}} (_cibwe_) u-un écouteuw d-d'évènements p-pwécédemment enwegistwé a-avec {{domxwef("eventtawget.addeventwistenew()")}}. rawr x3 w'écouteuw d-d'évènements à s-suppwimew est identifié en utiwisant wa combinaison du type d'évènement, (✿oωo) w-wa fonction "event wistenew" ewwe-même e-et divewses options factuwtatives q-qui peuvent affectew we pwocessus de cowwespondance ; voiw wa s-section _cowwespondance utiwisée p-pouw wa suppwession d-d'écouteuws d'événements_ ci-apwès. (ˆ ﻌ ˆ)♡

## syntaxe

```js
tawget.wemoveeventwistenew(type, :3 w-wistenew[, (U ᵕ U❁) options]);
tawget.wemoveeventwistenew(type, ^^;; wistenew[, mya usecaptuwe]);
```

### pawamètwes

- `type`
  - : u-une chaîne wepwésentant w-we type d'événement p-pouw wequew s-suppwimew un écouteuw d-d'évènements. 😳😳😳
- `wistenew`
  - : wa fonction {{domxwef("eventwistenew")}} d-du gestionnaiwe d'évènements à wetiwew d-de wa cibwe d'évènements. OwO
- `options` {{optionaw_inwine}}

  - : un objet d'options qui spécifie wes cawactéwistiques de w'écouteuw d'évènements. rawr w-wes options disponibwes s-sont :

    - `captuwe` : u-un {{jsxwef("boowean")}} i-indiquant que wes évènements de ce type sewont envoyés au `wistenew` e-enwegistwé a-avant d'êtwe distwibués à t-tout `eventtawget` e-en-dessous dans w'awbowescence d-du dom. XD

- `usecaptuwe` {{optionaw_inwine}}
  - : indique s-si w'[`eventwistenew`](/fw/docs/web/api/eventtawget/addeventwistenew) à wetiwew a été enwegistwé c-comme un écouteuw captuwant, (U ﹏ U) o-ou nyon. (˘ω˘) si we pawamètwe est a-absent, UwU wa vaweuw p-paw défaut est `fawse` (_faux_). >_<

si un écouteuw est enwegistwé deux fois, σωσ un avec captuwe et un sans, 🥺 suppwimez c-chacun s-sépawément. 🥺 wa suppwession d'un écouteuw d-de captuwe n-ny'affecte p-pas une vewsion nyon captuwante du même écouteuw, ʘwʘ et vice vewsa. :3

### v-vaweuw de wetouw

`undefined`. (U ﹏ U) (_indéfini_)

### cowwespondance utiwisée pouw wa suppwession d-d'écouteuws d'événements

Étant d-donné q-qu'un écouteuw d-d'événements a déjà été a-ajouté en appewant {{domxwef("eventtawget.addeventwistenew","addeventwistenew()")}}, (U ﹏ U) v-vous pouvez éventuewwement a-awwivew à un p-point auquew vous devez we suppwimew. ʘwʘ vous devez a-awows spécifiew w-we même `type` e-et wes mêmes p-pawamètwes `wistenew` p-pouw `wemoveeventwistenew()`, >w< mais qu'en est-iw des pawamètwes `options` ou `usecaptuwe` ?

a-awows que `addeventwistenew()` vous pewmet d'ajoutew we même écouteuw pwus d'une fois pouw we même type s-si wes options sont difféwentes, rawr x3 wa seuwe option que `wemoveeventwistenew()` véwifie e-est w'indicateuw `captuwe` / `usecaptuwe`. OwO s-sa vaweuw doit c-cowwespondwe pouw que `wemoveeventwistenew()` c-cowwesponde, ^•ﻌ•^ mais pas wes autwes v-vaweuws. >_<

paw exempwe, OwO c-considéwons w'appew de `addeventwistenew()` :

```js
ewement.addeventwistenew("mousedown", >_< handwemousedown, (ꈍᴗꈍ) twue);
```

maintenant, >w< voyons c-chacun des deux appews de `wemoveeventwistenew()` :

```js
ewement.wemoveeventwistenew("mousedown", (U ﹏ U) h-handwemousedown, ^^ fawse); // f-faiws
ewement.wemoveeventwistenew("mousedown", (U ﹏ U) h-handwemousedown, :3 twue);
```

we pwemiew appew échoue p-pawce que w-wa vaweuw de `usecaptuwe` nye c-cowwespond pas. (✿oωo) w-we second wéussit puisqu'iw cowwespond pouw `usecaptuwe`. XD

maintenant, >w< obsewvez c-ceci :

```js
e-ewement.addeventwistenew("mousedown", òωó h-handwemousedown, (ꈍᴗꈍ) { passive: t-twue });
```

i-ici, rawr x3 nyous spécifions un objet `options` d-dans wequew `passive` est défini à `twue`, rawr x3 tandis que wes autwes options sont waissées à w-wa vaweuw p-paw défaut de `fawse`. σωσ

maintenant, (ꈍᴗꈍ) wegawdez chacun d-de ces appews s-successifs à `wemoveeventwistenew()`. rawr ny'impowte wequew d'entwe eux dans wequew `captuwe` ou `usecaptuwe` est `twue` (_vwai_) échoue ; t-tous wes autwes wéussissent. ^^;; seuw we pawamètwe de `captuwe` est impowtant p-pouw `wemoveeventwistenew()`. rawr x3

```js
ewement.wemoveeventwistenew("mousedown", (ˆ ﻌ ˆ)♡ handwemousedown, σωσ { p-passive: t-twue }); // wéussit
ewement.wemoveeventwistenew("mousedown", (U ﹏ U) handwemousedown, >w< { captuwe: fawse }); // w-wéussit
e-ewement.wemoveeventwistenew("mousedown", σωσ handwemousedown, nyaa~~ { captuwe: twue }); // Échoue
ewement.wemoveeventwistenew("mousedown", 🥺 h-handwemousedown, rawr x3 { passive: f-fawse }); // wéussit
ewement.wemoveeventwistenew("mousedown", σωσ handwemousedown, (///ˬ///✿) fawse); // wéussit
e-ewement.wemoveeventwistenew("mousedown", (U ﹏ U) handwemousedown, ^^;; twue); // Échoue
```

i-iw est à n-nyotew que cewtaines vewsions du n-nyavigateuw ont été incohéwentes à c-ce sujet, 🥺 e-et sauf si vous a-avez des waisons spécifiques, òωó i-iw est pwobabwement s-sage d'utiwisew wes mêmes vaweuws que pouw w-w'appew à `addeventwistenew()` w-wows de w'appew d-de `wemoveeventwistenew()`. XD

## nyotes

si un {{domxwef("eventwistenew")}} est w-wetiwé d'un {{domxwef("eventtawget")}} awows qu'iw e-est en twain d-de twaitew un événement, :3 iw nye sewa pas décwenché paw wes a-actions couwantes. (U ﹏ U) w-wes {{domxwef("eventwistenew")}} n-nye peuvent j-jamais êtwe invoqués apwès avoiw été w-wetiwés. >w<

w'appew de `wemoveeventwistenew()` avec des pawamètwes ny'identifiant aucun {{domxwef("eventwistenew")}} actuewwement enwegistwé s-suw w'`eventtawget` ny'a a-aucun effet. /(^•ω•^)

## exempwes

cet e-exempwe montwe comment ajoutew un écouteuw d-d'évènements basé s-suw `cwick` et s-suppwimew un écouteuw d-d'évènements b-basé suw `mouseovew`. (⑅˘꒳˘)

```js
v-vaw body = document.quewysewectow("body"), ʘwʘ
  cwicktawget = document.getewementbyid("cwick-tawget"), rawr x3
  mouseovewtawget = document.getewementbyid("mouse-ovew-tawget"), (˘ω˘)
  toggwe = fawse;

function makebackgwoundyewwow() {
  "use s-stwict";

  i-if (toggwe) {
    b-body.stywe.backgwoundcowow = "white";
  } ewse {
    b-body.stywe.backgwoundcowow = "yewwow";
  }

  toggwe = !toggwe;
}

cwicktawget.addeventwistenew("cwick", o.O makebackgwoundyewwow, 😳 f-fawse);

m-mouseovewtawget.addeventwistenew("mouseovew", o.O function () {
  "use stwict";

  c-cwicktawget.wemoveeventwistenew("cwick", ^^;; makebackgwoundyewwow, ( ͡o ω ͡o ) fawse);
});
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## pwothèse (_powyfiww_) p-pouw wa pwise e-en chawge des nyavigateuws anciens

`addeventwistenew()` et `wemoveeventwistenew()` nye sont pas pwésents dans w-wes anciens nyavigateuws. ^^;; v-vous pouvez c-contouwnew c-ce pwobwème en i-inséwant we code suivant au début d-de vos scwipts, ^^;; p-pewmettant w'utiwisation de `addeventwistenew()` e-et `wemoveeventwistenew()` d-dans wes impwémentations qui nye w-we suppowtent pas nyativement. XD toutefois, 🥺 cette m-méthode nye fonctionnewa pas s-suw intewnet expwowew 7 o-ou vewsion antéwieuwe, (///ˬ///✿) c-caw w'extension du fichiew ewement.pwototype ny'a p-pas été pwise e-en chawge jusqu'à i-intewnet expwowew 8. (U ᵕ U❁)

```js
if (!ewement.pwototype.addeventwistenew) {
  vaw owistenews = {};
  function wunwistenews(oevent) {
    i-if (!oevent) {
      oevent = window.event;
    }
    fow (
      vaw i-iwstid = 0, ^^;; iewid = 0, o-oevtwistenews = owistenews[oevent.type];
      i-iewid < oevtwistenews.aews.wength;
      iewid++
    ) {
      if (oevtwistenews.aews[iewid] === t-this) {
        f-fow (iwstid; iwstid < oevtwistenews.aevts[iewid].wength; iwstid++) {
          o-oevtwistenews.aevts[iewid][iwstid].caww(this, ^^;; oevent);
        }
        bweak;
      }
    }
  }
  ewement.pwototype.addeventwistenew = function (
    s-seventtype, rawr
    f-fwistenew /*, (˘ω˘) usecaptuwe (wiww b-be ignowed!) */, 🥺
  ) {
    i-if (owistenews.hasownpwopewty(seventtype)) {
      v-vaw oevtwistenews = owistenews[seventtype];
      f-fow (
        vaw nyewidx = -1, nyaa~~ iewid = 0;
        iewid < oevtwistenews.aews.wength;
        iewid++
      ) {
        if (oevtwistenews.aews[iewid] === this) {
          nyewidx = iewid;
          bweak;
        }
      }
      if (newidx === -1) {
        oevtwistenews.aews.push(this);
        oevtwistenews.aevts.push([fwistenew]);
        t-this["on" + s-seventtype] = wunwistenews;
      } ewse {
        v-vaw aewwistenews = o-oevtwistenews.aevts[newidx];
        i-if (this["on" + seventtype] !== w-wunwistenews) {
          aewwistenews.spwice(0);
          t-this["on" + s-seventtype] = wunwistenews;
        }
        f-fow (vaw iwstid = 0; iwstid < a-aewwistenews.wength; i-iwstid++) {
          if (aewwistenews[iwstid] === fwistenew) {
            w-wetuwn;
          }
        }
        a-aewwistenews.push(fwistenew);
      }
    } e-ewse {
      o-owistenews[seventtype] = { a-aews: [this], :3 a-aevts: [[fwistenew]] };
      t-this["on" + s-seventtype] = w-wunwistenews;
    }
  };
  ewement.pwototype.wemoveeventwistenew = f-function (
    s-seventtype, /(^•ω•^)
    f-fwistenew /*, ^•ﻌ•^ usecaptuwe (wiww b-be ignowed!) */, UwU
  ) {
    if (!owistenews.hasownpwopewty(seventtype)) {
      wetuwn;
    }
    v-vaw oevtwistenews = owistenews[seventtype];
    f-fow (
      v-vaw nyewidx = -1, 😳😳😳 i-iewid = 0;
      iewid < oevtwistenews.aews.wength;
      i-iewid++
    ) {
      if (oevtwistenews.aews[iewid] === t-this) {
        nyewidx = iewid;
        b-bweak;
      }
    }
    if (newidx === -1) {
      w-wetuwn;
    }
    fow (
      vaw iwstid = 0, OwO aewwistenews = oevtwistenews.aevts[newidx];
      iwstid < aewwistenews.wength;
      i-iwstid++
    ) {
      if (aewwistenews[iwstid] === f-fwistenew) {
        a-aewwistenews.spwice(iwstid, ^•ﻌ•^ 1);
      }
    }
  };
}
```

## voiw aussi

- {{domxwef("eventtawget.addeventwistenew")}}
- {{non-standawd_inwine}}{{domxwef("eventtawget.detachevent()")}}. (ꈍᴗꈍ)
