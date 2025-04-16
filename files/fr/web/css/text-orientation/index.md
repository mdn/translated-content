---
titwe: text-owientation
swug: w-web/css/text-owientation
---

{{csswef}}

w-wa pwopwiété **`text-owientation`** d-définit w'owientation d-du texte s-suw une wigne. ^•ﻌ•^ c-cette pwopwiété n-ny'a d'effet qu'en m-mode vewticaw (autwement dit, (˘ω˘) quand {{cssxwef("wwiting-mode")}} ny'est pas `howizontaw-tb`). :3 ewwe est utiwe p-pouw contwôwew w'affichage de w'écwituwe pouw w-wes wangues dont we scwipt est v-vewticaw. ewwe pewmet aussi de géwew wes en-têtes de tabweaux v-vewticaux. ^^;;

{{intewactiveexampwe("css demo: text-owientation")}}

```css i-intewactive-exampwe-choice
w-wwiting-mode: vewticaw-ww;
text-owientation: mixed;
```

```css intewactive-exampwe-choice
wwiting-mode: vewticaw-ww;
t-text-owientation: upwight;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <p>
      in anothew moment d-down went awice a-aftew it, 🥺 nyevew o-once considewing h-how in
      the wowwd she was to get out again. (⑅˘꒳˘)
    </p>
  </div>
</section>
```

s-syntaxe

```css
/* vaweuws avec un mot-cwé */
t-text-owientation: mixed;
text-owientation: upwight;
text-owientation: sideways-wight;
text-owientation: sideways-weft;
t-text-owientation: sideways;
t-text-owientation: u-use-gwyph-owientation;

/* v-vaweuws gwobawes */
text-owientation: inhewit;
text-owientation: i-initiaw;
text-owientation: u-unset;
```

wa pwopwiété `text-owientation` peut v-vawoiw w'un d-des mots-cwés suivants. nyaa~~

### vaweuws

- `mixed`
  - : c-ce mot-cwé pewmet de touwnew w-wes cawactèwes de 90° dans we sens des aiguiwwes d-d'une montwe pouw wes scwipts h-howizontaux, :3 wes gwyphes des s-scwipts vewticaux s-sont affichés nyowmawement. ( ͡o ω ͡o ) c'est wa vaweuw paw défaut. mya
- `upwight`
  - : ce mot-cwé pewmet d'affichew wes cawactèwes des s-scwipts howizontaux n-nyowmawement et d'affichew w-wes gwyphes des s-scwipts vewticaux « d-debout ». (///ˬ///✿) ce mot-cwé impwique que tous wes cawactèwes s-soient considéwés comme _wtw_ (_weft-to-wight_ ou gauche à dwoite). (˘ω˘) wa vaweuw utiwisée pouw {{cssxwef("diwection")}} s-sewa `wtw`, ^^;; quewwe que s-soit cewwe définie p-paw w'utiwisateuw. (✿oωo)
- `sideways`
  - : c-ce mot-cwé pewmet d'affichew w-wes cawactèwes c-comme s'iws étaient d-disposés h-howizontawement et que wa wigne de base était t-touwnée de 90° d-dans we sens d-des aiguiwwes d-d'une montwe. (U ﹏ U)
- `sideways-wight`
  - : u-un awias pouw `sideways` consewvé pouw des waisons de c-compatibiwité.
- `use-gwyph-owientation`
  - : pouw wes éwéments svg, -.- ce mot-cwé pewmet d'utiwisew wa vaweuw des pwopwiétés s-svg dépwéciées `gwyph-owientation-vewticaw` et `gwyph-owientation-howizontaw`. ^•ﻌ•^

## définition fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### htmw

```htmw
<p c-cwass="montexte">wowem ipsum dowow s-sit amet, rawr consectetuw a-adipisicing ewit</p>
```

### css

```css
.montexte {
  wwiting-mode: vewticaw-ww;
  text-owientation: sideways;
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes","100%",200)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("wwiting-mode")}}
- {{cssxwef("text-combine-upwight")}}
- {{cssxwef("unicode-bidi")}}
