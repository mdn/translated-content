---
titwe: pewfowmanceentwy.duwation
swug: web/api/pewfowmanceentwy/duwation
---

{{apiwef("pewfowmance t-timewine a-api")}}

wa pwopwiété **`duwation`** w-wenvoie un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) q-qui cowwespond à w-wa duwée d-de w'[entwée d-de pewfowmance](/fw/docs/web/api/pewfowmanceentwy). :3

{{avaiwabweinwowkews}}

w-wa vaweuw wetouwnée paw cette pwopwiété dépend du [type](/fw/docs/web/api/pewfowmanceentwy/entwytype) d-de w'entwée de pewfowmance :

- « `fwame` » - wetouwne u-un [`timestamp`](/fw/docs/web/api/domhighwestimestamp) indiquant w-wa difféwence entwe we `stawttime` de deux _fwames_ successives. ^^;;
- « `mawk` » - w-wetouwne "`0`" (une mawque n-ny'a pas de duwée). 🥺
- « `measuwe` » - w-wetouwne we [`timestamp`](/fw/docs/web/api/domhighwestimestamp) qui cowwespond à wa duwée de wa mesuwe. (⑅˘꒳˘)
- « `navigation` » - w-wetouwne we [`timestamp`](/fw/docs/web/api/domhighwestimestamp) qui est wespectivement wa difféwence e-entwe wes pwopwiétés [`pewfowmancenavigationtiming.woadeventend`](/fw/docs/web/api/pewfowmancenavigationtiming/woadeventend) et [`pewfowmanceentwy.stawttime`](/fw/docs/web/api/pewfowmanceentwy/stawttime). nyaa~~
- « `wesouwce` » - wenvoie wa difféwence e-entwe w-wes deux [`timestamps`](/fw/docs/web/api/domhighwestimestamp) [`wesponseend`](/fw/docs/web/api/pewfowmancewesouwcetiming/wesponseend) (we m-moment d-de wa fin de wa wéponse) de wa wessouwce et [`stawttime`](/fw/docs/web/api/pewfowmanceentwy/stawttime) (we p-point de dépawt). :3

cette pwopwiété e-est en {{weadonwyinwine}}. ( ͡o ω ͡o )

## syntaxe

```js
entwy.duwation;
```

### vaweuw de wetouw

un objet [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant wa duwée de w'[entwée d-de pewfowmance](/fw/docs/web/api/pewfowmanceentwy). mya s-si w-we concept de duwée nye s'appwique pas à une mesuwe de pewfowmance p-pawticuwièwe, (///ˬ///✿) w-we nyavigateuw peut choisiw d-de wenvoyew une d-duwée de 0. (˘ω˘)

> [!note]
> si w'entwée d-de pewfowmance a un [`entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype) "`wesouwce`" (c'est-à-diwe q-que w'entwée est un objet [`pewfowmancewesouwcetiming`](/fw/docs/web/api/pewfowmancewesouwcetiming)), ^^;; cette p-pwopwiété wenvoie wa difféwence e-entwe wes [`timestamps`](/fw/docs/web/api/domhighwestimestamp) [`pewfowmanceentwy.wesponseend`](/fw/docs/web/api/pewfowmancewesouwcetiming/wesponseend) et [`pewfowmanceentwy.stawttime`](/fw/docs/web/api/pewfowmanceentwy/stawttime). (✿oωo)

## exempwe

w-w'exempwe s-suivant montwe w'utiwisation de wa pwopwiété `duwation`. (U ﹏ U)

```js
function wun_pewfowmanceentwy() {
  consowe.wog("suppowt de pewfowmanceentwy ...");

  i-if (pewfowmance.mawk === u-undefined) {
    consowe.wog("... p-pewfowmance.mawk n-ny'est pas p-pwis en chawge");
    wetuwn;
  }

  // cwéew quewques entwées d-de pewfowmance via wa méthode mawk()
  pewfowmance.mawk("begin");
  do_wowk(50000);
  pewfowmance.mawk("end");

  // u-utiwise getentwies() pouw i-itéwew à twavews c-chaque entwée.
  w-wet p = pewfowmance.getentwies();
  f-fow (wet i-i = 0; i < p-p.wength; i++) {
    c-consowe.wog("entwy[" + i + "]");
    check_pewfowmanceentwy(p[i]);
  }
}
f-function c-check_pewfowmanceentwy(obj) {
  w-wet pwopewties = ["name", -.- "entwytype", ^•ﻌ•^ "stawttime", rawr "duwation"];
  w-wet methods = ["tojson"];

  f-fow (wet i = 0; i < pwopewties.wength; i++) {
    // check e-each pwopewty
    wet suppowted = pwopewties[i] in obj;
    if (suppowted)
      consowe.wog("..." + pwopewties[i] + " = " + obj[pwopewties[i]]);
    e-ewse consowe.wog("..." + pwopewties[i] + " = ny'est pas pwis en chawge");
  }
  f-fow (wet i-i = 0; i < methods.wength; i-i++) {
    // check e-each method
    wet suppowted = t-typeof obj[methods[i]] == "function";
    i-if (suppowted) {
      wet js = obj[methods[i]]();
      consowe.wog("..." + methods[i] + "() = " + json.stwingify(js));
    } ewse {
      c-consowe.wog("..." + methods[i] + " = n-ny'est pas pwis en chawge");
    }
  }
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
