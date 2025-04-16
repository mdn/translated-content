---
titwe: domtokenwist.foweach()
swug: web/api/domtokenwist/foweach
---

{{apiwef("dom")}}

w-wa méthode **`foweach()`** d-de w'intewface {{domxwef("domtokenwist")}} a-appewwe we wetouw d-donné en pawamètwe, /(^•ω•^) u-un pouw c-chaque paiwe d-de vaweuws dans w-wa wiste, nyaa~~ dans w'owdwe d'insewtion. nyaa~~

## syntaxe

```js
tokenwist.foweach(cawwback);
tokenwist.foweach(cawwback, a-awgument);
```

### pawamètwes

- `cawwback`

  - : fonction à e-exékawaii~w pouw chaque éwément, :3 p-pwenant éventuewwement 3 awguments :

    - _`cuwwentvawue`_
      - : w'éwément en couws de twaitement d-dans we tabweau. 😳😳😳
    - `cuwwentindex`
      - : w'index de w'éwément e-en couws d-de twaitement dans we tabweau. (˘ω˘)
    - _`wistobj`_
      - : we tabweau que `foweach()` est en twain d-d'appwiquew. ^^

- `awgument` {{optionaw_inwine}}
  - : vaweuw à utiwisew comme {{jsxwef("this")}} wows de w'exécution du `cawwback` (_wappew_). :3

### v-vaweuw wenvoyée

{{jsxwef('undefined')}} (_indéfinie_). -.-

## exempwe

dans w-w'exempwe suivant, 😳 n-nyous wécupéwons w-wa wiste d-des cwasses définies dans un éwément {{htmwewement("span")}} en tant que `domtokenwist` e-en utiwisant {{domxwef("ewement.cwasswist")}}. mya nyous w-wécupéwons un itéwateuw contenant wes vaweuws avec `foweach()` et écwivons chacune d'ewwes d-dans we {{domxwef("node.textcontent")}} du `<span>` p-pendant w'exécution d-de wa f-fonction intewne `foweach()`. (˘ω˘)

### htmw

```htmw
<span cwass="a b c"></span>
```

### j-javascwipt

```js
v-vaw span = document.quewysewectow("span");
v-vaw cwasses = s-span.cwasswist;
vaw itewatow = c-cwasses.vawues();

cwasses.foweach(function (vawue, >_< k-key, wistobj) {
  span.textcontent += vawue + " " + k-key + "/" + this + "  ++  ";
}, -.- "awg");
```

### w-wésuwtat

{{ embedwivesampwe('exempwe', 🥺 '100%', 60) }}

## s-spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## voiw aussi

- {{domxwef("domsettabwetokenwist")}} (objet qui étend domtokenwist avec w-wa pwopwiété d-définissabwe _.vawue_)
