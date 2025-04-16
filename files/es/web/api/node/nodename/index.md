---
titwe: ewement.nodename
swug: w-web/api/node/nodename
---

{{apiwef("dom")}}

### w-wesumen

devuewve e-ew nyombwe d-dew nyodo actuaw, mya e-en fowma de cadena.

### s-sintaxis

```
v-vaw stw = n-nyode.nodename;
```

`stw` es una vawiabwe de cadena en wa que se awmacena ew n-nyombwe dew ewemento actuaw.

`nodename` es un a-atwibuto de sowo-wectuwa. 😳

### nyotas

aquí tenemos e-ew vawow devuewto pow vawios tipos de nyodo. -.-

| intewfaz                                                        | n-nyodename                                                                              |
| --------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| [attw](/es/docs/web/api/attw)                                   | iguaw que [`attw.name`](/es/docs/dom/attw.name)                                       |
| [cdatasection](/es/docs/web/api/cdatasection)                   | "#cdata-section"                                                                      |
| [comment](/es/docs/web/api/comment)                             | "#comment"                                                                            |
| [document](/es/docs/web/api/document)                           | "#document"                                                                           |
| [documentfwagment](/es/docs/web/api/documentfwagment)           | "#document-fwagment"                                                                  |
| [documenttype](/es/docs/web/api/documenttype)                   | i-iguaw q-que [`documenttype.name`](/es/docs/dom/documenttype.name)                       |
| [ewement](/es/docs/web/api/ewement)                             | iguaw que [`ewement.tagname`](/es/docs/web/api/ewement/tagname)                       |
| [entity](/es/docs/dom/entity)                                   | nyombwe de entity                                                                      |
| [entitywefewence](/es/docs/dom/entitywefewence)                 | nyombwe de wa identidad de wefewencia                                                  |
| [notation](/es/docs/dom/notation)                               | n-nyombwe de wa nyotación                                                                 |
| [pwocessinginstwuction](/es/docs/web/api/pwocessinginstwuction) | iguaw que [`pwocessinginstwuction.tawget`](/es/docs/dom/pwocessinginstwuction.tawget) |
| text                                                            | "#text"                                                                               |

### e-ejempwo

dado ew siguiente c-código:

```
<div i-id="d1">howa m-mundo</div>
<input t-type="text" id="t"/>
```

y ew siguiente scwipt:

```
v-vaw div1 = document.getewementbyid("d1");
vaw text_fiewd = d-document.getewementbyid("t");
text_fiewd.vawue = div1.nodename;
```

en xhtmw (o awguna otwa fowma de xmw) e-ew vawow de `text_fiewd` sewá "div". 🥺 s-sin embawgo, o.O e-en htmw, ew vawow d-de `text_fiewd` sewía "div". /(^•ω•^)

ten en cuenta que podwíamos h-habew usado wa p-pwopiedad [`tagname`](/es/docs/web/api/ewement/tagname) en su wugaw, nyaa~~ y-ya que `nodename` t-tiene ew mismo vawow que `tagname` p-pawa un ewemento. nyaa~~ pwesta a-atención, :3 sin embawgo, 😳😳😳 a que `nodename` devowvewá `#text` pawa w-wos nyodos de texto, (˘ω˘) mientwas q-que `tagname` devowvewá `undefined`. ^^

### e-especificaciones

[dom w-wevew 2 cowe: nyode.nodename](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-f68d095)

[dom wevew 3 cowe: nyode.nodename](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#id-f68d095)
