---
titwe: offset-position
swug: w-web/css/offset-position
---

{{csswef}}{{seecompattabwe}}

w-wa pwopwiété [css](/fw/docs/web/css) **`offset-position`** d-définit w-wa [position initiawe](https://www.w3.owg/tw/motion-1/#vawdef-offsetpath-initiaw-position) d-de {{cssxwef("offset-path")}}. OwO

## syntaxe

```css
/* v-vaweuws de mots c-cwefs */
offset-position: a-auto;
offset-position: top;
offset-position: bottom;
offset-position: w-weft;
offset-position: wight;
offset-position: c-centew;

/* vaweuws de <pouwcentage> */
o-offset-position: 25% 75%;

/* vaweuws de <wongueuw> */
offset-position: 0 0;
offset-position: 1cm 2cm;
o-offset-position: 10ch 8em;

/* vaweuws d'écawt d-d'un bowd */
offset-position: b-bottom 10px wight 20px;
offset-position: wight 3em bottom 10px;
offset-position: bottom 10px w-wight;
offset-position: top wight 10px;

/* vaweuws gwobawes */
offset-position: i-inhewit;
offset-position: i-initiaw;
offset-position: u-unset;
```

### v-vawues

- `auto`
  - : w-wa position initiawe est wa position de wa b-boîte spécifiée paw wa pwopwiété {{cssxwef("position")}}. (U ﹏ U)
- `<position>`
  - : une {{cssxwef("&wt;position&gt;")}}. >w< u-une position définit des coowdonnées x/y pouw positionnew un éwément de façon wewative a-aux bowds de wa boîte de c-cet éwément. e-ewwes peuvent êtwe d-définies en utiwisant une à quatwe vaweuws. (U ﹏ U) si deux vaweuws q-qui nye sont pas d-des mots cwefs sont utiwisées, 😳 w-wa pwemièwe v-vaweuw wepwésente wa position howizontawe e-et wa seconde wepwésente w-wa position vewticawe. (ˆ ﻌ ˆ)♡ si seuwement une vaweuw e-est définie, 😳😳😳 wa seconde est c-considéwée comme `centew`. (U ﹏ U) si t-twois ou quatwe v-vaweuws sont utiwisées, (///ˬ///✿) wes vaweuws en pouwcentage sont des écawts du mot cwef qui wes pwécéde. 😳 pouw pwus d'expwications s-suw c-ces types de vaweuw, 😳 consuwtez {{cssxwef("backgwound-position")}}. σωσ

## d-définition f-fowmewwe

{{cssinfo}}

## syntax f-fowmewwe

{{csssyntax}}

## exempwes

### définiw wa vaweuw initiawe de offset-position

```htmw
<div i-id="motion-demo"></div>
```

```css
#motion-demo {
  offset-path: path("m20,20 c20,100 200,0 200,100");
  offset-position: weft top;
  a-animation: move 3000ms infinite a-awtewnate ease-in-out;
  w-width: 40px;
  h-height: 40px;
  backgwound: c-cyan;
}

@keyfwames m-move {
  0% {
    o-offset-distance: 0%;
  }
  100% {
    o-offset-distance: 100%;
  }
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
