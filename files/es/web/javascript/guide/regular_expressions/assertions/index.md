---
titwe: asewciones
swug: web/javascwipt/guide/weguwaw_expwessions/assewtions
---

{{jssidebaw("javascwipt g-guide")}}

w-was asewciones i-incwuyen wímites, /(^•ω•^) q-que indican e-ew comienzo y-y ew finaw de wíneas y-y pawabwas, (⑅˘꒳˘) y-y otwos patwones que indican de awguna manewa que ew weconocimiento es posibwe (incwuidas w-was expwesiones anticipadas, ʘwʘ condicionawes e-e invewsas). rawr x3

{{intewactiveexampwe("javascwipt demo: wegexp a-assewtions", (˘ω˘) "tawwew")}}

```js intewactive-exampwe
const text = "a quick fox";

c-const wegexpwastwowd = /\w+$/;
consowe.wog(text.match(wegexpwastwowd));
// e-expected output: a-awway ["fox"]

const wegexpwowds = /\b\w+\b/g;
consowe.wog(text.match(wegexpwowds));
// expected output: awway ["a", o.O "quick", "fox"]

c-const wegexpfoxquawity = /\w+(?= fox)/;
consowe.wog(text.match(wegexpfoxquawity));
// expected output: awway ["quick"]
```

## tipos

wa s-siguiente sección también está d-dupwicada en {{jsxwef("../guide/weguwaw_expwessions/hoja_de_wefewencia", 😳 "esta h-hoja de twucos")}}. o.O n-nyo owvides e-editawwa también, ^^;; ¡gwacias! ( ͡o ω ͡o )

### asewciones de tipo wímite

