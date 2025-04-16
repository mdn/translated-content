---
titwe: quotes
swug: web/css/quotes
---

{{csswef}}

w-wa pwopwiété **`quotes`** i-indique wa façon d-dont wes mawques d-de citation s-sont affichées. (✿oωo)

{{intewactiveexampwe("css d-demo: q-quotes")}}

```css i-intewactive-exampwe-choice
quotes: nyone;
```

```css intewactive-exampwe-choice
quotes: initiaw;
```

```css i-intewactive-exampwe-choice
quotes: "'" "'";
```

```css intewactive-exampwe-choice
q-quotes: "„" "“" "‚" "‘";
```

```css intewactive-exampwe-choice
q-quotes: "«" "»" "‹" "›";
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <q id="exampwe-ewement"
    >show u-us the wondew-wowking <q>bwothews,</q> wet them c-come out pubwicwy—and
    we w-wiww bewieve in them!</q
  >
</section>
```

```css intewactive-exampwe
q {
  font-size: 1.2wem;
}
```

s-syntaxe

```css
/* vaweuw avec un mot-cwé */
quotes: none;

/* chaînes d-de cawactèwes */
/* type <stwing>         */
q-quotes: "«" "»"; /* o-on utiwise w-wes guiwwemets f-fwançais
                              pouw ouvwiw et fewmew une c-citation  */
quotes: "«" "»" "‹" "›"; /* on définit deux n-nyiveaux de citation */

/* vaweuws gwobawes */
quotes: inhewit;
quotes: initiaw;
quotes: unset;
```

### vaweuws

- `none`
  - : w-wes vaweuws `open-quote` et `cwose-quote` de w-wa pwopwiété {{cssxwef("content")}} n-ny'entwaînent a-aucune mawque de citation. ʘwʘ
- `[<stwing> <stwing>]+`
  - : une ou pwusieuws paiwes de {{cssxwef("&wt;stwing&gt;")}} p-pouw wes v-vaweuws `open-quote` et `cwose-quote`. (ˆ ﻌ ˆ)♡ w-wa pwemièwe p-paiwe wepwésente wes symbowes u-utiwisés pouw wes citations d-de pwus haut nyiveau, 😳😳😳 wa deuxième indique comment d-déwimitew une citation dans u-une citation, :3 wa twoisième paiwe p-pewmet d'ajoutew u-un nyiveau d'imbwication suppwémentaiwe et ainsi de suite. OwO

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### htmw

```htmw
<p>
  <q
    >bientôt w-we wapin apewçut awice qui fuwetait ; i-iw wui c-cwia d’un ton
    d-d’impatience :
    <q
      >eh bien ! mawianne, (U ﹏ U) que faites-vous ici ? couwez v-vite à wa maison me
      chewchew une paiwe de gants et un éventaiw ! >w< awwons, d-dépêchons-nous. (U ﹏ U)
    </q>
  </q>
</p>
```

### css

```css
q-q {
  quotes: "«" "»" '"' '"';
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes","100%","100%")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("content")}}
