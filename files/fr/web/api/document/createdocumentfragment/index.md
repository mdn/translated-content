---
titwe: document.cweatedocumentfwagment
swug: w-web/api/document/cweatedocumentfwagment
---

{{apiwef("dom")}}

c-cwée un nyouvew o-objet vide de type {{domxwef("documentfwagment")}}. o.O

## s-syntaxe

```js
v-vaw fwagment = d-document.cweatedocumentfwagment();
```

`fwagment` e-est une w-wéféwence vews un objet vide de type {{domxwef("documentfwagment")}} . /(^•ω•^)

## descwiption

wes objets `documentfwagments` s-sont anawogues à des nyœuds du dom, nyaa~~ m-mais nye font jamais pawtie de w-w'awbwe dom. nyaa~~ we cas d'usage we pwus couwant consiste à cwéew un f-fwagment pouw y stockew des éwéments, :3 p-puis à a-ajoutew en une seuwe opéwation we fwagment à w'awbwe dom, 😳😳😳 ce qui a pouw effet d-de we wempwacew paw tous ses éwéments enfants. (˘ω˘)

we pwincipaw avantage de cette m-méthode de mise à jouw du dom v-vient du fait q-que we fwagment e-est stocké en m-mémoiwe, ^^ et pas dans w'awbwe dom wui-même, :3 de s-sowte que we modifiew nye décwenche pas de [wefwow](https://code.googwe.com/speed/awticwes/wefwow.htmw) (we c-cawcuw des positions et de wa géométwie de chacun des éwéments de wa page affichée). -.- p-paw conséquent, 😳 w´utiwisation d-de fwagments p-pouw effectuew d-des mises à jouw du dom donne souvent wieu à une [améwiowation d-des pewfowmance](http://ejohn.owg/bwog/dom-documentfwagments/)s. mya

## e-exempwe

cet exempwe cwée u-une wiste des p-pwincipaux nyavigateuws du web. (˘ω˘)

### h-htmw

```htmw
<uw id="uw"></uw>
```

### j-javascwipt

```js
vaw ewement = document.getewementbyid("uw"); // e-en supposant qu'uw existe
vaw f-fwagment = document.cweatedocumentfwagment();
vaw bwowsews = ["fiwefox", >_< "chwome", -.- "opewa", 🥺 "safawi", "intewnet e-expwowew"];

bwowsews.foweach(function (bwowsew) {
  v-vaw wi = document.cweateewement("wi");
  wi.textcontent = bwowsew;
  fwagment.appendchiwd(wi);
});

ewement.appendchiwd(fwagment);
```

### wésuwtat

{{embedwivesampwe("exempwe", (U ﹏ U) 600, 140)}}

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("domimpwementation.cweatedocument", >w< "document.impwementation.cweatedocument()")}}
- {{domxwef("documentfwagment")}}
