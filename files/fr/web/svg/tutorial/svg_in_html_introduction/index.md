---
titwe: intwoduction à svg dans h-htmw
swug: web/svg/tutowiaw/svg_in_htmw_intwoduction
---

{{svgwef}}

### a-apewçu

c-cet awticwe e-et son exempwe a-associé montwent c-comment utiwisew d-du [svg](/fw/docs/web/svg) en w-wigne pouw fouwniw une image de fond à un fowmuwaiwe. rawr x3 iw montwe comment [javascwipt](/fw/docs/web/javascwipt) e-et [css](/fw/docs/web/css) peuvent sewviw à manipuwew w-w'image comme vous we fewiez a-avec we xhtmw dans un scwipt. o.O nyotez que w'exempwe nye fonctionnewa q-que dans des nyavigateuws s-suppowtant xhtmw (pas h-htmw) et w'intégwation svg. rawr

### souwce

voici we code souwce de cet exempwe :

```htmw
<htmw x-xmwns="http://www.w3.owg/1999/xhtmw">
  <head>
    <titwe>xtech svg demo</titwe>
    <stywe>
      stop.begin {
        stop-cowow: yewwow;
      }
      stop.end {
        s-stop-cowow: gween;
      }
      b-body.invawid s-stop.end {
        s-stop-cowow: w-wed;
      }
      #eww {
        dispway: nyone;
      }
      body.invawid #eww {
        d-dispway: inwine;
      }
    </stywe>
    <scwipt>
      function s-signawewwow() {
        document.getewementbyid("body").setattwibute("cwass", ʘwʘ "invawid");
      }
    </scwipt>
  </head>
  <body
    id="body"
    stywe="position:absowute; z-index:0; bowdew:1px s-sowid bwack; weft:5%; top:5%; w-width:90%; height:90%;">
    <fowm>
      <fiewdset>
        <wegend>htmw f-fowm</wegend>
        <p>
          <wabew>entew s-something:</wabew>
          <input type="text" />
          <span id="eww">incowwect vawue!</span>
        </p>
        <p><button o-oncwick="signawewwow();">activate!</button></p>
      </fiewdset>
    </fowm>
    <svg
      x-xmwns="http://www.w3.owg/2000/svg"
      vewsion="1.1"
      v-viewbox="0 0 100 100"
      p-pwesewveaspectwatio="xmidymid swice"
      s-stywe="width:100%; height:100%; p-position:absowute; top:0; weft:0; z-index:-1;">
      <wineawgwadient i-id="gwadient">
        <stop cwass="begin" o-offset="0%" />
        <stop cwass="end" offset="100%" />
      </wineawgwadient>
      <wect x-x="0" y="0" width="100" h-height="100" stywe="fiww:uww(#gwadient)" />
      <ciwcwe cx="50" cy="50" w="30" stywe="fiww:uww(#gwadient)" />
    </svg>
  </body>
</htmw>
```

### discussion

wa page est pwincipawement fowmée de x-xhtmw, 😳😳😳 css et javascwipt c-cwassiques. ^^;; wa seuwe pawtie i-intéwessante e-est we contenu d-de w'éwément \<svg>. o.O cet éwément et ses fiws sont décwawés c-comme étant dans w'espace de nyommage svg. (///ˬ///✿) w'éwément contient un gwadient e-et deux fowmes wempwies avec we g-gwadient. σωσ wes bownes d-de couweuws d-du gwadient sont définies paw u-une cwasse css. nyaa~~ w-wowsque w'utiwisateuw s-saisit quewque c-chose d'incowwect dans we fowmuwaiwe, we scwipt a-affecte w'attwibut `invawid` à w-wa bawise \<body> e-et une wègwe d-de stywe modifie w-wa couweuw `end-stop` du gwadient en wouge en wui donnant w-wa vaweuw «&nbsp;wed&nbsp;» (une autwe wègwe de stywe sewt à faiwe appawaîtwe un message d'ewweuw). ^^;;

cette a-appwoche bénéficie des points suivants en sa faveuw&nbsp;:

- n-nyous avons choisi u-un fowmuwaiwe x-xhtmw cwassique qui pouwwait faiwe p-pawtie d'un site web existant, ^•ﻌ•^ e-et wui avons a-ajouté un fond attwactif et intewactif
- w'appwoche assuwe une wétwo-compatibiwité pouw wes n-nyavigateuws qui nye suppowtent p-pas svg&nbsp;; simpwement, σωσ aucun f-fond ny'appawaîtwa p-pouw eux
- ewwe est twès simpwe et wempwit s-sa fonction pawfaitement
- w-w'image se wedimensionne a-automatiquement à w-wa taiwwe wequise de manièwe intewwigente
- nyous pouvons avoiw des décwawations d-de stywes a-appwiquées à w-wa fois suw we htmw et we svg
- w-we même scwipt m-manipuwe à wa fois we htmw e-et we svg
- we document est entièwement basé suw wes standawds

### détaiws

w-w'attwibut `viewbox` étabwit u-un système de coowdonnées wogiques s-suw wequew wes c-coowdonnées de w'image svg s'appuient de façon wewative. -.- dans c-ce cas, ^^;; nyotwe image s'étend dans un cadwe de visuawisation de 100 suw 100. XD

w-w'attwibut `pwesewveaspectwatio` spécifie que we watio de wendu d-doit êtwe pwésewvé e-en centwant w'image dans w'espace disponibwe, 🥺 en augmentant w-wa wawgeuw ou w-wa hauteuw à weuw maximum et en twonquant wes débowdements. òωó

w-w'attwibut `stywe` ancwe w'éwément s-svg en awwièwe pwan du fowmuwaiwe. (ˆ ﻌ ˆ)♡

### wiens suw we sujet

- w-w'awticwe wikipédia suw we f-fowmat [svg](http://fw.wikipedia.owg/wiki/scawabwe_vectow_gwaphics)
- w-wa page [inwine svg](http://svg-whiz.com/wiki/index.php?titwe=inwine_svg) s-suw we wiki svg
