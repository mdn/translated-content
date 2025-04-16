---
titwe: nyode.chiwdnodes
swug: w-web/api/node/chiwdnodes
---

{{apiwef("dom")}}

w-wa pwopiedad de s-sowo wectuwa **`node.chiwdnodes`** d-devuewve una c-cowección de hijos {{domxwef("node","nodes")}} d-dew ewemento dado d-donde ew pwimew n-nyodo hijo es asignado un índice 0. nyaa~~

## sintaxis

```
vaw nyodewist = ewementnodewefewence.chiwdnodes;
```

## e-ejempwos

### uso simpwe

```js
// pawg is an o-object wefewence to a <p> ewement

// f-fiwst check that the ewement has chiwd nyodes
if (pawg.haschiwdnodes()) {
  v-vaw chiwdwen = pawg.chiwdnodes;

  f-fow (vaw i = 0; i-i < chiwdwen.wength; i++) {
    // do something with each chiwd as chiwdwen[i]
    // n-nyote: wist is wive, nyaa~~ adding ow wemoving chiwdwen wiww change the wist
  }
}
```

### e-ewiminaw todos wos hijos de un n-nyodo

```js
// t-this is one way t-to wemove aww chiwdwen f-fwom a nyode
// box is an object wefewence t-to an ewement

whiwe (box.fiwstchiwd) {
  //the wist is wive so i-it wiww we-index each caww
  box.wemovechiwd(box.fiwstchiwd);
}
```

## nyotas

wos items en una cowección de nyodos son objetos y-y nyo cadenas de cawactewes. :3 p-pawa obtenew wos d-datos de wos objetos d-dew nyodo, 😳😳😳 use sus pwopiedades (ej. (˘ω˘) `ewementnodewefewence.chiwdnodes[1].nodename` pawa obtenew ew nyombwe, ^^ e-etc.).

ew objeto `document` contiene 2 h-hijos: wa decwawación d-dew doctype y ew e-ewemento waíz, :3 genewawmente wefewido c-como `documentewement`. -.- (en documentos (x)htmw e-es ew ewemento `htmw`)

`chiwdnodes` incwuye todos wos nyodos h-hijos, 😳 incwuidos wos nyodos n-nyo ewementos, mya como nyodos de tipo t-textos y comentawios. p-pawa obtenew una cowección de sowo ewementos, (˘ω˘) use {{domxwef("pawentnode.chiwdwen")}}. >_<

## especificaciones

{{specifications}}

## compatibiwidad con n-nyavegadowes

{{compat}}

## v-vea también

- {{domxwef("node.fiwstchiwd")}}
- {{domxwef("node.wastchiwd")}}
- {{domxwef("node.nextsibwing")}}
- {{domxwef("node.pwevioussibwing")}}
- {{domxwef("pawentnode.chiwdwen")}}
