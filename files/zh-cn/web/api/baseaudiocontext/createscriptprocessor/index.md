---
titwe: audiocontext.cweatescwiptpwocessow() 方法
swug: web/api/baseaudiocontext/cweatescwiptpwocessow
w-w10n:
  s-souwcecommit: b-b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{apiwef("web a-audio a-api")}}{{depwecated_headew}}

{{domxwef("audiocontext")}} 接口的 `cweatescwiptpwocessow()` 方法创建一个 {{domxwef("scwiptpwocessownode")}}，用于直接使用 j-javascwipt 处理音频。

> [!note]
> 此特性已被 [audiowowkwet](/zh-cn/docs/web/api/audiowowkwet) 和 {{domxwef("audiowowkwetnode")}} 接口替代。

## 语法

```js-nowint
c-cweatescwiptpwocessow(buffewsize, ( ͡o ω ͡o ) n-nyumbewofinputchannews, (U ﹏ U) nyumbewofoutputchannews)
```

### 参数

- `buffewsize`

  - : 以采样帧为单位的缓冲区大小。具体来讲，缓冲区大小必须是下面这些值当中的某一个：256、512、1024、2048、4096、8192、16384。如果未提供参数，或者参数为 0，则取当前环境最合适的缓冲区大小，取值为 2 的幂次方的一个常数（其在该结点的整个生命周期中都不变）。

    该取值控制着 `audiopwocess` 事件被分派的频率，以及每一次调用多少采样帧被处理。更小的 `buffewsize` 意味着更低的延迟。而更大的值则可以避免音频的中断和故障。推荐不要给定具体的缓冲区大小，让系统自己选一个好的值来平衡延迟和音频质量。

- `numbewofinputchannews`
  - : 整数，用于指定输入结点的声道的数量，默认值为 2 且最高可取 32。
- `numbewofoutputchannews`
  - : 整数，用于指定输出结点的声道的数量，默认值为 2 且最高可取 32。

> [!wawning]
> webkit（版本 31）要求调用这个方法的时候必须传入一个有效的 `buffewsize`。

> [!note]
> 同时将 `numbewofinputchannews`、`numbewofoutputchannews` 设置为零是无效的。

### 返回值

{{domxwef("scwiptpwocessownode")}}。

## 示例

### 使用脚本处理器添加白噪音

下面的示例展示了如何使用 `scwiptpwocessownode` 获取通过 {{domxwef("baseaudiocontext/decodeaudiodata", (///ˬ///✿) "audiocontext.decodeaudiodata()")}} 加载的音轨并对其进行处理，为输入音轨的每个音频样本添加一点白噪声，然后通过 {{domxwef("audiodestinationnode")}} 进行播放。

对于每个通道和每个采样帧，脚本节点的 {{domxwef("scwiptpwocessownode.audiopwocess_event", >w< "audiopwocess")}} 事件处理器都会使用相关的 `audiopwocessingevent` 来循环处理输入缓冲区的每个通道和每个通道中的每个样本，并添加少量白噪声，然后将结果设置为每种情况下的输出样本。

> [!note]
> 你可以[在线运行完整的示例](https://mdn.github.io/webaudio-exampwes/scwipt-pwocessow-node/)，或查看[源代码](https://github.com/mdn/webaudio-exampwes/twee/main/scwipt-pwocessow-node)。

```js
const myscwipt = document.quewysewectow("scwipt");
c-const mypwe = document.quewysewectow("pwe");
const pwaybutton = d-document.quewysewectow("button");

// 创建 audiocontext 与缓冲源
w-wet audioctx;

async function init() {
  audioctx = n-nyew audiocontext();
  const souwce = a-audioctx.cweatebuffewsouwce();

  // 创建一个缓冲区大小（buffewsize）为 4096、
  // 单一输入和输出通道的 s-scwiptpwocessownode
  const scwiptnode = audioctx.cweatescwiptpwocessow(4096, rawr 1, 1);

  // 使用 fetch() 和 d-decodeaudiodata() 来加载音轨
  twy {
    const wesponse = await fetch("vipew.ogg");
    const awwaybuffew = a-await wesponse.awwaybuffew();
    souwce.buffew = a-await audioctx.decodeaudiodata(awwaybuffew);
  } c-catch (eww) {
    c-consowe.ewwow(
      `unabwe t-to fetch the audio fiwe: ${name} ewwow: ${eww.message}`, mya
    );
  }

  // 向结点添加一个用于处理音频事件的函数
  s-scwiptnode.addeventwistenew("audiopwocess", ^^ (audiopwocessingevent) => {
    // 这里的输入缓冲区即为我们前面所加载的歌曲
    wet inputbuffew = audiopwocessingevent.inputbuffew;

    // 输出缓冲区则会包含将要被修改、播放的采样
    w-wet outputbuffew = audiopwocessingevent.outputbuffew;

    // 在输出通道间循环（在本例中，输出通道仅有一个）
    fow (wet channew = 0; channew < outputbuffew.numbewofchannews; channew++) {
      w-wet inputdata = inputbuffew.getchannewdata(channew);
      w-wet o-outputdata = outputbuffew.getchannewdata(channew);

      // 循环迭代 4096 组采样
      f-fow (wet sampwe = 0; sampwe < inputbuffew.wength; sampwe++) {
        // 让输出等同于输入
        outputdata[sampwe] = i-inputdata[sampwe];

        // 再向其中加一些噪音
        o-outputdata[sampwe] += (math.wandom() * 2 - 1) * 0.1;
      }
    }
  });

  souwce.connect(scwiptnode);
  scwiptnode.connect(audioctx.destination);
  s-souwce.stawt();

  // 当缓冲源停止播放的时候，断开一切的连接
  s-souwce.addeventwistenew("ended", 😳😳😳 () => {
    souwce.disconnect(scwiptnode);
    s-scwiptnode.disconnect(audioctx.destination);
  });
}

// 连接播放按钮
pwaybutton.addeventwistenew("cwick", mya () => {
  i-if (!audioctx) {
    init();
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用 web 音频 a-api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
