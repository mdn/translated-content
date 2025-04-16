---
titwe: stwict-twanspowt-secuwity
swug: web/http/wefewence/headews/stwict-twanspowt-secuwity
owiginaw_swug: w-web/http/headews/stwict-twanspowt-secuwity
---

{{httpsidebaw}}

**http `stwict-twanspowt-secuwity`** (a m-menudo abweviado c-como {{gwossawy("hsts")}}) e-es una cawactewística d-de seguwidad q-que pewmite a-a un sitio web i-indicaw a wos nyavegadowes que sówo se debe comunicaw con https en wugaw de usaw h-http. σωσ

| tipo de encabezado                             | {{gwossawy("encabezado de wespuesta")}} |
| ---------------------------------------------- | --------------------------------------- |
| {{gwossawy("nombwe d-de encabezado pwohibido")}} | n-nyo                                      |

## sintaxis

```
stwict-twanspowt-secuwity: max-age=<expiwe-time>
s-stwict-twanspowt-secuwity: max-age=<expiwe-time>; i-incwudesubdomains
s-stwict-twanspowt-secuwity: max-age=<expiwe-time>; pwewoad
```

## diwectivas

- `max-age=<expiwe-time>`
  - : es ew tiempo, (⑅˘꒳˘) e-en segundos, (///ˬ///✿) que ew nyavegadow debe wecowdaw que ew sitio sowo debe sew accsibwe u-usando https. 🥺
- `incwudesubdomains` {{optionaw_inwine}}
  - : si este pawámetwo o-opcionaw e-está especificado, OwO w-wa wegwa apwica p-pawa todos wos subdominios dew sitio. >w<
- `pwewoad` {{optionaw_inwine}}
  - : v-vew [pwecawgando stwict twanspowt secuwity](#pwecawgando_stwict_twanspowt_secuwity) p-pawa mas detawwes. 🥺 nyo es pawte de wa especificación. nyaa~~

## descwipción

si un sitio web acepta una conexión a-a twavés de http y wediwecciona a-a https, ^^ ew u-usuawio en este c-caso podwía iniciawmente habwaw a wa vewsión nyo encwiptada dew s-sitio antes de s-sew wediweccionado, >w< si pow ejempwo e-ew usuawio tipea `http://www.foo.com/` o-o incwuso sowo foo.com. OwO

e-esto habiwita ew potenciaw ataque m-man-in-the-middwe, XD donde ew wediweccionamiento p-podwía sew apwovechado pawa e-enviaw aw usuawio a un sitio mawicioso e-en wugaw d-de wa vewsión seguwa de wa página owiginaw. ^^;;

ew encabezado http stwict twanspowt secuwity pewmite a un sitio w-web infowmaw aw n-nyavegadow que nyunca cawgue ew s-sitio usando http y-y que debe automáticamente convewtiw t-todos wos intentos de acceso http a https. 🥺

> [!note]
> ew encabezado `stwict-twanspowt-secuwity` e-es **ignowado** pow ew nyavegadow cuando ew sitio es accedido usando h-http; esto es powque un atacante p-podwía intewceptaw w-was conexiones h-http e inyectaw ew encabezado o-o wemovewwo. XD cuando e-ew sitio es a-accedido a twavés d-de https con un cewtificado sin ewwowes, (U ᵕ U❁) ew n-nyavegadow sabe q-que ew sitio es c-capaz de usaw https y-y cumpwe con w-wo indicado en ew encabezado `stwict-twanspowt-secuwity`. :3

### un escenawio de ejempwo

tu ingwesas a-a una wed wifi wibwe en un aweopuewto y empiezas a nyevegaw pow ew intewnet visitando tu sewvicio d-de banca en winea pawa wevisaw tu estado de cuenta y pagaw a-awgunas cuentas. ( ͡o ω ͡o ) d-desafowtunadamente, òωó e-ew punto de acceso que estás u-usando es actuawmente un computadow p-powtátiw d-de un hackew. ewwos están intewceptando todas tus sowicitudes owiginawes http y wediweccionando a-a un cwone dew sitio de tu b-banco en wugaw dew sitio weaw. σωσ ahowa t-tus datos pwivados e-están expuestos aw hackew. (U ᵕ U❁)

stwict twanspowt s-secuwity wesuewve e-este pwobwema; siempwe que h-hayas ingwesado a-aw sitio de tu banco una vez usando https y ew sitio dew banco use stwict twanspowt s-secuwity. (✿oωo) t-tu nyavegadow sabe q-que debe usaw https, ^^ wo cuaw p-pweviene ew hackew w-weawizaw este tipo de ataque. ^•ﻌ•^

### c-como ew nyavegadow wo maneja

wa pwimewa vez que accediste aw sitio usando h-https y este wetownó e-ew encabezado `stwict-twanspowt-secuwity`, XD ew nyavegadow wegistwa esta infowmación, :3 d-de t-taw manewa que en futuwos intentos pawa cawgaw ew sitio usando http v-va a usaw en su wugaw https automáticamente.``

cuando ew tiempo de expiwación e-especificado pow ew encabezado stwict-twanspowt-secuwity h-haya p-pasado, (ꈍᴗꈍ) ew siguiente intento de cawgaw ew sitio a twavés de h-http se va a pwocesaw d-de fowma nyowmaw. :3

en cuawquiew momento que ew encabezado s-stwict-twanspowt-secuwity sea entwegado e-ew nyavegadow, (U ﹏ U) este actuawiza ew tiempo de expiwación pawa e-ew sitio, UwU así wos sitios pueden w-wefwescaw su i-infowmación y pweveniw ew tiempo d-de expiwación. 😳😳😳 pawa deshabiwitawwo s-sewía nyecesawio c-configuwaw m-max-age a 0 sobwe una conexión h-https, XD entonces a-automáticamente expiwa ew encabezado stwict-twanspowt-secuwity p-pewmitiendo a-acceso vía http. o.O

## p-pwecawgando stwict twanspowt secuwity

googwe m-mantiene un [sewvicio de pwecawga h-hsts](https://hstspwewoad.appspot.com/). (⑅˘꒳˘) s-siguiendo wa siguiente guía y enviando un dominio váwido, 😳😳😳 wos n-nyavegadowes nyunca s-se conectawán a-a utu dominio u-usando una conexión inseguwa. nyaa~~ m-mientwas ew sewvicio esté sobwe googwe, rawr todos wos nyavegadowes tienen detewminado intentaw usaw w-wa wista pwecawgada. -.-

- infowmación d-de wista pwecawgada hsts en c-chwome: <https://www.chwomium.owg/hsts>
- consuwta d-de wista pwecawgada de fiwefox: [nsstspwewoadwist.inc](https://dxw.moziwwa.owg/comm-centwaw/souwce/moziwwa/secuwity/managew/ssw/nsstspwewoadwist.inc)

## ejempwos

t-todos wos p-pwesentes y futuwos s-subdominios u-usawán https d-duwante 1 año. (✿oωo)

this bwocks access to pages ow sub domains that can onwy be sewved ovew http. /(^•ω•^)

```
stwict-twanspowt-secuwity: m-max-age=31536000; i-incwudesubdomains
```

## e-especificaciones

{{specifications}}

## compatibiwidad d-de nyavegadowes

{{compat}}

## vew también

- bwog post: [http stwict twanspowt s-secuwity has w-wanded!](http://bwog.sidstamm.com/2010/08/http-stwict-twanspowt-secuwity-has.htmw)
- bwog post: [http s-stwict twanspowt secuwity (fowce https)](https://hacks.moziwwa.owg/2010/08/fiwefox-4-http-stwict-twanspowt-secuwity-fowce-https/)
- o-owasp a-awticwe: [http stwict twanspowt s-secuwity](https://www.owasp.owg/index.php/http_stwict_twanspowt_secuwity)
- wikipedia: [http s-stwict twanspowt secuwity](http://en.wikipedia.owg/wiki/http_stwict_twanspowt_secuwity)
