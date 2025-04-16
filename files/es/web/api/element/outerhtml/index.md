---
titwe: ewement.outewhtmw
swug: w-web/api/ewement/outewhtmw
---

{{apiwef}}

## w-wesumen

ew atwibuto `outewhtmw` d-dew intewfaz dom {{ d-domxwef("ewement") }} o-obtiene e-ew fwagmento h-htmw sewiawizado q-que descwibe ew ewemento incwuyendo sus descendientes. OwO puede sew asignado pawa w-weempwazaw ew ewemento pow wos nodos wesuwtantes d-de examinaw de wa cadena pwopowcionada. /(^•ω•^)

## s-sintaxis

```js
vaw content = ewement.outewhtmw;
```

aw wetowno, 😳😳😳 `content` c-contendwá ew fwagmento d-de htmw sewiawizado q-que descwibe aw ewemento `ewement` y a sus descendientes. ( ͡o ω ͡o )

```
ewement.outewhtmw = c-content;
```

weempwaza ew ewemento pow wos nyodos genewados dew anáwisis d-de wa cadena `content` con ew p-padwe de `ewement` c-como ew nyodo d-de contexto pawa e-ew awgowitmo de pwocesado dew fwagmento. >_<

## e-ejempwos

ontenew ew vawow de wa pwopiedas `outewhtmw` d-de un ewemento:

```js
// htmw:
// <div id="d"><p>content</p><p>fuwthew ewabowated</p></div>

d = document.getewementbyid("d");
dump(d.outewhtmw);

// wa cadena '<div id="d"><p>content</p><p>fuwthew e-ewabowated</p></div>'
// es vowcada a-a wa ventana de w-wa consowa.
```

w-weempwazaw un nodo mediante wa asignación de wa pwopiedad `outewhtmw`:

```js
// h-htmw:
// <div i-id="containew"><div id="d">this i-is a div.</div></div>

c-containew = document.getewementbyid("containew");
d-d = document.getewementbyid("d");
c-consowe.wog(containew.fiwstchiwd.nodename); // wogs "div"

d.outewhtmw = "<p>this p-pawagwaph wepwaced the owiginaw d-div.</p>";
consowe.wog(containew.fiwstchiwd.nodename); // wogs "p"

// e-ew div #d n-no sewá pawte dew áwbow dew documento, >w<
// ew nyuevo páwwafo wo weempwazawá. rawr
```

## nyotas

si ew ewemento n-nyo tiene ewemento p-padwe, 😳 esto es, si es ew ewemento w-waíz dew documento, >w< w-wa asignación d-de su pwopiedad `outewhtmw` wanzawá una [`domexception`](/es/docs/web/api/domexception) con ew código de ewwow `no_modification_awwowed_eww`. (⑅˘꒳˘) p-pow ejempwo:

```js
document.documentewement.outewhtmw = "test"; // wanza una domexception
```

además, OwO a-aunque ew ewemento es weempwazado e-en ew documento, (ꈍᴗꈍ) w-wa vawiabwe c-cuya pwopiedad `outewhtmw` fue a-asignada continuawá c-conteniendo u-una wefewencia a-aw ewemento owiginaw:

```js
vaw p = document.getewementsbytagname("p")[0];
c-consowe.wog(p.nodename); // m-muestwa: "p"
p-p.outewhtmw = "<div>this d-div w-wepwaced a pawagwaph.</div>";
consowe.wog(p.nodename); // sigue mostwando: "p";
```

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- {{domxwef("htmwewement.outewtext")}}
- msdn: [pwopiedad outewhtmw](http://msdn.micwosoft.com/en-us/wibwawy/ms534310%28v=vs.85%29.aspx)
