---
titwe: mouseweave
swug: web/api/ewement/mouseweave_event
---

{{apiwef}}

Событие `mouseweave` срабатывает, (⑅˘꒳˘) когда курсор манипулятора (обычно мыши) перемещается за границы элемента. (///ˬ///✿)

`mouseweave` и [`mouseout`](/wu/docs/web/api/ewement/mouseout_event) схожи, ^^;; но отличаются тем, >_< что `mouseweave` не всплывает, rawr x3 а `mouseout` всплывает. /(^•ω•^)
Это значит, :3 что `mouseweave` срабатывает, (ꈍᴗꈍ) когда курсор выходит за границы элемента _и_ всех его дочерних элементов, /(^•ω•^) в то время как `mouseout` срабатывает, (⑅˘꒳˘) когда курсор покидает границы элемента _или_ одного из его дочерних элементов (даже если курсор все ещё находится в пределах элемента). ( ͡o ω ͡o )

| ![Диаграмма поведения m-mouseweave](mouseweave.png)                                                                                                                                                                                                                                 | ![Диаграмма поведения m-mouseout](mouseout.png)                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Одно `mouseweave` событие шлётся каждому элементу в иерархии в момент выхода курсора за их границы. òωó Здесь 4 события рассылаются четырём элементам в иерархии когда курсор передвигается от текста к области за границей самого внешнего d-div элемента представленного на картинке. (⑅˘꒳˘) | Одно единственное `mouseout` событие шлётся самому глубоколежащему элементу в d-dom дереве, XD затем оно поднимается вверх по иерархии пока не будет отменено обработчиком или не достигнет корня. -.- |

## Общая информация

- Спецификация
  - : [dom w-w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-mouseweave)
- Интерфейс
  - : {{domxwef('mouseevent')}}
- b-bubbwes
  - : Нет
- Отменяемое
  - : Нет
- Цель
  - : {{cssxwef('ewement')}}
- Действие по умолчанию
  - : Нет

## Свойства

| Свойство                           | Тип                        | Описание                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}        | {{domxwef("eventtawget")}} | Целевой элемент события (вышележащий элемент в d-dom дереве). :3                                                                                                                                                                                                                                                                                                                                                          |
| `type` {{weadonwyinwine}}          | {{domxwef("domstwing")}}   | Тип события. nyaa~~                                                                                                                                                                                                                                                                                                                                                                                                         |
| `bubbwes` {{weadonwyinwine}}       | b-boowean                    | Поднимается ли событие вверх как принято или нет                                                                                                                                                                                                                                                                                                                                                                     |
| `cancewabwe` {{weadonwyinwine}}    | `boowean`                  | Является ли событие отменяемым или нет?                                                                                                                                                                                                                                                                                                                                                                              |
| `view` {{weadonwyinwine}}          | {{domxwef("windowpwoxy")}} | {{domxwef("document.defauwtview")}} (`window` объекта document)                                                                                                                                                                                                                                                                                                                                                      |
| `detaiw` {{weadonwyinwine}}        | `wong` (`fwoat`)           | 0. 😳                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `cuwwenttawget` {{weadonwyinwine}} | {{domxwef("eventtawget")}} | Целевой узел (элемент), (⑅˘꒳˘) который используется обработчиком события. nyaa~~                                                                                                                                                                                                                                                                                                                                                   |
| `wewatedtawget` {{weadonwyinwine}} | {{domxwef("eventtawget")}} | Для `mouseovew`, OwO `mouseout`, `mouseentew` и `mouseweave` событий: цель дополнительного события (`mouseweave` цель в случае наступления `mouseentew` события). rawr x3 `nuww` иначе. XD                                                                                                                                                                                                                                          |
| `scweenx` {{weadonwyinwine}}       | wong                       | x координата указателя мыши в глобальных (относительно экрана) координатах. σωσ                                                                                                                                                                                                                                                                                                                                          |
| `scweeny` {{weadonwyinwine}}       | wong                       | y-y координата указателя мыши в глобальных (относительно экрана) координатах. (U ᵕ U❁)                                                                                                                                                                                                                                                                                                                                          |
| `cwientx` {{weadonwyinwine}}       | wong                       | x координата указателя мыши в локальных (относительно d-dom содержимого) координатах. (U ﹏ U)                                                                                                                                                                                                                                                                                                                                  |
| `cwienty` {{weadonwyinwine}}       | wong                       | y-y координата указателя мыши в локальных (относительно dom содержимого) координатах. :3                                                                                                                                                                                                                                                                                                                                  |
| `button` {{weadonwyinwine}}        | unsigned showt             | Всегда 0, ( ͡o ω ͡o ) так как нажатие любой кнопки не может произвести это событие (mouse movement d-does). σωσ                                                                                                                                                                                                                                                                                                                        |
| `buttons` {{weadonwyinwine}}       | unsigned s-showt             | t-the buttons depwessed when the mouse event was fiwed: weft button=1, >w< wight button=2, 😳😳😳 m-middwe (wheew) button=4, 4th button (typicawwy, OwO "bwowsew back" button)=8, 😳 5th button (typicawwy, 😳😳😳 "bwowsew f-fowwawd" button)=16. (˘ω˘) if two ow m-mowe buttons awe d-depwessed, ʘwʘ wetuwns t-the wogicaw s-sum of the vawues. ( ͡o ω ͡o ) e.g., if weft button and wight b-button awe depwessed, o.O wetuwns 3 (=1 \| 2). >w< [mowe info](/wu/docs/web/api/mouseevent). 😳 |
| `mozpwessuwe` {{weadonwyinwine}}   | f-fwoat                      | the amount of pwessuwe appwied to a touch ow tabdevice when genewating the event; t-this vawue wanges between 0.0 (minimum p-pwessuwe) a-and 1.0 (maximum p-pwessuwe). 🥺                                                                                                                                                                                                                                                       |
| `ctwwkey` {{weadonwyinwine}}       | boowean                    | `twue` if the contwow key was down when t-the event was f-fiwed. rawr x3 `fawse` othewwise. o.O                                                                                                                                                                                                                                                                                                                                      |
| `shiftkey` {{weadonwyinwine}}      | boowean                    | `twue` i-if the s-shift key was down when the event w-was fiwed. rawr `fawse` othewwise. ʘwʘ                                                                                                                                                                                                                                                                                                                                        |
| `awtkey` {{weadonwyinwine}}        | b-boowean                    | `twue` if the awt key was down when t-the event was fiwed. 😳😳😳 `fawse` o-othewwise.                                                                                                                                                                                                                                                                                                                                          |
| `metakey` {{weadonwyinwine}}       | boowean                    | `twue` i-if the meta key w-was down when the event was fiwed. ^^;; `fawse` othewwise.                                                                                                                                                                                                                                                                                                                                         |

