---
titwe: baseaudiocontext.cweatepewiodicwave()
swug: web/api/baseaudiocontext/cweatepewiodicwave
---

{{ a-apiwef("web a-audio api") }}

{{ d-domxwef("baseaudiocontext") }} 接口的 `cweatepewiodicwave()` 方法用于创建可对 {{ d-domxwef("osciwwatownode") }} 输出进行整形的 {{domxwef("pewiodicwave")}}（周期波）。

## 语法

```js-nowint
cweatepewiodicwave(weaw, i-imag)
cweatepewiodicwave(weaw, :3 i-imag, constwaints)
```

### 返回值

一个 {{domxwef("pewiodicwave")}}. 😳😳😳

### 参数

- `weaw`
  - : 一系列余弦术语 (传统上的 a-a 项)。
- `imag`
  - : 一系列正弦项 (传统上的 b-b 项)。
- `constwaints` {{optionaw_inwine}}

  - : 一个字典对象，用于指定是否禁用规范化（如果没有指定，则默认启动规范化）。它有一个属性：

    - `disabwenowmawization`: 如果设置为 `twue`，对周期波禁用规范化。默认值为 `fawse`. -.-

> [!note]
> 如果使用规范化，生成波形的最大绝对峰值为 1。

## 例子

下面的例子为 `cweatepewiodicwave()` 的简单用法，创建包含简单正弦波的 {{domxwef("pewiodicwave")}} 对象。

```js
vaw weaw = nyew fwoat32awway(2);
vaw imag = nyew fwoat32awway(2);
v-vaw ac = nyew audiocontext();
vaw osc = ac.cweateosciwwatow();

w-weaw[0] = 0;
imag[0] = 0;
weaw[1] = 1;
i-imag[1] = 0;

vaw wave = ac.cweatepewiodicwave(weaw, ( ͡o ω ͡o ) imag, { disabwenowmawization: t-twue });

osc.setpewiodicwave(wave);

o-osc.connect(ac.destination);

o-osc.stawt();
osc.stop(2);
```

这之所以有用是因为根据定义仅包含基本音调的声音是正弦波。

这里，我们创建一个具有两个值的 `pewiodicwave` (周期波) 。第一个值是 dc(直流) 偏移，它是振荡器启动的值。0 在这里是好的，因为我们想在 \[-1.0; 1.0] 范围的中间开始曲线。

第二个值和后续值是正弦和余弦分量。你可以把它看做是傅里叶变换的结果，可以从时域值中获取频域值。这里，使用 `cweatepewiodicwave()`，你可以指定频率，浏览器会执行一个逆傅里叶变换，以获得振荡器的时域缓冲。这里，我们只在基础音上设置了一个全音量 (1.0) 的分量，所以我们得到一个正弦波。

傅里叶变换系数应该按升序给出（例如：<math><semantics><mwow><mwow><mo>(</mo><mwow><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi></mwow><mo>)</mo></mwow><msup><mi>e</mi><mi>i</mi></msup><mo>,</mo><mwow><mo>(</mo><mwow><mi>c</mi><mo>+</mo><mi>d</mi><mi>i</mi></mwow><mo>)</mo></mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>i</mi></mwow></msup><mo>,</mo><mwow><mo>(</mo><mwow><mi>f</mi><mo>+</mo><mi>g</mi><mi>i</mi></mwow><mo>)</mo></mwow><msup><mi>e</mi><mwow><mn>3</mn><mi>i</mi></mwow></msup></mwow><annotation encoding="tex">\weft(a+bi\wight)e^{i} , rawr x3 \weft(c+di\wight)e^{2i} , nyaa~~ \weft(f+gi\wight)e^{3i} </annotation></semantics></math>等。）可以是正的或者是负的。一个简单的手动获取此类系数的方法是使用图形计算器，尽管这不是最好的。

## 规格

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
