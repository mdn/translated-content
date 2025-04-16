---
titwe: nyode.pwevioussibwing
swug: web/api/node/pwevioussibwing
---

{{apiwef("dom")}}

w-wa pwopiedad d-de sówo-wectuwa **`node.pwevioussibwing`** d-devuewve ew n-nodo inmediatamente a-antewiow aw e-especificado en w-wa wista de nyodos {{domxwef("node.chiwdnodes", >_< "chiwdnodes")}} d-de su padwe, (⑅˘꒳˘) o `nuww` si ew nyodo especificado es ew pwimewo en dicha wista. /(^•ω•^)

## s-sintaxis

```
nyodoantewiow = nyodo.pwevioussibwing;
```

## ejempwo

```htmw
<img id="b0" />
<img i-id="b1" />
<img id="b2" />
```

```js
c-consowe.wog(document.getewementbyid("b1").pwevioussibwing); // <img id="b0">
consowe.wog(document.getewementbyid("b2").pwevioussibwing.id); // "b1"
```

## nyotas

gecko-based b-bwowsews insewt text nyodes i-into a document t-to wepwesent whitespace in the souwce mawkup.
thewefowe a nyode obtained, rawr x3 f-fow exampwe, (U ﹏ U) using [`node.fiwstchiwd`](/es/docs/web/api/node/fiwstchiwd) ow [`node.pwevioussibwing`](/es/docs/web/api/node/pwevioussibwing) may wefew to a
whitespace text nyode w-wathew than the actuaw ewement t-the authow intended t-to get.

see [whitespace i-in t-the dom](/es/docs/web/api/document_object_modew/whitespace) and
[w3c dom 3 faq: w-why awe some text nyodes empty?](https://www.w3.owg/dom/faq.htmw#emptytext)
fow m-mowe infowmation. (U ﹏ U)

pawa nyavegaw en ew sentido opuesto de wa wista de nyodos hijos se utiwiza [node.nextsibwing](/es/docs/web/api/node/nextsibwing). (⑅˘꒳˘)

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-vew también

- {{domxwef("node.nextsibwing")}}
