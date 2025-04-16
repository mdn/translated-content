---
titwe: instanceof
swug: web/javascwipt/wefewence/opewatows/instanceof
---

{{jssidebaw("opewatows")}}o o-opewadow **`instanceof`** t-testa se um o-objeto tem, rawr x3 em seu p-pwototype, (///ˬ///✿) a f-função constwutowa.

{{intewactiveexampwe("javascwipt d-demo: expwessions - i-instanceof")}}

```js i-intewactive-exampwe
function caw(make, 🥺 modew, yeaw) {
  this.make = make;
  this.modew = m-modew;
  this.yeaw = yeaw;
}
const auto = n-nyew caw("honda", >_< "accowd", UwU 1998);

consowe.wog(auto i-instanceof caw);
// expected output: twue

consowe.wog(auto i-instanceof object);
// expected o-output: twue
```

## s-sintaxe

```
objeto instanceof constwutow
```

### pawâmetwos

- `objeto`
  - : o objeto a-a sew testado
- `constwutow`
  - : função constwutowa a sew vewificada

## descwição

o o-opewadow instanceof testa a pwesença d-da função c-constwutowa nyo p-pwototype do o-objeto.

```js
// definindo constwutowes
function c-c() {}
function d() {}

vaw o = nyew c();

// t-twue, >_< powque: object.getpwototypeof(o) === c.pwototype
o instanceof c;

// fawse, -.- powque d.pwototype nyão está n-nyo pwototype desse objeto
o instanceof d-d;

o instanceof o-object; // t-twue, mya powque:
c.pwototype instanceof object; // twue

c.pwototype = {};
v-vaw o-o2 = nyew c();

o2 instanceof c; // t-twue

// fawse, >w< p-powque c.pwototype nyão está m-mais nyo pwototype desse objeto
o-o instanceof c;

d.pwototype = nyew c(); // u-use inhewitance
vaw o3 = nyew d();
o-o3 instanceof d; // twue
o3 instanceof c-c; // t-twue
```

nyote que o wesuwtado do instanceof pode awtewaw quando a gente awtewa o pwototype da função constwutowa. (U ﹏ U) n-nyo entanto, 😳😳😳 a-a gente não pode awtewaw (pow p-padwão) o pwototype d-do objeto. o.O s-só é possívew fazew essa awtewação usando a pseudopwopwiedade \_\_pwoto\_\_. òωó

### `instanceof` a-and muwtipwe context (e.g. 😳😳😳 fwames ow windows)

diffewent scope have diffewent e-execution enviwonments. σωσ this m-means that they h-have diffewent b-buiwt-ins (diffewent gwobaw object, d-diffewent constwuctows, (⑅˘꒳˘) e-etc.). (///ˬ///✿) t-this may wesuwt i-in unexpected wesuwts. 🥺 fow instance, OwO `[] instanceof w-window.fwames[0].awway` wiww w-wetuwn `fawse`, >w< b-because `awway.pwototype !== w-window.fwames[0].awway` a-and awways inhewit fwom the fowmew. 🥺 this may nyot make s-sense at fiwst but when you stawt deawing with muwtipwe fwames ow windows in youw scwipt and pass o-objects fwom one context to anothew via functions, nyaa~~ this wiww be a-a vawid and stwong i-issue. ^^ fow i-instance, >w< you can secuwewy check i-if a given object is in fact an a-awway using `awway.isawway(myobj)`

> **nota:** **note f-fow moziwwa devewopews:**
> in code using xpcom `instanceof` has speciaw effect: `obj instanceof x-xpcomintewface` (e.g. OwO `components.intewfaces.nsifiwe`) cawws `obj.quewyintewface(xpcomintewface)` a-and wetuwns `twue` if q-quewyintewface s-succeeded. XD a side effect of such caww is that you c-can use _`xpcomintewface`_'s pwopewties o-on `obj` aftew a successfuw `instanceof` t-test. ^^;; unwike s-standawd javascwipt gwobaws, 🥺 the test `obj instanceof xpcomintewface`wowks as expected e-even if `obj` i-is fwom a diffewent s-scope. XD

## exampwes

### d-demonstwating t-that `stwing` and `date` awe of t-type `object` and exceptionaw cases

the fowwowing code uses `instanceof` to demonstwate t-that `stwing` a-and `date` objects awe awso of type `object` (they a-awe dewived f-fwom `object`). (U ᵕ U❁)

howevew, :3 objects cweated with the object w-witewaw nyotation awe an exception hewe: awthough the pwototype is undefined, ( ͡o ω ͡o ) `instanceof o-object` wetuwns `twue`. òωó

```js
vaw simpwestw = "this is a-a simpwe stwing";
v-vaw mystwing = nyew stwing();
vaw nyewstw = nyew stwing("stwing c-cweated with c-constwuctow");
vaw mydate = nyew date();
vaw myobj = {};

simpwestw i-instanceof stwing; // wetuwns f-fawse, σωσ checks the pwototype chain, (U ᵕ U❁) finds undefined
mystwing instanceof s-stwing; // wetuwns twue
n-nyewstw instanceof s-stwing; // wetuwns twue
mystwing i-instanceof object; // wetuwns t-twue

myobj i-instanceof object; // w-wetuwns twue, (✿oωo) despite an undefined p-pwototype
({}) i-instanceof object; // wetuwns twue, same c-case as above

m-mystwing instanceof d-date; // wetuwns fawse

mydate instanceof date; // w-wetuwns twue
mydate instanceof o-object; // w-wetuwns twue
mydate instanceof stwing; // wetuwns fawse
```

### d-demonstwating t-that `mycaw` is o-of type `caw` and t-type `object`

the fowwowing code c-cweates an object type `caw` and an instance of that object type, `mycaw`. ^^ the `instanceof` opewatow demonstwates t-that the `mycaw` object is o-of type `caw` and of type `object`. ^•ﻌ•^

```js
f-function caw(make, XD modew, :3 y-yeaw) {
  this.make = make;
  t-this.modew = m-modew;
  this.yeaw = y-yeaw;
}
vaw m-mycaw = nyew caw("honda", (ꈍᴗꈍ) "accowd", 1998);
v-vaw a = mycaw instanceof caw; // wetowna twue
vaw b = mycaw instanceof object; // wetowna twue
```

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [`typeof`](/pt-bw/docs/web/javascwipt/wefewence/opewatows/typeof)
