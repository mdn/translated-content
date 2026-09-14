---
title: <ins>
slug: Web/HTML/Reference/Elements/ins
---

{{HTMLSidebar}}

HTML-элемент **`<ins>`** представляет диапазон текста, который был добавлен в документ.

{{InteractiveExample("HTML Demo: &lt;ins&gt;", "tabbed-standard")}}

```html interactive-example
<p>&ldquo;You're late!&rdquo;</p>
<del>
  <p>&ldquo;I apologize for the delay.&rdquo;</p>
</del>
<ins cite="../howtobeawizard.html" datetime="2018-05">
  <p>&ldquo;A wizard is never late &hellip;&rdquo;</p>
</ins>
```

```css interactive-example
del,
ins {
  display: block;
  text-decoration: none;
  position: relative;
}

del {
  background-color: #fbb;
}

ins {
  background-color: #d4fcbc;
}

del::before,
ins::before {
  position: absolute;
  left: 0.5rem;
  font-family: monospace;
}

del::before {
  content: "−";
}

ins::before {
  content: "+";
}

p {
  margin: 0 1.8rem 0;
  font-family: Georgia, serif;
  font-size: 1rem;
}
```

| [Содержимое категорий](/ru/docs/Web/HTML/Guides/Content_categories) | [Фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content) or [содержимое потока](/ru/docs/Web/HTML/Guides/Content_categories#flow_content). |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Допустимое содержимое                                               | [Прозрачный](/ru/docs/Web/HTML/Guides/Content_categories#transparent_content_model).                                                                               |
| Пропуск тегов                                                       | Нет, открывающий и закрывающий теги обязательны.                                                                                                                   |
| Допустимые родители                                                 | Любой элемент, который принимает [фразовый контент](/ru/docs/Web/HTML/Guides/Content_categories#phrasing_content).                                                 |
| Допустимые ARIA-роли                                                | Любые                                                                                                                                                              |
| DOM-интерфейс                                                       | {{domxref("HTMLModElement")}}                                                                                                                                      |

## Атрибуты

Этот элемент включает [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).

- `cite`
  - : Этот атрибут определяет URI ресурса, который объясняет изменения, такие как ссылка на протоколы заседаний или билет в системном поиске и устранении неисправностей.
- `datetime`
  - : Этот атрибут указывает время и дату изменения и должна быть действительной датой с дополнительной строкой времени. Если значение не может быть разобрано как дата с опциональной строкой времени, элемент не имеет соответствующего штампа времени.

## Примеры

```html
<ins>Этот текст подчеркнут.</ins>
```

### Результат

**Этот текст подчеркнут.**

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Элемент {{HTMLElement("del")}} для помещения удаления в документе.
