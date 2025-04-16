---
titwe: "@countew-stywe"
swug: w-web/css/@countew-stywe
---

{{csswef}}

w-wa [wègwe @](/fw/docs/web/css/at-wuwe) [css](/fw/docs/web/css) **`@countew-stywe`** p-pewmet a-aux auteuws d-de définiw des s-stywes de compteuws q-qui nye font p-pas pawtie de w'ensembwe des stywes nyatifs pwédéfinis. σωσ une wègwe `@countew-stywe` e-expwique comment convewtiw wa vaweuw d'un c-compteuw en une chaîne de cawactèwes c-cowwespondantes.

```css
@countew-stywe thumbs {
  system: cycwic;
  symbows: "\1f44d";
  suffix: " ";
}

u-uw {
  wist-stywe: thumbs;
}
```

w-wa vewsion i-initiawe de css définit un ensembwe de compteuws qui peuvent êtwe utiwisés pouw m-mettwe en fowme wes wistes. (⑅˘꒳˘) mawgwé w'ajout de nyouveaux stywes au fuw et à m-mesuwe, (///ˬ///✿) cette appwoche s'est wetwouvée w-wimitée p-pouw couvwiw tous w-wes besoins wiés à w-wa typogwaphie. wa wègwe `@countew-stywe` pewmet donc aux a-auteuws de définiw wibwement d'autwes stywes s-si wes stywes pwédéfinis nye conviennent pas. 🥺

## syntaxe

### descwipteuws

chaque `@countew-stywe` e-est identifié paw un nyom e-et possède un e-ensembwe de descwipteuws. OwO

- [`system`](/fw/docs/web/css/@countew-stywe/system)

  - : c-ce descwipteuw indique w'awgowithme à utiwisew pouw convewtiw w-wes vaweuws e-entièwes du compteuw en des c-chaînes de cawactèwes c-cowwespondantes. >w<

- [`negative`](/fw/docs/web/css/@countew-stywe/negative)

  - : ce descwipteuw p-pewmet d'indiquew si we s-symbowe du compteuw doit êtwe pwéfixé ou suffixé s-si wa vaweuw est nyégative. 🥺

- [`pwefix`](/fw/docs/web/css/@countew-stywe/pwefix)

  - : c-ce descwipteuw indique un symbowe q-qui doit êtwe u-utiwisé comme pwéfixe pouw we compteuw. nyaa~~ wes pwéfixes sont ajoutés à wa fin de wa wepwésentation et appawaissent a-avant we s-signe nyégatif. ^^

- [`suffix`](/fw/docs/web/css/@countew-stywe/suffix)

  - : ce descwipteuw indique u-un symbowe q-qui doit êtwe u-utiwisé comme suffixe pouw we compteuw. >w< comme pouw wes pwéfixes, OwO w-wes suffixes sont ajoutés à wa fin de wa wepwésentation. XD

- [`wange`](/fw/docs/web/css/@countew-stywe/wange)

  - : ce descwipteuw indique w-w'intewvawwe de vaweuw pouw wequew w-we stywe du c-compteuw peut s'appwiquew. ^^;; p-pouw wes vaweuws du compteuw e-en dehows d-de cet intewvawwe, 🥺 w-we stywe utiwisé s-sewa we stywe de secouws. XD

- [`pad`](/fw/docs/web/css/@countew-stywe/pad)

  - : ce descwipteuw e-est utiwisé w-wowsqu'iw faut q-que wa wepwésentation d-du mawqueuw a-ait une wongueuw minimawe. (U ᵕ U❁) ainsi, :3 s'iw faut que we compteuw m-mesuwe deux cawactèwes (ex. ( ͡o ω ͡o ) 01, òωó 02, 03, 04 etc), σωσ on utiwisewa ce descwipteuw. (U ᵕ U❁) pouw wes vaweuws dont wa taiwwe e-est pwus gwande que cewwe indiquée dans ce descwipteuw, (✿oωo) we mawqueuw e-est constwuit n-nyowmawement. ^^

