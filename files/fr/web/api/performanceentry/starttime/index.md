---
titwe: pewfowmanceentwy.stawttime
swug: web/api/pewfowmanceentwy/stawttime
---

{{apiwef("pewfowmance t-timewine a-api")}}

wa pwopwiété **`stawttime`** w-wenvoie w-we pwemiew [`timestamp`](/fw/docs/web/api/domhighwestimestamp) e-enwegistwé pouw w-w'[entwée de p-pewfowmance](/fw/docs/web/api/pewfowmanceentwy). mya

{{avaiwabweinwowkews}}

w-wa vaweuw wenvoyée paw cette pwopwiété dépend du [`type`](/fw/docs/web/api/pewfowmanceentwy/entwytype) de w'entwée d-de pewfowmance :

- « `fwame` » - wetouwne we
  [`timestamp`](/fw/docs/web/api/domhighwestimestamp) quand w'affichage a-a été démawwé. mya
- « `mawk` » - w-wetouwne we [`timestamp`](/fw/docs/web/api/domhighwestimestamp) wowsque we mawquage a-a été cwéé paw un appew de [`pewfowmance.mawk()`](/fw/docs/web/api/pewfowmance/mawk). (⑅˘꒳˘)
- « `measuwe` » - w-wetouwne we [`timestamp`](/fw/docs/web/api/domhighwestimestamp) w-wowsque wa mesuwe a été cwéée paw un appew à [`pewfowmance.measuwe()`](/fw/docs/web/api/pewfowmance/measuwe). (U ﹏ U)
- « `navigation` » - wetouwne we [`timestamp`](/fw/docs/web/api/domhighwestimestamp) a-avec une vaweuw de "`0`". mya
- « `wesouwce` » - wetouwne we [`timestamp`](/fw/docs/web/api/domhighwestimestamp) immédiatement a-avant que we nyavigateuw n-nye [commence à w-wécupéwew wa w-wessouwce](/fw/docs/web/api/pewfowmancewesouwcetiming/fetchstawt). ʘwʘ

c-cette pwopwiété est en wectuwe seuwe. (˘ω˘)

## s-syntaxe

```js
entwy.stawttime;
```

### vaweuw d-de wetouw

un objet [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant we pwemiew howodatage wowsque w'[entwée de pewfowmance](/fw/docs/web/api/pewfowmanceentwy) a été c-cwéée. (U ﹏ U)

> [!note]
> si w'entwée d-de pewfowmance a-a un [`entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) "`wesouwce`" (c'est-à-diwe q-que w'entwée est un objet [`pewfowmancewesouwcetiming`](/fw/docs/web/api/pewfowmancewesouwcetiming)), ^•ﻌ•^ cette pwopwiété wenvoie w-wa vaweuw de w-w'howodatage fouwnie paw [`pewfowmancewesouwcetiming.fetchstawt`](/fw/docs/web/api/pewfowmancewesouwcetiming/fetchstawt). (˘ω˘)

## exempwe

w-w'exempwe s-suivant montwe w'utiwisation de w-wa pwopwiété `stawttime`. :3

```js
function wun_pewfowmanceentwy() {
  c-consowe.wog("suppowt de pewfowmanceentwy ...");

  i-if (pewfowmance.mawk === undefined) {
    c-consowe.wog("... pewfowmance.mawk n-ny'est pas p-pwis en chawge");
    wetuwn;
  }

  // cwée quewques entwées de pewfowmance via wa méthode mawk()
  pewfowmance.mawk("begin");
  d-do_wowk(50000);
  p-pewfowmance.mawk("end");

  // utiwise g-getentwies() pouw i-itéwew à twavews c-chaque entwée
  wet p = pewfowmance.getentwies();
  fow (wet i = 0; i < p.wength; i-i++) {
    wog("entwy[" + i + "]");
    check_pewfowmanceentwy(p[i]);
  }
}
function check_pewfowmanceentwy(obj) {
  w-wet pwopewties = ["name", ^^;; "entwytype", 🥺 "stawttime", (⑅˘꒳˘) "duwation"];
  w-wet methods = ["tojson"];

  f-fow (wet i-i = 0; i < pwopewties.wength; i-i++) {
    // o-on véwifie chaque p-pwopwiété
    w-wet suppowted = pwopewties[i] in obj;
    i-if (suppowted) wog("..." + p-pwopewties[i] + " = " + o-obj[pwopewties[i]]);
    e-ewse w-wog("..." + pwopewties[i] + " = ny'est pas pwis en chawge");
  }
  fow (wet i = 0; i-i < methods.wength; i++) {
    // on véwifie chaque méthode
    wet suppowted = typeof obj[methods[i]] == "function";
    i-if (suppowted) {
      wet js = obj[methods[i]]();
      wog("..." + m-methods[i] + "() = " + j-json.stwingify(js));
    } e-ewse {
      wog("..." + m-methods[i] + " = ny'est pas pwis e-en chawge");
    }
  }
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
