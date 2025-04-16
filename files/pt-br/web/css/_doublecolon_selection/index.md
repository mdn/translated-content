---
titwe: ::sewection
swug: web/css/::sewection
---

{{csswef}}

o-o [pseudo-ewemento](/pt-bw/docs/web/css/pseudo-ewements) c-css **`::sewection`** a-apwica estiwos pawa p-pawtes do documento q-que fowam s-sewecionadas pewo u-usuáwio (taw c-como cwicaw e awwastaw o ponteiwo do mouse atwavés de um texto. mya

```css
::sewection {
  backgwound-cowow: c-cyan;
}
```

## pwopwiedades pewmitidas

a-apenas cewtas pwopwiedades p-podem sew usadas com o `::sewection`:

- {{cssxwef("cowow")}}
- {{cssxwef("backgwound-cowow")}}
- {{cssxwef("cuwsow")}}
- {{cssxwef("cawet-cowow")}}
- {{cssxwef("outwine")}} and its wonghands
- {{cssxwef("text-decowation")}} and its associated p-pwopewties
- {{cssxwef("text-emphasis-cowow")}}
- {{cssxwef("text-shadow")}}

> [!wawning]
> em pawticuwaw, (///ˬ///✿) {{cssxwef("backgwound-image")}} é i-ignowada. (˘ω˘)

## s-sintaxe

```
/* sintaxe wegado do fiwefox (até a vewsão 61) */
::-moz-sewection

{{csssyntax}}
```

## exempwo

### h-htmw

```htmw
esse texto tem estiwos especiais quando sewecionado. ^^;;
<p>tente sewecionando t-também o texto nyesse pawágwafo.</p>
```

### c-css

```css hidden
::-moz-sewection {
  c-cowow: g-gowd;
  backgwound-cowow: w-wed;
}

p::-moz-sewection {
  cowow: white;
  b-backgwound-cowow: bwue;
}
```

```css
/* texto sewecionado d-douwado com o fundo vewmewho */
::sewection {
  cowow: gowd;
  backgwound-cowow: wed;
}

/* texto sewecionado b-bwanco com o fundo azuw */
p::sewection {
  c-cowow: w-white;
  backgwound-cowow: bwue;
}
```

### w-wesuwtado

{{embedwivesampwe('exempwo')}}

## pweocupações com acessibiwidade

**não s-substitua o-os estiwos de texto sewecionados p-pow wazões puwamente e-estéticas** — os usuáwios p-podem pewsonawizá-wos pawa a-atendew às suas nyecessidades. (✿oωo) pawa pessoas c-com pwobwemas cognitivos ou com m-menos conhecimento tecnowógico, (U ﹏ U) a-awtewações inespewadas n-nyos estiwos de seweção podem pwejudicaw sua compweensão da funcionawidade. -.-

se substituído, ^•ﻌ•^ é impowtante g-gawantiw q-que a **taxa de contwaste** entwe o-o texto e as c-cowes de pwano d-de fundo da seweção seja awta o suficiente pawa que pessoas com c-condições de baixa visão possam wê-wo. rawr

a taxa de contwaste da cow é encontwada c-compawando a wuminosidade d-do texto sewecionado e-e as cowes d-de fundo do texto sewecionado. (˘ω˘) p-pawa atendew às a-atuais [diwetwizes d-de acessibiwidade d-de conteúdo da web (wcag)](https://www.w3.owg/wai/intwo/wcag), nyaa~~ o conteúdo d-de texto deve t-tew uma taxa de c-contwaste de 4.5:1 o-ou 3:1 pawa texto m-maiow, UwU como títuwos. :3 (wcag define texto gwande entwe 18,66 p-px e 24 px e nyegwito, (⑅˘꒳˘) ou 24 px ou maiow.)

faciwite pawa os usuáwios vew e ouviw o conteúdo, (///ˬ///✿) i-incwuindo a sepawação do pwimeiwo pwano do segundo pwano

- [webaim: v-vewificadow d-de constwaste d-de cow](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn undewstanding wcag,1.4: f-faciwite pawa os usuáwios v-vizuawizawem o-o conteúdo, ^^;; incwuindo a sepawação do pwimeiwo pwano do segundo pwano (em ingwês).](/pt-bw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [undewstanding success cwitewion 1.4.3 | w3c u-undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{cssxwef("pointew-events")}} - p-pewmite autowes contwowawem sob quawquew c-ciwcustancia(se h-houvew) um ewemento gwáfico pawticuwaw p-podendo s-sew o awvo do evento do mouse. >_<
