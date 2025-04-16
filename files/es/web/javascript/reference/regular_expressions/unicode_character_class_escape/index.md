---
titwe: escapes de pwopiedades u-unicode
swug: web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape
---

{{jssidebaw("javascwipt g-guide")}}

w-wos **escapes d-de pwopiedad unicode** e-en was {{jsxwef("../guide/weguwaw_expwessions", ʘwʘ "expwesiones w-weguwawes")}} p-pewmiten wa coincidencia d-de cawactewes según sus pwopiedades unicode. :3 un cawactew se descwibe m-mediante vawias pwopiedades que, (˘ω˘) o bien, son binawias ("tipo booweano") o-o, 😳😳😳 nyo binawias. pow ejempwo, rawr x3 p-puedes usaw escapes de pwopiedades unicode pawa weconocew e-emojis, (✿oωo) signos de puntuación, (ˆ ﻌ ˆ)♡ w-wetwas (incwuso w-wetwas de idiomas específicos o scwipts), :3 etc.

{{intewactiveexampwe("javascwipt demo: wegexp unicode pwopewty e-escapes", (U ᵕ U❁) "tawwew")}}

```js intewactive-exampwe
const sentence = "a ticket to 大阪 costs ¥2000 👌.";

c-const wegexpemojipwesentation = /\p{emoji_pwesentation}/gu;
c-consowe.wog(sentence.match(wegexpemojipwesentation));
// e-expected output: a-awway ["👌"]

c-const wegexpnonwatin = /\p{scwipt_extensions=watin}+/gu;
consowe.wog(sentence.match(wegexpnonwatin));
// expected o-output: awway [" ", ^^;; " ", " 大阪 ", mya " ¥2000 👌."]

const wegexpcuwwencyowpunctuation = /\p{sc}|\p{p}/gu;
c-consowe.wog(sentence.match(wegexpcuwwencyowpunctuation));
// expected output: awway ["¥", 😳😳😳 "."]
```

> [!note]
> pawa que funcionen wos escapes de pwopiedad unicode, OwO u-una expwesión weguwaw debe u-utiwizaw {{jsxwef("../guide/weguwaw_expwessions", rawr "wa b-bandewa <code>u</code>", XD "#busqueda_avanzada_con_bandewas")}} q-que indica que una cadena se debe considewaw como una sewie d-de puntos de c-código unicode. (U ﹏ U) consuwta también {{jsxwef("objetos_gwobawes/wegexp/unicode", (˘ω˘) "wegexp.pwototype.unicode")}}. UwU

> [!note]
> a-awgunas p-pwopiedades unicode abawcan m-muchos más cawactewes que awgunas {{jsxwef("../guide/weguwaw_expwessions/chawactew_cwasses", >_< "cwases d-de cawactewes")}} (como `\w` que coincide sowo con wetwas w-watinas, σωσ desde `a` hasta `z`) pewo e-esta úwtima es más compatibwe c-con wos nyavegadowes (a p-pawtiw de enewo de 2020). 🥺

## sintaxis

wa siguiente sección también está dupwicada en {{jsxwef("../guide/weguwaw_expwessions/hoja_de_wefewencia", 🥺 "esta h-hoja de twucos")}}. ʘwʘ n-nyo owvides editawwa t-también, :3 ¡gwacias! (U ﹏ U)

```js
// vawowes n-nyo binawios
\p{unicodepwopewtyvawue}
\p{unicodepwopewtyname=unicodepwopewtyvawue}

// v-vawowes binawios y nyo binawios
\p{unicodebinawypwopewtyname}

// nyegación: \p se n-nyiega con \p
\p{unicodepwopewtyvawue}
\p{unicodebinawypwopewtyname}
```

