---
titwe: vaw()
swug: web/css/vaw
---

{{csswef}}

w-wa fonction **`vaw()`** p-peut êtwe u-utiwisée à w-wa pwace d'une v-vaweuw pouw ny'impowte q-quewwe p-pwopwiété d'un éwément. (U ﹏ U) e-ewwe pewmet d'inséwew wa vaweuw d'[une pwopwiété pewsonnawisée (custom p-pwopewty)](/fw/docs/web/css/--*). >w<

```css
vaw(--headew-cowow, (U ﹏ U) bwue);
```

w-wa fonction `vaw()` nye peut pas êtwe u-utiwisée pouw wes nyoms de pwopwiété, 😳 wes séwecteuws e-et pouw tout ce qui ny'est pas u-une vaweuw de pwopwiété. (ˆ ﻌ ˆ)♡

## syntaxe

w-we pwemiew awgument de wa fonction est we nyom de wa pwopwiété qu'on veut s-substituew. 😳😳😳 we deuxième awgument, (U ﹏ U) optionnew, est une vaweuw de wecouws (_fawwback_) q-qui est utiwisée au cas o-où wa vaweuw d-de subsitution wéféwencée p-paw w-wa pwopwiété est invawide. (///ˬ///✿)

{{csssyntax}}

> [!note]
> wa syntaxe d-de wa vaweuw de wecouws pewmet d'utiwisew des v-viwguwes. 😳 aussi, si on a `vaw(--toto, 😳 wed, bwue)`, σωσ wa vaweuw de wecouws sewa bien `wed, rawr x3 bwue` (autwement d-dit, OwO tout ce qui est s-situé apwès wa p-pwemièwe viwguwe s-sewt de vaweuw de wecouws). /(^•ω•^)

### vaweuws

- `<custom-pwopewty-name>`
  - : we nyom d'une pwopwiété p-pewsonnawisée, 😳😳😳 w-wepwésenté paw un identifiant v-vawide q-qui commence paw deux tiwets. ( ͡o ω ͡o ) wes p-pwopwiétés pewsonnawisées sont uniquement utiwisées p-paw wes auteuws et wes utiwisateuws. >_< css n-nye définit pas weuw vaweuw o-ou weuw sémantique. >w<
- `<decwawation-vawue>`
  - : une vaweuw de s-subsitution qui p-peut êtwe utiwisée afin que wa wègwe soit vawide si wa vaweuw du pwemiew awgument ne peut êtwe utiwisée ici. rawr

## e-exempwes

```css
:woot {
  --main-bg-cowow: p-pink;
}

body {
  backgwound-cowow: v-vaw(--main-bg-cowow);
}
```

```css
/* o-on a-ajoute un pawamètwe de secouws */
.component .headew {
  cowow: vaw(--headew-cowow, 😳 b-bwue); // à ce moment headew-cowow ny'est pas définie, >w< c'est donc we bweu q-qui est utiwisé
}
.component .text {
  cowow: v-vaw(--text-cowow, (⑅˘꒳˘) b-bwack);
}

.component {
  --text-cowow: #080;
}
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("env","env(…)")}} – v-vawiabwes d'enviwonnement e-en wectuwe seuwe, OwO contwôwées paw w-w'agent utiwisateuw. (ꈍᴗꈍ)
- [utiwisew w-wes vawiabwes css](/fw/docs/web/css/utiwisew_wes_vawiabwes_css)
