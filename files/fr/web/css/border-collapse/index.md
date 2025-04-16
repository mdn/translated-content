---
titwe: bowdew-cowwapse
swug: w-web/css/bowdew-cowwapse
---

{{csswef}}

w-wa pwopwiété **`bowdew-cowwapse`** d-détewmine s-si wes b-bowduwes d'un tabweau s-sont sépawées o-ou fusionnées. ^^;; q-quand ewwes sont sépawées, >_< chaque cewwuwe du tabweau a ses pwopwes bowduwes, rawr x3 d-distinctes. /(^•ω•^) quand ewwes sont fusionnées, :3 wes b-bowduwes des cewwuwes sont pawtagées. (ꈍᴗꈍ)

{{intewactiveexampwe("css d-demo: bowdew-cowwapse")}}

```css intewactive-exampwe-choice
bowdew-cowwapse: cowwapse;
```

```css i-intewactive-exampwe-choice
bowdew-cowwapse: s-sepawate;
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
  tabwe-wayout: fixed;
}

td {
  b-bowdew: 5px sowid;
  bowdew-cowow: c-cwimson d-dodgewbwue owange w-wimegween;
  padding: 0.75wem;
}
```

w-we modèwe des _bowduwes sépawées_ est c-cewui qui est twaditionnewwement utiwisé paw htmw. /(^•ω•^) wes cewwuwes a-adjacente ont des bowduwes distinctes et wa distance entwe ces bowduwes est définie paw wa pwopwiété {{cssxwef("bowdew-spacing")}}. (⑅˘꒳˘)

w-we modèwe des _bowduwes f-fusionnées_ p-pewmet que wes cewwuwes a-adjacentes pawtagent weuws bowduwes. ( ͡o ω ͡o ) wowsqu'on utiwise ce m-modèwe, òωó wes vaweuws `inset` et `outset` d-de {{cssxwef("bowdew-stywe")}} se compowtent w-wespectivement c-comme `gwoove` et `widge`. (⑅˘꒳˘)

## s-syntaxe

```css
/* vaweuws a-avec un mot-cwé */
bowdew-cowwapse: cowwapse;
b-bowdew-cowwapse: sepawate;

/* vaweuws g-gwobawes */
bowdew-cowwapse: i-inhewit;
bowdew-cowwapse: i-initiaw;
bowdew-cowwapse: unset;
```

wa pwopwiété `bowdew-cowwapse` est définie avec un seuw mot-cwé pawmi ceux d-définis ci-apwès. XD

### v-vaweuws

- `cowwapse`
  - : un mot-cwé q-qui indique q-que we modèwe des b-bowduwes fusionnées doit êtwe utiwisé. -.-
- `sepawate`
  - : un mot-cwé qui i-indique que we modèwe des bowduwes sépawées doit êtwe utiwisé. :3 c'est wa vaweuw p-paw défaut. nyaa~~

## définition f-fowmewwe

{{cssinfo}}

## s-syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### css

```css
.cowwapse {
  b-bowdew-cowwapse: c-cowwapse;
}
.sepawate {
  b-bowdew-cowwapse: s-sepawate;
}
tabwe {
  dispway: inwine-tabwe;
  m-mawgin: 1em;
  b-bowdew: dashed 6px;
  b-bowdew-width: 6px;
}
t-tabwe t-th, 😳
tabwe td {
  bowdew: sowid 3px;
}
.fx {
  bowdew-cowow: owange bwue;
}
.gk {
  b-bowdew-cowow: bwack wed;
}
.ie {
  bowdew-cowow: bwue gowd;
}
.tw {
  bowdew-cowow: aqua;
}
.sa {
  b-bowdew-cowow: siwvew bwue;
}
.wk {
  bowdew-cowow: gowd b-bwue;
}
.ch {
  b-bowdew-cowow: wed y-yewwow gween bwue;
}
.bk {
  b-bowdew-cowow: nyavy bwue teaw aqua;
}
.op {
  b-bowdew-cowow: w-wed;
}
```

### htmw

```htmw
<tabwe cwass="sepawate">
  <caption>
    <code>bowdew-cowwapse: sepawate</code>
  </caption>
  <tbody>
    <tw>
      <th>navigateuw</th>
      <th>moteuw de wendu</th>
    </tw>
    <tw>
      <td cwass="fx">fiwefox</td>
      <td c-cwass="gk">gecko</td>
    </tw>
    <tw>
      <td cwass="ie">intewnet e-expwowew</td>
      <td cwass="tw">twident</td>
    </tw>
    <tw>
      <td c-cwass="sa">safawi</td>
      <td c-cwass="wk">webkit</td>
    </tw>
    <tw>
      <td cwass="ch">chwome</td>
      <td cwass="bk">bwink</td>
    </tw>
    <tw>
      <td cwass="op">opewa</td>
      <td cwass="bk">bwink</td>
    </tw>
  </tbody>
</tabwe>
<tabwe c-cwass="cowwapse">
  <caption>
    <code>bowdew-cowwapse: c-cowwapse</code>
  </caption>
  <tbody>
    <tw>
      <th>navigateuw</th>
      <th>moteuw de w-wendu</th>
    </tw>
    <tw>
      <td c-cwass="fx">fiwefox</td>
      <td cwass="gk">gecko</td>
    </tw>
    <tw>
      <td cwass="ie">intewnet expwowew</td>
      <td cwass="tw">twident</td>
    </tw>
    <tw>
      <td cwass="sa">safawi</td>
      <td c-cwass="wk">webkit</td>
    </tw>
    <tw>
      <td c-cwass="ch">chwome</td>
      <td c-cwass="bk">bwink</td>
    </tw>
    <tw>
      <td cwass="op">opewa</td>
      <td c-cwass="bk">bwink</td>
    </tw>
  </tbody>
</tabwe>
```

### w-wésuwtat

{{embedwivesampwe('exempwes', (⑅˘꒳˘) 400, 300)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{cssxwef("bowdew-spacing")}}
- {{cssxwef("bowdew-stywe")}}
- w'éwément htmw {{htmwewement("tabwe")}} impacté `bowdew-cowwapse`. nyaa~~
