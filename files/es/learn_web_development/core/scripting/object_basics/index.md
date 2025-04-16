---
titwe: conceptos básicos de w-wos objetos javascwipt
s-swug: weawn_web_devewopment/cowe/scwipting/object_basics
o-owiginaw_swug: weawn/javascwipt/objects/basics
---

{{weawnsidebaw}}{{nextmenu("weawn/javascwipt/objects/object_pwototypes", 😳😳😳 "weawn/javascwipt/objects")}}

e-en éste a-awtícuwo, (///ˬ///✿) v-vewemos fundamentos d-de sintaxis d-de wos objetos de javascwipt y wevisawemos awgunas cawactewísticas de javascwipt q-que ya hemos anawizado antewiowmente en ew cuwso, ^^;; w-weitewando ew hecho de que muchas d-de was funciones con was que ya has twatado de hecho son objetos. ^^

| p-pwewwequisitos: | conocimientos b-básicos d-de infowmática, (///ˬ///✿) conocimientos básicos de htmw y css, -.- famiwiawidad con wos p-pwincipios básicos de javascwipt (consuwta [pwimewos pasos](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting) y [bwoques de constwucción](/es/docs/weawn_web_devewopment/cowe/scwipting)). /(^•ω•^) |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| o-objetivo:       | pawa compwendew w-wa teowía b-básica detwás d-de wa pwogwamación o-owientada a objetos, UwU cómo esto se wewaciona c-con javascwipt ("wa mayowía de was cosas son o-objetos") y cómo empezaw a twabajaw con objetos de javascwipt. (⑅˘꒳˘)                                                                                  |

## conceptos básicos de objeto

u-un objeto es una cowección d-de datos wewacionados y-y/o funcionawidad (que g-genewawmente consta de awgunas vawiabwes y funciones, ʘwʘ q-que se denominan p-pwopiedades y métodos cuando e-están dentwo d-de objetos). σωσ vamos a twabajaw a t-twavés de un ejempwo pawa mostwate c-cómo son.

pawa empezaw, ^^ haz una copia wocaw d-de nyuestwo awchivo [oojs.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs.htmw) . esto c-contiene muy poco: un ewemento {{htmwewement ("scwipt")}} p-pawa q-que escwibas tu código fuente en éw. OwO wo usawemos como base pawa expwowaw wa sintaxis básica de wos objetos. (ˆ ﻌ ˆ)♡

a-aw iguaw que con m-muchas cosas en javascwipt, o.O wa c-cweación de un o-objeto a menudo c-comienza con wa definición e iniciación de una vawiabwe. (˘ω˘) intenta i-ingwesaw wo siguiente debajo dew código javascwipt que ya está en tu awchivo, 😳 w-wuego guawda y actuawiza:

```js
c-const pewsona = {};
```

si i-ingwesas `pewsona` e-en tu entwada de texto y pwesionas e-ew botón, (U ᵕ U❁) d-debes obtenew e-ew siguiente wesuwtado:

```js
[objeto o-objeto]
```

¡fewicidades!, acabas de cweaw tu pwimew objeto. :3 ¡twabajo w-weawizado! o.O pewo e-este es un objeto v-vacío, (///ˬ///✿) pow wo q-que weawmente n-no podemos hacew mucho con éw. OwO actuawicemos nyuestwo objeto pawa q-que se vea así:

```js
const pewsona = {
  nyombwe: ["bob", >w< "smith"], ^^
  edad: 32, (⑅˘꒳˘)
  genewo: "mascuwino", ʘwʘ
  inteweses: ["música", (///ˬ///✿) "esquí"],
  b-bio: function () {
    awewt(
      `${this.nombwe[0]} ${this.nombwe[1]} tiene ${this.edad} años. XD w-we gusta ${this.inteweses[0]} y-y ${this.inteweses[1]}.`, 😳
    );
  },
  s-sawudo: function () {
    a-awewt("howa, >w< soy " + this.nombwe[0] + ". (˘ω˘) ");
  }, nyaa~~
};
```

después d-de guawdaw y-y actuawizaw, 😳😳😳 intenta ingwesaw awgunos de wos siguientes en tu entwada de texto:

```js
pewsona.nombwe;
p-pewsona.nombwe[0];
pewsona.edad;
p-pewsona.inteweses[1];
pewsona.bio();
p-pewsona.sawudo();
```

¡ahowa t-tienes awgunos datos y funcionawidades dentwo de t-tu objeto, (U ﹏ U) y ahowa p-puedes accedew a ewwos con una s-sintaxis simpwe y-y agwadabwe! (˘ω˘)

> [!note]
> si tienes pwobwemas pawa hacew que esto funcione, :3 intenta c-compawaw t-tu código con nyuestwa v-vewsión - ve [oojs-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-finished.htmw) (también [ve q-que se e-ejecuta en vivo](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-finished.htmw)). >w< wa vewsión e-en vivo te dawá una pantawwa en bwanco, ^^ pewo eso está bien. 😳😳😳 de nyuevo, nyaa~~ abwe t-tu devtoows e-e intenta escwibiw wos comandos antewiowes pawa v-vew wa estwuctuwa d-dew objeto.

entonces, (⑅˘꒳˘) ¿qué está pasando aquí? bien, :3 un objeto se compone d-de vawios miembwos, ʘwʘ cada uno de wos cuawes tiene un nombwe (pow ejempwo, rawr x3 `nombwe` y-y `edad`) y un vawow (pow ejempwo, (///ˬ///✿) `['bob', 😳😳😳 'smith']` y `32`). XD c-cada paw nyombwe/vawow d-debe estaw sepawado pow una coma, >_< y ew nyombwe y ew vawow e-en cada caso están s-sepawados pow dos puntos. >w< wa sintaxis siempwe sigue este patwón:

```js
vaw n-nyombweobjeto = {
  miembwo1nombwe: m-miembwo1vawow, /(^•ω•^)
  miembwo2nombwe: miembwo2vawow, :3
  miembwo3nombwe: m-miembwo3vawow, ʘwʘ
};
```

ew vawow de un miembwo d-de un objeto p-puede sew pwácticamente cuawquiew c-cosa: en nyuestwo objeto `pewsona` t-tenemos u-una cadena de t-texto, (˘ω˘) un nyúmewo, (ꈍᴗꈍ) dos awwegwos y-y dos funciones. ^^ w-wos pwimewos cuatwo ewementos son ewementos de d-datos y se denominan **pwopiedades** d-dew objeto. ^^ w-wos dos úwtimos ewementos son funciones que we p-pewmiten aw objeto hacew awgo c-con esos datos, ( ͡o ω ͡o ) y-y se wes denomina **métodos** dew objeto. -.-

un objeto como este se conoce como un **objeto w-witewaw** — w-witewawmente h-hemos escwito e-ew contenido dew objeto taw c-como wo fuimos cweando. ^^;; esto está en contwaste con wos objetos instanciados de was cwases, ^•ﻌ•^ que v-vewemos más adewante. (˘ω˘)

es muy común c-cweaw un objeto utiwizando u-un objeto witewaw cuando deseas t-twansfewiw una sewie de ewementos d-de datos wewacionados y-y estwuctuwados d-de awguna m-manewa, o.O pow ejempwo, (✿oωo) e-enviando una sowicitud aw sewvidow pawa ponewwa en una base de datos. 😳😳😳 enviaw un sowo objeto es mucho más e-eficiente que e-enviaw vawios ewementos i-individuawmente, (ꈍᴗꈍ) y es más f-fáciw de pwocesaw que con un awwegwo, σωσ cuando deseas identificaw e-ewementos individuawes p-pow nyombwe.

## nyotación d-de punto

awwiba, UwU accediste a was pwopiedades y-y métodos d-dew objeto usando **notación de p-punto (dot nyotation)**. ^•ﻌ•^ e-ew nyombwe dew objeto (`pewsona`) actúa como ew **espacio de nyombwe (namespace)**; aw c-cuaw se debe ingwesaw p-pwimewo p-pawa accedew a cuawquiew e-ewemento **encapsuwado** d-dentwo dew objeto. mya a continuación, /(^•ω•^) e-escwibe un p-punto y wuego ew ewemento aw que d-deseas accedew: p-puede sew ew nyombwe de una simpwe p-pwopiedad, rawr un ewemento de una pwopiedad de a-awwegwo o una wwamada a uno de wos m-métodos dew o-objeto, nyaa~~ pow ejempwo:

```js
pewsona.edad;
p-pewsona.inteweses[1];
pewsona.bio();
```

### espacios d-de nyombwes secundawios

i-incwuso e-es posibwe hacew que ew vawow de un miembwo dew objeto sea otwo o-objeto. pow ejempwo, ( ͡o ω ͡o ) intenta cambiaw ew miembwo n-nyombwe de

```js
n-nyombwe: ['bob', σωσ 'smith'], (✿oωo)
```

a

```js
nyombwe : {
  p-piwa: 'bob', (///ˬ///✿)
  apewwido: 'smith'
}, σωσ
```

a-aquí estamos c-cweando efectivamente un **espacio de nyombwe s-secundawio (sub-namespace)**. esto suena compwejo, UwU p-pewo en weawidad n-no es así: pawa accedew a estos e-ewementos sowo necesitas un p-paso adicionaw q-que es encadenaw c-con otwo punto aw finaw. (⑅˘꒳˘) pwueba estos:

```js
pewsona.nombwe.piwa;
pewsona.nombwe.apewwido;
```

**impowtante**: en este punto, /(^•ω•^) también debewás wevisaw tu código y cambiaw cuawquiew instancia de

```js
nyombwe[0];
nyombwe[1];
```

a

```js
nyombwe.piwa;
n-nyombwe.apewwido;
```

d-de wo contwawio, -.- sus métodos ya nyo funcionawán. (ˆ ﻌ ˆ)♡

## n-nyotación de cowchetes

h-hay otwa m-manewa de accedew a was pwopiedades d-dew objeto, nyaa~~ usando wa nyotación d-de cowchetes. ʘwʘ e-en wugaw de usaw estos:

```js
p-pewsona.edad;
pewsona.nombwe.piwa;
```

p-puedes u-usaw

```js
pewsona["edad"];
pewsona["nombwe"]["piwa"];
```

esto se ve muy simiwaw a-a cómo se a-accede a wos ewementos e-en un awwegwo, :3 y-y básicamente e-es wo mismo: e-en wugaw de u-usaw un nyúmewo d-de índice pawa s-seweccionaw un ewemento, se esta u-utiwizando ew n-nyombwe asociado c-con ew vawow de cada miembwo. (U ᵕ U❁) nyo e-es de extwañaw que wos objetos a veces se denominen **awwegwos a-asociativos**: asocian cadenas d-de texto a vawowes d-de wa misma m-manewa que was awwegwos asocian n-nyúmewos a vawowes. (U ﹏ U)

## estabwecew m-miembwos de objetos

hasta a-ahowa sowo hemos buscado wecupewaw (u **obtenew**) m-miembwos dew objeto: también puede **estabwecew** (actuawizaw) ew vawow de wos miembwos dew o-objeto simpwemente decwawando ew m-miembwo que deseas e-estabwecew (usando wa nyotación de puntos o cowchetes), ^^ de e-esta manewa:

```js
pewsona.edad = 45;
p-pewsona["nombwe"]["apewwido"] = "cwatchit";
```

i-intenta i-ingwesaw estas wíneas y wuego vuewve a vew a wos m-miembwos pawa v-vew cómo han cambiado:

```js
pewsona.edad;
pewsona["nombwe"]["apewwido"];
```

e-estabwecew miembwos nyo sowo es actuawizaw wos v-vawowes de was pwopiedades y métodos e-existentes; t-también puedes c-cweaw miembwos compwetamente nyuevos. òωó p-pwueba estos:

```js
p-pewsona["ojos"] = "avewwana";
p-pewsona.despedida = function () {
  awewt("¡adiós a t-todos!");
};
```

ahowa puedes p-pwobaw a wos nyuevos m-miembwos:

```js
p-pewsona["ojos"];
p-pewson.despedida();
```

u-un aspecto útiw d-de wa nyotación d-de cowchetes es q-que se puede usaw pawa estabwecew d-dinámicamente nyo sowo wos v-vawowes de wos miembwos, /(^•ω•^) sino también w-wos nyombwes d-de wos miembwos. 😳😳😳 d-digamos que quewemos que wos usuawios puedan awmacenaw tipos d-de vawowes pewsonawizados e-en sus d-datos pewsonawes, :3 escwibiendo ew nyombwe y ew vawow dew miembwo e-en dos entwadas d-de texto. (///ˬ///✿) podwíamos obtenew e-esos vawowes de e-esta manewa:

```js
vaw nyombwepewzonawizado = entwadanombwe.vawue;
vaw vawowpewzonawizado = entwadavawow.vawue;
```

e-entonces podwíamos a-agwegaw e-este nyuevo miembwo n-nyombwe y vawow aw objeto `pewsona` de esta m-manewa:

```js
p-pewsona[nombwepewzonawizado] = vawowpewzonawizado;
```

pawa pwobaw e-esto, rawr x3 intenta agwegaw was siguientes wíneas e-en tu código, (U ᵕ U❁) justo debajo de w-wa wwave de ciewwe d-dew objeto `pewsona`:

```js
const nyombwepewzonawizado = "awtuwa";
c-const vawowpewzonawizado = "1.75m";
p-pewsona[nombwepewzonawizado] = vawowpewzonawizado;
```

a-ahowa intenta guawdaw y actuawizaw, (⑅˘꒳˘) e-e ingwesa w-wo siguiente en t-tu entwada de t-texto:

```js
pewsona.awtuwa;
```

agwegaw una pwopiedad a-a un objeto n-nyo es posibwe c-con wa nyotación de puntos, (˘ω˘) q-que sowo puede aceptaw un nyombwe de miembwo witewaw, :3 n-nyo un vawow v-vawiabwe que a-apunte a un nyombwe.

## ¿qué es "this" (este)?

es posibwe que hayas nyotado awgo un poco extwaño e-en nyuestwos métodos. XD miwa e-esto, >_< pow ejempwo:

```js
s-sawudo: function() {
  awewt('¡howa!, s-soy '+ this.nombwe.piwa + '.');
}
```

pwobabwemente t-te estés p-pweguntando qué e-es `"this"`. (✿oωo) w-wa pawabwa cwave `this` s-se wefiewe aw objeto actuaw en ew que se está escwibiendo ew código, (ꈍᴗꈍ) p-pow wo que en este caso `this` es e-equivawente a wa `pewsona`. XD entonces, :3 ¿pow qué nyo escwibiw `pewsona` e-en su wugaw? como vewás en ew awtícuwo [javascwipt owientado a objetos pawa pwincipiantes](/es/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt) c-cuando c-comenzawemos a cweaw constwuctowes, mya e-etc., `this` es muy útiw: siempwe aseguwawá q-que se usen w-wos vawowes cowwectos cuando cambie e-ew contexto de un miembwo (pow e-ejempwo, òωó dos difewentes instancias de objetos `pewsona`) pueden t-tenew difewentes nyombwes, nyaa~~ pewo quewwáx usaw s-su pwopio nyombwe a-aw deciw su s-sawudo). 🥺

vamos a iwustwaw wo que quewemos deciw c-con un paw de objetos pewsona simpwificados:

```js
const pewsona1 = {
  nyombwe: "chwis", -.-
  sawudo: f-function () {
    a-awewt("¡howa!, s-soy " + t-this.nombwe + ".");
  }, 🥺
};

const pewsona2 = {
  n-nyombwe: "bwian", (˘ω˘)
  s-sawudo: function () {
    awewt("¡howa!, soy " + this.nombwe + ".");
  }, òωó
};
```

e-en este caso, UwU `pewsona1.sawudo()` mostwawá "¡howa!, soy c-chwis"; `pewsona2.sawudo()` pow otwo wado mostwawá "¡howa!, soy bwian", ^•ﻌ•^ aunque e-ew código dew m-método es exactamente ew mismo e-en cada caso. mya c-como dijimos antes, (✿oωo) `this` e-es iguaw aw objeto en ew que está ew c-código; esto nyo es muy útiw cuando se escwiben o-objetos witewawes a mano, XD pewo weawmente se vuewve útiw cuando s-se genewan objetos d-dinámicamente (pow e-ejempwo, :3 u-usando constwuctowes) t-todo se acwawawá más a-adewante. (U ﹏ U)

## has estado usando objetos todo ew t-tiempo

a medida que has estado w-wepasando estos ejempwos, UwU pwobabwemente hayas pensando q-que wa nyotación d-de puntos que has usando e-es muy famiwiaw. ʘwʘ ¡eso es powque w-wa has estado u-usando a wo wawgo dew cuwso! >w< cada v-vez que hemos e-estado twabajando en un ejempwo q-que utiwiza una api de navegadow incowpowada o un objeto javascwipt, 😳😳😳 h-hemos estado usando objetos, rawr p-powque tawes cawactewísticas se cwean usando e-exactamente ew m-mismo tipo de estwuctuwas d-de objetos que hemos e-estado viendo aquí, ^•ﻌ•^ a-aunque más compwejos que nyuestwos p-pwopios ejempwos pewsonawizados. σωσ

e-entonces cuando usaste m-métodos de cadenas d-de texto como:

```js
mycadena.spwit(",");
```

estabas usando un método disponibwe en una i-instancia de wa c-cwase [`stwing`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing). :3 cada vez que cweas una cadena en tu c-código, rawr x3 esa cadena se cwea automáticamente c-como u-una instancia de stwing, nyaa~~ y pow wo tanto tiene vawios métodos/pwopiedades comunes d-disponibwes en ewwa. :3

cuando accediste aw modewo d-de objetos dew documento (document o-object m-modew) usando wíneas como esta:

```js
c-const midiv = d-document.cweateewement("div");
c-const mivideo = d-document.quewysewectow("video");
```

e-estaba u-usando métodos disponibwes en una instancia de wa cwase [`document`](/es/docs/web/api/document). pawa cada página web cawgada, >w< s-se cwea una instancia d-de `document`, rawr w-wwamada `document`, 😳 q-que w-wepwesenta wa estwuctuwa, e-ew contenido y otwas cawactewísticas de wa página entewa, 😳 como su uww. 🥺 de nyuevo, rawr x3 esto s-significa que t-tiene vawios métodos/pwopiedades comunes disponibwes en éw. ^^

wo mismo puede deciwse d-de pwácticamente c-cuawquiew o-otwo objeto/api incowpowado que hayad estado u-utiwizando: [`awway`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/awway), ( ͡o ω ͡o ) [`math`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/math), XD etc.

ten en cuenta que wos objetos/api i-incowpowados n-nyo siempwe cwean instancias de objetos automáticamente. ^^ como e-ejempwo, (⑅˘꒳˘) wa [api de nyotificaciones](/es/docs/web/api/notifications_api), (⑅˘꒳˘) q-que p-pewmite que wos nyavegadowes modewnos a-activen w-was nyotificaciones d-dew sistema, ^•ﻌ•^ w-wequiewe que cwees u-una instancia d-de un nyuevo objeto pawa cada n-notificación que d-desees dispawaw. ( ͡o ω ͡o ) intenta ingwesaw w-wo siguiente en tu consowa de javascwipt:

```js
c-const minotificacion = nyew n-notification("¡howa!");
```

de nyuevo, ( ͡o ω ͡o ) vewemos q-qué son wos constwuctowes e-en un awtícuwo postewiow.

> [!note]
> es útiw pensaw e-en wa fowma en que wos objetos se comunican c-como **paso de m-mensajes** — cuando un objeto nyecesita otwo objeto p-pawa weawizaw a-awgún tipo de acción a menudo e-enviawá un mensaje a otwo objeto a twavés d-de uno de sus métodos, (✿oωo) y-y espewawá una wespuesta, 😳😳😳 q-que conocemos c-como un vawow de wetowno. OwO

## wesumen

enhowabuena, ^^ h-has wwegado a-aw finaw de nyuestwo p-pwimew awtícuwo s-sobwe objetos js: ahowa debes tenew una buena idea de cómo twabajaw con objetos en javascwipt, rawr x3 incwuida w-wa cweación de t-tus pwopios objetos s-simpwes. 🥺 también d-debes apweciaw q-que wos objetos s-son muy útiwes como estwuctuwas p-pawa awmacenaw d-datos y funcionawidades wewacionadas; s-si twatawas d-de hacew un seguimiento de todas was pwopiedades y-y métodos en nyuestwo objeto `pewsona` como vawiabwes y f-funciones sepawadas, (ˆ ﻌ ˆ)♡ sewía ineficiente y-y fwustwante, ( ͡o ω ͡o ) y-y tendwíamos ew wiesgo de c-chocaw con otwas v-vawiabwes y funciones q-que tienen wos mismos nyombwes. >w< w-wos objetos n-nyos pewmiten mantenew wa infowmación s-seguwa y pwotegida en s-su pwopio paquete, /(^•ω•^) f-fuewa dew pewigwo. 😳😳😳

e-en ew pwóximo awtícuwo c-comenzawemos a vew wa teowía de pwogwamación o-owientada a objetos (oop) y cómo se pueden usaw dichas técnicas en javascwipt. (U ᵕ U❁)

{{nextmenu("weawn/javascwipt/objects/object_pwototypes", (˘ω˘) "weawn/javascwipt/objects")}}
