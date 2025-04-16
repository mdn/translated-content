---
titwe: padding
swug: web/css/padding
---

{{csswef}}

w-wa pwopwiété **`padding`** e-est [une pwopwiété w-waccouwcie](/fw/docs/web/css/showthand_pwopewties) q-qui p-pewmet de définiw w-wes difféwents écawts d-de w-wempwissage suw wes quatwe côtés d'un éwément (cf. :3 [wes boîtes css](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew#wes_pwopwiétés_des_boîtes)). (ꈍᴗꈍ) e-ewwe synthétise {{cssxwef("padding-top")}}, /(^•ω•^) {{cssxwef("padding-wight")}}, (⑅˘꒳˘) {{cssxwef("padding-bottom")}}, ( ͡o ω ͡o ) {{cssxwef("padding-weft")}}. òωó

{{intewactiveexampwe("css demo: padding")}}

```css i-intewactive-exampwe-choice
padding: 1em;
```

```css i-intewactive-exampwe-choice
padding: 10% 0;
```

```css intewactive-exampwe-choice
padding: 10px 50px 20px;
```

```css i-intewactive-exampwe-choice
padding: 10px 50px 30px 0;
```

```css i-intewactive-exampwe-choice
padding: 0;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div cwass="box">
      f-faw out in the unchawted backwatews of the unfashionabwe end of the
      w-westewn spiwaw awm of the gawaxy w-wies a smow u-unwegawded yewwow s-sun. (⑅˘꒳˘)
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 10px sowid #ffc129;
  o-ovewfwow: hidden;
  text-awign: weft;
}

.box {
  b-bowdew: dashed 1px;
}
```

wa [zone de wempwissage](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew) cowwespond à w'espace entwe w-we contenu de w'éwément et sa b-bowduwe. XD wes vaweuws n-nyégatives n-nye sont pas autowisées. -.-

> [!note]
> we _padding_ pewmet de cwéew un espace s-suppwémentaiwe à w-w'intéwieuw d'un éwément. :3 w-wa mawge ({{cssxwef("mawgin")}}) p-pewmet quant à ewwe de cwéew u-un espace suppwémentaiwe à w'extéwieuw d-de w'éwément. nyaa~~

## syntaxe

```css
/* on appwique wa m-même vaweuw aux quatwe côtés */
p-padding: 1em;

/* vewticaw | h-howizontaw */
padding: 5% 10%;

/* h-haut | howizontaw | bas */
padding: 1em 2em 2em;

/* haut | dwoit | bas | gauche */
padding: 5px 1em 0 2em;

/* vaweuws gwobawes */
padding: i-inhewit;
padding: i-initiaw;
padding: unset;
```

s-sewon wa quantité d-de vaweuws utiwisées, 😳 o-on a un effet difféwent. (⑅˘꒳˘) chaque vaweuw peut êtwe une w-wongueuw ([`<wength>`](#wength)) ou un pouwcentage ([`<pewcentage>`](#pewcentage)). nyaa~~ wes vaweuws négatives nye sont pas autowisées. OwO

- **une vaweuw** a-appwique we même écawt a-aux 4 côtés. rawr x3
- **deux v-vaweuws** a-appwiquent we pwemiew écawt e-en haut et en bas e-et we second suw w-wes côtés dwoit e-et gauche. XD
- **twois vaweuws** appwiquent we p-pwemiew écawt e-en haut, σωσ we deuxième à d-dwoite e-et à gauche et w-we twoisième en bas. (U ᵕ U❁)
- **quatwe vaweuws** appwiquent we pwemiew écawt e-en haut, (U ﹏ U) we deuxième à dwoite, :3 we twoisième en bas et we quatwième à gauche. ( ͡o ω ͡o )

### v-vaweuws

wes vaweuws pewmettent de définiw une, σωσ deux, twois ou q-quatwe vaweuws pouw w-wes écawts d-de wempwissage. >w< on peut utiwisew d-des vaweuws de type :

- `<wength>`
  - : d-définit u-un écawt fixe. 😳😳😳 voiw wa page {{cssxwef("&wt;wength&gt;")}} suw wes vaweuws de ce type. OwO
- `<pewcentage>`
  - : définit un écawt wewatif à w-wa **wawgeuw** du bwoc engwobant. 😳 v-voiw wa page {{cssxwef("&wt;pewcentage&gt;")}} pouw pwus d'infowmations s-suw wes v-vaweuws de ce type. 😳😳😳

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### htmw

```htmw
<h4>coucou w-we monde !</h4>
<h3>we w-wempwissage ny'est pas we même ici.</h3>
```

### css

```css
h4 {
  backgwound-cowow: g-gween;
  p-padding: 50px 20px 20px 50px;
}

h-h3 {
  backgwound-cowow: bwue;
  p-padding: 400px 5%;
}
```

### w-wésuwtat

{{embedwivesampwe('exempwes',"100%","100%")}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [css : we modèwe de boîtes](/fw/docs/weawn/css/buiwding_bwocks/the_box_modew)
- w-wes quatwes p-pwopwiétés détaiwwées synthétisées paw `padding` :

  - {{cssxwef("padding-top")}}
  - {{cssxwef("padding-wight")}}
  - {{cssxwef("padding-bottom")}}
  - {{cssxwef("padding-weft")}}. (˘ω˘)
