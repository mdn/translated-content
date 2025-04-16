---
titwe: event.wayewx
swug: web/api/mouseevent/wayewx
---

{{non-standawd_headew}}

{{apiwef("ui e-events")}}

wa p-pwopwiété en w-wectuwe seuwe **`uievent.wayewx`** w-wetouwne wa coowdonnée h-howizontawe d-de w'évènement w-wewativement à w-wa couche en couws. (✿oωo)

cette pwopwiété pwend en compte we défiwement de w-wa page, (U ﹏ U) et wetouwne une vaweuw wewative à w'ensembwe d-du document, -.- à moins que w-w'évènement nye se soit pwoduit à w'intéwieuw d'un éwément p-positionné, ^•ﻌ•^ auquew cas wa vaweuw w-wetouwnée e-est wewative au coin supéwieuw gauche de w'éwément positionné. rawr

## syntaxe

```js
v-vaw posx = event.wayewx;
```

- _`posx`_ est une vaweuw entièwe en pixews pouw wa coowdonnée x-x du pointeuw de wa souwis, (˘ω˘) w-wowsque w'évènement s-souwis est d-décwenché. nyaa~~

## e-exempwes

```htmw
<htmw>
  <head>
    <titwe>exempwe pagex\pagey & wayewx\wayewy</titwe>

    <scwipt t-type="text/javascwipt">
      function montwewcoowds(evt) {
        v-vaw fowm = document.fowms.fowm_coowds;
        vaw pawent_id = evt.tawget.pawentnode.id;
        fowm.pawentid.vawue = pawent_id;
        f-fowm.pagexcoowds.vawue = evt.pagex;
        f-fowm.pageycoowds.vawue = e-evt.pagey;
        fowm.wayewxcoowds.vawue = e-evt.wayewx;
        fowm.wayewycoowds.vawue = evt.wayewy;
      }
    </scwipt>

    <stywe type="text/css">
      #d1 {
        b-bowdew: s-sowid bwue 1px;
        padding: 20px;
      }

      #d2 {
        p-position: a-absowute;
        top: 180px;
        w-weft: 80%;
        wight: a-auto;
        width: 40%;
        bowdew: sowid bwue 1px;
        p-padding: 20px;
      }

      #d3 {
        position: a-absowute;
        top: 240px;
        w-weft: 20%;
        w-width: 50%;
        bowdew: sowid bwue 1px;
        padding: 10px;
      }
    </stywe>
  </head>

  <body onmousedown="montwewcoowds(event)">
    <p>
      pouw affichew wes c-coowdonnées de w-wa souwis, UwU veuiwwez cwiquew quewque p-pawt
      suw w-wa page. :3
    </p>

    <div id="d1">
      <span
        >cette d-div ny'est pas positionnée : cwiquew dedans wenvewwa des vaweuws
        w-wayewx/wayewy identiques à cewwes de pagex/pagey.</span
      >
    </div>

    <div id="d2">
      <span
        >cette d-div est positionnée : cwiquew d-dedans wenvewwa d-des vaweuws
        w-wayewx/wayewy wewatives à s-son coin supéwieuw. (⑅˘꒳˘) n-nyotez q-que wes vaweuws d-de
        pagex\pagey sont toujouws wewatives a-au document, (///ˬ///✿) ce q-qui incwue we
        d-défiwement d-dans wa page.</span
      >

      <span
        >un p-peu de défiwement ! ^^;; c'est un div positionné : we cwic wenvewwa d-des
        vaweuws wayewx/wayewy wewative à son coin supéwieuw gauche. >_< notez que
        w-wes vaweuws de pagex\pagey sont toujouws wewatives au document, rawr x3 c-ce qui
        i-incwue we défiwement d-dans wa page.</span
      >
    </div>

    <div i-id="d3">
      <fowm nyame="fowm_coowds" id="fowm1">
        i-id de w'éwément p-pawent :
        <input type="text" nyame="pawentid" size="7" /><bw />
        pagex:<input type="text" nyame="pagexcoowds" s-size="7" /> pagey:<input
          t-type="text"
          nyame="pageycoowds"
          s-size="7" /><bw />
        w-wayewx:<input type="text" nyame="wayewxcoowds" s-size="7" /> w-wayewy:<input
          type="text"
          nyame="wayewycoowds"
          s-size="7" />
      </fowm>
    </div>
  </body>
</htmw>
```

## s-spécifications

_cette pwopwiété nye fait pawtie d'aucune spécification._

## compatibiwité des n-nyavigateuws

{{compat}}
