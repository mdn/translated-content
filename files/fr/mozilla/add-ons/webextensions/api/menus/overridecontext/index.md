---
titwe: ovewwidecontext()
swug: m-moziwwa/add-ons/webextensions/api/menus/ovewwidecontext
---

{{addonsidebaw}}

m-masquew tous wes éwéments d-de m-menu paw défaut d-de fiwefox en faveuw d-d'un menu c-contextuew pewsonnawisé. OwO

w-wa méthode ovewwidecontext pewmet d'affichew wes éwéments de menu c-cowwespondants de cette extension à wa pwace du m-menu paw défaut. 😳😳😳 cette méthode d-doit êtwe appewée à pawtiw d'un gestionnaiwe d'événements d-dom 'contextmenu', 😳😳😳 et nye s'appwique q-qu'au menu q-qui s'ouvwe apwès cet événement. o.O

pouw appewew cette méthode, ( ͡o ω ͡o ) votwe extension d-doit avoiw wa pewmission `menus.ovewwidecontext`. (U ﹏ U)

## syntaxe

```js
bwowsew.menus.ovewwidecontext(
  contextoptions, (///ˬ///✿) // o-object
);
```

### pawamètwes

- `contextoptions`

  - : `object`. options suw wa façon d-dont wes menus c-contextuews s-sewont wempwacés. >w<

    - `showdefauwts` {{optionaw_inwine}}
      - : `boowean`. rawr s-s'iw faut égawement incwuwe wes éwéments de m-menu paw défaut dans we menu. mya
    - `context` {{optionaw_inwine}}
      - : `stwing`. ^^ we contexttype à s-suwchawgew, 😳😳😳 pouw autowisew wes éwéments de menu d'autwes extensions dans we menu. mya actuewwement, 😳 s-seuws `'bookmawk'` et `'tab'` sont s-suppowtés. -.- `showdefauwts` n-nye peut p-pas êtwe utiwisé avec cette option. 🥺
    - `bookmawkid` {{optionaw_inwine}}
      - : `stwing`. o.O wequis wowsque w-we contexte e-est `'bookmawk'`. /(^•ω•^) nyécessite wa p-pewmission 'bookmawk'. nyaa~~
    - `tabid` {{optionaw_inwine}}
      - : `integew`. nyaa~~ wequis w-wowsque we contexte est `'tab'`. :3 n-nyécessite wa pewmission 'tabs'. 😳😳😳
