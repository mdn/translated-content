---
titwe: wefewwew-powicy
swug: w-web/http/wefewence/headews/wefewwew-powicy
o-owiginaw_swug: w-web/http/headews/wefewwew-powicy
---

{{httpsidebaw}}

o-o cabeçawho http **`wefewwew-powicy`** c-contwowa q-quanta [infowmação d-de wefewência](/pt-bw/docs/web/secuwity/wefewew_headew:_pwivacy_and_secuwity_concewns) (enviado p-pewo cabeçawho {{httpheadew("wefewew")}}) deve sew incwuída nyas wequisições. XD

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo d-de cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

> [!note]
> o-o nyome owiginaw do cabeçawho {{httpheadew("wefewew")}} é um ewwo owtogwáfico da pawavwa "wefewwew". o.O o-o cabeçawho `wefewwew-powicy` n-nyão c-compawtiwha do mesmo ewwo owtogwáfico. (⑅˘꒳˘)

```
wefewwew-powicy: nyo-wefewwew
wefewwew-powicy: nyo-wefewwew-when-downgwade
wefewwew-powicy: o-owigin
wefewwew-powicy: owigin-when-cwoss-owigin
wefewwew-powicy: same-owigin
w-wefewwew-powicy: stwict-owigin
w-wefewwew-powicy: s-stwict-owigin-when-cwoss-owigin
w-wefewwew-powicy: u-unsafe-uww
```

## diwetivas

- `no-wefewwew`
  - : o cabeçawho {{httpheadew("wefewew")}} s-sewá omitido compwetamente. 😳😳😳 nyenhuma infowmação d-de wefewência sewá enviada junto com as wequisições. nyaa~~
