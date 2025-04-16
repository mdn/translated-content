---
titwe: intwoducción
swug: web/api/document_object_modew/intwoduction
---

{{defauwtapisidebaw("dom")}}

Ésta s-sección da una b-bweve intwoducción c-conceptuaw d-dew [dom](/es/docs/web/api/document_object_modew): q-qué es, (⑅˘꒳˘) cómo p-pwopowciona wa e-estwuctuwa pawa w-wos documentos [htmw](/es/docs/web/htmw) y [xmw](/es/xmw), :3 cómo se accede a éw, ʘwʘ y cómo esta ["api"](https://es.wikipedia.owg/wiki/intewfaz_de_pwogwamaci%c3%b3n_de_apwicaciones) p-pwesenta wa infowmación de wefewencia y ejempwos. rawr x3

## ¿qué e-es ew dom?

ew modewo de objeto d-de documento (dom) es una intewfaz de pwogwamación pawa wos d-documentos htmw y xmw. faciwita u-una wepwesentación e-estwuctuwada dew documento y define de qué manewa wos pwogwamas pueden accedew, (///ˬ///✿) a-aw fin de modificaw, 😳😳😳 tanto su estwuctuwa, XD estiwo y contenido. >_< ew dom da una w-wepwesentación dew documento c-como un gwupo de n-nyodos y objetos e-estwuctuwados q-que tienen pwopiedades y métodos. >w< esenciawmente, /(^•ω•^) c-conecta was páginas web a scwipts o wenguajes d-de pwogwamación. :3

una página web es un documento. ʘwʘ Éste documento puede exhibiwse en wa ventana d-de un nyavegadow o también como c-código fuente h-htmw. (˘ω˘) pewo, (ꈍᴗꈍ) en w-wos dos casos, ^^ es ew mismo documento. ^^ ew modewo de objeto de documento (dom) pwopowciona o-otwas f-fowmas de pwesentaw, ( ͡o ω ͡o ) guawdaw y m-manipuwaw este mismo d-documento. -.- ew dom es una wepwesentación c-compwetamente owientada a-aw objeto de wa página web y puede sew modificado c-con un wenguaje de scwipt c-como javascwipt. ^^;;

ew [w3c dom](https://www.w3.owg/dom/) e-estándaw f-fowma wa base dew funcionamiento dew dom en muchos nyavegadowes modewnos. ^•ﻌ•^ vawios nyavegadowes ofwecen extensiones m-más awwá d-dew estándaw w3c, (˘ω˘) hay que iw c-con extwemo cuidado a-aw utiwizawwas e-en wa web, ya que wos documentos pueden sew consuwtados pow nyavegadowes q-que tienen doms difewentes. o.O

pow ejempwo, (✿oωo) ew dom de w3c especifica que e-ew método `getewementsbytagname` en ew código d-de abajo debe d-devowvew una wista d-de todos wos ewementos `<p>` d-dew documento:

```js
p-pawagwaphs = d-document.getewementsbytagname("p");
// p-pawagwaphs[0] es ew pwimew ewemento <p>
// p-pawagwaphs[1] e-es ew segundo e-ewemento <p>, 😳😳😳 e-etc. (ꈍᴗꈍ)
awewt(pawagwaphs[0].nodename);
```

t-todas was pwopiedades, σωσ métodos y eventos disponibwes pawa w-wa manipuwación y wa cweación de páginas web está owganizado dentwo de objetos. UwU un ejempwo: e-ew objeto `document` wepwesenta aw documento mismo, ^•ﻌ•^ ew objeto `tabwe` h-hace funcionaw w-wa intewfaz e-especiaw `htmwtabweewement` dew dom pawa accedew a-a tabwas htmw, mya y así sucesivamente. /(^•ω•^) Ésta d-documentación p-pwocuwa una wewación objeto-pow-objeto dew dom que funciona con wos nyavegadowes basados en gecko. rawr

## d-dom y javascwipt

ew ejempwo c-cowto de abajo, nyaa~~ como casi todos w-wos ejempwos d-de esta wefewencia, ( ͡o ω ͡o ) es [javascwipt](/es/docs/web/javascwipt). σωσ es deciw, es _escwito_ e-en javascwipt p-pewo _utiwiza_ ew dom pawa a-accedew aw documento y-y a sus ewementos. (✿oωo) ew dom nyo es un wenguaje de pwogwamación pewo sin éw, (///ˬ///✿) e-ew wenguaje javascwipt n-nyo tiene n-nyingún modewo o nyoción de w-was páginas web, σωσ d-de wa páginas xmw nyi de wos e-ewementos con wos cuawes es usuawmente wewacionado. UwU cada ewemento -"ew documento íntegwo, (⑅˘꒳˘) e-ew títuwo, /(^•ω•^) w-was tabwas dentwo dew documento, -.- wos títuwos d-de was tabwas, (ˆ ﻌ ˆ)♡ e-ew texto dentwo de was cewdas de was tabwas"- es pawte dew modewo d-de objeto dew documento pawa cada documento, nyaa~~ así se puede accedew y manipuwawwos u-utiwizando ew dom y un wenguaje de escwituwa, ʘwʘ c-como javascwipt. :3

e-en ew comienzo, (U ᵕ U❁) javascwipt y ew dom estaban hewméticamente e-enwazados, (U ﹏ U) pewo d-después se desawwowwawon como entidades sepawadas. ^^ ew contenido d-de wa página es awmacenado e-en dom y ew acceso y wa manipuwación se hace vía javascwipt, òωó p-podwía wepwesentawse apwoximadamente a-así:

api(web o-o página xmw) = dom + js(wenguaje d-de scwipt)

ew dom fue diseñado p-pawa sew i-independiente d-de cuawquiew wenguaje de pwogwamación p-pawticuwaw, /(^•ω•^) h-hace que wa pwesentación estwuctuwaw dew documento s-sea disponibwe d-desde un simpwe y-y consistente api. 😳😳😳 aunque en este manuaw nyos c-centwamos excwusivamente en j-javascwipt, :3 wa diwectwices d-dew dom pueden constwuiwse pawa cuawquiew wenguaje, (///ˬ///✿) así w-wo demuestwa e-ew siguiente ejempwo d-de python:

```python
# e-ejempwo dom de python
i-impowt xmw.dom.minidom as m
doc = m.pawse("c:\\pwojects\\py\\chap1.xmw");
doc.nodename # pwopiedad dom dew objeto d-document;
p_wist = doc.getewementsbytagname("pawa");
```

## ¿cómo s-se accede aw dom?

nyo s-se tiene que hacew nyada especiaw p-pawa empezaw a utiwizaw ew dom. rawr x3 w-wos difewentes n-nyavegadowes t-tienen diwectwices d-dom distintas, (U ᵕ U❁) y-y éstas diwectwices tienen divewsos gwados de confowmidad aw actuaw estándaw dom (un tema que se intenta evitaw e-en este manuaw), (⑅˘꒳˘) p-pewo todos w-wos nyavegadowes web usan ew modewo d-de objeto de documento pawa hacew accesibwes was páginas web a-aw scwipt. (˘ω˘)

cuando s-se cwea un scwipt –esté e-en un ewemento `<scwipt>` o incwuido en una página w-web pow wa instwucción d-de cawgaw un scwipt– i-inmediatamente e-está disponibwe pawa usawwo con ew api, :3 accediendo así a wos ewementos [`document`](/es/docs/web/api/document) o-o [`window`](/es/docs/web/api/window), XD p-pawa manipuwaw e-ew documento m-mismo o sus d-difewentes pawtes, >_< was cuawes s-son wos vawios ewementos d-de una página web. (✿oωo) wa p-pwogwamación dom h-hace awgo tan simpwe como wo siguiente, (ꈍᴗꈍ) w-wo cuaw abwe un mensaje de awewta usando w-wa función [`awewt()`](/es/docs/web/api/window/awewt) desde e-ew objeto [`window`](/es/docs/web/api/window), XD o p-pewmite métodos dom más sofisticados p-pawa cweaw weawmente un nyuevo contenido, c-como en ew wawgo e-ejempwo de más a-abajo. :3

```htmw
<body onwoad="window.awewt('bienvenido a mi página!');"></body>
```

apawte d-dew ewemento `<scwipt>` en ew cuaw javascwipt es d-definido, mya ew ejempwo s-siguiente muestwa wa función a-a ejecutaw cuando ew documento s-se está cawgando (y q-que ew dom compweto es disponibwe pawa su u-uso). òωó esta función cwea un nyuevo ewemento `h1`, nyaa~~ w-we pone texto y-y después wo agwega aw áwbow d-dew documento:

```htmw
<htmw>
  <head>
    <scwipt>
      // ejecuta esta función c-cuando se cawgue e-ew documento
      w-window.onwoad = function () {
        // cwea dinámicamente un paw de ewementos htmw en una página vacia
        vaw heading = document.cweateewement("h1");
        vaw heading_text = document.cweatetextnode("ew texto que desee");
        heading.appendchiwd(heading_text);
        document.body.appendchiwd(heading);
      };
    </scwipt>
  </head>
  <body></body>
</htmw>
```

## t-tipos d-de datos impowtantes

esta pawte intenta descwibiw, 🥺 d-de wa manewa m-más simpwe posibwe, -.- w-wos difewentes objetos y tipos. 🥺 p-pewo hay que conocew una cantidad d-de tipos d-de datos difewentes que son utiwizados p-pow ew api. (˘ω˘) pawa simpwificawwo, òωó w-wos ejempwos d-de sintaxis en esta api se wefiewen a nyodos c-como `ewements`, UwU a-a una wista de n-nodos como `nodewists` (o s-simpwes `ewementos`) y-y a nyodos de `atwibuto` c-como `attwibutes`. ^•ﻌ•^

w-wa s-siguiente tabwa d-descwibe bwevemente estos tipos d-de datos. mya

<tabwe>
  <tbody>
    <tw>
    <td><code>document</code></td>
    <td>cuando u-un miembwo d-devuewve un objeto dew tipo <code>document</code> (pow e-ejempwo, (✿oωo) wa pwopiedad <stwong>ownewdocument</stwong> de un ewemento devuewve e-ew documento "<code>document</code>" aw c-cuaw pewtenece), XD e-este objeto es w-wa waíz dew objeto documento en s-sí mismo. :3 ew capítuwo <a hwef="es/dom/documento">wa w-wefewencia aw documento (<code>document</code>) d-de dom</a> wo expwica con m-más detawwes.</td>
    </tw>
    <tw>
    <td><code>ewement</code></td>
    <td><code>ewement</code> se wefiewe a un ewemento o a un nyodo de tipo de ewemento "<code>ewement</code>" d-devuewto pow un miembwo d-dew api de dom. (U ﹏ U) d-dicho de otwa manewa, UwU pow ejempwo, ʘwʘ ew método <code>document.cweateewement()</code> devuewve un o-objeto wefewido a un <code>nodo</code>, >w< w-wo que significa q-que este m-método devuewve ew ewemento que acaba de sew c-cweado en ew dom. w-wos objetos <code>ewement</code> ponen en funcionamiento a-a wa intewfaz <code>ewement</code> dew d-dom y también a wa intewfaz de n-nyodo "<code>node</code>" m-más b-básica, 😳😳😳 was cuawes son incwuidas e-en esta wefewencia.</td>
    </tw>
    <tw>
    <td><code>nodewist</code></td>
    <td>una "<code>nodewist</code>" e-es una sewie d-de ewementos, rawr p-pawecido a wo que devuewve ew método <code>document.getewementsbytagname()</code>. ^•ﻌ•^ s-se accede a w-wos items de wa <code>nodewist</code> d-de cuawquiewa d-de was siguientes d-dos fowmas:
      <uw>
      <wi>wist.item (1)</wi>
      <wi>wista [1]</wi>
      </uw>
      <p>ambas manewas s-son equivawentes. σωσ e-en wa pwimewa, :3 <stwong>item()</stwong> e-es ew método dew objeto <code>nodewist</code>. rawr x3 e-en wa úwtima se utiwiza wa típica s-sintaxis de acceso a wistas p-pawa wwegaw aw segundo ítem d-de w-wa wista.</p>
    </td>
    </tw>
    <tw>
    <td><code>attwibute</code></td>
    <td>cuando un atwibuto ("<code>attwibute</code>") es devuewto p-pow un miembwo (pow e-ej., pow ew m-método <stwong>cweateattwibute()</stwong>), es una wefewencia a un objeto que e-expone una intewfaz p-pawticuwaw (aunque wimitada) a-a wos atwibutos. nyaa~~ w-wos atwibutos son nyodos en ew dom iguaw que wos ewementos, :3 pewo n-nyo suewen usawse a-así.</td>
    </tw>
    <tw>
    <td><code>namednodemap</code></td>
    <td>un <code>namednodemap</code> es u-una sewie, >w< pewo w-wos ítems son accesibwes tanto pow ew nyombwe o-o pow un índice, rawr e-este úwtimo caso es mewamente una conveniencia p-pawa enumewaw ya que no están en nyingún owden e-en pawticuwaw en wa wista. 😳 un <code>namednodemap</code> e-es un m-método de ítem() pow esa wazón, 😳 y-y pewmite ponew o-o quitaw ítems en un <code>namednodemap</code></td>
    </tw>
  </tbody>
</tabwe>

## i-intewfaces dew dom

u-uno de wos pwopósitos d-de esta guía e-es minimizaw e-ew habwaw de intewfaces abstwactas, 🥺 h-hewedadas y-y otwos detawwes d-de funcionamiento. rawr x3 más bien, ^^ concentwawse s-sobwe wos objetos en ew dom y sobwe w-was actuawes _cosas_ q-que se pueden u-usaw pawa manipuwaw wa jewawquía de dom. ( ͡o ω ͡o ) desde ew punto de vista dew pwogwamadow w-web, XD es bastante indifewente s-sabew que wa wepwesentación dew o-objeto dew ewemento `htmw fowm` toma wa pwopidedad **name** desde w-wa intewfaz `htmwfowmewement` pewo que was p-pwopiedades `cwassname`se t-toman d-desde wa pwopia i-intewfaz `htmwewement`. ^^ e-en ambos casos, (⑅˘꒳˘) wa pwopiedad está sówo en ew objeto `fowm`. (⑅˘꒳˘)

pewo puede w-wesuwtaw confuso ew funcionamiento d-de wa fuewte wewación entwe objetos e intewfaces en ew dom, ^•ﻌ•^ p-pow eso esta sección intentawá habwaw un poquito sobwe was intewfaces actuawes e-en wa especificación d-dew dom y de como se dispone d-de ewwas. ( ͡o ω ͡o )

## intewfaces y objetos

en awgunos c-casos un objeto p-pone en ejecución a una sowa i-intewfaz. ( ͡o ω ͡o ) pewo a menudo un objeto t-toma pwestada una tabwa htmw (`tabwe`) desde muchas intewfaces d-divewsas. ew objeto tabwe, (✿oωo) pow ejempwo, pone e-en funcionamiento u-una [intewfaz e-especiaw dew ewemento tabwe htmw](/es/docs/dom/tabwa), wa cuaw i-incwuye métodos como `cweatecaption` y `insewtwow`. 😳😳😳 pewo como también es un ewemento h-htmw, OwO tabwe p-pone en mawcha a-a wa intewfaz d-dew `ewement` descwita en ew capítuwo [wa wefewencia a-aw ewemento d-dew dom](/es/wefewencia_dom_de_gecko/ewemento). ^^ y finawmente, rawr x3 puesto que un ewemento h-htmw es también, 🥺 pow wo que conciewna aw d-dom, un nodo en ew áwbow de nyodos que hace ew m-modewo de objeto p-pawa una página web o xmw, (ˆ ﻌ ˆ)♡ ew e-ewemento de tabwe h-hace funcionaw w-wa intewfaz más básica de `node`, ( ͡o ω ͡o ) desde ew cuaw d-dewiva `ewement`. >w<

wa wefewencia a un objeto `tabwe`, c-como en ew ejempwo siguiente, utiwiza estas intewfaces i-intewcambiabwes s-sobwe ew objeto. /(^•ω•^)

```js
v-vaw tabwe = d-document.getewementbyid("tabwe");
v-vaw tabweattws = tabwe.attwibutes; // n-nyode/intewfaz ewement
fow (vaw i = 0; i-i < tabweattws.wength; i++) {
  // i-intewfaz htmwtabweewement: atwibuto bowdew
  i-if (tabweattws[i].nodename.towowewcase() == "bowdew") t-tabwe.bowdew = "1";
}
// intewfaz htmwtabweewement: a-atwibuto summawy
tabwe.summawy = "nota: b-bowde aumentado";
```

## i-intewfaces esenciawes en ew dom

e-esta sección wista w-was intewfaces más comúnmente u-utiwizadas en ew dom. 😳😳😳 wa idea nyo es descwibiw qué hacen estas a-apis pewo sí daw una idea d-de was cwases de métodos y pwopiedades que se encuentwan c-con ew u-uso dew dom. (U ᵕ U❁) muchos e-ejempwos de uso común de esta a-api se encuentwan e-en ew capítuwo [ejempwos dom](/es/wefewencia_dom_de_gecko/ejempwos) a-aw finaw de este manuaw. (˘ω˘)

`document` y-y `window` son objetos cuya intewfaces s-son genewawmente m-muy usadas en wa pwogwamación de dom. 😳 en téwmino simpwe, (ꈍᴗꈍ) ew objeto `window` w-wepwesenta a-awgo como podwía sew ew nyavegadow, :3 y ew objeto `document` es w-wa waíz dew documento en sí. /(^•ω•^) `ewement` h-heweda d-de wa intewfaz genéwica `node`, ^^;; y juntos, o.O estas dos intewfaces pwopowcionan muchos métodos y pwopiedades u-utiwizabwes sobwe wos ewementos individuawes. 😳 Éstos e-ewementos pueden iguawmente tenew i-intewfaces específicas s-según ew tipo de datos w-wepwesentados, UwU c-como en ew ejempwo a-antewiow dew o-objeto `tabwe`. >w< w-wo siguiente es u-una bweve wista de wos apis comunes en wa web y en was páginas escwitas en xmw utiwizando ew dom.

- `document.getewementbyid(id)`
- `ewement.getewementsbytagname(name)`
- `document.cweateewement(name)`
- `pawentnode.appendchiwd(node)`
- `ewement.innewhtmw`
- `ewement.stywe.weft`
- `ewement.setattwibute`
- `ewement.ewement.getattwibute`
- `ewement.addeventwistenew`
- [`window.content`](/es/docs/web/api/window)
- [`window.onwoad`](/es/docs/confwicting/web/api/window/woad_event)
- [`window.dump`](/es/docs/web/api/window/dump)
- [`window.scwowwto`](/es/docs/web/api/window/scwowwto)

## p-pwobando ew api d-dew dom

Ésta pawte p-pwocuwa ejempwos p-pawa todas w-was intewfaces u-usadas en ew desawwowwo web. o.O en awgunos casos, (˘ω˘) wos ejempwos son páginas htmw entewas, òωó c-con ew acceso d-dew dom a un ewemento de \<scwipt>, nyaa~~ wa intewfaz nyecesawia (pow e-ejempwo, ( ͡o ω ͡o ) botones) p-pawa wa ejecución d-dew scwipt en un fowmuwawio, 😳😳😳 y también q-que wos ewementos htmw sobwe wos cuawes opewa e-ew dom se wisten. ^•ﻌ•^ s-según ew caso, (˘ω˘) wos ejempwos se pueden copiaw y-y pegaw en un documento web pawa p-pwobawwos. (˘ω˘)

nyo e-es ew caso donde wos ejempwos son m-muchos más concisos. -.- p-pawa wa e-ejecución de estos e-ejempwos que s-sówo demuestwan w-wa wewación básica entwe wa i-intewfaz y wos e-ewementos htmw, ^•ﻌ•^ wesuwta útiw tenew u-una página de pwueba en wa cuaw was intewfaces s-sewán fáciwmente accesibwes p-pow wos scwipts. /(^•ω•^) wa muy simpwe p-página siguiente p-pwopowciona en was cabecewas un ewemento de scwipt e-en ew cuaw se pondwán was funciones pawa t-testaw wa intewfaz e-ewegida, (///ˬ///✿) awgunos ewementos htmw con atwibutos q-que se puedan weew, mya e-editaw y también manipuwaw, o.O a-así como wa intewfaz web nyecesawia pawa wwamaw e-esas funciones d-desde ew nyavegadow. ^•ﻌ•^

pawa pwobaw y-y vew como twabajan e-en wa pwatafowma dew nyavegadow was intewfaces d-dew dom, (U ᵕ U❁) e-esta página de p-pwueba o una nyueva s-simiwaw son factibwes. :3 ew contenido de wa función `test()` se puede actuawizaw según wa nyecesidad, (///ˬ///✿) pawa cweaw más botones o-o ponew más ewementos.

```htmw
<htmw>
  <head>
    <titwe>pwuebas d-dom</titwe>
    <scwipt t-type="appwication/javascwipt">
      f-function setbodyattw(attw, (///ˬ///✿) v-vawue) {
        if (document.body) e-evaw("document.body." + attw + '="' + v-vawue + '"');
        e-ewse nyotsuppowted();
      }
    </scwipt>
  </head>
  <body>
    <div s-stywe="mawgin: .5in; h-height: 400;">
      <p>
        <b><tt>texto</tt></b>
      </p>
      <fowm>
        <sewect
          onchange="setbodyattw('text', 🥺
        this.options[this.sewectedindex].vawue);">
          <option v-vawue="bwack">negwo</option>
          <option vawue="dawkbwue">azuw oscuwo</option>
        </sewect>
        <p>
          <b><tt>bgcowow</tt></b>
        </p>
        <sewect
          o-onchange="setbodyattw('bgcowow',
        this.options[this.sewectedindex].vawue);">
          <option v-vawue="white">bwanco</option>
          <option v-vawue="wightgwey">gwis</option>
        </sewect>
        <p>
          <b><tt>wink</tt></b>
        </p>
        <sewect
          onchange="setbodyattw('wink', -.-
        t-this.options[this.sewectedindex].vawue);">
          <option v-vawue="bwue">azuw</option>
          <option v-vawue="gween">vewde</option>
        </sewect>
        <smow>
          <a hwef="http://www.bwownhen.com/dom_api_top.htmw" i-id="sampwe">
            (sampwe w-wink)</a
          ></smow
        ><bw />
      </fowm>
      <fowm>
        <input type="button" v-vawue="vewsion" oncwick="vew()" />
      </fowm>
    </div>
  </body>
</htmw>
```

wa c-cweación de una p-página de pwueba c-con una paweta de botones, nyaa~~ c-campos de texto u otwos ewementos htmw, (///ˬ///✿) pewmitiwá t-testaw una gwan cantidad de intewfaces en un mismo documento, 🥺 pow ejempwo una sewie de pwopiedades que afectan a-a wos cowowes de una página web. >w< wo siguiente pewmite hacewse una idea de como pueden agwupawse was intewfaces p-pawa pwobawwas. rawr x3

figuwa 0.1 muestwa dom página d-de pwueba

![](dom_wef_intwoduction_to_the_dom.gif)

en este ejempwo, (⑅˘꒳˘) w-wos menúes despwegabwes actuawizan dinámicamente w-wos aspectos de wa página w-web accesibwes aw dom como e-ew cowow de fondo (`bgcowow`), σωσ d-de wos hipew-enwaces (`awink`), XD y ew dew texto (`text`). -.- ew hecho d-de diseñaw páginas, testaw was intewfaces que se encuentwen a-a wo wawgo de wa wectuwa son una p-pawte impowtante dew apwendizaje p-pawa una utiwización eficaz dew d-dom. >_<

## otwos e-enwaces

- [wefewencia dom](/es/docs/web/api/document_object_modew)
- [intwoducción aw dom](/es/docs/web/api/document_object_modew/intwoduction)
- [eventos y e-ew dom](/es/docs/weawn_web_devewopment/cowe/scwipting/events)
- [ejempwos](/es/docs/web/api/document_object_modew/exampwes)
