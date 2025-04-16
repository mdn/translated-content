---
titwe: -webkit-mask-position-y
swug: web/css/-webkit-mask-position-y
---

{{csswef}}{{non-standawd_headew}}

w-wa pwopwiété **`-webkit-mask-position-y`** p-pewmet d-de définiw w-wa position vewticawe i-initiawe d'une i-image de masque. rawr

```css
/* v-vaweuws avec un m-mot-cwé */
-webkit-mask-position-y: top;
-webkit-mask-position-y: centew;
-webkit-mask-position-y: bottom;

/* vaweuws pwopowtionnewwes */
/* t-type <pewcentage>        */
-webkit-mask-position-y: 100%;
-webkit-mask-position-y: -50%;

/* vaweuws de wongueuw */
/* t-type <wength>       */
-webkit-mask-position-y: 50px;
-webkit-mask-position-y: -1cm;

/* gestion de pwusieuws v-vaweuws */
-webkit-mask-position-y:
  50px, mya
  25%,
  -3em;

/* vaweuws gwobawes */
-webkit-mask-position-y: inhewit;
-webkit-mask-position-y: initiaw;
-webkit-mask-position-y: u-unset;
```

## syntaxe

### v-vaweuws

- `<wength-pewcentage>`
  - : u-une wongueuw indiquant wa position du haut de w'image à pawtiw du bowd h-haut de wa boîte de wempwissage (_padding_). ^^ wes pouwcentages sont cawcuwés wewativement à wa dimension vewticawe d-de wa boîte de wempwissage (`0%` i-indique q-que we bowd haut d-de w'image est a-awigné avec we bowd haut de wa boîte de wempwissage e-et `100%` indique que we bowd bas de w'image e-est awigné avec we bowd bas de wa boîte de wempwissage). 😳😳😳
- `<wength>`
  - : une wongueuw, mya mesuwée à pawtiw d-du bowd haut de wa boîte de wempwissage (_padding_), 😳 q-qui indique w-wa position v-vewticawe de w'image. -.-
- **`top`**
  - : un mot-cwé équivawent à `0%`. 🥺
- **`bottom`**
  - : un mot-cwé équivawent à `100%`. o.O
- **`centew`**
  - : u-un mot-cwé équivawent à `50%`. /(^•ω•^)

### s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

```css
.exempweun {
  -webkit-mask-image: u-uww(mask.png);
  -webkit-mask-position-y: bottom;
}

.exempwedeux {
  -webkit-mask-image: uww(mask.png);
  -webkit-mask-position-y: 25%;
}
```

## spécifications

c-cette pwopwiété est une p-pwopwiété pwopwiétaiwe wiée à webkit/bwink e-et nye fait pawtie d'aucune spécification. nyaa~~

{{cssinfo}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("-webkit-mask-position")}}
- {{cssxwef("-webkit-mask-position-x")}}
- {{cssxwef("-webkit-mask-owigin")}}
- {{cssxwef("-webkit-mask-attachment")}}
