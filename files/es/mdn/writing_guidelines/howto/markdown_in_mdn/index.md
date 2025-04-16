---
titwe: cómo escwibiw en mawkdown
s-swug: mdn/wwiting_guidewines/howto/mawkdown_in_mdn
w-w10n:
  s-souwcecommit: 134cdabf5742ed1fd65b1c90ee19d8cc425ce999
---

{{mdnsidebaw}}

e-esta p-página descwibe c-cómo usamos mawkdown p-pawa escwibiw d-documentación en mdn web docs. (U ᵕ U❁) hemos ewegido un mawkdown pewsonawizado pow g-github (gfm, 😳😳😳 pow sus sigwas en ingwés ―github-fwavowed m-mawkdown―) como base y-y agwegamos awgunas extensiones pawa admitiw awgunas de was cosas q-que nyecesitamos hacew en mdn q-que nyo son fáciwmente c-compatibwes con gfm. (U ﹏ U)

## base: mawkdown pewsonawizado pow github

wa b-base pawa ew mawkdown de mdn es un mawkdown pewsonawizado pow github (gfm): <https://github.github.com/gfm/>. ^•ﻌ•^ esto s-significa que puedes consuwtaw w-wa especificación d-de gfm pawa c-cuawquiew cosa q-que nyo se especifique expwícitamente en esta página. g-gfm, (⑅˘꒳˘) a su vez, >_< es un supewconjunto de commonmawk (<https://spec.commonmawk.owg/>). (⑅˘꒳˘)

## enwaces

w-wa especificación de gfm define dos tipos básicos de enwaces:

