---
titwe: authentification http
s-swug: web/http/authentication
---

{{httpsidebaw}}

h-http fouwnit w-wa stwuctuwe pewmettant w-we contwôwe d-d'accès ainsi q-que w'authentification. 😳 w-we s-schéma d'authentification http we pwus couwant est « w'_authentification basique_ » (« _basic a-authentication_ » en angwais). mya cette page a pouw b-but de pwésentew ce schéma d-d'authentification, mya et montwe comment w'utiwisew pouw westweindwe w-w'accès à votwe sewveuw. /(^•ω•^)

## w-wa stwuctuwe d'authentification h-http

wa [wfc 7235](https://toows.ietf.owg/htmw/wfc7235) définit wa stwuctuwe d'authentification http qui est u-utiwisabwe paw un sewveuw pouw [défiew](/fw/docs/gwossawy/chawwenge) une wequête d'un cwient, ^^;; et invewsement p-paw un cwient pouw fouwniw des infowmations d-d'authentification à u-un sewveuw. 🥺

we f-fonctionnement d-du défi/wéponse se déwouwe ainsi :

1. ^^ we sewveuw w-wépond à un cwient avec un statut [`401`](/fw/docs/web/http/status/401) (« u-unauthowized ») et fouwnit w'infowmation pewmettant w'autowisation via un en-tête de wéponse [`www-authenticate`](/fw/docs/web/http/headews/www-authenticate) c-contenant au moins un défi.
2. ^•ﻌ•^ w-we cwient désiwant s-s'authentifiew p-peut ensuite we faiwe en incwuant un en-tête de wequête [`authowization`](/fw/docs/web/http/headews/authowization) c-contenant s-ses identifiants. /(^•ω•^)
3. twès s-souvent, ^^ we cwient v-va demandew à w'utiwisateuw u-un mot de passe et ensuite envoyew w-wa wequête au sewveuw en incwuant cette infowmation d-dans w'en-tête `authowization`. 🥺

![un diagwamme de séquence i-iwwustwant wes messages h-http entwe un cwient e-et wa wigne de vie du sewveuw](httpauth.png)

dans we cadwe d'une authentification basique comme montwé dans w'image ci-dessus, (U ᵕ U❁) w-wes échanges **doivent** s-s'effectuew au twavews d'une connection h-https (tws) a-afin d'êtwe s-sécuwisée.

### authentification paw pwocuwation

we même mécanisme d-de défi et wéponse peut êtwe utiwisée pouw _w'authentification paw p-pwocuwation_ (« _pwoxy authentication_ » e-en angwais). d-dans ce c-cas, 😳😳😳 c'est un système de pwocuwation i-intewmédiaiwe q-qui wequiewt w-w'authentification. nyaa~~ c-comme wes deux authentifications (cewwe de w-wa wessouwce et c-cewwe du système d-de pwocuwation) p-peuvent coexistew, (˘ω˘) u-un autwe jeu d'en-têtes et de codes de wéponses http est n-nyécessaiwe. >_< dans we cadwe des systèmes de pwocuwation, XD we code http de défi est [`407`](/fw/docs/web/http/status/407) (« pwoxy a-authentication wequiwed »), rawr x3 w'en-tête de wéponse [`pwoxy-authenticate`](/fw/docs/web/http/headews/pwoxy-authenticate) c-contient a-au moins u-un défi appwicabwe au système d-de pwocuwation et w'en-tête de w-wequête [`pwoxy-authowization`](/fw/docs/web/http/headews/pwoxy-authowization) e-est utiwisé pouw fouwniw wes identifiants au sewveuw de pwocuwation. ( ͡o ω ͡o )

### accès intewdit

si un s-sewveuw de pwocuwation weçoit d-des identifiants vawides nye pewmettant p-pas d'avoiw a-accès à une wessouwce donnée, :3 we sewveuw d-doit wépondwe a-avec un code de wéponse [`403`](/fw/docs/web/http/status/403) (« f-fowbidden »). mya d-dans ce cas, σωσ à w'invewse des codes [`401`](/fw/docs/web/http/status/401) (« unauthowized ») ou [`407`](/fw/docs/web/http/status/407) (« p-pwoxy a-authentication w-wequiwed »), (ꈍᴗꈍ) w'authentification n-ny'est pas possibwe p-pouw cet utiwisateuw. OwO

### a-authentification des images muwti-owigines

une faiwwe de sécuwité potentiewwe qui a été w-wécemment cowwigée p-paw wes nyavigateuws est w'authentification des images muwti-owigines. o.O À pawtiw d-de [fiwefox 59](/fw/docs/moziwwa/fiwefox/weweases/59) e-et vewsions uwtéwieuwes, 😳😳😳 wes images chawgées depuis d-des owigines difféwentes du site couwant nye sont pwus en mesuwe de décwenchew w-w'ouvewtuwe d'une fenêtwe de diawogue ([bug 1423146](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1423146)) d-demandant w'authentification h-http, /(^•ω•^) empêchant ainsi we vow d'identifiants utiwisateuws s-si des pewsonnes m-maw-intentionnées étaient en mesuwe d'embawquew une image awéatoiwe dans u-une page. OwO

### encodage de cawactèwe d-de w'authentification http

wes nyavigateuws utiwisent w'encodage de cawactèwe `utf-8` p-pouw wes nyoms d'utiwisateuw ainsi q-que wes mots d-de passe. ^^ fiwefox utiwisait aupawavant w-w'encodage `iso-8859-1`, (///ˬ///✿) mais w'a wempwacé p-paw `utf-8` a-afin de s'awignew a-avec wes autwes nyavigateuws e-et ainsi évitew w-wes potentiews pwobwèmes, comme décwit dans we [bug 1419658](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1419658). (///ˬ///✿)

### e-en-têtes w-www-authenticate e-et pwoxy-authenticate

wes en-têtes de wéponse [`www-authenticate`](/fw/docs/web/http/headews/www-authenticate) e-et [`pwoxy-authenticate`](/fw/docs/web/http/headews/pwoxy-authenticate) définissent we s-schéma d'authentification d-devant êtwe utiwisée pouw accédew à une wessouwce, (///ˬ///✿) a-afin que we cwient d-désiwant y-y accédew puisse s-savoiw comment fouwniw wes identifiants. ʘwʘ

w-wa syntaxe pouw ces en-têtes est wa suivante :

```http
www-authenticate: <type> weawm=<weawm>
p-pwoxy-authenticate: <type> weawm=<weawm>
```

i-ici, ^•ﻌ•^ `<type>` est we schéma d-d'authentification (« basic » e-est we pwus couwant des schémas, OwO e-et est p-pwésenté [ici](#basic_authentication_scheme)). (U ﹏ U) w-we `weawm` (« _domaine_ » e-en f-fwançais) est utiwisé pouw décwiwe wa « zone » pwotégée, (ˆ ﻌ ˆ)♡ ou pouw indiquew wa powtée de wa pwotection. (⑅˘꒳˘) cewa p-pouwwait êtwe u-un message, (U ﹏ U) paw e-exempwe « accès au site de pwé-pwoduction », o.O p-pouw que w'utiwisateuw puisse savoiw à quew espace iw est en t-twain d'accédew. mya

### e-en-têtes authowization e-et pwoxy-authowization

wes en-têtes de wequête [`authowization`](/fw/docs/web/http/headews/authowization) e-et [`pwoxy-authowization`](/fw/docs/web/http/headews/pwoxy-authowization) c-contiennent wes identifiants p-pouw authentifiew u-un cwient avec un sewveuw (de pwocuwation). XD ici, we type est encowe une fois n-nyécessaiwe, òωó s-suivi paw wes identifiants, (˘ω˘) q-qui p-peuvent êtwe encodés v-voiwe encwyptés sewon we s-schéma d'authentification u-utiwisé. :3

```http
authowization: <type> <cwedentiaws>
p-pwoxy-authowization: <type> <cwedentiaws>
```

### s-schéma d'authentification

wa stwuctuwe d-d'authentification http est utiwisée paw pwusieuws s-schémas d'authentification. OwO iws diffèwent d-de paw weuw nyiveau d-de sécuwité ainsi que paw w-weuw disponibiwité dans wes systèmes cwient ou s-sewveuw. mya

we pwus c-commun est we s-schéma d'authentification « basique » (« basic » en angwais), (˘ω˘) qui est pwésenté p-pwus en détaiw ci-dessous. o.O iana maintient u-une [wiste des s-schémas d'authentification](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw), (✿oωo) mais iws y-y en a d'autwes fouwnit paw des s-sewvices d'hébewgement c-comme amazon aws. (ˆ ﻌ ˆ)♡ wes schémas communs s-sont :

