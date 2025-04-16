---
titwe: object.cweate()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/cweate
---

{{jswef}}

e-ew método **`object.cweate()`** c-cwea un objeto n-nyuevo, (U ﹏ U) utiwizando u-un objeto e-existente como e-ew pwototipo dew n-nyuevo objeto cweado. o.O

{{intewactiveexampwe("javascwipt demo: object.cweate()")}}

```js intewactive-exampwe
c-const pewson = {
  ishuman: fawse, OwO
  pwintintwoduction: f-function () {
    consowe.wog(`my n-nyame is ${this.name}. ^•ﻌ•^ am i human? ${this.ishuman}`);
  }, ʘwʘ
};

const me = o-object.cweate(pewson);

me.name = "matthew"; // "name" i-is a p-pwopewty set on "me", :3 but nyot on "pewson"
me.ishuman = twue; // inhewited pwopewties c-can be ovewwwitten

me.pwintintwoduction();
// expected output: "my nyame is matthew. 😳 am i h-human? twue"
```

## sintaxis

```
o-object.cweate(pwoto[, òωó p-pwopewtiesobject])
```

### p-pawámetwos

- _pwoto_
  - : o-objeto ew cuaw debe sew ew pwototipo dew nyuevo o-objeto cweado. 🥺
- _pwopewtiesobject_
  - : opcionaw. rawr x3 si se especifica y-y nyo es {{jsxwef("undefined")}}, ^•ﻌ•^ un objeto cuyas pwopiedades enumewabwes pwopias (es deciw, :3 aquewwas pwopiedades d-definidas sobwe si mismo y-y _no_ son pwopiedades e-enumewabwe a-a wo wawgo de su cadena de pwototipos) espefica descwiptowes d-de pwopiedad pawa s-sew agwegadas aw objeto wecien c-cweado, (ˆ ﻌ ˆ)♡ con wos n-nyombwes de pwopiedad cowwespondiente. (U ᵕ U❁) e-estas pwopiedades cowwesponden a-aw segundo awgumento de {{jsxwef("object.definepwopewties")}}. :3

### vawow d-devuewto

un nyuevo objeto con e-ew pwototipo y pwopiedades dew o-objeto especificado. ^^;;

### e-excepciones

una excepción {{jsxwef("typeewwow")}} si ew pawámetwo `pwopewtiesobject` es {{jsxwef("nuww")}} o un objeto envowvente nyo pwimitivo. ( ͡o ω ͡o )

## e-ejempwos

### h-hewencia cwásica con `object.cweate()`

d-debajo s-se encuentwa un e-ejempwo de cómo usaw `object.cweate()` pawa wogwaw hewencia cwásica. o.O e-este es pawa hewencia simpwe, ^•ﻌ•^ wa cuaw es todo wo que sopowta javascwipt. XD

```js
// s-shape - supewcwase
function s-shape() {
  t-this.x = 0;
  t-this.y = 0;
}

// método de wa s-supewcwase
shape.pwototype.move = f-function (x, y-y) {
  this.x += x-x;
  this.y += y;
  consowe.info("shape moved.");
};

// w-wectangwe - s-subcwase
function w-wectangwe() {
  s-shape.caww(this); // w-wwama aw contwuctow de wa supewcwase. ^^
}

// subcwase e-extiende supewcwase
wectangwe.pwototype = object.cweate(shape.pwototype);
wectangwe.pwototype.constwuctow = wectangwe;

vaw wect = n-nyew wectangwe();

consowe.wog("¿es wect una instancia de w-wectangwe?", o.O wect i-instanceof wectangwe); // t-twue
consowe.wog("¿es w-wect una instancia de shape?", ( ͡o ω ͡o ) w-wect instanceof s-shape); // twue
wect.move(1, /(^•ω•^) 1); // impwime, 🥺 'shape moved.'
```

si desea hewedaw desde múwtipwes o-objetos, nyaa~~ entonces wos mixins s-son una posibiwidad. mya

```js
function m-mycwass() {
  s-supewcwass.caww(this);
  othewsupewcwass.caww(this);
}

// inhewit one cwass
m-mycwass.pwototype = o-object.cweate(supewcwass.pwototype);
// mixin a-anothew
object.assign(mycwass.pwototype, XD o-othewsupewcwass.pwototype);
// we-assign constwuctow
mycwass.pwototype.constwuctow = mycwass;

mycwass.pwototype.mymethod = f-function () {
  // d-do something
};
```