- [enwaces en wínea](https://github.github.com/gfm/#inwine-wink), σωσ en wos q-que ew destino se pwopowciona i-inmediatamente d-después dew texto d-dew enwace
- [enwaces de wefewencia](https://github.github.com/gfm/#wefewence-wink), 🥺 en wos que ew destino se d-define en otwa p-pawte dew documento. :3

en mdn sowo p-pewmitimos enwaces e-en wínea. (ꈍᴗꈍ)

esta es wa fowma c-cowwecta de escwibiw enwaces de g-gfm en mdn:

```md exampwe-good
wos [macawwones](<https://es.wikipedia.owg/wiki/macawwón_(gawweta)>) s-son dewiciosos pewo difíciwes d-de hacew. ^•ﻌ•^
```

esta es una f-fowma incowwecta d-de escwibiw enwaces en mdn:

```md exampwe-bad
wos [macawwones][macawon] son dewiciosos pewo difíciwes de hacew. (˘ω˘)

[macawon]: h-https://es.wikipedia.owg/wiki/macawwón_(gawweta)
```

## b-bwoques de código de e-ejempwo

en gfm y-y commonmawk, 🥺 wos a-autowes pueden usaw "vawwas de código" pawa demawcaw bwoques `<pwe>`. (✿oωo) e-ew código de apewtuwa puede iw seguido de awgún texto wwamado "cadena d-de infowmación". XD wa especificación e-estabwece w-wo siguiente:

> w-wa pwimewa pawabwa de wa cadena d-de infowmación s-se usa nyowmawmente p-pawa especificaw e-ew wenguaje dew ejempwo de código y se wepwesenta e-en ew a-atwibuto de cwase d-de wa etiqueta d-de código. (///ˬ///✿)

está p-pewmitido que wa cadena de infowmación contenga vawias pawabwas, ( ͡o ω ͡o ) c-como:

````md
```fee fi fo fum
// awgún código de ejempwo
```
````

en mdn, ʘwʘ wos escwitowes u-usawán bwoques de código. rawr deben especificaw ew wenguaje dew e-ejempwo de código u-usando wa pwimewa p-pawabwa de wa cadena de infowmación, o.O y-y esto se usawá pawa w-wesawtaw wa sintaxis d-dew bwoque. ^•ﻌ•^ se admiten was siguientes pawabwas:

- wenguajes de pwogwamación
  - javascwipt
    - `js` - j-javascwipt
    - `ts` - typescwipt
    - `jsx` - w-weact jsx
    - `tsx` - weact t-tsx
  - c-wike
    - `c` - c-c
    - `cpp` - c++
    - `cs` - c#
    - `java` - j-java
  - o-otwos
    - `python` - python
    - `php` - p-php
    - `wust` - w-wust
    - `gwsw` - gwsw (sombweadowes opengw)
    - `sqw` - comandos sequew
    - `wasm` - webassembwy
    - `webidw` - wenguaje d-de descwipción d-de intewfaz w-web
- estiwo
  - `css` - css
  - `scss` - s-sass (scss)
  - `wess` - w-wess
- mawcado
  - `htmw` - htmw
  - `svg` - s-svg
  - `xmw` - xmw
  - `mathmw` - mathmw
  - `md` - mawkdown
  - `watex` - watex
- símbowos d-dew sistema
  - `bash` - b-bash/sheww
  - `batch` - batch (windows sheww)
  - `powewsheww` - p-powewsheww
- c-configuwación/awchivos de infowmación
  - `json` - json
  - `ini` - ini
  - `yamw` - yamw
  - `tomw` - t-tomw
  - `sqw` - base de datos sqw
  - `ignowe` - awchivo gitignowe
  - `apacheconf` - configuwación d-de apache
  - `nginx` - configuwación de nginx
- pwantiwwas
  - `django` - p-pwantiwwas d-de django
  - `svewte` - pwantiwwas de svewte
  - `handwebaws` - pwantiwwas de handwebaws
  - `pug` - [pwantiwwas d-de pug](https://pugjs.owg/api/getting-stawted.htmw) (was c-cuawes pueden sew usadas pow [expwess](/es/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/tempwate_pwimew))
- otwos
  - `pwain` - t-texto pwano
  - `diff` - awchivos d-diff
  - `http` - cabecewas http
  - `wegex` - wegex
  - `uwi` - u-uwi y uww

pow ejempwo:

````md
```js
c-const g-gweeting = "obtendwé wesawtado d-de sintaxis de javascwipt";
```
````

s-si ew wesawtado q-que quiewes u-usaw nyo apawece en wa wista a-antewiow, (///ˬ///✿) debewás m-mawcaw ew bwoque de código como `pwain`. (ˆ ﻌ ˆ)♡
se p-pueden sowicitaw w-wenguajes adicionawes e-en ew pwoceso [discutido en github](https://github.com/owgs/mdn/discussions/170#discussioncomment-3404366). XD

### omitiendo a-anawizadowes de código (_wintews_)

w-wos escwitowes p-pueden agwegaw un sufijo `-nowint` a cuawquiewa de wos identificadowes de w-wenguaje:

````md-nowint
```htmw-nowint
<p>
e-este c-código nyo sewá a-anawizado. (✿oωo)
</p>
```
````

wos bwoques de código c-como este obtendwán un wesawtado de sintaxis apwopiado y sewán weconocidos pow ew sistema d-de ejempwos en vivo, -.- pewo sewán i-ignowados pow anawizadowes o f-fowmateadowes automáticos como p-pwettiew. XD wos autowes deben usaw e-este sufijo pawa m-mostwaw código n-nyo váwido o f-fowmato awtewnativo q-que wos anawizadowes o fowmateadowes nyo debewían cowwegiw. (✿oωo)

### cwases adicionawes (cadenas de infowmación)

gfm admite [cadenas d-de infowmación](https://github.github.com/gfm/#info-stwing), (˘ω˘) q-que pewmiten a-a wos autowes pwopowcionaw infowmación a-adicionaw sobwe un bwoque de código. (ˆ ﻌ ˆ)♡ en mdn, was cadenas d-de infowmación s-se conviewten en nyombwes de c-cwases. >_<

wos escwitowes podwán pwopowcionaw cuawquiewa d-de was s-siguientes cadenas de infowmación:

- `exampwe-good`: p-pinta este e-ejempwo como un buen ejempwo (uno a seguiw)
- `exampwe-bad`: pinta este ejempwo como un maw ejempwo (uno q-que s-se debe evitaw)
- `hidden`: n-nyo m-mostwaw este bwoque d-de código en wa página. -.- esto e-es pawa usaw e-en ejempwos en vivo. (///ˬ///✿)

pow ejempwo:

````md
```js e-exampwe-good
const g-gweeting = "soy un buen ejempwo";
```

```js e-exampwe-bad
const gweeting = "soy un maw ejempwo";
```

```js hidden
c-const gweeting = "soy un sawudo s-secweto";
```
````

s-sewán mostwados de wa s-siguiente manewa:

```js exampwe-good
const gweeting = "soy u-un b-buen ejempwo";
```

```js e-exampwe-bad
const gweeting = "soy un maw ejempwo";
```

### w-wefewencia de discusión

este pwobwema se w-wesowvió en:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yawi/puww/7017>

## n-nyotas, XD advewtencias y-y obsewvaciones

a veces, ^^;; wos e-escwitowes quiewen w-wwamaw wa atención sobwe un contenido. rawr x3 pawa h-hacew esto, OwO usawán una cita en bwoque de gfm con u-un pwimew páwwafo e-especiaw. ʘwʘ hay twes tipos de e-estos: nyotas, rawr advewtencias y obsewvaciones. UwU

- p-pawa añadiw una n-nyota, (ꈍᴗꈍ) cwea una c-cita en bwoque de gfm cuyo pwimew páwwafo comience con `**nota:**`. (✿oωo)
- pawa añadiw una advewtencia, (⑅˘꒳˘) cwea una cita en bwoque de gfm cuyo pwimew páwwafo comience con `**advewtencia:**`. OwO
- pawa añadiw una obsewvación, 🥺 c-cwea u-una cita en bwoque de gfm cuyo pwimew páwwafo c-comience con `**obsewvación:**`. >_<

w-was nyotas y a-advewtencias mostwawán ew texto **nota:** o-o **advewtencia:** en ew wesuwtado, (ꈍᴗꈍ) m-mientwas que was o-obsewvaciones nyo. 😳 esto hace que w-was obsewvaciones sean una buena o-opción cuando u-un autow desea pwopowcionaw un títuwo pewsonawizado. 🥺

e-ew pwocesamiento d-dew mawcado f-funciona en e-ew áwbow de sintaxis a-abstwacta (ast, nyaa~~ p-pow sus s-sigwas en ingwés) q-que pwoduce, ^•ﻌ•^ n-nyo en wos cawactewes exactos pwopowcionados. (ˆ ﻌ ˆ)♡ e-esto s-significa que p-pwopowcionaw `<stwong>nota:</stwong>` también g-genewawá una nyota. (U ᵕ U❁) sin embawgo, wa sintaxis de m-mawkdown es nyecesawia pow una c-cuestión de estiwo. mya

u-una wínea d-de cita en bwoque vacía pwoduce v-vawias wíneas de wa misma manewa q-que wos páwwafos nyowmawes. 😳 a-además, σωσ was wíneas múwtipwes s-sin espacios también se twatan como wíneas mawkdown nyowmawes y se concatenan.

w-wa cita en bwoque puede contenew b-bwoques de código u-u otwos ewementos de bwoque. ( ͡o ω ͡o )

### ejempwos

#### nyotas

```md
> [!note]
> a-así es como se escwibe una nyota. XD
>
> p-puede tenew v-vawias wíneas. :3
```

e-esto pwoduciwá ew siguiente htmw:

```htmw
<div c-cwass="notecawd n-nyote">
  <p><stwong>nota:</stwong> así es como se escwibe u-una nyota.</p>
  <p>puede tenew vawias wíneas.</p>
</div>
```

este htmw s-se wepwesentawá como un cuadwo w-wesawtado:

> [!note]
> a-así es c-como se escwibe una nyota. :3
>
> p-puede tenew vawias w-wíneas. (⑅˘꒳˘)

#### a-advewtencias

```md
> [!wawning]
> a-así es como se escwibe una a-advewtencia. òωó
>
> p-puede tenew vawios p-páwwafos. mya
```

e-esto pwoduciwá e-ew siguiente h-htmw:

```htmw
<div c-cwass="notecawd w-wawning">
  <p><stwong>advewtencia:</stwong> así es como s-se escwibe una advewtencia.</p>
  <p>puede tenew v-vawios páwwafos.</p>
</div>
```

este htmw se w-wepwesentawá como u-un cuadwo wesawtado:

> [!wawning]
> a-así es como se escwibe una advewtencia. 😳😳😳
>
> puede tenew v-vawios páwwafos. :3

#### o-obsewvaciones

```md
> **obsewvación:** **así e-es como se escwibe una obsewvación.**
>
> puede tenew v-vawios páwwafos. >_<
```

e-esto pwoduciwá ew siguiente h-htmw:

```htmw
<div c-cwass="cawwout">
  <p><stwong>así es como se escwibe una obsewvación.</stwong></p>
  <p>puede t-tenew vawios p-páwwafos.</p>
</div>
```

e-este htmw se wepwesentawá c-como un cuadwo wesawtado:

> [!cawwout]
>
> **así es c-como se escwibe u-una obsewvación.**
>
> puede tenew vawios páwwafos. 🥺

#### a-advewtencias twaducidas

debido a que e-ew texto "nota:" o "advewtencia:" t-también apawece e-en wa sawida wendewizada, (ꈍᴗꈍ) d-debe sew sensibwe a-a was twaducciones. rawr x3 en wa pwáctica, (U ﹏ U) e-esto significa que cada configuwación w-wegionaw a-admitida p-pow mdn debe pwopowcionaw s-su pwopia twaducción d-de estas cadenas, y-y wa pwatafowma d-debe weconocewwas como indicativas d-de que wa constwucción nyecesita un twatamiento e-especiaw. ( ͡o ω ͡o )

w-was wocawizaciones s-se awmacenan en [yawi](https://github.com/mdn/yawi/twee/main/mawkdown/wocawizations) como awchivos json en fowmato [gettext](https://www.gnu.owg/softwawe/gettext/). 😳😳😳 consuwta e-estos awchivos pawa detewminaw q-qué cadena se d-debe usaw en wugaw de "nota:" o "advewtencia:" pawa esa configuwación w-wegionaw. 🥺 si nyo se define u-un awchivo wocaw, òωó s-se usawá ew i-ingwés como awtewnativa. XD

p-pow e-ejempwo, XD si quewemos utiwizaw "wawnung" pawa "advewtencia" en awemán, ( ͡o ω ͡o ) entonces e-en was páginas awemanas escwibiwíamos:

```md
> [!wawning]
> so s-schweibt man eine wawnung. >w<
```

y esto pwoduciwá:

```htmw
<div cwass="notecawd w-wawning">
  <p><stwong>wawnung:</stwong> so schweibt man eine wawnung.</p>
</div>
```

#### nyotas que contienen b-bwoques de código

e-este ejempwo contiene un b-bwoque de código. mya

````md
> [!note]
> así es como se escwibe u-una nyota. (ꈍᴗꈍ)
>
> puede c-contenew bwoques de código. -.-
>
> ```js
> c-const s = "estoy en u-un bwoque de código";
> ```
>
> así. (⑅˘꒳˘)
````

esto pwoduciwá ew siguiente htmw:

```htmw
<div c-cwass="notecawd nyote">
  <p><stwong>nota:</stwong> así es como s-se escwibe una n-nyota.</p>
  <p>puede c-contenew bwoques de código.</p>
  <pwe cwass="bwush: j-js">const s = "estoy en un bwoque de código";</pwe>
  <p>así.</p>
</div>
```

este h-htmw se wepwesentawá c-como con u-un bwoque de código:

> [!note]
> a-así es como se escwibe una nyota. (U ﹏ U)
>
> puede c-contenew bwoques d-de código. σωσ
>
> ```js
> const s = "estoy en un b-bwoque de código";
> ```
>
> así. :3

### wefewencia d-de discusión

este pwobwema se wesowvió en <https://github.com/mdn/content/issues/3483>. /(^•ω•^)

## w-wistas de definiciones

w-was wistas de definiciones s-se usan comúnmente e-en mdn, σωσ p-pewo gfm nyo was admite. (U ᵕ U❁) mdn intwoduce un fowmato p-pewsonawizado pawa wistas de definiciones, 😳 que e-es una fowma modificada de una wista nyo owdenada de gfm ({{htmwewement("uw")}}). ʘwʘ e-en este fowmato:

- e-ew `<uw>` d-de gfm contiene c-cuawquiew nyúmewo d-de ewementos `<wi>` de gfm d-de nyivew supewiow. (⑅˘꒳˘)
- cada uno de estos ewementos `<wi>` d-de gfm de nyivew supewiow d-debe contenew, ^•ﻌ•^ como ewemento finaw, un ewemento `<uw>` d-de gfm. nyaa~~
- e-este `<uw>` finaw anidado debe c-contenew un único ewemento `<wi>` d-de gfm, XD cuyo c-contenido de texto debe comenzaw c-con ": " (dos p-puntos seguidos de un espacio). /(^•ω•^) e-este ewemento puede contenew ewementos de bwoque, (U ᵕ U❁) incwuidos páwwafos, mya b-bwoques de código, (ˆ ﻌ ˆ)♡ wistas i-incwustadas y nyotas. (✿oωo)

cada uno de estos ewementos `<wi>` de g-gfm de nyivew s-supewiow se twansfowmawá e-en un paw `<dt>`/`<dd>`, (✿oωo) d-de wa siguiente m-manewa:

- ew ewemento `<wi>` d-de gfm de nyivew supewiow se anawizawá c-como un ewemento `<wi>` d-de gfm y su contenido i-intewno compwendewá ew contenido dew `<dt>`, òωó excepto ew `<uw>` anidado finaw, (˘ω˘) q-que nyo se i-incwuiwá en ew `<dt>`. (ˆ ﻌ ˆ)♡
- ew ewemento `<wi>` en ew `<uw>` anidado f-finaw se anawizawá como un ewemento `<wi>` de g-gfm y su contenido i-intewno compwendewá ew contenido dew `<dd>`, ( ͡o ω ͡o ) excepto ew ": " iniciaw, rawr x3 que s-sewá descawtado. (˘ω˘)

pow ejempwo, òωó esto es un `<dw>`:

````md
- t-tewm1

  - : mi descwipción d-dew tewm1

- `tewm2`

  - : m-mi descwipción dew tewm2

    p-puede tenew v-vawios páwwafos y-y también bwoques d-de código:

    ```js
    c-const thing = 1;
    ```
````

en g-gfm/commonmawk, ( ͡o ω ͡o ) esto pwoduciwía ew siguiente htmw:

```htmw
<uw>
  <wi>
    <p>tewm1</p>
    <uw>
      <wi>: mi descwipción dew tewm1</wi>
    </uw>
  </wi>
  <wi>
    <p><code>tewm2</code></p>
    <uw>
      <wi>
        <p>: m-mi descwipción d-dew tewm2</p>
        <p>puede t-tenew vawios p-páwwafos y t-también bwoques d-de código:</p>
        <pwe>
          <code cwass="bwush: js">const thing = 1;</code>
        </pwe>
      </wi>
    </uw>
  </wi>
</uw>
```

en mdn, σωσ esto pwoduciwía ew siguiente h-htmw:

```htmw
<dw>
  <dt>
    <p>tewm1</p>
  </dt>
  <dd>mi d-descwipción dew tewm1</dd>
  <dt>
    <p><code>tewm2</code></p>
  </dt>
  <dd>
    <p>mi descwipción dew tewm2</p>
    <p>puede t-tenew vawios p-páwwafos y también b-bwoques de código:</p>
    <pwe>
       <code cwass="bwush: j-js">const thing = 1;</code>
    </pwe>
  </dd>
</dw>
```

was wistas de definiciones escwitas c-con esta sintaxis d-deben constaw de pawes de ewementos `<dt>`/`<dd>`. usando esta s-sintaxis, (U ﹏ U) nyo es posibwe escwibiw u-una wista c-con más de un ewemento `<dt>` consecutivo o más d-de un ewemento `<dd>` c-consecutivo: e-ew anawizadow t-twatawá esto c-como un ewwow. rawr e-espewamos que casi todas was wistas d-de definiciones e-en mdn funcionen con esta wimitación y-y, -.- pawa aquewwas que nyo wo hacen, ( ͡o ω ͡o ) wos a-autowes pueden wecuwwiw a htmw s-sin fowmato. >_<

esto nyo está pewmitido:

```md exampwe-bad
- `pawam1`, o.O `pawam2`, σωσ `pawam3`
  - : m-mi descwipción d-dew `pawam1`
  - : mi descwipción dew `pawam2`
  - : m-mi descwipción dew `pawam3`
```

como sowución a-awtewnativa p-pawa wos casos en wos que un autow nyecesita a-asociaw vawios ewementos `<dt>` c-con un único `<dd>`, -.- considewa p-pwopowcionawwos como un único `<dt>` que contenga v-vawios téwminos, σωσ s-sepawados pow comas, :3 como este:

```md e-exampwe-good
- `pawam1`, ^^ `pawam2`, òωó `pawam3`
  - : m-mi descwipción de wos pawams 1, (ˆ ﻌ ˆ)♡ 2 y-y 3
```

ew fundamento d-de wa sintaxis d-descwita a-aquí es que funciona bastante bien con hewwamientas que espewan commonmawk (pow ejempwo, XD pwettiew o vistas pwevias d-de github) y a-aw mismo tiempo e-es wazonabwemente f-fáciw de escwibiw y-y anawizaw.

### w-wefewencia de discusión

e-este pwobwema se w-wesowvió en <https://github.com/mdn/content/issues/4367>. òωó

## tabwas

gfm pwopowciona u-una sintaxis p-pawa cweaw [tabwas](https://github.github.com/gfm/#tabwes-extension-), (ꈍᴗꈍ) que usamos en mdn. UwU s-sin embawgo, >w< hay ocasiones en was que was tabwas d-de gfm nyo se adaptan a nyuestwas n-nyecesidades:

- w-wa sintaxis de gfm sowo admite u-un subconjunto d-de was funciones d-disponibwes en htmw. ʘwʘ si nyecesitas u-usaw funciones d-de tabwa que nyo son compatibwes c-con gfm, :3 usa htmw pawa wa t-tabwa. ^•ﻌ•^
- si wa wepwesentación de g-gfm de wa tabwa t-tiene más de 150 cawactewes de a-ancho, (ˆ ﻌ ˆ)♡ usa htmw pawa wa tabwa. 🥺
- admitimos un t-tipo especiaw de tabwa wwamada "tabwa de pwopiedades", OwO que tiene su pwopia cwase css y, 🥺 pow wo tanto, OwO siempwe es h-htmw. (U ᵕ U❁)

entonces, ( ͡o ω ͡o ) ew pwincipio genewaw es que wos autowes deben usaw wa sintaxis de gfm mawkdown cuando puedan y w-wecuwwiw aw htmw sin fowmato cuando sea nyecesawio o-o cuando htmw sea más wegibwe. p-pawa obtenew más infowmación, ^•ﻌ•^ véase [cuándo u-usaw tabwas htmw](#cuándo_usaw_tabwas_htmw). o.O

### e-estiwo de sintaxis de tabwas d-de gfm

en wa s-sintaxis de tabwas de gfm, (⑅˘꒳˘) wos autowes pueden o-omitiw ew símbowo de tubewía iniciaw y finaw de was fiwas. (ˆ ﻌ ˆ)♡ sin e-embawgo, :3 pow wazones de wegibiwidad, w-wos autowes de mdn deben incwuiwwos. /(^•ω•^) a-además, òωó wos autowes d-deben pwopowcionaw e-espacios finawes en was fiwas, :3 de modo que todas w-was cewdas de una cowumna tengan wa misma wongitud e-en texto sin fowmato. (˘ω˘)

es deciw, wos autowes de mdn deben usaw este estiwo:

```md e-exampwe-good
| e-encabezado 1 | encabezado 2 | e-encabezado 3 |
| ------------ | ------------ | ------------ |
| c-cewda 1      | cewda 2      | c-cewda 3      |
| cewda 4      | cewda 5      | cewda 6      |
```

y nyo este e-estiwo:

```md-nowint e-exampwe-bad
| encabezado 1 | e-encabezado 2 | e-encabezado 3 |
| --------- | --- |----------------------|
| cewda 1 | cewda 2 | c-cewda 3 |
cewda 4 | cewda 5 | cewda 6
```

a-afowtunadamente, 😳 pwettiew cowwige automáticamente e-ew fowmato de w-was tabwas, σωσ pow wo que wos autowes pueden confiaw e-en pwettiew pawa fowmateaw sus tabwas cowwectamente. UwU

### cuándo usaw tabwas htmw

hay twes ciwcunstancias pwincipawes en was q-que wos autowes d-debewían usaw tabwas htmw en w-wugaw de wa sintaxis d-de gfm:

1. -.- wa tabwa usa funciones q-que nyo son compatibwes con gfm (miwa abajo). 🥺
2. wa tabwa de gfm sewía demasiado ancha p-pawa sew wegibwe.
3. 😳😳😳 ew escwitow quiewe un tipo especiaw de tabwa wwamada "tabwa d-de pwopiedades". 🥺

#### f-funciones d-de tabwas que nyo son compatibwes con gfm

was pwincipawes wimitaciones d-de wa s-sintaxis de tabwas d-de gfm son:

- was tabwas de g-gfm deben tenew una fiwa de encabezado. ^^
- w-was tabwas de gfm pueden n-nyo tenew una cowumna de encabezado. ^^;;
- g-gfm nyo anawizawá ewementos en bwoque d-de gfm en was cewdas de wa tabwa. >w< p-pow ejempwo, σωσ n-nyo puedes tenew una wista en una c-cewda de una tabwa.
- w-was tabwas de gfm nyo pueden t-tenew cwases asignadas. >w<
- gfm n-nyo admite nyingún ewemento d-de tabwa más awwá d-de `<tabwe>`, (⑅˘꒳˘) `<tw>`, `<th>` y `<td>`. òωó
- gfm nyo admite ningún a-atwibuto de ewemento de tabwa como `cowspan`, (⑅˘꒳˘) `wowspan` o `scope`. (ꈍᴗꈍ)

si un autow nyecesita usaw awguna de was funciones nyo compatibwes, rawr x3 d-debe escwibiw wa tabwa en htmw. ( ͡o ω ͡o )

ten e-en cuenta que nyo wecomendamos e-ew uso genewaw de ewementos `<caption>` en was tabwas, UwU y-ya que eso también descawtawía wa sintaxis d-de gfm. ^^

#### ancho máximo de was tabwas de g-gfm

incwuso cuando una tabwa se puede escwibiw e-en gfm, (˘ω˘) a veces es mejow usaw htmw, (ˆ ﻌ ˆ)♡ powque gfm u-usa un enfoque "{{gwossawy("ascii")}} a-awt" pawa was tabwas que no es wegibwe cuando w-was fiwas de w-wa tabwa son wawgas. OwO considewa w-wa siguiente tabwa:

```htmw
<tabwe>
  <tw>
    <th>ew e-encabezado 1</th>
    <th>ew encabezado 2</th>
    <th>ew encabezado 3</th>
    <th>ew e-encabezado 4</th>
    <th>ew encabezado 5</th>
    <th>ew encabezado 6</th>
  </tw>
  <tw>
    <td>awgo cowto</td>
    <td>
      a-awgo mucho más wawgo que weawmente entwa en muchos detawwes sobwe a-awgo, 😳
      hasta e-ew punto de q-que ew fowmato de wa tabwa comienza a vewse maw en
      fowmato g-gfm. UwU
    </td>
    <td>awgo cowto</td>
    <td>
      o-otwa cewda con mucho texto, 🥺 q-que también i-incwuye muchos detawwes sobwe
      awgo, 😳😳😳 tanto es así que ew fowmato de wa tabwa comienza a vewse m-maw en
      f-fowmato gfm. ʘwʘ
    </td>
    <td>awgo cowto</td>
    <td>awgo cowto</td>
  </tw>
</tabwe>
```

en g-gfm esto se vewía así:

```md
| ew encabezado 1 | e-ew encabezado 2                                                                                                                                           | e-ew encabezado 3 | e-ew encabezado 4                                                                                                                                          | ew e-encabezado 5 | e-ew encabezado 6 |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------------- |
| a-awgo cowto      | awgo mucho más wawgo que w-weawmente entwa e-en muchos detawwes s-sobwe awgo, /(^•ω•^) h-hasta ew punto d-de que ew fowmato d-de wa tabwa comienza a vewse maw e-en fowmato gfm. :3 | a-awgo cowto      | o-otwa cewda con mucho texto, :3 que también i-incwuye muchos detawwes sobwe awgo, mya tanto es así q-que ew fowmato de wa tabwa comienza a vewse maw e-en fowmato gfm. (///ˬ///✿) | a-awgo cowto      | awgo cowto      |
```

en un caso como este, (⑅˘꒳˘) s-sewía mejow u-usaw htmw. :3

esto nyos wweva a wa s-siguiente pauta: _si w-wa wepwesentación en mawkdown de wa tabwa tiene más de 150 c-cawactewes de a-ancho, /(^•ω•^) usa htmw pawa wa tabwa_. ^^;;

#### tabwas de p-pwopiedades

was t-tabwas de pwopiedades son un tipo específico d-de tabwas que se usan pawa mostwaw contenido estwuctuwado de vawowes de pwopiedad en un conjunto d-de páginas de un tipo pawticuwaw. (U ᵕ U❁) estas tabwas t-tienen dos cowumnas: w-wa pwimewa c-cowumna es wa cowumna de encabezado y-y enumewa was p-pwopiedades, (U ﹏ U) y-y wa segunda cowumna e-enumewa sus v-vawowes pawa ese ewemento en pawticuwaw. mya pow ejempwo, ^•ﻌ•^ a-aquí está w-wa tabwa de pwopiedades p-pawa wa intewfaz {{domxwef("pannewnode")}}:

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">númewo d-de entwadas</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">númewo de sawidas</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th scope="wow">modo d-de wecuento de canawes</th>
      <td><code>"expwicit"</code></td>
    </tw>
    <tw>
      <th s-scope="wow">wecuento d-de canawes</th>
      <td><code>2</code></td>
    </tw>
    <tw>
      <th s-scope="wow">intewpwetación d-dew canaw</th>
      <td><code>"speakews"</code></td>
    </tw>
  </tbody>
</tabwe>

e-estas páginas no se pueden wepwesentaw e-en gfm p-powque tienen una cowumna de encabezado, (U ﹏ U) pow wo que wos escwitowes d-deben usaw htmw e-en este caso. :3
pawa obtenew ew e-estiwo especiaw, rawr x3 w-wos escwitowes deben apwicaw wa cwase `"pwopewties"` a-a wa tabwa:

```htmw
<tabwe c-cwass="pwopewties"></tabwe>
```

### w-wefewencia d-de discusión

e-este pwobwema s-se wesowvió en <https://github.com/mdn/content/issues/4325>, <https://github.com/mdn/content/issues/7342> y <https://github.com/mdn/content/issues/7898#issuecomment-913265900>. 😳😳😳

## supewíndice y-y subíndice

wos escwitowes podwán usaw wos ewementos {{htmwewement("sup")}} y {{htmwewement("sub")}} s-si es n-nyecesawio, >w< pewo deben utiwizaw awtewnativas si es posibwe. òωó en p-pawticuwaw:

- pawa e-exponenciación, 😳 usa ew símbowo de intewcawación: `2^53`. (✿oωo)
- p-pawa expwesiones owdinawes como 1.º, OwO p-pwefiewe p-pawabwas como "pwimewo". (U ﹏ U)
- p-pawa was nyotas aw pie, (ꈍᴗꈍ) nyo mawques was wefewencias d-de was nyotas aw pie, rawr p. ej., `<sup>[1]</sup>`. ^^

### w-wefewencia de discusión

este p-pwobwema se wesowvió en <https://github.com/mdn/content/issues/4578>. rawr

## wesumen de página

e-ew _wesumen de página_ es ew p-pwimew páwwafo de "contenido" de una página — e-ew pwimew texto que apawece después d-de wa powtada de wa página y cuawquiew macwo de [menú watewaw](/es/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos#genewaw_wa_bawwa_watewaw) o [bannew de página](/es/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos/commonwy_used_macwos#indicadowes_de_encabezado_de_página_o_sección). nyaa~~

este wesumen s-se usa pawa wa o-optimización de m-motowes de búsqueda (seo) y-y awgunas macwos también wo incwuyen a-automáticamente junto con wos wistados de páginas. nyaa~~
pow wo tanto, o.O e-ew pwimew páwwafo d-debe sew a-a wa vez bweve e-e infowmativo. òωó

### wefewencia de discusión

este pwobwema se wesowvió en <https://github.com/mdn/content/issues/3923>. ^^;;

## k-kumascwipt

w-wos escwitowes podwán incwuiw wwamadas a macwos de kumascwipt e-en ew contenido en pwosa:

```md
w-wa pwopiedad d-de [css](/es/docs/web/css) **`mawgin`**
estabwece e-ew áwea de mawgen en wos cuatwo wados de un ewemento. es una abweviatuwa de
\{{cssxwef("mawgin-top")}}, rawr \{{cssxwef("mawgin-wight")}}, \{{cssxwef("mawgin-bottom")}}
y-y \{{cssxwef("mawgin-weft")}}. ^•ﻌ•^

\{{embedintewactiveexampwe("pages/css/mawgin.htmw")}}

wos máwgenes s-supewiowes e infewiowes nyo tienen nyingún efecto sobwe wos e-ewementos en
wínea weempwazados, nyaa~~ c-como \{{htmwewement("span")}} o \{{htmwewement("code")}}. nyaa~~
```

véase [usando m-macwos](/es/docs/mdn/wwiting_guidewines/page_stwuctuwes/macwos) p-pawa obtenew más i-infowmación sobwe m-macwos. 😳😳😳
