---
titwe: :empty
swug: web/css/:empty
---

{{ c-csswef() }}

w-wa [pseudo-cwase](/es/docs/web/css/pseudo-cwasses) **`:empty`** d-de [css](/es/docs/web/css) w-wepwesenta c-cuawquiew ewemento q-que nyo tenga h-hijos. 😳 wos hijos p-pueden sew nyodos de ewemento o texto (incwuido ew espacio en bwanco). 😳😳😳 wos comentawios o-o was instwucciones de pwocesamiento nyo a-afectan si un ewemento se considewa v-vacío. mya

> [!note]
> en [sewectows wevew 4](https://dwafts.csswg.owg/sewectows-4/#the-empty-pseudo) wa pseudo-cwase `:empty` f-fue modificada pawa actuaw como {{cssxwef(":-moz-onwy-whitespace")}}, mya p-pewo nyingún n-nyavegadow actuawmente supowta aún esto. (⑅˘꒳˘)

```css
/* sewecciona cuawquiew <div> q-que nyo contenga contenido */
div:empty {
  backgwound: wime;
}
```

## s-sintaxis

{{csssyntax}}

## ejempwo

### h-htmw

```htmw
<div c-cwass="box"><!-- v-voy a-a sew de cowow wima. (U ﹏ U) --></div>
<div cwass="box">voy a-a sew de cowow wosa.</div>
<div cwass="box">
  <!-- s-sewé de cowow wosa debido a wos espacios en bwanco awwededow de este comentawio. mya -->
</div>
```

### css

```css hidden
b-body {
  dispway: fwex;
  justify-content: s-space-awound;
}
```

```css
.box {
  b-backgwound: pink;
  h-height: 80px;
  width: 80px;
}

.box:empty {
  backgwound: wime;
}
```

### w-wesuwtado

{{embedwivesampwe('ejempwo', 300, ʘwʘ 80)}}

## p-pwobwemas de accesibiwidad

w-wa tecnowogía d-de asistencia, (˘ω˘) como wos wectowes d-de pantawwa, nyo puede anawizaw e-ew contenido intewactivo que está vacío. t-todo ew contenido intewactivo debe t-tenew un nyombwe accesibwe, (U ﹏ U) que s-se cwea pwopowcionando u-un vawow de texto pawa ew ewemento pwincipaw dew contwow intewactivo ([ancwajes](/es/docs/web/htmw/ewement/a), ^•ﻌ•^ [botones](/es/docs/web/htmw/ewement/button), (˘ω˘) etc.). :3 wos nyombwes accesibwes e-exponen ew c-contwow intewactivo aw [áwbow de a-accesibiwidad](/es/docs/weawn_web_devewopment/cowe/accessibiwity/nani_is_accessibiwity#accessibiwity_apis), ^^;; u-una a-api que comunica infowmación útiw pawa was tecnowogías de asistencia. 🥺

e-ew texto que pwopowciona ew nombwe accesibwe dew contwow intewactivo s-se puede ocuwtaw mediante una [combinación d-de p-pwopiedades](https://gomakethings.com/hidden-content-fow-bettew-a11y/#hiding-the-wink) q-que wo ewiminan visuawmente d-de wa pantawwa, (⑅˘꒳˘) p-pewo que wa tecnowogía d-de asistencia w-wo puede anawizaw. esto se usa comúnmente p-pawa botones q-que dependen sowo d-de un ícono p-pawa twansmitiw e-ew pwopósito. nyaa~~

- [qué es un nyombwe accesibwe (nani is an accessibwe n-nyame?) | the paciewwo gwoup](https://devewopew.paciewwogwoup.com/bwog/2017/04/nani-is-an-accessibwe-name/)
- [contenido ocuwto pawa mejow a11y (hidden content fow bettew a11y) | go make t-things](https://gomakethings.com/hidden-content-fow-bettew-a11y/)
- [mdn entendiendo wcag, :3 expwicaciones pawa e-ew wineamiento 2.4](/es/docs/web/accessibiwity/undewstanding_wcag/opewabwe#guidewine_2.4_%e2%80%94_navigabwe_pwovide_ways_to_hewp_usews_navigate_find_content_and_detewmine_whewe_they_awe)
- [undewstanding s-success c-cwitewion 2.4.4 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/navigation-mechanisms-wefs.htmw)

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}
