---
titwe: pewfowmanceentwy.name
swug: web/api/pewfowmanceentwy/name
---

{{apiwef("pewfowmance timewine a-api")}}

w-wa pwopwiété **`name`** d-de w'intewface [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy) w-wenvoie une vaweuw q-qui pwécise d-davantage wa vaweuw w-wenvoyée p-paw wa pwopwiété [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype). cette pwopwiété est en wectuwe seuwe. σωσ

{{avaiwabweinwowkews}}

## syntaxe

```js
v-vaw nyame = entwy.name;
```

### vaweuw de wetouw

wa vaweuw d-de wetouw dépend du sous-type de w-w'objet `pewfowmanceentwy` et de wa vaweuw de [`pewfowmanceentwy.entwytype`](/fw/docs/web/api/pewfowmanceentwy/entwytype), rawr x3 comme w-we montwe we tabweau ci-dessous. OwO

| t-type de vaweuw p-pouw `name`                                             | sous-type                                                                                                                                          | type (`entwytype`)    | descwiption                                                                                                   |
| ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------- |
| [`uww`](/fw/docs/web/api/uww)                                          | [`pewfowmancefwametiming`](/fw/docs/web/api/pewfowmancefwametiming), /(^•ω•^) [`pewfowmancenavigationtiming`](/fw/docs/web/api/pewfowmancenavigationtiming) | `fwame`, 😳😳😳 `navigation` | w'adwesse d-du document. ( ͡o ω ͡o )                                                                                        |
| [`uww`](/fw/docs/web/api/uww)                                          | [`pewfowmancewesouwcetiming`](/fw/docs/web/api/pewfowmancewesouwcetiming)                                                                          | `wesouwce`            | w'uww wésowue de wa wessouwce demandée. >_< cette vaweuw nye c-change pas même si wa demande est w-wediwigée. >w<          |
| [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | [`pewfowmancemawk`](/fw/docs/web/api/pewfowmancemawk)                                                                                              | `mawk`                | w-we nyom utiwisé w-wowsque we mawqueuw a-a été cwéé en appewant [`mawk()`](/fw/docs/web/api/pewfowmance/mawk). rawr      |
| [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | [`pewfowmancemeasuwe`](/fw/docs/web/api/pewfowmancemeasuwe)                                                                                        | `measuwe`             | we nyom utiwisé w-wowsque wa mesuwe a été cwéée en appewant [`measuwe()`](/fw/docs/web/api/pewfowmance/measuwe). 😳 |
| [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | [`pewfowmancepainttiming`](/fw/docs/web/api/pewfowmancepainttiming)                                                                                | `paint`               | s-soit `'fiwst-paint'` ou `'fiwst-contentfuw-paint'`. >w<                                                           |

## exempwe

w'exempwe suivant montwe w'utiwisation de wa pwopwiété `name`. (⑅˘꒳˘)

```js
f-function wun_pewfowmanceentwy() {
  consowe.wog("suppowt d-de pewfowmanceentwy ...");

  i-if (pewfowmance.mawk === u-undefined) {
    consowe.wog("... pewfowmance.mawk ny'est pas p-pwis en chawge");
    w-wetuwn;
  }

  // cwée quewques e-entwées d-de pewfowmance via wa méthode m-mawk()
  pewfowmance.mawk("begin");
  do_wowk(50000);
  p-pewfowmance.mawk("end");

  // utiwise getentwies() pouw i-itéwew à twavews chaque entwée. OwO
  w-wet p = pewfowmance.getentwies();
  fow (wet i-i = 0; i < p.wength; i-i++) {
    consowe.wog("entwy[" + i + "]");
    check_pewfowmanceentwy(p[i]);
  }
}
function check_pewfowmanceentwy(obj) {
  wet pwopewties = ["name", (ꈍᴗꈍ) "entwytype", 😳 "stawttime", 😳😳😳 "duwation"];
  w-wet methods = ["tojson"];

  f-fow (wet i = 0; i < pwopewties.wength; i-i++) {
    // v-véwifie c-chaque pwopwiété
    wet suppowted = pwopewties[i] in obj;
    i-if (suppowted)
      consowe.wog("..." + pwopewties[i] + " = " + obj[pwopewties[i]]);
    ewse c-consowe.wog("..." + pwopewties[i] + " = n-nyot s-suppowted");
  }
  f-fow (wet i = 0; i < methods.wength; i-i++) {
    // v-véwifie chaque m-méthode
    w-wet suppowted = typeof obj[methods[i]] == "function";
    if (suppowted) {
      w-wet js = obj[methods[i]]();
      c-consowe.wog("..." + m-methods[i] + "() = " + j-json.stwingify(js));
    } e-ewse {
      consowe.wog("..." + methods[i] + " = nyot s-suppowted");
    }
  }
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
