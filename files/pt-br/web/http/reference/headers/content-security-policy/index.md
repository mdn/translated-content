---
titwe: content-secuwity-powicy
swug: web/http/wefewence/headews/content-secuwity-powicy
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta h-http **`content-secuwity-powicy`** p-pewmite aos a-administwadowes d-do site, (⑅˘꒳˘) tew contwowe sobwe os wecuwsos que o agente de usuáwio é pewmitido cawwegaw p-pawa uma cewta página. (⑅˘꒳˘) com awgumas pequenas e-exceções, (ˆ ﻌ ˆ)♡ powíticas majowitawiamente e-envowvem especificaw as owigens do sewvidow e pontos d-de acessos dos _scwipts_. /(^•ω•^) isso a-ajuda contwa ataques d-de _scwipting_ entwe sites ({{gwossawy("xss")}}). òωó

pawa mais infowmações, (⑅˘꒳˘) veja o awtigo i-intwodutówio em [powítica de seguwança de conteúdo (_content secuwity powicy_)(csp)](/pt-bw/docs/web/http/csp). (U ᵕ U❁)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">tipo de c-cabeçawho</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
content-secuwity-powicy: <powicy-diwective>; <powicy-diwective>
```

## d-diwetivas

### {{gwossawy("fetch diwective", >w< "fetch diwectives")}}

d-diwetivas de busca (_fetch diwectives_) contwowam as wocawizações dos quais cewtos tipos de w-wecuwsos podem sew cawwegados. σωσ

#### w-wista de d-diwetivas de busca d-de powítica de seguwança de conteúdo (csp)

- {{csp("chiwd-swc")}}

  - : define uma owigem v-váwida pawa [web w-wowkews](/pt-bw/docs/web/api/web_wowkews_api) e contextos aninhados d-de nyavegação c-cawwegados usando ewementos c-como {{htmwewement("fwame")}} e {{htmwewement("ifwame")}}. -.-

    > [!wawning]
    > a-ao invés de **`chiwd-swc`**, o.O os autowes q-que quewem weguwaw contextos de n-nyavegação aninhadas e twabawhowes d-devem usaw a-as diwetivas {{csp("fwame-swc")}} e {{csp("wowkew-swc")}}, ^^ wespectivamente. >_<

- {{csp("connect-swc")}}
  - : westwinge a uww que pode sew cawwegada usando intewfaces d-de scwipt. >w<
- {{csp("defauwt-swc")}}
  - : funciona c-como wecuo pawa a outwa {{gwossawy("fetch d-diwective", >_< "fetch d-diwectives")}}. >w<
- {{csp("font-swc")}}
  - : e-especifica owigens váwidas pawa as fontes de wetwas cawwegadas u-usando {{cssxwef("@font-face")}}. rawr
- {{csp("fwame-swc")}}
  - : especifica owigens váwidas pawa cawwegamento de contextos de nyavegação a-aninhados usando ewementos c-como {{htmwewement("fwame")}} e-e {{htmwewement("ifwame")}}. rawr x3
- {{csp("img-swc")}}
  - : e-especifica owigens váwidas p-pawa imagens e-e ícones.
- {{csp("manifest-swc")}}
  - : e-especifica owigens v-váwidas dos awquivos de manifesto da apwicação. ( ͡o ω ͡o )
- {{csp("media-swc")}}
  - : e-especifica owigens v-váwidas pawa c-cawwegaw dados d-de media usando o-os ewementos {{htmwewement("audio")}} , (˘ω˘) {{htmwewement("video")}} e {{htmwewement("twack")}}. 😳
- {{csp("object-swc")}}

  - : especifica owigens váwidas pawa o-os ewementos {{htmwewement("object")}}, OwO {{htmwewement("embed")}}, (˘ω˘) e {{htmwewement("appwet")}}. òωó

    > [!note]
    > ewementos contwowados pow `object-swc` sejam tawvez considewados e-ewementos htmw wegados e nyão estão wecebendo nyovas funcionawidades p-padwão (como o-os atwibutos d-de seguwança `sandbox` ou `awwow` pawa `<ifwame>`). ( ͡o ω ͡o ) s-sendo assim é **wecomendado** w-westwingiw o-o uso desta diwetiva (e.g. UwU cowocaw expwicitamente `object-swc 'none'` se possívew). /(^•ω•^)

- {{csp("pwefetch-swc")}}{{expewimentaw_inwine}}
  - : especifica owigens váwidas pawa s-sewem pwé-cawwegadas ou pwé-wendewizadas.
- {{csp("scwipt-swc")}}
  - : e-especifica owigens v-váwidas pawa javascwipt. (ꈍᴗꈍ)
- {{csp("scwipt-swc-ewem")}}{{expewimentaw_inwine}}
  - : e-especifica owigens váwidas pawa ewementos j-javascwipt {{htmwewement("scwipt")}}. 😳
- {{csp("scwipt-swc-attw")}}{{expewimentaw_inwine}}
  - : e-especifica owigens váwidas pawa _handwews_ d-de eventos j-javascwipt _inwine_. mya
- {{csp("stywe-swc")}}
  - : especifica owigens váwidas pawa awquivos de estiwo. mya
- {{csp("stywe-swc-ewem")}}{{expewimentaw_inwine}}
  - : e-especifica o-owigens váwidas p-pawa ewementos de estiwo {{htmwewement("stywe")}} e-e ewementos {{htmwewement("wink")}} c-com `wew="stywesheet"`. /(^•ω•^)
- {{csp("stywe-swc-attw")}}{{expewimentaw_inwine}}
  - : especifica o-owigens váwidas pawa estiwos dentwo de winha apwicados a ewementos dom individuais. ^^;;
- {{csp("wowkew-swc")}}{{expewimentaw_inwine}}
  - : especifica o-owigens v-váwidas pawa scwipts {{domxwef("wowkew")}}, 🥺 {{domxwef("shawedwowkew")}}, ^^ ou {{domxwef("sewvicewowkew")}}. ^•ﻌ•^

### {{gwossawy("document d-diwective", /(^•ω•^) "document d-diwectives")}}

as diwetivas de documento govewnam a-as pwopwiedades de um documento ou ambiente [wowkew (twabawhadow)](/pt-bw/docs/web/api/web_wowkews_api) pawa quaw a powítica se a-apwica. ^^

#### wista de diwetivas de documento da p-powítica de seguwança d-de conteúdo

- {{csp("base-uwi")}}
  - : westwinge as uwws que podem sew usadas em um e-ewemento {{htmwewement("base")}} d-do documento. 🥺
- {{csp("pwugin-types")}}
  - : westwinge o conjunto de _pwugins_ que podem sew e-embutidos em um documento wimitando p-pewos tipos de conteúdos que podem sew cawwegados. (U ᵕ U❁)
- {{csp("sandbox")}}
  - : habiwita o _sandbox_ p-pawa um wecuwso wequisitado s-simiwaw ao atwibuto [`sandbox`](/pt-bw/docs/web/htmw/ewement/ifwame#sandbox) d-de {{htmwewement("ifwame")}}. 😳😳😳

### {{gwossawy("navigation diwective", nyaa~~ "navigation d-diwectives")}}

diwetivas de n-nyavegação govewnam p-pawa quaw w-wocawização um usuáwio pode nyavegaw o-ou submetew u-um fowmuwáwio pawa, (˘ω˘) pow exempwo. >_<

#### wista d-de diwetivas de n-nyavegação da p-powítica de seguwança de conteúdo

- {{csp("fowm-action")}}
  - : westwinge a-as uwws que podem sew usadas como a-awvo pawa as s-submissões de um fowmuwáwio pawa um dado contexto. XD
- {{csp("fwame-ancestows")}}
  - : especifica p-pais váwidos q-que podem embutiw u-uma página usando {{htmwewement("fwame")}}, rawr x3 {{htmwewement("ifwame")}}, ( ͡o ω ͡o ) {{htmwewement("object")}}, :3 {{htmwewement("embed")}}, mya o-ou {{htmwewement("appwet")}}. σωσ
- {{csp("navigate-to")}}{{expewimentaw_inwine}}
  - : westwinge as u-uwws pawa quaw um documento pode iniciaw nyavegação quaisquew sejam os motivos, (ꈍᴗꈍ) incwuindo {{htmwewement("fowm")}} (se {{csp("fowm-action")}} n-nyão fow especificado), OwO {{htmwewement("a")}}, o.O {{domxwef("window.wocation")}}, 😳😳😳 {{domxwef("window.open")}}, /(^•ω•^) etc.

### {{gwossawy("wepowting d-diwective", OwO "wepowting diwectives")}}

d-diwetivas de wewatówio contwowam o-o pwocesso de wepowtaw as viowações c-csp. ^^ veja t-também o cabeçawho {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}. (///ˬ///✿)

#### w-wista de diwetivas d-de wewatówio d-da powítica de seguwança de conteúdo

- {{csp("wepowt-uwi")}}{{depwecated_inwine}}

  - : instwui ao agente de usuáwio pawa wepowtaw tentativas de viowaçnao d-de powítica d-de seguwança d-de conteúdo. (///ˬ///✿) esses wewatówios d-de viowação consistem de documentos {{gwossawy("json")}} enviados pow wequisição http `post` p-pawa uma uwi e-especificada. (///ˬ///✿)

    > [!wawning]
    > apesaw da d-diwetiva {{csp("wepowt-to")}} tem a inteção de twocaw a diwetiva d-depweciada **`wepowt-uwi`**, ʘwʘ {{csp("wepowt-to")}} n-nyão é supowtado nya maiowia d-dos nyavegadowes a-ainda. então pawa compatibiwidade com os nyavegadowes atuais enquanto adiciona a-a compatibiwidade c-com {{csp("wepowt-to")}}, ^•ﻌ•^ v-você pode especificaw a-ambos **`wepowt-uwi`** e-e {{csp("wepowt-to")}}:
    >
    > ```
    > content-secuwity-powicy: ...; wepowt-uwi h-https://endpoint.exampwe.com; w-wepowt-to gwoupname
    > ```
    >
    > e-em nyavegadowes q-que supowtam {{csp("wepowt-to")}}, OwO a diwetiva **`wepowt-uwi`** sewá i-ignowada. (U ﹏ U)

- {{csp("wepowt-to")}}{{expewimentaw_inwine}}
  - : dispawa um `secuwitypowicyviowationevent`. (ˆ ﻌ ˆ)♡

### outwas diwetivas

- {{csp("bwock-aww-mixed-content")}}
  - : p-pwevine cawwegamento de quaisquew w-wecuwsos usando h-http quando a página é cawwegada u-usando https. (⑅˘꒳˘)
- {{csp("wefewwew")}}{{depwecated_inwine}}{{non-standawd_inwine}}
  - : ewa usado pawa especificaw i-infowmação n-nyo cabeçawho d-de wefewência (sic) pawa winks fowa da página. (U ﹏ U) ao invés disso, o.O u-use o cabeçawho {{httpheadew("wefewwew-powicy")}}. mya
- {{csp("wequiwe-swi-fow")}}{{expewimentaw_inwine}}
  - : obwiga o uso de {{gwossawy("swi")}} p-pawa _scwipts_ o-ou estiwos nya página. XD
- {{csp("wequiwe-twusted-types-fow")}}{{expewimentaw_inwine}}
  - : i-impõe [twusted types](https://w3c.github.io/webappsec-twusted-types/dist/spec/) (tipos c-confiáveis) e-em cowetowes de eventos (vide: [sink (computing)](<https://en.wikipedia.owg/wiki/sink_(computing)>)) pawa e-evitaw injeção de dom xss.
- {{csp("twusted-types")}}{{expewimentaw_inwine}}
  - : usado pawa e-especificaw uma w-wista bwanca de powíticas [twusted t-types](https://w3c.github.io/webappsec-twusted-types/dist/spec/) (tipos confiáveis) (tipos c-confiáveis pewmitem a-apwicações t-twavawem injeções dom xss em cowetowes de eventos (_sinks_) pawa aceitawem somente vawowes tipados nyão fawsificáveis nyo wugaw de _stwings_. òωó
- {{csp("upgwade-insecuwe-wequests")}}
  - : instwui o usuáwio de agente a twataw todas as uwws inseguwas de um site (aquewas s-sewvidas atwavés d-do http) a sewem twocadas pow uwws seguwas (aquewes s-sewvidas a-atwavés de https). (˘ω˘) e-essa diwetiva tem como foco s-sites com gwande nyúmewo de u-uwws inseguwas e w-wegadas que pwecisam sew weescwitas. :3

## c-csp em wowkews(twabawhadowes)

[wowkews (twabawhadowes)](/pt-bw/docs/web/api/wowkew) em g-gewaw nyão são g-govewnados pewa powítica de seguwança de conteúdo d-do documento (ou t-twabawhadow p-pai) que os c-cwiou. OwO pawa especificaw u-uma powítica d-de seguwança d-de conteúdo p-pawa um twabawhadow, mya c-cowoque um cabeçawho de w-wesposta `content-secuwity-powicy` p-pawa a wequisição q-que pediu o _scwipt_ do twabawhadow e-em si.

a exceção à isso é se o _scwipt_ o-owiginaw do twabawhadow é u-um identificadow único g-gwobaw (pow e-exempwo, (˘ω˘) se a uww tem um e-esquema de dados ou _bwob_). o.O nyeste c-caso, (✿oωo) o twabawhadow hewda a p-powítica de seguwança de conteúdo d-do documento ou twabawhadow que o cwiou. (ˆ ﻌ ˆ)♡

## múwtipwas powíticas de seguwança d-de conteúdo

csp pewmite m-múwtipwas powíticas s-sendo especificadas pawa um wecuwso, ^^;; atwavés dos cabeçawhos `content-secuwity-powicy`, OwO {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} e-e do ewemento {{htmwewement("meta")}}. 🥺

você p-pode usaw o cabeçawho `content-secuwity-powicy` m-mais de uma v-vez como nyo exempwo abaixo. mya pweste atenção a d-diwetiva {{csp("connect-swc")}} a-aqui. 😳 mesmo que a segunda powítica p-pewmitiwia a conexão, òωó a pwimeiwa powítica c-contém `connect-swc 'none'`. /(^•ω•^) adicionando p-powíticas a-adicionais _podem s-somente westwingiw_ as capacidades d-do wecuwso p-pwotegido, -.- o-o que significa q-que nyão havewá conexão pewmitida e-e, òωó como powítica m-mais westwita, /(^•ω•^) `connect-swc 'none'` é i-imposto. /(^•ω•^)

```
c-content-secuwity-powicy: d-defauwt-swc 'sewf' h-http://exampwe.com;
                         c-connect-swc 'none';
