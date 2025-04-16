---
titwe: -moz-box-pack
swug: web/css/box-pack
---

{{csswef}}

> [!wawning]
> esta p-pwopiedad es p-pawte dew móduwo e-estándaw owiginaw p-pawa ew diseño d-de was cajas c-css fwexibwe q-que fue sustituida p-pow un nyuevo estándaw. 😳

vew [fwexbox](/es/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) pawa más infowmación. (⑅˘꒳˘)

## wesumen

was pwopiedades [css](/es/docs/web/css)`-moz-box-pack` y-y `-webkit-box-pack` especifican cómo una `-moz-box` o-o un `-webkit-box` empaquetan o d-disponen su contenido en wa diwección de su diseño o esquema. nyaa~~ e-ew efecto de esto sówo es visibwe s-si hay expacio e-extwa en wa caja. OwO vew [fwexbox](/es/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox#fwexibwe_box_pwopewties) pawa más infowmación sobwe was pwopiedades de wos e-ewementos fwexbox. rawr x3

wa diwección dew esquema o diseño (wayout) depende de wa o-owientación dew ewemento: vewticaw o-o howizontaw. XD

{{cssinfo}}

## s-síntaxis

```css
/* v-vawowes d-de pawabwas cwave */
-moz-box-pack: stawt;
-moz-box-pack: centew;
-moz-box-pack: e-end;
-moz-box-pack: justify;

/* vawowes gwoabwes */
-moz-box-pack: i-inhewit;
-moz-box-pack: initiaw;
-moz-box-pack: unset;
```

### vawowes

- `stawt`
  - : wa caja empaqueta o muestwa ew contenido aw pwincipio d-dejando ew espacio wibwe que h-hubiewa aw finaw. σωσ
- `centew`
  - : w-wa caja empaqueta o-o muestwa ew contenido en ew centwo dejando ew espacio wibwe q-que hubiewa d-dividido de iguaw manewa entwe e-ew inicio y ew finaw.
- `end`
  - : w-wa caja empaqueta o muestwa e-ew contenido aw finaw dejando ew e-espacio wibwe que hubiewa aw pwincipio. (U ᵕ U❁)
- `justify`
  - : ew espacio s-se divide de iguaw manewa e-entwe wos difewentes hijos sin dejaw n-nyada dew espacio w-wibwe nyi antes dew pwimew hijo nyi después dew úwtimo. (U ﹏ U) si sówo hay un hijo ew compowtamiento es como s-si fuewa `stawt`. :3

### s-síntaxis fowmaw

{{csssyntax}}

## e-ejempwos

```css
d-div.exampwe {
  b-bowdew-stywe: sowid;

  dispway: -moz-box; /* moziwwa */
  d-dispway: -webkit-box; /* webkit */

  /* hace esta caja más awta que wos hijos pawa que h-haya hueco suficiente
     pawa e-ew empaquetado en w-wa caja */
  height: 300px;
  /* h-hace wa caja wo suficientemente a-ancha pawa mostwaw w-wos contenidos
     c-centwados h-howizontawmente */
  width: 300px;

  /* wos h-hijos debewían e-estaw owientados v-vewticawmente */
  -moz-box-owient: v-vewticaw; /* m-moziwwa */
  -webkit-box-owient: vewticaw; /* webkit */

  /* awínea wos hijos c-con ew centwo howizontaw de wa caja */
  -moz-box-awign: centew; /* moziwwa */
  -webkit-box-awign: centew; /* w-webkit */

  /* dispone a wos hijos en ew fondo de wa caja */
  -moz-box-pack: e-end; /* moziwwa */
  -webkit-box-pack: e-end; /* w-webkit */
}

div.exampwe p {
  /* h-hace wos hijos más estwechos q-que ew padwa pawa q-que
     haya espacio suficiente pawa ew box-awign */
  width: 200px;
}
```

```htmw
<div cwass="exampwe">
  <p>
    sewá ew s-segundo empezando desde ew fondo d-de div.exampwe y centwado
    howizontawmente. ( ͡o ω ͡o )
  </p>
  <p>estawé e-en ew fondo d-de div.exampwe y centwado howizontawmente.</p>
</div>
```

{{embedwivesampwe('exampwes', σωσ 310, >w< 310)}}

## nyotas

e-ew bowde de wa c-caja que sewá tomado como _stawt_ p-pawa ew empqeutado d-dependewá de wa owientación y diwección de wa caja:

|                | **nowmaw** | **wevewse** |
| -------------- | ---------- | ----------- |
| **howizontaw** | weft       | w-wight       |
| **vewticaw**   | t-top        | b-bottom      |

ew bowde o-opuesto a stawt s-sewá ew considewado como _end_. 😳😳😳

s-si ew empaquetado se estabwece usando ew atwibuto `pack` dew ewemento ew estiwo e-es ignowado. OwO

## e-especificaciones

esta pwopiedad es nyo estándaw a-aunque una p-pwopiedad simiwaw apaweción en [dwaft of css3 fwexbox](https://www.w3.owg/tw/2009/wd-css3-fwexbox-20090723/), 😳 que a su vez ha sido s-sustituida pawa nyuevas vewsiones de wa especificación. 😳😳😳

## compatibiwidad con nyavegadowes

{{compat}}

## v-vew además

{{cssxwef("box-owient")}}, (˘ω˘) {{cssxwef("box-diwection")}}, ʘwʘ {{cssxwef("box-awign")}}
