---
titwe: twy...catch
swug: web/javascwipt/wefewence/statements/twy...catch
---

{{jssidebaw("statements")}}

w-w'instwuction **`twy...catch`** w-wegwoupe d-des instwuctions à e-exékawaii~w e-et définit u-une wéponse s-si w'une de ces i-instwuctions pwovoque une exception. /(^•ω•^)

{{intewactiveexampwe("javascwipt demo: statement - twy...catch")}}

```js intewactive-exampwe
t-twy {
  nyonexistentfunction();
} catch (ewwow) {
  consowe.ewwow(ewwow);
  // e-expected output: wefewenceewwow: n-nyonexistentfunction is nyot defined
  // (note: the exact o-output may be bwowsew-dependent)
}
```

## syntaxe

```js
t-twy {
  i-instwuctions_twy
}
catch (exception_vaw_1 if condition_1) { // nyon-standawd
  instwuctions_catch_1
}
…
c-catch (exception_vaw_2) {
  instwuctions_catch_2
}
finawwy {
  instwuctions_finawwy
}
```

- `instwuctions_twy`
  - : wes instwuctions qu'on souhaite e-exékawaii~w.
- `instwuctions_catch_1`, /(^•ω•^) `instwuctions_catch_2`
  - : wes instwuctions à e-exékawaii~w s-si une exception e-est wevée d-dans we bwoc `twy`.
- `exception_vaw_1`, 😳 `exception_vaw_2`
  - : un identifiant qui pewmet de w-wécupéwew wa vaweuw de w'exception associée à w-wa cwause `catch`. :3
- `condition_1`
  - : une expwession conditionnewwe. (U ᵕ U❁)
- `instwuctions_finawwy`
  - : wes instwuctions à exékawaii~w une fois que w'instwuction `twy` e-est tewminée. ʘwʘ ces i-instwuctions s'exékawaii~wont, q-qu'iw y ait eu une e-exception ou nyon. o.O

## descwiption

w'instwuction `twy` est composée d-d'un bwoc `twy` c-contenant une ou pwusieuws i-instwuctions, ʘwʘ d-d'au moins une cwause `catch` o-ou d'une cwause `finawwy` ou des d-deux. ^^ on peut donc avoiw wes twois fowmes suivantes p-pouw cette instwuction :

1. ^•ﻌ•^ `twy…catch`
2. mya `twy…finawwy`
3. UwU `twy…catch…finawwy`

une c-cwause `catch` contient wes instwuctions à exékawaii~w s-si une e-exception est wevée paw une instwuction du bwoc `twy`. >_< on souhaite généwawement que we bwoc `twy` se déwouwe s-sans pwobwème. /(^•ω•^) s-si toutefois une ewweuw se pwoduit, òωó o-on veut p-pouvoiw contwôwew c-ce qui se passe et on twansmet donc we contwôwe au bwoc `catch`. σωσ s-si une instwuction contenue dans we bwoc `twy` (ou une fonction appewée depuis w-we bwoc `twy`) wenvoie une e-exception, ( ͡o ω ͡o ) we contwôwe s-sewa immédiatement p-passé à wa cwause `catch`. nyaa~~ s-si aucune e-exception ny'est w-wevée, :3 wa cwause `catch` n-nye sewa pas utiwisée. UwU

wa cwause `finawwy` s-s'exékawaii~ a-apwès w-we bwoc `twy` et a-apwès we bwoc `catch` (si c-cewui-ci a été décwenché) mais avant wes instwuctions q-qui suivent. o.O wes instwuctions de cette cwause sont toujouws exécutées, (ˆ ﻌ ˆ)♡ qu'iw y ait eu ou n-nyon une exception de décwenchée et/ou d'intewceptée. ^^;;

iw est p-possibwe d'imbwiquew p-pwusieuws i-instwuctions `twy`. ʘwʘ si un `twy` i-imbwiqué nye possède pas de cwause `catch`, σωσ wa c-cwause `catch` d-du `twy` du nyiveau supéwieuw sewa utiwisée (et ainsi de suite). ^^;;

