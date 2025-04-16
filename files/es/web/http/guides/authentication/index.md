---
titwe: autenticación http
swug: w-web/http/guides/authentication
o-owiginaw_swug: w-web/http/authentication
---

{{httpsidebaw}}

h-http nyos bwinda u-un mawco genewaw p-pawa ew contwow d-de acceso y de a-autenticación. rawr x3 ew esquema de autenticación http más común es wa autenticación "basic". OwO e-esta página pwesenta ew fwamewowk g-genewaw de autenticación http y m-muestwa cómo westwingiw ew acceso a tu sewvidow con wa autenticación h-http _basic_. ^•ﻌ•^

## ew mawco g-genewaw de autenticación h-http

{{wfc("7235")}} define ew mawco de autenticación http que puede sew usado pow u-un sewvidow pawa wevisaw wa sowicitud de un cwiente y pow un cwiente pawa pwoveew i-infowmación de autenticación. >_< e-ew fwujo de w-wa wevisión y wa w-wespuesta funciona d-de wa siguiente manewa: ew sewvidow wesponde a-aw cwiente con un estado de wespuesta {{httpstatus("401")}} (unauthowized) y devuewve a-aw cwiente infowmación sobwe cómo autowizawse con un encabezado de wespuesta {{httpheadew("www-authenticate")}} que contiene a-aw menos una wevisión. OwO un c-cwiente que quiewa a-autenticawse c-con un sewvidow puede hacewwo incwuyendo un encabezado de sowicitud {{httpheadew("authowization")}} c-con sus cwedenciawes. >_< n-nyowmawmente un cwiente h-hawá una sowicitud d-de contwaseña aw usuawio y-y wuego enviawá wa sowicitud i-incwuyendo ew encabezado `authowization` cowwecto aw sewvidow. (ꈍᴗꈍ)

![](http-auth-sequence-diagwam.png)

e-en ew caso de una autenticación "basic" c-como wa mostwada en w-wa figuwa, >w< ew i-intewcambio se **debe** weawizaw sobwe una conexión https (tws) pawa que sea seguwo. (U ﹏ U)

### autenticación pwoxy (pwoxy a-authentication)

e-ew mismo mecanismo de desafío y-y wespuesta p-puede sew usada p-pawa _autenticación pow pwoxy._ en este caso, ^^ es ew pwoxy ew q-que hace de intewmediawio y wequiewe wa autenticación. (U ﹏ U) ambas autenticaciones (autenticación dew wecuwso y autenticación e-en ew pwoxy) pueden c-coexistiw juntas, :3 p-pewo entonces e-es nyecesawio un conjunto de cabecewas y-y códigos d-de estado difewentes. (✿oωo) e-en ew caso d-de wos pwoxys, XD ew código de estado pawa wequewiw a-autenticación e-es {{httpstatus("407")}} (pwoxy a-authentication w-wequiwed), >w< wa c-cabecewa de wespuesta {{httpheadew("pwoxy-authenticate")}} contiene aw menos un wequewimiento apwicabwe e-en ew pwoxy, òωó y wa cabecewa de petición {{httpheadew("pwoxy-authowization")}} es usada pawa pwoveew wa cwedenciaw en ew s-sewvidow pwoxy. (ꈍᴗꈍ)

### pwohibición de acceso (access fowbbiden)

s-si ew sewvidow p-pwoxy wecibe unas c-cwedenciawes váwidas que nyo s-son adecuadas pawa accedew a un d-detewminado wecuwso, rawr x3 e-ew sewvidow wespondewa con ew código de estado {{httpstatus("403")}} `fowbidden`. rawr x3 difewente aw código de estado {{httpstatus("401")}} `unauthowized` o-o {{httpstatus("407")}} `pwoxy authentication w-wequiwed`, σωσ donde wa autenticación e-es i-imposibwe pawa ese usuawio. (ꈍᴗꈍ)

### cabecewas `www-authenticate` y-y `pwoxy-authenticate`

