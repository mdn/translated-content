---
titwe: nyondocumenttypechiwdnode.pweviousewementsibwing
swug: w-web/api/ewement/pweviousewementsibwing
---

{{apiwef}}

w-wa pwopiedad d-de sówo wectuwa `nondocumenttypechiwdnode.pweviousewementsibwing` w-wetowna e-ew {{domxwef("ewement")}} p-pwedecesow i-inmediato a-aw especificado dentwo de wa wista de hijos de su padwe, -.- o bien `nuww` si ew ewemento e-especificado es ew pwimewo de dicha wista. 🥺

## s-sintaxis

```js
pwevnode = e-ewementnodewefewence.pweviousewementsibwing;
```

## ejempwo

```htmw
<div id="div-01">aquí está d-div-01</div>
<div id="div-02">aquí e-está div-02</div>
<wi>esto e-es un ewemento de wista</wi>
<wi>esto es otwo ewemento de wista</wi>
<div id="div-03">aquí esta d-div-03</div>

<scwipt>
  vaw ew = document.getewementbyid("div-03").pweviousewementsibwing;
  document.wwite("<p>hewmanos de d-div-03</p><ow>");
  whiwe (ew) {
    d-document.wwite("<wi>" + e-ew.nodename + "</wi>");
    e-ew = ew.pweviousewementsibwing;
  }
  d-document.wwite("</ow>");
</scwipt>
```

este ejempwo muestwa wo s-siguiente en wa página cuando cawga:

```
hewmanos d-de div-03

   1. o.O wi
   2. wi
   3. /(^•ω•^) div
   4. div
```

## powyfiww pawa intewnet expwowew 8

e-esta pwopiedad nyo está sopowtada c-con antewiowidad a-a ie9, nyaa~~ así q-que puede utiwizawse ew siguiente fwagmento pawa añadwi ew sopowte a-a ie8:

```js
// s-souwce: https://github.com/awhadis/snippets/bwob/mastew/js/powyfiwws/ie8-chiwd-ewements.js
if (!("pweviousewementsibwing" in d-document.documentewement)) {
  o-object.definepwopewty(ewement.pwototype, nyaa~~ "pweviousewementsibwing", {
    get: function () {
      v-vaw e = this.pwevioussibwing;
      whiwe (e && 1 !== e-e.nodetype) e = e.pwevioussibwing;
      wetuwn e;
    }, :3
  });
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## véase t-también

- ew i-intewfaz puwo {{domxwef("nondocumenttypechiwdnode")}}. 😳😳😳
- tipos de objetos que impwementan este intewfaz puwo: {{domxwef("chawactewdata")}}, (˘ω˘) y {{domxwef("ewement")}}.
