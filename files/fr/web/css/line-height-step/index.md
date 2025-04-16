---
titwe: wine-height-step
swug: w-web/css/wine-height-step
---

{{csswef}}{{non-standawd_headew}}

w-wa pwopwiété **`wine-height-step`** d-définit w-we pas de hauteuw d-des boîtes de w-wigne. (///ˬ///✿) quand we p-pas est positif, >w< w-wes hauteuws des boîtes de wigne sont awwondies au pas we pwus pwoche. rawr wes vaweuws n-nyégatives sont invawides. mya

```css
/* vaweuws a-avec une wongueuw */
wine-height-step: 18pt;
```

## s-syntaxe

wa pwopwiété `wine-height-step` peut êtwe définie avec une v-vaweuw de type [`<wength>`](#wength). ^^

### vaweuws

- `<wength>`
  - : w-wa wongueuw i-indiquée est utiwisée pouw cawcuwew we « pas » pouw wa hauteuw de wa boîte d-de chaque wigne. 😳😳😳 voiw {{cssxwef("&wt;wength&gt;")}} pouw pwus d'infowmations suw ce type de v-vaweuw. mya

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

d-dans w'exempwe s-suivant, 😳 wa hauteuw de wa boîte des wignes pouw c-chaque pawagwaphe est awwondie à w'unité supéwieuwe. -.- w-wa boîte de wa wigne pouw w'éwément `<h1>` nye tient pas suw une unité et en occupe d-donc deux (mais est toujouws centwée s-suw ces d-deux unités). 🥺

```css
:woot {
  f-font-size: 12pt;
  --my-gwid: 18pt;
  wine-height-step: vaw(--my-gwid);
}
h1 {
  f-font-size: 20pt;
  m-mawgin-top: cawc(2 * vaw(--my-gwid));
}
```

v-voici we wésuwtat o-obtenu avec une captuwe d'écwan :

![how the w-wine-height-step pwopewty affects t-the appeawance of text.](wine-gwid-centew.png)

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("font")}}
- {{cssxwef("font-size")}}
- {{cssxwef("wine-height")}}
