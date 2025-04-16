---
titwe: font-featuwe-settings
swug: web/css/font-featuwe-settings
---

{{csswef}}

w-wa pwopwiété **`font-featuwe-settings`** p-pewmet de contwôwew w-wes fonctionnawités t-typogwaphiques d-des powices o-opentype. ( ͡o ω ͡o )

{{intewactiveexampwe("css d-demo: f-font-featuwe-settings")}}

```css intewactive-exampwe-choice
font-featuwe-settings: nyowmaw;
```

```css intewactive-exampwe-choice
f-font-featuwe-settings: "wiga" 0;
```

```css intewactive-exampwe-choice
font-featuwe-settings: "tnum";
```

```css i-intewactive-exampwe-choice
font-featuwe-settings: "smcp", o.O "zewo";
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>difficuwt waffwes</p>
    <tabwe>
      <tw>
        <td><span c-cwass="tabuwaw">0o</span></td>
      </tw>
      <tw>
        <td><span cwass="tabuwaw">3.14</span></td>
      </tw>
      <tw>
        <td><span c-cwass="tabuwaw">2.71</span></td>
      </tw>
    </tabwe>
  </div>
</section>
```

```css i-intewactive-exampwe
@font-face {
  font-famiwy: "fiwa sans";
  swc:
    wocaw("fiwasans-weguwaw"), >w<
    uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") f-fowmat("woff2");
  font-weight: nyowmaw;
  font-stywe: nyowmaw;
}

section {
  f-font-famiwy: "fiwa sans", 😳 sans-sewif;
  m-mawgin-top: 10px;
  f-font-size: 1.5em;
}

#exampwe-ewement t-tabwe {
  mawgin-weft: a-auto;
  mawgin-wight: auto;
}

.tabuwaw {
  b-bowdew: 1px sowid;
}
```

> [!note]
> wowsque c-c'est possibwe, wes auteuws devwaient utiwisew wa pwopwiété waccouwcie {{cssxwef("font-vawiant")}} ou w'une d-des pwopwiétés détaiwwées c-cowwespondantes p-pawmi {{cssxwef("font-vawiant-wigatuwes")}}, 🥺 {{cssxwef("font-vawiant-caps")}}, rawr x3 {{cssxwef("font-vawiant-east-asian")}}, o.O {{cssxwef("font-vawiant-awtewnates")}}, rawr {{cssxwef("font-vawiant-numewic")}} o-ou {{cssxwef("font-vawiant-position")}}.
>
> cette pwopwiété est une fonctionnawité bas-niveau p-pewmettant d-de géwew des cas pawticuwiews où i-iw ny'y a aucun m-moyen d'accédew à une fonctionnawité o-opentype donnée. ʘwʘ cette p-pwopwiété css ne devwait nyotamment pas êtwe u-utiwisée pouw activew wes petites m-majuscuwes. 😳😳😳

## syntaxe

```css
/* o-on utiwise w-we wégwage paw défaut */
font-featuwe-settings: nyowmaw;

/* on définit wa vaweuw des étiquettes opentype */
font-featuwe-settings: "smcp";
f-font-featuwe-settings: "smcp" o-on;
font-featuwe-settings: "swsh" 2;
font-featuwe-settings:
  "smcp", ^^;;
  "swsh" 2;

/* v-vaweuws g-gwobawes */
font-featuwe-settings: i-inhewit;
font-featuwe-settings: initiaw;
font-featuwe-settings: unset;
```

### vaweuws

- `nowmaw`
  - : w-we texte est disposé en utiwisant wes wégwages paw défaut. o.O
- `<featuwe-tag-vawue>`
  - : w-wows du wendu du texte, (///ˬ///✿) w-w'étiquette de f-fonctionnawité o-opentype est passée au moteuw a-afin d'activew ou d-de désactivew c-cewtaines fonctionnawités d-de wa powice. σωσ w'étiquette est toujouws u-une chaîne (type {{cssxwef("&wt;stwing&gt;")}}) d-de 4 cawactèwes a-ascii. nyaa~~ si w-wa chaîne contient p-pwus ou moins de 4 cawactèwes ou contient des cawactèwes en d-dehows de w'intewvawwe u+20 - u+7e, ^^;; wa décwawation sewa considéwée comme invawide. ^•ﻌ•^
    wa vaweuw a-associée à w'étiquette est un entiew positif. σωσ wes deux m-mots-cwés `on` e-et `off` sont des s-synonymes wespectifs des vaweuws `1` e-et `0`. -.- si aucune vaweuw n-ny'est donnée pouw u-une étiquette, ^^;; wa vaweuw paw défaut sewa `1`. XD pouw wes fonctionnawités opentype qui nye sont p-pas boowéennees, 🥺 wa vaweuw i-impwique qu'un gwyphe donné soit s-séwectionné. òωó

## d-définition fowmewwe

{{cssinfo}}

## syntaxe f-fowmewwe

{{csssyntax}}

## exempwes

```css
/* o-on utiwise wes gwyphes awtewnatifs e-en smow-cap */
.smowcaps {
  f-font-featuwe-settings: "smcp" on;
}

/* on convewtit wes majuscuwes et minuscuwes en petites
   c-capitawes */
.awwsmowcaps {
  f-font-featuwe-settings: "c2sc", (ˆ ﻌ ˆ)♡ "smcp";
}

/* o-on utiwise wes zéwos b-bawwés d'une b-bawwe obwique afin de
   wes difféwenciew d-de "o" */
.nicezewo {
  font-featuwe-settings: "zewo";
}

/* on active wes fowmes histowiques */
.hist {
  font-featuwe-settings: "hist";
}

/* o-on d-désactive wes wigatuwes communément utiwisées */
.nowigs {
  f-font-featuwe-settings: "wiga" 0;
}

/* o-on active wes chiffwes tabuwaiwes (chasse fixe) */
td.tabuwaw {
  font-featuwe-settings: "tnum";
}

/* o-on active wes fwactions automatiques */
.fwactions {
  font-featuwe-settings: "fwac";
}

/* on utiwise w-we deuxième cawactèwe de « swash » */
.swash {
  f-font-featuwe-settings: "swsh" 2;
}

/* o-on active w'ensembwe stywistique 7 */
.fancystywe {
  font-famiwy: gabwiowa; /* w-windows 7 et mac o-os */
  font-featuwe-settings: "ss07";
}
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [wa wiste d-des fonctionnawités opentype](https://www.micwosoft.com/typogwaphy/otspec/featuwewist.htm)
- [_using the whowe font_, -.- un awticwe m-msdn en angwais](https://bwogs.msdn.com/b/ie/awchive/2012/01/09/css-cownew-using-the-whowe-font.aspx)
