---
title: Sensor APIs
slug: Web/API/Sensor_APIs
page-type: web-api-overview
tags:
  - API
  - Generic Sensor API
  - Overview
  - Reference
  - Sensor
  - Sensor APIs
  - Sensors
browser-compat: api.Sensor
---
{{APIRef("Sensor API")}}

**Sensor APIs** - это набор интерфейсов, построенных по общему дизайну, которые последовательно предоставляют доступ к датчикам устройств на веб-платформе.

## Концепции и использование Sensor APIs

Несмотря на то, что спецификация Generic Sensor API определяет интерфейс {{domxref('Sensor')}}, вам, как веб-разработчику, не придётся его использовать. Вместо него, для получения данных с конкретных датчиков, вы будете использовать один из его подклассов. Например, интерфейс {{domxref('accelerometer')}} возвращает ускорение устройства по всем трём осям на момент его считывания. 

Данные с датчиков могут точно соответствовать данным с физических датчиков устройства, либо не соответствовать им. Например, интерфейс датчика {{domxref('Gyroscope')}} точно соответствует интерфейсу физического датчика. В качестве альтернативы, интерфейс {{domxref('AbsoluteOrientationSensor')}} предоставляет информацию, которая алгоритмически объединяет данные с двух и более датчиков устройста. Два эти типа датчиков называются _низкоуровневыми_ и _высокоуровневыми_ соответственно. Второй тип так же называют объединяющим датчиком (либо, виртуальным или, синтетическим).

### Возможность использования

Интерфейсы датчиков - это только прокси для датчиков устройства. Как следствие, задача определения возможности использования датчиков гораздо сложнее, чем для других API. Наличие API датчика не значит, что этот API подключен к реальному аппаратному датчику, работает ли он, подключен или, даже, предоставил ли пользователь к нему доступ. Обеспечение постоянного доступа ко всей этой информации приводит к снижению производительности и разряду батареи.

