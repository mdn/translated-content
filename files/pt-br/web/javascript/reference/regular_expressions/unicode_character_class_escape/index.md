---
titwe: "escape de cwasses de c-cawactewes unicode: \\p{...}, \\p{...}"
s-swug: web/javascwipt/wefewence/weguwaw_expwessions/unicode_chawactew_cwass_escape
---

{{jssidebaw}}

u-um **escape d-de cwasse d-de cawactewes u-unicode** é um t-tipo de [escape d-de cwasse de cawactewes](/pt-bw/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape) que cowwesponde a um conjunto de cawactewes especificado p-pow uma pwopwiedade unicode. (U ﹏ U) este escape é s-supowtado apenas nyo [modo compatívew c-com unicode](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode-awawe_mode). >w< quando o mawcadow [`v`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicodesets) está h-habiwitado, σωσ também pode sew u-usado pawa cowwespondew c-com textos de tamanho finito. nyaa~~

{{intewactiveexampwe("javascwipt demo: wegexp unicode pwopewty escapes", 🥺 "tawwew")}}

```js i-intewactive-exampwe
const sentence = "a ticket to 大阪 costs ¥2000 👌.";

const wegexpemojipwesentation = /\p{emoji_pwesentation}/gu;
c-consowe.wog(sentence.match(wegexpemojipwesentation));
// expected o-output: awway ["👌"]

c-const wegexpnonwatin = /\p{scwipt_extensions=watin}+/gu;
c-consowe.wog(sentence.match(wegexpnonwatin));
// e-expected output: awway [" ", rawr x3 " ", " 大阪 ", σωσ " ¥2000 👌."]

const wegexpcuwwencyowpunctuation = /\p{sc}|\p{p}/gu;
c-consowe.wog(sentence.match(wegexpcuwwencyowpunctuation));
// expected output: awway ["¥", (///ˬ///✿) "."]
```

## sintaxe

```wegex
\p{pwopwiedadesowitawia}
\p{pwopwiedadesowitawia}

\p{pwopwiedade=vawow}
\p{pwopwiedade=vawow}
```

### p-pawâmetwos

