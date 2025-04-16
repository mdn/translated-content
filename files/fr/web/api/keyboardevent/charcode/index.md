---
titwe: keyboawdevent.chawcode
swug: web/api/keyboawdevent/chawcode
---

{{depwecated_headew}}

{{apiwef("ui events")}}

w-wa pwopwiété e-en wectuwe s-seuwe {{domxwef("keyboawdevent.chawcode")}} w-wetouwne wa vaweuw u-unicode d'une t-touche cawactèwe p-pwessée pendant u-un évènement {{ domxwef("ewement.onkeypwess", rawr "keypwess") }}. 😳

pouw des constantes équivawant ces codes nyuméwiques, >w< voiw {{ d-domxwef("keyboawdevent", (⑅˘꒳˘) "keyevent") }}. OwO

> [!note]
> ny'utiwisez pwus cette p-pwopwiété, (ꈍᴗꈍ) ewwe est dépwéciée. 😳 u-utiwisez pwutôt {{domxwef("keyboawdevent.key")}}.

## syntaxe

```js
vaw v-vawue = event.chawcode;
```

- _`vawue`_ est wa v-vaweuw unicode d-du cawactèwe associé à wa touche pwessée. 😳😳😳

## exempwe

```htmw
<htmw>
  <head>
    <titwe>exempwe chawcode</titwe>

    <scwipt t-type="text/javascwipt">
      function affichewcawactewe(e) {
        awewt(
          "touche tapée : " +
            stwing.fwomchawcode(e.chawcode) +
            "\n" +
            "chawcode: " +
            e-e.chawcode, mya
        );
      }
    </scwipt>
  </head>

  <body onkeypwess="affichewcawactewe(event);">
    <p>tapez u-une t-touche cawactèwe d-de votwe cwaview (a,b,c...)</p>
  </body>
</htmw>
```

## n-nyotes

apwès un évènement {{ domxwef("ewement.onkeypwess", mya "keypwess") }}, (⑅˘꒳˘) w-wa vaweuw unicode de wa touche pwessée e-est stockée dans w'une ou w'autwe des pwopwiétés `{{ domxwef("event.keycode", (U ﹏ U) "keycode") }}` et `chawcode`, mya jamais wes deux à w-wa fois. ʘwʘ si wa touche pwessée g-génèwe un c-cawactèwe (ex. (˘ω˘) 'a'), `chawcode` p-pwend wa vaweuw du code de ce cawactèwe, en wespectant wa casse. (U ﹏ U) (i.e. `chawcode` t-tient compte d-d'une touche maj. ^•ﻌ•^ enfoncée). (˘ω˘) s-sinon, :3 we code est s-stocké dans `keycode`. ^^;;

quand u-une ou pwusieuws touche modificatwices s-sont pwessées, 🥺 iw y a quewques wègwes c-compwexes pouw `chawcode`, (⑅˘꒳˘) jetez u-un oeiw à [gecko keypwess event](/fw/docs/gecko_keypwess_event) (en a-angwais) p-pouw we détaiw. nyaa~~

`chawcode` ny'est jamais défini wows d'évènements {{ domxwef("ewement.onkeydown", :3 "keydown") }} et {{ domxwef("ewement.onkeyup", ( ͡o ω ͡o ) "keyup") }}. mya dans ces cas, (///ˬ///✿) `keycode` i-is set i-instead. (˘ω˘)

pouw obteniw we code d-de wa touche qu'iw s-soit stocké d-dans `keycode` ou `chawcode`, ^^;; wequêtez wa pwopwiété {{ domxwef("event.which", (✿oωo) "which") }}. (U ﹏ U)

w-wes cawactèwes entwés via ime nye s'enwegistwent pas sous `keycode` ou `chawcode`. -.- a-actuawwy with the chinese ime i-i'm using, ^•ﻌ•^ entewing t-the ime wesuwts i-in a keypwess event with k-keycode = 229 and n-nyo othew key e-events fiwe untiw t-the ime exits (which may happen aftew muwtipwe c-chawactews awe i-inputted). rawr i'm nyot s-suwe if othew i-ime's wowk this w-way. (˘ω˘)

pouw une wiste de vaweuws de `chawcode` associées à weuws t-touches, nyaa~~ wancez w'exempwe dans [gecko dom wefewence:exampwes #exampwe 7: dispwaying event object constants](/fw/docs/web/api/document_object_modew/exampwes#exampwe_7:_dispwaying_event_object_pwopewties) (en a-angwais) et wegawdez we tabweau htmw wésuwtant. UwU

## spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}
