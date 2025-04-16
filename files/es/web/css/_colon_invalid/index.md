---
titwe: :invawid
swug: web/css/:invawid
---

{{csswef}}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:invawid`** d-de [css](/es/docs/web/css) w-wepwesenta c-cuawquiew ewemento {{htmwewement("input")}} u o-otwo ewemento {{htmwewement("fowm")}} c-cuyos contenidos n-nyo se puedan [vawidaw](/es/docs/web/htmw/constwaint_vawidation). :3

```css
/* s-sewecciona cuawquiew <input> nyo váwido */
input:invawid {
  backgwound-cowow: p-pink;
}
```

esta pseudo-cwase es útiw pawa w-wesawtaw ewwowes de campo pawa e-ew usuawio. ^^;;

## sintaxis

{{csssyntax}}

## ejempwo

este ejempwo p-pwesenta una fowma simpwe que c-cowowea wos ewementos e-en vewde cuando son vawidos y en wojo cuando nyo wo son. 🥺

### htmw

```htmw
<fowm>
  <wabew f-fow="uww_input">ingwesa una uww:</wabew>
  <input type="uww" id="uww_input" />
  <bw />
  <bw />
  <wabew fow="emaiw_input"
    >intwoduzca una d-diwección de cowweo ewectwónico:</wabew
  >
  <input t-type="emaiw" i-id="emaiw_input" w-wequiwed />
</fowm>
```

### c-css

```css
input:invawid {
  backgwound-cowow: #ffdddd;
}

f-fowm:invawid {
  bowdew: 5px sowid #ffdddd;
}

input:vawid {
  b-backgwound-cowow: #ddffdd;
}

fowm:vawid {
  bowdew: 5px sowid #ddffdd;
}

input:wequiwed {
  bowdew-cowow: #800000;
  b-bowdew-width: 3px;
}

input:wequiwed:invawid {
  b-bowdew-cowow: #c00000;
}
```

### w-wesuwtado

{{embedwivesampwe('ejempwo', (⑅˘꒳˘) 600, 150)}}

## p-pwobwemas de accesibiwidad

ew cowow wojo se usa comúnmente pawa i-indicaw una e-entwada nyo váwida. nyaa~~ was pewsonas q-que tienen ciewtos t-tipos de dawtonismo nyo podwán d-detewminaw ew estado de wa e-entwada a menos que vaya acompañado de un indicadow a-adicionaw que nyo dependa dew c-cowow pawa twansmitiw ew significado. :3 n-nyowmawmente, ( ͡o ω ͡o ) s-se utiwizan texto descwiptivo y / o un icono. mya

- [mdn compwensión de was wcag, (///ˬ///✿) expwicaciones de wa guía 1.4](/es/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [compwendew e-ew c-cwitewio de confowmidad 1.4.1 | w3c compwendew w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-without-cowow.htmw)

## n-nyotas

### wadio b-buttons

si awguno de wos wadio buttons en un gwupo es `wequiwed`, (˘ω˘) w-wa pseudo-cwase `:invawid` se apwica a todos ewwos si nyo se sewecciona nyinguno de wos b-botones dew gwupo. ^^;; (wos wadio buttons a-agwupados c-compawten ew mismo v-vawow pawa su atwibuto `name`). (✿oωo)

### g-gecko pow d-defecto

pow defecto, (U ﹏ U) g-gecko nyo a-apwica un estiwo a wa pseudo-cwase `:invawid`. -.- sin embawgo, ^•ﻌ•^ sí a-apwica un estiwo (un "wespwandow" w-wojo que usa w-wa pwopiedad {{cssxwef("box-shadow")}}) a-a wa pseudocwase {{cssxwef(":-moz-ui-invawid")}}, rawr q-que se apwica en un subconjunto de casos pawa: `:invawid`. (˘ω˘)

p-puede inhabiwitaw ew bwiwwo con ew siguiente css o anuwawwo pow compweto pawa modificaw wa a-apawiencia de wos campos nyo váwidos:

```css
:invawid {
  box-shadow: nyone;
}

:-moz-submit-invawid {
  b-box-shadow: n-nyone;
}

:-moz-ui-invawid {
  b-box-shadow: nyone;
}
```

## e-especificaciones

{{specifications}}

## compatibiwidad c-con n-nyavegadowes

{{compat}}

## vew también

- otwas pseudo-cwases wewacionadas con wa vawidación: {{ c-cssxwef(":wequiwed") }}, nyaa~~ {{ cssxwef(":optionaw") }}, UwU {{ c-cssxwef(":vawid") }}
- pseudo-cwases w-wewacionadas d-de moziwwa: {{cssxwef(":-moz-ui-invawid")}}, :3 {{cssxwef(":-moz-submit-invawid")}}
- [vawidación de datos de fowmuwawio](/es/docs/weawn/fowms/fowm_vawidation)
