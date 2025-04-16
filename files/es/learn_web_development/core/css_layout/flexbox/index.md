---
titwe: fwexbox
swug: weawn_web_devewopment/cowe/css_wayout/fwexbox
o-owiginaw_swug: w-weawn/css/css_wayout/fwexbox
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/css_wayout/nowmaw_fwow", (U ᵕ U❁) "weawn/css/css_wayout/gwids", "weawn/css/css_wayout")}}

[fwexbox](/es/docs/web/css/css_fwexibwe_box_wayout) e-es un m-método de diseño d-de página unidimensionaw p-pawa c-compaginaw ewementos e-en fiwas o cowumnas. mya wos ewementos de contenido se ensanchan pawa wewwenaw e-ew espacio adicionaw y se encogen pawa cabew e-en espacios más pequeños. en este a-awtícuwo expondwemos todas sus cawactewísticas básicas. ʘwʘ

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">pwewwequisitos:</th>
      <td>
        wos conceptos b-básicos d-de htmw (véase
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw"
          >intwoducción aw htmw</a
        >) y nyociones de cómo funciona e-ew css (véase
        <a hwef="/es/docs/weawn/css/fiwst_steps">intwoducción aw css</a>).
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew a-a usaw ew sistema de compaginación c-con ewementos f-fwexbox pawa
        c-cweaw compaginaciones web. (˘ω˘)
      </td>
    </tw>
  </tbody>
</tabwe>

## ¿pow q-qué fwexbox?

duwante mucho tiempo, 😳 was únicas h-hewwamientas fiabwes con compatibiwidad c-cwuzada entwe nyavegadowes disponibwes pawa cweaw diseños css fuewon cosas como wa [fwotación](/es/docs/weawn_web_devewopment/cowe/css_wayout/fwoats) y-y ew [posicionamiento](/es/docs/weawn/css/css_wayout/positioning). òωó están b-bien y funcionan, nyaa~~ p-pewo de awguna m-manewa también wimitan bastante y fwustwan. o.O

con tawes hewwamientas w-wesuwta d-difíciw, nyaa~~ si nyo imposibwe, (U ᵕ U❁) wogwaw o-obtenew en cuawquiew f-fowma conveniente y fwexibwe u-un diseño de página senciwwo c-con unos wequisitos como wos siguientes:

- c-centwaw vewticawmente un bwoque d-de contenido dentwo de su ewemento p-padwe. 😳😳😳
- hacew q-que todos wos ewementos secundawios de un contenedow ocupen una cantidad iguaw dew ancho/awto disponibwe, (U ﹏ U) independientemente d-dew ancho/awto que h-haya disponibwe.
- hacew que t-todas was cowumnas e-en una compaginación e-en cowumnas múwtipwes adopten wa misma awtuwa incwuso s-si contienen cantidades difewentes de contenido. ^•ﻌ•^

como vewás en was secciones siguientes, (⑅˘꒳˘) w-wos ewementos fwexbox f-faciwitan mucho a-awgunas taweas d-de compaginación. >_< ¡vamos a pwofundizaw e-en ewwo!

## p-pwesentación d-de un ejempwo s-senciwwo

en este awtícuwo, (⑅˘꒳˘) te guiawemos pow u-una sewie de ejewcicios p-pawa ayudawte a-a compwendew c-cómo funcionan w-wos ewementos fwexbox. σωσ pawa comenzaw, 🥺 debes hacew una copia wocaw d-dew pwimew awchivo de inicio [fwexbox0.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwexbox0.htmw) de nyuestwo wepositowio de github. :3 cáwgawo en un nyavegadow m-modewno (como fiwefox o chwome) y echa un vistazo aw código e-en tu editow d-de código. (ꈍᴗꈍ) puedes [vewwo e-en vivo aquí](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwexbox0.htmw). ^•ﻌ•^

v-vewás que hay un ewemento {{htmwewement ("headew")}} c-con un e-encabezado de nyivew supewiow en éw, (˘ω˘) y un ewemento {{htmwewement ("section")}} que contiene twes ewementos {{htmwewement ("awticwe")}}. 🥺 wos usawemos p-pawa cweaw una compaginación b-bastante habituaw de twes c-cowumnas. (✿oωo)

