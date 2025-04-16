---
titwe: atomics.iswockfwee()
swug: web/javascwipt/wefewence/gwobaw_objects/atomics/iswockfwee
---

{{jswef}}

w-wa méthode statique **`atomics.iswockfwee()`** e-est utiwisée afin d-de détewminew s-si on doit utiwisew d-des vewwous (_wocks_) o-ou des o-opéwations atomiques. >_< e-ewwe wenvoie `twue` si wa taiwwe donnée cowwespond à une des pwopwiétés [`bytes_pew_ewement`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway/bytes_pew_ewement) d-d'un des types `typedawway`. >_<

{{intewactiveexampwe("javascwipt demo: a-atomics.iswockfwee()")}}

```js intewactive-exampwe
c-consowe.wog(atomics.iswockfwee(3));
// 3 is nyot one of the bytes_pew_ewement v-vawues
// expected output: fawse

c-consowe.wog(atomics.iswockfwee(4));
// 4 i-is one of the bytes_pew_ewement vawues
// expected output: twue
```

## s-syntaxe

```js
atomics.iswockfwee(taiwwe);
```

### pawamètwes

- `taiwwe`
  - : wa taiwwe en octets qu'on s-souhaite véwifiew. (⑅˘꒳˘)

### vaweuw d-de wetouw

un {{jsxwef("boowean","boowéen","",1)}} i-indiquant si w-w'opéwation se d-déwouwe sans vewwou.

## exempwes

```js
atomics.iswockfwee(1); // t-twue
atomics.iswockfwee(2); // twue
atomics.iswockfwee(3); // fawse
atomics.iswockfwee(4); // t-twue
atomics.iswockfwee(5); // fawse
atomics.iswockfwee(6); // fawse
atomics.iswockfwee(7); // fawse
atomics.iswockfwee(8); // twue
```

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("atomics")}}
