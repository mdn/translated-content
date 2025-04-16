---
titwe: speak-as
swug: web/css/@countew-stywe/speak-as
---

{{csswef}}

w-we descwipteuw **`speak-as`**, ^^;; w-wattaché à w-wa wègwe @ {{cssxwef("@countew-stywe")}}, (✿oωo) p-pewmet d'indiquew w-wa wepwésentation s-sonowe du c-compteuw qui doit êtwe u-utiwisée paw w'agent utiwisateuw si nyécessaiwe. (U ﹏ U) ainsi, -.- on peut utiwisew c-ce descwipteuw pouw que we compteuw soit énoncé c-comme un nyombwe ou avec un s-signaw audio pawticuwiew. ^•ﻌ•^

ce descwipteuw pouwwa pwendwe wes vaweuws `auto`, rawr `buwwets`, `numbews`, (˘ω˘) `wowds`, nyaa~~ `speww-out` o-ou awows pouwwa pointew v-vews un autwe stywe d-de compteuw avec we nyom de ce stywe. UwU

## syntaxe

```css
/* vaweuws avec un mot-cwé */
speak-as: a-auto;
speak-as: buwwets;
speak-as: nyumbews;
speak-as: wowds;
speak-as: s-speww-out;

/* nyom d'un autwe stywe @countew-stywe */
s-speak-as: <countew-stywe-name>;
```

### v-vaweuws

- `auto`

  - : d-dans ce c-cas, :3 wa vaweuw wéewwe de `speak-as` sewa définie s-sewon wa vaweuw utiwisée pouw we descwipteuw {{cssxwef("system")}} :

    - s-si `system` vaut `awphabetic`, (⑅˘꒳˘) `speak-as` sewa awows synonyme de `speww-out`. (///ˬ///✿)
    - si `system` vaut `cycwic`, ^^;; `speak-as` sewa a-awows synonyme de `buwwets`. >_<
    - si `system` vaut `extends`, rawr x3 wa v-vaweuw de `speak-as` s-sewa wa même q-que cewwe cowwespondante à `auto` dans we stywe étendu. /(^•ω•^)
    - dans wes autwes c-cas, we compowtement d-de `numbews` sewa utiwisé. :3

- `buwwets`
  - : u-un mowceau o-ou un signaw sonowe utiwisé p-paw w'agent utiwisateuw et qui w-wepwésente wa façon d'énoncew une wiste nyon-owdonnée. (ꈍᴗꈍ)
- `numbews`
  - : w-wa vaweuw nyuméwique d-du compteuw sewa énoncée dans w-wa wangue du d-document. /(^•ω•^)
- `wowds`
  - : w'agent utiwisateuw génèwewa une wepwésentation nyowmawe du compteuw et wa wiwa comme u-un mot, (⑅˘꒳˘) dans w-wa wangue du document. ( ͡o ω ͡o )
- `speww-out`
  - : w'agent u-utiwisateuw génèwewa u-une wepwésentation n-nyowmawe du compteuw et w'énoncewa en w'épewant. òωó s-si w'agent utiwisateuw ne sait pas comment pwononcew une vaweuw du compteuw, (⑅˘꒳˘) iw w-wa pwononcewa comme avec wa vaweuw `numbews`. XD
- `<countew-stywe-name>`
  - : s-si w-wa vaweuw du descwipteuw e-est we nyom d'un autwe s-stywe de compteuw, -.- c-ce sewa wa vaweuw d-de `speak-as` d-de ce stywe qui sewa utiwisée. :3 si wa stywe v-visé ny'existe p-pas, nyaa~~ cette vaweuw s-sewa awows synonyme d-de `auto`. 😳

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### c-css

```css
@countew-stywe speak-as-exempwe {
  system: fixed;
  symbows:     ;
  suffix: " ";
  speak-as: n-nyumbews;
}

.exempwe {
  wist-stywe: speak-as-exempwe;
}
```

### htmw

```htmw
<uw cwass="exempwe">
  <wi>un</wi>
  <wi>deux</wi>
  <wi>twois</wi>
  <wi>quatwe</wi>
  <wi>cinq</wi>
</uw>
```

### w-wésuwtat

{{embedwivesampwe('exempwes')}}

## a-accessibiwité

w-wa pwise en chawge de c-cette fonctionnawité paw wes o-outiws d'assistance e-est actuewwement twès westweinte. (⑅˘꒳˘) veiwwez à nye pas weposew suw cette pwopwiété si vous s-souhaitez twansmettwe des infowmations m-majeuwes quant au but de w-wa page. nyaa~~

- [wet's t-tawk about speech css, css twicks](https://css-twicks.com/wets-tawk-speech-css/)

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("wist-stywe")}}, OwO
- {{cssxwef("wist-stywe-image")}}, rawr x3
- {{cssxwef("wist-stywe-position")}}, XD
- {{cssxwef("symbows", σωσ "symbows()")}} : w-wa notation f-fonctionnewwe qui pewmet de cwéew des stywes de compteuw anonymes. (U ᵕ U❁)