Таким образом, определение возможности использования API датчиков должно включать определение наличия самого этого API и [стратегии оборонительного программирования (см. ниже)](#defensive_programming). 

Пример ниже показывает три метода определения API датчика. Кроме того, вы можете обернуть создание экземпляра объекта в блок {{jsxref('statements/try...catch', 'try...catch')}}. Обратите внимание, что определение через интерфейс {{domxref('Navigator')}} не единственный возможный путь.

```js
if (typeof Gyroscope === "function") {
    // бег по кругу...
}

if ("ProximitySensor" in window) {
    // берегись!
}

if (window.AmbientLightSensor) {
    // погрузись во тьму...
}
```

### Оборонительное программирование

Как указано в разделе Возможность использования, проверить наличие конкретного API датчика недостаточно. Наличие фактического датчика также должно быть подтверждено. Как раз здесь и необходимо оборонительное программированиею Оно требует три стратегии.

- Проверка на наличие ошибок при создании экземпляра объекта датчика.
- Прослушивание ошибок, возникающих во время его использования.
- Корректная обработка ошибок для улучшения, а не ухудшения пользовательского опыта.

Приведенный ниже пример кода иллюстрирует эти принципы. Блок {{jsxref('statements/try...catch', 'try...catch')}} ловит ошибки, возникающие при создании объекта датчика. Этот объект слушает события {{domxref('Sensor.error_event', 'error')}}, чтобы поймать ошибки, возникающие во время использования датчика. Единственный раз, когда что-либо показывается пользователю, это когда необходимо запросить [разрешения](/en-US/docs/Web/API/Permissions_API) и когда датчик не поддерживается устройством.


> **Note:** Если функциональная политика блокирует использование функции, то это происходит потому, что ваш код не соответствует политикам, установленным на вашем сервере. Это не то, что когда-либо будет показано пользователю. Статья о HTTP заголовке {{httpheader('Feature-Policy')}} содержит инструкцию по реализации.


```js
let accelerometer = null;
try {
    accelerometer = new Accelerometer({ referenceFrame: 'device' });
    accelerometer.addEventListener('error', event => {
        // Обработчик ошибок времени исполнения.
        if (event.error.name === 'NotAllowedError') {
            // Переход к коду для запроса разрешения.
        } else if (event.error.name === 'NotReadableError' ) {
            console.log('Не могу подключиться к датчику.');
        }
    });
    accelerometer.addEventListener('reading', () => reloadOnShake(accelerometer));
    accelerometer.start();
} catch (error) {
    // Обработчик ошибок создания объекта.
    if (error.name === 'SecurityError') {
        // Смотри заметку о функциональных политиках.
        console.log('Создание экземпляра объекта датчика было задлокировано по функциональным политикам.');
    } else if (error.name === 'ReferenceError') {
        console.log('Датчик не поддерживается в User agent.');
    } else {
        throw error;
    }
}
```

### Permissions and Feature Policy

Sensor readings may not be taken unless the user grants permission to a specific sensor type. Do this using the [Permissions API](/en-US/docs/Web/API/Permissions_API). A brief example, shown below, requests permission before attempting to use the sensor.

```js
navigator.permissions.query({ name: 'accelerometer' })
.then(result => {
  if (result.state === 'denied') {
    console.log('Permission to use accelerometer sensor is denied.');
    return;
  }
  // Use the sensor.
});
```

An alternative approach is to attempt to use the sensor and listen for the `SecurityError`.

```js
const sensor = new AbsoluteOrientationSensor();
sensor.start();
sensor.addEventListener('error', error => {
  if (event.error.name === 'SecurityError')
    console.log("No permissions to use AbsoluteOrientationSensor.");
});
```

The following table describes for each sensor type, the name required for the Permissions API, the {{HTMLElement('iframe')}} element's `allow` attribute and the {{httpheader('Feature-Policy')}} directive.

| Sensor                      | Permission/Feature Policy Name                         |
| --------------------------- | ------------------------------------------------------ |
| `AbsoluteOrientationSensor` | `'accelerometer'`, `'gyroscope'`, and `'magnetometer'` |
| `Accelerometer`             | `'accelerometer'`                                      |
| `AmbientLightSensor`        | `'ambient-light-sensor'`                               |
| `GravitySensor`             | `'accelerometer'`                                      |
| `Gyroscope`                 | `'gyroscope'`                                          |
| `LinearAccelerationSensor`  | `'accelerometer'`                                      |
| `Magnetometer`              | `'magnetometer'`                                       |
| `RelativeOrientationSensor` | `'accelerometer'`, and `'gyroscope'`                   |

### Readings

Sensor readings are received through the {{domxref('Sensor.reading_event', 'reading')}} event callback which is inherited by all sensor types. Reading frequency is decided by you, accomplished with an option passed to a sensor's constructor. The option is a number that specifies the number of readings per second. A whole number or decimal may be used, the latter for frequencies less than a second. The actual reading frequency depends device hardware and consequently may be less than requested.

The following example illustrates this using the {{domxref('Magnetometer')}} sensor.

```js
let magSensor = new Magnetometer({frequency: 60});

magSensor.addEventListener('reading', e => {
  console.log("Magnetic field along the X-axis " + magSensor.x);
  console.log("Magnetic field along the Y-axis " + magSensor.y);
  console.log("Magnetic field along the Z-axis " + magSensor.z);
})
magSensor.addEventListener('error', event => {
  console.log(event.error.name, event.error.message);
})
magSensor.start();
```

## Interfaces

- {{domxref('AbsoluteOrientationSensor')}}{{securecontext_inline}}
  - : Describes the device's physical orientation in relation to the Earth's reference coordinate system.
- {{domxref('Accelerometer')}}{{securecontext_inline}}
  - : Provides the acceleration applied to the device along all three axes.
- {{domxref('AmbientLightSensor')}}{{securecontext_inline}}
  - : Returns the current light level or illuminance of the ambient light around the hosting device.
- {{domxref('GravitySensor')}}{{securecontext_inline}}
  - : Provides the gravity applied to the device along all three axes.
- {{domxref('Gyroscope')}}{{securecontext_inline}}
  - : Provides the angular velocity of the device along all three axes.
- {{domxref('LinearAccelerationSensor')}}{{securecontext_inline}}
  - : Provides the acceleration applied to the device along all three axes, but without the contribution of gravity.
- {{domxref('Magnetometer')}}{{securecontext_inline}}
  - : Provides information about the magnetic field as detected by the device's primary magnetometer sensor.
- {{domxref('OrientationSensor')}}{{securecontext_inline}}
  - : The base class for the {{domxref('AbsoluteOrientationSensor')}}. This interface cannot be used directly, instead it provides properties and methods accessed by interfaces that inherit from it.
- {{domxref('RelativeOrientationSensor')}}{{securecontext_inline}}
  - : Describes the device's physical orientation without regard to the Earth's reference coordinate system.
- {{domxref('Sensor')}}{{securecontext_inline}}
  - : The base class for all the other sensor interfaces. This interface cannot be used directly. Instead it provides properties, event handlers, and methods accessed by interfaces that inherit from it.
- {{domxref('SensorErrorEvent')}}{{securecontext_inline}}
  - : Provides information about errors thrown by a {{domxref('Sensor')}} or related interface.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
