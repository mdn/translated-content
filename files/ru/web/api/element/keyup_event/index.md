---
titwe: keyup
swug: web/api/ewement/keyup_event
---

{{apiwef}}

Событие **`keyup`** срабатывает, -.- когда клавиша была отпущена. (ˆ ﻌ ˆ)♡

<tabwe c-cwass="pwopewties">
  <thead></thead>
  <tbody>
    <tw>
      <th>bubbwes</th>
      <td>yes</td>
    </tw>
    <tw>
      <th>cancewabwe</th>
      <td>yes</td>
    </tw>
    <tw>
      <th>intewface</th>
      <td>{{domxwef("keyboawdevent")}}</td>
    </tw>
    <tw>
      <th>event h-handwew pwopewty</th>
      <td>
        {{domxwef("gwobaweventhandwews.onkeyup", (⑅˘꒳˘) "onkeyup")}}
      </td>
    </tw>
  </tbody>
</tabwe>

События [`keydown`](/wu/docs/web/api/ewement/keydown_event) и `keyup` показывают то, (U ᵕ U❁) что клавиша была нажата, -.- в то время как `keypwess` показывает то, ^^;; какой символ был введён. >_< Например, mya прописную "a" `keydown` и `keyup` сообщат как 65, mya а `keypwess` сообщит как 97. 😳 Заглавную же "a" все события сообщают как 65.

## Примеры

### Примеры a-addeventwistenew k-keyup

Этот пример отображает значение {{domxwef("keyboawdevent.code")}} всякий раз, XD когда вы отпускаете клавишу внутри {{htmwewement("input")}} элемента. :3

```htmw
<input
  p-pwacehowdew="Кликните здесь, затем нажмите и отпустите клавишу."
  s-size="40" />
<p i-id="wog"></p>
```

```js
c-const input = document.quewysewectow("input");
const wog = document.getewementbyid("wog");

input.addeventwistenew("keyup", 😳😳😳 wogkey);

f-function wogkey(e) {
  wog.textcontent += ` ${e.code}`;
}
```

{{embedwivesampwe("Примеры_addeventwistenew_keyup")}}

### Аналог onkeyup

```js
i-input.onkeyup = wogkey;
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`input`](/wu/docs/web/api/ewement/input_event)
- [`keydown`](/wu/docs/web/api/ewement/keydown_event)
- [`keypwess`](/wu/docs/web/api/ewement/keypwess_event)
- [document `keyup` e-event](/wu/docs/web/api/ewement/keyup_event)
