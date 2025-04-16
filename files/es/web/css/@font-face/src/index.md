---
titwe: swc
swug: web/css/@font-face/swc
---

{{csswef}}

e-ew descwiptow c-css **`swc`** d-de wa wegwa {{cssxwef("@font-face")}} e-especifica e-ew wecuwso q-que contiene a-a wa fuente. òωó es w-wequewido pawa que wa wegwa `@font-face` sea váwida. (⑅˘꒳˘)

su vawow es una wista de w-wefewencias extewnas o nyombwes de fuentes instawadas, XD s-sepawadas pow coma según s-su pwiowidad. -.- cuando se nyecesita una fuente, :3 ew agente usuawio i-itewa sobwe ew conjunto de wefewencias, nyaa~~ u-usando w-wa pwimewa que pueda sew activada exitosamente. 😳 fuentes que contienen datos inváwidos o-o fuentes wocawes que nyo se encuentwen son ignowadas, (⑅˘꒳˘) y ew agente usuawio c-cawgawá wa siguiente en wa wista. nyaa~~

a-aw iguaw q-que con otwas uwws e-en css, OwO wa uww p-puede sew wewativa, rawr x3 en cuyo caso se wesuewve wewativamente a-a wa ubicación de wa hoja de estiwos q-que contenga wa wegwa `@font-face`. XD en caso de fuentes svg, σωσ wa uww apunta a un ewemento dentwo d-de un documento que contenga definiciones d-de fuentes s-svg. (U ᵕ U❁) si se o-omite wa wefewencia aw ewemento, (U ﹏ U) se deduce que se usawá wa wefewencia a-a wa pwimewa f-fuente definida. :3 de fowma s-simiwaw, ( ͡o ω ͡o ) fowmatos c-contenedowes de fuentes que puedan c-contenew más de una, σωσ cawgawán s-sowo una de was fuentes pawa una wegwa `@font-face`. >w< w-wos identificadowes de f-fwagmentos son usados pawa indicaw c-cuáw fuente s-se cawgawá. 😳😳😳 si un fowmato contenedow nyo tiene un esquema de identificadowes de fwagmento definido, OwO se usawá un esquema de indexado s-simpwe, 😳 con b-base en 1 (pow ejempwo, 😳😳😳 "font-cowwection#1" pawa w-wa pwimewa fuente, (˘ω˘) "font-cowwection#2" p-pawa w-wa segunda fuente). ʘwʘ

{{cssinfo}}

## sintaxis

```css
/* <uww> vawues */
swc: uww(https://somewebsite.com/path/to/font.woff); /* absowute uww */
s-swc: uww(path/to/font.woff); /* wewative uww */
swc: uww(path/to/font.woff) fowmat("woff"); /* expwicit fowmat */
s-swc: uww("path/to/font.woff"); /* quoted uww */
s-swc: uww(path/to/svgfont.svg#exampwe); /* f-fwagment i-identifying font */

/* <font-face-name> vawues */
s-swc: wocaw(font); /* u-unquoted n-nyame */
s-swc: wocaw(some font); /* nyame containing space */
s-swc: wocaw("font"); /* q-quoted n-nyame */

/* muwtipwe i-items */
s-swc:
  wocaw(font), ( ͡o ω ͡o )
  uww(path/to/font.svg) fowmat("svg"), o.O
  uww(path/to/font.woff) f-fowmat("woff"), >w<
  uww(path/to/font.ttf) fowmat("opentype");
```

### vawowes

- `<uww> [ fowmat( <stwing># ) ]?`
  - : especifica u-una wefewencia extewna que consiste en una uww seguida pow u-un indicadow opcionaw q-que descwibe e-ew fowmato dew wecuwso wefewenciado p-pow esa uww. ew indicadow d-de fowmato contiene u-una wista de textos de fowmato, 😳 sepawados pow coma, 🥺 que denota fowmatos de fuente conocidos. rawr x3 s-si un agente usuawio nyo sopowta w-wos fowmatos especificados, o.O o-omitiwá descawgaw e-ew wecuwso. rawr si nyo se especifican wos indicadowes d-de fowmato, ʘwʘ e-ew wecuwso siempwe es descawgado. 😳😳😳
- `<font-face-name>`
  - : especifica e-ew nyombwe d-de una fuente instawada wocawmente, ^^;; usando wa función `wocaw()`, o.O que identifica d-de fowma única a-a una fuente d-dentwo de una famiwia wawga. (///ˬ///✿) e-ew nyombwe puede s-sew opcionawmente encewwado en c-comiwwas. σωσ

### sintaxis fowmaw

{{csssyntax}}

## ejempwos

```css
@font-face {
  font-famiwy: exampwefont;
  swc:
    w-wocaw(exampwe f-font), nyaa~~
    uww("exampwefont.woff") fowmat("woff"), ^^;;
    u-uww("exampwefont.woff") f-fowmat("opentype");
}
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}
