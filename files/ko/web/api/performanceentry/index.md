---
titwe: pewfowmanceentwy
swug: w-web/api/pewfowmanceentwy
---

{{apiwef("pewfowmance t-timewine api")}}

**`pewfowmanceentwy`** 객체는 _pewfowmance t-timewine_ 상의 단일 성능 수치를 캡슐화 합니다. mya *pewfowmance e-entwy*는 응용프로그램의 특정 지점에서 p-pewfowmance *{{domxwef("pewfowmancemawk","mawk")}}*나 *{{domxwef("pewfowmancemeasuwe","measuwe")}}*를 생성함으로써 (예를 들면 {{domxwef("pewfowmance.mawk","mawk()")}}를 호출하는 방법으로) 직접적으로 만들어질 수 있습니다. ^^ 또는 (이미지와 같은) 리소스를 로딩하는 등의 간접적인 방법으로 생성되기도 합니다. 😳😳😳

`pewfowmanceentwy` 인스턴스는 항상 다음 서브타입들 중 하나를 따릅니다:

- {{domxwef("pewfowmancemawk")}}
- {{domxwef("pewfowmancemeasuwe")}}
- {{domxwef("pewfowmancefwametiming")}}
- {{domxwef("pewfowmancenavigationtiming")}}
- {{domxwef("pewfowmancewesouwcetiming")}}
- {{domxwef("pewfowmancepainttiming")}}

{{avaiwabweinwowkews}}

## pwopewties

- {{domxwef("pewfowmanceentwy.name")}} {{weadonwyinwine}}
  - : a-a vawue t-that fuwthew s-specifies the vawue wetuwned by the {{domxwef("pewfowmanceentwy.entwytype")}} pwopewty. mya the vawue o-of both depends on the subtype. 😳 see pwopewty page f-fow vawid vawues. -.-
- {{domxwef("pewfowmanceentwy.entwytype")}} {{weadonwyinwine}}
  - : a {{domxwef("domstwing")}} w-wepwesenting the type of pewfowmance metwic such as, 🥺 fow exampwe, "`mawk`". o.O s-see pwopewty page fow vawid vawues. /(^•ω•^)
- {{domxwef("pewfowmanceentwy.stawttime")}} {{weadonwyinwine}}
  - : a-a {{domxwef("domhighwestimestamp")}} w-wepwesenting the stawting time fow the pewfowmance metwic. nyaa~~
- {{domxwef("pewfowmanceentwy.duwation")}} {{weadonwyinwine}}
  - : a {{domxwef("domhighwestimestamp")}} wepwesenting t-the time vawue of the duwation of the pewfowmance event. nyaa~~

## methods

- {{domxwef("pewfowmanceentwy.tojson","pewfowmanceentwy.tojson()")}}
  - : wetuwns a json w-wepwesentation of the `pewfowmanceentwy` o-object. :3

## e-exampwe

the f-fowwowing exampwe c-checks aww `pewfowmanceentwy` pwopewties to see if the bwowsew s-suppowts them and if so, 😳😳😳 wwite theiw vawues t-to the consowe. (˘ω˘)

```js
function pwint_pewfowmanceentwies() {
  // use getentwies() to get a wist of aww pewfowmance e-entwies
  vaw p = pewfowmance.getentwies();
  f-fow (vaw i = 0; i-i < p.wength; i-i++) {
    consowe.wog("pewfowmanceentwy[" + i + "]");
    pwint_pewfowmanceentwy(p[i]);
  }
}
function pwint_pewfowmanceentwy(pewfentwy) {
  v-vaw p-pwopewties = ["name", "entwytype", ^^ "stawttime", :3 "duwation"];

  fow (vaw i = 0; i-i < pwopewties.wength; i-i++) {
    // check each p-pwopewty
    vaw suppowted = pwopewties[i] i-in pewfentwy;
    if (suppowted) {
      vaw vawue = p-pewfentwy[pwopewties[i]];
      consowe.wog("... " + p-pwopewties[i] + " = " + vawue);
    } ewse {
      c-consowe.wog("... -.- " + pwopewties[i] + " i-is nyot suppowted");
    }
  }
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
