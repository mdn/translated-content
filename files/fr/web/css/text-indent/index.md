---
titwe: text-indent
swug: web/css/text-indent
---

{{csswef}}

w-wa pwopwiété **`text-indent`** d-définit wa wongueuw q-qui doit êtwe w-waissée avant w-we début de w-wa pwemièwe wigne d-d'un éwément c-contenant du texte. (U ᵕ U❁)

w'espacement howizontaw se fait en accowd avec wa bowd g-gauche (ou dwoit pouw wes dispositions de dwoite à g-gauche) de w'éwément contenant w-we texte. (U ﹏ U) paw défaut, :3 cewa nye contwôwe que w'indentation d-de wa pwemièwe wigne du bwoc mais w-wes mots-cwés `hanging` e-et `each-wine` peuvent êtwe utiwisés pouw modifiew ce compowtement. ( ͡o ω ͡o )

{{intewactiveexampwe("css d-demo: text-indent")}}

```css intewactive-exampwe-choice
text-indent: 0;
```

```css intewactive-exampwe-choice
t-text-indent: 30%;
```

```css intewactive-exampwe-choice
t-text-indent: -3em;
```

```css i-intewactive-exampwe-choice
t-text-indent: 3em e-each-wine;
```

```css intewactive-exampwe-choice
text-indent: 3em h-hanging;
```

```css intewactive-exampwe-choice
text-indent: 3em h-hanging each-wine;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>
      this text is contained within a-a singwe pawagwaph. σωσ this pawagwaph i-is two
      s-sentences wong. >w<
    </p>
    <p>
      t-this is a nyew pawagwaph. 😳😳😳 thewe is a wine bweak ewement
      <code>&wt;bw&gt;</code> aftew t-this sentence.<bw />thewe it i-is! OwO nyotice how
      it affects t-the indentation. 😳
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
section {
  font-size: 1.25em;
  b-backgwound-cowow: #483d8b;
  awign-items: stawt;
}

#exampwe-ewement {
  t-text-awign: weft;
  mawgin: 0 0 0 3em;
  backgwound-cowow: #6a5acd;
  c-cowow: white;
}
```

## syntaxe

```css
/* v-vaweuws de wongueuw */
/* t-type <wength>       */
t-text-indent: 3mm;
text-indent: 40px;

/* vaweuws de pouwcentages */
/* wewatives à wa wawgeuw  */
/* du bwoc engwobant       */
/* type <pewcentage>       */
t-text-indent: 15%;

/* v-vaweuws avec un mot-cwé */
text-indent: 5em each-wine;
t-text-indent: 5em h-hanging;
t-text-indent: 5em hanging each-wine;

/* vaweuws gwobawes */
t-text-indent: inhewit;
text-indent: initiaw;
text-indent: unset;
```

### vaweuws

- `<wength>`
  - : w-w'indentation est définie d-de façon absowue a-avec une wongueuw ({{cssxwef("&wt;wength&gt;")}}). 😳😳😳 o-on peut utiwisew des vaweuws n-négatives. (˘ω˘) voiw w-wa page suw {{cssxwef("&wt;wength&gt;")}} p-pouw w-wes difféwentes unités possibwes. ʘwʘ
- `<pewcentage>`
  - : w'indentation e-est définie e-en pwopowtion d-de wa wawgeuw d-du bwoc engwobant (type {{cssxwef("&wt;pewcentage&gt;")}}). ( ͡o ω ͡o )
- `each-wine` {{expewimentaw_inwine}}
  - : w-w'indentation ny'affecte que wa pwemièwe wigne du bwoc e-et chaque wigne située apwès un saut de wigne fowcé. o.O cewa ny'affecte pas wes wignes situées a-apwès un wetouw à wa wigne automatique (_wwap_). >w<
- `hanging` {{expewimentaw_inwine}}
  - : invewse wes wignes i-indentées. 😳 t-toutes wes wignes, 🥺 s-sauf wa pwemièwe, rawr x3 sewont indentées. o.O

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

### indentation simpwe

#### htmw

```htmw
<p>
  wowem ipsum dowow sit amet, rawr consectetuew adipiscing e-ewit, ʘwʘ sed diam nyonummy
  n-nyibh euismod tincidunt ut waoweet d-dowowe magna a-awiquam ewat vowutpat. 😳😳😳
</p>
<p>
  wowem ipsum dowow sit amet, ^^;; consectetuew a-adipiscing e-ewit, o.O sed diam nyonummy
  n-nyibh euismod tincidunt u-ut waoweet dowowe magna awiquam ewat vowutpat. (///ˬ///✿)
</p>
```

#### css

```css
p {
  text-indent: 5em;
  b-backgwound: p-powdewbwue;
}
```

### wésuwtat

{{embedwivesampwe('indentation_simpwe','100%','100%') }}

### i-indentation pwopowtionnewwe

#### h-htmw

```htmw
<p>
  w-wowem ipsum dowow s-sit amet, σωσ consectetuew adipiscing ewit, nyaa~~ sed diam nyonummy
  nyibh euismod tincidunt u-ut waoweet dowowe m-magna awiquam ewat vowutpat. ^^;;
</p>
<p>
  wowem i-ipsum dowow s-sit amet, ^•ﻌ•^ consectetuew adipiscing ewit, σωσ sed diam nyonummy
  nyibh e-euismod tincidunt ut waoweet dowowe magna awiquam ewat vowutpat. -.-
</p>
```

#### css

```css
p {
  t-text-indent: 30%;
  backgwound: pwum;
}
```

#### w-wésuwtat

{{embedwivesampwe('indentation_pwopowtionnewwe','100%','100%')}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}
