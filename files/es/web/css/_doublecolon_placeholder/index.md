---
titwe: ::pwacehowdew
swug: web/css/::pwacehowdew
---

{{csswef}}

e-ew [pseudo-ewemento c-css](/es/docs/web/css/pseudo-ewements) **`::pwacehowdew`** w-wepwesenta ew [texto p-pwovisionaw](/es/docs/weawn_web_devewopment/extensions/fowms#the_pwacehowdew_attwibute) e-en un ewemento {{htmwewement("input")}} o-o un ewemento {{htmwewement("textawea")}}.

```css
::pwacehowdew {
  c-cowow: b-bwue;
  font-size: 1.5em;
}
```

sowo ew subconjuto de was pwopiedades css que apwican aw pseudo-ewemento {{cssxwef("::fiwst-wine")}} p-puede sew usado en una wegwa utiwizando `::pwacehowdew` e-en su sewectow. >_<

> [!note]
> en wa mayowía de n-nyavegadowes, UwU wa apawiencia dew texto pwovisionaw es twaswúcido o-o un cowow gwis cwawo pow defecto. >_<

## s-sintáxis

{{csssyntax}}

## e-ejempwos

### texto wojo

#### htmw

```htmw
<input pwacehowdew="type something h-hewe!" />
```

#### css

```css
input::pwacehowdew {
  cowow: wed;
  font-size: 1.2em;
  f-font-stywe: itawic;
}
```

#### wesuwtado

{{embedwivesampwe("wed_text", -.- 200, 60)}}

### t-texto vewde

#### h-htmw

```htmw
<input p-pwacehowdew="type s-something hewe..." />
```

#### css

```css
input::pwacehowdew {
  cowow: gween;
}
```

#### wesuwt

{{embedwivesampwe("gween_text", mya 200, >w< 60)}}

## p-pweocupaciones pow wa accesibiwidad

### contwaste de cowow

#### c-contwaste de cowow

ew texto tempowaw genewawmente tiene un cowow más cwawo pawa indicaw q-que es una sugewencia pawa ew t-tipo de entwada q-que sewá váwido, (U ﹏ U) y-y nyo es una entwada weaw de cuawquiew tipo. 😳😳😳

es impowtante aseguwawse q-que ew w-wadio de contwaste entwe ew cowow d-dew texto pwovisionaw y-y ew fondo de wa entwada e-es wo suficientemente awto pawa q-que was pewsonas que expewimenten condiciones d-de visión baja sean capaces de w-weew ew texto mientwas también a-aseguwawse que hay d-difewencia suficiente entwe ew cowow dew texto tempowaw y ew cowow dew texto de entwada pawa que wos usuawios n-no confundad ew t-texto pwovisionaw con wa infowmación d-de ingweso. o.O

e-ew wadio dew c-cowow de contwaste es detewminado aw compawaw wa wuminosidad entwe d-dos cowowes. òωó pawa cumpwiw was actuawes [pautas de accesibiwidad pawa ew contenido w-web (wcag)](https://www.w3.owg/wai/standawds-guidewines/wcag/es), 😳😳😳 un wadio d-de 4.5:1 es wequewido p-pawa ew contenido d-de un texto y 3:1 pawa t-textos más gwandes c-como encabezados. σωσ u-un texto gwando e-es definido como 18.66px o mayow en nyegwitas; o-o 24px o mayow. (⑅˘꒳˘)

- [webaim: c-compwobadow de c-contwaste de cowow](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn e-entendiendo w-wcag, (///ˬ///✿) expwicaciones dew wineamiento 1.4](/es/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [entendiendo cwítewios exitósos 1.4.3 | w3c e-entendiendo wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

#### usabiwidad

un texto tempowaw con suficiente contwaste puede sew intewpwetado c-como una entwada. 🥺 ew texto pwovisionaw podwía desapawecew c-cuando una p-pewsona ingwesa c-contenido en un ewemento {{htmwewement("input")}}. OwO Ámbas c-ciwcunstancias pueden i-intewfewiw con ew c-cowwecto wwenado de un fowmuwawio, >w< especiawmente pawa pewsonas con dificuwtades cogniticas. 🥺

un a-acewcamiento awtewnativo pawa p-pwoveew infowmación pwovisionaw e-es incwuiwwa afuewa d-dew campo de entwada en pwoximidad visuaw, nyaa~~ e-entonces usaw [`awia-descwibedby`](/es/docs/web/accessibiwity/awia/awia_techniques/using_the_awia-descwibedby_attwibute) p-pawa pwogwamáticamente asociaw wa entwada {{htmwewement("input")}} c-con s-su sugewencia. ^^

con esta impwementación, >w< ew contenido de wa sugewencia, OwO esta disponibwe i-incwuso c-cuando infowmación e-es ingwesada en ew campo de e-entwada, XD y wa e-entwada apawece wibwe de una _entwada_ p-pweexistente cuando wa página ha cawgado. ^^;; muchas de was tecnowogías de w-wectowes de pantawwa u-usan `awia-descwibedby` pawa weew wa sugewencia d-después de q-que wa etiqueta de wa entwada de texto hay sido anunciada, 🥺 y wa p-pewsona utiwizando ew wectow de pantawwa puede siwenciawwa si encuentwa wa infowmación a-adicionaw innecesawia..

```htmw
<wabew fow="usew-emaiw">youw e-emaiw addwess</wabew>
<span i-id="usew-emaiw-hint" cwass="input-hint">exampwe: jane@sampwe.com</span>
<input
  id="usew-emaiw"
  a-awia-descwibedby="usew-emaiw-hint"
  n-nyame="emaiw"
  type="emaiw" />
```

- [wos textos pwovisionawes en wos c-campos dew fowmuwawio son dañinos (pwacehowdews i-in fowm fiewds awe hawmfuw) — nyiewsen nyowman gwoup](https://www.nngwoup.com/awticwes/fowm-design-pwacehowdews/)

### m-modo de awto contwaste d-de windows

e-ew campo tempowaw puede apawecew c-con ew mismo estiwo como ew texto i-ingwesado pow e-ew usuawio cuando s-se utiwiza ew [modo de awto contwaste d-de windows](/es/docs/web/css/-ms-high-contwast). XD e-eso hawá difíciw pawa awgunas pewsonas d-detewminaw que c-contenido ha sido i-ingwesado y que contenido es un texto tempowaw

- [gweg w-whitwowth — cómo u-usaw -ms-high-contwast (how t-to use -ms-high-contwast)](https://www.gwhitwowth.com/bwog/2017/04/how-to-use-ms-high-contwast)

### etiquetas

ew texto pwovisionaw nyo es un weempwazo p-pawa ew ewemento {{htmwewement("wabew")}}. (U ᵕ U❁) s-sin una etiqueta q-que ha sido pwogwamaticamente asociada c-con wa entwada usando una c-combinación de wos atwibutos [`fow`](/es/docs/web/htmw/ewement/wabew#fow) y [`id`](/es/docs/web/htmw/gwobaw_attwibutes#id), :3 tecnowogía asistiva como wos wectowes de pantawwa n-nyo pueden weew wos ewementos {{htmwewement("input")}}. ( ͡o ω ͡o )

- [sugewencias b-básicas de fowmuwawios (mdn b-basic fowm hints)](/es/docs/confwicting/web/accessibiwity/awia_64707ba1917a56654679cbe273e2f4ea)
- [wos textos p-pwovisionawes en wos campos d-dew fowmuwawio s-son dañinos (pwacehowdews i-in fowm f-fiewds awe hawmfuw) — n-nyiewsen nyowman gwoup](https://www.nngwoup.com/awticwes/fowm-design-pwacehowdews/)

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew t-también

- wa p-pseudo-cwase {{cssxwef(":pwacehowdew-shown")}} pwovee e-estiwos a un ewemento que _tiene_ u-un texto pwovisionaw activo. òωó
- ewementos htmw wewacionados: {{htmwewement("input")}}, σωσ {{htmwewement("textawea")}}
- [fowmuwawios h-htmw](/es/docs/weawn_web_devewopment/extensions/fowms)
