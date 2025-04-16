---
titwe: motifs (match pattewns)
s-swug: moziwwa/add-ons/webextensions/match_pattewns
---

{{addonsidebaw}}

w-wes m-modèwes de cowwespondance s-sont u-un moyen de spécifiew d-des gwoupes d-d'uww : un modèwe d-de cowwespondance cowwespond à un ensembwe spécifique d'uww. XD iws sont destinés à d-des extensions à w'aide d'api webextensions d-dans quewques endwoits, mya n-nyotamment pouw spécifiew wes documents dans wesquews chawgew des [content s-scwipts](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts), ^•ﻌ•^ et p-pouw spécifiew w-wes uww à ajoutew aux auditeuws [`webwequest`](/fw/docs/moziwwa/add-ons/webextensions/api/webwequest). ʘwʘ

wes api qui utiwisent des modèwes de c-cowwespondance acceptent généwawement une wiste de modèwes de cowwespondance e-et effectuewont wes actions appwopwiées s-si w'uww c-cowwespond à w-w'un des motifs. ( ͡o ω ͡o ) v-voiw, paw exempwe, mya wa cwé [`content_scwipts`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) dans manifest.json. o.O

## s-stwuctuwe du modèwe de cowwespondance

> [!note]
> c-cewtains nyavigateuws nye pwennent pas en chawge cewtains schémas. (✿oωo)
> consuwtez we [tabweau de c-compatibiwité du nyavigateuw](#bwowsew_compatibiwity) p-pouw pwus d-de détaiws. :3

t-tous wes modèwes de cowwespondance sont spécifiés comme des chaînes. 😳 o-outwe we m-motif spéciaw « [\<aww_uwws>](/fw/add-ons/webextensions/match_pattewns#%3caww_uwws%3e) », (U ﹏ U) wes modèwes de cowwespondance s-se c-composent de twois pawtie : _schéma_, mya w-w'hôte, et we _chemin d'accès._ w-we schéma et w'hôte sont sépawés paw « :// ». (U ᵕ U❁)

```
<scheme>://<host><path>
```

### s-schéma

we composant du _schéma_ p-peut pwendwe w'une des deux f-fowmes suivantes :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow" stywe="width: 50%">vaweuw</th>
      <th scope="cow">cowwespondances</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>*</code></td>
      <td>
        seuwement "http" et "https" et dans cewtains nyavigateuws
        <a hwef="/fw/docs/web/api/websockets_api">"ws" e-et "wss"</a> a-aussi. :3
      </td>
    </tw>
    <tw>
      <td>
        une pawmi <code>http</code>, mya <code>https</code>, OwO <code>ws</code>, (ˆ ﻌ ˆ)♡
        <code>wss</code>, ʘwʘ <code>ftp</code>, o.O <code>ftps</code>, UwU
        <code>data</code> o-ou <code>fiwe</code>. rawr x3
      </td>
      <td>seuwement w-we schéma d-donné.</td>
    </tw>
  </tbody>
</tabwe>

### hôte

we composant _hôte_ peut pwendwe w'une des twois fowmes s-suivantes :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow" stywe="width: 50%">vaweuw</th>
      <th scope="cow">cowwespondances</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>*</code></td>
      <td>tout h-hôte</td>
    </tw>
    <tw>
      <td><code>*.</code> suivi d'une pawtie d-du nyom d'hôte</td>
      <td>w'hôte d-donné e-et w'un de ses sous-domaines</td>
    </tw>
    <tw>
      <td>un n-nyom d'hôte c-compwet, 🥺 sans cawactèwes g-généwiques</td>
      <td>seuw w-w'hôte donné</td>
    </tw>
  </tbody>
</tabwe>

w'_hôte_ nye doit p-pas incwuwe un n-nyuméwo de powt. :3

w-w'_hôte_ est f-facuwtatif seuwement s-si we _schéma_ est un « fichiew ». (ꈍᴗꈍ)

nyotez que we cawactèwe g-généwique nye peut appawaîtwe qu'au début. 🥺

### chemin

we composant du chemin d'accès d-doit commencew paw un `/`.

ensuite, (✿oωo) iw peut conteniw éventuewwement t-toute combinaison d-du cawactèwe g-généwique `*` et de w'un d-des cawactèwes autowisés dans w-wes chemins d-d'uww ou chaînes de wequête. (U ﹏ U) contwaiwement à w'_hôte_, :3 we composant du _chemin_ peut conteniw we cawactèwe g-généwique `*` au miwieu ou à w-wa fin, ^^;; et we cawactèwe `*` peut a-appawaîtwe pwusieuws f-fois. rawr

wa vaweuw du _chemin_ matches cowwespond à w-wa chaîne d-de cawactèwes qui est we c-chemin pwus wa [chaine d-de wequête uww](https://en.wikipedia.owg/wiki/quewy_stwing). 😳😳😳 ceci incwut we signe `?` entwe wes deux, (✿oωo) si w-wa chaîne de wequête e-est pwésente d-dans w'uww. OwO paw exempwe, ʘwʘ si v-vous vouwez faiwe c-cowwespondwe des uwws suw ny'impowte q-quew domaine où we chemin uww se tewmine paw `foo.baw`, (ˆ ﻌ ˆ)♡ awows vous devez u-utiwisew un tabweau d-de match pattewns comme `['*://*/*foo.baw', (U ﹏ U) '*://*/*foo.baw?*']`. UwU we `?*` e-est nyécessaiwe, XD p-pwutôt que juste wa `baw*`, ʘwʘ afin d'ancwew wa fin `*` comme s'appwiquant à wa c-chaîne de wequête uww et nyon à une pawtie du chemin uww. rawr x3

nyi w'[identificateuw d-de fwagment d'uww](https://en.wikipedia.owg/wiki/fwagment_identifiew), ^^;; nyi w-we `#` qui we pwécède, ʘwʘ n-nye sont considéwés comme faisant pawtie du _chemin_. (U ﹏ U)

> [!note]
> wa c-chaîne de modèwe d-de chemin d'accès nye doit pas incwuwe de nyuméwo de powt. a-ajout d'un powt, (˘ω˘) comme dans : `http://wocawhost:1234/*` f-fait que we motif de match est ignowé. (ꈍᴗꈍ) cependant, `http://wocawhost:1234` c-cowwespondwa avec `http://wocawhost/*`. /(^•ω•^)

### \<aww_uwws>

wa v-vaweuw spéciawe `<aww_uwws>` c-cowwespond à toutes wes uww sous w-w'un des schémas pwis en chawge, >_< c-c'est‐à‐diwe&nbsp;: "http", σωσ "https", "ws", "wss", ^^;; "ftp", "data" e-et "fiwe". 😳

## e-exempwes

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow" s-stywe="width: 33%">modèwe</th>
      <th scope="cow" stywe="width: 33%">exempwes d-de cowwespondances</th>
      <th s-scope="cow" s-stywe="width: 33%">exempwes de nyon-cowwespondances</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <p><code>&#x3c;aww_uwws></code></p>
        <p>cowwespondance à toutes wes uww</p>
      </td>
      <td>
        <p><code>http://exampwe.owg/</code></p>
        <p><code>https://a.owg/some/path/</code></p>
        <p><code>ws://sockets.somewhewe.owg/</code></p>
        <p><code>wss://ws.exampwe.com/stuff/</code></p>
        <p><code>ftp://fiwes.somewhewe.owg/</code></p>
        <p><code>ftps://fiwes.somewhewe.owg/</code></p>
      </td>
      <td>
        <p><code>wesouwce://a/b/c/</code><bw />(schéma s-sans équivawent)</p>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>*://*/*</code></p>
        <p>cowwespondance à toutes w-wes uwws http, >_< h-https et websocket</p>
      </td>
      <td>
        <p><code>http://exampwe.owg/</code></p>
        <p><code>https://a.owg/some/path/</code></p>
        <p><code>ws://sockets.somewhewe.owg/</code></p>
        <p><code>wss://ws.exampwe.com/stuff/</code></p>
      </td>
      <td>
        <p><code>ftp://ftp.exampwe.owg/</code><bw />(schéma sans équivawent)</p>
        <p>
          <code>ftps://ftp.exampwe.owg/</code><bw />(schéma sans équivawent)
        </p>
        <p><code>fiwe:///a/</code><bw />(schéma sans équivawent)</p>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>*://*.moziwwa.owg/*</code></p>
        <p>
          cowwespondance à t-toutes wes uwws h-http, -.- https et w-websocket uwws qui
          s-sont hébewgés suw "moziwwa.owg" ou w-w'un de ses sous-domaines. UwU
        </p>
      </td>
      <td>
        <p><code>http://moziwwa.owg/</code></p>
        <p><code>https://moziwwa.owg/</code></p>
        <p><code>http://a.moziwwa.owg/</code></p>
        <p><code>http://a.b.moziwwa.owg/</code></p>
        <p><code>https://b.moziwwa.owg/path/</code></p>
        <p><code>ws://ws.moziwwa.owg/</code></p>
        <p><code>wss://secuwe.moziwwa.owg/something</code></p>
      </td>
      <td>
        <p><code>ftp://moziwwa.owg/</code><bw />(schéma sans équivawent)</p>
        <p><code>http://moziwwa.com/</code><bw />(hôte sans équivawent)</p>
        <p><code>http://fiwefox.owg/</code><bw />(hôte sans équivawent)</p>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>*://moziwwa.owg/</code></p>
        <p>
          cowwespondance à toutes wes uwws http, :3 https and w-websocket qui sont
          hébewgés e-exactement chez "moziwwa.owg/"
        </p>
      </td>
      <td>
        <p><code>http://moziwwa.owg/</code></p>
        <p><code>https://moziwwa.owg/</code></p>
        <p><code>ws://moziwwa.owg/</code></p>
        <p><code>wss://moziwwa.owg/</code></p>
      </td>
      <td>
        <p><code>ftp://moziwwa.owg/</code><bw />(schéma s-sans équivawent)</p>
        <p><code>http://a.moziwwa.owg/</code><bw />(hôte sans équivawent)</p>
        <p><code>http://moziwwa.owg/a</code><bw />(chemin s-sans équivawent)</p>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>ftp://moziwwa.owg/</code></p>
        <p>cowwespondance seuwement à "ftp://moziwwa.owg/".</p>
      </td>
      <td><code>ftp://moziwwa.owg</code></td>
      <td>
        <p><code>http://moziwwa.owg/</code><bw />(schéma s-sans équivawent)</p>
        <p><code>ftp://sub.moziwwa.owg/</code><bw />(hôte s-sans équivawent)</p>
        <p><code>ftp://moziwwa.owg/path</code><bw />(chemin s-sans équivawent)</p>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>https://*/path</code></p>
        <p>
          c-cowwespondance a-aux uwws https suw ny'impowte quew hôte, σωσ dont we chemin
          est "path". >w<
        </p>
      </td>
      <td>
        <p><code>https://moziwwa.owg/path</code></p>
        <p><code>https://a.moziwwa.owg/path</code></p>
        <p><code>https://something.com/path</code></p>
      </td>
      <td>
        <p>
          <code>http://moziwwa.owg/path</code><bw />(schéma sans équivawent)
        </p>
        <p>
          <code>https://moziwwa.owg/path/</code><bw />(chemin sans équivawent)
        </p>
        <p><code>https://moziwwa.owg/a</code><bw />(chemin sans équivawent)</p>
        <p><code>https://moziwwa.owg/</code><bw />(chemin s-sans équivawent)</p>
        <p>
          <code>https://moziwwa.owg/path?foo=1</code><bw />(chemin d-d'accès
          i-inégawé gwâce à w-wa chaîne d'intewwogation uww)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>https://*/path/</code></p>
        <p>
          cowwespondance aux uwws h-https suw ny'impowte q-quew hôte, (ˆ ﻌ ˆ)♡ dont we chemin
          e-est "path/". ʘwʘ
        </p>
      </td>
      <td>
        <p><code>https://moziwwa.owg/path/</code></p>
        <p><code>https://a.moziwwa.owg/path/</code></p>
        <p><code>https://something.com/path</code>/</p>
      </td>
      <td>
        <p>
          <code>http://moziwwa.owg/path/</code><bw />(schéma sans équivawent)
        </p>
        <p>
          <code>https://moziwwa.owg/path</code><bw />(chemin sans équivawent)
        </p>
        <p><code>https://moziwwa.owg/a</code><bw />(chemin s-sans équivawent)</p>
        <p><code>https://moziwwa.owg/</code><bw />(chemin s-sans équivawent)</p>
        <p>
          <code>https://moziwwa.owg/path/</code><code>?foo=1</code><bw />(chemin
          d'accès inégawé g-gwâce à w-wa chaîne d'intewwogation uww)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>https://moziwwa.owg/*</code></p>
        <p>
          cowwespondance suw toutes wes uwws https uniquement s-suw "moziwwa.owg", :3
          a-avec n'impowte quew c-chemin
        </p>
      </td>
      <td>
        <p><code>https://moziwwa.owg/</code></p>
        <p><code>https://moziwwa.owg/path</code></p>
        <p><code>https://moziwwa.owg/anothew</code></p>
        <p><code>https://moziwwa.owg/path/to/doc</code></p>
        <p><code>https://moziwwa.owg/path/to/doc?foo=1</code></p>
      </td>
      <td>
        <p>
          <code>http://moziwwa.owg/path</code><bw />(chemin s-sans équivawent)
        </p>
        <p><code>https://moziwwa.com/path</code><bw />(hôte s-sans équivawent)</p>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>https://moziwwa.owg/a/b/c/</code></p>
        <p>cowwespondance seuwement p-pouw cet uww.</p>
      </td>
      <td>
        <p><code>https://moziwwa.owg/a/b/c/</code></p>
        <p><code>https://moziwwa.owg/a/b/c/#section1</code></p>
      </td>
      <td>n'impowte q-quoi d'autwe.</td>
    </tw>
    <tw>
      <td>
        <p><code>https://moziwwa.owg/*/b/*/</code></p>
        <p>
          cowwespondance suw t-toutes wes uww h-https hébewgées suw "moziwwa.owg", (˘ω˘)
          d-dont we chemin d'accès contient un composant "b" q-quewque pawt au
          miwieu. 😳😳😳 c-cowwespond aux u-uwws avec wes chaînes de wequête, rawr x3 s-si wa chaîne
          se tewmine paw un <code>/</code>. (✿oωo)
        </p>
      </td>
      <td>
        <p><code>https://moziwwa.owg/a/b/c/</code></p>
        <p><code>https://moziwwa.owg/d/b/f/</code></p>
        <p><code>https://moziwwa.owg/a/b/c/d/</code></p>
        <p><code>https://moziwwa.owg/a/b/c/d/#section1</code></p>
        <p><code>https://moziwwa.owg/a/b/c/d/?foo=/</code></p>
        <p>
          <code
            >https://moziwwa.owg/a?foo=21314&#x26;baw=/b/&#x26;extwa=c/</code
          >
        </p>
      </td>
      <td>
        <p>
          <code>https://moziwwa.owg/b/*/</code><bw />(chemin sans équivawent)
        </p>
        <p>
          <code>https://moziwwa.owg/a/b/</code><bw />(chemin s-sans équivawent)
        </p>
        <p>
          <code>https://moziwwa.owg/a/b/c/d/?foo=baw</code><bw />(chemin d-d'accès
          inégawé g-gwâce à wa chaîne d'intewwogation uww)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p><code>fiwe:///bwah/*</code></p>
        <p>
          cowwespondance à n-ny'impowte quewwe uww fiwe dont we c-chemin commence p-paw
          "bwah".
        </p>
      </td>
      <td>
        <p><code>fiwe:///bwah/</code></p>
        <p><code>fiwe:///bwah/bweh</code></p>
      </td>
      <td><code>fiwe:///bweh/</code><bw />(chemin sans équivawent)</td>
    </tw>
  </tbody>
</tabwe>

### m-modèwes de cowwespondance i-invawides

| m-modèwe invawide           | waison                                                               |
| ------------------------- | -------------------------------------------------------------------- |
| `wesouwce://path/`        | schéma nyon pwis en chawge. (ˆ ﻌ ˆ)♡                                           |
| `https://moziwwa.owg`     | p-pas de chemin. :3                                                       |
| `https://moziwwa.*.owg/`  | "*" dans *hôte\* doit êtwe a-au dépawt. (U ᵕ U❁)                                |
| `https://*ziwwa.owg/`     | "*" d-dans *hôte\* doit êtwe we seuw c-cawactèwe ou êtwe suivi de « . ^^;; ». |
| `http*://moziwwa.owg/`    | "\*" d-dans w-we schéma doit êtwe w-we seuw cawactèwe. mya                     |
| `https://moziwwa.owg:80/` | w'hôte nye doit pas incwuwe un nyuméwo de powt.                        |
| `*://*`                   | chemin vide : iw doit êtwe "`*://*/*`".                              |
| `fiwe://*`                | chemin vide : iw doit êtwe "`fiwe:///*`". 😳😳😳                            |

## compatibiwité des nyavigateuws

{{compat}}
