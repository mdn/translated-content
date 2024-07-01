---
title: Sensor APIs
slug: Web/API/Sensor_APIs
---

{{APIRef("Generic Sensor API")}}

传感器 API（Sensor APIs）是一组统一设计的接口，它们在 web 平台中为各类传感器提供了一致的访问方式。

## 传感器 API 的概念和使用

尽管通用传感器 API 规范（Generic Sensor API specification）定义了一个 {{domxref('Sensor')}} 接口，但作为 web 开发者不应该直接使用它。你应该使用它的某个子类来获得指定的传感器数据。例如，{{domxref('accelerometer')}}接口返回设备当前沿所有三个轴的加速度。

传感器接口不一定与物理上的传感器一一对应。例如，{{domxref('Gyroscope')}} 接口确实与一个单独的物理器件接口对应，但{{domxref('AbsoluteOrientationSensor')}}接口提供的信息则是来自两个或更多传感器器件的数据通过算法得到的。这两类传感器分别被称为*低级的*（_low-level_）和*高级的*（_high-level_）。后者也被称为融合传感器（fusion sensor），或者虚拟（virtual）传感器，或称合成（synthetic）传感器。

### 功能检测

传感器接口仅仅是底层器件传感器的代理。因此，相比其他 API，传感器功能检测更为复杂。传感器 API 的存在并不能告诉你 API 是否与一个真实的硬件传感器相连，即使相连它是否在工作，甚至用户是否已经授权访问它。要一致地提供所有这些信息是要消耗性能和电池电量的。