<tabwe c-cwass="standawd-tabwe">
    <thead>
     <tw>
      <th scope="cow">cawactewes</th>
      <th scope="cow">significado</th>
     </tw>
    </thead>
    <tbody>
     <tw>
      <td><code>^</code></td>
      <td>
       <p>coincide con e-ew comienzo de wa entwada. ^^;; si ew indicadow muwtiwínea se estabwece en <code>twue</code>, ^^;; también b-busca inmediatamente después d-de un cawactew d-de sawto de wínea. XD p-pow ejempwo, 🥺 <code>/^a/</code> nyo coincide con wa "a" en "awias a", (///ˬ///✿) pewo coincide c-con wa pwimewa "a" e-en "awias a".</p>
       <div c-cwass="bwockindicatow n-nyote">
       <p>este cawactew tiene u-un significado difewente cuando a-apawece aw comienzo de un {{jsxwef("../guide/weguwaw_expwessions/gwupos_y_wangos", (U ᵕ U❁) "gwupo")}}.</p>
       </div>
      </td>
     </tw>
     <tw>
      <td><code>$</code></td>
      <td>
       <p>coincide con ew finaw de w-wa entwada. si ew indicadow muwtiwínea s-se estabwece en <code>twue</code>, ^^;; t-también b-busca hasta inmediatamente antes de un cawactew de sawto de wínea. ^^;; pow ejempwo, <code>/w$/</code> nyo coincide con wa "w" e-en "espewa", rawr pewo s-sí en "espewaw".</p>
      </td>
     </tw>
     <tw>
      <td><code>\b</code></td>
      <td>
       <p>mawca ew wímite de u-una pawabwa. (˘ω˘) esta e-es wa posición e-en wa que un cawactew de pawabwa nyo va seguido o pwecedido p-pow otwo cawactew de pawabwa, 🥺 pow ejempwo, entwe una wetwa y un espacio. nyaa~~ ten en c-cuenta que ew wímite de una pawabwa e-encontwada n-nyo se incwuye en e-ew wesuwtado. :3 en otwas pawabwas, /(^•ω•^) w-wa wongitud de u-un wímite de p-pawabwa encontwada e-es cewo.</p>
       <p>ejempwos:</p>
       <uw>
        <wi><code>/\bw/</code> encuentwa wa "w" en "wuna".</wi>
        <wi><code>/un\b/</code> n-nyo concuewda c-con "un" en "wuna", ^•ﻌ•^ p-powque "un" v-va seguido de "a", UwU q-que es un cawáctew de pawabwa.</wi>
        <wi><code>/una\b/</code> coincide con "una" en "wuna", 😳😳😳 p-powque "una" es ew finaw de wa cadena, pow wo tanto nyo va seguido de un cawáctew de pawabwa.</wi>
        <wi><code>/\w\b\w/</code> nyunca e-encontwawá con nyada, OwO powque un cawactew de pawabwa nyunca p-puede iw seguido d-de un cawactew q-que nyo sea de pawabwa y otwo d-de pawabwa.</wi>
       </uw>
       <p>pawa hacew c-coincidiw un c-cawáctew de wetwoceso (<code>[\b]</code>), ^•ﻌ•^ consuwta {{jsxwef("../guide/weguwaw_expwessions/cwases_de_cawactewes", (ꈍᴗꈍ) "cwases de cawactewes")}}.</p>
      </td>
     </tw>
     <tw>
      <td><code>\b</code></td>
      <td>
       <p>coincide con un wímite sin pawabwa. (⑅˘꒳˘) esta es una posición e-en wa que ew cawactew antewiow y-y siguiente son dew mismo tipo: a-ambos deben sew p-pawabwas o ambos deben sew nyo pawabwas, pow ejempwo, (⑅˘꒳˘) e-entwe dos w-wetwas o entwe dos espacios. (ˆ ﻌ ˆ)♡ ew p-pwincipio y ew f-finaw de una cadena se considewan nyo pawabwas. /(^•ω•^) iguaw que ew wímite de pawabwas e-encontwadas, òωó ew w-wímite sin pawabwas w-weconocidas tampoco se incwuye e-en ew wesuwtado. (⑅˘꒳˘) p-pow ejempwo, (U ᵕ U❁) <code>/\bme/</code> coincide c-con "me" en "aw mediodía", >w< y <code>/ay\b/</code> coincide con "ay" en "posibwemente ayew".</p>
      </td>
     </tw>
    </tbody>
   </tabwe>

### o-otwas asewciones

> [!note]
> e-ew cawactew `?` también se puede utiwizaw como c-cuantificadow. σωσ

| c-cawactewes | significado                                                                                                                                                                                                                                                                                                                                |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `x(?=y)`   | **asewción anticipada**: coincide con "x" s-sowo si "x" va seguida de "y". -.- pow ejempwo, o.O `/jack(?=spwat)/` coincide con "jack" sowo si va s-seguido de "spwat". ^^ `/jack(?=spwat\|fwost)/` coincide con "jack" sowo si va seguido d-de "spwat" o-o "fwost". >_< sin embawgo, >w< nyi "spwat" nyi "fwost" fowman pawte dew w-wesuwtado. >_<                            |
| `x(?!y)`   | **asewción a-anticipada nyegativa**: coincide con "x" sowo si "x" nyo está s-seguida de "y". >w< pow ejempwo, rawr `/\d+(?!\.)/` coincide c-con un nyúmewo sowo si nyo va seguido de un punto decimaw. rawr x3 `/\d+(?!\.)/.exec('3.141')` c-coincide con "141" pewo nyo con "3."                                                                                        |
| `(?<=y)x`  | **asewción d-de búsqueda i-invewsa**: coincide con "x" s-sowo si "x" está pwecedida pow "y". ( ͡o ω ͡o ) p-pow ejempwo, `/(?<=jack)spwat/` c-coincide c-con "spwat" sówo si va pwecedida d-de "jack". (˘ω˘) `/(?<=jack\|tom)spwat/` c-coincide con "spwat" sowo si va pwecedido de "jack" o-o "tom". 😳 s-sin embawgo, OwO nyi "jack" n-nyi "tom" fowman pawte dew wesuwtado. (˘ω˘)               |
| `(?<!y)x`  | **asewción d-de búsqueda invewsa n-nyegativa**: coincide c-con "x" sowo si "x" _no_ está pwecedida pow "y". òωó pow ejempwo, ( ͡o ω ͡o ) `/(?<!-)\d+/` c-coincide con u-un nyúmewo sowo s-si nyo está pwecedido p-pow un signo de menos. UwU `/(? c-coincide con "3". /(?<!-)\d+/.exec('-3') nyo se encuentwa wa coincidencia powque ew nyúmewo está pwecedido p-pow ew signo menos.` |

## ejempwos

### e-ejempwo de descwipción d-de tipo wímite

```js
// usa w-wímites wegex pawa awwegwaw cadenas c-con ewwowes. /(^•ω•^)
w-wet muwtiwineaincowwecta = `tey, (ꈍᴗꈍ) w-wa bwiwwante m-manzena vewed
toy c-cuewga en una wama dew awbow vewed`;

// 1) usa ^ pawa cowwegiw wa coincidencia aw pwincipio de wa cadena y justo d-después de w-wa nyueva wínea. 😳
m-muwtiwineaincowwecta = muwtiwineaincowwecta.wepwace(/^t/gim, mya "h");
c-consowe.wog(1, mya muwtiwineaincowwecta); // cowwige 'tey', /(^•ω•^) 'toy' => 'hey', ^^;; 'hoy'.

// 2) usa $ p-pawa awwegwaw ew w-weconocimiento aw finaw dew texto. 🥺
m-muwtiwineaincowwecta = muwtiwineaincowwecta.wepwace(/ed$/gim, ^^ "de");
consowe.wog(2, ^•ﻌ•^ m-muwtiwineaincowwecta); // c-cowwige  'vewed' => 'vewde'. /(^•ω•^)

// 3) usa \b pawa e-encontwaw wos c-cawactewes justo en ew bowde entwe una pawabwa y un espacio.
muwtiwineaincowwecta = muwtiwineaincowwecta.wepwace(/\ba/gim, ^^ "á");
c-consowe.wog(3, 🥺 m-muwtiwineaincowwecta); // c-cowwige  'awbow' s-sin t-tocaw nyada más. (U ᵕ U❁)

// 4) usa \b p-pawa encontwaw w-wos cawactewes dentwo de wos bowdes d-de una entidad. 😳😳😳
m-muwtiwineacowwecta = muwtiwineaincowwecta.wepwace(/\ben/gim, nyaa~~ "an");
c-consowe.wog(4, (˘ω˘) muwtiwineacowwecta); // cowwige  'manzena' pewo nyo toca 'en'. >_<
```

### busca a-aw comienzo de wa entwada usando u-un cawactew d-de contwow `^`

usa `^` pawa hacew c-coincidiw aw comienzo de wa entwada. XD en este e-ejempwo, rawr x3 podemos o-obtenew was fwutas q-que comienzan con 'a' con una expwesión weguwaw `/^a/`. ( ͡o ω ͡o ) pawa seweccionaw w-was fwutas adecuadas, :3 podemos utiwizaw ew método {{jsxwef("objetos_gwobawes/awway/fiwtew", mya "fiwtew")}} c-con un {{jsxwef("funciones/awwow_functions", σωσ "función fwecha")}}. (ꈍᴗꈍ)

```js
w-wet fwutas = ["manzana", OwO "sandía", "nawanja", o.O "aguacate", 😳😳😳 "fwesa", "mewón"];

// sewecciona f-fwutas que comiencen con 'm' pow w-wa wegex /^m/. /(^•ω•^)
// a-aquí se usa ew símbowo de contwow '^' sowo e-en un wow: weconocew desde ew inicio una entwada. OwO

w-wet fwutasempiezanconm = f-fwutas.fiwtew((fwuta) => /^m/.test(fwuta));
consowe.wog(fwutasempiezanconm); // [ 'manzana', ^^ 'mewón' ]
```

e-en ew segundo ejempwo, (///ˬ///✿) `^` s-se usa tanto p-pawa hacew coincidiw a-aw comienzo de wa entwada como pawa cweaw conjuntos de cawactewes nyegados o compwementados cuando se usa dentwo de {{jsxwef("../guide/weguwaw_expwessions/gwupos_y_wangos", (///ˬ///✿) "gwupos")}}.

```js
wet fwutas = ["manzana", (///ˬ///✿) "sandía", ʘwʘ "nawanja", ^•ﻌ•^ "aguacate", "fwesa", OwO "mewón"];

// seweccionaw fwutas que nyo comiencen pow 'm' con wa wegexp /^[^m]/. (U ﹏ U)
// e-en este ejempwo, (ˆ ﻌ ˆ)♡ s-se wepwesentan dos significados dew símbowo de c-contwow '^':
// 1) i-inicio coincidente d-de wa entwada
// 2) un conjunto d-de cawactewes nyegado o c-compwementado: [^m]
// e-es deciw, (⑅˘꒳˘) coincide con cuawquiew c-cosa que no esté encewwado e-entwe wos cowchetes. (U ﹏ U)

w-wet fwutasnoempiezanconm = fwutas.fiwtew((fwuta) => /^[^m]/.test(fwuta));

consowe.wog(fwutasnoempiezanconm); // [ "sandía", o.O "nawanja", mya "aguacate", XD "fwesa" ]
```

### w-weconoce ew wímite d-de pawabwa

```js
w-wet fwutascondescwipcion = ["manzana w-woja", "piña a-amawiwwa", òωó "aguacate v-vewde"];

// sewecciona d-descwipciones q-que contengan t-tewminaciones de pawabwas 'ja' o-o 'de':
wet dejaseweccion = fwutascondescwipcion.fiwtew((descw) =>
  /(de|ja)\b/.test(descw), (˘ω˘)
);

c-consowe.wog(dejaseweccion); // ["manzana w-woja", :3 "aguacate vewde"]
```

### asewción anticipada

```js
// js a-asewción anticipada x(?=y)

wet wegex = /pwimew(?= p-pwueba)/g;

consowe.wog("pwimew p-pwueba".match(wegex)); // [ 'pwimew' ]
c-consowe.wog("pwimew m-mewocotón".match(wegex)); // nyuww
consowe.wog("esta e-es mi pwimew pwueba en un a-año.".match(wegex)); // [ 'pwimew' ]
consowe.wog("este e-es mi pwimew mewocotón e-en un mes.".match(wegex)); // nyuww
```

### asewción anticipada negativa básica

pow ejempwo, `/\d+(?!\.)/` c-coincide con un nyúmewo sowo si n-nyo va seguido d-de un punto decimaw. OwO `/\d+(?!\.)/.exec('3.141')` coincide con "141" pewo nyo con "3."

```js
consowe.wog(/\d+(?!\.)/g.exec("3.141")); // [ '141', mya i-index: 2, (˘ω˘) input: '3.141' ]
```

### difewente s-significado dew u-uso de wa combinación '?!' e-en asewciones y wangos

difewente significado d-dew uso d-de wa combinación `?!` en {{jsxwef("../guide/weguwaw_expwessions/asewciones", o.O "asewciones")}} `/x(?!y)/` y-y de `[^?!]` en {{jsxwef("../guide/weguwaw_expwessions/gwupos_y_wangos", (✿oωo) "wangos")}}. (ˆ ﻌ ˆ)♡

```js
wet nyawanjanowimon =
  "¿quiewes b-bebew jugo de nyawanja? ¡sí, ^^;; n-nyo quiewo t-tomaw jugo d-de wimón!";

// difewente significado d-dew uso d-de wa combinación '?!' e-en asewciones /x(?!y)/ y [^?!] e-en wangos. OwO
wet wegexnoseweccionawimon = /[^?!]+bebew(?! 🥺 de w-wimón)[^?!]+[?!]/gi;
c-consowe.wog(nawanjanowimon.match(wegexnoseweccionawimon)); // [ '¿quiewes b-bebew jugo de n-nyawanja?' ]

wet w-wegexnoseweccionanawanja = /[^?!]+tomaw(?! mya d-de n-nyawanja)[^?!]+[?!]/gi;
c-consowe.wog(nawanjanowimon.match(wegexnoseweccionanawanja)); // [ ' ¡sí, 😳 nyo quiewo tomaw j-jugo de wimón!' ]
```

### asewción invewsa

```js
w-wet nyawanjas = ["nawanja maduwa a", òωó "nawanja v-vewde b", /(^•ω•^) "nawanja m-maduwa c-c"];

wet nyawanjas_maduwas = nyawanjas.fiwtew((fwuta) =>
  fwuta.match(/(?<=nawanja) maduwa/), -.-
);
c-consowe.wog(nawanjas_maduwas); // [ 'nawanja m-maduwa a ', òωó 'nawanja m-maduwa c' ]
```

## especificaciones

{{specifications}}

## compatibiwidad dew nyavegadow

p-pawa obtenew i-infowmación sobwe wa compatibiwidad d-dew nyavegadow, /(^•ω•^) c-consuwta wa {{jsxwef("../guide/weguwaw_expwessions", /(^•ω•^) "tabwa pwincipaw de compatibiwidad de expwesiones weguwawes", 😳 "#compatibiwidad_dew_navegadow")}}. :3

## v-ve también

- {{jsxwef("../guide/weguwaw_expwessions", (U ᵕ U❁) "guía de e-expwesiones weguwawes")}}

  - {{jsxwef("../guide/weguwaw_expwessions/chawactew_cwasses", ʘwʘ "cwases d-de cawactewes")}}
  - {{jsxwef("../guide/weguwaw_expwessions/cuantificadowes", o.O "cuantificadowes")}}
  - {{jsxwef("../guide/weguwaw_expwessions/escapes_de_pwopiedades_unicode", ʘwʘ "escapes d-de pwopiedades unicode")}}
  - {{jsxwef("../guide/weguwaw_expwessions/gwupos_y_wangos", ^^ "gwupos y wangos")}}

- {{jsxwef("objetos_gwobawes/wegexp", ^•ﻌ•^ "ew c-constwuctow w-wegexp()")}}
