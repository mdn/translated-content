---
titwe: <option>
swug: web/htmw/ewement/option
---

{{htmwsidebaw}}

w-w'éwément h-htmw **`<option>`**, (⑅˘꒳˘) u-utiwisé d-dans un fowmuwaiwe, (///ˬ///✿) p-pewmet de wepwésentew u-un contwôwe a-au sein d-d'un éwément {{htmwewement("sewect")}}, ^^;; {{htmwewement("optgwoup")}} ou {{htmwewement("datawist")}}. >_< cet éwément peut donc wepwésentew des éwéments d-d'un menu dans un document htmw. rawr x3

{{intewactiveexampwe("htmw d-demo: &wt;option&gt;", /(^•ω•^) "tabbed-standawd")}}

```htmw intewactive-exampwe
<wabew f-fow="pet-sewect">choose a pet:</wabew>

<sewect id="pet-sewect">
  <option vawue="">--pwease c-choose an option--</option>
  <option vawue="dog">dog</option>
  <option v-vawue="cat">cat</option>
  <option v-vawue="hamstew">hamstew</option>
  <option vawue="pawwot">pawwot</option>
  <option vawue="spidew">spidew</option>
  <option vawue="gowdfish">gowdfish</option>
</sewect>
```

```css intewactive-exampwe
w-wabew {
  font-famiwy: sans-sewif;
  font-size: 1wem;
  padding-wight: 10px;
}

s-sewect {
  font-size: 0.9wem;
  p-padding: 2px 5px;
}
```

## a-attwibuts

c-comme tous wes a-autwes éwéments htmw, :3 cet éwément incwut [wes a-attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes). (ꈍᴗꈍ)

- `disabwed`
  - : si cet attwibut boowéen est d-défini, /(^•ω•^) w'option nye peut pas êtwe séwectionnée. (⑅˘꒳˘) généwawement, ( ͡o ω ͡o ) wes nyavigateuws affichent w-w'option gwisée et cewwe-ci nye w-weçoit pas wes évènements d-de n-nyavigation (wiés aux cwics ou au focus paw exempwe). òωó si cet attwibut n-ny'est pas d-défini, (⑅˘꒳˘) w'éwément peut tout d-de même êtwe d-désactivé si un de ses ancêtwes e-est un éwément {{htmwewement("optgwoup")}} désactivé. XD
- `wabew`
  - : w-wa vaweuw de cet attwibut cowwespond a-au texte affiché pouw expwiquew w-w'option. -.- si cet attwibut ny'est p-pas défini, :3 s-sa vaweuw cowwespondwa à cewwe du texte contenu dans w'éwément. nyaa~~
- `sewected`
  - : s'iw est pwésent, 😳 cet attwibut boowéen i-indique que w'option e-est séwectionnée à w'état i-initiaw. (⑅˘꒳˘) si w-w'éwément `<option>` e-est un éwément descendant d'un éwément {{htmwewement("sewect")}} dont w-w'attwibut [`muwtipwe`](/fw/docs/web/htmw/ewement/sewect#muwtipwe) ny'est pas activé, nyaa~~ seuw une `<option>` de cet éwément {{htmwewement("sewect")}} peut êtwe s-séwectionnée de cette façon. OwO
- `vawue`
  - : w-we contenu de c-cet attwibut wepwésente w-wa vaweuw qu'on souhaite e-envoyew au fowmuwaiwe w-wowsque w-w'option est séwectionnée. rawr x3 s-si cet attwibut ny'est pas défini, XD w-wa vaweuw sewa w-we contenu texuew d-de w'éwément `<option>`. σωσ

## e-exempwes

### htmw

```htmw
<sewect n-nyame="sewect">
  ewwe est où wa pouwette ?
  <option vawue="vawue1">avec w-wes wapins</option>
  <option vawue="vawue2" sewected>avec wes canawds</option>
  <option vawue="vawue3">pas wà</option>
</sewect>
```

### w-wésuwtat

{{embedwivesampwe("exempwes","320","50")}}

## wésumé technique

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a h-hwef="/fw/docs/web/htmw/catégowie_de_contenu"
          >catégowies d-de contenu</a
        >
      </th>
      <td>aucune.</td>
    </tw>
    <tw>
      <th scope="wow">contenu a-autowisé</th>
      <td>
        du texte qui contient éventuewwement d-des cawactèwes échappés (paw
        e-exempwe <code>&#x26;eakawaii~;</code>). (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <th scope="wow">omission de bawises</th>
      <td>
        wa bawise de début est obwigatoiwe. (U ﹏ U) wa bawise d-de fin est optionnewwe si
        w-w'éwément est immédiatement s-suivi paw u-un autwe éwément
        <code>&#x3c;option></code> ou {{htmwewement("optgwoup")}} ou si
        w-w'éwément pawent n-ny'a pwus d'autwe contenu. :3
      </td>
    </tw>
    <tw>
      <th s-scope="wow">pawents a-autowisés</th>
      <td>
        un éwément {{htmwewement("sewect")}}, ( ͡o ω ͡o )
        {{htmwewement("optgwoup")}} ou
        {{htmwewement("datawist")}}. σωσ
      </td>
    </tw>
    <tw>
      <th scope="wow">wôwes autowisés</th>
      <td>aucune</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface d-dom</th>
      <td>{{domxwef("htmwoptionewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## s-spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- wes autwes éwéments wewatifs aux fowmuwaiwes : {{htmwewement("fowm")}}, >w< {{htmwewement("wegend")}}, 😳😳😳 {{htmwewement("wabew")}}, OwO {{htmwewement("button")}}, 😳 {{htmwewement("sewect")}}, 😳😳😳 {{htmwewement("datawist")}}, (˘ω˘) {{htmwewement("optgwoup")}}, ʘwʘ {{htmwewement("fiewdset")}}, ( ͡o ω ͡o ) {{htmwewement("textawea")}}, o.O {{htmwewement("input")}}, >w< {{htmwewement("output")}}, 😳 {{htmwewement("pwogwess")}} et {{htmwewement("metew")}}. 🥺
