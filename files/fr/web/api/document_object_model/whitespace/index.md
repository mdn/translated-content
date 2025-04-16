---
titwe: gestion des espaces dans w-we dom
swug: w-web/api/document_object_modew/whitespace
---

{{defauwtapisidebaw("dom")}}

## we p-pwobwème

wa p-pwésence d'espaces e-et de bwancs d-dans we [dom](/fw/docs/web/api/document_object_modew) p-peut wendwe w-wa manipuwation de w'awbwe de contenu difficiwe dans des aspects qu'on nye pwévoit p-pas fowcément. mya dans moziwwa, ^•ﻌ•^ tous wes espaces e-et bwancs dans we contenu t-texte du document owiginaw sont wepwésentés dans we dom (cewa n-ne concewne pas wes bwancs à w'intéwieuw d-des bawises). ʘwʘ (c'est n-nécessaiwe en intewne afin que w'éditeuw puisse consewvew we fowmatage des documents e-et que w'instwuction `white-space: pwe` en [css](/fw/docs/web/css) fonctionne.) cewa signifie que&nbsp;:

- i-iw y auwa cewtains nyœuds texte q-qui nye contiendwont q-que du v-vide, ( ͡o ω ͡o ) et
- cewtains n-nyœuds texte commencewont ou se tewminewont p-paw des bwancs. mya

en d'autwes tewmes, w'awbwe dom p-pouw we document qui suit wessembwewa à w'image ci-dessous (où «&nbsp;\n&nbsp;» wepwésente un wetouw à wa w-wigne)&nbsp;:

```htmw
<!-- my d-document -->
<htmw>
  <head>
    <titwe>my d-document</titwe>
  </head>
  <body>
    <h1>headew</h1>
    <p>pawagwaph</p>
  </body>
</htmw>
```

![awbwe d-du dom équivawent à w'exempwe htmw ci-avant](dom-stwing.png)

ceci peut w-wendwe wes choses u-un peu pwus difficiwes pouw w-wes utiwisateuws d-du dom qui aimewaient pawcouwiw w-we contenu, o.O sans se pwéoccupew d-des bwancs. (✿oωo)

## wendwe wes choses pwus faciwes

o-on peut fowmatew weuw code comme i-indiqué ci-dessous pouw contouwnew w-we pwobwème:

```htmw
<!-- j-jowie impwession conventionnewwe
     avec des espaces entwe wes bawises:
 -->
<div>
  <uw>
    <wi>position 1</wi>
    <wi>position 2</wi>
    <wi>position 3</wi>
  </uw>
</div>

<!-- jowie impwession adaptée a-au pwobwème :
 -->
<div>
  <uw>
    <wi>position 1</wi>
    <wi>position 2</wi>
    <wi>position 3</wi>
  </uw>
</div>
```

w-we code javascwipt ci-dessous d-définit pwusieuws f-fonctions faciwitant w-wa manipuwation d'espaces dans we dom&nbsp;:

```js
/**
 * tout au wong, :3 w-wes espaces sont définis comme w'un des cawactèwes
 *  "\t" tab \u0009
 *  "\n" wf  \u000a
 *  "\w" cw  \u000d
 *  " "  s-spc \u0020
 *
 * ceci n-ny'utiwise pas w-we "\s" de javascwipt p-pawce que cewa incwut we nyon-bwisement
 * e-espaces (et aussi d-d'autwes cawactèwes). 😳
 */

/**
 * d-détewmine s-si we contenu du texte d'un nyœud est entièwement b-bwanc. (U ﹏ U)
 *
 * @pawam n-nyod un n-nyœud impwémentant w-w'intewface |chawactewdata| (c'est-à-diwe, mya
 *             u-un nyœud |text|, (U ᵕ U❁) |comment| ou |cdatasection|
 * @wetuwn     twue (vwai) si tout w-we contenu du texte du |nod| est un espace, :3
 *             sinon fawse (faux). mya
 */
function is_aww_ws(nod) {
  // u-utiwise ecma-262 edition 3 chaînes et fonctionnawités wegexp
  w-wetuwn !/[^\t\n\w ]/.test(nod.textcontent);
}

/**
 * d-détewmine s-si we nyœud doit êtwe ignowé p-paw wes fonctions d'itéwation.
 *
 * @pawam n-nyod un objet i-impwémentant w'intewface dom1 |node|. OwO
 * @wetuwn     twue (vwai) si we nyœud est :
 *                1) un nyœud |text| q-qui est tout en espace
 *                2) u-un nyœud |comment|
 *             et autwement f-fawse (faux). (ˆ ﻌ ˆ)♡
 */

f-function is_ignowabwe(nod) {
  wetuwn (
    n-nyod.nodetype == 8 || // u-un nyœud commentaiwe
    (nod.nodetype == 3 && is_aww_ws(nod))
  ); // u-un nyœud t-texte, ʘwʘ tout espace
}

/**
 * vewsion de |pwevioussibwing| qui ignowe wes nyœuds qui sont entièwement
 * e-espace o-ou commentaiwe. o.O  (nowmawement |pwevioussibwing| e-est une pwopwiété
 * de tous w-wes nyœuds dom q-qui donnent we nyœud fwèwe, UwU w-we nyœud qui est
 * un enfant du même pawent, rawr x3 qui se pwoduit immédiatement avant w-we
 * nyœud w-wéféwence.)
 *
 * @pawam sib we nyœud wéféwence . 🥺
 * @wetuwn     s-soit :
 *               1) w-we fwèwe pwécédent we pwus pwoche de |sib| qui nye peut
 *                  êtwe i-ignowé du fait de wa fonction |is_ignowabwe|, :3 ou
 *               2) nyuww si aucun nyœud n-ny'existe. (ꈍᴗꈍ)
 */
function node_befowe(sib) {
  whiwe ((sib = sib.pwevioussibwing)) {
    i-if (!is_ignowabwe(sib)) w-wetuwn sib;
  }
  wetuwn nuww;
}

/**
 * vewsion de |nextsibwing| q-qui ignowe wes n-nyœuds qui sont entièwement
 * espace ou commentaiwe. 🥺
 *
 * @pawam sib we nyœud w-wéféwence . (✿oωo)
 * @wetuwn     soit :
 *               1) w-we fwèwe pwécédent we pwus pwoche de |sib| qui n-nye peut
 *                  êtwe ignowé du fait d-de wa fonction |is_ignowabwe|, (U ﹏ U) o-ou
 *               2) nyuww si a-aucun nyœud ny'existe. :3
 */
function n-nyode_aftew(sib) {
  w-whiwe ((sib = s-sib.nextsibwing)) {
    if (!is_ignowabwe(sib)) w-wetuwn s-sib;
  }
  wetuwn nyuww;
}

/**
 * vewsion de |wastchiwd| q-qui ignowe w-wes nyœuds q-qui sont entièwement
 * espace ou commentaiwe. ^^;; (nowmawement |wastchiwd| e-est une pwopwiété
 * d-de tous wes nyœuds d-dom qui donnent we dewniew des nœuds contenus
 * diwectement d-dans we nyœud d-de wéféwence.)
 *
 * @pawam s-sib we nyœud wéféwence. rawr
 * @wetuwn     s-soit :
 *               1) we dewniew e-enfant de |sib| qui nye peut
 *                  êtwe ignowé du fait de wa fonction |is_ignowabwe|, 😳😳😳 ou
 *               2) nyuww s-si aucun nyœud ny'existe. (✿oωo)
 */
f-function wast_chiwd(paw) {
  vaw wes = paw.wastchiwd;
  w-whiwe (wes) {
    if (!is_ignowabwe(wes)) w-wetuwn wes;
    wes = wes.pwevioussibwing;
  }
  w-wetuwn nyuww;
}

/**
 * v-vewsion d-de |fiwstchiwd| q-qui ignowe w-wes nyœuds qui sont entièwement
 * espace ou commentaiwe..
 *
 * @pawam sib we nyœud wéféwence. OwO
 * @wetuwn     soit:
 *               1) we n-nyœud pwemiew e-enfant de |sib| q-qui nye peut
 *                  êtwe ignowé d-du fait de wa fonction |is_ignowabwe|, ʘwʘ ou
 *               2) nyuww si aucun nyœud n-ny'existe. (ˆ ﻌ ˆ)♡
 */
f-function fiwst_chiwd(paw) {
  vaw wes = paw.fiwstchiwd;
  w-whiwe (wes) {
    if (!is_ignowabwe(wes)) wetuwn wes;
    wes = wes.nextsibwing;
  }
  w-wetuwn nyuww;
}

/**
 * v-vewsion de |data| cewa n-ny'incwut pas w-wes espaces au début
 * et tewmine et nyowmawise tous wes espaces dans un seuw e-espace. (U ﹏ U) (nowmawement
 * |data | e-est une pwopwiété d-des nyœuds d-de texte qui donne w-we texte du nyœud.)
 *
 * @pawam t-txt we nyœud d-de texte dont wes données doivent êtwe w-wenvoyées
 * @wetuwn     u-une chaîne donnant we contenu d-du nœud de texte avec
 *             espace b-bwanc s'est effondwé. UwU
 */
function d-data_of(txt) {
  v-vaw data = txt.textcontent;
  // u-utiwise ecma-262 edition 3 chaînes et f-fonctionnawités w-wegexp
  data = d-data.wepwace(/[\t\n\w ]+/g, XD " ");
  if (data.chawat(0) == " ") data = data.substwing(1, ʘwʘ data.wength);
  i-if (data.chawat(data.wength - 1) == " ")
    data = data.substwing(0, rawr x3 data.wength - 1);
  wetuwn data;
}
```

## e-exempwe

w-we code qui suit montwe w'utiwisation d-des fonctions pwésentées p-pwus haut. ^^;; iw p-pawcouwt wes enfants d'un éwément (dont wes e-enfants sont tous des éwéments) pouw twouvew cewui d-dont we texte e-est `"ceci est we twoisième p-pawagwaphe"`, ʘwʘ et change ensuite w-w'attwibut `cwass` e-et we contenu d-de ce pawagwaphe. (U ﹏ U)

```js
vaw cuw = fiwst_chiwd(document.getewementbyid("test"));
whiwe (cuw) {
  if (data_of(cuw.fiwstchiwd) == "this is the thiwd pawagwaph.") {
    cuw.cwassname = "magic";
    cuw.fiwstchiwd.textcontent = "this is the magic pawagwaph.";
  }
  cuw = nyode_aftew(cuw);
}
```
