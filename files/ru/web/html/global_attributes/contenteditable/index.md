---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
---

{{HTMLSidebar("Global_attributes")}}

(Mozilla / 5.0 (Windows NT 6.3, WOW64; rv: 29.0) Gecko / 20100101 Firefox / 29.0)
Атрибут **`contenteditable`** [global attribute](/ru/docs/Web/HTML/Global_attributes) - это перечисляемый атрибут, указывающий, должен ли элемент редактироваться пользователем. Если это так, браузер изменит свой виджет, чтобы разрешить редактирование. Атрибут должен принимать одно из следующих значений:

- true или _пустую строку_, которое показывает, что элемент должен быть редактируемым;
- false, которое показывает, что элемент должен быть нередактируемым.

Если атрибут не указан, то его значение _наследуется_ от своего родительского элемента.

Этот атрибут _принимает одно из определённых значений_ и не является _булевским_. Это значит, что точное использование одного из значений `true, false` или пустая строка обязательно и такое сокращение, как `<label contenteditable>Пример метки</label>` неразрешено. Верное использование — `<label contenteditable="true">Пример метки</label>`.

Вы можете установить цвет, используемый для вставки текста {{Glossary("caret")}}
со свойством CSS {{cssxref("caret-color")}}.

## Спецификации

{{Specifications}}

## Совместимость

{{Compat}}

## Смотрите также

- [Создание контента для редактирования](/ru/docs/Web/Guide/HTML/Editable_content)
- Все [глобальные атрибуты](/ru/docs/Web/HTML/Общие_атрибуты)
- {{domxref("HTMLElement.contentEditable")}} и {{domxref("HTMLElement.isContentEditable")}}
