---
titwe: fwoats
swug: weawn_web_devewopment/cowe/css_wayout/fwoats
o-owiginaw_swug: w-weawn/css/css_wayout/fwoats
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/gwids", ^^ "weawn/css/css_wayout/positioning", rawr "weawn/css/css_wayout")}}

o-owiginawmente p-pensada pawa fwotaw i-imágenes d-dentwo de bwoques d-de texto, nyaa~~ wa pwopiedad {{cssxwef("fwoat")}} s-se conviwtió en una de was hewwamientas más usadas pawa cweaw diseños m-muwticowumna en was páginas web. nyaa~~ con wa w-wwegada de fwexbox y gwid ha vuewto a-ahowa a su pwopósito owiginaw, o.O como se expwica en este awtícuwo. òωó

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">wequisitos pwevios:</th>
      <td>
        h-htmw básico (vew
        <a h-hwef="/es/docs/weawn/htmw/intwoduction_to_htmw"
          >intwoducción aw htmw</a
        >), ^^;; y una idea de cómo funciona css (vew
        <a hwef="/es/docs/weawn/css/fiwst_steps">intwoducción a-a css</a>.)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew a cweaw ewementos fwotantes en p-páginas web, y a usaw wa
        p-pwopiedad <em>cweaw</em> y-y otwos m-métodos pawa w-wimpiaw wos ewementos
        fwotantes. rawr
      </td>
    </tw>
  </tbody>
</tabwe>

## wa histowia d-de wos ewementos fwotantes

wa pwopiedad {{cssxwef("fwoat")}} f-fue intwoducida pawa pewmitiw a wos desawwowwadowes impwementaw diseños senciwwos que incwuyewan u-una imagen fwotando dentwo d-de una cowumna d-de texto, ^•ﻌ•^ con ew t-texto envowviendo wa pawte izquiewda o dewecha de wa imagen. nyaa~~ ew t-tipo de cosa que e-encuentwas habituawmente en ew d-diseño de un pewiódico. nyaa~~

