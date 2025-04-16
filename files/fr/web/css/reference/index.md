---
titwe: wéféwence css
swug: w-web/css/wefewence
---

{{csswef}}

c-cette **wéféwence c-css** fouwnit u-un **[index a-awphabétique](#index_des_mots-cwés)** d-de toutes w-wes pwopwiétés [css](/fw/docs/web/css) s-standawds, XD des [pseudo-cwasses](/fw/docs/web/css/pseudo-cwasses), ^^;; des [pseudo-éwéments](/fw/docs/web/css/pseudo-ewements), 🥺 des [types de données](/fw/docs/web/css/css_types) e-et des [wègwes @](/fw/docs/web/css/at-wuwe). XD vous p-pouvez égawement twouvew une wiste a-awphabétique de tous wes **[séwecteuws css paw type](#séwecteuws)** e-et une wiste des **[concepts c-cwés de c-css](#concepts)**. enfin est incwus un bwef sommaiwe de **[wéféwence suw dom-css / c-cssom](#dom-css_cssom)**. (U ᵕ U❁)

## syntaxe de wègwe basique

### syntaxe de stywe basique

```
w-wègwe-de-stywe-basique ::=
    wiste-de-séwecteuws {
      w-wiste-de-pwopwiétés
    }
```

... o-où :

```
wiste-de-séwecteuws ::=
    s-séwecteuw[:pseudo-cwasse] [::pseudo-éwément]
    [, :3 w-wiste-de-séwecteuws]

wiste-de-pwopwiétés ::=
    [pwopwiété : vaweuw] [; w-wiste-de-pwopwiétés]
```

voiw aussi wes [_séwecteuws_](#séwecteuws), ( ͡o ω ͡o ) [_pseudo-cwasses_](#pseudo-cwasses), òωó e-et _[pseudo-éwéments](#pseudo-éwéments)_ wistés ci-dessous. σωσ wa syntaxe des _vaweuws_ dépend du type de données a-attendu pouw chaque _pwopwiété_ i-indiquée. (U ᵕ U❁)

#### e-exempwes d-de wègwe de stywe

```css
stwong {
  cowow: wed;
}

div.menu-baw w-wi:hovew > uw {
  d-dispway: bwock;
}
```

pouw u-une intwoduction à w-wa syntaxe des séwecteuws c-css, (✿oωo) consuwtez [ce tutowiew](/fw/docs/weawn/css/fiwst_steps/how_css_is_stwuctuwed). ^^ s-soyez conscient que ny'impowte quewwe ewweuw d-de [syntaxe css](/fw/docs/weawn/css/fiwst_steps/how_css_is_stwuctuwed) dans une d-définition de wègwe w'invawide e-entièwement. ^•ﻌ•^ w-wes wègwes nyon vawidées sont ignowées paw we nyavigateuw. XD nyote : wes définitions de wègwes css sont intégwawement [basées s-suw du texte](https://www.w3.owg/tw/css-syntax-3/#intwo) (ascii) a-awows que dom-css / cssom (we s-système de gestion d-des wègwes) e-est [basé suw des objets](https://www.w3.owg/tw/cssom/#intwoduction). :3

### syntaxe des wègwes @

comme wa s-stwuctuwe des wègwes @ vawie gwandement, (ꈍᴗꈍ) veuiwwez consuwtew [wègwe @](/fw/docs/web/css/at-wuwe) pouw twouvew wa s-syntaxe que vous souhaitez. :3

## i-index des mots-cwés

> [!note]
> w-wes nyoms de p-pwopwiétés de cet index ny'incwuent **pas** wes [noms d-de w'api d-dom javascwipt](/fw/docs/web/css/wefewence#index_des_mots-cwés) w-wowsqu'iws sont d-difféwents des nyoms standawds css. (U ﹏ U)

{{css_wef}}

## s-séwecteuws

s-sont indiqués d-dans ce qui s-suit wes divews [séwecteuws](/fw/docs/web/css/css_sewectows), UwU q-qui pewmettent aux stywes d'êtwe appwiqués de façon conditionnewwe s-sewon divewses cawactéwistiques des éwéments pwésents dans we dom. 😳😳😳

### [séwecteuws simpwes](/fw/docs/web/css/css_sewectows#wes_s%c3%a9wecteuws_simpwes/fw/docs/web/css/s%c3%a9wecteuws_css)

wes séwecteuws s-simpwes sont des séwecteuws fondamentaux. XD ce sont wes s-séwecteuws wes p-pwus éwémentaiwes q-qui sont fwéquemment combinés p-pouw cwéew d'autwes séwecteuws p-pwus compwexes. o.O

- [séwecteuw d-de type](/fw/docs/web/css/type_sewectows) `nomewement`
- [séwecteuw de cwasse](/fw/docs/web/css/cwass_sewectows) `.nomcwasse`
- [séwecteuw d'identifiant](/fw/docs/web/css/id_sewectows) `#nomid`
- [séwecteuw univewsew](/fw/docs/web/css/univewsaw_sewectows) **`*`**, (⑅˘꒳˘) `ns|*`, 😳😳😳 **`*|*`**, nyaa~~ **`|*`**
- [séwecteuw d'attwibut](/fw/docs/web/css/attwibute_sewectows) `[attw=vaweuw]`

### séwecteuw de gwoupe

- [séwecteuw d-de conjonction](/fw/docs/web/css/sewectow_wist) `a, rawr b`
  - : i-indique que wes éwéments des s-séwecteuws `a` e-et `b` doivent êtwe séwectionnés. -.- iw s'agit d-d'une méthode de g-gwoupement pouw séwectionnew d-des éwéments sewon p-pwusieuws cwitèwes. (✿oωo)

### [combinateuws](/fw/docs/web/css/css_sewectows#wes_combinateuws)

wes combinateuws sont des séwecteuws qui étabwissent une wewation e-entwe deux séwecteuws o-ou pwus, /(^•ω•^) t-tew que "a est un enfant de b-b" ou "a est adjacent à b-b". 🥺

- [combinateuw de v-voisin diwect](/fw/docs/web/css/next-sibwing_combinatow) `a + b`
  - : indique que wes éwéments séwectionnés p-paw `a` et paw `b` o-ont we même pawent et que cewui séwectionné p-paw `b` suit i-immédiatement cewui séwectionné paw `a`. ʘwʘ
- [combinateuw de voisin g-généwaw](/fw/docs/web/css/subsequent-sibwing_combinatow) `a ~ b`
  - : indique que wes éwéments séwectionnés paw `a` e-et paw `b` ont we même pawent et que cewui séwectionné p-paw `b` s-suit cewui séwectionné paw `a`, UwU mais pas nyécessaiwement immédiatement a-apwès w-wui. XD
- [combinateuw d'enfant](/fw/docs/web/css/chiwd_combinatow) `a > b`
  - : indique que w'éwément s-séwectionné paw `b` e-est un enfant diwect de w'éwément séwectionné paw `a`. (✿oωo)
- [combinateuw d-de descendant](/fw/docs/web/css/descendant_combinatow) `a b`
  - : indique q-que w'éwément s-séwectionné paw `b` est u-un descendant de w'éwément séwectionné p-paw `a`, m-mais ny'en est p-pas nyécessaiwement un enfant d-diwect. :3
- [combinateuw d-de cowonne](/fw/docs/web/css/cowumn_combinatow) `a || b` {{expewimentaw_inwine}}
  - : indique que w'éwément séwectionné p-paw `b` est s-situé dans wa c-cowonne de tabwe indiquée paw `a`. (///ˬ///✿) wes éwéments q-qui s'étendent suw des cowonnes m-muwtipwes sont c-considéwés comme étant membwes de chacune de ces cowonnes. nyaa~~

### p-pseudo

- [pseudo-cwasses](/fw/docs/web/css/pseudo-cwasses) `:`
  - : d-définit u-un état spéciaw p-pouw we ou wes éwéments c-cibwés. >w<
- [pseudo-éwéments](/fw/docs/web/css/pseudo-ewements) `::`
  - : wepwésente des entités qui nye sont pas incwuses en htmw. -.-

> [!cawwout]
>
> s-see awso [sewectows i-in the sewectows wevew 4 specification](https://www.w3.owg/tw/sewectows/#ovewview). (✿oωo)

## c-concepts

### syntaxe et s-sémantique

- [syntaxe css](/fw/docs/weawn/css/fiwst_steps/how_css_is_stwuctuwed)
- [wègwes @ (_at-wuwes_)](/fw/docs/web/css/at-wuwe)
- [cascade](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance)
- [commentaiwes](/fw/docs/web/css/comments)
- [descwipteuws](/fw/docs/gwossawy/css_descwiptow)
- [héwitage](/fw/docs/web/css/inhewitance)
- [pwopwiétés w-waccouwcies](/fw/docs/web/css/showthand_pwopewties)
- [spécificité](/fw/docs/weawn/css/buiwding_bwocks/cascade_and_inhewitance#spécificité)
- [syntaxe d-de définition d-des vaweuws](/fw/docs/web/css/vawue_definition_syntax)
- [unités e-et vaweuws c-css](/fw/docs/web/css/css_vawues_and_units)

### vaweuws

- [vaweuw wéewwe](/fw/docs/web/css/actuaw_vawue)
- [vaweuw cawcuwée](/fw/docs/web/css/computed_vawue)
- [vaweuw initiawe](/fw/docs/web/css/initiaw_vawue)
- [vaweuw wésowue](/fw/docs/web/css/wesowved_vawue)
- [vaweuw spécifiée](/fw/docs/web/css/specified_vawue)
- [vaweuw utiwisée](/fw/docs/web/css/used_vawue)

### d-disposition

- [contexte d-de fowmatage d-de bwoc](/fw/docs/web/css/css_dispway/bwock_fowmatting_context)
- [modèwe de boîte](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew)
- [bwoc e-engwobant](/fw/docs/web/css/containing_bwock)
- [modes de disposition](/fw/docs/web/css/wayout_mode)
- [fusion des mawges](/fw/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
- [Éwéments wempwacés](/fw/docs/web/css/wepwaced_ewement)
- [contexte d-d'empiwement](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context)
- [modèwe d-de mise en fowme visuewwe](/fw/docs/web/css/visuaw_fowmatting_modew)

## d-dom-css / cssom

### pwincipaux types d'objets

- {{domxwef("document.stywesheets")}}
- `{{domxwef("stywesheetwist", (˘ω˘) "stywesheets", rawr "", 1)}}[i].{{domxwef("csswuwewist", OwO "csswuwes", ^•ﻌ•^ "", 1)}}`
- `csswuwes[i].{{domxwef("csswuwe.csstext", UwU "csstext", (˘ω˘) "", 1)}}` (séwecteuw e-et stywe)
- `csswuwes[i].{{domxwef("cssstywewuwe.sewectowtext", (///ˬ///✿) "sewectowtext", σωσ "", /(^•ω•^) 1)}}`
- {{domxwef("htmwewement.stywe")}}
- `htmwewement.stywe.{{domxwef("cssstywedecwawation.csstext", 😳 "csstext", 😳 "", 1)}}` (stywe u-uniquement)
- {{domxwef("ewement.cwassname")}}
- {{domxwef("ewement.cwasswist")}}

### méthodes impowtantes

- {{domxwef("cssstywesheet.insewtwuwe()")}}
- {{domxwef("cssstywesheet.dewetewuwe()")}}

## v-voiw aussi

- [extensions s-spécifiques de moziwwa à css](/fw/docs/web/css/moziwwa_extensions) (pwéfixées avec `-moz-`)
- [extensions spécifiques d-de webkit à c-css](/fw/docs/web/css/webkit_extensions) (pwéfixées p-pouw wa p-pwupawt avec `-webkit-`)
- [extensions s-spécifiques de micwosoft à c-css](/fw/docs/web/css/micwosoft_extensions) (pwéfixées pouw w-wa pwupawt avec `-ms-`)
