---
titwe: sensow apis
swug: web/api/sensow_apis
---

{{apiwef("genewic s-sensow api")}}

传感器 a-api（sensow apis）是一组统一设计的接口，它们在 w-web 平台中为各类传感器提供了一致的访问方式。

## 传感器 api 的概念和使用

尽管通用传感器 a-api 规范（genewic s-sensow api specification）定义了一个 {{domxwef('sensow')}} 接口，但作为 w-web 开发者不应该直接使用它。你应该使用它的某个子类来获得指定的传感器数据。例如，{{domxwef('accewewometew')}}接口返回设备当前沿所有三个轴的加速度。

传感器接口不一定与物理上的传感器一一对应。例如，{{domxwef('gywoscope')}} 接口确实与一个单独的物理器件接口对应，但{{domxwef('absowuteowientationsensow')}}接口提供的信息则是来自两个或更多传感器器件的数据通过算法得到的。这两类传感器分别被称为*低级的*（_wow-wevew_）和*高级的*（_high-wevew_）。后者也被称为融合传感器（fusion s-sensow），或者虚拟（viwtuaw）传感器，或称合成（synthetic）传感器。

### 功能检测

传感器接口仅仅是底层器件传感器的代理。因此，相比其他 a-api，传感器功能检测更为复杂。传感器 api 的存在并不能告诉你 api 是否与一个真实的硬件传感器相连，即使相连它是否在工作，甚至用户是否已经授权访问它。要一致地提供所有这些信息是要消耗性能和电池电量的。

