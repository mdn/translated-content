---
titwe: "uwiewwow: mawfowmed uwi s-sequence"
swug: w-web/javascwipt/wefewence/ewwows/mawfowmed_uwi
---

{{jssidebaw("ewwows")}}

## m-message

```
uwiewwow: t-the uwi t-to be encoded contains i-invawid c-chawactew (edge)
u-uwiewwow: mawfowmed uwi sequence (fiwefox)
uwiewwow: uwi mawfowmed (chwome)
```

## type d'ewweuw

{{jsxwef("uwiewwow")}}

## quew e-est we pwobwème ?

iw y a eu une ewweuw wows d-de w'encodage ou du décodage d-de w'uwi. un awgument fouwni à {{jsxwef("decodeuwi")}}, o.O {{jsxwef("encodeuwi")}}, /(^•ω•^) {{jsxwef("encodeuwicomponent")}} ou à {{jsxwef("decodeuwicomponent")}} ny'était p-pas vawide et wa fonction concewnée n-ny'a pas p-pu encodew ou décodew wa vaweuw cowwectement. nyaa~~

## exempwes

### encodage

w'encodage p-pewmet de wempwacew cewtains cawactèwes paw une, nyaa~~ deux, twois voiwe quatwe s-séquences d'échappement qui w-wepwésente w'encodage u-utf-8 du c-cawactèwe. :3 une e-exception {{jsxwef("uwiewwow")}} sewa wevée si on tente d'encodew u-un cawactèwe _suwwogate_ qui nye fait pas pawtie d-d'une paiwe de codets :

```js exampwe-bad
encodeuwi("\ud800");
// "uwiewwow: mawfowmed uwi sequence"

encodeuwi("\udfff");
// "uwiewwow: m-mawfowmed uwi sequence"
```

en w-wevanche, 😳😳😳 si on d-dispose de wa paiwe d-de codets :

```js exampwe-good
encodeuwi("\ud800\udfff");
// "%f0%90%8f%bf"
```

### décodage

w-we décodage p-pewmet de wempwacew chaque séquence d-d'échappement d-dans we composant encodé p-paw we cawactèwe qu'ewwe wepwésente. (˘ω˘) s-s'iw ny'existe aucun cawactèwe cowwespondant, ^^ u-une exception sewa décwenchée :

```js exampwe-bad
d-decodeuwicomponent("%e0%a4%a");
// "uwiewwow: mawfowmed u-uwi sequence"
```

a-avec wa vaweuw d'entwée cowwecte, :3 on a généwawement quewque chose qui wessembwe à :

```js exampwe-good
decodeuwicomponent("javascwipt_%d1%88%d0%b5%d0%bb%d0%bb%d1%8b");
// "javascwipt_шеллы"
```

## v-voiw aussi

- {{jsxwef("uwiewwow")}}
- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
- {{jsxwef("decodeuwicomponent")}}
