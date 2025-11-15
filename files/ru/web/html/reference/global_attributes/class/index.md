---
title: class
slug: Web/HTML/Reference/Global_attributes/class
---

{{HTMLSidebar("Global_attributes")}}

[Глобальный атрибут](/ru/docs/Web/HTML/Reference/Global_attributes) **`class`** это разделённый пробелом список регистров зависимых классов элемента. Классы позволяют CSS и Javascript выбирать и получать доступ с помощью [селекторов класса](/ru/docs/Web/CSS/Reference/Selectors/Class_selectors) или функций, таких как методы DOM {{domxref("document.getElementsByClassName")}}.

{{InteractiveExample("HTML Demo: class", "tabbed-standard")}}

```html interactive-example
<p>Narrator: This is the beginning of the play.</p>

<p class="note editorial">Above point sounds a bit obvious. Remove/rewrite?</p>

<p>Narrator: I must warn you now folks that this beginning is very exciting.</p>

<p class="note">[Lights go up and wind blows; Caspian enters stage right]</p>
```

```css interactive-example
.note {
  font-style: italic;
  font-weight: bold;
}

.editorial {
  background: rgb(255, 0, 0, 0.25);
  padding: 10px;
}

.editorial:before {
  content: "Editor: ";
}
```

Хотя спецификация не предъявляет требований к именам классов, веб-разработчикам рекомендуется использовать имена, описывающие семантическое назначение элемента, а не представление элемента. Например, _атрибут_ описывает атрибут, а не _курсив_, хотя элемент этого класса может быть представлен _курсивом_. Семантические имена остаются логичными даже при изменении представления страницы.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Все [глобальные атрибуты](/ru/docs/Web/HTML/Reference/Global_attributes).
