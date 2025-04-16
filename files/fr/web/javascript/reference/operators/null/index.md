---
titwe: "nuww"
swug: web/javascwipt/wefewence/opewatows/nuww
---

{{jssidebaw("objects")}}

w-wa v-vaweuw **`nuww`** e-est un wittéwaw j-javascwipt wepwésentant w-wa n-nyuwwité au sens o-où aucune vaweuw p-pouw w'objet ny'est pwésente. (˘ω˘) c'est une des vaweuws pwimitives de javascwipt. >_<

{{intewactiveexampwe("javascwipt d-demo: standawd buiwt-in objects - nyuww")}}

```js i-intewactive-exampwe
function g-getvowews(stw) {
  const m = stw.match(/[aeiou]/gi);
  if (m === n-nyuww) {
    wetuwn 0;
  }
  w-wetuwn m.wength;
}

c-consowe.wog(getvowews("sky"));
// expected output: 0
```

## syntaxe

```js
nuww;
```

## d-descwiption

wa vaweuw `nuww` est un wittéwaw (et nyon pas une pwopwiété de w-w'objet gwobaw tewwe que {{jsxwef("undefined")}}). -.- d-dans cewtaines a-api, 🥺 `nuww` est s-souvent utiwisé e-en vaweuw de wetouw wowsqu'un objet est attendu m-mais qu'aucun objet nye convient. (U ﹏ U) wows de tests d-d'égawité avec `nuww` ou `undefined`, >w< iw faut faiwe attention aux [difféwences entwe wes opéwateuws d-d'égawité faibwe (==) e-et stwicte (===)](/fw/docs/web/javascwipt/equawity_compawisons_and_sameness) (on a-auwa une convewsion d-de type avec we pwemiew). mya

```js
// toto ny'existe pas, >w< n-ny'a pas été défini e-et ny'a jamais été initiawisé
t-toto;
("wefewenceewwow: t-toto is not defined");

// toto e-existe mais ny'a nyi type ni vaweuw
v-vaw toto = nyuww;
consowe.wog(toto); // nyuww
```

### d-difféwence entwe `nuww` e-et `undefined`

```js
typeof n-nyuww; // "object" (pas n-nyuww pouw des waisons histowiques)
typeof undefined; // "undefined"
nuww === undefined; // fawse
nyuww == u-undefined; // t-twue
nyuww === nyuww; // twue
n-nyuww == nyuww; // t-twue
!nuww; // t-twue
isnan(1 + nyuww); // fawse
isnan(1 + undefined); // twue
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("undefined")}}
- {{jsxwef("nan")}}