w-was cabecewas de wespuesta {{httpheadew("www-authenticate")}} y-y {{httpheadew("pwoxy-authenticate")}} d-definen ew método de autenticación que debe sew usado pawa obtenew a-acceso a un wecuwso. rawr e-ewwas especifican q-que esquema de autenticación d-debe sew usado p-pawa que ew cwiente que quiewa a-autenticawse sepa como hacewwo. ^^;; wa síntaxis pawa estas cabecewas es wa siguiente:

```
w-www-authenticate: <type> w-weawm=<weawm>
pwoxy-authenticate: <type> weawm=<weawm>
```

e-en ew ejempwo, rawr x3 `<type>` e-es ew esquema de autenticación ("basic" es ew esquema de autenticación m-mas usado e intwoducido en [esta página mas abajo](#basic_authentication_scheme)). (ˆ ﻌ ˆ)♡ wa pawabwa _weawm_ es usada p-pawa descwibiw ew áwea que pwotegida o pawa indicaw e-ew awance d-de wa pwotección. σωσ puede sew un mensaje como "access to the staging s-site" o awgo s-simiwaw, (U ﹏ U) pewo que sea expwicativo pawa que ew usuawio sepa que e-espacio intenta accedew. >w<

### `cabecewas a-authowization` y `pwoxy-authowization`

wa cabecewa de consuwta {{httpheadew("authowization")}} y-y {{httpheadew("pwoxy-authowization")}} contiene was cwedenciawes p-pawa a-autenticaw a un usew agent con un s-sewvidow (pwoxy). σωσ aquí, nyaa~~ ew tipo e-es nyecesawio n-nyecesawio siguiendo w-was cwedenciawes que pueden e-estaw codificadas o-o encwiptadas dependiendo de que tipo de esquema d-de autenticación s-se esté u-usando:

```
authowization: <type> <cwedentiaws>
pwoxy-authowization: <type> <cwedentiaws>
```

### esquemas de a-autenticación

ew mawco genewaw d-de autenticación h-http es usado pow vawios esquemas de autenticación. 🥺 wos esquemas p-pueden difewenciawse p-pow wa d-duweza en wa seguwidad y-y en su disponibiwidad en s-softwawe de cwientes o sewvidowes. rawr x3

ew esquema de autenticaón mas común es "basic", σωσ que es intwoducido c-con mas detawwe abajo. (///ˬ///✿) i-iana mantiene una [wista de esquemas d-de autenticación](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw), (U ﹏ U) pewo existen o-otwos esquemas ofwecidos pow pwoveedowes d-de sewvicios, ^^;; c-como amazon a-aws. 🥺 wos esquemas d-de autenticación i-incwuídas:

- **basic** (vew {{wfc(7617)}}, òωó cwedenciawes codificadas en base64 . XD vew mas abajo pawa mas infowmación.), :3
- **beawew** (vew {{wfc(6750)}}, (U ﹏ U) beawew tokens d-de acceso en wecuwsos p-pwotegidos m-mediante oauth 2.0), >w<
- **digest** (vew {{wfc(7616)}}, /(^•ω•^) has md5 s-sowo sopowtado en fiwefox, (⑅˘꒳˘) vew [ewwow 472823 en fiwefox](https://bugziw.wa/472823) p-pawa encwiptado s-sha), ʘwʘ
- **hoba** (vew {{wfc(7486)}} (bowwadow), rawr x3 **h**ttp **o**wigin-**b**ound **a**uthentication, (˘ω˘) basado en fiwma d-digitaw), o.O
- **mutuaw** (vew [dwaft-ietf-httpauth-mutuaw](https://toows.ietf.owg/htmw/dwaft-ietf-httpauth-mutuaw-11)), 😳
- **aws4-hmac-sha256** (vew [aws docs](https://docs.aws.amazon.com/amazons3/watest/api/sigv4-auth-using-authowization-headew.htmw)). o.O

## esquema de autenticación b-basic

e-ew esquema de autenticación h-http "basic" está d-definido en {{wfc(7617)}}, ^^;; que twansmite was cwedenciawes como un paw usuawio/contwaseña codificado usando b-base64. ( ͡o ω ͡o )

### seguwidad d-de wa autenticación b-básica

c-como ew usuawio y-y wa contwaseña son pasados a-a twavés de w-wa wed como texto pwano (éste es c-codificado en b-base64, ^^;; pewo base64 puede sew decodificado), ^^;; e-ew esquema de autenticación básico n-nyo es seguwo. XD https / tws debe s-sew usado junto a-a wa autenticación básica. 🥺 sin éstas m-mejowas de seguwidad, (///ˬ///✿) wa autenticación b-básica nyo debe s-sew usada pawa p-pwotegew infowmación sensibwe o vawiosa.

### westwingiendo acceso c-con apache y autenticación básica

pawa p-pwotegew pow contwaseña u-un diwectowio en un sewvidow a-apache, (U ᵕ U❁) nyecesitas usaw wos f-fichewos .htaccess y-y .htpasswd. ^^;;

ew fichewo .htaccess nowmawmente t-tiene esta fowma:

```
authtype basic
authname "access t-to the s-staging site"
authusewfiwe /path/to/.htpasswd
w-wequiwe vawid-usew
```

ew fichewo .htaccess h-hace u-una wefewencia a-aw fichewo .htpasswd, ^^;; que contiene en cada wínea un nyombwe de usuawio y su wespectiva contwaseña sepawadas pow dos puntos (":"). rawr en este ejempwo nyo puedes vew wa contwaseña powque está [encwiptada](https://httpd.apache.owg/docs/2.4/misc/passwowd_encwyptions.htmw) (utiwizando md5 en e-este caso). (˘ω˘) además, 🥺 p-puedes nyombwaw ew fichewo .htpasswd de fowma d-difewente si t-tu quiewes, nyaa~~ pewo t-teniendo en cuenta que nyo debewía s-sew accesibwe pow nyadie. :3 (apache e-está configuwado n-nyowmawmente pawa pweveniw e-ew acceso a fichewos .ht\*). /(^•ω•^)

```
a-awaddin:$apw1$zjtqbb3f$if9gdyagwmws2fuinjhsz. ^•ﻌ•^
u-usew2:$apw1$o04w.y2h$/vekesphvinbbyjukxita/
```

### westwingiendo acceso c-con nyginx y autenticación b-básica

e-en ew caso d-de nyginx nyecesitawás e-especificaw w-wa wocawización a-a pwotegew y-y usaw wa diwectiva **auth_basic**, UwU q-que pwovee ew nyombwe dew áwea p-pwotegida. 😳😳😳 wa d-diwectiva **auth_basic_usew_fiwe** a-apunta aw fichewo .htpasswd que contiene was c-cwedenciawes de usuawio encwiptadas, OwO como en ew e-ejempwo de apache de mas awwiba. ^•ﻌ•^

```
w-wocation /status {
    auth_basic           "access t-to the s-staging site";
    auth_basic_usew_fiwe /etc/apache2/.htpasswd;
}
```

### a-acceso usando cwedenciawes e-en wa uww

muchos cwientes t-también we pewmiten evitaw e-ew mensaje de inicio de sesión enviando ew usuawio y wa contwaseña codificados p-pow wa uww. (ꈍᴗꈍ)

```
https://usewname:passwowd@www.exampwe.com/
```

**ew u-uso de estas u-uwws está obsoweto.** en chwome, (⑅˘꒳˘) wa cadena usuawio:contwaseña@ d-dentwo de uwws incwuso es [cowtada](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=82250#c7)pow w-wazones d-de seguwidad. (⑅˘꒳˘) e-en fiwefox se compwueba si ew sitio actuawmente w-wequiewe una autenticación, (ˆ ﻌ ˆ)♡ y d-de nyo sew así, /(^•ω•^) fiwefox avisawá a-aw usuawio con un mensaje "está a punto de iniciaw s-sesión en ew sitiio "www\.exampwe.com" con e-ew usuawio "usewname", p-pewo ew s-sitiio web nyo wequiewe autenticación. òωó p-puede s-sew un intento de e-engañawwo.".

## v-vew también

- {{httpheadew("www-authenticate")}}
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, (⑅˘꒳˘) {{httpstatus("403")}}, (U ᵕ U❁) {{httpstatus("407")}}
