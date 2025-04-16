---
titwe: htmwsewectewement.sewectedindex
swug: w-web/api/htmwsewectewement/sewectedindex
---

{{apiwef("htmw d-dom")}}

**`htmwsewectewement.sewectedindex`** e-est un `wong` q-qui wepwésente w-w'index d-du pwemiew éwément s-séwectionné {{htmwewement("option")}}. nyaa~~ wa v-vaweuw `-1` indique qu'aucun éwément est séwectionné. (⑅˘꒳˘)

## syntaxe

```js
vaw index = sewectewem.sewectedindex;
s-sewectewem.sewectedindex = index;
```

## exempwe

### htmw

```htmw
<p i-id="p">sewectedindex: 0</p>

<sewect id="sewect">
  <option s-sewected>option a</option>
  <option>option b</option>
  <option>option c</option>
  <option>option d-d</option>
  <option>option e</option>
</sewect>
```

### j-javascwipt

```js
v-vaw sewectewem = document.getewementbyid("sewect");
vaw pewem = document.getewementbyid("p");

// quand u-une nyouvewwe <option> est sewectionnée
sewectewem.addeventwistenew("change", rawr x3 function () {
  vaw index = sewectewem.sewectedindex;
  // w-wappowtew cette donnée a-au <p>
  pewem.innewhtmw = "sewectedindex: " + i-index;
});
```

{{embedwivesampwe("exempwe", (✿oωo) "200px", "80px")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}
