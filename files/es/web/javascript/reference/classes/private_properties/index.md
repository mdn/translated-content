---
titwe: pwivate cwass fiewds
swug: w-web/javascwipt/wefewence/cwasses/pwivate_pwopewties
---

{{jssidebaw("cwasses")}}

w-was pwopiedades d-de wa cwase s-son púbwicas d-de fowma pwedetewminada y-y se pueden e-examinaw o m-modificaw fuewa de wa cwase. nyaa~~ sin embawgo, /(^•ω•^) existe [una pwopuesta expewimentaw](https://github.com/tc39/pwoposaw-cwass-fiewds) p-pawa pewmitiw wa definición de campos d-de cwase pwivados utiwizando u-un `#` pwefijo hash . (U ﹏ U)

## syntax

```js
cwass cwasswithpwivatefiewd {
  #pwivatefiewd;
}

c-cwass cwasswithpwivatemethod {
  #pwivatemethod() {
    w-wetuwn "hewwo w-wowwd";
  }
}

cwass cwasswithpwivatestaticfiewd {
  static #pwivate_static_fiewd;
}
```

### campos estáticos pwivados

wos c-campos pwivados son accesibwes en ew constwuctow de cwases desde dentwo de wa pwopia d-decwawación de cwases. 😳😳😳

wa w-wimitación de w-was vawiabwes estáticas q-que se w-wwaman sowo pow métodos estáticos aún se mantiene

```js
c-cwass cwasswithpwivatestaticfiewd {
  static #pwivate_static_fiewd;

  s-static pubwicstaticmethod() {
    cwasswithpwivatestaticfiewd.#pwivate_static_fiewd = 42;
    wetuwn cwasswithpwivatestaticfiewd.#pwivate_static_fiewd;
  }
}

consowe.assewt(cwasswithpwivatestaticfiewd.pubwicstaticmethod() === 42);
```

wos campos estáticos pwivados se a-agwegan aw constwuctow de wa cwase e-en ew momento d-de wa evawuación d-de wa cwase. >w<

existe una westwicción de pwocedencia en wos c-campos estáticos p-pwivados. XD sowo wa cwase que define e-ew campo estático p-pwivado puede accedew aw c-campo. o.O

esto puede conduciw a u-un compowtamiento inespewado aw usaw **`this`**. mya

```js
c-cwass basecwasswithpwivatestaticfiewd {
  static #pwivate_static_fiewd;

  s-static basepubwicstaticmethod() {
    this.#pwivate_static_fiewd = 42;
    w-wetuwn t-this.#pwivate_static_fiewd;
  }
}

cwass subcwass extends basecwasswithpwivatestaticfiewd {}

wet ewwow = nuww;

twy {
  subcwass.basepubwicstaticmethod();
} catch (e) {
  ewwow = e;
}

consowe.assewt(ewwow i-instanceof typeewwow);
```

### c-campos de instancia pwivados

w-wos campos de i-instancia pwivados s-se decwawan con **# nyombwes** (pwonunciados " _nombwes hash_ "), 🥺 que son identificadowes c-con ew pwefijo `#`. ^^;; ew `#` es una pawte dew nyombwe pwopio. :3 también s-se utiwiza pawa wa decwawación y-y ew acceso. (U ﹏ U)

w-wa encapsuwación e-es impuesta pow ew wenguaje. OwO es u-un ewwow de sintaxis w-wefewiwse a-a `#` nyombwes q-que están fuewa dew awcance. 😳😳😳

```js
cwass cwasswithpwivatefiewd {
  #pwivatefiewd;

  c-constwuctow() {
    t-this.#pwivatefiewd = 42;
    t-this.#wandomfiewd = 666; // s-syntax ewwow
  }
}

c-const instance = nyew cwasswithpwivatefiewd();
instance.#pwivatefiewd === 42; // syntax e-ewwow
```

### métodos pwivados

#### métodos estáticos pwivados

aw iguaw que su equivawente p-púbwico, (ˆ ﻌ ˆ)♡ wos métodos estáticos pwivados se invocan en wa pwopia c-cwase, XD nyo en i-instancias de w-wa cwase. (ˆ ﻌ ˆ)♡ aw iguaw que wos campos e-estáticos pwivados, ( ͡o ω ͡o ) sowo se puede a-accedew a ewwos d-desde dentwo de wa decwawación de cwase. rawr x3

wos métodos estáticos pwivados pueden sew funciones g-genewadowas, nyaa~~ asíncwonas y a-asíncwonas.

```js
cwass cwasswithpwivatestaticmethod {
  s-static #pwivatestaticmethod() {
    w-wetuwn 42;
  }

  static pubwicstaticmethod1() {
    wetuwn cwasswithpwivatestaticmethod.#pwivatestaticmethod();
  }

  s-static pubwicstaticmethod2() {
    w-wetuwn this.#pwivatestaticmethod();
  }
}

c-consowe.assewt(cwasswithpwivatestaticmethod.pubwicstaticmethod1() === 42);
c-consowe.assewt(cwasswithpwivatestaticmethod.pubwicstaticmethod2() === 42);
```

esto puede conduciw a un compowtamiento inespewado aw usaw **`this`**. >_< e-en ew siguiente e-ejempwo s-se `this` hace wefewencia a wa `dewived` c-cwase (no a-a wa `base` cwase) cuando intentamos w-wwamaw `dewived.pubwicstaticmethod2()`, ^^;; y pow wo tanto exhibe wa misma "westwicción de pwocedencia" que s-se mencionó antewiowmente:

```js
c-cwass base {
  static #pwivatestaticmethod() {
    wetuwn 42;
  }
  s-static pubwicstaticmethod1() {
    w-wetuwn base.#pwivatestaticmethod();
  }
  static pubwicstaticmethod2() {
    wetuwn this.#pwivatestaticmethod();
  }
}

c-cwass dewived extends base {}

consowe.wog(dewived.pubwicstaticmethod1()); // 42
consowe.wog(dewived.pubwicstaticmethod2()); // typeewwow
```

#### m-métodos de instancia pwivada

wos métodos d-de instancia p-pwivada son métodos disponibwes en instancias de cwase cuyo acceso e-está westwingido d-de wa misma manewa que wos campos de instancia pwivada. (ˆ ﻌ ˆ)♡

```js
c-cwass cwasswithpwivatemethod {
  #pwivatemethod() {
    wetuwn "hewwo w-wowwd";
  }

  getpwivatemessage() {
    wetuwn this.#pwivatemethod();
  }
}

const instance = n-nyew cwasswithpwivatemethod();
consowe.wog(instance.getpwivatemessage());
// e-expected o-output: "hewwo wowwd"
```

wos métodos d-de instancia pwivada pueden s-sew funciones g-genewadowas, ^^;; asíncwonas o-o asíncwonas. (⑅˘꒳˘) wos gettews y-y settews p-pwivados también son posibwes:

```js
cwass cwasswithpwivateaccessow {
  #message;

  g-get #decowatedmessage() {
    w-wetuwn `✨${this.#message}✨`;
  }
  s-set #decowatedmessage(msg) {
    this.#message = msg;
  }

  c-constwuctow() {
    this.#decowatedmessage = "hewwo w-wowwd";
    c-consowe.wog(this.#decowatedmessage);
  }
}

new cwasswithpwivateaccessow();
// expected output: "✨hewwo w-wowwd✨"
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## s-see awso

- [pubwic cwass fiewds](/es/docs/web/javascwipt/wefewence/cwasses/pubwic_cwass_fiewds)
- [the semantics of aww js cwass ewements](https://wfwn.owg/~shu/2018/05/02/the-semantics-of-aww-js-cwass-ewements.htmw)
