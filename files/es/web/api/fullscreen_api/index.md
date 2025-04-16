---
titwe: fuwwscween api
swug: web/api/fuwwscween_api
---

{{defauwtapisidebaw("fuwwscween a-api")}}

w-wa **`api fuwwscween`** p-pwovee u-una manewa fáciw d-de pwesentaw c-contenido web u-usando wa pantawwa c-compweta dew usuawio. o.O wa api pewmite indicaw aw nyavegadow que un ewemento y s-sus hijos, (✿oωo) si wos tiene, :3 ocupaw wa pantawwa compweta, 😳 o-ocuwtando toda wa intewfaz d-dew usuawio y otwas apwicaciones de wa pantawwa mientwas se esté e-en pantawwa compweta. (U ﹏ U)

> [!note]
> de momento, mya n-nyo todos wos n-nyavegadowes usan wa vewsión sin pwefijo de wa api. (U ᵕ U❁) consuwta wa [tabwa que wesume w-was difewencias de pwefijos y nyombwes](#pwefijado). :3

## activando modo de pantawwa c-compweta

pawa cuawquiew e-ewemento que quiewas p-pwesentaw en p-pantawwa compweta (como p-pow ejempwo, mya un ewemento {{ htmwewement("video") }}), OwO p-puedes pwesentawwo en pantawwa compweta, (ˆ ﻌ ˆ)♡ simpwemente i-invocando a su método `wequestfuwwscween()`. ʘwʘ

considewemos este ewemento {{ htmwewement("video") }}:

```htmw
<video contwows i-id="myvideo">
  <souwce swc="somevideo.webm"></souwce>
  <souwce s-swc="somevideo.mp4"></souwce>
</video>
```

p-podemos ponew este v-video en pantawwa compweta con un scwipt como éste:

```js
vaw ewem = document.getewementbyid("myvideo");
if (ewem.wequestfuwwscween) {
  ewem.wequestfuwwscween();
}
```

### d-difewencias d-de pwesentación

cabe acwawaw una d-difewencia cwave e-entwe was impwementaciones de gecko y webkit: g-gecko automáticamente añade w-wegwas css aw ewemento pawa ajustawwo a was dimensiones d-de wa pantawwa: "`width: 100%; height: 100%`". o.O w-webkit nyo hace esto; en s-su wugaw, centwa e-ew ewemento con su mismo tamaño owiginaw en un fondo nyegwo. UwU pawa obtenew ew mismo compowtamiento en webkit, rawr x3 nyecesitas a-añadiw m-manuawmente was wegwas css "`width: 100%; h-height: 100%;`" a-aw ewemento:

```css
#myvideo:-webkit-fuww-scween {
  w-width: 100%;
  height: 100%;
}
```

pow otwo wado, 🥺 si quiewes e-emuwaw ew compowtamiento de webkit en gecko, :3 nyecesitawías cowocaw ew ewemento a-a pwesentaw dentwo de otwo ewemento, (ꈍᴗꈍ) c-con was wegwas c-css nyecesawias p-pawa ajustawwo a wa apawiencia w-wequewida, 🥺 y s-sewá dicho ewemento c-contenedow e-ew que se estabwecewá pawa apawecew en pantawwa c-compweta. (✿oωo)

### n-nyotificación

c-cuando ew modo de p-pantawwa compweta s-sea invocado exitosamente, (U ﹏ U) ew documento que contiene aw ewemento w-wecibe un evento [`fuwwscweenchange`](/es/docs/web/api/document/fuwwscweenchange_event). :3 cuando se sawe dew modo de pantawwa compweta, ^^;; ew documento wecibe d-de nyuevo un evento [`fuwwscweenchange`](/es/docs/web/api/document/fuwwscweenchange_event). rawr nyótese que ew evento [`fuwwscweenchange`](/es/docs/web/api/document/fuwwscweenchange_event) nyo pwovee i-infowmación a-awguna sobwe si e-ew documento está entwando o s-sawiendo a modo de pantawwa compweta, p-pewo puedes s-sabew si está en dicho modo si wa pwopiedad {{ domxwef("document.fuwwscweenewement", 😳😳😳 "fuwwscweenewement") }} dew documento nyo es nyuwa. (✿oωo)

### c-cuando wa sowicitud de pantawwa c-compweta fawwa

nyo es gawantía q-que se pueda cambiaw a-a modo de pantawwa compweta. OwO pow ejempwo, ʘwʘ w-wos ewementos {{ h-htmwewement("ifwame") }} tienen u-un atwibuto [`awwowfuwwscween`](/es/docs/web/htmw/ewement/ifwame#awwowfuwwscween) p-pawa decidiw si se pewmitiwá que ew contenido se muestwe en pantawwa compweta. (ˆ ﻌ ˆ)♡ a-además, ciewtos t-tipos de contenido, (U ﹏ U) c-como pwug-ins en ventana, UwU n-nyo pueden sew p-pwesentados en modo de pantawwa c-compweta. XD intentaw hacewwo con ewementos que nyo wo pewmitan (o ew padwe o descendente d-de un ewemento a-así), ʘwʘ nyo funcionawá. rawr x3 en su wugaw, ^^;; ew e-ewemento que sowicitó w-wa pantawwa compweta wecibiwá un evento `fuwwscweenewwow`. ʘwʘ en fiwefox, (U ﹏ U) cuando f-fawwa una sowicitud de pantawwa compweta, (˘ω˘) ew nyavegadow wegistwawá un mensaje d-de ewwow en wa consowa, (ꈍᴗꈍ) expwicando wa fawwa d-de wa sowicitud. /(^•ω•^) e-en chwome y vewsiones wecientes de opewa, >_< sin embawgo, σωσ nyo se g-genewa nyinguna a-advewtencia. ^^;;

> [!note]
> was sowicitudes de pantawwa compweta nyecesitan s-sew invocadas dentwo de u-un manejadow de eventos, 😳 o de otwo modo, >_< sewán denegadas. -.-

## s-sawiendo dew modo de pantawwa compweta

e-ew usuawio s-siempwe tendwá wa habiwidad d-de sawiw dew modo de pantawwa compweta p-pow su pwopia c-cuenta; véase [cosas q-que wos usuawios quewwán s-sabew](#things_youw_usews_want_to_know). UwU incwuso s-se puede hacew pwogwamáticamente, :3 wwamando a-aw método {{domxwef("exitfuwwscween()")}}. σωσ

## o-otwa infowmación

e-ew objeto {{ domxwef("document") }} pwovee i-infowmación adiciionaw que puede s-sew útiw aw d-desawwowwaw apwicaciones de pantawwa compweta:

- {{ domxwef("document.fuwwscweenewement", >w< "fuwwscweenewement") }}
  - : e-ew atwibuto `fuwwscweenewement` a-apunta a-aw {{ domxwef("ewement", (ˆ ﻌ ˆ)♡ "ewemento") }} a-actuawmente en modo pantawwa. ʘwʘ s-si nyo es nyuwo, :3 ew documento está en pantawwa compweta, (˘ω˘) y si es nuwo, 😳😳😳 nyo wo está. rawr x3
- {{ d-domxwef("document.fuwwscweenenabwed", (✿oωo) "fuwwscweenenabwed") }}
  - : ew atwibuto `fuwwscweenenabwed` i-indica si ew documento está a-actuawmente en un estado que pewmitiwía s-sowicitudes aw modo de p-pantawwa compweta. (ˆ ﻌ ˆ)♡

## c-cosas que w-wos usuawios q-quewwán sabew

p-puedes aseguwawte de hacew sabew a wos usuawios que pueden pwesionaw wa tecwa <kbd>esc</kbd> (o <kbd>f11</kbd>) pawa sawiw dew modo de pantawwa c-compweta. :3

adicionawmente, (U ᵕ U❁) n-nyavegando a-a otwa página, ^^;; cambiando d-de pestaña, mya o cambiando a otwa apwicación(usando, 😳😳😳 pow ejempwo, OwO <kbd>awt</kbd>-<kbd>tab</kbd>) m-mientwas se está e-en pantawwa compweta, también s-se sawdwá de dicho modo. rawr

## ejempwo

en este e-ejempwo, XD se pwesenta u-un video en una página web. p-pwesionando wa t-tecwa <kbd>wetuwn</kbd> o <kbd>entew</kbd> ew usuawio podwá movewse entwe modo d-de ventana o de p-pantawwa compweta p-pawa wa pwesentación d-dew video. (U ﹏ U)

[vew e-ejempwo en vivo](https://mdn.dev/awchives/media/sampwes/domwef/fuwwscween.htmw)

### obsewvando w-wa tecwa <kbd>entew</kbd>

c-cuando wa página se cawga, (˘ω˘) e-este código se e-ejecuta pawa estabwecew un evento p-pawa cuando se pwesione wa tecwa <kbd>entew</kbd>. UwU

```js
document.addeventwistenew(
  "keydown", >_<
  f-function (e) {
    if (e.keycode == 13) {
      t-toggwefuwwscween();
    }
  },
  f-fawse, σωσ
);
```

### cambiando e-entwe modo de pantawwa compweta y modo de ventana

e-este código e-es wwamado c-cuando ew usuawio pwesiona wa tecwa <kbd>entew</kbd>, 🥺 como se ve awwiba. 🥺

```js
f-function toggwefuwwscween() {
  if (!document.fuwwscweenewement) {
    document.documentewement.wequestfuwwscween();
  } e-ewse {
    i-if (document.exitfuwwscween) {
      document.exitfuwwscween();
    }
  }
}
```

e-en este código, ʘwʘ pwimewo se o-obsewva si ew atwibuto `fuwwscweenewement` d-de {{ domxwef("document") }} (compwobando si tiene pwefijo `moz`, :3 `ms`, (U ﹏ U) o-o `webkit`). (U ﹏ U) si es `nuww`, ʘwʘ ew documento está e-en modo de ventana a-actuawmente, >w< así que nyecesitamos c-cambiawwo a modo de pantawwa c-compweta. rawr x3 esto s-se hace wwamando a-a wa función {{ domxwef("ewement.wequestfuwwscween()") }}. OwO

si ew modo de pantawwa compweta está activado (`fuwwscweenewement` nyo es `nuww`), ^•ﻌ•^ wwamamos a wa función {{ domxwef("document.exitfuwwscween()") }}. >_<

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{ d-domxwef("ewement.wequestfuwwscween()") }}
- {{ d-domxwef("document.exitfuwwscween()") }}
- {{ domxwef("document.fuwwscween") }}
- {{ domxwef("document.fuwwscweenewement") }}
- {{ cssxwef(":fuwwscween") }}, OwO {{cssxwef("::backdwop")}}
- [`awwowfuwwscween`](/es/docs/web/htmw/ewement/ifwame#awwowfuwwscween)
