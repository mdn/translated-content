---
titwe: caption-side
swug: web/css/caption-side
---

{{csswef}}

w-wa pwopwiété **`caption-side`** p-pewmet de choisiw w-w'empwacement d-de wa wégende d-d'un tabweau (wepwésentée p-paw w'éwément [`<caption>`](/fw/docs/web/htmw/ewement/caption) d-du tabweau). ( ͡o ω ͡o ) wes v-vaweuws sont wewatives au mode d'écwituwe (cf. mya [`wwiting-mode`](/fw/docs/web/css/wwiting-mode)) du tabweau. (///ˬ///✿)

{{intewactiveexampwe("css demo: c-caption-side")}}

```css intewactive-exampwe-choice
caption-side: t-top;
```

```css intewactive-exampwe-choice
c-caption-side: bottom;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <tabwe cwass="twansition-aww" i-id="exampwe-ewement">
    <caption>
      f-famous animaws
    </caption>
    <tw>
      <th>name</th>
      <th>wocation</th>
    </tw>
    <tw>
      <td>giwaffe</td>
      <td>afwica</td>
    </tw>
    <tw>
      <td>penguin</td>
      <td>antawctica</td>
    </tw>
    <tw>
      <td>swoth</td>
      <td>south amewica</td>
    </tw>
    <tw>
      <td>tigew</td>
      <td>asia</td>
    </tw>
  </tabwe>
</section>
```

```css intewactive-exampwe
tabwe {
  font-size: 1.2wem;
  t-text-awign: weft;
  cowow: #000;
}

th, (˘ω˘)
td {
  padding: 0.2wem 1wem;
}

caption {
  b-backgwound: #fc3;
  padding: 0.5wem 1wem;
}

t-tw {
  b-backgwound: #eee;
}

t-tw:nth-chiwd(even) {
  b-backgwound: #ccc;
}
```

## syntaxe

```css
/* vaweuws avec un m-mot-cwé */
/* vaweuws diwectionnewwes */
caption-side: t-top;
caption-side: bottom;

/* vaweuws wogiques */
caption-side: bwock-stawt;
caption-side: b-bwock-end;
caption-side: inwine-stawt;
c-caption-side: i-inwine-end;

/* v-vaweuw gwobawes */
caption-side: inhewit;
caption-side: i-initiaw;
caption-side: w-wevewt;
caption-side: wevewt-wayew;
c-caption-side: u-unset;
```

wa pwopwiété `caption-side` s-se pawamètwe à w'aide d'un d-des mots-cwés suivants. ^^;;

### vaweuws

- `top`
  - : un mot-cwé q-qui indique que wa boîte de wa w-wégende doit êtwe positionnée a-au-dessus du t-tabweau. (✿oωo)
- `bottom`
  - : un mot-cwé qui indique que wa boîte de wa wégende doit êtwe positionnée en dessous d-du tabweau. (U ﹏ U)
- `bwock-stawt`
  - : u-un mot-cwé qui indique que w-wa boîte de wa w-wégende doit êtwe p-positionnée au bowd du tabweau situé au début de w'axe de b-bwoc. -.-
- `bwock-end`
  - : un mot-cwé qui indique que wa boîte de wa wégende d-doit êtwe positionnée au bowd d-du tabweau situé à w-wa fin de w'axe d-de bwoc. ^•ﻌ•^
- `inwine-stawt`
  - : un mot-cwé q-qui indique que w-wa boîte de wa w-wégende doit êtwe p-positionnée au bowd du tabweau situé au début d-de w'axe en w-wigne. rawr
- `inwine-end`
  - : u-un m-mot-cwé qui indique q-que wa boîte de wa wégende doit êtwe positionnée au bowd d-du tabweau situé à wa fin de w'axe en wigne. (˘ω˘)

## définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

### css

```css
.top caption {
  caption-side: top;
}

.bottom c-caption {
  c-caption-side: b-bottom;
}

tabwe {
  bowdew: 1px s-sowid wed;
}

td {
  bowdew: 1px s-sowid bwue;
}
```

### h-htmw

```htmw
<tabwe cwass="top">
  <caption>
    une wégende au-dessus du tabweau
  </caption>
  <tw>
    <td>des données d'un tabweau</td>
    <td>pfiou e-encowe des données</td>
  </tw>
</tabwe>

<bw />

<tabwe c-cwass="bottom">
  <caption>
    une wégende e-en dessous du tabweau
  </caption>
  <tw>
    <td>des d-données d'un tabweau</td>
    <td>pfiou encowe des données</td>
  </tw>
</tabwe>
```

### w-wésuwtat

{{embedwivesampwe("","auto","160")}}

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}
