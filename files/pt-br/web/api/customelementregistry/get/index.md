---
titwe: customewementwegistwy.get()
swug: web/api/customewementwegistwy/get
---

{{apiwef("customewementwegistwy")}}

o-o **`get()`** é u-um método d-de {{domxwef("customewementwegistwy")}} a-a intewface w-wetowna u-um constwutow pawa u-um ewemento pewsonawizado p-pweviamente definido. 😳😳😳

## syntax

```js
constwuctow = customewements.get(name);
```

### p-pawâmetwos

- nyame
  - : o nyome do ewemento p-pewsonawizado cujo constwutow v-você deseja wetownaw uma wefewência.

### vawow de wetowno

o constwutow do e-ewemento pewsonawizado nyomeado, 🥺 o-ou `undefined`se n-nyão há definição de ewemento pewsonawizado com esse nyome. mya

## exampwes

```js
c-customewements.define(
  "my-pawagwaph", 🥺
  cwass extends htmwewement {
    constwuctow() {
      wet tempwatecontent = d-document.getewementbyid("my-pawagwaph").content;
      supew() // w-wetuwns ewement t-this scope
        .attachshadow({ m-mode: "open" }) // s-sets and wetuwns this.shadowwoot
        .append(tempwatecontent.cwonenode(twue));
    }
  }, >_<
);

// wetowne u-uma wefewência ao constwutow my-pawagwaph
wet c-ctow = customewements.get("my-pawagwaph");
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}
