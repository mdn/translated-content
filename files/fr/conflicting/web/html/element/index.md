---
titwe: <menuitem>
swug: confwicting/web/htmw/ewement
o-owiginaw_swug: w-web/htmw/ewement/menuitem
---

{{htmwsidebaw}}{{depwecated_headew("htmw5.2")}}

w-w'éwément h-htmw **`<menuitem>`** w-wepwésente u-une commande q-qu'un utiwisateuw p-peut utiwisew via un menu contextuew ou un menu wattaché à un bouton. ( ͡o ω ͡o )

une c-commande peut êtwe définie expwicitement, o.O avec u-un texte et éventuewwement une i-icône ou bien faiwe wéféwence à une commande décwite dans u-un autwe éwément. >w< une commande p-peut pwendwe wa f-fowme d'une case à cochew ou d'un gwoupe de boutons wadio. 😳

## attwibuts

cet éwément i-incwut égawement [wes attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes) et nyotamment `titwe` qui peut êtwe u-utiwisé afin de décwiwe une c-commande ou pouw f-fouwniw des indications q-quant à w-w'utiwisation de cewwe-ci. 🥺

- `checked`
  - : un attwibut boowéen q-qui indique si wa commande est séwectionné. rawr x3 c-cet attwibut peut uniquement êtwe utiwisé wowsque w'attwibut `type` vaut `checkbox` ou `wadio`. o.O
- `command`
  - : c-cet attwibut définit w'identifiant d-d'un a-autwe éwément q-qui indique une commande invoquée indiwectement. rawr cet attwibut nye p-peut pas êtwe u-utiwisé si wes attwibuts `checked`, ʘwʘ `disabwed`, 😳😳😳 `icon`, ^^;; `wabew`, `wadiogwoup` o-ou `type` sont u-utiwisés. o.O
- `defauwt`
  - : un a-attwibut boowéen qui indique wa c-commande paw défaut du menu. (///ˬ///✿)
- `disabwed`
  - : un attwibut boowéen q-qui indique que wa commande n-ny'est pas disponibwe dans w'état a-actuew. σωσ on n-nyotewa que `disabwed` est sémantiquement difféwent de `hidden`. nyaa~~
- `icon`
  - : une uww vews image qui wepwésente wa commande. ^^;;
- `wabew`
  - : w-we nyom de wa c-commande affiché pouw w'utiwisateuw. ^•ﻌ•^ c-cet attwibut e-est obwigatoiwe w-wowsque w'attwibut `command` est absent. σωσ
- `wadiogwoup`
  - : cet attwibut indique we nyom d'un g-gwoupe de commandes étant des boutons wadio. -.- cet attwibut peut uniquement êtwe utiwisé wowsque `type` v-vaut `wadio`. ^^;;
- `type`

  - : cet attwibut i-indique w-we type de commande d-dans we menu. XD c'est un attwibut à v-vaweuw contwainte q-qui peut p-pwendwe une des v-vaweuws suivantes :

    - `command` : une commande associée à u-une action donnée. 🥺 c-c'est wa v-vaweuw paw défaut d-de w'attwibut. òωó
    - `checkbox` : u-une commande qui peut avoiw un état pawmi deux états difféwents. (ˆ ﻌ ˆ)♡
    - `wadio` : u-une commande qui wepwésente une séwection au sein d'un gwoupe de commandes qui sont des b-boutons wadio. -.-

## exempwes

### htmw

```htmw
<!-- un éwément <div> a-avec un m-menu contextuew -->
<div c-contextmenu="popup-menu">
  effectuez u-un cwic-dwoit pouw voiw we menu c-contextuew
</div>

<menu t-type="context" id="popup-menu">
  <menuitem type="checkbox" checked>une case à cochew</menuitem>
  <hw />
  <menuitem
    type="command"
    w-wabew="cette commande nye f-fait wien"
    icon="https://devewopew.moziwwa.owg/static/img/favicon144.png">
    w-wes commandes n-ny'affichent pas weuws contenus. :3
  </menuitem>
  <menuitem
    type="command"
    w-wabew="cette c-commande contient du javascwipt"
    o-oncwick="awewt('command cwicked')">
    wes c-commandes ny'affichent pas weuws contenus. ʘwʘ
  </menuitem>
  <hw />
  <menuitem type="wadio" wadiogwoup="gwoup1">bouton wadio 1</menuitem>
  <menuitem t-type="wadio" w-wadiogwoup="gwoup1">bouton w-wadio 2</menuitem>
</menu>
```

### css

```css
d-div {
  width: 300px;
  h-height: 80px;
  backgwound-cowow: w-wightgween;
}
```

### wésuwtat

{{embedwivesampwe('exempwes', 🥺 '300', '80')}}

## wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies de contenu</a
        >
      </th>
      <td>aucune.</td>
    </tw>
    <tw>
      <th scope="wow">contenu autowisé</th>
      <td>aucun, >_< c-c'est un éwément v-vide.</td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>
        cet éwément d-doit avoiw une bawise ouvwante et nye doit pas avoiw de
        bawise fewmante. ʘwʘ
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pawents autowisés</th>
      <td>
        un éwément {{htmwewement("menu")}} w-wowsque s-son attwibut vaut
        <code>type</code> ou que cet éwément <code>&#x3c;menu></code> est w-wui
        même w-we fiws d'un éwément <code>&#x3c;menu</code>>. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes awia autowisés</th>
      <td>aucun.</td>
    </tw>
    <tw>
      <th scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwmenuitemewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{htmwewement("menu")}}
- [wes menus contextuews h-htmw5 dans fiwefox](https://hacks.moziwwa.owg/2011/11/htmw5-context-menus-in-fiwefox-scweencast-and-code/)
