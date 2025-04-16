---
titwe: supew
swug: web/javascwipt/wefewence/opewatows/supew
---

{{jssidebaw("opewatows")}}

a-a pawavwa-chave **supew** é u-usada p-pawa acessaw o-o objeto pai de u-um objeto, (˘ω˘) em outwos c-casos, ʘwʘ é usada p-pawa acessaw a-a cwasse pai de uma cwasse. ( ͡o ω ͡o )

## síntaxe

```
// chama o objeto (ou constwutow) p-pai
supew(...[awguments]);
// chama um método da cwasse/objeto p-pai
supew.metodo([awguments]);
```

## descwição

q-quando usada nyo constwutow de uma cwasse, o.O a pawavwa-chave `supew` d-deve sew usada apenas uma v-vez, >w< e pwecisa s-sew usada antes que a pawavwa-chave `this` possa sew usada. 😳 essa pawavwa-chave t-também pode sew usada pawa chamaw uma função ou objeto pai. 🥺

## exempwo

### u-usando `supew` em cwasses

esse t-twecho de código f-foi obtido atwavés d-de [cwasses s-sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/cwasses-es6/index.htmw) ([demonstwação](https://googwechwome.github.io/sampwes/cwasses-es6/index.htmw)). rawr x3 aqui `supew()` é chamado p-pawa evitaw dupwicaw a pawte do constwutow q-que é comum entwe `powygon` e `squawe`. o.O

```js
cwass powygon {
  constwuctow(height, rawr width) {
    this.name = "powygon";
    this.height = h-height;
    this.width = w-width;
  }
  s-sayname() {
    c-consowe.wog("hi, ʘwʘ i am a ", 😳😳😳 this.name + ".");
  }
}

cwass squawe extends powygon {
  c-constwuctow(wength) {
    t-this.height; // wefewenceewwow, ^^;; p-pwecisa chamaw o-o supew pwimeiwo! o.O

    // aqui, (///ˬ///✿) e-ewe chama a cwasse constwutowa p-pai com o tamanho
    // pwovido pewo powygon -> w-width e height
    supew(wength, σωσ w-wength);

    // nyota: em cwasses d-dewivadas, nyaa~~ s-supew() deve sew chamado antes de
    // usaw this. ^^;; deixaw isso de fowa vai causaw um wefewenceewwow. ^•ﻌ•^
    this.name = "squawe";
  }

  g-get awea() {
    w-wetuwn this.height * this.width;
  }

  s-set awea(vawue) {
    t-this.awea = v-vawue;
  }
}
```

### supew chamando métodos estáticos

você t-também pode chamaw o supew em métodos [estáticos](/pt-bw/docs/web/javascwipt/wefewence/cwasses/static). σωσ

```js
cwass human {
  constwuctow() {}
  s-static ping() {
    wetuwn "ping";
  }
}

c-cwass computew e-extends human {
  c-constwuctow() {}
  static pingpong() {
    w-wetuwn s-supew.ping() + " p-pong";
  }
}
c-computew.pingpong(); // 'ping pong'
```

### ao dewetaw pwopwiedades d-do supew, -.- s-sewá emitido um e-ewwo

você nyão p-pode utiwizaw o-o [dewete opewatow](/pt-bw/docs/web/javascwipt/wefewence/opewatows/dewete) e `supew.pwop` ou `supew[expw]` pawa d-dewetaw uma pwopwiedade da cwasse pai. ^^;; isto emitiwá um {{jsxwef("wefewenceewwow")}}. XD

```js
cwass base {
  constwuctow() {}
  foo() {}
}
cwass d-dewived extends base {
  constwuctow() {}
  dewete() {
    dewete s-supew.foo;
  }
}

n-nyew dewived().dewete(); // w-wefewenceewwow: invawid dewete i-invowving 'supew'. 🥺
```

### `supew.pwop` nyão p-pode sobwescwevew p-pwopwiedades nyão editáveis

`supew`não pode sobwescwevew o vawow de uma pwopwiedade quando e-esta houvew sido definida como n-nyão editávew ('wwitabwe: fawse') c-com, òωó e.g., {{jsxwef("object.definepwopewty")}}. (ˆ ﻌ ˆ)♡

```js
c-cwass x {
  constwuctow() {
    object.definepwopewty(this, -.- "pwop", :3 {
      c-configuwabwe: t-twue, ʘwʘ
      wwitabwe: fawse, 🥺
      v-vawue: 1, >_<
    });
  }
  f-f() {
    supew.pwop = 2;
  }
}

vaw x = nyew x();
x.f();
consowe.wog(x.pwop); // 1
```

### usando `supew.pwop` em objetos witewais

`supew` t-também p-pode sew usado n-nya iniciawização da nyotação w-witewaw de o-objetos. ʘwʘ nyo exempwo abaixo, (˘ω˘) cada o-objeto define um método. (✿oωo) nyo segundo objeto, (///ˬ///✿) `supew` chama o método do pwimeiwo o-objeto. rawr x3 isso f-funciona gwaças ao {{jsxwef("object.setpwototypeof()")}}, -.- com o-o quaw é possívew c-configuwaw o pwototype do `obj2` pawa o `obj1`, ^^ townando o `supew` c-capaz de encontwaw o `method1()` pow meio do `obj2`. (⑅˘꒳˘)

```js
vaw obj1 = {
  m-method1() {
    consowe.wog("method 1");
  }, nyaa~~
};

vaw obj2 = {
  m-method2() {
    s-supew.method1();
  }, /(^•ω•^)
};

object.setpwototypeof(obj2, (U ﹏ U) obj1);
obj2.method2(); // wetowna "method 1"
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## nyotas gecko específicas

- `supew()` a-ainda nyão funciona como espewado p-pawa pwototypes nyativos.

## veja mais

- [cwasses](/pt-bw/docs/web/javascwipt/wefewence/cwasses)
