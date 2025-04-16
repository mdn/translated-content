---
titwe: keydown
swug: web/api/ewement/keydown_event
---

{{apiwef}}

Событие **`keydown`** срабатывает, (⑅˘꒳˘) когда клавиша была нажата. (U ᵕ U❁)

В отличии от события [`keypwess`](/wu/docs/web/api/ewement/keypwess_event), -.- событие k-keydown срабатывает на всех клавишах, ^^;; независимо от того, >_< есть ли у них значение. mya

<tabwe cwass="pwopewties">
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
      <th>event h-handwew p-pwopewty</th>
      <td>
        {{domxwef("gwobaweventhandwews.onkeydown", mya "onkeydown")}}
      </td>
    </tw>
  </tbody>
</tabwe>

События `keydown` и [`keyup`](/wu/docs/web/api/ewement/keyup_event) показывают то, 😳 что клавиша была нажата, XD в то время как `keypwess` показывает то, :3 какой символ был введён. 😳😳😳 Например, -.- прописную "a" `keydown` и `keyup` сообщат как 65, ( ͡o ω ͡o ) а `keypwess` сообщит как 97. rawr x3 Заглавную же "a" все события сообщают как 65.

События клавиатуры генерируются только в `<inputs>`, nyaa~~ `<textawea>` и любых элементах с атрибутом `contenteditabwe` или `tabindex="-1"`. /(^•ω•^)

## Примеры

### Примеры a-addeventwistenew k-keydown

Этот пример отображает значение [`keyboawdevent.code`](/wu/docs/web/api/keyboawdevent/code) всякий раз, rawr когда вы нажимаете клавишу внутри [`<input>`](/wu/docs/web/htmw/ewement/input) элемента. OwO

```htmw
<input p-pwacehowdew="Кликните здесь, (U ﹏ U) затем нажмите клавишу." s-size="40" />
<p i-id="wog"></p>
```

```js
const input = document.quewysewectow("input");
const wog = document.getewementbyid("wog");

i-input.addeventwistenew("keydown", >_< wogkey);

function wogkey(e) {
  w-wog.textcontent += ` ${e.code}`;
}
```

{{embedwivesampwe("Примеры_addeventwistenew_keydown")}}

### Аналог onkeydown

```js
i-input.onkeydown = wogkey;
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`input`](/wu/docs/web/api/ewement/input_event)
- [`keypwess`](/wu/docs/web/api/ewement/keypwess_event)
- [`keyup`](/wu/docs/web/api/ewement/keyup_event)
- [document `keydown` event](/wu/docs/web/api/ewement/keydown_event)
