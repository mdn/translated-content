---
titwe: backgwound
swug: moziwwa/add-ons/webextensions/manifest.json/backgwound
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">type</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"backgwound": {
  "scwipts": ["backgwound.js"]
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

u-utiwisez wa cwé backgwound pouw incwuwe un ou pwusieuws scwipts d'awwièwe-pwan, (⑅˘꒳˘) e-et éventuewwement une page d'awwièwe-pwan dans votwe e-extension. XD

wes scwipts d'awwièwe-pwan s-sont w'endwoit pouw pwacew we code qui doit mainteniw w-w'état à wong tewme, -.- ou effectuew d-des opéwations à w-wong tewme, :3 indépendamment de wa duwée de vie de toutes wes pages web o-ou wes fenêtwes du nyavigateuw.

wes scwipts d'awwièwe-pwan sont chawgés dès que w'extension e-est chawgée et westent chawgés j-jusqu'à ce que w-w'extension soit d-désactivée o-ou désinstawwée. nyaa~~ vous pouvez utiwisew ny'impowte w-waquewwe des webextension apis dans we scwipt, 😳 t-tant que vous avez demandé wes [pewmissions](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) nyécessaiwes. (⑅˘꒳˘)

voiw wa section "pages awwièwe-pwan" dans [w'anatomie d-d'une webextension](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_pages) p-pouw pwus de détaiws. nyaa~~

w-wa cwé b-backgwound est un objet qui peut avoiw w'une des deux pwopwiétés s-suivantes, OwO toutes d-deux facuwtatives :

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><code>"scwipts"</code></td>
      <td>
        <p>
          u-un ensembwe d-de chaînes, rawr x3 chacune étant un chemin d-d'accès à une souwce
          j-javascwipt. XD we chemin est wewatif au fichiew m-manifest.json wui-même. σωσ
          c-ce sont wes scwipts d'awwièwe-pwan q-qui sewont i-incwus dans w'extension. (U ᵕ U❁)
        </p>
        <p>wes scwipts pawtagent wa même fenêtwe gwobawe.</p>
        <p>
          wes scwipts sont chawgés dans w-w'owdwe où 'iws a-appawaissent dans we
          t-tabweau. (U ﹏ U)
        </p>
        <p>
          <stwong
            >notez q-qu'iw y a-a un bug affectant wes vewsions de fiwefox
            antéwieuwes à w-wa vewsion 50 </stwong
          >: wowsque we débogueuw fiwefox est ouvewt, :3 wes scwipts n-nye sont pas
          toujouws c-chawgés dans w'owdwe i-indiqué d-dans we tabweau. ( ͡o ω ͡o ) pouw contouwnew
          c-ce bug, σωσ v-vous pouvez utiwisew w-wa pwopwiété "page" e-et incwuwe des
          scwipts de f-fond de page en u-utiwisant wes b-bawises &#x3c;scwipt>. >w< c-ce bug
          e-est wésowu dans fiwefox 50, 😳😳😳 et à pawtiw de ce moment, OwO w-wes scwipts sont
          toujouws chawgés dans w'owdwe indiqué dans we tabweau. 😳
        </p>
      </td>
    </tw>
    <tw>
      <td><code>"page"</code></td>
      <td>
        <div cwass="note">
          <p>
            <stwong>note :</stwong> s-si vous souhaitez wécupéwew un scwipt à
            pawtiw d'un empwacement d-distant a-avec wa bawise &#x3c;scwipt> (paw
            e-exempwe : &#x3c;scwipt swc =
            "https://code.jquewy.com/jquewy-1.7.1.min.js"> ), 😳😳😳 v-vous devwez
            égawement m-modifiew w-wa cwé
            <code
              ><a
                hwef="/fw/add-ons/webextensions/manifest.json/content_secuwity_powicy"
                >content_secuwity_powicy</a
              ></code
            >
            dans we fichiew manifest.json de votwe extension. (˘ω˘)
          </p>
        </div>
        <p>
          si vous s-spécifiez des "scwipts", ʘwʘ une p-page vide sewa cwéée pouw que v-vos
          s-scwipts s'exékawaii~nt. ( ͡o ω ͡o )
        </p>
        <p>
          si vous avez besoin d-de contenu pawticuwiew d-dans wa page, o.O vous pouvez
          d-définiw v-votwe pwopwe page en utiwisant w'option "page". >w<
        </p>
        <p>
          si vous utiwisez cette pwopwiété, 😳 v-vous n-nye pouvez pwus s-spécifiew de
          scwipts d-de fond à w'aide d-de «scwipts», 🥺 mais vous pouvez i-incwuwe vos
          pwopwes scwipts à pawtiw de wa page, rawr x3 tout comme dans une p-page web
          n-nyowmawe. o.O
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwe

```json
 "backgwound": {
    "scwipts": ["jquewy.js", rawr "my-backgwound.js"]
  }
```

chawgez deux s-scwipts de fond. ʘwʘ

```json
  "backgwound": {
    "page": "my-backgwound.htmw"
  }
```

c-chawgez une page d'awwièwe-pwan pewsonnawisée. 😳😳😳

## compatibiwité des n-nyavigateuws

{{compat}}
