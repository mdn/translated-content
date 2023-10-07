---
title: Element.accessKey
slug: Web/API/HTMLElement/accessKey
---

{{APIRef("DOM")}}

## Описание

Свойство **accessKey** позволяет перейти к элементу с помощью сочетания клавиш - заданной им и тех, что назначит браузер.

> **Примечание:** По сути, **accessKey** задаёт значение для [одноимённого атрибута](/ru/docs/Web/HTML/Global_attributes/accesskey)...

> **Предупреждение:** Данное свойство использовать не рекомендуется, поскольку в браузерах уже заданы подобные привязки и неосторожное обращение может привести к жестокому конфликту.

## Синтаксис

```
var key = elem.accessKey;
elem.accessKey = key;
```

## Пример

```js
var elem = document.getElementById("id");
elem.accessKey = "w";
```

## Немного информации

Фокусировка на элемент произойдёт при нажатии следующих клавиш (,где **acesskey** - значение свойства **`acessKey`**).

<table class="standard-table" style="height: 252px; width: 388px">
  <tbody>
    <tr>
      <td>
        <h3 id="Браузер"><strong>Браузер</strong></h3>
      </td>
      <td><h3 id="Сочетание">Сочетание</h3></td>
    </tr>
    <tr>
      <td>Firefox</td>
      <td>[Alt] [Shift] + <em>accesskey</em></td>
    </tr>
    <tr>
      <td>Internet Explorer</td>
      <td>[Alt] + <em>accesskey</em></td>
    </tr>
    <tr>
      <td>Chrome</td>
      <td>[Alt] + <em>accesskey</em></td>
    </tr>
    <tr>
      <td>Safari</td>
      <td>[Alt] + <em>accesskey</em></td>
    </tr>
    <tr>
      <td>Opera</td>
      <td>[Shift] [Esc] + <em>accesskey</em></td>
    </tr>
  </tbody>
</table>
