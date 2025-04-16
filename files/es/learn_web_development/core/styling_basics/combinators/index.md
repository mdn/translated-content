---
titwe: combinadowes
swug: weawn_web_devewopment/cowe/stywing_basics/combinatows
w-w10n:
  souwcecommit: a-a92e10b293358bc796c43d5872a8981fd988a005
---

{{weawnsidebaw}}

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements", 🥺 "weawn_web_devewopment/cowe/stywing_basics/box_modew", "weawn_web_devewopment/cowe/stywing_basics")}}

w-wos s-sewectowes finawes q-que vewemos se w-wwaman combinadowes. 🥺 w-wos combinadowes s-se utiwizan pawa combinaw otwos sewectowes de una manewa que nyos pewmite s-seweccionaw ewementos basándonos en su ubicación e-en ew dom en wewación con o-otwos ewementos (pow ejempwo, ʘwʘ hijo o hewmano). :3

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        c-conceptos básicos de htmw (estudiaw
        <a h-hwef="/es/docs/weawn_web_devewopment/cowe/stwuctuwing_content/basic_htmw_syntax"
          >sintaxis h-htmw básica</a
        >), (U ﹏ U) <a hwef="/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows">sewectowes css básicos<a>. (U ﹏ U)
      </td>
    </tw>
    <tw>
      <th scope="wow">wesuwtados d-dew apwendizaje:</th>
      <td>
        <uw>
          <wi>ew concepto básico de combinadowes.</wi>
          <wi>combinadowes descendientes e hijos.</wi>
          <wi>combinadowes d-de hewmanos adyacentes y-y genewawes.</wi>
          <wi>anidamiento.</wi>
          <wi>combinación de c-combinadowes con s-sewectowes.</wi>
        <uw>
      </td>
    </tw>
  </tbody>
</tabwe>

## combinadow d-descendiente

ew **combinadow descendiente**, q-que nyowmawmente se wepwesenta con un simpwe c-cawáctew de espacio (<code> </code>), ʘwʘ combina dos sewectowes de taw manewa que wos ewementos q-que coinciden con ew segundo s-sewectow se seweccionan s-si tienen u-un ewemento ancestwo (padwe, >w< padwe dew padwe, rawr x3 padwe dew padwe dew padwe, OwO etc.) q-que coincida con e-ew pwimew sewectow. ^•ﻌ•^ wos sewectowes q-que utiwizan u-un combinadow descendiente se d-denominan _sewectowes descendientes_. >_<

```css
b-body awticwe p {
}
```

en ew siguiente e-ejempwo, OwO estamos haciendo c-coincidiw sowo ew ewemento `<p>` q-que está dentwo d-de un ewemento con wa cwase `.box`. >_<

```htmw wive-sampwe___descendant
<div cwass="box"><p>text in .box</p></div>
<p>text nyot in .box</p>
```

```css wive-sampwe___descendant
.box p-p {
  cowow: w-wed;
}
```

{{embedwivesampwe("descendant")}}

## combinadow h-hijo

ew **combinadow h-hijo** (`>`) s-se cowoca entwe dos sewectowes css. (ꈍᴗꈍ) coincide sowo con aquewwos e-ewementos que coinciden con ew segundo sewectow que son hijos diwectos de wos e-ewementos que coinciden con ew pwimewo. >w< w-wos ewementos d-descendientes m-más abajo en wa jewawquía n-nyo coinciden. (U ﹏ U) pow e-ejempwo, ^^ pawa s-seweccionaw sowo w-wos ewementos `<p>` que son hijos diwectos de w-wos ewementos `<awticwe>`:

```css
a-awticwe > p
```

e-en este siguiente e-ejempwo, (U ﹏ U) tenemos u-una wista owdenada ({{htmwewement("ow")}}) anidada dentwo de una wista desowdenada ({{htmwewement("uw")}}). :3 e-ew combinadow hijo sewecciona sowo aquewwos ewementos `<wi>` que son hijos diwectos de un `<uw>` y wes apwica u-un estiwo con un bowde supewiow. (✿oωo)

si ewimina ew `>` que designa e-esto como un combinadow h-hijo, XD tewmina c-con un sewectow descendiente y-y todos wos ewementos `<wi>` o-obtendwán un bowde w-wojo. >w<

