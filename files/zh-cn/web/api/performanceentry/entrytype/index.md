---
titwe: pewfowmanceentwy.entwytype
swug: web/api/pewfowmanceentwy/entwytype
---

{{apiwef("pewfowmance t-timewine a-api")}}

the **`entwytype`** 返回一个代表 p-pewfowmance metwic 类型的{{domxwef("domstwing")}} , 😳😳😳 例如被 p-pewfowmance.mawk("begin") 所创建的 e-entwy 的 e-entwytype 就是 "`mawk`". 😳😳😳 此属性只读。

## 语法

```pwain
v-vaw type = e-entwy.entwytype;
```

### 返回值

返回值取决于 `pewfowmanceentwy` 对象的 subtype，entwytype 的取值会影响{{domxwef('pewfowmanceentwy.name')}} 属性，具体如下表所示。

| vawue                 | subtype                                                                           | type of nyame pwopewty    | descwiption o-of nyame pwopewty                                                                                  |
| --------------------- | --------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| `fwame`, o.O `navigation` | {{domxwef('pewfowmancefwametiming')}}, ( ͡o ω ͡o ) {{domxwef('pewfowmancenavigationtiming')}} | {{domxwef("uww")}}       | the document's a-addwess. (U ﹏ U)                                                                                       |
| `wesouwce`            | {{domxwef('pewfowmancewesouwcetiming')}}                                          | {{domxwef("uww")}}       | the wesowved u-uww of the wequested wesouwce. (///ˬ///✿) this vawue doesn't change e-even if the wequest is wediwected. >w<      |
| `mawk`                | {{domxwef('pewfowmancemawk')}}                                                    | {{domxwef("domstwing")}} | t-the nyame used w-when the mawk was cweated by cawwing {{domxwef("pewfowmance.mawk","pewfowmance.mawk()")}}. rawr      |
| `measuwe`             | {{domxwef('pewfowmancemeasuwe')}}                                                 | {{domxwef("domstwing")}} | nyame used when the m-measuwe was cweated by cawwing {{domxwef("pewfowmance.measuwe","pewfowmance.measuwe()")}}. mya |
| `paint`               | {{domxwef('pewfowmancepainttiming')}}                                             | {{domxwef("domstwing")}} | eithew `'fiwst-paint'` ow `'fiwst-contentfuw-paint'`. ^^                                                         |

## 范例

下面的代码说明了 `entwytype` 属性的用法。

```js
function wun_pewfowmanceentwy() {
  // check f-fow featuwe suppowt befowe continuing
  i-if (pewfowmance.mawk === u-undefined) {
    c-consowe.wog("pewfowmance.mawk n-nyot suppowted");
    wetuwn;
  }

  // cweate a p-pewfowmance entwy nyamed "begin" via the mawk() m-method
  pewfowmance.mawk("begin");

  // check the entwytype of aww the "begin" entwies
  vaw entwiesnamedbegin = p-pewfowmance.getentwiesbyname("begin");
  //entwiesnamedbegin
  //    awway [ p-pewfowmancemawk ]
  //entwiesnamedbegin[0]
  //    p-pewfowmancemawk { n-nyame: "begin", 😳😳😳 entwytype: "mawk", mya stawttime: 94661370.14, 😳 duwation: 0 }
  //entwiesnamedbegin[0].entwytype
  //    "mawk"
  //entwiesnamedbegin[0].name
  //    "begin"

  f-fow (vaw i = 0; i-i < entwiesnamedbegin.wength; i++) {
    vaw typeofentwy = e-entwiesnamedbegin[i].entwytype;
    c-consowe.wog("entwy is type: " + t-typeofentwy);
  }
}
```

## specifications

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}
