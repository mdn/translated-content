---
title: "<dl>: Элемент списка описаний"
slug: Web/HTML/Element/dl
---

{{HTMLSidebar}}

**HTML-элемент `<dl>`** (_от англ._ _Description List_) представляет собой список описаний. Этот элемент служит контейнером для списка пар терминов (определяемых элементом {{HTMLElement("dt")}}) и их описаний (определяемых элементами {{HTMLElement("dd")}}). Этот элемент обычно используют при создании глоссария или для отображения метаданных (списка пар ключ-значение).

{{EmbedInteractiveExample("pages/tabbed/dl.html", "tabbed-standard")}}

| [Категории контента](/ru/docs/Web/Guide/HTML/Content_categories) | [Потоковый контент](/ru/docs/Web/Guide/HTML/Content_categories#Потоковый_контент), и если потомки элемента `<dl>` включают одну группу имя-значение явный контент.                                                                                                                                                                                                                                                             |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Допустимое содержимое                                            | Либо: Ноль или более групп каждая из которых состоит из одного или более элементов {{HTMLElement("dt")}} за которым следует один или более элементов {{HTMLElement("dd")}}, необязательно смешанных с элементами {{HTMLElement("script")}} и {{HTMLElement("template")}}. Либо: Один или более элементов {{HTMLElement("div")}}, необязательно смешанных с элементами {{HTMLElement("script")}} и {{HTMLElement("template")}}. |
| Пропуск тегов                                                    | {{no_tag_omission}}                                                                                                                                                                                                                                                                                                                                                                                                            |
| Допустимые родители                                              | Любой элемент который принимает [потоковый контент](/ru/docs/Web/Guide/HTML/Content_categories#Потоковый_контент).                                                                                                                                                                                                                                                                                                             |
| Допустимые ARIA-роли                                             | <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>, <code><a href="/ru/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>                                                                                                                                                                                                                                             |
| DOM-интерфейс                                                    | {{domxref("HTMLDListElement")}}                                                                                                                                                                                                                                                                                                                                                                                                |

## Атрибуты

Для данного элемента доступны только [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты).

## Примеры

### Одиночные термин и определение

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

{{EmbedLiveSample("Одиночные_термин_и_определение")}}

### Множественные термины с одним определением

```html
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

{{EmbedLiveSample("Множественные_термины_с_одним_определением")}}

### Одиночный термин со множественными определениями

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    A free, open source, cross-platform, graphical web browser developed by the
    Mozilla Corporation and hundreds of volunteers.
  </dd>
  <dd>
    The Red Panda also known as the Lesser Panda, Wah, Bear Cat or Firefox, is a
    mostly herbivorous mammal, slightly larger than a domestic cat (60 cm long).
  </dd>

  <!-- Other terms and descriptions -->
</dl>
```

{{EmbedLiveSample("Одиночный_термин_со_множественными_определениями")}}

### Множественные термины и определения

Кроме того, можно определить несколько терминов с несколькими соответствующими определениями, путём комбинирования приведённых выше примеров.

### Метаданные

Список определений очень полезен для отображения метаданных, как список пар ключ-значение.

```html
<dl>
  <dt>Name</dt>
  <dd>Godzilla</dd>
  <dt>Born</dt>
  <dd>1952</dd>
  <dt>Birthplace</dt>
  <dd>Japan</dd>
  <dt>Color</dt>
  <dd>Green</dd>
</dl>
```

Подсказка: Может быть полезно задать разделитель для пары ключ-значение при помощи CSS3, например:

```css
dt:after {
  content: ": ";
}
```

### Оборачивание групп имя-значение в {{HTMLElement("div")}} элементы

[WHATWG](/ru/docs/Glossary/WHATWG) HTML разрешает оборачивать каждую группу имя-значение в элементе {{HTMLElement("dl")}} в элемент {{HTMLElement("div")}}. Это может быть полезно, когда используются [микроданные](/ru/docs/Web/HTML/Microdata) или когда [глобальные атрибуты](/ru/docs/Web/HTML/Global_attributes) применяются к целой группе, или для стилевых целей.

```html
<dl>
  <div>
    <dt>Name</dt>
    <dd>Godzilla</dd>
  </div>
  <div>
    <dt>Born</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>Birthplace</dt>
    <dd>Japan</dd>
  </div>
  <div>
    <dt>Color</dt>
    <dd>Green</dd>
  </div>
</dl>
```

## Примечание

Не используйте данный элемент (как и элемент {{HTMLElement("ul")}}) просто для создания отступов на странице. Не смотря на то, что это работает, — это является плохой практикой и подменяет семантическое значение списка определений.

Чтобы изменить отступ определений терминов, воспользуйтесь [CSS](/ru/docs/Web/CSS) - свойством {{cssxref("margin")}}.

## Проблемы доступности

Каждый скринридер произносит содержимое элемента `<dl>` по-разному. Некоторые скринридеры, такие как VoiceOver на iOS, не будут озвучивать, что содержимое `<dl>` это список. В связи с этим, убедитесь, что содержимое каждого элемента списка написано таким образом, что оно сообщает о своём отношении с другими элементами списка в списке группы.

- [CodePen - HTML Buddies: dt & dd](https://s.codepen.io/aardrian/debug/NzGaKP)

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Элемент {{HTMLElement("dt")}}
- Элемент {{HTMLElement("dd")}}
