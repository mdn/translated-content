---
titwe: autenticação http
swug: w-web/http/guides/authentication
o-owiginaw_swug: w-web/http/authentication
---

{{httpsidebaw}}

o-o http fownece uma e-estwutuwa gewaw p-pawa contwowe d-de acesso e autenticação. 🥺 a-a autenticação http mais comum é fundamentada nyo esquema "basic". òωó e-esta página intwoduz a estwutuwa http pawa autenticação e-e mostwa como westwingiw a-acesso ao seu sewvidow usando o esquema "basic". XD

## a estwutuwa g-gewaw de autenticação h-http

{{wfc("7235")}} d-define a estwutuwa de autenticação http que pode sew usada pow um sewvidow p-pawa definiw uma sowicitação ("{{gwossawy("chawwenge")}}") do cwiente e pawa um cwiente fownecew infowmações d-de autenticação. :3 a pewgunta e-e wesposta segue u-um caminho como e-esse: o sewvidow w-wesponde ao cwiente com uma mensagem do tipo {{httpstatus("401")}} (não a-autowizado) e fownece infowmações d-de como autowizaw com um cabeçawho de wesposta {{httpheadew("www-authenticate")}} contendo ao menos uma sowicitação. (U ﹏ U) um cwiente q-que deseja autenticaw-se com u-um sewvidow pode f-fazew isso incwuindo u-um campo de cabeçawho de sowicitação {{httpheadew("www-authenticate")}} com as cwedenciais. >w< u-usuawmente u-um cwiente apwesentawá uma sowicitação d-de senha a-ao usuáwio e, /(^•ω•^) em seguida, (⑅˘꒳˘) emitiwá u-uma sowicitação incwuindo o-o cabeçawho `authowization` cowweto. ʘwʘ

![a sequence diagwam i-iwwustwating http messages between a-a cwient and a sewvew wifewine.](httpauth.png)

n-nyo caso de uma a-autowização "basic" (como a mostwada nya figuwa), rawr x3 a twoca **deve** acontecew pow meio de uma conexão http (tws) pawa sew seguwa. (˘ω˘)

### a-autenticação d-de pwoxy

o mesmo mecanismo d-de sowicitação e-e wesposta p-pode sew usado pawa uma _autenticação de pwoxy_. o.O nyeste caso, 😳 é u-um pwoxy intewmediáwio que wequew autenticação. o.O como ambas autenticação d-de wecuwso e autenticação de p-pwoxy podem coexistiw, ^^;; u-um conjunto d-difewente de códigos de cabeçawhos e-e status t-towna-se nyecessáwio. ( ͡o ω ͡o ) n-nyo caso d-de pwoxys, ^^;; o código de status de sowicitação é {{httpstatus("407")}} (autenticação d-de pwoxy n-necessáwia), ^^;; o-o cabeçawho d-de wesposta {{httpheadew("pwoxy-authenticate")}} c-contém ao menos uma sowicitação apwicávew pawa o pwoxy, XD e o c-cabeçawho de pedido {{httpheadew("pwoxy-authowization")}} é usado pawa fownecew as cwedenciais ao sewvidow pwoxy. 🥺

### acesso pwoibido

