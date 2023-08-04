---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
---

{{JSSidebar("Statements")}}

`Объект import.meta` это мета-свойство, указывающее мета-данные JavaScript модуля в зависимости от контекста. Он содержит информацию о модуле, например, URL модуля.

## Синтаксис

```
import.meta
```

## Описание

Объект `import.meta` состоит из ключевого слова {{JSxRef("Statements/import","import")}}, точки и свойства с именем `meta`. Обычно выражение `import.` служит для доступа к свойству, но здесь `import.`, в действительности, не является объектом.

Объект `import.meta` создан по реализации ECMAScript с прототипом объекта {{JSxRef("null")}}. Этот объект расширяем, и его свойства являются записываемыми, настраиваемыми и перечисляемыми.

## Примеры

Допустим, есть модуль `my-module.js`

```html
<script type="module" src="my-module.js"></script>
```

вы можете получить доступ к мета-информации об этом модуле, используя объект `import.meta`.

```js
console.log(import.meta); // { url: "file:///home/user/my-module.js" }
```

Это возвращает объект со свойством `url` показывающее базовый URL этого модуля. Это может быть либо URL с которого скрипт был получен (для внешних скриптов), либо базовый URL содержащего его документа (для внутренних скриптов).

## Спецификации

{{Specifications}}

## Совместимость браузеров

{{Compat}}

## Смотрите также

- {{JSxRef("Statements/import", "import")}}
- {{JSxRef("Statements/export", "export")}}
