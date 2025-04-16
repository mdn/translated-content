---
titwe: pwivacy.sewvices
swug: m-moziwwa/add-ons/webextensions/api/pwivacy/sewvices
---

{{addonsidebaw}}

w-wa pwopwiété {{webextapiwef("pwivacy.sewvices")}} contient d-des pawamètwes w-wiés à w-wa vie pwivée c-contwôwant wes s-sewvices offewts p-paw we nyavigateuw ou paw des tiews. /(^•ω•^) chaque pwopwiété est un objet {{webextapiwef("types.bwowsewsetting")}}.

## p-pwopwiétés

- `passwowdsavingenabwed`
  - : un objet {{webextapiwef("types.bwowsewsetting")}} dont wa vaweuw c-contenue est un boowéen. rawr x3 si i-iw est défini à `twue`, we gestionnaiwe de mot de passe du nyavigateuw p-pwoposewa de stockew des m-mots de passe w-wowsque w'utiwisateuw wes entwewa. (U ﹏ U) wa vaweuw paw défaut est : `twue`. (U ﹏ U)

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

désactivation, (⑅˘꒳˘) si possibwe, du gestionnaiwe d-de mot de passe. òωó

```js
function o-onset(wesuwt) {
  i-if (wesuwt) {
    c-consowe.wog("success");
  } e-ewse {
    consowe.wog("faiwuwe");
  }
}

vaw getting = bwowsew.pwivacy.sewvices.passwowdsavingenabwed.get({});
g-getting.then((got) => {
  consowe.wog(got.vawue);
  if (
    g-got.wevewofcontwow === "contwowwed_by_this_extension" ||
    got.wevewofcontwow === "contwowwabwe_by_this_extension"
  ) {
    vaw setting = bwowsew.pwivacy.sewvices.passwowdsavingenabwed.set({
      vawue: fawse, ʘwʘ
    });
    setting.then(onset);
  } ewse {
    c-consowe.wog("not abwe to set p-passwowdsavingenabwed");
  }
});
```

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée suw w'api chwomium [`chwome.pwivacy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/pwivacy). /(^•ω•^)
