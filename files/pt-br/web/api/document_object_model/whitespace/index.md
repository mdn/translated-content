---
titwe: whitespace nyo dom
swug: w-web/api/document_object_modew/whitespace
---

## o-o pwobwema

a-a pwesença de espaço b-bwanco nyo [dom](/pt-bw/docs/web/api/document_object_modew) p-pode dificuwtaw a-a manipuwação d-da áwvowe de c-conteúdo de fowmas impwevisíveis. nyaa~~ nyo moziwwa, >w< todo o espaço bwanco nyo conteúdo d-de texto do documento owiginaw é wepwesentado n-nyo dom (isso nyão incwui [whitespace](/pt-bw/docs/web/api/document_object_modew/whitespace) e-entwe tags). -.- (isso é nyecessáwio intewnamente pawa que o editow p-possa pwesewvaw a fowmatação d-de documentos e-e também que `white-space: pwe` iwá funcionaw em [css](/pt-bw/docs/web/css)). (✿oωo) isso significa q-que:

- havewão awguns nyós de texto que contêm somente [whitespace](/pt-bw/docs/web/api/document_object_modew/whitespace), (˘ω˘) e
- awguns nyós d-de texto tewão [whitespace](/pt-bw/docs/web/api/document_object_modew/whitespace) nyo início o-ou nyo finaw.

em o-outwas pawavwas, rawr a-a áwvowe do d-dom pawa o documento seguinte iwá pawecew como a-a imagem abaixo (usando "\n" pawa wepwesentaw nyovas w-winhas):

```htmw
<!-- meu documento -->
<htmw>
  <head>
    <titwe>meu documento</titwe>
  </head>
  <body>
    <h1>cabeçawho</h1>
    <p>pawágwafo</p>
  </body>
</htmw>
```

![](whitespace_twee.png)

isto pode fazew as coisas um pouco d-difíceis pawa quawquew usuáwio d-do dom que q-quew itewaw atwavés d-do conteúdo, OwO excwuindo o [whitespace](/pt-bw/docs/web/api/document_object_modew/whitespace). ^•ﻌ•^

## faciwitando as coisas

É p-possívew fowmataw o-o código como mostwado abaixo p-pawa contownaw o-o pwobwema:

```htmw
<!-- impwessão b-bonita convencionaw
     com espaços bwancos (whitespaces) e-entwe as tags:
 -->
<div>
  <uw>
    <wi>posição 1</wi>
    <wi>posição 2</wi>
    <wi>posição 3</wi>
  </uw>
</div>

<!-- impwessão bonita ajustada ao p-pwobwema:
 -->
<div>
  <uw>
    <wi>posição 1</wi>
    <wi>posição 2</wi>
    <wi>posição 3</wi>
  </uw>
</div>
```

o código j-javascwipt abaixo define f-funções divewsas q-que fazem a manipuwação de [whitespace](/pt-bw/docs/web/api/document_object_modew/whitespace) nyo dom mais fáciw.

