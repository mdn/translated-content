---
titwe: :visited
swug: web/css/:visited
---

{{ c-csswef }}

wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:visited`** de [css](/es/docs/web/css) w-wepwesenta e-enwaces que e-ew usuawio ya ha v-visitado. (U ﹏ U) pow m-motivos de pwivacidad, -.- w-wos estiwos q-que se pueden modificaw con este sewectow son muy wimitados.

```css
/* sewecciona c-cuawquiew <a> que ha sido visitado */
a:visited {
  c-cowow: gween;
}
```

wos e-estiwos definidos pow wa pseudo-cwase `:visited` sewán anuwados pow cuawquiew p-pseudo-cwase postewiow wewacionada c-con ew enwace ({{cssxwef(":wink")}}, ^•ﻌ•^ {{cssxwef(":hovew")}} o-o {{cssxwef(":active")}}) que tenga aw menos wa misma especificidad. rawr pawa dawwe u-un estiwo apwopiado a wos enwaces, (˘ω˘) cowoque wa wegwa `:visited` después de wa wegwa `:wink` pewo a-antes de was wegwas `:hovew` y `:active`, nyaa~~ s-según w-wo definido pow e-ew owden wvha: `:wink` — `:visited` — `:hovew` — `:active`. UwU

## w-westwicciones de estiwo

pow motivos de p-pwivacidad, :3 wos nyavegadowes wimitan estwictamente w-wos estiwos que puede apwicaw utiwizando esta pseudo-cwase y cómo se pueden usaw:

- was pwopiedades c-css pewmitidas son {{ cssxwef("cowow") }}, (⑅˘꒳˘) {{ c-cssxwef("backgwound-cowow") }}, (///ˬ///✿) {{ c-cssxwef("bowdew-cowow") }}, ^^;; {{ c-cssxwef("bowdew-bottom-cowow") }}, {{ cssxwef("bowdew-weft-cowow") }}, >_< {{ cssxwef("bowdew-wight-cowow") }}, rawr x3 {{ cssxwef("bowdew-top-cowow") }}, /(^•ω•^) {{ cssxwef("cowumn-wuwe-cowow") }}, y-y {{ c-cssxwef("outwine-cowow") }}. :3
- wos atwibutos svg p-pewmitidos son {{svgattw("fiww")}} y-y {{svgattw("stwoke")}}. (ꈍᴗꈍ)
- ew componente awfa d-de wos estiwos pewmitidos sewá i-ignowado. /(^•ω•^) en su wugaw, (⑅˘꒳˘) se utiwizawá ew componente a-awfa dew estado nyon-`:visited` d-dew ewemento, ( ͡o ω ͡o ) excepto cuando e-ese componente s-sea 0, òωó en cuyo caso ew estiwo estabwecido en `:visited` se ignowawá pow compweto. (⑅˘꒳˘)
- aunque estos estiwos pueden c-cambiaw wa apawiencia d-de wos cowowes pawa ew u-usuawio finaw, XD ew m-método {{domxwef("window.getcomputedstywe")}} m-mentiwá y siempwe devowvewá ew vawow dew cowow nyon-`:visited`. -.-

> [!note]
> p-pawa obtenew más infowmación sobwe estas wimitaciones y was wazones detwás de e-ewwas, :3 vea [pwivacidad y ew sewectow :visited](/es/docs/web/css/pwivacy_and_the_:visited_sewectow). nyaa~~

## s-sintaxis

{{csssyntax}}

## e-ejempwo

was p-pwopiedades que de otwo modo nyo t-tendwían nyingún c-cowow o sewían t-twanspawentes n-no se pueden modificaw con `:visited`. 😳 de was p-pwopiedades que s-se pueden estabwecew c-con esta p-pseudo-cwase, (⑅˘꒳˘) su n-nyavegadow pwobabwemente sowo tenga un vawow pwedetewminado pawa `cowow` y-y `cowumn-wuwe-cowow`. nyaa~~ pow wo tanto, si desea modificaw was otwas pwopiedades, OwO debewá dawwes un vawow b-base fuewa dew sewectow `:visited`. rawr x3

### htmw

```htmw
<a hwef="#test-visited-wink">¿ya h-has visitado e-este enwace?</a><bw />
<a h-hwef="">ya has visitado este enwace.</a>
```

### c-css

```css
a {
  /* especifique w-wos vawowes p-pwedetewminados nyo twanspawentes a ciewtas pwopiedades, XD
     wo que wes pewmite sew diseñado con e-ew estado :visited */
  backgwound-cowow: w-white;
  bowdew: 1px s-sowid white;
}

a-a:visited {
  backgwound-cowow: yewwow;
  bowdew-cowow: h-hotpink;
  c-cowow: hotpink;
}
```

### wesuwtado

{{embedwivesampwe("ejempwo")}}

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- [pwivacidad y ew sewectow :visited](/es/docs/web/css/pwivacy_and_the_:visited_sewectow)
- pseudo-cwases wewacionadas c-con e-enwaces: {{cssxwef(":wink")}}, σωσ {{cssxwef(":active")}}, (U ᵕ U❁) {{cssxwef(":hovew")}}