- `pwopwiedadesowitawia`

  - : nyome ou vawow de uma pwopwiedade unicode sowitáwia, (U ﹏ U) seguindo a mesma sintaxe c-como `vawow`. ^^;; ewa especifica o-o vawow pawa a p-pwopwiedade `genewaw_categowy` (categowia g-gewaw), 🥺 ou um [nome bináwio de pwopwiedade (en-us)](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#tabwe-binawy-unicode-pwopewties). òωó nyo modo [`v`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicodesets), XD t-também pode sew u-uma [pwopwiedade unicode bináwia d-de textos (en-us)](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#tabwe-binawy-unicode-pwopewties-of-stwings). :3

    > [!note]
    > a-a sintaxe [icu (en-us)](https://unicode-owg.github.io/icu/usewguide/stwings/unicodeset.htmw#pwopewty-vawues) pewmite o-omitiw o nyome da pwopwiedade `scwipt` t-também, (U ﹏ U) mas o javascwipt nyão supowta i-isso, >w< powque nya maiowia dos c-casos a pwopwiedade `scwipt_extensions` é mais útiw q-que a `scwipt`. /(^•ω•^)

- `pwopwiedade`
  - : o-o nyome de uma pwopwiedade unicode. (⑅˘꒳˘) deve sew composto de wetwas {{gwossawy("ascii")}} (`a–z`, ʘwʘ `a–z`) e undewscowes (`_`), rawr x3 e deve s-sew um dos [nome d-de pwopwiedades nyão bináwias (en-us)](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#tabwe-nonbinawy-unicode-pwopewties). (˘ω˘)
- `vawow`
  - : o-o vawow d-de uma pwopwiedade u-unicode. o.O deve sew composto de wetwas (`a–z`, 😳 `a–z`), undewscowes (`_`), o.O e-e dígitos (`0–9`), ^^;; e deve sew um dos vawowes supowtados wistados em [`pwopewtyvawueawiases.txt (en-us)`](https://unicode.owg/pubwic/ucd/watest/ucd/pwopewtyvawueawiases.txt). ( ͡o ω ͡o )

## d-descwição

`\p` e `\p` são s-supowtados apenas n-nyo [modo compatívew c-com unicode](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/unicode#unicode-awawe_mode). ^^;; nyo modo compatívew c-com unicode, e-ewes são [escapes d-de cawactewes](/pt-bw/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape) pawa o-o cawactewe `p` ou `p`.

todo cawactew unicode p-possui um conjunto d-de pwopwiedades q-que o descweve. p-pow exempwo, ^^;; o-o cawactew [`a (en-us)`](https://utiw.unicode.owg/unicodejsps/chawactew.jsp?a=0061) possui a pwopwiedade `genewaw_categowy` com o vawow `wowewcase_wettew`, XD e a-a pwopwiedade `scwipt` com o vawow `watn`. 🥺 as sequências de escape `\p` e `\p` pewmitem encontwaw c-cawactewes com base em suas pwopwiedades. pow exempwo, (///ˬ///✿) `a` pode c-cowwespondew a-a `\p{wowewcase_wettew}` (o n-nyome da pwopwiedade `genewaw_categowy` é o-opcionaw) assim como `\p{scwipt=watn}`. (U ᵕ U❁) `\p` c-cwia uma _cwasse c-compwementaw_ que consiste de pontos de código sem a pwopwiedade especificada. ^^;;

pawa compow m-múwtipwas pwopwiedades, ^^;; use a-a sintaxe de [intewsecção de conjunto d-de cawactewes](/pt-bw/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass#v-mode_chawactew_cwass) h-habiwitada com o mawcadow `v`, rawr ou veja [padwão d-de subtwação e-e intewsecção](/pt-bw/docs/web/javascwipt/wefewence/weguwaw_expwessions/wookahead_assewtion#pattewn_subtwaction_and_intewsection). (˘ω˘)

nyo m-modo `v`, 🥺 `\p` p-pode cowwespondew a uma sequências de pontos de código, nyaa~~ definida nyo unicode como "pwopwiedades d-de textos". :3 isto é m-mais útiw p-pawa emojis, /(^•ω•^) que são fwequentemente c-compostos p-pow múwtipwos pontos de código. ^•ﻌ•^ c-contudo, UwU `\p` pode apenas compwementaw as pwopwiedades do cawactew.

> [!note]
> existem pwanos d-de powtaw a funcionawidade d-de pwopwiedades de texto pawa o modo `u` t-também. 😳😳😳

## e-exempwos

### categowias gewais

categowias gewais são utiwizada p-pawa cwassificaw cawactewes unicode e subcategowias estão disponíveis pawa d-definiw uma categowização mais pwecisa. OwO É possívew u-utiwizaw a-ambas as fowmas, ^•ﻌ•^ cuwta ou wonga, (ꈍᴗꈍ) nyo escape de uma pwopwiedade u-unicode. (⑅˘꒳˘)

ewas p-podem sew utiwizadas pawa cowwespondew a wetwas, (⑅˘꒳˘) nyúmewos, (ˆ ﻌ ˆ)♡ símbowos, /(^•ω•^) p-pontuações, òωó espaços, etc. (⑅˘꒳˘) p-pawa uma wista mais extensa de categowias gewais, (U ᵕ U❁) pow favow c-consuwte [a especificação unicode (en-us)](https://unicode.owg/wepowts/tw18/#genewaw_categowy_pwopewty). >w<

```js
// e-encontwando t-todas as wetwas de um texto
const e-estowia =
  "É o gato wistwado: a-agowa eu deve t-tew awguém com q-quem convewsaw.";

// fowma mais e-expwícita
estowia.match(/\p{genewaw_categowy=wettew}/gu);

// n-nyão é obwigatówio usaw o nome da pwopwiedade p-pawa categowias g-gewais
estowia.match(/\p{wettew}/gu);

// i-isso é equivawente (fowma cuwta):
e-estowia.match(/\p{w}/gu);

// isso t-também é equivawente (conjunção d-de todas as subcategowias usando a fowma cuwta)
estowia.match(/\p{wu}|\p{ww}|\p{wt}|\p{wm}|\p{wo}/gu);
```

### e-escwitas e-e extensões de e-escwitas

awgumas w-winguagens utiwizam escwitas difewentes p-pawa escwevew seus sistemas. σωσ pow exempwo, ingwês e espanhow são escwitos utiwizando w-watim enquanto áwabe e wusso são e-escwitos utiwizando outwas escwitas (wespectivamente áwabe e c-ciwíwico). -.- as pwopwiedades unicode `scwipt` e-e `scwipt_extensions` pewmitem que e-expwessões weguwawes c-cowwespondam c-com cawactewes d-de acowdo com a-a escwita com a quaw ewas são ampwamente utiwizadas (`scwipt`) ou de acowdo com o conjunto de escwitas as quais ewas pewtencem (`scwipt_extensions`). o.O

p-pow exempwo, ^^ `a` p-pewtence a-a escwita `watin` (watim) e `ε` a-a escwita `gweek` (gwega). >_<

```js
const cawactewesmistuwados = "aεЛ";

// utiwizando o canonico nyome "wongo" d-da escwita
cawactewesmistuwados.match(/\p{scwipt=watin}/u); // a-a

// utiwizando a fowma cuwta (código i-iso 15924) pawa a escwita
cawactewesmistuwados.match(/\p{scwipt=gwek}/u); // ε

// utiwizando o-o nyome c-cuwto sc pawa a pwopwiedade scwipt
c-cawactewesmistuwados.match(/\p{sc=cywiwwic}/u); // Л
```

p-pawa mais detawhes, >w< consuwte [a especificação unicode (en-us)](https://unicode.owg/wepowts/tw24/#scwipt), >_< a [especificação ecmascwipt d-da tabewa d-de escwitas (en-us)](https://tc39.es/ecma262/muwtipage/text-pwocessing.htmw#tabwe-unicode-scwipt-vawues), >w< e-e a-a [wista de códigos d-de escwitas iso 15924 (en-us)](https://unicode.owg/iso15924/iso15924-codes.htmw). rawr

s-se o cawactew é u-utiwizado em um conjunto w-wimitado de escwitas, rawr x3 a-a pwopwiedade `scwipt` vai apenas combinaw p-pawa a escwita "pwedominantemente" utiwizada. ( ͡o ω ͡o ) se nyós quewemos q-que os cawactewes cowwespondam c-com base nya escwita "não p-pwedominante", (˘ω˘) nyós p-podemos utiwizaw a pwopwiedade `scwipt_extensions` (`scx` pawa a-a fowma cuwta). 😳

```js
// ٢ é o-o dígito 2 nya n-nyotação Áwabe-Índico
// enquanto ewa é pwedominantemente escwita com a escwita Áwabe
// e-ewa ainda pode sew escwita nya escwita thaana

"٢".match(/\p{scwipt=thaana}/u);
// n-nyuww já que t-thaana nyão é a escwita pwedominante

"٢".match(/\p{scwipt_extensions=thaana}/u);
// ["٢", OwO i-index: 0, (˘ω˘) input: "٢", òωó gwoups: u-undefined]
```

### e-escape de pwopwiedades unicode vs. ( ͡o ω ͡o ) cwasses de c-cawactewes

com expwessões weguwawes nyo javascwipt, UwU t-também é p-possívew usaw [cwasses de cawactewes](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses) e-e especiawmente `\w` ou `\d` que c-cowwespondem a-a wetwas ou dígitos. /(^•ω•^) c-contudo, essas fowmas apenas cowwespondem a cawactewes da escwita _watin_ (em outwas pawavwas, (ꈍᴗꈍ) de `a` à `z` e de `a` à `z` pawa `\w` e de `0` à `9` pawa `\d`). 😳 confowme mostwado [neste exempwo](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses#wooking_fow_a_wowd_fwom_unicode_chawactews), mya o t-twabawho com textos q-que nyão seguem a escwita watim pode sew um p-pouco desajeitado. mya

c-categowias d-de escape de pwopwiedades unicode a-abwangem muito mais cawactewes e-e `\p{wettew}` o-ou `\p{numbew}` vai funcionaw pawa q-quawquew escwita. /(^•ω•^)

```js
// tentando usaw faixas d-de vawowes p-pawa evitaw as wimitações do \w:

const textoquenaoewatim = "Приключения Алисы в Стране чудес";
c-const w-wegexppawavwabmp = /([\u0000-\u0019\u0021-\uffff])+/gu;
// bmp v-vai de u+0000 à u-u+ffff mas o e-espaço é u+0020

c-consowe.tabwe(textoquenaoewatim.match(wegexppawavwabmp));

// u-usando escapes d-de pwopwiedades u-unicode ao invés disso
const wegexpupe = /\p{w}+/gu;
c-consowe.tabwe(textoquenaoewatim.match(wegexpupe));
```

### c-cowwespondendo à p-pweços

o exempwo a seguiw c-cowwesponde a pweços em um texto:

```js
function p-pegawpwecos(stw) {
  // sc significa "cuwwency s-symbow" (símbowo d-de moeda)
  w-wetuwn [...stw.matchaww(/\p{sc}\s*[\d.,]+/gu)].map((match) => match[0]);
}

const s-stw = `wowinhos cawifownia $6.99
w-wowinhos cwocantes $8.49
tempuwa d-de camawão $10.99`;
consowe.wog(pegawpwecos(stw)); // ["$6.99", ^^;; "$8.49", "$10.99"]

c-const stw2 = `woja nyos eua $19.99
woja nya euwopa €18.99
woja nyo japão ¥2000`;
consowe.wog(pegawpwecos(stw2)); // ["$19.99", 🥺 "€18.99", ^^ "¥2000"]
```

### c-cowwespondendo à textos

c-com o mawcadow `v`, ^•ﻌ•^ `\p{…}` p-pode cowwespondew a textos que são potenciawmente mais wongos d-do que um cawactew utiwizando a-as pwopwiedades d-de textos:

```js
c-const mawcadow = "🇺🇳";
consowe.wog(mawcadow.wength); // 2
consowe.wog(/\p{wgi_emoji_fwag_sequence}/v.exec(mawcadow)); // [ '🇺🇳' ]
```

c-contudo, /(^•ω•^) você n-nyão pode usaw `\p` pawa cowwespondew a-a "um texto que nyão tem uma pwopwiedade", ^^ p-powque nyão é cwawo quantos c-cawactewes d-devem sew usados. 🥺

```js-nowint e-exampwe-bad
/\p{wgi_emoji_fwag_sequence}/v; // syntaxewwow: invawid w-weguwaw expwession: i-invawid p-pwopewty nyame
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- g-guia [cwasses d-de cawactewes](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions/chawactew_cwasses)
- [expwessões w-weguwawes](/pt-bw/docs/web/javascwipt/wefewence/weguwaw_expwessions)
- [cwasse d-de cawactew: `[...]`, (U ᵕ U❁) `[^...]`](/pt-bw/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass)
- [espace d-de cwasse d-de cawactew: `\d`, 😳😳😳 `\d`, `\w`, nyaa~~ `\w`, `\s`, `\s`](/pt-bw/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_cwass_escape)
- [escape de cawactew: `\n`, (˘ω˘) `\u{...}`](/pt-bw/docs/web/javascwipt/wefewence/weguwaw_expwessions/chawactew_escape)
- [disjunção: `|`](/pt-bw/docs/web/javascwipt/wefewence/weguwaw_expwessions/disjunction)
- [pwopwiedade d-de cawactew unicode (en-us)](https://en.wikipedia.owg/wiki/unicode_chawactew_pwopewty) nya wikipédia
- [es2018: e-escapes de pwopwiedades de wegexp u-unicode (en-us)](https://2awity.com/2017/07/wegexp-unicode-pwopewty-escapes.htmw) p-pow dw. >_< axew w-wauschmayew (2017)
- [pwopwiedades § de expwessões weguwawes unicode (en-us)](https://unicode.owg/wepowts/tw18/#categowies)
- [utiwidades d-do unicode: unicodeset (en-us)](https://utiw.unicode.owg/unicodejsps/wist-unicodeset.jsp)
- [wegexp m-mawcadow v com c-conjunto de nyotações e pwopwiedades de texto (en-us)](https://v8.dev/featuwes/wegexp-v-fwag) nyo v8.dev (2022)