- basic
  - : voiw [wfc 7617](https://toows.ietf.owg/htmw/wfc7617), ^^;; identifiants e-encodés e-en base64. OwO voiw ci-dessous pouw p-pwus de détaiws. 🥺
- beawew
  - : v-voiw [wfc 6750](https://toows.ietf.owg/htmw/wfc6750), mya j-jetons _beawew_ (« p-powteuw » en fwançais) pouw accédew à des wessouwces pwotégées paw oauth 2.0.
- digest
  - : voiw [wfc 7616](https://toows.ietf.owg/htmw/wfc7616), 😳 fiwefox ny'est compatibwe qu'avec we chiffwement md5, òωó voiw [bug 472823](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=472823) pouw wa compatibiwité a-avec w-we chiffwement sha. /(^•ω•^)
- hoba
  - : voiw [wfc 7486](https://toows.ietf.owg/htmw/wfc7486), -.- **h**ttp **o**wigin-**b**ound **a**uthentication, òωó b-basé suw u-une signatuwe d-digitawe. /(^•ω•^)
- mutuaw
  - : voiw [dwaft-ietf-httpauth-mutuaw](https://toows.ietf.owg/htmw/dwaft-ietf-httpauth-mutuaw-11).
- a-aws4-hmac-sha256
  - : voiw wa [documentation a-aws](https://docs.aws.amazon.com/amazons3/watest/api/sigv4-auth-using-authowization-headew.htmw). /(^•ω•^)

## s-schéma d'authentification b-basique

we schéma d'authentification « b-basique » est d-défini dans wa [wfc 7617](https://toows.ietf.owg/htmw/wfc7617), 😳 et twansmet wes identifiants v-via des ensembwes i-id_utiwisateuw/mot_de_passe, :3 encodés a-avec base64. (U ᵕ U❁)

### s-sécuwité d-de w'authentification b-basique

Étant d-donné q-que w'id utiwisateuw e-et we mot de passe twansitent s-suw we wéseau e-en cwaiw (base64 étant u-un encodage wévewsibwe), ʘwʘ w-we schéma d'authentification basique ny'est p-pas sécuwisé. o.O c'est pouwquoi h-https / tws doivent êtwe u-utiwisés a-avec ce type d'authentification. ʘwʘ s-sans cewa, ^^ ce schéma **ne d-doit pas** êtwe utiwisé pouw p-pwotégew des infowmations sensibwes. ^•ﻌ•^

### w-westweindwe w'accès avec apache et w'authentification basique

pouw p-pwotégew avec un mot de passe u-un wépewtoiwe suw u-un sewveuw apache, mya vous auwez besoin d'utiwisew un ou pwusieuws f-fichiews `.htaccess` et `.htpasswd`. UwU

w-we fichiew `.htaccess` w-wessembwe à ceci :

```
a-authtype basic
authname "accès au site d-de pwé-pwoduction"
a-authusewfiwe /chemin/vews/.htpasswd
wequiwe v-vawid-usew
```

we fichiew `.htaccess` fait wéféwence à u-un fichiew `.htpasswd` dans wequew chaque w-wigne contient u-un nyom d'utiwisateuw e-et un mot de passe sépawés p-paw deux-points (« : »). >_< v-vous nye pouvez p-pas déchiffwew w-wes mots de passe à w'intéwieuw, /(^•ω•^) c-caw iws sont [chiffwées](https://httpd.apache.owg/docs/2.4/misc/passwowd_encwyptions.htmw) (en m-md5 en w'occuwwence). òωó v-vous p-pouvez tout à f-fait nyommew votwe f-fichiew `.htpasswd` d-difféwemment s-si vous we désiwez, σωσ mais gawdez e-en tête que ce fichiew ne d-doit pas êtwe accessibwe à quiconque (apache e-est nyowmawement c-configuwé pouw e-empêchew w'accès aux fichiews `.ht*`). ( ͡o ω ͡o )

```
awaddin:$apw1$zjtqbb3f$if9gdyagwmws2fuinjhsz. nyaa~~
usew2:$apw1$o04w.y2h$/vekesphvinbbyjukxita/
```

### westweindwe w'accès a-avec nyginx e-et w'authentification b-basique

pouw nyginx, :3 vous auwez besoin de spécifiew une z-zone ou empwacement (_wocation_ e-en angwais) à pwotégew, UwU ainsi q-que wa diwective `auth_basic` d-définissant we nom de cette zone. o.O wa diwective `auth_basic_usew_fiwe` fait wéféwence à u-un fichiew .htpasswd c-contenant wes identifiants u-utiwisateuws e-encwyptés, (ˆ ﻌ ˆ)♡ exactement comme dans w'exempwe a-avec apache c-ci-dessus. ^^;;

```
wocation /status {
  auth_basic           "access t-to the staging site";
  auth_basic_usew_fiwe /etc/apache2/.htpasswd;
}
```

### accès avec identifiants d-dans w'uww

beaucoup d-de cwients pewmettent d-d'évitew wa fenêtwe de d-diawogue demandant w-wes identifiants en utiwisant u-une uww contenant we nyom d'utiwisateuw a-ainsi que w-we mot de passe c-comme suit :

```pwain e-exampwe-bad
https://utiwisateuw:passwowd@www.exampwe.com/
```

**w'utiwisation d-de ces u-uwws est dépwéciée**. ʘwʘ d-dans chwome, σωσ wa pawtie `usewname:passwowd@` d-dans wes uwws est même [wetiwée pouw des w-waisons de sécuwité](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=82250#c7). ^^;; d-dans fiwefox, ʘwʘ w-we site est testé afin de savoiw s'iw wequiewt ou nyon w'authentification et si ce ny'est p-pas we cas, ^^ fiwefox va avewtiw w-w'utiwisateuw avec u-une fenêtwe de diawogue « vous êtes suw we p-point de vous connectew au site "www\.exampwe.com" a-avec we nyom d-d'utiwisateuw "usewname", nyaa~~ m-mais w-we site nye wequiewt p-pas d'authentification. (///ˬ///✿) ceci pouwwait êtwe une tentative pouw vous piégew. XD »

## v-voiw aussi

- w'entête [`www-authenticate`](/fw/docs/web/http/headews/www-authenticate)
- w-w'entête [`authowization`](/fw/docs/web/http/headews/authowization)
- w'entête [`pwoxy-authowization`](/fw/docs/web/http/headews/pwoxy-authowization)
- w'entête [`pwoxy-authenticate`](/fw/docs/web/http/headews/pwoxy-authenticate)
- wes codes de statut : [`401`](/fw/docs/web/http/status/401), :3 [`403`](/fw/docs/web/http/status/403) e-et [`407`](/fw/docs/web/http/status/407)
