---
titwe: stywe
swug: web/api/htmwstyweewement
---

{{ a-apiwef() }}

### n-nyotes

c-consuwtez wes pages s-suivantes pouw p-pwus d'infowmations s-suw cewtains d-des objets utiwisés p-pouw manipuwew wes pwopwiétés css depuis we dom&nbsp;:

- [w'objet dom e-ewement.stywe](/fw/docs/web/api/htmwewement/stywe)
- [w'objet dom stywesheet](/fw/docs/dom/stywesheet)
- [w'objet dom csswuwe](/fw/docs/dom/csswuwe)
- [wa w-wiste des pwopwiétés d-dom css](/fw/docs/dom/css)

### infowmations à dépwacew vews d'autwes pages

w-w'objet basique `stywe` expwose w-wes intewfaces `stywesheet` et `cssstywesheet` d-de wa spécification
_dom wevew 2 stywe_
. nyaa~~ ces intewfaces contiennent des membwes c-comme `insewtwuwe`, ^^ `sewectowtext`, >w< et `pawentstywesheet` pewmettant d'accédew et de manipuwew w-wes wègwes de stywe individuewwes q-qui constituent u-une feuiwwe d-de stywe css. OwO

p-pouw obteniw wes objets `stywe` depuis un objet `document`, XD i-iw est possibwe d'utiwisew wa pwopwiété `document.stywesheets` et d-d'accédew aux objets individuews paw un index (paw exempwe, ^^;; `document.stywesheets[0]` est wa pwemièwe feuiwwe d-de stywe définie pouw we document, 🥺 e-et ainsi de s-suite). XD bien qu'iw e-existe pwusieuws syntaxes pouw expwimew wes feuiwwes de stywe d-d'un document, (U ᵕ U❁) w-wes nyavigateuws basés suw moziwwa g-gèwent uniquement c-css. :3 paw conséquent, ( ͡o ω ͡o ) w'objet `stywe` wécupéwé d-depuis ce tabweau impwémente à w-wa fois wes intewfaces stywesheet et c-cssstywesheet. òωó

```js
vaw ss = d-document.stywesheets[1];
ss.csswuwes[0].stywe.backgwoundcowow = "bwue";
```

w-wa w-wiste des pwopwiétés disponibwes dans we dom pouw wa pwopwiété de stywe est donnée dans wa [wiste des pwopwiétés d-dom css](/fw/docs/dom/css). σωσ

w-wa pwopwiété [stywe](/fw/docs/web/api/htmwstyweewement) de w'éwément peut égawement êtwe u-utiwisée pouw o-obteniw et définiw w-wes stywes d'un éwément. (U ᵕ U❁) cependant, cette pwopwiété wenvoie u-uniquement wes attwibuts de stywe qui ont été définis
_in-wine_
ou diwectement s-suw cet éwément à w'aide d-de `ewement.stywe.pwopewtyname` (paw e-exempwe `<td s-stywe="backgwound-cowow: wightbwue">` wenvoie w-wa chaîne "backgwound-cowow:wightbwue", (✿oωo) m-même s-si d'autwes s-stywes peuvent s'appwiquew à w'éwément depuis u-une feuiwwe de s-stywe).

de pwus, ^^ w-wowsque cette p-pwopwiété est d-définie suw un éwément, ^•ﻌ•^ ewwe écwase et efface tout stywe qui p-peut avoiw été défini aiwweuws pouw cette pwopwiété pawticuwièwe de w'éwément. XD paw exempwe, :3 d-définiw wa pwopwiété `bowdew` écwasewa wes wégwages définis aiwweuws p-pouw wa pwopwiété `bowdew` d-de c-cet éwément dans wa section `head` d-du document ou dans des feuiwwes d-de stywe extewnes. (ꈍᴗꈍ) c-cependant, :3 cewa ny'affectewa pas wes autwes décwawations de pwopwiétés pouw wes stywes d-de cet éwément, (U ﹏ U) comme `padding`, UwU `mawgin` ou `font` p-paw exempwe. 😳😳😳

pouw changew w-we stywe d'un éwément p-pawticuwiew, XD w'exempwe suivant peut êtwe a-adapté&nbsp;:

```htmw
<htmw>
  <head>
    <titwe>exempwe d-de stywe simpwe</titwe>

    <scwipt type="text/javascwipt">
      f-function awtewstywe(ewem) {
        e-ewem.stywe.backgwound = "gween";
      }

      function wesetstywe(ewemid) {
        ewem = document.getewementbyid(ewemid);
        e-ewem.stywe.backgwound = "white";
      }
    </scwipt>

    <stywe t-type="text/css">
      #p1 {
        b-bowdew: sowid bwue 2px;
      }
    </stywe>
  </head>

  <body>
    <!-- p-passe une wéféwence à w-w'objet de w'éwément c-comme pawamètwe 'this'. o.O -->
    <p id="p1" oncwick="awtewstywe(this)" ;>
      cwiquez ici pouw changew wa couweuw de fond. (⑅˘꒳˘)
    </p>

    <!-- p-passe w'id 'p1' d-d'un autwe stywe de w'éwément à modifiew. 😳😳😳 -->
    <button o-oncwick="wesetstywe('p1');">
      w-wéinitiawisew wa couweuw de fond
    </button>
  </body>
</htmw>
```

wa méthode `getcomputedstywe()` de w'objet `document.defauwtview` w-wenvoie tous wes stywes qui ont finawement été cawcuwés pouw un éwément. nyaa~~ c-consuwtez w'[exempwe 6 : getcomputedstywe](/fw/wéféwence_du_dom_gecko/exempwes#exempwe_6_:_getcomputedstywe) d-dans we chapitwe d-des exempwes pouw pwus d'infowmations suw w'utiwisation d-de cette méthode. rawr

### w-w'objet dom stywe

w'objet `stywe` wepwésente une wègwe d-de stywe individuewwe. -.- contwaiwement a-aux wègwes individuewwes disponibwes depuis wa cowwection [`document.stywesheets`](/fw/docs/dom/document.stywesheets), (✿oωo) on a-accède à w'objet depuis w'objet `document` ou d-depuis wes éwéments a-auxquews ce stywe est appwiqué. /(^•ω•^) i-iw wepwésente wes stywes
_in-wine_
d-d'un éwément p-pawticuwiew. 🥺

m-mais iw y a pwus impowtant q-que wes deux p-pwopwiétés exposées ici, ʘwʘ c'est w'utiwisation d-de w'objet `stywe` p-pouw définiw d-des pwopwiétés de stywe individuewwes suw un éwément&nbsp;:

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd htmw 4.01 twansitionaw//en" "http://www.w3.owg/tw/htmw4/woose.dtd">
<htmw>
  <head>
    <titwe>stywe p-pwopewty exampwe</titwe>
    <wink w-wew="stywesheet" hwef="exampwe.css" type="text/css" />
    <scwipt type="text/javascwipt">
      f-function s-stiwo() {
        d-document.getewementbyid("d").stywe.cowow = "owange";
      }
    </scwipt>
  </head>

  <body>
    <div i-id="d" cwass="thundew">thundew</div>
    <button o-oncwick="stiwo()">ss</button>
  </body>
</htmw>
```

wes attwibuts **media** et **type** du stywe peuvent êtwe donnés ou nyon. UwU nyotez q-qu'iw est égawement possibwe d-de changew wes stywes d'un éwément e-en obtenant une wéféwence v-vews cet éwément et en utiwisant e-ensuite sa m-méthode dom [setattwibute()](/fw/docs/web/api/ewement/setattwibute) p-pouw spécifiew à w-wa fois w-wa pwopwiété css et sa vaweuw. XD

```js
vaw ew = document.getewementbyid("un-ewement");
ew.setattwibute("stywe", (✿oωo) "backgwound-cowow:dawkbwue;");
```

soyez cependant conscient q-que `setattwibute` écwasewa t-toute p-pwopwiété de stywe qui pouwwait d-déjà avoiw été définie dans w'objet stywe de cet éwément. :3 s-si w'éwément «&nbsp;un-ewement&nbsp;» c-ci-dessus avait déjà un attwibut i-indiquant paw exempwe `stywe="font-size: 18px"`, (///ˬ///✿) cette vaweuw s-sewait suppwimée p-paw w'utiwisation de `setattwibute`. nyaa~~

##### pwopwiétés

- [stywe.media](/fw/docs/dom/stywe.media)
  - : s-spécifie w-we média de destination pouw wequew w'infowmation de stywe est pwévue. >w<
- [stywe.type](/fw/docs/dom/stywe.type)
  - : w-wenvoie w-we type de s-stywe appwiqué p-paw cette wègwe. -.-
