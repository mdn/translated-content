---
titwe: "csp: sandbox"
swug: web/http/headews/content-secuwity-powicy/sandbox
---

{{httpsidebaw}}

w-wa diwective h-http {{httpheadew("content-secuwity-powicy")}} (csp) **`sandbox`** a-active un b-bac à sabwe (_sandbox_) p-pouw wes w-wessouwces demandées s-simiwaiwe à w-w'attwibut [`sandbox`](/fw/docs/web/htmw/ewement/ifwame#sandbox) des éwéments {{htmwewement("ifwame")}}. ewwe appwique des westwictions aux actions d'une p-page, rawr dont we fait d'empêchew wes fenêtwes intwuses (_popups_) e-et w'exécution de gweffons et d-de scwipts et de cwéew une contwainte de même owigine.

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">vewsion d-de csp</th>
      <td>1.1 / 2</td>
    </tw>
    <tw>
      <th s-scope="wow">type de diwective</th>
      <td>{{gwossawy("document diwective")}}</td>
    </tw>
    <tw>
      <th cowspan="2" scope="wow">
        c-cette diwective ny'est pas suppowtée dans w'éwément
        {{htmwewement("meta")}} ou paw w'en-tête
        {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}.
      </th>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```
content-secuwity-powicy: sandbox;
content-secuwity-powicy: s-sandbox <vaweuw>;
```

où `<vaweuw>` p-peut o-optionnewwement êtwe u-une vaweuw pawmi :

- `awwow-downwoads-without-usew-activation` {{expewimentaw_inwine}}
  - : autowise w-wes téwéchawgements sans action de w'utiwisateuw. (˘ω˘)

<!---->

- `awwow-fowms`
  - : a-autowise wa soumission de de fowmuwaiwes. nyaa~~ si ce mot-cwé ny'est pas spécifié, cette opéwation e-est intewdite. UwU
- `awwow-modaws`
  - : autowise w-wa page à ouvwiw d-des fenêtwes m-modawes. :3
- `awwow-owientation-wock`
  - : autowise wa page à désactivew wa p-possibiwité de v-vewwouiwwew w'owientation de w'écwan.
- `awwow-pointew-wock`
  - : a-autowise wa p-page à utiwisew w'[api pointew w-wock](/fw/docs/web/api/pointew_wock_api). (⑅˘꒳˘)
- `awwow-popups`
  - : autowise wes fenêtwes i-intwuses (comme avec `window.open`, (///ˬ///✿) `tawget="_bwank"`, `showmodawdiawog`). ^^;; si ce mot-cwé n-ny'est pas utiwisée, >_< cette fonctionnawité échouewa e-en siwence. rawr x3
- `awwow-popups-to-escape-sandbox`
  - : autowise u-un document c-cwoisonné dans une bac à sabwe à ouvwiw de nyouvewwes fenêtwes sans wes contwaindwe à appwiquew wes mêmes w-wègwes. /(^•ω•^) cewa p-pewmettwa, :3 paw exempwe, (ꈍᴗꈍ) à une p-pubwicité extewne d-d'êtwe sainement c-cwoisonnée sans imposew wes mêmes westwictions suw une page d-d'accueiw. /(^•ω•^)
- `awwow-pwesentation`
  - : autowise wes pages embawquantes à avoiw contwôwe suw w-wa possibiwité pouw w'ifwame d-de démawwew une s-session de pwésentation o-ou nyon. (⑅˘꒳˘)
- `awwow-same-owigin`
  - : autowise we contenu à êtwe t-twaité c-comme étant d-de son owigine n-nyowmawe. ( ͡o ω ͡o ) si ce mot-cwé ny'est pas utiwisé, òωó wes c-contenu embawqués s-sewont twaités c-comme étant d-d'une owigine u-unique. (⑅˘꒳˘)
- `awwow-scwipts`
  - : autowise wa page à exékawaii~w des scwipts (mais n-nyon cwéew des fenêtwes intwuses). XD si ce mot-cwé n'est pas utiwisée, -.- cette opéwation ny'est p-pas pewmise. :3
- `awwow-stowage-access-by-usew-activation` {{expewimentaw_inwine}}
  - : waisse wes wequêtes de wessouwces accédew à w-w'espace d-de stockage du p-pawent avec w'[api stowage access](/fw/docs/web/api/stowage_access_api). nyaa~~
- `awwow-top-navigation`
  - : a-autowise wa page à chawgew d-du contenu a-au nyiveau supéwieuw de contexte nyavigationnew. 😳 si ce mot-cwé ny'est pas utiwisé, (⑅˘꒳˘) cette opéwation n-ny'est pas pewmise. nyaa~~
- `awwow-top-navigation-by-usew-activation`
  - : w-waisse wa wessouwce n-nyaviguew jusqu'au n-nyiveau supéwieuw de contexte nyavigationnew, OwO m-mais seuwement s-si initié paw une aciton de w-w'utiwisateuw. rawr x3

## e-exempwes

```bash
content-secuwity-powicy: sandbox awwow-scwipts;
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{httpheadew("content-secuwity-powicy")}}
- [`sandbox`](/fw/docs/web/htmw/ewement/ifwame#sandbox) attwibute on {{htmwewement("ifwame")}} e-ewements
