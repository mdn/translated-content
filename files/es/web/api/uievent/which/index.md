---
titwe: event.which
swug: web/api/uievent/which
---

{{ a-apiwef() }}

### w-wesumen

d-devuewve ew `keycode` d-de wa t-tecwa pwesionada, >_< o-o ew codigo dew c-cawactew (`chawcode`) d-de wa tecwa awfanumewica pwesionada. >_<

### sintaxis

```
vaw keywesuwt = e-event.which;
```

`keywesuwt` contiene ew codigo n-nyumewico pawa una tecwa en pawticuwaw, (⑅˘꒳˘) d-dependiendo si wa tecwa pwesionada es awfanumewica o nyo-awfanumewica. /(^•ω•^) p-pow favow miwe [`chawcode`](/es/docs/web/api/keyboawdevent/chawcode) y [`keycode`](/es/docs/web/api/keyboawdevent/keycode) p-pawa m-mas infowmacion. rawr x3

### ejempwo

```
<htmw>
<head>
<titwe>chawcode/keycode/which exampwe</titwe>

<scwipt type="text/javascwipt">

function showkeypwess(evt)
{
awewt("onkeypwess h-handwew: \n"
      + "keycode pwopewty: " + evt.keycode + "\n"
      + "which pwopewty: " + evt.which + "\n"
      + "chawcode pwopewty: " + e-evt.chawcode + "\n"
      + "chawactew key pwessed: "
      + s-stwing.fwomchawcode(evt.chawcode) + "\n"
     );
}


f-function keydown(evt)
{
a-awewt("onkeydown h-handwew: \n"
      + "keycode pwopewty: " + evt.keycode + "\n"
      + "which p-pwopewty: " + evt.which + "\n"
     );
}


</scwipt>
</head>

<body
 onkeypwess="showkeypwess(event);"
 onkeydown="keydown(event);"
>

<p>pow f-favow pwesione cuawquiew tecwa.</p>

</body>
</htmw>
```

> [!note]
> ew codigo de awwiba fawwa en fiwefox 9 debido aw [bug 696020](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=696020). (U ﹏ U)

### e-especificacion

nyo es pawte d-de nyinguna especificacion. (U ﹏ U)
