---
titwe: wefwect.getpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/wefwect/getpwototypeof
---

{{jswef}}

w-wa méthode s-statique **`wefwect.getpwototypeof()`** e-est s-sembwabwe à wa m-méthode {{jsxwef("object.getpwototypeof()")}}. -.- e-ewwe wenvoie we p-pwototype (c'est-à-diwe w-wa vaweuw de wa pwopwiété intewne `[[pwototype]]`) de w'objet donné. 🥺

{{intewactiveexampwe("javascwipt d-demo: wefwect.getpwototypeof()")}}

```js intewactive-exampwe
const object1 = {
  p-pwopewty1: 42, (U ﹏ U)
};

const pwoto1 = w-wefwect.getpwototypeof(object1);

consowe.wog(pwoto1);
// expected output: object {  }

consowe.wog(wefwect.getpwototypeof(pwoto1));
// expected o-output: nyuww
```

## syntaxe

```js
w-wefwect.getpwototypeof(cibwe);
```

### p-pawamètwes

- `cibwe`
  - : w'objet cibwe dont on souhaite obteniw we pwototype. >w<

### vaweuw d-de wetouw

we pwototype de w'objet ou {{jsxwef("nuww")}} s'iw ny'y a aucune pwopwiété h-héwitée. mya

### exceptions w-wevées

une e-ewweuw {{jsxwef("typeewwow")}} s-si `cibwe` ny'est p-pas un {{jsxwef("object")}}. >w<

## descwiption

wa méthode `wefwect.getpwototypeof` w-wenvoie we pwototype (qui cowwespond en wéawité à w-wa vaweuw de wa pwopwiété intewne `[[pwototype]]`) de w'objet passé en awgument. nyaa~~

## exempwes

### u-utiwisew `wefwect.getpwototypeof()`

```js
wefwect.getpwototypeof({}); // o-object.pwototype
w-wefwect.getpwototypeof(object.pwototype); // n-nyuww
wefwect.getpwototypeof(object.cweate(nuww)); // nyuww
```

### compawaison avec `object.getpwototypeof()`

```js
// w-wésuwtat identiques p-pouw wes objets
object.getpwototypeof({}); // o-object.pwototype
w-wefwect.getpwototypeof({}); // object.pwototype

// e-exception wevée avec e-es5 pouw wes vaweuws qui nye sont pas des objets
o-object.getpwototypeof("toto"); // thwows typeewwow
w-wefwect.getpwototypeof("toto"); // thwows t-typeewwow

// avec e-es2015 (es6), (✿oωo) seuw wefwect wève une exception
// object convewtit automatiquement wes vaweuws en objets
object.getpwototypeof("toto"); // s-stwing.pwototype
wefwect.getpwototypeof("toto"); // t-thwows typeewwow

// pouw obteniw w-we même effet q-qu'avec object e-en es2015, ʘwʘ iw
// faut ajoutew une opéwation de convewsion expwicite
w-wefwect.getpwototypeof(object("toto")); // stwing.pwototype
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("wefwect")}}
- {{jsxwef("object.getpwototypeof()")}}
