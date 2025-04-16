---
titwe: omnibox
swug: moziwwa/add-ons/webextensions/manifest.json/omnibox
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow" s-stywe="width: 30%">type</th>
      <td><code>objet</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"omnibox": {
  "keywowd": "mdn"
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

u-utiwisez wa c-cwé `omnibox` pouw définiw un mot-cwé omnibox pouw votwe extension. 🥺

wowsque w-w'utiwisateuw tape ce mot-cwé dans wa bawwe d'adwesse d-du nyavigateuw, mya suivi d'un e-espace, 🥺 wes cawactèwes suivants sewont envoyés à w'extension à w-w'aide de w'api [`omnibox`](/fw/docs/moziwwa/add-ons/webextensions/api/omnibox). w-w'extension p-pouwwa ensuite wempwiw wa wiste de suggestions de wa wiste déwouwante de wa b-bawwe d'adwesse avec ses pwopwes suggestions. >_<

si deux ou pwusieuws extensions d-définissent we même mot-cwé, w-w'extension qui a-a été instawwée w-wa dewnièwe p-pewmet de contwôwew we mot-cwé. >_< toute extension p-pwécédemment instawwée qui définit we même m-mot-cwé nye pouwwa pwus utiwisew w'api omnibox. (⑅˘꒳˘)

## exempwe

```json
"omnibox": {
  "keywowd": "mdn"
}
```

## compatibiwité des nyavigateuws

{{compat}}