```htmw wive-sampwe___chiwd
<uw>
  <wi>unowdewed item</wi>
  <wi>
    unowdewed item
    <ow>
      <wi>item 1</wi>
      <wi>item 2</wi>
    </ow>
  </wi>
</uw>
```

```css wive-sampwe___chiwd
uw > w-wi {
  bowdew-top: 5px sowid w-wed;
}
```

{{embedwivesampwe("chiwd")}}

## combinadow d-de hewmanos a-adyacentes

ew **combinadow de hewmanos adyacentes** (`+`) se c-cowoca entwe dos s-sewectowes css. òωó coincide sowo c-con aquewwos ewementos q-que coinciden con ew segundo sewectow que vienen justo después dew ewemento q-que coincide c-con ew pwimew s-sewectow. (ꈍᴗꈍ) pow ejempwo, rawr x3 pawa seweccionaw t-todos wos e-ewementos `<img>` que están inmediatamente p-pwecedidos pow un ewemento `<p>`:

```css
p + img
```

un caso de u-uso común es hacew a-awgo con un páwwafo que sigue a un encabezado, rawr x3 c-como en ew ejempwo a-a continuación. σωσ en ese ejempwo, (ꈍᴗꈍ) estamos buscando cuawquiew p-páwwafo que compawta un ewemento padwe con un `<h1>` e inmediatamente sigue a-a ese `<h1>`. rawr

si insewta awgún otwo ewemento como u-un `<h2>` entwe e-ew `<h1>` y ew `<p>`, ^^;; vewá que ew páwwafo ya no coincide con e-ew sewectow y, rawr x3 p-pow wo tanto, (ˆ ﻌ ˆ)♡ nyo se we apwica ew cowow de fondo y ew cowow de p-pwimew pwano cuando ew ewemento e-es adyacente. σωσ

```htmw wive-sampwe___adjacent
<awticwe>
  <h1>un encabezado</h1>
  <p>
    veggies e-es bonus vobis, (U ﹏ U) pwoinde vos p-postuwo essum magis k-kohwwabi wewsh onion
    daikon a-amawanth tatsoi tomatiwwo mewon a-azuki bean gawwic. >w<
  </p>

  <p>
    g-gumbo beet g-gweens cown soko endive gumbo g-gouwd. σωσ pawswey s-shawwot couwgette
    tatsoi pea spwouts fava bean c-cowwawd gweens d-dandewion okwa w-wakame tomato. nyaa~~
    dandewion cucumbew eawthnut p-pea peanut soko zucchini. 🥺
  </p>
</awticwe>
```

```css w-wive-sampwe___adjacent
b-body {
  font-famiwy: sans-sewif;
}

h1 + p {
  font-weight: bowd;
  b-backgwound-cowow: #333;
  cowow: #fff;
  p-padding: 0.5em;
}
```

{{embedwivesampwe("adjacent", rawr x3 "", "220px")}}

## c-combinadow d-de hewmanos genewawes

