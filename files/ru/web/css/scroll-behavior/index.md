---
title: scroll-behavior
slug: Web/CSS/scroll-behavior
---

{{ CSSRef }}

## Описание

**`scroll-behavior`** - CSS-свойство, которое определяет поведение прокрутки для любого элемента на странице. Отрабатывается в момент автоматической прокрутки навигационных элементов, либо CSSOM прокручивается API. Любые другие прокручивания, например, те, которые выполняются пользователем, не затрагиваются этим свойством. Если это свойство указано на корневой элемент, оно относится ко всему _viewport_ пространству.

Юзер-агенты могут игнорировать это свойство.

{{cssinfo}}

## Синтаксис

```css
/* Ключевые значения */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Глобальные свойства */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: unset;
```

### Значения

- `auto`
  - : Стандартное поведение прокрутки без эффекта плавности.
- `smooth`
  - : Элемент прокручивается плавно; используется функция тайминга, определяемая юзер-агентом через период времени, отмеченный в нем. Юзер-агенты должны следовать соглашениям платформы, если таковые имеются.

### Синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<nav>
  <a href="#page-1">1</a>
  <a href="#page-2">2</a>
  <a href="#page-3">3</a>
</nav>
<scroll-container>
  <scroll-page id="page-1">1</scroll-page>
  <scroll-page id="page-2">2</scroll-page>
  <scroll-page id="page-3">3</scroll-page>
</scroll-container>
```

### CSS

```css
a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}
nav,
scroll-container {
  display: block;
  margin: 0 auto;
  text-align: center;
}
nav {
  width: 339px;
  padding: 5px;
  border: 1px solid black;
}
scroll-container {
  display: block;
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}
```

### Результат

{{ EmbedLiveSample('Example', "100%", 250) }}

## Характеристики

| Характеристика                                                            | Статус                  | Комментарий           |
| ------------------------------------------------------------------------- | ----------------------- | --------------------- |
| {{SpecName('CSSOM View', "#propdef-scroll-behavior", 'scroll-behavior')}} | {{Spec2('CSSOM View')}} | Initial specification |

## Совместимость с браузерами

{{Compat}}
