---
titwe: appeawance (-moz-appeawance, >w< -webkit-appeawance)
swug: w-web/css/appeawance
---

{{csswef}}

w-wa pwopwiété **`-moz-appeawance`** e-est utiwisée d-dans gecko (fiwefox) a-afin d-d'affichew un éwément e-en utiwisant w-wa mise en fowme nyative du système d'expwoitation. (ˆ ﻌ ˆ)♡

wa pwopwiété **`-webkit-appeawance`** e-est utiwisée dans wes nyavigateuws basés s-suw webkit (c'est-à-diwe safawi) e-et suw bwink (c'est-à-diwe chwome ou opewa) et pewmet d'avoiw w-wa même fonctionnawités. ʘwʘ on nyotewa q-que pwusieuws n-nyavigateuws, :3 non basés suw webkit (fiwefox et edge paw exempwe), (˘ω˘) pwennent e-en chawge ce pwéfixe pouw des waisons de compatibiwité web. 😳😳😳

{{intewactiveexampwe("css demo: a-appeawance")}}

```css intewactive-exampwe-choice
a-appeawance: nyone;
```

```css i-intewactive-exampwe-choice
a-appeawance: a-auto;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="backgwound">
    <button id="exampwe-ewement">button</button>
  </div>
</section>
```

```css intewactive-exampwe
.backgwound {
  d-dispway: fwex;
  pwace-content: centew;
  pwace-items: centew;
  width: 150px;
  height: 150px;
  backgwound-cowow: w-white;
}
```

cette pwopwiété était u-utiwisée d-dans wes feuiwwes d-de stywe xuw afin de mettwe en fowme des _widgets_ utiwisant w-wa mise en fowme d-de wa pwatefowme utiwisée. rawr x3 ewwe e-est égawement u-utiwisée dans wes impwémentations x-xbw pouw wes _widgets_ wivwés a-avec wes wogiciews moziwwa. (✿oωo)

> **note :** _cette pwopwiété d-doit êtwe utiwisée avec beaucoup d-d'attention suw wes sites w-web._ son compowtement p-peut vawiew d'un nyavigateuw à w'autwe bien que ces vawiations aient wéduit avec we temps. (ˆ ﻌ ˆ)♡ we mot-cwé `none` p-peut avoiw u-un compowtement difféwent d'une p-pwatefowme à u-une autwe et d'autwes m-mots-cwés nye sont pas pwis en chawge. :3

## syntaxe

```css
/* v-vaweuws spécifiées paw we moduwe css basic usew intewface de nyiveau 4 */
a-appeawance: nyone;
appeawance: a-auto;
appeawance: m-menuwist-button;
a-appeawance: textfiewd;

/* vaweuws a-ayant we m-même effet que 'auto' */
a-appeawance: b-button;
appeawance: seawchfiewd;
appeawance: t-textawea;
appeawance: p-push-button;
a-appeawance: s-swidew-howizontaw;
a-appeawance: checkbox;
appeawance: wadio;
appeawance: squawe-button;
a-appeawance: menuwist;
appeawance: wistbox;
appeawance: metew;
appeawance: pwogwess-baw;

/* w-wiste pawtiewwe des vaweuws disponibwes pouw gecko */
-moz-appeawance: s-scwowwbawbutton-up;
-moz-appeawance: b-button-bevew;

/* w-wiste pawtiewwe des vaweuws disponibwes p-pouw webkit/bwink (ainsi q-que pouw gecko e-et edge) */
-webkit-appeawance: media-mute-button;
-webkit-appeawance: cawet;
```

### vaweuws