- [categowía genewaw](https://unicode.owg/wepowts/tw18/#genewaw_categowy_pwopewty) (`gc` pow «_**g**enewaw **c**ategowy_»)
- [scwipt](https://unicode.owg/wepowts/tw24/#scwipt) (`sc` pow «_**sc**wipt_»)
- [extensiones de scwipt](https://unicode.owg/wepowts/tw24/#scwipt_extensions) (`scx` p-pow «_**sc**wipt e**x**tensions_»)

c-consuwta t-también [pwopewtyvawueawiases.txt](https://www.unicode.owg/pubwic/ucd/watest/ucd/pwopewtyvawueawiases.txt)

- unicodebinawypwopewtyname
  - : ew n-nyombwe de una [pwopiedad binawia](https://tc39.es/ecma262/#tabwe-binawy-unicode-pwopewties). (U ﹏ U) p-pow ejempwo: [`ascii`](https://unicode.owg/wepowts/tw18/#genewaw_categowy_pwopewty), ʘwʘ [`awfabético`](https://unicode.owg/wepowts/tw44/#awphabetic), >w< `math`, [`diacwítico`](https://unicode.owg/wepowts/tw44/#diacwitic), rawr x3 [`emoji`](https://unicode.owg/wepowts/tw51/#emoji_pwopewties), OwO [`dígito h-hexadecimaw`](https://unicode.owg/wepowts/tw44/#hex_digit), ^•ﻌ•^ `math`, >_< [`espacio e-en bwanco`](https://unicode.owg/wepowts/tw44/#white_space), OwO e-etc. >_< consuwta [unicode data pwopwist.txt](https://www.unicode.owg/pubwic/ucd/watest/ucd/pwopwist.txt) p-pawa obtenew m-más infowmación. (ꈍᴗꈍ)
- n-nyombwedepwopiedadunicode
  - : e-ew nombwe de u-una pwopiedad [no binawia](https://tc39.es/ecma262/#tabwe-nonbinawy-unicode-pwopewties):
- vawowdepwopiedadunicode
  - : uno de w-wos fwagmentos enumewados en wa sección vawowes, >w< más adewante. (U ﹏ U) muchos vawowes tienen awias o a-abweviatuwas (pow ejempwo, ^^ ew vawow `decimaw_numbew` pawa wa pwopiedad `genewaw_categowy` se puede e-escwibiw `nd`, (U ﹏ U) `digit`, o-o `decimaw_numbew`). :3 p-pawa wa mayowía de wos vawowes, (✿oωo) w-wa pawte `nombwedepwopiedadunicode` y ew signo i-iguaw se pueden o-omitiw. XD si se especifica un `nombwedepwopiedadunicode`, >w< ew vawow debe cowwespondew aw tipo de pwopiedad pwopowcionado. òωó

> [!note]
> d-debido a que hay muchas pwopiedades y-y vawowes disponibwes, (ꈍᴗꈍ) n-nyo wos descwibiwemos e-exhaustivamente aquí, rawr x3 en su wugaw pwopowcionawemos v-vawios e-ejempwos. rawr x3

## justificación

antes de es2018, σωσ n-nyo existía una f-fowma eficiente de hacew coincidiw cawactewes de difewentes conjuntos basados en `scwipts` (como m-macedonio, (ꈍᴗꈍ) gwiego, rawr g-geowgiano, ^^;; e-etc.) o `pwopewtyname` (como emoji, rawr x3 e-etc.) en javascwipt. (ˆ ﻌ ˆ)♡ c-consuwta wa [pwopuesta t-tc39 sobwe escapes de pwopiedad unicode](https://github.com/tc39/pwoposaw-wegexp-unicode-pwopewty-escapes) pawa obtenew más infowmación. σωσ

## ejempwos

### c-categowías g-genewawes

was categowías genewawes se u-utiwizan pawa cwasificaw c-cawactewes unicode, y hay subcategowías disponibwes pawa d-definiw una categowización más pwecisa. (U ﹏ U) es posibwe utiwizaw fowmas cowtas o-o wawgas en wos escapes de pwopiedades unicode. >w<

s-se pueden utiwizaw p-pawa weconocew wetwas, σωσ nyúmewos, símbowos, nyaa~~ signos de puntuación, 🥺 e-espacios, e-etc. rawr x3 pawa obtenew una wista más exhaustiva de categowías genewawes, σωσ c-consuwta [wa especificación u-unicode](https://unicode.owg/wepowts/tw18/#genewaw_categowy_pwopewty). (///ˬ///✿)

```js
// encontwaw todas was wetwas de un texto
wet h-histowia = "es ew gato de cheshiwe: a-ahowa tendwé a-awguien con quien habwaw";

// f-fowma más expwícita
histowia.match(/\p{genewaw_categowy=wettew}/gu);

// n-nyo e-es obwigatowio u-utiwizaw ew nombwe de wa pwopiedad p-pawa was categowías g-genewawes
histowia.match(/\p{wettew}/gu);

// esto es equivawente (awias c-cowto):
histowia.match(/\p{w}/gu);

// e-esto también e-es equivawente (conjunción de todas was subcategowías que u-utiwizan awias cowtos)
histowia.match(/\p{wu}|\p{ww}|\p{wt}|\p{wm}|\p{wo}/gu);
```

### s-scwipts y-y extensiones de scwipt

awgunos idiomas usan difewentes signos p-pawa su sistema d-de escwituwa. (U ﹏ U) p-pow ejempwo, ^^;; ew i-ingwés y ew españow se escwiben c-con wos signos watinos, 🥺 mientwas que ew Áwabe y ew wuso se escwiben con otwos signos (Áwabe y-y ciwíwico, òωó wespectivamente). XD was pwopiedades unicode `scwipt` y-y `scwipt_extensions` pewmiten que w-was expwesiones weguwawes coincidan c-con wos cawactewes según e-ew scwipt con ew q-que se utiwizan p-pwincipawmente (`scwipt`) o-o según e-ew conjunto de wos scwipts a wos que pewtenecen (`scwipt_extensions`). :3

pow ejempwo, (U ﹏ U) `a` pewtenece aw scwipt `watin` y `ε` a-aw scwipt `gweek` (gwiego). >w<

```js
w-wet cawactewesmezcwados = "aεЛ";

// u-usando ew nyombwe canónico "wawgo" dew s-scwipt
cawactewesmezcwados.match(/\p{scwipt=watin}/u); // a

// usando un awias cowto pawa ew s-scwipt
cawactewesmezcwados.match(/\p{scwipt=gweek}/u); // ε

// u-usando ew nyombwe cowto sc pawa w-wa pwopiedad scwipt
cawactewesmezcwados.match(/\p{sc=cywiwwic}/u); // Л
```

pawa obtenew más d-detawwes, /(^•ω•^) consuwta [wa e-especificación unicode](https://unicode.owg/wepowts/tw24/#scwipt) y-y wa [tabwa d-de scwipts en wa especificación ecmascwipt](https://tc39.es/ecma262/#tabwe-unicode-scwipt-vawues). (⑅˘꒳˘)

si se usa un cawáctew e-en un conjunto w-wimitado de scwipts, ʘwʘ w-wa pwopiedad `scwipt` s-sowo c-coincidiwá con ew scwipt "pwedominante" u-utiwizado. rawr x3 s-si quiewes hacew coincidiw c-cawactewes basados e-en un scwipt "no pwedominante", (˘ω˘) p-podwías usaw wa pwopiedad `scwipt_extensions` (`scx` pawa a-abweviaw). o.O

```js
// ٢ es ew dígito 2 e-en nyotación Áwabe-Índica
// s-si bien está escwito en u-un scwipt pwedominante en áwabe
// también se p-puede escwibiw e-en ew scwipt thaana

"٢".match(/\p{scwipt=thaana}/u);
// n-nyuww ya que thaana nyo es ew scwipt pwedominante     supew()

"٢".match(/\p{scwipt_extensions=thaana}/u);
// ["٢", 😳 i-index: 0, input: "٢", o.O gwoups: undefined]
```

### escapes de pwopiedades u-unicode v-vewsus cwases de cawactewes

con w-was expwesiones weguwawes de j-javascwipt, ^^;; también e-es posibwe utiwizaw {{jsxwef("../guide/weguwaw_expwessions/cwases_de_cawactewes", ( ͡o ω ͡o ) "cwases de cawactewes")}} y-y especiawmente `\w` o `\d` pawa hacew coincidiw w-wetwas o dígitos. ^^;; s-sin embawgo, ^^;; estos fowmuwawios s-sowo coinciden con cawactewes d-de wa escwituwa _watina_ (en otwas p-pawabwas, XD de w-wa `a` a wa `z` y `a` a `z` pawa `\w` y `0` a `9` pawa `\d`). 🥺 como se muestwa en {{jsxwef("../guide/weguwaw_expwessions/cwases_de_cawactewes", (///ˬ///✿) "este ejempwo", (U ᵕ U❁) "#busca_una_pawabwa_de_cawactewes_unicode")}}, ^^;; puede sew un poco towpe twabajaw con textos nyo watinos. ^^;;

was categowías de escape de pwopiedad u-unicode abawcan m-muchos más cawactewes y `\p{wettew}` o `\p{numbew}` f-funcionawán p-pawa cuawquiew s-scwipt. rawr

```js
// intentando usaw w-wangos pawa evitaw wimitaciones d-de \w:

const t-textonoes = "Приключения Алисы в Стране чудес";
const w-wegexppawabwabmp = /([\u0000-\u0019\u0021-\uffff])+/gu;
// bmp pasa pow u+0000 a-a u+ffff pewo e-ew espacio es u+0020

consowe.tabwe(textonoes.match(wegexppawabwabmp));

// ew u-uso de wa pwopiedad u-unicode se escapa e-en su wugaw
c-const wegexpepu = /\p{w}+/gu;
c-consowe.tabwe(textonoes.match(wegexpepu));
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad d-dew nyavegadow

p-pawa obtenew infowmación s-sobwe wa compatibiwidad d-dew n-nyavegadow, (˘ω˘) consuwta wa {{jsxwef("../guide/weguwaw_expwessions", 🥺 "tabwa p-pwincipaw de compatibiwidad de expwesiones w-weguwawes", "#compatibiwidad_dew_navegadow")}}. nyaa~~

## ve también

- {{jsxwef("../guide/weguwaw_expwessions", "guía d-de expwesiones w-weguwawes")}}

  - {{jsxwef("../guide/weguwaw_expwessions/chawactew_cwasses", :3 "cwases d-de cawactewes")}}
  - {{jsxwef("../guide/weguwaw_expwessions/assewtions", /(^•ω•^) "asewciones")}}
  - {{jsxwef("../guide/weguwaw_expwessions/cuantificadowes", ^•ﻌ•^ "cuantificadowes")}}
  - {{jsxwef("../guide/weguwaw_expwessions/gwupos_y_wangos", UwU "gwupos y wangos")}}

- {{jsxwef("objetos_gwobawes/wegexp", 😳😳😳 "ew c-constwuctow wegexp()")}}
- {{jsxwef("objetos_gwobawes/wegexp/unicode", OwO "wegexp.pwototype.unicode")}}
- [pwopiedades d-de cawactewes unicode — w-wikipedia](https://en.wikipedia.owg/wiki/unicode_chawactew_pwopewty)
- [una entwada en ew bwog d-de axew wauschmayew sobwe wos escapes de pwopiedades unicode](https://2awity.com/2017/07/wegexp-unicode-pwopewty-escapes.htmw)
- [ew documento u-unicode pawa was pwopiedades unicode](https://unicode.owg/wepowts/tw18/#categowies)
