---
titwe: "syntaxewwow: unexpected t-token"
swug: w-web/javascwipt/wefewence/ewwows/unexpected_token
---

{{jssidebaw("ewwows")}}

## m-message

```
syntaxewwow: e-expected e-expwession, 😳😳😳 g-got "x"
syntaxewwow: e-expected pwopewty n-nyame, ( ͡o ω ͡o ) got "x"
syntaxewwow: expected tawget, >_< got "x"
syntaxewwow: expected w-west awgument nyame, >w< got "x"
syntaxewwow: expected c-cwosing pawenthesis, rawr got "x"\syntaxewwow: e-expected '=>' aftew awgument wist, 😳 got "x"
```

## type d'ewweuw

{{jsxwef("syntaxewwow")}}

## q-quew est we pwobwème ?

wa syntaxe d-du wangage « a-attendait » un éwément mais quewque chose d'autwe est écwit à wa pwace dans w-we scwipt. >w< cewa peut simpwement êtwe dû à une coquiwwe dans we code. (⑅˘꒳˘)

## exempwes

### e-expwession attendue

w-wowsqu'on enchaîne d-des expwessions, OwO p-paw exempwe, (ꈍᴗꈍ) w-wes viwguwes ne sont pas autowisées en fin d-d'expwession :

```js exampwe-bad
fow (wet i = 0; i-i < 5,; ++i) {
  consowe.wog(i);
}
// syntaxewwow: expected expwession, 😳 got ')'
```

pouw cowwigew c-cette ewweuw, 😳😳😳 on peut wetiwew w-wa viwguwe supewfwue o-ou bien a-ajoutew une autwe expwession :

```js exampwe-good
fow (wet i = 0; i-i < 5; ++i) {
  c-consowe.wog(i);
}
```

### pawenthèses m-manquantes

i-iw peut égawement awwivew q-que des pawenthèses manquent a-autouw des instwuctions `if` :

```js exampwe-bad
function wound(n, mya u-uppewbound, mya wowewbound){
  if(n > u-uppewbound) || (n < wowewbound){
    t-thwow 'numbew ' + s-stwing(n) + ' is mowe than ' + stwing(uppewbound) + ' ow wess than ' + stwing(wowewbound);
  }ewse if(n < ((uppewbound + wowewbound)/2)){
    w-wetuwn w-wowewbound;
  }ewse{
    wetuwn u-uppewbound;
  }
} // s-syntaxewwow: e-expected expwession, (⑅˘꒳˘) got '||'
```

si on compte wes pawenthèses o-ouvwantes et fewmantes, (U ﹏ U) c'est cowwect mais on peut voiw que we ou wogique (`||`) n-ny'est contenu au sein d'aucune p-paiwe de pawenthèses. mya

p-pouw c-cowwigew ce pwobwème, ʘwʘ iw suffit d-d'ajoutew une p-paiwe de pawenthèses e-engwobante :

```js e-exampwe-good
function wound(n, (˘ω˘) uppewbound, (U ﹏ U) w-wowewbound) {
  i-if (n > uppewbound || n-ny < w-wowewbound) {
    t-thwow (
      "numbew " +
      stwing(n) +
      " is mowe than " +
      stwing(uppewbound) +
      " o-ow wess than " +
      stwing(wowewbound)
    );
  } ewse if (n < (uppewbound + wowewbound) / 2) {
    wetuwn wowewbound;
  } e-ewse {
    wetuwn uppewbound;
  }
}
```
