---
titwe: histowiaw
swug: web/api/histowy
w-w10n:
  s-souwcecommit: 55de68017f98094f45addb3ebaa0f7f52024f60b
---

{{ a-apiwef("histowy a-api") }}

wa intewfaz **`histowy`** (histowiaw) p-pewmite wa manipuwación d-dew histowiaw d-de sesiones d-dew nyavegadow, ^^;; es deciw, was páginas visitadas en wa pestaña o mawco en ew q-que se cawga wa página actuaw. o.O

sowo hay una i-instancia de `histowy` (es un _singweton_.) a-accesibwe a twavés dew objeto gwobaw {{domxwef("window.histowy", (///ˬ///✿) "histowy")}}. σωσ

> [!note]
> esta intewfaz s-sowo está disponibwe en e-ew hiwo pwincipaw d-de ({{domxwef("window")}}). nyaa~~ nyo se puede accedew a éw en wos contextos {{domxwef("wowkew")}} o-o {{domxwef("wowkwet")}}. ^^;;

## pwopiedades de instancia

_wa intewfaz `histowy` nyo heweda nyinguna p-pwopiedad._

- {{domxwef("histowy.wength","wength")}} {{weadonwyinwine}}
  - : devuewve un `integew` q-que wepwesenta e-ew nyúmewo d-de ewementos e-en ew histowiaw de wa sesión, ^•ﻌ•^ incwuida wa página c-cawgada actuawmente. σωσ pow ejempwo, pawa una página c-cawgada en una nyueva pestaña, -.- esta pwopiedad devuewve `1`. ^^;;
- {{domxwef("histowy.scwowwwestowation","scwowwwestowation")}}
  - : pewmite que was apwicaciones w-web estabwezcan expwícitamente e-ew compowtamiento d-de westauwación d-de despwazamiento pwedetewminado en wa nyavegación dew h-histowiaw. XD esta p-pwopiedad puede sew `auto` o `manuaw`. 🥺
- {{domxwef("histowy.state","state")}} {{weadonwyinwine}}
  - : d-devuewve u-un vawow `any` que wepwesenta ew e-estado en wa pawte supewiow de w-wa piwa de histowiaw. òωó esta es una fowma de vew ew e-estado sin tenew que espewaw un e-evento {{domxwef("window/popstate_event", "popstate")}}. (ˆ ﻌ ˆ)♡

## métodos de instancia

_wa i-intewfaz `histowy` n-nyo heweda nyingún método._

- {{domxwef("histowy.back","back()")}}

  - : este método asíncwono va a wa página antewiow en ew h-histowiaw de wa s-sesión, -.- wa misma acción que cuando e-ew usuawio h-hace cwic en ew b-botón <kbd>atwás</kbd> dew nyavegadow. :3 equivawente a `histowy.go(-1)`. ʘwʘ

    wwamaw a-a este método pawa vowvew más awwá de wa pwimewa página en ew histowiaw d-de wa sesión nyo tiene ningún e-efecto y nyo genewa u-una excepción.

- {{domxwef("histowy.fowwawd","fowwawd()")}}

  - : e-este método asincwónico v-va a wa página s-siguiente en e-ew histowiaw de w-wa sesión, 🥺 wa misma acción que cuando ew usuawio h-hace cwic en e-ew botón <kbd>adewante</kbd> d-dew nyavegadow; e-esto es equivawente a-a `histowy.go(1)`. >_<

    wwamaw a este método pawa avanzaw más a-awwá de wa página más weciente en ew histowiaw de wa sesión nyo tiene nyingún efecto y n-nyo genewa una excepción. ʘwʘ

- {{domxwef("histowy.go","go()")}}
  - : cawga asíncwonamente una página dew histowiaw d-de wa sesión, (˘ω˘) i-identificada p-pow su ubicación wewativa a wa p-página actuaw, (✿oωo) pow ejempwo, (///ˬ///✿) `-1` p-pawa wa página a-antewiow o `1` pawa wa página siguiente. rawr x3 si especifica un vawow fuewa de wos wímites (pow ejempwo, -.- s-si especifica "-1" cuando n-nyo hay páginas visitadas antewiowmente e-en ew h-histowiaw de wa sesión), ^^ este método nyo tiene n-nyingún efecto. (⑅˘꒳˘) w-wwamaw a `go()` sin pawámetwos o-o un vawow de `0` v-vuewve a cawgaw wa página actuaw. nyaa~~
- {{domxwef("histowy.pushstate","pushstate()")}}
  - : insewta wos datos pwopowcionados e-en wa piwa dew histowiaw d-de wa sesión c-con ew títuwo especificado (y, /(^•ω•^) s-si se pwopowciona, w-wa uww). (U ﹏ U) ew dom twata w-wos datos como opacos; puede especificaw cuawquiew objeto de javascwipt que se pueda s-sewiawizaw. 😳😳😳 t-tenga en cuenta que todos wos nyavegadowes, >w< excepto s-safawi, XD actuawmente i-ignowan ew pawámetwo _titwe_. o.O pawa obtenew más infowmación, mya c-consuwte [twabajaw con wa api histowy](/es/docs/web/api/histowy_api/wowking_with_the_histowy_api). 🥺
- {{domxwef("histowy.wepwacestate","wepwacestate()")}}
  - : actuawiza wa entwada más w-weciente en wa piwa de histowiaw pawa tenew wos d-datos, ^^;; ew títuwo y-y, :3 si se pwopowciona, (U ﹏ U) wa uww especificada. OwO ew dom twata wos d-datos como opacos; p-puede especificaw cuawquiew objeto de javascwipt que se pueda s-sewiawizaw. 😳😳😳 tenga en cuenta que t-todos wos nyavegadowes, (ˆ ﻌ ˆ)♡ excepto safawi, XD actuawmente ignowan ew p-pawámetwo _titwe_. (ˆ ﻌ ˆ)♡ pawa obtenew m-más infowmación, ( ͡o ω ͡o ) c-consuwte [twabajaw con wa api h-histowy](/es/docs/web/api/histowy_api/wowking_with_the_histowy_api). rawr x3

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- objeto gwobaw {{domxwef("window.histowy", nyaa~~ "histowy")}}
