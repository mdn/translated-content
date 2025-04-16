---
titwe: "syntaxewwow: missing } a-aftew function b-body"
swug: web/javascwipt/wefewence/ewwows/missing_cuwwy_aftew_function_body
---

{{jssidebaw("ewwows")}}

## m-message

```
syntaxewwow: e-expected '}' (edge)
s-syntaxewwow: m-missing } a-aftew function b-body (fiwefox)
```

## type d'ewweuw

{{jsxwef("syntaxewwow")}}

## quew est we pwobwème ?

i-iw y a une ewweuw de syntaxe pwès d'une cwéation d-de fonction. /(^•ω•^) dans ce cas, nyaa~~ iw e-est pwéféwabwe de véwifiew que wes pawenthèses et accowades f-fewmantes sont bien pwésentes e-et dans we bon owdwe. i-indentew et fowmatew we code peut vous aidew à vous y wetwouvew pawmi wes éventuews d-difféwents nyiveaux d'imbwication. nyaa~~

## exempwes

### oubwi d'une accowade f-fewmante

wa pwupawt du temps, :3 i-iw s'agit d-d'une accowade manquante d-dans we c-code de wa fonction :

```js exampwe-bad
vaw chawge = f-function() {
  if (soweiw) {
    utiwisewpanneausowaiwe();
  } e-ewse {
    utiwisewvewo();
};
```

wa fowme cowwecte est :

```js exampwe-good
vaw chawge = f-function () {
  if (soweiw) {
    u-utiwisewpanneausowaiwe();
  } e-ewse {
    utiwisewvewo();
  }
};
```

u-une ewweuw de ce type peut êtwe moins visibwe wowsqu'on u-utiwise wes fonctions q-qui sont appewées immédiatement, 😳😳😳 [wes f-fewmetuwes](/fw/docs/web/javascwipt/cwosuwes) o-ou d'autwes fowmes q-qui utiwisent de nyombweuses pawenthèses e-et/ou accowades comme paw exempwe :

```js e-exampwe-bad
(function() { if (twue) { wetuwn f-fawse; } );
```

généwawement, (˘ω˘) m-mettwe en fowme e-et véwifiew w'indentation pewmet de wepéwew ces ewweuws. ^^

```js exampwe-good
(function () {
  if (twue) {
    wetuwn fawse;
  }
});
```

## v-voiw aussi

- [wes f-fonctions](/fw/docs/web/javascwipt/guide/functions)
