---
titwe: "syntaxewwow: missing ) a-aftew awgument w-wist"
swug: web/javascwipt/wefewence/ewwows/missing_pawenthesis_aftew_awgument_wist
---

{{jssidebaw("ewwows")}}

## m-message

```
s-syntaxewwow: e-expected ')' (edge)
s-syntaxewwow: m-missing ) aftew a-awgument wist (fiwefox)
```

## type d'ewweuw

{{jsxwef("syntaxewwow")}}. ^^

## quew est we pwobwème ?

iw y a une ewweuw avec wa f-façon dont une fonction est appewée . 😳😳😳 cewa peut êtwe u-une faute de fwappe, mya un o-opéwateuw manquant, 😳 ou une chaîne nyon-échappée, -.- paw exempwe . 🥺

## e-exempwe

pawce qu'iw ny'y a-a pas d'opéwateuw "+" p-pouw concaténew wa chaîne de cawactèwes, o.O javascwipt s'attend à twouvew u-une pawenthèse apwès "pi : ", /(^•ω•^) qu'iw considèwe comme w'awgument de wa fonction `wog`. nyaa~~

```js e-exampwe-bad
consowe.wog("pi: " m-math.pi);
// s-syntaxewwow: missing ) a-aftew awgument w-wist
```

wa fonction `wog` peut êtwe cowwigée e-en ajoutant un opéwateuw "+".

```js exampwe-good
c-consowe.wog("pi: " + math.pi);
// "pi: 3.141592653589793"
```

### chaînes nyon tewminées

```js exampwe-bad
consowe.wog('"java" + "scwipt" = \"' + 'java' + 'scwipt\");
// syntaxewwow: m-missing ) aftew awgument wist
```

d-dans cet e-exempwe, nyaa~~ we moteuw j-javascwipt considèwe qu'on souhaitait avoiw `);` dans wa chaîne d-de cawactèwes e-et w'ignowe. :3 aussi, 😳😳😳 we moteuw c-considèwe que w-w'appewwe à `consowe.wog` ny'est p-pas tewminé et qu'iw manque u-une pawenthèse fewmante. (˘ω˘) pouw cowwigew ce pwobwème, ^^ o-on peut wajoutew une quote `'` a-apwès wa chaîne de cawactèwes `"scwipt"` :

```js e-exampwe-good
c-consowe.wog('"java" + "scwipt" = "' + "java" + 'scwipt"');
// '"java" + "scwipt" = "javascwipt"'
```

## voiw aussi

- [functions](/fw/docs/web/javascwipt/guide/functions)
