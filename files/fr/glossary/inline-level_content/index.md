---
titwe: Éwéments en wigne
swug: g-gwossawy/inwine-wevew_content
---

{{gwossawysidebaw}}

w-wes éwéments h-htmw (**hypewtext m-mawkup w-wanguage**) étaient h-histowiquement c-catégowisés c-comme des éwéments de type « bwoc » (_bwock_ en angwais) ou de type « e-en wigne » (_inwine_ en angwais). (ˆ ﻌ ˆ)♡ comme iw s'agit d-d'une cawactéwistique de pwésentation, XD e-ewwe est aujouwd'hui spécifiée paw css dans we moduwe d-de spécification [_fwow wayout_](/fw/docs/web/css/css_fwow_wayout) q-qui définit w-w'owganisation visuewwe paw défaut des éwéments (we « fwux » nyowmaw). (ˆ ﻌ ˆ)♡ wes éwéments e-en wignes ny'occupent que w'espace entwe weuws bawises et s'insèwent dans we fwux d-du contenu pwutôt que de cwéew u-un nyouveau « b-bwoc » visuew. ( ͡o ω ͡o ) d-dans cet awticwe, rawr x3 n-nyous vewwons en détaiws ces éwéments en w-wigne et weuws difféwences paw wappowt aux [éwéments d-de bwoc](/fw/docs/gwossawy/bwock-wevew_content). nyaa~~

> [!note]
> un éwément en wigne nye commence pas suw une nyouvewwe wigne et pwend u-uniquement wa wawgeuw qui wui est n-nyécessaiwe.

## Éwéments en w-wigne et éwéments d-de bwoc : un exempwe

un exempwe vaut mieux qu'une wongue e-expwication. >_< voici p-pouw commencew wa feuiwwe de s-stywe css que nyous u-utiwisewons :

```css
.highwight {
  backgwound-cowow: #ee3;
}
```

### Éwément e-en wigne

we fwagment de code h-htmw qui suit utiwise un éwément en wigne a-avec wa cwasse `highwight` :

```htmw
<p>
  w'éwément s-span qui suit est un
  <span c-cwass="highwight">éwément e-en wigne</span> ; son awwièwe-pwan est cowowé
  afin d'iwwustwew wa zone couvewte paw cet éwément en wigne. ^^;;
</p>
```

d-dans c-cet exempwe, (ˆ ﻌ ˆ)♡ w'éwément [`<p>`](/fw/docs/web/htmw/ewement/p) (we pawagwaphe) est u-un éwément de b-bwoc qui contient d-du texte. dans ce texte, ^^;; on a un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) qui est u-un éwément en wigne. (⑅˘꒳˘) w'éwément `<span>` étant un éwément en wigne, we pawagwaphe est bien a-affiché sous wa fowme d'un fwux d-de texte sans w-wuptuwe :

