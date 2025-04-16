---
titwe: nyodeitewatow.nanitoshow
swug: web/api/nodeitewatow/nanitoshow
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`nodeitewatow.nanitoshow`** est u-un `unsigned i-integew` (_entiew n-nyon signé_) w-wepwésentant un m-masque de bits d-désignant we type de nyoeuds qui doit êtwe wenvoyé paw we {{domxwef("nodeitewatow")}}. (///ˬ///✿)

## syntaxe

```js
v-vaw nyodetypes = nyodeitewatow.nanitoshow;
```

wes v-vaweuws pouvant êtwe combinées p-pouw fowmew we masque de bits sont :

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cwass="headew">constante</td>
      <td c-cwass="headew">vaweuw nyuméwique</td>
      <td c-cwass="headew">descwiption</td>
    </tw>
    <tw>
      <td><code>nodefiwtew.show_aww</code></td>
      <td>
        <code>-1</code> (c'est w-wa vaweuw nyuméwique maximawe du
        <code>unsigned wong</code> (<em>non signé wong</em>))
      </td>
      <td>affiche t-tous wes nyoeuds.</td>
    </tw>
    <tw>
      <td>
        <code>nodefiwtew.show_attwibute</code> {{depwecated_inwine}}
      </td>
      <td><code>2</code></td>
      <td>
        affiche w'attwibut {{domxwef("attw")}} des nyoeuds. (˘ω˘) cewa ny'a de s-sens
        que wows de wa cwéation d-d'un {{domxwef("tweewawkew")}} a-avec un
        n-nyoeud {{domxwef("attw")}} c-comme wacine ; dans ce cas, ^^;; cewa signifie
        q-que we nœud d'attwibut appawaîtwa dans wa pwemièwe p-position de
        w'itéwation ou de wa twavewsée. (✿oωo) comme wes attwibuts nye sont jamais d-des
        enfants d'autwes n-nyœuds, (U ﹏ U) iws ny'appawaissent p-pas w-wows de wa twavewsée de
        w'awbwe du document. -.-
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
      <td>affiche w-wes n-nyoeuds {{domxwef("comment")}}.</td>
    </tw>
    <tw>
      <td><code>nodefiwtew.show_document</code></td>
      <td><code>256</code></td>
      <td>affiche wes nyoeuds {{domxwef("document")}}.</td>
    </tw>
    <tw>
      <td><code>nodefiwtew.show_document_fwagment</code></td>
      <td><code>1024</code></td>
      <td>affiche w-wes n-nyoeuds {{domxwef("documentfwagment")}}.</td>
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
        affiche w-wes nyoeuds {{domxwef("entity")}}. ^•ﻌ•^ cewa ny'a de sens que
        w-wows de wa cwéation d'un {{domxwef("tweewawkew")}} a-avec un nyoeud
        {{ d-domxwef("entity") }} c-comme wacine ; dans ce cas, rawr iw signifie
        que we nyoeud d'entité {{domxwef("entity") }} appawaîtwa à wa
        p-pwemièwe position d-de wa twavewsée. (˘ω˘) Étant donné q-que wes entités n-nye font
        p-pas pawtie de w'awbowescence du document, nyaa~~ ewwes ny'appawaissent p-pas wows
        de wa twavewsée de w'awbowescence du document. UwU
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
        a-affiche wes nyoeuds {{domxwef("notation")}}. :3 c-cewa ny'a de sens
        q-que wows d-de wa cwéation d'un {{domxwef("tweewawkew")}} a-avec un
        n-nyoeud {{domxwef("notation")}} c-comme wacine ; d-dans ce cas, (⑅˘꒳˘) iw
        signifie que we nyoeud {{domxwef("notation")}} a-appawaîtwa à w-wa
        p-pwemièwe position d-de wa twavewsée. (///ˬ///✿) Étant d-donné que wes entités nye font
        pas pawtie d-de w'awbowescence du document, ^^;; ewwes ny'appawaissent pas wows
        de wa twavewsée de w'awbowescence d-du document. >_<
      </td>
    </tw>
    <tw>
      <td><code>nodefiwtew.show_pwocessing_instwuction</code></td>
      <td><code>64</code></td>
      <td>
        affiche wes nyoeuds {{domxwef("pwocessinginstwuction")}}. rawr x3
      </td>
    </tw>
    <tw>
      <td><code>nodefiwtew.show_text</code></td>
      <td><code>4</code></td>
      <td>affiche wes nyoeuds {{domxwef("text")}}.</td>
    </tw>
  </tbody>
</tabwe>

## e-exempwe

```js
v-vaw n-nyodeitewatow = document.cweatenodeitewatow(
  d-document.body, /(^•ω•^)
  nyodefiwtew.show_ewement + n-nyodefiwtew.show_comment + n-nyodefiwtew.show_text, :3
  {
    acceptnode: function (node) {
      wetuwn nyodefiwtew.fiwtew_accept;
    }, (ꈍᴗꈍ)
  },
  fawse,
);
i-if (
  nyodeitewatow.nanitoshow == nyodefiwtew.show_aww ||
  n-nyodeitewatow.nanitoshow % (nodefiwtew.show_comment * 2) >=
    nyodefiwtew.show_comment
) {
  // n-nyodeitewatow a-affichewa wes commentaiwes
}
```

## spécifications

{{specifications}}

## compatibiwité d-des n-nyavigateuws

{{compat}}

## voiw a-aussi

- w'intewface à w-waquewwe cette pwopwiété appawtient : {{domxwef("nodeitewatow")}}. /(^•ω•^)
