---
title: ":any-link"
slug: Web/CSS/:any-link
---

{{CSSRef}} {{SeeCompatTable}}

Селектор [псевдокласса](/ru/docs/Web/CSS/Pseudo-classes) [CSS](/ru/docs/Web/CSS) **`:any-link`** представляет собой элемент, который действует как исходный якорь гиперссылки, независимо от того, была ли она посещена. Другими словами, он соответствует всем элементам {{HTMLElement("a")}}, {{HTMLElement("area")}}, или {{HTMLElement("link")}}, которые имеют атрибут `href`. Таким образом, он соответствует всем элементам, которые используют {{cssxref(":link")}} или {{cssxref(":visited")}}.

```css
/* Выбирает любой элемент, который будет соответствовать:link или :visited */
:any-link {
  color: green;
}
```

## Синтаксис

{{csssyntax}}

## Пример

### HTML

```html
<a href="https://example.com">External link</a><br />
<a href="#">Internal target link</a><br />
<a>Placeholder link (won't get styled)</a>
```

### CSS

```css
a:any-link {
  border: 1px solid blue;
  color: orange;
}

/* WebKit browsers */
a:-webkit-any-link {
  border: 1px solid blue;
  color: orange;
}
```

### Результат

{{EmbedLiveSample('Пример')}}

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Создание гиперссылок](/ru/docs/Learn/HTML/%D0%92%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5_%D0%B2_HTML/%D0%A1%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5_%D0%B3%D0%B8%D0%BF%D0%B5%D1%80%D1%81%D1%81%D1%8B%D0%BB%D0%BE%D0%BA)
- Соответствует HTML-элементам: [`<a>`](/ru/docs/Web/HTML/Element/a), [`<area>`](/ru/docs/Web/HTML/Element/area) и [`<link>`](/ru/docs/Web/HTML/Element/link) с атрибутом [`href`](/ru/docs/Web/HTML/Element/a#href)
- Похожие CSS селекторы:

  - [`:visited`](/ru/docs/Web/CSS/:visited)
  - [`:link`](/ru/docs/Web/CSS/:link)
