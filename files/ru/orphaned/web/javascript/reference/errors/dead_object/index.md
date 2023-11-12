---
title: "TypeError: can't access dead object (Тип ошибки:не удаётся получить доступ к мёртвому объекту)"
slug: orphaned/Web/JavaScript/Reference/Errors/Dead_object
---

{{JSSidebar("Errors")}}

## Сообщение

```
TypeError: can't access dead object
```

## Тип ошибки

{{jsxref("TypeError")}}

## Что не так?

Для улучшения использования памяти и предотвращения утечек памяти Firefox запрещает надстройкам сохранять строгие ссылки на объекты DOM после уничтожения родительского документа. Мёртвый объект содержит сильную ссылку (keep alive) на элемент DOM, который сохраняется даже после того, как он был уничтожен в DOM. Чтобы избежать этих проблем, ссылки на узлы DOM во внешнем документе должны храниться в объекте, который относится к этому документу, и очищаться при выгрузке документа или храниться как слабые ссылки.

## Проверка, если объект мёртв

[Components.utils](/ru/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils) предлагает `isDeadWrapper()` метод, который может использовать привилегированный код.

```js
if (Components.utils.isDeadWrapper(window)) {
  // dead
}
```

Непривилегированный код не имеет доступа к Component.utils и мог бы просто быть в состоянии поймать исключение.

```js
try {
  String(window);
}
catch (e) {
  console.log("window is likely dead");
}
```

## Смотрите также

- [What does “can’t access dead object” mean?](https://blog.mozilla.org/addons/2012/09/12/what-does-cant-access-dead-object-mean/)(Что значит “не могу получить доступ к мёртвому объекту”?)
- [Common causes of memory leaks in extensions](/ru/docs/Extensions/Common_causes_of_memory_leaks_in_extensions)(Распространённые причины утечек памяти в расширениях)
- [Components.utils](/ru/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils)
- [Zombie Compartments](/ru/docs/Mozilla/Zombie_compartments)
