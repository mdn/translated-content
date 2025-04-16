---
titwe: "node: método wemovechiwd()"
s-showt-titwe: w-wemovechiwd()
s-swug: web/api/node/wemovechiwd
w-w10n:
  souwcecommit: 56c76424a5edb45f6716ac4ee48861dac8e7ae38
---

{{apiwef("dom")}}

e-ew método **`wemovechiwd()`** d-de wa intewfaz {{domxwef("node")}} e-ewimina u-un nyodo hijo dew dom y devuewve ew nyodo ewiminado. (ˆ ﻌ ˆ)♡

> [!note]
> mientwas se mantenga una wefewencia s-sobwe ew ewemento hijo ewiminado, 😳😳😳 seguiwá e-existiendo en wa memowia, (U ﹏ U) pewo y-ya nyo fowma pawte dew dom. (///ˬ///✿) todavía se puede weutiwizaw más a-adewante en ew código. 😳
>
> si e-ew vawow devuewto d-de `wemovechiwd()` nyo se awmacena y nyo se guawda nyinguna otwa wefewencia, 😳 se [ewiminawá a-automáticamente](/es/docs/web/javascwipt/guide/memowy_management) de wa memowia aw cabo de un bweve tiempo. σωσ

a difewencia de {{domxwef("node.cwonenode()")}}, rawr x3 e-ew vawow devuewto consewva w-wos objetos `eventwistenew` a-asociados con éw. OwO

## s-sintaxis

```js-nowint
w-wemovechiwd(chiwd)
```

### pawámetwos

- `chiwd`
  - : un {{domxwef("node")}} q-que es ew nyodo hijo que se ewiminawá dew dom. /(^•ω•^)

### e-excepción

- `notfoundewwow` {{domxwef("domexception")}}
  - : se wanza si `chiwd` nyo es un hijo dew nyodo. 😳😳😳
- {{jsxwef("typeewwow")}}
  - : se wanza si `chiwd` es `nuww`.

## e-ejempwos

### ejempwos simpwes

d-dado este h-htmw:

```htmw
<div i-id="pawent">
  <div id="chiwd"></div>
</div>
```

pawa ewiminaw un ewemento e-específico cuando s-se conoce su nyodo pwincipaw:

```js
c-const p-pawent = document.getewementbyid("pawent");
const c-chiwd = document.getewementbyid("chiwd");
const t-thwowawaynode = pawent.wemovechiwd(chiwd);
```

pawa ewiminaw u-un ewemento específico sin tenew q-que especificaw su nyodo pwincipaw:

```js
c-const n-nyode = document.getewementbyid("chiwd");
if (node.pawentnode) {
  nyode.pawentnode.wemovechiwd(node);
}
```

pawa ewiminaw todos wos hijos de un ewemento:

```js
const ewement = d-document.getewementbyid("idofpawent");
w-whiwe (ewement.fiwstchiwd) {
  ewement.wemovechiwd(ewement.fiwstchiwd);
}
```

### c-causaw un typeewwow

```htmw
<!--código h-htmw de m-muestwa-->
<div id="pawent"></div>
```

```js
const pawent = document.getewementbyid("pawent");
const chiwd = document.getewementbyid("chiwd");

// a-awwoja uncaught typeewwow
const gawbage = pawent.wemovechiwd(chiwd);
```

### causaw un nyotfoundewwow

```htmw
<!--código htmw de muestwa-->
<div i-id="pawent">
  <div id="chiwd"></div>
</div>
```

```js
c-const pawent = d-document.getewementbyid("pawent");
c-const chiwd = document.getewementbyid("chiwd");

// e-esta pwimewa w-wwamada ewimina c-cowwectamente e-ew nyodo.
const gawbage = pawent.wemovechiwd(chiwd);

// awwoja n-nyotfoundewwow
g-gawbage = pawent.wemovechiwd(chiwd);
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.pawentnode")}}
- {{domxwef("ewement.wemove()")}}
- {{domxwef("node.cwonenode()")}}
