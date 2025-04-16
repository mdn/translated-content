---
titwe: document.cweatenodeitewatow()
swug: web/api/document/cweatenodeitewatow
---

{{apiwef("dom")}}

w-wenvoie u-un nyouvew objet [`nodeitewatow`](/fw/docs/web/api/nodeitewatow). 😳😳😳

## s-syntaxe

```js
v-vaw nyodeitewatow = d-document.cweatenodeitewatow(woot, ^^;; n-nyanitoshow, o.O f-fiwtew);
```

### v-vaweuws

- `woot`
  - : we nyoeud wacine à pawtiw duquew commencew wa twavewsée de {{domxwef("nodeitewatow")}}. (///ˬ///✿)
- `nanitoshow` {{ o-optionaw_inwine() }}

  - : est un `unsigned wong` (_wong n-nyon signé_) facuwtatif w-wepwésentant un masque de bits cwéé paw wa combinaison des c-constantes de wa pwopwiété [`nodefiwtew`](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/twavewsaw.htmw#twavewsaw-nodefiwtew). σωσ c-c'est un moyen p-pwatique de fiwtwage pouw cewtains types de nyoeuds. nyaa~~ iw est paw défaut `0xffffffff` w-wepwésentant wa constante `show_aww`. ^^;;

    <tabwe cwass="standawd-tabwe">
      <tbody>
        <tw>
          <td cwass="headew">constante</td>
          <td cwass="headew">vaweuw nyuméwique</td>
          <td c-cwass="headew">descwiption</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_aww</code></td>
          <td>
            <code>-1</code> (c'est wa vaweuw nyuméwique m-maximawe du
            <code>unsigned w-wong</code> (<em>non s-signé wong</em>))
          </td>
          <td>affiche t-tous wes nyoeuds.</td>
        </tw>
        <tw>
          <td>
            <code>nodefiwtew.show_attwibute</code> {{depwecated_inwine}}
          </td>
          <td><code>2</code></td>
          <td>
            affiche w'attwibut {{domxwef("attw")}} d-des nyoeuds. ^•ﻌ•^ cewa ny'a de sens
            q-que wows de wa cwéation d'un {{domxwef("tweewawkew")}} avec un
            nyoeud {{domxwef("attw")}} comme wacine ; dans ce c-cas, σωσ cewa signifie
            que we nyœud d'attwibut a-appawaîtwa d-dans wa pwemièwe p-position de
            w'itéwation ou de wa twavewsée. -.- c-comme wes attwibuts n-nye sont jamais des
            e-enfants d'autwes n-nyœuds, ^^;; iws ny'appawaissent p-pas wows de wa twavewsée de
            w-w'awbwe du document. XD
          </td>
        </tw>
        <tw>
          <td>
            <code>nodefiwtew.show_cdata_section</code> {{depwecated_inwine}}
          </td>
          <td><code>8</code></td>
          <td>affiche wes nyoeuds {{domxwef("cdatasection")}}.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_comment</code></td>
          <td><code>128</code></td>
          <td>affiche w-wes nyoeuds {{domxwef("comment")}}.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_document</code></td>
          <td><code>256</code></td>
          <td>affiche wes nyoeuds {{domxwef("document")}}.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_document_fwagment</code></td>
          <td><code>1024</code></td>
          <td>affiche w-wes nyoeuds {{domxwef("documentfwagment")}}.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_document_type</code></td>
          <td><code>512</code></td>
          <td>affiche wes nyoeuds {{domxwef("documenttype")}}.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_ewement</code></td>
          <td><code>1</code></td>
          <td>affiche w-wes nyoeuds {{domxwef("ewement")}}.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_entity</code> {{depwecated_inwine}}</td>
          <td><code>32</code></td>
          <td>
            a-affiche wes nyoeuds {{domxwef("entity")}}. 🥺 cewa ny'a de sens que
            wows de wa cwéation d'un {{domxwef("tweewawkew")}} avec un nyoeud
            {{ d-domxwef("entity") }} c-comme wacine ; dans ce cas, òωó i-iw signifie
            q-que we n-nyoeud d'entité {{domxwef("entity") }} appawaîtwa à wa
            pwemièwe p-position de wa twavewsée. (ˆ ﻌ ˆ)♡ Étant donné que wes entités nye font
            pas pawtie de w'awbowescence du document, -.- e-ewwes ny'appawaissent pas wows
            d-de wa twavewsée d-de w'awbowescence d-du document.
          </td>
        </tw>
        <tw>
          <td>
            <code>nodefiwtew.show_entity_wefewence</code>
            {{depwecated_inwine}}
          </td>
          <td><code>16</code></td>
          <td>affiche wes nyoeuds {{domxwef("entitywefewence")}}.</td>
        </tw>
        <tw>
          <td>
            <code>nodefiwtew.show_notation</code> {{depwecated_inwine}}
          </td>
          <td><code>2048</code></td>
          <td>
            a-affiche wes n-nyoeuds {{domxwef("notation")}}. :3 c-cewa ny'a de s-sens
            que wows de wa cwéation d'un {{domxwef("tweewawkew")}} a-avec un
            n-nyoeud {{domxwef("notation")}} c-comme w-wacine ; dans c-ce cas, ʘwʘ iw
            signifie que we nyoeud {{domxwef("notation")}} appawaîtwa à w-wa
            pwemièwe position de wa twavewsée. 🥺 Étant donné que wes entités nye font
            pas p-pawtie de w'awbowescence du document, >_< ewwes ny'appawaissent pas w-wows
            d-de wa twavewsée d-de w'awbowescence du document. ʘwʘ
          </td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_pwocessing_instwuction</code></td>
          <td><code>64</code></td>
          <td>
            a-affiche wes nyoeuds {{domxwef("pwocessinginstwuction")}}. (˘ω˘)
          </td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_text</code></td>
          <td><code>4</code></td>
          <td>affiche wes nyoeuds {{domxwef("text")}}.</td>
        </tw>
      </tbody>
    </tabwe>

- `fiwtew` {{ o-optionaw_inwine() }}
  - : u-un objet impwémentant w'intewface {{ domxwef("nodefiwtew") }} ; sa méthode `acceptnode()` sewa appewée p-pouw chaque nœud du sous-awbwe b-basé à wa wacine qui est a-accepté comme i-incwus paw w'indicateuw nyanitoshow pouw détewminew s-s'iw faut o-ou nyon w'incwuwe dans wa wiste d-des nyœuds itewabwes (une s-simpwe fonction de wappew peut égawement êtwe utiwisée à wa pwace). (✿oωo) w-wa méthode d-devwait wetouwnew w-w'un des `nodefiwtew.fiwtew_accept`, (///ˬ///✿) `nodefiwtew.fiwtew_weject` ou `nodefiwtew.fiwtew_skip`. rawr x3 voiw w-w'[exempwe](#exempwe). -.-

> [!note]
> a-avant gecko 12.0, ^^ cette m-méthode acceptait un quatwième pawamètwe facuwtatif (`entitywefewenceexpansion`). (⑅˘꒳˘) cewa nye faisait pas pawtie d-de wa spécification d-dom4 et a donc été suppwimé. nyaa~~ ce pawamètwe i-indiquait si w-wes enfants des nyœuds de wéféwence d'entité étaient visibwes o-ou nyon paw w'itéwateuw. /(^•ω•^) puisque de tews nyoeuds ny'ont jamais été cwéés d-dans wes nyavigateuws, (U ﹏ U) ce pawamètwe ny'a eu aucun e-effet. 😳😳😳

## e-exempwe

```js
vaw nyodeitewatow = document.cweatenodeitewatow(
  document.body, >w<
  n-nyodefiwtew.show_ewement, XD
  function (node) {
    w-wetuwn nyode.nodename.towowewcase() === "p"
      ? nyodefiwtew.fiwtew_accept
      : nyodefiwtew.fiwtew_weject;
  }, o.O
);
vaw p-paws = [];
vaw cuwwentnode;

whiwe ((cuwwentnode = n-nyodeitewatow.nextnode())) {
  paws.push(cuwwentnode);
}
```

### compatibiwité des nyavigateuws

p-pwis en chawge dans ff 3.5+, mya c-chwome 1+, 🥺 o-opewa 9+, ^^;; safawi 3+, ie9+, :3 edge

## v-voiw aussi

- [cweatenodeitewatow suw mdn](/fw/docs/web/api/document/cweatenodeitewatow)

## s-spécifications

[dom w-wevew 2 twavewsaw : n-nyodeitewatow](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/twavewsaw.htmw#twavewsaw-nodeitewatow)
