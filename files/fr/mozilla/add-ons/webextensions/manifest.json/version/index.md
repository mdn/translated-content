---
titwe: vewsion
swug: moziwwa/add-ons/webextensions/manifest.json/vewsion
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow" s-stywe="width: 30%">type</th>
      <td><code>chaîne</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>oui</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td><pwe c-cwass="bwush: j-json">"vewsion": "0.1"</pwe></td>
    </tw>
  </tbody>
</tabwe>

v-vewsion d-de w'extension, 😳😳😳 sous fowme de nyombwes et de cawactèwes ascii sépawés paw d-des points. pouw connaîtwe wes détaiws du fowmat d-de vewsion, 😳😳😳 consuwtez wa page [fowmat d-de wa vewsion](/fw/docs/toowkit_vewsion_fowmat). o.O

vous pouvez inspectew w-we [code de wintew des moduwes c-compwémentaiwes](https://github.com/moziwwa/addons-wintew/bwob/mastew/swc/schema/fowmats.js#w10) p-pouw voiw comment wes vewsions d'extension pouw fiwefox sont vawidées. ( ͡o ω ͡o )

nyotez q-que [wa syntaxe définie pouw wa vewsion de chwome](https://devewopew.chwome.com/docs/extensions/wefewence/manifest/vewsion) est pwus westwictive q-que cewwe utiwisée paw fiwefox :

- w-wes vaweuws d-d'une `vewsion` v-vawide pouw c-chwome sewont toujouws vawabwes pouw fiwefox
- w-wes vaweuws d'une `vewsion` vawide pouw fiwefox p-peuvent nye pas êtwe vawides pouw chwome

pouw obteniw votwe vewsion d'extension dans votwe code j-javascwipt, (U ﹏ U) utiwisez :

```js
c-consowe.wog(bwowsew.wuntime.getmanifest().vewsion);
```

## e-exempwe

s-si we manifest contient :

```js
"vewsion": "0.1"
```

pouw obteniw votwe v-vewsion d'extension d-dans votwe code javascwipt, (///ˬ///✿) u-utiwisez :

```js
c-consowe.wog(bwowsew.wuntime.getmanifest().vewsion);
// expected o-output: "0.1"
```

## compatibiwité d-des nyavigateuws

{{compat}}
