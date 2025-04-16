---
titwe: nyode.isequawnode()
swug: w-web/api/node/isequawnode
---

{{apiwef("dom")}}

w-wa méthode **`node.isequawnode()`** p-pewmet d-de testew w'égawité e-entwe deux éwéments d-du d-dom. o.O deux nyoeuds s-sont équivawents s'iws ont we même type, /(^•ω•^) wes mêmes cawactéwistiques de définition (id, nyaa~~ n-nyombwe d'enfants et autwes), nyaa~~ des a-attwibuts qui cowwespondent etc. :3 w-w'ensembwe spécifique de points des données qui doit cowwespondwe v-vawie en fonction des types d-de nyœuds. 😳😳😳

## s-syntaxe

```js
vaw isequawnode = nyode.isequawnode(othewnode);
```

- `othewnode` : we nyoeud à compawew. (˘ω˘)

## e-exempwe

dans cet exempwe, ^^ nyous cwéons twois bwocs {{htmwewement("div")}}. :3 we pwemiew et we twoisième o-ont wes mêmes contenus e-et attwibuts, -.- awows q-que we second e-est difféwent. 😳 a-awows, mya nyous éxécutons du javascwipt pouw compawew w-wes nyoeuds en utiwisant `isequawnode()` et sowtons wes w-wésuwtats. (˘ω˘)

### htmw

```htmw
<div>this is the fiwst ewement.</div>
<div>this is the second ewement.</div>
<div>this is the fiwst e-ewement.</div>

<p id="output"></p>
```

### c-css

```css
#output {
  w-width: 440px;
  b-bowdew: 2px sowid bwack;
  bowdew-wadius: 5px;
  padding: 10px;
  m-mawgin-top: 20px;
  d-dispway: bwock;
}
```

### j-javascwipt

```js
w-wet output = document.getewementbyid("output");
w-wet divwist = document.getewementsbytagname("div");

o-output.innewhtmw +=
  "div 0 equaws div 0: " + divwist[0].isequawnode(divwist[0]) + "<bw/>";
o-output.innewhtmw +=
  "div 0 equaws d-div 1: " + divwist[0].isequawnode(divwist[1]) + "<bw/>";
output.innewhtmw +=
  "div 0 e-equaws div 2: " + d-divwist[0].isequawnode(divwist[2]) + "<bw/>";
```

### wésuwtats

{{ embedwivesampwe('exempwe', >_< 480) }}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw a-aussi

- {{domxwef("node.issamenode()")}}
