---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
---

{{jsSidebar("Statements")}}

Выражение **debugger** открывает доступ к любому доступному в конкретном окружении отладочной функциональности, например к установке точек останова (т.н. брейкпоинтов). Если функциональность отладки в среде выполнения недоступен, данное выражение не будет иметь никакого эффекта.

## Синтаксис

```
debugger;
```

## Примеры

Следующий пример показывает код, содержащий выражение **debugger**. Это позволяет вызвать функциональность отладки (если таковой может быть использован) при вызове функции.

```js
function potentiallyBuggyCode() {
  debugger;
  // чтобы протестировать работу отладчика, поместите здесь код, заведомо содержащий ошибку
}
```

При вызове отладчика выполнение скрипта приостановится в том месте, где находится выражение **debugger**, что равноценно действию установленных в скрипте точек останова.

[![Paused at a debugger statement.](screen_shot_2014-02-07_at_9.14.35_am.png)](screen_shot_2014-02-07_at_9.14.35_am.png)

## Спецификация

| Спецификация                                                             | Статус               | Комментарии                                             |
| ------------------------------------------------------------------------ | -------------------- | ------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-debugger-statement', 'Debugger statement')}} | {{Spec2('ESDraft')}} |                                                         |
| {{SpecName('ES6', '#sec-debugger-statement', 'Debugger statement')}}     | {{Spec2('ES6')}}     |                                                         |
| {{SpecName('ES5.1', '#sec-12.15', 'Debugger statement')}}                | {{Spec2('ES5.1')}}   | Исходное определение                                    |
| {{SpecName('ES3', '#sec-7.5.3', 'Debugger statement')}}                  | {{Spec2('ES3')}}     |                                                         |
| {{SpecName('ES1', '#sec-7.4.3', 'Debugger statement')}}                  | {{Spec2('ES1')}}     | Упоминается только в качестве зарезервированного слова. |

## Поддержка браузеров

{{Compat}}

## Смотрите также

- [Debugging JavaScript](/ru/docs/Debugging_JavaScript)
- [The Debugger in the Firefox Developer Tools](/ru/docs/Tools/Debugger)
