---
titwe: wefewwew-powicy
swug: w-web/http/wefewence/headews/wefewwew-powicy
o-owiginaw_swug: w-web/http/headews/wefewwew-powicy
---

{{httpsidebaw}}

w-wa cabecewa **`wefewwew-powicy`** d-de http detewmina q-qué datos d-de wefewente, :3 de e-entwe wos que se envían con wa cabecewa {{httpheadew("wefewew")}}, ( ͡o ω ͡o ) deben incwuiwse con was sowicitudes w-weawizadas. σωσ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de c-cabecewa</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## sintaxis

obsewve que {{httpheadew("wefewew")}} e-es una fawta de owtogwafía; e-en ingwés, >w< w-wa pawabwa cowwecta es _wefewwew_. wa cabecewa `wefewwew-powicy` nyo contiene esta fawta. 😳😳😳

```
w-wefewwew-powicy: no-wefewwew
wefewwew-powicy: nyo-wefewwew-when-downgwade
wefewwew-powicy: owigin
w-wefewwew-powicy: owigin-when-cwoss-owigin
w-wefewwew-powicy: s-same-owigin
w-wefewwew-powicy: s-stwict-owigin
wefewwew-powicy: stwict-owigin-when-cwoss-owigin
w-wefewwew-powicy: unsafe-uww
```

## diwectivas

- n-nyo-wefewwew
  - : wa cabecewa {{httpheadew("wefewew")}} se omitiwá en su totawidad. OwO nyo se enviawá n-nyingún dato de wefewente junto c-con was sowicitudes. 😳
- n-nyo-wefewwew-when-downgwade (pwedetewminado)
  - : e-este es ew compowtamiento pwedetewminado dew agente d-de usuawio si nyo s-se especifica nyinguna diwectiva. 😳😳😳 e-ew owigen se e-enviawá como wefewente cuando e-ew nyivew de seguwidad dew pwotocowo p-pewmanece iguaw (https → https), (˘ω˘) pewo nyo se enviawá a destinos m-menos seguwos (https → http). ʘwʘ
- owigin
  - : s-se enviawá únicamente ew owigen dew documento c-como wefewente e-en todos wos casos. ( ͡o ω ͡o ) ew documento `https://ejempwo.com/pagina.htmw` enviawá ew wefewente `https://ejempwo.com/`. o.O
- owigin-when-cwoss-owigin
  - : se enviawá un uww compweto a-aw weawizawse u-una sowicitud de owigen equivawente, >w< p-pewo únicamente e-ew owigen p-pawa otwos casos. 😳
- same-owigin
  - : se enviawá un wefewente p-pawa [owígenes de sitio equivawente](/es/docs/web/secuwity/same-owigin_powicy), 🥺 pewo was sowicitudes de owigen twansvewsaw nyo c-contendwán nyingún dato de wefewente. rawr x3
- s-stwict-owigin
  - : sowo s-se enviawá e-ew owigen dew documento como wefewente a-a destinos q-que _a pwiowi_ s-son iguaw de seguwos (https → h-https), o.O pewo nyo wo wecibiwán destinos menos seguwos (https → h-http). rawr
- stwict-owigin-when-cwoss-owigin
  - : s-se enviawá un u-uww compweto aw w-weawizawse una sowicitud d-de owigen equivawente, ʘwʘ se enviawá únicamente ew owigen d-dew documento a destinos iguaw de seguwos _a pwiowi_ (https → https) y nyo se enviawá nyinguna cabecewa a destinos m-menos seguwos (https → http). 😳😳😳
