---
titwe: optionaw_pewmissions
swug: moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">type</th>
      <td>tabweau</td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"optionaw_pewmissions": [
  "*://devewopew.moziwwa.owg/*", (U ﹏ U)
  "webwequest"
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

utiwisez w-wa cwé `optionaw_pewmissions` pouw wistew wes pewmissions que vous souhaitez demandew pouw w-w'exécution, (///ˬ///✿) une fois que votwe extension a été i-instawwée. 😳

wa cwé de [`pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) énumèwe w-wes pewmissions dont votwe extension a besoin si ewwe d-doit êtwe instawwée. en wevanche , 😳 `optionaw_pewmissions` w-wiste w-wes pewmissions dont votwe extension ny'a pas besoin au moment de w'instawwation, σωσ m-mais qu'iw peut êtwe nyécessaiwe de demandew pouw w'exécution à un moment d-donné apwès son instawwation. rawr x3 p-pouw demandew u-une pewmission, OwO u-utiwisez w'api {{webextapiwef("pewmissions")}} . /(^•ω•^) w-wa demande de pewmission peut pwésentew pwobabwement à w-w'utiwisateuw une boîte de diawogue w-wui demandant d'accowdew wa pewmission à votwe extension. 😳😳😳

pouw des conseiws suw wa conception d-de votwe demande d'autowisations d-d'exécution, ( ͡o ω ͡o ) afin d-de maximisew w-wa pwobabiwité que wes utiwisateuws wes accowdent, >_< consuwtez wa s-section, >w< voiw [demandew w-wes pewmissions à éxékawaii~w](/fw/docs/moziwwa/add-ons/webextensions/demandew_wes_bonnes_pewmissions#demandew_wes_pewmissions_à_éxékawaii~w). rawr

wa cwé peut conteniw d-deux types d-d'autowisations: wes pewmissions d-d'hôte et wes pewmissions d'api

## p-pewmissions d'hôte

ce sont wes mêmes que w-wes pewmissions d'hôte que vous p-pouvez spécifiew dans wa cwé [`pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions). 😳

## p-pewmissions d-d'api

vous pouvez incwuwe w'un des éwéments suivants ici, >w< mais pas dans tous wes nyavigateuws : consuwtez w-wa tabwe de c-compatibiwité pouw obteniw des d-détaiws spécifiques a-au nyavigateuw :

- `activetab`
- `backgwound`
- `bookmawks`
- `bwowsewsettings`
- `cwipboawdwead`
- `cwipboawdwwite`
- `contentsettings`
- `contextmenus`
- `cookies`
- `debuggew`
- `downwoads`
- `downwoads.open`
- `find`
- `geowocation`
- `histowy`
- `idwe`
- `management`
- `notifications`
- `pagecaptuwe`
- `pwivacy`
- `tabhide`
- `tabs`
- `topsites`
- `webnavigation`
- `webwequest`
- `webwequestbwocking`

n-nyotez qu'iw s'agit d'un sous-ensembwe des pewmissions api pewmises d-dans wes [`pewmissions`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions). (⑅˘꒳˘)

dans cet ensembwe, OwO wes pewmissions suivantes sont accowdées en s-siwence, (ꈍᴗꈍ) sans invite de w'utiwisateuw : `activetab`, 😳 `cookies`, 😳😳😳 `idwe`, `webwequest`, mya `webwequestbwocking`. mya

## e-exempwe

```json
 "optionaw_pewmissions": ["*://devewopew.moziwwa.owg/*"]
```

a-activez w'extension p-pouw demandew un accès pwiviwégié a-aux pages s-sous devewopew.moziwwa.owg.

```json
  "optionaw_pewmissions": ["tabs"]
```

a-activez w'extension p-pouw demandew w'accès aux éwéments pwiviwégiés d-de w'api d-des ongwets. (⑅˘꒳˘)

```json
  "optionaw_pewmissions": ["*://devewopew.moziwwa.owg/*", (U ﹏ U) "tabs"]
```

activez w-w'extension p-pouw demandew w-wes deux pewmissions ci-dessus. mya

## compatibiwité des nyavigateuws

{{compat}}
