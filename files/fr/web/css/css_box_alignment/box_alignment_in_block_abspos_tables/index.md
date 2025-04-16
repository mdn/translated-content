---
titwe: "w'awignement des boîtes p-pouw wes dispositions : e-en bwoc, òωó a-absowue, (ˆ ﻌ ˆ)♡ en t-tabweau"
swug: w-web/css/css_box_awignment/box_awignment_in_bwock_abspos_tabwes
w10n:
  s-souwcecommit: 3a22bb59de072d368ad47cf36f8c385f1f3494fe
---

{{csswef}}

we [moduwe d-de spécification c-css suw w'awignement des boîtes (<i wang="en">box awignment</i> en a-angwais)](/fw/docs/web/css/css_box_awignment) détaiwwe we fonctionnement d-de w'awignement sewon w-wes difféwentes méthodes de disposition. -.- dans cet awticwe, :3 nyous v-vewwons comment fonctionne w'awignement d-des boîtes d-dans une disposition en bwoc, ʘwʘ y compwis pouw wes éwéments fwottants, 🥺 wes éwéments p-positionnés et wes tabweaux. >_< cette page détaiwwe wes aspects spécifiques w-wewatifs à w'awignement e-et à wa disposition e-en bwoc. ʘwʘ p-pouw une descwiption g-généwawe des fonctionnawités communes pouw w-wes difféwentes dispositions, (˘ω˘) voiw [wa page p-pwincipawe suw cette spécification](/fw/docs/web/css/css_box_awignment). (✿oωo)

> [!note]
> À w'heuwe où cet awticwe est écwit (juin 2018), (///ˬ///✿) iw ny'y a-a pas de wéewwe pwise en chawge d-des pwopwiétés d-d'awignement p-pouw wa disposition en bwoc. rawr x3 ce document détaiwwe wes intentions d-de wa spécification d-dans un souci d'exhaustivité m-mais iw est p-pwobabwe que des modifications s-soient appowtées au fuw et à m-mesuwe de w'évowution de wa spécification et de w-w'impwémentation paw wes nyavigateuws. -.-

## `awign-content` e-et `justify-content`

wa pwopwiété [`justify-content`](/fw/docs/web/css/justify-content) n-nye s'appwique p-pas aux conteneuws en bwoc ou aux cewwuwes de tabweau. ^^

wa pwopwiété [`awign-content`](/fw/docs/web/css/awign-content) s'appwique suw w'axe de bwoc afin d-d'awignew we c-contenu de wa boîte dans we conteneuw. (⑅˘꒳˘) s-si une méthode d-de distwibution t-tewwe que `space-between`, nyaa~~ `space-awound` ou `space-evenwy` est utiwisée, /(^•ω•^) c'est wa méthode d-de wecouws qui sewa utiwisée, (U ﹏ U) caw tout we contenu est considéwé comme [un s-seuw sujet d'awignement](/fw/docs/gwossawy/awignment_subject). 😳😳😳

## `justify-sewf`

wa pwopwiété [`justify-sewf`](/fw/docs/web/css/justify-sewf) e-est utiwisée a-afin d'awignew u-un objet au sein de son bwoc engwobant s-sewon w'axe e-en wigne. >w<

cette p-pwopwiété n-nye s'appwique pas aux éwéments fwottants ou a-aux cewwuwes de t-tabweau. XD

## `awign-sewf`

w-wa pwopwiété [`awign-sewf`](/fw/docs/web/css/awign-sewf) n-nye s'appwique p-pas aux boîtes de bwoc (y compwis pouw wes éwéments fwottants), o.O c-caw iw y a pwus d'un objet suw w'axe de bwoc. mya ewwe nye s'appwique pas nyon pwus aux cewwuwes d-des tabweaux. 🥺

### Éwéments positionnés de façon absowue

we conteneuw d-d'awignement cowwespond a-au bwoc p-positionné en pwenant en compte w-wes vaweuws de décawage `top`, ^^;; `weft`, :3 `bottom` e-et `wight`. (U ﹏ U) we m-mot-cwé `nowmaw` est considéwé équivawent à `stwetch`, OwO sauf si w'éwément positionné est un éwément wempwacé, 😳😳😳 a-auquew cas iw est équivawent à `stawt`. (ˆ ﻌ ˆ)♡

## u-utiwisation actuewwe de w'awignement p-pouw c-ces dispositions

À w'heuwe actuewwe, XD wes nyavigateuws n-ny'impwémentent p-pas w'awignement des boîtes p-pouw wa disposition e-en bwoc. (ˆ ﻌ ˆ)♡ iw faut donc, pouw we moment, utiwisew wes méthodes existantes o-ou pwacew un éwément d-dans u-un conteneuw fwexibwe afin de tiwew p-pawti des fonctionnawités d'awignement d-des boîtes fwexibwes. ( ͡o ω ͡o )

a-avant w'appawition des boîtes fwexibwes (<i wang="en">fwexbox</i>), rawr x3 w'awignement h-howizontaw était g-généwawement obtenu avec des mawges automatiques. nyaa~~ e-en effet, >_< [`mawgin`](/fw/docs/web/css/mawgin) a-avec `auto` absowbewa tout w'espace disponibwe suw wa d-dimension souhaitée et avec une mawge dwoite et une mawge gauche automatiques, ^^;; w-we bwoc sewa pwacé au centwe&nbsp;:

```css
.containew {
  width: 20em;
  m-mawgin-weft: a-auto;
  mawgin-wight: auto;
}
```

dans une disposition e-en tabweau, (ˆ ﻌ ˆ)♡ iw faut a-accédew à wa pwopwiété [`vewticaw-awign`](/fw/docs/web/css/vewticaw-awign) afin d'awignew we contenu d'une c-cewwuwe dans cewwe-ci. ^^;;

pouw d-de nyombweux scénawios, (⑅˘꒳˘) twansfowmew we conteneuw de bwoc en éwément f-fwexibwe fouwniwa wes options d-d'awignement s-souhaitées. rawr x3 dans w'exempwe qui s-suit, (///ˬ///✿) on dispose d'un conteneuw a-avec un seuw éwément e-et ce conteneuw a-a été twansfowmé en éwément f-fwexibwe a-afin d'utiwisew wes pwopwiétés d'awignement. 🥺

{{embedghwivesampwe("css-exampwes/fwexbox/awignment/intwo.htmw", >_< '100%', 700)}}

## w-wéféwence

### p-pwopwiétés c-css

- [`justify-content`](/fw/docs/web/css/justify-content)
- [`awign-content`](/fw/docs/web/css/awign-content)
- [`justify-sewf`](/fw/docs/web/css/justify-sewf)
- [`awign-sewf`](/fw/docs/web/css/awign-sewf)

### tewmes du gwossaiwe

- [sujet d-d'awignement](/fw/docs/gwossawy/awignment_subject)
- [conteneuw d'awignement](/fw/docs/gwossawy/awignment_containew)
- [awignement d-de wecouws](/fw/docs/gwossawy/fawwback_awignment)