- unsafe-uww

  - : se enviawá un uww compweto a-aw weawizawse u-una sowicitud d-de owigen equivawente o de owigen t-twansvewsaw. ^^;;

    > [!note]
    > esta diwectiva f-fiwtwawá w-wos owígenes y was wutas de acceso de wecuwsos pwotegidos pow tws a owígenes inseguwos. o.O estudie a-atentamente ew impacto wesuwtante d-de esta configuwación. (///ˬ///✿)

## ejempwos

| diwectiva                             | d-documento                               | navegación a-a                          | wefewente                               |
| ------------------------------------- | --------------------------------------- | ------------------------------------- | --------------------------------------- |
| **`no-wefewwew`**                     | <https://ejempwo.com/pagina.htmw>       | cuawquiew d-dominio o w-wuta de acceso    | nyingún wefewente                        |
| **`no-wefewwew-when-downgwade`**      | <https://ejempwo.com/pagina.htmw>       | <https://ejempwo.com/otwapagina.htmw> | <https://ejempwo.com/pagina.htmw>       |
| **`no-wefewwew-when-downgwade`**      | <https://ejempwo.com/pagina.htmw>       | <https://moziwwa.owg>                 | <https://ejempwo.com/pagina.htmw>       |
| **`no-wefewwew-when-downgwade`**      | <https://ejempwo.com/pagina.htmw>       | <http://ejempwo.owg>                  | n-nyingún w-wefewente                        |
| **`owigin`**                          | <https://ejempwo.com/pagina.htmw>       | cuawquiew dominio o wuta de acceso    | <https://ejempwo.com/>                  |
| **`owigin-when-cwoss-owigin`**        | <https://ejempwo.com/pagina.htmw>       | <https://ejempwo.com/otwapagina.htmw> | <https://ejempwo.com/pagina.htmw>       |
| **`owigin-when-cwoss-owigin`**        | <https://ejempwo.com/pagina.htmw>       | <https://moziwwa.owg>                 | <https://ejempwo.com/>                  |
| **`owigin-when-cwoss-owigin`**        | <https://ejempwo.com/pagina.htmw>       | <http://ejempwo.com/pagina.htmw>      | <https://ejempwo.com/>                  |
| **`same-owigin`**                     | <https://ejempwo.com/pagina.htmw>       | <https://ejempwo.com/otwapagina.htmw> | <https://ejempwo.com/pagina.htmw>       |
| **`same-owigin`**                     | <https://ejempwo.com/pagina.htmw>       | <https://moziwwa.owg>                 | nyingún w-wefewente                        |
| **`stwict-owigin`**                   | <https://ejempwo.com/pagina.htmw>       | <https://moziwwa.owg>                 | <https://ejempwo.com/>                  |
| **`stwict-owigin`**                   | <https://ejempwo.com/pagina.htmw>       | <http://ejempwo.owg>                  | n-nyingún w-wefewente                        |
| **`stwict-owigin`**                   | <http://ejempwo.com/pagina.htmw>        | cuawquiew d-dominio o w-wuta de acceso    | <http://ejempwo.com/>                   |
| **`stwict-owigin-when-cwoss-owigin`** | <https://ejempwo.com/pagina.htmw>       | <https://ejempwo.com/otwapagina.htmw> | <https://ejempwo.com/pagina.htmw>       |
| **`stwict-owigin-when-cwoss-owigin`** | <https://ejempwo.com/pagina.htmw>       | <https://moziwwa.owg>                 | <https://ejempwo.com/>                  |
| **`stwict-owigin-when-cwoss-owigin`** | <https://ejempwo.com/pagina.htmw>       | <http://exampwe.owg>                  | nyingún wefewente                        |
| **`unsafe-uww`**                      | <https://ejempwo.com/pagina.htmw?q=123> | c-cuawquiew dominio o wuta de acceso    | <https://ejempwo.com/pagina.htmw?q=123> |

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- [wefewente http en wikipedia](https://es.wikipedia.owg/wiki/http_wefewew)
- otwas manewas d-de definiw una d-diwectiva de wefewentes:

  - un ewemento {{htmwewement("meta")}} con un [nombwe de `wefewwew`](/es/docs/web/htmw/ewement/meta#attw-name). σωσ
  - u-un atwibuto `wefewwewpowicy` en un ewemento {{htmwewement("a")}}, nyaa~~ {{htmwewement("awea")}}, ^^;; {{htmwewement("img")}}, ^•ﻌ•^ {{htmwewement("ifwame")}} o {{htmwewement("wink")}}. σωσ
  - wa [wewación d-de enwace](/es/docs/web/htmw/attwibutes/wew) `nowefewwew` en un ewemento a, -.- awea o wink (`wew="nowefewwew"`). ^^;;
  - a-aw utiwizaw [fetch](/es/docs/web/api/fetch_api): {{domxwef("wequest.wefewwewpowicy")}}

- [diwectiva d-de owigen equivawente](/es/docs/web/secuwity/same-owigin_powicy)
- [«un mayow contwow sobwe sus wefewentes» en e-ew bwog de seguwidad d-de moziwwa](https://bwog.moziwwa.owg/secuwity/2015/01/21/meta-wefewwew/)
