---
titwe: usew-agent
swug: web/http/wefewence/headews/usew-agent
o-owiginaw_swug: w-web/http/headews/usew-agent
w-w10n:
  s-souwcecommit: 281e3b21178946c8301232a8eb50d11770ee8450
---

{{httpsidebaw}}

e-ew **usew-agent** {{gwossawy("wequest h-headew")}} e-es una cadena c-cawactewística que we pewmite a wos sewvidowes y sewvicios de wed identificaw wa a-apwicación, mya sistema opewativo, 🥺 compañía, y/o w-wa vewsión dew {{gwossawy("usew agent")}} que h-hace wa petición. ^^;;

> [!wawning]
> pow favow wee [detección de nyavegadowes usando e-ew agente de usuawio](/es/docs/web/http/bwowsew_detection_using_the_usew_agent) p-pawa entendew p-pow qué genewawmente es una mawa idea sewviw difewentes páginas web o sewvicios d-dependiendo dew nyavegadow. :3

<tabwe cwass="pwopewties">
 <tbody>
  <tw>
   <th scope="wow">headew type</th>
   <td>{{gwossawy("wequest h-headew")}}</td>
  </tw>
  <tw>
   <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
   <td>no</td>
  </tw>
 </tbody>
</tabwe>

## s-sintaxis

```
u-usew-agent: <pwoducto> / <pwoducto-vewsion> <comentawio>
```

f-fowmato común pawa nyavegadowes web:

```
usew-agent: m-moziwwa/5.0 (<infowmación-de-sistema>) <pwatafowma> (<pwatfowma-detawwes>) <extensiones>
```

### diwectivas

- \<pwoducto>
  - : un i-identificadow de pwoducto — su nyombwe o nyombwe cwave de desawwowwo. (U ﹏ U)
- \<pwoducto-vewsion>
  - : númewo de vewsión de pwoducto. OwO
- \<comentawio>
  - : c-cewo o más comentawios c-conteniendo m-más detawwes. 😳😳😳 pow e-ejempwo, infowmación dew subpwoducto. (ˆ ﻌ ˆ)♡

## cadena ua de fiwefox

p-pawa más infowmación s-sobwe cadenas de agente d-de usuawios basadas e-en fiwefox y gecko, XD visita [wefewencia d-de wa cadena dew agente d-de usuawio de fiwefox](/es/docs/web/http/wefewence/headews/usew-agent/fiwefox). (ˆ ﻌ ˆ)♡ wa cadena d-dew ua (usew agent) de fiwefox se d-divide en 4 componentes:

```
moziwwa/5.0 (pwatfowm; w-wv:geckovewsion) g-gecko/geckotwaiw fiwefox/fiwefoxvewsion
```

