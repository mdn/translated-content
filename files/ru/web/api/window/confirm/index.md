---
title: Window.confirm()
slug: Web/API/Window/confirm
---

{{ApiRef("Window")}}

Метод **`Window.confirm()`** отображает диалоговое окно, которое содержит две кнопки (OK и Cancel), а так же опциональное (необязательное) текстовое сообщение.

## Синтаксис

```
result = window.confirm(message);
```

- `message` опциональная (необязательная) строка, которая будет отображена в диалоговом окне.
- `result` булево значение, указывающее на нажатую кнопку OK или Cancel (`true` означает OK).

## Пример

```
if (window.confirm("Do you really want to leave?")) {
  window.open("exit.html", "Thanks for Visiting!");
}
```

Результат:

![firefox confirm](firefoxcomfirmdialog_zpsf00ec381.png)

## Примечания

Окна сообщений - модальные, они препятствуют получению пользователем доступа к другим частям страницы до тех пор, пока окно не будет закрыто. По этой причине, вам не следует злоупотреблять этой функцией. Более того, существуют более веские причины [избегать использования диалоговых окон для подтверждения действий пользователя](http://alistapart.com/article/neveruseawarning).

Пользователям [Mozilla Chrome](/en-US/Chrome) (например, расширений Firefox) следует использовать методы `nsIPromptService` как альтернативу.

Начиная с Chrome 46.0 этот метод заблокирован в {{htmlelement("iframe")}} до тех пор, пока атрибут sandbox не установлен в значение `allow-modal`.

Аргумент является опциональным и необязательным согласно спецификации.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("window.alert","alert")}}
- {{domxref("window.prompt","prompt")}}
