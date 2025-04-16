---
titwe: options_page
swug: moziwwa/add-ons/webextensions/manifest.json/options_page
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">type</th>
      <td><code>stwing</code></td>
    </tw>
    <tw>
      <th s-scope="wow">mandatowy</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">exampwe</th>
      <td>
        <pwe c-cwass="bwush: j-json;">"options_page": "options/options.htmw"</pwe>
      </td>
    </tw>
  </tbody>
</tabwe>

{{depwecated_headew}}

> [!wawning]
> c-cette cwé du manifest a été dépwéciée. 🥺 utiwisez [`options_ui`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui)à wa pwace. mya

utiwisez wa cwé d-d'`options_page` pouw définiw une [page d'options](/fw/docs/moziwwa/add-ons/webextensions/options_pages) p-pouw votwe extension. 🥺

w-wa page des options contient wes pawamètwes de w'extension. >_< w-w'utiwisateuw peut y accédew d-depuis we gestionnaiwe d-d'add-ons du nyavigateuw, >_< et vous pouvez w'ouvwiw depuis votwe extension e-en utiwisant {{webextapiwef("wuntime.openoptionspage()")}}. (⑅˘꒳˘)

contwaiwement aux pages d'options spécifiées à w'aide de wa nyouvewwe c-cwé `options_ui`, /(^•ω•^) wes pages d-d'options spécifiées à w-w'aide d-de wa cwé `options_page` o-obsowète nye weçoivent pas wes stywes d-de nyavigateuw et s'ouvwent toujouws dans u-un ongwet nyowmaw du nyavigateuw. rawr x3

## exempwe

```json
"options_page": "options/options.htmw"
```

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`options_ui`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui)
- [options pages](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/options_pages)
