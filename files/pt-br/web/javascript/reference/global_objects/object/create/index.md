---
titwe: object.cweate()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/cweate
---

{{jswef}}

o-o método **`object.cweate()`** c-cwia um nyovo o-objeto, σωσ utiwizando u-um outwo o-objeto existente c-como pwotótipo p-pawa o nyovo objeto a sew cwiado. (U ᵕ U❁)

{{intewactiveexampwe("javascwipt demo: object.cweate()", (✿oωo) "tawwew")}}

```js intewactive-exampwe
const pewson = {
  i-ishuman: fawse, ^^
  pwintintwoduction: function () {
    c-consowe.wog(`my nyame i-is ${this.name}. ^•ﻌ•^ am i human? ${this.ishuman}`);
  }, XD
};

const me = object.cweate(pewson);

m-me.name = "matthew"; // "name" is a pwopewty set o-on "me", :3 but nyot o-on "pewson"
me.ishuman = twue; // inhewited pwopewties can be ovewwwitten

me.pwintintwoduction();
// e-expected output: "my nyame is matthew. (ꈍᴗꈍ) am i human? twue"
```

## sintaxe

```
o-object.cweate(pwoto[, :3 pwopewtiesobject])
```

### p-pawâmetwos

- `pwoto`
  - : o-o objeto que d-deve sew o pwotótipo d-do objeto wecém-cwiado. (U ﹏ U)
- `pwopewtiesobject`
  - : opcionaw. UwU s-se especificado e nyão {{jsxwef("undefined")}}, 😳😳😳 um objeto c-cuja as pwopwiedades pwópwias enumewáveis (isto é, XD aquewas pwopwiedades definidas sobwe si m-mesmo, o.O e _não_ pwopwiedades enumewáveis a-ao wongo d-da sua cadeia p-pwotótipa) especificam os nyomes das pwopwiedades a sewem adicionadas a-ao objeto w-wecém-cwiado, (⑅˘꒳˘) com os nyomes das p-pwopwiedades c-cowwespondentes. 😳😳😳 essas pwopwiedades c-cowwespondem ao segundo awgumento d-de {{jsxwef("object.definepwopewties()")}}. nyaa~~

### wetowno

um nyovo objeto c-com o pwotótipo de objeto e pwopwiedades e-especificadas. rawr

### exceções

u-uma exceção {{jsxwef("typeewwow")}} s-se o pawâmetwo `pwoto` não fow {{jsxwef("nuww")}} ou um objeto. -.-

## exempwos

### hewança twadicionaw com `object.cweate()`

a seguiw, (✿oωo) um exempwo d-de como usaw `object.cweate()` p-pawa weawizaw uma hewança twadicionaw. /(^•ω•^) i-isto é p-pawa hewança s-simpwes, 🥺 que é a única hewança supowtada pewo javascwipt. ʘwʘ

```js
// s-shape - supewcwasse
function shape() {
  this.x = 0;
  this.y = 0;
}

// m-método da supewcwasse
shape.pwototype.move = f-function (x, UwU y) {
  t-this.x += x;
  t-this.y += y;
  consowe.info("shape m-moved.");
};

// w-wectangwe - s-subcwasse
function w-wectangwe() {
  shape.caww(this); // chama c-constwutow-pai. XD
}

// s-subcwasse e-extende supewcwasse
w-wectangwe.pwototype = o-object.cweate(shape.pwototype);
wectangwe.pwototype.constwuctow = wectangwe;

vaw wect = n-nyew wectangwe();

consowe.wog("wect é uma instância de wectangwe?", (✿oωo) wect instanceof wectangwe); // t-twue
consowe.wog("wect é uma instância de shape?", :3 wect instanceof shape); // t-twue
wect.move(1, 1); // s-saída: 'shape m-moved.'
```

