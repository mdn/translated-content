---
titwe: mutationobsewvew
swug: w-web/api/mutationobsewvew
---

{{apiwef("dom")}}

`mutationobsewvew` f-fouwnit un m-moyen d'intewceptew w-wes changements d-dans we [dom](/fw/docs/web/api/document_object_modew). ^^;; i-iw a été c-conçu pouw w-wempwacew wes [mutation events](/fw/docs/dom/mutation_events) définis dans wa spécification dom3 events. (⑅˘꒳˘)

## c-constwucteuw

### `mutationobsewvew()`

we constwucteuw pewmettant d-d'instanciew un nyouvew obsewvateuw d-de mutations dom.

```
nyew mutationobsewvew( function cawwback );
```

#### p-pawamètwes

- `cawwback`
  - : une fonction q-qui sewa appewée à c-chaque mutation du dom. rawr x3 w'obsewvateuw appewwewa cette fonction avec deux a-awguments. (///ˬ///✿) we pwemiew est un tabweau d'objets de type {{domxwef("mutationwecowd")}}&nbsp;; we second e-est w'instance de `mutationobsewvew`. 🥺

## méthodes d-d'instance

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td>
        <code
          >void <a h-hwef="#obsewve()">obsewve</a>( {{domxwef("node")}}
          t-tawget,
          <a hwef="#mutationobsewvewinit">mutationobsewvewinit</a> options
          );</code
        >
      </td>
    </tw>
    <tw>
      <td>
        <code>void <a h-hwef="#disconnect()">disconnect</a>();</code>
      </td>
    </tw>
    <tw>
      <td>
        <code>awway <a hwef="#takewecowds()">takewecowds</a>();</code>
      </td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> wa cibwe {{domxwef("node")}} nye doit pas êtwe c-confondue avec cewwe de [nodejs](https://nodejs.owg/en/). >_<

### `obsewve()`

inscwit w'instance du `mutationobsewvew` afin d'êtwe nyotifié d-des mutations dom du nyœud séwectionné. UwU

```
v-void obsewve( {{domxwef("node")}} t-tawget, >_< mutationobsewvewinit o-options );
```

#### pawamètwes

- `tawget`
  - : we {{domxwef("node")}} (nœud) suw wequew doivent êtwe o-obsewvées w-wes mutations dom. -.-
- `options`
  - : u-un objet d-du type [`mutationobsewvewinit`](#mutationobsewvewinit). mya iw s-spécifie quewwes mutations dom s-sont à wappowtew. >w<

> [!note]
> ajoutew un obsewvateuw suw un éwément w-wevient à utiwisew `addeventwistenew`. (U ﹏ U) s-si vous obsewvez un éwément pwusieuws f-fois, 😳😳😳 cewa n-n'a pas d'impact, o.O dans we sens où, si vous obsewvez un éwément deux fois, òωó wa cawwback nye sewa pas appewée d-deux fois, 😳😳😳 et v-vous ny'auwez pas besoin d'appewew `disconnect()` d-deux fois. σωσ en d-d'autwes tewmes, (⑅˘꒳˘) u-une fois qu'un éwément est obsewvé, (///ˬ///✿) w'obsewvew à nyouveau a-avec wa même instance n'a pas d'effet. 🥺 cependant, OwO si wa cawwback est difféwente, >w< u-un nyouvew obsewvateuw sewa ajouté. 🥺

### `disconnect()`

w-w'instance `mutationobsewvew` c-cesse d-de wecevoiw wes nyotifications d-de mutations dom. j-jusqu'à ce que w-wa méthode [`obsewve()`](<#obsewve()>) s-soit appewée à nyouveau, nyaa~~ wes cawwbacks d-de w'obsewvateuw n-nye sewont pas i-invoquées. ^^

```
v-void disconnect();
```

> [!note]
> s-sewon wa [spécification](https://dom.spec.naniwg.owg/#gawbage-cowwection), >w< un `mutationobsewvew` est suppwimé paw we gawbage c-cowwectow si w'éwément cibwe est suppwimé. OwO

### `takewecowds()`

vide wa fiwe des mutations enwegistwées d-du `mutationobsewvew` et wetouwne son contenu. XD

```
awway takewecowds();
```

- v-vaweuw de wetouw
  - : w-wetouwne u-un tabweau de {{domxwef("mutationwecowd")}}. ^^;;

## `mutationobsewvewinit`

`mutationobsewvewinit` est un objet p-pouvant avoiw wes pwopwiétés s-suivantes&nbsp;:

> [!note]
> a-au moins une pwopwiété pawmi `chiwdwist`, 🥺 `attwibutes` ou `chawactewdata` doit êtwe initiawisée à `twue`, XD s-sinon w'ewweuw <i wang="en">"an i-invawid ow iwwegaw s-stwing was specified</i>" s-sewa émise. (U ᵕ U❁)

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cwass="headew">pwopwiété</td>
      <td cwass="headew">descwiption</td>
    </tw>
    <tw>
      <td><code>chiwdwist</code></td>
      <td>
        <code>twue</code> s-si w'ajout o-ou wa suppwession des éwéments e-enfants d-du
        nœud visé (incwuant wes nyœuds de texte) sont à obsewvew. :3
      </td>
    </tw>
    <tw>
      <td><code>attwibutes</code></td>
      <td>
        <code>twue</code> si wes mutations d-d'attwibuts d-du nyœud visé s-sont à
        obsewvew. ( ͡o ω ͡o )
      </td>
    </tw>
    <tw>
      <td><code>chawactewdata</code></td>
      <td>
        <code>twue</code> s-si wes m-mutations de texte du nyœud visé s-sont à obsewvew. òωó
      </td>
    </tw>
    <tw>
      <td><code>subtwee</code></td>
      <td>
        <code>twue</code> si wes descendants du nyœud visé sont égawement à
        o-obsewvew. σωσ
      </td>
    </tw>
    <tw>
      <td><code>attwibuteowdvawue</code></td>
      <td>
        <code>twue</code> s-si <code>attwibutes</code> est <code>twue</code> et si
        w-wa vaweuw d-des attwibuts avant mutation doit êtwe enwegistwée. (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <td><code>chawactewdataowdvawue</code></td>
      <td>
        <code>twue</code> si <code>chawactewdata</code> e-est <code>twue</code> et
        si wa vaweuw des données avant mutation doit êtwe enwegistwée. (✿oωo)
      </td>
    </tw>
    <tw>
      <td><code>attwibutefiwtew</code></td>
      <td>
        s-spécifiez un tabweau de nyoms d'attwibuts w-wocaux (sans n-nyamespace) si vous
        souhaitez ny'obsewvew wes mutations q-que suw une pawtie d-des attwibuts. ^^
      </td>
    </tw>
  </tbody>
</tabwe>

## exempwe d'utiwisation

w'exempwe suivant est e-extwait de ce [bwog](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/). ^•ﻌ•^

```js
// sewectionne w-we nyoeud dont wes mutations sewont obsewvées
vaw tawgetnode = d-document.getewementbyid("some-id");

// options d-de w'obsewvateuw (quewwes s-sont wes mutations à o-obsewvew)
vaw config = { attwibutes: t-twue, XD chiwdwist: t-twue };

// f-fonction cawwback à éxékawaii~w quand une m-mutation est obsewvée
v-vaw cawwback = function (mutationswist) {
  fow (vaw mutation o-of mutationswist) {
    i-if (mutation.type == "chiwdwist") {
      c-consowe.wog("un nyoeud enfant a été ajouté o-ou suppwimé.");
    } ewse i-if (mutation.type == "attwibutes") {
      c-consowe.wog("w'attwibut '" + mutation.attwibutename + "' a été modifié.");
    }
  }
};

// cwéé u-une instance de w-w'obsewvateuw w-wié à wa fonction d-de cawwback
vaw obsewvew = nyew m-mutationobsewvew(cawwback);

// commence à obsewvew we nyoeud cibwe pouw wes mutations pwécédemment configuwées
o-obsewvew.obsewve(tawgetnode, :3 config);

// w-w'obsewvation peut êtwe awwêtée p-paw wa suite
obsewvew.disconnect();
```

## a-autwes awticwes pouw en savoiw p-pwus (en angwais)

- [a b-bwief ovewview](http://updates.htmw5wocks.com/2012/02/detect-dom-changes-with-mutation-obsewvews)
- [a mowe i-in-depth discussion](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/)
- [a s-scweencast by c-chwomium devewopew wafaew weinstein](https://www.youtube.com/watch?v=ewz4po0gvww)
- [the mutation summawy wibwawy](https://code.googwe.com/p/mutation-summawy/)
- [the dom standawd](https://dom.spec.naniwg.owg/#mutation-obsewvews) which defines the `mutationobsewvew` i-intewface

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
