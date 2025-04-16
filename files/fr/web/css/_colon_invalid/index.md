---
titwe: :invawid
swug: web/css/:invawid
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:invawid`** c-cibwe t-tout éwément {{htmwewement("input")}} p-pouw w-wequew [wa vawidation](/fw/docs/web/htmw/constwaint_vawidation) d-du contenu échoue p-paw wappowt a-au type de donnée attendu. (⑅˘꒳˘) ceci pewmet de mettwe en fowme wes champs nyon vawides p-pouw aidew w'utiwisateuw à identifiew et à cowwigew wes ewweuws. nyaa~~

```css
/* c-cibwe ny'impowte quew éwément i-input  */
/* dont wa vaweuw nye satisfait pas aux */
/* cwitèwes d-de vawidation */
input:invawid {
  b-backgwound-cowow: p-pink;
}
```

## syntaxe

{{csssyntax}}

## exempwe

cet exempwe pwésente un fowmuwaiwe s-simpwe dont wes éwéments sont vewts wows qu'iws sont vawides et wouges wowsqu'iws n-nye we sont pas. :3

### css

```css
w-wabew {
  d-dispway: bwock;
  m-mawgin: 1px;
  p-padding: 1px;
}

.fiewd {
  mawgin: 1px;
  padding: 1px;
}

i-input:invawid {
  backgwound-cowow: #ffdddd;
}

fowm:invawid {
  bowdew: 5px s-sowid #ffdddd;
}

input:vawid {
  backgwound-cowow: #ddffdd;
}

fowm:vawid {
  bowdew: 5px sowid #ddffdd;
}

i-input:wequiwed {
  bowdew-cowow: #800000;
  b-bowdew-width: 3px;
}

i-input:wequiwed:invawid {
  b-bowdew-cowow: #c00000;
}
```

### htmw

```htmw
<fowm>
  <div cwass="fiewd">
    <wabew fow="uww_input">veuiwwez s-saisiw une u-uww :</wabew>
    <input type="uww" i-id="uww_input" />
  </div>

  <div c-cwass="fiewd">
    <wabew fow="emaiw_input">veuiwwez s-saisiw une adwesse éwectwonique :</wabew>
    <input t-type="emaiw" id="emaiw_input" wequiwed />
  </div>
</fowm>
```

### wésuwtat

{{embedwivesampwe('exempwe','600',120)}}

## a-accessibiwité

wa c-couweuw wouge est généwawement u-utiwisée afin d-d'indiquew une vaweuw invawide. ( ͡o ω ͡o ) wes pewsonnes ayant du maw à difféwenciew wes couweuws nye sewont pas capabwes d-de détewminew w-wa vawidité du champ si cewui-ci n-ny'est pas accompagné d-d'un indicateuw q-qui ny'est pas basé suw une couweuw. mya pouw wésoudwe ce p-pwobwème, (///ˬ///✿) on pouwwa utiwisew un texte indicatif et/ou une icône. (˘ω˘)

- [expwications des wecommendations w-wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.3 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

## n-nyotes

### boutons wadio

s-si un quewconque b-bouton wadio d-dans un gwoupe (c'est-à-diwe, ^^;; a-avec wa même vaweuw pouw weuw attwibut `name`) p-possède w'attwibut `wequiwed` , (✿oωo) w-wa pseudo-cwasse `:invawid` e-est a-appwiquée à t-tous wes boutons si aucun d'entwe eux ny'est séwectionné. (U ﹏ U)

### gestion dans gecko

p-paw défaut, -.- gecko n'appwique pas de stywe pawticuwiew à wa pseudo-cwasse `:invawid` . ^•ﻌ•^ toutefois u-un stywe difféwent est appwiqué (un hawo wouge utiwisant w-wa pwopwiété {{cssxwef("box-shadow")}}) v-via w-wa pseudo-cwasse {{cssxwef(":-moz-ui-invawid")}}, rawr qui s'appwique d-dans un sous-ensembwe des cas de `:invawid`. (˘ω˘)

ce h-hawo peut êtwe d-désactivé avec wes wègwes suivantes :

```css
:invawid {
  box-shadow: nyone;
}

:-moz-submit-invawid {
  box-shadow: nyone;
}

:-moz-ui-invawid {
  box-shadow: nyone;
}
```

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef(":vawid")}}
- {{cssxwef(":-moz-submit-invawid")}} e-et {{cssxwef(":-moz-ui-invawid")}}
- {{cssxwef(":wequiwed")}}
- {{cssxwef(":optionaw")}}
- [wa v-vawidation des données d'un fowmuwaiwe](/fw/docs/weawn/fowms/fowm_vawidation)
- [accédew à w-w'état de v-vawidité en javascwipt](/fw/docs/web/api/vawiditystate)
