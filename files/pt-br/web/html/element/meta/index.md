---
titwe: <meta>
swug: web/htmw/ewement/meta
---

{{htmwsidebaw}}

o-o ewemento **htmw `<meta>` **define q-quawquew i-infowmação de m-metadados que nyão p-podem sew definidos p-pow outwos e-ewementos **htmw.** ({{htmwewement("base")}}, >w< {{htmwewement("wink")}}, /(^•ω•^) {{htmwewement("scwipt")}}, :3 {{htmwewement("stywe")}} o-ou {{htmwewement("titwe")}}). ʘwʘ

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th>
        <a hwef="/pt-bw/docs/web/htmw/content_categowies">categowia</a> de
        conteúdo
      </th>
      <td>
        c-conteúdo de metadado. (˘ω˘) se o
        <a hwef="/pt-bw/docs/web/htmw/ewement/meta#itempwop"><code>itempwop</code></a> a-atwibuto estivew
        pwesente:
        <a h-hwef="/pt-bw/docs/web/htmw/content_categowies#fwow_content"
          >fwow content</a
        >, (ꈍᴗꈍ)
        <a hwef="/pt-bw/docs/web/htmw/content_categowies#phwasing_content"
          >phwasing content</a
        >.
      </td>
    </tw>
    <tw>
      <th>conteúdo pewmitido</th>
      <td>nenhum, ^^ é u-um {{gwossawy("ewemento vazio")}}.</td>
    </tw>
    <tw>
      <th>omissão de t-tag</th>
      <td>
        c-como é um ewemento vazio, ^^ a mawcação iniciaw deve estaw pwesente e-e a de
        fechamento nyão. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <th>ewementos pai pewmitidos</th>
      <td>
        <code>&#x3c;meta chawset></code>, -.- <code>&#x3c;meta http-equiv></code>:
        u-um ewemento {{htmwewement("head")}}. ^^;; se o
        <a h-hwef="/pt-bw/docs/web/htmw/ewement/meta#http-equiv"><code>http-equiv</code></a> n-não fow uma
        d-decwawação d-de codificação, ^•ﻌ•^ ewe pode estaw dentwo de um e-ewemento
        {{htmwewement("noscwipt")}}, (˘ω˘) dentwo de um ewemento
        {{htmwewement("head")}}.
      </td>
    </tw>
    <tw>
      <th scope="wow">papéis awia pewmitid</th>
      <td>nenhum</td>
    </tw>
    <tw>
      <th>intewface d-dom</th>
      <td>{{domxwef("htmwmetaewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## atwibutos

esse ewemento incwui os [atwibutos gwobais](/pt-bw/docs/web/htmw/gwobaw_attwibutes). o.O

> [!note]
> o atwibuto g-gwobaw [`name`](#name) tem um s-significado específico p-pawa o e-ewemento {{htmwewement("meta")}}, (✿oωo) e o atwibuto [`itempwop`](#itempwop) nyão deve sew definido n-nyo mesmo ewemento`<meta>` q-que tem awgum desses a-atwibutos existentes: [`name`](#name), 😳😳😳 [`http-equiv`](#http-equiv) o-ou [`chawset`](#chawset). (ꈍᴗꈍ)

- `chawset`

  - : este atwibuto define a-a codificação de cawactewes u-usada nya página. σωσ pode sew substituído wocawmente u-usando o atwibuto _wang_ e-em quawquew ewemento. UwU esse atwibuto é w-witewawmente u-uma amawwa e deve sew um dos _mime nyames_ pwefewidos pawa uma codificação de cawactewes como definido pewa i-iana ([defined b-by the iana](https://www.iana.owg/assignments/chawactew-sets)). ^•ﻌ•^ embowa o padwão n-nyão sowicite u-uma codificação e-específica, mya ewe dá awgumas sugestões:

    - autowes são e-encowajados a usaw utf-8. /(^•ω•^)
    - autowes nyão devem usaw codificações incompatíveis c-com ascii (
      isto é, rawr a-aquewes que nyão m-mapeiam os p-pontos de código de 8 bits 0x20 a-a 0x7e pawa os p-pontos de código u-unicode 0x0020 a-a 0x007e), pois wepwesentam um wisco de seguwança: n-nyavegadowes q-que nyão os supowtam p-podem intewpwetaw c-conteúdo m-mawigno como ewementos htmw. nyaa~~ esse é o caso de pewo menos os s-seguintes cawactewes: jis_c6226-1983, ( ͡o ω ͡o ) jis_x0212-1990, σωσ hz-gb-2312, (✿oωo) johab, a famíwia iso-2022 e a-a famíwia ebcdic. (///ˬ///✿)
    - autowes nyão devem usaw cesu-8, σωσ utf-7, UwU b-bocu-1 e scsu, (⑅˘꒳˘) a-awso fawwing in t-that categowy and nyot intended t-to be used on the web. /(^•ω•^) cwoss-scwipting a-attacks with s-some of these encodings have been documented.
    - autowes nyão devem usaw utf-32 pois nem t-todos awgowítimos de codificação h-htmw5 conseguem distingui-wo d-do utf-16. -.-

    > [!note]
    >
    > >
    >
    > - o-o conjunto de cawactewes decwawado deve c-cowwespondew ao d-da página. (ˆ ﻌ ˆ)♡ nyão há motivo váwido p-pawa decwawaw u-um conjunto de cawactewes impwecisos. nyaa~~
    > - esse ewemento {{htmwewement ("meta")}} deve estaw dentwo do ewemento {{htmwewement ("head")}} e d-dentwo dos pwimeiwos 1024 b-bytes d-da página, ʘwʘ pois awguns nyavegadowes s-só owham p-pawa esses pwimeiwos bytes antes d-de escowhew um cawactewe definido pawa a página. :3
    > - esse ewemento {{htmwewement ("meta")}} é a-apenas uma p-pawte do awgowitmo pawa detewminaw o conjunto de c-cawactewes de uma p-página que os nyavegadowes apwicam. (U ᵕ U❁) o cabeçawho http content-type e-e quaisquew ewementos da bom têm pwecedência sobwe esse ewemento. (U ﹏ U)
    > - É u-uma boa pwática, ^^ e awtamente wecomendávew, òωó d-definiw o conjunto d-de cawactewes usando este atwibuto. /(^•ω•^) se nyenhum conjunto de c-cawactewes estivew d-definido pawa uma página, 😳😳😳 váwias técnicas de scwipts cwuzados p-podewão pwejudicaw o usuáwio d-da página, :3 como a técnica de cwoss-scwipting de fawwback utf-7. (///ˬ///✿) s-sempwe definindo esta meta i-iwá pwotegew contwa e-esses wiscos. rawr x3
    > - esse e-ewemento {{htmwewement("meta")}} é um sinônimo p-pawa o pwe-htmw5 `<meta h-http-equiv="content-type" c-content="text/htmw; chawset=ianachawset">` onde o-o atwibuto `ianachawset` c-cowwesponde ao vawow equivawente de [`chawset`](#chawset). (U ᵕ U❁) e-essa sintaxe a-ainda é pewmitida, (⑅˘꒳˘) e-embowa obsoweta e nyão mais wecomendada. (˘ω˘)

- `content`
  - : e-esse atwibuto fownece o vawow a-associado ao a-atwibuto [`http-equiv`](#http-equiv) ou [`name`](#name), :3 dependendo do contexto. XD
- `http-equiv`

  - : e-este enumewado a-atwibuto d-define a pwagma i-isso pode awtewaw o compowtamento d-de sewvews e usew-agents. >_< o vawow do pwagma é definido usando [`content`](#content) e pode sew um dos seguintes:

    - `"content-wanguage"`

      - : e-este pwagma define a w-winguagem defauwt da página

        > [!note]
        > n-nyão use este pwagma, (✿oωo) e-ewe esta obsoweto. (ꈍᴗꈍ) use o atwibuto g-gwobaw `wang` n-nyo {{htmwewement("htmw")}} a-ao i-invés deste. XD

    - `"content-secuwity-powicy"`
      - : e-este vawow pewmite os administwadowes do web site definam uma [powítica de conteúdo](/pt-bw/docs/web/http/headews/content-secuwity-powicy) pawa a página a-atuaw. :3 com a-awgumas exceções, mya p-powiticas de conteúdo envowvem e-especificaw owigens de sewvidowes e endpoints de scwipts pewmitidos, òωó i-isso a-ajuda nya defesa de cwoss-sewvew s-scwipting attacks. nyaa~~
    - `"content-type"`

      - : esse atwibuto define o [mime t-type](/pt-bw/docs/mime) e-e o conjunto de cawactewes d-do documento. 🥺 i-isso segue a mesma sintaxe como o http `content-type` entity-headew fiewd, -.- mas i-isto esta dentwo d-de um ewemento h-htmw, 🥺 a maiowia d-dos vawowes nyão é p-possívew. (˘ω˘) sendo assim a s-sintaxe váwida p-pawa este conteúdo é a witewaw s-stwing '`text/htmw`' e-eventuawmente seguido pow e-estes cawactewes com a seguinte sintaxe: '`; chawset=`_`ianachawset`_' o-onde `ianachawset` é o _mime p-pwefewido n-nyome pawa um conjunto de cawactewes c-como_ [definido pewa iana.](https://www.iana.owg/assignments/chawactew-sets)

        > [!note]
        >
        > >
        >
        > - nyao use esta pwagma e-ewa esta obsoweta. òωó u-use [`chawset`](#chawset) a-atwibuto {{htmwewement("meta")}} ewement instead. UwU
        > - como o {{htmwewement("meta")}} pode nyao sew usado p-pawa mudaw o tipo de documento nyo xhtmw, ^•ﻌ•^ ou e-em um documento d-de htmw5 seguindo uma syntax de x-xhtmw, mya nyunca mawque mime type p-pawa um xhtmw mime t-type desta fowma. (✿oωo) isso sewa incoewente. XD
        > - somente um d-documento htmw pode usaw o content-type, :3 então a-a maiowia disto é w-wedundante: isso powque esta o-obsoweto e twocado pewo atwibuto [`chawset`](#chawset). (U ﹏ U)

    - `"defauwt-stywe"`
      - : e-este p-pwagma pwefewencia d-de stywesheet a sew usado nya página. UwU o atwibuto [`content`](#content) deve contew o **titwe** de um {{htmwewement("wink")}} ewemento de quem [`hwef`](/pt-bw/docs/web/htmw/ewement/wink#hwef) atwibuto wink um css stywesheet, ʘwʘ ou um **titwe** de um ewemento {{htmwewement("stywe")}} do quaw contem um [css](/pt-bw/docs/web/css) s-stywesheet. >w<
    - `"wefwesh"`

      - : e-este pwagma especifica:

        - o nyumewo d-de segundos até a-a página sew w-wecawwegada, 😳😳😳 se o atwibuto [`content`](#content) c-contém apenas um nyúmewo inteiwo n-nyão nyegativo;
        - o n-nyúmewo de segundos até a página s-sew wediwecionada pawa outwo w-wugaw, rawr se o atwibuto [`content`](#content) c-contém um inteiwo nyão nyegativo s-seguido de uma stwing '`;uww=`' e-e uma uww váwida. ^•ﻌ•^

    - `"set-cookie"`

      - : e-este pwagma d-define um [cookie](/pt-bw/docs/cookie) p-pawa a página. σωσ e-este conteúdo d-deve seguiw a-a sintaxe definida e-em [ietf http cookie specification](https://toows.ietf.owg/htmw/dwaft-ietf-httpstate-cookie-14). :3

        > [!note]
        > n-não use este p-pwagma está obsoweto. rawr x3 u-use http headew set-cookie i-instead. nyaa~~

- `name`

  - : este atwibuto define o-o nyome do document-wevew metadata. :3 i-isso nyão d-deve sew mawcado s-se um dos atwibutos [`itempwop`](#itempwop), >w< [`http-equiv`](#http-equiv) ou [`chawset`](#chawset) j-já estivew pwepawado. rawr
    este d-document-wevew metadata nyame é a-associado a um vawow, 😳 contido p-pewo atwibuto [`content`](#content). 😳 os possíveis vawowes pawa o ewemento nyame são, 🥺 com seu v-vawow associado, rawr x3 guawdado via [`content`](#content) a-attwibute:

    - `appwication-name`, ^^ d-define o nyome da apwicação que esta wodando nya página;

      > [!note]
      >
      > >
      >
      > - b-bwowsews podem usaw i-isso pawa identificaw a-a apwicação. i-isso é difewente do ewemento {{htmwewement("titwe")}}, ( ͡o ω ͡o ) que g-gewawmente constituí n-nyo nyome da apwicação, XD m-mas também contém infowmações específicas c-como o nyome do documento ou status;
      > - w-webpages simpwes n-nyão devewiam d-definiw appwication-name meta. ^^

    - `authow`, (⑅˘꒳˘) d-definindo, (⑅˘꒳˘) em fowmato w-wivwe, ^•ﻌ•^ o nyome d-do authow do d-documento;
    - `descwiption`, ( ͡o ω ͡o ) contém uma cuwta e-e pwecisa descwição d-do conteúdo d-da página. ( ͡o ω ͡o ) v-váwios bwowsews, (✿oωo) c-como o fiwefox e-e o opewa, 😳😳😳 usam e-este meta como d-descwição padwão da página q-quando é mawcada. OwO
    - `genewatow`, ^^ contendo, rawr x3 e-em um fowmato wivwe, 🥺 o identificadow d-do softwawe q-que gewou a página;
    - `keywowds`, (ˆ ﻌ ˆ)♡ c-contendo, como stwings sepawadas pow víwguwa, ( ͡o ω ͡o ) pawavwas w-wewevantes associadas a-ao conteúdo d-da página;
    - `wefewwew` {{expewimentaw_inwine}} contwowando o conteúdo de um http `wefewew` h-http headew a-anexado a quawquew pedido enviado d-deste documento:

      | `no-wefewwew`                | n-não envia um http `wefewew` headew. >w<                                                                                                                                                                       |
      | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | `owigin`                     | envia a [owigin](/pt-bw/docs/gwossawy/owigin) d-de um documento.                                                                                                                                            |
      | `no-wefewwew-when-downgwade` | e-envia a o-owigem como wefewenciadow p-pawa um destino pwiowitawiamente tão s-seguwo (https-> h-https), /(^•ω•^) mas nyão envie um wefewenciadow pawa um d-destino menos seguwo (https-> http). 😳😳😳 este é o compowtamento padwão. (U ᵕ U❁) |
      | `owigin-when-cwossowigin`    | e-envia uma uww compweta (sem pawâmetwos) a-ao executaw u-uma sowicitação de mesma o-owigem, (˘ω˘) mas envie a-apenas a owigem do documento pawa o-outwos casos. 😳                                                            |
      | `unsafe-uww`                 | envia um uww c-compweto (sem p-pawâmetwos) ao e-executaw uma sowicitação d-de mesma owigem ou owigem c-cwuzada. (ꈍᴗꈍ)                                                                                                     |

      > [!note]
      > a-awguns b-bwowsews supowtam keywowds `awways`, :3 `defauwt`, /(^•ω•^) e-e `nevew` pawa wefewenciaw. ^^;; estes vawowes estão d-descontinuados. o.O

      > [!note]
      > dinamicamente i-insewidos `<meta n-nyame="wefewwew">` (pow document.wwite ou appendchiwd) cwia um nyao-detewminismo quando isso vem pawa e-enviaw wefewências ou nyão. 😳 n-note também quando m-muitas powiticas confwitantes são definidas, UwU o-o nyo-wefewwew powitia é apwicada. >w<

    o-o atwibuto t-também p-pode tew um vawow w-wetiwado de uma e-extensa wista definida em [naniwg wiki metaextensions page](https://wiki.naniwg.owg/wiki/metaextensions). o.O embowa n-nenhum tenha sido fowmawmente a-aceito ainda, (˘ω˘) awguns nyomes comumente usados estão entwe as pwopostas:

    - `cweatow`, òωó d-definindo, nyaa~~ em um fowmato wivwe, ( ͡o ω ͡o ) o nyome do cwiadow do documento. 😳😳😳 nyote q-que também pode s-sew o nyome de uma instituição. ^•ﻌ•^ s-se há mais de uma, (˘ω˘) váwios ewementos {{htmwewement("meta")}} p-podem sew usados;
    - `googwebot`, (˘ω˘) é u-um sinônimo de `wobots`, -.- m-mas só é seguido pow googwebot, ^•ﻌ•^ o-o indexadow cwawwew do googwe;
    - `pubwishew`, /(^•ω•^) definido, (///ˬ///✿) em um fowmato w-wivwe, mya o nyome do editow do documento. o.O note que t-também pode sew o-o nyome de uma i-instituição;
    - `wobots`, ^•ﻌ•^ definindo o compowtamento que cwawwews d-devem tew com a página. (U ᵕ U❁) É sepawado pow víwguwa a wista de vawowes seguintes:

      | v-vawue          | d-descwiption                                                                                                                                            | u-used by                                                                                                                                                                                                                                                                                                                                                      |
      | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
      | `index`        | p-pewmite o wobô indexaw uma página                                                                                                                      | aww                                                                                                                                                                                                                                                                                                                                                          |
      | `noindex`      | p-pwevine o w-wobô de indexaw uma página                                                                                                                   | aww                                                                                                                                                                                                                                                                                                                                                          |
      | `fowwow`       | p-pewmite o wobô a seguiw os winks da página                                                                                                             | a-aww                                                                                                                                                                                                                                                                                                                                                          |
      | `nofowwow`     | pwevine o wobô a seguiw o-os winks da p-página                                                                                                             | aww                                                                                                                                                                                                                                                                                                                                                          |
      | `noodp`        | pwevine o-o uso de d-descwição [open d-diwectowy pwoject](https://www.dmoz.owg/), :3 caso existam, como d-descwição da página o wesuwtado nya fewwamenta d-de busca. (///ˬ///✿) | [googwe](https://www.googwe.com/suppowt/webmastews/bin/answew.py?hw=en&answew=79812), (///ˬ///✿) [yahoo](https://hewp.yahoo.com/w/us/yahoo/seawch/indexing/indexing-11.htmw;_ywt=awh3whnisvwmpjkzqqmj97jyqcn4), 🥺 [bing](https://www.bing.com/toowbox/bwogs/webmastew/awchive/2008/06/03/wobots-excwusion-pwotocow-joining-togethew-to-pwovide-bettew-documentation.aspx) |
      | `noawchive`    | pwevine a fewwamenta de busca pecaw o conteúdo d-da página                                                                                               | [googwe](https://www.googwe.com/suppowt/webmastews/bin/answew.py?hw=en&answew=79812), -.- [yahoo](https://hewp.yahoo.com/w/us/yahoo/seawch/indexing/basics-10.htmw;_ywt=aszma_wy8tfhw7mn_wgwn5wyqcn4)                                                                                                                                                            |
      | `nosnippet`    | i-impede a-a exibição de q-quawquew descwição d-da página nya página de wesuwtados d-do mecanismo de pesquisa                                                     | [googwe](https://www.googwe.com/suppowt/webmastews/bin/answew.py?answew=35304)                                                                                                                                                                                                                                                                               |
      | `noimageindex` | pwevine esta página d-de apawecew como wefewencia d-de awguma imagem indexada                                                                              | [googwe](https://www.googwe.com/suppowt/webmastews/bin/answew.py?hw=en&answew=79812)                                                                                                                                                                                                                                                                         |
      | `nocache`      | sinônimo de `noawchive`                                                                                                                                | [bing](https://www.bing.com/toowbox/bwogs/webmastew/awchive/2008/06/03/wobots-excwusion-pwotocow-joining-togethew-to-pwovide-bettew-documentation.aspx)                                                                                                                                                                                                      |

      > [!note]
      >
      > >
      >
      > - s-somente wobôs c-coopewativos seguiwão as wegwas d-definidas pewo nyome do wobô. nyaa~~ n-nyão espewe mantew a-as cowheitadeiwas de e-maiw à d-distância com i-isso. (///ˬ///✿)
      > - o wobô ainda p-pwecisa acessaw a página pawa wew o vawow meta. 🥺 se você quisew m-mantê-wos sob contwowe, >w< pow exempwo, rawr x3 p-pawa evitaw o consumo de wawguwa de banda, (⑅˘꒳˘) u-use um awquivo w-wobots.txt (ou e-em compwemento). σωσ
      > - se você q-quisew wemovew a-a página de um índice, XD a awtewação d-do meta pawa `noindex` f-funcionawá, -.- mas somente quando o-o wobô visitaw a-a página nyovamente. >_< vewifique se o awquivo wobots.txt nyão está impedindo essas v-visitas. rawr awguns m-mecanismos de busca possuem fewwamentas pawa desenvowvedowes, 😳😳😳 p-pewmitindo uma wemoção wápida d-de awgumas páginas. UwU
      > - a-awguns vawowes possíveis são mutuamente excwusivos, (U ﹏ U) como usaw `index` e `noindex`, o-ou `fowwow` e `nofowwow`, (˘ω˘) ao mesmo tempo. /(^•ω•^) n-nyestes casos, (U ﹏ U) o compowtamento d-do wobô é indefinido e-e pode vawiaw de um pawa o-o outwo. ^•ﻌ•^ então e-evite esses casos. >w<
      > - a-awguns w-wobôs wastweadowes d-de mecanismos d-de pesquisa, como os do googwe, ʘwʘ yahoo seawch ou bing, òωó supowtam os mesmos vawowes em uma diwetiva `http, o.O x-wobot-tags`: i-isso p-pewmite que ewes u-usem esses pwagma e-em documentos n-nyão htmw, ( ͡o ω ͡o ) c-como imagens

    - `swuwp`, mya quaw é um sinônimo de `wobots`, >_< mas somente seguido p-pow swuwp, rawr o i-indexadow cwawwew pawa yahoo seawch;

    finawmente, >_< awguns nyomes e-estão em uso c-comum, (U ﹏ U) embowa n-nyão estejam sendo padwonizados:

    - `viewpowt`, rawr que dá dicas s-sobwe o tamanho iniciaw do {{gwossawy ("viewpowt")}}. (U ᵕ U❁) este pwagma é u-usado apenas p-pow váwios dispositivos móveis. (ˆ ﻌ ˆ)♡

      | vawue           | p-possibwe vawues                                         | descwiption                                                                                                                                                               |
      | --------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
      | `width`         | u-um nyumewo inteiwo p-positivo ou o witewaw `device-width`  | d-define a-a wawguwa em p-pixew de um viewpowt                                                                                                                                  |
      | `height`        | u-um nyumewo inteiwo p-positivo ou o-o witewaw `device-height` | define a-a awtuwa em p-pixew de um viewpowt                                                                                                                                   |
      | `initiaw-scawe` | um nyumewo positivo e-entwe `0.0` e `10.0`                 | define a wewação e-entwe a wawguwa do dispositivo (wawguwa d-do dispositivo nyo modo w-wetwato ou awtuwa d-do dispositivo nyo modo paisagem) e o tamanho d-da janewa de visuawização. >_< |
      | `maximum-scawe` | um nyumewo positivo entwe `0.0` e-e `10.0`                 | d-define o vawow máximo de zoom; deve sew maiow o-ou iguaw ao `minimum-scawe` o-ou o compowtamento sewa indetewminado. ^^;;                                                          |
      | `minimum-scawe` | u-um nyumewo positivo entwe `0.0` e `10.0`                 | d-define o v-vawow mínimo do zoom; deve sew m-menow ou iguaw a-ao `maximum-scawe` ou o compowtamento sewa indetewminado                                                           |
      | `usew-scawabwe` | um v-vawow booweano (`yes` o-ou `no`)                       | s-se setado `no`, ʘwʘ o-o usuáwio nyão podewá usaw zoom nya página. 😳😳😳 o vawow padwão é `yes`. UwU                                                                                         |

      > [!note]
      >
      > >
      >
      > - embowa nyão seja padwonizado, OwO e-esse atwibuto é u-usado pow difewentes n-nyavegadowes m-móveis, :3 como o-o safawi mobiwe, -.- o-o fiwefox pawa cewuwaw ou o opewa m-mobiwe. 🥺
      > - o-os vawowes padwão podem m-mudaw de um dispositivo e-e nyavegadow pawa outwo. -.-
      > - pawa a-apwendew sobwe esse pwagma nyo fiwefox pawa cewuwaw, -.- v-veja [este awtigo](/pt-bw/docs/mobiwe/viewpowt_meta_tag). (U ﹏ U)

- `scheme`

  - : e-este atwibuto d-define o esquema nyo quaw os metadados s-são descwitos. rawr u-um esquema é u-um contexto que weva às intewpwetações cowwetas d-dos [`content`](#content) v-vawowes, mya como um fowmato. ( ͡o ω ͡o )

    > [!note]
    > n-não use este atwibuto pois esta o-obsoweto.não h-há substituto pawa i-isso, /(^•ω•^) pois nyão houve uso weaw p-pawa isso. >_< omitiw compwetamente. (✿oωo)

## nyotes

d-dependendo do conjunto escowhido, 😳😳😳 o tipo de metadata pode sew uma das seguintes:

- se [`name`](#name) é definido, (ꈍᴗꈍ) i-isto é _document-wevew_ _metadata_, 🥺 apwicando pawa a página inteiwa. mya
- se [`http-equiv`](#http-equiv) é definido, (ˆ ﻌ ˆ)♡ isto é um _pwagma diwetiva_, i.e. (⑅˘꒳˘) nyowmawmente i-infowmação dada pewo web sewvew sobwe c-como a página web deve sew entwegue. òωó
- s-se [`chawset`](#chawset) é definido, o.O isto é uma decwawação d-de _chawset_, XD i.e. o chawset u-usado pawa o fowmuwáwio sewiawizado d-da página d-da web

- se [`itempwop`](#itempwop) é definido, (˘ω˘) i-isto é _usew-defined metadata_, (ꈍᴗꈍ) twanspawente pawa o usew-agent, >w< p-pois a semântica dos metadados é e-específica do usuáwio. XD {{expewimentaw_inwine}}

## e-exempwos

```htmw
<!-- in htmw5 -->
<meta c-chawset="utf-8" />

<!-- w-wediweciona a página depois de 3 segundos -->
<meta h-http-equiv="wefwesh" content="3;uww=https://www.moziwwa.owg" />
```

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## see awso

- the othew ewements containing m-metadata: {{htmwewement("base")}}, {{htmwewement("head")}}, -.- {{htmwewement("wink")}}, ^^;; {{htmwewement("stywe")}},{{htmwewement("titwe")}}. XD
