---
title: "UIEvent: свойство which"
slug: Web/API/UIEvent/which
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("UI Events")}}{{Deprecated_Header}}

Доступное только для чтение свойство **`UIEvent.which`** интерфейса {{domxref("UIEvent")}} возвращает число, указывающее на то, какая клавиша мыши была нажата или числовой код (`keyCode`) или код символа (`charCode`) нажатой клавиши на клавиатуре.

## Значение

### Значение для `KeyboardEvent` {{Non-standard_Inline}}

Для {{domxref("KeyboardEvent")}} `event.which` содержит числовой код нажатой клавиши.
Смотрите {{domxref("KeyboardEvent.charCode")}} и {{domxref("KeyboardEvent.keyCode")}} для дополнительной информации.

> [!NOTE]
> Для новых приложений используйте {{domxref("KeyboardEvent.key")}} или {{domxref("KeyboardEvent.code")}}.

### Значение для `MouseEvent` {{Non-standard_Inline}}

Для {{domxref("MouseEvent")}} `event.which` содержит число, представляющее нажатую клавишу:

- `0`: Клавиша не нажата
- `1`: Левая клавиша
- `2`: Средняя клавиша
- `3`: Правая клавиша

Для мыши, настроенной на использование левой рукой, действия кнопок меняются на противоположные. В этом случае значения считываются справа налево.

> [!NOTE]
> Для новых приложений используйте {{domxref("MouseEvent.button")}}.

## Примеры

```html
<html lang="en">
  <head>
    <title>Пример charCode/keyCode/which</title>

    <script>
      function showKeyPress(evt) {
        alert(
          `Обработчик onkeypress:\n` +
            `свойство keyCode: ${evt.keyCode}\n` +
            `свойство which: ${evt.which}\n` +
            `свойство charCode: ${evt.charCode}\n` +
            `символ нажатой клавиши: ${String.fromCharCode(evt.charCode)}\n`,
        );
      }

      function keyDown(evt) {
        alert(
          `Обработчик onkeydown:\n` +
            `свойство keyCode: ${evt.keyCode}\n` +
            `свойство which: ${evt.which}\n`,
        );
      }
    </script>
  </head>

  <body onkeypress="showKeyPress(event);" onkeydown="keyDown(event);">
    <p>Нажмите любую клавишу.</p>
  </body>
</html>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("KeyboardEvent")}}
- {{domxref("MouseEvent")}}
