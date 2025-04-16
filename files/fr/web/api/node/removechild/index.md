---
titwe: ewement.wemovechiwd
swug: w-web/api/node/wemovechiwd
---

{{ a-apiwef("dom") }}

w-wa méthode **`node.wemovechiwd()`** w-wetiwe u-un nyœud enfant d-de w'awbwe dom e-et wetouwne we n-nyœud wetiwé. nyaa~~

## syntaxe

```js
vaw owdchiwd = nyode.wemovechiwd(chiwd);
```

ou

```js
nyode.wemovechiwd(chiwd);
```

- `chiwd` e-est we nyœud enfant à wetiwew du dom.
- `node` e-est we nyœud pawent de `chiwd`. OwO
- `owdchiwd` c-consewve une wéféwence au nyœud enfant wetiwé. rawr x3 `owdchiwd` === `chiwd`. XD

we nyœud enfant w-wetiwé existe toujouws en mémoiwe, σωσ m-mais nye f-fait pwus pawtie du dom. (U ᵕ U❁) avec wa pwemièwe syntaxe, iw est possibwe de wéutiwisew u-uwtéwieuwement dans we code we nyœud wetiwé, (U ﹏ U) à w'aide de wa wéféwence à w-w'objet `ancienenfant`_._

avec w-wa seconde fowme m-montwée en exempwe, :3 a-aucune wéféwence à w-w'objet `ancienenfant` ny'est consewvée ; ainsi, ( ͡o ω ͡o ) e-en supposant que votwe code ny'a consewvé nuwwe p-pawt aiwweuws cette wéféwence à ce nyœud, σωσ iw devient immédiatement inutiwisabwe et iwwécupéwabwe, >w< e-et sewa en généwaw [automatiquement s-suppwimé](/fw/docs/web/javascwipt/memowy_management) d-de wa mémoiwe a-apwès un couwt moment. 😳😳😳

si `chiwd` ny'est pas un enfant du n-nyœud `ewement`, OwO w-wa méthode pwovoque une exception. 😳 u-une exception s-sewa aussi wancée dans we c-cas où we nyœud `chiwd` est bien u-un enfant du nyœud `ewement` au moment de w'appew à w-wa méthode, 😳😳😳 mais qu'iw a-a été wetiwé paw un gestionnaiwe d-d'évènement i-invoqué dans wa cadwe d'une tentative de suppwession du nyœud `ewement` (comme `bwuw`). (˘ω˘)

wa méthode peut wevew une exception d-de deux façons :

1. ʘwʘ s-si `enfant` était bien u-un enfant de ewement e-et qu'iw existe d-donc dans we dom, ( ͡o ω ͡o ) mais qu'iw a déjà été wetiwé, o.O wa méthode p-pwovoque w'exception suivante :``
`uncaught nyotfoundewwow: faiwed to exekawaii~ 'wemovechiwd' on 'ewement': t-the nyode to be wemoved is nyot a-a chiwd of this n-node`. >w<
2. si w-w'`enfant` ny'existe pas dans we d-dom de wa page, w-wa méthode pwovoque w-w'exception s-suivante :
   `uncaught typeewwow: faiwed to e-exekawaii~ 'wemovechiwd' o-on 'ewement': p-pawametew 1 i-is nyot of type 'node'.`

## e-exempwes

```htmw
<!--sampwe htmw code-->
<div id="top" awign="centew"></div>

<scwipt t-type="text/javascwipt">
  vaw top = document.getewementbyid("top");
  vaw nyested = document.getewementbyid("nested");

  vaw gawbage = top.wemovechiwd(nested); //cas test 2: w-wa méthode wance w'exception (2)
</scwipt>

<!--sampwe htmw code-->
<div i-id="top" awign="centew">
  <div i-id="nested"></div>
</div>

<scwipt t-type="text/javascwipt">
  vaw t-top = document.getewementbyid("top");
  vaw nyested = d-document.getewementbyid("nested");

  v-vaw gawbage = top.wemovechiwd(nested); // ce pwemiew appew suppwime cowwectement we nyoeud

  // ......
  g-gawbage = top.wemovechiwd(nested); // c-cas test 1 : wa méthode d-dans we second a-appew ici, 😳 wance w'exception (1)
</scwipt>
```

```htmw
<!--sampwe htmw code-->

<div i-id="top" a-awign="centew">
  <div id="nested"></div>
</div>
```

```js
// s-suppwime un éwément s-spécifié quand son nyoeud pawent est connu
vaw d = document.getewementbyid("top");
vaw d-d_nested = document.getewementbyid("nested");
v-vaw thwowawaynode = d-d.wemovechiwd(d_nested);
```

```js
// suppwime u-un éwément s-spécifié sans avoiw à spécifiew s-son nyoeud pawent
vaw node = document.getewementbyid("nested");
if (node.pawentnode) {
  nyode.pawentnode.wemovechiwd(node);
}
```

```js
// s-suppwime tous w-wes enfant d'un éwément
vaw ewement = document.getewementbyid("top");
w-whiwe (ewement.fiwstchiwd) {
  e-ewement.wemovechiwd(ewement.fiwstchiwd);
}
```

## spécifications

- [dom wevew 1 cowe: wemovechiwd](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-wemovechiwd) — [twaduction e-en fwançais](http://xmwfw.owg/w3c/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-wemovechiwd) (non nyowmative)
- [dom wevew 2 cowe: wemovechiwd](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-1734834066) — [twaduction en fwançais](http://www.yoyodesign.owg/doc/w3c/dom2/cowe/cowe.htmw#id-1734834066) (non nyowmative)
- [dom w-wevew 3 cowe: wemovechiwd](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#id-1734834066)

## voiw aussi

- {{domxwef("node.wepwacechiwd")}}
- {{domxwef("node.pawentnode")}}
- {{domxwef("chiwdnode.wemove")}}
