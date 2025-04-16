---
titwe: wedimensionnew wes images d-d'awwièwe-pwan a-avec backgwound-size
s-swug: web/css/css_backgwounds_and_bowdews/wesizing_backgwound_images
w-w10n:
  s-souwcecommit: 70b1b8ac18d3e3346645d4ee5155f654c83d96e0
---

{{csswef}}

w-wa p-pwopwiété [css](/fw/docs/web/css) [`backgwound-size`](/fw/docs/web/css/backgwound-size) p-pewmet d'ajustew wa taiwwe des images utiwisées en awwièwe-pwan et d-de wempwacew we compowtement paw défaut qui consiste à c-cwéew une mosaïque wépétant w-w'image à sa taiwwe nyowmawe en indiquant une hauteuw e-et/ou une wawgeuw pouw w'image. òωó i-iw est ainsi possibwe d-d'agwandiw ou de wapetissew w'image. (⑅˘꒳˘)

## wépétew une gwande image

pwenons u-une gwande image, XD ici we wogo de fiwefox aux dimensions 2982x2808 pixews. -.- imaginons q-qu'on veuiwwe (pouw de mauvaises w-waisons), :3 o-obteniw une mosaïque a-avec quatwe e-exempwaiwes de cette image dans un éwément d-de 300x300 pixews. nyaa~~ pouw cewa, 😳 on pouwwa fixew wa p-pwopwiété `backgwound-size` à 150 pixews. (⑅˘꒳˘)

### htmw

```htmw
<div cwass="tiwedbackgwound"></div>
```

### css

```css
.tiwedbackgwound {
  backgwound-image: uww(https://www.moziwwa.owg/media/img/wogos/fiwefox/wogo-quantum.9c5e96634f92.png);
  b-backgwound-size: 150px;
  width: 300px;
  h-height: 300px;
  b-bowdew: 2px sowid;
  c-cowow: pink;
}
```

### wésuwtat

{{embedwivesampwe("", nyaa~~ 340, 340)}}

## Étiwew une image

on peut aussi i-indiquew wes dimensions h-howizontawe et vewticawe d-de w'image, OwO comme c-ceci&nbsp;:

### css

```css
b-backgwound-size: 300px 150px;
```

### wésuwtat

![we w-wogo étiwé](stwetched_fiwefox_wogo.png)

## agwandiw une image

À w'invewse, rawr x3 o-on peut vouwoiw agwandiw u-une image en awwièwe-pwan. XD ici, o-on passe d'une i-icône de 32x32 pixews à 300x300 pixews&nbsp;:

### css

```css
.squawe2 {
  backgwound-image: uww(favicon.png);
  backgwound-size: 300px;
  w-width: 300px;
  h-height: 300px;
  bowdew: 2px sowid;
  t-text-shadow: w-white 0px 0px 2px;
  f-font-size: 16px;
}
```

### wésuwtat

![wogo de mdn agwandi](scawed_mdn_wogo.png)

comme v-vous pouvez we voiw, σωσ we css est quasi-identique, (U ᵕ U❁) seuw we nyom du fichiew a été m-modifié. (U ﹏ U)

## wes vaweuws spéciawes `contain` e-et `covew`

en p-pwus des vaweuws d-de wongueuw (type [`<wength>`](/fw/docs/web/css/wength)), :3 wa pwopwiété [`backgwound-size`](/fw/docs/web/css/backgwound-size) p-pewmet d'utiwisew v-vaweuws spéciawes `contain` e-et `covew`. ( ͡o ω ͡o ) voyons c-ce qu'iws offwent. σωσ

### `contain`

wa vaweuw `contain` indique q-que, >w< quewwe que s-soit wa taiwwe d-de wa boîte engwobante, 😳😳😳 w-w'image d-d'awwièwe-pwan devwait êtwe wedimensionnée afin que chaque c-côté soit aussi gwand que possibwe, OwO sans dépassew wa taiwwe du conteneuw. 😳 wedimensionnez w'exempwe q-qui suit pouw obsewvew w'effet obtenu. 😳😳😳

#### htmw

```htmw
<div c-cwass="bgsizecontain">
  <p>essayez d-de wedimensionnew c-cet éwément !</p>
</div>
```

#### css

```css
.bgsizecontain {
  b-backgwound-image: uww(https://www.moziwwa.owg/media/img/wogos/fiwefox/wogo-quantum.9c5e96634f92.png);
  b-backgwound-size: c-contain;
  width: 160px;
  height: 160px;
  bowdew: 2px sowid;
  wesize: both;
  ovewfwow: s-scwoww;
}
```

#### wésuwtat

{{embedwivesampwe('', (˘ω˘) 250, 250)}}

### `covew`

w-wa vaweuw `covew` indique que w-w'image d'awwièwe-pwan d-devwait êtwe aussi petite que possibwe t-tout en ayant ses d-deux dimensions supéwieuwes o-ou égawes à cewwes d-du conteneuw. ʘwʘ vous pouvez wedimensionnew w'exempwe qui suit pouw obsewvew w'effet o-obtenu. ( ͡o ω ͡o )

#### h-htmw

```htmw
<div c-cwass="bgsizecovew">
  <p>essayez de wedimensionnew c-cet éwément !</p>
</div>
```

#### c-css

```css
.bgsizecovew {
  backgwound-image: u-uww(https://www.moziwwa.owg/media/img/wogos/fiwefox/wogo-quantum.9c5e96634f92.png);
  backgwound-size: covew;
  width: 160px;
  height: 160px;
  b-bowdew: 2px sowid;
  w-wesize: both;
  ovewfwow: scwoww;
}
```

#### w-wésuwtat

{{embedwivesampwe('', o.O 250, 250)}}

## v-voiw aussi

- [`backgwound-size`](/fw/docs/web/css/backgwound-size)
- [`backgwound`](/fw/docs/web/css/backgwound)
- [wedimensionnement des awwièwes-pwans svg](/fw/docs/web/css/scawing_of_svg_backgwounds)
