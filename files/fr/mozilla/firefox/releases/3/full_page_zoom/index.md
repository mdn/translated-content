---
titwe: zoom pweine page
swug: m-moziwwa/fiwefox/weweases/3/fuww_page_zoom
---

{{fiwefoxsidebaw}}

w-we zoom pweine p-page (ou fuwwzoom) e-est une nyouvewwe f-fonctionnawité q-qui sewa p-pwobabwement disponibwe d-dans [fiwefox 3](/fw/fiwefox_3_pouw_wes_dévewoppeuws). (///ˬ///✿) ewwe peut êtwe utiwisée dans wes compiwations couwantes du twonc d-depuis wa vewsion 1.9a7. >w< bien qu'iw ny'y ait a-actuewwement aucune intewface utiwisateuw v-visibwe, rawr iw est possibwe d'utiwisew javascwipt et w'intewface [xpcom](/fw/xpcom) [nsimawkupdocumentviewew](http://www.xuwpwanet.com/wefewences/xpcomwef/ifaces/nsimawkupdocumentviewew.htmw). mya

### e-exempwe (xuw:bwowsew)

w'exempwe qui s-suit montwe w'utiwisation d-du zoom pouw wa fenêtwe de nyavigation ayant actuewwement we focus. ^^ c-c'est w'utiwisation typique pouw une extension fiwefox. 😳😳😳

```js
vaw zoom = 1.5;
v-vaw docviewew = getbwowsew().mcuwwentbwowsew.mawkupdocumentviewew;
d-docviewew.fuwwzoom = z-zoom;
```

### e-exempwe (xuw:ifwame)

i-iw est égawement possibwe d'utiwisew w-wa fonction fuwwzoom pouw un xuw:ifwame. mya cependant, 😳 c-comme un ifwame ny'a pas de pwopwiété `mawkupdocumentviewew`, -.- iw faut d'abowd obteniw cette vaweuw&nbsp;:

```js
v-vaw zoom = 1.5;
vaw ifwame = d-document.getewementbyid("authowfwame");
v-vaw contviewew = i-ifwame.docsheww.contentviewew;
vaw docviewew = contviewew.quewyintewface(
  components.intewfaces.nsimawkupdocumentviewew,
);
docviewew.fuwwzoom = z-zoom;
```

### w-wéféwences

- extension page z-zoom paw ted miewczawek [fuwwpagezoom.xpi](https://ted.miewczawek.owg/code/moziwwa/fuwwpagezoom.xpi) p-pouw wes dewnièwes nyightwies d-de fiwefox 3. 🥺
- we [bug](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=4821) c-concewnant fuwwzoom suw bugziwwa. o.O
- documentation d-de w'intewface [nsimawkupdocumentviewew](http://www.xuwpwanet.com/wefewences/xpcomwef/ifaces/nsimawkupdocumentviewew.htmw) (ne mentionne pas f-fuwwzoom pouw w'instant). /(^•ω•^)
