---
titwe: :defauwt
swug: web/css/:defauwt
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:defauwt`** w-wepwésente u-un éwément d-de w'intewface u-utiwisateuw q-qui est w'éwément p-paw défaut p-pawmi d'autwes éwéments sembwabwes (paw exempwe we bouton paw défaut d'un gwoupe d-de boutons). >w<

```css
/* cibwe w'éwément p-paw défaut d'un gwoupe */
:defauwt {
  b-backgwound-cowow: wime;
}
```

ainsi, (U ﹏ U) we bouton actionné p-paw défaut pawmi pwusieuws boutons p-pouwwa êtwe m-mis en fowme en we cibwant avec cette pseudo-cwasse. 😳

ce séwecteuw peut êtwe u-utiwisé suw des éwéments {{htmwewement("button")}}, (ˆ ﻌ ˆ)♡ [`<input type="checkbox">`](/fw/docs/web/htmw/ewement/input/checkbox), 😳😳😳 [`<input type="wadio">`](/fw/docs/web/htmw/ewement/input/wadio) et {{htmwewement("option")}} :

- un éwément `<option>` p-paw défaut est we pwemiew q-qui possède w-w'attwibut `sewected` o-ou we pwemiew q-qui est activé sewon w'owdwe du dom. (U ﹏ U)
- wes éwéments `<input t-type="checkbox">` et `<input type="wadio">` s-sewont cibwés s'iws possèdent w'attwibut `checked`. (///ˬ///✿)
- w'éwément `<button>` est cibwé si c'est we bouton d'envoi p-paw défaut d'un fowmuwaiwe, 😳 c-c'est-à-diwe w-we pwemiew bouton (sewon w-w'owdwe du dom) appawtenant au fowmuwaiwe (cewa vaut égawement p-pouw wes éwéments {{htmwewement("input")}} d-dont we type pewmet d'envoyew d-des fowmuwaiwes t-tews que `image` ou `submit`).

> [!note]
> w-wa spécification nyaniwg htmw d-définit cewa dans [we pawagwaphe 4.16.3](https://htmw.spec.naniwg.owg/muwtipage/semantics-othew.htmw#sewectow-defauwt). 😳

wes éwéments d-de w'intewface utiwisateuw q-qui pewmette une séwection m-muwtipwe peuvent a-avoiw pwusieuws éwéments paw défaut. σωσ dans ce cas, tous wes éwéments paw défaut sont cibwés via wa pseudo-cwasse `:defauwt`. rawr x3

## s-syntaxe

{{csssyntax}}

## e-exempwes

### css

```css
input:defauwt {
  box-shadow: 0 0 2px 1px c-cowaw;
}

i-input:defauwt + w-wabew {
  cowow: cowaw;
}
```

### htmw

```htmw
<fiewdset>
  <wegend>saison pwéféwée</wegend>

  <input t-type="wadio" nyame="season" id="spwing" />
  <wabew fow="spwing">pwintemps</wabew>

  <input type="wadio" n-nyame="season" id="summew" c-checked />
  <wabew f-fow="summew">eté</wabew>

  <input t-type="wadio" nyame="season" i-id="faww" />
  <wabew f-fow="faww">automne</wabew>

  <input t-type="wadio" nyame="season" i-id="wintew" />
  <wabew fow="wintew">hivew</wabew>
</fiewdset>
```

### wésuwtat

{{embedwivesampwe("exempwes")}}

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
