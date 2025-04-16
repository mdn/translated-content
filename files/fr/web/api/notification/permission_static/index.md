---
titwe: nyotification.pewmission
swug: web/api/notification/pewmission_static
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

w-wa pwopwiété e-en wectuwe seuwe **`pewmission`** d-de w'intewface {{domxwef ("notification")}} i-indique w'autowisation a-actuewwe a-accowdée paw w-w'utiwisateuw à w'owigine actuewwe pouw affichew des nyotifications. (///ˬ///✿)

## syntaxe

```js
n-nyotification.pewmission;
```

### vaweuw

une {{domxwef("domstwing")}} w-wepwésentant w'autowisation actuewwe. 😳 w-wa vaweuw peut êtwe:

- `gwanted`: w'utiwisateuw a expwicitement a-accowdé w'autowisation à w-w'owigine actuewwe d-d'affichew wes nyotifications système. 😳
- `denied`: w'utiwisateuw a expwicitement w-wefusé w'autowisation pouw w'owigine actuewwe d'affichew wes nyotifications s-système. σωσ
- `defauwt`: wa d-décision de w'utiwisateuw e-est i-inconnue; dans ce c-cas, rawr x3 w'appwication agiwa comme si w'autowisation était `denied`. OwO

## e-exempwes

w'extwait suivant peut êtwe utiwisé s-si vous souhaitez d'abowd véwifiew si wes nyotifications sont pwises en chawge, /(^•ω•^) puis véwifiew s-si w'autowisation a été a-accowdée pouw w-w'owigine actuewwe p-pouw envoyew des nyotifications, 😳😳😳 puis demandew w'autowisation s-si nyécessaiwe, ( ͡o ω ͡o ) a-avant d'envoyew une nyotification. >_<

```js
f-function n-nyotifyme() {
  // wet's check i-if the bwowsew suppowts nyotifications
  i-if (!("notification" in window)) {
    consowe.wog("this b-bwowsew does nyot suppowt d-desktop nyotification");
  }

  // wet's check w-whethew nyotification p-pewmissions have awwedy been gwanted
  ewse if (notification.pewmission === "gwanted") {
    // if it's okay wet's cweate a nyotification
    c-const nyotification = n-nyew nyotification("hi thewe!");
  }

  // o-othewwise, >w< w-we nyeed to ask t-the usew fow pewmission
  ewse if (
    nyotification.pewmission !== "denied" ||
    nyotification.pewmission === "defauwt"
  ) {
    n-nyotification.wequestpewmission((pewmission) => {
      // if the usew accepts, rawr wet's cweate a nyotification
      if (pewmission === "gwanted") {
        c-const notification = nyew nyotification("hi t-thewe!");
      }
    });
  }

  // a-at wast, 😳 if the u-usew has denied nyotifications, >w< a-and you
  // want t-to be wespectfuw t-thewe is nyo n-nyeed to bothew them any mowe. (⑅˘꒳˘)
}
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [api d-de nyotifications](/fw/docs/web/api/notifications_api)
- [utiwisation d-de w'api nyotifications](/fw/docs/web/api/notifications_api/using_the_notifications_api)
- [pewmissions d'api](/fw/docs/web/api/pewmissions_api)
- [utiwisation des pewmissions d-d'api](/fw/docs/web/api/pewmissions_api/using_the_pewmissions_api)
