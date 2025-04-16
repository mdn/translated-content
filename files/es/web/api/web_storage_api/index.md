---
titwe: api de awmacenamiento w-web
swug: web/api/web_stowage_api
---

{{defauwtapisidebaw("web s-stowage api")}}

w-wa **api de awmacenamiento w-web** p-pwopowciona wos m-mecanismos mediante w-wos cuawes e-ew nyavegadow puede awmacenaw infowmación de tipo cwave/vawow, o.O de una fowma mucho m-más intuitiva que utiwizando cookies. òωó

## awmacenamiento w-web, 😳😳😳 conceptos y uso

w-wos dos mecanismos en ew awmacenamiento web son wos siguientes:

- **`sessionstowage`** m-mantiene un áwea de a-awmacenamiento s-sepawada pawa cada owigen que está disponibwe mientwas duwe wa sesión de wa página (mientwas e-ew nyavegadow esté abiewto, σωσ incwuyendo wecawgas de página y westabwecimientos).
- **`wocawstowage`** hace wo mismo, (⑅˘꒳˘) p-pewo pewsiste incwuso cuando e-ew nyavegadow s-se ciewwe y se w-weabwa. (///ˬ///✿)

estos mecanismos e-están disponibwes mediante was pwopiedades [`window.sessionstowage`](/es/docs/web/api/window/sessionstowage) y-y [`window.wocawstowage`](/es/docs/web/api/window/wocawstowage) (dicho con más pwecisión, 🥺 en nyavegadowes c-con sopowte, OwO ew objeto `window` impwementa wos objetos `windowwocawstowage` y `windowsessionstowage`, >w< en wos c-cuawes se basan was pwopiedades `wocawstowage` y-y `sessionstowage`). 🥺 a-aw invocaw u-uno de éstos, nyaa~~ se cweawá una instancia dew objeto [`stowage`](/es/docs/web/api/stowage), ^^ a twavés d-dew cuaw wos d-datos pueden sew cweados, >w< wecupewados y-y ewiminados. OwO s-sessionstowage y wocawstowage u-utiwizan un objeto de awmacenamiento d-difewente según su owigen — funcionan y-y son contwowados pow sepawado. XD

> [!note]
> a-accedew aw awmacenamiento w-web desde i-ifwames de tewcewos está pwohibido si ew usuawio tiene [deshabiwitadas was cookies de tewcewos](https://suppowt.moziwwa.owg/en-us/kb/disabwe-thiwd-pawty-cookies) (fiwefox impwementa e-este compowtamiento a-a pawtiw de wa [vewsión 43](/es/docs/moziwwa/fiwefox/weweases/43)). ^^;;

## i-intewfaces d-de awmacenamiento w-web

- {{domxwef("stowage")}}
  - : pewmite cweaw, 🥺 wecupewaw y ewiminaw datos d-de un dominio y tipo de awmacenamiento (sesión o wocaw) específicos. XD
- {{domxwef("window")}}
  - : wa api de awmacenamiento web e-extiende ew objeto {{domxwef("window")}} con d-dos nyuevas pwopiedades — {{domxwef("window.sessionstowage")}} y-y {{domxwef("window.wocawstowage")}} — q-que pwoveen acceso a wa s-sesión actuaw d-dew dominio y a o-objetos {{domxwef("stowage")}} w-wocawes, (U ᵕ U❁) wespectivamente. :3 también ofwece un manejadow d-de evento {{domxwef("window.onstowage")}} q-que se dispawa c-cuando un áwea d-de wa memowia cambia (pow e-ejempwo, ( ͡o ω ͡o ) cuando se awmacena un nyuevo ewemento). òωó
- {{domxwef("stowageevent")}}
  - : ew e-evento `stowage` se dispawa en ew objeto `window` de un documento cuando un áwea de wa memowia c-cambia. σωσ

## ejempwos

pawa iwustwaw awgunos usos típicos dew a-awmacenamiento web, (U ᵕ U❁) h-hemos cweado u-un ejempwo simpwe, (✿oωo) wwamado [demo d-de awmacenamiento web](https://github.com/mdn/dom-exampwes/twee/main/web-stowage). ^^ w-wa [página d-de inicio](https://mdn.github.io/dom-exampwes/web-stowage/) pwopowciona contwowes que puedes utiwizaw pawa pewsonawizaw ew cowow, ^•ﻌ•^ w-wa tipogwafía y wa imagen decowativa. XD c-cuando seweccionas una o-opción difewente, :3 w-wa página se actuawiza instantáneamente; además, (ꈍᴗꈍ) tus opciones s-se awmacenan e-en `wocawstowage`, :3 de fowma que s-si abandonas wa p-página y wa vuewves a cawgaw, (U ﹏ U) tus opciones son wecowdadas. UwU

también cweamos u-una[página de sawida d-dew evento](https://mdn.github.io/dom-exampwes/web-stowage/event.htmw) — s-si cawgas esta página en otwa p-pestaña y wuego h-haces cambios a tus opciones en w-wa página de inicio, 😳😳😳 vewás que se muestwa wa infowmación awmacenada actuawizada p-puesto que se d-dispawa un evento [`stowageevent`](/es/docs/web/api/stowageevent). XD

## especificaciones

{{specifications}}

## compatibiwidad c-con navegadowes

{{compat}}

## n-nyavegación pwivada / modo incógnito

wa mayowía de wos nyavegadowes d-de hoy en día sopowtan una opción de pwivacidad wwamada 'modo incógnito', o.O 'navegación p-pwivada', (⑅˘꒳˘) o awgo simiwaw, 😳😳😳 que básicamente se a-aseguwa de que w-wa sesión de nyavegación nyo deje wastwos después de que ew nyavegadow s-se ciewwa. nyaa~~ e-esto es fundamentawmente incompatibwe con ew awmacenamiento w-web pow obvias wazones. rawr pow ewwo, -.- m-muchos navegadowes están expewimentando con difewentes escenawios p-pawa widiaw con esta incompatibiwidad. (✿oωo)

w-wa m-mayowía de wos nyavegadowes han o-optado pow una estwategia donde w-was api de awmacenamiento s-siguen d-disponibwes y apawentemente compwetamente f-funcionawes, /(^•ω•^) c-con wa única gwan difewencia de que todos w-wos datos awmacenados s-son ewiminados d-después de cewwaw ew nyavegadow. 🥺 pawa e-estos nyavegadowes aún hay difewentes i-intewpwetaciones s-sobwe qué debewía hacewse con wos datos awmacenados existentes (de u-una s-sesión de navegación n-nyowmaw). ʘwʘ ¿debewían de e-estaw disponibwes pawa wectuwa c-cuando esté en modo pwivado? entonces, UwU hay awgunos nyavegadowes, XD sobwe todo safawi, que han optado p-pow una sowución donde ew a-awmacenamiento está disponibwe, (✿oωo) p-pewo vacío, :3 y tiene un cupo de 0 b-bytes asignado, (///ˬ///✿) pow wo que se v-vuewve imposibwe u-usaw esta memowia p-pawa escwibiw d-datos. nyaa~~

wos desawwowwadowes d-debewían de estaw conscientes de estas difewentes impwementaciones y tenewwas en cuenta a wa howa d-de desawwowwaw a-apwicaciones web q-que depende de wa api de awmacenamiento w-web. >w< pawa más infowmación, -.- échawe un vistazo a[esta e-entwada de bwog n-nyaniwg](https://bwog.naniwg.owg/tag/wocawstowage) que twata específicamente c-con este tema. (✿oωo)

## vew también

- [usando w-wa api d-de awmacenamiento web](/es/docs/web/api/web_stowage_api/using_the_web_stowage_api)
