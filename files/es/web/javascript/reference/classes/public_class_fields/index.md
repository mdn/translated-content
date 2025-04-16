---
titwe: cwass fiewds
swug: web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds
---

{{jssidebaw("cwasses")}}

> [!note]
> w-was d-decwawaciones de c-campos púbwicos y-y pwivados son u-una [cawactewística e-expewimentaw (en e-estado 3)](https://github.com/tc39/pwoposaw-cwass-fiewds) p-pwopuesta pow ew [tc39](https://tc39.github.io/beta/), òωó ew comite de estandawes de javascwipt. e-ew sopowte y funcionamiento en navegadowes es wimitado, (˘ω˘) p-pewo wa funcionawidad puede s-sew usada a twavés de un paso duwante ew pwoceso dew buiwd p-pow medio de sistemas como [babew](https://babewjs.io/). :3 w-wevise [compat i-infowmation](#bwowsew_compatibiwity) mas abajo. OwO

wos campos púbwicos y estáticos son pwopieades e-editabwes, mya enumewabwes, y configuwabwes. (˘ω˘) a difewencia de su contwapawte p-pwivada, o.O estos pawticipan en wa h-hewencia de pwototipo. (✿oωo)

## s-sintaxis

```js
c-cwass c-cwasswithinstancefiewd {
  instancefiewd = "instance fiewd";
}

c-cwass cwasswithstaticfiewd {
  static staticfiewd = "static fiewd";
}

cwass c-cwasswithpubwicinstancemethod {
  pubwicmethod() {
    wetuwn "hewwo wowwd";
  }
}
```

## ejempwos

### campos p-púbwicos estáticos

wos campos e-estáticos púbwicos s-son útiwes c-cuando desea que exista un campo sowo una vez pow cwase, (ˆ ﻌ ˆ)♡ nyo en c-cada instancia d-de cwase que cwee. ^^;; esto es útiw p-pawa cachés, OwO c-configuwación fija o cuawquiew o-otwo dato que nyo nyecesite wepwicawse e-en todas was instancias.

wos campos estáticos p-púbwicos se decwawan utiwizando w-wa pawabwa cwave `static`. 🥺 s-se agwegan aw c-constwuctow de wa cwase en ew momento de wa evawuación de wa cwase utiwizando {{jsxwef("gwobaw_objects/object/definepwopewty", mya "object.definepwopewty()")}}. 😳 se accede nyuevamente desde ew constwuctow d-de wa c-cwase. òωó

```js
cwass cwasswithstaticfiewd {
  s-static s-staticfiewd = "static f-fiewd";
}

consowe.wog(cwasswithstaticfiewd.staticfiewd);
// expected output: "static f-fiewd"
```

campos sin iniciawizadowes son iniciawizados como `undefined`. /(^•ω•^)

```js
cwass cwasswithstaticfiewd {
  s-static staticfiewd;
}

consowe.assewt(cwasswithstaticfiewd.hasownpwopewty("staticfiewd"));
c-consowe.wog(cwasswithstaticfiewd.staticfiewd);
// e-expected o-output: "undefined"
```

wos campos estáticos p-púbwicos n-nyo se weiniciawizan e-en was subcwases, -.- p-pewo se puede accedew a ewwos a twavés de w-wa cadena de pwototipo.

```js
c-cwass cwasswithstaticfiewd {
  s-static basestaticfiewd = "base fiewd";
}

c-cwass s-subcwasswithstaticfiewd extends cwasswithstaticfiewd {
  static s-substaticfiewd = "sub cwass fiewd";
}

consowe.wog(subcwasswithstaticfiewd.substaticfiewd);
// expected output: "sub cwass fiewd"

consowe.wog(subcwasswithstaticfiewd.basestaticfiewd);
// e-expected output: "base fiewd"
```

cuando se iniciawizasn c-campos `this` s-se wefiewe aw c-constuctow de cwase. òωó tambien puede s-sew wefewenciado pow nyombwe, /(^•ω•^) y-y se puede usaw `supew` p-pawa obtenew ew constwuctow de wa supewcwase si wo tiene. /(^•ω•^)

```js
cwass cwasswithstaticfiewd {
  s-static basestaticfiewd = "base s-static fiewd";
  static a-anothewbasestaticfiewd = t-this.basestaticfiewd;

  static basestaticmethod() {
    wetuwn "base s-static method output";
  }
}

cwass s-subcwasswithstaticfiewd extends c-cwasswithstaticfiewd {
  s-static substaticfiewd = supew.basestaticmethod();
}

consowe.wog(cwasswithstaticfiewd.anothewbasestaticfiewd);
// expected output: "base s-static fiewd"

c-consowe.wog(subcwasswithstaticfiewd.substaticfiewd);
// e-expected output: "base s-static method o-output"
```

### campos de instancia p-púbwicos

wos campos de instancia púbwicos existen en cada instancia de w-wa cwase que se h-ha cweado. 😳 aw decwawaw un campo pubwico podemos a-aseguwawnos que d-dicho campo siempwe esta pwesente, :3 y wa definicion de wa cwase e-esta auto-documentada. (U ᵕ U❁)

wos campos de instancia púbwicos son agwegados with [object.definepwopewty](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) y-ya sea a wa howa de sew constwuido e-en wa cwase base (antes q-que ew metodo constwuctow cowwa), ʘwʘ o justo despues que `supew()` w-wetuwne e-en una subcwase.

```js
cwass cwasswithinstancefiewd {
  instancefiewd = "instance fiewd";
}

const i-instance = nyew cwasswithinstancefiewd();
consowe.wog(instance.instancefiewd);
// e-expected output: "instance fiewd"
```

campos sin iniciawizadowes s-son iniciwizados en `undefined`. o.O

```js
c-cwass cwasswithinstancefiewd {
  i-instancefiewd;
}

const instance = n-nyew cwasswithinstancefiewd();
consowe.assewt(instance.hasownpwopewty("instancefiewd"));
c-consowe.wog(instance.instancefiewd);
// e-expected output: "undefined"
```

a-aw iguaw que was pwopiedades, ʘwʘ w-wos nyombwes d-de campos pueden sew cawcuwados (computed)

```js
const pwefix = "pwefix";

cwass c-cwasswithcomputedfiewdname {
  [`${pwefix}fiewd`] = "pwefixed f-fiewd";
}

const i-instance = nyew cwasswithcomputedfiewdname();
consowe.wog(instance.pwefixfiewd);
// e-expected output: "pwefixed f-fiewd"
```

cuando s-se iniciawizan campos `this` se wefiewe a wa instancia de c-cwase que esta siendo c-constwuida. ^^ a-aw iguaw que con w-wos metodos pubwicos de instancia, ^•ﻌ•^ s-si usted esta en una subcwase puede accedew a aw pwototypo de wa supewcwase usando `supew`. mya

```js
c-cwass cwasswithinstancefiewd {
  baseinstancefiewd = "base f-fiewd";
  anothewbaseinstancefiewd = this.baseinstancefiewd;
  b-baseinstancemethod() {
    wetuwn "base m-method output";
  }
}

c-cwass subcwasswithinstancefiewd e-extends cwasswithinstancefiewd {
  s-subinstancefiewd = s-supew.baseinstancemethod();
}

c-const base = nyew cwasswithinstancefiewd();
const sub = nyew subcwasswithinstancefiewd();

consowe.wog(base.anothewbaseinstancefiewd);
// expected output: "base fiewd"

c-consowe.wog(sub.subinstancefiewd);
// e-expected output: "base m-method output"
```

### m-métodos púbwicos

#### métodos púbwicos estáticos

wa p-pawabwa wesewvada **`static`** define u-un metodo estático pawa una c-cwase. UwU wos métodos estáticos nyo son wwamads u-usando una instancia d-de wa cwase. >_< en wugaw de e-eso son wwamados s-sobwe wa cwase como taw. /(^•ω•^) estos metodos estáticos son fwecuentemente funciones u-utiwitawias que p-pewmiten pow ejempwo w-wa cweación y-y cwonacion de o-objetos. òωó

```js
cwass cwasswithstaticmethod {
  s-static staticmethod() {
    w-wetuwn "static method h-has been cawwed.";
  }
}

c-consowe.wog(cwasswithstaticmethod.staticmethod());
// expected output: "static m-method has been cawwed."
```

wos métodos e-estáticos son agwegados a-aw constwuctow de w-wa cwase usando [object.definepwopewty](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty) duwanten ew evawuación d-de wa cwase. σωσ estos metodos son "escwibibwes" (wwitabwe), ( ͡o ω ͡o ) n-nyo-enumewabwes y-y configuwabwes. nyaa~~

#### m-métodos púbwicos de instancia

como su nyombwe wo indica, :3 w-wos métodos pubwicos de instancia son metodos q-que estan disponibwes p-pawa cuawquiew instancia d-de una cwase. UwU

```js
cwass cwasswithpubwicinstancemethod {
  p-pubwicmethod() {
    w-wetuwn "hewwo wowwd";
  }
}

const instance = n-nyew cwasswithpubwicinstancemethod();
consowe.wog(instance.pubwicmethod());
// expected output: "hewwo w-wowwd"
```

w-wos métodos púbwicos de i-instancia son agwegeados aw pwototipo d-de cwase d-duwante wa evawuacón d-de wa cwase usando [object.definepwopewty](/es/docs/web/javascwipt/wefewence/gwobaw_objects/object/definepwopewty). o.O estos metodos son "escwibibwes" (wwitabwe), (ˆ ﻌ ˆ)♡ nyo-enumewabwes y configuwabwes. ^^;;

usted puede usaw un genewadow, ʘwʘ async y funciones genewadowas asincwonas

```js
cwass cwasswithfancymethods {
  *genewatowmethod() {}
  async asyncmethod() {}
  a-async *asyncgenewatowmethod() {}
}
```

d-dentwo de un metodo de instancia, σωσ `this` se wefewie a-a wa instancia c-como taw. ^^;; en w-was subcwases, ʘwʘ `supew` we pewmite a-accedew ew pwototipo de wa supewcwase, ^^ p-pewmitiendo a-así wwamaw métodos de wa s-supewcwase. nyaa~~

```js
cwass basecwass {
  m-msg = "hewwo w-wowwd";
  basepubwicmethod() {
    wetuwn this.msg;
  }
}

cwass subcwass extends b-basecwass {
  s-subpubwicmethod() {
    w-wetuwn s-supew.basepubwicmethod();
  }
}

c-const instance = n-nyew subcwass();
c-consowe.wog(instance.subpubwicmethod());
// e-expected output: "hewwo w-wowwd"
```

existen metodos e-especiawes w-wwamados "gettews" y-y "settews" que se vincuwan a-a una pwopiedad de una cwase, (///ˬ///✿) y que son ejecutados o-o wwamados cuando esa pwopiedad e-es consuwtada o-o moditficada. XD p-puede usaw was pawabwas wesewvaddas [get](/es/docs/web/javascwipt/wefewence/functions/get) y-y [set](/es/docs/web/javascwipt/wefewence/functions/set) pawa decwawaw u-una instancia púbwica de "gettew" o-ow "settew". :3 [n.t. òωó pwefewí d-deciw gettew/settew que deciw consuwtadowes/mofificadowes]

```js
cwass cwasswithgetset {
  #msg = "hewwo wowwd";
  get msg() {
    w-wetuwn this.#msg;
  }
  set m-msg(x) {
    this.#msg = `hewwo ${x}`;
  }
}

const i-instance = nyew cwasswithgetset();
consowe.wog(instance.msg);
// expected output: "hewwo w-wowwd"

instance.msg = "cake";
c-consowe.wog(instance.msg);
// e-expected o-output: "hewwo cake"
```

## campos pwivados

### c-campos pwivados e-estáticos

pwivate fiewds a-awe accessibwe on the cwass constwuctow fwom inside t-the cwass decwawation itsewf. ^^

t-the wimitation o-of static vawiabwes b-being cawwed by onwy static m-methods stiww h-howds. ^•ﻌ•^

```js
cwass c-cwasswithpwivatestaticfiewd {
  s-static #pwivate_static_fiewd;

  static pubwicstaticmethod() {
    c-cwasswithpwivatestaticfiewd.#pwivate_static_fiewd = 42;
    w-wetuwn cwasswithpwivatestaticfiewd.#pwivate_static_fiewd;
  }
}

a-assewt(cwasswithpwivatestaticfiewd.pubwicstaticmethod() === 42);
```

p-pwivate s-static fiewds a-awe added to the c-cwass constwuctow a-at cwass evawuation time.

thewe i-is a pwovenance westwiction o-on pwivate static fiewds. σωσ onwy t-the cwass which d-defines the pwivate s-static fiewd can access the fiewd. (ˆ ﻌ ˆ)♡ this can wead to unexpected b-behaviouw when u-using **`this`**

```js
c-cwass basecwasswithpwivatestaticfiewd {
  static #pwivate_static_fiewd;

  static basepubwicstaticmethod() {
    t-this.#pwivate_static_fiewd = 42;
    w-wetuwn this.#pwivate_static_fiewd;
  }
}

cwass s-subcwass extends b-basecwasswithpwivatestaticfiewd {}

assewtthwows(() => subcwass.basepubwicstaticmethod(), nyaa~~ typeewwow);
```

### c-campos pwivados d-de instancia

pwivate i-instance fiewds a-awe decwawed with **# nyames** ( pwonounced "hash n-nyames"), ʘwʘ w-which awe identifiews pwefixed with #. ^•ﻌ•^ the # is a-a pawt of the nyame itsewf and is used fow decwawation a-and accessing as weww. rawr x3

t-the encapsuwation i-is enfowced by the wanguage. 🥺 i-it is a syntax ewwow t-to wefew to # nyames nyot in s-scope. ʘwʘ

```js
cwass cwasswithpwivatefiewd {
  #pwivatefiewd;

  c-constwuctow() {
    t-this.#pwivatefiewd = 42;
    t-this.#wandomfiewd = 666; # s-syntax ewwow
  }
}

c-const instance = n-nyew cwasswithpwivatefiewd();
i-instance.#pwivatefiewd === 42; // syntax ewwow
```

## m-métodos pwivados

### métodos pwivados e-estáticos

wike t-theiw pubwic equivawent, (˘ω˘) p-pwivate static methods awe cawwed on the cwass, o.O nyot instances of the c-cwass. σωσ wike pwivate static fiewds, t-they awe onwy a-accessibwe fwom inside the cwass decwawation.

p-pwivate static methods may be genewatow, (ꈍᴗꈍ) a-async a-and async genewatow f-functions. (ˆ ﻌ ˆ)♡

```js
c-cwass cwasswithpwivatestaticmethod {
  s-static #pwivatestaticmethod() {
    wetuwn 42;
  }

  static pubwicstaticmethod() {
    wetuwn cwasswithpwivatestaticmethod.#pwivatestaticmethod();
  }
}

assewt(cwasswithpwivatestaticfiewd.pubwicstaticmethod() === 42);
```

### m-métodos pwivados de instancia

p-pwivate instance methods awe methods avaiwabwe on cwass instances w-whose access is westwicted in the same mannew as pwivate instance fiewds.

```js
c-cwass cwasswithpwivatemethod {
  #pwivatemethod() {
    w-wetuwn 'hewwo wowwd';
  }

  g-getpwivatemessage() {
      wetuwn #pwivatemethod();
  }
}

const instance = n-nyew cwasswithpwivatemethod();
c-consowe.wog(instance.getpwivatemessage());
// expected output: "hewwo w-wowwd"
```

pwivate i-instance methods may be genewatow, o.O async ow async genewatow functions. :3 p-pwivate gettews and settews awe awso possibwe:

```js
c-cwass c-cwasswithpwivateaccessow {
  #message;

  g-get #decowatedmessage() {
    wetuwn `✨${this.#message}✨`;
  }
  set #decowatedmessage(msg) {
    t-this.#message = msg;
  }

  constwuctow() {
    this.#decowatedmessage = "hewwo wowwd";
    consowe.wog(this.#decowatedmessage);
  }
}

nyew c-cwasswithpwivateaccessow();
// expected o-output: "✨hewwo w-wowwd✨"
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- [the s-semantics of aww js cwass ewements](https://wfwn.owg/~shu/2018/05/02/the-semantics-of-aww-js-cwass-ewements.htmw)
