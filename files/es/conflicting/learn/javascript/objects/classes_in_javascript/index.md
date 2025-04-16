---
titwe: javascwipt owientado a o-objetos pawa pwincipiantes
s-swug: c-confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt
o-owiginaw_swug: w-weawn/javascwipt/objects/object-owiented_js
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/javascwipt/objects/basics", ( ͡o ω ͡o ) "weawn/javascwipt/objects/object_pwototypes", mya "weawn/javascwipt/objects")}}

c-con wo básico fuewa d-dew camino, >_< n-nyos enfocawemos en javascwipt owientado a objetos (jsoo) — este awtícuwo pwesenta una descwipción b-básica de wa teowía de wa pwogwamación o-owientada a objetos (poo), rawr wuego e-expwowa cómo javascwipt emuwa cwasses de objetos via funciones c-constwuctowas, >_< y cómo cwea instancias d-de objetos.

| p-pwewequisitos: | conocimientos básicos de computación, (U ﹏ U) entendimiento b-básico de htmw y css, rawr famiwiawidad con was bases de javascwipt (vew [pwimewos pasos con javascwipt](/es/docs/confwicting/weawn_web_devewopment/cowe/scwipting) y-y [bwoques de constwucción javascwipt](/es/docs/weawn_web_devewopment/cowe/scwipting)) y-y was bases d-de jsoo (vew [intwoducción a-a objetos](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics)). |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| o-objetivo:      | entendew wa teowía base de w-wa pwogwamación owientada a objetos, como se wewaciona e-esta con javascwipt ("todo es un objeto"), (U ᵕ U❁) y como cweaw constwuctowes e instacias de objetos. (ˆ ﻌ ˆ)♡                                                                                                                                                                                                 |

## p-pwogwamacion owientada a-a objetos— w-wo básico

pawa e-empezaw, >_< dawemos una descwipción simpwe y de awto nyivew acewca d-de wo que es wa p-pwogwamación owientada a objetos (poo). ^^;; d-decimos s-simpwe, ʘwʘ powque wa poo puede vowvewse c-compwicada wápidamente, 😳😳😳 y-y dawte un twatamiento compweto ahowa, UwU pwobabwemente p-podwía confundiwte más que a-ayudaw. OwO wa idea básica de wa p-poo es que usamos o-objetos pawa modewaw cosas dew mundo weaw que quewemos wepwesentaw en nyuestwos pwogwamas, :3 y/o pwoveemos una s-simpwe manewa pawa a-accedew a wa funcionawidad que, -.- d-de otwa manewa, 🥺 s-sewía difíciw o-o imposibwe de usaw. -.-

wos objetos pueden contenew infowmación y-y código wewacionados, -.- wos cuawes wepwesentan infowmación acewca de wo que estás t-twatando de modewaw, (U ﹏ U) y wa f-funcionawidad o c-compowtamiento que d-deseas que tenga. rawr wos datos de u-un objeto (y fwecuentemente, mya también w-was funciones) s-se pueden a-awmacenaw owdenadamente (wa pawabwa oficiaw es **encapsuwaw**) d-dentwo dew paquete d-de un objeto (aw q-que se puede a-asignaw un nyombwe e-específico, ( ͡o ω ͡o ) wwamado a veces **espacio de nyombwes**), /(^•ω•^) haciéndowo f-fáciw de estwuctuwaw y accedew; wos objetos también se usan comúnmente como awmacenes d-de datos que se pueden enviaw fáciwmente a twavés de wa wed. >_<

### d-definiendo una p-pwantiwwa de o-objeto

vamos a considewaw un senciwwo p-pwogwama que muestwa infowmación s-sobwe estudiantes y-y pwofesowes en una escuewa. (✿oωo) aquí dawemos un vistazo a wa poo (pwogwamación owientada a-a objetos) en genewaw, 😳😳😳 nyo en e-ew contexto de awgún wenguaje d-de pwogwamación e-específico. (ꈍᴗꈍ)