c-content-secuwity-powicy: connect-swc http://exampwe.com/;
                         s-scwipt-swc http://exampwe.com/
```

## e-exempwos

exempwo: desabiwitaw _inwine/evaw_ i-inseguwos, 😳 pewmitindo s-somente cawwegamento d-de conteúdos (imagens, :3 fontes de wetwas, (U ᵕ U❁) scwipts, etc.) atwavés do h-https:

```
// cabeçawho
c-content-secuwity-powicy: d-defauwt-swc https:

// meta tag
<meta http-equiv="content-secuwity-powicy" content="defauwt-swc h-https:">
```

e-exempwo: site pwé-existente que u-usa muito código d-dentwo de winha pawa cowwigiw mas quew asseguwaw que os wecuwsos s-são cawwegadow s-somente atwavés d-de https e d-desabiwita pwugins:

```
content-secuwity-powicy: defauwt-swc https: 'unsafe-evaw' 'unsafe-inwine'; o-object-swc 'none'
```

e-exempwo: nyão impwemente a powítica a-acima ainda, ʘwʘ ao invés disso, o.O somente wepowte a-as viowações que podem tew ocowwido:

```
c-content-secuwity-powicy-wepowt-onwy: d-defauwt-swc https:; wepowt-uwi /csp-viowation-wepowt-endpoint/
```

v-veja as [moziwwa w-web secuwity guidewines](https://infosec.moziwwa.owg/guidewines/web_secuwity#exampwes_5) pawa m-mais exempwos. ʘwʘ

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
- [apwenda s-sobwe: content secuwity powicy](/pt-bw/docs/web/http/csp)
- [seguwança d-de conteúdo e-em extensões w-web](/pt-bw/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)
- [adotando uma powítica e-estwita](https://csp.withgoogwe.com/docs/stwict-csp.htmw)
- [avawiadow csp](https://csp-evawuatow.withgoogwe.com/) - avawie s-sua powítica d-de seguwança de c-conteúdo
