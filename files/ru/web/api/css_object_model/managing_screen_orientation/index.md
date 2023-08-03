---
title: Разбираемся с ориентацией экрана
slug: Web/API/CSS_Object_Model/Managing_screen_orientation
---

{{DefaultAPISidebar("Screen Orientation API")}}{{SeeCompatTable}}

Ориентация экрана не идентична [ориентации устройства](/ru/docs/WebAPI/Detecting_device_orientation).
Даже если устройство не способно определить своё положение в пространстве — экран может всегда. А когда устройство знает свою ориентацию, хорошо бы иметь возможность управлять ориентацией экрана для
сохранения или адаптации интерфейса веб-приложения.

Управление ориентацией экрана доступно в CSS и JavaScript.
Например, [использование медиавыражений](/ru/docs/Web/CSS/Media_Queries/Using_media_queries) позволяет контенту адаптироваться с помощью CSS в зависимости от того, в каком режиме просмотра находится браузер: альбомный (горизонтальный, когда ширина экрана больше высоты) или портретный (вертикальный, высота экрана больше ширины).

Для определения положения экрана и его блокировки можно воспользоваться _JavaScript Screen orientation API_.

## Настройка раскладки содержимого по ориентации экрана

Допустим вы хотите связать отображение содержимого с ориентацией экрана. Например, добавить панель, растягивающуюся по наибольшему направлению дисплея устройства. Это довольно просто реализовать с помощью медиавыражений.

Пример. Имеется HTML страница:

```html
<ul id="toolbar">
  <li>A</li>
  <li>B</li>
  <li>C</li>
</ul>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacinia nisi nec
  sem viverra vitae fringilla nulla ultricies. In ac est dolor, quis tincidunt
  leo. Cras commodo quam non tortor consectetur eget rutrum dolor ultricies. Ut
  interdum tristique dapibus. Nullam quis malesuada est.
</p>
```

Соответствующий CSS:

```css
/* Сначала зададим простые стили */

html,
body {
  width: 100%;
  height: 100%;
}

body {
  border: 1px solid black;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

p {
  font: 1em sans-serif;
  margin: 0;
  padding: 0.5em;
}

ul {
  list-style: none;

  font: 1em monospace;
  margin: 0;
  padding: 0.5em;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  background: black;
}

li {
  display: inline-block;
  margin: 0;
  padding: 0.5em;
  background: white;
}
```

Теперь разберёмся с поведением страницы в различных случаях ориентации.

```css
/* Для портретного режима отправим панель на верхнюю часть области отображения */

@media screen and (orientation: portrait) {
  #toolbar {
    width: 100%;
  }
}

/* Для альбомного режима пускай панель отображается слева */

@media screen and (orientation: landscape) {
  #toolbar {
    position: fixed;
    width: 2.65em;
    height: 100%;
  }

  p {
    margin-left: 2em;
  }

  li + li {
    margin-top: 0.5em;
  }
}
```

Результат:

| Портретный режим просмотра                                                              | Альбомный режим просмотра                                                               |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| {{ EmbedLiveSample('Настройка_раскладки_содержимого_по_ориентации_экрана', 180, 350) }} | {{ EmbedLiveSample('Настройка_раскладки_содержимого_по_ориентации_экрана', 350, 180) }} |

> **Примечание:** Медиавыражение по ориентации ссылается на окно браузера (соотношение его размеров), а не на ориентацию устройства.

## Блокировка ориентации экрана

> **Предупреждение:** Этот API вводится в экспериментальном режиме и доступен в [Firefox OS](/ru/docs/Archive/B2G_OS) и [Firefox для Android](/ru/docs/Mozilla/Firefox_для_Android) с приставкой `moz`, а также для Internet Explorer на Windows 8.1 и выше с приставкой `ms`.

Некоторые устройства (в основном мобильные) могут изменять ориентацию экрана в соответствии с ориентацией самого устройства для удобства восприятия информации пользователем.
Это хорошо подходит для текста, но на некоторое содержимое такое поведение может оказать негативное воздействие. Например, это трагичная ситуация для игры, разработанной под определённую ориентацию.

Урегулировать вопрос, связанный с изменением положения экрана, поможет интерфейс Screen Orientation API.

### Отслеживание изменения ориентации

Событие {{event("orientationchange")}} возникает каждый раз, когда устройство изменяет ориентацию экрана и самого себя, и может быть отслежено свойством {{domxref("Screen.orientation")}}.

```js
screen.addEventListener("orientationchange", function () {
  console.log("The orientation of the screen is: " + screen.orientation);
});
```

### Запрещаем поворот экрана

Любое веб-приложение может заблокировать положение экрана. Методом {{domxref("Screen.lockOrientation()")}} положение блокируется. Разблокирование осуществляется методом {{domxref("Screen.unlockOrientation()")}}.

Метод {{domxref("Screen.lockOrientation()")}} принимает одну или несколько строк для определения типа блокировки: `portrait-primary`, `portrait-secondary`, `landscape-primary`, `landscape-secondary`, `portrait`, `landscape`. Подробнее: {{domxref("Screen.lockOrientation")}}.

```js
screen.lockOrientation("landscape");
```

> **Примечание:** Положение экрана зависит от конкретной настройки приложения. Если в приложении A экран блокируется на альбомную ориентацию (`landscape`), а приложение B блокирует экран на портретный режим (`portrait`),
> то переход из приложения A в приложение B (или наоборот) не вызовет событие изменения ориентации экрана {{event("orientationchange")}}, т. к. оба приложения сохраняют заданную ориентацию.
>
> В то же время, событие {{event("orientationchange")}} может возникнуть в момент блокировки ориентации, если для удовлетворения заданному параметру блокировки изменяется положение экрана.

## Firefox OS и Android: блокирование ориентации через манифест

Для Firefox OS и Firefox Android (скоро заработает и в десктопном Firefox) существует более специфичный способ: в файле манифеста вашего приложения можно указать [ориентацию](/en-US/Apps/Build/Manifest#orientation):

```json
"orientation": "portrait"
```

## Смотрите также

- {{domxref("Screen.orientation")}}
- {{domxref("Screen.lockOrientation()")}}
- {{domxref("Screen.unlockOrientation()")}}
- {{domxref("Screen.onorientationchange")}}
- [The orientation media query](/ru/docs/CSS/Media_queries#orientation)
- [A short introduction to media queries in Firefox 3.5](http://hacks.mozilla.org/2009/06/media-queries/)
