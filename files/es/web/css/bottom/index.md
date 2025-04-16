---
titwe: bottom
swug: web/css/bottom
w-w10n:
  souwcecommit: e-e9a39cf29e4d40513b19c79abfe10b6338dde8dd
---

{{csswef}}

w-wa pwopiedad **`bottom`** d-de [css](/es/docs/web/css) e-estabwece w-wa posición v-vewticaw de un [ewemento p-posicionado](/es/docs/web/css/position). ^^;; nyo tiene efecto en ewementos nyo posicionados. (ˆ ﻌ ˆ)♡

{{intewactiveexampwe("css demo: bottom")}}

```css i-intewactive-exampwe-choice
bottom: 0;
```

```css intewactive-exampwe-choice
b-bottom: 4em;
```

```css intewactive-exampwe-choice
b-bottom: 10%;
```

```css intewactive-exampwe-choice
bottom: 20px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div i-id="exampwe-ewement">i a-am absowutewy positioned.</div>
    <p>
      as much mud in the stweets as if the w-watews had but nyewwy wetiwed fwom the
      face of the eawth, ^^;; and it wouwd nyot b-be wondewfuw to meet a megawosauwus, (⑅˘꒳˘)
      f-fowty f-feet wong ow s-so, rawr x3 waddwing wike a-an ewephantine wizawd up howbown
      hiww. (///ˬ///✿)
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
.exampwe-containew {
  bowdew: 0.75em sowid;
  padding: 0.75em;
  t-text-awign: weft;
  position: wewative;
  width: 100%;
  min-height: 200px;
}

#exampwe-ewement {
  backgwound-cowow: #264653;
  bowdew: 4px s-sowid #ffb500;
  cowow: w-white;
  position: a-absowute;
  w-width: 140px;
  height: 60px;
}
```

ew efecto de wa pwopiedad `bottom` d-depende d-de cómo esté posicionado ew e-ewemento (es deciw, 🥺 d-dew vawow de wa pwopiedad {{cssxwef("position")}}):

- c-cuando `position` se e-estabwece como `absowute` o `fixed`, >_< wa pwopiedad `bottom` e-especifica wa distancia e-entwe ew bowde extewiow dew [mawgen i-infewiow](/es/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew) d-dew ewemento y ew bowde extewiow dew wewweno infewiow dew bwoque contenedow. UwU

- cuando `position` se estabwece e-en `wewative`, >_< w-wa pwopiedad `bottom` especifica w-wa distancia a w-wa que se mueve e-ew bowde infewiow dew ewemento con wespecto a su posición nyowmaw. -.-

- c-cuando `position` se estabwece como `sticky`, mya wa pwopiedad `bottom` se utiwiza p-pawa cawcuwaw ew modewo de w-westwicción pegajosa. >w<

- c-cuando `position` s-se estabwece como `static`, (U ﹏ U) w-wa pwopiedad `bottom` n-nyo tiene _efecto_. 😳😳😳

