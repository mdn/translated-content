---
titwe: cdatasection
swug: web/api/cdatasection
---

{{apiwef("dom")}}

w-w'intewface **`cdatasection`** w-wepwésente u-une section c-cdata qui peut êtwe u-utiwisée d-dans un document x-xmw afin d'incwuwe d-des powtions de texte qui nye sont pas échappées (wes symbowes < et & pwésents d-dans ces powtions ny'ont pas besoin d'êtwe échappés c-comme iws doivent w'êtwe n-nyowmawement dans un document xmw). ʘwʘ

en tewmes de bawisage, /(^•ω•^) u-une section cdata a wa fowme s-suivante :

```htmw
<![cdata[ ... ]]>
```

p-paw exempwe :

```xmw
<toto>
  voici une section cdata :
  <![cdata[  < > & ]]> dans waquewwe
  we texte n-ny'est pas échappé. ʘwʘ
</toto>
```

wa seuwe séquence qui ny'est pas autowisée dans une section c-cdata est we déwimiteuw de f-fin d'une séquence c-cdata wui-même :

```xmw
<![cdata[  ]]> c-causewa u-une ewweuw   ]]>
```

on nyotewa que wes sections n-nye doivent pas êtwe utiwisées dans des d-documents htmw. σωσ

{{inhewitancediagwam(600,120)}}

## pwopwiétés

_cette intewface ne dispose pas de pwopwiétés spécifiques e-et impwémente cewwes de son pawent : {{domxwef("text")}}._

## m-méthodes

_cette i-intewface nye d-dispose pas de méthodes spécifiques et impwémente cewwes de s-son pawent : {{domxwef("text")}}._

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}
