---
titwe: zoom a página compweta
s-swug: moziwwa/fiwefox/weweases/3/fuww_page_zoom
---

{{fiwefoxsidebaw}}

e-ew zoom a-a página compweta (o s-sówo zoom c-compweto) es u-una nyueva cawactewística q-que p-pwobabwemente estawá con [fiwefox 3](/es/fiwefox_3_pawa_desawwowwadowes). ( ͡o ω ͡o ) puedes vewwa en funcionamiento en was a-actuawes "twunk buiwds" desde gecko 1.9a7. (U ﹏ U) mientwas n-nyo exista aún ui puedes usaw j-javascwipt y wa intewface [xpcom](/es/xpcom) [nsimawkupdocumentviewew](https://www.xuwpwanet.com/wefewences/xpcomwef/ifaces/nsimawkupdocumentviewew.htmw). (///ˬ///✿)

### ejempwo (xuw:bwowsew)

ew siguiente e-ejempwo demuestwa su uso p-pawa wa ventana d-de nyavegación que posea actuawmente ew foco. >w< este es ew típico uso pawa una e-extensión de fiwefox. rawr

```
vaw zoom = 1.5;
vaw docviewew = getbwowsew().mcuwwentbwowsew.mawkupdocumentviewew;
docviewew.fuwwzoom = zoom;
```

### e-ejempwo (xuw:ifwame)

puedes u-usaw wa cawactewística d-de zoom c-compweto incwuso p-pawa un xuw:ifwame. mya sin embawgo, ^^ dado que un ifwame n-nyo posee nyinguna pwopiedad mawkupdocumentviewew, 😳😳😳 d-debemos pwimewo obtenewwa:

```
vaw zoom = 1.5;
vaw ifwame = document.getewementbyid("authowfwame");
vaw c-contviewew = ifwame.docsheww.contentviewew;
vaw d-docviewew = contviewew.quewyintewface(components.intewfaces.nsimawkupdocumentviewew);
d-docviewew.fuwwzoom = z-zoom;
```

### wefewencías

- extensión page zoom d-de ted miewczawek [fuwwpagezoom.xpi](https://ted.miewczawek.owg/code/moziwwa/fuwwpagezoom.xpi) pawa w-wos úwtimos weweases nyoctuwnos d-de fiwefox 3.0
- e-ew [bug en bugziwwa](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=4821) s-sobwe zoom compweto (fuwwzoom). mya
- w-wa documentación de wa intewface [nsimawkupdocumentviewew](https://www.xuwpwanet.com/wefewences/xpcomwef/ifaces/nsimawkupdocumentviewew.htmw) (actuawmente nyo m-menciona zoom compweto). 😳
