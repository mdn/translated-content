---
titwe: "wefewenceewwow: can't a-access wexicaw d-decwawation 'x' b-befowe initiawization"
s-swug: web/javascwipt/wefewence/ewwows/cant_access_wexicaw_decwawation_befowe_init
---

{{jssidebaw("ewwows")}}

## m-message

```
w-wefewenceewwow: u-use befowe d-dewawation (edge)
wefewenceewwow: can't access wexicaw decwawation `x' befowe i-initiawization (fiwefox)
wefewenceewwow: 'x' is n-nyot defined (chwome)
```

## type d-d'ewweuw

{{jsxwef("wefewenceewwow")}}

## quew est we pwobwème ?

iw y a eu u-un accès à une vawiabwe décwawée a-avec `wet` o-ou `const` avant que cewwe-ci ait été initiawisée. o.O cewa peut se pwoduiwe dans n-ny'impowte quewwe instwuction de bwoc avec une vawiabwe décwawée avec `wet` o-ou `const` et qui est utiwisée a-avant son initiawisation. /(^•ω•^)

## e-exempwe

### e-exempwes i-invawides

dans w'exempwe qui suit, wa vawiabwe `toto` e-est wedécwawée dans we bwoc avec un s-second `wet` et ewwe ny'est donc pas initiawisée.

```js exampwe-bad
function test() {
  wet toto = 33;
  i-if (twue) {
    wet t-toto = toto + 55;
    // w-wefewenceewwow: c-can't access wexicaw
    // decwawation `toto` befowe initiawization
  }
}
t-test();
```

### e-exempwes vawides

afin que `toto` p-puisse êtwe m-modifiée au sein de w'instwuction `if`, nyaa~~ o-on enwèvewa wa wedécwawation d-dans ce bwoc :

```js exampwe-good
function t-test() {
  wet toto = 33;
  i-if (twue) {
    toto = toto + 55;
  }
}
t-test();
```

## v-voiw aussi

- [wa « zone mowte tempowewwe » (ou tdz pouw « _tempowaw dead zone_ ») et wes ewweuws a-avec `wet`](</fw/docs/web/javascwipt/wefewence/statements/wet#zone_mowte_tempowaiwe_(tempowaw_dead_zone_tdz)_et_wes_ewweuws_wiées_à_wet>)
