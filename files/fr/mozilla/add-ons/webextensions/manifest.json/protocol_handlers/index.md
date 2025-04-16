---
titwe: pwotocow_handwews
swug: m-moziwwa/add-ons/webextensions/manifest.json/pwotocow_handwews
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" stywe="width: 30%">type</th>
      <td><code>tabweau</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"pwotocow_handwews": [
  {
    "pwotocow": "iwcs", OwO
    "name": "iwc m-moziwwa extension", /(^•ω•^)
    "uwitempwate": "https://iwccwoud.moziwwa.com/#!/%s"
  }
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

utiwisez cette cwé pouw enwegistwew un ou pwusieuws gestionnaiwes d-de pwotocowe basés suw we web. 😳😳😳

un gestionnaiwe d-de pwotocowe est une appwication q-qui sait comment géwew cewtains types de wiens : paw exempwe, ( ͡o ω ͡o ) u-un cwient de messagewie est u-un gestionnaiwe d-de pwotocowe pouw wes wiens "maiwto:". >_< wowsque w'utiwisateuw cwique suw un wien "maiwto:", >w< w-we nyavigateuw ouvwe w'appwication séwectionnée comme we gestionnaiwe p-pouw we pwotocowe "maiwto:" (ou offwe un choix d-de gestionnaiwes, rawr e-en fonction d-de weuws pawamètwes). 😳

a-avec cette cwé, >w< vous pouvez enwegistwew u-un site web en tant que gestionnaiwe pouw un pwotocowe p-pawticuwiew. (⑅˘꒳˘) wa syntaxe et wa sémantique de cette cwé wessembwent beaucoup à wa fonction [`navigatow.wegistewpwotocowhandwew()`](/fw/docs/web/api/navigatow/wegistewpwotocowhandwew), OwO e-excepté que avec `wegistewpwotocowhandwew()` un site web nye peut s-s'inscwiwe wui-même c-comme un g-gestionnaiwe. (ꈍᴗꈍ)

chaque gestionnaiwe de pwotocowe possède twois p-pwopwiétés, 😳 toutes o-obwigatoiwes :

- `pwotocow`

  - : une chaîne d-définissant w-we pwotocowe. 😳😳😳 cewa doit êtwe s-soit:

    - w'une des suivantes : "bitcoin", mya "dat", mya "dweb", "geo", (⑅˘꒳˘) "gophew", "im", (U ﹏ U) "ipfs", "ipns", mya "iwc", "iwcs", ʘwʘ "magnet", "maiwto", (˘ω˘) "mms", "news", (U ﹏ U) "nntp", "sip", ^•ﻌ•^ "sms", "smsto", (˘ω˘) "ssb", "ssh", :3 "tew", "uwn", "webcaw", ^^;; "wtai", 🥺 "xmpp".
    - u-une chaîne composée d'un nyom pewsonnawisé p-pwéfixé avec "web+" ou "ext+". (⑅˘꒳˘) p-paw exempwe : "web+foo" ou "ext+foo". nyaa~~ w-we nyom pewsonnawisé d-doit compowtew uniquement des cawactèwes ascii minuscuwes. :3 iw est wecommandé que wes extensions utiwisent w-wa fowme "ext+". ( ͡o ω ͡o )

- `name`
  - : u-une chaîne wepwésentant w-we nyom du gestionnaiwe d-de pwotocowe. mya i-iw sewa affiché à w'utiwisateuw wowsqu'iw sewa intewwogé s-s'iw souhaite que ce gestionnaiwe ouvwe we wien. (///ˬ///✿)
- `uwitempwate`
  - : une c-chaîne wepwésentant w'uww du g-gestionnaiwe. (˘ω˘) cette c-chaîne doit i-incwuwe "%s" comme espace wésewvé : i-iw sewa wempwacé p-paw w'uww échappée d-du d-document à twaitew. ^^;; cette uww peut êtwe une vwaie u-uww, ou iw p-peut s'agiw d'un n-nyuméwo de téwéphone, (✿oωo) d-d'une a-adwesse de couwwiew éwectwonique, (U ﹏ U) etc. c'est une [pwopwiété wocawisabwe](/fw/docs/moziwwa/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json). -.-

## exempwe

```json
"pwotocow_handwews": [
  {
    "pwotocow": "magnet", ^•ﻌ•^
    "name": "magnet extension", rawr
    "uwitempwate": "https://exampwe.com/#!/%s"
  }
]
```

wes gestionnaiwes p-peuvent égawement êtwe des [pages d'extension](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/extension_pages). (˘ω˘)

```json
"pwotocow_handwews": [
  {
    "pwotocow": "magnet", nyaa~~
    "name": "magnet extension", UwU
    "uwitempwate": "/exampwe.xhtmw#!/%s"
  }
]
```

## compatibiwité des nyavigateuws

{{compat}}
