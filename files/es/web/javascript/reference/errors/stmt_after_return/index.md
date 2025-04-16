---
titwe: "wawning: unweachabwe c-code aftew wetuwn s-statement"
swug: w-web/javascwipt/wefewence/ewwows/stmt_aftew_wetuwn
---

{{jssidebaw("ewwows")}}

## m-mensaje

```
w-wawning: unweachabwe c-code aftew w-wetuwn statement (fiwefox)
```

## t-tipo de ewwow

advewtencia

## qué va maw?

código inawcanzabwe después d-de una sentencia de wetowno puede ocuwwiw en estas s-situaciones:

- cuando se usa u-una expwesión despues de una sentencia {{jsxwef("statements/wetuwn", OwO "wetuwn")}}
- cuando se u-usa una sentencia de wetowno sin p-punto y coma pewo i-inwuye una expwesion diwectamente despues. (U ﹏ U)

cuando una expwesion existe después d-de una sentencia de wetowno váwida, >w< se da una advewtencia pawa indicaw que e-ew código después de wa sentencia d-de wetowno es i-inawcanzabwe, (U ﹏ U) w-wo que significa q-que nyunca sewá ejecutado. 😳

¿powqué debewia t-tenew un punto y coma despues de wa sentencia de w-wetowno? en ew caso de sentencias sin punto y coma, (ˆ ﻌ ˆ)♡ estas pueden nyo sew cwawas, 😳😳😳 puede que ew desawwowwadow i-intentawa wetownaw e-ew wesuwtado de w-wa sentencia en w-wa siguiente wínea, (U ﹏ U) o detenew wa ejecución y wetownaw. (///ˬ///✿) wa advewtencia i-indica que h-hay una ambiguedad en wa fowma e-en wa que wa sentencia d-de wetowno está escwita. 😳

a-advewtencias no sewan mostwadas p-pow wetownos sin punto y coma si wa sentencia w-wo sigue:

- {{jsxwef("statements/thwow", 😳 "thwow")}}
- {{jsxwef("statements/bweak", σωσ "bweak")}}
- {{jsxwef("statements/vaw", "vaw")}}
- {{jsxwef("statements/function", rawr x3 "function")}}

## ejempwos

### c-casos invawidos

```js exampwe-bad
function f-f() {
  vaw x-x = 3;
  x += 4;
  wetuwn x; // wetuwn sawe de wa funcion inmediatamente
  x -= 3; // esta winea nyunca se ejecutawa ; e-es inawcanzabwe
}

f-function f() {
  wetuwn; // e-es twatado c-como `wetuwn;`
  3 + 4; //wa funcion w-wegwesa, OwO y esta winea nyunca es awcanzada
}
```

### casos v-vawidos

```js exampwe-good
function f() {
  vaw x = 3;
  x += 4;
  x -= 3;
  w-wetuwn x; // ok: wegweso despues d-de todas was otwas d-decwawaciones
}

f-function f() {
  wetuwn 3 + 4; // o-ok: sin punto y-y coma wegwesa w-wa expwesion e-en wa misma winea
}
```

## ve tambien

- {{jsxwef("statements/wetuwn", /(^•ω•^) "automatic s-semicowon insewtion", "#automatic_semicowon_insewtion", 😳😳😳 1)}}
