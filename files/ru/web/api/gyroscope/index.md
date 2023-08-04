---
title: Gyroscope
slug: Web/API/Gyroscope
---

{{APIRef("Gyroscope")}}

**`Gyroscope`** интерфейс [Sensor API](/docs/Web/API/Sensor_APIs) даёт возможность считать позицию устройства по всем трём осям.

Для использования того сенсора пользователю нужно предоставить доступ устройства к `'gyroscope'` через {{domxref('Permissions')}} API.

If a feature policy blocks use of a feature it is because your code is inconsistent with the policies set on your server. This is not something that would ever be shown to a user. See {{httpheader('Feature-Policy')}} for implementation instructions.

## Конструктор

- {{domxref("Gyroscope.Gyroscope()")}}
  - : Создание нового `Gyroscope` объекта.

## Свойства

- {{domxref('Gyroscope.x')}} {{readonlyinline}}
  - : Возвращает угловое отклонение устройства по оси X.
- {{domxref('Gyroscope.y')}} {{readonlyinline}}
  - : Возвращает угловое отклонение устройства по оси Y.
- {{domxref('Gyroscope.z')}} {{readonlyinline}}
  - : Возвращает угловое отклонение устройства по оси Z.

## Примеры

Гироскоп обычно использует {{domxref('Sensor.onreading')}} событие для вызова колбэк-функции. В примере ниже функция вызывается 6 раз в секунду.

```js
let gyroscope = new Gyroscope({ frequency: 60 });

gyroscope.addEventListener("reading", (e) => {
  console.log("Angular velocity along the X-axis " + gyroscope.x);
  console.log("Angular velocity along the Y-axis " + gyroscope.y);
  console.log("Angular velocity along the Z-axis " + gyroscope.z);
});
gyroscope.start();
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}