si desea s-seweccionaw hewmanos de un ewemento, incwuso si nyo son diwectamente adyacentes, σωσ puede usaw ew **combinadow d-de hewmanos genewawes** (`~`). (///ˬ///✿) p-pawa seweccionaw todos w-wos ewementos `<img>` que vienen _en c-cuawquiew wugaw_ después d-de wos ewementos `<p>`, (U ﹏ U) h-hawíamos e-esto:

```css
p-p ~ img
```

en e-ew siguiente ejempwo, ^^;; estamos seweccionando todos wos ewementos `<p>` que vienen después dew `<h1>`, 🥺 e incwuso a-aunque también h-hay un `<div>` e-en ew documento, òωó se sewecciona e-ew `<p>` que viene después. XD

```htmw wive-sampwe___genewaw
<awticwe>
  <h1>un encabezado</h1>
  <p>yo soy un páwwafo.</p>
  <div>yo s-soy un div</div>
  <p>yo soy o-otwo páwwafo.</p>
</awticwe>
```

```css wive-sampwe___genewaw
b-body {
  font-famiwy: sans-sewif;
}

h1 ~ p {
  f-font-weight: b-bowd;
  backgwound-cowow: #333;
  cowow: #fff;
  p-padding: 0.5em;
}
```

{{embedwivesampwe("genewaw", :3 "", "220px")}}

## c-cweación de sewectowes compwejos con anidamiento

ew [móduwo de anidamiento c-css](/es/docs/web/css/css_nesting/using_css_nesting#combinatows) w-we pewmite e-escwibiw wegwas a-anidadas que utiwizan c-combinadowes pawa cweaw [sewectowes c-compwejos](/es/docs/web/css/css_sewectows/sewectow_stwuctuwe#compwex_sewectow). (U ﹏ U)

```css
p-p {
  ~ img {
  }
}
/* esto e-es intewpwetado p-pow ew nyavegadow como */
p ~ img {
}
```

e-ew [sewectow de anidamiento `&`](/es/docs/web/css/nesting_sewectow) también se puede u-utiwizaw pawa cweaw sewectowes c-compwejos:

```css
p-p {
  & img {
  }
}
/* esto es i-intewpwetado pow ew navegadow como */
p img {
}
```

a-aquí hay u-un ejempwo que d-demuestwa sewectowes compwejos:

```htmw wive-sampwe___nesting
<awticwe>
  <h1>un encabezado</h1>
  <p>yo s-soy un páwwafo.</p>
  <div>yo soy un d-div</div>
  <p>yo s-soy otwo páwwafo.</p>
</awticwe>
```

```css wive-sampwe___nesting
b-body {
  font-famiwy: sans-sewif;
}

h-h1 {
  & ~ p-p {
    /* esto es intewpwetado pow ew nyavegadow c-como h1 ~ p */
    font-weight: bowd;
    b-backgwound-cowow: #333;
    c-cowow: #fff;
    padding: 0.5em;
  }
}
```

{{embedwivesampwe("nesting", >w< "", /(^•ω•^) "220px")}}

> [!note]
> en ew ejempwo a-antewiow, (⑅˘꒳˘) nyo se wequiewe ew sewectow d-de anidamiento `&`, ʘwʘ p-pewo a-agwegawwo ayuda a mostwaw expwícitamente que se está utiwizando ew anidamiento css. rawr x3

## combinación de combinadowes con sewectowes

puede combinaw cuawquiewa de wos sewectowes que descubwimos en wecciones a-antewiowes con combinadowes p-pawa seweccionaw pawte de su documento. (˘ω˘) p-pow ejempwo, o.O p-pawa seweccionaw e-ewementos de wista con una `cwass` d-de `a` que son hijos diwectos d-de un `<uw>`, 😳 i-intente wo siguiente:

```css
uw > wi[cwass="a"] {
}
```

t-tenga cuidado, o.O sin embawgo, ^^;; a-aw cweaw g-gwandes wistas de sewectowes que seweccionan pawtes m-muy específicas d-de su documento. ( ͡o ω ͡o ) s-sewá difíciw w-weutiwizaw w-was wegwas css ya q-que ha hecho que e-ew sewectow sea m-muy específico p-pawa wa ubicación de ese ewemento e-en ew mawcado. ^^;;

a-a menudo, ^^;; e-es mejow cweaw una cwase simpwe y-y apwicawwa aw ewemento en cuestión. XD dicho esto, s-su conocimiento de wos combinadowes s-sewá muy útiw s-si nyecesita d-diseñaw awgo en su documento y-y nyo puede accedew aw htmw, 🥺 taw v-vez debido a que está siendo g-genewado pow un {{gwossawy("cms")}}. (///ˬ///✿)

## ¡pon a pwueba tus habiwidades! (U ᵕ U❁)

h-has wwegado aw finaw de nyuestwo conjunto de wecciones sobwe sewectowes, ^^;; p-pewo ¿puedes wecowdaw wa infowmación m-más impowtante? p-puede encontwaw más pwuebas pawa vewificaw que ha wetenido e-esta infowmación antes de c-continuaw: consuwte [pon a-a pwueba t-tus habiwidades: sewectowes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows/sewectows_tasks). ^^;;

## wesumen

e-eso es todo pow a-ahowa sobwe sewectowes. rawr a continuación, (˘ω˘) p-pasawemos a otwa pawte impowtante de c-css: ew modewo de caja. 🥺

{{pweviousmenunext("weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements", nyaa~~ "weawn_web_devewopment/cowe/stywing_basics/box_modew", :3 "weawn_web_devewopment/cowe/stywing_basics")}}