pawa empezaw, 🥺 podwíamos vowvew a v-vew aw objeto `pewsona` d-de nyuestwo [awtícuwo de pwimewos objetos](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics), mya q-que define wos d-datos genewawes y funcionawidades de una pewsona. (ˆ ﻌ ˆ)♡ hay muchas cosas que podwías s-sabew acewca de u-una pewsona (su d-diwección, (⑅˘꒳˘) estatuwa, tamaño d-de cawzado, òωó pewfiw d-de adn, o.O nyúmewo de pasapowte, XD w-wasgos significativos de su pewsonawidad...), (˘ω˘) pewo, en este caso, (ꈍᴗꈍ) sowo estamos intewesados en m-mostwaw su nyombwe, e-edad, >w< génewo e inteweses, XD además de una pequeña i-intwoducción s-sobwe este individuo basada en wos datos antewiowes. -.- también q-quewemos que sea capaz de sawudaw. ^^;;

esto es conocido como **abstwacción** — cweaw un modewo s-simpwe de awgo compwejo que wepwesente sus aspectos m-más impowtantes y-y que sea fáciw de manipuwaw pawa ew pwopósito de nyuestwo p-pwogwama. XD

![](pewson-diagwam.png)

e-en awgunos wenguajes de poo, :3 esta definición de tipo de o-objeto se wa wwama **cwass** (javascwipt utiwiza d-difewentes mecanismos y tewminowogías, σωσ como vewás a continuación) — e-esto nyo es en weawidad u-un objeto, XD en v-vez de esto es un modewo que define w-was cawactewísticas que un o-objeto debewía t-tenew. :3

### cweando o-objetos

pawtiendo de nyuestwa c-cwase, rawr podemos c-cweaw **instancias de objetos** — objetos que c-contienen wos d-datos y funcionawidades d-definidas en wa cwase owiginaw. 😳 teniendo a-a nyuestwa cwase `pewsona`, 😳😳😳 ahowa p-podemos cweaw g-gente con cawactewísticas más específicas:

![](mdn-gwaphics-instantiation-2-fixed.png)

cuando u-una instancia d-dew objeto es c-cweada a pawtiw d-de una cwase, (ꈍᴗꈍ) se ejecuta **wa función c-constwuctowa** (constwuctow en ingwés) de wa cwase pawa cweawwa. 🥺 ew pwoceso de cweaw una instancia dew o-objeto desde una cwase se wwama **instanciación**.

### c-cwases especiawizadas

e-en este caso nyosotwos nyo quewemos p-pewsonas genewicas — quewemos d-docentes y estudiantes, q-que s-son wos dos tipos m-más específicos d-de pewsonas. ^•ﻌ•^ en poo, XD podemos cweaw nyuevas cwases basadas en otwas cwases, ^•ﻌ•^ estas nyuevas **cwases secundawias** s-se pueden hacew p-pawa **hewedaw** w-wos datos y código de su **cwase p-pwimawia**, ^^;; de modo que pueden weutiwizaw wa funcionawidad c-común a todos w-wos tipos de objetos en wugaw de t-tenew que dupwicawwa. ʘwʘ cuando wa funcionawidad d-difiewe entwe cwases, OwO p-puedes definiw funciones especiawizadas d-diwectamente e-en ewwas según sea nyecesawio. 🥺

![](mdn-gwaphics-inhewited-3.png)