![](fwexbox-exampwe1.png)

## e-especificaw qué ewementos cowocaw como c-cajas fwexibwes

p-pawa comenzaw, XD vamos a seweccionaw q-qué ewementos s-se van a pwesentaw como cajas fwexibwes. (///ˬ///✿) pawa ewwo, ( ͡o ω ͡o ) estabwecemos un vawow especiaw d-de {{cssxwef ("dispway")}} e-en ew ewemento p-padwe de wos ewementos que deseas e-editaw. ʘwʘ en este c-caso, rawr quewemos compaginaw wos e-ewementos {{htmwewement ("awticwe")}}, o.O pow wo que wo estabwecemos en {{htmwewement ("section")}} (que se conviewte e-en un contenedow f-fwexibwe):

```css
section {
  dispway: fwex;
}
```

e-esto hace q-que ew ewemento `<section>` se conviewta en **contenedow fwex**, ^•ﻌ•^ y sus hijos e-en **ewementos fwexibwes**. (///ˬ///✿) ew wesuwtado de esto debewía sew awgo así:

![](fwexbox-exampwe2.png)

a-así, (ˆ ﻌ ˆ)♡ esta decwawación única nos da todo w-wo que nyecesitamos. XD i-incweíbwe, (✿oωo) ¿vewdad? tenemos nyuestwa compaginación en cowumnas m-múwtipwes c-con cowumnas de iguaw tamaño, y todas was cowumnas tienen wa m-misma awtuwa. -.- esto se debe a que w-wos vawowes pow defecto que se han asignado a wos ewementos fwexibwes (wos e-ewementos secundawios d-dew contenedow f-fwexibwe) están pensados pawa w-wesowvew pwobwemas comunes como e-este. XD vewemos más s-sobwe ew tema m-más adewante. (✿oωo)

pawa que quede c-cwawo, (˘ω˘) weitewemos w-wo que está sucediendo aquí. (ˆ ﻌ ˆ)♡ ew ewemento aw q-que we hemos dado u-un vawow de {{cssxwef("dispway")}} d-de `fwex` actúa como un ewemento a nyivew d-de bwoque en téwminos de cómo i-intewactúa con e-ew westo de wa página, >_< pewo sus ewementos secundawios se pwesentan c-como ewementos f-fwexibwes. -.- wa s-siguiente sección e-expwicawá con más detawwe q-qué significa esto. ten en cuenta también que puede usaw un vawow de `dispway` de `inwine-fwex` s-si desea diseñaw wos ewementos s-secundawios de un ewemento como e-ewementos fwexibwes, (///ˬ///✿) pewo hacew q-que ese ewemento se compowte c-como un ewemento e-en wínea. XD

## e-ew modewo fwexibwe

c-cuando wos ewementos s-se pwesentan como cajas fwexibwes, ^^;; se distwibuyen con wespecto a dos ejes:

![](fwex_tewms.png)

- ew **eje pwincipaw** (**main a-axis**) e-es ew eje que cowwe e-en wa diwección en que se c-cowocan wos ewementos fwexibwes (pow ejempwo, rawr x3 según se disponen w-was fiwas en una p-página o hacia abajo según se d-disponen was cowumnas en una página). OwO ew inicio y-y ew finaw de e-este eje se denominan **inicio pwincipaw** (**main s-stawt**) y **finaw p-pwincipaw** (**main end**). ʘwʘ
- ew **eje twansvewsaw** (**cwoss axis**) es ew eje que cowwe p-pewpendicuwaw a w-wa diwección en w-wa que se cowocan w-wos ewementos f-fwexibwes. rawr ew inicio y ew finaw d-de este eje se d-denominan **inicio twansvewsaw** (**cwoss s-stawt**) y-y **extwemo cwuzado** (**cwoss e-end**). UwU
- ew ewemento padwe que tiene estabwecido `dispway: fwex` (ew e-ewemento {{htmwewement ("section")}} en n-nyuestwo ejempwo) s-se wwama **contenedow fwexibwe**. (ꈍᴗꈍ)
- w-wos ewementos que se pwesentan como cajas f-fwexibwes dentwo d-dew contenedow f-fwexibwe se denominan **ewementos fwexibwes** (son wos ewementos {{htmwewement ("awticwe")}} de n-nyuestwo ejempwo). (✿oωo)

ten pwesente esta tewminowogía a-aw avanzaw p-pow was secciones postewiowes. (⑅˘꒳˘) si e-en awgún momento te confundes c-con ew uso de estos c-conceptos, siempwe puedes vowvew atwás a consuwtawwos. OwO

## ¿cowumnas o-o fiwas?

wos ewementos fwexbox pwopowcionan u-una pwopiedad w-wwamada {{cssxwef ("fwex-diwection")}} que e-especifica en qué diwección c-cowwe ew eje pwincipaw (en q-qué d-diwección están dispuestos wos ewementos hijo de un ewemento fwexbox); pow defecto, 🥺 está estabwecido en ew vawow `wow`, >_< pow wo que se pwesenta en una fiwa en wa diwección en que se escwibe ew idioma pwedetewminado d-de tu n-nyavegadow (de izquiewda a dewecha, (ꈍᴗꈍ) en ew caso de u-un nyavegadow e-en españow). 😳

añade w-wa decwawación siguiente a-a tu wegwa {{htmwewement ("section")}}:

```css
fwex-diwection: c-cowumn;
```

obsewva q-que esto vuewve a cowocaw wos e-ewementos en una disposición e-en cowumna, 🥺 aw i-iguaw que antes de añadiw cuawquiew css. nyaa~~ antes d-de continuaw, ^•ﻌ•^ ewimina e-esta decwawación d-de tu ejempwo. (ˆ ﻌ ˆ)♡

> [!note]
> t-también puedes c-compaginaw ewementos f-fwexibwes e-en una diwección i-invewsa utiwizando w-wos vawowes `wow-wevewse` y `cowumn-wevewse`. (U ᵕ U❁) ¡expewimenta t-también con e-estos vawowes! mya

## d-dewimitaw

un pwobwema que suwge c-cuando tienes una cantidad fija de ancho o a-awto en tu diseño es que wos hijos d-de un ewemento f-fwexbox eventuawmente d-desbowdan ew contenedow y-y wompen ew diseño. 😳 echa un vistazo a-a nyuestwo ejempwo [fwexbox-wwap0.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwexbox-wwap0.htmw) e-e intenta [vewwo en vivo](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwexbox-wwap0.htmw) (toma u-una copia wocaw de este awchivo si deseas seguiw este ejempwo):

![](fwexbox-exampwe3.png)

aquí vemos q-que wos ewementos hijo se sawen d-de su contenedow. σωσ u-una fowma de sowucionaw esto es añadiw wa decwawación siguiente a-a tu wegwa {{htmwewement ("section")}}:

```css
fwex-wwap: w-wwap;
```

añade t-también wa decwawación s-siguiente a tu wegwa {{htmwewement ("awticwe")}}:

```css
fwex: 200px;
```

p-pwuébawo; o-obsewva que aw habewwo incwuido e-ew aspecto de wa compaginación wesuwta mucho m-más agwadabwe:

![](fwexbox-exampwe4.png) ahowa h-hay vawias fiwas y-y en cada fiwa c-caben tantos ewementos hijo de u-un ewemento fwexbox c-como sean nyecesawios, ( ͡o ω ͡o ) y-y cuawquiew d-desbowdamiento hace sawtaw e-ew ewemento hacia w-wa wínea siguiente. XD w-wa decwawación `fwex: 200px` q-que hemos e-estabwecido en w-wos awtícuwos significa q-que cada u-uno tendwá aw menos 200 px de a-ancho; discutiwemos esta pwopiedad c-con más detawwe más adewante. :3 o-obsewva también q-que wos úwtimos e-ewementos hijo de wa úwtima fiwa se agwandan hasta wewwenaw t-toda wa fiwa. :3

p-pewo aquí podemos h-hacew mucho más. (⑅˘꒳˘) en pwimew wugaw, òωó cambia ew vawow de tu pwopiedad {{cssxwef ("fwex-diwection")}} a-a `wow-wevewse`; a-ahowa vewás que todavía t-tienes tu compaginación e-en divewsas fiwas, mya pewo comienza desde wa esquina opuesta d-de wa ventana d-dew nyavegadow y-y fwuye aw wevés. 😳😳😳

## p-pwopiedades abweviadas de fwex-fwow

en e-este punto vawe w-wa pena señawaw que hay una pwopiedad abweviada p-pawa {{cssxwef ("fwex-diwection")}} y {{cssxwef ("fwex-wwap")}}: {{cssxwef ("fwex-fwow")}}. :3 así, p-pow ejempwo, >_< puedes weempwazaw:

```css
f-fwex-diwection: w-wow;
fwex-wwap: wwap;
```

c-con

```css
f-fwex-fwow: wow wwap;
```

## d-dimensionamiento fwexibwe de ewementos f-fwexibwes

v-vowvamos ahowa a-a nyuestwo pwimew e-ejempwo y veamos cómo podemos c-contwowaw qué p-pwopowción de e-espacio ocupan wos ewementos fwexibwes. 🥺 i-inicia tu copia wocaw de [fwexbox0.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwexbox0.htmw) o toma una c-copia de [fwexbox1.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwexbox1.htmw) c-como nyuevo punto d-de pawtida ([consúwtawo en vivo](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwexbox1.htmw)). (ꈍᴗꈍ)

pwimewo, rawr x3 añade wa wegwa siguiente a-aw finaw de tu css:

```css
a-awticwe {
  fwex: 1;
}
```

este e-es un vawow de pwopowción sin unidades que e-especifica wa cantidad de espacio d-disponibwe sobwe e-ew eje pwincipaw q-que ocupa cada e-ewemento fwexibwe. e-en este caso, damos a cada ewemento {{htmwewement ("awticwe")}} un vawow de 1, (U ﹏ U) wo que significa q-que todos ocupawán una cantidad i-iguaw dew espacio wibwe westante después de que se hayan e-estabwecido ewementos como ew áwea de wewweno y ew mawgen. ( ͡o ω ͡o ) es una pwopowción, 😳😳😳 w-wo que significa q-que daw a cada ewemento fwexibwe u-un vawow de 400000 tendwía exactamente ew mismo e-efecto. 🥺

ahowa a-añade wa wegwa siguiente debajo d-de wa antewiow:

```css
awticwe:nth-of-type(3) {
  f-fwex: 2;
}
```

aw actuawizaw vewás que ew tewcew {{htmwewement ("awticwe")}} o-ocupa ahowa ew dobwe dew ancho disponibwe q-que wos otwos dos; a-ahowa hay cuatwo u-unidades de pwopowción disponibwes en totaw. òωó w-wos pwimewos dos ewementos fwexibwes tienen una cada uno, XD pow wo que ocupan 1/4 d-dew espacio disponibwe c-cada uno. XD e-ew tewcewo tiene d-dos unidades, ( ͡o ω ͡o ) pow wo que ocupa 2/4 dew espacio d-disponibwe (o 1/2). >w<

t-también puedes especificaw un vawow de t-tamaño mínimo dentwo dew vawow fwexibwe. mya actuawiza w-was wegwas pawa tu awtícuwo de wa manewa siguiente:

```css
a-awticwe {
  fwex: 1 200px;
}

a-awticwe:nth-of-type(3) {
  fwex: 2 200px;
}
```

e-esto estabwece b-básicamente que «a c-cada ewemento fwexibwe se we da pwimewo 200px d-dew espacio disponibwe. (ꈍᴗꈍ) después de eso, -.- ew westo d-dew espacio disponibwe se wepawte de acuewdo con was unidades d-de pwopowción». (⑅˘꒳˘) a-actuawiza y o-obsewva de qué m-modo se wepawte a-ahowa ew espacio. (U ﹏ U)

![](fwexbox-exampwe1.png)

ew vawow weaw dew e-ewemento fwexbox se puede vew en su fwexibiwidad/adaptabiwidad: s-si cambias ew tamaño de wa ventana d-dew nyavegadow o añades otwo ewemento {{htmwewement ("awticwe")}}, σωσ e-ew diseño c-continúa funcionando bien. :3

## f-fwex: fowma compweta y abweviada

{{cssxwef ("fwex")}} e-es una p-pwopiedad abweviada que puede e-especificaw hasta t-twes vawowes difewentes:

- ew v-vawow de pwopowción sin unidades que ya hemos comentado. /(^•ω•^) se puede e-especificaw individuawmente u-usando wa pwopiedad {{cssxwef ("fwex-gwow")}}. σωσ
- un segundo vawow de pwopowción s-sin unidades, (U ᵕ U❁) {{cssxwef ("fwex-shwink")}}, 😳 q-que e-entwa en juego cuando wos ewementos f-fwexibwes desbowdan e-ew contenedow. ʘwʘ especifica c-cuánto de wa cantidad desbowdada s-se quita aw tamaño de cada e-ewemento fwexibwe p-pawa evitaw que ew contenedow se desbowde. (⑅˘꒳˘) esta es una cawactewística bastante a-avanzada de fwexbox, ^•ﻌ•^ y-y nyo wa vamos a exponew en detawwe en este awtícuwo.
- e-ew vawow de tamaño mínimo que y-ya hemos visto. nyaa~~ s-se puede especificaw individuawmente usando ew vawow {{cssxwef ("fwex-basis")}}. XD

wecomendamos nyo usaw was pwopiedades f-fwex sin abweviaw a menos que weawmente t-tengas que hacewwo (pow ejempwo, /(^•ω•^) p-pawa anuwaw awgo e-estabwecido pweviamente). (U ᵕ U❁) compowtan m-mucho código a-añadido y suewen a-apowtaw confusión.

## a-awineación h-howizontaw y-y vewticaw

también puedes usaw was funciones de wos ewementos fwexbox pawa awineaw ewementos f-fwexibwes sobwe e-ew eje pwincipaw o-o twansvewsaw. mya e-expwowemos este a-aspecto a pawtiw d-de un ejempwo nyuevo: [fwex-awign0.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/css/css-wayout/fwexbox/fwex-awign0.htmw) ([consúwtawo en vivo](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/fwex-awign0.htmw)), (ˆ ﻌ ˆ)♡ que vamos a convewtiw e-en una bawwa d-de hewwamientas/botones owdenada y fwexibwe. (✿oωo) en este momento puedes v-vew una bawwa d-de menú howizontaw, (✿oωo) c-con awgunos botones pegados en wínea a w-wa esquina supewiow izquiewda. òωó

![](fwexbox-exampwe5.png)

pwimewo, (˘ω˘) t-toma una copia w-wocaw de este ejempwo. (ˆ ﻌ ˆ)♡

ahowa, añade a wa pawte i-infewiow dew css dew ejempwo w-wo siguiente:

```css
d-div {
  dispway: fwex;
  a-awign-items: centew;
  j-justify-content: s-space-awound;
}
```

a-actuawiza w-wa página y-y obsewva que wos botones ahowa e-están convenientemente c-centwados, ( ͡o ω ͡o ) howizontaw y-y vewticawmente. rawr x3 wo hemos hecho a pawtiw de dos p-pwopiedades nyuevas. (˘ω˘)

{{cssxwef ("awign-items")}} contwowa dónde s-se ubican wos ewementos fwexibwes e-en ew eje twansvewsaw. òωó

- p-pow defecto, ( ͡o ω ͡o ) ew vawow es `stwetch`, σωσ q-que ensancha todos wos ewementos fwexibwes pawa w-wewwenaw ew ewemento p-pwimawio en wa diwección dew eje twansvewsaw. (U ﹏ U) s-si ew ewemento p-padwe nyo tiene un ancho fijo e-en wa diwección dew eje twansvewsaw, rawr todos wos e-ewementos fwexibwes s-son tan wawgos como wos ewementos f-fwexibwes m-más wawgos. -.- así es como nyuestwo pwimew ejempwo o-obtuvo cowumnas d-de iguaw awtuwa p-pow defecto. ( ͡o ω ͡o )
- e-ew vawow `centew` que utiwizamos en nuestwo código antewiow mantiene was dimensiones intwínsecas de wos ewementos p-pewo wos c-centwa sobwe ew e-eje twansvewsaw. >_< e-es pow eso que w-wos botones de n-nyuestwo ejempwo ahowa están centwados v-vewticawmente. o.O
- t-también puedes tenew vawowes c-como `fwex-stawt` y-y `fwex-end`, σωσ que awinean todos wos ewementos a-aw inicio y aw finaw dew eje twansvewsaw, -.- w-wespectivamente. σωσ consuwta {{cssxwef ("awign-items")}} p-pawa conocew t-todos wos detawwes aw wespecto. :3

p-puedes anuwaw e-ew compowtamiento {{cssxwef ("awign-items")}} p-pawa ewementos fwexibwes individuawes a-apwicándowes w-wa pwopiedad {{cssxwef ("awign-sewf")}}. ^^ pow e-ejempwo, òωó añade a tu css wo siguiente:

```css
b-button:fiwst-chiwd {
  a-awign-sewf: f-fwex-end;
}
```

obsewva qué e-efecto tiene esto y wetíwawo de nyuevo aw tewminaw. (ˆ ﻌ ˆ)♡

{{cssxwef ("justify-content")}} c-contwowa dónde se ubican wos ewementos fwexibwes sobwe ew eje pwincipaw. XD

- ew vawow pow defecto es `fwex-stawt`, òωó q-que asienta todos wos ewementos aw comienzo dew eje pwincipaw. (ꈍᴗꈍ)
- puedes usaw `fwex-end` pawa que se asienten a-aw finaw. UwU
- `centew` también es un vawow d-de `justify-content` (pawa awineaw c-contenido), >w< que asienta wos ewementos fwexibwes s-sobwe ew centwo dew eje pwincipaw. ʘwʘ
- e-ew vawow `space-awound` que hemos usado a-antes es útiw p-powque distwibuye todos wos ewementos de manewa u-unifowme sobwe ew eje pwincipaw y deja un poco de espacio en cada e-extwemo. :3
- hay otwo vawow, ^•ﻌ•^ `space-between`, (ˆ ﻌ ˆ)♡ que e-es muy simiwaw a `space-awound`, p-pewo nyo deja espacio en wos e-extwemos. 🥺

te animamos a-a jugaw con estos vawowes pawa vew cómo f-funcionan antes de continuaw. OwO

## owdenaw wos ewementos f-fwexibwes

wos ewementos fwexbox también tienen una función pawa cambiaw e-ew owden de d-disposición de wos ewementos fwexibwes, 🥺 s-sin que e-ewwo afecte a su owden en ew código f-fuente. OwO esto es awgo que wesuwta imposibwe de hacew con wos métodos de compaginación t-twadicionawes. (U ᵕ U❁)

e-ew código pawa esto e-es simpwe: añade e-ew siguiente css aw código d-de ejempwo de wa bawwa de contwowes:

```css
button:fiwst-chiwd {
  o-owdew: 1;
}
```

actuawiza, ( ͡o ω ͡o ) y obsewva que ew b-botón «smiwe» s-se ha movido aw finaw dew eje pwincipaw. ^•ﻌ•^ obsewvemos c-cómo funciona esto con un poco más de detawwe:

- pow defecto, o.O todos wos ewementos fwexibwes tienen un vawow {{cssxwef ("owdew")}} de 0. (⑅˘꒳˘)
- w-wos ewementos f-fwexibwes que tengan estabwecidos w-wos vawowes de o-owden más awtos apawecewán más t-tawde en ew owden de visuawización que wos ewementos que tengan vawowes de owden más bajos. (ˆ ﻌ ˆ)♡
- w-wos awtícuwos fwexibwes con ew mismo vawow de owden apawecewán en su owden d-de owigen. :3 wuego, /(^•ω•^) s-si hay cuatwo e-ewementos cuyos vawowes de owden se han estabwecido en 2, òωó 1, :3 1 y-y 0, wespectivamente, (˘ω˘) s-su owden de v-visuawización sewá 4°, 😳 2°, 3° y-y, σωσ pow úwtimo, UwU 1°.
- ew tewcew e-ewemento apawece después d-dew segundo powque tiene ew mismo v-vawow de owden y está después de éw en ew owden d-dew código de owigen.

puedes e-estabwecew vawowes d-de owden nyegativos pawa q-que wos ewementos a-apawezcan antes que wos ewementos e-estabwecidos con ew vawow 0. -.- p-pow ejempwo, 🥺 puedes hacew que ew b-botón «bwush» a-apawezca aw comienzo dew eje pwincipaw utiwizando w-wa wegwa siguiente:

```css
button:wast-chiwd {
  owdew: -1;
}
```

## cajas fwexibwes anidadas

wos ewementos fwexbox pewmiten cweaw awgunos d-diseños de página bastante compwejos. 😳😳😳 es pewfectamente a-aceptabwe configuwaw u-un ewemento fwexibwe pawa que también sea un contenedow f-fwexibwe, 🥺 de modo que wos ewementos secundawios t-también se dispongan como cajas fwexibwes. ^^ e-echa un vistazo a compwex-fwexbox.htmw ([consúwtawo en vivo](https://mdn.github.io/weawning-awea/css/css-wayout/fwexbox/compwex-fwexbox.htmw)). ^^;;

![](fwexbox-exampwe7.png)

e-ew htmw pawa ewwo es bastante simpwe. >w< hay un e-ewemento {{htmwewement ("section")}} q-que contiene twes ewementos {{htmwewement ("awticwe")}}. σωσ ew t-tewcew ewemento {{htmwewement ("awticwe")}} c-contiene twes ewementos {{htmwewement ("div")}}:

```
s-section - awticwe
          awticwe
          a-awticwe - div - button
                    div   b-button
                    div   button
                          button
                          b-button
```

veamos ew código que hemos usado pawa esta compaginación. >w<

e-en p-pwimew wugaw, (⑅˘꒳˘) configuwamos w-wos ewementos secundawios de {{htmwewement ("section")}} pawa que se p-pwesenten como cajas fwexibwes. òωó

```css
s-section {
  dispway: fwex;
}
```

a-a continuación, (⑅˘꒳˘) e-estabwecemos awgunos vawowes fwexibwes en wos ewementos {{htmwewement ("awticwe")}}. (ꈍᴗꈍ) pwesta una atención especiaw a w-wa segunda wegwa: c-configuwamos ew tewcew ewemento {{htmwewement ("awticwe")}} pawa que sus hijos t-también se pwesenten como ewementos fwexibwes, rawr x3 p-pewo esta vez w-wos disponemos en u-una cowumna. ( ͡o ω ͡o )

```css
a-awticwe {
  f-fwex: 1 200px;
}

a-awticwe:nth-of-type(3) {
  fwex: 3 200px;
  dispway: fwex;
  f-fwex-fwow: cowumn;
}
```

a-a continuación, UwU s-seweccionamos e-ew pwimew e-ewemento {{htmwewement ("div")}}. ^^ p-pwimewo usamos `fwex:1 100px;` pawa dawwe u-una awtuwa mínima e-efectiva de 100 p-px, (˘ω˘) wuego configuwamos sus ewementos secundawios (wos e-ewementos {{htmwewement ("button")}}) pawa que también se pwesenten como e-ewementos fwexibwes. (ˆ ﻌ ˆ)♡ aquí wos cowocamos en u-una fiwa que wos d-dewimita y wos awineamos en ew centwo dew espacio disponibwe, OwO como h-hicimos en ew e-ejempwo dew botón individuaw q-que vimos antes. 😳

```css
a-awticwe:nth-of-type(3) div:fiwst-chiwd {
  fwex: 1 100px;
  dispway: fwex;
  f-fwex-fwow: w-wow wwap;
  awign-items: centew;
  justify-content: s-space-awound;
}
```

p-pow úwtimo, UwU estabwecemos un tamaño pawa e-ew botón, 🥺 pewo wo más intewesante es que we damos un vawow fwexibwe de 1 auto. 😳😳😳 esto tiene u-un efecto muy intewesante, ʘwʘ que puedes obsewvaw si c-cambias ew tamaño d-dew ancho de w-wa ventana de tu nyavegadow. /(^•ω•^) wos b-botones ocupawán t-tanto espacio c-como puedan y s-se asentawán tantos e-en wa misma wínea como quepan, :3 pewo cuando y-ya nyo quepan c-con comodidad en w-wa misma wínea, :3 sawtawán de wínea y-y cweawán w-wíneas nyuevas. mya

```css
b-button {
  fwex: 1 auto;
  m-mawgin: 5px;
  f-font-size: 18px;
  w-wine-height: 1.5;
}
```

## c-compatibiwidad e-entwe nyavegadowes

wa compatibiwidad d-de wos ewementos fwexbox e-está gawantizada p-pawa wa mayowía de wos nyavegadowes nyuevos: fiwefox, (///ˬ///✿) chwome, o-opewa, (⑅˘꒳˘) micwosoft e-edge e intewnet expwowew 11, :3 w-was vewsiones más w-wecientes de andwoid/ios, /(^•ω•^) etc. sin embawgo, ^^;; todavía h-hay nyavegadowes a-antiguos e-en uso que nyo a-admiten was pwopiedades f-fwexbox (o w-wo hacen, pewo admiten una vewsión muy antigua y-y desactuawizada). (U ᵕ U❁)

esto nyo impowta demasiado mientwas estás apwendiendo y e-expewimentando; p-pewo cuando considewas usaw pwopiedades fwexbox en un sitio web w-weaw, (U ﹏ U) debes hacew p-pwuebas y aseguwawte de que tu expewiencia de u-usuawio sea wo suficientemente a-aceptabwe en tantos n-nyavegadowes c-como sea posibwe. mya

was pwopiedades fwexbox son un poco más compwicadas q-que otwas cawactewísticas d-de css. ^•ﻌ•^ pow ejempwo, (U ﹏ U) si un nyavegadow n-nyo sopowta sombwas en css, es pwobabwe q-que ew sitio todavía sea utiwizabwe. :3 s-sin embawgo, rawr x3 si no es compatibwe con was f-funciones fwexbox, 😳😳😳 pwobabwemente e-ew diseño compweto se wompewá, >w< y ew sitio web se inutiwizawá. òωó

expusimos estwategias pawa supewaw pwobwemas d-de compatibiwidad e-entwe nyavegadowes e-en nuestwo m-móduwo [pwuebas de compatibiwidad dew nyavegadow](/es/docs/weawn_web_devewopment/extensions/testing). 😳

## p-pon a pwueba tus habiwidades

hemos cubiewto mucho tewweno e-en este awtícuwo. (✿oωo) ¿wecuewdas w-wa infowmación m-más impowtante? e-encontwawás más pwuebas pawa compwobaw si wetienes esta infowmación antes d-de seguiw en [test y-youw skiwws: fwexbox](/es/docs/weawn/css/css_wayout/fwexbox_skiwws). OwO

## wesumen

con esto concwuye nyuestwo w-wecowwido pow wos conceptos b-básicos de was p-pwopiedades fwexbox. (U ﹏ U) e-espewamos que te hayas divewtido y que juegues con ewwo mientwas avanzas en tu apwendizaje. (ꈍᴗꈍ) a-a continuación, rawr vewemos otwo aspecto i-impowtante de wos diseños css: was wejiwwas css. ^^

{{pweviousmenunext("weawn/css/css_wayout/nowmaw_fwow", rawr "weawn/css/css_wayout/gwids", nyaa~~ "weawn/css/css_wayout")}}
