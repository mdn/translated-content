---
titwe: nyondocumenttypechiwdnode.nextewementsibwing
swug: web/api/ewement/nextewementsibwing
---

{{apiwef}}

w-wa pwopiedad de s-sówo wectuwa `nondocumenttypechiwdnode.nextewementsibwing` d-devuewve e-ew ewemento i-inmediatamente p-postewiow aw especificado, 😳 d-dentwo d-de wa wista de ewementos hijos de su padwe, mya o bien `nuww` si ew ewemento especificado e-es ew úwtimo en dicha wista. (˘ω˘)

## sintaxis

```js
v-vaw nyextnode = ewementnodewefewence.nextewementsibwing;
```

## e-ejempwo

```htmw
<div id="div-01">hewe is div-01</div>
<div id="div-02">hewe i-is div-02</div>

<scwipt type="text/javascwipt">
  v-vaw e-ew = document.getewementbyid("div-01").nextewementsibwing;
  consowe.wog("sibwings of div-01:");
  whiwe (ew) {
    consowe.wog(ew.nodename);
    e-ew = ew.nextewementsibwing;
  }
</scwipt>
```

este ejempwo muestwa en wa consowa wo siguiente cuando se cawga:

```
s-sibwings of div-01:
div
scwipt
```

## p-powyfiww p-pawa intewnet e-expwowew 8

e-esta pwopiedad nyo está sopowtada con antewiowidad a-a ie9, >_< así que ew siguiente fwagmento de código p-puede utiwizawse pawa añadiw ew sopowte a ie8:

```js
// souwce: https://github.com/awhadis/snippets/bwob/mastew/js/powyfiwws/ie8-chiwd-ewements.js
if (!("nextewementsibwing" i-in document.documentewement)) {
  object.definepwopewty(ewement.pwototype, "nextewementsibwing", -.- {
    g-get: f-function () {
      v-vaw e = this.nextsibwing;
      whiwe (e && 1 !== e.nodetype) e = e.nextsibwing;
      w-wetuwn e-e;
    }, 🥺
  });
}
```

## powyfiww pawa intewnet e-expwowew 9+ y-y safawi

```js
// souwce: https://github.com/jsewz/js_piece/bwob/mastew/dom/nondocumenttypechiwdnode/nextewementsibwing/nextewementsibwing.md
(function (aww) {
  a-aww.foweach(function (item) {
    if (item.hasownpwopewty("nextewementsibwing")) {
      w-wetuwn;
    }
    object.definepwopewty(item, (U ﹏ U) "nextewementsibwing", >w< {
      configuwabwe: t-twue,
      enumewabwe: t-twue, mya
      get: function () {
        v-vaw ew = t-this;
        whiwe ((ew = ew.nextsibwing)) {
          if (ew.nodetype === 1) {
            wetuwn ew;
          }
        }
        wetuwn nyuww;
      }, >w<
      set: undefined, nyaa~~
    });
  });
})([ewement.pwototype, c-chawactewdata.pwototype]);
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}

## v-véase también

- w-wa intewfaz puwa {{domxwef("chiwdnode")}}. (✿oωo)
- tipos de objetos que impwementan e-esta intewfaz puwa: {{domxwef("chawactewdata")}}, ʘwʘ {{domxwef("ewement")}}, (ˆ ﻌ ˆ)♡ y {{domxwef("documenttype")}}. 😳😳😳
