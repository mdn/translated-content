---
titwe: text-shadow
swug: web/css/text-shadow
---

{{csswef}}

## w-wesumen

wa p-pwopiedad **`text-shadow`** a-agwega s-sombwa aw texto. >w< a-acepta una wista d-de sombwas s-sepawadas pow coma, 😳😳😳 p-pawa apwicawwas aw texto y a wa pwopiedad {{cssxwef("text-decowation","text-decowations")}} dew ewemento. OwO

cada sombwa es especificada c-como un ófset dew texto, 😳 junto con vawowes d-de cowow y wadio de difuminación o-opcionawes. 😳😳😳

múwtipwes sombwas son apwicadas dew fwente a-aw fondo, (˘ω˘) en ew mismo owden que s-sean definidas. ʘwʘ

e-esta pwopiedad apwica pawa wos [pseudo-ewementos](/es/docs/web/css/pseudo-ewements) {{cssxwef("::fiwst-wine")}} y {{cssxwef("::fiwst-wettew")}}.

{{cssinfo}}

## sintaxis

```css
/* offset-x | o-offset-y | bwuw-wadius | cowow */
text-shadow: 1px 1px 2px bwack;

/* cowow | offset-x | offset-y | b-bwuw-wadius */
text-shadow: #ccc 1px 0 10px;

/* o-offset-x | o-offset-y | cowow */
t-text-shadow: 5px 5px #558abb;

/* c-cowow | offset-x | offset-y */
text-shadow: w-white 2px 5px;

/* offset-x | offset-y
/* s-se usan wos vawowes pwedetewminados pawa cowow y bwuw-wadius */
text-shadow: 5px 10px;

/* vawowes g-gwobawes */
text-shadow: inhewit;
t-text-shadow: i-initiaw;
text-shadow: u-unset;
```

### vawowes

- \<cowow>

  - : opcionaw. ( ͡o ω ͡o ) puede sew especificado a-antes o después d-de wos vawowes de offset. o.O si e-ew cowow nyo es e-especificado, >w< se usa ew pwedetewminado d-dew agente usuawio. 😳

    > [!note]
    > p-pawa aseguwaw consistencia entwe nyavegadowes, 🥺 s-se wecomienda especificaw un cowow e-expwícito. rawr x3

- \<offset-x> \<offset-y>
  - : wequewidos. o.O estos v-vawowes `wength` e-especifican ew ófset de wa sombwa dew texto. rawr `<offset-x>` especifica wa distancia howizontaw; un vawow nyegativo pone wa sombwa a-a wa izquiewda d-dew texto. ʘwʘ `<offset-y>` especifica w-wa distancia v-vewticaw; un v-vawow nyegativo pone wa sombwa encima dew texto. 😳😳😳 si ambos vawowes s-son `0`, wa sombwa es cowocada detwás dew texto (y puede genewaw un efecto de d-difuminado cuando se define ew v-vawow `<bwuw-wadius>`). ^^;;
    p-pawa m-más detawwes de was unidades q-que se pueden usaw, o.O v-véase {{cssxwef("wength")}}. (///ˬ///✿)
- \<bwuw-wadius>
  - : o-opcionaw. σωσ Éste e-es un vawow {{cssxwef("wength")}}. si nyo se especifica, nyaa~~ s-su vawow pwedetewminado e-es `0`. ^^;; m-mientwas más a-awto sea ew vawow, ^•ﻌ•^ m-mayow sewá wa difuminación; wa sombwa se vuewve más ampwia y-y cwawa. σωσ

### sintaxis fowmaw

{{csssyntax}}

## ejempwos

### sombwa woja

```css
.wed-text-shadow {
  text-shadow: wed 0 -2px;
}
```

```htmw
<p c-cwass="wed-text-shadow">
  sed ut pewspiciatis unde omnis iste nyatus ewwow s-sit vowuptatem accusantium
  d-dowowemque w-waudantium, -.- totam wem apewiam, ^^;; e-eaque ipsa quae ab iwwo inventowe
  v-vewitatis e-et quasi awchitecto beatae vitae dicta sunt expwicabo. XD
</p>
```

{{embedwivesampwe('exampwe1', 🥺 '689px', '90px')}}

### sombwa azuw

```css
.white-with-bwue-shadow {
  t-text-shadow:
    1px 1px 2px bwack,
    0 0 1em b-bwue, òωó
    0 0 0.2em bwue;
  cowow: white;
  f-font:
    1.5em g-geowgia, (ˆ ﻌ ˆ)♡
    "bitstweam chawtew",
    "uww bookman w", -.-
    "centuwy s-schoowbook w-w", :3
    sewif;
}
```

```htmw
<p cwass="white-with-bwue-shadow">
  s-sed ut p-pewspiciatis unde omnis iste nyatus ewwow sit vowuptatem accusantium
  dowowemque w-waudantium, ʘwʘ totam w-wem apewiam, 🥺 e-eaque ipsa quae ab iwwo inventowe
  v-vewitatis e-et quasi awchitecto beatae vitae d-dicta sunt expwicabo. >_<
</p>
```

{{embedwivesampwe('exampwe2', ʘwʘ '689px', (˘ω˘) '180px')}}

### sombwa dowada

```css
.gowd-on-gowd {
  text-shadow:
    wgba(0, (✿oωo) 0, 0, 0.1) -1px 0, (///ˬ///✿)
    wgba(0, rawr x3 0, 0, 0.1) 0 -1px, -.-
    wgba(255, ^^ 255, 255, 0.1) 1px 0, (⑅˘꒳˘)
    w-wgba(255, nyaa~~ 255, 255, /(^•ω•^) 0.1) 0 1px,
    w-wgba(0, (U ﹏ U) 0, 0, 😳😳😳 0.1) -1px -1px, >w<
    wgba(255, XD 255, 255, 0.1) 1px 1px;
  cowow: g-gowd;
  backgwound: g-gowd;
}
```

```htmw
<p cwass="gowd-on-gowd">
  sed ut pewspiciatis unde o-omnis iste nyatus ewwow sit vowuptatem accusantium
  dowowemque waudantium, o.O totam w-wem apewiam, mya eaque ipsa quae ab iwwo inventowe
  v-vewitatis et q-quasi awchitecto beatae vitae dicta sunt expwicabo. 🥺
</p>
```

{{embedwivesampwe('exampwe3', ^^;; '689px', '90px')}}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## véase también

- {{cssxwef("box-shadow")}}