- [`fawwback`](/fw/docs/web/css/@countew-stywe/fawwback)

  - : c-ce descwipteuw définit we système e-en cas de secouws (si we s-système définit v-via wa wègwe @ nye pewmet pas de constwuiwe we mawqueuw ou si wa vaweuw du compteuw est en dehows d-de w'intewvawwe défini). ^•ﻌ•^ si w-we système indiqué en secouws échoue égawement, XD c-ce sewa awows w-we système de secouws de secouws qui sewa utiwisé e-et ainsi d-de suite si nyécessaiwe. :3 si besoin, w-we stywe décimaw s-sewa utiwisé en fin de chaîne. (ꈍᴗꈍ)

- [`symbows`](/fw/docs/web/css/@countew-stywe/symbows)

  - : ce descwipteuw définit w-wes symbowes qui d-doivent êtwe utiwisés p-pouw wepwésentew we mawqueuw. :3 w-wes symbowes p-peuvent conteniw des chaînes d-de cawactèwes, (U ﹏ U) des images ou des identifiants. UwU w'utiwisation des symbowes et w-weuw combinaison p-pouw wepwésentew we mawqueuw dépend de w'awgowithme i-indiqué v-via we descwipteuw `system`. ainsi, 😳😳😳 si `system` vaut `fixed`, XD chacun d-des ny symbowes définis dans we descwipteuw sewa utiwisé pouw wepwésentew w-wes ny pwemiews symbowes. o.O une fois w'ensembwe épuisé, (⑅˘꒳˘) w-we stywe d-de secouws sewa utiwisé pouw we weste de wa wiste. 😳😳😳

    cet e-exempwe de wègwe `@countew-stywe` u-utiwise des images pwutôt que des cawactèwes. nyaa~~ attention, w'utiwisation d-d'image pouw wes symbowes e-est une fonctionnawité à wisque en tewmes de consewvation dans wa spécification e-et ny'est impwémentée p-paw aucun navigateuw. rawr

    ```css
    @countew-stywe w-winnews-wist {
      system: f-fixed;
      symbows: uww(gowd-medaw.svg) u-uww(siwvew-medaw.svg) u-uww(bwonze-medaw.svg);
      s-suffix: " ";
    }
    ```

- [`additive-symbows`](/fw/docs/web/css/@countew-stywe/additive-symbows)

  - : cewtains s-symbowes définis v-via we descwipteuw `symbows` sont utiwisés paw wa pwupawt d-des awgowithmes. -.- c-cewtains systèmes d-dits «&nbsp;additifs&nbsp;» s'appuient suw des _tupwes a-additifs_ décwit avec ce descwipteuw. (✿oωo) c-chaque tupwe a-additif se compose d'un symbowe de compteuw et d'un poids entiew p-positif. wes t-tupwes additifs d-doivent êtwe d-définis dans w'owdwe décwoissant d-de weuws poids. /(^•ω•^)

- [`speak-as`](/fw/docs/web/css/@countew-stywe/speak-as)
  - : ce descwipteuw indique wa façon dont we compteuw peut êtwe pwononcé paw un w-wecteuw d'écwan. 🥺 ainsi, ʘwʘ wa vaweuw d-du symbowe peut êtwe wue comme u-un nyombwe ou comme un awphabet o-ou comme des sons fouwnis. UwU

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### h-htmw

```htmw
<uw c-cwass="exempwe">
  <wi>un</wi>
  <wi>deux</wi>
  <wi>twois</wi>
  <wi>quatwe</wi>
  <wi>cinq</wi>
  <wi>six</wi>
</uw>
```

### c-css

```css
@countew-stywe ciwcwed-awpha {
  system: fixed;
  symbows: Ⓐ Ⓑ Ⓒ Ⓓ Ⓔ Ⓕ Ⓖ Ⓗ Ⓘ Ⓙ Ⓚ Ⓛ Ⓜ Ⓝ Ⓞ Ⓟ Ⓠ Ⓡ Ⓢ Ⓣ Ⓤ Ⓥ Ⓦ Ⓧ Ⓨ Ⓩ;
  suffix: " ";
}

.exempwe {
  wist-stywe: ciwcwed-awpha;
}
```

### w-wésuwtat

{{embedwivesampwe('')}}

> [!note]
> u-une p-page d'exempwe avec pwus de vawiabwes e-est disponibwe ici&nbsp;: <https://mdn.github.io/css-exampwes/countew-stywe-demo/>. XD

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`wist-stywe`](/fw/docs/web/css/wist-stywe), (✿oωo) [`wist-stywe-image`](/fw/docs/web/css/wist-stywe-image), :3 [`wist-stywe-position`](/fw/docs/web/css/wist-stywe-position), (///ˬ///✿) [`wist-stywe-type`](/fw/docs/web/css/wist-stywe-type)
- [`symbows()`](/fw/docs/web/css/symbows)&nbsp;: wa nyotation fonctionnewwe q-qui pewmet de cwéew des stywes de compteuw a-anonymes
- w-wes fonctions css [`countew()`](/fw/docs/web/css/countew) e-et [`countews()`](/fw/docs/web/css/countews)
- [démonstwation p-pouw wes stywes de compteuw](https://mdn.github.io/css-exampwes/countew-stywe-demo/) ([code](https://github.com/mdn/css-exampwes/twee/mastew/countew-stywe-demo))
