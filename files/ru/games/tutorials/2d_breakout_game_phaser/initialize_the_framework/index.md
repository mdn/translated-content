---
title: Инициализация фреймворка
slug: Games/Tutorials/2D_breakout_game_Phaser/Initialize_the_framework
---

{{GamesSidebar}}{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Scaling")}}

Это первый из 16 уроков о том, как пользоваться [Gamedev Phaser](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser). После прочтения вы можете найти исходный код для этого урока на [Gamedev-Phaser-Content-Kit/demos/lesson01.html](https://github.com/end3r/Gamedev-Phaser-Content-Kit/blob/gh-pages/demos/lesson01.html).

Перед тем, как мы начнём разрабатывать функциональность игры, нам нужно создать базовую структуру, чтобы рендерить её. Это может быть сделано с помощью HTML: фреймворк Phaser создаст обязательный элемент {{htmlelement("canvas")}}.

## HTML-код игры

Структура HTML-документа достаточно простая. Игра будет отображаться в элементе {{htmlelement("canvas")}}, который будет сгенерирован фреймворком. Используя свой любимый редактор, создайте новый HTML-документ, сохраните его как `index.html` и добавьте в него следующий код:

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Gamedev Phaser Workshop - lesson 01: Initialize the framework</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
    </style>
    <script src="js/phaser.min.js"></script>
  </head>
  <body>
    <script>
      var game = new Phaser.Game(480, 320, Phaser.CANVAS, null, {
        preload: preload,
        create: create,
        update: update,
      });
      function preload() {}
      function create() {}
      function update() {}
    </script>
  </body>
</html>
```

## Загрузка Phaser

Дальше мы должны скачать исходный код фреймворка Phaser и использовать его в нашем HTML-документе. Это руководство использует Phaser V2, который не будет работать с текущей версией Phaser V3. Ссылка на скачивание Phaser V2 доступна в разделе Archive.

1. Перейдите на [страницу загрузки Phaser](https://phaser.io/download/release/2.7.6).
2. Выберите наиболее удобный для вас вариант загрузки. Я рекомендую _min.js_ скачивание, потому что исходный код будет меньше, да и вам не придётся разбираться в нём.
3. Сохраните Phaser внутри `/js` директории, находящейся в том же месте, что и `index.html`
4. Обновите атрибут `src` в первом элементе {{htmlelement("script")}}, как это показано выше.

## Что мы имеем

На данный момент у нас есть обозначенный `charset`, {{htmlelement("title")}} и немного CSS, что убрать значения свойств `margin` и `padding` по умолчанию. Также мы добавили элемент {{htmlelement("script")}}, который позволяет использовать Phaser на странице. Во втором {{htmlelement("script")}} мы написали код, который позволит отображать игру и управлять ею.

Фреймворк автоматически создаёт элемент {{htmlelement("canvas")}}. Мы инициализировали его, создав новый `Phaser.Game` объект и присвоив его переменной. Также мы добавили параметры:

- `width` и `height` устанавливают ширину и высоту {{htmlelement("canvas")}} соответственно.
- Метод рендеринга. Здесь есть три опции `AUTO`, `CANVAS` и `WEBGL`. Мы можем установить одно из двух последних значений или `AUTO`, чтобы Phaser сам определил, что использовать. Обычно используется WebGL, но если браузер его не поддерживает, то Canvas 2D.
- `id` элемента {{htmlelement("canvas")}} используется для рендеринга, если один {{htmlelement("canvas")}} уже есть (мы установили значение `null`, чтобы Phaser создал свой собственный).
- Дальше идут названия трёх ключевых функций Phaser: загрузки (load), старта (start) и обновления (update) игры на каждом кадре; мы выбрали такие же названия, чтобы сохранять чистоту кода.

  - `preload` заботится о предзагрузке ресурсов игры
  - `create` вызывается только один раз, когда всё загружено и готово
  - `update` вызывается на каждом кадре

> **Предупреждение:** До конца прохождения всех уроков вы должны использовать `CANVAS`, как метод рендеринга, а не `AUTO`, как это было в нашем коде. Всё это нужно, потому что метод `AUTO` больше не поддерживается в последних версиях браузера.

## Сравните свой код

Это весь исходный код, который мы написали на этом уроке:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/h6cwzv2b/","","400")}}

## Следующее

Мы создали базовую HTML структуру и узнали немного об инициализации Phaser. Давайте продолжим и узнаем про [масштабирование](/ru/docs/Games/Tutorials/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_2D_Breakout_%D0%B8%D0%B3%D1%80%D1%8B_%D0%BD%D0%B0_Phaser/Scaling).

{{PreviousNext("Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser", "Games/Tutorials/Создание_2D_Breakout_игры_на_Phaser/Scaling")}}