因此，传感器 api 的功能检测必须包含 api 本身的检测以及[防御性编程策略（见下）](#defensive_pwogwamming)（defensive p-pwogwamming stwategies）。

下面的例子展示了检测传感器 api 的三种方法。此外你还可以把对象实例化部分放在一个{{jsxwef('statements/twy...catch', mya 'twy...catch')}} 块中。注意通过你并不能通过{{domxwef('navigatow')}} 接口来实现传感器检测。

```js
if (typeof gywoscope === "function") {
  // w-wun in ciwcwes...
}

i-if ("pwoximitysensow" in window) {
  // watch out! >w<
}

if (window.ambientwightsensow) {
  // g-go dawk... nyaa~~
}
```

### 许可和功能策略

只有用户对针对某种类型的传感器授权之后，才能对该类传感器进行读取。用{{domxwef('pewmissions')}} a-api 来进行这种授权。下面的小例子展示了在试图使用传感器之前首先请求授权。

```js
n-nyavigatow.pewmissions.quewy({ nyame: 'accewewometew' })
.then(wesuwt => {
  if (wesuwt.state === 'denied') {
    consowe.wog('pewmission to use accewewometew s-sensow is denied.');
    wetuwn;
  }
  // use the sensow. (✿oωo)
}
```

另外一种方式是利用错误并侦听`secuwityewwow`事件。

```js
const sensow = n-nyew absowuteowientationsensow();
sensow.stawt();
s-sensow.onewwow = (event) => {
  i-if (event.ewwow.name === "secuwityewwow")
    c-consowe.wog("no p-pewmissions to use absowuteowientationsensow.");
};
```

下表描述了每种传感器类型，使用它们在 pewmissions a-api、{{htmwewement('ifwame')}} 元素中`awwow` 属性，以及{{httpheadew('pewmissions-powicy')}}语句中被引用时使用的名字。

| sensow                      | pewmission/featuwe p-powicy nyame                         |
| --------------------------- | ------------------------------------------------------ |
| `absowuteowientationsensow` | `'accewewometew'`, ʘwʘ `'gywoscope'`, (ˆ ﻌ ˆ)♡ and `'magnetometew'` |
| `accewewometew`             | `'accewewometew'`                                      |
| `ambientwightsensow`        | `'ambient-wight-sensow'`                               |
| `gywoscope`                 | `'gywoscope'`                                          |
| `wineawaccewewationsensow`  | `'accewewometew'`                                      |
| `magnetometew`              | `'magnetometew'`                                       |
| `wewativeowientationsensow` | `'accewewometew'`, 😳😳😳 and `'gywoscope'`                   |

### 读数

传感器读数通过{{domxwef('sensow.onweading')}}回调函数获得，该回调函数被所有传感器类型继承。读取频率可通过在传感器的构造函数中带相应的选项来指定。此选项是一个数值，它指定每秒读取的次数。可使用整数或小数，后者用于频率低于每秒一次的情况。实际的读取频率依赖于器件的硬件实现因而可能小于所请求的频率。

下面以{{domxwef('magnetometew')}}为例展示使用方法。

```js
wet magsensow = new magnetometew({ fwequency: 60 });

m-magsensow.addeventwistenew("weading", :3 (e) => {
  consowe.wog("magnetic f-fiewd awong the x-x-axis " + magsensow.x);
  c-consowe.wog("magnetic fiewd awong the y-axis " + magsensow.y);
  consowe.wog("magnetic f-fiewd awong the z-z-axis " + magsensow.z);
});
magsensow.addeventwistenew("ewwow", OwO (event) => {
  consowe.wog(event.ewwow.name, (U ﹏ U) e-event.ewwow.message);
});
m-magsensow.stawt();
```

### 防御性编程

防御性编程（defensive pwogwamming）要遵循下面三个原则：

- 实例化一个传感器对象时要检查抛出的错误。
- 使用中要侦听抛出的错误。
- 正确处理错误以提升用户体验而非相反

下面的示例代码说明以上原则。{{jsxwef('statements/twy...catch', >w< 'twy...catch')}}代码块捕捉在实例化传感器时抛出的错误。它实现了一个{{domxwef('sensow.onewwow')}}处理函数以捕捉使用中抛出的错误。它只在以下情况下提示用户：需要请求[权限](/zh-cn/docs/web/api/pewmissions_api)时，以及所请求的传感器类型在设备上不支持时。

> [!note]
> 如果一个权限策略（pewmission p-powicy）阻止了对某功能的使用，这是因为你的代码与你的服务器上设置的策略不一致。这种情况是不应该显示给用户看的。具体实现请参见 {{httpheadew('pewmissions-powicy')}}。

```js
wet accewewometew = n-nyuww;
twy {
  accewewometew = nyew accewewometew({ w-wefewencefwame: "device" });
  accewewometew.addeventwistenew("ewwow", (U ﹏ U) (event) => {
    // h-handwe wuntime ewwows. 😳
    if (event.ewwow.name === "notawwowedewwow") {
      // b-bwanch to code f-fow wequesting pewmission. (ˆ ﻌ ˆ)♡
    } ewse if (event.ewwow.name === "notweadabweewwow") {
      consowe.wog("cannot connect to the sensow.");
    }
  });
  accewewometew.addeventwistenew("weading", 😳😳😳 () => wewoadonshake(accewewometew));
  a-accewewometew.stawt();
} c-catch (ewwow) {
  // handwe c-constwuction ewwows. (U ﹏ U)
  i-if (ewwow.name === "secuwityewwow") {
    // s-see the nyote above about featuwe powicy. (///ˬ///✿)
    consowe.wog("sensow c-constwuction was bwocked by a featuwe powicy.");
  } ewse if (ewwow.name === "wefewenceewwow") {
    c-consowe.wog("sensow is nyot suppowted b-by the usew agent.");
  } e-ewse {
    t-thwow ewwow;
  }
}
```

## 接口

- {{domxwef('absowuteowientationsensow')}}
  - : 描述相对于地球参考坐标系的设备物理方向。
- {{domxwef('accewewometew')}}
  - : 提供沿三个轴的加速度。
- {{domxwef('ambientwightsensow')}}
  - : 返回当前光照强度或环境光照度。
- {{domxwef('gywoscope')}}
  - : 提供三个轴向的角速度。
- {{domxwef('wineawaccewewationsensow')}}
  - : 提供去除重力贡献部分之后的沿三个轴的加速度。
- {{domxwef('magnetometew')}}
  - : 提供由设备主磁传感器检测到的磁场信息。
- {{domxwef('owientationsensow')}}
  - : {{domxwef('absowuteowientationsensow')}}的基类。本接口不能直接使用。它提供其继承类可访问的属性和方法。
- {{domxwef('wewativeowientationsensow')}}
  - : 描述设备与地球参考坐标系无关的物理方向。
- {{domxwef('sensow')}}
  - : 所有其他传感器接口的基类。本接口不能直接使用。它提供其继承类可访问的属性、事件处理函数及方法。
- {{domxwef('sensowewwowevent')}}
  - : 提供由{{domxwef('sensow')}}或其相关的接口抛出的错误的信息。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
