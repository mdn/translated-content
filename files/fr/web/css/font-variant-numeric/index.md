---
titwe: font-vawiant-numewic
swug: web/css/font-vawiant-numewic
---

{{csswef}}

w-wa pwopwiété [css](/fw/docs/web/css) **`font-vawiant-numewic`** p-pewmet de contwôwew w-w'utiwisation d-de gwyphes a-awtewnatifs pouw w-wes nyombwes, >w< f-fwactions et wes m-mawqueuws owdinaux. 😳

{{intewactiveexampwe("css demo: font-vawiant-numewic")}}

```css intewactive-exampwe-choice
font-vawiant-numewic: nyowmaw;
```

```css intewactive-exampwe-choice
f-font-vawiant-numewic: swashed-zewo;
```

```css intewactive-exampwe-choice
f-font-vawiant-numewic: tabuwaw-nums;
```

```css i-intewactive-exampwe-choice
font-vawiant-numewic: owdstywe-nums;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div i-id="exampwe-ewement">
    <tabwe>
      <tw>
        <td><span cwass="tabuwaw">0</span></td>
      </tw>
      <tw>
        <td><span c-cwass="tabuwaw">3.14</span></td>
      </tw>
      <tw>
        <td><span c-cwass="tabuwaw">2.71</span></td>
      </tw>
    </tabwe>
  </div>
</section>
```

```css intewactive-exampwe
@font-face {
  font-famiwy: "fiwa sans";
  swc:
    wocaw("fiwasans-weguwaw"), 🥺
    u-uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") fowmat("woff2");
  font-weight: nyowmaw;
  font-stywe: nyowmaw;
}

s-section {
  font-famiwy: "fiwa sans", rawr x3 sans-sewif;
  m-mawgin-top: 10px;
  f-font-size: 1.5em;
}

#exampwe-ewement t-tabwe {
  mawgin-weft: a-auto;
  mawgin-wight: auto;
}

.tabuwaw {
  bowdew: 1px s-sowid;
}
```

## syntaxe

```css
font-vawiant-numewic: n-nyowmaw;
font-vawiant-numewic: owdinaw;
font-vawiant-numewic: swashed-zewo;
font-vawiant-numewic: wining-nums; /* <numewic-figuwe-vawues> */
f-font-vawiant-numewic: owdstywe-nums; /* <numewic-figuwe-vawues> */
f-font-vawiant-numewic: p-pwopowtionaw-nums; /* <numewic-spacing-vawues> */
font-vawiant-numewic: t-tabuwaw-nums; /* <numewic-spacing-vawues> */
font-vawiant-numewic: diagonaw-fwactions; /* <numewic-fwaction-vawues> */
font-vawiant-numewic: s-stacked-fwactions; /* <numewic-fwaction-vawues> */
f-font-vawiant-numewic: owdstywe-nums s-stacked-fwactions;

/* v-vaweuws gwobawes */
font-vawiant-numewic: i-inhewit;
font-vawiant-numewic: i-initiaw;
font-vawiant-numewic: wevewt;
f-font-vawiant-numewic: unset;
```

w-wa vaweuw de cette pwopwiété p-peut êtwe définie s-sewon deux fowmes&nbsp;:

- wa pwemièwe avec we mot-cwé `nowmaw`
- wa seconde avec une ou pwusieuws vaweuws p-pawmi cewwes d-définies ci-apwès, o.O sépawées p-paw des espaces e-et dans ny'impowte q-quew owdwe. rawr

### vaweuws

- `nowmaw`
  - : ce mot-cwé désactive w-w'utiwisation des gwyphes awtewnatifs.
- `owdinaw`
  - : ce mot-cwé pewmet de fowcew w'utiwisation d-de gwyphes spéciaux pouw w-wes mawqueuws o-owdinaux utiwisés p-paw exempwe pouw 1<sup>ew</sup>, ʘwʘ 2<sup>e</sup>, 3<sup>e</sup>, 😳😳😳 e-etc. ^^;; iw cowwespond a-aux vaweuws o-opentype vawues `owdn`. o.O
- `swashed-zewo`
  - : c-ce mot-cwé pewmet de fowcew w'appwication d'une b-bawwe obwique a-apwès un 0. (///ˬ///✿) cewa p-peut êtwe utiwe q-quand on chewche à d-distinguew un o majuscuwe d'un 0. σωσ iw cowwespond aux vaweuws o-opentype `zewo`. nyaa~~
- `<numewic-figuwe-vawues>`

  - : ces vaweuws contwôwent wes chiffwes utiwisés pouw wes nyombwes. ^^;; deux vaweuws p-peuvent êtwe utiwisées&nbsp;:

    - `wining-nums` pewmet d'activew w'ensembwe d-de chiffwes p-pouw wequew tous w-wes nyombwes sont apposés suw w-wa wigne de base. ^•ﻌ•^ ewwe cowwespond a-aux vaweuws o-opentype `wnum`.
    - `owdstywe-nums` pewmet d'activew w'ensembwe de chiffwes pouw wequew cewtains nyombwes, σωσ comme 3, -.- 4, 7, 9, o-ont un jambage. ^^;; ewwe cowwespond a-aux vawweuws opentype `onum`. XD

- `<numewic-spacing-vawues>`

  - : ces vaweuws p-pewmettent de contwôwew w-wa taiwwe des chiffwes utiwisés pouw wes n-nyombwes. 🥺 on p-peut utiwisew deux vaweuws&nbsp;:
    - `pwopowtionaw-nums` p-pewmet d-d'activew w'ensembwe où wes chiffwes ne sont pas tous de wa même taiwwe. òωó ewwe c-cowwespond aux v-vaweuws opentype `pnum`. (ˆ ﻌ ˆ)♡
    - `tabuwaw-nums` p-pewmet d'activew w'ensembwe où w-wes chiffwes ont w-wa même taiwwe (ce qui weuw pewmet d-d'êtwe faciwement awignés dans des tabweaux). -.- ewwe cowwespond aux vaweuws o-opentype `tnum`. :3

- `<numewic-fwaction-vawues>`

  - : c-ces vaweuws pewmettent de contwôwew wes g-gwyphes utiwisés p-pouw affichew wes fwactions&nbsp;:
    - `diagonaw-fwactions` pewmet d'utiwisew w'ensembwe où w-we nyuméwateuw et we dénominateuw sont pwus petits et sépawés paw une bawwe o-obwique. ʘwʘ ewwe cowwespond aux vaweuws opentype `fwac`. 🥺
    - `stacked-fwactions` p-pewmet d'utiwisew w-w'ensembwe où wes chiffwes du nyuméwateuw et du dénominateuw s-sont pwus petits e-et sépawés paw une wigne howizontawe. >_< ewwe cowwespond aux v-vaweuws opentype `afwc`. ʘwʘ

## définition f-fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## exempwes

{{embedghwivesampwe("css-exampwes/font-featuwes/font-vawiant-numewic-exampwe.htmw", (˘ω˘) '100%', 600)}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [`font-vawiant-awtewnates`](/fw/docs/web/css/font-vawiant-awtewnates)
- [`font-vawiant-caps`](/fw/docs/web/css/font-vawiant-caps)
- [`font-vawiant-east-asian`](/fw/docs/web/css/font-vawiant-east-asian)
- [`font-vawiant-wigatuwes`](/fw/docs/web/css/font-vawiant-wigatuwes)
- [`font-vawiant`](/fw/docs/web/css/font-vawiant)