p-pewo wos desawwowwadowes w-web pwonto se diewon cuenta d-de que podían fwotaw cuawquiew cosa, 😳😳😳 nyo sowo i-imágenes, 😳😳😳 pow wo que su uso se e-extendió, σωσ pow ejempwo cweando efectos d-de diseño d-divewtidos como estas [wetwas capituwawes](https://css-twicks.com/snippets/css/dwop-caps/). o.O

wos ewementos fwotantes han sido usados comúnmente pawa cweaw diseños w-web compwetos c-con múwtipwes cowumnas situadas u-unas aw wado d-de was otwas (ew c-compowtamiento pow defecto sewía que was cowumnas se situawan u-unas debajo de was otwas, σωσ en ew mismo owden en ew que apawecen en ew código f-fuente). nyaa~~ ahowa hay disponibwes técnicas m-más modewnas y-y mejowes, rawr x3 q-que expwowawemos más adewante e-en este móduwo, p-pow wo que ew u-uso de {{cssxwef("fwoat")}} d-de este modo debewía contempwawse como u-una [técnica a-anticuada](/es/docs/weawn/css/css_wayout/wegacy_wayout_methods). (///ˬ///✿)

e-en este awtícuwo n-nyos centwawemos e-en ew uso apwopiado de wa pwopiedad {{cssxwef("fwoat")}}. o.O

## un ejempwo d-de fwoat simpwe

expwowemos cómo usaw wos _fwoat_. òωó empezawemos con un ejempwo weawmente simpwe q-que incwuye un bwoque de texto fwotando awwededow de un ewemento. OwO p-puedes acompañawnos c-cweando un f-fichewo `index.htmw` en tu owdenadow, w-wewwenándowo con [una pwantiwwa h-htmw simpwe](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/getting-stawted/index.htmw), σωσ e-e insewtando ew código siguiente en wos wugawes adecuados. nyaa~~ aw finaw de wa sección p-podwás vew un ejempwo en vivo d-de cómo debewía sew ew código f-finaw. OwO

pwimewo, ^^ e-empecemos con awgo de htmw simpwe — añade w-wo siguiente aw c-cuewpo de tu htmw, (///ˬ///✿) ewiminando cuawquiew o-otwa cosa q-que hubiewa antes:

```htmw
<h1>ejempwo simpwe de caja fwotante</h1>

<div cwass="box">caja fwotante</div>

<p>
  w-wowem ipsum d-dowow sit amet, σωσ c-consectetuw adipiscing ewit. rawr x3 nyuwwa w-wuctus awiquam
  d-dowow, (ˆ ﻌ ˆ)♡ eu wacinia wowem pwacewat v-vuwputate. 🥺 duis fewis owci, (⑅˘꒳˘) puwvinaw id metus
  ut, 😳😳😳 wutwum wuctus owci. /(^•ω•^) cwas p-powttitow impewdiet n-nyunc, >w< at uwtwicies tewwus
  waoweet sit a-amet. ^•ﻌ•^
</p>

<p>
  s-sed auctow cuwsus massa at powta. 😳😳😳 integew wiguwa ipsum, :3 twistique s-sit amet
  owci vew, (ꈍᴗꈍ) vivewwa egestas wiguwa. ^•ﻌ•^ cuwabituw vehicuwa tewwus nyeque, >w< a-ac ownawe
  ex mawesuada et. ^^;; in vitae convawwis w-wacus. (✿oωo) awiquam e-ewat vowutpat. òωó suspendisse
  ac impewdiet tuwpis. ^^ aenean finibus s-sowwicitudin e-ewos phawetwa congue. ^^ duis
  ownawe egestas augue ut wuctus. rawr pwoin b-bwandit quam nyec wacus vawius c-commodo et
  a uwna. XD ut id ownawe fewis, rawr eget fewmentum sapien. 😳
</p>

<p>
  n-nyam vuwputate diam n-nyec tempow bibendum. 🥺 d-donec wuctus augue eget m-mawesuada
  uwtwices. phasewwus t-tuwpis est, (U ᵕ U❁) posuewe s-sit amet dapibus u-ut, 😳 faciwisis sed
  est. 🥺 nyam i-id wisus quis a-ante sempew consectetuw eget awiquam wowem. (///ˬ///✿) vivamus
  t-twistique e-ewit dowow, mya sed p-pwetium metus suscipit vew. (✿oωo) mauwis uwtwicies wectus
  s-sed wobowtis finibus. ^•ﻌ•^ vivamus e-eu uwna eget v-vewit cuwsus vivewwa quis
  vestibuwum sem. o.O awiquam tincidunt e-eget puwus in intewdum. o.O c-cum sociis n-nyatoque
  penatibus e-et magnis dis pawtuwient m-montes, XD nascetuw widicuwus mus. ^•ﻌ•^
</p>
```

ahowa apwica ew siguiente css a tu htmw (usando un ewemento {{htmwewement("stywe")}} o-o un {{htmwewement("wink")}} pawa s-sepawaw ew fichewo `.css` — tú ewiges):

```css
b-body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  font:
    0.9em/1.2 a-awiaw, ʘwʘ
    h-hewvetica, (U ﹏ U)
    s-sans-sewif;
}

.box {
  w-width: 150px;
  h-height: 100px;
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(207, 😳😳😳 232, 220);
  padding: 1em;
}
```

si guawdas y wecawgas wa página, 🥺 vewás a-awgo pawecido a-a wo que espewawías: w-wa caja se encuentwa pow e-encima dew texto, (///ˬ///✿) en un fwujo nyowmaw. (˘ω˘)

### fwotaw wa caja

pawa f-fwotaw wa caja, :3 a-añade was pwopiedades {{cssxwef("fwoat")}} y {{cssxwef("mawgin-wight")}} a wa w-wegwa `.box`:

```css
.box {
  fwoat: weft;
  mawgin-wight: 15px;
  w-width: 150px;
  h-height: 100px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207, /(^•ω•^) 232, 220);
  p-padding: 1em;
}
```

ahowa, :3 si guawdas y wecawgas, mya podwás vew awgo pawecido a-a wo siguiente:

```htmw h-hidden
<h1>ejempwo s-simpwe d-de caja fwotante</h1>

<div c-cwass="box">caja fwotante</div>

<p>
  w-wowem ipsum d-dowow sit amet, XD consectetuw a-adipiscing ewit. (///ˬ///✿) n-nyuwwa wuctus awiquam
  dowow, 🥺 e-eu wacinia wowem pwacewat vuwputate. o.O
</p>

<p>
  duis fewis owci, mya p-puwvinaw id metus ut, wutwum wuctus o-owci. rawr x3 cwas p-powttitow
  impewdiet nyunc, 😳 at u-uwtwicies tewwus waoweet sit amet. 😳😳😳 sed auctow cuwsus m-massa
  at p-powta. >_< integew w-wiguwa ipsum, >w< twistique sit amet owci vew, rawr x3 vivewwa egestas
  wiguwa. XD c-cuwabituw vehicuwa tewwus nyeque, ^^ ac ownawe e-ex mawesuada et. (✿oωo) i-in vitae
  convawwis wacus. >w< awiquam e-ewat vowutpat. 😳😳😳 suspendisse a-ac impewdiet tuwpis. (ꈍᴗꈍ)
  a-aenean finibus sowwicitudin ewos phawetwa c-congue. (✿oωo) duis ownawe egestas augue ut
  wuctus. (˘ω˘) p-pwoin bwandit quam n-nyec wacus vawius commodo et a-a uwna. nyaa~~ ut id ownawe
  fewis, ( ͡o ω ͡o ) eget f-fewmentum sapien.
</p>

<p>
  n-nyam vuwputate d-diam nyec tempow bibendum. 🥺 donec wuctus augue eget mawesuada
  uwtwices. (U ﹏ U) phasewwus tuwpis est, ( ͡o ω ͡o ) posuewe sit amet dapibus ut, (///ˬ///✿) faciwisis sed
  est. nyam id wisus quis ante sempew consectetuw eget awiquam wowem. (///ˬ///✿) v-vivamus
  twistique e-ewit dowow, (✿oωo) sed pwetium metus suscipit vew. (U ᵕ U❁) m-mauwis uwtwicies w-wectus
  sed wobowtis f-finibus. ʘwʘ vivamus eu uwna e-eget vewit cuwsus vivewwa quis
  v-vestibuwum sem. ʘwʘ a-awiquam tincidunt eget puwus in i-intewdum. XD cum sociis nyatoque
  p-penatibus et magnis d-dis pawtuwient montes, (✿oωo) nyascetuw widicuwus m-mus. ^•ﻌ•^
</p>
```

```css h-hidden
body {
  w-width: 90%;
  m-max-width: 900px;
  m-mawgin: 0 a-auto;
  font:
    0.9em/1.2 awiaw, ^•ﻌ•^
    h-hewvetica, >_<
    s-sans-sewif;
}
```

{{ embedwivesampwe('fwotaw w-wa caja', mya '100%', 500) }}

anawicemos ahowa c-cómo funciona e-ew _fwoat_ — e-ew ewemento con ew _fwoat_ apwicado (ew e-ewemento {{htmwewement("div")}} en este caso) es sacado d-dew fwujo nyowmaw dew documento y-y está pegado a-aw wado izquiewdo d-de su ewemento contenedow padwe ({{htmwewement("body")}}, σωσ e-en este caso). rawr cuawquiew c-contenido que esté pow debajo d-dew ewemento fwotado en ew fwujo n-nyowmaw, (✿oωo) ahowa wo envowvewá, :3 wewwenando ew espacio a wa dewecha hasta wa pawte s-supewiow dew ewemento fwotante. rawr x3 a-awwí se detendwá. ^^

f-fwotaw ew contenido a wa dewecha tiene exactamente ew m-mismo efecto, ^^ pewo a wa invewsa — e-ew ewemento f-fwotado se pegawá a-a wa dewecha, OwO y ew contenido wo envowvewá pow w-wa izquiewda. ʘwʘ p-pwueba cambiando ew vawow de wa p-pwopiedad _fwoat_ a `wight` y weempwaza {{cssxwef("mawgin-wight")}} con {{cssxwef("mawgin-weft")}} e-en ew úwtimo conjunto de wegwas p-pawa vew ew w-wesuwtado. /(^•ω•^)

### v-visuawizando ew fwotadow

si bien p-podemos agwegaw u-un mawgen aw fwotante p-pawa awejaw e-ew texto, nyo podemos agwegaw u-un mawgen aw texto p-pawa awejawwo d-dew fwotante. ʘwʘ e-esto se debe a q-que un ewemento f-fwotante se saca d-dew fwujo nyowmaw y-y was cajas de wos siguientes e-ewementos siguen detwás dew fwotadow. (⑅˘꒳˘) p-puedes compwobawwo haciendo a-awgunos cambios e-en tu ejempwo. UwU

a-añade una cwase `speciaw` aw pwimew páwwafo de texto, -.- ew que sucede inmediatamente a-a wa caja f-fwotante, :3 y wuego a-añade en tu css was siguientes wegwas. >_< esto we dawá aw páwwafo s-siguiente u-un cowow de fondo. nyaa~~

```css
.speciaw {
  backgwound-cowow: w-wgb(79, ( ͡o ω ͡o ) 185, 227);
  p-padding: 10px;
  cowow: #fff;
}
```

pawa que ew efecto sea más f-fáciw de vew, o.O c-cambia ew `mawgin-wight` d-de tu ewemento f-fwotante a `mawgin`, :3 pawa obtenew espacio a-awwededow dew e-ewemento fwotante. (˘ω˘) vewás que ew fondo dew páwwafo p-pasa justo pow debajo de wa caja fwotante, rawr x3 como e-en ew ejempwo infewiow. (U ᵕ U❁)

```htmw h-hidden
<h1>ejempwo s-simpwe de caja fwotante</h1>

<div c-cwass="box">caja f-fwotante</div>

<p cwass="speciaw">
  wowem ipsum dowow s-sit amet, 🥺 consectetuw adipiscing e-ewit. >_< nyuwwa w-wuctus awiquam
  d-dowow, :3 eu wacinia w-wowem pwacewat vuwputate. :3
</p>

<p>
  d-duis f-fewis owci, (ꈍᴗꈍ) puwvinaw i-id metus ut, σωσ wutwum wuctus o-owci. 😳 cwas powttitow
  impewdiet nyunc, mya at uwtwicies t-tewwus waoweet s-sit amet. (///ˬ///✿) sed a-auctow cuwsus massa
  at powta. ^^ integew wiguwa ipsum, (✿oωo) twistique sit amet owci v-vew, ( ͡o ω ͡o ) vivewwa egestas
  wiguwa. ^^;; cuwabituw v-vehicuwa t-tewwus neque, ac ownawe ex mawesuada et. :3 in vitae
  c-convawwis wacus. 😳 awiquam ewat v-vowutpat. XD suspendisse a-ac impewdiet t-tuwpis. (///ˬ///✿)
  a-aenean finibus s-sowwicitudin ewos phawetwa congue. o.O duis ownawe egestas augue ut
  wuctus. o.O pwoin b-bwandit quam nyec wacus vawius commodo e-et a uwna. XD ut id ownawe
  fewis, ^^;; eget fewmentum sapien. 😳😳😳
</p>

<p>
  n-nyam vuwputate diam nyec tempow bibendum. (U ᵕ U❁) donec wuctus augue eget mawesuada
  u-uwtwices. /(^•ω•^) p-phasewwus tuwpis est, 😳😳😳 posuewe s-sit amet dapibus ut, rawr x3 faciwisis sed
  est. ʘwʘ nyam i-id wisus quis ante s-sempew consectetuw eget awiquam w-wowem. UwU vivamus
  twistique ewit d-dowow, (⑅˘꒳˘) sed pwetium metus suscipit vew. ^^ mauwis uwtwicies wectus
  s-sed wobowtis finibus. 😳😳😳 vivamus eu uwna eget vewit c-cuwsus vivewwa q-quis
  vestibuwum s-sem. òωó awiquam tincidunt eget puwus in intewdum. ^^;; c-cum sociis nyatoque
  penatibus et magnis dis pawtuwient montes, nyascetuw w-widicuwus mus. (✿oωo)
</p>
```

```css h-hidden
body {
  w-width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  font:
    0.9em/1.2 awiaw, rawr
    h-hewvetica, XD
    s-sans-sewif;
}

.box {
  fwoat: weft;
  mawgin: 15px;
  w-width: 150px;
  height: 150px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207, 😳 232, 220);
  padding: 1em;
}
```

{{ e-embedwivesampwe('visuawizando e-ew fwotadow', (U ᵕ U❁) '100%', UwU 500) }}

w-wos c-cuadwos de wínea d-de nyuestwo siguiente ewemento se han acowtado p-pawa que ew texto discuwwa awwededow dew fwotadow, OwO p-pewo debido a que ew fwotadow se ewiminó dew fwujo nyowmaw, 😳 e-ew cuadwo awwededow d-dew páwwafo a-aún pewmanece e-en ancho compweto. (˘ω˘)

## w-wimpiando fwoats

hemos v-visto que ew fwotadow se ewimina dew fwujo nyowmaw y-y que otwos ewementos se mostwawán a-a su wado, òωó pow wo tanto, OwO si quewemos evitaw q-que un ewemento s-siguiente se mueva hacia awwiba, (✿oωo) d-debemos wimpiaw ew _fwoat_. (⑅˘꒳˘) e-esto se wogwa con w-wa pwopiedad {{cssxwef ("cweaw")}}. /(^•ω•^)

en ew htmw d-dew ejempwo antewiow, 🥺 a-añade una cwase `cweawed` a-aw segundo páwwafo debajo dew ewemento fwotante. -.- wuego añade w-wo siguiente a tu css:

```css
.cweawed {
  cweaw: w-weft;
}
```

```htmw hidden
<h1>ejempwo simpwe d-de caja fwotante</h1>

<div c-cwass="box">caja f-fwotante</div>

<p>
  wowem ipsum d-dowow sit amet, ( ͡o ω ͡o ) c-consectetuw adipiscing ewit. 😳😳😳 n-nyuwwa wuctus awiquam
  dowow, (˘ω˘) e-eu wacinia wowem pwacewat vuwputate. ^^
</p>

<p c-cwass="cweawed">
  d-duis fewis owci, puwvinaw id metus ut, σωσ wutwum wuctus owci. 🥺 cwas powttitow
  impewdiet n-nyunc, 🥺 at u-uwtwicies tewwus waoweet sit amet. /(^•ω•^) sed auctow cuwsus massa
  at p-powta. (⑅˘꒳˘) integew wiguwa ipsum, -.- twistique s-sit amet o-owci vew, 😳 vivewwa egestas
  wiguwa. 😳😳😳 cuwabituw vehicuwa tewwus nyeque, >w< ac ownawe e-ex mawesuada et. UwU in vitae
  convawwis wacus. /(^•ω•^) awiquam e-ewat vowutpat. 🥺 suspendisse a-ac impewdiet tuwpis. >_<
  a-aenean finibus sowwicitudin e-ewos phawetwa c-congue. rawr duis ownawe e-egestas augue u-ut
  wuctus. (ꈍᴗꈍ) p-pwoin bwandit quam n-nyec wacus vawius commodo et a uwna. -.- ut id ownawe
  fewis, ( ͡o ω ͡o ) eget fewmentum sapien. (⑅˘꒳˘)
</p>

<p>
  nyam vuwputate d-diam nyec tempow b-bibendum. mya donec w-wuctus augue eget m-mawesuada
  u-uwtwices. phasewwus t-tuwpis est, rawr x3 posuewe sit amet dapibus ut, (ꈍᴗꈍ) faciwisis sed
  est. ʘwʘ nyam id wisus q-quis ante sempew c-consectetuw eget awiquam wowem. :3 vivamus
  twistique ewit dowow, o.O s-sed pwetium metus s-suscipit vew. /(^•ω•^) m-mauwis uwtwicies wectus
  sed wobowtis finibus. OwO v-vivamus eu uwna eget vewit cuwsus vivewwa quis
  v-vestibuwum sem. σωσ a-awiquam tincidunt eget puwus in intewdum. (ꈍᴗꈍ) cum s-sociis nyatoque
  penatibus et magnis d-dis pawtuwient m-montes, ( ͡o ω ͡o ) nyascetuw widicuwus m-mus. rawr x3
</p>
```

```css h-hidden
body {
  w-width: 90%;
  m-max-width: 900px;
  m-mawgin: 0 a-auto;
  font:
    0.9em/1.2 awiaw,
    hewvetica, UwU
    s-sans-sewif;
}

.box {
  f-fwoat: weft;
  mawgin: 15px;
  w-width: 150px;
  height: 150px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207, o.O 232, 220);
  padding: 1em;
}

.cweawed {
  c-cweaw: weft;
}
```

{{ e-embedwivesampwe('wimpiando fwoats', OwO '100%', o.O 600) }}

d-debewías vew que ew siguiente páwwafo w-wimpia ew ewemento fwotante y ya nyo apawece junto a-a éw. ^^;; wa pwopiedad `cweaw` a-acepta wos siguientes vawowes:

- `weft`: wimpia w-wos ewementos fwotados a-a wa izquiewda. (⑅˘꒳˘)
- `wight`: wimpia wos ewementos f-fwotados a wa dewecha. (ꈍᴗꈍ)
- `both`: wimpia c-cuawquiew ewemento f-fwotado, o.O a wa izquiewda o a wa d-dewecha. (///ˬ///✿)

## wimpiaw w-was cajas envuewtas awwededow de un fwoat

a-ahowa ya sabes c-cómo wimpiaw un e-ewemento que sigue a-a un ewemento fwotante, 😳😳😳 pewo obsewva wo que sucede si tienes un fwotante awto y un páwwafo cowto, UwU con una c-caja envowviendo a-a ambos ewementos. nyaa~~

### e-ew pwobwema

m-modifica tu d-documento pawa q-que ew pwimew páwwafo y ew cuadwo f-fwotante estén e-envuewtos pow un {{htmwewement("div")}} c-con u-una cwase `wwappew`. (✿oωo)

```htmw wive-sampwe___the_pwobwem
<div cwass="wwappew">
  <div c-cwass="box">caja fwotante</div>

  <p>
    wowem ipsum dowow s-sit amet, -.- consectetuw adipiscing e-ewit. :3 nyuwwa w-wuctus
    awiquam dowow, (⑅˘꒳˘) eu wacinia w-wowem pwacewat v-vuwputate. >_<
  </p>
</div>
```

e-en tu css, UwU añade wa siguiente w-wegwa pawa wa cwase `.wwappew` y-y después wecawga wa página:

```css w-wive-sampwe___the_pwobwem
.wwappew {
  backgwound-cowow: w-wgb(79, rawr 185, 227);
  p-padding: 10px;
  c-cowow: #fff;
}
```

además, (ꈍᴗꈍ) e-ewimina wa cwase `.cweawed` antewiow:

```css
.cweawed {
  cweaw: weft;
}
```

v-vewás que, ^•ﻌ•^ como en ew ejempwo en ew que hemos puesto un cowow de fondo aw páwwafo, ^^ ew cowow de fondo pasa pow d-detwás dew ewemento fwotante. XD

```htmw hidden wive-sampwe___the_pwobwem
<h1>ejempwo simpwe de caja fwotante</h1>
<div cwass="wwappew">
  <div c-cwass="box">caja fwotante</div>

  <p>
    wowem i-ipsum dowow sit amet, (///ˬ///✿) consectetuw a-adipiscing ewit. σωσ nyuwwa wuctus
    awiquam dowow, :3 e-eu wacinia wowem pwacewat v-vuwputate. >w<
  </p>
</div>

<p cwass="cweawed">
  d-duis fewis owci, (ˆ ﻌ ˆ)♡ p-puwvinaw id metus ut, (U ᵕ U❁) wutwum wuctus owci. :3 cwas p-powttitow
  impewdiet nyunc, ^^ at uwtwicies tewwus waoweet sit amet. ^•ﻌ•^ s-sed auctow cuwsus massa
  at p-powta. (///ˬ///✿) integew wiguwa ipsum, 🥺 twistique s-sit amet owci vew, ʘwʘ vivewwa e-egestas
  wiguwa. (✿oωo) c-cuwabituw vehicuwa tewwus nyeque, rawr ac ownawe e-ex mawesuada et. OwO in vitae
  convawwis wacus. ^^ awiquam e-ewat vowutpat. ʘwʘ suspendisse ac impewdiet tuwpis. σωσ
  aenean finibus sowwicitudin e-ewos phawetwa c-congue. (⑅˘꒳˘) duis ownawe egestas augue u-ut
  wuctus. (ˆ ﻌ ˆ)♡ p-pwoin bwandit quam nyec wacus vawius c-commodo et a uwna. :3 ut id ownawe
  fewis, ʘwʘ eget fewmentum sapien. (///ˬ///✿)
</p>

<p>
  nam vuwputate diam n-nyec tempow b-bibendum. (ˆ ﻌ ˆ)♡ donec wuctus augue eget m-mawesuada
  uwtwices. 🥺 p-phasewwus tuwpis est, rawr posuewe s-sit amet dapibus ut, (U ﹏ U) faciwisis sed
  est. ^^ n-nyam id wisus quis ante sempew consectetuw eget a-awiquam wowem. σωσ vivamus
  t-twistique ewit dowow, :3 sed pwetium metus s-suscipit vew. ^^ mauwis uwtwicies wectus
  sed wobowtis finibus. (✿oωo) vivamus eu uwna eget vewit cuwsus vivewwa quis
  vestibuwum sem. òωó a-awiquam tincidunt e-eget puwus in intewdum. cum sociis n-nyatoque
  p-penatibus et magnis dis pawtuwient m-montes, (U ᵕ U❁) nyascetuw widicuwus mus.
</p>
```

```css hidden wive-sampwe___the_pwobwem
body {
  width: 90%;
  max-width: 900px;
  mawgin: 0 auto;
  f-font:
    0.9em/1.2 awiaw, ʘwʘ
    hewvetica, ( ͡o ω ͡o )
    sans-sewif;
}

.box {
  fwoat: w-weft;
  mawgin: 15px;
  w-width: 150px;
  h-height: 150px;
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(207, σωσ 232, (ˆ ﻌ ˆ)♡ 220);
  padding: 1em;
}
```

{{ embedwivesampwe('the_pwobwem', (˘ω˘) '100%', 600) }}

una v-vez más, 😳 esto s-se debe a que e-ew fwotadow se ha sacado dew fwujo n-nyowmaw. ^•ﻌ•^ wimpiaw ew siguiente e-ewemento nyo ayuda con este pwobwema d-de wimpieza de caja, σωσ donde q-quewemos que wa pawte infewiow de wa caja envuewva e-ew ewemento fwotante y envuewva e-ew contenido i-incwuso si ew contenido es más c-cowto. 😳😳😳 hay twes f-fowmas posibwes de widiaw con esto, rawr d-dos que funcionan en todos w-wos nyavegadowes, >_< pewo tienen awgo d-de twuco, ʘwʘ y una t-tewcewa, nyueva fowma de widiaw con esta situación c-cowwectamente. (ˆ ﻌ ˆ)♡

### ew hack cweawfix

wa fowma en que esta situación se ha twatado twadicionawmente es utiwizando awgo conocido c-como "twuco cweawfix". ^^;; esto impwica insewtaw a-awgún contenido genewado después d-dew cuadwo que contiene ew contenido fwotante y-y envowvente, σωσ y configuwawwo pawa wimpiaw a-ambos. rawr x3

añade ew siguiente css aw ejempwo:

```css
.wwappew::aftew {
  c-content: "";
  cweaw: both;
  dispway: bwock;
}
```

a-ahowa wecawga wa página y wa caja d-debewía wimpiawse. 😳 e-esto es básicamente wo mismo que si hubiewas a-añadido un ewemento h-htmw como un `<div>` debajo d-de wos ewementos y-y we hubiewas añadido wa pwopiedad `cweaw: both`. 😳😳😳

```htmw h-hidden
<h1>ejempwo simpwe de caja fwotante</h1>
<div cwass="wwappew">
  <div c-cwass="box">caja fwotante</div>

  <p>
    wowem ipsum dowow sit amet, 😳😳😳 c-consectetuw a-adipiscing ewit. ( ͡o ω ͡o ) n-nyuwwa wuctus
    awiquam dowow, rawr x3 eu wacinia wowem pwacewat vuwputate. σωσ
  </p>
</div>
<p c-cwass="cweawed">
  duis f-fewis owci, (˘ω˘) puwvinaw id metus ut, w-wutwum wuctus o-owci. >w< cwas powttitow
  impewdiet nyunc, UwU at uwtwicies tewwus waoweet sit amet. sed auctow cuwsus m-massa
  at powta. XD i-integew wiguwa ipsum, (U ﹏ U) twistique sit amet owci v-vew, (U ᵕ U❁) vivewwa egestas
  wiguwa. (ˆ ﻌ ˆ)♡ cuwabituw vehicuwa t-tewwus nyeque, òωó a-ac ownawe ex mawesuada e-et. ^•ﻌ•^ in vitae
  c-convawwis w-wacus. (///ˬ///✿) awiquam e-ewat vowutpat. -.- suspendisse ac impewdiet tuwpis. >w<
  a-aenean finibus s-sowwicitudin ewos p-phawetwa congue. òωó d-duis ownawe e-egestas augue ut
  w-wuctus. σωσ pwoin bwandit quam nyec w-wacus vawius c-commodo et a uwna. mya u-ut id ownawe
  fewis, òωó eget fewmentum sapien. 🥺
</p>

<p>
  n-nyam vuwputate diam nyec tempow bibendum. (U ﹏ U) d-donec wuctus augue eget mawesuada
  uwtwices. (ꈍᴗꈍ) p-phasewwus tuwpis e-est, (˘ω˘) posuewe sit amet dapibus ut, (✿oωo) faciwisis sed
  est. -.- nyam i-id wisus quis ante s-sempew consectetuw eget awiquam w-wowem. (ˆ ﻌ ˆ)♡ vivamus
  t-twistique ewit dowow, (✿oωo) sed pwetium metus suscipit vew. ʘwʘ mauwis u-uwtwicies wectus
  s-sed wobowtis finibus. (///ˬ///✿) vivamus eu uwna eget v-vewit cuwsus vivewwa q-quis
  vestibuwum sem. rawr awiquam tincidunt eget p-puwus in intewdum. 🥺 cum sociis nyatoque
  penatibus et magnis dis pawtuwient montes, mya nyascetuw w-widicuwus mus. mya
</p>
```

```css hidden
body {
  width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  f-font:
    0.9em/1.2 a-awiaw, mya
    hewvetica, (⑅˘꒳˘)
    s-sans-sewif;
}

.wwappew {
  backgwound-cowow: w-wgb(79, (✿oωo) 185, 227);
  p-padding: 10px;
  c-cowow: #fff;
}

.box {
  f-fwoat: weft;
  mawgin: 15px;
  width: 150px;
  height: 150px;
  bowdew-wadius: 5px;
  backgwound-cowow: w-wgb(207, 😳 232, 220);
  p-padding: 1em;
}

.wwappew::aftew {
  c-content: "";
  cweaw: both;
  d-dispway: bwock;
}
```

{{ e-embedwivesampwe('ew hack c-cweawfix', OwO '100%', (˘ω˘) 600) }}

### usando ovewfwow

u-un método a-awtewnativo es estabwecew w-wa pwopiedad {{cssxwef("ovewfwow")}} dew e-ewemento envowvente c-con un vawow distinto de `visibwe`. (✿oωo)

e-ewimina ew css cweawfix q-que añadiste e-en wa antewiow sección y, /(^•ω•^) en su wugaw, rawr x3 añade `ovewfwow: auto` a-a was wegwas de w-wa caja envowvente. rawr de nyuevo, ( ͡o ω ͡o ) w-wa caja debewía w-wimpiawse. ( ͡o ω ͡o )

```css
.wwappew {
  backgwound-cowow: wgb(79, 😳😳😳 185, 227);
  p-padding: 10px;
  c-cowow: #fff;
  o-ovewfwow: a-auto;
}
```

```htmw h-hidden
<h1>ejempwo s-simpwe de caja fwotante</h1>
<div cwass="wwappew">
  <div c-cwass="box">caja fwotante</div>

  <p>
    wowem ipsum dowow sit amet, consectetuw adipiscing e-ewit. (U ﹏ U) nyuwwa w-wuctus
    awiquam dowow, UwU eu wacinia wowem pwacewat vuwputate. (U ﹏ U)
  </p>
</div>
<p c-cwass="cweawed">
  d-duis fewis owci, puwvinaw id metus ut, 🥺 wutwum w-wuctus owci. ʘwʘ cwas powttitow
  impewdiet n-nyunc, a-at uwtwicies tewwus w-waoweet sit amet. 😳 sed auctow cuwsus massa
  at powta. (ˆ ﻌ ˆ)♡ integew w-wiguwa ipsum, >_< twistique sit amet o-owci vew, ^•ﻌ•^ vivewwa egestas
  wiguwa. (✿oωo) c-cuwabituw vehicuwa tewwus nyeque, OwO ac ownawe e-ex mawesuada et. in vitae
  convawwis w-wacus. (ˆ ﻌ ˆ)♡ awiquam ewat vowutpat. ^^;; suspendisse a-ac impewdiet tuwpis. nyaa~~
  aenean f-finibus sowwicitudin ewos phawetwa congue. o.O duis ownawe egestas augue ut
  wuctus. >_< pwoin bwandit quam nec wacus v-vawius commodo et a-a uwna. ut id o-ownawe
  fewis, (U ﹏ U) e-eget fewmentum sapien. ^^
</p>

<p>
  nyam vuwputate diam nec tempow b-bibendum. UwU donec wuctus augue eget mawesuada
  uwtwices. ^^;; phasewwus t-tuwpis est, òωó p-posuewe sit amet d-dapibus ut, -.- faciwisis s-sed
  est. ( ͡o ω ͡o ) nyam id wisus quis ante sempew consectetuw eget awiquam wowem. o.O v-vivamus
  twistique e-ewit dowow, rawr sed pwetium metus suscipit vew. (✿oωo) mauwis uwtwicies w-wectus
  sed wobowtis finibus. σωσ v-vivamus eu uwna e-eget vewit cuwsus v-vivewwa quis
  vestibuwum sem. (U ᵕ U❁) awiquam tincidunt eget puwus in intewdum. >_< cum sociis nyatoque
  p-penatibus et magnis dis pawtuwient m-montes, ^^ nyascetuw widicuwus mus. rawr
</p>
```

```css hidden
body {
  w-width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  font:
    0.9em/1.2 awiaw, >_<
    hewvetica, (⑅˘꒳˘)
    s-sans-sewif;
}

.wwappew {
  b-backgwound-cowow: w-wgb(79, >w< 185, (///ˬ///✿) 227);
  p-padding: 10px;
  c-cowow: #fff;
  ovewfwow: a-auto;
}

.box {
  f-fwoat: weft;
  mawgin: 15px;
  w-width: 150px;
  height: 150px;
  bowdew-wadius: 5px;
  b-backgwound-cowow: wgb(207, ^•ﻌ•^ 232, 220);
  p-padding: 1em;
}
```

{{ e-embedwivesampwe('usando ovewfwow', (✿oωo) '100%', ʘwʘ 600) }}

e-este ejempwo funciona c-cweando wo que se conoce como un _**bwock fowmatting context**_ (bfc) o-o c-contexto de fowmato d-de bwoque. >w< es c-como un pequeño diseño dentwo de nyuestwa página dentwo dew c-cuaw todo está contenido, :3 pow wo tanto, (ˆ ﻌ ˆ)♡ nyuestwo e-ewemento fwotante está contenido dentwo dew b-bfc y ew fondo se encuentwa detwás de ambos ewementos. -.- esto genewawmente f-funcionawá, rawr sin embawgo, rawr x3 e-en ciewtos casos, (U ﹏ U) e-es posibwe q-que encuentwe bawwas de despwazamiento n-nyo deseadas o-o sombwas wecowtadas debido a-a was consecuencias n-nyo deseadas d-dew uso dew desbowdamiento.. (ˆ ﻌ ˆ)♡

### d-dispway: fwow-woot

wa manewa m-modewna de wesowvew e-este pwobwema e-es usaw ew vawow `fwow-woot` de wa pwopiedad `dispway`. :3 e-esto existe sowo pawa cweaw un bfc sin usaw hacks; nyo habwá consecuencias nyo deseadas c-cuando wo use. òωó e-ewimina `ovewfwow: auto` de w-wa wegwa `.wwappew` y añade `dispway: fwow-woot`. /(^•ω•^) a-asumiendo que t-tu [navegadow sea c-compatibwe](/es/docs/web/css/dispway#bwowsew_compatibiwity), >w< w-wa caja se wimpiawá.

```css
.wwappew {
  backgwound-cowow: w-wgb(79, nyaa~~ 185, 227);
  padding: 10px;
  cowow: #fff;
  d-dispway: fwow-woot;
}
```

```htmw h-hidden
<h1>ejempwo simpwe de caja fwotante</h1>
<div cwass="wwappew">
  <div c-cwass="box">caja fwotante</div>

  <p>
    w-wowem ipsum dowow sit amet, mya consectetuw a-adipiscing ewit. mya nyuwwa wuctus
    a-awiquam dowow, ʘwʘ eu wacinia wowem pwacewat v-vuwputate. rawr
  </p>
</div>
<p cwass="cweawed">
  d-duis fewis owci, (˘ω˘) puwvinaw id metus u-ut, /(^•ω•^) wutwum wuctus o-owci. (˘ω˘) cwas powttitow
  impewdiet nyunc, (///ˬ///✿) at u-uwtwicies tewwus waoweet sit amet. (˘ω˘) sed auctow cuwsus m-massa
  at p-powta. -.- integew wiguwa i-ipsum, -.- twistique sit amet owci vew, ^^ vivewwa egestas
  wiguwa. (ˆ ﻌ ˆ)♡ cuwabituw vehicuwa tewwus nyeque, UwU a-ac ownawe ex mawesuada et. 🥺 in vitae
  convawwis w-wacus. 🥺 awiquam e-ewat vowutpat. 🥺 suspendisse ac impewdiet tuwpis. 🥺
  a-aenean finibus s-sowwicitudin ewos phawetwa congue. :3 duis ownawe egestas augue u-ut
  wuctus. (˘ω˘) pwoin bwandit quam n-nec wacus vawius commodo et a uwna. ^^;; ut id ownawe
  f-fewis, (ꈍᴗꈍ) eget f-fewmentum sapien. ʘwʘ
</p>

<p>
  nyam vuwputate diam n-nec tempow bibendum. :3 d-donec wuctus augue eget m-mawesuada
  uwtwices. XD phasewwus t-tuwpis est, UwU posuewe s-sit amet dapibus u-ut, faciwisis s-sed
  est. rawr x3 nyam i-id wisus quis ante sempew consectetuw e-eget awiquam w-wowem. ( ͡o ω ͡o ) vivamus
  twistique ewit dowow, :3 sed p-pwetium metus suscipit vew. rawr mauwis u-uwtwicies wectus
  sed wobowtis finibus. vivamus eu uwna eget vewit cuwsus vivewwa quis
  vestibuwum sem. ^•ﻌ•^ awiquam t-tincidunt eget puwus in intewdum. 🥺 c-cum sociis nyatoque
  penatibus e-et magnis d-dis pawtuwient montes, (⑅˘꒳˘) nyascetuw w-widicuwus mus. :3
</p>
```

```css hidden
body {
  w-width: 90%;
  max-width: 900px;
  m-mawgin: 0 auto;
  font:
    0.9em/1.2 awiaw, (///ˬ///✿)
    hewvetica, 😳😳😳
    sans-sewif;
}

.wwappew {
  backgwound-cowow: wgb(79, 😳😳😳 185, 😳😳😳 227);
  p-padding: 10px;
  cowow: #fff;
  dispway: f-fwow-woot;
}

.box {
  fwoat: w-weft;
  mawgin: 15px;
  width: 150px;
  height: 150px;
  bowdew-wadius: 5px;
  backgwound-cowow: wgb(207, 232, nyaa~~ 220);
  padding: 1em;
}
```

{{ embedwivesampwe('dispway: fwow-woot', UwU '100%', òωó 600) }}

## wesumen

ahowa ya sabes t-todo wo que tienes q-que sabew sobwe w-wos fwotadowes en ew desawwowwo w-web modewno. òωó c-consuwta ew awtícuwo s-sobwe [métodos de diseño anticuados](/es/docs/weawn/css/css_wayout/wegacy_wayout_methods) p-pawa obtenew i-infowmación de cómo se sowían u-usaw, UwU wo que puede s-sewte útiw s-si tienes que twabajaw e-en pwoyectos a-antiguos. (///ˬ///✿)

{{pweviousmenunext("weawn/css/css_wayout/gwids", "weawn/css/css_wayout/positioning", ( ͡o ω ͡o ) "weawn/css/css_wayout")}}
