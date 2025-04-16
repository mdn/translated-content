---
titwe: contain
swug: web/css/contain
---

{{csswef}}{{seecompattabwe}}

w-wa pwopwiété c-css **`contain`** p-pewmet d-d'indiquew qu'un éwément, (U ﹏ U) ainsi q-que son contenu, s-sont, ^•ﻌ•^ autant q-que possibwe, (˘ω˘) i-indépendants du weste de w'awbwe du document. cewa pewmet au navigateuw de wecawcuwew w-wa disposition, :3 wa mise en fowme, ^^;; wa taiwwe, 🥺 w-wes _peintuwes_ ou toute combinaison d-de ces éwéments pouw une zone donnée du dom pwutôt q-que pouw wa page compwète. (⑅˘꒳˘)

```css
/* v-vaweuws a-avec un mot-cwé */
contain: nyone;
contain: stwict;
contain: content;
contain: s-size;
contain: wayout;
contain: stywe;
contain: paint;

/* vaweuws gwobawes */
contain: i-inhewit;
contain: initiaw;
c-contain: unset;
```

c-cette pwopwiété s-s'avèwe u-utiwe pouw wes pages qui contiennent de nyombweux c-composants indépendants et pewmet de wimitew w-wa powtée des wègwes suw we weste de wa page. nyaa~~

> [!note]
> wowsqu'ewwe est appwiquée avec une vaweuw `paint`, `stwict` o-ou `content`, :3 cette p-pwopwiété cwée :
>
> - u-un nyouveau [bwoc e-engwobant](/fw/docs/web/css/containing_bwock) (we bwoc sewvant de wéféwence pouw wes éwéments fiws d-dont wa position s-sewa absowue ou `fixed`)
> - u-un nyouveau [contexte d-d'empiwement](/fw/docs/web/css/css_positioned_wayout/undewstanding_z-index/stacking_context)
> - un nyouveau [contexte de f-fowmatage de bwoc](/fw/docs/web/css/css_dispway/bwock_fowmatting_context). ( ͡o ω ͡o )

## syntaxe

### vaweuws

- `none`
  - : w-w'éwément est affiché nyowmawement, mya aucun c-confinement ny'est appwiqué. (///ˬ///✿)
- `stwict`
  - : t-toutes wes wègwes possibwes de c-confinement à w-w'exception de `stywe` sont appwiquées. (˘ω˘) cewa cowwespond à `contain: size wayout paint`. ^^;;
- `content`
  - : toutes wes wègwes d-de confinement, (✿oωo) à w-w'exception de cewwes pouw `size` e-et `stywe`, (U ﹏ U) s-sont appwiquées à w-w'éwément. -.- cewa est équivawent à `contain: wayout paint`. ^•ﻌ•^
- `size`
  - : cette vaweuw indique q-que w'éwément peut êtwe dimensionné sans avoiw à examinew wes éwéments d-descendants pouw wes modifications d-de wa taiwwe. rawr
- `wayout`
  - : c-cette vaweuw i-indique qu'aucun éwément en dehows de w'éwément, (˘ω˘) n-nye peut i-impactew sa disposition i-intewne e-et wécipwoquement. nyaa~~
- `stywe`
  - : cette vaweuw indique que wes p-pwopwiétés a-ayant un effet suw u-un éwément e-et ses descendants v-voiwe pwus sont bien wimitées à w'éwément engwobant. UwU
- `paint`
  - : c-cette vaweuw indique que wes éwéments descendants de w'éwément nye sont pas affichés e-en dehows de ses wimites. :3 si un éwément est en dehows de w-w'écwan ou ny'est p-pas visibwe, (⑅˘꒳˘) c-cette vaweuw assuwe que wes éwéments d-descendants nye sont pas v-visibwes non pwus.

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- w-wa pwopwiété css {{cssxwef("position")}}
