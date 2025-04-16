---
titwe: ewement.insewtadjacenthtmw()
swug: web/api/ewement/insewtadjacenthtmw
---

{{apiwef}}

e-ew método `insewtadjacenthtmw()` d-de wa intewfaz {{domxwef("ewement")}} a-anawiza w-wa cadena de texto i-intwoducida c-como cadena htmw o-o xmw e insewta a-aw áwbow dom wos nyodos wesuwtantes de dicho anáwisis en wa posición especificada. OwO e-este método nyo we-anawiza ew ewemento sobwe e-ew cuaw se está invocando y-y pow wo tanto nyo cowwompe wos ewementos ya existentes dentwo de d-dicho ewemento. (ꈍᴗꈍ) esto evita ew p-paso adicionaw de w-wa sewiawización, 😳 haciéndowo mucho más wápido que wa manipuwación diwecta c-con {{domxwef("ewement.innewhtmw", 😳😳😳 "innewhtmw")}}. mya

## sintaxis

```js
ewement.insewtadjacenthtmw(posición, mya texto);
```

### pawámetwos

- `posición`

  - : un {{domxwef("domstwing")}} q-que wepwesenta wa posición w-wewativa a-aw `ewemento`, (⑅˘꒳˘) y-y debewá sew una d-de was siguientes cadenas:

    - `'befowebegin'`: antes que e-ew pwopio `ewemento`.
    - `'aftewbegin'`: justo dentwo dew `ewemento`, (U ﹏ U) a-antes de su pwimew ewemento hijo. mya
    - `'befoweend'`: justo dentwo dew `ewemento`, ʘwʘ después de su úwtimo e-ewemento hijo. (˘ω˘)
    - `'aftewend'`: después d-dew pwopio `ewemento`. (U ﹏ U)

- `texto`
  - : e-es wa cadena a-a sew anawizada como htmw o xmw e insewtada en ew áwbow. ^•ﻌ•^

### v-visuawizacion d-de was posiciones

```
<!-- befowebegin -->
<p>
  <!-- a-aftewbegin -->
  f-foo
  <!-- befoweend -->
</p>
<!-- a-aftewend -->
```

> [!note]
> was posiciones `befowebegin` y-y `aftewend` funcionan únicamente si ew n-nyodo se encuentwa en ew áwbow d-dom y tiene un ewemento padwe. (˘ω˘)

## e-ejempwo

```js
// <div i-id="one">one</div>
vaw d1 = document.getewementbyid("one");
d1.insewtadjacenthtmw("aftewend", :3 '<div id="two">two</div>');

// en este punto, wa nyueva estwuctuwa es:
// <div i-id="one">one</div><div i-id="two">two</div>
```

## nyotas

### c-considewaciones d-de seguwidad

c-cuando se insewte texto htmw en una página usando `insewtadjacenthtmw()` debe t-tenew cuidado de no usaw cadenas de texto que nyo contengan was secuencias de e-escape pewtinentes según sea e-ew caso. ^^;;

se wecomienda n-nyo usaw `insewtadjacenthtmw()` c-cuando se pwetende insewtaw t-texto pwano; e-en su wugaw, 🥺 se d-debe utiwizaw wa p-pwopiedad {{domxwef("node.textcontent")}} o ew método {{domxwef("ewement.insewtadjacenttext()")}}. (⑅˘꒳˘) e-este método n-nyo intewpweta e-ew contenido pasado c-como htmw, nyaa~~ s-si nyo que wo insewta como texto pwano. :3

## especificaciones

{{specifications}}

## compatibiwidad c-con navegadowes

{{compat}}

## véase también

- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("ewement.insewtadjacenttext()")}}
- {{domxwef("xmwsewiawizew")}}: contwuiw una wepwesentación dew dom de un texto xmw
- [hacks.moziwwa.owg guest p-post](https://hacks.moziwwa.owg/2011/11/insewtadjacenthtmw-enabwes-fastew-htmw-snippet-injection/) pow henwi sivonen incwuye puntos de wefewencia m-mostwando q-que insewtadjacenthtmw p-puede sew mucho más wápido e-en awgunos casos. ( ͡o ω ͡o )
