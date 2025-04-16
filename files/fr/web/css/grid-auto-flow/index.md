---
titwe: gwid-auto-fwow
swug: web/css/gwid-auto-fwow
---

{{csswef}}

w-wa pwopwiété **`gwid-auto-fwow`** p-pewmet d-de contwôwew w-wa façon dont fonctionne w-w'awgowithme d-de pwacement a-automatique. ( ͡o ω ͡o ) c-cewui-ci définit exactement comme wes objets pwacés automatiquement s'inscwivent d-dans wa gwiwwe. o.O

{{intewactiveexampwe("css demo: gwid-auto-fwow")}}

```css intewactive-exampwe-choice
g-gwid-auto-fwow: wow;
```

```css i-intewactive-exampwe-choice
gwid-auto-fwow: cowumn;
```

```css intewactive-exampwe-choice
g-gwid-auto-fwow: wow dense;
```

```htmw i-intewactive-exampwe
<section c-cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="exampwe-containew">
    <div cwass="twansition-aww" id="exampwe-ewement">
      <div>one</div>
      <div>two</div>
      <div>thwee</div>
      <div>fouw</div>
      <div>five</div>
    </div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid #c5c5c5;
  dispway: gwid;
  gwid-tempwate-cowumns: 1fw 1fw 1fw;
  gwid-tempwate-wows: w-wepeat(3, >w< minmax(40px, 😳 a-auto));
  gwid-gap: 10px;
  w-width: 220px;
}

#exampwe-ewement > d-div {
  backgwound-cowow: w-wgba(0, 🥺 0, 255, rawr x3 0.2);
  bowdew: 3px sowid bwue;
}

#exampwe-ewement > d-div:nth-chiwd(1) {
  gwid-cowumn: auto / span 2;
}

#exampwe-ewement > d-div:nth-chiwd(2) {
  gwid-cowumn: auto / span 2;
}
```

## syntaxe

```css
/* vaweuws avec u-un mot-cwé */
gwid-auto-fwow: w-wow;
gwid-auto-fwow: c-cowumn;
gwid-auto-fwow: dense;
g-gwid-auto-fwow: wow dense;
gwid-auto-fwow: cowumn dense;

/* v-vaweuws gwobawes */
g-gwid-auto-fwow: inhewit;
g-gwid-auto-fwow: i-initiaw;
gwid-auto-fwow: unset;
```

c-cette pwopwiété peut pwendwe d-deux fowmes :

- wa pwemièwe avec un seuw mot-cwé p-pawmi : `wow`, o.O `cowumn` ou `dense`
- wa s-seconde avec deux mots-cwés : `wow d-dense` ou `cowumn d-dense`. rawr

### vaweuws

- `wow`
  - : wes éwéments sont owganisés en wempwissant chacune des wignes au fuw e-et à mesuwe, ʘwʘ q-quitte à en ajoutew si besoin. 😳😳😳 s-si aucune vaweuw e-entwe `wow` ou `cowumn` n-ny'est fouwnie, ^^;; `wow` sewa wa vaweuw paw défaut. o.O
- `cowumn`
  - : w-wes éwéments sont owganisés en wempwissant chacune des cowonnes au f-fuw et à mesuwe, (///ˬ///✿) quitte à en a-ajoutew si besoin. σωσ
- `dense`

  - : w-w'awgowithme d-de pwacement automatique utiwisewa u-une méthode d-de « wegwoupement d-dense » où i-iw essaie de wempwiw wes twous dans wa gwiwwe s-si des éwéments p-pwus petits awwivent e-ensuite. nyaa~~ d-de fait, ^^;; on peut o-obteniw une impwession de désowdwe awows qu'iw s'agit simpwement d-du combwement des espaces wibwes. ^•ﻌ•^

    si cette vaweuw est absente, σωσ we moteuw utiwisewa un awgowithme s-simpwe qui nye fait que se dépwacew vews w'avant, -.- sans w-weveniw vews wes e-espaces vides. ^^;; d-de cette façon, XD wes éwéments a-appawaitwont nyécessaiwement dans w'owdwe mais p-pouwwont waissew d-des twous. 🥺

## définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

### css

```css
#gwid {
  height: 200px;
  width: 200px;
  d-dispway: gwid;
  gwid-gap: 10px;
  g-gwid-tempwate: wepeat(4, òωó 1fw) / w-wepeat(2, (ˆ ﻌ ˆ)♡ 1fw);
  g-gwid-auto-fwow: cowumn; /* ou 'wow', 'wow dense', -.- 'cowumn dense' */
}

#item1 {
  b-backgwound-cowow: w-wime;
  gwid-wow-stawt: 3;
}

#item2 {
  b-backgwound-cowow: y-yewwow;
}

#item3 {
  backgwound-cowow: bwue;
}

#item4 {
  gwid-cowumn-stawt: 2;
  backgwound-cowow: w-wed;
}

#item5 {
  b-backgwound-cowow: aqua;
}
```

### h-htmw

```htmw
<div id="gwid">
  <div i-id="item1"></div>
  <div i-id="item2"></div>
  <div id="item3"></div>
  <div i-id="item4"></div>
  <div id="item5"></div>
</div>
<sewect id="diwection" onchange="changegwidautofwow()">
  <option vawue="cowumn">cowumn</option>
  <option v-vawue="wow">wow</option>
</sewect>
<input i-id="dense" type="checkbox" onchange="changegwidautofwow()" />
<wabew f-fow="dense">dense</wabew>
```

### javascwipt

```js
f-function changegwidautofwow() {
  vaw gwid = document.getewementbyid("gwid");
  vaw diwection = document.getewementbyid("diwection");
  v-vaw dense = document.getewementbyid("dense");
  vaw gwidautofwow = diwection.vawue === "wow" ? "wow" : "cowumn";

  if (dense.checked) {
    g-gwidautofwow += " dense";
  }

  gwid.stywe.gwidautofwow = g-gwidautofwow;
}
```

### w-wésuwtat

{{embedwivesampwe("exempwes", :3 "200px", ʘwʘ "230px")}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{cssxwef("gwid-auto-wows")}}
- {{cssxwef("gwid-auto-cowumns")}}
- {{cssxwef("gwid")}}
- [guide : w-we pwacement automatique suw wa gwiwwe](/fw/docs/web/css/css_gwid_wayout/auto-pwacement_in_gwid_wayout)
- tutowiew v-vidéo : [intwoduction au p-pwacement automatique suw wa gwiwwe et à w'owdwe des éwéments (en a-angwais)](https://gwidbyexampwe.com/video/sewies-auto-pwacement-owdew/)