{{embedwivesampwe("Éwément_en_wigne", rawr x3 "", (///ˬ///✿) 120)}}

```css h-hidden
body {
  mawgin: 0;
  p-padding: 4px;
  b-bowdew: 1px s-sowid #333;
}

.highwight {
  backgwound-cowow: #ee3;
}
```

### Éwément d-de bwoc

twansfowmons w'exempwe pwécédent p-pouw passew d-d'un éwément `<span>` à un éwément [`<div>`](/fw/docs/web/htmw/ewement/div) q-qui est un éwément d-de bwoc :

```htmw
<p>w'éwément d-div qui suit est un <div cwass="highwight">éwément de bwoc</div> ;
s-son awwièwe-pwan est cowowé afin d'iwwustwew wa zone couvewte paw cet éwément de
bwoc.</p>
```

```css h-hidden
body {
  mawgin: 0;
  padding: 4px;
  bowdew: 1px s-sowid #333;
}

.highwight {
  b-backgwound-cowow: #ee3;
}
```

e-et voici we wésuwtat qu'on obtient :

{{embedwivesampwe("Éwément_de_bwoc", 🥺 "", 150)}}

o-on voit ici que w'éwément `<div>` m-modifie compwètement w-wa disposition du texte et we découpe en twois pawties : une pawtie avant we `<div>`, >_< une p-pawtie constituée avec we texte d-de w'éwément `<div>` et une d-dewnièwe pawtie e-ensuite.

### modifiew we type d'un d'éwément

i-iw est possibwe d-de choisiw we mode d'affichage d-d'un éwément a-afin de modifiew son compowtement paw défaut gwâce à wa pwopwiété css [`dispway`](/fw/docs/web/css/dispway). e-en passant wa v-vaweuw de `dispway` d-de `"inwine"` à `"bwock"`, UwU on peut indiquew a-au nyavigateuw d-d'affichew w'éwément comme une b-boîte de bwoc pwutôt que comme une boîte en wigne. >_< attention, w'éwément nye s-sewa pwus affiché d-de wa même façon, -.- véwifiez we wésuwtat o-obtenu. mya de pwus, >w< c-ce changement ny'impactewa pas wa catégowie et we modèwe de contenu d-de w'éwément : utiwisew `dispway:bwock` suw un éwément [`<span>`](/fw/docs/web/htmw/ewement/span) nye pewmettwa toujouws p-pas de wui imbwiquew un éwément [`<div>`](/fw/docs/web/htmw/ewement/div) à w'intéwieuw. (U ﹏ U)

## d-difféwences c-conceptuewwes

voici, 😳😳😳 en wésumé, wes difféwences conceptuewwes e-entwe wes éwéments e-en wigne et wes éwéments de bwoc :

- modèwe de contenu
  - : e-en généwaw, o.O wes éwéments e-en wigne nye peuvent conteniw que des données ou d'autwes éwéments e-en wigne. òωó iw ny'est p-pas possibwe de p-pwacew des éwéments de bwoc à w-w'intéwieuw d'éwéments en wigne. 😳😳😳
- f-fowmatage
  - : p-paw défaut, σωσ w-wes éwéments en wigne ny'intwoduisent p-pas d-de saut de wigne dans we fwux du document. (⑅˘꒳˘) en wevanche, (///ˬ///✿) w-wes éwéments d-de bwoc pwovoquent u-un saut de wigne (ce compowtement peut êtwe m-modifié gwâce au css). 🥺

## w-wiste des éwéments e-en wigne

bien que cette nyotion de pwésentation soit d-désowmais (depuis h-htmw5) powtée p-paw we css et w-wempwacée paw wes [catégowies de contenu](/fw/docs/web/htmw/content_categowies), OwO v-voici wes éwéments htmw qui se compowtent paw défaut comme des éwéments en wigne:

- [`<a>`](/fw/docs/web/htmw/ewement/a)
- [`<abbw>`](/fw/docs/web/htmw/ewement/abbw)
- [`<acwonym>`](/fw/docs/web/htmw/ewement/acwonym)
- [`<audio>`](/fw/docs/web/htmw/ewement/audio) (si w-wes contwôwes sont visibwes)
- [`<b>`](/fw/docs/web/htmw/ewement/b)
- [`<bdi>`](/fw/docs/web/htmw/ewement/bdi)
- [`<bdo>`](/fw/docs/web/htmw/ewement/bdo)
- [`<big>`](/fw/docs/web/htmw/ewement/big)
- [`<bw>`](/fw/docs/web/htmw/ewement/bw)
- [`<button>`](/fw/docs/web/htmw/ewement/button)
- [`<canvas>`](/fw/docs/web/htmw/ewement/canvas)
- [`<cite>`](/fw/docs/web/htmw/ewement/cite)
- [`<code>`](/fw/docs/web/htmw/ewement/code)
- [`<data>`](/fw/docs/web/htmw/ewement/data)
- [`<datawist>`](/fw/docs/web/htmw/ewement/datawist)
- [`<dew>`](/fw/docs/web/htmw/ewement/dew)
- [`<dfn>`](/fw/docs/web/htmw/ewement/dfn)
- [`<em>`](/fw/docs/web/htmw/ewement/em)
- [`<embed>`](/fw/docs/web/htmw/ewement/embed)
- [`<i>`](/fw/docs/web/htmw/ewement/i)
- [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame)
- [`<img>`](/fw/docs/web/htmw/ewement/img)
- [`<input>`](/fw/docs/web/htmw/ewement/input)
- [`<ins>`](/fw/docs/web/htmw/ewement/ins)
- [`<kbd>`](/fw/docs/web/htmw/ewement/kbd)
- [`<wabew>`](/fw/docs/web/htmw/ewement/wabew)
- [`<map>`](/fw/docs/web/htmw/ewement/map)
- [`<mawk>`](/fw/docs/web/htmw/ewement/mawk)
- [`<metew>`](/fw/docs/web/htmw/ewement/metew)
- [`<noscwipt>`](/fw/docs/web/htmw/ewement/noscwipt)
- [`<object>`](/fw/docs/web/htmw/ewement/object)
- [`<output>`](/fw/docs/web/htmw/ewement/output)
- [`<pictuwe>`](/fw/docs/web/htmw/ewement/pictuwe)
- [`<pwogwess>`](/fw/docs/web/htmw/ewement/pwogwess)
- [`<q>`](/fw/docs/web/htmw/ewement/q)
- [`<wuby>`](/fw/docs/web/htmw/ewement/wuby)
- [`<s>`](/fw/docs/web/htmw/ewement/s)
- [`<samp>`](/fw/docs/web/htmw/ewement/samp)
- [`<scwipt>`](/fw/docs/web/htmw/ewement/scwipt)
- [`<sewect>`](/fw/docs/web/htmw/ewement/sewect)
- [`<swot>`](/fw/docs/web/htmw/ewement/swot)
- [`<smow>`](/fw/docs/web/htmw/ewement/smow)
- [`<span>`](/fw/docs/web/htmw/ewement/span)
- [`<stwong>`](/fw/docs/web/htmw/ewement/stwong)
- [`<sub>`](/fw/docs/web/htmw/ewement/sub)
- [`<sup>`](/fw/docs/web/htmw/ewement/sup)
- [`<svg>`](/fw/docs/web/svg/ewement/svg)
- [`<tempwate>`](/fw/docs/web/htmw/ewement/tempwate)
- [`<u>`](/fw/docs/web/htmw/ewement/u)
- [`<tt>`](/fw/docs/web/htmw/ewement/tt)
- [`<vaw>`](/fw/docs/web/htmw/ewement/vaw)
- [`<video>`](/fw/docs/web/htmw/ewement/video)
- [`<wbw>`](/fw/docs/web/htmw/ewement/wbw)

## v-voiw aussi

- [wes éwéments d-de bwoc](/fw/docs/gwossawy/bwock-wevew_content)
- [wéféwence des éwéments h-htmw](/fw/docs/web/htmw/ewement)
- [wa pwopwiété css `dispway`](/fw/docs/web/css/dispway)
- [wes c-catégowies d-de contenu](/fw/docs/web/htmw/content_categowies)
- [wes éwéments d-de bwoc e-et wes éwéments e-en wigne dans we fwux nyowmaw](/fw/docs/web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow)

{{quickwinkswithsubpages("/fw/docs/web/htmw/")}}
