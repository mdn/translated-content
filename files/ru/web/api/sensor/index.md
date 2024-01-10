---
title: Sensor
slug: Web/API/Sensor
l10n:
  sourceCommit: 6d194a9afcce7beef0082c1dc50644bd0fcda635
---

{{APIRef("Sensor API")}}

Интерфейс **`Sensor`** [Sensor APIs](/ru/docs/Web/API/Sensor_APIs) это базовый класс для всех интерфейсов датчиков. Этот интерфейс нельзя использовать напрямую. Вместо этого он предоставляет свойства, обработчики событий и методы, к которым обращаются интерфейсы, которые наследуются от него.

Если функциональная политика блокирует использование функции, то это происходит потому, что ваш код не соответствует политикам, установленным на вашем сервере. Это не то, что когда-либо будет показано пользователю. Статья о HTTP заголовке {{httpheader('Feature-Policy')}} содержит инструкцию по реализации.

{{InheritanceDiagram}}

Сразу после того, как объект `Sensor` создан он находится в _покое_, что значит, что датчик не принимает никаких показаний. Как только был вызван метод {{domxref("Sensor.start()", "start()")}}, датчик начинает готовить себя к приёму показаний, а когда будет готов отправит событие {{domxref("Sensor/activate_event", "activate")}} и станет _активным_. Затем датчик отправляем событие {{domxref("Sensor/reading_event", "reading")}} каждый раз, когда данные готовы для считывания.

В случае ошибки отправляется событие {{domxref("Sensor/error_event", "error")}}, считывание останавливается и объект `Sensor` снова переходит в состояние _покоя_.
Чтобы продолжить читать данные нужно снова вызвать метод {{domxref("Sensor.start()", "start()")}}.

## Интерфейсы унаследованные от `Sensor`

Ниже представлен список интерфейсов, унаследованных от `Sensor`.

- {{domxref('Accelerometer')}}
- {{domxref('AmbientLightSensor')}}
- {{domxref('GravitySensor')}}
- {{domxref('Gyroscope')}}
- {{domxref('LinearAccelerationSensor')}}
- {{domxref('Magnetometer')}}
- {{domxref('OrientationSensor')}}

## Свойства

- {{domxref('Sensor.activated')}} {{readonlyinline}}
  - : Возвращает boolean значение, определяющее в активном ли состоянии находится датчик.
- {{domxref('Sensor.hasReading')}} {{readonlyinline}}
  - : Возвращает boolean значение, определяющее считывает ли датчик показания.
- {{domxref('Sensor.timestamp')}} {{readonlyinline}}
  - : Возвращает время последнего считывания данных.

## Методы

- {{domxref('Sensor.start()')}}
  - : Активирует один из датчиков, наследованных от `Sensor`.
- {{domxref('Sensor.stop()')}}
  - : Деактивирует один из датчиков, наследованных от `Sensor`.

## События

- {{domxref('Sensor.activate_event', 'activate')}}
  - : Срабатывает, когда датчик переходит в активное состояние.
- {{domxref('Sensor.error_event', 'error')}}
  - : Срабатывает, когда происходит ошибка во время работы датчика.
- {{domxref('Sensor.reading_event', 'reading')}}
  - : Срабатывает, когда доступно считываение новых данных.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
