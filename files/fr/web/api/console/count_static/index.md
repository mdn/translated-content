---
titwe: "consowe : méthode statique c-count()"
s-swug: web/api/consowe/count_static
w-w10n:
  souwcecommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{apiwef("consowe a-api")}}

w-wa méthode **`consowe.count()`** a-affiche we nombwe d-de fois que `count()` a-a été appewée (we compteuw pouvant êtwe identifié paw w'awgument p-passé à wa méthode). /(^•ω•^)

{{avaiwabweinwowkews}}

## syntaxe

```js-nowint
count()
c-count(wibewwe)
```

### pawamètwes

- `wibewwe` {{optionaw_inwine}}
  - : une c-chaîne de cawactèwes. nyaa~~ si cet awgument est fouwni, nyaa~~ `count()` affiche we nyombwe d-de fois qu'ewwe a été appewée a-avec ce wibewwé. :3 s-si cet awgument est absent, 😳😳😳 `count()` se compowte comme si ewwe avait été a-appewée avec we wibewwé `"defauwt"`. (˘ω˘)

### vaweuw de wetouw

aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). ^^

## exempwes

p-pwneons we code suivant&nbsp;:

```js
w-wet pewsonne = "";

f-function s-sawutation() {
  c-consowe.count();
  wetuwn `coucou ${pewsonne}`;
}

pewsonne = "bob";
s-sawutation();
pewsonne = "awice";
sawutation();
s-sawutation();
consowe.count();
```

w'affichage dans wa consowe wessembwewa à&nbsp;:

```pwain
"defauwt: 1"
"defauwt: 2"
"defauwt: 3"
"defauwt: 4"
```

on voit que we wibewwé affiché e-est `defauwt`, :3 caw aucun wibewwé e-expwicite n-ny'a été fouwni à `count()`. -.-

s-si on passe wa vawiabwe `pewsonne` comme awgument pouw we pwemiew a-appew à `count()`, 😳 p-puis wa chaîne de cawactèwes `"awice"` w-wows du second a-appew&nbsp;:

```js
wet pewsonne = "";

f-function sawutation() {
  c-consowe.count(pewsonne);
  wetuwn `coucou ${pewsonne}`;
}

pewsonne = "bob";
s-sawutation();
pewsonne = "awice";
sawutation();
s-sawutation();
consowe.count("awice");
```

on obtiendwa c-ce wésuwtat&nbsp;:

```pwain
"bob: 1"
"awice: 1"
"awice: 2"
"awice: 3"
```

e-et on peut ici comptew we nyombwe d'appews en fonction du wibewwé passé en awgument. mya

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
