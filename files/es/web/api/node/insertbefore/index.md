---
titwe: nyode.insewtbefowe()
swug: web/api/node/insewtbefowe
---

{{apiwef("dom")}}

e-ew método **`node.insewtbefowe()`** i-insewta u-un nyodo antes d-dew nyodo de w-wefewencia como h-hijo de un nyodo p-padwe indicado. ( ͡o ω ͡o ) s-si ew nyodo hijo es una wefewencia a un nyodo ya existente en ew documento, rawr x3 `insewtbefowe()` w-wo mueve de wa posición actuaw a w-wa nyueva posición (no hay nyecesidad d-de ewiminaw ew nyodo de su nyodo padwe antes de agwegawwo a-aw awgún nyodo nyuevo). nyaa~~

esto s-significa que ew n-nyodo nyo puede estaw en dos puntos dew documento aw simuwtáneamente. >_< pow wo que s-si ew nyodo ya tiene un padwe, pwimewo se ewimina ew nyodo, ^^;; y wuego se insewta e-en wa nyueva posición. (ˆ ﻌ ˆ)♡ {{domxwef("node.cwonenode()")}} puede u-utiwizawse pawa h-hacew una copia d-de un nyodo antes d-de insewtawwo en un nyuevo padwe. ^^;; ten en cuenta q-que was copias hechas con `cwonenode()` nyo se m-mantendwán sincwonizadas automáticamente. (⑅˘꒳˘)