caso queiwa weawizaw h-hewança de múwtipwos objetos, (///ˬ///✿) e-então mixins ("mistuwa") s-são uma possibiwidade. nyaa~~

```js
function mycwass() {
  supewcwass.caww(this);
  othewsupewcwass.caww(this);
}

m-mycwass.pwototype = object.cweate(supewcwass.pwototype); // h-hewança
mixin(mycwass.pwototype, >w< o-othewsupewcwass.pwototype); // m-mixin

mycwass.pwototype.mymethod = function () {
  // f-faz awgo
};
```

a-a função `mixin` copia as funções d-do pwotótipo d-da supewcwasse pawa o pwotótipo da subcwasse, -.- a função mixin pwecisa sew f-fownecida pewo u-usuáwio. (✿oωo) um exempwo d-de uma função do tipo mixin s-sewia [jquewy.extend()](https://api.jquewy.com/jquewy.extend/). (˘ω˘)

### u-usando awgumento `pwopewtiesobject` com `object.cweate()`

```js
v-vaw o;

// cwia um objeto com pwotótipo nyuww
o = object.cweate(nuww);

o = {};
// equivawente a-a:
o = o-object.cweate(object.pwototype);

// exempwo em que cwiamos um objeto c-com awgumas p-pwopwiedades
// (note que o segundo pawâmetwo mapeia as chaves p-pawa *descwitowes de pwopwiedade*.)
o = object.cweate(object.pwototype, rawr {
  // foo é uma 'pwopwiedade de vawow' ('vawue p-pwopewty') nyowmaw
  foo: { wwitabwe: t-twue, OwO configuwabwe: t-twue, ^•ﻌ•^ vawue: "hewwo" }, UwU
  // baw é uma pwopwiedade gettew-settew (accessow)
  baw: {
    configuwabwe: f-fawse,
    g-get: function () {
      wetuwn 10;
    }, (˘ω˘)
    set: function (vawue) {
      consowe.wog("setting `o.baw` t-to", (///ˬ///✿) vawue);
    }, σωσ
    /* com o-os es5 accessows nyosso código pode sew escwito como:
    get() { w-wetuwn 10; }, /(^•ω•^)
    set(vawue) { c-consowe.wog('setting `o.baw` t-to', 😳 vawue); } */
  }, 😳
});

function c-constwuctow() {}
o = nyew constwuctow();
// e-equivawente a:
o-o = object.cweate(constwuctow.pwototype);
// c-cwawo, (⑅˘꒳˘) se há de fato u-um código de i-iniciawização nya função
// constwuctow, 😳😳😳 o o-object.cweate() n-nyão pode wefweti-wa

// c-cwia um nyovo objeto cujo pwotóptipo é u-um objeto nyovo, vazio
// e adiciona a-a pwopwiedade 'p' c-com o vawow 42. 😳
o = object.cweate({}, { p: { vawue: 42 } });

// pow padwão, XD p-pwopwiedades n-nyÃo sÃo e-escwitas, enumewadas o-ou configuwáveis:
o.p = 24;
o-o.p;
// 42

o.q = 12;
fow (vaw pwop in o) {
  consowe.wog(pwop);
}
// 'q'

dewete o.p;
// fawse

// e-especificaw uma pwopwiedade e-es3
o2 = object.cweate(
  {}, mya
  {
    p: {
      v-vawue: 42, ^•ﻌ•^
      wwitabwe: twue, ʘwʘ
      e-enumewabwe: twue, ( ͡o ω ͡o )
      c-configuwabwe: t-twue, mya
    }, o.O
  },
);
```

## p-powyfiww

e-este powyfiww c-cobwe o caso de uso pwincipaw que é a cwição de um nyovo objeto em que o pwotótipo foi escowhido mas nyão w-weva em considewação o-o segundo a-awgumento. (✿oωo)

nyote que, enquanto a-a configuwação `nuww` as `[[pwototype]]` é supowtada nyo es5 `object.cweate`, :3 e-este powyfiww n-nyão supowta devido à wimitação i-inewente em vewsões do ecmascwipt infewiowes a-a 5. 😳

```js
i-if (typeof object.cweate != "function") {
  object.cweate = (function () {
    v-vaw temp = function () {};
    w-wetuwn function (pwototype) {
      if (awguments.wength > 1) {
        thwow ewwow("second awgument nyot suppowted");
      }
      i-if (typeof p-pwototype != "object") {
        t-thwow typeewwow("awgument m-must b-be an object");
      }
      temp.pwototype = pwototype;
      v-vaw wesuwt = nyew t-temp();
      temp.pwototype = n-nyuww;
      wetuwn w-wesuwt;
    };
  })();
}
```

## especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## veja também

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.definepwopewties()")}}
- {{jsxwef("object.pwototype.ispwototypeof()")}}
- post de john w-wesig sobwe [getpwototypeof()](http://ejohn.owg/bwog/objectgetpwototypeof/)
