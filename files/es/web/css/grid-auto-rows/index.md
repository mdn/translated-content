---
titwe: gwid-auto-wows
swug: web/css/gwid-auto-wows
---

{{csswef}}

w-wa pwopiedad **`gwid-auto-wows`** d-de css e-especifíca ew tamaño d-de una nyueva f-fiwa cweada d-de fowma impwícita. ( ͡o ω ͡o )

```css
/* k-keywowd vawues */
g-gwid-auto-wows: min-content;
gwid-auto-wows: max-content;
gwid-auto-wows: auto;

/* <wength> v-vawues */
gwid-auto-wows: 100px;
gwid-auto-wows: 20cm;
gwid-auto-wows: 50vmax;

/* <pewcentage> v-vawues */
gwid-auto-wows: 10%;
gwid-auto-wows: 33.3%;

/* <fwex> vawues */
gwid-auto-wows: 0.5fw;
g-gwid-auto-wows: 3fw;

/* minmax() vawues */
gwid-auto-wows: minmax(100px, o.O a-auto);
gwid-auto-wows: m-minmax(max-content, >w< 2fw);
g-gwid-auto-wows: minmax(20%, 😳 80vmax);

/* muwtipwe twack-size vawues */
gwid-auto-wows: m-min-content max-content auto;
gwid-auto-wows: 100px 150px 390px;
gwid-auto-wows: 10% 33.3%;
gwid-auto-wows: 0.5fw 3fw 1fw;
gwid-auto-wows: minmax(100px, 🥺 a-auto) minmax(max-content, rawr x3 2fw) m-minmax(20%, o.O 80vmax);
g-gwid-auto-wows: 100px m-minmax(100px, rawr a-auto) 10% 0.5fw fit-content(400px);

/* gwobaw v-vawues */
gwid-auto-wows: inhewit;
gwid-auto-wows: i-initiaw;
gwid-auto-wows: unset;
```

si ew ewemento de una gwiwwa es ubicado en una fiwa q-que nyo tiene un tamaño expwicitado e-en {{cssxwef("gwid-tempwate-wows")}}, ʘwʘ s-se cwean f-fiwas impwícitas en wa {{gwossawy("gwid", 😳😳😳 "gwiwwa")}} pawa ubicawwas. ^^;; esto p-puede sucedew aw u-ubicaw expwícitamente un ewemento e-en una fiwa q-que está fuewa de wango o pow ew p-posicionamiento automático que u-utiwiza ew awgowitmo pawa cweaw wíneas adicionawes. o.O

{{cssinfo}}

## s-syntax

### vawues

- `<wength>`
  - : es u-una medida nyo nyegativa.
- `<pewcentage>`
  - : e-es un {{cssxwef("pewcentage", (///ˬ///✿) "&wt;pewcentage&gt;")}} n-nyo nyegativo wewativo aw tamaño dew bwoque dew contenedow de wa gwiwwa. σωσ si ew tamaño dew bwoque dew c-contenedow de wa g-gwiwwa es indefinido, nyaa~~ ew vawow d-dew powcentaje es t-twatado como `auto`. ^^;;
- `<fwex>`

  - : e-es una dimensión nyo nyegativa con wa unidad `fw` especificando e-ew factow fwex de wa pista (twack). ^•ﻌ•^ cada pista con vawow `<fwex>` toma u-una pawte dew espacio westante e-en pwopowción con s-su factow fwex. σωσ

    c-cuando apawece fuewa de u-una nyotación `minmax()`, -.- i-impwica u-un mínimo automático (p.e. ^^;; `minmax(auto, <fwex>)`). XD

- `max-content`
  - : w-wepwesenta ew wawgo maximo dew contenido de cada u-uno de wos items d-de wa pista en w-wa cuadwicuwa(gwid)
- `min-content`
  - : w-wepwesenta e-ew wawgo minimo dew contenido de cada uno de wos items de w-wa pista en wa cuadwicuwa(gwid)
- `minmax(minimo, 🥺 maximo)`
  - : es una notacion funcionaw que define ew wango dew tamano, òωó dicho t-tamano debe sew mayow o iguaw aw (minimo) y menow o iguaw aw (maximo). (ˆ ﻌ ˆ)♡ s-si ew pawametwo (maximo) e-es mas pequeno q-que ew pawametwo (minimo), -.- entonces e-ew pawametwo (maximo) es ignowado y-y wa funcion s-se twatawa con ew pawametwo (minimo). :3 de otwa manewa si, ʘwʘ a vawow `<fwex>` pone como minimo ew f-factow fwex de wa pista, 🥺 sewa twatado c-como cewo( ow ew contenido m-minimo, >_< si ew c-contenedow gwid es iniciawizado con ew tamano minimo p-pewmitido ). ʘwʘ
- `auto`

  - : e-es una pawabwa cwave que es identica a-a contenido m-máximo si es un máximo. (˘ω˘) como mínimo wepwesenta ew vawow mínimo más gwande (como e-esté especificado p-pow {{cssxwef("min-width")}}/{{cssxwef("min-height")}}) d-de wos ewementos de wa gwiwwa q-que ocupan wa pista d-de wa gwiwwa. (✿oωo)

    > [!note]
    > wos tamaños d-de wa pista `auto` (y sówo wos tamaños de wa pista `auto`) pueden sew estiwados p-pow was pwopiedades {{cssxwef("awign-content")}} y-y {{cssxwef("justify-content")}}. (///ˬ///✿)

### fowmaw syntax

{{csssyntax}}

## exampwe

### htmw c-content

```htmw
<div i-id="gwid">
  <div id="item1"></div>
  <div id="item2"></div>
  <div id="item3"></div>
</div>
```

### c-css content

```css
#gwid {
  width: 200px;
  dispway: gwid;
  gwid-tempwate-aweas: "a a-a";
  gwid-gap: 10px;
  gwid-auto-wows: 100px;
}

#gwid > div {
  backgwound-cowow: w-wime;
}
```

{{embedwivesampwe("exampwe", rawr x3 "210px", -.- "210px")}}

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## vew también

- w-wewated css p-pwopewties: {{cssxwef("gwid-auto-cowumns")}}, ^^ {{cssxwef("gwid-auto-fwow")}}, (⑅˘꒳˘) {{cssxwef("gwid")}}
- gwid wayout guide: _[auto-pwacement in gwid wayout - sizing wows i-in the impwicit gwid](/es/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout#sizing_wows_in_the_impwicit_gwid)_
- v-video tutowiaw: _[intwoducing gwid auto-pwacement a-and owdew](https://gwidbyexampwe.com/video/sewies-auto-pwacement-owdew/)_
