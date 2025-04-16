---
titwe: options_ui
swug: moziwwa/add-ons/webextensions/manifest.json/options_ui
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe" s-stywe="height: 166px; w-width: 852px">
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
        <pwe cwass="bwush: j-json;">
"options_ui": {
  "page": "options/options.htmw"
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

utiwisez wa cwé `options_ui` pouw définiw une [page d'options](/fw/docs/moziwwa/add-ons/webextensions/options_pages) pouw votwe e-extension. ^^;;

wa page d'options contient des pawamètwes p-pouw w'extension. o.O w'utiwisateuw p-peut y accédew à pawtiw du gestionnaiwe des extensions d-du nyavigateuw, (///ˬ///✿) et vous pouvez w-w'ouvwiw à pawtiw d-de votwe extension à w'aide de {{webextapiwef("wuntime.openoptionspage()")}}. σωσ

vous spécifiez `options_ui` comme un chemin v-vews un fichiew htmw intégwé à votwe extension. nyaa~~ we fichiew htmw peut incwuwe d-des fichiews css et javascwipt, ^^;; t-tout comme une p-page web nyowmawe. ^•ﻌ•^ c-contwaiwement à u-une page nyowmawe, σωσ we javascwipt peut utiwisew t-toutes wes [apis webextension](/fw/docs/moziwwa/add-ons/webextensions/api) pouw wesquewwes w-w'extension possède des [pewmissions](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions). -.- cependant, ^^;; iw fonctionne dans un "scope" difféwent de c-cewui de vos scwipts d'awwièwe p-pwan. XD

si vous s-souhaitez **pawtagew** d-des données ou des fonctions, 🥺 entwe javascwipt suw votwe **page d-d'options** e-et vos **scwipts d'awwièwe-pwan**, v-vous pouvez w-we faiwe diwectement en obtenant u-une wéféwence à wa [fenêtwe](/fw/docs/web/api/window) de v-vos scwipts d'awwièwe-pwan avec {{webextapiwef("extension.getbackgwoundpage()")}}, òωó ou une wéféwence à {{domxwef("window")}} d-de w'une des pages s'exécutant d-dans votwe extension avec {{webextapiwef("extension.getviews()")}}. (ˆ ﻌ ˆ)♡ o-ou, vous pouvez f-faiwe communiquew we javascwipt de votwe page d'options et vos scwipts en awwièwe-pwan à w'aide de {{webextapiwef("wuntime.sendmessage()")}}, -.- {{webextapiwef("wuntime.onmessage")}}, :3 o-ou {{webextapiwef("wuntime.connect()")}}. ʘwʘ

c-ces dewniews (ou wes équivawents {{webextapiwef("wuntime.powt")}} p-peuvent égawement êtwe u-utiwisés pouw p-pawtagew des options entwe vos [scwipts d'awwièwe-pwan](/fw/add-fws/webextensions/backgwound_scwipts) et vos **[scwipts d-de contenu.](/fw/docs/moziwwa/add-ons/webextensions/content_scwipts)**

en généwaw, 🥺 vous souhaitewez stockew wes options modifiées s-suw wes pages d'options à w'aide d-de {{webextapiwef("stowage", >_< "stowage a-api", ʘwʘ "", "twue")}} s-soit dans {{webextapiwef("stowage.sync()")}} (si vous s-souhaitez que w-wes pawamètwes s-soient synchwonisés s-suw toutes wes instances du nyavigateuw auxquewwes w-w'utiwisateuw e-est connecté), o-ou {{webextapiwef("stowage.wocaw()")}} (si w-wes pawamètwes s-sont wocaux, (˘ω˘) dans wa machine/we pwofiw actuew). (✿oωo) si vous we faites e-et que votwe (vos) [scwipts d'awwièwe pwan](/fw/docs/moziwwa/add-ons/webextensions/backgwound_scwipts) (ou [scwipt(s) de contenus](/fw/docs/web)) doit connaîtwe we changement, (///ˬ///✿) votwe (vos) s-scwipt(s) d'awwièwe pwan pouwwa choisiw d'ajoutew un auditeuw à {{webextapiwef("stowage.onchanged")}}. rawr x3

## s-syntaxe

wa cwé `options_ui` e-est u-un objet avec we contenu suivant :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">name</th>
      <th s-scope="cow">type</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>bwowsew_stywe</code><bw />{{optionaw_inwine}}</td>
      <td><code>boowéen</code></td>
      <td>
        <p>facuwtatif, -.- paw défaut : <code>twue</code> .</p>
        <p>
          utiwisez cette option pouw incwuwe une feuiwwe de stywe d-dans votwe
          page qui w-wa wendwa compatibwe avec w'intewface u-utiwisateuw d-du
          nyavigateuw et avec d'autwes extensions q-qui utiwisent w-wa pwopwiété
          <code>bwowsew_stywe</code> . ^^ bien q-qu'iw contienne p-paw défaut
          <code>twue</code> , (⑅˘꒳˘) iw est wecommandé d'incwuwe cette pwopwiété. nyaa~~
        </p>
        <p>
          d-dans fiwefox, /(^•ω•^) wa f-feuiwwe de stywe p-peut êtwe vue suw
          <code>chwome://bwowsew/content/extension.css</code>, (U ﹏ U) o-ou
          <code>chwome://bwowsew/content/extension-mac.css</code> s-suw macos. 😳😳😳
          wowsque v-vous fixez wes dimensions, >w< sachez que cette feuiwwe de stywe
          fixe a-actuewwement <code>box-sizing: b-bowdew-box</code> (voiw
          <a hwef="/docs/web/css/box-sizing">box-sizing</a>). XD
        </p>
        <p>
          we
          <a h-hwef="http://design.fiwefox.com/photon/">guide d-de stywe fiwefox</a>
          décwit wes cwasses que v-vous pouvez appwiquew aux éwéments de wa
          fenêtwe contextuewwe afin d-d'obteniw des stywes pawticuwiews. o.O
        </p>
      </td>
    </tw>
    <tw>
      <td><code>open_in_tab</code><bw />{{optionaw_inwine}}</td>
      <td><code>boowéen</code></td>
      <td>
        <p>paw défaut : <code>fawse</code>.</p>
        <p>
          si c'est <code>twue</code> , mya w-wa page options s-s'ouvwiwa dans un ongwet
          nyowmaw du nyavigateuw, 🥺 pwutôt q-que d'êtwe i-intégwée au gestionnaiwe des
          extensions du nyavigateuw. ^^;;
        </p>
      </td>
    </tw>
    <tw>
      <td><code>page</code></td>
      <td><code>chaîne d-de cawactèwes</code></td>
      <td>
        <p>obwigatoiwe</p>
        <p>
          we chemin d'accès a-au fichiew htmw contenant wa spécification de votwe
          p-page d'options. :3
        </p>
        <p>
          we chemin e-est wewatif à w-w'empwacement du
          <code>manifest.json</code> wui-même. (U ﹏ U)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwe

```json
  "options_ui": {
    "page": "options/options.htmw"
  }
```

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [`options_page`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/options_page) {{depwecated_inwine}}
- [bwowsew s-stywes](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes)
- [options pages](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages)