因此，传感器 API 的功能检测必须包含 API 本身的检测以及[防御性编程策略（见下）](#Defensive_Programming)（defensive programming strategies）。

下面的例子展示了检测传感器 API 的三种方法。此外你还可以把对象实例化部分放在一个{{jsxref('statements/try...catch', 'try...catch')}} 块中。注意通过你并不能通过{{domxref('Navigator')}} 接口来实现传感器检测。

```js
if (typeof Gyroscope === "function") {
  // run in circles...
}

if ("ProximitySensor" in window) {
  // watch out!
}

if (window.AmbientLightSensor) {
  // go dark...
}
```

### 许可和功能策略

只有用户对针对某种类型的传感器授权之后，才能对该类传感器进行读取。用{{domxref('Permissions')}} API 来进行这种授权。下面的小例子展示了在试图使用传感器之前首先请求授权。

```js
navigator.permissions.query({ name: 'accelerometer' })
.then(result => {
  if (result.state === 'denied') {
    console.log('Permission to use accelerometer sensor is denied.');
    return;
  }
  // Use the sensor.
}
```

另外一种方式是利用错误并侦听`SecurityError`事件。

```js
const sensor = new AbsoluteOrientationSensor();
sensor.start();
sensor.onerror = (event) => {
  if (event.error.name === "SecurityError")
    console.log("No permissions to use AbsoluteOrientationSensor.");
};
```

下表描述了每种传感器类型，使用它们在 Permissions API、{{HTMLElement('iframe')}} 元素中`allow` 属性，以及{{httpheader('Permissions-Policy')}}语句中被引用时使用的名字。

| Sensor                      | Permission/Feature Policy Name                         |
| --------------------------- | ------------------------------------------------------ |
| `AbsoluteOrientationSensor` | `'accelerometer'`, `'gyroscope'`, and `'magnetometer'` |
| `Accelerometer`             | `'accelerometer'`                                      |
| `AmbientLightSensor`        | `'ambient-light-sensor'`                               |
| `Gyroscope`                 | `'gyroscope'`                                          |
| `LinearAccelerationSensor`  | `'accelerometer'`                                      |
| `Magnetometer`              | `'magnetometer'`                                       |
| `RelativeOrientationSensor` | `'accelerometer'`, and `'gyroscope'`                   |

### 读数

传感器读数通过{{domxref('Sensor.onreading')}}回调函数获得，该回调函数被所有传感器类型继承。读取频率可通过在传感器的构造函数中带相应的选项来指定。此选项是一个数值，它指定每秒读取的次数。可使用整数或小数，后者用于频率低于每秒一次的情况。实际的读取频率依赖于器件的硬件实现因而可能小于所请求的频率。

下面以{{domxref('Magnetometer')}}为例展示使用方法。

```js
let magSensor = new Magnetometer({ frequency: 60 });

magSensor.addEventListener("reading", (e) => {
  console.log("Magnetic field along the X-axis " + magSensor.x);
  console.log("Magnetic field along the Y-axis " + magSensor.y);
  console.log("Magnetic field along the Z-axis " + magSensor.z);
});
magSensor.addEventListener("error", (event) => {
  console.log(event.error.name, event.error.message);
});
magSensor.start();
```

### 防御性编程

防御性编程（defensive programming）要遵循下面三个原则：

- 实例化一个传感器对象时要检查抛出的错误。
- 使用中要侦听抛出的错误。
- 正确处理错误以提升用户体验而非相反

下面的示例代码说明以上原则。{{jsxref('statements/try...catch', 'try...catch')}}代码块捕捉在实例化传感器时抛出的错误。它实现了一个{{domxref('Sensor.onerror')}}处理函数以捕捉使用中抛出的错误。它只在以下情况下提示用户：需要请求[权限](/zh-CN/docs/Web/API/Permissions_API)时，以及所请求的传感器类型在设备上不支持时。

> **备注：** 如果一个权限策略（permission policy）阻止了对某功能的使用，这是因为你的代码与你的服务器上设置的策略不一致。这种情况是不应该显示给用户看的。具体实现请参见 {{httpheader('Permissions-Policy')}}。

```js
let accelerometer = null;
try {
  accelerometer = new Accelerometer({ referenceFrame: "device" });
  accelerometer.addEventListener("error", (event) => {
    // Handle runtime errors.
    if (event.error.name === "NotAllowedError") {
      // Branch to code for requesting permission.
    } else if (event.error.name === "NotReadableError") {
      console.log("Cannot connect to the sensor.");
    }
  });
  accelerometer.addEventListener("reading", () => reloadOnShake(accelerometer));
  accelerometer.start();
} catch (error) {
  // Handle construction errors.
  if (error.name === "SecurityError") {
    // See the note above about feature policy.
    console.log("Sensor construction was blocked by a feature policy.");
  } else if (error.name === "ReferenceError") {
    console.log("Sensor is not supported by the User Agent.");
  } else {
    throw error;
  }
}
```

## 接口

- {{domxref('AbsoluteOrientationSensor')}}
  - : 描述相对于地球参考坐标系的设备物理方向。
- {{domxref('Accelerometer')}}
  - : 提供沿三个轴的加速度。
- {{domxref('AmbientLightSensor')}}
  - : 返回当前光照强度或环境光照度。
- {{domxref('Gyroscope')}}
  - : 提供三个轴向的角速度。
- {{domxref('LinearAccelerationSensor')}}
  - : 提供去除重力贡献部分之后的沿三个轴的加速度。
- {{domxref('Magnetometer')}}
  - : 提供由设备主磁传感器检测到的磁场信息。
- {{domxref('OrientationSensor')}}
  - : {{domxref('AbsoluteOrientationSensor')}}的基类。本接口不能直接使用。它提供其继承类可访问的属性和方法。
- {{domxref('RelativeOrientationSensor')}}
  - : 描述设备与地球参考坐标系无关的物理方向。
- {{domxref('Sensor')}}
  - : 所有其他传感器接口的基类。本接口不能直接使用。它提供其继承类可访问的属性、事件处理函数及方法。
- {{domxref('SensorErrorEvent')}}
  - : 提供由{{domxref('Sensor')}}或其相关的接口抛出的错误的信息。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
