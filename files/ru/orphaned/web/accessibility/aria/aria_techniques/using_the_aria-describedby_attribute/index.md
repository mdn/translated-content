---
title: Использование атрибута aria-describedby
slug: orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
---

### Описание

Атрибут [`aria-describedby`](https://www.w3.org/TR/wai-aria/#aria-describedby) используется для указания ID элементов, описывающих объект. Он используется для установления отношений между элементами управления или группами и текстом, описывающим их. Это очень похоже на [aria-labelledby](/en/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute "Using the aria-labelledby attribute"): лэйбл описывает сущность объекта, в то время как описание предоставляет дополнительную информацию, которая может понадобиться пользователю.

Атрибут `aria-describedby` используется не только для элементов форм; он, также, используется для связывания статического текста с элементами управления, группами элементов, панелями, областями, которые имеют заголовок, определениями, и др. В разделе [Examples](#examples) ниже приведено больше информации о том как использовать атрибут в этих случаях.

Этот атрибут может использоваться с любым типичным элементом HTML-форм; он не ограничивается элементами, которым назначена ARIA `role` .

### Значение

разделённый пробелами список ID элементов

### Возможные последствия для пользовательских агентов и вспомогательных технологий

> **Примечание:** Мнения о том, как вспомогательная технология должна справляться с этой техникой, могут отличаться. Приведённая выше информация является одним из таких мнений и поэтому не носит нормативного характера.

### Примеры

#### Пример 1: Связывание приложения и описания

В примере ниже, вводный параграф описывает приложение календаря. `aria-describedby` используется для связывания параграфа с контейнером приложения.

```html
<div role="application" aria-labelledby="calendar" aria-describedby="info">
    <h1 id="calendar">Calendar</h1>
    <p id="info">
        This calendar shows the game schedule for the Boston Red Sox.
    </p>
    <div role="grid">
        ...
    </div>
</div>
```

#### Пример 2: Кнопка закрытия

В примере ниже, ссылка, которая функционирует как кнопка закрытия диалога, описана в другом месте документа. Атрибут aria-describedby используется для связывания описания с ссылкой.

```html
<button aria-label="Close" aria-describedby="descriptionClose"
    onclick="myDialog.close()">X</button>

...

<div id="descriptionClose">Closing this window will discard any information entered and
return you back to the main page</div>
```

### Примечания

- Атрибут `aria-describedby` не предназначен для ссылки, описывающей внешний ресурс - так как это ID, он должен ссылаться на элемент в том же документе DOM.

### Использование ARIA-ролей

все элементы базовой разметки

### Связанные ARIA-методы

- [Using the aria-labelledby attribute](/en/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute "en/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute")

### Совместимость

TBD: добавить информацию о поддержке для общих UA и AT комбинаций продуктов

### Дополнительные ресурсы

- [WAI-ARIA specification for aria-describedby](https://www.w3.org/TR/wai-aria/#aria-describedby)
