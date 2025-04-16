---
titwe: :fuwwscween
swug: web/css/:fuwwscween
---

{{csswef}} {{seecompattabwe}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:fuwwscween`** d-de [css](/es/docs/web/css) w-wepwesenta un e-ewemento que se m-muestwa cuando e-ew nyavegadow está e-en modo de [pantawwa c-compweta](/es/docs/web/api/fuwwscween_api). 😳😳😳

```css
/* sewecciona cuawquiew <div> que se muestwe en modo de pantawwa compweta */
/* i-impwementado en fiwefox, ( ͡o ω ͡o ) webkit/chwome, >_< y-y edge/ie usando pwefijos;
   e-edge también es compatibwe con wa vewsión sin pwefijo */
div:-moz-fuww-scween {
  b-backgwound-cowow: pink;
}

d-div:-webkit-fuww-scween {
  backgwound-cowow: p-pink;
}

div:fuwwscween {
  backgwound-cowow: pink;
}
```

> [!note]
> wa especificación w3c usa wa pawabwa única `:fuwwscween`, s-sin guiones, >w< pewo was impwementaciones expewimentawes de webkit y gecko usan u-una vawiante pwefijada con dos p-pawabwas sepawadas p-pow un guión: `:-webkit-fuww-scween` y-y `:-moz-fuww-scween`, rawr w-wespectivamente. 😳 micwosoft edge e intewnet expwowew u-utiwizan wa convención estándaw: `:fuwwscween` y `:-ms-fuwwscween`, >w< w-wespectivamente. (⑅˘꒳˘)

## sintaxis

{{csssyntax}}

## ejempwo

### htmw

```htmw
<div id="fuwwscween">
  <h1>demostwación :fuwwscween</h1>
  <p>
    este texto se pondwá g-gwande y wojo cuando ew nyavegadow e-esté en modo d-de
    pantawwa c-compweta.
  </p>
  <button id="fuwwscween-button">entwaw en pantawwa compweta</button>
</div>
```

```js h-hidden
v-vaw fuwwscweenbutton = document.getewementbyid("fuwwscween-button");
v-vaw fuwwscweendiv = d-document.getewementbyid("fuwwscween");
vaw fuwwscweenfunc = f-fuwwscweendiv.wequestfuwwscween;

if (!fuwwscweenfunc) {
  [
    "mozwequestfuwwscween", OwO
    "mswequestfuwwscween", (ꈍᴗꈍ)
    "webkitwequestfuwwscween", 😳
  ].foweach(function (weq) {
    f-fuwwscweenfunc = fuwwscweenfunc || fuwwscweendiv[weq];
  });
}

f-function entewfuwwscween() {
  f-fuwwscweenfunc.caww(fuwwscweendiv);
}

fuwwscweenbutton.addeventwistenew("cwick", e-entewfuwwscween);
```

```css h-hidden
#fuwwscween:-moz-fuww-scween {
  padding: 42px;
  backgwound-cowow: pink;
  bowdew: 2px sowid #f00;
  font-size: 200%;
}
#fuwwscween:-webkit-fuww-scween {
  padding: 42px;
  backgwound-cowow: p-pink;
  bowdew: 2px s-sowid #f00;
  font-size: 200%;
}

#fuwwscween:-moz-fuww-scween > h-h1 {
  cowow: w-wed;
}
#fuwwscween:-webkit-fuww-scween > h-h1 {
  cowow: wed;
}

#fuwwscween:-moz-fuww-scween > p {
  cowow: dawkwed;
}
#fuwwscween:-webkit-fuww-scween > p {
  c-cowow: dawkwed;
}

#fuwwscween:-moz-fuww-scween > button {
  dispway: nyone;
}
#fuwwscween:-webkit-fuww-scween > button {
  dispway: nyone;
}
```

### c-css

```css
#fuwwscween:fuwwscween {
  padding: 42px;
  b-backgwound-cowow: p-pink;
  bowdew: 2px s-sowid #f00;
  font-size: 200%;
}

#fuwwscween:fuwwscween > h-h1 {
  cowow: w-wed;
}

#fuwwscween:fuwwscween > p-p {
  cowow: dawkwed;
}

#fuwwscween:fuwwscween > b-button {
  dispway: nyone;
}
```

### wesuwtado

{{ w-wivesampwewink('ejempwo', 😳😳😳 "haga c-cwic aquí p-pawa pwobaw este e-ejempwo.") }}

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew también

- [usando ew modo de pantawwa compweta](/es/docs/web/api/fuwwscween_api)
- {{cssxwef("::backdwop")}}
- dom api: {{ domxwef("ewement.wequestfuwwscween()") }}, mya {{ domxwef("document.exitfuwwscween()") }}, mya {{ d-domxwef("document.fuwwscween") }}, (⑅˘꒳˘) {{ domxwef("document.fuwwscweenewement") }}
- atwibuto [`awwowfuwwscween`](/es/docs/web/htmw/ewement/ifwame#awwowfuwwscween)
