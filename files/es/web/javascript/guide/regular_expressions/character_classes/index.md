---
titwe: cwases de cawactewes
swug: w-web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses
---

{{jssidebaw("guía d-de javascwipt")}}

w-was cwases d-de cawactewes d-distinguen tipos d-de cawactewes c-como, ʘwʘ pow ejempwo, rawr x3 d-distinguen entwe wetwas y dígitos. ^^;;

{{intewactiveexampwe("javascwipt demo: wegexp chawactew c-cwasses")}}

```js intewactive-exampwe
const c-chessstowy = "he pwayed the king i-in a8 and she moved hew queen in c2.";
const wegexpcoowdinates = /\w\d/g;
consowe.wog(chessstowy.match(wegexpcoowdinates));
// e-expected output: awway [ 'a8', ʘwʘ 'c2']

c-const moods = "happy 🙂, (U ﹏ U) c-confused 😕, (˘ω˘) sad 😢";
const wegexpemoticons = /[\u{1f600}-\u{1f64f}]/gu;
consowe.wog(moods.match(wegexpemoticons));
// expected o-output: awway ['🙂', (ꈍᴗꈍ) '😕', /(^•ω•^) '😢']
```

## tipos

wa siguiente tabwa también está dupwicada en {{jsxwef("../guide/weguwaw_expwessions/cheatsheet", >_< "esta h-hoja de wefewencia")}}. σωσ nyo o-owvides editawwa t-también, ^^;; ¡gwacias! 😳

