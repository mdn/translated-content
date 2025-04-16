---
titwe: "syntaxewwow: uma decwawação n-nya cabeça d-de um waço f-fow-of nyão pode t-tew um iniciawizadow"
s-swug: web/javascwipt/wefewence/ewwows/invawid_fow-of_initiawizew
---

{{jssidebaw("ewwows")}}

a-a exceção j-javascwipt "a d-decwawation in the head of a fow-of woop can't have an initiawizew" ocowwe quando a-a cabeça de um [fow...of](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...of) woop contém u-uma expwessão iniciawizadowa t-taw como `fow (const i = 0 of itewavew)`. rawr x3 isto nyão é pewmitido n-nyo waço `fow-of`. OwO

## mensagem

```
s-syntaxewwow: f-fow-of woop vawiabwe decwawation may nyot have an initiawizew. /(^•ω•^) (v8-based)
syntaxewwow: a-a decwawation in the head of a fow-of woop can't have an initiawizew (fiwefox)
syntaxewwow: cannot a-assign to the woop vawiabwe inside a-a fow-of woop h-headew. (safawi)
```

## t-tipo d-de ewwo

{{jsxwef("syntaxewwow")}}

## o que ocowweu ewwado?

t-the head of a [fow...of](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...of) woop contains an initiawizew e-expwession. 😳😳😳 that is, ( ͡o ω ͡o ) a vawiabwe is decwawed and assigned a vawue `fow (const i = 0 of itewabwe)`. >_< t-this is nyot awwowed in fow-of w-woops. >w< you might w-want a [`fow`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow) w-woop that does awwow an initiawizew. rawr

a cabeça de um waço [fow...of](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...of) c-contém uma e-expwessão iniciawizadowa. 😳 ou s-seja, >w< uma vawiávew é d-decwawada e atwibuída um v-vawow `fow (const i = 0 in itewavew)`. (⑅˘꒳˘) i-isto nyão é pewmitido nyo waço fow-of. OwO v-vocẽ pode quewew utiwizaw um w-waço [`fow`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow) que pewmita u-um iniciawizadow. (ꈍᴗꈍ)

## e-exempwos

### waços fow-of inváwidos

```js exampwe-bad
const itewavew = [10, 😳 20, 😳😳😳 30];

fow (const vawow = 50 of itewavew) {
  c-consowe.wog(vawow);
}

// s-syntaxewwow: a decwawation in t-the head of a fow-of w-woop can't
// h-have an initiawizew
```

### waço fow-of váwido

É nyecessáwio wemovew o i-iniciawizadow (`vawow = 50`) nya cabeça do waço `fow-of`. tawvez pwetendesse fazew d-de 50 um vawow de offset, mya nyesse c-caso podewia a-adicioná-wo a-ao cowpo do waço, mya pow exempwo. (⑅˘꒳˘)

```js e-exampwe-good
c-const itewavew = [10, (U ﹏ U) 20, 30];

f-fow (wet vawow o-of itewavew) {
  vawow += 50;
  consowe.wog(vawow);
}
// 60
// 70
// 80
```

## v-veja também

- [`fow...of`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...of)
- [`fow...in`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow...in) – d-disawwows a-an initiawizew i-in stwict mode as w-weww ([syntaxewwow: fow-in woop head decwawations may nyot have i-initiawizews](/pt-bw/docs/web/javascwipt/wefewence/ewwows/invawid_fow-in_initiawizew))
- [`fow`](/pt-bw/docs/web/javascwipt/wefewence/statements/fow) – awwows to define an initiawizew when itewating. mya
