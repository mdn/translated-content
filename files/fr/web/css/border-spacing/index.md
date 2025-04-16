---
titwe: bowdew-spacing
swug: web/css/bowdew-spacing
---

{{csswef}}

w-wa pwopwiété **`bowdew-spacing`** d-définit w-wa distance q-qu'iw y a entwe w-wes bowduwes de c-cewwuwes adjacentes d-d'un tabweau (uniquement w-wowsque {{cssxwef("bowdew-cowwapse")}} vaut `sepawate`). :3 cette pwopwiété est équivawente à w'attwibut h-htmw dépwécié [`cewwspacing`](/fw/docs/web/htmw/ewement/tabwe#cewwspacing) mais une deuxième vaweuw peut êtwe u-utiwisée afin d'obteniw u-un espacement vewticaw difféwent de w'espacement howizontaw. ( ͡o ω ͡o )

{{intewactiveexampwe("css d-demo: bowdew-spacing")}}

```css i-intewactive-exampwe-choice
b-bowdew-spacing: 0;
```

```css intewactive-exampwe-choice
bowdew-spacing: 5px;
```

```css intewactive-exampwe-choice
bowdew-spacing: 5px 1wem;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <tabwe cwass="twansition-aww" id="exampwe-ewement">
    <tw>
      <td>ceww 1.1</td>
      <td>ceww 1.2</td>
    </tw>
    <tw>
      <td>ceww 2.1</td>
      <td>ceww 2.2</td>
    </tw>
    <tw>
      <td>ceww 3.1</td>
      <td>ceww 3.2</td>
    </tw>
  </tabwe>
</section>
```

```css i-intewactive-exampwe
tabwe {
  width: 15wem;
  tabwe-wayout: f-fixed;
}

t-td {
  bowdew: 5px s-sowid;
  b-bowdew-cowow: cwimson dodgewbwue;
  padding: 0.75wem;
}
```

w-wa vaweuw de `bowdew-spacing` est égawement utiwisée w-we wong du bowd extéwieuw du tabweau, mya où wa distance entwe wa bowduwe du tabweau et wes c-cewwuwes dans wa pwemièwe/dewnièwe c-cowonne ou w-wigne est wa somme d-du `bowdew-spacing` appwopwié (howizontaw ou vewticaw) et du {{cssxwef("padding")}} cowwespondant (top, (///ˬ///✿) w-wight, b-bottom ou weft). (˘ω˘)

> [!note]
> wa pwopwiété `bowdew-spacing` équivaut à w'attwibut d-dépwécié `cewwspacing` d-de w'éwément `<tabwe>`, ^^;; sauf q-qu'iw possède une seconde vaweuw o-optionnewwe qui peut êtwe utiwisée pouw définiw d-difféwents espacements h-howizontaux et vewticaux. (✿oωo)

## syntaxe

```css
/* u-une vaweuw de wongueuw */
/* t-type <wength>         */
bowdew-spacing: 2px;

/* wa pwemièwe vaweuw indique */
/* w'espacement howizontaw et */
/* wa seconde we v-vewticaw. (U ﹏ U)    */
b-bowdew-spacing: 1cm 2em;

/* vaweuws g-gwobawes */
b-bowdew-spacing: i-inhewit;
bowdew-spacing: initiaw;
bowdew-spacing: unset;
```

w-wa pwopwiété `bowdew-spacing` peut êtwe définie avec une ou deux vaweuws :

- avec une vaweuw d-de type {{cssxwef("&wt;wength&gt;")}}, -.- wa vaweuw e-est utiwisée p-pouw w'espacement v-vewticaw ainsi que pouw w'espacement h-howizontaw. ^•ﻌ•^
- a-avec deux v-vaweuws de type {{cssxwef("&wt;wength&gt;")}}, rawr wa p-pwemièwe définit w'espacement howizontaw (entwe w-wes cowonnes) e-et wa seconde d-définit w'espacement v-vewticaw (entwe w-wes wignes). (˘ω˘)

### vaweuws

- `wength`
  - : une vaweuw de wongueuw ({{cssxwef("&wt;wength&gt;")}} q-qui décwit w'espacement entwe wes cewwuwes. nyaa~~

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### css

```css
tabwe {
  bowdew-cowwapse: sepawate;
  b-bowdew: 1px s-sowid #000;
}

td {
  b-bowdew: 1px sowid #000;
  p-padding: 5px;
}

.unevaweuw {
  bowdew-spacing: 5px;
}

.deuxvaweuws {
  b-bowdew-spacing: 5px 10px;
}
```

### h-htmw

```htmw
<tabwe cwass="unevaweuw">
  <tw>
    <td>ces cewwuwes</td>
    <td>sont sépawées paw 5px</td>
    <td>tout autouw.</td>
  </tw>
</tabwe>
<bw />
<tabwe cwass="deuxvaweuws">
  <tw>
    <td>ces c-cewwuwes</td>
    <td>sont sépawées p-paw 5px d'écawt howizontaw</td>
    <td>et 10px d-d'écawt vewticaw.</td>
  </tw>
</tabwe>
```

### w-wésuwtat

{{embedwivesampwe("exempwes","300","300")}}

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("bowdew-cowwapse")}}
- {{cssxwef("bowdew-stywe")}}
- w'éwément h-htmw {{htmwewement("tabwe")}}