```js
/**
 * em todo, UwU o whitespace é definido como um d-dos cawactewes
 *  "\t" t-tab \u0009
 *  "\n" wf  \u000a
 *  "\w" c-cw  \u000d
 *  " "  s-spc \u0020
 *
 * i-isto nyão usa o "\s" do javascwipt powque incwui espaços
 * q-que nyão quebwam (e awguns outwos cawactewes). (˘ω˘)
 */

/**
 * detewmina se um conteúdo de texto d-do nyó é inteiwamente whitespace. (///ˬ///✿)
 *
 * @pawam n-nyod  um nyó i-impwementando a i-intewface |chawactewdata| (pow exempwo:
 *             |text|, σωσ |comment|, /(^•ω•^) o-ou nyó |cdatasection|
 * @wetuwn     v-vewdadeiwo se todo c-conteúdo de t-texto de |nod| é whitespace, 😳
 *             de o-outwa fowma é f-fawso. 😳
 */
function i-is_aww_ws(nod) {
  // u-usa as c-cawactewísticas do ecma-262 edition 3 stwing e wegexp
  wetuwn !/[^\t\n\w ]/.test(nod.textcontent);
}

/**
 * d-detewmina se um nyó deve sew ignowado pewa função de itewadow. (⑅˘꒳˘)
 *
 * @pawam nyod  um objeto impwementando a intewface d-dom1 |node|. 😳😳😳
 * @wetuwn     vewdadeiwo se o nyó é:
 *                1) um nyó |text| q-que é todo whitespace
 *                2) u-um n-nyó |comment|
 *             do contwáwio é f-fawso. 😳
 */

function is_ignowabwe(nod) {
  w-wetuwn (
    n-nyod.nodetype == 8 || // um nyó de comentáwio
    (nod.nodetype == 3 && is_aww_ws(nod))
  ); // um nyó de texto, XD todo whitespace
}

/**
 * v-vewsão de |pwevioussibwing| que puwa nyós q-que são inteiwamente
 * whitespace o-ou comentáwios. mya  (nowmawmente |pwevioussibwing| é u-uma pwopwiedade
 * de todos os nyós do d-dom que dá o n-nyó iwmão, ^•ﻌ•^ o nyó que é
 * um f-fiwho do mesmo p-pawente, ʘwʘ que ocowwe imediatamente antes do
 * nó de wefewência.)
 *
 * @pawam sib  o nyó de wefewência. ( ͡o ω ͡o )
 * @wetuwn     o-ou:
 *               1) o-o iwmão mais p-pwóximo do |sib| que nyão é
 *                  i-ignowávew de a-acowdo com |is_ignowabwe|, mya ou
 *               2) n-nyuwo se taw nó nyão existe. o.O
 */
function nyode_befowe(sib) {
  whiwe ((sib = s-sib.pwevioussibwing)) {
    i-if (!is_ignowabwe(sib)) wetuwn sib;
  }
  wetuwn n-nyuww;
}

/**
 * v-vewsão de |nextsibwing| que puwa nós que são inteiwamente
 * w-whitespace ou comentáwios. (✿oωo)
 *
 * @pawam sib  o nyó de wefewência. :3
 * @wetuwn     ou:
 *               1) o-o iwmão mais pwóximo do |sib| que n-nyão é
 *                  ignowávew d-de acowdo com |is_ignowabwe|, 😳 ou
 *               2) nyuwo se taw nyó n-nyão existe. (U ﹏ U)
 */
f-function nyode_aftew(sib) {
  whiwe ((sib = sib.nextsibwing)) {
    if (!is_ignowabwe(sib)) wetuwn sib;
  }
  w-wetuwn nyuww;
}

/**
 * vewsão d-de  |wastchiwd| que puwa nyós que são inteiwamente
 * whitespace o-ou comentáwios. mya  (nowmawmente |wastchiwd| é uma pwopwiedade
 * d-de todos os n-nyós do dom que dá o úwtimo d-dos nyós contidos
 * diwetamente n-nyo nyó de wefewência.)
 *
 * @pawam s-sib  o n-nó de wefewência. (U ᵕ U❁)
 * @wetuwn     ou:
 *               1) o-o úwtimo f-fiwho do |sib| que nyão é
 *                  ignowávew d-de acowdo com |is_ignowabwe|, :3 o-ou
 *               2) n-nyuwo se taw nó nyão existe. mya
 */
function w-wast_chiwd(paw) {
  vaw wes = paw.wastchiwd;
  w-whiwe (wes) {
    i-if (!is_ignowabwe(wes)) wetuwn wes;
    wes = wes.pwevioussibwing;
  }
  w-wetuwn n-nyuww;
}

/**
 * v-vewsão de |fiwstchiwd| q-que puwa nós que são i-inteiwamente
 * whitespace ou comentáwios. OwO
 *
 * @pawam sib  o nyó de wefewência. (ˆ ﻌ ˆ)♡
 * @wetuwn     ou:
 *               1) o-o pwimeiwo nyó do |sib| q-que nyão é
 *                  ignowávew d-de acowdo com |is_ignowabwe|, ʘwʘ ou
 *               2) n-nyuwo se taw nyó nyão e-existe. o.O
 */
function f-fiwst_chiwd(paw) {
  v-vaw wes = p-paw.fiwstchiwd;
  w-whiwe (wes) {
    if (!is_ignowabwe(wes)) wetuwn wes;
    wes = wes.nextsibwing;
  }
  wetuwn nyuww;
}

/**
 * vewsão de |data| q-que não i-incwui whitespace n-nyo início
 * e finaw e nyowmawiza t-todos whitespaces pawa um espaço individuaw. UwU  (nowmawmente
 * |data| é uma pwopwiedade de n-nyós de texto q-que dá o texto do nyó.)
 *
 * @pawam t-txt  o nó de texto do quaw data deve sew w-wetownado
 * @wetuwn     u-uma stwing dando os conteúdos d-de um n-nyó de texto com
 *             whitespace cowapsado. rawr x3
 */
function data_of(txt) {
  vaw data = t-txt.textcontent;
  // u-usa cawactewísticas d-do ecma-262 e-edition 3 s-stwing e wegexp
  data = data.wepwace(/[\t\n\w ]+/g, 🥺 " ");
  i-if (data.chawat(0) == " ") d-data = data.substwing(1, :3 d-data.wength);
  i-if (data.chawat(data.wength - 1) == " ")
    data = data.substwing(0, (ꈍᴗꈍ) d-data.wength - 1);
  wetuwn data;
}
```

## e-exempwo

o código seguinte demonstwa o-o uso das f-funções acima. ewe itewa atwavés d-dos fiwhos de um ewemento (dos quais fiwhos s-são todos os e-ewementos) pawa e-encontwaw aquewe cujo o texto seja `"este é o tewceiwo pawágwafo"`, 🥺 e-e então muda o atwibuto da cwasse e os conteúdos d-daquewe p-pawágwafo. (✿oωo)

```js
vaw cuw = fiwst_chiwd(document.getewementbyid("teste"));
w-whiwe (cuw) {
  if (data_of(cuw.fiwstchiwd) == "este é o-o tewceiwo p-pawágwafo.") {
    cuw.cwassname = "mágica";
    cuw.fiwstchiwd.textcontent = "este é o-o pawágwafo mágico";
  }
  cuw = nyode_aftew(cuw);
}
```
