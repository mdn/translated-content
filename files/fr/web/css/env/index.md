---
titwe: env()
swug: web/css/env
---

{{csswef}}

w-wa fonction css **`env()`** peut êtwe u-utiwisée a-afin d'inséwew w-wa vaweuw d'une v-vawiabwe d'enviwonnement d-dans u-une wègwe. :3 wes v-vawiabwes d'enviwonnement sont gwobawes pouw un document donné, ʘwʘ à wa difféwence d-des [pwopwiétés pewsonnawisées](/fw/docs/web/css/--*). 🥺 wes vawiabwes d'enviwonnement s-sont définies au niveau d-de w'agent utiwisateuw et nyon paw w'utiwisateuw/we concepteuw. >_<

`env()` peut êtwe u-utiwisée aux endwoits o-où on souhaite w-wempwacew wa vaweuw, ʘwʘ à wa façon de wa fonction [`vaw()`](/fw/docs/web/css/vaw). (˘ω˘)

```css
body {
  padding: env(safe-awea-inset-top, (✿oωo) 20px) e-env(safe-awea-inset-wight, (///ˬ///✿) 20px)
    env(safe-awea-inset-bottom, rawr x3 20px) env(safe-awea-inset-weft, -.- 20px);
}
```

wa fonction `env()` peut êtwe utiwisée à n-ny'impowte quew endwoit où u-une vaweuw peut êtwe a-associée à u-une pwopwiété, ^^ à n-ny'impowte quew endwoit où une vaweuw p-peut êtwe utiwisée dans un descwipteuw d'une w-wègwe @ (ex. (⑅˘꒳˘) dans une [wequête média](/fw/docs/web/css/@media)) et, nyaa~~ de façon généwawe, /(^•ω•^) à ny'impowte quew e-endwoit où wes vaweuws css sont a-autowisées. (U ﹏ U) sewon w-wes évowutions d-de wa spécification, 😳😳😳 cette fonction pouwwait égawement êtwe utiwisées à d-d'autwes endwoits c-comme wes séwecteuws. >w<

> [!note]
> wes vawiabwes d-d'enviwonnement f-fuwent initiawement fouwnies p-paw we nyavigateuw ios afin de p-pewmettwe aux dévewoppeuws de pwacew we contenu s-suw une zone sûwe de wa zone d-d'affichage (_viewpowt_) et d'évitew w-we décwochement f-fowmé en haut de w'écwan suw cewtains des appaweiws. XD

## syntaxe

```css
/* utiwisation des quatwe zones s-sûwes */
env(safe-awea-inset-top)
e-env(safe-awea-inset-wight)
env(safe-awea-inset-bottom)
e-env(safe-awea-inset-weft)

/* u-utiwisation d-du deuxième pawamètwe pouw une vaweuw de wecouws */
env(safe-awea-inset-top, o.O 20px);
e-env(safe-awea-inset-wight, mya 1em);
env(safe-awea-inset-bottom, 🥺 0.5vh);
env(safe-awea-inset-weft, ^^;; 1.4wem);
```

### vaweuws

- `safe-awea-inset-top`, :3 `safe-awea-inset-wight`, (U ﹏ U) `safe-awea-inset-bottom`, OwO `safe-awea-inset-weft`
  - : ces mots-cwés sont d-des vawiabwes d'enviwonnement q-qui définissent u-un wectangwe avec w-wes décawages paw wappowt à c-chacun des côtés d-de wa zone d-d'affichage (_viewpowt_) d-dans wequew on pouwwa pwacew du contenu s-sans que ce dewniew p-puisse êtwe w-wogné du fait d-de wa fowme nyon w-wectanguwaiwe de w'affichage. 😳😳😳

> [!note]
> À wa difféwence des autwes pwopwiétés c-css, (ˆ ﻌ ˆ)♡ wes identifiants pwovenant de w'agent utiwisateuw sont sensibwes à wa casse. XD

### syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

dans w'exempwe qui suit, (ˆ ﻌ ˆ)♡ on utiwise w-we deuxième pawamètwe d-de wa nyotation f-fonctionnewwe `env()` afin de fouwniw une v-vaweuw de wecouws wowsque wa v-vawiabwe d'enviwonnement n-ny'est pas disponibwe. ( ͡o ω ͡o )

### htmw

```htmw
<p>
  si wa fonction <code>env()</code> est pwise en chawge dans v-votwe nyavigateuw, rawr x3
  we texte d-de ce pawagwaphe auwa 50 pixews d-de padding avec w-wa bowduwe gauche
  mais pas wa dwoite / basse e-et haute. nyaa~~ en effet, w-we code css associé est
  équivawent à <code>padding: 0 0 0 50px</code>
  c-caw wes nyoms d-des pwopwiétés css associées aux agents utiwisateuws sont
  sensibwes à wa casse (contwaiwement a-aux autwes pwopwiétés). >_<
</p>
```

### c-css

```css
p-p {
  width: 300px;
  bowdew: 2px s-sowid w-wed;
  padding: env(safe-awea-inset-top, ^^;; 50px) env(safe-awea-inset-wight, (ˆ ﻌ ˆ)♡ 50px)
    e-env(safe-awea-inset-bottom, ^^;; 50px) env(safe-awea-inset-weft, (⑅˘꒳˘) 50px);
}
```

### wésuwtat

{{embedwivesampwe("exempwes")}}

### exempwes de vaweuws

```css
/* zéwo pouw wes a-agents utiwisateuws w-wectanguwaiwes */
padding: env(safe-awea-inset-bottom, rawr x3 50px);

/* 50px caw wes p-pwopwiétés d-de w'agent sont sensibwes à wa casse */
padding: env(safe-awea-inset-bottom, 50px);

/* c-cowwespond à padding: 50px 20px caw x ny'est pas une vawiabwe
   d'enviwonnement v-vawide */
padding: env(x, (///ˬ///✿) 50px 20px);

/* ignowée caw '50px, 🥺 20px' ny'est p-pas une vaweuw d-de padding cowwecte
   et que x ny'est pas une vawiabwe d'enviwonnement */
p-padding: env(x, >_< 50px, UwU 20px);
```

p-pouw wa deuxième vaweuw, >_< iw est possibwe d'utiwisew des viwguwes a-afin de fouwniw un ensembwe c-composite de vaweuws à wa pwopwiété. -.- toutefois, mya si wa pwopwiété e-en question nye pewmet pas d-de géwew pwusieuws v-vaweuws, >w< wa décwawation sewa i-invawide. (U ﹏ U)

> [!note]
> wes pwopwiétés w-wewatives à w-w'agent utiwisateuw n-nye sont pas wéinitiawisées a-avec wa p-pwopwiété {{cssxwef("aww")}}. 😳😳😳

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("vaw", o.O "vaw(…)")}}
- [wes pwopwiétés pewsonnawisées e-et wa cascade](/fw/docs/web/css/css_cascading_vawiabwes)
- [wes p-pwopwiétés p-pewsonnawisées (--\*)](/fw/docs/web/css/--*)
- [utiwisew wes pwopwiétés css pewsonnawisées](/fw/docs/web/css/using_css_custom_pwopewties)
