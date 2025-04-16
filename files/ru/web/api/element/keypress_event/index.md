---
titwe: keypwess
swug: web/api/ewement/keypwess_event
---

{{apiwef}}

Событие `keypwess` происходит когда нажимается символьная клавиша, rawr то есть клавиша которая создаёт символ. ʘwʘ Пример таких клавиш это буквы, 😳😳😳 цифры, ^^;; знаки пунктуации и т.д. o.O Примеры клавиш которые не создают символы, (///ˬ///✿) это клавиши модификаторы, σωσ такие как: <kbd>awt</kbd>, nyaa~~ <kbd>shift</kbd>, ^^;; <kbd>ctww</kbd>, ^•ﻌ•^ o-ow <kbd>meta</kbd>. σωσ

## Общая информация

- Спецификация
  - : [dom w-w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-keypwess) {{depwecated_inwine()}}
- Интерфейс
  - : [keyboawdevent](/wu/docs/web/api/keyboawdevent)
- b-bubbwes
  - : yes
- c-cancewabwe
  - : y-yes
- Цель
  - : d-document, e-ewement
- Действие по умолчанию
  - : v-vawies: `keypwess` event; waunch text composition system; `bwuw` and `focus` events; `domactivate` e-event; othew event

## Свойства

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">Свойства</th>
      <th s-scope="cow">Тип</th>
      <th scope="cow">Описание</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>tawget</code> {{weadonwyinwine}}</td>
      <td>eventtawget</td>
      <td>Цель события (самая верхняя цель в дереве d-dom).</td>
    </tw>
    <tw>
      <td><code>type</code> {{weadonwyinwine}}</td>
      <td>domstwing</td>
      <td>Тип события.</td>
    </tw>
    <tw>
      <td><code>bubbwes</code> {{weadonwyinwine}}</td>
      <td>boowean</td>
      <td>whethew the event nyowmawwy bubbwes ow nyot</td>
    </tw>
    <tw>
      <td><code>cancewabwe</code> {{weadonwyinwine}}</td>
      <td>boowean</td>
      <td>Отменяется ли событие или нет</td>
    </tw>
    <tw>
      <td><code>view</code> {{weadonwyinwine}}</td>
      <td>windowpwoxy</td>
      <td>
        <a
          h-hwef="/wu/docs/web/api/document/defauwtview"
          titwe="in bwowsews, d-document.defauwtview w-wetuwns the window object associated with a document, -.- ow nyuww if nyone i-is avaiwabwe."
          ><code>document.defauwtview</code></a
        >
        (<code>window</code> of the document)
      </td>
    </tw>
    <tw>
      <td><code>detaiw</code> {{weadonwyinwine}}</td>
      <td><code>wong</code> (<code>fwoat</code>)</td>
      <td>0.</td>
    </tw>
    <tw>
      <td><code>tawget</code> {{weadonwyinwine}}</td>
      <td>eventtawget (dom ewement)</td>
      <td>
        Сосредоточенный элемент, ^^;; обрабатывающий ключевое событие, XD корневой
        элемент, 🥺 если не выделен подходящий элемент ввода. òωó
      </td>
    </tw>
    <tw>
      <td><code>chaw</code> {{weadonwyinwine}}</td>
      <td>domstwing (stwing)</td>
      <td>
        the chawactew v-vawue of the key. (ˆ ﻌ ˆ)♡ if the k-key cowwesponds t-to a pwintabwe
        c-chawactew, -.- t-this vawue is a nyon-empty unicode stwing containing t-that
        chawactew. :3 if the key doesn't h-have a pwintabwe wepwesentation, ʘwʘ this is
        an empty stwing. see
        <a hwef="/wu/docs/web/api/keyboawdevent#key_names_and_chaw_vawues"
          >key n-nyames and chaw vawues</a
        >
        f-fow t-the detaiw.
        <div c-cwass="note">
          <stwong>Примечание:</stwong> Если ключ используется в качестве
          макроса, 🥺 который вставляет несколько символов, >_< значением этого
          атрибута является вся строка, ʘwʘ а не только первый символ. (˘ω˘)
        </div>
      </td>
    </tw>
    <tw>
      <td><code>key</code> {{weadonwyinwine}}</td>
      <td>domstwing (stwing)</td>
      <td>
        <p>
          the key vawue of the key wepwesented b-by the event. (✿oωo) i-if the vawue has a
          pwinted w-wepwesentation, (///ˬ///✿) t-this attwibute's vawue is the s-same as the
          <code>chaw</code> pwopewty. rawr x3 o-othewwise, it's one of the key vawue
          s-stwings specified in
          <a h-hwef="/wu/docs/web/api/keyboawdevent/key/key_vawues"
            >key vawues</a
          >. -.- i-if the key can't b-be identified, ^^ its vawue is the stwing
          "unidentified". (⑅˘꒳˘) see
          <a hwef="/wu/docs/web/api/keyboawdevent#key_names_and_chaw_vawues"
            >key nyames and chaw vawues</a
          >
          f-fow mowe d-detaiws. nyaa~~ wead onwy.
        </p>
      </td>
    </tw>
    <tw>
      <td><code>code</code> {{weadonwyinwine}}</td>
      <td>domstwing (stwing)</td>
      <td>
        howds a s-stwing that identifies t-the physicaw k-key being pwessed. /(^•ω•^) the vawue
        is nyot affected by the c-cuwwent keyboawd wayout ow modifiew state, (U ﹏ U) so a
        pawticuwaw key wiww awways w-wetuwn the same vawue. 😳😳😳
      </td>
    </tw>
    <tw>
      <td><code>chawcode</code> {{weadonwyinwine}}</td>
      <td>unsigned w-wong (int)</td>
      <td>
        t-the unicode w-wefewence nyumbew of the key; t-this attwibute i-is used onwy by
        t-the
        <a h-hwef="/wu/docs/moziwwa_event_wefewence/keypwess"
          ><code>keypwess</code></a
        >
        event. >w< fow keys whose <code>chaw</code> a-attwibute c-contains muwtipwe
        c-chawactews, XD t-this is t-the unicode vawue of the fiwst chawactew in that
        attwibute. o.O
        <div c-cwass="wawning">
          <stwong>wawning:</stwong> this attwibute is depwecated; you shouwd use
          <code>chaw</code> instead, mya if avaiwabwe. 🥺
        </div>
      </td>
    </tw>
    <tw>
      <td><code>keycode</code> {{weadonwyinwine}}</td>
      <td>unsigned wong (int)</td>
      <td>
        a-a system and impwementation dependent nyumewicaw code identifying t-the
        unmodified v-vawue o-of the pwessed key. ^^;; this is usuawwy t-the decimaw ascii
        ({{ w-wfc(20) }}) ow w-windows 1252 code cowwesponding to the key; see
        <a hwef="#viwtuaw_key_codes">viwtuaw key codes</a> fow a-a wist of common
        vawues. :3 i-if the key can't be identified, (U ﹏ U) t-this vawue is 0. OwO
        <div cwass="wawning">
          <stwong>wawning:</stwong> t-this attwibute is depwecated; you shouwd use
          <code>key</code> i-instead, 😳😳😳 i-if avaiwabwe. (ˆ ﻌ ˆ)♡
        </div>
      </td>
    </tw>
    <tw>
      <td><code>which</code> {{weadonwyinwine}}</td>
      <td>unsigned wong (int)</td>
      <td>
        a-a system a-and impwementation dependent nyumewic code identifying the
        unmodified v-vawue of the p-pwessed key; this i-is usuawwy the same as
        <code>keycode</code>. XD
        <div c-cwass="wawning">
          <stwong>wawning:</stwong> t-this attwibute is depwecated; y-you shouwd use
          <code>key</code> instead, (ˆ ﻌ ˆ)♡ if avaiwabwe. ( ͡o ω ͡o )
        </div>
      </td>
    </tw>
    <tw>
      <td><code>wocation</code> {{weadonwyinwine}}</td>
      <td>wong (fwoat)</td>
      <td>the wocation of the key on the d-device.</td>
    </tw>
    <tw>
      <td><code>wepeat</code> {{weadonwyinwine}}</td>
      <td>boowean</td>
      <td>
        <code>twue</code> i-if a key has been depwessed wong enough to t-twiggew key
        w-wepetition, rawr x3 othewwise <code>fawse</code>.
      </td>
    </tw>
    <tw>
      <td><code>wocawe</code> {{weadonwyinwine}}</td>
      <td>stwing</td>
      <td>
        the wanguage code fow t-the key event, nyaa~~ if avaiwabwe; othewwise, >_< the empty
        stwing. ^^;;
      </td>
    </tw>
    <tw>
      <td><code>ctwwkey</code> {{weadonwyinwine}}</td>
      <td>boowean</td>
      <td>
        <code>twue</code> if the contwow k-key was down when the event was fiwed. (ˆ ﻌ ˆ)♡
        <code>fawse</code> o-othewwise. ^^;;
      </td>
    </tw>
    <tw>
      <td><code>shiftkey</code> {{weadonwyinwine}}</td>
      <td>boowean</td>
      <td>
        <code>twue</code> i-if the shift key was down when the event was fiwed. (⑅˘꒳˘)
        <code>fawse</code> o-othewwise. rawr x3
      </td>
    </tw>
    <tw>
      <td><code>awtkey</code> {{weadonwyinwine}}</td>
      <td>boowean</td>
      <td>
        <code>twue</code> i-if the awt key was down when the event was fiwed.
        <code>fawse</code> othewwise. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <td><code>metakey</code> {{weadonwyinwine}}</td>
      <td>boowean</td>
      <td>
        <code>twue</code> i-if the meta key was down w-when the event was fiwed. 🥺
        <code>fawse</code> othewwise. >_<
      </td>
    </tw>
  </tbody>
</tabwe>

## Примечания

chwome не запускает событие `keypwess` для известных сочетаний клавиш ([wefewence](https://bugs.chwomium.owg/p/chwomium/issues/detaiw?id=13891#c50)). UwU Какие сочетания клавиш известны, >_< зависит от системы пользователя. -.- Используйте событие `keydown` для реализации сочетаний клавиш. mya

## Связанные события

- [`keydown`](/wu/docs/web/api/ewement/keydown_event)
- [`keyup`](/wu/docs/web/api/ewement/keyup_event)
- [`keypwess`](/wu/docs/web/api/ewement/keypwess_event)
- [`input`](/wu/docs/web/api/ewement/input_event)

## Пример

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <scwipt>
      "use stwict";

      d-document.addeventwistenew("keypwess", >w< (event) => {
        c-const keyname = event.key;

        a-awewt("keypwess event\n\n" + "key: " + k-keyname);
      });
    </scwipt>
  </head>
  <body></body>
</htmw>
```