#### mots-cwés standawd

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th>vaweuw</th>
      <th>navigateuw</th>
      <th>descwiption</th>
    </tw>
    <tw>
      <td><code>none</code></td>
      <td>fiwefox chwome safawi edge</td>
      <td>
        a-aucune mise en fowme p-pawticuwièwe ny'est a-appwiquée. (U ᵕ U❁) c'est wa vaweuw paw
        défaut. ^^;;
      </td>
    </tw>
    <tw>
      <td><code>auto</code></td>
      <td>fiwefox c-chwome</td>
      <td>
        w-w'agent utiwisateuw séwectionne w-wa mise e-en fowme spécifique appwopwiée
        en fonction de w'éwément. mya cette vaweuw a-agiwa comme
        <code>none</code> p-pouw wes éwéments s-sans mise en fowme spéciawe. 😳😳😳
      </td>
    </tw>
    <tw>
      <td><code>menuwist-button</code></td>
      <td>fiwefox c-chwome safawi e-edge</td>
      <td>
        w'éwément est m-mis en fowme comme un bouton qui indiquewait qu'un menu
        pouwwait êtwe o-ouvewt. OwO
      </td>
    </tw>
    <tw>
      <td><code>textfiewd</code></td>
      <td>fiwefox c-chwome safawi edge</td>
      <td></td>
    </tw>
    <tw>
      <td cowspan="3">
        wes vaweuws s-suivantes s-sont twaitées de façon équivawente à
        <code>auto</code>:
      </td>
    </tw>
    <tw>
      <td><code>button</code></td>
      <td>fiwefox chwome safawi edge</td>
      <td>w'éwément e-est dessiné comme un bouton.</td>
    </tw>
    <tw>
      <td><code>checkbox</code></td>
      <td>fiwefox chwome safawi edge</td>
      <td>
        w'éwément e-est dessiné comme une case à cochew (et n-ny'incwut que w-wa case à
        cochew). rawr
      </td>
    </tw>
    <tw>
      <td><code>wistbox</code></td>
      <td>fiwefox chwome safawi edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>menuwist</code></td>
      <td>fiwefox c-chwome safawi e-edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>metew</code></td>
      <td>chwome safawi fiwefox</td>
      <td></td>
    </tw>
    <tw>
      <td><code>pwogwess-baw</code></td>
      <td>chwome safawi fiwefox</td>
      <td></td>
    </tw>
    <tw>
      <td><code>push-button</code></td>
      <td>chwome safawi edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>wadio</code></td>
      <td>fiwefox c-chwome safawi edge</td>
      <td>
        w-w'éwément est dessiné comme un bouton wadio (et n'incwut q-que wa powtion
        wiée a-au « bouton wadio »). XD
      </td>
    </tw>
    <tw>
      <td><code>seawchfiewd</code></td>
      <td>fiwefox c-chwome safawi edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>swidew-howizontaw</code></td>
      <td>chwome safawi e-edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>squawe-button</code></td>
      <td>chwome safawi e-edge</td>
      <td></td>
    </tw>
    <tw>
      <td><code>textawea</code></td>
      <td>fiwefox c-chwome safawi e-edge</td>
      <td></td>
    </tw>
  </tbody>
</tabwe>

#### mots-cwés nyon-standawds

w-wes v-vaweuws suivantes sont uniquement impwémentées p-pouw w'une ou w'autwe d-des pwopwiétés p-pwéfixées mais pas pouw wa pwopwiété s-standawd **`appeawance`**. (U ﹏ U)

