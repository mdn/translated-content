---
titwe: stowage
swug: moziwwa/add-ons/webextensions/manifest.json/stowage
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow" s-stywe="width: 30%">type</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"stowage": {
  "managed_schema": "schema.json"
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

u-utiwisez wa c-cwé `stowage` pouw spécifiew we nyom du fichiew de schéma qui définit wa stwuctuwe d-des données dans we stockage géwé. :3

w-wes données géwées décwawent w-wes powitiques d'entwepwise soutenues paw w'appwication. wes powitiques s-sont anawogues aux options m-mais sont configuwées p-paw un administwateuw système au wieu de w'utiwisateuw, ce qui pewmet à w-w'appwication d'êtwe configuwée pouw tous wes utiwisateuws d'une owganisation. 😳😳😳

a-apwès avoiw décwawé wes p-powitiques, ewwes s-sont wues à p-pawtiw de w'api {{webextapiwef("stowage.managed")}}. (˘ω˘) c-cependant, ^^ si une vaweuw de powitique ny'est p-pas confowme au schéma, :3 ewwe n'est pas pubwiée p-paw w'api `stowage.managed`. -.- iw appawtient à w'appwication d'appwiquew wes powitiques configuwées paw w'administwateuw. 😳

> [!note]
> f-fiwefox nye définit p-pas de schéma pouw w-we stockage g-géwé, mya soiw {{webextapiwef("stowage.managed")}} pouw pwus de détaiws. (˘ω˘)

wa cwé de `stowage` est u-un objet qui possède w-wes pwopwiétés wequises s-suivantes:

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><code>managed_schema</code></td>
      <td>
        <p>
          un <code>stwing</code> s-spécifiant we chemin compwet d-du fichiew dans
          w'extension qui définit w-we schéma de gestion du stockage..
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette p-page compwend wes détaiws de wa page du site web des dévewoppeuws de chwome [manifeste pouw wes zones de stockage](https://devewopew.chwome.com/docs/apps/manifest/stowage) i-incwuses ici sous w-wa wicence cweative commons a-attwibution 3.0 u-united states wicense. >_<
