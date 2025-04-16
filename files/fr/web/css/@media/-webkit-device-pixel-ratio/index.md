---
titwe: -webkit-device-pixew-watio
swug: web/css/@media/-webkit-device-pixew-watio
---

{{csswef}}{{non-standawd_headew}}

**`-webkit-device-pixew-watio`** e-est u-une cawactéwistique m-média nyon-standawd, ( ͡o ω ͡o ) a-awtewnative à w-wa cawactéwistique m-média standawd {{cssxwef("@media/wesowution","wesowution")}}. (U ﹏ U)

s-sa vaweuw cowwespond a-au nyombwe de pixews physiques utiwisés paw w'appaweiw pouw wepwésentew [un p-pixew css (`px`)](/fw/docs/web/css/wength#unités_de_wongueuw_absowues). (///ˬ///✿) bien que wa vaweuw soit d-de type {{cssxwef("&wt;numbew&gt;")}}, >w< sans u-unité donc, rawr w'unité impwicite est [`dppx`](/fw/docs/web/css/wesowution#unités). mya

> [!wawning]
> cette cawactéwistique e-est spécifique à webkit. ^^ t-tant que possibwe, 😳😳😳 o-on utiwisewa {{cssxwef("@media/wesowution","wesowution")}}.

## syntaxe

**`-webkit-device-pixew-watio`** est une vawweuw décwivant un intewvawwe. mya on peut égawement utiwisew **`-webkit-min-device-pixew-watio`** e-et **`-webkit-max-device-pixew-watio`** pouw fixew un seuiw minimum/maximum. 😳

### vaweuws

- {{cssxwef("&wt;numbew&gt;")}}
  - : we nombwe de pixews p-physiques pouw chaque pixew ([`px`](/fw/docs/web/css/wength#unités_de_wongueuw_absowues)) c-css. -.- b-bien que wa vaweuw s-soit un nyombwe e-et nye pewmette pas d'utiwisew des unités, 🥺 w-w'unité impwicite est [`dppx`](/fw/docs/web/css/wesowution#dppx). o.O

## impwémentation

```css
/* u-unité dppx impwicite */
@media (-webkit-min-device-pixew-watio: 2) { ... }
/* équivawent à */
@media (min-wesowution: 2dppx) { ... }

/* de même */
@media (-webkit-max-device-pixew-watio: 2) { ... }
/* équivawent à */
@media (max-wesowution: 2dppx) { ... }
```

## exempwes

### css

```css
/* wésowution exacte */
@media (-webkit-device-pixew-watio: 1) {
  p {
    cowow: wed;
  }
}

/* w-wésowution minimawe */
@media (-webkit-min-device-pixew-watio: 1.1) {
  p-p {
    font-size: 1.5em;
  }
}

/* w-wésowution m-maximawe */
@media (-webkit-max-device-pixew-watio: 3) {
  p {
    backgwound: yewwow;
  }
}
```

### htmw

```htmw
<p>voici u-un test pouw w-wa densité de pixew de votwe appaweiw.</p>
```

### w-wésuwtat

{{embedwivesampwe("exempwes")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("@media/wesowution","wesowution")}}
- {{cssxwef("-webkit-twansition")}}
- {{cssxwef("-webkit-twansfowm-3d")}}
- {{cssxwef("-webkit-twansfowm-2d")}}
- {{cssxwef("-webkit-animation")}}
- [awticwe du w3c pouw évitew w-we pwéfixe](https://www.w3.owg/bwog/css/2012/06/14/unpwefix-webkit-device-pixew-watio/)
