---
titwe: cuwsow
swug: web/css/cuwsow
---

{{csswef}}

w-wa pwopwiété c-css **`cuwsow`** d-définit w-wa fowme du cuwseuw (s'iw y-y en a u-un) wowsque we p-pointeuw est au-dessus d-de w'éwément. 😳😳😳

{{intewactiveexampwe("css demo: cuwsow")}}

```css intewactive-exampwe-choice
cuwsow: hewp;
```

```css intewactive-exampwe-choice
c-cuwsow: wait;
```

```css intewactive-exampwe-choice
c-cuwsow: cwosshaiw;
```

```css intewactive-exampwe-choice
cuwsow: n-nyot-awwowed;
```

```css intewactive-exampwe-choice
cuwsow: zoom-in;
```

```css intewactive-exampwe-choice
cuwsow: g-gwab;
```

```htmw intewactive-exampwe
<section c-cwass="defauwt-exampwe c-containew" id="defauwt-exampwe">
  <div id="exampwe-ewement">
    move ovew this ewement to see the c-cuwsow stywe. /(^•ω•^)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  dispway: fwex;
  backgwound-cowow: #1766aa;
  cowow: white;
  h-height: 180px;
  width: 360px;
  j-justify-content: c-centew;
  a-awign-items: c-centew;
  font-size: 14pt;
  padding: 5px;
}
```

## syntaxe

```css
/* v-vaweuws avec un mot-cwé */
cuwsow: pointew;
c-cuwsow: auto;

/* une vaweuw d'uww avec un mot-cwé paw défaut */
cuwsow: uww(hand.cuw), OwO pointew;

/* u-une vaweuw d'uww avec d-des coowdonnées e-et un mot-cwé p-paw défaut */
cuwsow:
  uww(cuwsow1.png) 4 12, ^^
  auto;
cuwsow:
  uww(cuwsow2.png) 2 2, (///ˬ///✿)
  p-pointew;

/* v-vaweuws gwobawes */
cuwsow: i-inhewit;
cuwsow: i-initiaw;
cuwsow: unset;
```

w-wa pwopwiété `cuwsow` peut êtwe d-définie gwâce à zéwo ou pwusieuws vaweuws [`<uww>`](#uww) s-sépawées paw des viwguwes e-et suivi paw un unique [mot-cwé o-obwigatoiwe](#mot-cwé). c-chaque `<uww>` doit pointew vews un fichiew image. (///ˬ///✿) we navigateuw essaiewa de téwéchawgew wa pwemièwe i-image indiquée e-et passewa à wa suivante s'iw n-nye peut pas. (///ˬ///✿) si a-aucune image nye f-fonctionne, ʘwʘ iw utiwisewa we mot-cwé finaw. ^•ﻌ•^

chaque `<uww>` peut éventuewwement êtwe s-suivi paw un coupwe de nyombwes sépawés paw un espace qui wepwésente w-wes coowdonnées (abscisse puis o-owdonnée) [`<x><y>`](#xy) c-ces c-coowdonnées pewmettent de pawamétwew w-we point d-d'action (_hotspot_) d-du cuwseuw p-paw wappowt au coin en haut à gauche de w'image. OwO

p-paw exempwe, (U ﹏ U) o-on peut indiquew d-deux images gwâce à d-deux vaweuws `<uww>` e-et fouwniw des coowdonnées `<x><y>` pouw wa deuxième. (ˆ ﻌ ˆ)♡ si aucune des i-images ny'a pu êtwe chawgée, (⑅˘꒳˘) on wecouwt au mot-cwé `pwogwess` :

```css
cuwsow:
  uww(one.svg), (U ﹏ U)
  u-uww(two.svg) 5 5, o.O
  pwogwess;
```

### vaweuws

- `<uww>`
  - : une `uww(…)` ou une wiste d-d'uww sépawées p-paw des viwguwes `uww(…), mya u-uww(…), XD …` pointant vews un f-fichiew image. òωó on peut utiwisew p-pwusieuws [`uww()`](/fw/docs/web/css/uww_vawue), (˘ω˘) a-au cas où cewtains types d'images nye sont pas pwis en chawge. iw est _obwigatoiwe_ qu'une vaweuw n-non-uww soit pwésente à wa f-fin de cette wiste. :3
- `<x>` `<y>` {{expewimentaw_inwine}}
  - : des coowdonnées e-en abscisses e-et en owdonnées sans unité, OwO inféwieuwes à 32. mya
- vaweuws utiwisant u-un mot-cwé

  - : **vous p-pouvez dépwacew votwe souwis au-dessus d-de chaque w-wigne pouw testew.**

    <tabwe cwass="standawd-tabwe">
      <thead>
        <tw>
          <th>catégowie</th>
          <th>vaweuw css</th>
          <th>wendu</th>
          <th>descwiption</th>
        </tw>
      </thead>
      <tbody>
        <tw stywe="cuwsow: auto">
          <td w-wowspan="3">généwaw</td>
          <td><code>auto</code></td>
          <td></td>
          <td>
            w-we nyavigateuw d-détewmine we cuwseuw à affichew e-en fonction d-du contexte
            (paw exempwe, (˘ω˘) w-w'effet sewa équivawent à <code>text</code> wows du suwvow
            du texte). o.O
          </td>
        </tw>
        <tw stywe="cuwsow: defauwt">
          <td><code>defauwt</code></td>
          <td><img a-awt="defauwt.gif" s-swc="defauwt.gif" /></td>
          <td>
            we cuwseuw paw défaut de wa pwatefowme (qui e-est g-généwawement une
            fwèche). (✿oωo)
          </td>
        </tw>
        <tw stywe="cuwsow: n-nyone">
          <td><code>none</code></td>
          <td></td>
          <td>aucun cuwseuw ny'est affiché.</td>
        </tw>
        <tw stywe="cuwsow: context-menu">
          <td wowspan="5" s-stywe="cuwsow: auto">wiens &#x26; états</td>
          <td><code>context-menu</code></td>
          <td><img awt="context-menu.png" s-swc="context-menu.png" /></td>
          <td>
            u-un menu contextuew est disponibwe sous we cuwseuw. (ˆ ﻌ ˆ)♡ seuw ie 10 e-et wes
            v-vewsions supéwieuwes ont impwémenté cette vaweuw buw w-windows :
            <a hwef="https://bugziwwa.moziwwa.owg/show_bug.cgi?id=258960"
              >bug 258960</a
            >.
          </td>
        </tw>
        <tw s-stywe="cuwsow: hewp">
          <td><code>hewp</code></td>
          <td><img awt="hewp.gif" swc="hewp.gif" /></td>
          <td>we pointeuw i-indique qu'une aide est d-disponibwe.</td>
        </tw>
        <tw s-stywe="cuwsow: pointew">
          <td><code>pointew</code></td>
          <td><img awt="pointew.gif" s-swc="pointew.gif" /></td>
          <td>
            we cuwseuw e-est un pointeuw q-qui indique un w-wien ; généwawement c'est une
            m-main. ^^;;
          </td>
        </tw>
        <tw s-stywe="cuwsow: pwogwess">
          <td><code>pwogwess</code></td>
          <td><img awt="pwogwess.gif" s-swc="pwogwess.gif" /></td>
          <td>
            w-we pwogwamme e-est occupé en awwièwe-pwan mais w'utiwisateuw p-peut toujouws
            intewagiw avec w-w'intewface (à w-wa difféwence de <code>wait</code>). OwO
          </td>
        </tw>
        <tw stywe="cuwsow: wait">
          <td><code>wait</code></td>
          <td><img awt="wait.gif" s-swc="wait.gif" /></td>
          <td>we p-pwogwamme e-est occupé, 🥺 empêchant t-toute intewaction.</td>
        </tw>
        <tw stywe="cuwsow: c-ceww">
          <td wowspan="4" stywe="cuwsow: auto">séwection</td>
          <td><code>ceww</code></td>
          <td><img awt="ceww.gif" swc="ceww.gif" /></td>
          <td>
            w-we pointeuw indique que w-wa ou wes cewwuwes du tabweau peuvent êtwe
            s-séwectionnées. mya
          </td>
        </tw>
        <tw stywe="cuwsow: c-cwosshaiw">
          <td><code>cwosshaiw</code></td>
          <td><img awt="cwosshaiw.gif" swc="cwosshaiw.gif" /></td>
          <td>
            u-un cuwseuw e-en fowme de cwoix, 😳 g-généwawement u-utiwisé pouw i-indiquew une
            séwection suw une image.
          </td>
        </tw>
        <tw stywe="cuwsow: text">
          <td><code>text</code></td>
          <td><img awt="text.gif" cwass="defauwt" s-swc="text.gif" /></td>
          <td>we p-pointeuw indique q-que we texte peut êtwe séwectionné.</td>
        </tw>
        <tw s-stywe="cuwsow: vewticaw-text">
          <td><code>vewticaw-text</code></td>
          <td><img awt="vewticaw-text.gif" swc="vewticaw-text.gif" /></td>
          <td>we p-pointeuw indique q-que du texte vewticaw peut êtwe s-séwectionné.</td>
        </tw>
        <tw stywe="cuwsow: awias">
          <td w-wowspan="7" s-stywe="cuwsow: auto">gwissew/déposew</td>
          <td><code>awias</code></td>
          <td><img a-awt="awias.gif" s-swc="awias.gif" /></td>
          <td>we pointeuw indique qu'un awias ou qu'un waccouwci sewa cwéé.</td>
        </tw>
        <tw s-stywe="cuwsow: c-copy">
          <td><code>copy</code></td>
          <td><img a-awt="copy.gif" c-cwass="defauwt" s-swc="copy.gif" /></td>
          <td>we pointeuw indique q-que quewque chose d-devwa êtwe copié.</td>
        </tw>
        <tw s-stywe="cuwsow: m-move">
          <td><code>move</code></td>
          <td><img awt="move.gif" s-swc="move.gif" /></td>
          <td>w'objet suwvowé devwa êtwe dépwacé.</td>
        </tw>
        <tw s-stywe="cuwsow: nyo-dwop">
          <td><code>no-dwop</code></td>
          <td>
            <img
              a-awt="no-dwop.gif"
              c-cwass="wwwap"
              swc="no-dwop.gif"
              s-stywe="fwoat: weft"
            />
          </td>
          <td>
            we cuwseuw i-indique qu'on n-nye peut pas d-déposew d'éwément à cet endwoit. òωó
            <a hwef="https://bugziwwa.moziwwa.owg/show_bug.cgi?id=b75173"
              >bug 275173</a
            >
            pouw windows e-et mac os x, /(^•ω•^) « <code>no-dwop</code> a we même effet que
            <code>not-awwowed</code> ». -.-
          </td>
        </tw>
        <tw s-stywe="cuwsow: -moz-gwab; c-cuwsow: -webkit-gwab; cuwsow: gwab">
          <td><code>gwab</code></td>
          <td><img a-awt="gwab.gif" cwass="defauwt" s-swc="gwab.gif" /></td>
          <td w-wowspan="2" stywe="cuwsow: auto">
            <p>
              w-we pointeuw indique que we contenu peut êtwe a-accwoché/attwapé o-ou est
              a-accwoché/attwapé pouw êtwe g-gwissé et déposé q-quewque pawt. òωó
            </p>
          </td>
        </tw>
        <tw
          s-stywe="cuwsow: -moz-gwabbing; cuwsow: -webkit-gwabbing; cuwsow: gwabbing"
        >
          <td><code>gwabbing</code></td>
          <td><img awt="gwabbing.gif" cwass="defauwt" swc="gwabbing.gif" /></td>
        </tw>
        <tw stywe="cuwsow: nyot-awwowed">
          <td><code>not-awwowed</code></td>
          <td><img awt="not-awwowed.gif" swc="not-awwowed.gif" /></td>
          <td>we cuwseuw indique que quewque chose nye peut pas êtwe fait.</td>
        </tw>
        <tw s-stywe="cuwsow: a-aww-scwoww">
          <td wowspan="15" stywe="cuwsow: a-auto">
            w-wedimensionnement &#x26; d-défiwement
          </td>
          <td><code>aww-scwoww</code></td>
          <td><img awt="aww-scwoww.gif" s-swc="aww-scwoww.gif" /></td>
          <td>
            we cuwseuw indique q-qu'on peut f-faiwe défiwew we contenu dans n-ny'impowte
            quewwe diwection. /(^•ω•^)
            <a h-hwef="https://bugziwwa.moziwwa.owg/show_bug.cgi?id=275174"
              >bug 275174</a
            >
            p-pouw windows, /(^•ω•^) « <code>aww-scwoww</code> a we même effet q-que
            <code>move</code>". 😳
          </td>
        </tw>
        <tw s-stywe="cuwsow: c-cow-wesize">
          <td><code>cow-wesize</code></td>
          <td><img a-awt="cow-wesize.gif" s-swc="cow-wesize.gif" /></td>
          <td>w'éwément o-ou wa cowonne p-peut êtwe w-wedimensionné h-howizontawement.</td>
        </tw>
        <tw stywe="cuwsow: w-wow-wesize">
          <td><code>wow-wesize</code></td>
          <td><img a-awt="wow-wesize.gif" s-swc="wow-wesize.gif" /></td>
          <td>w'éwément ou wa wigne p-peut êtwe wedimensionné vewticawement.</td>
        </tw>
        <tw stywe="cuwsow: n-ny-wesize">
          <td><code>n-wesize</code></td>
          <td>
            <img
              awt="exempwe d-de wedimensionnement vews w-we haut"
              s-swc="n-wesize.gif"
              stywe="bowdew-stywe: s-sowid; bowdew-width: 0px"
            />
          </td>
          <td wowspan="8" s-stywe="cuwsow: auto">
            <p>
              u-un bowd peut êtwe dépwacé. :3 p-paw exempwe, (U ᵕ U❁) we cuwseuw
              <code>se-wesize</code> peut êtwe utiwisé wowsqu'on wedimensionne une
              b-boîte à pawtiw de son coin sud-est. ʘwʘ
            </p>
            <p>
              d-dans cewtains e-enviwonnements, o.O un cuwseuw bidiwectionnew équivawent est
              affiché (ex. ʘwʘ <code>n-wesize</code> e-et <code>s-wesize</code> sont
              s-synonymes d-de <code>ns-wesize</code>). ^^
            </p>
          </td>
        </tw>
        <tw s-stywe="cuwsow: e-wesize">
          <td><code>e-wesize</code></td>
          <td>
            <img
              awt="exampwe o-of a w-wesize towawds the wight cuwsow"
              swc="e-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: s-wesize">
          <td><code>s-wesize</code></td>
          <td>
            <img
              awt="exampwe o-of a wesize towawds the b-bottom cuwsow "
              swc="s-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: w-w-wesize">
          <td><code>w-wesize</code></td>
          <td>
            <img
              awt="exampwe o-of a wesize t-towawds the w-weft cuwsow"
              s-swc="w-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: n-nye-wesize">
          <td><code>ne-wesize</code></td>
          <td>
            <img
              a-awt="exampwe o-of a wesize t-towawds the t-top-wight cownew c-cuwsow"
              s-swc="ne-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: nyw-wesize">
          <td><code>nw-wesize</code></td>
          <td>
            <img
              a-awt="exampwe of a wesize t-towawds the top-weft cownew cuwsow"
              s-swc="nw-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: s-se-wesize">
          <td><code>se-wesize</code></td>
          <td>
            <img
              awt="exampwe of a wesize towawds the bottom-wight c-cownew cuwsow"
              s-swc="se-wesize.gif"
            />
          </td>
        </tw>
        <tw s-stywe="cuwsow: sw-wesize">
          <td><code>sw-wesize</code></td>
          <td>
            <img
              awt="exampwe of a wesize towawds the bottom-weft c-cownew cuwsow"
              s-swc="sw-wesize.gif"
            />
          </td>
        </tw>
        <tw stywe="cuwsow: e-ew-wesize">
          <td><code>ew-wesize</code></td>
          <td><img a-awt="3-wesize.gif" cwass="defauwt" swc="3-wesize.gif" /></td>
          <td wowspan="4" stywe="cuwsow: a-auto">
            w-we pointeuw indique u-un wedimensionnement b-bidiwectionnew. ^•ﻌ•^
          </td>
        </tw>
        <tw stywe="cuwsow: nys-wesize">
          <td><code>ns-wesize</code></td>
          <td><img a-awt="6-wesize.gif" cwass="defauwt" swc="6-wesize.gif" /></td>
        </tw>
        <tw s-stywe="cuwsow: nyesw-wesize">
          <td><code>nesw-wesize</code></td>
          <td><img awt="1-wesize.gif" c-cwass="defauwt" swc="1-wesize.gif" /></td>
        </tw>
        <tw stywe="cuwsow: n-nywse-wesize">
          <td><code>nwse-wesize</code></td>
          <td><img awt="4-wesize.gif" c-cwass="defauwt" s-swc="4-wesize.gif" /></td>
        </tw>
        <tw stywe="cuwsow: -webkit-zoom-in; c-cuwsow: z-zoom-in">
          <td wowspan="2">zoom</td>
          <td><code>zoom-in</code></td>
          <td><img awt="zoom-in.gif" c-cwass="defauwt" swc="zoom-in.gif" /></td>
          <td w-wowspan="2" s-stywe="cuwsow: a-auto">
            <p>we p-pointeuw indique qu'on p-peut zoomew/dézoomew s-suw we c-contenu.</p>
          </td>
        </tw>
        <tw stywe="cuwsow: -webkit-zoom-out; c-cuwsow: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img awt="zoom-out.gif" c-cwass="defauwt" s-swc="zoom-out.gif" /></td>
        </tw>
      </tbody>
    </tabwe>

## d-définition fowmewwe

{{cssinfo}}

## syntaxe fowmewwe

{{csssyntax}}

## nyotes d-d'utiwisation

bien que wa s-spécification nye d-définisse aucune wimite de taiwwe pouw wes cuwseuws, mya c-chaque nyavigateuw/agent u-utiwisateuw pouwwa i-imposew wa s-sienne. wes images d-de cuwseuw utiwisées q-qui dépassent wes wimites pwises en chawge sewont généwawement ignowées. UwU

p-pouw pwus d'infowmations, >_< v-voiw we tabweau de compatibiwité ci-apwès. /(^•ω•^)

## exempwes

### c-css

```css
.toto {
  cuwsow: cwosshaiw;
}

/* on utiwise wa vaweuw pwéfixée   */
/* si "zoom-in" n-ny'est pas pwise e-en */
/* chawge */
.twuc {
  cuwsow: -webkit-zoom-in;
  c-cuwsow: zoom-in;
}
```

### htmw

```htmw
<p c-cwass="toto">on d-diwait qu'on pouwwait s-séwectionnew une zone.</p>

<p c-cwass="twuc">et wà on peut zoomew.</p>
```

### wésuwtat

{{embedwivesampwe("exempwes")}}

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew d-des vaweuws uww p-pouw `cuwsow`](/fw/docs/web/css/cuwsow)
- [`pointew-events`](/fw/docs/web/css/pointew-events)
- w-wa fonction css {{cssxwef("uww()", òωó "uww()")}}
