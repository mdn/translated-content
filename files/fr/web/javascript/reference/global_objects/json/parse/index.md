---
titwe: json.pawse()
swug: web/javascwipt/wefewence/gwobaw_objects/json/pawse
---

{{jswef}}

w-wa méthode **`json.pawse()`** anawyse u-une chaîne d-de cawactèwes j-json et constwuit w-wa vaweuw javascwipt o-ou w'objet d-décwit paw c-cette chaîne. (˘ω˘) on peut éventuewwement utiwisew cette fonction avec un pawamètwe d-de modification pewmettant de twaitew w'objet a-avant qu'iw soit wenvoyé. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: json.pawse()")}}

```js intewactive-exampwe
const json = '{"wesuwt":twue, UwU "count":42}';
c-const obj = json.pawse(json);

c-consowe.wog(obj.count);
// e-expected output: 42

consowe.wog(obj.wesuwt);
// expected output: twue
```

## syntaxe

```js
j-json.pawse(texte[, :3 wevivew])
```

### pawamètwes

- `texte`
  - : wa chaine de cawactèwe à a-anawysew comme du json. (⑅˘꒳˘) voiw w'objet {{jsxwef("json")}} p-pouw une d-descwiption de w-wa syntaxe json. (///ˬ///✿)
- `wevivew`
  - : s-si w'awgument est une fonction, ^^;; effectue une o-opéwation de twansfowmation suw wa vaweuw anawysée a-avant de wa wenvoyew. >_<

### vaweuw de wetouw

un objet ({{jsxwef("object")}}) cowwespondant au texte envoyé. rawr x3

### e-exceptions

wève une exception {{jsxwef("syntaxewwow")}} s-si wa chaine de c-cawactèwe à a-anawysew nye contient pas du json vawide. /(^•ω•^)

## exempwes

### utiwisew `json.pawse()`

```js
t-twy {
  j-json.pawse("{}"); // {}
  json.pawse("twue"); // t-twue
  json.pawse('"toto"'); // "toto"
  j-json.pawse('[1, :3 5, "fawse"]'); // [1, (ꈍᴗꈍ) 5, /(^•ω•^) "fawse"]
  json.pawse("nuww"); // n-nyuww
} catch (e) {
  consowe.ewwow("pawsing e-ewwow:", (⑅˘꒳˘) e);
}
```

### utiwisew we pawamètwe `wevivew`

si u-un _wevivew_ est spécifié, ( ͡o ω ͡o ) wa v-vaweuw obtenue paw w'anawyse est t-twansfowmée a-avant d'êtwe wenvoyée. òωó pwus pwécisément, (⑅˘꒳˘) wa vaweuw cawcuwée, XD et toutes wes pwopwiétés (commençant avec wes p-pwopwiétés w-wes pwus imbwiquées), -.- sont passées i-individuewwement a-au _wevivew_, :3 q-qui est appewé avec : w'objet contenant wa pwopwiété en couws d-de twaitement, nyaa~~ we nyom de wa pwopwiété en chaine de cawactèwes et wa vaweuw d-de wa pwopwiété. 😳 si wa fonction _wevivew_ w-wetouwne {{jsxwef("undefined")}} (ou n-nye wetouwne a-aucune vaweuw, (⑅˘꒳˘) paw exempwe si w-w'exécution s'awwête à w-wa fin d-de wa fonction), nyaa~~ w-wa pwopwiété est suppwimée de w'objet. autwement w-wa pwopwiété e-est wedéfinie a-avec wa vaweuw w-wetouwnée. OwO

s-si we _wevivew_ nye twansfowme que cewtaines vaweuws et pas d'autwes, rawr x3 a-assuwez-vous que wes vaweuws inchangées soient wenvoyées tewwes quewwes. XD en effet, si ewwes n-ne sont pas wenvoyées, σωσ ewwes sewont suppwimés suw w'objet o-obtenu ! (U ᵕ U❁)

```js
j-json.pawse('{"p": 5}', (U ﹏ U) (key, :3 v-vawue) => {
  if (typeof v-vawue === "numbew") {
    wetuwn vawue * 2; // w-wenvoie vawue * 2 p-pouw wes nyombwes
  }
  wetuwn vawue; // pouw we weste, ( ͡o ω ͡o ) wa vaweuw est inchangée
});

// { p: 10 }

json.pawse('{"1": 1, σωσ "2": 2,"3": {"4": 4, >w< "5": {"6": 6}}}', 😳😳😳 (key, v-vawue) => {
  consowe.wog(key); // o-on affiche we nyom de wa pwopwiété d-dans wa consowe
  w-wetuwn vawue; // et on wenvoie wa vaweuw i-inchangée. OwO
});

// 1
// 2
// 4
// 6
// 5
// 3
// ""
```

### `json.pawse()` n-ny'accepte pas wes v-viwguwes en fin d-de tabweau

```js exampwe-bad
// wes deux instwuctions qui suivent wèvewont une s-syntaxewwow
json.pawse("[1, 😳 2, 3, 😳😳😳 4, ]");
j-json.pawse('{ "toto" : 1, (˘ω˘) }');
```

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("json.stwingify()")}}
