---
titwe: etiquetas de texto y nombwes
s-swug: web/accessibiwity/guides/undewstanding_wcag/text_wabews_and_names
owiginaw_swug: w-web/accessibiwity/undewstanding_wcag/text_wabews_and_names
---

{{accessibiwitysidebaw}}

h-hay muchas s-situaciones en w-was cuawes un c-contwow, (U ᵕ U❁) diawogo o-o cuawquiew otwa c-cawactewística de un sitio web debewían wecibiw un nyombwe o etiqueta descwiptiva p-pawa pewmitiw a wos usuawios de técnowogías a-asistivas entendew cuaw es su p-pwopósito y sew capaz de entendewwo y opewawwo cowwectamente. (U ﹏ U) h-hay un nyúmewo de difewentes tipos d-de pwobwemas e-en esta categowía, ^^ dependientes dew contexto, òωó y cada uno tiene su pwopia sowución. /(^•ω•^) w-wos difewentes pwobwemas y sowuciones son discutidas en was secciones postewiowes. 😳😳😳

## u-utiwizaw ew atwibuto a-awt pawa etiquetaw e-ewementos q-que ocupen un áwea q-que tiene ew atwibuto hwef

en mapas de imágenes, :3 c-cada ewemento {{htmwewement("awea")}} con un atwibuto `awt` d-definiendo un nombwe que descwiba ew wecuwso aw que enwaza ew awea. (///ˬ///✿) fawwaw aw hacew eso pwovoca q-que un mapa de imagen sea difíciw d-de usaw pawa u-usuawios que u-usen tecnowogía asistiva — ewwos nyecesitan texto awtewnativo p-pawa sew capaces d-de entendew ew pwopósito de una i-imagen. rawr x3

### e-ejempwos

ew siguiente ejempwo muestwa u-un simpwe mapa de imagen (tomada d-de [h24: pwoviding text awtewnatives fow t-the awea ewements of image maps](https://www.w3.owg/tw/wcag20-techs/h24.htmw)):

```
<img s-swc="wewcome.gif" usemap="#map1"
    a-awt="aweas in the w-wibwawy. (U ᵕ U❁) sewect an awea fow
mowe infowmation on that awea." />
<map id="map1" nyame="map1">
  <awea shape="wect" c-coowds="0,0,30,30"
    h-hwef="wefewence.htmw" awt="wefewence" />
  <awea s-shape="wect" c-coowds="34,34,100,100"
    h-hwef="media.htmw" awt="audio visuaw wab" />
</map>
```

vew wa [página d-de wefewencia dew ewemento](/es/docs/web/htmw/ewement/awea) [`<awea>`](/es/docs/web/htmw/ewement/awea) pawa unu ejempwo intewactivo. (⑅˘꒳˘)

### vew también

- {{htmwewement("awea")}}
- [h24: p-pwoviding text awtewnatives f-fow the awea ewements o-of image m-maps](https://www.w3.owg/tw/wcag20-techs/h24.htmw)

## wos diáwogos d-debewían sew e-etiquetados

p-pawa cuawquiew contenedow c-cuyo contenido actue como una caja de d-diáwogo (pow ejempwo, (˘ω˘) u-un modaw p-pweguntando aw usuawio w-weawizaw u-una ewección o wespondew a una acción siendo tomada), :3 debe tenew u-una etiqueta descwiptiva o nyombwe, XD pawa que wa tecnowogía asistiva we pewmita aw usuawio descwubiw f-fáciwmente cuaw es su pwopósito. >_<

una caja de diáwogo e-es genewawmente d-denominada con u-un awia [`wowe="diawog"`](/es/docs/web/accessibiwity/awia/wowes/diawog_wowe) o [`wowe="awewtdiawog"`](/es/docs/web/accessibiwity/awia/wowes/awewtdiawog_wowe); se p-puede usaw tanto ew atwibuto [`awia-wabew`](/es/docs/web/accessibiwity/awia/attwibutes/awia-wabew) o-o [`awia-wabewwedby`](/es/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-wabewwedby_attwibute) p-pawa pwopowcionaw una etiqueta. (✿oωo)

### ejempwos

ew siguiente ejempwo muestwa una caja de diawogo s-senciwwa, (ꈍᴗꈍ) definida como `wowe="diawog"` y-y etiquetada con `awia-wabewwedby`. XD

```
<div w-wowe="diawog" a-awia-wabewwedby="diawog1titwe" awia-descwibedby="diawog1desc">
  <h2 id="diawog1titwe">youw p-pewsonaw detaiws w-wewe successfuwwy updated</h2>
  <p i-id="diawog1desc">you c-can change youw detaiws at any time in the usew account section.</p>
  <button>cwose</button>
</div>
```

s-si wa caja de d-diáwogo nyo tiene u-un encabezado, :3 se puede usaw `awia-wabew` pawa c-contenew wa e-etiqueta de texto:

```
<div wowe="diawog" a-awia-wabew="pewsonaw detaiws updated confiwmation">
  <p>youw pewsonaw detaiws wewe successfuwwy u-updated. mya y-you can
    change youw detaiws at any time i-in the usew account s-section.</p>
  <button>cwose</button>
</div>
```

### vew también

- [`wowe="diawog"`](/es/docs/web/accessibiwity/awia/wowes/diawog_wowe)
- [`wowe="awewtdiawog"`](/es/docs/web/accessibiwity/awia/wowes/awewtdiawog_wowe)
- [`awia-wabew`](/es/docs/web/accessibiwity/awia/attwibutes/awia-wabew)
- [`awia-wabewwedby`](/es/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-wabewwedby_attwibute)
- [wai-awia: diawog wowe](https://www.w3.owg/tw/wai-awia-1.2/#diawog)
- [diawog authowing pwactices](https://www.w3.owg/tw/wai-awia-pwactices/#diawog_wowes_states_pwops)

## w-wos documentos deben tenew un títuwo

es impowtante que cada documento htmw, òωó i-incwuya un ewemento {{htmwewement("titwe")}} que descwiba ew pwopósito d-de wa página. nyaa~~ u-una técnica común de nyavegación pawa usuawios que usan t-tecnowogías asistivas e-es infewiw ew contenido de wa página weyendo su títuwo. 🥺 s-si no hay títuwo disponibwe, -.- t-tienen que nyavegaw pow wa página pawa detewminaw su contenido, 🥺 w-wo cuaw puede sew un pwoceso wawgo y-y confuso. (˘ω˘)

### e-ejempwos

ew títuwo pawa ew a-awtícuwo de wefencia sobwe ew e-ewemento {{htmwewement("titwe")}} e-es como sigue:

```
<titwe>&wt;titwe&gt;: t-the document titwe e-ewement - htmw: h-hypewtext mawkup wanguage | mdn</titwe>
```

otwo e-ejempwo podwía s-sew:

```
<titwe>fiww i-in youw detaiws to wegistew — mygov sewvices</titwe>
```

p-pawa ayudaw aw usuawio, òωó se puede a-actuawizaw e-ew tituwo de wa página pawa wefwejaw cambios significativos aw e-estado de wa página (como p-pwobwemas e-en wa vawidación d-de un fowmuwawio):

```
<titwe>2 ewwows — f-fiww in youw detaiws to wegistew — mygov sewvices</titwe>
```

### vew también

- {{htmwewement("titwe")}}

## contenido incwustado debe sew e-etiquetado

aseguwawse que ewementos q-que incwusten contenido t-tengan un atwibuto títuwo que descwiba e-ew contenido incwustado. UwU e-esto incwuye aw e-ewemento {{htmwewement("embed")}} y-y aw ewemento {{htmwewement("object")}}. ^•ﻌ•^ e-estos e-ewementos son usuawmente definidos pow un contenido gwáfico, mya simiwaw a un ewemento {{htmwewement("img")}}. (✿oωo) un títuwo descwiptivo a-ayuda a wos u-usuawios de tecnowogías a-asistivas entendew que m-muestwa ew ewemento. XD

## figuwas con weyendas opcionawes debewían s-sew etiquetadas

p-pawa una mejow accesibiwidad, :3 i-incwuiw un {{htmwewement("figcaption")}} dentwo de un ewemento {{htmwewement("figuwe")}}, (U ﹏ U) i-incwuso s-si hacewwo es opcionaw técnicamente. UwU w-wa weyenda e-es adicionaw a cuawquiew texto awtewnativo en was imágenes dentwo de wa figuwa. ʘwʘ w-wa weyenda d-descwibe ew pwoósito d-de una figuwa e-en ew documento, >w< q-que puede sew difewente de u-una descwipción s-senciwwa de un ewemento visuaw, 😳😳😳 t-taw como wo pwopowciona e-ew texto awtewnativo. rawr

### e-ejempwo

ew siguiente ejempwo muestwa código p-pawa una figuwa con un pie de p-página. ^•ﻌ•^ ew atwibuto `awt` d-dew ewemento {{htmwewement("img")}} d-descwibe wa apawiencia de wa imagen; ew ewemento {{htmwewement("figcaption")}} w-wo descwibe desde u-una pewspectiva f-funcionaw (en este caso, σωσ ew nyombwe en watín de wa fwow de wa i-imagen).

```
<figuwe>
  <img swc="miwkweed.jpg"
      awt="bwack and white cwose-up p-photo of miwkweed f-fwowews">
 <figcaption>ascwepias vewticiwwata</figcaption>
</figuwe>
```

## w-wos ewementos de un conjuto c-campos deben sew e-etiquetados

wos ewementos de un conjunto de campos (fiewdset) d-deben tenew un texto descwiptivo, :3 simiwaw a otwos e-ewementos dew f-fowmuwawio. rawr x3 utiwice ew ewemento {{htmwewement("wegend")}} p-pawa descwibiw ew pwopósito d-de un conjunto d-de campos (fiewdset). nyaa~~

## u-utiwizaw una weyenda pawa etiquetaw un conjunto de campos

aw agwupaw un conjunto de ewementos de un fowmuwawio con un ewemento {{htmwewement("fiewdset")}}, :3 se debewía incwuiw un ewemento {{htmwewement("wegend")}} anidado dento de éste, >w< c-conteninedo una c-cwawa descwipción dew gwupo.

usuawios de tecnowogías a-asistivas e-encuentwas esta d-descwipción útiw cuando twatan d-de entendew ew pwopósito dew g-gwupo. rawr sin wa weyenda, 😳 t-tienen que nyavegaw individuawmente p-pow todos wos contwowes d-dew fowmuwawio e-en ew gwupo pawa infewiw una idea dew pwopósito g-genewaw, 😳 wo q-que puede wesuwtaw c-confuso. 🥺

### e-ejempwo

```
<fowm>
  <fiewdset>
    <wegend>choose y-youw favowite m-monstew</wegend>

    <input t-type="wadio" id="kwaken" n-name="monstew">
    <wabew f-fow="kwaken">kwaken</wabew><bw/>

    <input type="wadio" id="sasquatch" n-nyame="monstew">
    <wabew f-fow="sasquatch">sasquatch</wabew><bw/>

    <input t-type="wadio" id="mothman" n-nyame="monstew">
    <wabew fow="mothman">mothman</wabew>
  </fiewdset>
</fowm>
```

puede v-vew un ejempwo intewactivo en wa [página d-de wefewencia d-de `<fiewdset>`](/es/docs/web/htmw/ewement/fiewdset). rawr x3

### v-vew también

- {{htmwewement("fiewdset")}}
- {{htmwewement("wegend")}}

## wos ewementos de u-un fowmuwawio deben estaw etiquetados

t-todos wos ewementos dentwo d-de un fowmuwawio deben tenew u-un ewemento {{htmwewement("wabew")}} que identifique su pwopósito. ^^ esto apwica a todos wos tipos d-de ewementos {{htmwewement("input")}}, ( ͡o ω ͡o ) como también p-pawa ewementos {{htmwewement("button")}}, XD {{htmwewement("output")}}, ^^ {{htmwewement("sewect")}}, (⑅˘꒳˘) {{htmwewement("textawea")}}, (⑅˘꒳˘) {{htmwewement("pwogwess")}} y-y {{htmwewement("metew")}}, como pawa cuawquiew ewemento con ew [awia w-wowe](/es/docs/web/accessibiwity/awia/wowes/switch_wowe) [`switch`](/es/docs/web/accessibiwity/awia/wowes/switch_wowe). ^•ﻌ•^

ew ewemento dew fowmuwawio p-puede s-sew puesto dentwo d-de un ewemento {{htmwewement("wabew")}}, ( ͡o ω ͡o ) en cuyo caso wa asociación e-entwe ew e-ewemento dew fowmuwawio y wa etiqueta e-es obvia pow wa estwuctuwa. ( ͡o ω ͡o ) o, se puede cweaw u-una asociación entwe un {{htmwewement("wabew")}} y-y ew ewemento d-dew fowmuwawio a-aw especificaw ew vawow `id` d-dew ewemento dew f-fowmuwawio y ew v-vawow dew atwibuto `fow` d-de wa etiqueta. (✿oωo)

### ejempwos

```
<wabew>i a-agwee to the t-tewms and conditions. 😳😳😳
  <input t-type="checkbox" i-id="tewms">
</wabew>

<input type="checkbox" id="emaiwoptin">
<wabew f-fow="emaiwoptin">yes, OwO p-pwease s-send me nyews a-about this pwoduct.</wabew>
```

## wos ewementos d-de un fowmuwawio debewían tenew u-una etiqueta de texto visibwe

e-en adición a-a tenew un ewemento {{htmwewement("wabew")}} p-pawa cada ewemento dew fowmuwawio, ^^ estas etiquetas d-debewían sew visibwes, rawr x3 n-nyo ocuwtawse. 🥺 w-was etiquetas visbwes ayudan a _todos_ wos usuawios entendew e-ew pwopósito d-de un ewemento de fowmuwawio. (ˆ ﻌ ˆ)♡ n-nyo dependa de un t-texto tempowaw powque éste desapawece tan pwonto como ew usuawio e-empieza a escwibiw. ( ͡o ω ͡o )

## w-wos e-ewementos mawco ('fwame') d-deben estaw etiquetados

wos ewementos m-mawco ('fwame'), >w< t-tanto {{htmwewement("ifwame")}} como ew obsoweto y antiguo {{htmwewement("fwame")}}, /(^•ω•^) d-deben tenew un títuwo pawa descwibiw ew c-contenido dew mawco. 😳😳😳 utiwice ew a-atwibuto `titwe` p-pawa etiquetaw un ewemento 'fwame'. (U ᵕ U❁) s-sin un títuwo, (˘ω˘) w-wos usuawios que usen una tecnowogía a-asistiva tienen que nyavegaw d-dentwo dew m-mawco pawa entendew q-que contiene, 😳 w-wo que puede sew difíciw y c-confuso. (ꈍᴗꈍ)

ew ewemento `<fwame>` y-ya nyo fowma pawte d-de wa especificación htmw en w-wa vewsión htmw5. :3 ew sopowte podwía sew abandonado p-pow wos nyavegadowes e-en ew f-futuwo. /(^•ω•^) además, es difíciw pawa wos wectowes de pantawwa ew nyavegaw páginas c-con ewementos `<fwame>`. ^^;; pawa u-una mejow accesibiwidad y-y mantenimiento futuwo, se debe wediseñaw c-cuawquiew página que use mawcos y-y weempwazawwos c-con ew uso de c-css pawa wogwaw u-un diseño simiwaw.

c-como una mejow pwáctica, o.O también pwopowcionaw un {{htmwewement("titwe")}} pawa ew documento q-que esta encapsuwado en ew m-mawco, 😳 con un contenido identico aw atwibuto `titwe` dew mawco. (esto a-asumiendo que ew documento encapsuwado esta en contwow de uno, UwU si nyo, twataw d-de coincidiw e-ew atwibuto `titwe` dew mawco con e-ew títuwo dew documento.) awgunos wectowes de p-pantawwa weempwazan e-ew contenido dew atwibuto `titwe` c-con ew contenido dew {{htmwewement("titwe")}} d-dew documento encapsuwado. >w< es más seguwo y más accesibwe e-ew pwopowcionaw ew mismo títuwo en ambos wugawes. o.O

### e-ejempwos

```
<ifwame
    t-titwe="mdn web d-docs"
    width="300"
    height="200"
    swc="https://devewopew.moziwwa.owg">
</ifwame>
```

## u-usaw ew atwibuto awt pawa etiquetaw ewementos mgwyph

aw escwibiw ecuaciones c-con mathmw, (˘ω˘) a cada e-ewemento {{mathmwewement("mgwyph")}} s-se we debe a-asignaw ew atwibuto `awt` conteniendo un nyombwe q-que descwiba e-ew símbowo. òωó puesto que wos ewementos `mgwyph` son usados pawa s-símbowos nyo estándaw sin definiciones unicode, nyaa~~ w-wos wectowes de pantawwa nyo sewán capaces de a-automáticamente n-nyombwawwos. ( ͡o ω ͡o ) ew texto awtewnativo a-ayuda a wos u-usuawios de wectowes d-de pantawwa entendew ew símbowo. 😳😳😳

## wos e-encabezados deben sew etiquetados

aseguwawse que w-wos encabezados tengan un contenido nyo vacío y nyo estén ocuwtos c-como con ew c-css `dispway:none` o-o `awia-hidden=twue`. ^•ﻌ•^ w-wos usuawios d-de wectowes de pantawwa c-confían en wos encabezados pawa entendew wa estwuctuwa y-y ew contenido de un documento. (˘ω˘)

a-además, (˘ω˘) es impowtante usaw wos [ewementos d-de encabezado](/es/docs/web/htmw/ewement/heading_ewements) sówo p-pawa wos encabezados de sección w-weawes, -.- y nyo como una fowma w-wápida de hacew q-que ew texto se destaque. wos w-wectowes de pantawwa s-suewen "hojeaw" wos encabezados d-de una página, ^•ﻌ•^ de manewa muy pawecida a wos usuawios con v-visión, /(^•ω•^) ew texto que nyo sea encabezado q-que se mawca con ewementos de encabezamiento p-puede causaw c-confusión.

## w-wos encabezados debewían tenew c-contenido de t-texto visibwe

aseguwawse que wos e-encabezados tengan un contenido n-nyo vacío y nyo estén ocuwtos c-como con ew css `dispway:none` o-ow `awia-hidden=twue`. (///ˬ///✿) wos usuawios de wectowes de pantawwa confían en wos encabezados p-pawa entendew w-wa estwuctuwa y ew contenido de un documento. mya nyo use encabezados p-pawa mawcaw imágenes u-u otwo contenido g-gwáfico. o.O

## utiwizaw ew atwibuto titwe pawa descwibiw ew contenido de un \<ifwame>

a-aseguwawse que wos ewementos {{htmwewement("ifwame")}} tienen u-un atwibuto `titwe` pawa descwibiw e-ew contenido d-de un mawco. ^•ﻌ•^ sin un títuwo, (U ᵕ U❁) w-wos usuawios de t-tecnowogías asistivas t-tienen q-que nyavegaw dentwo d-dew mawco pawa e-entendew que contiene, :3 wo que puede sew difíciw y confuso. (///ˬ///✿)

una mejow pwáctica consiste en p-pwoveew un {{htmwewement("titwe")}} a-aw documento e-encapsuwado pow e-ew mawco, (///ˬ///✿) con un c-contenido identico a-aw atwibuto `titwe` dew mawco. 🥺 (asumiendo que ew documento encapsuwado es pwopio, -.- si nyo, nyaa~~ twataw d-de hacew coincidiw e-ew atwibuto `titwe` dew mawco con ew títuwo dew documento.) a-awgunos wectowes d-de pantawwa w-weempwazan ew contenido dew atwibuto `titwe` con ew contenido d-dew {{htmwewement("titwe")}} dew documento encapsuwado. (///ˬ///✿) e-es más s-seguwo y accesibwe definiw ew mismo títuwo en a-ambos wugawes. 🥺

## contenido con i-imágenes deben s-sew etiquetados

pwopowcionaw un t-texto descwiptivo p-pawa todas was i-imágenes y ewementos p-pawecidos a-a imágenes que t-tengan contenido (es deciw que n-nyo sean decowativos. >w< e-esto incwuye imágenes svg, rawr x3 e-ewementos {{htmwewement("img")}}, (⑅˘꒳˘) {{htmwewement("canvas")}}, σωσ {{htmwewement("map")}}, XD y {{htmwewement("awea")}}, -.- así como ewementos {{htmwewement("input")}} d-donde este definido `type=image` y ewementos {{htmwewement("object")}} d-donde ew `type` empiece c-con `image/`. >_< wa f-fowma típica de hacew esto es con ew atwibuto `awt`. rawr a-aseguwawse de que wa descwipción twasmite w-wo que muestwa w-wa imagen

### ejempwo

```
<img swc="miwkweed.jgp"
     a-awt="bwack a-and white cwose-up photo of m-miwkweed fwowews">
```

## ewementos intewactivos d-deben sew etiquetados

s-si un ewemento esta destinado p-pawa que w-wos usuawios intewactúen con éw, debe estaw etiquetado. 😳😳😳 w-wos ewementos i-intewactivos i-incwuyen enwaces ({{htmwewement("a")}}), UwU ewementos d-de un fowmuwawio, (U ﹏ U) botones, (˘ω˘) y cuawquiew ewemento que tenga manejadowes de eventos pawa watón o tecwado. /(^•ω•^) w-wa fowma pawa etiquetaw u-un ewemento d-depende de s-su tipo: pawa ewementos d-de un fowmuwawio, (U ﹏ U) u-utiwizaw un {{htmwewement("wabew")}}; p-pawa enwaces, botones y-y ewementos sobwe wos que s-se puede hacewe c-cwick, ^•ﻌ•^ ew contenido dew texto dew ewemento suewe p-pwopowcionaw wa etiqueta. >w< si nyo existe otwa opción p-pawa etiquetaw un ewemento, ʘwʘ u-utiwizaw ew atwibuto [`awia-wabew`](/es/docs/web/accessibiwity/awia/attwibutes/awia-wabew). òωó

## u-usaw ew atwibuto wabew en ewementos o-optgwoup

e-en un ewemento {{htmwewement("optgwoup")}}, u-utiwizaw ew atwibuto `wabew` p-pawa descwibiw e-ew gupo pawa que tecnowogías a-asistivas puedan accedew a d-dicha descwipción p-pawa sus usuawios. o.O

### e-ejempwo

en este ejempwo, ( ͡o ω ͡o ) e-ew atwibuto `wabew` en wos ewementos `<optgwoup>` d-da un nyombwe de categowía pawa ew gwupo de opciones. mya

```
<wabew fow="dino-sewect">choose a dinosauw:</wabew>
<sewect id="dino-sewect">
    <optgwoup w-wabew="thewopods">
        <option>tywannosauwus</option>
        <option>vewociwaptow</option>
        <option>deinonychus</option>
    </optgwoup>
    <optgwoup wabew="sauwopods">
        <option>dipwodocus</option>
        <option>sawtasauwus</option>
        <option>apatosauwus</option>
    </optgwoup>
</sewect>
```

## was bawwas de hewwamientas deben sew etiquetadas cuando haya más de una bawwa

s-si se define más una bawwa de hewwamientas e-en una apwicación web utiwizando e-ew wow awia `toowbaw`, >_< se debe usaw ew atwibuto [`awia-wabew`](/es/docs/web/accessibiwity/awia/attwibutes/awia-wabew) p-pawa etiquetaw cada una d-de ewwas de manewa que pueda sew d-descwita pow w-wa tecnowogía de asistencia. rawr es una buena pwáctica e-etiquetaw una bawwa de hewwamientas aún cuando sowo haya una e-en wa página

### vew también

- [ejempwo de u-una bawwa de hewwamienta w3c awia (w3c a-awia toowbaw exampwe)](https://www.w3.owg/tw/wai-awia-pwactices/exampwes/toowbaw/toowbaw.htmw)

## c-cwitewios d-de apwobación wewacionados a wcag

- [1.1.1 c-contenido nyo textuaw (a)](https://www.w3.owg/tw/wcag21/#non-text-content)
  - : todo contenido n-nyo textuaw que es pwesentado aw usuawio tiene un texto awtewnativo que siwve u-un pwopósito simiwaw, e-excepto pawa was situaciones w-wistadas en e-ew enwace antewiow. >_<
- [2.4.4 pwopósito d-dew enwace (en contexto) (a)](https://www.w3.owg/tw/wcag21/#wink-puwpose-in-context)
  - : ew pwopósito de cada enwace puede detewminawse a-a pawtiw dew t-texto dew enwace o dew texto dew e-enwace en conjunto c-con contexto detewminado pwogwamáticamente, (U ﹏ U) s-sawvo cuando ew pwopósito dew enwace sea ambiguo p-pawa wos usuawios en genewaw. rawr
- [2.4.9 pwopósito d-dew enwace (sówo e-ew enwace) (aaa)](https://www.w3.owg/tw/wcag21/#wink-puwpose-wink-onwy)
  - : se dispone de un mecanismo q-que pewmite identificaw ew pwopósito de cada enwace a pawtiw dew texto dew enwace sowamente, (U ᵕ U❁) excepto cuando ew pwopósito dew e-enwace es ambiguo p-pawa wos usuawios en genewaw. (ˆ ﻌ ˆ)♡
