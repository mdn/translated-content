---
title: <style> - элемент для указания стилей
slug: Web/HTML/Element/style
l10n:
  sourceCommit: 7cd4706990ab95794415aee05ba0a9662e742a17
---

{{HTMLSidebar}}

[HTML](/ru/docs/Web/HTML)-элемент **`<style>`** содержит информацию о стилях документа или его части. Они будут применены к содержимому документа, включающего элемент `<style>`.

{{EmbedInteractiveExample("pages/tabbed/style.html", "tabbed-standard")}}

Элемент `<style>` должен быть включён внутрь {{htmlelement("head")}} документа. В общем случае лучше размещать стили во внешних таблицах стилей и подключать их с помощью элементов {{htmlelement("link")}}.

Если в документе существует несколько элементов `<style>` и `<link>`, они будут применяться к DOM в порядке их включения, поэтому убедитесь, что они добавлены в правильной последовательности, чтобы избежать неожиданных проблем с каскадированием стилей.

Аналогично элементам `<link>`, элементы `<style>` могут включать атрибут `media`, содержащий [медиа-запросы](/ru/docs/Web/CSS/CSS_media_queries), что позволяет избирательно применять внутренние таблицы стилей к документу в зависимости от таких медиа-условий, как ширина области просмотра.

## Атрибуты

Этот элемент включает [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes).

- `blocking`
  - : Этот атрибут явно указывает, что некоторые действия должны быть заблокированы до получения необходимых ресурсов. Стили, импортированные с помощью [`@import`](/ru/docs/Web/CSS/@import), обычно считаются критическими ресурсами, в то время как [`background-image`](/ru/docs/Web/CSS/background-image) и шрифты — нет. Блокируемые действия указываются в виде списка ключевых слов, разделённого пробелами. Допустимые значения:
    - `render`: Отображение контента на экране блокируется.
- `media`
  - : Этот атрибут определяет, к какому виду медиа должен применяться стиль. Значением этого атрибута является [медиавыражение](/ru/docs/Web/CSS/CSS_media_queries/Using_media_queries), которое по умолчанию соответствует `all`.
- `nonce`
  - : Криптографический одноразовый номер, используемый для разрешения применения встроенных стилей с помощью [директивы style-src](/ru/docs/Web/HTTP/Headers/Content-Security-Policy/style-src) политики Content-Security-Policy. Сервер должен генерировать это значение каждый раз, когда отправляет заголовок. Важно предоставлять такое значение, которое невозможно угадать, так как в противном случае обойти политику ресурса будет достаточно просто.
- `title`
  - : Этот атрибут задаёт [альтернативные наборы стилей](/ru/docs/Web/CSS/Alternative_style_sheets).

### Устаревшие атрибуты

- `type` {{deprecated_inline}}
  - : Этот атрибут не следует устанавливать, но если он указан, то допустимыми значениями являются только пустая строка или регистронезависимое значение `text/css`.

## Примеры

### Простая таблица стилей

В следующем примере мы применяем очень простой стиль к документу:

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Тестовая сраница</title>
    <style>
      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <p>Это мой параграф.</p>
  </body>
</html>
```

#### Результат

{{EmbedLiveSample('A_simple_stylesheet', '100%', '100')}}

### Несколько элементов `style`

В этом примере мы добавили два элемента `<style>`, обратите внимание, как конфликтующие объявления стилей в последнем элементе `<style>` перекрывают те, что были в предыдущем, если у них одинаковая [специфичность](/ru/docs/Web/CSS/Specificity).

```html
<!doctype html>
<html lang=ru">
  <head>
    <meta charset="UTF-8" />
    <title>Тестовая страница</title>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style>
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>Это мой параграф.</p>
  </body>
</html>
```

#### Результат

{{EmbedLiveSample('Multiple_style_elements', '100%', '100')}}

### Включение медиавыражения

В этом примере мы добавили медиавыражение с помощью атрибута `media` во втором элементе `<style>`, чтобы он применялся только при ширине области просмотра менее 500px.

```html
<!doctype html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Тестовая страница</title>
    <style>
      p {
        color: white;
        background-color: blue;
        padding: 5px;
        border: 1px solid black;
      }
    </style>
    <style media="all and (max-width: 500px)">
      p {
        color: blue;
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>Это мой параграф.</p>
  </body>
</html>
```

#### Результат

{{EmbedLiveSample('Including_a_media_query', '100%', '100')}}

## Техническая сводка

<table class="properties">
  <tbody>
    <tr>
      <th>
        <a href="/ru/docs/Web/Guide/HTML/Content_categories">Категории контента</a>
      </th>
      <td>
        <a href="/ru/docs/Web/HTML/Content_categories#метаданные">Метаданные</a>.
      </td>
    </tr>
    <tr>
      <th>Допустимое содержимое</th>
      <td>
        Текстовое содержимое, соответствующее атрибуту <code>type</code>, то есть
        <code>text/css</code>.
      </td>
    </tr>
    <tr>
      <th>Пропуск тегов</th>
      <td>Ни один из тегов не может быть пропущен.</td>
    </tr>
    <tr>
      <th>Допустимые родители</th>
      <td>
        Любой элемент, который принимает
        <a href="/ru/docs/Web/HTML/Content_categories#метаданные">метаданные</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Неявная ARIA-роль</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role">Нет соответствующей роли</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Допустимые ARIA-роли</th>
      <td>Атрибут <code>role</code> не допускается</td>
    </tr>
    <tr>
      <th>DOM-интерфейс</th>
      <td>{{domxref("HTMLStyleElement")}}</td>
    </tr>
  </tbody>
</table>

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Элемент {{HTMLElement("link")}}, позволяющий использовать внешние таблицы стилей.
- [Альтернативные таблицы стилей](/ru/docs/Web/CSS/Alternative_style_sheets)