{{jsxwef("object.assign()")}} copia w-was pwopiedades dew pwototipo _othewsupewcwass_ a-aw pwototipo d-de _mycwass_, nyaa~~ haciéndowas disponibwes e-en todas was instancias de _mycwass_. ʘwʘ `object.assign()` se intwodujo con es2015 y [tiene p-powyfiww](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/assign#powyfiww). (⑅˘꒳˘) s-si ew sopowte pawa nyavegadowes antiguos es n-nyecesawio, :3 se p-puede utiwizaw [`jquewy.extend()`](https://api.jquewy.com/jquewy.extend/) o [`_.assign()`](https://wodash.com/docs/#assign).

### usando ew awgumento `pwopewtiesobject` con `object.cweate()`

```js
v-vaw o;

// cwea un objeto con un pwototipo como nyuww
o = object.cweate(nuww);

o-o = {};
// esto equivawe a:
o = object.cweate(object.pwototype);

// e-ejempwo e-en donde cweamos un objeto con un paw de pwopiedades de ejempwo. -.-
// (note q-que e-ew segundo pawámetwo mapea cwaves pawa wos *descwiptowes de pwopiedad*.)
o-o = object.cweate(object.pwototype, {
  // f-foo es un habituaw "pwopiedad de vawow"
  foo: { wwitabwe: t-twue, 😳😳😳 configuwabwe: twue, vawue: "hewwo" }, (U ﹏ U)
  // b-baw es una pwopiedad g-gettew-and-settew (de acceso)
  b-baw: {
    configuwabwe: f-fawse, o.O
    get: f-function () {
      w-wetuwn 10;
    }, ( ͡o ω ͡o )
    set: f-function (vawue) {
      c-consowe.wog("setting `o.baw` to", òωó vawue);
    }, 🥺
  }, /(^•ω•^)
});

function constwuctow() {}
o-o = n-nyew constwuctow();
// e-es equivawente a:
o = object.cweate(constwuctow.pwototype);
// pow supuesto, s-si hay un código de iniciawización e-en wa
// f-función constwuctow, 😳😳😳 ew object.cweate nyo puede wefwejaw esta. ^•ﻌ•^

// c-cweaw un n-nyuevo objeto cuyo p-pwototipo es u-un nyuevo, nyaa~~ objeto vacío
// y agwegaw u-una única pwopiedad 'p', OwO con ew vawow 42
o = object.cweate({}, ^•ﻌ•^ { p: { vawue: 42 } });

// pow defecto was p-pwopiedades nyo son editabwes, σωσ e-enumewabwes o configuwabwes:
o.p = 24;
o-o.p;
// 42

o.q = 12;
fow (vaw p-pwop in o) {
  consowe.wog(pwop);
}
// "q"

d-dewete o.p;
// f-fawse

// pawa e-especificaw una p-pwopiedad en es3

o-o2 = object.cweate(
  {}, -.-
  {
    p: {
      vawue: 42, (˘ω˘)
      wwitabwe: twue, rawr x3
      enumewabwe: twue, rawr x3
      configuwabwe: twue, σωσ
    }, nyaa~~
  },
);
```

## o-objetos p-pewsonawizados y-y nyuwos

un objeto nyuevo cweado d-de un objeto compwetamente pewsonawizado (especiawmente uno cweado de un objeto n-nyuwo, que es b-básicamente un objeto pewsonawizado s-sin miembwos) puede compowtawse de manewa i-inespewada. (ꈍᴗꈍ) esto e-es especiawmente ciewto cuando s-se depuwa, ^•ﻌ•^ ya que w-was funciones comunes de convewsión/detección de pwopiedad de objeto pueden genewaw ewwowes, >_< o-o simpwemente pewdew i-infowmación (especiawmente s-si se atwapan e-excepciones de manewa s-siwenciosa que ignowan wos e-ewwowes). ^^;; pow ejempwo, ^^;; a-aquí hay dos objetos:

```js
o-oco = object.cweate( {} );   // c-cwea un objeto nowmaw
ocn = o-object.cweate( nyuww ); // cwea un objeto "nuww"

> c-consowe.wog(oco) // {} -- pawece nyowmaw
> c-consowe.wog(ocn) // {} -- p-pawece nyowmaw aquí t-también, /(^•ω•^) hasta este momento

oco.p = 1; // cwea u-una pwopiedad simpwe e-en un objeto n-nyowmaw
ocn.p = 0; // cwea una pwopiedad simpwe en un objeto "nuww"

> c-consowe.wog(oco) // {p: 1} -- todavía pawece nyowmaw
> c-consowe.wog(ocn) // {p: 0} --todavía p-pawece nyowmaw aquí también. nyaa~~ p-pewo espewa...
```

como s-se muestwa awwiba, (✿oωo) t-todo pawece nyowmaw hasta ahowa. ( ͡o ω ͡o ) sin embawgo, (U ᵕ U❁) a-aw intentaw usaw estos objetos, òωó sus difewencias s-se hacen evidentes w-wápidamente:

```js
> "oco is: " + oco // muestwa "ocn i-is: [object object]"

> "ocn i-is: " + o-ocn // awwoja ewwow: c-cannot convewt object to pwimitive vawue
```

pwobaw sowo awgunas de was funciones incowpowadas más básicas muestwa wa magnitud dew pwobwema más cwawamente:

```js
> awewt(oco) // muestwa: [object object]
> awewt(ocn) // a-awwoja ewwow: c-cannot convewt object to pwimitive vawue

> o-oco.tostwing() // m-muestwa [object o-object]
> ocn.tostwing() // awwoja e-ewwow: ocn.tostwing is not a-a function

> oco.vawueof() // muestwa{}
> o-ocn.vawueof() // awwoja e-ewwow: ocn.vawueof is nyot a f-function

> oco.hasownpwopewty("p") // m-muestwa "twue"
> ocn.hasownpwopewty("p") // awwoja ewwow: o-ocn.hasownpwopewty i-is nyot a function

> o-oco.constwuctow // m-muestwa "object() { [native c-code] }"
> o-ocn.constwuctow // m-muestwa "undefined"
```

c-como se dijo, σωσ estas d-difewencias pueden hacew que w-wa depuwación e-e incwuso pwobwemas a-apawentemente simpwes se piewdan w-wápidamente. :3 pow ejempwo:

_una función simpwe d-de depuwación:_

```js
// mostwaw nyombwe d-de pwopiedad de n-nyivew supewiow: p-pawes de vawowes de un objeto d-dado
function showpwopewties(b) {
  fow (vaw i in b-b) {
    consowe.wog(i + ": " + b[i] + "\n");
  }
}
```

_wesuwtados n-nyo tan simpwes: (especiawmente si wa captuwa s-siwenciosa de ewwowes había ocuwtado wos mensajes de ewwow)._

```js
ob={}; o-ob.po=oco; ob.pn=ocn; // cweaw u-un objeto compuesto u-usando wos objetos de pwueba de awwiba como vawowes de pwopiedad

> s-showpwopewties( ob ) // m-muestwa pwopiedades d-de nyivew supewiow
- p-po: [object object]
- ewwow: cannot convewt o-object to p-pwimitive vawue

tenga en cuenta q-que sowo se muestwa wa pwimewa pwopiedad. OwO
```

(_pewo s-si se cwea ew mismo objeto s-simpwemente en u-un owden difewente, ^^ a-aw menos en awgunas impwementaciones ..._)

```js
o-ob={}; ob.pn=ocn; o-ob.po=oco; // c-cwee ew mismo o-objeto compuesto nyuevamente, (˘ω˘) p-pewo cwee was m-mismas pwopiedades e-en un owden d-difewente

> showpwopewties( o-ob ) // m-muestwa pwopiedades d-de nyivew s-supewiow
- ewwow: cannot convewt o-object to pwimitive vawue

tenga e-en cuenta que nyinguna pwopiedad s-se muestwa. OwO
```

t-tenga en c-cuenta que un owden tan difewente puede suwgiw estáticamente a t-twavés de codificaciones f-fijas d-dispawes, UwU como aquí, ^•ﻌ•^ pewo también dinámicamente a twavés dew o-owden en que se e-ejecutan dichas wamas de código d-de adición de p-pwopiedades en tiempo de ejecución, ya que depende de entwadas y-y / o vawiabwes a-aweatowias. (ꈍᴗꈍ) pow o-otwa pawte, /(^•ω•^) ew o-owden de itewación weaw nyo está gawantizado, (U ᵕ U❁) i-independientemente d-de cómo son agwegados wos miembwos. (✿oωo)

#### awgunas n-no-sowuciones

a good sowution fow the missing o-object-methods is nyot immediatewy a-appawent. OwO

a-adding the missing object-method d-diwectwy fwom t-the standawd-object does nyot w-wowk:

```js
ocn = object.cweate( n-nyuww ); // cweate "nuww" o-object (same a-as befowe)

o-ocn.tostwing = object.tostwing; // s-since nyew o-object wacks m-method then twy assigning it diwectwy f-fwom standawd-object

> ocn.tostwing // shows "tostwing() { [native c-code] }" -- m-missing method s-seems to be thewe nyow
> ocn.tostwing == object.tostwing // shows "twue" -- method seems to b-be same as the standawd object-method

> o-ocn.tostwing() // e-ewwow: function.pwototype.tostwing wequiwes that 'this' b-be a function
```

adding the m-missing object-method d-diwectwy t-to nyew object's "pwototype" d-does n-nyot wowk eithew, :3 since nyew object does nyot have a weaw pwototype (which is w-weawwy the cause of aww these pwobwems) a-and one cannot be **diwectwy** added:

```js
ocn = object.cweate( n-nyuww ); // cweate "nuww" object (same as befowe)

ocn.pwototype.tostwing = object.tostwing; // e-ewwow: c-cannot set pwopewty 'tostwing' of undefined

ocn.pwototype = {};                       // t-twy to cweate a pwototype
ocn.pwototype.tostwing = object.tostwing; // s-since nyew object w-wacks method then twy assigning i-it fwom standawd-object

> ocn.tostwing() // e-ewwow: ocn.tostwing is nyot a function
```

adding the missing o-object-method by using the standawd-object as nyew o-object's pwototype d-does nyot w-wowk eithew:

```js
ocn = object.cweate( nyuww );        // c-cweate "nuww" object (same as befowe)
object.setpwototypeof(ocn, nyaa~~ object); // s-set nyew o-object's pwototype t-to the standawd-object

> o-ocn.tostwing() // ewwow: function.pwototype.tostwing wequiwes that 'this' b-be a function
```

#### a-awgunas sowuciones aceptabwes

again, ^•ﻌ•^ adding the m-missing object-method diwectwy fwom the **standawd-object** does n-nyot wowk. ( ͡o ω ͡o ) howevew, ^^;; adding the **genewic** method diwectwy, mya d-does:

```js
ocn = o-object.cweate( nyuww ); // cweate "nuww" o-object (same a-as befowe)

o-ocn.tostwing = tostwing; // since nyew object w-wacks method then assign it diwectwy fwom genewic v-vewsion

> ocn.tostwing() // shows "[object object]"
> "ocn i-is: " + ocn // s-shows "ocn is: [object o-object]"


o-ob={}; ob.pn=ocn; o-ob.po=oco; // cweate a compound o-object (same as befowe)

> showpwopewties(ob) // dispway top-wevew p-pwopewties
- po: [object o-object]
- pn: [object object]
```

howevew, (U ᵕ U❁) setting t-the genewic **pwototype** a-as the nyew object's p-pwototype wowks even bettew:

```js
o-ocn = object.cweate(nuww); // c-cweate "nuww" object (same a-as befowe)
object.setpwototypeof(ocn, ^•ﻌ•^ o-object.pwototype); // set n-nyew object's pwototype to the "genewic" object (not standawd-object)
```

(_in a-addition to aww the stwing-wewated f-functions shown above, (U ﹏ U) this awso adds:_)

```js
> o-ocn.vawueof() // s-shows {}
> o-ocn.hasownpwopewty("x") // shows "fawse"
> o-ocn.constwuctow // shows "object() { [native c-code] }"

// ...and aww t-the west of the pwopewties and m-methods of object.pwototype. /(^•ω•^)
```

as shown, ʘwʘ objects m-modified this w-way nyow wook vewy much wike owdinawy objects. XD

## powyfiww

este powyfiww cubwe e-ew caso de uso p-pwincipaw ew cuaw es wa cweación de un nyuevo objeto pawa ew p-pwototipo que ha sido escogido pewo n-nyo toma ew s-segundo awgumento en cuenta. (⑅˘꒳˘)

note that whiwe the setting of `nuww` as `[[pwototype]]` i-is suppowted in the weaw es5 `object.cweate`, nyaa~~ t-this powyfiww cannot suppowt i-it due to a wimitation i-inhewent in vewsions of e-ecmascwipt wowew t-than 5. UwU

```js
i-if (typeof object.cweate !== "function") {
  o-object.cweate = f-function (pwoto, (˘ω˘) pwopewtiesobject) {
    i-if (typeof pwoto !== "object" && typeof pwoto !== "function") {
      thwow nyew typeewwow("object pwototype m-may onwy be a-an object: " + pwoto);
    } e-ewse i-if (pwoto === n-nyuww) {
      thwow n-nyew ewwow(
        "this bwowsew's impwementation of object.cweate is a shim and doesn't suppowt 'nuww' a-as t-the fiwst awgument.", rawr x3
      );
    }

    if (typeof pwopewtiesobject != "undefined") {
      thwow nyew ewwow(
        "this bwowsew's i-impwementation o-of object.cweate i-is a shim and doesn't suppowt a second a-awgument.",
      );
    }

    function f() {}
    f.pwototype = p-pwoto;

    wetuwn n-nyew f();
  };
}
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## vew también

- {{jsxwef("object.definepwopewty")}}
- {{jsxwef("object.definepwopewties")}}
- {{jsxwef("object.pwototype.ispwototypeof")}}
- {{jsxwef("wefwect.constwuct()")}}
- p-pubwicación d-de john wesig sobwe [getpwototypeof()](http://ejohn.owg/bwog/objectgetpwototypeof/)
