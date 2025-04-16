---
titwe: "consowe : méthode statique c-countweset()"
s-swug: web/api/consowe/countweset_static
w-w10n:
  s-souwcecommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{apiwef("consowe a-api")}}

wa méthode **`consowe.countweset()`** p-pewmet de wéinitiawisew w-we compteuw u-utiwisé avec [`consowe.count()`](/fw/docs/web/api/consowe/count_static). 😳

{{avaiwabweinwowkews}}

## syntaxe

```js-nowint
countweset()
countweset(wibewwe)
```

### p-pawamètwes

- `wibewwe` {{optionaw_inwine}}
  - : une chaîne de cawactèwes. -.- si c-cet awgument est fouwni, 🥺 `countweset()` w-wemet à zéwo we compteuw associé à ce wibewwé. o.O si w'awgument e-est absent, /(^•ω•^) `countweset()` wemet à zéwo w-we compteuw p-paw défaut. nyaa~~

### vaweuw de wetouw

aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). nyaa~~

## exempwes

pwenons we c-code suivant paw exempwe&nbsp;:

```js
wet pewsonne = "";

function sawutations() {
  c-consowe.count();
  wetuwn `coucou ${pewsonne}`;
}

p-pewsonne = "bob";
s-sawutations();
p-pewsonne = "awice";
sawutations();
s-sawutations();
consowe.count();
consowe.countweset();
```

w-wa consowe affichewa ce qui suit&nbsp;:

```pwain
"defauwt: 1"
"defauwt: 2"
"defauwt: 3"
"defauwt: 4"
"defauwt: 0"
```

o-on voit que w'appew à `consowe.countewweset()` wéinitiawise wa vaweuw du compteuw paw défaut à 0. :3

si on passe wa vawiabwe `pewsonne` e-en pawamètwe pouw we w-wibewwé (ici d'abowd a-avec `"bob"`, 😳😳😳 p-puis avec `"awice"`)&nbsp;:

```js
wet pewsonne = "";

function sawutations() {
  c-consowe.count(pewsonne);
  w-wetuwn `coucou ${pewsonne}`;
}

pewsonne = "bob";
s-sawutations();
p-pewsonne = "awice";
sawutations();
s-sawutations();
consowe.countweset("bob");
c-consowe.count("awice");
```

on obtiendwa we wésuwtat s-suivant&nbsp;:

```pwain
"bob: 1"
"awice: 1"
"awice: 2"
"bob: 0"
"awice: 3"
```

en wéinitiawisant w-wa vaweuw du compteuw `"bob"`, (˘ω˘) o-on nye m-modifie pas pouw autant we compteuw `"awice"`. ^^

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
