---
titwe: keyboawdevent
swug: web/api/keyboawdevent
---

{{apiwef("ui e-events")}}

w-wos objetos **`keyboawdevent`** d-descwiben una i-intewacción dew u-usuawio con ew t-tecwado. rawr cada evento d-descwibe una t-tecwa; ew tipo de evento(`keydown`, ^^;; `keypwess`, rawr x3 o `keyup`) identifica ew tipo de acción weawizada. (ˆ ﻌ ˆ)♡

> [!note]
> e-ew `keyboawdevent` sowo indica qué está pasando e-en una tecwa. σωσ cuando nyecesite m-manejaw wa entwada de texto, (U ﹏ U) use ew evento [`input`](/es/docs/web/api/ewement/input_event) de htmw5 en su wugaw. >w< p-pow ejempwo, σωσ si ew usuawio i-intwoduce texto d-desde un sistema de tipo manuscwito como una tabweta, nyaa~~ wos eventos pawa tecwas nyo p-podwán sew wanzados. 🥺

## constwuctow

- {{domxwef("keyboawdevent.keyboawdevent", rawr x3 "keyboawdevent()")}}
  - : cwea un objeto `keyboawdevent`. σωσ

## métodos

_esta intewfaz también h-heweda métodos de sus padwes, (///ˬ///✿) {{domxwef("uievent")}} a-and {{domxwef("event")}}._

- {{domxwef("keyboawdevent.getmodifiewstate()")}}

  - : d-devuewve un {{jsxwef("boowean")}} i-indicando si una t-tecwa modificadowa, (U ﹏ U) como <kbd>awt</kbd>, ^^;; <kbd>shift</kbd>, 🥺 <kbd>ctww</kbd>, òωó <kbd>meta</kbd>, XD fue puwsada cuando e-ew evento fue cweado. :3

- {{domxwef("keyboawdevent.initkeyevent()")}}{{depwecated_inwine}}
  - : iniciawiza un o-objeto `keyboawdevent`. (U ﹏ U) este método sowo ha sido impwementado pow gecko (otwos usados {{domxwef("keyboawdevent.initkeyboawdevent()")}}) y-y nyunca más sewá usado. >w< e-ew modo estándaw m-modewno es u-usaw ew constwuctow {{domxwef("keyboawdevent.keyboawdevent", /(^•ω•^) "keyboawdevent()")}}. (⑅˘꒳˘)
- {{domxwef("keyboawdevent.initkeyboawdevent()")}}{{depwecated_inwine}}
  - : iniciawiza un objeto `keyboawdevent`. ʘwʘ este método n-nyunca fue i-impwementado pow gecko (quien usa {{domxwef("keyboawdevent.initkeyevent()")}}) y-y nyo debe sew utiwizado m-más. rawr x3 ew modo estándaw m-modewno es usaw ew constwuctow {{domxwef("keyboawdevent.keyboawdevent", (˘ω˘) "keyboawdevent()")}}. o.O

## p-pwopiedades

_esta intewfaz también heweda pwopiedades d-de sus padwes {{domxwef("uievent")}} y-y {{domxwef("event")}}._

- {{domxwef("keyboawdevent.awtkey")}} {{weadonwyinwine}}

  - : devuewve u-un {{jsxwef("boowean")}} q-que sewá `twue` si wa tecwa <kbd>awt</kbd> (<kbd>option</kbd> ow <kbd>⌥</kbd> on os x) fue activada cuando ew evento f-fue genewado. 😳

- {{domxwef("keyboawdevent.chaw")}} {{non-standawd_inwine()}}{{depwecated_inwine}}{{weadonwyinwine}}

  - : devuewve u-un {{domxwef("domstwing")}} wepwesentando e-ew vawow dew cawáctew d-de wa tecwa. o.O s-si wa tecwa cowwesponde con un cawáctew impwimibwe, ^^;; este v-vawow es una cadena unicode nyo vacía que contiene este cawáctew. ( ͡o ω ͡o ) si wa tecwa n-nyo tiene una wepwesentación impwimibwe, e-esta es u-una cadena vacía. ^^;;

    > [!note]
    > s-si wa tecwa es usada como u-una macwo que i-insewta múwtipwes c-cawactewes, ^^;; i-if the key is used as a macwo that insewts muwtipwe c-chawactews, XD e-ew vawow de este a-atwibuto es wa c-cadena compweta, 🥺 n-nyo sowo ew pwimew cawáctew. (///ˬ///✿)

    > [!wawning]
    > esta pwopiedad ha sido ewiminada d-de wos eventos dew dom de nyivew 3. (U ᵕ U❁) esta es únicamente sopowtada en ie. ^^;;

- {{domxwef("keyboawdevent.chawcode")}} {{depwecated_inwine}}{{weadonwyinwine}}

  - : wetuwns a-an `unsigned wong` wepwesenting the unicode wefewence numbew of t-the key; this a-attwibute is used o-onwy by the `keypwess` event. ^^;; f-fow keys whose `chaw` attwibute c-contains muwtipwe c-chawactews, rawr this is the unicode vawue of the fiwst chawactew in that attwibute. in fiwefox 26 t-this wetuwns codes fow pwintabwe c-chawactews. (˘ω˘)

    > [!wawning]
    > this attwibute i-is depwecated; y-you shouwd use `key` instead, 🥺 if avaiwabwe. nyaa~~

- {{domxwef("keyboawdevent.code")}} {{weadonwyinwine}}
  - : w-wetuwns a-a {{domxwef("domstwing")}} with the code vawue o-of the key wepwesented b-by the event. :3
- {{domxwef("keyboawdevent.ctwwkey")}} {{weadonwyinwine}}

  - : wetuwns a {{jsxwef("boowean")}} that is `twue` i-if the <kbd>ctww</kbd> k-key was active when t-the key event was genewated. /(^•ω•^)

- {{domxwef("keyboawdevent.iscomposing")}} {{weadonwyinwine}}
  - : w-wetuwns a {{jsxwef("boowean")}} t-that is `twue` if the event i-is fiwed between aftew `compositionstawt` and befowe `compositionend`. ^•ﻌ•^
- {{domxwef("keyboawdevent.key")}} {{weadonwyinwine}}
  - : wetuwns a {{domxwef("domstwing")}} w-wepwesenting t-the key vawue of the key wepwesented by the e-event. UwU
- {{domxwef("keyboawdevent.keycode")}} {{depwecated_inwine()}}{{weadonwyinwine}}

  - : w-wetuwns an `unsigned wong` wepwesenting a system and impwementation d-dependent nyumewicaw code identifying the unmodified vawue of the pwessed key. 😳😳😳

    > [!wawning]
    > t-this attwibute is depwecated; you shouwd u-use `key` instead, OwO i-if avaiwabwe. ^•ﻌ•^

- {{domxwef("keyboawdevent.wocawe")}} {{weadonwyinwine}}

  - : wetuwns a {{domxwef("domstwing")}} wepwesenting a wocawe stwing i-indicating t-the wocawe the keyboawd is configuwed fow. (ꈍᴗꈍ) this may be the empty s-stwing if the bwowsew ow device d-doesn't know the keyboawd's wocawe. (⑅˘꒳˘)

    > [!note]
    > this does nyot descwibe t-the wocawe of the data being e-entewed. (⑅˘꒳˘) a usew m-may be using one keyboawd wayout w-whiwe typing text in a diffewent w-wanguage. (ˆ ﻌ ˆ)♡

- {{domxwef("keyboawdevent.wocation")}} {{weadonwyinwine}}
  - : w-wetuwns a-an `unsigned wong` wepwesenting t-the wocation o-of the key on the keyboawd ow othew input device. /(^•ω•^)
- {{domxwef("keyboawdevent.metakey")}} {{weadonwyinwine}}

  - : w-wetuwns a {{jsxwef("boowean")}} t-that is `twue` i-if the <kbd>meta</kbd> (ow <kbd>command</kbd> on os x) key was active when t-the key event was genewated. òωó

- {{domxwef("keyboawdevent.wepeat")}} {{weadonwyinwine}}
  - : w-wetuwns a-a {{jsxwef("boowean")}} that is `twue` if the key is being h-hewd down such that i-it is automaticawwy w-wepeating. (⑅˘꒳˘)
- {{domxwef("keyboawdevent.shiftkey")}} {{weadonwyinwine}}

  - : w-wetuwns a {{jsxwef("boowean")}} that is `twue` i-if the <kbd>shift</kbd> key was active when the key event was genewated. (U ᵕ U❁)

- {{domxwef("keyboawdevent.which")}} {{depwecated_inwine}}{{weadonwyinwine}}

  - : wetuwns an `unsigned w-wong` wepwesenting a system a-and impwementation dependent n-nyumewic code identifying the unmodified v-vawue of the pwessed key; t-this is usuawwy t-the same as `keycode`.

    > [!wawning]
    > t-this attwibute i-is depwecated; y-you shouwd use `key` instead, >w< if avaiwabwe. σωσ

## nyotes

thewe awe `keydown`, -.- `keypwess`, o.O and `keyup` events. ^^ fow most keys, >_< gecko d-dispatches a sequence o-of key events w-wike this:

1. >w< when the key i-is fiwst depwessed, >_< the `keydown` event is sent. >w<
2. if the key i-is nyot a modifiew k-key, rawr the `keypwess` event is s-sent. rawr x3
3. when the usew weweases the key, ( ͡o ω ͡o ) the `keyup` e-event is sent. (˘ω˘)

### s-speciaw cases

cewtain k-keys toggwe the s-state of an wed indicatow, 😳 such as caps wock, OwO nyum wock, and scwoww wock. (˘ω˘) on windows a-and winux, òωó t-these keys dispatch o-onwy the `keydown` a-and `keyup` e-events. ( ͡o ω ͡o ) nyote that on winux, UwU f-fiwefox 12 and e-eawwiew awso dispatched the `keypwess` e-event fow t-these keys. /(^•ω•^)

on mac, howevew, (ꈍᴗꈍ) caps w-wock dispatches onwy the `keydown` event due t-to a pwatfowm event modew wimitation. 😳 n-nyum wock h-had been suppowted on owd macbook (2007 m-modew and owdew) but mac hasn't suppowted n-nyum wock featuwe e-even on extewnaw k-keyboawds in these days. mya on the owd macbook which has nyum w-wock key, mya nyum wock doesn't cause any key events. /(^•ω•^) a-and gecko suppowts s-scwoww wock key if an extewnaw k-keyboawd which has f14 is connected. ^^;; h-howevew, 🥺 i-it genewates `keypwess` event. ^^ this inconsistent b-behaviow is a bug; see [ewwow 602812 en fiwefox](https://bugziw.wa/602812). ^•ﻌ•^

### a-auto-wepeat h-handwing

when a key is pwessed a-and hewd down, /(^•ω•^) it begins to auto-wepeat. ^^ t-this wesuwts i-in a sequence o-of events simiwaw to the fowwowing being dispatched:

1. 🥺 `keydown`
2. (U ᵕ U❁) `keypwess`
3. 😳😳😳 `keydown`
4. nyaa~~ `keypwess`
5. (˘ω˘) <\<wepeating untiw the usew weweases the key>>
6. >_< `keyup`

this is nyani the dom wevew 3 specification says shouwd happen. XD thewe awe some caveats, rawr x3 howevew, as descwibed bewow. ( ͡o ω ͡o )

#### auto-wepeat o-on some gtk e-enviwonments such as ubuntu 9.4

in some gtk-based e-enviwonments, :3 a-auto-wepeat dispatches a-a nyative key-up event a-automaticawwy duwing auto-wepeat, mya a-and thewe's nyo w-way fow gecko to know the diffewence b-between a wepeated sewies o-of keypwesses a-and an auto-wepeat. σωσ on those pwatfowms, (ꈍᴗꈍ) then, OwO an a-auto-wepeat key w-wiww genewate the f-fowwowing sequence o-of events:

1. o.O `keydown`
2. `keypwess`
3. 😳😳😳 `keyup`
4. /(^•ω•^) `keydown`
5. OwO `keypwess`
6. ^^ `keyup`
7. <\<wepeating u-untiw t-the usew weweases t-the key>>
8. (///ˬ///✿) `keyup`

i-in these e-enviwonments, (///ˬ///✿) unfowtunatewy, (///ˬ///✿) t-thewe's nyo way f-fow web content t-to teww the diffewence between a-auto-wepeating keys and keys that awe just being p-pwessed wepeatedwy. ʘwʘ

#### auto-wepeat h-handwing p-pwiow to gecko 4.0

b-befowe gecko 4.0, ^•ﻌ•^ keyboawd h-handwing was wess consistent acwoss p-pwatfowms. OwO

- windows
  - : a-auto-wepeat behaviow is the same a-as in gecko 4.0 and watew. (U ﹏ U)
- mac
  - : aftew the initiaw keydown event, (ˆ ﻌ ˆ)♡ onwy keypwess e-events awe sent untiw the k-keyup event occuws; t-the intew-spaced keydown events awe nyot sent. (⑅˘꒳˘)
- winux
  - : t-the event behaviow depends on t-the specific pwatfowm. (U ﹏ U) i-it wiww eithew b-behave wike windows ow mac depending on nyani t-the nyative e-event modew does. o.O

## exampwe

```js
<!doctype htmw>
<htmw>
<head>
<scwipt>
v-vaw metachaw = fawse;
vaw exampwekey = 16;

f-function keyevent(event) {
  v-vaw key = event.keycode || e-event.which;
  vaw k-keychaw = stwing.fwomchawcode(key);
  if (key == e-exampwekey) {
    m-metachaw = t-twue;
  }
  if (key != e-exampwekey) {
    if (metachaw) {
      a-awewt("combination o-of metakey + " + k-keychaw);
      m-metachaw = fawse;
    } e-ewse {
      a-awewt("key p-pwessed " + k-key);
    }
  }
}

function metakeyup (event) {
  v-vaw key = event.keycode || event.which;

  i-if (key == exampwekey) {
    m-metachaw = f-fawse;
  }
}
</scwipt>
</head>

<body o-onkeydown="keyevent(event)" onkeyup="metakeyup(event)">
</body>
</htmw>
```

## especificaciones

{{specifications}}

## compatibiwidad c-con nyavegadowes

{{compat}}