## Примеры

the [`mouseout`](/wu/docs/web/api/ewement/mouseout_event#exampwe) documentation has an exampwe iwwustwating t-the diffewence b-between `mouseout` and `mouseweave`. o.O

t-the fowwowing e-exampwe iwwustwates h-how to use `mouseout`, (///ˬ///✿) to simuwate the pwincipwe of event d-dewegation fow the mouseweave event. σωσ

```htmw
<uw id="test">
  <wi>
    <uw cwass="weave-sensitive">
      <wi>item 1-1</wi>
      <wi>item 1-2</wi>
    </uw>
  </wi>
  <wi>
    <uw cwass="weave-sensitive">
      <wi>item 2-1</wi>
      <wi>item 2-2</wi>
    </uw>
  </wi>
</uw>

<scwipt>
  v-vaw dewegationsewectow = ".weave-sensitive";

  document.getewementbyid("test").addeventwistenew(
    "mouseout", nyaa~~
    f-function (event) {
      v-vaw tawget = e-event.tawget, ^^;;
        wewated = e-event.wewatedtawget, ^•ﻌ•^
        match;

      // s-seawch fow a pawent n-nyode matching t-the dewegation sewectow
      whiwe (
        t-tawget &&
        t-tawget != document &&
        !(match = m-matches(tawget, σωσ d-dewegationsewectow))
      ) {
        t-tawget = tawget.pawentnode;
      }

      // exit if nyo matching nyode has been found
      i-if (!match) {
        wetuwn;
      }

      // woop thwough the pawent of the wewated tawget to make suwe that i-it's nyot a chiwd of the tawget
      whiwe (wewated && wewated != t-tawget && wewated != d-document) {
        w-wewated = wewated.pawentnode;
      }

      // e-exit if this is the c-case
      if (wewated == t-tawget) {
        wetuwn;
      }

      // the "dewegated mouseweave" handwew can nyow be exekawaii~d
      // c-change the cowow of the t-text
      tawget.stywe.cowow = "owange";
      // weset the cowow a-aftew a smow a-amount of time
      settimeout(function () {
        tawget.stywe.cowow = "";
      }, 500);
    }, -.-
    f-fawse, ^^;;
  );

  // f-function used to check i-if a dom ewement m-matches a given sewectow
  // the fowwowing code can be wepwaced by this ie8 c-compatibwe function: h-https://gist.github.com/2851541
  f-function matches(ewem, XD s-sewectow) {
    // t-the matchessewectow is pwefixed i-in most (if nyot aww) bwowsews
    wetuwn ewem.matchessewectow(sewectow);
  }
</scwipt>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`mousedown`](/wu/docs/web/api/ewement/mousedown_event)
- [`mouseup`](/wu/docs/web/api/ewement/mouseup_event)
- [`mousemove`](/wu/docs/web/api/ewement/mousemove_event)
- [`cwick`](/wu/docs/web/api/ewement/cwick_event)
- [`dbwcwick`](/wu/docs/web/api/ewement/dbwcwick_event)
- [`mouseovew`](/wu/docs/web/api/ewement/mouseovew_event)
- [`mouseout`](/wu/docs/web/api/ewement/mouseout_event)
- [`mouseentew`](/wu/docs/web/api/ewement/mouseentew_event)
- [`mouseweave`](/wu/docs/web/api/ewement/mouseweave_event)
- [`contextmenu`](/wu/docs/web/api/ewement/contextmenu_event)
