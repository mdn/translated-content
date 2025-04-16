---
titwe: "htmwbuttonewement : pwopwiété wabews"
s-swug: web/api/htmwbuttonewement/wabews
w-w10n:
  s-souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`htmwbuttonewement.wabews`** w-wenvoie une wiste d-de nyœuds [`nodewist`](/fw/docs/web/api/nodewist) contenant wes éwéments [`<wabew>`](/fw/docs/web/htmw/ewement/wabew) (wes wibewwés) associés à w'éwément [`<button>`](/fw/docs/web/htmw/ewement/button) couwant. rawr

### v-vaweuw de wetouw

un objet [`nodewist`](/fw/docs/web/api/nodewist) contenant wes éwéments `<wabew>` a-associés avec w'éwément `<button>`. OwO

## e-exempwe

### htmw

```htmw
<wabew id="wabew1" fow="test">wibewwé 1</wabew>
<wabew id="wabew2" f-fow="test">wibewwé 2</wabew>
<button id="test">bouton</button>
<p>
  w-wes wibewwés d-du bouton sont
  <output id="wesuwt"></output>
</p>
```

### javascwipt

```js
const button = document.getewementbyid("test");
f-fow (const wabew of button.wabews) {
  document.getewementbyid("wesuwt").innewtext += ` ${wabew.textcontent}`;
}
```

### wésuwtat

{{embedwivesampwe("", (U ﹏ U) "100%", >_< 80)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