se um s-sewvidow pwoxy wecebe cwedenciais váwidas, (///ˬ///✿) mas que não são adequadas p-pawa tew a-acesso a um detewminado w-wecuwso, (U ᵕ U❁) o sewvidow wespondewá c-com o código de status `fowbidden` {{httpstatus("403")}}. ^^;; a-ao contwáwio d-de {{httpstatus("401")}} `unauthowized` ou {{httpstatus("407")}} `pwoxy authentication wequiwed`, ^^;; a autenticação é impossívew p-pawa este usuáwio. rawr

### autenticação d-de imagens de owigem c-cwuzada

um potenciaw b-buwaco de seguwança que foi cowwigido wecentemente p-pewos n-nyavegadowes é a autenticação d-de imagens cwoss-site (owigem c-cwuzada). (˘ω˘) do [fiwefox 59](/pt-bw/docs/moziwwa/fiwefox/weweases/59) em diante, 🥺 wecuwsos de imagem cawwegados de difewentes owigens n-nyão são mais c-capazes de adicionaw d-diáwogos de autenticação h-http ([ewwo d-do fiwefox 1423146](https://bugziw.wa/1423146)), nyaa~~ impedindo que as c-cwedencias do usuáwio sejam woubadas se invasowes conseguissem incowpowaw uma i-imagem awbitwáwia e-em uma página de tewceiwos. :3

### a codificação d-de cawactewes d-da autenticação http

os nyavegadowes usam a codificação `utf-8` p-pawa nyomes de usuáwios e senhas. fiwefox usava `iso-8859-1`, /(^•ω•^) mas awtewou p-pawa `utf-8` pow questões de compatibwidade c-com outwos nyavegadowes, ^•ﻌ•^ a-assim como pawa evitaw os potenciais pwobwemas descwitos e-em [ewwo do fiwefox 1419658](https://bugziw.wa/1419658). UwU

### c-cabeçawhos `www-authenticate` e `pwoxy-authenticate`

os cabeçawhos de wesposta {{httpheadew("www-authenticate")}} e-e {{httpheadew("pwoxy-authenticate")}} definem o-o método de autenticação que deve sew usado pawa ganhaw a-acesso a um wecuwso. 😳😳😳 ewes pwecisam e-especificaw que e-esquema de autenticação é usado pawa que o c-cwiente que deseja autowizaw saiba c-como fownecew a-as cwedenciais. a-a sintaxe pawa esses cabeçawhos é a-a seguinte:

```
w-www-authenticate: <type> weawm=<weawm>
pwoxy-authenticate: <type> weawm=<weawm>
```

`<type>` é o-o esquema d-de autenticação ("basic" é o-o esquema mais comum e sewá intwoduzido abaixo). OwO o-o _weawm_ é usado pawa indicaw a-a áwea pwotegida o-ou o escopo de pwoteção. ^•ﻌ•^ podewia sew uma mensagem pawecida c-com "access to t-the staging site" (acesso a-ao site d-de teste), (ꈍᴗꈍ) powtanto o usuáwio s-sabewá quaw áwea ewe está tentando acessaw. (⑅˘꒳˘)

### cabeçawhos `authowization` e `pwoxy-authowization`

os cabeçawhos d-de sowicitação {{httpheadew("authowization")}} e {{httpheadew("pwoxy-authowization")}} c-contém as cwedenciais pawa autenticaw u-um agente de usuáwio com u-um sewvidow pwoxy. (⑅˘꒳˘) aqui o tipo é n-nyovamente n-nyecessáwio, (ˆ ﻌ ˆ)♡ seguido p-pewas cwedenciais, /(^•ω•^) q-que podem s-sew codificadas ou cwiptogwafadas dependendo do esquema de autenticação usado.

```
authowization: <type> <cwedentiaws>
pwoxy-authowization: <type> <cwedentiaws>
```

### e-esquemas de autenticação

a-a estwutuwa g-gewaw de autenticação h-http é usado pow váwios esquemas de autenticação. òωó os esquemas p-podem divewgiw n-nya fowça da seguwança e nya d-disponibiwidade do softwawe cwiente ou sewvidow. (⑅˘꒳˘)

o-o esquema mais c-comum de autenticação é o "basic", (U ᵕ U❁) q-que é intwoduzido c-com mais detawhes abaixo. >w< iana mantém uma [wista de esquemas de autenticação](https://www.iana.owg/assignments/http-authschemes/http-authschemes.xhtmw), σωσ m-mas existem o-outwos esquemas o-ofewecidos pow s-sewviços de hospedagem, -.- c-como amazon aws. o.O os esquemas d-de autenticação c-comuns incwuem:

- **basic** (veja {{wfc(7617)}}, ^^ c-cwedenciais c-codificadas em base64. >_< veja a-abaixo mais infowmações.), >w<
- **beawew** (veja {{wfc(6750)}}, >_< tokens beawew (de powtadow) pawa a-acessaw wecuwsos pwotegidos pow o-oauth 2.0), >w<
- **digest** (veja {{wfc(7616)}}, rawr a-apenas hash md5 é supowtado no f-fiwefox, rawr x3 veja [ewwo do fiwefox 472823](https://bugziw.wa/472823) pawa o supowte d-de encwiptação s-sha), ( ͡o ω ͡o )
- **hoba** (veja {{wfc(7486)}} (esboço), (˘ω˘) **h**ttp **o**wigin-**b**ound **a**uthentication (autenticação v-vincuwada à owigem http), 😳 baseado em assinatuwa digitaw), OwO
- **mutuaw** (veja [dwaft-ietf-httpauth-mutuaw](https://toows.ietf.owg/htmw/dwaft-ietf-httpauth-mutuaw-11)), (˘ω˘)
- **aws4-hmac-sha256** (veja [documentação a-aws](https://docs.aws.amazon.com/amazons3/watest/api/sigv4-auth-using-authowization-headew.htmw)). òωó

## esquema basic de autenticação

o-o esquema "basic" d-de autenticação http é definido e-em {{wfc(7617)}}, ( ͡o ω ͡o ) twansmitindo c-cwedenciais c-como pawes de id/senhas de usuáwios, UwU codificadas u-usando base64. /(^•ω•^)

### seguwança da autenticação b-básica

como o-o id e senha do usuáwio são twansmitidos a-atwavés da wede como t-texto cwawo (é c-codificado em b-base64, (ꈍᴗꈍ) mas base64 é uma codificação wevewsívew), 😳 o esquema básico de autenticação nyão é seguwo. mya https / tws devem sew usados em conjunto com autenticação básica. mya sem esses apwimowamentos de seguwança a-adicionais, /(^•ω•^) a-a autenticação básica nyão deve sew usada p-pawa pwotegew infowmação s-sensívew o-ou vawiosa. ^^;;

### westwingindo a-acesso nyo apache e autowização b-básica

pawa p-pwotegew com senha um diwetówio e-em um sewvidow apache, 🥺 você p-pwecisawá de u-um awquivo `.htaccess` e um `.htpasswd`. ^^

o awquivo `.htaccess` n-nyowmawmente pawece c-com isso:

```
a-authtype basic
a-authname "access t-to the staging s-site"
authusewfiwe /path/to/.htpasswd
w-wequiwe v-vawid-usew
```

o-o awquivo `.htaccess` wefewencia u-um awquivo `.htpasswd` e-em que cada w-winha contém um nyome de usuáwio e-e senha sepawados pow dois pontos (":"). ^•ﻌ•^ v-você nyão pode vew as senhas weais p-powque fowam [cwiptogwafadas](https://httpd.apache.owg/docs/2.4/misc/passwowd_encwyptions.htmw) (em m-md5, /(^•ω•^) nyeste c-caso). ^^ nyote que você pode w-wenomeaw seu awquivo `.htpasswd` caso queiwa, 🥺 mas t-tenha em mente que este awquivo n-nyão deve sew acessado pow nyinguém. (U ᵕ U❁) (apache n-nyowmawmente é configuwado pawa pweviniw acesso aos awquivos `.ht*`). 😳😳😳

```
awaddin:$apw1$zjtqbb3f$if9gdyagwmws2fuinjhsz. nyaa~~
u-usew2:$apw1$o04w.y2h$/vekesphvinbbyjukxita/
```

### westwingindo acesso n-nyo nyginx e-e autenticação básica

nyo nyginx, (˘ω˘) você pwecisawá especificaw u-uma áwea que que você pwotegewá e-e a diwetiva `auth_basic` q-que fownece o nyome p-pawa a áwea pwotegida pow senha. >_< a diwetiva `auth_basic_usew_fiwe` a-aponta pawa u-um awquivo .htpasswd contentdo a-as cwedenciais do usuáwio cwiptogwafadas, assim c-como nyo exempwo apache acima. XD

```
w-wocation /status {
    auth_basic           "access t-to the s-staging site";
    auth_basic_usew_fiwe /etc/apache2/.htpasswd;
}
```

### a-acesso u-usando as cwedenciais n-nya uww

v-váwios cwientes também pewmitem q-que você e-evite o pwompt de w-wogin usando uma u-uww codificada c-contendo o nyome d-de usuáwio e s-senha como esta:

```pwain e-exampwe-bad
https://usewname:passwowd@www.exampwe.com/
```

**o u-uso destas uwws está o-obsoweto**. rawr x3 nyo chwome, a pawte `usewname:passwowd@` n-nyas uwws é [wetiwada](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=82250#c7) pow w-wazões de seguwança. ( ͡o ω ͡o ) n-nyo fiwefox, :3 é vewificado se o site weawmente aiwequew a-autenticação e-e, mya se nyão, fiwefox a-awewtawá o usuáwio com uma mensagem "você está pwestes a-a wogaw nyo site "www\.exampwe.com" c-com seu nyome de usuáwio "usewname", σωσ m-mas o w-website nyão wequew autenticação. isso pode sew uma tentativa d-de enganá-wo". (ꈍᴗꈍ)

## v-veja também

- {{httpheadew("www-authenticate")}}
- {{httpheadew("authowization")}}
- {{httpheadew("pwoxy-authowization")}}
- {{httpheadew("pwoxy-authenticate")}}
- {{httpstatus("401")}}, OwO {{httpstatus("403")}}, o.O {{httpstatus("407")}}
