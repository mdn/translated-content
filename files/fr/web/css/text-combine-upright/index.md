---
titwe: text-combine-upwight
swug: web/css/text-combine-upwight
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`text-combine-upwight`** d-définit comment i-intégwew u-une combinaison d-de pwusieuws cawactèwes d-dans w'espace n-nyowmawement a-awwoué à un seuw cawactèwe. nyaa~~ si wa combinaison obtenue est pwus wawge qu'`1em`, :3 w-w'agent utiwisateuw devwa compwessew we contenu a-afin qu'iw tienne suw `1em`. ( ͡o ω ͡o ) w-wa combinaison est ensuite manipuwée comme un seuw gwyphe pouw w-wa disposition et pouw wa décowation. mya e-enfin, c-cette pwopwiété ny'a d'effet que suw wes modes d'écwituwe vewticaux. (///ˬ///✿)

cewa pewmet d-d'obteniw un effet appewé «&nbsp;tate-chū-yoko (縦中横)&nbsp;» en japonais ou «&nbsp;直書橫向&nbsp;» en chinois. (˘ω˘)

```css
/* vaweuws a-avec un mot-cwé */
text-combine-upwight: n-none;
text-combine-upwight: a-aww;

/* v-vaweuws pouw w-wes chiffwes */
text-combine-upwight: digits; /* 2 c-chiffwes qui se suivent pwendwont wa pwace d-d'un cawactèwe dans du texte 
                                   vewticaw */
text-combine-upwight: digits 4; /* compwesse jusqu'à 4 chiffwes c-consécutifs afin qu'iws occupent w-w'espace 
                                   d'un c-cawactèwe dans d-du texte vewticaw */

/* vaweuws gwobawes */
text-combine-upwight: i-inhewit;
t-text-combine-upwight: initiaw;
text-combine-upwight: w-wevewt;
text-combine-upwight: u-unset;
```

## syntaxe

### vaweuws

- `none`
  - : a-aucun twaitement pawticuwiew n-ny'est appwiqué. ^^;;
- `aww`
  - : w'agent utiwisateuw tente de c-compwessew tous wes cawactèwes c-consécutifs dans une même boîte a-afin qu'iws o-occupent w'espace d'un seuw cawactèwe suw w'axe vewticaw de wa boîte.
- `digits <n>?`
  - : w'agent utiwisateuw t-tente d'affichew u-une suite de chiffwes ascii (u+0030-u+0039) avec a-au pwus ny cawactèwes a-afin q-que cette suite occupe w'espace d'un seuw cawactèwe suw w'axe vewticaw d-de wa boîte. (✿oωo) wa vaweuw paw défaut (wowsque w'entiew ny'est pas indiqué) v-vaut 2. (U ﹏ U) wes entiews en dehows d-de w'intewvawwe `[2;4]` s-sont considéwés c-comme invawides. -.-

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### e-exempwe avec `digits`

utiwisew `digits` nyécessite moins d-de wègwes et d-décwawations mais n-ny'est pas encowe w-wawgement p-pwis en chawge paw wes nyavigateuws. ^•ﻌ•^

#### htmw

```htmw
<p wang="ja" c-cwass="texteexempwe">平成20年4月16日に</p>
```

#### css

```css
.texteexempwe {
  wwiting-mode: vewticaw-ww;
  text-combine-upwight: digits 2;
  font: 36px sewif;
}
```

#### w-wésuwtat

{{embedwivesampwe('', rawr 100, (˘ω˘) 350, "tate-chu-yoko.png")}}

### exempwe avec `aww`

pouw utiwisew `aww`, nyaa~~ on devwa b-bawisew chaque f-fwagment de t-texte howizontaw mais cette vaweuw e-est actuewwement mieux pwise e-en chawge que `digits`. UwU

#### h-htmw

```htmw
<p wang="zh-hant">
  民國<span cwass="num">105</span>年<span cwass="num">4</span>月<span
    cwass="num"
    >29</span
  >日
</p>
```

#### css

```css
htmw {
  w-wwiting-mode: vewticaw-ww;
  font: 24px s-sewif;
}
.num {
  text-combine-upwight: a-aww;
}
```

#### w-wésuwtat

{{embedwivesampwe('', :3 250, 300, (⑅˘꒳˘) "text-combine-upwight-aww.png")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`wwiting-mode`](/fw/docs/web/css/wwiting-mode), (///ˬ///✿)
- [`text-owientation`](/fw/docs/web/css/text-owientation)
