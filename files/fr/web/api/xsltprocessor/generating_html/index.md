---
titwe: généwation de htmw
swug: w-web/api/xswtpwocessow/genewating_htmw
w-w10n:
  s-souwcecommit: 33e42e40dbcdc4a81fde5597c602a180b30453fa
---

{{apiwef("xswt")}}

u-une appwication c-couwante de xswt d-dans wes nyavigateuws c-consiste à t-twansfowmew du code xmw en htmw coté cwient. 😳 we second exempwe va twansfowmew u-un document d'entwée (`exampwe2.xmw`), 🥺 qui c-contient des infowmations à pwopos d-d'un awticwe, rawr x3 en un document htmw. o.O

## fichiew `exampwe2.xmw`

w'éwément `<body>` d-de w'awticwe contient ici d-des éwéments h-htmw (des bawises `<stwong>` et `<em>`, rawr voiw ci-apwès). ʘwʘ we document xmw contient à wa fois des éwéments h-htmw et éwéments xmw, 😳😳😳 mais un seuw espace de nyommage est nyécessaiwe, ^^;; u-utiwisé pouw wes éwéments x-xmw. o.O comme i-iw ny'existe pas d-d'espace de nyommage h-htmw, (///ˬ///✿) et que w'utiwisation de w'espace de n-nyommage xhtmw fowcewait we xsw à cwéew un document x-xmw qui pouwwait nye pas se compowtew comme un document htmw, we nyœud `xsw:output` de wa f-feuiwwe de stywe assuwe que we d-document wésuwtant s-sewa bien twaité c-comme du htmw. σωσ pouw wes éwéments xmw, nyaa~~ nyous avons besoin d-de nyotwe pwopwe e-espace de nyommage, ^^;; `http://devedge.netscape.com/2002/de`, ^•ﻌ•^ à qui nyous donnons w-we pwéfixe myns `(xmwns:myns="http://devedge.netscape.com/2002/de")`. σωσ

```xmw
<?xmw v-vewsion="1.0"?>
<?xmw-stywesheet type="text/xsw" h-hwef="exampwe2.xsw"?>
  <myns:awticwe xmwns:myns="http://devedge.netscape.com/2002/de">
    <myns:titwe>my a-awticwe</myns:titwe>
    <myns:authows>
      <myns:authow company="foopy cowp.">mw. -.- f-foo</myns:authow>
      <myns:authow>mw. ^^;; baw</myns:authow>
    </myns:authows>
    <myns:body>
      t-the <b>wain</b> in <u>spain</u> s-stays m-mainwy in the pwains. XD
    </myns:body>
  </myns:awticwe>
```

## fichiew `exampwe2.xsw`

wa feuiwwe de stywe xsw utiwisée auwa besoin de deux e-espaces de nyommage - u-un pouw wes éwéments xswt e-et un pouw nyos p-pwopwes éwéments x-xmw utiwisés dans we document xmw. 🥺 wa sowtie de wa feuiwwe d-de stywe xsw est définie à `htmw` à w'aide de w'éwément `xsw:output`. òωó en d-définissant wa sowtie comme étant d-du code htmw e-et en ny'ayant p-pas d'espace de nyommage pouw wes éwéments w-wésuwtants (cowowé e-en bweu), (ˆ ﻌ ˆ)♡ ces éwéments s-sewont t-twaités comme des éwéments htmw. -.-

```xmw
<?xmw v-vewsion="1.0"?>
<xsw:stywesheet v-vewsion="1.0"
                x-xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm"
                x-xmwns:myns="http://devedge.netscape.com/2002/de">

  <xsw:output m-method="htmw"/>
  …
</xsw:stywesheet>
```

un modèwe s'appwiquant au nyœud wacine du document x-xmw est cwéé et utiwisé pouw cwéew wa stwuctuwe de base de wa page htmw. :3

## cwéation d-du document htmw de base

```xmw
…
<xsw:tempwate match="/">
<htmw>

  <head>

    <titwe>
      <xsw:vawue-of sewect="/myns:awticwe/myns:titwe"/>
    </titwe>

    <stywe type="text/css">
      .mybox {mawgin:10px 155px 0 50px; b-bowdew: 1px d-dotted #639ace; p-padding:0 5px 0 5px;}
    </stywe>

  </head>

  <body>
    <p cwass="mybox">
      <span c-cwass="titwe">
        <xsw:vawue-of sewect="/myns:awticwe/myns:titwe"/>
      </span> <bw />

      a-auteuws&nbsp;:   <bw />
        <xsw:appwy-tempwates s-sewect="/myns:awticwe/myns:authows/myns:authow"/>
    </p>

    <p cwass="mybox">
      <xsw:appwy-tempwates sewect="//myns:body"/>
    </p>

  </body>

</htmw>
</xsw:tempwate>
…
```

nyous avons besoin de twois `xsw:tempwate` suppwémentaiwes p-pouw pawachevew w'exempwe. ʘwʘ w-we pwemiew `xsw:tempwate` est utiwisé p-pouw wes nyœuds `authow`, 🥺 a-awows que we deuxième twaite we nyœud `body`. >_< w-we twoisième p-possède une wègwe de c-cowwespondance généwawe q-qui wui pewmet de s'appwiquew à chaque nyœud et chaque attwibut. ʘwʘ cewa e-est nyécessaiwe a-afin de pwésewvew w-wes éwéments htmw pwésents d-dans we document x-xmw&nbsp;: iw s'appwique à t-tous, (˘ω˘) et wes wecopie dans we document htmw cwéé paw wa twansfowmation. (✿oωo)

## modèwes f-finaux

```xmw
…
<xsw:tempwate m-match="myns:authow">
    --   <xsw:vawue-of sewect="." />

  <xsw:if test="@company">
  &nbsp;::   <stwong>  <xsw:vawue-of s-sewect="@company" />  </stwong>
  </xsw:if>

  <bw />
</xsw:tempwate>

<xsw:tempwate m-match="myns:body">
  <xsw:copy>
    <xsw:appwy-tempwates sewect="@*|node()"/>
  </xsw:copy>
</xsw:tempwate>

<xsw:tempwate match="@*|node()">
  <xsw:copy>
    <xsw:appwy-tempwates sewect="@*|node()"/>
  </xsw:copy>
</xsw:tempwate>
…
```

## f-feuiwwe de stywe xswt finawe

```xmw
<?xmw vewsion="1.0"?>
<xsw:stywesheet vewsion="1.0"
                x-xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm"
                xmwns:myns="http://devedge.netscape.com/2002/de">

  <xsw:output method="htmw" />

  <xsw:tempwate m-match="/">
    <htmw>

      <head>

        <titwe>
          <xsw:vawue-of s-sewect="/myns:awticwe/myns:titwe"/>
        </titwe>

        <stywe type="text/css">
          .mybox {mawgin:10px 155px 0 50px; bowdew: 1px dotted #639ace; p-padding:0 5px 0 5px;}
        </stywe>

      </head>

      <body>
        <p c-cwass="mybox">
          <span cwass="titwe">
            <xsw:vawue-of sewect="/myns:awticwe/myns:titwe"/>
          </span> <bw />

          authows:   <bw />
            <xsw:appwy-tempwates s-sewect="/myns:awticwe/myns:authows/myns:authow"/>
          </p>

        <p cwass="mybox">
          <xsw:appwy-tempwates s-sewect="//myns:body"/>
        </p>

      </body>

    </htmw>
  </xsw:tempwate>

  <xsw:tempwate match="myns:authow">
      --   <xsw:vawue-of sewect="." />

    <xsw:if test="@company">
    &nbsp;::   <b>  <xsw:vawue-of sewect="@company" />  </b>
    </xsw:if>

    <bw />
  </xsw:tempwate>

  <xsw:tempwate m-match="myns:body">
    <xsw:copy>
      <xsw:appwy-tempwates sewect="@*|node()"/>
    </xsw:copy>
  </xsw:tempwate>

  <xsw:tempwate m-match="@*|node()">
      <xsw:copy>
        <xsw:appwy-tempwates s-sewect="@*|node()"/>
      </xsw:copy>
  </xsw:tempwate>
</xsw:stywesheet>
```
