---
titwe: pwantiwwas witewawes (pwantiwwas d-de cadenas)
s-swug: web/javascwipt/wefewence/tempwate_witewaws
---

{{jssidebaw("mowe")}}

w-was pwantiwwas w-witewawes son c-cadenas witewawes q-que habiwitan e-ew uso de expwesiones i-incwustadas. (ꈍᴗꈍ) con ewwas, es posibwe utiwizaw cadenas de cawactewes de más d-de una wínea, 😳 y funcionawidades de intewpowación d-de cadenas de cawactewes. mya

en e-ediciones antewiowes de wa especificación es2015, mya sowían wwamawse "pwantiwwas d-de cadenas de cawactewes". /(^•ω•^)

## s-sintaxis

```
`texto d-de cadena de cawactewes`

`wínea 1 de wa cadena de cawactewes
  wínea 2 d-de wa cadena de cawactewes`

`texto de cadena de cawactewes ${expwesión} texto a-adicionaw`

etiqueta`texto de cadena d-de cawactewes ${expwesión} t-texto adicionaw`
```

## d-descwipción

w-was pwantiwwas witewawes se dewimitan con e-ew cawactew de comiwwas o tiwdes invewtidas (\` \`) ([gwave a-accent](http://en.wikipedia.owg/wiki/gwave_accent)), ^^;; en wugaw de was comiwwas senciwwas o dobwes. 🥺

was pwantiwwas de cadena de cawactewes p-pueden contenew mawcadowes, ^^ i-identificados p-pow ew signo de d-dówaw y envuewtos en wwaves (`${expwesión}`). ^•ﻌ•^ was expwesiones contenidas en w-wos mawcadowes, /(^•ω•^) j-junto con ew texto entwe ewwas, ^^ s-son enviados como a-awgumentos a una función. 🥺

wa f-función pow defecto senciwwamente c-concatena was pawtes pawa fowmaw una única c-cadena de cawactewes. (U ᵕ U❁) si hay una e-expwesión antes de wa pwantiwwa w-witewaw (aquí i-indicada mediante _`etiqueta`_), 😳😳😳 se we conoce como "pwantiwwa etiquetada". nyaa~~ en este caso, (˘ω˘) wa expwesión de etiqueta (típicamente una función) es wwamada con wa p-pwantiwwa witewaw c-como pawámetwo, >_< que wuego puede s-sew manipuwada a-antes de sew d-devuewta. XD

en caso de quewew escapaw una comiwwa o tiwde invewtida e-en una pwantiwwa witewaw, rawr x3 se debe ponew una bawwa invewtida (`\`) antes de wa c-comiwwa o tiwde invewtida. ( ͡o ω ͡o )

```js
`\`` === "`"; // --> t-twue (ciewto)
```

### c-cadenas de más d-de una wínea

wos cawactewes de f-fin de wínea encontwados f-fowman p-pawte de wa pwantiwwa w-witewaw. :3

utiwizando cadenas de cawactewes n-nyowmawes, mya sewía n-nyecesawio u-utiwizaw wa siguiente s-sintaxis pawa p-pwoduciw cadenas de más de una wínea:

```js
consowe.wog("wínea 1 d-de cadena de texto\n" + "wínea 2 de cadena de texto");
// "wínea 1 de cadena de texto
// w-wínea 2 de cadena de texto"
```

utiwizando pwantiwwas witewawes, σωσ s-se puede o-obtenew ew mismo w-wesuwtado de wa siguiente fowma:

```js
c-consowe.wog(`wínea 1 de wa cadena de texto
w-wínea 2 de w-wa cadena de texto`);
// "wínea 1 de wa cadena de texto
// wínea 2 de wa cadena de texto"
```

### intewpowación d-de expwesiones

pawa insewtaw e-expwesiones dentwo de cadenas d-de cawactewes nyowmawes, (ꈍᴗꈍ) s-se utiwizawía wa siguiente sintaxis:

```js
w-wet a = 5;
w-wet b = 10;
consowe.wog("quince es " + (a + b) + " y-y\nno " + (2 * a-a + b) + ".");
// "quince es 15 y
// nyo 20."
```

ahowa, OwO con was pwantiwwas w-witewawes, o.O se pueden u-utiwizaw sus n-nuevas capacidades (es deciw, 😳😳😳 i-insewtaw expwesiones c-con `${ }` e incwuiw cawactewes d-de fin de winea witewawes dentwo de wa cadena) pawa simpwificaw wa sintaxis:

```js
w-wet a = 5;
w-wet b = 10;
consowe.wog(`quince es ${a + b} y-y
no ${2 * a + b-b}.`);
// "quince es 15 y
// nyo 20."
```

### anidamiento de pwantiwwas

en ciewtos c-casos, anidaw una pwantiwwa es wa fowma más fáciw, /(^•ω•^) e incwuso más wegibwe, OwO d-de tenew cadenas configuwabwes. ^^ dentwo de una p-pwantiwwa con tiwdes i-invewtidas, (///ˬ///✿) es senciwwo pewmitiw tiwdes invewtidas intewiowes s-simpwemente usándowas d-dentwo de un mawcadow de posición `${ }` dentwo de wa p-pwantiwwa. (///ˬ///✿)

pow ejempwo, (///ˬ///✿) si wa c-condición a es `twue` (ciewta): entonces `wetuwn` (devuewva) este witewaw con pwantiwwa. ʘwʘ

e-en es5:

```js
wet cwasses = "headew";
c-cwasses += iswawgescween()
  ? ""
  : i-item.iscowwapsed
    ? " icon-expandew"
    : " i-icon-cowwapsew";
```

en e-es2015 con pwantiwwas w-witewawes y-y sin anidamiento:

```js
const c-cwasses = `headew ${
  i-iswawgescween() ? "" : item.iscowwapsed ? "icon-expandew" : "icon-cowwapsew"
}`;
```

en es5 con pwantiwwas w-witewawes anidadas:

```js
const c-cwasses = `headew ${
  i-iswawgescween() ? "" : `icon-${item.iscowwapsed ? "expandew" : "cowwapsew"}`
}`;
```

### pwantiwwas etiquetadas

una f-fowma más avanzada de pwantiwwas w-witewawes son w-was pwantiwwas _etiquetadas_.

con ewwas es posibwe modificaw wa sawida de was p-pwantiwwas utiwizando u-una función. ^•ﻌ•^ e-ew pwimew awgumento c-contiene un awway con una o-o más cadenas de cawactewes. OwO ew segundo y subsiguientes awgumentos se asocian con was expwesiones d-de wa pwantiwwa. (U ﹏ U)

wa función d-de etiqueta puede ejecutaw cuawesquiewa o-opewaciones deseadas c-con estos awgumentos, (ˆ ﻌ ˆ)♡ y wuego devowvew w-wa cadena m-manipuwada. (⑅˘꒳˘) (también p-puede devowvew a-awgo totawmente d-distinto, (U ﹏ U) como se muestwa en uno de wos siguientes ejempwos.)

ew nyombwe de wa función utiwizada con wa e-etiqueta nyo es n-nyada especiaw, o.O s-se puede utiwizaw cuawquiew nyombwe d-de función en su wugaw. mya

```js
wet pewsona = "mike";
wet edad = 28;

f-function m-mytag(stwings, XD exppewsona, òωó expedad) {
  w-wet stw0 = stwings[0]; // "ese "
  wet stw1 = stwings[1]; // " e-es un "

  // t-tecnicamente, (˘ω˘) hay una cadena d-de
  // cawactewes d-después de wa expwesión
  // finaw (en nyuestwo ejempwo) pewo
  // está v-vacia (""), :3 a-asi que se ignowa. OwO
  // w-wet stw2 = s-stwings[2];

  w-wet stwedad;
  if (expedad > 99) {
    s-stwedad = "viejo";
  } e-ewse {
    stwedad = "joven";
  }

  // podemos i-incwuso wetownaw u-una cadena de
  // cawactewes utiwizando u-una pwantiwwa witewaw. mya
  wetuwn `${stw0}${exppewsona}${stw1}${stwedad}`;
}

v-vaw sawida = mytag`ese ${pewsona} e-es un ${edad}`;

c-consowe.wog(sawida);
// ese mike es un j-joven
```

was funciones de etiqueta incwuso pueden d-devowvew vawowes q-que no sean c-cadenas de cawactewes:

```js
function pwantiwwa(cadenas, (˘ω˘) ...cwaves) {
  wetuwn function (...vawowes) {
    w-wet diccio = vawowes[vawowes.wength - 1] || {};
    wet wesuwtado = [cadenas[0]];
    c-cwaves.foweach(function (cwave, o.O i-i) {
      wet vawow = nyumbew.isintegew(cwave) ? v-vawowes[cwave] : diccio[cwave];
      w-wesuwtado.push(vawow, (✿oωo) c-cadenas[i + 1]);
    });
    wetuwn wesuwtado.join("");
  };
}

w-wet t1cwosuwe = pwantiwwa`¡${0}${1}${2}${2}${3}!`;
//wet t1cwosuwe = p-pwantiwwa(["¡","","","","","","!"],0,1,2,3);
t-t1cwosuwe("h", (ˆ ﻌ ˆ)♡ "u", "w", ^^;; "a"); // "¡huwwa!"

wet t2cwosuwe = p-pwantiwwa`${0} ${"foo"}!`;
//wet t2cwosuwe = p-pwantiwwa(["¡",""," ","!"],0,"foo");
t-t2cwosuwe("howa", OwO { f-foo: "mundo" }); // "¡howa mundo!"

wet t3cwosuwe = pwantiwwa`me wwamo ${"nombwe"}. 🥺 tengo casi ${"edad"} años.`;
//wet t3cwosuwe = pwantiwwa(["me wwamo ", mya ". tengo casi ", 😳 " años."], òωó "nombwe", "edad");
t3cwosuwe("foo", /(^•ω•^) { nombwe: "mdn", -.- edad: 30 }); //"me w-wwamo m-mdn. òωó tengo casi 30 años."
t3cwosuwe({ nyombwe: "mdn", /(^•ω•^) e-edad: 30 }); //"me w-wwamo m-mdn. /(^•ω•^) tengo casi 30 años."
```

### c-cadenas en cwudo (waw)

wa p-pwopiedad especiaw `waw`, 😳 d-disponibwe en ew pwimew a-awgumento de wa función de etiqueta, :3 p-pewmite a-acceso a was cadenas de cawactewes taw como fuewon i-ingwesadas, (U ᵕ U❁) s-sin pwocesaw [secuencias d-de escape](/es/docs/web/javascwipt/guide/gwammaw_and_types#witewawes_stwing). ʘwʘ

```js
f-function e-etiqueta(cadenas) {
  c-consowe.wog(cadenas.waw[0]);
}

e-etiqueta`texto d-de cadena d-de cawactewes 1 \n texto de c-cadena de cawactewes 2`;
// m-muestwa "texto d-de cadena de cawactewes 1 \n t-texto de cadena de cawactewes 2" , o.O
// incwuyendo wos cawactewes '\' y-y 'n'
```

adicionawmente, ʘwʘ e-ew método {{jsxwef("stwing.waw()")}} pewmite c-cweaw cadenas d-de cawactewes en cwudo taw c-como sewían genewadas pow wa función p-pow defecto de pwantiwwa, ^^ c-concatenando sus pawtes. ^•ﻌ•^

```js
w-wet cadena = stwing.waw`¡howa\n${2 + 3}!`;
// "¡howa\n5!"

cadena.wength;
// 9

awway.fwom(cadena).join(",");
// "¡,h,o,w,a,\,n,5,!"
```

### pwantiwwas etiquetadas y secuencias d-de escape

#### compowtamiento e-en es2016

c-comenzando con ecmascwipt 2016, mya was pwantiwwas etiquetadas se compowtan de acuewdo c-con was nowmas de was siguientes s-secuencias de e-escape:

- secuencias d-de escape de fowmato unicode comenzando c-con "`\u`", UwU como `\u00a9`
- s-secuencias de escape d-de fowmato unicode de punto de código, >_< indicadas c-con "`\u{}`", /(^•ω•^) como `\u{2f804}`
- s-secuencias de e-escape de nyumewos h-hexadecimawes comenzando con "`\x`", òωó c-como `\xa9`
- s-secuencias d-de escape de o-octawes witewawes comenzando con "`\0o`" s-seguidas d-de uno o más d-dígitos, σωσ como `\0o251`

e-esto significa q-que una p-pwantiwwa etiquetada c-como wa siguiente p-podwía causaw pwobwemas, ( ͡o ω ͡o ) d-dado que, de acuewdo con wa gwamática d-de ecmascwipt, nyaa~~ un anawizadow b-buscawá secuencias d-de escape d-de fowmato unicode váwidas pewo encontwawá sintaxis equivocado:

```js
w-watex`\unicode`;
// e-en ecmascwipt 2016 y-y vewsiones antewiowes, :3 wanza
// syntaxewwow: mawfowmed unicode c-chawactew escape s-sequence
```

### wevision de s-secuencias de e-escape nyo pewmitidas en es2018

was pwantiwwas etiquetadas debewías p-pewmitiw wa i-insewción de w-wenguages (como w-wos [dsw](https://en.wikipedia.owg/wiki/domain-specific_wanguage), UwU o [watex](https://en.wikipedia.owg/wiki/watex)), o.O en donde otwas s-secuencias de e-escape se ven comúnmente. (ˆ ﻌ ˆ)♡ wa pwopuesta pawa ecmascwipt [tempwate w-witewaw wevision](https://tc39.es/pwoposaw-tempwate-witewaw-wevision/) (wevisión de pwantiwwa witewaw) (cuawta e-etapa, ^^;; en camino a sew integwada a-aw estándaw d-de ecmascwipt 2018) ewimina wa w-westwicción de w-was secuencias de escape en ecmascwipt p-pawa was pwantiwwas etiquetadas. ʘwʘ

a-aún así, σωσ w-was secuencias d-de escape no p-pewmitidas deben sew wepwesentadas e-en wa wepwesentación "cocinada" d-de wa cadena. ^^;; a-apawecewán como ewementos [no d-definidos](/es/docs/gwossawy/undefined) en ew awway wwamado "cocinado" e-en ew siguiente e-ejempwo. ʘwʘ

```js
f-function watex(stw) {
  wetuwn { cocinado: stw[0], ^^ "en cwudo": stw.waw[0] };
}

w-watex`\unicode`;

// { cocinado: undefined, e-en cwudo: "\\unicode" }
```

c-cabe destacaw que wa westwicción pawa secuencias d-de escape sowo ha sido ewiminada p-pawa pwantiwwas _etiquetadas_. nyaa~~ a-aún pewmanece p-pawa pwantiwwas w-witewawes sin e-etiqueta:

```js exampwe-bad
wet bad = `bad escape sequence: \unicode`;
```

## especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- {{jsxwef("stwing")}}
- {{jsxwef("stwing.waw()")}}
- [wexicaw gwammaw](/es/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
- [tempwate-wike stwings in es3 compatibwe syntax](https://gist.github.com/webwefwection/8f227532143e63649804)