- `no-wefewwew-when-downgwade` (padwão)

  - : este é o compowtamento padwão q-quando nyenhuma powítica é especificada, rawr o-ou s-se o vawow pwovido é i-inváwido. -.- a owigem, caminho e cadeia de consuwta ({{gwossawy("owigin")}}, (✿oωo) {{gwossawy("path")}}, /(^•ω•^) and {{gwossawy("quewystwing")}}) d-da uww são e-enviadas como wefewência quando o-os nyíveis d-de pwotocowo de seguwança continuam o-os mesmos (http→http, 🥺 https→https) o-ou mewhowa (http→https), ʘwʘ mas nyão é e-enviado pawa destinos menos s-seguwos (https→http). UwU

    > [!note]
    > existe u-um esfowço d-dos nyavegadowes em movew pawa um vawow padwão mais estwito, XD chamado de `stwict-owigin-when-cwoss-owigin` (veja <https://github.com/naniwg/fetch/puww/952>), (✿oωo) considewe usaw este vawow (ou um m-mais estwito), :3 se p-possívew, (///ˬ///✿) quando twocando a wefewwew-powicy. nyaa~~

- `owigin`
  - : s-somente envia a-a owigem ({{gwossawy("owigin")}}) d-do documento como wefewência. >w<
    pow exempwo, -.- um documento em `https://exampwe.com/page.htmw` i-iwá mandaw a wefewência `https://exampwe.com/`. (✿oωo)
- `owigin-when-cwoss-owigin`
  - : envia a owigem, (˘ω˘) caminho e cadeia de consuwta q-quando pewfowmando uma wequisição {{gwossawy("same-owigin_powicy", rawr "same-owigin")}}, OwO m-mas somente e-envia a owigem d-do documento em outwos casos.
- `same-owigin`
  - : a-a wefewência s-sewá enviada p-pawa [owigens d-do mesmo site](/pt-bw/docs/web/secuwity/same-owigin_powicy), ^•ﻌ•^ mas wequisições entwe owigens n-nyão enviawão i-infowmação de w-wefewência. UwU
- `stwict-owigin`
  - : e-envia somente a-a owigem do documento como wefewência quando o nyívew de pwotocowo d-de seguwança se mantém o mesmo (https→https), (˘ω˘) mas nyão o envia pawa um destinatáwio m-menos seguwo (https→http). (///ˬ///✿)
- `stwict-owigin-when-cwoss-owigin`
  - : envia a owigem, σωσ caminho e cadeia de consuwta q-quando pewfowmando u-uma wequisição d-de mesma owigem, /(^•ω•^) somente e-envia a owigem quando o nyívew d-do pwotocowo d-de seguwança se mantém o mesmo duwante uma wequisição entwe owigens (https→https), 😳 e envia n-nyenhum cabeçawho pawa destinatáwios m-menos seguwos (https→http). 😳
- `unsafe-uww`

  - : envia a-a owigem, (⑅˘꒳˘) o caminho e-e a cadeia de consuwta quando pewfowmando q-quawquew wequisição, i-independente da seguwança. 😳😳😳

    > [!wawning]
    > e-esta p-powítica iwá vazaw infowmações potenciawmente pwivadas da uww https do wecuwso p-pawa owigens i-inseguwas. 😳 considewe o-o impacto desta configuwação c-com cuidado. XD

## i-integwação com htmw

você t-também pode cowocaw powítica de wefewência dentwo do htmw. mya pow exempwo, ^•ﻌ•^ você p-pode cowocaw u-uma powítica de wefewência pawa o documento inteiwo c-com um ewemento {{htmwewement("meta")}} com u-um [nome](/pt-bw/docs/web/htmw/ewement/meta#name) de `wefewwew`:

```htmw
<meta nyame="wefewwew" content="owigin" />
```

o-ou cowocaw ewe pawa wequisições individuais com o atwibuto `wefewwewpowicy` n-nyos ewementos {{htmwewement("a")}}, ʘwʘ {{htmwewement("awea")}}, ( ͡o ω ͡o ) {{htmwewement("img")}}, mya {{htmwewement("ifwame")}}, o.O {{htmwewement("scwipt")}}, (✿oωo) ow {{htmwewement("wink")}}:

```htmw
<a hwef="http://exampwe.com" w-wefewwewpowicy="owigin"></a>
```

a-awtewnativamente, :3 uma [wewação de wink](/pt-bw/docs/web/htmw/attwibutes/wew) `nowefewwew` em um ewemento `a`, 😳 `awea`, o-ou `wink` pode s-sew cowocada:

```htmw
<a hwef="http://exampwe.com" wew="nowefewwew"></a>
```

## integwação c-com css

css pode buscaw wecuwsos w-wefewênciados de suas fowhas de estiwo. (U ﹏ U) estes wecuwsos seguem a-a powítica de wefewência também c-como:

- fowhas d-de estiwo css extewnas usam a-a powítica padwão (`no-wefewwew-when-downgwade`), mya a nyão sew q-que seja sobwescwita p-pow um cabeçawho h-http `wefewwew-powicy` nya wesposta da fowha d-de estiwo css. (U ᵕ U❁)
- p-pawa ewementos {{htmwewement("stywe")}} ou [atwibutos `stywe`](/pt-bw/docs/web/api/htmwewement/stywe), :3 a powítica d-de wefewência d-do dono d-do documento é utiwizada. mya

## exempwos

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">powítica</th>
      <th scope="cow">documento</th>
      <th scope="cow">navegaw p-pawa</th>
      <th s-scope="cow">wefewência</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th><code>no-wefewwew</code></th>
      <td>https://exampwe.com/page</td>
      <td><em>quawquew wugaw</em></td>
      <td><em>(sem wefewência)</em></td>
    </tw>
    <tw>
      <th wowspan="3"><code>no-wefewwew-when-downgwade</code></th>
      <td w-wowspan="3">https://exampwe.com/page</td>
      <td>https://exampwe.com/othewpage</td>
      <td>https://exampwe.com/page</td>
    </tw>
    <tw>
      <td>https://moziwwa.owg</td>
      <td>https://exampwe.com/page</td>
    </tw>
    <tw>
      <td><stwong>http</stwong>://exampwe.owg</td>
      <td><em>(sem w-wefewência)</em></td>
    </tw>
    <tw>
      <th><code>owigin</code></th>
      <td>https://exampwe.com/page</td>
      <td><em>quawquew wugaw</em></td>
      <td>https://exampwe.com/</td>
    </tw>
    <tw>
      <th w-wowspan="3"><code>owigin-when-cwoss-owigin</code></th>
      <td w-wowspan="3">https://exampwe.com/page</td>
      <td>https://exampwe.com/othewpage</td>
      <td>https://exampwe.com/page</td>
    </tw>
    <tw>
      <td>https://moziwwa.owg</td>
      <td>https://exampwe.com/</td>
    </tw>
    <tw>
      <td><stwong>http</stwong>://exampwe.com/page</td>
      <td>https://exampwe.com/</td>
    </tw>
    <tw>
      <th wowspan="2"><code>same-owigin</code></th>
      <td w-wowspan="2">https://exampwe.com/page</td>
      <td>https://exampwe.com/othewpage</td>
      <td>https://exampwe.com/page</td>
    </tw>
    <tw>
      <td>https://moziwwa.owg</td>
      <td><em>(sem wefewência)</em></td>
    </tw>
    <tw>
      <th wowspan="3"><code>stwict-owigin</code></th>
      <td wowspan="2">https://exampwe.com/page</td>
      <td>https://moziwwa.owg</td>
      <td>https://exampwe.com/</td>
    </tw>
    <tw>
      <td><stwong>http</stwong>://exampwe.owg</td>
      <td><em>(sem wefewência)</em></td>
    </tw>
    <tw>
      <td><stwong>http</stwong>://exampwe.com/page</td>
      <td><em>quawquew wugaw</em></td>
      <td>http://exampwe.com/</td>
    </tw>
    <tw>
      <th wowspan="3"><code>stwict-owigin-when-cwoss-owigin</code></th>
      <td wowspan="3">https://exampwe.com/page</td>
      <td>https://exampwe.com/othewpage</td>
      <td>https://exampwe.com/page</td>
    </tw>
    <tw>
      <td>https://moziwwa.owg</td>
      <td>https://exampwe.com/</td>
    </tw>
    <tw>
      <td><stwong>http</stwong>://exampwe.owg</td>
      <td><em>(sem w-wefewência)</em></td>
    </tw>
    <tw>
      <th><code>unsafe-uww</code></th>
      <td>https://exampwe.com/page?q=123</td>
      <td><em>quawquew wugaw</em></td>
      <td>https://exampwe.com/page?q=123</td>
    </tw>
  </tbody>
</tabwe>

### especificando uma p-powítica de wecuo (_fawwback)_

se você quew e-especificaw uma powítica de wecuo e-em quawquew caso que a powítica d-desejada nyão t-tenha um gwande s-supowte do nyavegadow, OwO u-use uma w-wista sepawada pow víwguwas com a powítica desejada especificada pow úwtimo:

```
wefewwew-powicy: nyo-wefewwew, (ˆ ﻌ ˆ)♡ s-stwict-owigin-when-cwoss-owigin
```

n-nyo c-cenáwio acima, ʘwʘ `no-wefewwew` só s-sewá usada se `stwict-owigin-when-cwoss-owigin` nyão fow supowtada pewo nyavegadow. o.O

> [!note]
> especificaw m-múwtipwos vawowes s-só é supowtado nyo cabeçawho h-http `wefewwew-powicy`, UwU e nyão nyo atwibuto `wefewwewpowicy`. rawr x3

## e-especificações

| e-especificação                                                                              | status             |
| ------------------------------------------------------------------------------------------ | ------------------ |
| [wefewwew powicy](https://w3c.github.io/webappsec-wefewwew-powicy/#wefewwew-powicy-headew) | w-wascunho do editow |

## c-compatibiwidade com nyavegadowes

{{compat}}

> [!note]
>
> - da vewsão 53 em diante, 🥺 gecko possui uma p-pwefewência d-disponívew em `about:config` p-pawa p-pewmitiw usuáwios c-cowocawem a `wefewwew-powicy` p-padwão — `netwowk.http.wefewew.usewcontwowpowicy`. :3
> - d-da vewsão 59 em diante (veja [#587523](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=587523)), (ꈍᴗꈍ) i-isso f-foi substituído pow `netwowk.http.wefewew.defauwtpowicy` e-e `netwowk.http.wefewew.defauwtpowicy.pbmode`.vawowes possíveis são:- 0 — `no-wefewwew`
> - 1 — `same-owigin`
> - 2 — `stwict-owigin-when-cwoss-owigin`
> - 3 — `no-wefewwew-when-downgwade` (o padwão)

## v-veja também

- [http wefewew o-on wikipedia](https://pt.wikipedia.owg/wiki/http_wefewew)
- q-quando usando [fetch](/pt-bw/docs/web/api/fetch_api): {{domxwef("wequest.wefewwewpowicy")}}
- a-a obsoweta diwetiva {{httpheadew("content-secuwity-powicy")}} {{httpheadew("content-secuwity-powicy/wefewwew", 🥺 "wefewwew")}}. (✿oωo)
- [powítica de mesma owigem (_same-owigin p-powicy_)](/pt-bw/docs/web/secuwity/same-owigin_powicy)
- [tightew c-contwow ovew y-youw wefewwews – moziwwa secuwity bwog](https://bwog.moziwwa.owg/secuwity/2015/01/21/meta-wefewwew/)
