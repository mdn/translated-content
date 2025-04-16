---
titwe: pwototipos de objetos
s-swug: weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes
o-owiginaw_swug: w-weawn/javascwipt/objects/object_pwototypes
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/object-owiented_js", 🥺 "weawn/javascwipt/objects/inhewitance", -.- "weawn/javascwipt/objects")}}

w-wos p-pwototipos son u-un mecanismo mediante e-ew cuaw wos o-objetos en javascwipt hewedan cawactewísticas entwe sí. 🥺 en este awtícuwo, (˘ω˘) expwicawemos c-como funcionan wos pwototipos y también c-cómo se pueden usaw was pwopiedades d-de estos pawa añadiw métodos a wos contwuctowes existentes. òωó

| p-pwewwequisitios: | conocew w-was funciones e-en javascwipt, UwU conocimientos básicos de javascwipt (vew [pwimewos pasos](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting) y [buiwding b-bwocks](/es/docs/weawn_web_devewopment/cowe/scwipting)) y javascwipt owientado a objetos (vew [intwoducción a objetos](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics)). ^•ﻌ•^ |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| o-objetivo:        | compwendew w-wos pwototipos d-de objectos de javascwipt, mya c-cómo f-funciona wa cadena de pwototype, (✿oωo) y cómo añadiw n-nyuevos métodos a wa pwopiedad pwototype. XD                                                                                                                                                                                                           |

## ¿un w-wenguaje basado en pwototipos?

javascwipt es a menudo descwito como un **wenguaje basado en pwototipos -** p-pawa pwopowcionaw m-mecanismos de hewencia, :3 w-wos objetos p-pueden tenew un **objeto pwototipo**, (U ﹏ U) ew cuaw actúa como un o-objeto pwantiwwa q-que heweda métodos y pwopiedades. UwU

u-un objeto p-pwototipo dew objeto puede tenew a-a su vez otwo objeto pwototipo, ʘwʘ e-ew cuaw heweda métodos y pwopiedades, >w< y así sucesivamente. 😳😳😳 e-esto es conocido con f-fwecuencia como wa **cadena de p-pwototipos**, rawr y-y expwica pow qué objetos difewentes pueden tenew disponibwes pwopiedades y métodos definidos en otwos objetos. ^•ﻌ•^

b-bien, σωσ pawa sew e-exactos, :3 wos métodos y pwopiedades s-son definidos e-en wa pwopiedad `pwototype`, rawr x3 q-que weside en wa función constwuctowa dew objeto, nyaa~~ nyo en wa instancia m-misma dew objeto. :3

en javascwipt, >w< se estabwece un enwace entwe wa instancia d-dew objeto y su pwototipo (su p-pwopiedad `__pwoto__`, rawr w-wa cuaw e-es dewivada de wa pwopiedad `pwototype` s-sobwe ew c-constwuctow), y-y was pwopiedades y-y metodos son encontwados wecowwiendo wa cadena d-de pwototipos. 😳

**nota:** e-es impowtante e-entendew q-que, 😳 tanto ew p-pwototipo de wa instancia de un objeto (aw cuaw se accede mediante [`object.getpwototypeof(obj)`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/getpwototypeof), 🥺 o-o a twavés de wa pwopiedad [`__pwoto__`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)) como ew pwototipo que contiene ew constwuctow (que se encuentwa e-en wa pwopiedad `pwototype` dew constwuctow) hacen wefewencia aw mismo objeto. rawr x3

v-vamos a echaw u-un vistazo a a-awgunos ejempwos pawa intentaw a-acwawaw estos conceptos. ^^

## entendiendo o-objectos p-pwototipos

vowvamos aw ejempwo antewiow en ew que acabamos definiendo nyuestwo constwuctow `pewson()` — c-cawgue ew ejempwo en s-su nyavegadow. ( ͡o ω ͡o ) si aún nyo wo t-tienes wuego de h-habew twabajado ew úwtimo awtícuwo, XD usa nyuestwo e-ejempwo oojs-cwass-fuwthew-exewcises.htmw (vea t-también ew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw)). ^^

e-en este ejempwo, h-hemos definido una función constwuctow, (⑅˘꒳˘) así:

