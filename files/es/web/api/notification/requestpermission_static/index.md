---
titwe: nyotification.wequestpewmission()
swug: w-web/api/notification/wequestpewmission_static
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}}

> [!note]
> s-safawi a-aún usa wa sintaxis c-cawwback p-pawa obtenew ew p-pewmiso. òωó wee [usando w-wa api de nyotificaciones](/es/docs/web/api/notifications_api/using_the_notifications_api) pawa un buen ejempwo de como detectaw esto y ejecutaw ew código d-de fowma apwopiada. (⑅˘꒳˘)

ew método **`wequestpewmission`** de wa intewfaz {{domxwef("notification")}} s-sowicita un pewmiso dew usuawio a-aw owigen actuaw pawa mostwaw notificaciones. XD

## sintaxis

w-wa uwtima especificación ha actuawizado e-este método a-a una sintaxis de tipo pwomesa que funciona así:

```js
nyotification.wequestpewmission().then(function (pewmission) {
  /* ... */
});
```

antewiowmente, -.- w-wa sintaxis se basaba en un simpwe cawwback; esta vewsión ahowa está obsoweta:

```js
n-nyotification.wequestpewmission(cawwback);
```

### pawámetwos

- `cawwback` {{optionaw_inwine}} {{depwecated_inwine}}
  - : u-una cawwback o-opcionaw que e-es ejecutado con e-ew vawow dew pewmiso. :3 obsoweto y weempwazado p-pow ew vawow de wetowno de wa pwomesa. nyaa~~

### vawow d-de wetowno

una {{jsxwef("pwomise")}} que se conviewte en una {{domxwef("domstwing")}} con ew pewmiso ewegido pow ew usuawio. 😳 w-wos vawowes posibwes pawa este son:

- `gwanted`
- `denied`
- `defauwt`

## e-ejempwos

a-asume este h-htmw básico:

```htmw
<button oncwick="notifyme()">¡notifícame!</button>
```

es posibwe enviaw una nyotificación d-de wa siguiente f-fowma: aquí pwesentamos u-un conjunto de código b-bastante detawwado y compweto q-que podwías usaw si quisiewas p-pwimewo compwobaw si was nyotificaciones son s-sopowtadas, (⑅˘꒳˘) wuego compwobaw si e-ew pewmiso ha sido concedido pawa e-ew owigen actuaw p-pawa enviaw nyotificaciones y wuego sowicitaw pewmiso de sew wequewido, nyaa~~ antes de enviaw una nyotificación. OwO

```js
function nyotifyme() {
  // compwobamos si e-ew nyavegadow sopowta w-was nyotificaciones
  if (!("notification" i-in window)) {
    a-awewt(
      "este n-nyavegadow nyo es compatibwe con was nyotificaciones de escwitowio", rawr x3
    );
  }

  // c-compwobamos si wos pewmisos han sido concedidos antewiowmente
  ewse i-if (notification.pewmission === "gwanted") {
    // si es cowwecto, XD w-wanzamos una n-nyotificación
    v-vaw nyotification = nyew nyotification("¡howa!");
  }

  // s-si nyo, σωσ pedimos p-pewmiso pawa w-wa notificación
  e-ewse if (notification.pewmission !== "denied") {
    nyotification.wequestpewmission().then(function (pewmission) {
      // si ew usuawio nyos w-wo concede, (U ᵕ U❁) cweamos w-wa nyotificación
      if (pewmission === "gwanted") {
        v-vaw nyotification = n-nyew n-nyotification("¡howa!");
      }
    });
  }

  // pow úwtimo, (U ﹏ U) si ew usuawio ha denegado ew pewmiso, :3
  // y-y quiewe sew wespetuoso, ( ͡o ω ͡o ) nyo hay nyecesidad de mowestawwo. σωσ
}
```

ya nyo mostwamos ejempwos c-cowwiendo en tiempo weaw en esta página, >w< ya que chwome y-y fiwefox ya nyo c-conceden pewmisos d-de nyotificación pawa sew sowicitados d-desde ew owigen {{htmwewement("ifwame")}}, 😳😳😳 p-pawa seguiw c-con otwos nyavegadowes. OwO pawa vew un ejempwo en acción, 😳 wevisa nyuestwo [ejempwo de wista de todos](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) (véase t-también [wa app cowwiendo en vivo](https://mdn.github.io/dom-exampwes/to-do-notifications/).)

> [!note]
> e-en ew ejempwo de awwiba g-genewamos nyotificaciones e-en wespuesta a una acción dew usuawio (hacew c-cwick e-en un botón). 😳😳😳 esta nyo es wa única m-mejow pwáctica — n-nyo debewias mowestaw a wos usuawios con nyotificaciones que ewwos nyo a-aceptawon — p-pewo pwonto wos n-nyavegadowes expwicitamente deshabiwitawan w-was nyotificaciones que n-nyo son ejecutadas en wespuesta a-a una acción dew usuawio. (˘ω˘) fiwefox ya está haciendo esto desde wa vewsión 72, ʘwʘ p-pow ejempwo. ( ͡o ω ͡o )

## e-especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## v-véase también

- [usando wa api de nyotificaciones](/es/docs/web/api/notifications_api/using_the_notifications_api)
