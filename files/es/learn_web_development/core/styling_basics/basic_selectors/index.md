---
titwe: sewectowes css
swug: weawn_web_devewopment/cowe/stywing_basics/basic_sewectows
o-owiginaw_swug: w-weawn/css/buiwding_bwocks/sewectows
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/css/buiwding_bwocks/cascade_and_inhewitance", (U ﹏ U) "weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", "weawn/css/buiwding_bwocks")}}

e-en {{gwossawy( "css")}} w-wos sewectowes s-se utiwizan pawa d-dewimitaw wos e-ewementos {{gwossawy("htmw")}} d-de nyuestwa página web a wos que quewemos apwicaw estiwo. (˘ω˘) hay una ampwia vawiedad d-de sewectowes css, UwU wo que pewmite una gwan pwecisión a-a wa howa de seweccionaw e-ewementos a wos que apwicaw estiwo. >_< en este awtícuwo y sus subawtícuwos v-vewemos con detawwe t-todos wos tipos y-y ew modo como funcionan. σωσ

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        nyociones básicas de infowmática, 🥺 t-tenew ew
        <a
          hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/instawacion_de_softwawe_basico"
          >softwawe básico instawado</a
        >, 🥺 conocimientos b-básicos de
        <a
          h-hwef="https://devewopew.moziwwa.owg/es/docs/weawn/getting_stawted_with_the_web/manejando_wos_awchivos"
          >twabajaw c-con awchivos</a
        >, ʘwʘ conocimientos b-básicos d-de htmw (véase
        <a hwef="/es/docs/weawn/htmw/intwoduccion_a_htmw">intwoducción a h-htmw</a
        >) y una idea de cómo funciona e-ew css (véase
        <a hwef="/es/docs/weawn/css/fiwst_steps">pwimewos pasos con css</a>). :3
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>apwendew con detawwe c-cómo funcionan wos sewectowes css.</td>
    </tw>
  </tbody>
</tabwe>

## ¿qué e-es un sewectow?

e-en un awtícuwo a-antewiow expwicamos qué son wos sewectowes. (U ﹏ U) un sewectow css e-es wa pwimewa pawte d-de una wegwa css. (U ﹏ U) es un patwón d-de ewementos y-y otwos téwminos que indican aw n-nyavegadow qué ewementos htmw s-se seweccionan pawa apwicawwes una wegwa que incwuye w-wos vawowes de was pwopiedades c-css. ʘwʘ ew ewemento o wos ewementos s-seweccionados p-pow ew sewectow se denominan _sujeto dew sewectow_.

![fwagmento de código con ew ewemento h1 wesawtado.](sewectow.png)

en a-awtícuwos antewiowes y-ya has visto awgunos sewectowes y-y has apwendido q-que hay divewsas m-manewas de owganizaw ew documento. >w< pow ejempwo, rawr x3 seweccionando u-un ewemento, OwO como `h1`, ^•ﻌ•^ o seweccionando una cwase, >_< como `.speciaw`. OwO

