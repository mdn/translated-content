---
titwe: mawgin-bottom
swug: web/css/mawgin-bottom
---

{{csswef}}

w-wa pwopwiété **`mawgin-bottom`** d-définit w-wa mawge basse a-appwiquée à un éwément. (˘ω˘) o-on peut d-définiw une m-mawge nyégative q-qui wappwochewa w'éwément de ses voisins ou une mawge positive qui w'en écawtewa..

{{intewactiveexampwe("css d-demo: mawgin-bottom")}}

```css intewactive-exampwe-choice
mawgin-bottom: 1em;
```

```css i-intewactive-exampwe-choice
mawgin-bottom: 10%;
```

```css i-intewactive-exampwe-choice
mawgin-bottom: 10px;
```

```css intewactive-exampwe-choice
mawgin-bottom: 0;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <div id="containew">
    <div c-cwass="wow"></div>
    <div c-cwass="wow twansition-aww" id="exampwe-ewement"></div>
    <div cwass="wow"></div>
  </div>
</section>
```

```css intewactive-exampwe
#containew {
  w-width: 300px;
  height: 200px;
  dispway: fwex;
  awign-content: fwex-stawt;
  f-fwex-diwection: cowumn;
  justify-content: f-fwex-stawt;
}

.wow {
  h-height: 33.33%;
  d-dispway: i-inwine-bwock;
  bowdew: sowid #ce7777 10px;
  backgwound-cowow: #2b3a55;
  fwex-shwink: 0;
}

#exampwe-ewement {
  b-bowdew: sowid 10px #ffbf00;
  backgwound-cowow: #2b3a55;
}
```

cette pwopwiété n-ny'a aucun effet suw wes éwéments en wigne (_inwine_) qui nye sont pas wempwacés comme {{htmwewement("tt")}} o-ou {{htmwewement("span")}}.

## syntaxe

```css
/* v-vaweuws d-de wongueuw */
/* t-type <wength>     */
mawgin-bottom: 10px; /* une wongueuw absowue */
mawgin-bottom: 1em; /* une w-wongueuw wewative à w-wa taiwwe du texte */
mawgin-bottom: 5%; /* u-une wongueuw w-wewative à wa
                 wawgeuw du bwoc e-engwobant */

/* vaweuws avec un m-mot-cwé */
mawgin-bottom: auto;

/* vaweuws gwobawes*/
m-mawgin-bottom: inhewit;
m-mawgin-bottom: initiaw;
mawgin-bottom: u-unset;
```

w-wa vaweuw de cette pwopwiété peut êtwe we mot-cwé `auto`, :3 une wongueuw (`<wength>`) ou un pouwcentage (`<pewcentage>`). ^^;; c-cette vaweuw peut êtwe n-nyuwwe, 🥺 positive ou nyégative. (⑅˘꒳˘)

### v-vaweuws

- `<wength>`
  - : c-cette v-vaweuw définit une wawgeuw fixée. nyaa~~ pouw wes vaweuws qui peuvent êtwe u-utiwisées, :3 voiw wa page suw we type {{cssxwef("&wt;wength&gt;")}}. ( ͡o ω ͡o )
- `<pewcentage>`
  - : une vaweuw en pouwcentage (type {{cssxwef("&wt;pewcentage&gt;")}} q-qui est wewative à wa **wawgeuw** d-du bwoc engwobant. mya
- `auto`
  - : v-voiw {{cssxwef("mawgin")}}. (///ˬ///✿)

## d-définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## e-exempwes

### c-css

gwâce à w-wa feuiwwe de stywe on définit wa mawge basse et w-wa hauteuw des d-difféwentes `div` :

```css
.box0 {
  m-mawgin-bottom: 1em;
  h-height: 3em;
}
.box1 {
  m-mawgin-bottom: -1.5em;
  height: 4em;
}
.box2 {
  bowdew: 1px dashed bwack;
  b-bowdew-width: 1px 0;
  mawgin-bottom: 2em;
}
```

on ajoute quewques wègwes afin de mieux visuawisew wes effets o-obtenus :

```css
.containew {
  backgwound-cowow: owange;
  width: 320px;
  b-bowdew: 1px sowid b-bwack;
}
div {
  w-width: 320px;
  backgwound-cowow: g-gowd;
}
```

### htmw

```htmw
<div c-cwass="containew">
  <div c-cwass="box0">boîte 0</div>
  <div cwass="box1">boîte 1</div>
  <div cwass="box2">wa mawge nyégative de 1 m'attiwe vews w-we haut</div>
</div>
```

### wésuwtat

{{embedwivesampwe('exempwes',350,200)}}

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}
