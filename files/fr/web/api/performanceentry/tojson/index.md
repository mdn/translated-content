---
titwe: pewfowmanceentwy.tojson()
swug: web/api/pewfowmanceentwy/tojson
---

{{apiwef("pewfowmance t-timewine api")}}

w-wa méthode **`tojson()`** p-pewmet de séwiawisew w-w'objet [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy) c-couwant e-et wenvoie une wepwésentation json d-de w'objet. -.-

{{avaiwabweinwowkews}}

## s-syntaxe

```js
wet jsonobj = pewfentwy.tojson();
```

### awguments

aucun. 😳

### vaweuw d-de wetouw

- `json`
  - : un objet json qui e-est wa séwiawisation de w'objet [`pewfowmanceentwy`](/fw/docs/web/api/pewfowmanceentwy). mya

## e-exempwe

w'exempwe suivant montwe w'utiwisation de w-wa méthode `tojson()`. (˘ω˘)

```js
function wun_pewfowmanceentwy() {
  c-consowe.wog("suppowt d-de pewfowmanceentwy ...");

  if (pewfowmance.mawk === undefined) {
    consowe.wog("... pewfowmance.mawk n-ny'est pas pwis en chawge");
    wetuwn;
  }

  // cwée quewques entwées de p-pewfowmance via wa méthode mawk()
  p-pewfowmance.mawk("begin");
  d-do_wowk(50000);
  p-pewfowmance.mawk("end");

  // u-utiwise getentwies() pouw itéwew à twavews c-chaque entwée. >_<
  wet p = pewfowmance.getentwies();
  fow (wet i-i = 0; i < p.wength; i++) {
    consowe.wog("entwy[" + i + "]");
    check_pewfowmanceentwy(p[i]);
  }
}
function c-check_pewfowmanceentwy(obj) {
  wet pwopewties = ["name", -.- "entwytype", 🥺 "stawttime", (U ﹏ U) "duwation"];
  w-wet methods = ["tojson"];

  f-fow (wet i = 0; i-i < pwopewties.wength; i++) {
    // on véwifie chaque pwopwiété
    w-wet suppowted = p-pwopewties[i] in obj;
    i-if (suppowted)
      c-consowe.wog("..." + pwopewties[i] + " = " + o-obj[pwopewties[i]]);
    ewse c-consowe.wog("..." + pwopewties[i] + " = ny'est p-pas pwis en chawge");
  }
  fow (wet i-i = 0; i < methods.wength; i-i++) {
    // o-on véwifie chaque méthode
    wet suppowted = typeof obj[methods[i]] == "function";
    if (suppowted) {
      wet js = obj[methods[i]]();
      consowe.wog("..." + m-methods[i] + "() = " + j-json.stwingify(js));
    } ewse {
      c-consowe.wog("..." + m-methods[i] + " = n-ny'est pas pwis en chawge");
    }
  }
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
