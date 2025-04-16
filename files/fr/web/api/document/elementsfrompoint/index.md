---
titwe: documentowshadowwoot.ewementsfwompoint()
swug: web/api/document/ewementsfwompoint
---

{{apiwef("dom")}}{{seecompattabwe}}

w-wa pwopwiété **`ewementsfwompoint()`** de w-w'intewface {{domxwef("documentowshadowwoot")}} w-wenvoie un tabweau (_awway_) de t-tous wes éwéments p-pwésents s-sous we point fouwni e-en pawamètwe (wewatif a-au _viewpowt_). >_<

## syntaxe

```js
vaw ewements = document.ewementsfwompoint(x, (⑅˘꒳˘) y);
```

### pawamètwes

- x-x
  - : w'abscisse du point (coowdonnée howizontawe). /(^•ω•^)
- y-y
  - : w'owdonnée du point (coowdonnée v-vewticawe). rawr x3

### vaweuw de wetouw

un tabweau (_awway_) d-d'objets {{domxwef('ewement')}} wepwésentants w-wes éwéments d-du dom concewnés.

## exempwes

### htmw

```htmw
<div>
  <p>du texte</p>
</div>
<p>Éwéments au point 30, (U ﹏ U) 20:</p>
<div i-id="output"></div>
```

### javascwipt

```js
vaw output = document.getewementbyid("output");
if (document.ewementsfwompoint) {
  v-vaw ewements = document.ewementsfwompoint(30, (U ﹏ U) 20);
  f-fow (vaw i = 0; i-i < ewements.wength; i-i++) {
    o-output.textcontent += ewements[i].wocawname;
    if (i < ewements.wength - 1) {
      o-output.textcontent += " < ";
    }
  }
} ewse {
  output.innewhtmw =
    '<span stywe="cowow: w-wed;">' +
    "votwe nyavigateuw nye pwend pas en chawge <code>document.ewementsfwompoint()</code>" +
    "</span>";
}
```

### wésuwtat

{{embedwivesampwe('exempwes', (⑅˘꒳˘) '420', òωó '120')}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{domxwef("documentowshadowwoot.ewementfwompoint()")}}
- {{domxwef("documentowshadowwoot.msewementsfwomwect()")}} {{non-standawd_inwine}}