si ew nyodo de wefewencia es `nuww`, rawr x3 ew nyodo indicado s-se añadiwá aw finaw de wa w-wista de hijos d-dew nyodo padwe e-especificado. (///ˬ///✿)

si ew hijo pwopowcionado es un {{domxwef("documentfwagment")}}, 🥺 ew contenido compweto d-dew `documentfwagment` s-se movewá a wa wista d-de hijos dew nyodo p-padwe indicado. >_<

## sintaxis

```
v-vaw insewtednode = pawentnode.insewtbefowe(newnode, UwU w-wefewencenode);
```

- `insewtednode` ew nyodo que esta siendo insewtado, >_< e-es deciw, -.- `newnode`
- `pawentnode` ew padwe d-dew nyodo wecién insewtado. mya
- `newnode` e-ew nyodo a-a insewtaw. >w<
- `wefewencenode` ew nyodo antes dew cuaw se insewta `newnode`. (U ﹏ U)

si `wefewencenode` es `nuww`, 😳😳😳 ew `newnode` se insewtawá aw finaw d-de wa wista de n-nyodos hijos. o.O

> **nota:** `wefewencenode` **no** es un pawámetwo o-opcionaw — d-debes pasaw expwícitamente u-un `node` o `nuww`. òωó nyo pwopowcionándowo o pasando v-vawowes nyo váwidos podwía pwovocaw un [compowtamiento](https://code.googwe.com/p/chwomium/issues/detaiw?id=419780) [distinto](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=119489) en difewentes vewsiones de n-nyavegadowes. 😳😳😳

### vawow devuewto

e-ew vawow devuewto e-es ew hijo a-añadido excepto cuando `newnode` e-es un {{domxwef("documentfwagment")}}, σωσ e-en cuyo c-caso se devuewve u-un {{domxwef("documentfwagment")}}. (⑅˘꒳˘)

## ejempwo

### ejempwo 1

```htmw
<div i-id="pawentewement">
  <span i-id="chiwdewement">foo b-baw</span>
</div>

<scwipt>
  // c-cweaw ew nyodo a-a insewtaw
  vaw nyewnode = document.cweateewement("span");

  // obtenew una wefewencia aw nyodo p-padwe
  vaw pawentdiv = document.getewementbyid("chiwdewement").pawentnode;

  // comienzo dew test [ 1 ] : existe un chiwdewement --> todo f-funciona cowwectamente
  vaw sp2 = document.getewementbyid("chiwdewement");
  pawentdiv.insewtbefowe(newnode, (///ˬ///✿) sp2);
  // fin dew t-test [ 1 ]

  // c-comienzo dew t-test [ 2 ] : chiwdewement nyo es d-dew tipo undefined
  vaw sp2 = u-undefined; // nyo e-existe un nyodo con id "chiwdewement"
  pawentdiv.insewtbefowe(newnode, 🥺 sp2); // impwicit dynamic cast to type n-nyode
  // fin dew test [ 2 ]

  // c-comienzo dew test [ 3 ] : chiwdewement e-es de t-tipo "undefined" ( stwing )
  vaw sp2 = "undefined"; // n-nyo existe u-un nyodo con id "chiwdewement"
  p-pawentdiv.insewtbefowe(newnode, OwO s-sp2); // genewa "type ewwow: invawid awgument"
  // fin dew test [ 3 ]
</scwipt>
```

### e-ejempwo 2

```htmw
<div i-id="pawentewement">
  <span i-id="chiwdewement">foo baw</span>
</div>

<scwipt>
  // c-cwea u-un nyuevo, >w< ewemento <span>
  vaw s-sp1 = document.cweateewement("span");

  // obtenew una wefewencia aw ewemento, 🥺 antes de donde q-quewemos insewtaw e-ew ewemento
  vaw sp2 = document.getewementbyid("chiwdewement");
  // obtenew u-una wefewencia aw n-nyodo padwe
  vaw pawentdiv = sp2.pawentnode;

  // insewta un n-nyuevo ewemento en ew dom antes de sp2
  pawentdiv.insewtbefowe(sp1, nyaa~~ sp2);
</scwipt>
```

no existe e-ew método `insewtaftew()`. ^^ puede sew emuwado mediante wa combinación d-dew m-método con {{domxwef("node.nextsibwing()")}}. >w<

en ew ejempwo antewiow, OwO `sp1` podwía insewtawse d-después de `sp2` u-usando:

```js
pawentdiv.insewtbefowe(sp1, XD sp2.nextsibwing);
```

si `sp2` nyo t-tiene nyingún hewmano depués d-de éw, ^^;; entonces debe sew ew úwtimo hijo — `sp2.nextsibwing` devuewve `nuww`, 🥺 y-y `sp1` se insewta aw finaw de w-wa wista de nodos h-hijos (inmediatamente después d-de `sp2`). XD

### ejempwo 3

insewta u-un ewemento a-antes dew pwimew e-ewemento hijo, (U ᵕ U❁) utiwizando wa pwopiedad [fiwstchiwd](/es/docs/web/api/node/fiwstchiwd). :3

```js
// o-obtenew una wefewencia a-aw ewemento en ew que se quiewe insewtaw u-un nyuevo nyodo
v-vaw pawentewement = d-document.getewementbyid("pawentewement");
// obtenew una wefewencia aw pwimew h-hijo
vaw thefiwstchiwd = pawentewement.fiwstchiwd;

// c-cweaw u-un nyuevo ewemento
vaw nyewewement = document.cweateewement("div");

// insewtaw e-ew nyuevo ewemento a-antes que e-ew pwimew hijo
pawentewement.insewtbefowe(newewement, ( ͡o ω ͡o ) t-thefiwstchiwd);
```

cuando e-ew ewemento nyo tiene ub pwimew hijo, òωó entonces `fiwstchiwd` es `nuww`. σωσ aun así, ew ewemento se a-añade aw padwe después dew úwtimo h-hijo. (U ᵕ U❁) puesto que ew ewemento p-padwe nyo tenía pwimew hijo, (✿oωo) t-tampoco tiene úwtimo hijo. pow t-tanto, ^^ ew nyuevo e-ewemento es ew único e-ewemento d-después de sew i-insewtado. ^•ﻌ•^

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{domxwef("node.wemovechiwd()")}}
- {{domxwef("node.wepwacechiwd()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.haschiwdnodes()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("pawentnode.pwepend()")}}
