---
title: HTMLElement.hidden
slug: Web/API/HTMLElement/hidden
---

HTMLElement Свойство **`hidden`** является {{jsxref("Boolean")}} типом данных , который принимает значение true , если содержимое спрятано, в противном случае значение будет false. Это свойство совершенно отличается от использования CSS-свойства {{cssxref("display")}} , чтобы контролировать отображение элемента.Свойство `hidden` применимо ко всем режимам представления и не должно использоваться для скрытия содержимого предназначенного для прямого доступа к пользователю. Соответствующие варианты использования включают:

- Содержимое, которое не является особенно важным, но может быть необходимо позже
- Содержимое, которое было раньше необходимо, но больше нет в нем необходимости
- Содержимое, которое повторно используется другими частями страницы по шаблону
- Создание заставного холста в качестве буфера рисования

Неуместные варианты использования включают:

- Скрытие панелей в диалоговом окне с вкладками
- Скрытие содержимого в одной презентации, предполагая, что оно будет видимым в других

> **Примечание:** Элементы, которые не hidden не должны ссылаться на элементы которые hidden.

## Синтаксис

```
isHidden = HTMLElement.hidden;


HTMLElement.hidden = true | false;
```

### Значение

Если элемент спрятан, то значение `true`, в противном случае `false`;

## Пример

Пример, где скрытый блок используется для хранения "thank you" сообщения, которое отображается после того, как пользователь соглашается с необычным запросом.

### JavaScript

```js
document.getElementById("okButton").addEventListener(
  "click",
  function () {
    document.getElementById("welcome").hidden = true;
    document.getElementById("awesome").hidden = false;
  },
  false,
);
```

Этот код устанавливает обработчика для кнопки "OK", которая скрывает панель приветствия и делает The follow-up panel панель с необычным именем "awesome" - видимой в этом месте.

### HTML

HTML-код для двух boxes показанных здесь.

#### Welcome panel

```html
<div id="welcome" class="panel">
  <h1>Welcome to Foobar.com!</h1>
  <p>By clicking "OK" you agree to be awesome every day!</p>
  <button class="button" id="okButton">OK</button>
</div>
```

Этот HTML создаёт панель, которая приветствует пользователей на сайте и рассказывает им о том с чем они соглашаются нажимая на кнопку OK.

#### The follow-up panel

После того, как пользователь нажимает OK в welcome panel, JavaScript-код меняет две панели изменяя их значения hidden. Следующая The follow-up panel представлена в этом HMTL:

```html
<div id="awesome" class="panel" hidden>
  <h1>Thanks!</h1>
  <p>
    Thank you <strong>so</strong> much for agreeing to be awesome today! Now get
    out there and do awesome things awesomely to make the world more awesome!
  </p>
</div>
```

### CSS

Стилизованное содержимое использует CSS представленное внизу.

```css
.panel {
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border: 1px solid #22d;
  padding: 12px;
  width: 500px;
  text-align: center;
}

.button {
  font:
    22px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  padding: 5px 36px;
}

h1 {
  margin-top: 0;
  font-size: 175%;
}
```

### Результат

{{ EmbedLiveSample('Example', 560, 200) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("Element.hidden")}}
- {{cssxref("display")}}
