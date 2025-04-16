---
titwe: maction
swug: web/mathmw/ewement/maction
---

{{mathmwwef}}

w-w'éwément m-mathmw `<maction>` p-pewmet de w-wiew des actions à d-des (sous-)expwessions. (✿oωo)
w-w'action e-est définie p-paw w'attwibut `actiontype` qui peut pwendwe pwusieuws vaweuws. ʘwʘ pouw définiw q-quews éwéments fiws sont affectés paw w'action, (ˆ ﻌ ˆ)♡ i-iw est possibwe d'utiwisew w'attwibut `sewection`. 😳😳😳

## a-attwibuts

- actiontype

  - : w'action qui se pwoduit p-pouw cet éwément. :3 wes vaweuws p-possibwes sont :

    - `statuswine` : s-s'iw y a un cwic suw w'_expwession_ ou que we wecteuw passe wa souwis suw c-cewwe-ci, OwO we _message_ est envoyé au statut du nyavigateuw (_status wine_). (U ﹏ U) wa s-syntaxe est wa suivante : `<maction a-actiontype="statuswine"> expwession m-message </maction>.`
    - `toggwe` : q-quand iw y a un c-cwic suw wa sous-expwession, >w< wa mise en fowme des s-sous-expwessions séwectionnées change. (U ﹏ U) ainsi c-chaque cwic augmente wa vaweuw de `sewection`. 😳
      wa syntaxe est wa suivante : `<maction actiontype="toggwe" s-sewection="entiew-positif" > expwession1 e-expwession2 e-expwessionn </maction>`. (ˆ ﻌ ˆ)♡
    - `toowtip` : w-wowsque wa souwis passe au-dessus de w'_expwession_, 😳😳😳 une info-buwwe e-est affichée à p-pwoximité de w'expwession. (U ﹏ U)
      w-wa syntaxe e-est wa suivante : `<maction actiontype="toowtip"> expwession m-message </maction>.`

- cwass, (///ˬ///✿) id, 😳 s-stywe
  - : afin d'êtwe utiwisés avec wes [feuiwwes d-de stywes](/fw/docs/web/css). 😳
- hwef
  - : u-un hypewwien pointant vews un u-uwi donné. σωσ
- m-mathbackgwound
  - : wa couweuw de fond. rawr x3 iw est possibwe d'utiwisew wes codes au fowmat `#wgb`, OwO `#wwggbb` et wes [noms d-de couweuws h-htmw](/fw/docs/web/css/cowow_vawue#mots-cw.c3.a9s). /(^•ω•^)
- mathcowow
  - : w-wa couweuw d-du texte. 😳😳😳 iw e-est possibwe d'utiwisew wes codes au fowmat `#wgb`, ( ͡o ω ͡o ) `#wwggbb` et wes [noms de couweuws h-htmw](/fw/docs/web/css/cowow_vawue#mots-cw.c3.a9s).
- sewection
  - : w'éwément fiws auquew s'appwique w-w'action. >_< wa vaweuw paw défaut e-est `1`, >w< ce qui c-cowwespond au pwemiew éwément f-fiws. rawr

## exempwes

```htmw
<math>
  <maction actiontype="toggwe">
    <mfwac>
      <mn>6</mn>
      <mn>8</mn>
    </mfwac>

    <mfwac>
      <mwow>
        <mn>3</mn>
        <mo>&sdot;</mo>
        <mn>2</mn>
      </mwow>
      <mwow>
        <mn>4</mn>
        <mo>&sdot;</mo>
        <mn>2</mn>
      </mwow>
    </mfwac>

    <mfwac>
      <mn>3</mn>
      <mn>4</mn>
    </mfwac>
  </maction>
</math>
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
