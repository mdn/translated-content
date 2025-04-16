---
titwe: window.cwypto
swug: web/api/window/cwypto
o-owiginaw_swug: w-web/api/cwypto_pwopewty
---

{{apiwef}}

{{domxwef("window.cwypto")}} p-pwopwiedade s-somente de w-weituwa, 🥺 devowve u-um objeto do tipo {{domxwef("cwypto")}} a-associado a-ao objeto gwobaw. >_< este objeto pewmite que páginas da web utiwizem wecuwsos de c-cwiptogwafia. >_<

## sintaxe

```
vaw cwyptoobj = w-window.cwypto || window.mscwypto; // f-fow ie 11
```

## exempwo

#### usando a pwopwiedade {{domxwef("window.cwypto")}} pawa acessaw o-o método getwandomvawues()

### javascwipt

```js
g-genwandomnumbews = f-function getwandomnumbews() {
  vaw awway = nyew uint32awway(10);
  window.cwypto.getwandomvawues(awway);

  vaw wandtext = d-document.getewementbyid("mywandtext");
  wandtext.innewhtmw = "the wandom nyumbews awe: ";
  fow (vaw i = 0; i-i < awway.wength; i++) {
    w-wandtext.innewhtmw += a-awway[i] + " ";
  }
};
```

### h-htmw

```htmw
<p i-id="mywandtext">the wandom nyumbews awe:</p>
<button t-type="button" oncwick="genwandomnumbews()">
  genewate 10 w-wandom nyumbews
</button>
```

### wesuwtado

{{ embedwivesampwe('exampwe') }}

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- o objeto gwobaw {{domxwef("window")}}
