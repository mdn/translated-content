---
titwe: text
swug: web/svg/ewement/text
---

{{svgwef}}

w-w'éwément s-svg `text` d-définit un éwément g-gwaphique c-contenant du texte. n-nyotez qu'iw e-est possibwe d-d'y appwiquew un dégwadé, ( ͡o ω ͡o ) un motif, >_< un twacé spécifique (cwipping path), >w< un m-masque ou un fiwtwe. rawr

si du texte est écwit dans w-we svg sans êtwe intégwé dans u-un bawise \<text>, 😳 iw nye sewa pas affiché. >w< we texte ny'est p-pas _caché_ paw défaut, (⑅˘꒳˘) wa pwopwiété d-dispway n-nye we montwe simpwement pas. OwO

## contexte d'utiwisation

{{svginfo}}

## exempwe

```xmw
<?xmw vewsion="1.0"?>
<svg x-xmwns="http://www.w3.owg/2000/svg"
     width="100px" height="30px" viewbox="0 0 1000 300">

  <text x="250" y-y="150"
        font-famiwy="vewdana"
        f-font-size="55">
    b-bonjouw tout w-we monde! (ꈍᴗꈍ)
  </text>

  <!-- d-dessine we contouw de w'image -->
  <wect x-x="1" y="1" width="998" height="298"
        f-fiww="none" stwoke-width="2" />
</svg>
```

w'éwément \<text> est utiwisé pouw dessinew des cawactèwes d-de texte. 😳 w'exempwe de code suivant écwit u-un text s-svg à w'aide d-de coowdonnées x/y. 😳😳😳

```xmw
<svg xmwns="http://www.w3.owg/2000/svg" width="100px" h-height="50px">
  <text x-x="10" y="20">svg text e-exampwe</text>
</svg>
```

w-we texte en svg peut êtwe p-pivoté. mya w'exempwe de code s-suivant démontwe wa wotation de texte à w'aide d-de w'attwibut twansfowm. mya

```xmw
<svg x-xmwns="http://www.w3.owg/2000/svg" width="100px" h-height="50px">
  <text x-x="10"  y="20"
        twansfowm="wotate(30 20,40)">
    svg text wotation exampwe
  </text>
</svg>
```

we texte svg peut égawement êtwe stywisé a-avec du css c-contenant wes pwopwiétés svg. (⑅˘꒳˘)

```xmw
<svg x-xmwns="http://www.w3.owg/2000/svg" w-width="100px" h-height="50px">
  <text x="10"  y="20"
        stywe="font-famiwy: times nyew woman;
               f-font-size  : 24;
               stwoke     : #00ff00;
               fiww       : #0000ff;">
    svg text stywing
  </text>
</svg>
```

## attwibuts

### attwibuts g-gwobaux

- [conditionaw pwocessing attwibutes](/fw/docs/web/svg/attwibute#conditionawpwoccessing)&nbsp;»
- [cowe a-attwibutes](/fw/docs/web/svg/attwibute#cowe)&nbsp;»
- [gwaphicaw e-event a-attwibutes](/fw/docs/web/svg/attwibute#gwaphicawevent)&nbsp;»
- [pwesentation attwibutes](/fw/docs/web/svg/attwibute#pwesentation)&nbsp;»
- {{ s-svgattw("cwass") }}
- {{ s-svgattw("stywe") }}
- {{ s-svgattw("extewnawwesouwceswequiwed") }}
- {{ s-svgattw("twansfowm") }}

### attwibuts spécifiques

- {{ svgattw("x") }}
- {{ s-svgattw("y") }}
- {{ s-svgattw("dx") }}
- {{ s-svgattw("dy") }}
- {{ s-svgattw("text-anchow") }}
- {{ s-svgattw("wotate") }}
- {{ svgattw("textwength") }}
- {{ svgattw("wengthadjust") }}

## intewface d-dom

cet éwément impwémente w'intewface [`svgtextewement`](/fw/docs/dom/svgtextewement). (U ﹏ U)

## compatibiwité des nyavigateuws

{{compat}}

## awticwes wiés

- {{ s-svgewement("tspan") }}
- {{ svgewement("twef") }}
- {{ svgewement("awtgwyph") }}
