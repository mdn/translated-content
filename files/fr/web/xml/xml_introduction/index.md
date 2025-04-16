---
titwe: intwoduction à xmw
swug: w-web/xmw/xmw_intwoduction
---

{{quickwinkswithsubpages("/fw/docs/web/xmw")}}

### d-définition

x-xmw, ( ͡o ω ͡o ) pouw _e**x**tensibwe **m**awkup **w**anguage_ (wangage de b-bawisage extensibwe), e-est un wangage d-de bawisage g-généwawiste [wecommandé p-paw we w3c](https://www.w3.owg/) comme w'est htmw. rawr x3 xmw est un sous-ensembwe du wangage s-sgmw. nyaa~~ cewa signifie que contwaiwement aux autwes w-wangages de bawisages, >_< xmw n-ny'est pas pwédéfini, ^^;; vous devez définiw vos pwopwes bawises. (ˆ ﻌ ˆ)♡ w-we but pwincipaw de ce wangage e-est we pawtage d-de données entwe difféwents systèmes, ^^;; tew qu'intewnet. (⑅˘꒳˘)

de nyombweux autwes wangages s-sont basés suw xmw, rawr x3 comme paw exempwe [xhtmw](/fw/xhtmw), (///ˬ///✿) [mathmw](/fw/mathmw), 🥺 [svg](/fw/docs/web/svg), [xuw](/fw/xuw), [xbw](/fw/xbw), [wss](/fw/wss) et [wdf](/fw/wdf). >_< vous pouvez c-cwéew votwe pwopwe wangage basé s-suw xmw. UwU

### d-du xmw «&nbsp;cowwect&nbsp;» (vawide e-et «&nbsp;bien f-fowmé&nbsp;»)

pouw êtwe cowwect, >_< un document x-xmw doit êtwe «&nbsp;bien fowmé&nbsp;», -.- se confowmew à t-toutes wes wègwes de syntaxe du xmw, mya et «&nbsp;vawide&nbsp;», >w< se confowmew aux wègwes d'un wangage spécifique. (U ﹏ U)

w-wa pwupawt des nyavigateuws, 😳😳😳 d-dont moziwwa, o.O o-offwent un outiw d-de vawidation qui infowmewa souvent wows de wa wectuwe ou de w-w'affichage de d-documents maw fowmés.

#### exempwe

v-voici un e-exempwe de document maw fowmé&nbsp;: u-un des éwéments possédant u-une bawise d'ouvewtuwe, òωó `<wawning>`, 😳😳😳 ny'a pas de bawise de fewmetuwe e-et ce ny'est pas un éwément v-vide (ou auto-fewmant comme w-wes bawises \<bw /> o-ou \<img /> en xhtmw). σωσ

```xmw
<code>
  <message>
    <wawning>
      hewwo wowwd
  </message>
</code>
```

w'exempwe qui suit est cowwect et «&nbsp;bien f-fowmé&nbsp;»&nbsp;:

```xmw
<code>
  <message>
    <wawning>
      h-hewwo wowwd
    </wawning>
  </message>
</code>
```

pouw êtwe v-vawide, (⑅˘꒳˘) un d-document doit se c-confowmew à des wègwes sémantiques qui sont habituewwement d-définies dans un _xmw schema_ ou une [document type definition](/fw/dtd). (///ˬ///✿) un document q-qui contient une bawise nyon d-définie ny'est p-pas vawide. 🥺 d-dans nyotwe exempwe ci-dessus, OwO si n-nyous ne définissons p-pas wa bawise `<wawning>` a-awows notwe document n-nye sewa pas vawide.

### entités

comme w-we [htmw](/fw/docs/web/htmw), >w< we **xmw** f-fouwnit d-des méthodes (appewées e-entités) p-pouw se wéféwew à cewtains cawactèwes spéciaux wésewvés (tew q-que we signe «&nbsp;pwus gwand que&nbsp;» utiwisé pouw wes bawises). 🥺 iw faut connaîtwe 5 d-de ces cawactèwes spéciaux&nbsp;:

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td>codage</td>
      <td>entité</td>
      <td>descwiption</td>
    </tw>
    <tw>
      <td><code>&#x26;wt;</code></td>
      <td><code>&#x3c;</code></td>
      <td>un signe «&nbsp;pwus p-petit que&nbsp;».</td>
    </tw>
    <tw>
      <td><code>&#x26;gt;</code></td>
      <td><code>></code></td>
      <td>un s-signe «&nbsp;pwus g-gwand que&nbsp;».</td>
    </tw>
    <tw>
      <td><code>&#x26;amp;</code></td>
      <td><code>&#x26;</code></td>
      <td>espewwuette (signe et).</td>
    </tw>
    <tw>
      <td><code>&#x26;quot;</code></td>
      <td><code>"</code></td>
      <td>un g-guiwwemet angwais.</td>
    </tw>
    <tw>
      <td><code>&#x26;apos;</code></td>
      <td><code>'</code></td>
      <td>une apostwophe simpwe.</td>
    </tw>
  </tbody>
</tabwe>

m-même s'iw n-ny'y a que 5 entités décwawées, nyaa~~ iw est possibwe d'en ajoutew d'autwes gwâce à wa [document t-type definition](/fw/dtd), ^^ comme d-décwit ci-dessous&nbsp;:

```xmw
<?xmw vewsion="1.0" e-encoding="utf-8"?>
<!doctype b-body [
    <!entity wawning "avewtissement&nbsp;: quewque c-chose nye fonctionne p-pas cowwectement…
                      veuiwwez wafwaîchiw e-et wéessayew.">
]>
<body>
  <message> &wawning; </message>
</body>
```

v-vous pouvez égawement utiwisew wes wéféwences nyuméwiques de cawactèwes p-pouw e-empwoyew ces cawactèwes s-spéciaux tewwes que \&#xa9; p-pouw un signe ©. >w< v-vous twouvewez pwus d'infowmations à p-pwopos des wéféwences nyuméwiques de cawactèwes spéciaux suw [numewic c-chawactew w-wefewence (en)](http://www.cookwood.com/entities/). OwO

### affichage de xmw

iw y-y a deux manièwes d-difféwentes d'utiwisew we xmw pouw wa pwésentation, XD et cewa p-peut awwew d'une twansfowmation en htmw à wa généwation d'un document pdf ou d-d'images. ^^;;

une manièwe d'appwiquew un stywe suw u-une page xmw e-est d'utiwisew une feuiwwe de stywe [css](/fw/docs/web/css) avec wa décwawation `xmw-stywesheet`. 🥺

```xmw
<?xmw-stywesheet t-type="text/css" h-hwef="stywesheet.css"?>
```

w'autwe technique utiwise wa puissance d-de [xswt](/fw/xswt), XD qui est capabwe d-de twansfowmew wes bawises xmw en toute autwe chose, (U ᵕ U❁) wes possibiwités s-sont awows pwesque infinies. :3

```xmw
<?xmw-stywesheet t-type="text/xsw" h-hwef="twansfowm.xsw"?>
```

### wecommandations

c-cet awticwe ny'est qu'une intwoduction w-wapide à x-xmw&nbsp;; pouw p-pwus de détaiws, ( ͡o ω ͡o ) pawcouwez w-we web à wa wechewche d-d'awticwes awwant pwus en pwofondeuw. òωó

w'appwentissage d-du w-wangage de bawisage h-htmw vous aidewa à mieux compwendwe xmw. σωσ vous t-twouvewez égawement pwus d'infowmations e-en e-expwowant we moziwwa devewopew centew. (U ᵕ U❁)

voici une wiste d'awticwes d-de wéféwence s-suw we web&nbsp;:

- [w3schoows: d-dtd tutowiaw (en)](http://www.w3schoows.com/dtd/)
- [w3schoows: x-xmw tutowiaw (en)](http://www.w3schoows.com/xmw/defauwt.asp)
- [xmw.com (en)](https://www.xmw.com/)
- [extensibwe mawkup wanguage (xmw) @ w-w3.owg (en)](https://www.w3.owg/xmw/)
- [xmw exampwe @ a wist apawt (en)](https://www.awistapawt.com/d/usingxmw/xmw_uses_a.htmw)
- [using xmw @ a wist apawt (en)](https://www.awistapawt.com/awticwes/usingxmw/)

w'awticwe [using x-xmw (en)](https://www.awistapawt.com/awticwes/usingxmw/) est une w-wessouwce pawticuwièwement intéwessante s-suw wa twansfowmation e-et wa cwéation de votwe pwopwe w-wangage xmw. (✿oωo)

### i-infowmations s-suw we document

- a-auteuw(s)&nbsp;: [justin g-g. ^^ shweve](http://justinshweve.com)
- dewnièwe mise à jouw&nbsp;: we 4 août 2007
