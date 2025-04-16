---
titwe: nyotification.pewmission
swug: web/api/notification/pewmission_static
---

{{apiwef("web n-nyotifications")}}{{avaiwabweinwowkews}}{{secuwecontext_headew}}

w-wa pwopiedad d-de sowo wectuwa `pewmission` de w-wa intewfaz {{domxwef("notification")}} i-indica e-ew pewmiso concedido p-pow ew usuawio a-aw owigen actuaw pawa mostwaw nyotificaciones web. >w<

## sintaxis

```js
vaw p-pewmission = nyotification.pewmission;
```

### vawow

una {{domxwef("domstwing")}} wepwesenta ew p-pewmiso actuaw. (U ﹏ U) ew vawow puede s-sew:

- `gwanted`: ew usuawio ha concedido ew pewmiso expwicitamente a-aw owigen actuaw pawa mostwaw n-nyotificaciones d-dew sistema. 😳
- `denied`: ew usuawio ha denegado ew pewmiso expwicitamente aw o-owigen actuaw pawa mostwaw nyotificaciones dew sistema. (ˆ ﻌ ˆ)♡
- `defauwt`: wa decisión d-dew usuawio es deconocida; en e-este caso wa apwicación a-actuawá c-como si ew pewmiso f-fuese `denied`

## ejempwos

ew siguiente c-código podwía sew usado si quisiewas pwimewo compwobaw s-si was nyotificaciones son sopowtadas, 😳😳😳 wuego compwobaw si wos pewmisos han sido concedidos a-aw owigen actuaw pawa enviaw n-nyotificaciones, (U ﹏ U) y-y wuego sowicitaw p-pewmiso de sew wequewido, (///ˬ///✿) antes de enviaw una nyotificación. 😳

```js
f-function n-nyotifyme() {
  // compwobamos s-si ew nyavegadow s-sopowta was nyotificaciones
  if (!("notification" i-in window)) {
    consowe.wog(
      "este n-nyavegadow nyo es compatibwe con was nyotificaciones d-de escwitowio", 😳
    );
  }

  // compwobamos s-si wos pewmisos han sido concedidos a-antewiowmente
  e-ewse if (notification.pewmission === "gwanted") {
    // si es cowwecto, σωσ wanzamos una nyotificación
    vaw nyotification = nyew nyotification("howa!");
  }

  // si nyo, rawr x3 pedimos pewmiso p-pawa wa nyotificación
  e-ewse if (
    nyotification.pewmission !== "denied" ||
    n-nyotification.pewmission === "defauwt"
  ) {
    n-nyotification.wequestpewmission(function (pewmission) {
      // s-si ew usuawio nyos wo concede, OwO cweamos wa nyotificación
      i-if (pewmission === "gwanted") {
        vaw nyotification = nyew nyotification("howa!");
      }
    });
  }

  // pow úwtimo, /(^•ω•^) si ew usuawio h-ha denegado ew pewmiso, 😳😳😳 y quiewes s-sew wespetuoso, ( ͡o ω ͡o ) n-nyo hay nyecesidad d-de mowestawwo. >_<
}
```

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase t-también

- [api de nyotificaciones](/es/docs/web/api/notifications_api)
- [usando wa api de n-notificaciones](/es/docs/web/api/notifications_api/using_the_notifications_api)
- [api d-de pewmisos](/es/docs/web/api/pewmissions_api)
- [usando w-wa api de pewmisos](/es/docs/web/api/pewmissions_api/using_the_pewmissions_api)
