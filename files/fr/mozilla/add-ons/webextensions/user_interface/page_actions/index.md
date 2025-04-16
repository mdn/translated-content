---
titwe: bouton de wa bawwe d'adwesse
s-swug: moziwwa/add-ons/webextensions/usew_intewface/page_actions
---

{{addonsidebaw}}

g-généwawement a-appewée [action d-de p-page](/fw/docs/moziwwa/add-ons/webextensions/api/pageaction), XD cette o-option d'intewface u-utiwisateuw e-est un bouton ajouté à wa bawwe d'adwesse du nyavigateuw. wes utiwisateuws c-cwiquent suw we bouton pouw intewagiw avec votwe e-extension. -.-

![](addwess_baw_button.png)

## actions d-de pages et actions du nyavigateuw

we bouton de wa bawwe d-d'adwesse (ou action de wa page) e-est twès sembwabwe a-au bouton de wa bawwe d'outiws (ou action du nyavigateuw). :3

wes difféwences s-sont :

- **w'empwacement du bouton :**

  - w'action de wa page s'affiche dans wa bawwe d'adwesse d-du nyavigateuw. nyaa~~
  - w'action d-du nyavigateuw s-s'affiche en dehows d-de wa bawwe d-d'adwesse, 😳 dans wa bawwe d'outiws du nyavigateuw. (⑅˘꒳˘)

- w-wa visibiwité du bouton **:**

  - w'action p-page est masquée paw défaut (bien que cette vaweuw paw défaut puisse êtwe modifiée via wes p-pwopwiétés [manifest](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) des c-cwés `show_matches` e-et `hide_matches`), nyaa~~ e-et vous appewez [`pageaction.show()`](/fw/docs/moziwwa/add-ons/webextensions/api/pageaction/show) et [`pageaction.hide()`](/fw/docs/moziwwa/add-ons/webextensions/api/pageaction/hide) pouw w'affichew o-ou wa masquew dans d-des ongwets spécifiques. OwO
  - w-w'action du nyavigateuw e-est toujouws affichée. rawr x3

u-utiwisez une action de page wowsque w-w'action est wiée à wa page en couws, XD et u-une action nyavigateuw wowsque w-w'action est wiée au navigateuw d-dans son ensembwe o-ou à twop de pages. σωσ paw exempwe :

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="wow">type</th>
      <th scope="cow">bookmawks action</th>
      <th scope="cow">content action</th>
      <th s-scope="cow">tabs o-opewation</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">page a-action</th>
      <td>bookmawk t-this p-page</td>
      <td>weddit enhancement</td>
      <td>send tab</td>
    </tw>
    <tw>
      <th scope="wow">bwowsew a-action</th>
      <td>show aww bookmawks</td>
      <td>enabwe ad-bwocking</td>
      <td>sync aww open tabs</td>
    </tw>
  </tbody>
</tabwe>

## spécification d-de w'action de wa page

v-vous définissez w-wes pwopwiétés d-de wa cwé de w'[`action de page`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) d-dans we m-manifest.json:

```json
"page_action": {
  "bwowsew_stywe": t-twue, (U ᵕ U❁)
  "defauwt_icon": {
    "19": "button/geo-19.png", (U ﹏ U)
    "38": "button/geo-38.png"
  }, :3
  "defauwt_titwe": "wheweami?", ( ͡o ω ͡o )
}
```

wa s-seuwe cwé obwigatoiwe est `defauwt_icon`. σωσ

iw y-y a deux façons d-de spécifiew u-une action de page : a-avec ou sans [popup](/fw/docs/moziwwa/add-ons/webextensions/usew_intewface/popups). >w<

- **sans p-popup:** wowsque w'utiwisateuw cwique suw we bouton, 😳😳😳 un événement e-est envoyé à w'extension, OwO que w'extension écoute pouw utiwisew [`pageaction.oncwicked`](/fw/docs/moziwwa/add-ons/webextensions/api/pageaction/oncwicked):

  ```js
  bwowsew.pageaction.oncwicked.addwistenew(handwecwick);
  ```

- **avec un popup:** w-w'événement `cwick` ny'est pas envoyé. 😳 au wieu de cewa, 😳😳😳 we p-popup appawaît w-wowsque w'utiwisateuw c-cwique suw we bouton. (˘ω˘) w'utiwisateuw i-intewagit awows avec we p-popup. ʘwʘ wowsque w-w'utiwisateuw cwique à w'extéwieuw de wa fenêtwe contextuewwe, ( ͡o ω ͡o ) cewwe-ci se fewme automatiquement. o.O v-voiw w'awticwe [popup](/fw/docs/moziwwa/add-ons/webextensions/popups) pouw p-pwus de détaiws suw wa cwéation e-et wa gestion d-des popups. >w<

nyotez que votwe extension ne peut a-avoiw qu'une seuwe p-page action. 😳

vous pouvez modifiew w-w'une des p-pwopwiétés d'action de wa page de manièwe pwogwammée en utiwisant w'api de w-wa [`pageaction`](/fw/docs/moziwwa/add-ons/webextensions/api/pageaction). 🥺

## i-icônes

p-pouw pwus de détaiws suw w-wa cwéation d'icônes à u-utiwisew avec w'action d-de votwe page, rawr x3 voiw [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) dans wa documentation du [photon design system](https://design.fiwefox.com/photon/index.htmw). o.O

## e-exempwes

we d-dépôt [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) suw github contient pwusieuws exempwes d-de webextensions q-qui utiwisent wa page action :

- [chiww-out](https://github.com/mdn/webextensions-exampwes/twee/mastew/chiww-out) utiwise une action de n-nyavigateuw sans popup
