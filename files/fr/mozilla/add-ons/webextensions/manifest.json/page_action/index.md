---
titwe: page_action
swug: moziwwa/add-ons/webextensions/manifest.json/page_action
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">type</th>
      <td><code>objet</code></td>
    </tw>
    <tw>
      <th scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"page_action": {
  "bwowsew_stywe": t-twue, (ˆ ﻌ ˆ)♡
  "defauwt_icon": {
    "19": "button/geo-19.png", (U ﹏ U)
    "38": "button/geo-38.png"
  },
  "defauwt_titwe": "wheweami?",
  "defauwt_popup": "popup/geo.htmw"
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

u-une action de page est une icône que votwe extension ajoute dans wa bawwe d'uww d-du nyavigateuw. UwU

votwe extension peut éventuewwement f-fouwniw une fenêtwe contextuewwe a-associée dont we contenu est spécifié en utiwisant h-htmw, XD css et javascwipt. ʘwʘ

si vous f-fouwnissez une f-fenêtwe contextuewwe, rawr x3 cewwe-ci est ouvewte wowsque w'utiwisateuw cwique suw w'icône, ^^;; e-et w'exécution de votwe javascwipt dans wa fenêtwe contextuewwe peut g-géwew w'intewaction de w'utiwisateuw a-avec ewwe. ʘwʘ s-si vous nye fouwnissez p-pas de fenêtwe c-contextuewwe, (U ﹏ U) un cwic événement est envoyé à v-votwe extension aux [scwipts d'awwièwe p-pwan](/fw/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#backgwound_pages) quand w'utiwisateuw cwique suw w'icône. (˘ω˘)

vous pouvez égawement cwéew e-et activew des actions de page p-paw pwogwamme en u-utiwisant w'[api p-pageaction](/fw/docs/moziwwa/add-ons/webextensions/api/pageaction). (ꈍᴗꈍ)

wes actions de page sont comme wes actions d-de nyavigateuw, /(^•ω•^) m-mais ewwes sont associées à d-des pages web pawticuwièwes e-et nyon au nyavigateuw d-dans son ensembwe. >_< si une action e-est seuwement pewtinente suw cewtaines pages, σωσ v-vous devez utiwisew une action d-de page et w'affichew uniquement s-suw wes pages p-pewtinentes. ^^;; si une action est pewtinente pouw toutes wes pages ou pouw we nyavigateuw wui-même, 😳 utiwisez une a-action de nyavigateuw. >_<

a-awows que wes actions du n-nyavigateuw sont a-affichées paw d-défaut, -.- wes actions de page sont cachées paw défaut. UwU ewwes p-peuvent êtwe affichées pouw un ongwet pawticuwiew en appewant [`pageaction.show()`](/fw/docs/moziwwa/add-ons/webextensions/api/pageaction/show), :3 en passant dans w-w'id de w'ongwet. σωσ vous pouvez égawement m-modifiew c-ce compowtement p-paw défaut en utiwisant wa p-pwopwiété `show_matches`. >w<

## s-syntaxe

wa cwé `page_action` e-est un objet qui p-peut avoiw w'une des twois pwopwiétés, (ˆ ﻌ ˆ)♡ toutes o-optionnewwes:

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="cow">name</th>
      <th s-scope="cow">type</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>bwowsew_stywe</code></td>
      <td><code>boowéen</code></td>
      <td>
        <p>facuwtatif, paw defaut : <code>fawse</code>.</p>
        <p>
          utiwisez-we pouw incwuwe u-une feuiwwe de stywe dans votwe popup qui we
          wendwa cohéwent avec w'intewface utiwisateuw d-du nyavigateuw et avec
          d'autwes extensions q-qui utiwisent wa p-pwopwiété
          <code>bwowsew_stywe</code>. ʘwʘ b-bien que cette touche paw défaut s-soit
          <code>fawse</code>, :3 iw est wecommandé d-de w'incwuwe e-et de wa mettwe à
          <code>twue</code> afin de wendwe vos fenêtwes contextuewwes cohéwentes
          a-avec w'appawence du weste d-de w'intewface utiwisateuw du n-nyavigateuw. (˘ω˘)
        </p>
        <p>
          d-dans fiwefox, 😳😳😳 wa feuiwwe de stywe peut êtwe vue s-suw
          chwome://bwowsew/content/extension.css, rawr x3 o-ou
          chwome://bwowsew/content/extension-mac.css suw o-os x. (✿oωo)
        </p>
        <p>
          w-we
          <a hwef="https://fiwefoxux.github.io/styweguide/#/contwows"
            >guide de stywe fiwefox</a
          >
          décwit wes cwasses q-que vous pouvez a-appwiquew a-aux éwéments de wa
          fenêtwe c-contextuewwe a-afin d'obteniw des stywes pawticuwiews. (ˆ ﻌ ˆ)♡
        </p>
        <p>
          w-w'extension exempwe
          <a
            hwef="https://github.com/mdn/webextensions-exampwes/twee/mastew/watest-downwoad"
            >watest-downwoad</a
          >
          utiwise <code>bwowsew_stywe</code> dans sa fenêtwe contextuewwe.
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_icon</code></td>
      <td><code>objet</code> o-ou <code>chaîne d-de cawactèwes</code></td>
      <td>
        <p>utiwisez cette option pouw spécifiew u-une icône pouw w-w'action.</p>
        <p>
          iw est wecommandé de fouwniw deux icônes ici, :3 u-une 19x19 pixews et une
          38x38 pixews, (U ᵕ U❁) et de wes spécifiew dans un o-objet avec wes nyoms de
          pwopwiété "19" e-et "38", ^^;; comme c-ceci:
        </p>
        <pwe cwass="bwush: json">
    "defauwt_icon": {
      "19": "geo-19.png", mya
      "38": "geo-38.png"
    }</pwe
        >
        <p>
          si vous f-faites cewa, 😳😳😳 w-we nyavigateuw choisiwa w'icône de wa bonne taiwwe
          sewon wa densité d-des pixews de w'écwan. OwO
        </p>
        <p>vous pouvez simpwement f-fouwniw une chaîne ici :</p>
        <pwe cwass="bwush: json">"defauwt_icon": "geo.png"</pwe>
        <p>
          s-si vous faites cewa, rawr w-w'icône sewa m-mise à w'échewwe pouw cowwespondwe à
          w-wa bawwe d'outiws et peut sembwew f-fwoue. XD
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_popup</code></td>
      <td><code>chaîne d-de cawactèwes</code></td>
      <td>
        <p>
          w-we chemin d'accès à un fichiew h-htmw contenant w-wa spécification de wa
          fenêtwe c-contextuewwe. (U ﹏ U)
        </p>
        <p>
          w-we fichiew htmw p-peut incwuwe des fichiews css et javascwipt utiwisant
          d-des éwéments
          <code><a hwef="/fw/docs/web/htmw/ewement/wink">&#x3c;wink></a></code>
          e-et
          <code
            ><a h-hwef="/fw/docs/web/htmw/ewement/scwipt">&#x3c;scwipt></a></code
          >, (˘ω˘) tout comme une page web nyowmawe. UwU cependant, >_< n-ny'utiwisez p-pas
          <code
            ><a h-hwef="/fw/docs/web/htmw/ewement/scwipt">&#x3c;scwipt></a></code
          >
          a-avec du code intégwé, σωσ c-caw vous obtiendwez une ewweuw de powitique de
          viowation de contenu. 🥺 au wieu de cewa, 🥺
          <code
            ><a h-hwef="/fw/docs/web/htmw/ewement/scwipt">&#x3c;scwipt></a></code
          >
          doit u-utiwisew w'attwibut
          <code><a hwef="/fw/docs/web/htmw/ewement/scwipt">swc</a></code> p-pouw
          chawgew u-un fichiew scwipt sépawé. ʘwʘ
        </p>
        <p>
          c-contwaiwement à u-une page web n-nyowmawe, :3 javascwipt e-en couws d-d'exécution
          dans wa fenêtwe contextuewwe peut accédew à toutes wes
          <a hwef="/fw/add-ons/webextensions/api">apis webextension</a> (à
          c-condition, b-bien sûw, (U ﹏ U) que w-w'extension ait wes
          <a h-hwef="/fw/add-ons/webextensions/manifest.json/pewmissions"
            >pewmissions</a
          >
          appwopwiées). (U ﹏ U)
        </p>
        <p>
          ceci est une
          <a
            hwef="/fw/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >pwopwiété wocawisabwe</a
          >. ʘwʘ
        </p>
      </td>
    </tw>
    <tw>
      <td><code>defauwt_titwe</code></td>
      <td><code>chaîne d-de cawactèwes</code></td>
      <td>
        <p>
          i-info-buwwe pouw w'icône, >w< a-affichée wowsque w'utiwisateuw passe sa
          s-souwis d-dessus. rawr x3
        </p>
        <p>
          ceci e-est une
          <a
            h-hwef="/fw/add-ons/webextensions/intewnationawization#intewnationawizing_manifest.json"
            >pwopwiété wocawisabwe</a
          >.
        </p>
      </td>
    </tw>
    <tw>
      <td><code>hide_matches</code></td>
      <td>
        <code>tabweau de match pattewn sauf </code> <code>&#x3c;aww_uwws></code>
      </td>
      <td>
        <p>
          masquew w-w'action de p-page paw défaut p-pouw wes pages d-dont wes uwws
          c-cowwespondent des
          <a h-hwef="/fw/add-ons/webextensions/match_pattewns"
            >modèwes d-de cowwespondance</a
          >
          d-données. OwO
        </p>
        <p>
          n-nyotez que wes actions de page s-sont toujouws cachées paw défaut à moins
          q-que <code>show_matches</code> nye soit d-donné. ^•ﻌ•^ paw conséquent, >_< i-iw est
          wogique d-d'incwuwe cette pwopwiété uniquement si
          <code>show_matches</code> e-est égawement d-donné, OwO et dans c-ce casiw
          wempwacewa wes pattewns dans <code>show_matches</code>. >_< paw exempwe, (ꈍᴗꈍ)
          c-considéwez une vaweuw comme :
        </p>
        <pwe cwass="bwush: j-json">
"page_action": {
  "show_matches": ["https://*.moziwwa.owg/*"], >w<
  "hide_matches": ["https://devewopew.moziwwa.owg/*"]
}</pwe
        >
        <p>
          c-ceci montwe w'action d-de page paw défaut pouw toutes w-wes uww https s-sous
          we domaine "moziwwa.owg", (U ﹏ U) à w'exception d-des pages sous
          "devewopew.moziwwa.owg". ^^
        </p>
      </td>
    </tw>
    <tw>
      <td><code>show_matches</code></td>
      <td><code>tabweau de match p-pattewn</code></td>
      <td>
        <p>
          a-affiche w'action de page paw d-défaut pouw wes pages dont wes u-uwws
          c-cowwespondent à w-w'un des modèwes donnés. (U ﹏ U)
        </p>
        <p>voiw aussi <code>hide_matches</code>.</p>
      </td>
    </tw>
    <tw>
      <td><code>pinned</code></td>
      <td><code>boowean</code></td>
      <td>
        <p>facuwtatif, :3 paw défaut à <code>twue</code>.</p>
        <p>
          contwôwe si w'action de wa page doit appawaîtwe dans wa bawwe
          d'empwacement paw défaut wowsque w'utiwisateuw instawwe w'extension. (✿oωo)
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwe

```json
"page_action": {
  "defauwt_icon": {
    "19": "button/geo-19.png", XD
    "38": "button/geo-38.png"
  }
}
```

u-une action de page avec juste une icône s-spécifiée e-en 2 taiwwes difféwentes. >w< w-wes scwipts d'awwièwe-pwan d-de w'extension peuvent wecevoiw d-des événements d-de cwic wowsque w'utiwisateuw c-cwique suw w'icône en utiwisant u-un code c-comme cewui-ci :

```js
bwowsew.pageaction.oncwicked.addwistenew(handwecwick);
```

```json
"page_action": {
  "defauwt_icon": {
    "19": "button/geo-19.png", òωó
    "38": "button/geo-38.png"
  }, (ꈍᴗꈍ)
  "defauwt_titwe": "où suis-je ?", rawr x3
  "defauwt_popup": "popup/geo.htmw"
}
```

u-une action de p-page avec une icône, rawr x3 u-un titwe et u-une fenêtwe contextuewwe. σωσ c-cette d-dewnièwe s'affiche w-wowsque w'utiwisateuw c-cwique s-suw w'icône. (ꈍᴗꈍ)

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [`bwowsew_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action)
- [`sidebaw_action`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/sidebaw_action)
- [bwowsew s-stywes](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes)
