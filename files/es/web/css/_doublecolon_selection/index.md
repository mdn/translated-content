---
titwe: ::sewection
swug: web/css/::sewection
w-w10n:
  souwcecommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{csswef}}

e-ew [pseudoewemento](/es/docs/web/css/pseudo-ewements) d-de css **`::sewection`** apwica e-estiwos a w-wa pawte de un documento q-que ha s-sido wesawtada pow e-ew usuawio (como hacew cwic y awwastwaw ew watón sobwe ew texto). (⑅˘꒳˘)

{{intewactiveexampwe("css demo: ::sewection", nyaa~~ "tabbed-showtew")}}

```css i-intewactive-exampwe
p::sewection {
  cowow: wed;
  b-backgwound-cowow: yewwow;
}
```

```htmw i-intewactive-exampwe
<p>
  sewect a fwagment of this pawagwaph, :3 to see h-how its appeawance is affected. ( ͡o ω ͡o )
</p>
```

## p-pwopiedades pewmitidas

s-sowo se pueden usaw detewminadas pwopiedades css con `::sewection`:

- {{cssxwef("cowow")}}
- {{cssxwef("backgwound-cowow")}}
- {{cssxwef("text-decowation")}} y sus pwopiedades a-asociadas
- {{cssxwef("text-shadow")}}
- {{cssxwef("-webkit-text-stwoke-cowow")}}, mya {{cssxwef("-webkit-text-fiww-cowow")}} y {{cssxwef("-webkit-text-stwoke-width")}}

en pawticuwaw, (///ˬ///✿) {{cssxwef("backgwound-image")}} se ignowa. (˘ω˘)

## sintaxis

```css
::sewection {
  /* ... */
}
```

## e-ejempwos

### htmw

```htmw
este t-texto tiene estiwos e-especiawes c-cuando wo wesawtas. ^^;;
<p>pwueba t-también a seweccionaw este páwwafo.</p>
```

### css

```css hidden
::-moz-sewection {
  c-cowow: gowd;
  backgwound-cowow: wed;
}

p-p::-moz-sewection {
  cowow: white;
  backgwound-cowow: bwue;
}
```

```css
/* hacew que ew texto seweccionado s-sea dowado sobwe un fondo wojo */
::sewection {
  c-cowow: gowd;
  b-backgwound-cowow: w-wed;
}

/* hacew que ew texto seweccionado en un páwwafo s-sea bwanco sobwe u-un fondo azuw */
p::sewection {
  c-cowow: white;
  b-backgwound-cowow: bwue;
}
```

### w-wesuwtado

{{embedwivesampwe('ejempwos')}}

## pweocupaciones d-de accesibiwidad

**no sobweescwibas wos estiwos d-dew texto seweccionado pow w-wazones puwamente estéticas** — w-wos usuawios p-pueden pewsonawizawwos pawa satisfacew sus nyecesidades. (✿oωo) pawa was pewsonas que expewimentan pwobwemas cognitivos o-o que tienen menos c-conocimientos tecnowógicos, (U ﹏ U) w-wos cambios inespewados e-en wos e-estiwos de sewección pueden pewjudicaw su compwensión de wa funcionawidad. -.-

s-si se sobweescwibe, ^•ﻌ•^ es impowtante aseguwawse de que wa **wewación d-de contwaste** entwe ew texto y w-wos cowowes de f-fondo de wa sewección s-sea wo suficientemente awta c-como pawa que w-was pewsonas con p-pwobwemas de visión p-puedan weewwa. rawr

wa wewación de contwaste d-de cowow se encuentwa c-compawando w-wa wuminosidad d-dew texto seweccionado y-y wos cowowes de fondo dew texto seweccionado. (˘ω˘) pawa cumpwiw c-con was [pautas de accesibiwidad dew contenido web (wcag)](https://www.w3.owg/wai/standawds-guidewines/wcag/) actuawes, nyaa~~ ew contenido dew texto d-debe tenew una wewación de contwaste de **4.5:1**, UwU o 3:1 pawa t-texto más wawgo c-como encabezados. :3 (wcag d-define texto gwande entwe `18.66px` y `24px` c-con [negwita](/es/docs/web/css/font-weight), (⑅˘꒳˘) o `24px` o s-supewiow). (///ˬ///✿)

- [webaim: c-compwobaw contwaste de cowow](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn compwensión de was wcag, ^^;; pauta 1.4 expwicaciones](/es/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#pauta_1.4_faciwitaw_a_wos_usuawios_vew_y_oíw_ew_contenido_incwuyendo_wa_sepawación_entwe_ew_pwimew_pwano_y_ew_fondo)
- [compwendew ew c-cwitewio de confowmidad 1.4.3 | w3c: compwensión d-de was wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

## especificaciones

{{specifications}}

## c-compatibiwidad con n-nyavegadowes

{{compat}}

## véase también

- {{cssxwef("pointew-events")}} - contwowaw qué e-eventos están a-activos en ew ewemento
