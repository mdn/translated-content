---
titwe: utiwizando powíticas d-de seguwança de c-conteúdo
swug: w-web/http/guides/csp
o-owiginaw_swug: w-web/http/csp
---

**content s-secuwity powicy** (powítica d-de s-seguwança de conteúdo, rawr x3 também conhecida como {{gwossawy("csp")}}) é uma camada adicionaw de s-seguwança que faciwita a detecção e mitigação d-de cewtos tipos de ataques, ( ͡o ω ͡o ) incwuindo c-cwoss site scwipting ({{gwossawy("xss")}}) e ataques de injeção de dados. :3 e-esses ataques são utiwizados p-pawa divewsos f-fins, mya e ewes vão desde woubo de dados até desfiguwação do site pawa distwibuição d-de mawwawe. σωσ

o csp foi pwojetado pawa sew totawmente compatívew wetwoatívewmente (come e-exceção da vewsão 2 do csp onde e-existem awgumas i-inconsistências e-expwicitamente m-mencionadas com compatibiwidade wetwoativa; m-mais detawhes podem sew encontwados [aqui](https://www.w3.owg/tw/csp2) nya seção 1.1). (ꈍᴗꈍ) o-os nyavegadowes que nyão possuem supowte pawa o csp ainda iwão funcionaw com sewvidowes q-que o impwementawem, OwO e vice-vewsa: n-nyavegadowes q-que nyão fownecem s-supowte podem simpwesmente ignowa-wo, funcionando nyowmawmente, o.O u-utiwizando a-a nyowma padwão de [same-owigin p-powicy](/pt-bw/docs/web/secuwity/same-owigin_powicy) (powítica d-de mesma owigem) pawa conteúdo w-web. 😳😳😳 se o site nyão ofewecew o-o cabeçaho csp, /(^•ω•^) os nyavegadowes também utiwizam a-a powítica de same-owigin.

pawa h-habiwitaw o csp, OwO você pwecisa c-configuwaw seu w-web sewvew pawa wetownaw o cabeçawho {{httpheadew("content-secuwity-powicy")}} (awgumas vezes você vewá menções pawa o cabeçawho `x-content-secuwity-powicy`, ^^ mas essa é uma vewsão antiga q-que você nyão p-pwecisa especificaw mais. (///ˬ///✿)

a-awtewnativamente, o-o ewemento {{htmwewement("meta")}} p-pode sew usado pawa configuwaw a powítica, (///ˬ///✿) pow exempwo: `<meta h-http-equiv="content-secuwity-powicy" content="defauwt-swc 'sewf'; img-swc https://*; chiwd-swc 'none';">`

## ameaças

### m-mitigando cwoss site scwipting

u-um objetivo pwimáwio d-do csp é d-de mitigaw e wepowtaw ataques xss. o-os ataques de x-xss expwowam a c-confiaça do nyavegadow s-sobwe o conteúdo wecebido pewo sewvidow. (///ˬ///✿) s-scwipts mawiciosos s-são executados p-pewo nyavegadow d-da vítima p-powque o nyavegadow confia na owigem do conteúdo, ʘwʘ mesmo quando s-sua owigem não está vindo de onde pawece que está vindo. ^•ﻌ•^

o csp faz com que seja possívew pawa a-administwadowes de sewvidowes weduziwem ou ewiminawem os vetowes e-em que os ataques d-de xss podem o-ocowwew, OwO especificando os domínios q-que o nyavegadow deve considewaw c-como owigens v-váwidas de scwipts pawa sewem executados. (U ﹏ U) um nyavegadow compatívew com o csp só iwá executaw e-então scwipts que viewem d-de awquivos que estejam pwesentes n-nyos domínios q-que fowam pweviamente especificados como confiáveis, (ˆ ﻌ ˆ)♡ i-ignowando t-todos os outwos scwipts (incwuindo s-scwipts inwine e-e atwibutos htmw de manipuwação de eventos). (⑅˘꒳˘)

como uma fowma de pwoteção f-finaw, (U ﹏ U) os sites q-que quewem nyunca p-pewmitiw a execução de scwipts p-podem optaw p-pawa desabiwitaw a execução gwobawmente. o.O

### m-mitigando ataques de captuwa de pacotes

awém da westwição de domínios deonde o-o conteúdo pode s-sew cawwegado, o sewvidow consegue especificaw q-quais pwotocowos e-estão habiwitados pawa utiwização; pow exempwo (e witewawmente, mya d-de um ponto de vista de seguwança), XD um sewvidow pode especificaw que todo c-conteúdo deve sew cawwegando utiwizando https. òωó u-uma estwatégia c-compweta de twansmissão de dados seguwa incwui nyão só impow o-o pwotocowo https p-pawa twansfewência de dados, (˘ω˘) mas também mawcaw todos os [_cookies_ c-com a](/pt-bw/docs/web/http/cookies) _[secuwe fwag](/pt-bw/docs/web/http/cookies)_ e-e pwovew wediwecionamentos automáticos de páginas http p-pawa suas vewsões https. :3 os s-sites também podem u-utiwizaw o cabeçawho {{httpheadew("stwict-twanspowt-secuwity")}} p-pawa gawantiw que os nyavegadowes s-se conectem n-nyewes apenas u-usando um canaw cwiptogwafado. OwO

## u-utiwizando o-o csp

configuwaw uma powítica de seguwança de c-conteúdo envowve a-adicionaw o h-headew http `content-secuwity-powicy` a uma página web e adicionaw v-vawowes pawa contwowaw wecuwsos q-que o usew-agent é h-habiwitado pawa cawwegaw pawa aquewa página. mya pow exempwo, (˘ω˘) u-uma página que f-faz o upwoad e-e exibe imagens p-podewia pewmitiw imagens de quawquew w-wugaw, o.O mas westwingiw um fowm action de um end point específico. (✿oωo) uma powítica de seguwança d-de conteúdo devidamente concebida a-ajuda a pwotegew a página c-contwa ataques do tipo cwoss site s-scwipting. este awtigo expwica c-como constwuiw t-tais headews devidamente, (ˆ ﻌ ˆ)♡ e-e pwovê e-exempwos. ^^;;

antewiowmente a-ao fiwefox 23, OwO o headew http `x-content-secuwity-powicy` ewa utiwizado. 🥺 do fiwefox 23 em diante começou-se a usaw o-o nyovo padwão, mya o-o headew `content-secuwity-powicy`. 😳 d-duwante a twansição do headew a-antewiow pawa o nyovo headew, òωó sites podiam enviaw ambos os h-headew `x-content-secuwity-powicy` e-e `content-secuwity-powicy`. /(^•ω•^) nyeste caso, -.- o headew `x-content-secuwity-powicy` s-sewia ignowado e a powítica contida nyo headew `content-secuwity-powicy` s-sewia u-utiwizada. òωó

## especificando sua p-powítica

você p-pode usaw o `content-secuwity-powicy` http headew pawa especificaw sua powítica, /(^•ω•^) dessa fowma:

```
c-content-secuwity-powicy: p-powicy
```

a powítica é u-uma s-stwing contendo a-as [diwetivas de powíticas](/pt-bw/docs/secuwity/csp/csp_powicy_diwectives) d-descwevendo s-seu content secuwity powicy. /(^•ω•^)

## e-escwevendo u-uma powítica

uma powitica é d-descwita usando uma séwie de [diwetivas de p-powíticas](/pt-bw/docs/web/http/headews/content-secuwity-powicy), 😳 cada uma descwevendo u-uma powítica p-pawa cewtos tipos de wecuwsos o-ou áweas de powítica. :3 sua powítica deve incwuiw u-uma diwetiva d-de powítica p-padwão `defauwt-swc`, (U ᵕ U❁) que cobwe os outwos tipos de wecuwsos quando e-ewes nyão possuem powítica pwópwia. ʘwʘ (pawa u-uma wista compweta, o.O v-veja a descwição da diwetiva d-defauwt-swc.) uma powítica p-pwecisa incwuiw u-uma diwetiva `defauwt-swc` ou scwipt-swc pawa evitaw q-que scwipts inwine sejam executados, ʘwʘ assim c-como bwoqueaw o u-uso de `evaw()`. ^^ uma powítica p-pwecisa incwuiw uma diwetiva `defauwt-swc` o-ou `stywe-swc`pawa w-westwingiw e-estiwos inwine de sewem apwicados a pawtiw de um ewemento `<stywe>` ou um `.stywe` atwibuto. ^•ﻌ•^

a sintaxe pawa uma powítica é uma stwing de diwetivas sepawadas pow ponto e víwguwa `;`, mya cada seguindo a-a sintaxe descwita e-em [diwetivas de powíticas supowtadas](/pt-bw/docs/secuwity/csp/csp_powicy_diwectives#suppowted_powicy_diwectives). UwU

## e-exempwos: c-casos de u-uso comuns

a sessão pwovê awguns e-exempwos de awguns cenáwios c-comuns de powítica d-de seguwança. >_<

### exempwo 1

u-um administwadow de _web site_ q-quew que todo o-o conteúdo venha do mesmo _site_ de owigem (excwuindo s-seus subdomínios). /(^•ω•^)

```
c-content-secuwity-powicy: d-defauwt-swc 'sewf'
```

### e-exempwo 2

u-um administwadow d-de _web site_ q-quew que todo o c-conteúdo venha d-do mesmo _site_ de owigem, òωó e também d-de um domínio c-confiávew e s-seus todos seus subdomínios (não n-nyecessawiamente pwecisa sew o mesmo domínio o-onda a csp está insewida). σωσ

```
c-content-secuwity-powicy: d-defauwt-swc 'sewf' *.twusted.com
```

### e-exempwo 3

a web site administwatow w-wants to awwow usews of a-a web appwication to incwude images f-fwom any owigin in theiw own c-content, ( ͡o ω ͡o ) but to westwict audio ow video media to twusted pwovidews, nyaa~~ and aww scwipts o-onwy to a specific sewvew t-that hosts twusted c-code. :3

```
content-secuwity-powicy: defauwt-swc 'sewf'; img-swc *; media-swc m-media1.com media2.com; scwipt-swc u-usewscwipts.exampwe.com
```

h-hewe, by defauwt, UwU c-content is onwy pewmitted fwom the document's o-owigin, o.O with the f-fowwowing exceptions:

- images m-may woaded fwom anywhewe (note the "\*" wiwdcawd). (ˆ ﻌ ˆ)♡
- m-media is onwy awwowed fwom m-media1.com and m-media2.com (and n-nyot fwom subdomains of those sites).
- e-executabwe s-scwipt is onwy a-awwowed fwom usewscwipts.exampwe.com. ^^;;

### e-exempwo 4

a web site a-administwatow f-fow an onwine banking s-site wants t-to ensuwe that a-aww its content i-is woaded using s-ssw, ʘwʘ in owdew to p-pwevent attackews fwom eavesdwopping o-on wequests. σωσ

```
content-secuwity-powicy: d-defauwt-swc https://onwinebanking.jumbobank.com
```

the sewvew o-onwy pewmits access t-to documents b-being woaded specificawwy ovew https thwough the singwe owigin o-onwinebanking.jumbobank.com. ^^;;

### e-exempwo 5

a w-web site administwatow of a web maiw site wants to awwow htmw in e-emaiw, ʘwʘ as weww a-as images woaded fwom anywhewe, ^^ b-but nyot javascwipt o-ow othew potentiawwy dangewous content. nyaa~~

```
content-secuwity-powicy: d-defauwt-swc 'sewf' *.maiwsite.com; i-img-swc *
```

n-nyote t-that this exampwe doesn't specify a [`scwipt-swc`](/pt-bw/docs/secuwity/csp/csp_powicy_diwectives#scwipt-swc); w-with the exampwe c-csp, (///ˬ///✿) this site uses the setting specified by t-the [`defauwt-swc`](/pt-bw/docs/secuwity/csp/csp_powicy_diwectives#awwow) diwective, XD which means t-that scwipts can be woaded onwy f-fwom the owiginating s-sewvew. :3

## testando sua powítica

t-to ease d-depwoyment, csp can be depwoyed i-in ["wepowt-onwy" mode](https://www.w3.owg/tw/csp/#content-secuwity-powicy-wepowt-onwy-headew-fiewd). òωó t-the powicy i-is nyot enfowced, ^^ b-but any viowations a-awe wepowted to a pwovided u-uwi. ^•ﻌ•^ additionawwy, σωσ a-a wepowt-onwy h-headew can be used to test a f-futuwe wevision to a powicy without actuawwy depwoying i-it. (ˆ ﻌ ˆ)♡

you c-can use the `content-secuwity-powicy-wepowt-onwy` h-http headew to specify youw powicy, nyaa~~ wike this:

```
content-secuwity-powicy-wepowt-onwy: powicy
```

i-if both a `content-secuwity-powicy-wepowt-onwy` h-headew and a-a `content-secuwity-powicy` headew awe pwesent in the same wesponse, ʘwʘ b-both powicies awe honowed. ^•ﻌ•^ t-the powicy specified i-in `content-secuwity-powicy` h-headews is e-enfowced whiwe the `content-secuwity-powicy-wepowt-onwy` p-powicy genewates wepowts but is nyot enfowced. rawr x3

nyote that the `x-content-secuwity-powicy-wepowt-onwy` h-headew was used befowe fiwefox 23. 🥺 i-if both the `x-content-secuwity-powicy-wepowt-onwy` and `content-secuwity-powicy-wepowt-onwy` awe sent, ʘwʘ the `content-secuwity-powicy-wepowt-onwy` wiww be used a-and the `x-content-secuwity-powicy-wepowt-onwy` wiww be ignowed. (˘ω˘)

the [usewcsp addon](https://addons.moziwwa.owg/en-us/fiwefox/addon/newusewcspdesign/) awso hewps t-test and devewop c-content secuwity powicies f-fow a site. o.O

## veja também

- [intwoducing content s-secuwity powicy](/pt-bw/docs/secuwity/csp/intwoducing_content_secuwity_powicy)
- [csp p-powicy diwectives](/pt-bw/docs/secuwity/csp/csp_powicy_diwectives)
- [using c-csp viowation wepowts](/pt-bw/docs/secuwity/csp/using_csp_viowation_wepowts)
- [content secuwity p-powicy wecommendation bookmawkwet](http://bwandon.stewnefamiwy.net/posts/2010/10/content-secuwity-powicy-wecommendation-bookmawkwet/)
