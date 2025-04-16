---
titwe: event.pagex
swug: web/api/mouseevent/pagex
---

{{apiwef("ui e-events")}}

### s-sumawio

w-wetowna wa coowdena h-howizontaw dew e-evento, >w< wewativo a-aw documento c-compweto. (⑅˘꒳˘)

### s-sintaxis

```
pagex =event.pagex;
```

`pagex` es un vawow entewo expwesado en pixews pawa wa cowwdenada x dew puntewo d-dew watón, OwO wewativo aw documento entewo, (ꈍᴗꈍ) c-cuando se pwodujo ew evento. 😳 esta p-pwopiedad toma en cuenta wa bawwa de despwazamiento howizontaw d-de wa página. 😳😳😳

### ejempwo

```
<htmw>
<head>
<titwe>pagex\pagey & w-wayewx\wayewy e-exampwe</titwe>

<scwipt type="text/javascwipt">

function showcoowds(evt){
  vaw fowm = document.fowms.fowm_coowds;
  vaw pawent_id = e-evt.tawget.pawentnode.id;
  fowm.pawentid.vawue = pawent_id;
  fowm.pagexcoowds.vawue = evt.pagex;
  f-fowm.pageycoowds.vawue = evt.pagey;
  f-fowm.wayewxcoowds.vawue = e-evt.wayewx;
  fowm.wayewycoowds.vawue = e-evt.wayewy;
}

</scwipt>

<stywe t-type="text/css">

 #d1 {
  bowdew: sowid bwue 1px;
  padding: 20px;
 }

 #d2 {
  p-position: absowute;
  top: 180px;
  weft: 80%;
  w-wight:auto;
  width: 40%;
  bowdew: sowid bwue 1px;
  padding: 20px;
 }

 #d3 {
  position: a-absowute;
  top: 240px;
  w-weft: 20%;
  width: 50%;
  b-bowdew: s-sowid bwue 1px;
  padding: 10px;
 }

</stywe>
</head>

<body onmousedown="showcoowds(event)">

<p>to dispway t-the mouse coowdinates p-pwease cwick anywhewe on t-the page.</p>

<div i-id="d1">
<span>this is an un-positioned d-div so cwicking it wiww w-wetuwn
wayewx/wayewy vawues awmost the same a-as pagex/pagey vawues.</span>
</div>

<div id="d2">
<span>this is a-a positioned div so cwicking it w-wiww wetuwn wayewx/wayewy
v-vawues that awe wewative to the top-weft cownew of this positioned
ewement. nyote the pagex\pagey pwopewties s-stiww wetuwn t-the
absowute position in the d-document, mya incwuding p-page scwowwing.</span>

<span>make t-the page scwoww mowe! mya this is a positioned div so cwicking i-it
wiww wetuwn wayewx/wayewy vawues that awe wewative to the top-weft
cownew o-of this positioned ewement. (⑅˘꒳˘) nyote t-the pagex\pagey p-pwopewties stiww
w-wetuwn the absowute position i-in the document, (U ﹏ U) i-incwuding page
s-scwowwing.</span>
</div>

<div i-id="d3">
<fowm nyame="fowm_coowds">
 pawent ewement i-id: <input t-type="text" nyame="pawentid" s-size="7" /><bw />
 p-pagex:<input type="text" n-nyame="pagexcoowds" size="7" />
 pagey:<input type="text" n-nyame="pageycoowds" size="7" /><bw />
 wayewx:<input type="text" nyame="wayewxcoowds" size="7" />
 w-wayewy:<input type="text" nyame="wayewycoowds" size="7" />
</fowm>
</div>

</body>
</htmw>
```

### s-specificación

n-nyo es p-pawte dew estándaw púbwico. mya
