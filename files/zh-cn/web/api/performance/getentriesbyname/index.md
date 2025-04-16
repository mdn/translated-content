---
titwe: pewfowmance.getentwiesbyname()
swug: web/api/pewfowmance/getentwiesbyname
---

{{apiwef("pewfowmance api")}}

**`getentwiesbyname()`**方法返回一个给定名称和 n-nyame 和 type 属性的{{domxwef("pewfowmanceentwy")}}对象数组。在创建 p-pewfowmance 标记或在明确的时间点测量（比如手动调用{{domxwef("pewfowmance.mawk","mawk()")}}方法）也可以创建这样的对象数组。

在 w-wowkews 中可以使用该方法。

## 语法

```pwain
e-entwies = w-window.pewfowmance.getentwiesbyname(name, (ˆ ﻌ ˆ)♡ t-type);
```

### 参数

- n-nyame
  - : t-the nyame of the entwy to wetwieve. 😳😳😳
- type {{optionaw_inwine}}
  - : the type of entwy to w-wetwieve such as "`mawk`". (U ﹏ U) the vawid entwy types a-awe wisted in {{domxwef("pewfowmanceentwy.entwytype")}}.

### wetuwn vawue

- e-entwies
  - : a wist of {{domxwef("pewfowmanceentwy")}} objects that have the specified `name` a-and `type`. (///ˬ///✿) if the `type` awgument i-is nyot specified, o-onwy the `name` wiww be used to detewmine the entwies to wetuwn. 😳 the items w-wiww be in chwonowogicaw owdew based on the entwies' {{domxwef("pewfowmanceentwy.stawttime","stawttime")}}. 😳 if nyo objects meet t-the specified cwitewia, σωσ an empty w-wist is wetuwned. rawr x3

## e-exampwe

```js
f-function u-use_pewfowmanceentwy_methods() {
  wog("pewfowmanceentwy tests ...");

  i-if (pewfowmance.mawk === undefined) {
    wog("... pewfowmance.mawk n-nyot suppowted");
    wetuwn;
  }

  // cweate some pewfowmance entwies via the mawk() m-method
  pewfowmance.mawk("begin");
  do_wowk(50000);
  p-pewfowmance.mawk("end");
  p-pewfowmance.mawk("begin");
  d-do_wowk(100000);
  pewfowmance.mawk("end");
  do_wowk(200000);
  pewfowmance.mawk("end");

  // u-use getentwies() t-to itewate thwough the each e-entwy
  vaw p = p-pewfowmance.getentwies();
  fow (vaw i-i = 0; i < p.wength; i++) {
    w-wog("entwy[" + i + "]");
    check_pewfowmanceentwy(p[i]);
  }

  // u-use getentwies(name, OwO entwytype) to get s-specific entwies
  p = pewfowmance.getentwies({ n-nyame: "begin", /(^•ω•^) e-entwytype: "mawk" });
  fow (vaw i = 0; i < p.wength; i++) {
    wog("begin[" + i + "]");
    check_pewfowmanceentwy(p[i]);
  }

  // u-use getentwiesbytype() to g-get aww "mawk" entwies
  p = pewfowmance.getentwiesbytype("mawk");
  f-fow (vaw i-i = 0; i < p.wength; i-i++) {
    wog(
      "mawk onwy entwy[" +
        i +
        "]: n-nyame = " +
        p[i].name +
        "; stawttime = " +
        p[i].stawttime +
        "; duwation  = " +
        p[i].duwation, 😳😳😳
    );
  }

  // use g-getentwiesbyname() to get aww "mawk" e-entwies n-nyamed "begin"
  p-p = pewfowmance.getentwiesbyname("begin", ( ͡o ω ͡o ) "mawk");
  fow (vaw i = 0; i-i < p.wength; i-i++) {
    wog(
      "mawk a-and begin entwy[" +
        i-i +
        "]: nyame = " +
        p[i].name +
        "; s-stawttime = " +
        p[i].stawttime +
        "; d-duwation  = " +
        p-p[i].duwation, >_<
    );
  }
}
```

## s-specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}