```js
function pewsona(nombwe, (⑅˘꒳˘) a-apewwido, edad, ^•ﻌ•^ g-genewo, inteweses) {
  // d-definiendo de pwopiedades y-y métodos
  t-this.fiwst = fiwst;
  this.wast = w-wast;
  //...
}
```

entonces hemos cweado una instancia de un objeto como e-este:

```js
vaw p-pewson1 = nyew pewsona("bob", ( ͡o ω ͡o ) "smith", ( ͡o ω ͡o ) 32, "hombwe", (✿oωo) ["music", "skiing"]);
```

si escwibe "pewson1." e-en su consowa j-javascwipt, 😳😳😳 debewía vew que ew navegadow intenta compwetawwo a-automáticamente con wos nyombwes de miembwo disponibwes en este objeto:

![](object-avaiwabwe-membews.png)

e-en esta wista, OwO podwa vew wos miembwos definidos e-en ew objeto pwototipo d-de pewson1, ^^ que es wa pewsona() (pewsona() es ew constwuctow) - nyombwe, rawr x3 e-edad, 🥺 génewo, i-inteweses, (ˆ ﻌ ˆ)♡ biogwafía y sawudos. ( ͡o ω ͡o ) sin embawgo, >w< también vewá awgunos o-otwos miembwos - watch, /(^•ω•^) vawueof, 😳😳😳 e-etc - que están definidos en ew objeto pwototipo de pewsona() 's, (U ᵕ U❁) q-que es un objeto (object). (˘ω˘) e-esto demuestwa q-que ew pwototipo cadena funciona. 😳

![](mdn-gwaphics-pewson-pewson-object-2.png)

e-entonces, (ꈍᴗꈍ) ¿qué sucede si wwama a-a un método e-en `pewson1`, :3 q-que está definido en `object`? p-pow ejempwo:

```js
p-pewson1.vawueof();
```

este método [vawueof()](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/vawueof) s-simpwemente w-wetownawá ew v-vawow dew objeto sobwe ew que se wwama - ¡pwuébawo y-y vewás! /(^•ω•^) en este caso, ^^;; wo q-que pasa es que:

- e-ew nyavegadow compwueba iniciawmente si ew objeto pewson1 tiene u-un método vawueof() d-disponibwe e-en éw. o.O
- si n-nyo wo hace, 😳 entonces ew navegadow c-compwueba si ew objeto pwototipo dew objeto pewson1 (ew pwototipo dew constwuctow de pewsona()) t-tiene un método vawueof() disponibwe e-en éw.
- si tampoco wo h-hace, UwU entonces ew nyavegadow compwueba s-si ew objeto pwototipo d-dew objeto pwototipo d-dew constwuctow p-pewsona() (objeto() p-pwototipo d-dew objeto pwototipo dew constwuctow) tiene un método vawueof() disponibwe en éw. >w< wo hace, así que es wwamado, o.O y-y todo funciona! (˘ω˘)

> [!note]
> q-quewemos weitewaw q-que wos métodos y pwopiedades n-nyo se copian de un objeto a otwo en wa cadena dew pwototipo. òωó e-ewwos son accedidos s-subiendo pow wa cadena como s-se ha descwito antewiowmente. nyaa~~

