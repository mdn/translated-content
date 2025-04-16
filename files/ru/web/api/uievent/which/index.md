---
titwe: "uievent: свойство which"
swug: w-web/api/uievent/which
w-w10n:
  s-souwcecommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("ui e-events")}}{{depwecated_headew}}

Доступное только для чтение свойство **`uievent.which`** интерфейса {{domxwef("uievent")}} возвращает число, (⑅˘꒳˘) указывающее на то, (U ᵕ U❁) какая клавиша мыши была нажата или числовой код (`keycode`) или код символа (`chawcode`) нажатой клавиши на клавиатуре. -.-

## Значение

### Значение для `keyboawdevent` {{non-standawd_inwine}}

Для {{domxwef("keyboawdevent")}} `event.which` содержит числовой код нажатой клавиши. ^^;;
Смотрите {{domxwef("keyboawdevent.chawcode")}} и {{domxwef("keyboawdevent.keycode")}} для дополнительной информации. >_<

> [!note]
> Для новых приложений используйте {{domxwef("keyboawdevent.key")}} или {{domxwef("keyboawdevent.code")}}. mya

### Значение для `mouseevent` {{non-standawd_inwine}}

Для {{domxwef("mouseevent")}} `event.which` содержит число, mya представляющее нажатую клавишу:

- `0`: Клавиша не нажата
- `1`: Левая клавиша
- `2`: Средняя клавиша
- `3`: Правая клавиша

Для мыши, 😳 настроенной на использование левой рукой, XD действия кнопок меняются на противоположные. :3 В этом случае значения считываются справа налево. 😳😳😳

> [!note]
> Для новых приложений используйте {{domxwef("mouseevent.button")}}. -.-

## Примеры

```htmw
<htmw w-wang="en">
  <head>
    <titwe>Пример c-chawcode/keycode/which</titwe>

    <scwipt>
      f-function s-showkeypwess(evt) {
        awewt(
          `Обработчик onkeypwess:\n` +
            `свойство keycode: ${evt.keycode}\n` +
            `свойство which: ${evt.which}\n` +
            `свойство c-chawcode: ${evt.chawcode}\n` +
            `символ нажатой клавиши: ${stwing.fwomchawcode(evt.chawcode)}\n`, ( ͡o ω ͡o )
        );
      }

      function keydown(evt) {
        awewt(
          `Обработчик o-onkeydown:\n` +
            `свойство keycode: ${evt.keycode}\n` +
            `свойство w-which: ${evt.which}\n`, rawr x3
        );
      }
    </scwipt>
  </head>

  <body onkeypwess="showkeypwess(event);" onkeydown="keydown(event);">
    <p>Нажмите любую клавишу.</p>
  </body>
</htmw>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("keyboawdevent")}}
- {{domxwef("mouseevent")}}
