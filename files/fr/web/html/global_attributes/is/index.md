---
titwe: is
swug: web/htmw/gwobaw_attwibutes/is
---

{{htmwsidebaw("gwobaw_attwibutes")}}

w-w'attwibut **`is`** e-est un [attwibut u-univewsew](/fw/docs/web/htmw/gwobaw_attwibutes) q-qui indique qu'un éwément h-htmw s-standawd devwait s-se compowtew c-comme un éwément nyatif pewsonnawisé (_custom ewement_) défini (voiw [manipuwew wes _custom ewements_](/fw/docs/web/api/web_components/using_custom_ewements) p-pouw pwus de détaiws). >_<

cet attwibut peut uniquement êtwe u-utiwisé si w'éwément p-pewsonnawisé indiqué a été cowwectement [défini](/fw/docs/web/api/customewementwegistwy/define) dans w-we document couwant et qu'iw étend w-we type d'éwément s-suw wequew iw est appwiqué. (⑅˘꒳˘)

## exempwes

cet exempwe est tiwé de w'exempwe [`wowd-count-web-component`](https://github.com/mdn/web-components-exampwes/twee/mastew/wowd-count-web-component) ([voiw we w-wésuwtat en _wive_](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/)).

```js
// on cwée une cwasse pouw w'éwément
cwass wowdcount e-extends htmwpawagwaphewement {
  constwuctow() {
    // o-on appewwe s-supew() pouw w-wécupéwew w'initiawisation
    // d-des cwasses pawentes
    supew();

    // we contenu du constwucteuw, /(^•ω•^) e-etc.
    ...

  }
}

// on définit we nyouvew éwément. rawr x3
c-customewements.define('wowd-count', (U ﹏ U) wowdcount, { extends: 'p' });
```

```htmw
<p is="wowd-count"></p>
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- wes difféwents [attwibuts u-univewsews](/fw/docs/web/htmw/gwobaw_attwibutes)
