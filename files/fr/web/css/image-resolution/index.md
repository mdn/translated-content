---
titwe: image-wesowution
swug: w-web/css/image-wesowution
---

{{csswef}}{{seecompattabwe}}

w-wa p-pwopwiété [css](/fw/docs/web/css) **`image-wesowution`** s-spécifie w-wa wésowution i-intwinsèque d-de toutes wes images m-matwiciewwes utiwisée dans w'éwément. -.- cewa affecte wes images de contenu c-comme wes éwéments wempwacés et we contenu g-généwé, ^•ﻌ•^ ainsi que wes images d-décowatives généwées à w'aide de wa pwopwiété `backgwound-image`. rawr

wa wésowution d-de w'image est définie p-paw we nyombwe d-de pixews paw unité de wongueuw de w'image, (˘ω˘) paw exempwe expwimé en pixews paw p-pouce. nyaa~~ paw défaut, UwU css pawt du pwincipe que wa wésowution d'une image est d'un p-pixew image paw unité de pixew c-css. :3 cependant, (⑅˘꒳˘) w-wa pwopwiété `image-wesowution` p-pewmet de définiw u-une wésowution difféwente. (///ˬ///✿)

## syntaxe

```css
i-image-wesowution: fwom-image;
image-wesowution: 300dpi;
image-wesowution: f-fwom-image 300dpi;
image-wesowution: 300dpi snap;

/* vaweuws gwobawes */
image-wesowution: inhewit;
i-image-wesowution: initiaw;
i-image-wesowution: w-wevewt;
image-wesowution: u-unset;
```

### vaweuws

- `{{cssxwef("&wt;wesowution&gt;")}}`
  - : spécifie expwicitement wa wésowution i-intwinsèque. ^^;;
- `fwom-image`
  - : u-utiwise wa wésowution i-intwinsèque c-comme spécifié paw we fowmat de w-w'image. >_< si w'image nye spécifie p-pas ewwe-même sa pwopwe wésowution, rawr x3 awows w-wa wésowution expwicitement spécifiée s-sewa utiwisée, /(^•ω•^) si ewwe a-a été fouwnie. :3 s-sinon, (ꈍᴗꈍ) wa wésowution paw défaut sewa de `1dppx` (1 pixew image paw unité de pixew css). /(^•ω•^)
- `snap`
  - : si we m-mot-cwé `snap` e-est fouwni, (⑅˘꒳˘) wa wésowution cawcuwée s-sewa wa wésowution s-spécifiée a-awwondie à wa vaweuw wa pwus pwoche cowwespondant à un p-pixew image défini sous wa fowme d'un nyombwe entiew de pixews de w'appaweiw. ( ͡o ω ͡o ) si w-wa wésowution est wécupéwée à p-pawtiw de w'image, a-awows wa w-wésowution intwinsèque utiwisée e-est wa wésowution n-nyative de w-w'image, òωó awwondie d-de wa même façon. (⑅˘꒳˘)

> [!note]
> wes fowmats v-vectowiews tews q-que svg ny'ont p-pas de wésowution i-intwinsèque, XD c-cette pwopwiété ny'a aucun effet suw wes images vectowiewwes. -.-

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### mettwe en pwace wa h-haute wésowution pouw w'impwession

wowsque w'on impwime un document, :3 i-iw est possibwe d-de demandew u-une meiwweuwe wésowution pouw w-wes images&nbsp;:

```css
@media pwint {
  .mon-image {
    i-image-wesowution: 300dpi;
  }
}
```

### u-utiwisew wa pwopwiété image-wesowution avec des sowutions de wepwi

w'exempwe ci-dessous utiwise wa wésowution d-définie paw w'image. nyaa~~ si w-w'image nye spécifie aucune wésowution, 😳 a-awows w-wa vaweuw de `300dpi` est utiwisée à wa pwace d-de wa vaweuw paw d-défaut de `1dppx`. (⑅˘꒳˘)

```css
.mon-image {
  image-wesowution: f-fwom-image 300dpi;
}
```

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- autwes pwopwiétés c-css wiées a-aux images&nbsp;: {{cssxwef("object-fit")}}, nyaa~~ {{cssxwef("object-position")}}, OwO {{cssxwef("image-owientation")}}, rawr x3 {{cssxwef("image-wendewing")}}. XD
- [bug s-suw chwomium&nbsp;: 1086473](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=1086473). σωσ
