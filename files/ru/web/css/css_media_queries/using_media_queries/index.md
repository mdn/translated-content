---
title: Использование медиавыражений
slug: Web/CSS/CSS_media_queries/Using_media_queries
---

{{cssref}}

**Медиавыражения** используются в тех случаях , когда нужно применить разные CSS-стили, для разных устройств по типу отображения (например: для принтера, монитора или смартфона), а также конкретных характеристик устройства (например: ширины окна просмотра браузера), или внешней среды (например: внешнее освещение). Учитывая огромное количество подключаемых к интернету устройств, медиавыражения являются очень важным инструментом при создании веб-сайтов и приложений, которые будут правильно работать на всех доступных устройствах, которые есть у ваших пользователей.

## Медиа для разных типов устройств

Медиавыражения позволяют адаптировать страницу для различных типов устройств, таких как: принтеры, речевых браузеров, устройств Брайля, телевизоров и так далее. Например это правило для принтеров:

```css
@media print { ... }
```

Вы также можете писать правила сразу для нескольких устройств. Например этот @media написан сразу для экранов и принтеров:

```css
@media screen, print { ... }
```

Список устройств вы можете найти перейдя по [этой ссылке](/ru/docs/CSS/@media#Media_types). Но для задания более детальных и узконаправленных правил вам нужно просмотреть следующий раздел.

## Узконаправленные @media

[Media features](/ru/docs/CSS/@media#Media_features) описывают некие характеристики определённого {{glossary("user agent")}}, устройства вывода или окружения. Например, вы можете применить выбранные стили только для широкоэкранных мониторов, компьютеров с мышью, или для устройств, которые используются в условиях слабой освещённости. В примере ниже стили будут применены только когда _основное_ устройство ввода пользователя (например мышь) будет расположено над элементами:

```css
@media (hover: hover) { ... }
```

Многие медиавыражения представляют собой функцию диапазона и имеют префиксы "min-" или "max-". Минимальное значение и максимальное значение условия, соответственно. Например этот CSS-код применяется только если ширина {{glossary("viewport")}} меньше или равна 12450px:

```css
@media (max-width: 12450px) { ... }
```

Если вы создаёте медиавыражение без указания значения, вложенные стили будут использоваться до тех пор, пока значение функции не равно нулю. Например, этот CSS будет применяться к любому устройству с цветным экраном:

```css
@media (color) { ... }
```

Если функция не применима к устройству, на котором работает браузер, выражения, включающие эту функцию, всегда ложны. Например, стили, вложенные в следующий запрос, никогда не будут использоваться, потому что ни одно речевое устройство не имеет формат экрана:

```css
@media speech and (aspect-ratio: 11/5) { ... }
```

Дополнительные примеры медиавыражений, смотрите на [справочной странице](/ru/docs/Web/CSS/@media#Media_features) для каждой конкретной функции.

## Создание комплексных медиавыражений

Иногда вы хотите создать медиавыражение, включающее в себя несколько условий. В таком случае применяются _логические операторы_: `not`, `and`, and `only`. Кроме того, вы можете объединить несколько медиавыражений в список через запятую; это позволяет применять одни и те же стили в разных ситуациях.

В прошлом примере мы видели, как применяется оператор `and` для группировки _type_ и функции. Оператор `and` также может комбинировать несколько функций в одно медиавыражение. Между тем, оператор not отрицает медиавыражение, полностью инвертируя его значение. Оператор _only_ работает тогда, когда применяется всё выражение, не позволяя старым браузерам применять стили.

> **Примечание:** In most cases, the `all` media type is used by default when no other type is specified. However, if you use the `not` or `only` operators, you must explicitly specify a media type.

### `and`

The `and` keyword combines a media feature with a media type _or_ other media features. This example combines two media features to restrict styles to landscape-oriented devices with a width of at least 30 ems:

```css
@media (min-width: 30em) and (orientation: landscape) { ... }
```

To limit the styles to devices with a screen, you can chain the media features to the `screen` media type:

```css
@media screen and (min-width: 30em) and (orientation: landscape) { ...  }
```

### comma-separated lists

You can use a comma-separated list to apply styles when the user's device matches any one of various media types, features, or states. For instance, the following rule will apply its styles if the user's device has either a minimum height of 680px _or_ is a screen device in portrait mode:

```css
@media (min-height: 680px), screen and (orientation: portrait) { ... }
```

Taking the above example, if the user had a printer with a page height of 800px, the media statement would return true because the first query would apply. Likewise, if the user were on a smartphone in portrait mode with a viewport height of 480px, the second query would apply and the media statement would still return true.

### `not`

The `not` keyword inverts the meaning of an entire media query. It will only negate the specific media query it is applied to. (Thus, it will not apply to every media query in a comma-separated list of media queries.) The `not` keyword can't be used to negate an individual feature query, only an entire media query. The `not` is evaluated last in the following query:

```css
@media not all and (monochrome) { ... }
```

... so that the above query is evaluated like this:

```css
@media not (all and (monochrome)) { ... }
```

... rather than like this:

```css example-bad
@media (not all) and (monochrome) { ... }
```

As another example, the following media query:

```css
@media not screen and (color), print and (color) { ... }
```

... is evaluated like this:

```css
@media (not (screen and (color))), print and (color) { ... }
```

### `only`

The `only` keyword prevents older browsers that do not support media queries with media features from applying the given styles. _It has no effect on modern browsers._

```html
<link
  rel="stylesheet"
  media="only screen and (color)"
  href="modern-styles.css" />
```

## Смотрите также

- [Media types](/ru/docs/CSS/@media#Media_types)
- [Media features](/ru/docs/CSS/@media#Media_features)
- [Testing media queries using code](/ru/docs/CSS/Using_media_queries_from_code)
- [CSS Animations Between Media Queries](http://davidwalsh.name/animate-media-queries)
- [Extended Mozilla media features](/ru/docs/Web/CSS/Mozilla_Extensions#Media_features)
- [Extended WebKit media features](/ru/docs/Web/CSS/Webkit_Extensions#Media_features)
