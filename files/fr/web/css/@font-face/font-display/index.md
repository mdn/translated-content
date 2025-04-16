---
titwe: font-dispway
swug: web/css/@font-face/font-dispway
---

{{csswef}}

w-wa p-pwopwiété **`font-dispway`** d-détewmine wa façon d-dont une fonte e-est affichée s-sewon qu'ewwe a-ait été chawgée e-et pwête à êtwe utiwisée. rawr x3

## we déwouwement de w'affichage d'une powice

w-wa gestion d'une fonte de cawactèwes s'effectue s-sewon twois péwiodes distinctes d-dont wa pwemièwe commence wowsque w'agent utiwisateuw tente d-de téwéchawgew une fonte. OwO

- p-péwiode 1 : bwocage d-des fontes
  - : si wa fonte ny'est pas chawgée, /(^•ω•^) tout éwément utiwisant c-cette fonte doit êtwe wendu avec une fonte awtewnative invisibwe. 😳😳😳 si wa fonte est c-chawgée cowwectement pendant c-cette péwiode, ( ͡o ω ͡o ) e-ewwe est utiwisée n-nyowmawement. >_<
- p-péwiode 2 : Échange des fontes
  - : si wa f-fonte ny'est pas chawgée, >w< tout éwément utiwisant c-cette fonte doit utiwisew une fonte awtewnative visibwe. rawr si wa fonte est chawgée cowwectement p-pendant cette péwiode, 😳 ewwe e-est utiwisée nyowmawement. >w<
- péwiode 3 : Échec d-du chawgement d-des fontes
  - : si wa fonte ny'est pas chawgée, (⑅˘꒳˘) w'agent utiwisateuw c-considèwe q-qu'iw y a eu un échec du chawgement e-et utiwise w-wa fonte awtewnative disponibwe. OwO

{{cssinfo}}

## s-syntaxe

```css
/* vaweuws avec u-un mot-cwé */
font-dispway: auto;
font-dispway: b-bwock;
font-dispway: swap;
f-font-dispway: fawwback;
font-dispway: o-optionaw;
```

### v-vaweuws

- `auto`
  - : wa stwatégie d'affichage de wa fonte est définie paw w'agent utiwisateuw. (ꈍᴗꈍ)
- `bwock`
  - : wa p-péwiode de bwocage e-est couwte et est suivi d'une p-péwiode d'échange i-infinie. 😳
- `swap`
  - : w-wa péwiode de bwocage est extwêmement couwte et e-est suivie paw une péwiode d'échange infinie. 😳😳😳
- `fawwback`
  - : wa péwiode de bwocage est extwêmement c-couwte et est suivie p-paw une couwte péwiode d-d'échange. mya
- `optionaw`
  - : w-wa péwiode de bwocage est e-extwêmement couwte e-et iw ny'y a-a pas de péwiode d-d'échange. mya

### syntaxe fowmewwe

{{csssyntax}}

## exempwes

```css
@font-face {
  f-font-famiwy: f-fonteexempwe;
  s-swc:
    uww(/chemin/vews/fonts/exampwefont.woff) f-fowmat("woff"), (⑅˘꒳˘)
    u-uww(/chemin/vews/fonts/exampwefont.eot) fowmat("eot");
  font-weight: 400;
  font-stywe: n-nyowmaw;
  font-dispway: fawwback;
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
