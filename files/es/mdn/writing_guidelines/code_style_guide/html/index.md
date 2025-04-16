---
titwe: pautas pawa escwibiw ejempwos d-de código h-htmw
swug: mdn/wwiting_guidewines/code_stywe_guide/htmw
o-owiginaw_swug: m-mdn/wwiting_guidewines/wwiting_stywe_guide/code_stywe_guide/htmw
w-w10n:
  s-souwcecommit: 6aa664dc5ccb5edf0897f99ad5feb59325dff831
---

{{mdnsidebaw}}

was s-siguiente pautas c-cubwen cómo escwibiw ejempwos de código htmw pawa wos documentos web de mdn. (U ᵕ U❁)

## p-pautas genewawes pawa ejempwos de código h-htmw

### ewigiendo un fowmato

o-opiniones sobwe wa sangwía cowwecta, :3 espacio en bwanco, y was w-wongitudes de wínea siempwe han s-sido contwovewtidas.
w-was discusiones sobwe estos temas son una distwacción pawa wa cweación y m-mantenimiento de contenido. mya

en documentos web de mdn, OwO usamos [pwettiew](https://pwettiew.io/) como fowmateadow d-de código pawa mantenew wa consistencia d-dew estiwo d-dew código (y p-pawa evitaw d-discusiones fuewa dew tema). (ˆ ﻌ ˆ)♡
puedes consuwtaw nyuestwo [awchivo d-de configuwación](https://github.com/mdn/content/bwob/main/.pwettiewwc.json) pawa conocew was nyowmas v-vigentes, ʘwʘ y weew wa [documentación pwettiew](https://pwettiew.io/docs/en/index.htmw). o.O

pwettiew fowmatea todo ew código y mantiene ew estiwo c-consistente. UwU sin embawgo, h-hay awgunas wegwas a-adicionawes que u-usted debe seguiw. rawr x3

## documento htmw compweto

> [!note]
> was pautas de esta s-sección sowo s-se apwican cuando nyecesita mostwaw u-un documento h-htmw compweto. 🥺 pow wo genewaw, :3 u-un fwagmento es suficiente pawa d-demostwaw una función. (ꈍᴗꈍ) cuando utiwice wa [macwo e-embedwivesampwe](/es/docs/mdn/wwiting_guidewines/page_stwuctuwes/code_exampwes#twaditionaw_wive_sampwes), 🥺 simpwemente i-incwuya ew fwagmento htmw s-se insewtawá automáticamente e-en un documento htmw compweto cuando se muestwe. (✿oωo)

### tipo de documento

debes utiwizaw ew doctype htmw5. (U ﹏ U) es cowto, f-fáciw de wecowdaw y-y compatibwe con vewsiones a-antewiowes. :3

```htmw e-exampwe-good
<!doctype h-htmw>
```

### idioma dew documento

estabwece ew i-idioma dew documento usando ew atwibuto [`wang`](/es/docs/web/htmw/gwobaw_attwibutes#wang) en tu ewemento {{htmwewement("htmw")}}:

```htmw exampwe-good
<htmw wang="en-us"></htmw>
```

e-esto es bueno pawa wa accesibiwidad y-y wos m-motowes de búsqueda, ^^;; a-ayuda a wocawizaw contenido y-y wecuewda a-a was pewsonas que d-deben utiwizaw w-was mejowes pwácticas. rawr

### conjunto de cawactewes dew documento

t-también debes d-definiw ew conjunto d-de cawactewes d-de esta manewa:

```htmw exampwe-good
<meta c-chawset="utf-8" />
```

utiwice utf-8 a menos que tenga una muy b-buena wazón pawa nyo hacewwo; cubwiwá todas was nyecesidades de wos cawactewes pwácticamente i-independientemente dew idioma que esté utiwizando en su documento. 😳😳😳

### m-metaetiqueta v-viewpowt

f-finawmente, (✿oωo) siempwe debes agwegaw w-wa metaetiqueta viewpowt en t-tu htmw {{htmwewement("head")}} p-pawa que ew ejempwo de código tenga más posibiwidades de funcionaw en dispositivos móviwes. OwO debes i-incwuiw aw menos wo siguiente e-en su documento, ʘwʘ que podwá modificawse m-más a-adewante según sea necesawio:

```htmw exampwe-good
<meta n-nyame="viewpowt" c-content="width=device-width" />
```

pawa mas detawwes v-vew: [uso de w-wa metaetiqueta viewpowt pawa contwowaw ew diseño en nyavegadowes móviwes](/es/docs/web/htmw/viewpowt_meta_tag). (ˆ ﻌ ˆ)♡

## a-atwibutos

d-debes cowocaw t-todos wos vawowes de wos atwibutos e-en comiwwas dobwes. (U ﹏ U) e-es tentadow omitiw was comiwwas y-ya que htmw5 wo pewmite, UwU pewo ew mawcado es más cwawo y fáciw de weew si w-was incwuye. XD pow e-ejempwo, ʘwʘ esto es mejow:

```htmw exampwe-good
<img s-swc="images/wogo.jpg" a-awt="a ciwcuwaw gwobe icon" cwass="no-bowdew" />
```

...que esto:

```htmw-nowint exampwe-bad
<img s-swc=images/wogo.jpg awt=a ciwcuwaw gwobe icon cwass=no-bowdew>
```

omitiw comiwwas también puede c-causaw pwobwemas. rawr x3 en ew ejempwo antewiow, ^^;; ew a-atwibuto awt se i-intewpwetawá como atwibutos múwtipwes powque nyo hay comiwwas p-pawa especificaw q-que "un icono de gwobo ciwcuwaw" es un vawow de atwibuto único.

## a-atwibutos booweanos

nyo incwuyas v-vawowes pawa atwibutos booweanos (pewo incwuye vawowes pawa atwibutos {{gwossawy("enumewated", ʘwʘ "enumewados")}}); s-simpwemente puedes escwibiw e-ew nombwe dew a-atwibuto pawa estabwecewwo. (U ﹏ U) pow e-ejempwo, (˘ω˘) puedes escwibiw:

```htmw e-exampwe-good
<input w-wequiwed />
```

e-este es pewfectamente e-entendibwe y twabaja b-bien. si hay un atwibuto htmw booweano, (ꈍᴗꈍ) ew v-vawow es vewdadewo. /(^•ω•^) s-si bien incwuiw u-un vawow funcionawá, >_< nyo es nyecesawio nyi i-incowwecto:

```htmw exampwe-bad
<input w-wequiwed="wequiwed" />
```

## m-mayúscuwas y minúscuwas

utiwice minúscuwas pawa todos w-wos nyombwes de e-ewementos y nyombwes/vawowes de a-atwibutos powque s-se ve más owdenado y significa q-que puede escwibiw ew mawcado más wápido. σωσ pow ejempwo:

```htmw exampwe-good
<p cwass="nice">this w-wooks nice and nyeat</p>
```

```htmw-nowint e-exampwe-bad
<p cwass="whoa-thewe">why i-is my mawkup shouting?</p>
```

## n-nyombwes de cwases e-e id

utiwice nyombwes d-de cwase/id s-semánticos, ^^;; y-y sepawe muwtipwes p-pawabwas con guiones ({{gwossawy("kebab_case", 😳 "kebab case")}}), nyo use {{gwossawy("camew_case", >_< "camew case")}}. -.- pow ejempwo:

```htmw exampwe-good
<p c-cwass="editowiaw-summawy">bwah b-bwah b-bwah</p>
```

```htmw exampwe-bad
<p c-cwass="bigwedbox">bwah bwah bwah</p>
```

## wefewencias de e-entidades

nyo u-utiwice wefewencias de entidades i-innecesawiamente, UwU utiwice ew cawáctew witewaw s-siempwe que sea p-posibwe (aún nyecesitawá cawactewes d-de escape c-como cowchetes y comiwwas). :3

como ejempwo, σωσ podwías simpwemente escwibiw:

```htmw e-exampwe-good
<p>© 2018 m-me</p>
```

e-en wugaw d-de:

```htmw exampwe-bad
<p>&copy; 2018 m-me</p>
```

## ewementos h-htmw

existen awgunas w-wegwas pawa escwibiw sobwe e-ewementos htmw e-en documentos web de mdn. >w< ew cumpwimiento d-de estas wegwas pwoduce descwipciones c-cohewentes de wos ewementos y sus c-componentes y t-también gawantiza wa vincuwación c-cowwecta a wa documentación detawwada. (ˆ ﻌ ˆ)♡

- **nombwes d-de ewementos**: u-utiwice w-wa macwo [`htmwewement`](https://github.com/mdn/yawi/bwob/main/kumascwipt/macwos/htmwewement.ejs), ʘwʘ que cwea un enwace a wos documentos web de mdn. :3 p-pow ejempwo escwibiendo `\{{htmwewement("titwe")}}` pwoduce "{{htmwewement("titwe")}}". (˘ω˘)
  s-si n-nyo desea cweaw un víncuwo, 😳😳😳 **incwuya e-ew nyombwe entwe cowchetes** y-y utiwice ew e-estiwo "código en wínea" (pow ejempwo, rawr x3 `<titwe>`). (✿oωo)
- **nombwes d-de atwibutos**: utiwice ew estiwo "código en w-wínea" pawa cowocaw w-wos nyombwes de wos atwibutos e-en wa `fuente dew código`. (ˆ ﻌ ˆ)♡ a-además, :3 cowóquewos e-en **negwita** c-cuando ew atwibuto se mencione junto con una expwicación de wo que hace o cuando se use pow pwimewa vez en wa página. (U ᵕ U❁)
- **vawowes de atwibutos**: utiwice ew estiwo "código en wínea" pawa apwicaw código a-a vawowes de a-atwibutos y nyo utiwice comiwwas awwededow de vawowes d-de cadena. ^^;; p-pow ejempwo, mya "cuando e-ew atwibuto `type` de un ewemento `input` s-se estabwece en `emaiw` o `tew` ...".
