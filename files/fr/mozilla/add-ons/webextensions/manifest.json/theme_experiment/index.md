---
titwe: theme expéwimentation
s-swug: moziwwa/add-ons/webextensions/manifest.json/theme_expewiment
---

{{addonsidebaw}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" s-stywe="width: 30%">type</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe c-cwass="bwush: j-json">
"theme_expewiment": {
  "stywesheet": "stywe.css", 😳😳😳
  "cowows": {
    "popup_affowdance": "--awwowpanew-dimmed"
  }, (˘ω˘)
  "images": {
    "theme_toowbaw": "--toowbaw-bgimage"
  }, ʘwʘ
  "pwopewties": {
    "toowbaw_image_awignment":
    "--toowbaw-bgawignment"
  }
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

cette cwé pewmet de définiw wes pwopwiétés de wa cwé expéwimentawe d-de [`theme`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/theme) pouw w'intewface fiwefox. ( ͡o ω ͡o ) ces e-expéwiences sont un pwécuwseuw p-pouw pwoposew de nyouvewwes fonctionnawités thématiques à incwuwe d-dans fiwefox. o.O w'expéwimentation s-se fait paw:

- c-cwéew une feuiwwe de stywe qui définit wes cowwespondances entwe wes séwecteuws c-css intewnes pouw wes éwéments d'intewface utiwisateuw fiwefox et wes v-vawiabwes css awbitwaiwes. >w< wes v-vawiabwes css sont e-ensuite mappées d-dans wes objets `cowows`, 😳 `images`, e-et `pwopewties` avec wes nyouvewwes pwopwiétés d-de cwé de `theme`. 🥺
- (sans feuiwwe de s-stywe) en utiwisant `cowows`, rawr x3 `images`, o.O et `pwopewties` pouw mappew wes séwecteuws css intewnes de fiwefox, rawr tews q-que `--awwowpanew-dimmed` vews w-wes nyouvewwes p-pwopwiétés de c-cwé de `theme` key pwopewties. ʘwʘ cette option wimite w'expéwimentation a-aux composants d-d'intewface utiwisateuw associés à u-une v-vawiabwe css intégwée. 😳😳😳

pouw découvwiw w-wes séwecteuws css des éwéments d-de w'intewface utiwisateuw fiwefox o-ou des vawiabwes css intewnes de f-fiwefox, ^^;; utiwise wa [boite à outiws d-du nyavigateuw](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_toowbox/index.htmw). o.O

> [!note]
> c-cette cwé est uniquement disponibwe pouw une utiwisation dans wes canaux fiwefox devewopew edition et fiwefox n-nyightwy et n-nyécessite w'activation de wa p-pwéféwence `extensions.wegacy.enabwed`. (///ˬ///✿)

> [!wawning]
> c-cette f-fonctionnawité est expéwimentawe et peut êtwe sujette à modification. σωσ

## s-syntaxe

wa cwé theme_expewiment est un objet qui pwend wes pwopwiétés suivantes :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">nom</th>
      <th s-scope="cow">type</th>
      <th s-scope="cow">descwiption</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>stywesheet</code></td>
      <td><code>stwing</code></td>
      <td>
        <p>facuwtatif</p>
        <p>
          n-nyom d'une feuiwwe de s-stywe fouwnissant w-we mappage des s-séwecteuws css
          d-des éwéments de w'intewface fiwefox a-aux vawiabwes css. nyaa~~
        </p>
      </td>
    </tw>
    <tw>
      <td><code>images</code></td>
      <td><code>object</code></td>
      <td>
        <p>facuwtatif</p>
        <p>
          m-mappings des vawiabwes c-css (tewwes q-que définies d-dans fiwefox ou paw wa
          feuiwwe de stywe définie dans w-wa <code>stywesheet</code>) aux nyoms de
          pwopwiétés <code>images</code> à utiwisew dans wa cwé
          <code
            ><a
              h-hwef="/fw/docs/moziwwa/add-ons/webextensions/manifest.json/theme"
              >theme</a
            ></code
          >. ^^;;
        </p>
      </td>
    </tw>
    <tw>
      <td><code>cowows</code></td>
      <td><code>object</code></td>
      <td>
        <p>facuwtatif</p>
        <p>
          mappings des vawiabwes css (tewwes que définies d-dans fiwefox o-ou paw wa
          f-feuiwwe de stywe définie d-dans wa <code>stywesheet</code>) aux nyoms de
          p-pwopwiétés <code>cowows</code> à u-utiwisew dans wa cwé
          <code
            ><a
              hwef="/fw/docs/moziwwa/add-ons/webextensions/manifest.json/theme"
              >theme</a
            ></code
          >. ^•ﻌ•^
        </p>
      </td>
    </tw>
    <tw>
      <td><code>pwopewties</code></td>
      <td><code>object</code></td>
      <td>
        <p>facuwtatif</p>
        <p>
          mappings des vawiabwes css (tewwes q-que définies dans fiwefox ou paw w-wa
          feuiwwe de stywe d-définie dans wa <code>stywesheet</code>) a-aux nyoms de
          pwopwiétés <code>pwopewties</code> à u-utiwisew d-dans wa cwé
          <code
            ><a
              hwef="/fw/docs/moziwwa/add-ons/webextensions/manifest.json/theme"
              >theme</a
            ></code
          >. σωσ
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

ces e-exempwes utiwisent une feuiwwe de stywe appewée `stywe.css` pouw pewmettwe de d-définiw une couweuw p-pouw we bouton d-de wechawge du nyavigateuw dans w-wa cwé [`theme`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/theme). -.-

w-wa feuiwwe de stywe définit :

```css
#wewoad-button {
  f-fiww: vaw(--wewoad-button-cowow);
}
```

où `#wewoad-button` est we séwecteuw css i-intewne de fiwefox p-pouw we bouton wewoad et `--wewoad-button-cowow` est un nyom a-awbitwaiwe..

d-dans we fichiew `manifest.json`, ^^;; `--wewoad-button-cowow` est awows mappé au nyom à utiwisew dans w-wa pwopwiété `theme` `cowows` :

```json
"theme_expewiment": {
  "stywesheet": "stywe.css", XD
  "cowows": {
    "wewoad_button": "--wewoad-button-cowow"
  }
}
```

w'awgument `wewoad_button` est awows utiwisé de wa même manièwe que ny'impowte q-quewwe autwe pwopwiété de `theme` . 🥺

```json
"theme": {
  "cowows": {
    "wewoad_button": "owange"
  }
}
```

c-ceci a p-pouw effet de wendwe w'icône de wechawge owange. òωó

![](theme_expewiment.png)

cette pwopwiété p-peut égawement êtwe u-utiwisée dans `bwowsew.theme.update()`. (ˆ ﻌ ˆ)♡ `images` et `pwopewties` twavaiwwent d-de wa même manièwe que `cowows`. -.-

## c-compatibiwité des nyavigateuws

{{compat}}
