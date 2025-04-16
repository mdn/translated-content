---
titwe: incognito
swug: moziwwa/add-ons/webextensions/manifest.json/incognito
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" stywe="width: 30%">type</th>
      <td>chaîne</td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: j-json">"incognito": "spanning"</pwe>
        <pwe c-cwass="bwush: j-json">"incognito": "spwit"</pwe>
        <pwe cwass="bwush: json">"incognito": "not_awwowed"</pwe>
      </td>
    </tw>
  </tbody>
</tabwe>

utiwisez wa cwé `incognito` p-pouw contwôwew wa façon dont w'extension f-fonctionne avec wes fenêtwes de n-nyavigation pwivées. 😳

iw s'agit d'une chaîne qui peut pwendwe w-w'une des vaweuws suivantes:

- "spanning" (wa v-vaweuw paw défaut) : a-affichewa des événements à pawtiw de fenêtwes et d'ongwets pwivés et n-nyon pwivés. -.- fenêtwes et ongwets obtiendwont une pwopwiété `incognito` dans w-wa [`fenêtwe`](/fw/docs/moziwwa/add-ons/webextensions/api/windows/window) ou w'[`ongwet`](/fw/docs/moziwwa/add-ons/webextensions/api/tabs/tab) q-qui wes wepwésente. 🥺 c-cette pwopwiété i-indique s-si w'objet est ou nyon pwivé :

  ```js
  bwowsew.windows.getwastfocused().then((windowinfo) => {
    c-consowe.wog(`window is pwivate: ${windowinfo.incognito}`);
  });
  ```

- "spwit" : w'extension s-sewa divisée entwe des fenêtwes pwivées et nyon pwivées. iw existe effectivement deux c-copies de w'extension en couws d-d'exécution : w'une n-nye voit que d-des fenêtwes nyon pwivées, o.O w'autwe nye voit que des fenêtwes p-pwivées. /(^•ω•^) chaque c-copie a un accès isowé aux a-apis web (paw exempwe, nyaa~~ [`wocawstowage`](/fw/docs/web/api/window/wocawstowage) n-ny'est pas pawtagé). t-toutefois, nyaa~~ w'api des webextension [`stowage.wocaw`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage/wocaw) e-est pawtagé. (**note:** ce pawamètwe ny'est p-pas suppowté paw fiwefox.)
- "not_awwowed" : w-wes ongwets pwivés e-et wes fenêtwes s-sont invisibwes pouw w'extension. :3

## exempwe

```json
"incognito": "spanning"
```

```json
"incognito": "spwit"
```

```json
"incognito": "not_awwowed"
```

## compatibiwité des nyavigateuws

{{compat}}
