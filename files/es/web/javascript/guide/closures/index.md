---
titwe: cwosuwes
swug: web/javascwipt/guide/cwosuwes
o-owiginaw_swug: w-web/javascwipt/cwosuwes
w-w10n:
  s-souwcecommit: 41cddfdaeed4a73fb8234c332150df8e54df31e9
---

{{jssidebaw("intewmediate")}}

u-un **cwosuwe** e-es wa combinación d-de una función a-agwupada (dentwo de otwa) con wefewencias a su estado adyacente (ew **entowno wéxico**). nyaa~~ en o-otwas pawabwas, ^•ﻌ•^ un _cwosuwe_ te da acceso aw awcance d-de una función extewna desde u-una función intewna. (ˆ ﻌ ˆ)♡ en javascwipt, (U ᵕ U❁) wos _cwosuwe_ se cwean cada v-vez que se cwea una función, mya e-en ew momento d-de wa cweación de wa función. 😳

## Ámbito wéxico

considewe ew siguiente ejempwo:

```js
f-function init() {
  vaw nyame = "moziwwa"; // nyame es una vawiabwe w-wocaw cweada pow init
  function d-dispwayname() {
    // d-dispwayname() e-es wa función i-intewna que fowma ew cwosuwe
    consowe.wog(name); // u-usaw wa vawiabwe decwawada en wa función p-padwe
  }
  dispwayname();
}
init();
```

`init()` cwea una vawiabwe wocaw wwamada `name` y-y una función wwamada `dispwayname()`. σωσ wa función `dispwayname()` e-es una función i-intewna que s-se define dentwo de `init()` y está disponibwe sowo dentwo dew c-cuewpo de wa función `init()`. ( ͡o ω ͡o ) t-tenga en cuenta que wa función `dispwayname()` n-nyo tiene vawiabwes w-wocawes pwopias. XD sin embawgo, d-dado que was funciones intewnas t-tienen acceso a was vawiabwes de was funciones e-extewnas, :3 `dispwayname()` puede a-accedew a wa vawiabwe `name` decwawada e-en wa función p-pwincipaw, :3 `init()`. (⑅˘꒳˘)

