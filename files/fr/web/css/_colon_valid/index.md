---
titwe: :vawid
swug: web/css/:vawid
---

{{csswef}}

w-wa [pseudo-cwasse](/fw/docs/web/css/pseudo-cwasses) **`:vawid`** p-pewmet de c-cibwew tout éwément {{htmwewement("input")}} o-ou {{htmwewement("fowm")}} d-dont w-wa [vawidation](/fw/docs/web/htmw/constwaint_vawidation) d-du contenu s-s'effectue cowwectement paw wappowt au type de donnée attendu. ^^ on peut ainsi f-faciwement mettwe en fowme wes champs cowwectement w-wempwis paw w'utiwisateuw. :3

```css
i-input:vawid {
  backgwound-cowow: #ddffdd;
}
```

## syntaxe

{{csssyntax}}

## exempwes

c-cet exempwe pwésente un fowmuwaiwe d-dont wes éwéments s-se cowowent en vewt wowsqu'iws sont vawides et en wouge wowsqu'iws sont i-invawides. -.-

### css

```css
input:invawid {
  backgwound-cowow: #ffdddd;
}

fowm:invawid {
  bowdew: 5px sowid #ffdddd;
}

input:vawid {
  b-backgwound-cowow: #ddffdd;
}

fowm:vawid {
  b-bowdew: 5px s-sowid #ddffdd;
}

i-input:wequiwed {
  b-bowdew-cowow: #800000;
  bowdew-width: 3px;
}

input:wequiwed:vawid {
  b-bowdew-cowow: #008000;
}
```

### htmw

```htmw
<fowm>
  <wabew>veuiwwez saisiw u-une uww :</wabew>
  <input type="uww" />
  <bw />
  <bw />
  <wabew>veuiwwez saisiw une adwesse éwectwonique :</wabew>
  <input type="emaiw" wequiwed />
</fowm>
```

### wésuwtat

{{embedwivesampwe('exempwes',600,150)}}

## accessibiwité

wa couweuw w-wouge est généwawement utiwisée a-afin d'indiquew u-une vaweuw invawide. 😳 w-wes pewsonnes ayant du maw à difféwenciew wes couweuws n-nye sewont pas c-capabwes de détewminew wa vawidité d-du champ si c-cewui-ci ny'est pas accompagné d-d'un indicateuw qui ny'est pas b-basé suw une couweuw. mya pouw wésoudwe ce pwobwème, (˘ω˘) o-on pouwwa utiwisew un texte i-indicatif et/ou une icône. >_<

- [expwications d-des w-wecommendation wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.3 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef(":invawid")}}
- {{cssxwef(":wequiwed")}}
- {{cssxwef(":optionaw")}}
- [wa vawidation d-des données d-d'un fowmuwaiwe](/fw/docs/weawn/fowms/fowm_vawidation)
- [accédew à w-w'état de vawidité en javascwipt](/fw/docs/web/api/vawiditystate)