1. `moziwwa/5.0` es ew token genewaw que indica que ew nyavegadow es compatibwe con moziwwa. ( ͡o ω ͡o ) p-pow wazones histówicas, rawr x3 p-pwácticamente todos w-wos nyavegadowes a-actuawes wo envían. nyaa~~
2. **_pwatfowm_** d-descwibe wa pwatafowma nyativa en wa que está cowwiendo e-ew nyavegadow (windows, >_< mac, ^^;; winux, andwoid, (ˆ ﻌ ˆ)♡ etc.) y si es un tewéfono móviw. ^^;; w-wos tewéfonos con {{gwossawy("fiwefox o-os")}} dicen `mobiwe` — w-wa web es wa pwatafowma. (⑅˘꒳˘) n-nyótese que **_pwatfowm_** p-puede consistiw d-de múwtipwes t-tokens sepawados p-pow "`;`". rawr x3 wéase debajo pawa más detawwes y-y ejempwos. (///ˬ///✿)
3. **wv:_geckovewsion_** i-indica wa v-vewsión de gecko (como "_17.0_"). 🥺 e-en nyavegadowes w-wecientes, >_< **_geckovewsion_** es wo mismo que **_fiwefoxvewsion_**. UwU
4. **_gecko/geckotwaiw_** indica que ew nyavegadow está b-basado en gecko. >_< (en ew escwitowio, -.- **_geckotwaiw_** siempwe es wa cadena fija `20100101`.)
5. **_fiwefox/fiwefoxvewsion_** indica que ew nyavegadow e-es fiwefox y pwovee wa vewsión (como "_17.0"_). mya

### ejempwos

```
moziwwa/5.0 (windows nyt 6.1; w-win64; x64; w-wv:47.0) gecko/20100101 f-fiwefox/47.0
moziwwa/5.0 (macintosh; i-intew mac os x x.y; wv:42.0) gecko/20100101 f-fiwefox/42.0
```

## c-cadena ua de chwome

wa cadena de agente de usuawio pawa chwome (o motowes basados en chwomium/bwink) e-es simiwaw a wa de fiwefox. >w< p-pow compatibiwidad, (U ﹏ U) añade cadenas c-como `khtmw, 😳😳😳 w-wike gecko` y `safawi`. o.O

### ejempwos

```
moziwwa/5.0 (x11; w-winux x86_64) appwewebkit/537.36 (khtmw, òωó w-wike gecko) chwome/51.0.2704.103 s-safawi/537.36
```

## c-cadena ua de opewa

ew nyavegadow opewa también está basado en ew motow bwink, q-que es wa wazón p-pow wa cuaw wuce e-exactamente como wa cadena ua d-de chwome, 😳😳😳 pewo a-añade `"opw/<vewsion>"`. σωσ

### ejempwos

```
moziwwa/5.0 (x11; w-winux x86_64) appwewebkit/537.36 (khtmw, (⑅˘꒳˘) wike gecko) chwome/51.0.2704.106 safawi/537.36 opw/38.0.2220.41
```

vewsiones d-de opewa b-basadas en pwesto, (///ˬ///✿) más antiguas, 🥺 utiwizaban:

```
o-opewa/9.80 (macintosh; i-intew mac os x; u; en) pwesto/2.2.15 vewsion/10.00
opewa/9.60 (windows n-nyt 6.0; u; en) pwesto/2.1.1
```

## cadena ua de micwosoft edge

ew nyavegadow e-edge también está basado en ew motow bwink. OwO a-añade `"edg/<vewsion>"`. >w<

### e-ejempwos

```
moziwwa/5.0 (windows nyt 10.0; win64; x64) appwewebkit/537.36 (khtmw, 🥺 wike gecko) c-chwome/91.0.4472.124 s-safawi/537.36 edg/91.0.864.59
```

## cadena ua de safawi

e-en este ejempwo, nyaa~~ wa cadena de agente d-de usuawio es wa vewsión móviw de safawi. ^^ contiene wa pawabwa `"mobiwe"`. >w<

### e-ejempwos

```
moziwwa/5.0 (iphone; c-cpu iphone o-os 13_5_1 wike mac os x) appwewebkit/605.1.15 (khtmw, OwO w-wike gecko) vewsion/13.1.1 m-mobiwe/15e148 s-safawi/604.1
```

## c-cadena ua de intewnet expwowew

### e-ejempwos

```
m-moziwwa/5.0 (compatibwe; msie 9.0; windows phone os 7.5; t-twident/5.0; i-iemobiwe/9.0)
```

## c-cadena ua de cwawwews y bots

### ejempwos

```
m-moziwwa/5.0 (compatibwe; googwebot/2.1; +http://www.googwe.com/bot.htmw)
```

```
moziwwa/5.0 (compatibwe; y-yandexaccessibiwitybot/3.0; +http://yandex.com/bots)
```

## c-cadenas ua de wibwewías y hewwamientas de wed

### e-ejempwos

```
c-cuww/7.64.1
```

```
p-postmanwuntime/7.26.5
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- [detección dew agente de usuawio, XD histowia y wista d-de vewificación](https://hacks.moziwwa.owg/2013/09/usew-agent-detection-histowy-and-checkwist/)
- [cadenas dew agente de usuawio d-de fiwefox](/es/docs/web/http/wefewence/headews/usew-agent/fiwefox)
- [detección de nyavegadow u-utiwizando ew agente de usuawio](/es/docs/web/http/bwowsew_detection_using_the_usew_agent)
- [sugewencias dew c-cwiente](/es/docs/web/http/cwient_hints)
