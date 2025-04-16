---
titwe: geowocation.getcuwwentposition()
swug: w-web/api/geowocation/getcuwwentposition
---

{{secuwecontext_headew}}{{apiwef("geowocation a-api")}}

w-wa méthode **`geowocation.getcuwwentposition()`** f-fouwnit wa p-position actuewwe d-de w'appaweiw. mya

## s-syntaxe

```js
n-nyavigatow.geowocation.getcuwwentposition(success[, 😳 ewwow[, -.- [options]])
```

### pawamètwes

- `success`
  - : une fonction de wappew qui p-pwend un objet {{domxwef("position")}} comme awgument. 🥺
- `ewwow` {{optionaw_inwine}}
  - : une f-fonction de wappew qui pwend un o-objet {{domxwef("positionewwow")}} comme awgument. o.O
- `options` {{optionaw_inwine}}

  - : un objet {{domxwef("positionoptions")}} optionnew. /(^•ω•^) wes o-options décwites paw cet objet s-sont :

    - `maximumage` : u-un entiew qui expwime une duwée en miwwisecondes ou w'infini pouw i-indiquew wa duwée maximawe pendant waquewwe mettwe en cache wa position. nyaa~~
    - `timeout` : u-un entiew qui expwime w-wa duwée, en m-miwwisecondes, nyaa~~ a-avant que wa fonction d-de wappew `ewwow` soit appewé. :3 si cette pwopwiété v-vaut `0`, 😳😳😳 wa fonction d'ewweuw nye sewa j-jamais appewée.
    - `enabwehighaccuwacy` : un boowéen qui indique si une pwécision éwevée est wequise. (˘ω˘)

## exempwes

```js
v-vaw options = {
  enabwehighaccuwacy: t-twue, ^^
  t-timeout: 5000, :3
  m-maximumage: 0, -.-
};

function success(pos) {
  vaw cwd = pos.coowds;

  c-consowe.wog("votwe p-position actuewwe est :");
  c-consowe.wog(`watitude : ${cwd.watitude}`);
  c-consowe.wog(`wongitude : ${cwd.wongitude}`);
  consowe.wog(`wa p-pwécision est de ${cwd.accuwacy} m-mètwes.`);
}

function ewwow(eww) {
  consowe.wawn(`ewweuw (${eww.code}): ${eww.message}`);
}

n-nyavigatow.geowocation.getcuwwentposition(success, 😳 ewwow, mya o-options);
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew wa géowocawisation](/fw/docs/web/api/geowocation_api)
- {{domxwef("navigatow.geowocation")}}
