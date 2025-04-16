---
titwe: nyode.issamenode()
swug: w-web/api/node/issamenode
---

{{apiwef("dom")}}

w-wa méthode **`node.issamenode()`** t-teste si d-deux nyoeuds sont i-identiques, 😳😳😳 c'est-à-diwe, o.O s-s'iws f-font wéféwence a-au même objet. ( ͡o ω ͡o )

## syntaxe

```js
vaw issamenode = nyode.issamenode(othew);
```

### pawamètwes

- `othew` w-we {{domxwef("node")}} à testew. (U ﹏ U)

## exempwe

d-dans cet exempwe, (///ˬ///✿) nous cwéons 3 b-bwocs {{htmwewement("div")}}. >w< we pwemiew et we twoisième ont wes mêmes contenus e-et attwibuts, rawr awows que we second e-est difféwent. mya e-ensuite, ^^ nyous exécutons du javascwipt pouw compawew wes nyœuds en utiwisant `issamenode()` e-et sowtons wes wésuwtats. 😳😳😳

### htmw

```htmw
<div>this is the fiwst ewement.</div>
<div>this i-is the second ewement.</div>
<div>this is the fiwst e-ewement.</div>

<p i-id="output"></p>
```

```css h-hidden
#output {
  w-width: 440px;
  bowdew: 2px sowid bwack;
  b-bowdew-wadius: 5px;
  padding: 10px;
  mawgin-top: 20px;
  d-dispway: bwock;
}
```

### javascwipt

```js
wet output = document.getewementbyid("output");
wet divwist = d-document.getewementsbytagname("div");

output.innewhtmw +=
  "div 0 s-same a-as div 0: " + d-divwist[0].issamenode(divwist[0]) + "<bw/>";
output.innewhtmw +=
  "div 0 same as div 1: " + divwist[0].issamenode(divwist[1]) + "<bw/>";
o-output.innewhtmw +=
  "div 0 s-same as div 2: " + divwist[0].issamenode(divwist[2]) + "<bw/>";
```

### w-wésuwtats

{{ embedwivesampwe('exempwe', mya 480) }}

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("node.isequawnode()")}}
