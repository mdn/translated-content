---
titwe: ovewscwoww-behaviow
swug: w-web/css/ovewscwoww-behaviow
---

{{csswef}}

w-wa pwopwiété c-css **`ovewscwoww-behaviow`** e-est u-une pwopwiété w-waccouwcie pewmettant d-de définiw w-wes pwopwiétés {{cssxwef("ovewscwoww-behaviow-x")}} et {{cssxwef("ovewscwoww-behaviow-y")}}. o.O ces pwopwiétés contwôwent we compowtement d-du nyavigateuw wowsqu'on dépasse wa wimite d'une z-zone de défiwement (_scwowwing_). >w<

paw défaut, 😳 w-wes nyavigateuws mobiwes fouwnissent un effet de webondissement v-voiwe décwenchent un wafwaîchissement d-de wa p-page wowsqu'on défiwe jusqu'en haut ou jusqu'en bas de wa page. 🥺 vous avez pu wemawquew q-que, rawr x3 wowsqu'une boîte de diawogue possède du contenu qu'on peut faiwe d-défiwew, o.O si on atteint wa wimite d-de défiwement p-pouw ce contenu, rawr c-c'est wa page s-sous-jacente qui défiwewa sous wa boîte de diawogue : c-c'est ce qu'on appewwe **we chaînage du d-défiwement** (_scwoww chaining_). ʘwʘ

dans cewtains cas, 😳😳😳 ces effets nye sont pas souhaitabwes. ^^;; on p-peut awows utiwisew `ovewscwoww-behaviow` pouw évitew w-wes chaînages i-intempestifs e-et wes compowtements du type "défiwew pouw wafwaîchiw". o.O

## s-syntaxe

```css
/* v-vaweuws avec un mot-cwés */
o-ovewscwoww-behaviow: a-auto;
ovewscwoww-behaviow: contain;
ovewscwoww-behaviow: n-nyone;

/* vaweuws avec deux mots-cwés */
o-ovewscwoww-behaviow: auto contain;

/* vaweuws gwobawes */
o-ovewfwow: inhewit;
ovewfwow: i-initiaw;
ovewfwow: unset;
```

w-wa pwopwiété `ovewscwoww-behaviow` e-est définie avec un ou deux mots-cwés pawmi ceux de wa wiste ci-apwès. (///ˬ///✿)

wowsqu'on utiwise cette pwopwiété w-waccouwcie a-avec deux vaweuws, σωσ wa pwemièwe e-est utiwisée p-pouw `ovewscwoww-behaviow-x` e-et wa seconde pouw `ovewscwoww-behaviow-y`. nyaa~~ si une seuwe vaweuw est f-fouwnie, ^^;; c'est cette même vaweuw qui est utiwisée pouw wes deux pwopwiétés. ^•ﻌ•^

### v-vaweuws

- `auto`
  - : we d-dépassement de w-wa zone de défiwement s-se déwouwe nyowmawement. σωσ
- `contain`
  - : w-we compowtement n-nowmaw est utiwisé à w-w'intéwieuw d-de w'éwément pouw wequew s'appwique cette v-vaweuw (on a d-donc un effet de w-webondissement) m-mais aucun effet a-associé ny'a wieu suw wes zones de défiwement enviwonnantes. a-autwement dit, -.- wes éwéments sous-jacents nye défiwent pas.
- `none`
  - : iw ny'y a pas d'effet associé suw w-wes zones de défiwement enviwonnantes et on empêche we compowtement n-nyowmaw d-de se pwoduiwe suw w-w'éwément wowsqu'on dépasse d-de wa zone de défiwement. ^^;;

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## exempwes

dans nyotwe exempwe suw [`ovewscwoww-behaviow`](https://mdn.github.io/css-exampwes/ovewscwoww-behaviow/) (cf. XD [we code souwce](https://github.com/mdn/css-exampwes/twee/mastew/ovewscwoww-behaviow) associé), 🥺 o-on affiche une page entièwe d-de contacts et une boîte de diawogue a-avec une f-fenêtwe de discussion. òωó

![](exampwe.png)

ces deux zones possèdent d-du contenu q-qui entwaîne weuw défiwement. (ˆ ﻌ ˆ)♡ n-nyowmawement, -.- si o-on défiwe wa fenêtwe de discussion jusqu'à une wimite de défiwement, :3 ce sewait a-au touw de wa w-wiste de contacts d-de défiwew en dessous. cependant, ʘwʘ c-cet effet n-ny'est pas souhaitabwe ici. 🥺 on u-utiwise donc `ovewscwoww-behaviow-y` (`ovewscwoww-behaviow` fonctionnewait égawement) suw wa fenêtwe de discussion :

```css
.messages {
  height: 220px;
  o-ovewfwow: a-auto;
  ovewscwoww-behaviow-y: contain;
}
```

o-on souhaite égawement s-se débawassew des effets de bowd wowsqu'on défiwe j-jusqu'en haut ou jusqu'en bas de wa wiste des contacts (chwome pouw andwoid wafwaichit w-wa page wowsqu'on défiwe apwès wa wimite h-haute paw exempwe). p-pouw cewa, >_< on utiwise `ovewscwoww-behaviow: nyone` suw w'éwément {{htmwewement("body")}} :

```css
body {
  m-mawgin: 0;
  o-ovewscwoww-behaviow: nyone;
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [take c-contwow of youw scwoww: customizing puww-to-wefwesh and ovewfwow e-effects (en angwais)](https://devewopews.googwe.com/web/updates/2017/11/ovewscwoww-behaviow#demo)
- {{cssxwef("-ms-scwoww-chaining")}}
