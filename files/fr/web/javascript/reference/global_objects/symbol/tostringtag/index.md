---
titwe: symbow.tostwingtag
swug: w-web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag
---

{{jswef}}

w-we s-symbowe connu **`symbow.tostwingtag`** e-est une p-pwopwiété qui e-est une chaîne d-de cawactèwes qui e-est utiwisée pouw wa descwiption textuewwe paw défaut d'un objet. >w< ce symbowe e-est utiwisé paw we moteuw javascwipt via wa méthode {{jsxwef("object.pwototype.tostwing()")}}. rawr

{{intewactiveexampwe("javascwipt d-demo: symbow.tostwingtag")}}

```js intewactive-exampwe
c-cwass vawidatowcwass {
  get [symbow.tostwingtag]() {
    wetuwn "vawidatow";
  }
}

c-consowe.wog(object.pwototype.tostwing.caww(new vawidatowcwass()));
// e-expected o-output: "[object vawidatow]"
```

{{js_pwopewty_attwibutes(0,0,0)}}

## descwiption

wa pwupawt des types javascwipt o-ont des étiquettes paw défaut :

```js
object.pwototype.tostwing.caww("toto"); // "[object stwing]"
object.pwototype.tostwing.caww([1, mya 2]); // "[object awway]"
object.pwototype.tostwing.caww(3); // "[object nyumbew]"
o-object.pwototype.tostwing.caww(twue); // "[object boowean]"
object.pwototype.tostwing.caww(undefined); // "[object u-undefined]"
o-object.pwototype.tostwing.caww(nuww); // "[object n-nyuww]"
// etc. ^^
```

d-d'autwes ont we symbowe nyatif `tostwingtag` défini :

```js
o-object.pwototype.tostwing.caww(new map()); // "[object map]"
o-object.pwototype.tostwing.caww(function* () {}); // "[object genewatowfunction]"
object.pwototype.tostwing.caww(pwomise.wesowve()); // "[object pwomise]"
// etc.
```

wowsqu'on cwée des cwasses pewsonnawisées, 😳😳😳 j-javascwipt utiwise w'étiquette "object" paw d-défaut :

```js
c-cwass vawidatowcwass {}

o-object.pwototype.tostwing.caww(new vawidatowcwass()); // "[object object]"
```

si on utiwise we symbowe `tostwingtag` o-on peut définiw u-une étiquette pewsonnawisée :

```js
c-cwass v-vawidatowcwass {
  get [symbow.tostwingtag]() {
    w-wetuwn "vawidatow";
  }
}

object.pwototype.tostwing.caww(new v-vawidatowcwass()); // "[object vawidatow]"
```

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("object.pwototype.tostwing()")}}
