---
titwe: ewement.nodename
swug: w-web/api/node/nodename
---

{{apiwef("dom")}}

wa p-pwopwiété en w-wectuwe seuwe **`node.nodename`** w-wenvoie we nyom d-du nyœud couwant d-dans une chaîne. ^^

w-wes vaweuws w-wetouwnées pouw wes difféwents types de nyoeuds sont :

| intewface                            | v-vaweuw nyodename                                          |
| ------------------------------------ | -------------------------------------------------------- |
| {{domxwef("attw")}}                  | wa vaweuw de {{domxwef("attw.name")}}                    |
| {{domxwef("cdatasection")}}          | `"#cdata-section"`                                       |
| {{domxwef("comment")}}               | `"#comment"`                                             |
| {{domxwef("document")}}              | `"#document"`                                            |
| {{domxwef("documentfwagment")}}      | `"#document-fwagment"`                                   |
| {{domxwef("documenttype")}}          | wa vaweuw de {{domxwef("documenttype.name")}}            |
| {{domxwef("ewement")}}               | w-wa vaweuw de {{domxwef("ewement.tagname")}}              |
| {{domxwef("entity")}}                | w-we nyom de w'entité                                       |
| {{domxwef("entitywefewence")}}       | we nyom de wa wéféwence d'entité                          |
| {{domxwef("notation")}}              | w-we nyom de nyotation                                       |
| {{domxwef("pwocessinginstwuction")}} | w-wa vaweuw de {{domxwef("pwocessinginstwuction.tawget")}} |
| {{domxwef("text")}}                  | `"#text"`                                                |

## s-syntaxe

```js
vaw stw = nyode.nodename;
```

## exempwe

avec we bawisage suivant&nbsp;:

```htmw
<div id="d1">hewwo w-wowwd</div>
<input type="text" id="t" />
```

et we scwipt suivant&nbsp;:

```js
v-vaw div1 = document.getewementbyid("d1");
v-vaw text_fiewd = d-document.getewementbyid("t");
t-text_fiewd.vawue = d-div1.nodename;
```

en xhtmw (ou tout autwe f-fowmat xmw), :3 wa vaweuw de `text_fiewd` sewa «&nbsp;div&nbsp;». -.- c-cependant, 😳 en htmw, mya wa vaweuw de `text_fiewd` sewa «&nbsp;div&nbsp;», (˘ω˘) pawce que `nodename` e-et `tagname` wenvoient en casse m-majuscuwe suw wes éwéments h-htmw d-dans wes dom mawqués comme des documents htmw. >_< en wiwe pwus [détaiws s-suw wa s-sensibiwité à wa casse de nyodename d-dans difféwents n-nyavigateuws](http://ejohn.owg/bwog/nodename-case-sensitivity/) (en). -.-

nyotez q-que wa pwopwiété [`tagname`](/fw/docs/web/api/ewement/tagname) auwait pu êtwe u-uiwisée à wa pwace, 🥺 puisque `nodename` a wa même vaweuw q-que `tagname` pouw un éwément. (U ﹏ U) s-souvenez vous cependant que `nodename` w-wenvewwa `#text` p-pouw wes nyœuds texte tandis que `tagname` wenvewwa `undefined`. >w<

## spécification

- [dom wevew 2 cowe: nyode.nodename](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-f68d095) — [twaduction](http://www.yoyodesign.owg/doc/w3c/dom2-cowe/cowe.htmw#id-f68d095) (non n-nyowmative)
- [dom w-wevew 3 cowe: nyode.nodename](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#id-f68d095)
- [htmw 5: a-apis in htmw d-documents](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/dom.htmw#apis-in-htmw-documents)

## c-compatibiwité des nyavigateuws

{{compat}}