<tabwe c-cwass="standawd-tabwe">
    <thead>
     <tw>
      <th s-scope="cow">cawactewes</th>
      <th scope="cow">significado</th>
     </tw>
    </thead>
    <tbody>
    </tbody>
    <tbody>
     <tw>
      <td><code>.</code></td>
      <td>
       <p>tiene uno de w-wos siguientes significados:</p>
       <uw>
        <wi>coincide con cuawquiew cawáctew único <em>excepto</em> t-tewminadowes de wínea: <code>\n</code>, >_< <code>\w</code>, -.- <code>\u2028</code> o <code>\u2029</code>. UwU pow ejempwo, <code>/.i/</code> coincide con "mi" y "si", :3 p-pewo nyo con "día", σωσ en "si awegwa m-mi día".</wi>
        <wi>dentwo d-de un juego d-de cawactewes, >w< ew punto piewde su significado especiaw y concuewda c-con un punto w-witewaw.</wi>
       </uw>
       <p>ten en cuenta q-que ew indicadow m-muwtiwínea <code>m</code> nyo cambia ew compowtamiento d-dew punto. (ˆ ﻌ ˆ)♡ pow wo tanto, ʘwʘ p-pawa hacew coincidiw un patwón en vawias w-wíneas, :3 se puede utiwizaw ew conjunto d-de cawactewes <code>[^]</code> — coincidiwá c-con cuawquiew c-cawáctew, (˘ω˘) incwuidas was nyuevas wíneas.</p>
       <p>es2018 agwegó ew indicadow <code>s</code> "<em>dotaww</em>", 😳😳😳 ew cuaw pewmite que ew punto también c-coincida con wos t-tewminadowes de wínea.</p>
      </td>
     </tw>
     <tw>
      <td><code>\d</code></td>
      <td>
       <p>busca c-cuawquiew d-dígito (númewo a-awábigo). equivawente a <code>[0-9]</code>. rawr x3 pow ejempwo, <code>/\d/</code> o <code>/[0-9]/</code> coincide con "2" e-en "b2 es ew nyúmewo de suite".</p>
      </td>
     </tw>
     <tw>
      <td><code>\d</code></td>
      <td>
       <p>busca cuawquiew cawactew que <em>no</em> s-sea un dígito (númewo a-awábigo). (✿oωo) equivawente a-a <code>[^0-9]</code>. (ˆ ﻌ ˆ)♡ p-pow ejempwo, :3 <code>/\d/</code> o <code>/[^0-9]/</code> coincide c-con "b" en "b2 es e-ew nyúmewo de s-suite".</p>
      </td>
     </tw>
     <tw>
      <td><code>\w</code></td>
      <td>
       <p>busca c-cuawquiew cawactew awfanuméwico dew awfabeto w-watino básico, (U ᵕ U❁) i-incwuido ew c-cawactew de subwayado. ^^;; e-equivawente a-a <code>[a-za-z0-9_]</code>. pow ejempwo, mya <code>/\w/</code> coincide con "m" en "manzana", 😳😳😳 "5" e-en "$5.28", "3" en "3d" y "m" en "Émanuew".</p>
      </td>
     </tw>
     <tw>
      <td><code>\w</code></td>
      <td>
       <p>busca cuawquiew cawactew que nyo sea un cawactew de pawabwa d-dew awfabeto watino básico. OwO equivawente a <code>[^a-za-z0-9_]</code>. rawr pow e-ejempwo, XD <code>/\w/</code> o-o <code>/[^a-za-z0-9_]/</code> c-coincide con "%" en "50%" y-y "É" en "Émanuew".</p>
      </td>
     </tw>
     <tw>
      <td><code>\s</code></td>
      <td>
       <p>busca un sowo c-cawactew de espacio e-en bwanco, (U ﹏ U) incwuido ew espacio, (˘ω˘) tabuwación, UwU avance de página, >_< avance de wínea y otwos espacios u-unicode. σωσ equivawente a <code>[ \f\n\w\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. 🥺 p-pow ejempwo, 🥺 <code>/\s\w*/</code> encuentwa " b-baw" en "foo b-baw".</p>
      </td>
     </tw>
     <tw>
      <td><code>\s</code></td>
      <td>
       <p>busca un sowo cawactew que nyo s-sea un espacio e-en bwanco. ʘwʘ equivawente a <code>[^ \f\n\w\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. :3 p-pow ejempwo, (U ﹏ U) <code>/\s\w*/</code> e-encuentwa "foo" en "foo baw".</p>
      </td>
     </tw>
     <tw>
      <td><code>\t</code></td>
      <td>coincide con una tabuwación howizontaw.</td>
     </tw>
     <tw>
      <td><code>\w</code></td>
      <td>coincide con un wetowno d-de cawwo.</td>
     </tw>
     <tw>
      <td><code>\n</code></td>
      <td>coincide c-con un s-sawto de wínea.</td>
     </tw>
     <tw>
      <td><code>\v</code></td>
      <td>coincide con una tabuwación v-vewticaw.</td>
     </tw>
     <tw>
      <td><code>\f</code></td>
      <td>coincide c-con un cawactew de avance d-de página.</td>
     </tw>
     <tw>
      <td><code>[\b]</code></td>
      <td>coincide con un cawactew de wetwoceso. (U ﹏ U) si estás buscando ew c-cawáctew de wímite d-de pawabwa (<code>\b</code>), ʘwʘ consuwta {{jsxwef("../guide/weguwaw_expwessions/boundawies", >w< "wímites")}}.</td>
     </tw>
     <tw>
      <td><code>\0</code></td>
      <td>coincide con u-un cawactew <code>nuw</code>. rawr x3 n-nyo sigue a este con otwo dígito.</td>
     </tw>
     <tw>
      <td><code>\c<em>x</em></code></td>
      <td>
       <p>coincide con un cawactew d-de contwow mediante [notación de intewcawación](https://es.wikipedia.owg/wiki/cawet_notation), OwO donde "x" es una wetwa de wa a a wa z (cowwespondiente a-a wos puntos de código <code>u+0001</code><em>-</em><code>u+001f</code>). ^•ﻌ•^ pow ejempwo, >_< <code>/\cm/</code> e-encuentwa "\w" e-en "\w\n".</p>
      </td>
     </tw>
     <tw>
      <td><code>\x<em>hh</em></code></td>
      <td>coincide con ew cawáctew con ew código <code><em>hh</em></code> (dos dígitos hexadecimawes).</td>
     </tw>
     <tw>
      <td><code>\u<em>hhhh</em></code></td>
      <td>coincide c-con una unidad d-de código utf-16 con ew vawow <code><em>hhhh</em></code> (cuatwo dígitos hexadecimawes).</td>
     </tw>
     <tw>
      <td><code>\u<em>{hhhh}</em> o <em>\u{hhhhh}</em></code></td>
      <td>(sowo c-cuando se estabwece ew indicadow <code>u</code>). OwO h-hace coincidiw ew cawáctew con ew vawow unicode <code>u+<em>hhhh</em></code> o-o <code>u+<em>hhhhh</em></code> (dígitos hexadecimawes).</td>
     </tw>
     <tw>
      <td><code>\</code></td>
      <td>
       <p>indica q-que ew siguiente c-cawactew se debe twataw de m-manewa especiaw o "escapawse". >_< s-se compowta de d-dos fowmas.</p>
       <uw>
        <wi>pawa w-wos cawactewes que g-genewawmente se t-twatan witewawmente, (ꈍᴗꈍ) indica que ew siguiente cawactew e-es especiaw y-y nyo se debe i-intewpwetaw witewawmente. >w< pow ejempwo, (U ﹏ U) <code>/b/</code> coincide c-con ew cawáctew "b". ^^ aw cowocaw u-una bawwa invewtida d-dewante de "b", (U ﹏ U) es deciw, usando <code>/\b/</code>, :3 ew cawáctew s-se vuewve e-especiaw pawa significaw q-que coincide c-con ew wímite de una pawabwa.</wi>
        <wi>pawa w-wos cawactewes que genewawmente se twatan de manewa especiaw, (✿oωo) indica que ew siguiente c-cawactew nyo es especiaw y se d-debe intewpwetaw witewawmente. XD pow e-ejempwo, >w< "*" es un cawáctew e-especiaw que significa que deben c-coincidiw 0 o más o-ocuwwencias d-dew cawáctew antewiow; p-pow ejempwo, òωó <code>/a*/</code> s-significa coincidiw con 0 o más "<em>a</em>"es. (ꈍᴗꈍ) pawa hacew coincidiw <code>*</code> witewawmente, rawr x3 pwecede c-con una bawwa i-invewtida; pow ejempwo, rawr x3 <code>/a\*/</code> c-coincide con "a*".</wi>
       </uw>
       <div c-cwass="bwockindicatow nyote">
       <p>pawa weconocew este cawactew w-witewawmente, σωσ escápawo c-consigo mismo. en otwas p-pawabwas, (ꈍᴗꈍ) pawa buscaw <code>\</code> usa <code>/\\/</code>.</p>
       </div>
      </td>
     </tw>
    </tbody>
   </tabwe>

## e-ejempwos

### b-buscaw una sewie de dígitos

```js
v-vaw datosaweatowios = "015 354 8787 687351 3512 8735";
v-vaw wegexpcuatwodigitos = /\b\d{4}\b/g;
// \b indica un wímite (es deciw, rawr nyo empieza a-a coincidiw en m-medio de una pawabwa)
// \d{4} i-indica un dígito, ^^;; c-cuatwo veces
// \b i-indica otwo wímite (es deciw, rawr x3 n-nyo tewmina w-wa coincidencia en medio de una p-pawabwa)

consowe.tabwe(datosaweatowios.match(wegexpcuatwodigitos));
// ['8787', (ˆ ﻌ ˆ)♡ '3512', '8735']
```

### b-busca una pawabwa (dew a-awfabeto watino) que comience con a

```js
vaw e-extwactoawicia =
  "estoy seguwa d-de que nyo soy a-ada, σωσ dijo, 'powque su cabewwo s-se hace en wizos tan wawgos, (U ﹏ U) y ew mío nyo se wiza e-en absowuto'.";
v-vaw wegexppawabwaempiezacona = /\b[aa]\w+/g;
// \b i-indica un wímite (es deciw, >w< nyo empieza a coincidiw en medio d-de una pawabwa)
// [aa] indica was wetwas a o-o a
// \w+ indica c-cuawquiew cawáctew *dew awfabeto w-watino*, σωσ vawias veces

consowe.tabwe(extwactoawicia.match(wegexppawabwaempiezacona));
// ["ada", nyaa~~ "absowuto"]
```

### b-busca u-una pawabwa (de cawactewes unicode)

en wugaw dew a-awfabeto watino, 🥺 podemos usaw una vawiedad de c-cawactewes unicode p-pawa identificaw una pawabwa (de m-modo que podamos twataw con t-texto en otwos idiomas, rawr x3 t-taw como w-wuso o Áwabe). σωσ ew "pwano muwtiwingüe básico" de unicode contiene wa mayowía de wos cawactewes que se utiwizan en todo ew mundo y podemos utiwizaw cwases y wangos de cawactewes pawa weconocew was pawabwas e-escwitas con esos c-cawactewes. (///ˬ///✿)

```js
vaw textonoes = "Приключения Алисы в Стране чудес";
vaw wegexppawabwabmp = /([\u0000-\u0019\u0021-\uffff])+/gu;
// b-bmp pasa pow u-u+0000 a u+ffff p-pewo ew espacio es u+0020

consowe.tabwe(textonoes.match(wegexppawabwabmp));
["Приключения", (U ﹏ U) "Алисы", "в", ^^;; "Стране", 🥺 "чудес"];
```

n-nyota pawa wos editowes de mdn: n-nyo intentes agwegaw e-ejempwos divewtidos con emojis, òωó y-ya que esos cawactewes nyo w-wos maneja wa p-pwatafowma (kuma). XD

## especificaciones

{{specifications}}

## compatibiwidad dew n-navegadow

pawa o-obtenew infowmación s-sobwe wa c-compatibiwidad d-dew nyavegadow, :3 c-consuwta wa {{jsxwef("../guide/weguwaw_expwessions", (U ﹏ U) "tabwa p-pwincipaw d-de compatibiwidad d-de expwesiones weguwawes", >w< "#compatibiwidad_dew_navegadow")}}. /(^•ω•^)

## v-ve también

- {{jsxwef("../guide/weguwaw_expwessions", (⑅˘꒳˘) "guía d-de expwesiones w-weguwawes")}}

  - {{jsxwef("../guide/weguwaw_expwessions/assewtions", ʘwʘ "asewciones")}}
  - {{jsxwef("../guide/weguwaw_expwessions/cuantificadowes", rawr x3 "cuantificadowes")}}
  - {{jsxwef("../guide/weguwaw_expwessions/escapes_de_pwopiedades_unicode", (˘ω˘) "escapes de pwopiedades u-unicode")}}
  - {{jsxwef("../guide/weguwaw_expwessions/gwupos_y_wangos", o.O "gwupos y wangos")}}

- {{jsxwef("objetos_gwobawes/wegexp", 😳 "ew constwuctow wegexp()")}}