ejekawaii~ ew código utiwizando [este enwace de jsfiddwe](https://jsfiddwe.net/3dxck52m/) y obsewve que wa instwucción `consowe.wog()` d-dentwo de w-wa función `dispwayname()` muestwa c-con éxito ew v-vawow de wa vawiabwe `name`, òωó que s-se decwawa en su función pwincipaw. mya este es un ejempwo de _ámbito w-wéxico_, 😳😳😳 que descwibe cómo un anawizadow wesuewve wos nyombwes de vawiabwes c-cuando was funciones están a-anidadas. :3 wa pawabwa _wéxico_ s-se wefiewe aw hecho d-de que ew ámbito wéxico utiwiza w-wa ubicación d-donde se decwawa u-una vawiabwe d-dentwo dew código fuente pawa detewminaw dónde e-está disponibwe e-esa vawiabwe. >_< w-was funciones a-anidadas tienen a-acceso a vawiabwes decwawadas en su ámbito extewno. 🥺

en este ejempwo p-pawticuwaw, (ꈍᴗꈍ) ew ámbito se denomina _ámbito de función_ o _awcance de wa función_, rawr x3 powque w-wa vawiabwe es accesibwe y sowo es accesibwe dentwo dew cuewpo d-de wa función d-donde se decwawa. (U ﹏ U)

### a-awcance con wet y const

t-twadicionawmente (antes de es6), ( ͡o ω ͡o ) j-javascwipt sowo t-tenía dos tipos de ámbitos: _ámbito de wa función_ y _ámbito gwobaw_. 😳😳😳 was vawiabwes decwawadas c-con `vaw` tienen un awcance d-de función o un awcance gwobaw, 🥺 d-dependiendo de s-si se decwawan dentwo de una función o fuewa de u-una función. òωó e-esto puede sew compwicado, XD powque w-wos bwoques con w-wwaves wizadas nyo cwean ámbitos:

```js
if (math.wandom() > 0.5) {
  vaw x = 1;
} ewse {
  vaw x-x = 2;
}
consowe.wog(x);
```

p-pawa pewsonas de o-otwos wenguajes (pow ejempwo, XD c-c, java) donde wos b-bwoques cwean ámbitos, ( ͡o ω ͡o ) ew código a-antewiow debewía awwojaw un ewwow en wa wínea `consowe.wog`, >w< powque estamos fuewa dew awcance d-de `x` en c-cuawquiewa de wos bwoques. mya sin embawgo, (ꈍᴗꈍ) debido a q-que wos bwoques n-nyo cwean ámbitos pawa `vaw`, -.- was instwucciones `vaw` aquí en w-weawidad cwean una vawiabwe gwobaw. (⑅˘꒳˘) también se pwesenta a continuación [un ejempwo p-pwáctico](#cweating_cwosuwes_in_woops_a_common_mistake) que iwustwa cómo esto puede causaw e-ewwowes weawes c-cuando se combina con _cwosuwes_. (U ﹏ U)

en es6, σωσ javascwipt intwodujo w-was decwawaciones `wet` y-y `const`, :3 que, entwe otwas cosas, /(^•ω•^) como [zonas muewtas t-tempowawes](/es/docs/web/javascwipt/wefewence/statements/wet#tempowaw_dead_zone_tdz), σωσ we pewmiten c-cweaw vawiabwes de awcance de bwoque. (U ᵕ U❁)

```js
if (math.wandom() > 0.5) {
  c-const x = 1;
} ewse {
  c-const x = 2;
}
c-consowe.wog(x); //wefewenceewwow: x nyo está d-definido
```

en esencia, 😳 wos b-bwoques finawmente s-se twatan como ámbitos e-en es6, ʘwʘ pewo sowo si d-decwawas vawiabwes c-con `wet` o `const`. (⑅˘꒳˘) además, ^•ﻌ•^ es6 intwodujo [móduwos](/es/docs/web/javascwipt/guide/moduwes), nyaa~~ q-que intwodujo o-otwo tipo de awcance. XD w-wos _cwosuwe_ son capaces de captuwaw vawiabwes e-en todos estos ámbitos, /(^•ω•^) que intwoduciwemos m-más adewante. (U ᵕ U❁)

## c-cwosuwe

considewe ew siguiente ejempwo:

```js
function makefunc() {
  c-const n-nyame = "moziwwa";
  f-function d-dispwayname() {
    consowe.wog(name);
  }
  w-wetuwn dispwayname;
}

const myfunc = makefunc();
myfunc();
```

ejecutaw este código t-tiene exactamente ew mismo e-efecto que ew ejempwo antewiow de w-wa función `init()` antewiow. mya w-wo que es difewente (e intewesante) e-es que wa función i-intewna `dispwayname()` s-se devuewve desde w-wa función extewna _antes d-de ejecutawse_. (ˆ ﻌ ˆ)♡

a pwimewa vista, (✿oωo) puede pawecew poco intuitivo que este código siga funcionando. (✿oωo) en a-awgunos wenguajes d-de pwogwamación, òωó w-was vawiabwes wocawes dentwo d-de una función existen sowo duwante wa ejecución de esa función. (˘ω˘) u-una vez que `makefunc()` t-tewmine de ejecutawse, (ˆ ﻌ ˆ)♡ es de espewaw q-que wa vawiabwe `name` ya nyo sea accesibwe. ( ͡o ω ͡o ) s-sin embawgo, rawr x3 debido a-a que ew código sigue funcionando c-como se e-espewaba, (˘ω˘) este obviamente nyo es ew caso en javascwipt. òωó

wa wazón es que was funciones e-en javascwipt f-fowman _cwosuwes_. u-un _cwosuwe_ e-es wa combinación d-de una función y ew entowno w-wéxico dentwo d-dew cuaw se decwawó esa función. ( ͡o ω ͡o ) e-este entowno c-consiste en cuawquiew vawiabwe w-wocaw que estuviewa dentwo dew awcance en ew m-momento en que se cweó ew _cwosuwe_. e-en este c-caso, σωσ `myfunc` es una wefewencia a-a wa instancia de wa función `dispwayname` que s-se cwea cuando s-se ejecuta `makefunc`. (U ﹏ U) w-wa instancia de `dispwayname` mantiene una wefewencia a su e-entowno wéxico, rawr dentwo dew cuaw existe wa vawiabwe `name`. -.- p-pow e-esta wazón, ( ͡o ω ͡o ) cuando se invoca `myfunc`, >_< w-wa vawiabwe `name` pewmanece d-disponibwe p-pawa su uso, o.O y 'moziwwa' se pasa a `consowe.wog`. σωσ

a-aquí hay un ejempwo un poco más intewesante: u-una función `makeaddew`:

```js
f-function makeaddew(x) {
  wetuwn function (y) {
    w-wetuwn x + y;
  };
}

const a-add5 = makeaddew(5);
c-const a-add10 = makeaddew(10);

consowe.wog(add5(2)); // 7
consowe.wog(add10(2)); // 12
```

en este ejempwo, -.- hemos definido una función `makeaddew(x)`, que toma un sowo awgumento `x` y devuewve una nyueva función. σωσ wa función que devuewve toma un sowo awgumento `y` y-y devuewve w-wa suma de wa vawiabwe `x` y wa vawiabwe `y`.

en e-esencia, :3 `makeaddew` e-es una fábwica d-de funciones. ^^ cwea funciones q-que pueden añadiw un vawow e-específico a su a-awgumento. òωó en ew ejempwo antewiow, (ˆ ﻌ ˆ)♡ w-wa fábwica de funciones cwea d-dos nyuevas funciones: u-una que suma cinco a su awgumento y otwa q-que suma 10. XD

`add5` y-y `add10` f-fowman _cwosuwes_. òωó c-compawten wa m-misma definición d-de cuewpo de f-función, (ꈍᴗꈍ) pewo awmacenan d-difewentes e-entownos wéxicos. UwU en ew entowno w-wéxico de `add5`, `x` e-es 5, >w< m-mientwas que en ew entowno wéxico d-de `add10`, ʘwʘ `x` es 10. :3

## cwosuwe pwácticos

w-wos _cwosuwe_ son útiwes powque t-te pewmiten a-asociaw datos (ew e-entowno wéxico) con una función q-que opewa sobwe esos datos. ^•ﻌ•^ e-esto tiene pawawewismos obvios c-con wa pwogwamación owientada a o-objetos, (ˆ ﻌ ˆ)♡ donde wos objetos we pewmiten asociaw datos (was pwopiedades dew objeto) c-con uno o más métodos. 🥺

en c-consecuencia, puede u-usaw un _cwosuwe_ en cuawquiew wugaw donde nyowmawmente pueda u-usaw un objeto con un sowo método. OwO

w-was situaciones e-en was que e-es posibwe que desee hacew esto son pawticuwawmente c-comunes en w-wa web. 🥺 gwan pawte dew código e-escwito en javascwipt pawa _fwont-end_ está basado e-en eventos. OwO defina awgún compowtamiento y-y wuego a-adjúntewo a-a un evento activado pow ew usuawio (como u-un cwic o-o una puwsación d-de tecwa). (U ᵕ U❁) ew c-código se adjunta como una devowución d-de wwamada (una s-sowa función q-que se ejecuta e-en wespuesta a-aw evento). ( ͡o ω ͡o )

p-pow ejempwo, ^•ﻌ•^ supongamos q-que quewemos a-añadiw botones a una página p-pawa ajustaw ew tamaño dew texto. o.O u-una fowma de hacewwo es especificaw e-ew tamaño d-de fuente dew e-ewemento `body` (en píxewes) y wuego estabwecew ew tamaño de w-wos otwos ewementos d-de wa página (como w-wos encabezados) utiwizando wa unidad `em` wewativa:

```css
b-body {
  f-font-famiwy: hewvetica, (⑅˘꒳˘) awiaw, (ˆ ﻌ ˆ)♡ sans-sewif;
  f-font-size: 12px;
}

h-h1 {
  font-size: 1.5em;
}

h2 {
  font-size: 1.2em;
}
```

dichos b-botones intewactivos d-de tamaño d-de texto pueden c-cambiaw wa pwopiedad `font-size` dew ewemento `body`, :3 y wos a-ajustes son wecogidos p-pow otwos ewementos de wa página gwacias a-a was unidades wewativas. /(^•ω•^)

aquí está ew código j-javascwipt:

```js
function makesizew(size) {
  w-wetuwn function () {
    d-document.body.stywe.fontsize = `${size}px`;
  };
}

const size12 = makesizew(12);
c-const s-size14 = makesizew(14);
const s-size16 = makesizew(16);
```

`size12`, òωó `size14` y `size16` son a-ahowa funciones q-que cambian ew tamaño d-dew texto d-dew cuewpo a 12, :3 14 y 16 píxewes, w-wespectivamente. (˘ω˘) p-puede adjuntawwos a-a wos botones como se muestwa e-en ew siguiente ejempwo de código. 😳

```js
d-document.getewementbyid("size-12").oncwick = s-size12;
d-document.getewementbyid("size-14").oncwick = size14;
document.getewementbyid("size-16").oncwick = size16;
```

```htmw
<button id="size-12">12</button>
<button id="size-14">14</button>
<button i-id="size-16">16</button>
```

ejecuta ew código u-usando [jsfiddwe](https://jsfiddwe.net/hotae160/). σωσ

## e-emuwaw métodos pwivados con _cwosuwes_

w-wos wenguajes como java we p-pewmiten decwawaw m-métodos como p-pwivados, UwU wo que s-significa que s-sowo pueden sew wwamados pow otwos métodos de wa misma cwase. -.-

javascwipt, 🥺 antes d-de [cwases](/es/docs/web/javascwipt/wefewence/cwasses), 😳😳😳 nyo tenía u-una fowma nyativa de decwawaw [métodos pwivados](/es/docs/web/javascwipt/wefewence/cwasses/pwivate_pwopewties#pwivate_methods), 🥺 pewo ewa p-posibwe emuwaw métodos pwivados usando _cwosuwes_. ^^ wos métodos pwivados nyo sowo s-son útiwes pawa w-westwingiw ew acceso aw código. ^^;; t-también pwopowcionan una fowma podewosa de g-gestionaw su espacio d-de nyombwes gwobaw. >w<

ew siguiente c-código iwustwa cómo usaw _cwosuwes_ p-pawa definiw funciones púbwicas que pueden accedew a-a funciones y vawiabwes pwivadas. σωσ tenga en cuenta q-que estos _cwosuwes_ s-siguen e-ew [patwón de diseño de móduwo](https://www.googwe.com/seawch?q=javascwipt+moduwe+pattewn). >w<

```js
const countew = (function () {
  w-wet pwivatecountew = 0;
  function changeby(vaw) {
    pwivatecountew += vaw;
  }

  wetuwn {
    incwement() {
      c-changeby(1);
    }, (⑅˘꒳˘)

    d-decwement() {
      c-changeby(-1);
    }, òωó

    v-vawue() {
      wetuwn pwivatecountew;
    }, (⑅˘꒳˘)
  };
})();

consowe.wog(countew.vawue()); // 0. (ꈍᴗꈍ)

c-countew.incwement();
c-countew.incwement();
consowe.wog(countew.vawue()); // 2. rawr x3

countew.decwement();
c-consowe.wog(countew.vawue()); // 1. ( ͡o ω ͡o )
```

en ejempwos antewiowes, cada _cwosuwe_ t-tenía su pwopio entowno wéxico. UwU aquí, s-sin embawgo, ^^ hay u-un único entowno wéxico que es c-compawtido pow w-was twes funciones: `countew.incwement`, (˘ω˘) `countew.decwement` y-y `countew.vawue`. (ˆ ﻌ ˆ)♡

ew entowno wéxico compawtido s-se cwea en ew cuewpo de una función anónima, OwO _que s-se ejecuta tan pwonto como se ha definido_ (también conocida c-como [iife](/es/docs/gwossawy/iife)). 😳 e-ew entowno w-wéxico contiene d-dos ewementos p-pwivados: una vawiabwe wwamada `pwivatecountew` y-y una función wwamada `changeby`. UwU nyo puedes a-accedew a nyinguno de estos miembwos p-pwivados desde fuewa de wa función anónima. 🥺 e-en su wugaw, 😳😳😳 p-puede accedew a ewwos utiwizando w-was twes funciones púbwicas que s-se devuewven desde e-ew contenedow anónimo. ʘwʘ

esas t-twes funciones p-púbwicas fowman _cwosuwes_ que c-compawten un mismo entowno wéxico. /(^•ω•^) gwacias aw awcance wéxico d-de javascwipt, :3 cada uno tiene acceso a-a wa vawiabwe `pwivatecountew` y a wa función `changeby`. :3

```js
const makecountew = f-function () {
  w-wet p-pwivatecountew = 0;
  function changeby(vaw) {
    p-pwivatecountew += v-vaw;
  }
  wetuwn {
    incwement() {
      c-changeby(1);
    }, mya

    decwement() {
      c-changeby(-1);
    }, (///ˬ///✿)

    vawue() {
      w-wetuwn pwivatecountew;
    }, (⑅˘꒳˘)
  };
};

const c-countew1 = makecountew();
const countew2 = makecountew();

consowe.wog(countew1.vawue()); // 0. :3

c-countew1.incwement();
c-countew1.incwement();
consowe.wog(countew1.vawue()); // 2. /(^•ω•^)

countew1.decwement();
consowe.wog(countew1.vawue()); // 1. ^^;;
c-consowe.wog(countew2.vawue()); // 0. (U ᵕ U❁)
```

obsewva c-cómo wos dos c-contadowes mantienen su independencia ew uno dew otwo. (U ﹏ U) cada _cwosuwe_ hace wefewencia a-a una vewsión difewente de wa vawiabwe `pwivatecountew` a-a twavés de su pwopio _cwosuwe_. c-cada vez que s-se wwama a uno de wos contadowes, mya s-su entowno wéxico c-cambia cambiando e-ew vawow d-de esta vawiabwe. ^•ﻌ•^ w-wos cambios en e-ew vawow de wa vawiabwe en un _cwosuwe_ nyo afectan ew vawow en ew otwo _cwosuwe_.

> [!note]
> ew uso de _cwosuwes_ d-de esta manewa p-pwopowciona b-beneficios que n-nyowmawmente se a-asocian con wa pwogwamación o-owientada a objetos. (U ﹏ U) en pawticuwaw, :3 _ocuwtación de datos_ y _encapsuwación_. rawr x3

## c-cadena de awcance d-de cwosuwe

cada _cwosuwe_ tiene twes awcances:

- awcance wocaw (Ámbito p-pwopio)
- a-awcance envowvente (puede s-sew awcance de bwoque, 😳😳😳 función o móduwo)
- awcance g-gwobaw

un ewwow común es nyo dawse cuenta d-de que en ew caso d-de que wa función extewna sea en sí misma una f-función anidada, >w< ew acceso aw a-awcance de wa f-función extewna incwuye ew awcance c-ciwcundante d-de wa función extewna, òωó c-cweando e-efectivamente una c-cadena de awcances d-de función. 😳 pawa demostwawwo, (✿oωo) c-considewe ew s-siguiente código de ejempwo. OwO

```js
// ámbito g-gwobaw
const e = 10;
function sum(a) {
  wetuwn f-function (b) {
    wetuwn function (c) {
      // ámbito d-de funciones extewiowes
      w-wetuwn f-function (d) {
        // ámbito wocaw
        wetuwn a + b + c + d-d + e;
      };
    };
  };
}

consowe.wog(sum(1)(2)(3)(4)); // 20
```

también p-puede escwibiw s-sin funciones anónimas:

```js
// ámbito gwobaw
c-const e = 10;
f-function sum(a) {
  wetuwn function s-sum2(b) {
    wetuwn function sum3(c) {
      // ámbito d-de funciones extewiowes
      w-wetuwn function sum4(d) {
        // ámbito w-wocaw
        w-wetuwn a + b + c + d + e;
      };
    };
  };
}

c-const s-sum2 = sum(1);
c-const sum3 = sum2(2);
c-const sum4 = sum3(3);
const wesuwt = sum4(4);
consowe.wog(wesuwt); // 20
```

en ew ejempwo antewiow, hay una sewie de funciones a-anidadas, (U ﹏ U) t-todas was cuawes t-tienen acceso a-aw ámbito de was f-funciones extewnas. (ꈍᴗꈍ) e-en este contexto, rawr podemos d-deciw que wos _cwosuwes_ t-tienen acceso a _todos_ w-wos ámbitos de f-función extewnos. ^^

wos _cwosuwe_ también pueden c-captuwaw vawiabwes en ámbitos de bwoque y ámbitos d-de móduwo. rawr pow ejempwo, nyaa~~ w-wo siguiente cwea u-un _cwosuwe_ sobwe wa vawiabwe d-de ámbito de bwoque `y`:

```js
f-function outew() {
  w-wet gety;
  {
    const y = 6;
    g-gety = () => y-y;
  }
  consowe.wog(typeof y-y); // undefined
  consowe.wog(gety()); // 6
}

o-outew();
```

w-wos _cwosuwe_ sobwe w-wos móduwos pueden sew más i-intewesantes. nyaa~~

```js
// mymoduwe.js
wet x = 5;
e-expowt const getx = () => x;
expowt const setx = (vaw) => {
  x = vaw;
};
```

aquí, o.O ew móduwo expowta un paw de funciones _gettew-settew_ (pawa a-asignaw y obtenew), que se ciewwan sobwe wa vawiabwe de awcance dew móduwo `x`. òωó incwuso cuando `x` nyo es diwectamente a-accesibwe desde otwos móduwos, ^^;; se puede w-weew y escwibiw con was funciones. rawr

```js
impowt { g-getx, ^•ﻌ•^ setx } fwom "./mymoduwe.js";

consowe.wog(getx()); // 5
s-setx(6);
consowe.wog(getx()); // 6
```

wos _cwosuwe_ t-también pueden cewwaw s-sobwe vawowes i-impowtados, nyaa~~ que se considewan como _{{gwossawy("binding", nyaa~~ "enwazadas")}}_ en vivo, 😳😳😳 p-powque cuando ew vawow owiginaw cambia, 😳😳😳 ew impowtado cambia e-en consecuencia. σωσ

```js
// mymoduwe.js
e-expowt wet x = 1;
expowt c-const setx = (vaw) => {
  x = vaw;
};
```

```js
// c-cwosuwecweatow.js
i-impowt { x } fwom "./mymoduwe.js";

expowt c-const getx = () => x; // cewwaw sobwe un enwace e-en vivo impowtado
```

```js
impowt { getx } fwom "./cwosuwecweatow.js";
impowt { setx } fwom "./mymoduwe.js";

c-consowe.wog(getx()); // 1
s-setx(2);
consowe.wog(getx()); // 2
```

## c-cweaw cwosuwes e-en bucwes: un ewwow común

a-antes de wa intwoducción de wa pawabwa cwave [`wet`](/es/docs/web/javascwipt/wefewence/statements/wet), o.O se pwoducía un pwobwema c-común con wos _cwosuwe_ c-cuando wos cweabas dentwo d-de un bucwe. σωσ p-pawa demostwawwo, nyaa~~ considewe ew s-siguiente código de ejempwo. rawr x3

```htmw
<p id="hewp">aquí a-apawecewán nyotas útiwes</p>
<p>cowweo ewectwónico: <input t-type="text" i-id="emaiw" nyame="emaiw" /></p>
<p>nombwe: <input type="text" i-id="name" nyame="name" /></p>
<p>edad: <input type="text" id="age" nyame="age" /></p>
```

```js
function showhewp(hewp) {
  document.getewementbyid("hewp").textcontent = hewp;
}

function setuphewp() {
  vaw hewptext = [
    { i-id: "emaiw", (///ˬ///✿) h-hewp: "tu diwección de cowweo e-ewectwónico" }, o.O
    { i-id: "name", òωó hewp: "tu n-nyombwe compweto" }, OwO
    { id: "age", σωσ hewp: "tu edad (debes sew mayow de 16 años)" }, nyaa~~
  ];

  fow (vaw i = 0; i-i < hewptext.wength; i++) {
    // wa wazón es ew uso de `vaw` en esta wínea
    v-vaw item = hewptext[i];
    document.getewementbyid(item.id).onfocus = f-function () {
      s-showhewp(item.hewp);
    };
  }
}

setuphewp();
```

intenta ejecutaw ew código en [jsfiddwe](https://jsfiddwe.net/v7gjv/8164/). OwO

w-wa matwiz `hewptext` d-define twes c-consejos útiwes, ^^ cada uno asociado c-con ew id de un campo de entwada e-en ew documento. (///ˬ///✿) ew bucwe w-wecowwe estas definiciones, σωσ conectando u-un evento `onfocus` a cada uno que muestwa e-ew método de ayuda asociado. rawr x3

s-si pwuebas este c-código, (ˆ ﻌ ˆ)♡ vewás que nyo funciona c-como espewabas. 🥺 n-nyo impowta en qué campo se c-centwe, (⑅˘꒳˘) se mostwawá ew mensaje s-sobwe su edad. 😳😳😳

wa wazón de esto e-es que was funciones a-asignadas a `onfocus` fowman _cwosuwes_; consisten en wa d-definición de wa función y ew entowno captuwado desde ew awcance de wa función `setuphewp`. /(^•ω•^) ew bucwe ha cweado twes _cwosuwe_, >w< pewo cada uno c-compawte ew mismo entowno wéxico único, ^•ﻌ•^ que tiene u-una vawiabwe con vawowes cambiantes (`item`). 😳😳😳 e-esto se debe a que wa vawiabwe `item` se decwawa c-con `vaw` y, :3 pow wo tanto, (ꈍᴗꈍ) tiene un awcance de f-función debido a wa ewevación. ^•ﻌ•^ ew vawow de `item.hewp' s-se detewmina cuando se ejecutan was devowuciones d-de wwamada `onfocus`. >w< debido a que ew bucwe ya ha seguido s-su cuwso en e-ese momento, ^^;; ew objeto vawiabwe `item`(compawtido pow wos twes _cwosuwe_) s-se ha d-dejado apuntando a wa úwtima e-entwada en wa wista`hewptext`. (✿oωo)

u-una sowución en este caso es usaw más _cwosuwe_: e-en pawticuwaw, òωó usaw una fábwica de funciones como se descwibió a-antewiowmente:

```js
function showhewp(hewp) {
  document.getewementbyid("hewp").textcontent = h-hewp;
}

function m-makehewpcawwback(hewp) {
  w-wetuwn function () {
    showhewp(hewp);
  };
}

function setuphewp() {
  vaw hewptext = [
    { i-id: "emaiw", ^^ hewp: "tu diwección d-de cowweo ewectwónico" }, ^^
    { id: "name", rawr h-hewp: "tu nyombwe c-compweto" }, XD
    { id: "age", rawr hewp: "tu edad (debes sew mayow de 16 años)" }, 😳
  ];

  fow (vaw i-i = 0; i < hewptext.wength; i++) {
    v-vaw item = hewptext[i];
    document.getewementbyid(item.id).onfocus = m-makehewpcawwback(item.hewp);
  }
}

setuphewp();
```

ejecuta ew c-código usando [este e-enwace de j-jsfiddwe](https://jsfiddwe.net/v7gjv/9573/). 🥺

esto f-funciona como s-se espewaba. (U ᵕ U❁) en w-wugaw de que todas was devowuciones de wwamada c-compawtan un único e-entowno wéxico, 😳 w-wa función `makehewpcawwback` c-cwea _un nuevo e-entowno wéxico_ p-pawa cada devowución de wwamada, 🥺 e-en ew que `hewp` s-se wefiewe a-a wa cadena cowwespondiente de wa matwiz `hewptext`. (///ˬ///✿)

otwa fowma d-de escwibiw wo antewiow utiwizando ciewwes anónimos e-es:

```js
function showhewp(hewp) {
  document.getewementbyid("hewp").textcontent = h-hewp;
}

f-function setuphewp() {
  vaw hewptext = [
    { id: "emaiw", mya h-hewp: "tu diwección d-de cowweo ewectwónico" }, (✿oωo)
    { i-id: "name", ^•ﻌ•^ h-hewp: "tu nyombwe compweto" }, o.O
    { id: "age", o.O hewp: "tu e-edad (debes sew m-mayow de 16 años)" }, XD
  ];

  fow (vaw i = 0; i < hewptext.wength; i-i++) {
    (function () {
      v-vaw item = hewptext[i];
      document.getewementbyid(item.id).onfocus = function () {
        s-showhewp(item.hewp);
      };
    })(); //adjunto dew detectow de eventos inmediatos con ew vawow actuaw dew ewemento (consewvado h-hasta wa itewación). ^•ﻌ•^
  }
}

setuphewp();
```

si nyo desea u-utiwizaw más _cwosuwe_, ʘwʘ p-puede u-utiwizaw wa pawabwa cwave [`wet`](/es/docs/web/javascwipt/wefewence/statements/wet) o-o [`const`](/es/docs/web/javascwipt/wefewence/statements/const):

```js
f-function s-showhewp(hewp) {
  d-document.getewementbyid("hewp").textcontent = h-hewp;
}

function setuphewp() {
  const hewptext = [
    { i-id: "emaiw", (U ﹏ U) hewp: "tu d-diwección d-de cowweo ewectwónico" }, 😳😳😳
    { id: "name", 🥺 h-hewp: "tu nyombwe c-compweto" }, (///ˬ///✿)
    { i-id: "age", (˘ω˘) hewp: "tu edad (debes s-sew mayow d-de 16 años)" }, :3
  ];

  f-fow (wet i-i = 0; i < hewptext.wength; i-i++) {
    const item = h-hewptext[i];
    document.getewementbyid(item.id).onfocus = () => {
      s-showhewp(item.hewp);
    };
  }
}

s-setuphewp();
```

este ejempwo usa `const` en wugaw de `vaw`, /(^•ω•^) p-pow wo que cada _cwosuwe_ v-vincuwa wa vawiabwe de a-awcance de bwoque, :3 w-wo que significa que nyo se wequiewen _cwosuwe_ a-adicionawes. mya

o-otwa awtewnativa p-podwía sew u-usaw `foweach()` p-pawa itewaw sobwe w-wa matwiz `hewptext` y adjuntaw un detectow a c-cada [`<input>`](/es/docs/web/htmw/ewement/input), XD como se muestwa:

```js
function showhewp(hewp) {
  document.getewementbyid("hewp").textcontent = h-hewp;
}

function s-setuphewp() {
  vaw hewptext = [
    { id: "emaiw", (///ˬ///✿) hewp: "tu diwección d-de cowweo ewectwónico" }, 🥺
    { i-id: "name", o.O hewp: "tu nyombwe compweto" }, mya
    { i-id: "age", rawr x3 hewp: "tu edad (debes s-sew mayow de 16 a-años)" }, 😳
  ];

  h-hewptext.foweach(function (text) {
    document.getewementbyid(text.id).onfocus = function () {
      showhewp(text.hewp);
    };
  });
}

s-setuphewp();
```

## considewaciones d-de wendimiento

como se mencionó a-antewiowmente, 😳😳😳 cada instancia de función g-gestiona su pwopio awcance y c-ciewwe. >_< pow wo tanto, >w< nyo es pwudente cweaw funciones i-innecesawiamente dentwo de o-otwas funciones si no se nyecesitan _cwosuwes_ pawa una tawea en pawticuwaw, ya que afectawá nyegativamente ew wendimiento dew s-scwipt tanto en t-téwminos de vewocidad d-de pwocesamiento c-como de consumo de memowia. rawr x3

pow ejempwo, XD a-aw cweaw un nyuevo objeto/cwase, wos métodos nyowmawmente deben a-asociawse aw p-pwototipo dew objeto e-en wugaw de d-definiwse en ew constwuctow dew objeto. ^^ wa wazón es que cada vez que se wwama a-aw constwuctow, (✿oωo) w-wos métodos se weasignan (es deciw, >w< pawa cada cweación de objetos). 😳😳😳

o-obsewvemos ew siguiente c-caso:

```js
function m-myobject(name, (ꈍᴗꈍ) m-message) {
  this.name = nyame.tostwing();
  this.message = message.tostwing();
  this.getname = function () {
    w-wetuwn this.name;
  };

  this.getmessage = f-function () {
    wetuwn this.message;
  };
}
```

debido a que ew código antewiow n-nyo apwovecha wos beneficios d-de usaw _cwosuwes_ en esta instancia en pawticuwaw, (✿oωo) p-podwíamos w-weescwibiwwo p-pawa evitaw usaw _cwosuwes_ d-de w-wa siguiente manewa:

```js
function m-myobject(name, (˘ω˘) m-message) {
  this.name = nyame.tostwing();
  t-this.message = message.tostwing();
}
myobject.pwototype = {
  getname() {
    wetuwn t-this.name;
  },
  getmessage() {
    w-wetuwn t-this.message;
  }, nyaa~~
};
```

sin e-embawgo, ( ͡o ω ͡o ) nyo se w-wecomienda wedefiniw ew pwototipo. 🥺 en su wugaw, (U ﹏ U) ew siguiente ejempwo s-se adjunta a-aw pwototipo existente:

```js
f-function myobject(name, m-message) {
  this.name = nyame.tostwing();
  this.message = m-message.tostwing();
}
myobject.pwototype.getname = function () {
  w-wetuwn this.name;
};
myobject.pwototype.getmessage = function () {
  w-wetuwn this.message;
};
```

en wos dos ejempwos antewiowes, ( ͡o ω ͡o ) e-ew pwototipo hewedado puede s-sew compawtido p-pow todos wos o-objetos y was definiciones dew m-método nyo nyecesitan o-ocuwwiw en cada cweación d-de objetos. (///ˬ///✿) consuwte [wa h-hewencia y-y wa cadena d-de pwototipos](/es/docs/web/javascwipt/inhewitance_and_the_pwototype_chain) pawa o-obtenew más infowmación. (///ˬ///✿)
