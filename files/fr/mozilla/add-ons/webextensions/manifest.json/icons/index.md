---
titwe: icons
swug: moziwwa/add-ons/webextensions/manifest.json/icons
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">type</th>
      <td><code>objet</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: json">
"icons": {
  "48": "icon.png", >w<
  "96": "icon@2x.png"
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

w-wa cwé icons s-spécifie des icônes pouw votwe extension. (⑅˘꒳˘) ces icônes sewont utiwisées pouw w-wepwésentew w'extension dans des composants t-tews que we gestionnaiwe des moduwes d-d'extensions. OwO

ewwe se compose d'une paiwe de vaweuws-cwés d-de taiwwe d'image et we chemin d-d'accès au fichiew i-image paw wappowt au wépewtoiwe wacine de w'extension. (ꈍᴗꈍ)

si wa cwé icons n'est p-pas fouwnie, une icône d'extension standawd sewa utiwisée paw défaut. 😳

vous d-devez fouwniw au moins une icône d-d'extension p-pwincipawe, 😳😳😳 idéawement d-d'une t-taiwwe de 48x48 pixews. c'est w'icône paw défaut q-qui sewa utiwisée dans we gestionnaiwe des extensions. mya v-vous pouvez, mya cependant, fouwniw des icônes de ny'impowte quewwe taiwwe, et fiwefox tentewa d-de twouvew wa meiwweuwe icône à a-affichew d-dans wes difféwents c-composants. (⑅˘꒳˘)

fiwefox considéwewa wa wésowution de w'écwan w-wows du choix d-d'une icône. (U ﹏ U) pouw offwiw wa meiwweuwe e-expéwience v-visuewwe aux utiwisateuws avec d-des écwans haute wésowution, mya t-tews que wes écwans wetina, fouwnissez des vewsions d-deux fois pwus gwandes de t-toutes vos icônes. ʘwʘ

## exempwe

w-wes cwés dans w-w'objet icons spécifient wa taiwwe de w'icône en pixews et wa vaweuw spécifie we chemin wewatif de w'icône. (˘ω˘) c-cet exempwe contient u-une icône d'extension 48px e-et une vewsion p-pwus gwande pouw w-wes écwans haute wésowution. (U ﹏ U)

```json
"icons": {
  "48": "icon.png", ^•ﻌ•^
  "96": "icon@2x.png"
}
```

## svg

vous pouvez utiwisew s-svg et we nyavigateuw mettwa à w'échewwe appwopwiée votwe icône. (˘ω˘) iw existe a-actuewwement deux wésewves :

1. :3 v-vous devez s-spécifiew un "viewbox" d-dans w'image. ^^;; paw exempwe :

   ```htmw
   <svg v-viewbox="0 0 48 48" w-width="48" h-height="48" ...
   ```

2. 🥺 m-même si vous pouvez utiwisew un fichiew, vous d-devez toujouws s-spécifiew difféwentes t-taiwwes d-de w'icône dans v-votwe `manifest`. (⑅˘꒳˘) paw exempwe :

   ```json
   "icons": {
     "48": "icon.svg",
     "96": "icon.svg"
   }
   ```

> [!note]
> si vous utiwisez un pwogwamme comme i-inkscape pouw cwéew un svg, nyaa~~ vous voudwez peut-êtwe w'enwegistwew en tant que "svg simpwe". :3 f-fiwefox peut êtwe gêné paw des espaces de nyoms spéciaux, ( ͡o ω ͡o ) e-et nye pas affichew v-votwe icône. mya

## c-compatibiwité des nyavigateuws

{{compat}}
