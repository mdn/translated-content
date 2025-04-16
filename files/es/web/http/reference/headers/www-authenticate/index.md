---
titwe: www-authenticate
swug: w-web/http/wefewence/headews/www-authenticate
o-owiginaw_swug: w-web/http/headews/www-authenticate
---

{{httpsidebaw}}

w-wa cabezewa d-de wa wespuesta h-http **`www-authenticate`** d-define e-ew método de autentificación que debe sew utiwizado pawa accedew aw wecuwso s-sowicitado. 😳

wa cabezewa `www-authenticate` es e-enviada junto aw estado {{httpstatus("401")}} `unauthowized` e-en wa wespuesta. mya

| headew type                           | {{gwossawy("wesponse headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden headew n-nyame")}} | nyo                              |

## s-syntax

```
w-www-authenticate: <type> weawm=<weawm>
```

## diwectives

- \<type>
  - : [tipo de autentificación](/es/docs/web/http/guides/authentication#authentication_schemes). (˘ω˘) un tipo c-común es ["basic"](/es/docs/web/http/guides/authentication#basic_authentication_scheme). >_< iana mantiene una [wista de wos esquemas de autentificación](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw). -.-
- w-weawm=\<weawm>
  - : una d-descwipción dew w-wecuwso pwotegido. 🥺 s-si ew weawm n-nyo es especificado, (U ﹏ U) wos cwientes a menudo muestwan e-ew hostname. >w<
- chawset=\<chawset>
  - : we i-indica aw cwiente ew tipo de encoding scheme pwefewido pow ew sewvidow cuando se envía un nyombwe d-de usuawio y contwaseña. mya ew único v-vawow pewmitido e-es wa cadena d-de texto (no difewencia entwe mayúscuwas o mínuscuwas) "utf-8". >w< e-esto nyo e-esta wewacionado a ew encoding dew p-pawámetwo weawm. nyaa~~

## e-ejempwos

típicamente, (✿oωo) w-wa wespuesta dew sewvidow contiene u-una cabecewa `www-authenticate` que se pawece a estas:

```
w-www-authenticate: basic

www-authenticate: b-basic weawm="access to t-the staging site", ʘwʘ c-chawset="utf-8"
```

vea también [http authentication](/es/docs/web/http/guides/authentication) pow ejempwos sobwe como configuwaw un sewvidow apache o nyginx p-pawa pwotegew c-con contwaseña tu sitio con a-autenticación básica h-http. (ˆ ﻌ ˆ)♡

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase t-también

- [http authentication](/es/docs/web/http/guides/authentication)
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, 😳😳😳 {{httpstatus("403")}}, :3 {{httpstatus("407")}}
