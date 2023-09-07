---
title: "<del>: The Deleted Text element"
slug: Web/HTML/Element/del
---

Элемент **HTML `<del>` **представляет диапазон текста, который был удалён из документа. Он может быть использован, например, при отображении "отслеживания изменений" или различий в исходном коде. Элемент {{HTMLElement("ins")}} можно использовать для противоположной цели: указание текста, который был добавлен в документ.

{{EmbedInteractiveExample("pages/tabbed/del.html", "tabbed-standard")}}

Этот элемент часто (но не обязательно) отображается с помощью применения зачёркнутого стиля к тексту.

| [Категории контента](/ru/docs/HTML/Content_categories) | [Фразовый контент](/ru/docs/HTML/Content_categories#Phrasing_content) или [потоковый контент](/ru/docs/HTML/Content_categories#Flow_content). |
| ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Допустимое содержимое                                  | [Прозрачный](/ru/docs/HTML/Content_categories#Transparent_content_model).                                                                     |
| Пропуск тегов                                          | {{no_tag_omission}}                                                                                                                           |
| Допустимые родители                                    | Любой элемент, который принимает [фразовый контент](/ru/docs/HTML/Content_categories#Phrasing_content).                                       |
| Допустимые ARIA-роли                                   | Любые                                                                                                                                         |
| DOM-интерфейс                                          | {{domxref("HTMLModElement")}}                                                                                                                 |

## Атрибуты

Атрибуты этого элемента включают [глобальные атрибуты](/ru/docs/HTML/Global_attributes).

- {{htmlattrdef("cite")}}
  - : URI для ресурса, который объясняет изменение (например, протоколы соединений).
- {{htmlattrdef("datetime")}}
  - : Этот атрибут устанавливает время и дату изменение и должен представлять собой строку с допустимой датой и временем (время не является обязательным параметром - параметр опционален). Если значение не может быть проанализировано как дата с опционально временем, элемент не будет иметь соответствующей временной отметки. Формат строки без времени смотри в [Format of a valid date string](/ru/docs/Web/HTML/Date_and_time_formats#date_strings). Формат строки с датой и временем описан в [Format of a valid local date and time string](/ru/docs/Web/HTML/Date_and_time_formats#local_date_and_time_strings).

## Примеры

```html
<p><del>This text has been deleted</del>, here is the rest of the paragraph.</p>
<del><p>This paragraph has been deleted.</p></del>
```

### Результат

~~This text has been deleted~~, here is the rest of the paragraph.

~~This paragraph has been deleted.~~

## Проблемы доступности

Присутствие элемента `del` не определено в конфигурации по умолчанию большинством технологий чтения с экрана. Его можно задать, используя свойство CSS {{cssxref("content")}}, а также {{cssxref("::before")}} и с помощью псевдоэлемента {{cssxref("::after")}}.

```css
del::before,
del::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

del::before {
  content: " [deletion start] ";
}

del::after {
  content: " [deletion end] ";
}
```

Некоторые люди, использующие программы чтения с экрана, сознательно отключают определение контента, что создаёт дополнительную многословность. Поэтому важно не злоупотреблять этой техникой, применяя её только в ситуациях, когда незнание контента, который был удалён, может негативно повлиять на восприятие.

- [Короткая заметка о создании своих меток (больше доступности) | The Paciello Group](https://developer.paciellogroup.com/blog/2017/12/short-note-on-making-your-mark-more-accessible/)
- [Тонкая настройка стилей уровня текста | Adrian Roselli](http://adrianroselli.com/2017/12/tweaking-text-level-styles.html)

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{HTMLElement("ins")}} элемент для вставки в текст
- {{HTMLElement("s")}} элемент для зачёркивания, отдельный от представления удалённого текста

{{HTMLSidebar}}
