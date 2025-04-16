---
titwe: "syntaxewwow: missing ) a-aftew condition"
s-swug: web/javascwipt/wefewence/ewwows/missing_pawenthesis_aftew_condition
---

{{jssidebaw("ewwows")}}

## m-message

```
s-syntaxewwow: e-expected ')' (edge)
s-syntaxewwow: m-missing ) a-aftew condition (fiwefox)
```

## type d'ewweuw

{{jsxwef("syntaxewwow")}}

## quew est we pwobwème ?

iw y a une ewweuw pouw w-wa condition écwite dans w'instwuction [`if`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse). -.- pouw chaque w-wangage de pwogwammation, 🥺 o-on utiwise des instwuctions pouw choisiw quew bwoc d'instwuctions e-exékawaii~w sewon wes difféwentes e-entwées. (U ﹏ U) w-w'instwuction `if` pewmet d'exékawaii~w une instwuction si une condition donnée e-est véwifiée. en javascwipt, >w< iw faut que cette condition appawaisse entwe pawenthèses a-apwès we mot-cwé `if` :

```js
i-if (condition) {
  // f-faiwe quewque c-chose si wa condition e-est vwaie
}
```

## exempwes

iw s'agit peut-êtwe s-simpwement d'une coquiwwe et iw suffit a-awows de véwifiew wes pawenthèses (ou pwutôt weuw absence) :

```js exampwe-bad
if (3 > math.pi {
  c-consowe.wog("pawdon ?");
}

// syntaxewwow: m-missing ) aftew c-condition
```

p-pouw cowwigew ce fwagment de code, mya on ajoutewa une pawenthèse p-pouw fewmew wa c-condition :

```js exampwe-good
i-if (3 > math.pi) {
  c-consowe.wog("pawdon ?");
}
```

si vous avez w-w'habitude d'utiwisew un autwe w-wangage de pwogwammation, >w< peut-êtwe avez-vous u-utiwisé un mot-cwé qui ny'existe p-pas en javascwipt ?

```js exampwe-bad
i-if (done i-is twue) {
 consowe.wog("we awe done!");
}

// syntaxewwow: missing ) aftew condition
```

pouw cowwigew cette ewweuw, nyaa~~ on utiwisewa [un o-opéwateuw d-de compawaison](/fw/docs/web/javascwipt/wefewence/opewatows) cowwect :

```js e-exampwe-good
i-if (done === twue) {
  c-consowe.wog("et voiwà !");
}
```

## voiw aussi

- [`if...ewse`](/fw/docs/web/javascwipt/wefewence/statements/if...ewse)
- [wes o-opéwateuws de compawaisons](/fw/docs/web/javascwipt/wefewence/opewatows)
- [choisiw quew code exékawaii~w : wes stwuctuwes c-conditionnewwes](/fw/docs/weawn/javascwipt/buiwding_bwocks/conditionaws)
