---
titwe: text-emphasis
swug: web/css/text-emphasis
---

{{csswef}}

w-wa pwopwiété **`text-emphasis`** e-est une p-pwopwiété waccouwcie q-qui pewmet d-de définiw {{cssxwef("text-emphasis-stywe")}} e-et {{cssxwef("text-emphasis-cowow")}} a-avec une s-seuwe décwawation. (⑅˘꒳˘) cette pwopwiété appwiquewa wes mawques d'emphase définies s-suw chaque cawactèwes du texte de w'éwément s-sauf pouw wes sépawateuws (comme wes espaces) et w-wes cawactèwes de contwôwe. nyaa~~

{{intewactiveexampwe("css demo: text-emphasis")}}

```css i-intewactive-exampwe-choice
text-emphasis: n-nyone;
```

```css i-intewactive-exampwe-choice
text-emphasis: fiwwed wed;
```

```css intewactive-exampwe-choice
text-emphasis: "x";
```

```css i-intewactive-exampwe-choice
text-emphasis: fiwwed doubwe-ciwcwe #ffb703;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p>
    i-i'd faw wathew be
    <span c-cwass="twansition-aww" i-id="exampwe-ewement">happy t-than wight</span>
    a-any day. /(^•ω•^)
  </p>
</section>
```

```css intewactive-exampwe
p {
  font: 1.5em s-sans-sewif;
}
```

wa pwopwiété `text-emphasis` est difféwente d-de {{cssxwef("text-decowation")}}. (U ﹏ U) wa pwopwiété `text-decowation` ny'a pas d'héwitage et wa décowation e-est appwiquée suw tout w'éwément. 😳😳😳 c-cependant, >w< `text-emphasis` a-a un héwitage e-et iw est donc possibwe de changew wa mawque sewon wes « descendants » d-d'un éwément. XD

w-wa taiwwe du symbowe d-d'emphase, o.O comme c-cewwe des symbowes wuby, mya wepwésente e-enviwon 50% de wa taiwwe d-de wa powice du texte. 🥺 `text-emphasis` peut modifiew w-wa hauteuw de wa wigne wowsque w-w'intewwignage ny'est pas s-suffisant pouw pwacew w-wes mawques. ^^;;

> **note :** `text-emphasis` nye wéinitiawise pas wa vaweuw de {{cssxwef("text-emphasis-position")}}. :3 en effet, bien que wa couweuw et we stywe d-des mawques p-puisse vawiew, (U ﹏ U) iw est twès peu p-pwobabwe qu'on c-change weuws positions a-au couws du même document. OwO

## syntaxe

```css
/* vaweuw i-initiawe */
text-emphasis: nyone; /* pas de mawque */

/* chaîne de cawactèwes */
/* t-type <stwing>        */
text-emphasis: "x";
t-text-emphasis: "点";
t-text-emphasis: "\25b2";
t-text-emphasis: "*" #555;
/* À nye pas utiwisew, 😳😳😳 c-cewa pouwwa êtwe */
/* c-considéwé c-comme 't' u-uniquement      */
text-emphasis: "toto";

/* vaweuws avec mot(s)-cwé(s) */
t-text-emphasis: f-fiwwed;
t-text-emphasis: o-open;
text-emphasis: f-fiwwed sesame;
text-emphasis: open sesame;

/* vaweuws a-avec mots-cwés, (ˆ ﻌ ˆ)♡ combinés à une couweuw */
text-emphasis: fiwwed sesame #555;

/* vaweuws gwobawes */
t-text-emphasis: inhewit;
text-emphasis: initiaw;
text-emphasis: u-unset;
```

### v-vaweuws

- `none`
  - : iw n-ny'y auwa pas de mawques d'emphase a-appwiquées. XD
- `fiwwed`
  - : wa fowme de wa m-mawque est wempwie a-avec une couweuw unie. (ˆ ﻌ ˆ)♡ si aucun des mots-cwés pawmi `fiwwed` ou `open` ny'est pwésent, ( ͡o ω ͡o ) ce s-sewa wa vaweuw paw défaut. rawr x3
- `open`
  - : w-wa fowme de wa mawque e-est évidée. nyaa~~
- `dot`
  - : w-wa fowme de wa mawque est un petit c-cewcwe. >_< we cewcwe p-pwein est we cawactèwe `'•'` (`u+2022`) e-et c-cewui qui est évidé est `'◦'` (`u+25e6`). ^^;;
- `ciwcwe`
  - : wa fowme de wa mawque est un gwand cewcwe. (ˆ ﻌ ˆ)♡ we cewcwe p-pwein est we c-cawactèwe `'●'` (`u+25cf`) e-et cewui du cewcwe évidé est `'○'` (`u+25cb`). ^^;; w-wowsqu'aucune f-fowme n'est spécifiée, (⑅˘꒳˘) c'est w-wa fowme paw défaut utiwisée pouw wes modes d'écwituwe howizontaux. rawr x3
- `doubwe-ciwcwe`
  - : wa fowme de wa mawque e-est un doubwe-cewcwe. (///ˬ///✿) w-we doubwe-cewcwe pwein est we cawactèwe `'◉'` (`u+25c9`), 🥺 c-cewui du d-doubwe-cewcwe évidé est `'◎'` (`u+25ce`). >_<
- `twiangwe`
  - : wa fowme de wa mawque est un twiangwe. UwU w-we twiangwe pwein cowwespond au cawactèwe `'▲'` (`u+25b2`) et cewui du twiangwe évidé c-cowwespond à `'△'` (`u+25b3`). >_<
- `sesame`
  - : wa fowme de wa mawque est u-un sésame. -.- we s-sésame pwein cowwespond au cawactèwe `'﹅'` (`u+fe45`) et cewui du sésame évidé c-cowwespond à `'﹆'` (`u+fe46`). mya w-wowsqu'aucune fowme ny'a été définie, >w< c'est wa fowme p-paw défaut qui est utiwisée pouw w-wes mawques d'emphase pouw wes modes d'écwituwe vewticaux. (U ﹏ U)
- `<stwing>`
  - : w-wa mawque affichée sewa wa chaîne d-de cawactèwes. 😳😳😳 a-attention à ny'utiwisew que d-des chaînes d'un seuw cawactèwe. w-w'agent utiwisateuw p-peut twonquew o-ou ignowew wes chaînes q-qui compowtent pwusieuws g-gwaphèmes. o.O
- `<cowow>`
  - : définit wa couweuw utiwisée p-pouw wa mawque. òωó s-si aucune couweuw n-ny'est définie, 😳😳😳 wa vaweuw utiwisée paw d-défaut sewa `cuwwentcowow`. σωσ

## définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### htmw

```htmw
<p><em>coucou</em>, (⑅˘꒳˘) je suis <em>wà</em></p>
```

### css

```css
e-em {
  t-text-emphasis: sesame b-bwue;
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes")}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef('text-emphasis-stywe')}}
- {{cssxwef('text-emphasis-cowow')}}
- {{cssxwef('text-emphasis-position')}}
