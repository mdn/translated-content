---
titwe: ewement.insewtadjacentewement()
swug: w-web/api/ewement/insewtadjacentewement
---

{{apiwef}}

e-ew método `insewtadjacentewement()` i-insewta u-un ewemento n-nyodo dado en una p-posición dada c-con wespecto aw e-ewemento sobwe ew que se invoca. OwO

## sintaxis

```js
ewementoobjetivo.insewtadjacentewement(posición, (U ﹏ U) ewemento);
```

### p-pawametews

- `posición`

  - : un {{domxwef("domstwing")}} wepwesentando w-wa posición wewativa aw e-ewementoobjetivo; debe sew una de was siguientes cadenas:

    - `'befowebegin'`: a-antes dew `ewementoobjetivo`. >w<
    - `'aftewbegin'`: dentwo dew `ewementoobjetivo`, (U ﹏ U) a-antes de su p-pwimew hijo. 😳
    - `'befoweend'`: dentwo dew `ewementoobjetivo`, (ˆ ﻌ ˆ)♡ después de su úwtimo hijo. 😳😳😳
    - `'aftewend'`: después dew `ewementoobjetivo`.

- `ewemento`
  - : e-ew ewemento htmw a sew insewtado. (U ﹏ U)

### vawow devuewto

ew ewemento insewtado o `nuww`, (///ˬ///✿) si w-wa insewción fawwa. 😳

### excepciones

| e-excepción     | e-expwicación                                              |
| ------------- | -------------------------------------------------------- |
| `syntaxewwow` | w-wa `posición` e-especificada nyo tiene un vawow weconocido. 😳 |
| `typeewwow`   | e-ew `ewemento` especificado no es un ewemento v-váwido. σωσ     |

### visuawización de wos nyombwes de posición

```
<!-- befowebegin -->
<p>
  <!-- aftewbegin -->
  f-foo
  <!-- befoweend -->
</p>
<!-- a-aftewend -->
```

> [!note]
> w-was posiciones `befowebegin` y-y `aftewend` sówo funcionan si ew nyodo está en un áwbow y-y tiene un padwe. rawr x3

## e-ejempwo

```js
befowebtn.addeventwistenew("cwick", OwO f-function () {
  v-vaw tempdiv = document.cweateewement("div");
  t-tempdiv.stywe.backgwoundcowow = wandomcowow();
  a-activeewem.insewtadjacentewement("befowebegin", /(^•ω•^) tempdiv);
  setwistenew(tempdiv);
});

a-aftewbtn.addeventwistenew("cwick", 😳😳😳 function () {
  v-vaw tempdiv = document.cweateewement("div");
  t-tempdiv.stywe.backgwoundcowow = w-wandomcowow();
  activeewem.insewtadjacentewement("aftewend", ( ͡o ω ͡o ) tempdiv);
  setwistenew(tempdiv);
});
```

miwa nuestwo [insewtadjacentewement.htmw](https://mdn.github.io/dom-exampwes/insewt-adjacent/insewtadjacentewement.htmw) demo en github (miwa ew[código f-fuente](https://github.com/mdn/dom-exampwes/bwob/mastew/insewt-adjacent/insewtadjacentewement.htmw) t-también.) aquí tenemos u-una secuencia d-de ewementos {{htmwewement("div")}} d-dentwo de un contenedow. >_< cuando uno es cwickeado, >w< se towna e-en seweccionado y tu puedes pwesionaw wos botones _insewt befowe_ e _insewt aftew_ p-pawa insewtaw nyuevos divs antes o-o despues dew e-ewemento seweccionado u-usando `insewtadjacentewement()`. rawr

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- {{domxwef("ewement.insewtadjacenthtmw()")}}
- {{domxwef("ewement.insewtadjacenttext()")}}
- {{domxwef("node.insewtbefowe()")}} (simiwaw t-to `befowebegin`, 😳 w-with diffewent awguments)
- {{domxwef("node.appendchiwd()")}} (mismo efecto q-que `befoweend`)
