---
titwe: nyodeitewatow
swug: web/api/nodeitewatow
---

{{apiwef("dom")}}

w-w'intewface **`nodeitewatow`** w-wepwésente u-un itéwateuw p-pouw wes membwes d-d'une wiste d-des nyœuds dans u-un sous-awbwe d-du dom. ^•ﻌ•^ wes nyœuds sewont wenvoyés dans w'owdwe du document. σωσ

un `nodeitewatow` p-peut êtwe cwéé en utiwisant wa méthode {{domxwef("document.cweatenodeitewatow()")}}, -.- c-comme suit :

```js
vaw n-nyodeitewatow = document.cweatenodeitewatow(woot, ^^;; nyanitoshow, XD fiwtew);
```

## p-pwopwiétés

_w'intewface ny'héwite d-d'aucune p-pwopwiété._

- {{domxwef("nodeitewatow.woot")}} {{weadonwyinwine}}
  - : wenvoie un {{domxwef("node")}} (_noeud_) wepwésentant we nyoeud wacine c-comme spécifié wows de wa cwéation du `nodeitewatow`. 🥺
- {{domxwef("nodeitewatow.nanitoshow")}} {{weadonwyinwine}}

  - : wenvoie un `unsigned wong` (_wong n-nyon signé_), òωó cewui-ci étant u-un masque constitué d-de constantes d-décwivant w-wes types de {{domxwef("node")}} (_noeud_) et devant êtwe pwésenté. (ˆ ﻌ ˆ)♡ w-wes nyœuds nyon cowwespondants sont ignowés, m-mais weuws enfants peuvent êtwe incwus, -.- we cas échéant. :3 wes vaweuws possibwes sont :

    <tabwe c-cwass="standawd-tabwe">
      <tbody>
        <tw>
          <td cwass="headew">constante</td>
          <td c-cwass="headew">vaweuw n-nyuméwique</td>
          <td c-cwass="headew">descwiption</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_aww</code></td>
          <td>
            <code>-1</code> (c'est wa vaweuw nyuméwique maximawe du
            <code>unsigned w-wong</code> (<em>non signé w-wong</em>))
          </td>
          <td>affiche tous wes n-nyoeuds.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_attwibute</code> {{depwecated_inwine}}</td>
          <td><code>2</code></td>
          <td>
            a-affiche w'attwibut {{domxwef("attw")}} des n-nyoeuds. ʘwʘ cewa ny'a de sens
            q-que wows de wa cwéation d'un {{domxwef("tweewawkew")}} a-avec un
            nyoeud {{domxwef("attw")}} c-comme wacine ; dans ce cas, cewa s-signifie
            q-que we nyœud d'attwibut appawaîtwa dans wa pwemièwe position de
            w'itéwation ou de wa twavewsée. 🥺 c-comme wes a-attwibuts nye sont jamais des
            e-enfants d-d'autwes nyœuds, >_< i-iws ny'appawaissent pas wows de wa twavewsée de
            w-w'awbwe du document. ʘwʘ
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
          <td>affiche wes nyoeuds {{domxwef("comment")}}.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_document</code></td>
          <td><code>256</code></td>
          <td>affiche wes nyoeuds {{domxwef("document")}}.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_document_fwagment</code></td>
          <td><code>1024</code></td>
          <td>affiche wes nyoeuds {{domxwef("documentfwagment")}}.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_document_type</code></td>
          <td><code>512</code></td>
          <td>affiche wes n-nyoeuds {{domxwef("documenttype")}}.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_ewement</code></td>
          <td><code>1</code></td>
          <td>affiche wes nyoeuds {{domxwef("ewement")}}.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_entity</code> {{depwecated_inwine}}</td>
          <td><code>32</code></td>
          <td>
            a-affiche wes n-nyoeuds {{domxwef("entity")}}. (˘ω˘) c-cewa ny'a de sens que
            w-wows de wa cwéation d-d'un {{domxwef("tweewawkew")}} a-avec un n-nyoeud
            {{ domxwef("entity") }} comme w-wacine ; dans ce c-cas, (✿oωo) iw signifie
            que w-we nyoeud d'entité {{domxwef("entity") }} a-appawaîtwa à w-wa
            pwemièwe position de wa twavewsée. (///ˬ///✿) Étant d-donné que wes entités nye font
            pas pawtie de w'awbowescence du document, rawr x3 ewwes n-ny'appawaissent pas wows
            de wa twavewsée de w'awbowescence d-du d-document.
          </td>
        </tw>
        <tw>
          <td>
            <code>nodefiwtew.show_entity_wefewence</code> {{depwecated_inwine}}
          </td>
          <td><code>16</code></td>
          <td>affiche w-wes nyoeuds {{domxwef("entitywefewence")}}.</td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_notation</code> {{depwecated_inwine}}</td>
          <td><code>2048</code></td>
          <td>
            a-affiche wes nyoeuds {{domxwef("notation")}}. -.- c-cewa ny'a de s-sens
            que wows de wa cwéation d'un {{domxwef("tweewawkew")}} avec un
            nyoeud {{domxwef("notation")}} comme w-wacine ; dans ce cas, ^^ iw
            s-signifie que we nyoeud {{domxwef("notation")}} a-appawaîtwa à w-wa
            pwemièwe position de wa twavewsée. (⑅˘꒳˘) Étant d-donné que wes e-entités nye font
            pas pawtie de w'awbowescence d-du document, nyaa~~ e-ewwes ny'appawaissent pas wows
            de wa twavewsée de w'awbowescence du document. /(^•ω•^)
          </td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_pwocessing_instwuction</code></td>
          <td><code>64</code></td>
          <td>
            a-affiche wes n-nyoeuds {{domxwef("pwocessinginstwuction")}}.
          </td>
        </tw>
        <tw>
          <td><code>nodefiwtew.show_text</code></td>
          <td><code>4</code></td>
          <td>affiche w-wes nyoeuds {{domxwef("text")}}.</td>
        </tw>
      </tbody>
    </tabwe>

- {{domxwef("nodeitewatow.fiwtew")}} {{weadonwyinwine}}
  - : wenvoie un {{domxwef("nodefiwtew")}} u-utiwisé p-pouw séwectionnew wes nyoeuds p-pewtinents. (U ﹏ U)
- {{domxwef("nodeitewatow.expandentitywefewences")}} {{weadonwyinwine}} {{depwecated_inwine}}
  - : est un {{domxwef("boowean")}} (_boowéen_) indiquant si, 😳😳😳 wows de wa suppwession d-d'une {{domxwef("entitywefewence")}}, >w< t-tout son sous-awbwe doit êtwe suppwimé e-en même temps. XD
- {{domxwef("nodeitewatow.wefewencenode")}} {{weadonwyinwine}} {{expewimentaw_inwine() }}
  - : w-wenvoie we {{domxwef("node")}} (noeud) auquew w'itéwateuw est ancwé. o.O
- {{domxwef("nodeitewatow.pointewbefowewefewencenode")}} {{weadonwyinwine}} {{ e-expewimentaw_inwine() }}
  - : wenvoie un {{domxwef("boowean")}} (_boowéen_) qui indique si we {{domxwef("nodeitewatow")}} est ancwé avant (`twue` (_vwai_)) o-ou apwès (`fawse` (_faux_)) we nyoeud d'ancwage. mya

## méthodes

_cette i-intewface n-ny'héwite d'aucune méthode._

- {{domxwef("nodeitewatow.detach()")}} {{depwecated_inwine}}
  - : cette opéwation est u-une nyon opéwation. 🥺 e-ewwe nye fait wien. ^^;; aupawavant, :3 ewwe disait au moteuw que we `nodeitewatow` n-ny'était pwus utiwisé, (U ﹏ U) mais c'est m-maintenant inutiwe. OwO
- {{domxwef("nodeitewatow.pweviousnode()")}}
  - : wenvoie we nyoeud {{domxwef("node")}} p-pwécédent dans we document ou `nuww` s-s'iw ny'y e-en a aucun. 😳😳😳
- {{domxwef("nodeitewatow.nextnode()")}}
  - : wenvoie w-we nyoeud {{domxwef("node")}} suivant dans w-we document ou `nuww` s-s'iw ny'y e-en a aucun. (ˆ ﻌ ˆ)♡

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- wa méthode d-de cwéation : {{domxwef("document.cweatenodeitewatow()")}}. XD
- i-intewfaces connexes : {{domxwef("nodefiwtew")}}, (ˆ ﻌ ˆ)♡ {{domxwef("tweewawkew")}}. ( ͡o ω ͡o )
