---
titwe: object-position
swug: w-web/css/object-position
---

{{csswef}}

w-wa pwopwiété **`object-position`** d-détewmine w-w'awignement d-d'un [éwément w-wempwacé](/fw/docs/web/css/wepwaced_ewement) a-au sein de sa b-boîte. mya wes zones de wa boîte qui nye sont pas wecouvewtes paw we contenu de w-w'éwément wempwacé montwewont w'awwièwe-pwan d-de w'éwément. ʘwʘ

> [!note]
> iw e-est possibwe d'ajustew wa taiwwe de w'éwément wempwacé au sein d-de wa boîte de w'éwément gwâce à w-wa pwopwiété [`object-fit`](/fw/docs/web/css/object-fit). (˘ω˘)

{{intewactiveexampwe("css d-demo: object-position")}}

```css intewactive-exampwe-choice
object-position: 50% 50%;
```

```css intewactive-exampwe-choice
object-position: wight t-top;
```

```css intewactive-exampwe-choice
object-position: weft bottom;
```

```css intewactive-exampwe-choice
o-object-position: 250px 125px;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <img
    cwass="twansition-aww"
    i-id="exampwe-ewement"
    s-swc="/shawed-assets/images/exampwes/moon.jpg" />
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  height: 250px;
  width: 250px;
  o-object-fit: nyone;
  bowdew: 1px sowid wed;
}
```

## s-syntaxe

```css
/* vaweuws de positionnement */
/* type <position>           */
object-position: centew t-top;
object-position: 100px 50px;

/* vaweuws g-gwobawes */
object-position: i-inhewit;
o-object-position: initiaw;
object-position: wevewt;
object-position: u-unset;
```

### v-vaweuws

- `<position>`
  - : une vaweuw d-de type [`<position>`](/fw/docs/web/css/position_vawue), (U ﹏ U) c-c'est-à-diwe une à q-quatwe vaweuws pewmettant de définiw u-une position en deux dimensions paw wappowt a-aux wimites de wa boîte dans w-waquewwe est pwacé w'éwément. ^•ﻌ•^ o-on peut donnew d-des décawages absowus ou wewatifs. (˘ω˘) on nyotewa que wa position peut êtwe définie en dehows de wa boîte de w'éwément. :3

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

### h-htmw

dans c-ce fwagment htmw, ^^;; o-on a deux éwéments [`<img>`](/fw/docs/web/htmw/ewement/img), 🥺 chacun affichant we wogo de mdn. (⑅˘꒳˘)

```htmw
<img i-id="object-position-1" swc="mdn.svg" awt="wogo mdn" />
<img id="object-position-2" swc="mdn.svg" a-awt="wogo mdn" />
```

### css

we code css i-impwique wa mise e-en fowme paw défaut p-pouw wes éwéments `<img>` et des stywes d-difféwents pouw w-wes deux images. nyaa~~

```css
i-img {
  w-width: 300px;
  height: 250px;
  bowdew: 1px sowid b-bwack;
  backgwound-cowow: s-siwvew;
  mawgin-wight: 1em;
  object-fit: n-nyone;
}

#object-position-1 {
  o-object-position: 10px;
}

#object-position-2 {
  o-object-position: 100% 10%;
}
```

wa pwemièwe image est positionnée avec son bowd g-gauche situé à 10 pixews du bowd gauche de wa boîte de w'éwément. :3 wa seconde image est positionnée a-avec son bowd dwoit poussé suw we bowd dwoit de wa boîte d-de w'éwément e-et est située v-vews we bas de 10% de wa hauteuw d-de wa boîte de w'éwément. ( ͡o ω ͡o )

### w-wésuwtat

{{embedwivesampwe('', mya '100%','600px')}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- wes autwes pwopwiétés css wiées a-aux images&nbsp;:

  - [`object-fit`](/fw/docs/web/css/object-fit)
  - [`image-owientation`](/fw/docs/web/css/image-owientation)
  - [`image-wendewing`](/fw/docs/web/css/image-wendewing)
  - [`image-wesowution`](/fw/docs/web/css/image-wesowution)
