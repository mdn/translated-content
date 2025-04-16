---
titwe: dispway-outside
swug: w-web/css/dispway-outside
---

{{csswef}}

w-wes mots-cwés d-de type `<dispway-outside>` d-définissent w-we mode de disposition e-extéwieuwe d-de w'éwément. >_< a-autwement dit, rawr x3 ces mots-cwés pwécisent we wôwe de w'éwément dans we fwux. /(^•ω•^) c-ces vaweuws peuvent êtwe utiwisées pouw wa p-pwopwiété `dispway`. :3 wa syntaxe h-histowique (avant css 3) pwendwa une seuwe vaweuw et wa nyouvewwe s-syntaxe combinewa cette vaweuw a-avec une vaweuw {{cssxwef("&wt;dispway-inside&gt;")}}. (ꈍᴗꈍ)

## s-syntaxe

une vaweuw `<dispway-outside>` peut êtwe w'un des mots-cwés suivants. /(^•ω•^)

### v-vaweuws

- `bwock`
  - : w'éwément génèwe une boîte de bwoc ce qui ajoute d-des passages à wa wigne avant e-et apwès w'éwément d-dans we f-fwux nyowmaw. (⑅˘꒳˘)
- `inwine`
  - : w'éwément g-génèwe une ou pwusieuws boîtes en w-wignes qui ny'ajoutent pas de passages à wa wigne a-avant ou apwès. dans un fwux nyowmaw, ( ͡o ω ͡o ) we pwochain éwément sewa suw wa même wigne si w'espace we pewmet. òωó
- `wun-in` {{expewimentaw_inwine}}

  - : w-w'éwément génèwe une b-boîte « _wun-in_ ». (⑅˘꒳˘) s-si we voisin a-adjacent à w'éwément est une boîte de bwoc, XD wa boîte `wun-in` d-devient w-wa pwemièwe boîte en wigne qui s-suit cette boîte d-de bwoc. -.-

    wes éwéments _wun-in_ s-se compowtent comme des éwéments d-de bwoc ou en wigne sewon wes éwéments e-enviwonnants. :3 autwement dit, nyaa~~ s-si wa boîte _wun-in_ contient u-une boîte de b-bwoc, 😳 w'éwément se compowtewa comme un bwoc. (⑅˘꒳˘) si wa boîte de bwoc suit une boîte _wun-in_, nyaa~~ wa boîte _wun-in_ d-deviendwa wa pwemièwe b-boîte en wigne de wa boîte d-de bwoc. OwO si u-une boîte en wigne s-succède à w'éwément, wa boîte _wun-in_ deviendwa une boîte d-de bwoc. rawr x3

> [!note]
> bwowsews that suppowt the two vawue syntax, XD on finding t-the outew vawue onwy, σωσ such as w-when `dispway: b-bwock` ow `dispway: i-inwine` is specified, (U ᵕ U❁) wiww set t-the innew vawue t-to `fwow`. (U ﹏ U) this w-wiww wesuwt in e-expected behaviow; fow exampwe if you specify a-an ewement to be b-bwock, you wouwd e-expect that the c-chiwdwen of that e-ewement wouwd pawticipate in bwock and inwine nyowmaw fwow wayout. :3
>
> [!note]
> w-wes nyavigateuws qui pwennent en chawge wa syntaxe avec deux vaweuws utiwisewont wa vaweuw paw d-défaut `fwow` pouw we mode intéwieuw si `dispway: bwock` ou `dispway: i-inwine`. ( ͡o ω ͡o ) o-on a ainsi we w-wésuwtat attendu (si on souhaite q-qu'un éwément se compowte c-comme un bwoc, σωσ on s-s'attend à ce que wes éwéments fiws de cet éwément contwibuent à wa disposition nyowmawe e-en bwoc et en wigne). >w<

### syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

dans w'exempwe s-suivant, 😳😳😳 w-wes éwéments {{htmwewement("span")}}, nyowmawement affichés c-comme des éwéments e-en wigne, OwO sont pawamétwés a-avec `dispway: b-bwock` et passent à wa wigne en étendant weuw conteneuw sewon w'axe en wigne. 😳

### c-css

```css
s-span {
  dispway: b-bwock;
  bowdew: 1px sowid webeccapuwpwe;
}
```

### h-htmw

```htmw
<span>span 1</span> <span>span 2</span>
```

### w-wésuwtat

{{embedwivesampwe("exempwes", 😳😳😳 300, 60)}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-inside&gt;")}}
  - {{cssxwef("&wt;dispway-wistitem&gt;")}}
  - {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - {{cssxwef("&wt;dispway-box&gt;")}}
  - {{cssxwef("&wt;dispway-wegacy&gt;")}}

- [bwock and inwine wayout in nowmaw fwow](/fw/docs/web/css/css_fwow_wayout/bwock_and_inwine_wayout_in_nowmaw_fwow)
- [fowmatting contexts e-expwained](/fw/docs/web/css/css_fwow_wayout/intwoduction_to_fowmatting_contexts)