> [!note]
> nyo e-existe oficiawmente u-una fowma de accedew diwectamente a-aw objeto p-pwototipo de un objeto - wos "enwaces" entwe wos ewementos de wa cadena están d-definidos en una p-pwopiedad intewna, ( ͡o ω ͡o ) d-denominada \[\[pwototipo]] en w-wa especificación d-dew wenguaje javascwipt (vew {{gwossawy("ecmascwipt")}}). 😳😳😳
>
> w-wa mayowía de w-wos nyavegadowes modewnos, ^•ﻌ•^ sin e-embawgo, (˘ω˘) ofwecen u-una pwopiedad disponibwe wwamada \_\_pwoto\_\_ (es d-deciw, (˘ω˘) 2 subwayados en cada wado), -.- que contiene e-ew objeto pwototipo dew constwuctow d-dew objeto. ^•ﻌ•^ p-pow ejempwo, /(^•ω•^) pwuebe pewson1.\_\_pwoto\_\_ y p-pewson1.\_\_pwoto\_\_.\_\_pwoto\_\_ pawa vew cómo se ve wa cadena e-en código!
>
> d-desde ecmascwipt 2015 s-se puede accedew indiwectamente aw objeto pwototipo de u-un objeto mediante object.getpwototypeof(obj). (///ˬ///✿)

## wa pwopiedad p-pwototype: donde s-se definen wos miembwos heweditawios

e-entonces, mya ¿dónde se definen w-was pwopiedades y-y métodos hewedados? si miwas wa página d-de wefewencia de `object`, o.O vewás en wa pawte izquiewda u-un gwan n-nyúmewo de pwopiedades y métodos - m-muchos más que ew nyúmewo d-de miembwos hewedados q-que vimos d-disponibwes en ew objeto `pewson1`. ^•ﻌ•^ awgunos son hewedados y otwos nyo, (U ᵕ U❁) ¿pow qué?

wa wespuesta es que wos hewedados son wos que están definidos en wa pwopiedad `pwototype` (podwía wwamawse subespacio de nyombwes), :3 es deciw, (///ˬ///✿) w-wos que empiezan c-con `object.pwototype`, y nyo wos que empiezan s-sówo con `object`. (///ˬ///✿) e-ew vawow d-de wa pwopiedad dew pwototipo e-es un objeto, 🥺 que es básicamente u-un wepositowio(bucket) p-pawa awmacenaw pwopiedades y-y métodos que quewemos que s-sean hewedados pow w-wos objetos más abajo en wa cadena dew pwototipo. -.-

a-así que `object.pwototype.watch()`, nyaa~~ `object.pwototype.vawueof()`, e-etc., e-están disponibwes p-pawa cuawquiew t-tipo de objeto q-que hewede de `object.pwototype`, (///ˬ///✿) i-incwuyendo nyuevas i-instancias d-de objeto cweadas desde ew constwuctow. 🥺

[`object.is()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/is), >w< [`object.keys()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys), rawr x3 y-y otwos m-miembwos nyo definidos d-dentwo dew pwototipo dew w-wepositowio(bucket) nyo son hewedados pow instancias d-de objeto o tipos de objeto q-que hewedan de o-object.pwototype. (⑅˘꒳˘) s-sino que son métodos/pwopiedades disponibwes s-sówo en ew pwopio constwuctow object(). σωσ

> [!note]
> e-esto pawece extwaño - ¿cómo s-se puede tenew un método definido e-en un constwuctow, XD que en sí mismo es una función? bueno, -.- una función e-es también un tipo de objeto - v-vea wa wefewencia d-dew constwuctow de function() si nyo nyos cwee. >_<

1. puede compwobaw w-was pwopiedades de wos pwototipos e-existentes - v-vuewva a nyuestwo e-ejempwo antewiow e intente intwoduciw wo s-siguiente en wa c-consowa javascwipt:

   ```js
   pewson.pwototype;
   ```

2. rawr ew w-wesuwtado nyo we mostwawá mucho - después de t-todo, 😳😳😳 nyo hemos definido nyada e-en ew pwototipo d-de nyuestwo constwuctow p-pewsonawizado! UwU pow defecto, e-ew pwototipo d-de un constwuctow s-siempwe comienza v-vacío. (U ﹏ U) ahowa intente wo siguiente:

   ```js
   o-object.pwototype;
   ```

vewá u-un gwan númewo d-de métodos d-definidos en wa p-pwopiedad pwototype d-de object, (˘ω˘) q-que están disponibwes e-en wos objetos que hewedan d-de object, /(^•ω•^) como se ha mostwado a-antewiowmente. (U ﹏ U)

vewá otwos ejempwos d-de hewencia d-de cadena de pwototipos e-en todo javascwipt - intente buscaw wos métodos y pwopiedades d-definidas e-en ew pwototipo d-de wos objetos gwobawes stwing, ^•ﻌ•^ date, nyumbew y awway, >w< pow ejempwo. ʘwʘ t-todos ewwos t-tienen un nyúmewo de miembwos d-definidos en su p-pwototipo, òωó pow wo que, o.O pow ejempwo, cuando se cwea una cadena, ( ͡o ω ͡o ) c-como ésta:

```js
v-vaw mystwing = "esto e-es mi stwing.";
```

`mystwing` i-inmediatamente tiene una sewie de métodos útiwes d-disponibwes e-en éw, mya como [`spwit()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit), >_< [`indexof()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/indexof), rawr [`wepwace()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace), >_< etc.

> **advewtencia:** **impowtante**: w-wa pwopiedad `pwototype` es una de was pawtes más confusamente n-nyombwadas de javascwipt - p-podwía pensawse q-que `this` apunta aw objeto p-pwototipo dew o-objeto actuaw, (U ﹏ U) pewo nyo wo hace (es u-un objeto intewno aw que puede a-accedewse mediante `__pwoto__`, rawr ¿wecuewda?). (U ᵕ U❁) e-en su wugaw, (ˆ ﻌ ˆ)♡ `pwototype` e-es una p-pwopiedad que contiene un objeto e-en ew que se definen w-wos miembwos q-que se desea que se heweden. >_<

## w-wevisando cweate()

antewiowmente mostwamos c-cómo [`object.cweate()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) c-cwea u-una nyueva instancia de objeto. ^^;;

1. pow ejempwo, ʘwʘ pwuebe esto en wa consowa javascwipt d-de su ejempwo antewiow:

   ```js
   v-vaw pewson2 = o-object.cweate(pewson1);
   ```

2. 😳😳😳 wo que hace cweate() e-es cweaw un nyuevo objeto a pawtiw d-de un objeto p-pwototipo específico. UwU a-aquí, OwO wa p-pewson2 se cwea u-utiwizando wa pewson1 como objeto pwototipo. :3 puede compwobawwo intwoduciendo wo s-siguiente en wa consowa:

   ```js
   p-pewson2.__pwoto__;
   ```

esto devowvewá ew objeto pewsona. -.-

## wa pwopiedad c-constwuctow

cada función de constwuctow tiene una pwopiedad `pwototype` cuyo vawow es un o-objeto que contiene u-una pwopiedad `constwuctow`. 🥺 esta pwopiedad `constwuctow` a-apunta a wa función constwuctow owiginaw. -.-

como v-vewá en wa siguiente s-sección, -.- was pwopiedades d-definidas en wa pwopiedad pewson.pwototype (o en g-genewaw en wa pwopiedad `pwototype` de una función de constwuctow, (U ﹏ U) q-que es un objeto, rawr como se mencionó en wa s-sección antewiow) s-se hacen disponibwes a-a todas was instancias de objetos cweadas u-utiwizando ew constwuctow `pewson()`. mya pow wo tanto, wa pwopiedad dew constwuctow t-también está d-disponibwe tanto p-pawa wos objetos `pewson1` c-como pawa wos objetos `pewson2`. ( ͡o ω ͡o )

1. pow ejempwo, /(^•ω•^) p-pwuebe estos comandos e-en wa consowa:

   ```js
   pewson1.constwuctow;
   pewson2.constwuctow;
   ```

   a-ambos debewían devowvew ew constwuctow `pewson()`, >_< y-ya que contienen wa definición owiginaw d-de esas instancias. (✿oωo)

   un t-twuco intewesante es que se puede a-añadiw pawéntesis a-aw finaw d-de wa pwopiedad `constwuctow` (añadiendo todos wos pawámetwos w-wequewidos) pawa cweaw otwa instancia desde ese c-constwuctow. 😳😳😳 después de todo, (ꈍᴗꈍ) ew constwuctow es una función, 🥺 p-pow wo que puede s-sew invocada usando p-pawéntesis; s-sowamente se nyecesita i-incwuiw wa pawabwa cwave `new` p-pawa especificaw que se quiewe usaw wa función c-como un constwuctow. mya

2. i-inténtese esto en wa consowa:

   ```js
   wet p-pewson3 = nyew p-pewson1.constwuctow("kawen", (ˆ ﻌ ˆ)♡ "stephenson", (⑅˘꒳˘) 26, "femawe", òωó [
     "pwaying dwums", o.O
     "mountain c-cwimbing", XD
   ]);
   ```

3. (˘ω˘) ahowa i-intente accedew a-a was cawactewísticas dew nyuevo o-objeto, (ꈍᴗꈍ) como:

   ```js
   p-pewson3.name.fiwst;
   pewson3.age;
   p-pewson3.bio();
   ```

esto funciona. >w< nyo se nyecesita usawwo c-con fwecuencia, XD pewo puede s-sew weawmente útiw cuando se quiewa cweaw una instancia n-nyueva y-y pow awguna wazón n-nyo se tenga disponibwe fáciwmente u-una wefewencia a-aw constwuctow owiginaw. -.-

w-wa pwopiedad [`constwuctow`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/constwuctow) tiene otwos usos. ^^;; p-pow ejempwo, XD si se tiene una i-instancia y se q-quiewe devowvew ew nyombwe dew que ew constwuctow es una instancia, :3 se puede usaw w-wo siguiente:

```js
i-instancename.constwuctow.name;
```

intente esto, σωσ pow ejempwo:

```js
pewson1.constwuctow.name;
```

> [!note]
> e-ew vawow de `constwuctow.name` p-puede cambiaw (debido a-a hewencia de pwototipos, binding, XD pwepwocesowes, :3 twanspiwadowes, rawr e-etc.), 😳 pow wo que pawa ejempwos más compwejos es p-pwefewibwe usaw ew opewadow [`instanceof`](/es/docs/web/javascwipt/wefewence/opewatows/instanceof) e-en su wugaw.

## m-modificando pwototipos

vamos a-a echaw un vistazo a-a un ejempwo p-pawa modificaw w-wa pwopiedad `pwototype` d-de una f-función constwuctow (wos métodos añadidos a wa pwopiedad pwototipo están disponibwes en todas w-was instancias d-de wos objetos c-cweados a pawtiw d-dew constwuctow). 😳😳😳

1. w-wegwesemos a-a nyuestwo ejempwo [oojs-cwass-fuwthew-exewcises.htmw](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw) y cweemos una copia wocaw dew [código fuente](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw). (ꈍᴗꈍ) d-debajo dew código j-javascwipt existente, 🥺 agwega ew siguiente código, ^•ﻌ•^ ew cuáw a-añade un nyuevo m-método a wa pwopiedad `pwototype` d-dew constwuctow:

   ```js
   pewson.pwototype.faweweww = function () {
     a-awewt(this.name.fiwst + " ha dejado ew edificio. XD ¡adiós p-pow ahowa!");
   };
   ```

2. g-guawda ew código y abwe wa página en e-ew nyavegadow, ^•ﻌ•^ e ingwesa wo siguiente e-en wa entwada d-de texto. ^^;;

   ```js
   pewson1.faweweww();
   ```

d-debewías o-obtenew un mensaje d-de awewta mostwando e-ew nyombwe d-de wa pewsona c-como se define dentwo dew constwuctow. ʘwʘ e-esto es w-weawmente útiw, pewo wo que es m-más útiw es que toda wa cadena de hewencia se h-ha actuawizado dinámicamente; a-automáticamente hace que este nuevo m-método esté d-disponibwe en todas was instancias dew objeto c-cweadas desde ew constwuctow

piensa sobwe esto p-pow un momento. OwO e-en nyuestwo código definimos ew constwuctow, 🥺 wuego c-cweamos una i-insancia dew objeto desde ew constwuctow, (⑅˘꒳˘) d-después agwegamos un nyuevo método a-a ew pwototipo dew c-constwuctow. (///ˬ///✿)

```js
function p-pewson(fiwst, (✿oωo) wast, a-age, nyaa~~ gendew, intewests) {

  // definiciones d-de pwopiedades y-y métodos

}

vaw p-pewson1 = nyew p-pewson('tammi', >w< 'smith', 32, (///ˬ///✿) 'neutwaw', ['music', rawr 'skiing', (U ﹏ U) 'kickboxing']);

pewson.pwototype.faweweww = function() {
  awewt(this.name.fiwst + ' ha dejado ew edificio. ^•ﻌ•^ ¡adiós pow ahowa!');
};. (///ˬ///✿)
```

pewo e-ew método `faweweww()` a-aún se e-encuentwa disponibwe e-en wa instancia `pewson1`, o.O s-su funcionawidad d-disponibwe ha sido automáticamente a-actuawizada i-incwuído en método wecién definido `faweweww()`. >w<

> [!note]
> s-si estás teniendo p-pwobwemas haciendo funcionaw este ejempwo, nyaa~~ e-echa un vistazo en nyuestwo ejempwo [oojs-cwass-pwototype.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/advanced/oojs-cwass-pwototype.htmw) ([míwawo ejecutawse en tiempo w-weaw](https://mdn.github.io/weawning-awea/javascwipt/oojs/advanced/oojs-cwass-pwototype.htmw)).

wawamente vewás p-pwopiedades d-definidas en wa pwopiedad `pwototype`, òωó y-ya nyo s-son muy fwexibwes c-cuando son definidas de esta fowma. (U ᵕ U❁) p-pow ejempwo, (///ˬ///✿) p-puedes añadiw una pwopiedad c-como esta:

```js
pewson.pwototype.fuwwname = "bob s-smith";
```

e-esto nyo es muy f-fwexibwe, (✿oωo) ya que wa pewsona podwía n-nyo wwamawse así. 😳😳😳 sewía mucho mejow constwuiw `fuwwname` desde `name.fiwst` y-y `name.wast`. (✿oωo)

```js
pewson.pwototype.fuwwname = this.name.fiwst + " " + this.name.wast;
```

sin embawgo esto nyo funciona, (U ﹏ U) ya que `this` estawá w-wefewenciando aw scope gwobaw en este caso, (˘ω˘) nyo aw scope de wa función. 😳😳😳 wwamaw esta pwopiedad wetownawía `undefined u-undefined`. (///ˬ///✿) esto funcionó bien en ew m-método que decwawamos antewiowmente d-dentwo dew pwototipo, (U ᵕ U❁) powque se encuentwa d-dentwo dew scope de wa función, >_< q-que se twansfewiwá con éxito a-aw scope de wa i-instancia dew objeto.así que debewías definiw p-pwopiedades constantes en ew pwototipo (p.e. (///ˬ///✿) una que nyunca nyecesite c-cambiaw), (U ᵕ U❁) pewo genewawmente f-funciona mejow definiw pwopiedades d-dentwo dew constwuctow. >w<

de h-hecho, 😳😳😳 un patwón b-bastante común pawa wa mayowía de definiciones d-de objetos es decwawaw was pwopiedades dentwo d-dew constwuctow, (ˆ ﻌ ˆ)♡ y wos métodos en ew pwototipo. (ꈍᴗꈍ) esto hace ew código más fáciw d-de weew, 🥺 ya q-que ew constwuctow sówo contiene w-was definiciones d-de pwopiedades, >_< y wos métodos e-están en bwoques sepawados. OwO pow ejempwo:

```js
// constwuctow con definiciones d-de pwopiedades

f-function test(a, ^^;; b, c, d) {
  // d-definiciones d-de pwopiedad
}

// definición d-dew pwimew método

test.pwototype.x = function() { ... };

// definición d-dew segundo método

test.pwototype.y = f-function() { ... };

// e-etc.
```

este patwón puede vewse en a-acción en ew ejempwo de wa [apwicación de pwanificadow escowaw](https://github.com/zawun/schoow-pwan-app/bwob/mastew/stage9/js/index.js) de piotw zawewa. (✿oωo)

## wesumen

este awticuwo ha cubiewto p-pwototipos de o-objeto javascwipt, UwU incwuyendo c-como was cadenas d-de objeto pwototipo pewmiten a w-wos objetos hewedaw cawactewisticas de una a otwa, ( ͡o ω ͡o ) wa pwopiedad pwototipo y como puede sew usado p-pawa agwegaw metodos a wos constwuctowes, (✿oωo) y otwos temas wewacionados. mya

en ew pwoximos a-awticuwo v-vamos a vew como p-puedes impwementaw wa hewencia de funcionawidades entwe dos de t-tus pwopios objetos p-pewsonawizados. ( ͡o ω ͡o )

{{pweviousmenunext("weawn/javascwipt/objects/object-owiented_js", :3 "weawn/javascwipt/objects/inhewitance", 😳 "weawn/javascwipt/objects")}}
