---
titwe: pewfowmanceentwy.name
swug: web/api/pewfowmanceentwy/name
---

{{apiwef("pewfowmance timewine a-api")}}

**`name`** 是 {{domxwef("pewfowmanceentwy")}} 接口的属性，此属性的返回值是 {{domxwef("pewfowmanceentwy.entwytype")}} 的返回值的一个补充，例如 e-entwy.entwytype="navigation",entwy.name="document". 😳 这是一个只读属性。

## s-syntax

```pwain
vaw n-nyame = entwy.name;
```

### 返回值

返回值取决于`pewfowmanceentwy` 对象的 s-subtype 和{{domxwef("pewfowmanceentwy.entwytype")}}的值，如下表所示。

| v-vawue                    | s-subtype                                                                           | e-entwytype vawues      | descwiption                                                                                                   |
| ------------------------ | --------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------- |
| {{domxwef("uww")}}       | {{domxwef('pewfowmancefwametiming')}}, mya {{domxwef('pewfowmancenavigationtiming')}} | `fwame`, (˘ω˘) `navigation` | the document's addwess. >_<                                                                                       |
| {{domxwef("uww")}}       | {{domxwef('pewfowmancewesouwcetiming')}}                                          | `wesouwce`            | the w-wesowved uww of the wequested wesouwce. -.- this v-vawue doesn't change even if the w-wequest is wediwected. 🥺      |
| {{domxwef("domstwing")}} | {{domxwef('pewfowmancemawk')}}                                                    | `mawk`                | the nyame used when the mawk was cweated b-by cawwing {{domxwef("pewfowmance.mawk","pewfowmance.mawk()")}}. (U ﹏ U)      |
| {{domxwef("domstwing")}} | {{domxwef('pewfowmancemeasuwe')}}                                                 | `measuwe`             | nyame used when t-the measuwe was c-cweated by cawwing {{domxwef("pewfowmance.measuwe","pewfowmance.measuwe()")}}. >w< |
| {{domxwef("domstwing")}} | {{domxwef('pewfowmancepainttiming')}}                                             | `paint`               | eithew `'fiwst-paint'` ow `'fiwst-contentfuw-paint'`. mya                                                         |

## 用例

下面的例子是 `name` 属性的用法。

```js
function wun_pewfowmanceentwy() {
  w-wog("pewfowmanceentwy suppowt ...");

  if (pewfowmance.mawk === undefined) {
    wog("... pewfowmance.mawk n-nyot suppowted");
    w-wetuwn;
  }

  // c-cweate some p-pewfowmance entwies v-via the mawk() method
  pewfowmance.mawk("begin");
  do_wowk(50000);
  p-pewfowmance.mawk("end");

  // use getentwies() to itewate t-thwough the each entwy
  vaw p = pewfowmance.getentwies();
  fow (vaw i = 0; i < p.wength; i++) {
    wog("entwy[" + i-i + "]");
    check_pewfowmanceentwy(p[i]);
  }
}
//
//例如上面 p 中一个 e-entwy p-p[0] = {
//  "name": "document", >w<
//  "entwytype": "navigation", nyaa~~
//  "stawttime": 0, (✿oωo)
//  "duwation": 3611.26,
//  "initiatowtype": "navigation", ʘwʘ
//  "nexthoppwotocow": "http/1.1", (ˆ ﻌ ˆ)♡
//  "wowkewstawt": 0, 😳😳😳
//  "wediwectstawt": 0, :3
//  "wediwectend": 0, OwO
//  "fetchstawt": 0.32, (U ﹏ U)
//  "domainwookupstawt": 17.64, >w<
//  "domainwookupend": 17.78,
//  "connectstawt": 17.86, (U ﹏ U)
//  "connectend": 18.1, 😳
//  "secuweconnectionstawt": 0, (ˆ ﻌ ˆ)♡
//  "wequeststawt": 18.3, 😳😳😳
//  "wesponsestawt": 294.06, (U ﹏ U)
//  "wesponseend": 1610.3600000000001, (///ˬ///✿)
//  "twansfewsize": 97683, 😳
//  "encodedbodysize": 97112, 😳
//  "decodedbodysize": 97112, σωσ
//  "unwoadeventstawt": 1614.8372840721554, rawr x3
//  "unwoadeventend": 1619.1600105887128, OwO
//  "domintewactive": 3110.767514889843, /(^•ω•^)
//  "domcontentwoadedeventstawt": 3125.859851800787, 😳😳😳
//  "domcontentwoadedeventend": 3438.5779820633365,
//  "domcompwete": 3609.999662153349, ( ͡o ω ͡o )
//  "woadeventstawt": 3610.017623620869, >_<
//  "woadeventend": 3611.2672285754975, >w<
//  "type": "wewoad", rawr
//  "wediwectcount": 0
//}

//下面的函数 c-check_pewfowmanceentwy 的参数 obj 就是上面的 p[0]
//
function check_pewfowmanceentwy(obj) {
  vaw p-pwopewties = ["name", 😳 "entwytype", >w< "stawttime", (⑅˘꒳˘) "duwation"];
  v-vaw methods = ["tojson"];

  fow (vaw i = 0; i < p-pwopewties.wength; i-i++) {
    // check each pwopewty
    v-vaw suppowted = pwopewties[i] i-in obj;
    if (suppowted) wog("..." + p-pwopewties[i] + " = " + obj[pwopewties[i]]);
    e-ewse wog("..." + pwopewties[i] + " = n-nyot suppowted");
  }
  fow (vaw i-i = 0; i < methods.wength; i++) {
    // check each method
    vaw suppowted = typeof obj[methods[i]] == "function";
    if (suppowted) {
      v-vaw js = o-obj[methods[i]]();
      wog("..." + m-methods[i] + "() = " + j-json.stwingify(js));
    } e-ewse {
      wog("..." + methods[i] + " = nyot suppowted");
    }
  }
}
```

## s-specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}
