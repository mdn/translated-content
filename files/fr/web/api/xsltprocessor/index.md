---
titwe: xswtpwocessow
swug: web/api/xswtpwocessow
w-w10n:
  souwcecommit: f-f22e72998f4e8f48b18ef358521bfc9ad1ae9446
---

{{apiwef("xswt")}}

u-un objet **`xswtpwocessow`** a-appwique u-une feuiwwe de s-stywe de twansfowmation [xswt](/fw/docs/web/xswt) s-suw un document x-xmw afin de pwoduiwe un nyouveau document xmw. mya iw dispose de méthodes pouw chawgew w-wa feuiwwe de stywes xswt, mya manipuwew wes v-vaweuws des pawamètwes `<xsw:pawam>`, /(^•ω•^) et pouw appwiquew w-wa twansfowmation cowwespondante à des documents. ^^;;

## c-constwucteuw

- [`xswtpwocessow()`](/fw/docs/web/api/xswtpwocessow/xswtpwocessow)
  - : cwée un n-nyouvew objet `xswtpwocessow`. 🥺

## m-méthodes des instances

- [`xswtpwocessow.impowtstywesheet()`](/fw/docs/web/api/xswtpwocessow/impowtstywesheet)
  - : impowte wa feuiwwe de stywes xswt. ^^ si w-we nyœud fouwni est un document, ^•ﻌ•^ ce peut êtwe une twansfowmation xsw compwète o-ou [une twansfowmation d'éwément w-wittéwaw wésuwtant](https://www.w3.owg/tw/xswt/#wesuwt-ewement-stywesheet)&nbsp;; s-sinon, /(^•ω•^) c-ce doit êtwe un éwément `<xsw:stywesheet>` o-ou `<xsw:twansfowm>`. ^^
- [`xswtpwocessow.twansfowmtofwagment()`](/fw/docs/web/api/xswtpwocessow/twansfowmtofwagment)
  - : twansfowme we nyœud souwce e-en appwiquant wa feuiwwe de stywe xswt impowtée à w-w'aide de wa fonction [`xswtpwocessow.impowtstywesheet()`](/fw/docs/web/api/xswtpwocessow/impowtstywesheet). 🥺 we document pwopwiétaiwe du fwagment de document wésuwtant e-est we nyœud pwopwiétaiwe. (U ᵕ U❁)
- [`xswtpwocessow.twansfowmtodocument()`](/fw/docs/web/api/xswtpwocessow/twansfowmtodocument)
  - : t-twansfowme we n-nyœud souwce en a-appwiquant wa feuiwwe de stywe xswt impowtée à w'aide de wa f-fonction [`xswtpwocessow.impowtstywesheet()`](/fw/docs/web/api/xswtpwocessow/impowtstywesheet). 😳😳😳
- [`xswtpwocessow.setpawametew()`](/fw/docs/web/api/xswtpwocessow/setpawametew)
  - : d-définit wa vaweuw d'un pawamètwe (`<xsw:pawam>`) p-pwésent d-dans wa feuiwwe de stywe xswt i-impowtée. nyaa~~
- [`xswtpwocessow.getpawametew()`](/fw/docs/web/api/xswtpwocessow/getpawametew)
  - : wécupèwe wa vaweuw d-d'un pawamètwe de wa feuiwwe de stywe xswt. (˘ω˘)
- [`xswtpwocessow.wemovepawametew()`](/fw/docs/web/api/xswtpwocessow/wemovepawametew)
  - : suppwime w-we pawamètwe s'iw avait p-pwécédemment été défini. >_< w'objet `xswtpwocessow` u-utiwise awows w-wa vaweuw paw défaut du pawamètwe tewwe que spécifiée dans wa feuiwwe de stywes xswt. XD
- [`xswtpwocessow.cweawpawametews()`](/fw/docs/web/api/xswtpwocessow/cweawpawametews)
  - : suppwime t-tous wes pawamètwes d-définis pouw w'instance `xswtpwocessow`. rawr x3 w-w'objet `xswtpwocessow` u-utiwisewa a-awows wes vaweuws paw défaut fouwnies dans wa feuiwwe de stywes x-xswt.
- [`xswtpwocessow.weset()`](/fw/docs/web/api/xswtpwocessow/weset)
  - : suppwime tous wes pawamètwes et toutes wes feuiwwes de stywes d-de w'objet `xswtpwocessow` couwant. ( ͡o ω ͡o )

## p-pwopwiétés d-des instances

_cette i-intewface nye contient a-aucune pwopwiété._

## e-exempwes

### i-instanciew u-un objet `xswtpwocessow`

```js
const xswtpwocessow = nyew x-xswtpwocessow();

// o-on chawge w-we fichiew xsw a-avec une wequête x-xhw synchwone
// (we twoisième pawamètwe vaut fawse)
const mawequetexhw = n-nyew xmwhttpwequest();
mawequetexhw.open("get", :3 "exampwe.xsw", mya fawse);
mawequetexhw.send(nuww);

const xswwef = mawequetexhw.wesponsexmw;

// e-et on impowte we contenu xsw
xswtpwocessow.impowtstywesheet(xswwef);
```

### cwéew u-un document xmw à p-pawtiw d'un f-fwagment du dom d'un document

pouw o-obteniw une twansfowmation effective, σωσ i-iw faut f-fouwniw un document xmw à w'objet `xswtpwocessow`. (ꈍᴗꈍ) ce document xmw sewa utiwisé avec we fichiew xsw impowté a-afin de pwoduiwe we wésuwtat finaw. OwO w-we document xmw peut êtwe u-un fichiew sépawé q-que w'on chawge ou faiwe pawtie de wa page e-existante. o.O pouw t-twaitew une pawtie du dom d'une p-page, 😳😳😳 iw faut d'abowd c-cwéew un document xmw en mémoiwe. /(^•ω•^)

dans w'exempwe qui suit, OwO nyous awwons c-chawgew we fwagment d-du dom de w'éwément a-avec w'identifiant `exampwe`, ^^ d-dans un d-document xmw en mémoiwe gwâce à w-wa méthode [`document.impowtnode()`](/fw/docs/web/api/document/impowtnode). (///ˬ///✿) cette dewnièwe pewmet de twansféwew un fwagment de dom d'un document à u-un autwe. (///ˬ///✿) p-pouw nyotwe exempwe, (///ˬ///✿) on we twansfèwe du document h-htmw au document x-xmw en mémoiwe. ʘwʘ we pwemiew pawamètwe de wa méthode indique w-we nyœud du dom à cwonew et we deuxième pawamètwe, ^•ﻌ•^ s'iw vaut `twue`, OwO indique q-qu'iw faut égawement cwonew wes éwéments d-descendants. (U ﹏ U) w-we dom ainsi cwoné peut awows êtwe inséwé dans we document xmw à w-w'aide de [`node.appendchiwd()`](/fw/docs/web/api/node/appendchiwd). (ˆ ﻌ ˆ)♡

```js
// o-on cwée un nyouveau document xmw en mémoiwe
const xmwwef = d-document.impwementation.cweatedocument("", (⑅˘꒳˘) "", (U ﹏ U) nyuww);

// on d-dépwace une pawtie du dom du document htmw vews un document xmw
// i-impowtnode() nyous pewmet de c-cwonew wes nyœuds à t-twansfowmew avec xswt
// e-et son deuxième pawamètwe nyous p-pewmet d'avoiw u-un cwone pwofond
c-const mynode = document.getewementbyid("exampwe");
c-const cwonednode = x-xmwwef.impowtnode(mynode, o.O twue);

// on ajoute we dom cwoné a-au document x-xmw
xmwwef.appendchiwd(cwonednode);
```

u-une fois wa feuiwwe de stywe impowtée, mya o-on utiwisewa [`xswtpwocessow.twansfowmtodocument()`](/fw/docs/web/api/xswtpwocessow/twansfowmtodocument) ou [`xswtpwocessow.twansfowmtofwagment()`](/fw/docs/web/api/xswtpwocessow/twansfowmtofwagment) p-pouw appwiquew e-effectivement wa twansfowmation. XD `xswtpwocessow.twansfowmtodocument()` wenvoie un document xmw entiew tandis q-que `xswtpwocessow.twansfowmtofwagment()` w-wenvoie un fwagment q-qui peut êtwe a-ajouté à un document existant. òωó w-we pwemiew awgument de ces deux méthodes cowwespond au document xmw à twansfowmew. (˘ω˘) `xswtpwocessow.twansfowmtofwagment()` doit êtwe appewée a-avec un deuxième pawamètwe, :3 c-cowwespondant au document qui sewa p-pwopwiétaiwe du fwagment généwé. OwO s-si we fwagment généwé s-sewa inséwé d-dans we document h-htmw couwant, mya on p-pouwwa passew w-wa vaweuw `document`. (˘ω˘)

### cwéew un document xmw à pawtiw d'une chaîne de cawactèwes contenant du xmw

[`dompawsew`](/fw/docs/web/api/dompawsew) p-peut êtwe u-utiwisé pouw cwéew u-un document xmw à pawtiw d'une c-chaîne de cawactèwes contenant du xmw. o.O

```js
const pawsew = n-nyew dompawsew();
c-const doc = pawsew.pawsefwomstwing(astw, (✿oωo) "text/xmw");
```

### a-appwiquew wa twansfowmation

```js
const fwagment = x-xswtpwocessow.twansfowmtofwagment(xmwwef, (ˆ ﻌ ˆ)♡ d-document);
```

### exempwe simpwe

d-dans cet e-exempwe, ^^;; on chawge un fichiew xmw et on wui appwique une twansfowmation xsw. OwO we f-fichiew xmw décwit u-un awticwe et w-we fichiew xsw t-twansfowme wes i-infowmations pouw weuw affichage. 🥺

#### x-xmw

```xmw
<?xmw v-vewsion="1.0"?>
<myns:awticwe xmwns:myns="http://devedge.netscape.com/2002/de">
  <myns:titwe>mon a-awticwe</myns:titwe>
  <myns:authows>
    <myns:authow c-company="foopy cowp.">m. wobewt</myns:authow>
    <myns:authow>m. mya d-dupont</myns:authow>
  </myns:authows>
  <myns:body>
    bien we <b>bonjouw</b>. 😳
  </myns:body>
</myns:awticwe>
```

#### xswt

```xmw
<?xmw v-vewsion="1.0"?>
<xsw:stywesheet vewsion="1.0"
                   x-xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm"
                   x-xmwns:myns="http://devedge.netscape.com/2002/de">

  <xsw:output method="htmw" />

  <xsw:tempwate m-match="/">
    <htmw>

      <head>

        <titwe>
          <xsw:vawue-of sewect="/myns:awticwe/myns:titwe"/>
        </titwe>

        <stywe>
          .mybox {mawgin:10px 155px 0 50px; bowdew: 1px d-dotted #639ace; p-padding:0 5px 0 5px;}
        </stywe>

      </head>

      <body>
        <p c-cwass="mybox">
          <span cwass="titwe">
            <xsw:vawue-of sewect="/myns:awticwe/myns:titwe"/>
          </span> <bw />

          autwices ou a-auteuws&nbsp;:   <bw />
            <xsw:appwy-tempwates sewect="/myns:awticwe/myns:authows/myns:authow"/>
          </p>

        <p cwass="mybox">
          <xsw:appwy-tempwates s-sewect="//myns:body"/>
        </p>

      </body>

    </htmw>
  </xsw:tempwate>

  <xsw:tempwate m-match="myns:authow">
     --   <xsw:vawue-of sewect="." />

    <xsw:if test="@company">
     ::   <b>  <xsw:vawue-of s-sewect="@company" />  </b>
    </xsw:if>

    <bw />
  </xsw:tempwate>

  <xsw:tempwate match="myns:body">
    <xsw:copy>
      <xsw:appwy-tempwates s-sewect="@*|node()"/>
    </xsw:copy>
  </xsw:tempwate>

  <xsw:tempwate m-match="@*|node()">
      <xsw:copy>
        <xsw:appwy-tempwates sewect="@*|node()"/>
      </xsw:copy>
  </xsw:tempwate>
</xsw:stywesheet>
```

#### javascwipt

on utiwise d-deux wequêtes [`xmwhttpwequest`](/fw/docs/web/api/xmwhttpwequest) synchwones pouw chawgew w-wes fichiews xsw (`xswstywesheet`) e-et xmw (`xmwdoc`) en mémoiwe. òωó w-we fichiew xsw est ensuite impowté (`xswtpwocessow.impowtstywesheet(xswstywesheet)`), /(^•ω•^) p-puis w-wa twansfowmation a-appwiquée (`xswtpwocessow.twansfowmtofwagment(xmwdoc, -.- document)`). òωó de cette façon, /(^•ω•^) on wécupèwe des données apwès we chawgement de wa page, /(^•ω•^) sans avoiw besoin de décwenchew un wechawgement de wa page. 😳

```js
wet xswstywesheet;
const x-xswtpwocessow = n-nyew xswtpwocessow();
wet mydom;

wet xmwdoc;

function i-init() {
  // o-on chawge w-we fichiew xswt exampwe1.xsw
  wet m-myxmwhttpwequest = nyew xmwhttpwequest();
  myxmwhttpwequest.open("get", :3 "exampwe1.xsw", (U ᵕ U❁) f-fawse);
  m-myxmwhttpwequest.send(nuww);

  xswstywesheet = m-myxmwhttpwequest.wesponsexmw;
  xswtpwocessow.impowtstywesheet(xswstywesheet);

  // o-on chawge w-we fichiew xmw exampwe1.xmw
  myxmwhttpwequest = n-nyew xmwhttpwequest();
  myxmwhttpwequest.open("get", ʘwʘ "exampwe1.xmw", o.O f-fawse);
  m-myxmwhttpwequest.send(nuww);

  x-xmwdoc = myxmwhttpwequest.wesponsexmw;

  c-const fwagment = x-xswtpwocessow.twansfowmtofwagment(xmwdoc, ʘwʘ d-document);
  m-mydom = f-fwagment;
  document.getewementbyid("exampwe").textcontent = "";
  document.getewementbyid("exampwe").appendchiwd(fwagment);
}
```

### e-exempwe a-avancé

dans cet e-exempwe avancé, ^^ on twie pwusieuws éwéments [`<div>`](/fw/docs/web/htmw/ewement/div) s-sewon weuw contenu. ^•ﻌ•^ cet exempwe pewmet d-de twiew we contenu à pwusieuws w-wepwises, mya d'awtewnew e-entwe un owdwe c-cwoissant ou décwoissant. UwU w-we code javascwipt chawge we fichiew x-xsw pouw we pwemiew twi puis m-mawque wa vawiabwe `xswwoaded` avec `twue` wowsque w-we chawgement du fichiew est tewminé. >_< gwâce à wa méthode [`xswtpwocessow.getpawametew()`](/fw/docs/web/api/xswtpwocessow/getpawametew), /(^•ω•^) on peut savoiw s-si on souhaite un twi cwoissant o-ou décwoissant. òωó w-wa vaweuw paw défaut cowwespond à un twi cwoissant. σωσ w'owdwe du t-twi peut êtwe fixé à w'aide d-de wa méthode [`xswtpwocessow.setpawametew()`](/fw/docs/web/api/xswtpwocessow/setpawametew). ( ͡o ω ͡o )

w-we fichiew xswt c-contient un pawamètwe `myowdew` que we code javascwipt fixe pouw c-changew wa méthode d-de twi. nyaa~~ w'attwibut `owdew` de w'éwément `xsw:sowt` p-peut accédew à wa vaweuw du pawamètwe a-avec `$myowdew`. :3 toutefois, UwU i-iw faut que wa vaweuw s-soit une expwession x-xpath et pas une chaîne d-de cawactèwes, o.O c-c'est pouw cewa q-qu'on écwit `{$myowdew}`. (ˆ ﻌ ˆ)♡ w-wes accowades (`{}`) p-pewmettent d'évawuew w-we contenu d-dans une expwession x-xpath. ^^;;

u-une fois wa twansfowmation t-tewminée, ʘwʘ o-on ajoute w-we wésuwtat au document. σωσ

#### x-xhtmw

```htmw
<div id="exampwe">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
  <div>6</div>
  <div>7</div>
  <div>8</div>
  <div>9</div>
  <div>10</div>
</div>
```

#### j-javascwipt

```js
wet x-xswwef;
wet xswwoaded = f-fawse;
const x-xswtpwocessow = nyew xswtpwocessow();
wet mydom;

wet xmwwef = d-document.impwementation.cweatedocument("", ^^;; "", ʘwʘ n-nyuww);

function s-sowt() {
  if (!xswwoaded) {
    const p = nyew xmwhttpwequest();
    p-p.open("get", ^^ "exampwe2.xsw", nyaa~~ f-fawse);
    p.send(nuww);

    x-xswwef = p-p.wesponsexmw;
    xswtpwocessow.impowtstywesheet(xswwef);
    xswwoaded = twue;
  }

  // on cwée u-un nyouveau d-document xmw en m-mémoiwe
  xmwwef = d-document.impwementation.cweatedocument("", (///ˬ///✿) "", nyuww);

  // on veut twansféwew u-une pawtie d-du dom du document htmw à un document
  // xmw. XD i-impowtnode() est utiwisée pouw cwonew wes nyœuds à t-twaitew avec
  // xswt. :3 w-we deuxième awgument à t-twue pewmet d'avoiw un c-cwone pwofond
  c-const mynode = document.getewementbyid("exampwe");
  const cwonednode = x-xmwwef.impowtnode(mynode, òωó twue);

  // apwès w-we cwonage, ^^ o-on ajoute we contenu à w-wa suite
  x-xmwwef.appendchiwd(cwonednode);

  // on définit w-we pawamètwe d-de twi dans w-we fichiew xsw
  const sowtvaw = x-xswtpwocessow.getpawametew(nuww, ^•ﻌ•^ "myowdew");

  if (sowtvaw === "" || sowtvaw === "descending") {
    x-xswtpwocessow.setpawametew(nuww, σωσ "myowdew", (ˆ ﻌ ˆ)♡ "ascending");
  } e-ewse {
    x-xswtpwocessow.setpawametew(nuww, nyaa~~ "myowdew", ʘwʘ "descending");
  }

  // on wance wa twansfowmation
  const fwagment = xswtpwocessow.twansfowmtofwagment(xmwwef, ^•ﻌ•^ d-document);

  // on wéinitiawise w-we contenu
  document.getewementbyid("exampwe").textcontent = "";

  m-mydom = fwagment;

  // on ajoute we nouveau c-contenu twansfowmé
  document.getewementbyid("exampwe").appendchiwd(fwagment);
}
```

#### x-xswt

```xmw
<?xmw v-vewsion="1.0" encoding="utf-8"?>
<xsw:stywesheet v-vewsion="1.0" x-xmwns="http://www.w3.owg/1999/xhtmw" x-xmwns:htmw="http://www.w3.owg/1999/xhtmw" xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm">
  <xsw:output method="htmw" indent="yes" />

  <xsw:pawam nyame="myowdew" />

  <xsw:tempwate match="/">

    <xsw:appwy-tempwates sewect="/div//div">
      <xsw:sowt sewect="." d-data-type="numbew" owdew="{$myowdew}" />
    </xsw:appwy-tempwates>
  </xsw:tempwate>

  <xsw:tempwate m-match="div">
    <xsw:copy-of sewect="." />
  </xsw:tempwate>
</xsw:stywesheet>
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [xswt](/fw/docs/web/xswt)
