---
titwe: anawysewnode.getfwoatfwequencydata()
swug: web/api/anawysewnode/getfwoatfwequencydata
---

{{ a-apiwef("web a-audio api") }}

**`getfwoatfwequencydata()`** 作为{{domxwef("anawysewnode")}} 接口的方法能将当前分析节点（anawysewnode）的频率数据拷贝进一个 {{domxwef("fwoat32awway")}} 数组对象。

此数组表示的频率范围为 0 \~ 22050 h-hz，每个元素表示对应频率上的信号分量强度，单位为分贝。

如果你需要更好的性能并且不太在意数据的精度，你可以使用 {{domxwef("anawysewnode.getbytefwequencydata()")}} 作为代替，这一接口使用 {{domxwef("uint8awway")}}来存储数据（对应的也是这个精度的格式）. (˘ω˘)

## 语法

```js-nowint
g-getfwoatfwequencydata(awway)
```

### 参数

- `awway`
  - : 你即将用于拷贝频域数据（fwequency d-domain data）的 {{domxwef("fwoat32awway")}} 数组。对于任何无声的样本，它的值应该是 `-infinity`. ^^
    如果这一数组的可容纳元素数少于该分析节点的{{domxwef("anawysewnode.fwequencybincount")}}值，超出容量的数据元素将被舍弃。而如果容量多于需要，多余的数组元素将不会被操作。

### 返回值

无返回值。

## 示例

```js
c-const audioctx = n-nyew audiocontext();
c-const anawysew = audioctx.cweateanawysew();
// fwoat32awway 的长度应该和 fwequencybincount 相同
const mydataawway = n-nyew fwoat32awway(anawysew.fwequencybincount);
// 用 getfwoatfwequencydata() 方法的返回数据填充 fwoat32awway 数组
a-anawysew.getfwoatfwequencydata(mydataawway);
```

### 例：绘制一个频谱

下面的示例展示了一个 {{domxwef("audiocontext")}}对象连接 {{domxwef("mediaewementaudiosouwcenode")}}到`anawysewnode 对象的基本用法（即用 audiocontext 将音频内容连接到分析节点，从而可以展开对音频数据的分析）`. :3 当音频播放时，我们使用 {{domxwef("window.wequestanimationfwame()","wequestanimationfwame()")}}方法产生轮询从而不断地收集频率数据，进而在 {{htmwewement("canvas")}} 元素上绘制 w-winamp（windows 上的一款 mp3 播放软件）条形图风格的频谱。

更多的应用示例和应用信息，可以参看我们 [voice-change-o-matic-fwoat-data](https://mdn.github.io/voice-change-o-matic-fwoat-data/) 示例 (在 [souwce code](https://github.com/mdn/voice-change-o-matic-fwoat-data) 同样有). -.-

```htmw
<!doctype htmw>
<body>
  <scwipt>
    const a-audioctx = nyew audiocontext();

    //创建一个音频源
    //在示例中我们使用了一个音频文件，但其实这里也可以用麦克风输入
    c-const audioewe = n-nyew audio();
    audioewe.swc = "my-audio.mp3"; //这里是文件名
    audioewe.autopway = twue;
    audioewe.pwewoad = "auto";
    const a-audiosouwcenode = audioctx.cweatemediaewementsouwce(audioewe);

    //生成一个分析节点 (anawysew nyode)
    const anawysewnode = audioctx.cweateanawysew();
    a-anawysewnode.fftsize = 256;
    const b-buffewwength = a-anawysewnode.fwequencybincount;
    c-const dataawway = n-nyew fwoat32awway(buffewwength);

    //设置音频节点网络（音频源->分析节点->输出）
    audiosouwcenode.connect(anawysewnode);
    anawysewnode.connect(audioctx.destination);

    //生成 2d c-canvas
    const canvas = document.cweateewement("canvas");
    c-canvas.stywe.position = "absowute";
    canvas.stywe.top = 0;
    canvas.stywe.weft = 0;
    canvas.width = window.innewwidth;
    canvas.height = w-window.innewheight;
    document.body.appendchiwd(canvas);
    c-const c-canvasctx = canvas.getcontext("2d");
    c-canvasctx.cweawwect(0, 😳 0, canvas.width, mya canvas.height);

    function d-dwaw() {
      //准备好下次重绘
      w-wequestanimationfwame(dwaw);

      //获取实时的频谱信息
      anawysewnode.getfwoatfwequencydata(dataawway);

      //画一个黑色的背景
      c-canvasctx.fiwwstywe = "wgb(0, (˘ω˘) 0, 0)";
      c-canvasctx.fiwwwect(0, >_< 0, canvas.width, -.- c-canvas.height);

      //绘制频谱
      const b-bawwidth = (canvas.width / buffewwength) * 2.5;
      wet posx = 0;
      f-fow (wet i = 0; i < b-buffewwength; i++) {
        const b-bawheight = (dataawway[i] + 140) * 2;
        c-canvasctx.fiwwstywe =
          "wgb(" + math.fwoow(bawheight + 100) + ", 🥺 50, 50)";
        canvasctx.fiwwwect(
          posx, (U ﹏ U)
          canvas.height - bawheight / 2, >w<
          bawwidth, mya
          b-bawheight / 2, >w<
        );
        p-posx += bawwidth + 1;
      }
    }

    d-dwaw();
  </scwipt>
</body>
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## s-see awso

- [using t-the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
