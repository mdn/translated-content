---
title: SVG
slug: Web/SVG
---

{{SVGRef}}

**[С чего начать](/ru/docs/Web/SVG/Tutorials/SVG_from_scratch)**
Этот урок поможет вам начать использовать SVG.

**Масштабируемая векторная графика (Scalable Vector Graphics — SVG)** является {{Glossary("язык разметки", "языком разметки")}} расширенным из [XML](/ru/docs/Web/XML) для описания двухмерной {{Glossary("векторная графика", "векторной графики")}}. SVG по существу является графикой, так же, как {{Glossary("XHTML")}} — текстом.

SVG по своим возможностям приближается к запатентованной технологии Adobe Flash, но отличается от неё тем, что SVG является [рекомендацией W3C](https://www.w3.org/Graphics/SVG/) (то есть, стандартом), и тем, что это формат, основанный на {{Glossary("XML")}}, в противовес закрытому двоичному формату Flash. Он явно спроектирован для работы с другими стандартами [W3C](https://www.w3.org/), такими, как [CSS](/ru/docs/Web/CSS), [DOM](/ru/docs/Web/API/Document_Object_Model) и [SMIL](https://www.w3.org/AudioVideo/).

SVG-графика и связанные с ней поведения определяются в текстовых XML-файлах, что означает, что их можно искать, индексировать, создавать сценарии и сжимать. Кроме того, это означает, что они могут быть созданы и отредактированы с помощью любого текстового редактора и программ для рисования.

SVG — открытый стандарт, разработанный [World Wide Web консорциумом (W3C)](https://www.w3.org/) с 1999 года.

## Документация

- [Справочник по элементам SVG](/ru/docs/Web/SVG/Reference/Element)
  - : Подробная информация о каждом элементе SVG.
- [Справочник по атрибутам SVG](/ru/docs/Web/SVG/Reference/Attribute)
  - : Подробная информация о каждом атрибуте SVG.
- [Справочник по интерфейсу SVG DOM](/ru/docs/Web/API/Document_Object_Model#svg_interfaces)
  - : Подробная информация по всему SVG DOM API.
- [Применение эффектов SVG к содержимому HTML](/ru/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : SVG работает вместе с {{Glossary("HTML")}}, {{Glossary("CSS")}} и {{Glossary("JavaScript")}}.
    [Используйте SVG для улучшения обычной страницы HTML или веб-приложения.](/ru/docs/Web/SVG/Guides/SVG_in_HTML).
- SVG в Mozilla
  - : Замечания и информация о том, как SVG реализован в Mozilla.
    - [Полнота реализации SVG в Firefox](/ru/docs/SVG_in_Firefox)
    - [SVG - учебное руководство](/ru/docs/Web/SVG/Tutorials/SVG_from_scratch)
    - [SVG в XHTML](/ru/docs/Web/SVG/Guides/SVG_in_HTML)

## Инструменты

- [Набор для тестирования SVG](https://www.w3.org/Graphics/SVG/Test/)
- [Валидатор SVG](http://jiggles.w3.org/svgvalidator/) (уже не работает)
- [Больше инструментов…](/ru/docs/tag/SVG:Tools)
- Другие ресурсы: [XML](/ru/docs/Web/XML), [CSS](/ru/docs/Web/CSS), [DOM](/ru/docs/Web/API/Document_Object_Model), [Canvas](/ru/docs/Web/API/Canvas_API)

## Примеры

- [Карты Google](https://maps.google.com) (маршруты поверх карты) и [Документы Google](https://docs.google.com) (диаграммы в электронных таблицах)
- [Меню из пузырьков на SVG](http://starkravingfinkle.org/projects/demo/svg-bubblemenu-in-html.xml)
- [Рекомендации по составлению SVG](https://jwatt.org/svg/authoring/)
- Обзор [Проекта Mozilla SVG](/ru/docs/Mozilla_SVG_Project)
- [Часто задаваемые вопросы](/ru/docs/SVG/FAQ), касающиеся SVG и Mozilla
- Слайды и демонстрации с обсуждения [SVG и Mozilla](https://jwatt.org/blog/2009/11/16/slides-and-demos-from-svg-open-2009), проходившего на SVG Open 2009
- [Использование SVG в качестве изображения](/ru/docs/Web/SVG/Guides/SVG_as_an_image)
- [SVG анимация при помощи SMIL](/ru/docs/Web/SVG/SVG_animation_with_SMIL)
- [Художественная галерея SVG](https://plurib.us/1shot/2007/svg_gallery/)
- Больше примеров (примеры SVG с [carto.net](https://old.carto.net/papers/svg/samples/))

### Анимация и взаимодействие

Как и HTML, SVG имеет объектную модель документа (DOM) и события и всё это может быть доступно через JavaScript. Это позволяет разработчикам создавать роскошные анимации и интерактивные изображения.

- Некоторые захватывающие работы с использованием SVG на [svg-wow.org](http://svg-wow.org/)
- Расширение Firefox ([Grafox](http://schepers.cc/grafox/)) для добавления поддержки анимации с использованием {{Glossary("SMIL")}}
- Интерактивное управление [фотографиями](http://people.mozilla.com/~vladimir/demos/photos.svg)
- Использование `foreignObject` из SVG для [изменения HTML](http://starkravingfinkle.org/blog/2007/07/firefox-3-svg-foreignobject/)
- Анимация [SVG спидометр](http://www.creative-seo.ru/svg-speedometer/)

### Карты, диаграммы, игры и эксперименты с 3D

В то время, как маленькие документы SVG могут серьёзно улучшить веб-контент, здесь представлены некоторые примеры тяжёлого использования SVG.

- [Тетрис](https://www.codedread.com/yastframe.php)
- [Connect 4](https://web.archive.org/web/20131019072450/http://www.treebuilder.de/svg/connect4.svg)
- [Популяционная карта США](http://www.carto.net/papers/svg/us_population/index.html)
- [jVectorMap](https://jvectormap.com/) (интерактивные карты для визуализации данных)
