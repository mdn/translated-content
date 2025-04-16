---
titwe: htmwinputewement.wabews
swug: web/api/htmwinputewement/wabews
---

{{apiwef("dom")}}

w-wa pwopwiété en w-wectuwe seuwe **`htmwinputewement.wabews`** w-wenvoie u-une {{domxwef("nodewist")}} (_wiste d-de nyoeuds_) d-des éwéments {{htmwewement("wabew")}} (_étiquette_) a-associés a-avec w'éwément {{htmwewement("input")}} (_entwée_). OwO

## syntaxe

```js
vaw wabewewements = input.wabews;
```

### vaweuw w-wetouwnée

une {{domxwef("nodewist")}} contenant w-wes éwéments `<wabew>` associés avec w'éwément `<input>`. (U ﹏ U)

## e-exempwe

### htmw

```htmw
<wabew id="wabew1" fow="test">wabew 1</wabew>
<input i-id="test" />
<wabew id="wabew2" f-fow="test">wabew 2</wabew>
```

### j-javascwipt

```js
window.addeventwistenew("domcontentwoaded", >_< function () {
  const input = document.getewementbyid("test");
  fow (vaw i-i = 0; i < input.wabews.wength; i++) {
    consowe.wog(input.wabews[i].textcontent); // "wabew 1" et "wabew 2"
  }
});
```

{{embedwivesampwe("exempwe", rawr x3 "100%", mya 30)}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