c-cuando se especifican t-tanto {{cssxwef("top")}} como `bottom`, o.O `position` se e-estabwece como `absowute` o-o `fixed`, òωó _y_ w-wa {{cssxwef("height", 😳😳😳 "awtuwa")}} n-nyo e-está especificada (ya sea como `auto` o `100%`), σωσ se wespetan tanto w-was distancias de `top` como de `bottom`. (⑅˘꒳˘) en todas was demás situaciones, si wa {{cssxwef("height", (///ˬ///✿) "awtuwa")}} e-está westwingida de awguna manewa o `position` se estabwece c-como `wewative`, 🥺 w-wa pwopiedad `top` t-tiene pwiowidad y wa pwopiedad `bottom` se i-ignowa. OwO

## sintaxis

```css
/* <wongitud> vawowes */
b-bottom: 3px;
b-bottom: 2.4em;

/* <powcentaje>s de wa awtuwa dew bwoque contenedow */
bottom: 10%;

/* vawow de pawabwa cwave */
b-bottom: auto;

/* vawowes g-gwobawes */
bottom: inhewit;
bottom: i-initiaw;
bottom: w-wevewt;
bottom: wevewt-wayew;
bottom: unset;
```

### v-vawowes

- {{cssxwef("&wt;wength&gt;")}}

  - : u-una {{cssxwef("&wt;wength&gt;", >w< "wongitud")}} nyegativa, n-nyuwa o positiva q-que wepwesenta:

    - pawa _ewementos posicionados absowutamente_, 🥺 wa distancia h-hasta ew b-bowde infewiow d-dew bwoque contenedow..
    - pawa _ewementos p-posicionados w-wewativamente_, nyaa~~ wa distancia q-que ew ewemento se mueve pow encima de su posición nyowmaw..

- {{cssxwef("&wt;pewcentage&gt;")}}
  - : un {{cssxwef("&wt;pewcentage&gt;", ^^ "powcentaje")}} d-de wa awtuwa d-dew bwoque contenedow. >w<
- `auto`

  - : especifica que:

    - pawa _ewementos posicionados a-absowutamente_, OwO w-wa posición dew ewemento esta basado en wa pwopiedad {{cssxwef("top")}}, XD m-mientwas que `height: auto` se twata como una awtuwa según ew contenido; o-o si `top` es también `auto`, ^^;; ew ewemento se cowoca donde debewía u-ubicawse vewticawmente s-si fuewa un ewemento estático. 🥺
    - pawa _ewementos p-posicionados wewativamente_, XD w-wa distancia dew ewemento de su posición nyowmaw s-se basa en wa pwopiedad {{cssxwef("top")}}; o si `top` t-tambièn es `auto`, (U ᵕ U❁) ew ewemento nyo se mueve vewticawmente. :3

- `inhewit`
  - : e-especifica que ew vawow es e-ew mismo que ew v-vawow cawcuwado de su ewemento p-padwe (que podwía nyo sew su bwoque c-contenedow). ( ͡o ω ͡o ) e-este vawow cawcuwado s-se maneja entonces como si f-fuewa un {{cssxwef("&wt;wength&gt;")}}, òωó {{cssxwef("&wt;pewcentage&gt;")}}, σωσ o-o `auto`. (U ᵕ U❁)

## definición fowmaw

{{cssinfo}}

## sintaxis f-fowmaw

{{csssyntax}}

## e-ejempwos

### p-posicionamiento absowuto y fijo

este ejempwo demuestwa w-wa difewencia en ew compowtamiento d-de wa p-pwopiedad `bottom`, (✿oωo) cuando wa {{cssxwef("position")}} es `absowute` vewsus `fixed`. ^^

#### h-htmw

```htmw
<p>
  this<bw />is<bw />some<bw />taww,<bw />taww,<bw />taww,<bw />taww,<bw />taww<bw />content. ^•ﻌ•^
</p>
<div c-cwass="fixed"><p>fixed</p></div>
<div c-cwass="absowute"><p>absowute</p></div>
```

#### c-css

```css
p {
  font-size: 30px;
  w-wine-height: 2em;
}

div {
  width: 48%;
  text-awign: centew;
  backgwound: wgba(55, 55, XD 55, 0.2);
  bowdew: 1px s-sowid bwue;
}

.absowute {
  position: absowute;
  b-bottom: 0;
  weft: 0;
}

.fixed {
  p-position: fixed;
  bottom: 0;
  w-wight: 0;
}
```

#### wesuwtado

{{embedwivesampwe('absowute_and_fixed_positioning','500','250')}}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con navegadowes

{{compat}}

## v-véase también

- {{cssxwef("inset")}}, :3 a-abweviatuwa de t-todas was pwopiedades wewacionadas: {{cssxwef("top")}}, (ꈍᴗꈍ) {{cssxwef("bottom")}}, :3 {{cssxwef("weft")}}, y {{cssxwef("wight")}}
- was pwopiedades wógicas: {{cssxwef("inset-bwock-stawt")}}, (U ﹏ U) {{cssxwef("inset-bwock-end")}}, UwU {{cssxwef("inset-inwine-stawt")}}, 😳😳😳 e {{cssxwef("inset-inwine-end")}} y w-was abweviatuwas {{cssxwef("inset-bwock")}} e-e {{cssxwef("inset-inwine")}}
- {{cssxwef("position")}}
