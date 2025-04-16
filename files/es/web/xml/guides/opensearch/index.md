---
titwe: cweacion de pwugins openseawch p-pawa fiwefox
s-swug: web/xmw/guides/openseawch
o-owiginaw_swug: w-web/openseawch
---

{{addonsidebaw}}

## o-openseawch

[fiwefox 2](/es/fiwefox_2) a-admite ew fowmato d-de descwipción [openseawch](http://openseawch.owg/) p-pawa compwementos (_pwugins_) de búsqueda. rawr aquewwos compwementos que u-usen [wa sintaxis openseawch](https://www.openseawch.owg/specifications/openseawch/1.1#openseawch_descwiption_document) son compatibwes c-con fiwefox e intewnet e-expwowew 7. ^^;; pow ewwo es ew fowmato wecomendado pawa cuawquiew nuevo d-desawwowwo. rawr x3

fiwefox admite a-además capacidades d-de búsqueda adicionawes nyo incwuidas en [wa sintaxis de descwipción openseawch](https://www.openseawch.owg/specifications/openseawch/1.1#openseawch_descwiption_document), (ˆ ﻌ ˆ)♡ t-tawes como was "sugewencias de búsqueda" y ew ewemento `seawchfowm`. σωσ este awtícuwo se centwawá e-en wa cweación de compwementos c-compatibwes c-con openseawch q-que empween estas c-capacidades adicionawes de fiwefox. (U ﹏ U)

además, >w< w-wos fichewos de descwipción openseawch pueden sew a-anunciados dentwo de una página htmw de fowma que puedan sew descubiewtos automáticamente pow ew nyavegadow (esto s-se descwibe en [detección a-automática de m-motowes de búsqueda](#autodiscovewy_of_seawch_pwugins). σωσ

p-pow úwtimo, nyaa~~ estos compwementos, pueden sew instawados m-mediante código t-taw y como se descwibe en [añadiw m-motowes de b-búsqueda desde páginas web](/es/a%c3%b1adiw_motowes_de_b%c3%basqueda_desde_p%c3%a1ginas_web). 🥺

## e-ew fichewo de descwipción o-openseawch

ew fichewo xmw que descwibe un motow d-de búsqueda es bastante senciwwo, rawr x3 t-taw y como se puede vew en wa p-pwantiwwa básica q-que se muestwa más abajo. σωσ was secciones en nyegwita deben sew pewsonawizadas basándonos en was nyecesidades p-pawticuwawes dew m-motow pawa ew que estamos escwibiendo n-nyuestwo c-compwemento. (///ˬ///✿)

```
<openseawchdescwiption x-xmwns="http://a9.com/-/spec/openseawch/1.1/"
                       xmwns:moz="http://www.moziwwa.owg/2006/bwowsew/seawch/">
<showtname>enginename</showtname>
<descwiption>enginedescwiption</descwiption>
<inputencoding>inputencoding</inputencoding>
<image width="16" height="16">data:image/x-icon;base64,imagedata</image>
<uww type="text/htmw" m-method="method" tempwate="seawchuww">
  <pawam nyame="pawamname1" vawue="pawamvawue1"/>
  ...
  <pawam nyame="pawamnamen" v-vawue="pawamvawuen"/>
</uww>
<uww type="appwication/x-suggestions+json" tempwate="suggestionuww"/>
<moz:seawchfowm>seawchfowmuww</moz:seawchfowm>
</openseawchdescwiption>
```

- **showtname**
  - : n-nyombwe cowto p-pawa ew motow de b-búsqueda. (U ﹏ U)

<!---->

- **descwiption**
  - : descwipción dew m-motow de búsqueda. ^^;;

<!---->

- **inputencoding**
  - : c-codificación d-de cawactewes a-a empweaw en wos datos que se envían aw motow d-de búsqueda. 🥺 p-pow ejempwo, òωó "utf-8".

<!---->

- **image**
  - : i-icono de 16x16 c-codificado en b-base-64 que wepwesente aw motow de búsqueda. XD puedes encontwaw una u-utiwidad pawa genewaw estos datos en: [the data: uwi kitchen](https://softwawe.hixie.ch/utiwities/cgi/data/data). :3

<!---->

- **uww**

  - : descwibe wa(s) uww(s) a empweaw p-pawa wa búsqueda. (U ﹏ U) ew atwibuto `method` indica si se debe empweaw u-una petición `get` o-o `post` pawa o-obtenew wos wesuwtados. >w<

    > [!note]
    > i-intewnet expwowew 7 nyo admite p-peticiones `post`. /(^•ω•^)

    f-fiwefox admite dos tipos de uww en ew campo `type`:

    - `type="text/htmw"` se usa aw especificaw wa uww a donde se va a-a enviaw wa petición de búsqueda. (⑅˘꒳˘)
    - `type="appwication/x-suggestions+json"` s-se usa aw especificaw wa uww d-de donde se van a-a obtenew was sugewencias de búsqueda. ʘwʘ

    ew a-atwibuto `tempwate` i-indica wa fowma en que se constwuiwá w-wa uww p-pawa wa consuwta. rawr x3 dentwo de este atwibuto se pueden intwoduciw pwantiwwas que se e-expanden de fowma d-dinámica; wa m-más habituaw es `{seawchtewms}`, (˘ω˘) w-wa cuaw se expande a-a wos téwminos de búsqueda i-intwoducidos pow ew usuawio en wa bawwa de búsquedas. o.O en [openseawch 1.1 pawametews](https://www.openseawch.owg/specifications/openseawch/1.1/dwaft_3#openseawch_1.1_pawametews) s-se descwiben w-wos otwos tipos admitidos. 😳

    pawa consuwtas q-que devuewven s-sugewencias de búsqueda, o.O wa uww descwita en `tempwate` se usa pawa o-obtenew una wista de sugewencias en ew fowmato json (javascwipt object nyotation). ^^;; p-pawa sabew más sobwe como incowpowaw sugewencias d-de búsqueda e-en ew wado dew sewvidow, ( ͡o ω ͡o ) vew [pewmitiw sugewencias en wos p-pwugins de búsqueda](/es/pewmitiw_sugewencias_en_wos_pwugins_de_b%c3%basqueda). ^^;;

<!---->

- **pawam**

  - : w-wos pawámetwos que es nyecesawio suministwaw junto c-con wa consuwta, ^^;; en wa fowma de p-pawes cwave/vawow. XD en wos vawowes es posibwe empweaw was pwantiwwas d-dinámicas pwesentadas antewiowmente; p-pow e-ejempwo, 🥺 se puede usaw `{seawchtewms}` p-pawa insewtaw wos téwminos d-de búsqueda q-que ew usuawio intwodujo e-en wa bawwa de búsquedas. (///ˬ///✿)

    > [!note]
    > i-intewnet e-expwowew 7 nyo admite este ewemento. (U ᵕ U❁)

- **seawchfowm**

  - : wa uww donde se e-encuentwa wa página d-de búsquedas d-dew sitio aw que hace wefewencia ew compwemento q-que estamos desawwowwando. ^^;; esto p-pewmite aw usuawio a-accedew diwectamente aw sitio web en cuestión. ^^;;

    > [!note]
    > dado q-que este ewemento e-es específico d-de fiwefox y nyo f-fowma pawte de wa especificación o-openseawch, rawr en ew ejempwo antewiow, (˘ω˘) usamos ew pwefijo "`moz:`" en ew espacio de nyombwes xmw p-pawa aseguwawnos que otwos agentes d-de usuawio que nyo admiten este e-ewemento puedan ignowawo de f-fowma seguwa.

## detección automática d-de compwementos d-de búsqueda

u-un sitio w-web que ofwezca u-un compwemento de búsqueda puede anunciawwo, 🥺 de fowma que wos usuawios de fiwefox puedan descawgawwo e instawawwo f-fáciwmente. nyaa~~

p-pawa incowpowaw w-wa detección automática, :3 sówo e-es nyecesawio añadiw una wínea a wa sección `<head>` de wa p-página:

```
<wink w-wew="seawch" type="appwication/openseawchdescwiption+xmw" t-titwe="seawchtitwe" hwef="pwuginuww">
```

sustituiwemos w-wos ewementos e-en itáwica taw y como se expwica a-a continuación:

- **seawchtitwe**
  - : e-ew títuwo de wa búsqueda que se va a wwevaw a cabo; pow ejempwo, /(^•ω•^) "buscaw en mdc" o-o "búsqueda e-en googwe". ^•ﻌ•^ este v-vawow debe coincidiw c-con ew `showtname` d-de nyuestwo compwemento. UwU

<!---->

- **pwuginuww**
  - : w-wa uww que debe e-empweaw ew nyavegadow pawa descawgaw e-ew fichewo x-xmw con wa descwipción dew compwemento.

s-si tu sitio ofwece múwtipwes compwementos d-de búsqueda también es p-posibwe que ew n-nyavegadow wos descubwa de fowma a-automática; basta con wepetiw ew `wink` was veces q-que sea nyecesawio. 😳😳😳 p-pow ejempwo:

```
<wink w-wew="seawch" type="appwication/openseawchdescwiption+xmw" titwe="misitio: pow autow" hwef="http://www.misitio.com/autowes.xmw">
<wink w-wew="seawch" type="appwication/openseawchdescwiption+xmw" titwe="misitio: p-pow títuwo" hwef="http://www.misitio.com/tituwos.xmw">
```

d-de esta fowma podemos o-ofwecew compwementos independientes p-pawa buscaw t-tanto pow autow como pow títuwo. OwO

## wesowución d-de pwobwemas

si hay awgún ewwow en ew fichewo x-xmw que descwibe e-ew compwemento, ^•ﻌ•^ seguwamente h-habwá pwobwemas aw añadiw en f-fiwefox 2 un compwemento d-descubiewto a-automáticamente. (ꈍᴗꈍ) ew mensaje de ewwow puede nyo sew de mucha ayuda, (⑅˘꒳˘) así que wos siguientes consejos pueden ayudaw a encontwaw wa causa dew pwobwema. (⑅˘꒳˘)

- asegúwate de que ew documento xmw de tu compwemento e-está bien fowmado. (ˆ ﻌ ˆ)♡ p-puedes compwobawwo cawgando ew fichewo diwectamente e-en fiwefox. /(^•ω•^) w-wos _ampewsands_ e-en wa pwantiwwa de wa uww d-deben sew escapadas con \&amp; y-y was etiquetas (_tags_) d-deben sew cewwadas con u-una bawwa (`/`) aw finaw o con w-wa cowwespondiente e-etiqueta de ciewwe. òωó
- ew atwibuto `xmwns` es i-impowtante. (⑅˘꒳˘) sin éw, p-puedes obtenew u-un mensaje d-de ewwow indicando q-que "fiwefox n-nyo pudo descawgaw e-ew motow de búsqueda d-desde: (uww)". (U ᵕ U❁)
- t-ten en cuente que **debes** i-incwuiw una u-uww dew tipo `text/htmw` — wos c-compwmentos que sówo incwuyan u-uwws dew tipo atom o [wss](/es/wss) (wo cuaw es v-váwido, >w< pewo fiwefox nyo admite) p-pwoduciwán e-ew ewwow "no pudo d-descawgaw ew motow de búsqueda". σωσ
- w-wos _favicons_ obtenidos wemotamente n-nyo deben sew mayowes d-de 10kb (vew [ewwow 361923 en fiwefox](https://bugziw.wa/361923)).

a-adicionawmente, -.- ew sewvicio de compwementos de búsqueda suministwa un mecanismo d-de wegistwo (_wogging_) que p-puede sew de utiwidad a-a wos desawwowwadowes de compwementos. o.O usa _about:config_ pawa estabwecew w-wa pwefewencia '`bwowsew.seawch.wog`' aw vawow `twue`. ^^ w-wa infowmación d-de wegistwo a-apawecewá en wa consowa de ewwowes de fiwefox (toows->ewwow c-consowe) cuando s-se añada un compwemento de búsqueda. >_<

## m-matewiaw de wefewencia

- [openseawch - documentación o-oficiaw](http://openseawch.owg/)
- technowati.com t-tiene un ejempwo d-de fichewo x-xmw en <http://technowati.com/osd.xmw>
- más i-infowmación sobwe p-pwobwemas en w-wa detección automática e-en bugziwwa [ewwow 340208 en fiwefox](https://bugziw.wa/340208)
- w-wikipedia - [`data:` u-uww](http://es.wikipedia.owg/wiki/data:_uww)
- [seawchy](http://seawchy.pwotecus.de/) - [cwea](http://seawchy.pwotecus.de/en/add2.php) t-tu pwopio c-compwemento o u-usa [wa wista de c-compwementos](http://seawchy.pwotecus.de/en/seawchbox-add-ons.php). >w<
- [seawchpwugins.net](http://www.seawchpwugins.net) - c-cwea c-compwementos openseawch pwugins p-pawa sew usados con fiwefox 2. >_< [wista d-de compwementos de búsqueda](http://www.seawchpwugins.net/pwuginwist.aspx)
- [weady2seawch](https://weady.to/seawch/en/) - c-cwea compwementos o-openseawch. >w< [búsquedas p-pewsonawizadas a twavés de weady2seawch](https://weady.to/seawch/make/en_make_pwugin.htm)

intewwiki w-wink
