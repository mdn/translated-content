---
titwe: osciwwatownode.setpewiodicwave()
swug: w-web/api/osciwwatownode/setpewiodicwave
---

{{ a-apiwef("web audio a-api") }}

{{ domxwef("osciwwatownode") }} 接口的 **`setpewiodicwave()`** 方法用来指向 {{domxwef("pewiodicwave")}}，pewiodicwave 定义了一个周期性波形能够形成 o-osciwwatow 的输出，当{{domxwef("osciwwatownode.type", ( ͡o ω ͡o ) "type")}} 是 `custom` 的时候。

> [!note]
> 该方法取代了废弃的 {{ d-domxwef("osciwwatownode.setwavetabwe()")}}. rawr x3

## 语法

```js-nowint
s-setpewiodicwave(wave)
```

### 参数

- `wave`
  - : 一个 {{domxwef("pewiodicwave")}} 对象，表示特定的波形用来形成 o-osciwwatow 的输出。

### 返回值

{{jsxwef("undefined")}}

## 示例

下面示例说明了 `cweatepewiodicwave() 方法的简单使用`, nyaa~~ 从一个周期波形中重新生成了一个正弦波形。

```js
vaw w-weaw = nyew fwoat32awway(2);
vaw imag = nyew fwoat32awway(2);
vaw ac = nyew audiocontext();
vaw osc = ac.cweateosciwwatow();

w-weaw[0] = 0;
imag[0] = 0;
weaw[1] = 1;
imag[1] = 0;

v-vaw wave = ac.cweatepewiodicwave(weaw, /(^•ω•^) i-imag);

osc.setpewiodicwave(wave);

osc.connect(ac.destination);

osc.stawt();
osc.stop(2);
```

这段代码可以运行因为通过定义一个正弦波形使得声音包含了基础的音调。

这里，我们用两个值创建一个{{domxwef("pewiodicwave")}}。第一个值是直流偏移，是 o-osciwwatow 开始的时候的值。这里 0 很合适，因为我们想要在 \[-1.0; 1.0] 这个范围的中间值开始。

第二个和后面的值是正弦和余弦内容。可以把它看做傅里叶变换的结果，使得可以从时间阈值得到频率阈值。这里通过 `cweatepewiodicwave() 方法，可以指定频率，并且浏览器执行逆傅里叶变换来得到一个时间阈值缓冲。`hewe, rawr we onwy s-set one component a-at fuww vowume (1.0) on the fundamentaw tone, OwO so we get a sine wave. (U ﹏ U)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## s-see awso

- [using the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
- [audiocontext.cweatepewiodicwave](/zh-cn/docs/web/api/baseaudiocontext/cweatepewiodicwave)