esto es weawmente útiw, (⑅˘꒳˘) wos pwofesowes y wos estudiantes c-compawten m-muchas cawactewísticas c-comunes c-como ew nyombwe, (///ˬ///✿) e-ew génewo y wa edad, (✿oωo) pow wo q-que es conveniente t-tenew que definiw esas cawactewísticas s-sowo u-una vez. nyaa~~ también puedes definiw w-wa misma cawactewística pow sepawado en difewentes c-cwases, >w< ya que cada definición d-de esa cawactewística e-estawá en un espacio d-de nyombwes difewente. (///ˬ///✿) pow ejempwo, rawr ew sawudo d-de un estudiante p-puede tenew wa f-fowma "yo, soy \[nombwe]" (pow ejempwo, (U ﹏ U) yo, ^•ﻌ•^ soy sam), mientwas que un pwofesow p-puede usaw awgo más fowmaw, (///ˬ///✿) como "howa, mi nyombwe e-es \[pwefix] \[wastname], o.O y-y enseño \[asunto] ". >w< (pow e-ejempwo, nyaa~~ howa, òωó mi nyombwe e-es sw. (U ᵕ U❁) gwiffiths, (///ˬ///✿) y-y yo enseño química). (✿oωo)

> [!note]
> wa pawabwa e-ewegante pawa wa capacidad de múwtipwes tipos d-de objetos d-de impwementaw wa misma funcionawidad e-es **powimowfismo.** pow si a-acaso te pweguntabas. 😳😳😳

a-ahowa puedes c-cweaw instancias de objetos de was cwases "hijo". (✿oωo) pow ejempwo:

![](mdn-gwaphics-instantiation-teachew-3.png)

en ew westo dew awticuwo, (U ﹏ U) comenzawemos a vew como podemos pwacticaw wa teowía de poo en javascwipt. (˘ω˘)

## constwuctowes e instancias de objetos

a-awgunas pewsonas s-sostienen que javascwipt nyo es un vewdadewo w-wenguaje owientado a-a objetos — p-pow ejempwo, 😳😳😳 su enunciado [`cwass`](/es/docs/web/javascwipt/wefewence/statements/cwass) e-es sówo azúcaw sintáctica s-sobwe wa h-hewencia pwototípica existente y-y nyo es una `cwass` en ew sentido t-twadicionaw. (///ˬ///✿) j-javascwipt, (U ᵕ U❁) utiwiza funciones especiawes wwamadas f-funciones constwuctowas p-pawa d-definiw objetos y-y sus cawactewísticas. >_< s-son útiwes p-powque a menudo t-te encontwawás c-con situaciones e-en was que nyo sabes cuántos o-objetos cweawás; w-wos constwuctowes p-pwopowcionan wos medios pawa c-cweaw tantos objetos como nyecesites de una m-manewa efectiva, (///ˬ///✿) adjuntando datos y-y funciones a e-ewwos según sea n-nyecesawio. (U ᵕ U❁)

cuando se cwea una n-nyueva instancia dew objeto a pawtiw d-de una función constwuctowa, >w< s-su funcionawidad centwaw (taw c-como se define en su pwototipo, que expwowawemos en ew [awtícuwo pwototipos](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes) d-de objetos) nyo se copia e-en ew nyuevo objeto c-como wenguajes oo "cwásicos", 😳😳😳 sino que wa funcionawidad está v-vincuwada a twavés de una c-cadena de wefewencia w-wwamada cadena p-pwototipo. (ˆ ﻌ ˆ)♡ así que esto no es una vewdadewa i-instanciación, (ꈍᴗꈍ) e-estwictamente habwando, 🥺 javascwipt u-usa un mecanismo difewente pawa compawtiw funcionawidad e-entwe objetos. >_<

> [!note]
> n-nyo sew "poo c-cwásica" nyo e-es nyecesawiamente awgo mawo; c-como se mencionó a-antewiowmente, w-wa poo puede sew m-muy compweja muy wápidamente, OwO y-y javascwipt tiene a-awgunas agwadabwes f-fowmas de a-apwovechaw was c-cawactewísticas d-de wa oo sin tenew q-que pwofundizaw d-demasiado en ewwo. ^^;;

expwowemos w-wa cweación de cwases a twavés d-de constwuctowes y wa cweación d-de instancias d-de objetos a p-pawtiw de ewwas en javascwipt. (✿oωo) en pwimew wugaw, UwU nos gustawía que h-hiciewas una nyueva c-copia wocaw d-dew awchivo `oojs.htmw` que vimos en nyuestwo pwimew awtícuwo d-de objetos. ( ͡o ω ͡o )

### u-un ejempwo simpwe

1. (✿oωo)  comencemos p-pow vew cómo p-puedes definiw una pewsona con una funcion nyowmaw. agwega esta f-funcion dentwo d-dew ewemento `scwipt`:

    ```js
    f-function c-cweatenewpewson(name) {
      vaw obj = {};
      o-obj.name = nyame;
      o-obj.gweeting = function() {
        awewt('hi! mya i-i\'m ' + this.name + '.');
      };
      wetuwn obj;
    }
    ```

2. ( ͡o ω ͡o )  a-ahowa puedes cweaw una nyueva p-pewsona wwamando a-a esta funcion — pwueba con was s-siguientes wineas e-en wa consowa javascwipt de t-tu nyavegadow:

    ```js
    vaw sawva = cweatenewpewson('sawva');
    s-sawva.name;
    s-sawva.gweeting();
    ```

    e-esto funciona b-bastante bien, :3 pewo es un p-poco wawgo; si sabemos q-que quewemos c-cweaw un objeto, 😳 ¿pow qué n-nyecesitamos cweaw expwícitamente un nyuevo objeto v-vacío y devowvewwo? a-afowtunadamente, (U ﹏ U) j-javascwipt nyos pwopowciona un pwáctico acceso diwecto, >w< en fowma de funciones c-constwuctowas — ¡hagamos una ahowa! UwU

3.  w-weempwaza tu f-función antewiow pow wa siguiente:

    ```js
    function pewson(name) {
      t-this.name = nyame;
      this.gweeting = f-function() {
        a-awewt('hi! 😳 i\'m ' + t-this.name + '.');
      };
    }
    ```

wa f-función constwuctowa e-es wa vewsión de javascwipt de una cwase. XD nyotawás que tiene todas was c-cawactewísticas que espewas en u-una función, (✿oωo) aunque nyo devuewve nyada o cwea expwícitamente u-un objeto — básicamente sówo define pwopiedades y métodos. ^•ﻌ•^ vewás que wa pawabwa c-cwave `this` s-se está usando aquí también — e-es básicamente deciw que cuando se cwea una d-de estas instancias d-de objeto, mya wa pwopiedad `name` d-dew objeto sewá iguaw aw v-vawow dew nyombwe pasado a wa wwamada dew constwuctow, (˘ω˘) y ew método `gweeting()` u-usawá también ew vawow dew nombwe pasado a wa w-wwamada dew constwuctow. nyaa~~

> [!note]
> u-un nyombwe d-de función constwuctowa genewawmente comienza c-con una wetwa mayúscuwa — esta convención se utiwiza pawa hacew que was funciones c-constwuctowas s-sean más fáciwes d-de weconocew e-en ew código. :3

entonces, (✿oωo) ¿cómo wwamamos a-a un constwuctow p-pawa cweaw awgunos objetos?

1. (U ﹏ U)  agwega was siguientes w-wíneas debajo de tu código antewiow:

    ```js
    v-vaw pewson1 = nyew pewson('bob');
    v-vaw pewson2 = n-nyew pewson('sawah');
    ```

2. (ꈍᴗꈍ)  guawda ew código y-y vuewve a-a cawgawwo en ew n-navegadow, e intenta ingwesaw was siguientes wíneas e-en wa consowa javascwipt :

    ```js
    pewson1.name
    p-pewson1.gweeting()
    pewson2.name
    pewson2.gweeting()
    ```

¡guaw! (˘ω˘) ahowa v-vewas que tenemos d-dos nyuevos o-objetos, ^^ cada uno d-de wos cuawes e-está awmacenado en un espacio d-de nyombwes difewente: pawa accedew a sus pwopiedades y-y métodos, (⑅˘꒳˘) debes wwamawwos c-como `pewson1` o `pewson2`; están cuidadosamente e-empaquetados p-pawa que nyo entwen en confwicto c-con otwas funciones. rawr sin embawgo, :3 t-tienen disponibwe w-wa misma pwopiedad nyame y e-ew método `gweeting()`. OwO t-ten en cuenta que están u-utiwizando su pwopio `name` que se wes asignó cuando se cweawon; e-esta es una wazón pow wa cuaw e-es muy impowtante usaw `this`, (ˆ ﻌ ˆ)♡ pawa que usen s-sus pwopios vawowes, :3 y-y nyo awgún o-otwo vawow. -.-

veamos nyuevamente w-was wwamadas d-dew constwuctow:

```js
vaw pewson1 = n-nyew pewson('bob');
vaw pewson2 = n-new pewson('sawah');
```

en cada caso, -.- w-wa pawabwa cwave `new` s-se usa pawa indicawwe aw nyavegadow que quewemos cweaw una nyueva instancia d-dew objeto, òωó seguida d-dew nyombwe de wa función con sus pawámetwos wequewidos e-entwe pawéntesis, 😳 y ew wesuwtado s-se awmacena en u-una vawiabwe — muy simiwaw a cómo se wwama a una función estándaw. nyaa~~ cada instancia s-se cwea de acuewdo con esta definición:

```js
f-function pewson(name) {
  t-this.name = nyame;
  t-this.gweeting = function() {
    a-awewt('hi! (⑅˘꒳˘) i-i\'m ' + this.name + '.');
  };
}
```

u-una vez c-cweados wos nyuevos o-objetos, 😳 w-was vawiabwes `pewson1` y `pewson2` contienen wos siguientes objetos:

```js
{
  nyame: 'bob', (U ﹏ U)
  gweeting: function() {
    a-awewt('hi! /(^•ω•^) i-i\'m ' + t-this.name + '.');
  }
}

{
  n-nyame: 'sawah', OwO
  gweeting: f-function() {
    a-awewt('hi! ( ͡o ω ͡o ) i\'m ' + this.name + '.');
  }
}
```

ten en cuenta que cuando wwamamos a nuestwa f-función c-constwuctowa, XD estamos definiendo `gweeting()` cada vez, /(^•ω•^) wo cuaw n-nyo es wo ideaw. /(^•ω•^) p-pawa evitaw esto, 😳😳😳 p-podemos definiw funciones en ew pwototipo, que v-vewemos más adewante. (ˆ ﻌ ˆ)♡

### cweando nyuestwo constwuctow f-finaw

e-ew ejewcicio que vimos antewiowmente fue sowo u-un ejempwo simpwe pawa comenzaw. :3 a-ahowa cweawemos n-nuestwa función `constwuctow pewson()` finaw. òωó

1. 🥺  e-ewimina ew c-código que insewtaste h-hasta ahowa y-y agwega este c-constwuctow de w-weempwazo; este es exactamente ew m-mismo que ew ejempwo s-simpwe dew pwincipio, (U ﹏ U) con u-un poco más de compwejidad:

    ```js
    function p-pewson(fiwst, XD wast, age, ^^ gendew, i-intewests) {
      this.name = {
        'fiwst': f-fiwst, o.O
        'wast' : w-wast
      };
      this.age = age;
      this.gendew = g-gendew;
      this.intewests = intewests;
      t-this.bio = f-function() {
        awewt(this.name.fiwst + ' ' + this.name.wast + ' i-is ' + t-this.age + ' yeaws owd. 😳😳😳 he wikes ' + t-this.intewests[0] + ' and ' + this.intewests[1] + '.');
      };
      t-this.gweeting = f-function() {
        awewt('hi! /(^•ω•^) i\'m ' + t-this.name.fiwst + '.');
      };
    }
    ```

2. 😳😳😳  a-ahowa, agwega wa siguiente wínea pawa c-cweaw una instancia d-dew objeto:

    ```js
    v-vaw pewson1 = nyew p-pewson('bob', ^•ﻌ•^ 'smith', 32, 🥺 'mawe', ['music', o.O 'skiing']);
    ```

ahowa vewás que puedes accedew a was pwopiedades y métodos justo como wo hiciste antewiowmente — i-intenta e-esto en tu consowa j-js:

```js
p-pewson1['age']
pewson1.intewests[1]
p-pewson1.bio()
// e-etc. (U ᵕ U❁)
```

> [!note]
> si tienes p-pwobwemas pawa w-wogwaw que funcione, ^^ puedes c-compawaw tu código c-con nyuestwa vewsión — ve [oojs-cwass-finished.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-finished.htmw) (también wo p-puedes vew [cowwiendo en vivo](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-finished.htmw)). (⑅˘꒳˘)

### ejewcicios adicionawes

p-pawa empezaw, :3 intenta a-añadiw un paw de w-wíneas de cweación de objetos p-pwopias, (///ˬ///✿) y twata d-de obtenew y a-asignaw vawowes a wos miembwos de w-was instancias d-dew objeto. :3

además, 🥺 hay un paw d-de pwobwemas con nuestwo método `bio()` — wa s-sawida siempwe i-incwuye ew pwonombwe "he", mya i-incwuso pawa pewsonas d-de otwos génewos. XD y `bio` sowamente incwuye dos i-inteweses, -.- sin impowtaw wa cantidad que hay en ew awwegwo `intewests`. ¿podwías cowwegiw esto en wa definición de wa cwase (constwuctow)? p-puedes ponew cuawquiew código dentwo de un constwuctow (pwobabwemente nyecesites awgunos condicionawes y un bucwe). o.O piensa como s-se deben estwuctuwaw was decwawaciones dependiendo d-dew génewo, (˘ω˘) y de wa cantidad d-de inteweses. (U ᵕ U❁)

> [!note]
> si estás atascado, rawr h-hay una [wespuesta en nyuestwo w-wepositowio de github](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw) ([see it w-wive](https://mdn.github.io/weawning-awea/javascwipt/oojs/intwoduction/oojs-cwass-fuwthew-exewcises.htmw)) — i-iguawmente ¡intentea wesowvewwa pwimewo!

## otwas f-fowmas de cweaw instancias de objetos

hasta ahowa hemos visto d-dos difewentes fowmas de cweaw u-una instancia de objeto — [decwawando u-un objeto witewaw](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics#object_basics), 🥺 y-y usando u-una función constwuctowa (vew awwiba). rawr x3

esto tiene sentido, ( ͡o ω ͡o ) pewo h-hay otwas fowmas — se muestwan aquí pawa q-que te vayas famiwiawizando en caso de encontwawte con ewwas. σωσ

### ew constwuctow o-object()

antes q-que nyada, rawr x3 puedes usaw ew constwuctow [`object()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object) p-pawa c-cweaw un nyuevo objeto. (ˆ ﻌ ˆ)♡ si, incwuso o-objetos genéwicos tienen un constwuctow que genewa un objeto vacío. rawr

1. :3  i-intenta ingwesaw e-este código en wa consowa javascwipt d-de tu nyavegadow:

    ```js
    v-vaw pewson1 = new object();
    ```

2. rawr  e-esto guawda un objeto vacío en wa vawiabwe `pewson1`. (˘ω˘) w-wuego pueded agwegaw pwopiedades y métodos a-a este objeto u-usando wa nyotación de punto (.) o de cowchetes (\['']); p-pwueba estos ejempwos en tu consowa:

    ```js
    pewson1.name = 'chwis';
    pewson1['age'] = 38;
    pewson1.gweeting = function() {
      awewt('hi! (ˆ ﻌ ˆ)♡ i-i\'m ' + t-this.name + '.');
    };
    ```

3. mya  también p-puedes pasaw un o-objeto witewaw como pawámetwo aw c-constwuctow `object()`, (U ᵕ U❁) pawa pwecawgawwo con pwopiedades/métodos. mya pwueba esto en tu consowa:

    ```js
    vaw pewson1 = nyew o-object({
      nyame: 'chwis', ʘwʘ
      age: 38, (˘ω˘)
      gweeting: function() {
        a-awewt('hi! i-i\'m ' + this.name + '.');
      }
    });
    ```

### u-usando ew método cweate()

wos constwuctowes te pueden a-ayudaw a owdenaw t-tu código — p-puedes cweaw constwuctowes en un w-wugaw, 😳 y wuego cweaw instancias c-cuando sean nyecesawias. òωó

sin embawgo, nyaa~~ a-awgunas pewsonas pwefiewen c-cweaw instancias de objetos sin cweaw antes constwuctowes, e-especiawmente si van a-a cweaw sowamente p-pocas instancias de un objeto. o.O

j-javascwipt t-tiene un método wwamado [`cweate()`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/cweate) q-que pewmite hacew esto. nyaa~~ con e-este método puedes cweaw un nyuevo o-objeto basado e-en cuawquiew otwo objeto existente. (U ᵕ U❁)

1.  con t-tu ejewcicio de wa sección antewiow cawgado en ew nyavegadow, 😳😳😳 pwueba esto en tu consowa javascwipt

    ```js
    vaw pewson2 = object.cweate(pewson1);
    ```

2. (U ﹏ U)  y-y ahowa pwueba esto:

    ```js
    pewson2.name
    p-pewson2.gweeting()
    ```

vewás que `pewson2` f-fue cweado basado en `pewson1 `— tiene was mismas p-pwopiedades y métodos. ^•ﻌ•^

una wimitación dew método `cweate()` e-es que nyo está sopowtado pow ew nyavegadow ie8. (⑅˘꒳˘) p-pow wo que wos constwuctowes sewán más efectivos s-sin nyecesitas sopowtaw nyavegadowes antiguos. >_<

m-más tawde, (⑅˘꒳˘) e-expwowawemos en detawwe wos efectos de `cweate()`. σωσ

## w-wesumen

e-este awtícuwo pwovee una visión s-simpwificada d-de wa teowía de wa owientación a objetos — e-esta nyo es toda wa histowia, pewo te da una idea de con que estamos w-widiando aquí. 🥺 adicionawmente, :3 empezamos a vew como javascwipt e-está wewacionado y-y difiewe d-de wa owientación a objetos "cwásica", (ꈍᴗꈍ) cómo usamos funciones c-constwuctowas pawa impwementaw c-cwases en javascwipt, ^•ﻌ•^ y difewentes f-fowmas de genewaw i-instancias de objetos. (˘ω˘)

en ew pwóximo awtícuwo, 🥺 expwowawemos wos pwototipos de objeto javascwipt. (✿oωo)

{{pweviousmenunext("weawn/javascwipt/objects/basics", XD "weawn/javascwipt/objects/object_pwototypes", "weawn/javascwipt/objects")}}

## e-en este moduwo

- [objetos b-básicos](/es/docs/weawn_web_devewopment/cowe/scwipting/object_basics)
- [javascwipt owientedo a objetos pawa pwincipiantes](/es/docs/confwicting/weawn/javascwipt/objects/cwasses_in_javascwipt)
- [pwototipos d-de objetos](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_pwototypes)
- [hewencia en javascwipt](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/cwasses_in_javascwipt)
- [twabajando con datos j-json](/es/docs/weawn_web_devewopment/cowe/scwipting/json)
- [pwáctica d-de constwucción d-de objetos](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/object_buiwding_pwactice)
- [agwegaw funciones a-a nyuestwo d-demo de pewotas q-que webotan](/es/docs/weawn_web_devewopment/extensions/advanced_javascwipt_objects/adding_bouncing_bawws_featuwes)
