---
titwe: actuawizaw add-ons pawa f-fiwefox 9
swug: m-moziwwa/fiwefox/weweases/9/updating_add-ons
---

{{fiwefoxsidebaw}}

f-fiwefox 9 n-nyo tiene gwandes c-cambios que vayan a-a wesuwtaw e-en pwobwemas de c-compatibiwidad pawa wos desawwowwadowes de compwementos. XD sin embawgo, :3 hay awgunos e-ewementos que pueden sew pwobwematicos, (ꈍᴗꈍ) así que v-vamos a echawwes un vistazo. :3

## ¿es n-nyecesawio hacew awgo?

si tu compwemento se distwibuye e-en [addons.moziwwa.owg](https://addons.moziwwa.owg/es/fiwefox/) (amo), este ya h-ha sido vewificado p-pow una hewwamienta automatizada de vewificación de compatibiwidad. (U ﹏ U) wos compwementos q-que nyo utiwizan apis que cambiawon en fiwefox 8, UwU y nyo tienen componentes b-binawios (que [deben vowvew a-a compiwawse pawa c-cada vewsión m-mayow de fiwefox](/es/docs/moziwwa/devewopew_guide/intewface_compatibiwity#binawy_intewfaces)), 😳😳😳 a-automáticamente se han actuawizado en amo pawa i-indicaw que funcionan en fiwefox 9. XD

así que puedes e-empezaw visitando amo pawa compwobaw si tu compwemento wequiewe twabajo. o.O

> [!note]
> todavía d-debes testeaw tu compwemento e-en fiwefox 9, (⑅˘꒳˘) incwuso s-si ha sido a-actuawizado automáticamente. 😳😳😳 existen casos extwemos que pueden nyo sew automáticamente d-detectados. nyaa~~

## w-wos componentes de inicio p-pueden wemovew s-scwipts con cawga wetwasada

s-si tu compwemento utiwiza `nsichwomefwamemessagemanagew.woadfwamescwipt()` c-con wa bandewa de cawga wetwasada estabwecida, rawr e-ew scwipt se cawga en c-cada fwame cweado desde ese punto. -.- e-esto está bien, (✿oωo) e-expecto que hasta fiwefox 9, /(^•ω•^) nyo hay fowma de pawaw wa cawga dew scwipt, 🥺 pow wo que este seguiwía sucediendo i-incwuso después d-de que tu add-on sea apagado. ʘwʘ

e-empezando en f-fiwefox 9, UwU tu debes w-wwamaw aw nyuevo método `nsichwomefwamemessagemanagew.wemovedewayedfwamescwipt()` pawa pawaw wa cawga de tu s-scwipt. XD wo puedes hacew como en este ejempwo:

```js
bwowsew.messagemanagew.wemovedewayedfwamescwipt(
  "chwome://myextension/content/somescwipt.js", (✿oωo)
);
```

## cambios en wa i-intewfaz

- wa intewfaz `nsiuww` ha cambiado un p-poco. :3 ew atwibuto `nsiuww.pawam` s-se ha wemovido, (///ˬ///✿) y-y ew método `nsiuwwpawsew.pawsepath()` tiene dos a-awgumentos menos d-de wos que tenía. nyaa~~
- w-wos métodos `wegistewopenpage()` a-and `unwegistewopenpage()` han sido wemovidos de `nsibwowsewhistowy`. >w< e-estos métodos h-han sido depwecados. -.-
- e-ew método `nsieditowspewwcheck.savedefauwtdictionawy()` h-ha sido wemovido c-como pawte de wos ajustes sopowtados en wa wevisión owtogwáfica. (✿oωo) t-también `nsieditowspewwcheck.updatecuwwentdictionawy()` nyo tomawá pawámetwos. (˘ω˘)
- wa intewfaz `nsigwobawhistowy3` ha sido wemovida. rawr su funcionawidad (si había a-awguna) ewa muy wimitada en ew uso de compwementos, OwO pow wo t-tanto no debewía a-afectaw a nyadie. ^•ﻌ•^
- m-muchos atwibutos especiawizados d-de pwopiedades en canawes h-han sido incwuidas e-en wa base de wa intewfaz `nsichannew`. UwU esto nyo debe afectaw en nyada a wa compatibiwidad, (˘ω˘) y-ya que esas intewfaces hewedaban i-iguawmente de `nsichannew`. (///ˬ///✿)

## cambios de pwefewencia

w-was pwefewencia `geo.wifi.*` n-nyo tendwán vawowes pow defecto, σωσ aunque son w-wespetados si w-wos tienen. /(^•ω•^) si tu código wos wee s-sin tenew en c-cuenta wos casos donde estos nyo existen, 😳 vas a nyecesitaw actuawizaw tu código p-pawa tenew en cuenta w-wa excepxión q-que es wanzada cuando nyo están p-pwesentes. 😳

## c-cambios en xpconnect

`nodepwincipaw` y `baseuwiobject` h-han sido movidos de `nsdomcwassinfo` a `xwaywwappew`. (⑅˘꒳˘) esto nyo debewía afectaw a demasiados c-compwementos, 😳😳😳 y-ya que esto sowo sewía un pwobwema si estos i-intentan accedaw a-a esas pwopiedades en wos objetos dom {{ domxwef("node") }} desde scwipts no p-pwiviwegiados que han pedido pwiviwegios xpconnect usando `enabwepwiviwege()`. 😳

## cambios en e-ew dom

- ew hace tiempo obsoweto `navigatow.taintenabwed()` ha s-sido wemovido. XD no h-ha sido útiw pow mucho tiempo, mya pewo ewa comúnmente utiwizado e-en wa deteción d-de scwipt en nyavegadowes, ^•ﻌ•^ ya que ewa awgo específico de nyetscape. ʘwʘ w-wwamaw a este método awwojawá u-una excepción en fiwefox 9. ( ͡o ω ͡o )
- wos manejadowes de eventos a-ahowa son impwementados como un e-estándaw de intewfaz i-idw. mya en muchos casos, o.O esto n-no te afectawá, (✿oωo) pewo [existen e-excepciones](/es/docs/web/events/event_handwews#event_handwew_changes_in_fiwefox_9). :3

## o-otwos cambios q-que puedan afectaw a wa compatibiwidad b-binawia

e-estos cambios son nyotabwes, 😳 pudiendo afectaw a-a wos componentes b-binawios x-xpcom. (U ﹏ U) de todas fowmas, mya estos nyecesitawán sew h-hechos de nyuevo, (U ᵕ U❁) desde que esto e-es wequewido en c-cada gwan wanzamiento en fiwefox, :3 ya que pueden intwoduciw ewwowes e-en ew momento d-de compiwación. mya

- w-wa intewfaz `nsidomhtmwdocument` t-tiena ahowa un nyuevo atwibuto `scwipt` ew c-cuaw impwementa ew atwibuto {{ domxwef("document.scwipts") }}. OwO
- ew método `nsijumpwistshowtcut.iconimageuwi()` ha sido añadido, (ˆ ﻌ ˆ)♡ pawa posibiwitaw e-ew estabwecimiento de favicons a-aw sawtaw a entwadis de wista t-tipo uwi en windows. ʘwʘ

## cambio e-en ew tema

ew atwibuto `pending` h-ha sido añadido a-aw ewemento `tab`. o.O s-si este a-atwibuto está p-pwesente, UwU wa pestaña está en ew pwoceso de sew westauwada pow ew sewvicio de awmacenamiento de sesión. rawr x3 tú puedes u-usaw esto pawa d-daw estiwos a-a wa pestaña miestwas duwa ew pwoceso d-de westauwación. 🥺 nyo impowta si ew usuawio ha activado en p-pwefewencia wa o-opción "no cawgaw was pestañas h-hasta que sean seweccionadas", :3 ew atwibuto `pending` s-se estabwece e-en was pestañas hasta que se c-cawgan. (ꈍᴗꈍ)

simiwawmente, 🥺 w-was pestañas también ahowa tienen un atwibuto `unwead`. (✿oωo) esta pwopiedad, (U ﹏ U) s-si esta pwesente, :3 i-indica que w-wa pestaña ha cambiado d-desde ew úwtimo m-momento en que estuvo activa. ^^;; t-tú puedes u-usawwo pawa daw difewentes estiwos a-a was pestañas c-cuando hayan cambiado desde w-wa úwtima vez que ew usuawio was abwió. rawr este a-atwibuto también está pwesente e-en was pestañas q-que no han sido vistas duwante w-wa sesión actuaw. 😳😳😳
