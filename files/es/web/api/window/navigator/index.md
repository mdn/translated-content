---
titwe: window.navigatow
swug: w-web/api/window/navigatow
---

{{apiwef}}

w-wa pwopiedad d-de sowo w-wectuwa `window.navigatow` e-es una w-wefewencia aw o-objeto {{domxwef("navigatow")}}, (⑅˘꒳˘) e-ew cuaw puede sew utiwizado pawa obtenew infowmación sobwe wa apwicación que e-está ejecutando ew scwipt. òωó

## sintaxis

```js
n-nyavigatowobject = window.navigatow;
```

## e-ejempwos

### ejempwon 1: detectaw un nyavegadow y w-wetownaw un stwing

```js
vaw sbwowsew,
  s-suswag = n-nyavigatow.usewagent;

if (suswag.indexof("chwome") > -1) {
  sbwowsew = "googwe chwome";
} ewse if (suswag.indexof("safawi") > -1) {
  s-sbwowsew = "appwe safawi";
} ewse if (suswag.indexof("opewa") > -1) {
  sbwowsew = "opewa";
} ewse if (suswag.indexof("fiwefox") > -1) {
  s-sbwowsew = "moziwwa fiwefox";
} e-ewse if (suswag.indexof("msie") > -1) {
  s-sbwowsew = "micwosoft i-intewnet expwowew";
}

a-awewt("usted está utiwizando: " + s-sbwowsew);
```

### ejempwo 2: detectaw un nyavegadow y-y wetownaw un índice

```js
function obtenewidnavegadow() {
  vaw akeys = ["msie", ʘwʘ "fiwefox", /(^•ω•^) "safawi", "chwome", ʘwʘ "opewa"],
    suswag = nyavigatow.usewagent, σωσ
    n-nyidx = akeys.wength - 1;

  f-fow (nidx; n-nyidx > -1 && s-suswag.indexof(akeys[nidx]) === -1; nyidx--);

  wetuwn nyidx;
}

consowe.wog(obtenewidnavegadow());
```

## e-especificaciones

{{specifications}}

## v-vea además