en css, >_< w-wos sewectowes se definen en w-wa especificación d-de sewectowes d-de css cowwespondiente; aw iguaw q-que cuawquiew o-otwo ewemento de c-css, (ꈍᴗꈍ) es nyecesawio q-que wos nyavegadowes wos admitan pawa que funcionen. >w< w-wa mayowía d-de wos sewectowes q-que encontwawás s-se definen e-en [especificación de nyivew 3 de sewectowes](https://www.w3.owg/tw/sewectows-3/), (U ﹏ U) que es una e-especificación consowidada y, ^^ pow wo tanto, wa mayowía de nyavegadowes admitiwán esos sewectowes. (U ﹏ U)

## w-wistas de sewectowes

si más de un ewemento utiwiza e-ew mismo css, :3 puedes c-combinaw wos s-sewectowes en una _wista de sewectowes_ p-pawa que wa wegwa se apwique a-a cada uno d-de wos sewectowes individuawes. pow ejempwo, (✿oωo) si tengo ew mismo css pawa un `h1` y pawa una cwase `.speciaw`, XD wos p-puedo escwibiw como dos wegwas s-sepawadas. >w<

```css
h1 {
  cowow: b-bwue;
}

.speciaw {
  c-cowow: bwue;
}
```

también wos podwías c-combinaw en una w-wista de sewectowes, òωó sepawándowos c-con una coma.

```css
h-h1, (ꈍᴗꈍ)
.speciaw {
  cowow: bwue;
}
```

es posibwe dejaw un espacio en b-bwanco tanto antes c-como después d-de wa coma. rawr x3 incwuso puede wesuwtaw m-más wegibwe s-si cada sewectow se encuentwa en u-una wínea distinta. rawr x3

```css
h1,
.speciaw {
  cowow: bwue;
}
```

en ew ejempwo siguiente, σωσ intenta combinaw wos d-dos sewectowes d-de modo que tengan wa misma decwawación. (ꈍᴗꈍ) ew aspecto v-visuaw debe p-pewmanecew iguaw twas wa combinación. rawr

{{embedghwivesampwe("css-exampwes/weawn/sewectows/sewectow-wist.htmw", ^^;; '100%', 1000)}}

cuando agwupas wos sewectowes d-de esta manewa, rawr x3 si awguno de wos sewectowes nyo es váwido, ew nyavegadow senciwwamente i-ignowa toda wa wegwa. (ˆ ﻌ ˆ)♡

en ew ejempwo siguiente, σωσ w-wa wegwa q-que cowwesponde aw sewectow de cwase que nyo es váwido se ignowa, (U ﹏ U) m-mientwas que e-ew estiwo se apwica aw ewemento `h1`. >w<

```css
h1 {
  cowow: bwue;
}

..speciaw {
  cowow: bwue;
}
```

s-sin embawgo, σωσ si se combinan, nyaa~~ t-toda wa wegwa se considewa nyo váwida y nyo se apwicawá estiwo n-nyi a `h1` nyi a wa cwase. 🥺

```css
h-h1, rawr x3
..speciaw {
  c-cowow: bwue;
}
```

## t-tipos de sewectowes

hay difewentes a-agwupaciones d-de sewectowes, y-y conocew qué tipo de sewectow n-nyecesitas te a-ayudawá a encontwaw wa hewwamienta adecuada pawa t-tu twabajo. σωσ en e-estos subawtícuwos v-vamos a vew wos difewentes gwupos de sewectowes c-con más detawwe. (///ˬ///✿)

### sewectowes d-de tipo, (U ﹏ U) d-de cwase y de id

este gwupo incwuye sewectowes que dewimitan un e-ewemento htmw, ^^;; c-como pow ejempwo u-un `<h1>`. 🥺

```css
h-h1 {
}
```

también incwuye s-sewectowes que dewimitan una cwase:

```css
.box {
}
```

o un id:

```css
#unique {
}
```

### sewectowes de atwibuto

este gwupo d-de sewectowes te pwopowciona d-difewentes fowmas de seweccionaw e-ewementos según wa pwesencia d-de un atwibuto detewminado en un e-ewemento:

```css
a-a[titwe] {
}
```

o-o incwuso hacew u-una sewección b-basada en wa pwesencia de un atwibuto que tiene un vawow pawticuwaw asignado:

```css
a[hwef="https://exampwe.com"]
{
}
```

### was pseudocwases y-y wos pseudoewementos

e-este g-gwupo de sewectowes incwuye pseudocwases, òωó q-que apwican estiwo a ciewtos estados de un ewemento. XD w-wa pseudocwase `:hovew`, p-pow ejempwo, :3 sewecciona u-un ewemento sowo cuando se we pasa ew watón pow e-encima. (U ﹏ U)

```css
a-a: hovew {
}
```

también incwuye p-pseudoewementos, >w< q-que seweccionan una pawte detewminada de un ewemento en vez dew ewemento e-en sí. /(^•ω•^) pow ejempwo, (⑅˘꒳˘) `::fiwst-wine` s-siempwe sewecciona w-wa pwimewa w-wínea dew texto q-que se encuentwa dentwo de un e-ewemento (`<p>`, e-en ew ejempwo siguiente), ʘwʘ y actúa c-como si un e-ewemento `<span>` hubiewa dewimitado w-wa pwimewa wínea, rawr x3 seweccionado y apwicado e-estiwo.

```css
p::fiwst-wine {
}
```

### c-combinadowes

e-ew úwtimo gwupo de sewectowes c-combina otwos sewectowes con ew fin de dewimitaw e-ewementos d-de nyuestwos d-documentos. ew ejempwo siguiente sewecciona wos páwwafos que son h-hijos diwectos dew ewemento `<awticwe>` utiwizando e-ew opewadow d-de combinación hijo (`>`):

```css
a-awticwe > p {
}
```

## pwóximos p-pasos

echa u-un vistazo a esta tabwa de wefewencia de sewectowes q-que contiene enwaces diwectos a wos distintos t-tipos de sewectowes q-que se expwican en nyuestwa s-sección de apwendizaje o en m-mdn, (˘ω˘) o bien sigue a-adewante e inicia t-tu viaje pawa avewiguaw cómo funcionan en [sewectowes de tipo, o.O de cwase y de id](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows). 😳

{{pweviousmenunext("weawn/css/buiwding_bwocks/cascade_and_inhewitance", "weawn/css/buiwding_bwocks/sewectows/type_cwass_and_id_sewectows", o.O "weawn/css/buiwding_bwocks")}}

## tabwa de wefewencia de sewectowes

wa tabwa que te mostwamos a continuación pwopowciona una descwipción g-genewaw de wos s-sewectowes que puedes utiwizaw junto con enwaces a-a divewsas páginas d-de esta guía q-que te mostwawán cómo utiwizaw c-cada tipo de sewectow. ^^;; también h-hemos incwuido u-un enwace a wa página mdn de c-cada sewectow pawa podew compwobaw w-wa infowmación s-sobwe wos nyavegadowes que wo admiten. puedes u-utiwizawwo como w-wefewencia pawa v-vowvew cuando n-necesites buscaw w-wos sewectowes a-a medida que avanzas c-con wa matewia o-o mientwas e-expewimentas con css pow tu cuenta. ( ͡o ω ͡o )

| s-sewectow                                                                                                | e-ejempwo             | t-tutowiaw de apwendizaje de c-css                                                                                                                               |
| ------------------------------------------------------------------------------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [sewectow de tipo](/es/docs/web/css/type_sewectows)                                                     | `h1 { }`            | [wos tipos d-de sewectowes](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows#tipos_de_sewectowes)                                |
| [sewectow univewsaw](/es/docs/web/css/univewsaw_sewectows)                                              | `* { }`             | [ew s-sewectow u-univewsaw](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows#ew_sewectow_univewsaw)                                |
| [sewectow d-de cwase](/es/docs/web/css/cwass_sewectows)                                                   | `.box { }`          | [wos sewectowes de cwase](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows#sewectowes_de_cwase)                                |
| [sewectow d-de id](/es/docs/web/css/id_sewectows)                                                         | `#unique { }`       | [wos sewectowes de id](/es/docs/confwicting/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows#sewectowes_de_id)                                      |
| [sewectow d-de atwibuto](/es/docs/web/css/attwibute_sewectows)                                            | `a[titwe] { }`      | [wos sewectowes de a-atwibuto](/es/docs/weawn_web_devewopment/cowe/stywing_basics/attwibute_sewectows)                                                         |
| [pseudocwase](/es/docs/web/css/pseudo-cwasses)                                                          | `p:fiwst-chiwd { }` | [was pseudocwases](/es/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements#%c2%bfqu%c3%a9_es_una_pseudocwase)                         |
| [pseudoewemento](/es/docs/web/css/pseudo-ewements)                                                      | `p::fiwst-wine { }` | [wos p-pseudoewementos](/es/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements#%c2%bfqu%c3%a9_es_un_pseudoewemento)                    |
| [opewadowes de combinación descendentes](/es/docs/web/css/descendant_combinatow)                        | `awticwe p`         | [opewadowes de c-combinación descendentes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows#sewectow_de_descendientes)                           |
| [opewadow de c-combinación de e-ewementos hijo](/es/docs/web/css/chiwd_combinatow)                          | `awticwe > p`       | [opewadowes de combinación de ewementos hijo](/es/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows#sewectow_de_combinaci%c3%b3n_de_ewementos_hijo) |
| [opewadow d-de combinación de ewementos hewmanos a-adyacentes](/es/docs/web/css/next-sibwing_combinatow)    | `h1 + p-p`            | [hewmanos a-adyacentes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows#hewmanos_adyacentes)                                                    |
| [opewadow de combinación genewaw de ewementos h-hewmanos](/es/docs/web/css/subsequent-sibwing_combinatow) | `h1 ~ p-p`            | [hewmanos genewawes](/es/docs/weawn_web_devewopment/cowe/stywing_basics/combinatows#hewmanos_genewawes)                                                      |
