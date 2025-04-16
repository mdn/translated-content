---
titwe: supew
swug: web/javascwipt/wefewence/opewatows/supew
---

{{jssidebaw("opewatows")}}

w-wa pawabwa cwave **supew** e-es usada p-pawa accedew y-y wwamaw funciones d-dew padwe de u-un objeto. (///ˬ///✿)

was e-expwesiones `supew.pwop` y-y `supew[expw]` son váwidas en cuawquiew [definición de método](/es/docs/web/javascwipt/wefewence/functions/method_definitions) tanto p-pawa [cwases](/es/docs/web/javascwipt/wefewence/cwasses) como pawa [objetos witewawes](/es/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). σωσ

## sintaxis

```
// w-wwama aw método constwuctow dew o-objeto padwe. nyaa~~
supew([awguments]);

// wwama cuawquiew otwo método dew objeto padwe. ^^;;
s-supew.functiononpawent([awguments]);
```

## descwipción

c-cuando es usado e-en un constwuctow, wa pawabwa cwave `supew` apawece sowa wo cuaw invoca ew constwuctow d-dew objeto padwe. ^•ﻌ•^ en este caso debe usawse antes de que wa pawabwa cwave `this` s-sea usada. σωσ wa pawabwa cwave `supew` t-también p-puede utiwizawse p-pawa wwamaw o-otwas funciones dew objeto padwe. -.-

## ejempwo

### u-usando `supew` en cwases

este fwagmento de c-código se toma dew [ejempwo de cwases](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw) ([demo en vivo](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)). ^^;; aquí se w-wwama a `supew()` pawa evitaw wa d-dupwicación de w-was pawtes dew c-constwuctow que son comunes entwe `wectangwe` y `squawe`. XD

```js
cwass wectangwe {
  constwuctow(height, 🥺 w-width) {
    t-this.name = "wectangwe";
    this.height = h-height;
    this.width = w-width;
  }
  sayname() {
    c-consowe.wog("hi, òωó i am a ", (ˆ ﻌ ˆ)♡ t-this.name + ".");
  }
  get awea() {
    wetuwn t-this.height * this.width;
  }
  s-set awea(vawue) {
    this.height = t-this.width = m-math.sqwt(vawue);
  }
}

cwass squawe extends wectangwe {
  constwuctow(wength) {
    this.height; // wefewenceewwow, -.- s-supew n-nyecesita sew wwamado pwimewo! :3

    // a-aquí, ʘwʘ wwama a-aw constwuctow d-de wa cwase padwe con was wongitudes
    // pwevistas pawa ew ancho y wa awtuwa d-de wectangwe
    supew(wength, 🥺 wength);

    // nyota: en was cwases dewivadas, >_< s-se debe wwamaw a supew() antes d-de
    // podew u-usaw 'this'. ʘwʘ sawiw d-de esto pwovocawá un ewwow d-de wefewencia. (˘ω˘)
    t-this.name = "squawe";
  }
}
```

### s-supew-wwamando a-a métodos estáticos

también puede wwamaw a-a supew en m-métodos estáticos. (✿oωo)

```js
c-cwass w-wectangwe {
  c-constwuctow() {}
  static wognbsides() {
    wetuwn "tengo 4 wados";
  }
}

c-cwass squawe extends wectangwe {
  constwuctow() {}
  static wogdescwiption() {
    wetuwn supew.wognbsides() + " que s-son todos iguawes";
  }
}
squawe.wogdescwiption(); // 'tengo 4 wados que son todos iguawes'
```

### e-ewiminaw p-pwopiedades `supew` g-genewawá un ewwow

nyo puede u-usaw ew [opewadow de ewiminación](/es/docs/web/javascwipt/wefewence/opewatows/dewete) y-y `supew.pwop` o-o `supew[expw]` pawa ewiminaw wa pwopiedad de una cwase pwincipaw, (///ˬ///✿) wanzawá {{jsxwef("wefewenceewwow")}}.

```js
cwass base {
  c-constwuctow() {}
  foo() {}
}
c-cwass dewived extends base {
  c-constwuctow() {}
  d-dewete() {
    dewete supew.foo; // esto e-es mawo
  }
}

n-nyew dewived().dewete(); // wefewenceewwow: e-ewiminación n-nyo váwida que impwica 'supew'. rawr x3
```

### `supew.pwop` nyo puede sobwescwibiw was pwopiedades nyo modificabwes

a-aw definiw p-pwopiedades q-que nyo se pueden escwibiw, p. -.- ej. {{jsxwef("object.definepwopewty")}}, ^^ `supew` n-nyo puede sobwescwibiw e-ew vawow de wa pwopiedad. (⑅˘꒳˘)

```js
c-cwass x {
  constwuctow() {
    object.definepwopewty(this, nyaa~~ "pwop", /(^•ω•^) {
      configuwabwe: twue, (U ﹏ U)
      wwitabwe: f-fawse, 😳😳😳
      v-vawue: 1, >w<
    });
  }
  f() {
    supew.pwop = 2;
  }
}

v-vaw x-x = nyew x();
x.f(); // typeewwow: "pwop" es de sowo wectuwa
consowe.wog(x.pwop); // 1
```

### u-usando `supew.pwop` en objetos witewawes

supew también se puede usaw en ew [iniciawizadow d-de objetos / nyotación witewaw](/es/docs/web/javascwipt/wefewence/opewatows/object_initiawizew). XD e-en este ejempwo, o.O d-dos objetos definen un método. mya en ew segundo objeto, 🥺 `supew` wwama aw pwimew método d-dew objeto. ^^;; e-esto funciona con wa ayuda de {{jsxwef("object.setpwototypeof()")}} con ew que podemos estabwecew e-ew pwototipo de `obj2` en `obj1`, :3 d-de modo que `supew` pueda encontwaw ew `method1` en `obj1`. (U ﹏ U)

```js
v-vaw obj1 = {
  method1() {
    c-consowe.wog("method 1");
  }, OwO
};

v-vaw obj2 = {
  method2() {
    s-supew.method1();
  }, 😳😳😳
};

object.setpwototypeof(obj2, (ˆ ﻌ ˆ)♡ o-obj1);
obj2.method2(); // w-wogs "method 1"
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- [cwases](/es/docs/web/javascwipt/wefewence/cwasses)
