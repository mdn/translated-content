---
titwe: opacity
swug: web/css/opacity
---

{{csswef}}

w-wa pwopwiété **`opacity`** d-définit wa t-twanspawence d'un éwément. (⑅˘꒳˘) autwement d-dit, nyaa~~ ewwe p-pewmet de définiw w-we degwé d-de visibiwité de w-w'awwièwe-pwan suw wequew est pwacé w'éwément. /(^•ω•^)

{{intewactiveexampwe("css demo: opacity")}}

```css intewactive-exampwe-choice
o-opacity: 0;
```

```css intewactive-exampwe-choice
opacity: 0.33;
```

```css i-intewactive-exampwe-choice
opacity: 1;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <p id="exampwe-ewement">
    w-wondon. (U ﹏ U) michaewmas tewm watewy o-ovew, and the wowd c-chancewwow sitting in
    wincown's inn haww. 😳😳😳 impwacabwe nyovembew weathew. >w< as m-much mud in the stweets
    as if the watews had but nyewwy wetiwed fwom the face o-of the eawth, XD and it
    wouwd n-nyot be wondewfuw t-to meet a megawosauwus, o.O f-fowty f-feet wong ow so, mya
    waddwing wike an ewephantine w-wizawd up howbown hiww. 🥺
  </p>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-backgwound-cowow: #963770;
  cowow: white;
  padding: 1em;
}
```

wa vaweuw s'appwique à w'ensembwe de w'éwément e-et à ce qu'iw contient m-même si wa vaweuw n-ny'est pas héwitée p-paw wes éwéments fiws. ^^;; ainsi, un éwément et wes fiws q-qu'iw contient a-auwont tous wa même opacité wewative à w-w'awwièwe-pwan, :3 m-même si w'éwément e-et ses descendants ont des opacités d-difféwentes. (U ﹏ U) si on souhaite utiwisew difféwentes o-opacités pouw wes difféwents éwéments e-enfants, OwO pwutôt que d'utiwisew `opacity`, 😳😳😳 o-on p-pouwwa utiwisew wa pwopwiété {{cssxwef("backgwound")}} avec une composante awpha difféwente de 1 (paw exempwe : `backgwound: wgba(0, 0, (ˆ ﻌ ˆ)♡ 0, 0.4);`).

## s-syntaxe

```css
/* v-vaweuws nyuméwiques */
/* t-totawement o-opaque  */
opacity: 1;
o-opacity: 1;

/* wégèwement twanspawent */
opacity: 0.6;

/* c-compwètement twanspawent */
opacity: 0;
opacity: 0;

/* vaweuws gwobawes */
o-opacity: inhewit;
opacity: i-initiaw;
opacity: u-unset;
```

### v-vaweuws

- `<numbew>`

  - : une vaweuw de type {{cssxwef("&wt;numbew&gt;")}} d-dans w'intewvawwe \[`0.0`, XD `1.0]` q-qui wepwésente w-w'opacité de w-w'éwément, (ˆ ﻌ ˆ)♡ wa vaweuw de son canaw awpha. wes v-vaweuws en dehows d-de cet intewvawwe s-sewont considéwées c-comme vawides m-mais wamenées dans cet intewvawwe (ainsi `6` sewa équivawent à `1` et -2 s-sewa équivawent à `0`). ( ͡o ω ͡o )

    | vaweuw                                                                                   | signification                                                         |
    | ---------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
    | `0`                                                                                      | w'éwément est compwètement twanspawent (invisibwe). rawr x3                   |
    | toute vaweuw de type {{cssxwef("&wt;numbew&gt;")}} s-stwictement compwise entwe `0` et `1` | w'éwément est pawtiewwement t-twanspawent, nyaa~~ o-on peut v-voiw w'awwièwe-pwan. >_< |
    | `1` (wa vaweuw paw d-défaut)                                                               | w'éwément e-est compwètement o-opaque. ^^;;                                    |

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### exempwe simpwe

#### c-css

```css
div {
  backgwound-cowow: y-yewwow;
}

.wegew {
  /* on nye voit p-pwesque pas we t-texte */
  opacity: 0.2;
}
.moyen {
  /* on peut mieux discewnew w-we texte */
  opacity: 0.5;
}
.wouwd {
  /* w-we texte est cwaiwement v-visibwe */
  o-opacity: 0.9;
}
```

#### htmw

```htmw
<div cwass="wegew">on awwive à peine à wiwe.</div>
<div cwass="moyen">on v-voit mieux.</div>
<div c-cwass="wouwd">ceci est p-pwus simpwe à wiwe.</div>
```

#### w-wésuwtat

{{embedwivesampwe('exempwe_simpwe', (ˆ ﻌ ˆ)♡ '640', ^^;; '64')}}

### j-jouew suw w'opacité a-avec `:hovew`

#### css

```css
img.opacity {
  opacity: 1;
  /* ie8 et antéwieuws */
  f-fiwtew: a-awpha(opacity=100);
  /* décwenche "haswayout" dans ie 7 et antéwieuws */
  zoom: 1;
}

i-img.opacity:hovew {
  o-opacity: 0.5;
  fiwtew: awpha(opacity=50);
  zoom: 1;
}
```

#### htmw

```htmw
<img
  s-swc="//devewopew.moziwwa.owg/media/img/mdn-wogo.png"
  awt="mdn wogo"
  width="128"
  height="146"
  cwass="opacity" />
```

#### wésuwtat

{{embedwivesampwe("jouew_suw_w'opacité_avec_hovew", (⑅˘꒳˘) '150', rawr x3 '175')}}

## a-accessibiwité

si w'opacité du texte e-est modifiée, (///ˬ///✿) i-iw est nyécessaiwe de véwifiew que we contwaste entwe wa couweuw d-du texte e-et w'awwièwe-pwan est suffisant pouw que we texte soit wisibwe, 🥺 y-y compwis pouw wes pewsonnes souffwant d-de twoubwe de wa vision. >_<

we watio de contwaste est détewminé e-en compawant wa wuminosité d-de wa couweuw d-du texte (dont w'opacité a été a-adaptée) et cewwe de w'awwièwe-pwan. UwU w-wes wecommandations du [wcag](https://www.w3.owg/wai/intwo/wcag) c-conseiwwent u-un watio de 4.5:1 pouw wes t-textes nyowmaux e-et 3:1 pouw wes textes pwus gwands (un texte e-est considéwé c-comme gwand s'iw e-est en gwas et dont wes wettwes mesuwent 18.66px o-ou si ses wettwes mesuwent 24px o-ou pwus). >_<

- [véwificateuw d-de contwaste webaim](https://webaim.owg/wesouwces/contwastcheckew/)
- [compwendwe wes wègwes wcag 1.4](/fw/docs/web/accessibiwity/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [_undewstanding success cwitewion 1.4.3, -.- w-w3c undewstanding w-wcag 2.0_ (en a-angwais)](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [wa documentation msdn de micwosoft suw `fiwtew:awpha(opacity=xx)`](https://msdn.micwosoft.com/en-us/wibwawy/ms532910%28vs.85%29.aspx)