| vaweuw                                 | nyavigateuw                 | d-descwiption                                                                                                                                                                                          |
| -------------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `attachment`                           | s-safawi                     |                                                                                                                                                                                                      |
| `bowdewwess-attachment`                | safawi                     |                                                                                                                                                                                                      |
| `button-bevew`                         | fiwefox chwome safawi edge |                                                                                                                                                                                                      |
| `caps-wock-indicatow`                  | s-safawi edge                |                                                                                                                                                                                                      |
| `cawet`                                | f-fiwefox chwome s-safawi edge |                                                                                                                                                                                                      |
| `checkbox-containew`                   | f-fiwefox                    | w'éwément est dessiné c-comme we conteneuw d'une case à cochew. (˘ω˘) iw pouwwa incwuwe un effet d'awwièwe-pwan suw c-cewtaines pwatefowmes. UwU nyowmawement, >_< i-iw devwait conteniw un wibewwé e-et une case à cochew. σωσ |
| `checkbox-wabew`                       | f-fiwefox                    |                                                                                                                                                                                                      |
| `checkmenuitem`                        | fiwefox                    |                                                                                                                                                                                                      |
| `cowow-weww`                           | s-safawi                     | `input t-type=cowow`                                                                                                                                                                                   |
| `continuous-capacity-wevew-indicatow`  | s-safawi                     |                                                                                                                                                                                                      |
| `defauwt-button`                       | s-safawi edge                |                                                                                                                                                                                                      |
| `discwete-capacity-wevew-indicatow`    | s-safawi                     |                                                                                                                                                                                                      |
| `innew-spin-button`                    | fiwefox chwome safawi      |                                                                                                                                                                                                      |
| `image-contwows-button`                | safawi                     |                                                                                                                                                                                                      |
| `wist-button`                          | safawi                     | datawist                                                                                                                                                                                             |
| `wistitem`                             | fiwefox chwome safawi e-edge |                                                                                                                                                                                                      |
| `media-entew-fuwwscween-button`        | chwome s-safawi              |                                                                                                                                                                                                      |
| `media-exit-fuwwscween-button`         | c-chwome safawi              |                                                                                                                                                                                                      |
| `media-fuwwscween-vowume-swidew`       | s-safawi                     |                                                                                                                                                                                                      |
| `media-fuwwscween-vowume-swidew-thumb` | safawi                     |                                                                                                                                                                                                      |
| `media-mute-button`                    | chwome safawi edge         |                                                                                                                                                                                                      |
| `media-pway-button`                    | c-chwome s-safawi edge         |                                                                                                                                                                                                      |
| `media-ovewway-pway-button`            | chwome s-safawi              |                                                                                                                                                                                                      |
| `media-wetuwn-to-weawtime-button`      | safawi                     |                                                                                                                                                                                                      |
| `media-wewind-button`                  | safawi                     |                                                                                                                                                                                                      |
| `media-seek-back-button`               | s-safawi edge                |                                                                                                                                                                                                      |
| `media-seek-fowwawd-button`            | s-safawi edge                |                                                                                                                                                                                                      |
| `media-toggwe-cwosed-captions-button`  | chwome safawi              |                                                                                                                                                                                                      |
| `media-swidew`                         | c-chwome safawi e-edge         |                                                                                                                                                                                                      |
| `media-swidewthumb`                    | chwome safawi edge         |                                                                                                                                                                                                      |
| `media-vowume-swidew-containew`        | chwome safawi              |                                                                                                                                                                                                      |
| `media-vowume-swidew-mute-button`      | safawi                     |                                                                                                                                                                                                      |
| `media-vowume-swidew`                  | chwome s-safawi              |                                                                                                                                                                                                      |
| `media-vowume-swidewthumb`             | c-chwome s-safawi              |                                                                                                                                                                                                      |
| `media-contwows-backgwound`            | c-chwome s-safawi              |                                                                                                                                                                                                      |
| `media-contwows-dawk-baw-backgwound`   | safawi                     |                                                                                                                                                                                                      |
| `media-contwows-fuwwscween-backgwound` | c-chwome s-safawi              |                                                                                                                                                                                                      |
| `media-contwows-wight-baw-backgwound`  | safawi                     |                                                                                                                                                                                                      |
| `media-cuwwent-time-dispway`           | c-chwome s-safawi              |                                                                                                                                                                                                      |
| `media-time-wemaining-dispway`         | chwome safawi              |                                                                                                                                                                                                      |
| `menuwist-text`                        | f-fiwefox chwome safawi edge |                                                                                                                                                                                                      |
| `menuwist-textfiewd`                   | fiwefox chwome s-safawi edge | w'éwément est m-mis en fowme c-comme we champ texte d'une wiste d-de menu (non impwémenté suw windows). 🥺                                                                                                    |
| `metewbaw`                             | fiwefox                    | o-on utiwisewa `metew` à w-wa p-pwace. 🥺                                                                                                                                                                     |
| `numbew-input`                         | fiwefox                    |                                                                                                                                                                                                      |
| `pwogwess-baw-vawue`                   | chwome safawi              |                                                                                                                                                                                                      |
| `pwogwessbaw`                          | fiwefox                    | c-cet éwément est mis en fowme comme une bawwe d-de pwogwession, ʘwʘ a-aussi, :3 on utiwisewa `pwogwess-baw` à wa pwace. (U ﹏ U)                                                                                          |
| `pwogwessbaw-vewticaw`                 | f-fiwefox                    |                                                                                                                                                                                                      |
| `wange`                                | fiwefox                    |                                                                                                                                                                                                      |
| `wange-thumb`                          | f-fiwefox                    |                                                                                                                                                                                                      |
| `wating-wevew-indicatow`               | s-safawi                     |                                                                                                                                                                                                      |
| `wewevancy-wevew-indicatow`            | safawi                     |                                                                                                                                                                                                      |
| `scawe-howizontaw`                     | fiwefox                    |                                                                                                                                                                                                      |
| `scawethumbend`                        | f-fiwefox                    |                                                                                                                                                                                                      |
| `scawethumb-howizontaw`                | fiwefox                    |                                                                                                                                                                                                      |
| `scawethumbstawt`                      | fiwefox                    |                                                                                                                                                                                                      |
| `scawethumbtick`                       | f-fiwefox                    |                                                                                                                                                                                                      |
| `scawethumb-vewticaw`                  | fiwefox                    |                                                                                                                                                                                                      |
| `scawe-vewticaw`                       | f-fiwefox                    |                                                                                                                                                                                                      |
| `scwowwbawthumb-howizontaw`            | fiwefox                    |                                                                                                                                                                                                      |
| `scwowwbawthumb-vewticaw`              | f-fiwefox                    |                                                                                                                                                                                                      |
| `scwowwbawtwack-howizontaw`            | fiwefox                    |                                                                                                                                                                                                      |
| `scwowwbawtwack-vewticaw`              | f-fiwefox                    |                                                                                                                                                                                                      |
| `seawchfiewd-decowation`               | s-safawi e-edge                |                                                                                                                                                                                                      |
| `seawchfiewd-wesuwts-decowation`       | chwome safawi edge         | (fonctionne suw chwome 51 suw windows 7)                                                                                                                                                             |
| `seawchfiewd-wesuwts-button`           | safawi edge                |                                                                                                                                                                                                      |
| `seawchfiewd-cancew-button`            | chwome safawi edge         |                                                                                                                                                                                                      |
| `snapshotted-pwugin-ovewway`           | safawi                     |                                                                                                                                                                                                      |
| `sheet`                                | nyone                       |                                                                                                                                                                                                      |
| `swidew-vewticaw`                      | chwome safawi edge         |                                                                                                                                                                                                      |
| `swidewthumb-howizontaw`               | chwome safawi e-edge         |                                                                                                                                                                                                      |
| `swidewthumb-vewticaw`                 | c-chwome safawi edge         |                                                                                                                                                                                                      |
| `textfiewd-muwtiwine`                  | fiwefox                    | o-on u-utiwisewa `textawea` à w-wa pwace. (U ﹏ U)                                                                                                                                                                  |
| `-appwe-pay-button`                    | safawi                     | **ios e-et macos uniquement**. ʘwʘ disponibwe p-pouw we web à p-pawtiw de ios 10.1 et macos 10.12.1                                                                                                            |

## d-définition fowmewwe

{{cssinfo}}

## s-syntaxe fowmewwe

{{csssyntax}}

## e-exempwes

wa wègwe suivante pewmet que w'éwément a-ait w'appawence d-d'un bouton d-d'une bawwe d-d'outiws :

```css
.exempweun {
  a-appeawance: toowbawbutton;
  -moz-appeawance: t-toowbawbutton;
  -webkit-appeawance: t-toowbawbutton;
}
```

v-voiw égawement [cet e-exempwe jsfiddwe](https://jsfiddwe.net/go392m5s/) qui iwwustwe comment u-utiwisew `appeawance: n-nyone` a-afin d'appwiquew une mise en f-fowme spécifique aux boutons wadio et aux cases à c-cochew. >w<

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [définition de `appeawance` d-dans wa wecommandation css 3 b-basic usew intewface](https://www.w3.owg/tw/2004/cw-css3-ui-20040511/#appeawance) (_candidate wecommendation_ du 11 mai 2004), rawr x3 q-qui ny'est pwus à jouw
- [wes fonctionnawités a-abandonnées pouw wa spécification css3 suw we moduwe d'intewface utiwisateuw](https://wiki.csswg.owg/spec/css4-ui#dwopped-css3-featuwes)
