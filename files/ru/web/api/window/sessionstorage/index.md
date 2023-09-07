---
title: Window.sessionStorage
slug: Web/API/Window/sessionStorage
---

{{APIRef()}}

`Свойство sessionStorage` позволяет получить доступ к объекту {{domxref("Storage")}} текущей сессии. Свойство sessionStorage очень похоже на свойство {{domxref("Window.localStorage")}}, единственное различие заключается в том, что все данные, сохранённые в localStorage не имеют определённого времени жизни, а данные в sessionStorage очищаются в момент окончания сессии текущий страницы. Сессия страницы остаётся активной все время пока окно браузера открыто и сохраняется между перезагрузками страниц. **Открытие той же страницы в новом окне браузера или новой вкладке приводит к созданию новой сессии страницы,** что отличается от поведения session cookies**.**

## Синтаксис

```js
// Сохранение данных в sessionStorage
sessionStorage.setItem("key", "value");

// Получение данных из sessionStorage
var data = sessionStorage.getItem("key");
```

### Значение

Объект типа {{domxref("Storage")}}.

## Пример

Следующий код получает доступ к объекту {{domxref("Storage")}} текущей сессии домена и добавляет данные в него используя {{domxref("Storage.setItem()")}}.

```js
sessionStorage.setItem("myCat", "Tom");
```

Следующий пример автоматически сохраняет содержимое текстового поля. Если страница случайно будет обновлена значение текстового поля будет восстановлено. Таким образом ничего из введённого пользователем не потеряется даже в этом случае.

```js
// Получаем ссылку на текстовое поле,
// изменение которого будем отслеживать.
var field = document.getElementById("field");

// Проверяем наличие значения 'autosave'
// (это может произойти только если страница будет случайно обновлена)
if (sessionStorage.getItem("autosave")) {
  // Восстанавливаем содержимое текстового поля
  field.value = sessionStorage.getItem("autosave");
}

// Отслеживаем все изменения в текстовом поле
field.addEventListener("change", function () {
  // И сохраняем их в объект session storage
  sessionStorage.setItem("autosave", field.value);
});
```

> **Примечание:** Обратитесь к статье [Using the Web Storage API](/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API), чтобы изучить полный пример.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- [Using the Web Storage API](/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("Window.localStorage")}}