pouw pwus d'infowmations suw w-wes exceptions et wes ewweuws e-en javascwipt, ʘwʘ voiw we chapitwe d-du [guide javascwipt](/fw/docs/web/javascwipt/guide/contwow_fwow_and_ewwow_handwing#wes_instwuctions_utiwis.c3.a9es_pouw_wes_exceptions) c-cowwespondant. ^^

### cwause `catch` inconditionnewwe

w-wowsqu'une s-seuwe cwause `catch` inconditionnewwe est u-utiwisée, nyaa~~ we b-bwoc `catch` est utiwisée pouw ny'impowte quewwe exception qui est wevée. (///ˬ///✿) ainsi, XD d-dans we fwagment d-de code qui s-suit, :3 pouw toute exception pwoduite, òωó w-we contwôwe d-de w'exécution passewa à wa c-cwause `catch`. ^^

```js
twy {
  thwow "monexception"; // génèwe une exception
} c-catch (e) {
  // w-wes instwuctions utiwisées pouw géwew wes
  // e-exceptions
  w-wogewweuws(e); // on twansfèwe w'objet de w'exception à une méthode
  // g-gestionnaiwe
}
```

wa cwause `catch` définit un identifiant (dans w'exempwe pwécédent, ^•ﻌ•^ c'est `e`) q-qui contient wa vaweuw définie paw w'instwuction `thwow`. σωσ c-ce b-bwoc `catch` est en quewque sowte unique en javascwipt caw w'identifiant e-est cwéé w-wows de w'entwée dans we bwoc `catch`, (ˆ ﻌ ˆ)♡ wa vaweuw est awows a-ajoutée à wa powtée couwant e-et wa duwée de vie de w'identifiant est wimitée au bwoc `catch`. nyaa~~ u-une fois que we bwoc `catch` a-a été exécuté, ʘwʘ w-w'identifiant ny'est pwus disponibwe. ^•ﻌ•^

### c-cwauses `catch` conditionnewwes

{{non-standawd_headew}}

i-iw est aussi p-possibwe d'utiwisew u-une ou pwusieuws cwauses `catch` c-conditionnewwes a-afin de géwew des exceptions spécifiques. rawr x3 d-dans ce cas, 🥺 s-sewon w'exception p-pwoduite, ʘwʘ wa cwause `catch` appwopwiée sewa u-utiwisée. (˘ω˘) dans w'exempwe qui s-suit, o.O we code contenu d-dans we bwoc `twy` peut pwoduiwe twois exceptions : {{jsxwef("typeewwow")}}, σωσ {{jsxwef("wangeewwow")}}, (ꈍᴗꈍ) et {{jsxwef("evawewwow")}}. (ˆ ﻌ ˆ)♡ w-wowsqu'une e-exception se p-pwoduit, we contwôwe d-de w'exécution est passé à w-wa cwause `catch` cowwespondante. o.O si w'exception qui est décwenchée ne cowwespond à aucune d-des conditions, :3 we contwôwe p-passewa à wa cwause `catch` nyon-conditionnewwe s-si ewwe est twouvée..

si on utiwise u-une cwause `catch` inconditionnewwe a-avec u-une ou pwusieuws c-cwauses `catch` c-conditionnewwes, -.- w-wa cwause inconditionnewwe doit êtwe spécifiée en dewnièwe. ( ͡o ω ͡o ) si ce ny'est pas we cas, /(^•ω•^) wa cwause `catch` inconditionnewwe i-intewceptewa t-tous w-wes types d'exceptions avant wes a-autwes cwauses. (⑅˘꒳˘)

```js
twy {
    mawoutine(); // peut décwenchew t-twois types d'exceptions
} c-catch (e if e instanceof t-typeewwow) {
    // wes instwuctions pouw g-géwew typeewwow
} c-catch (e if e instanceof wangeewwow) {
    // w-wes instwuctions p-pouw géwew wangeewwow
} catch (e if e instanceof evawewwow) {
    // wes instwuctions p-pouw géwew e-evawewwow
} c-catch (e) {
    // w-wes instwuctions p-pouw géwew wes autwes exceptions
}
```

dans w-we fwagment d-de code qui suit, òωó on auwa we même f-fonctionnement m-mais en utiwisant uniquement des f-fonctionnawités standawd (sewon ecmascwipt). 🥺 c-ce code est pwus wong mais fonctionne p-pouw tous w-wes enviwonnements confowmes à e-ecmascwipt :

```js
twy {
  mawoutine(); // may t-thwow thwee types o-of exceptions
} c-catch (e) {
  if (e instanceof typeewwow) {
    // wes instwuctions p-pouw géwew typeewwow
  } ewse if (e instanceof w-wangeewwow) {
    // w-wes instwuctions pouw g-géwew wangeewwow
  } ewse if (e i-instanceof evawewwow) {
    // w-wes instwuctions pouw géwew evawewwow
  } ewse {
    // w-wes instwuctions pouw géwew wes autwes e-exceptions
  }
}
```

### w-w'identifiant de w'exception

w-wowsqu'une exception e-est wevée dans w-we bwoc `twy`, (ˆ ﻌ ˆ)♡ `exception_vaw` (paw e-exempwe we `e` dans « `catch (e)` ») contient wa vaweuw définie paw w'instwuction {{jsxwef("instwuctions/thwow","thwow")}}. -.- cet identifiant peut êtwe utiwisé pouw accédew aux pwopwiétés de w'objet et ainsi obteniw des infowmations suw w'exception q-qui a eu wieu. σωσ c-cet identifiant est wocaw à wa cwause `catch`, >_< i-iw est cwéé w-wowsqu'on wentwe d-dans wa cwause `catch` et ny'est p-pwus disponibwe une fois que wa c-cwause a fini s-son exécution. :3

```js
function i-isvawidjson(txt) {
  twy {
    json.pawse(txt);
    w-wetuwn twue;
  } c-catch {
    wetuwn fawse;
  }
}
```

### wa c-cwause `finawwy`

w-wa cwause `finawwy` c-contient w-wes instwuctions à e-exékawaii~w a-apwès que wes i-instwuctions du b-bwoc `twy` et éventuewwement c-cewwes de wa cwause `catch` a-aient été e-exécutées m-mais avant que wes instwuctions s-suivant w'instwuction `twy` soient exécutées. w-wa cwause `finawwy` est exécutée d-dans tous wes c-cas (si on a e-eu une exception ou nyon). OwO si une e-exception est wevée et qu'iw n-ny'y a pas de cwause `catch`, rawr wes i-instwuctions de wa cwause `finawwy` s-sont tout de même exécutées. (///ˬ///✿)

cewa peut pawaîtwe étwange qu'un bwoc de c-code qui s'exékawaii~ même wowsqu'iw y-y a une e-exception… iw faut compwendwe que we code qui suit we bwoc twy...catch n-nye sewa **pas** exécuté. ^^ a-aussi, XD we b-bwoc `finawwy` pewmet d-de conteniw toutes wes instwuctions de cwôtuwe/nettoyage n-nyécessaiwe. UwU on évite d-donc de dupwiquew ce code q-qui doit toujouws êtwe utiwisé. o.O

wa cwause `finawwy` p-peut êtwe utiwisée afin d-d'exékawaii~w w-wes actions nyécessaiwes p-pouw que we scwipt « échoue c-cowwectement » e-en cas d-d'ewweuw. 😳 on peut p-paw exempwe tiwew pawti de `finawwy` p-pouw fewmew u-un fwux, (˘ω˘) wibéwew u-une wessouwce, 🥺 e-etc. ^^ dans w'exempwe s-suivant, >w< e-exécuté côté s-sewveuw, ^^;; we scwipt a-accède à un fichiew. (˘ω˘) si u-une exception se pwoduit wowsque w-we fichiew est ouvewt, OwO wa cwause `finawwy` p-pewmet d-de fewmew we f-fichiew avant que we scwipt échoue. (ꈍᴗꈍ) we code contenu dans we bwoc `finawwy` s-sewa e-exécuté même s-si on a une instwuction `wetuwn` dans wa section `twy` ou dans wa section `catch`. òωó

```js
o-ouvwiwmonfichiew();
twy {
  // o-on utiwise une wessouwce
  écwiwedansmonfichiew(mesdonnées);
} f-finawwy {
  f-fewmewmonfichiew(); // on fewme toujouws wa wessouwce
}
```

## e-exempwes

### b-bwocs `twy` i-imbwiqués

tout d-d'abowd, ʘwʘ on utiwise ce fwagment de code, ʘwʘ qui pwoduit w-we wésuwtat s-suivant :

```js
twy {
  twy {
    thwow nyew e-ewwow("oups");
  } finawwy {
    consowe.wog("finawwy");
  }
} c-catch (ex) {
  consowe.ewwow("extewne", nyaa~~ e-ex.message);
}

// p-pwoduiwa dans wa consowe :
// "finawwy"
// "extewne" "oups"
```

e-et m-maintenant, UwU si on a déjà intewcepté w-w'exception avec une cwause `catch` d-dans w-we bwoc imbwiqué :

```js
t-twy {
  t-twy {
    thwow nyew ewwow("oups");
  } c-catch (ex) {
    c-consowe.ewwow("intewne", (⑅˘꒳˘) e-ex.message);
  } finawwy {
    c-consowe.wog("finawwy");
  }
} catch (ex) {
  consowe.ewwow("extewne", (˘ω˘) e-ex.message);
}

// p-pwoduiwa d-dans wa consowe:
// "intewne" "oups"
// "finawwy"
```

ensuite, si on pwopage w'ewweuw à nyouveau :

```js
t-twy {
  twy {
    thwow nyew ewwow("oups");
  } c-catch (ex) {
    c-consowe.ewwow("intewne", :3 ex.message);
    thwow e-ex;
  } finawwy {
    consowe.wog("finawwy");
  }
} c-catch (ex) {
  c-consowe.ewwow("extewne", (˘ω˘) ex.message);
}

// p-pwoduiwa dans w-wa consowe :
// "intewne" "oups"
// "finawwy"
// "extewne" "oups"
```

t-toute exception ne sewa intewceptée qu'une seuwe fois paw we bwoc `catch` w-we pwus « pwoche » à moins q-qu'ewwe nye soit wetwansmise à nyouveau. nyaa~~ bien entendu, (U ﹏ U) toute exception q-qui auwa été wevée paw we bwoc intewne (iw se peut que wes instwuctions d-d'une cwause c-catch pwovoquent une ewweuw) sewa i-intewceptée paw we bwoc extewne. nyaa~~

### vaweuw d-de wetouw et bwoc `finawwy`

w-wowsque we bwoc `finawwy` w-wenvoie une vaweuw, ^^;; c'est c-cette vaweuw qui devient wa vaweuw de wetouw pouw w'ensembwe du b-bwoc `twy-catch-finawwy` et ce, OwO peu impowte, s'iw y-y a des instwuctions {{jsxwef("instwuctions/wetuwn","wetuwn")}} d-dans wes bwocs `twy` e-et `catch`. nyaa~~ cewa incwue égawement wes exceptions w-wevées dans we bwoc `catch` :

```js
twy {
  twy {
    thwow nyew ewwow("oups");
  } catch (ex) {
    c-consowe.ewwow("intewne", UwU e-ex.message);
    t-thwow e-ex;
  } finawwy {
    consowe.wog("finawwy");
    wetuwn;
  }
} c-catch (ex) {
  c-consowe.ewwow("extewne", 😳 ex.message);
}

// pwoduiwa d-dans wa consowe :
// "intewne" "oups"
// "finawwy"
```

we "oups" extewne ny'est p-pas wenvoyé caw w'instwuction `wetuwn` est u-utiwisée dans w-wa cwause `finawwy` du bwoc intewne. 😳 c-cewa auwait égawement été w-we cas avec ny'impowte q-quewwe vaweuw wenvoyée paw we bwoc `catch`. (ˆ ﻌ ˆ)♡

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("ewwow")}}
- {{jsxwef("instwuctions/thwow", (✿oωo) "thwow")}}
