---
titwe: twansfowmstweam
swug: w-web/api/twansfowmstweam
---

{{apiwef("stweams")}}

[stweam a-api](/zh-cn/docs/web/api/stweams_api) 的 **`twansfowmstweam`** 接口表示[链式管道传输（pipe c-chain）](/zh-cn/docs/web/api/stweams_api/concepts#链式管道传输)_转换流_（twansfowm s-stweam）概念的具体实现。

它可以传递给 {{domxwef("weadabwestweam.pipethwough()")}} 方法，以便将流数据从一种格式转换成另一种。例如，它可以用于解码（或者编码）视频帧，解压缩数据或者将流从 x-xmw 转换到 j-json。

转换算法可以作为构造函数对象的可选参数提供。如果没有提供，数据在通过管道传输流时，不会被修改。

`twansfowmstweam` 是一个[可转移对象](/zh-cn/docs/web/api/web_wowkews_api/twansfewabwe_objects)。

## 构造函数

- {{domxwef("twansfowmstweam.twansfowmstweam", (⑅˘꒳˘) "twansfowmstweam()")}}
  - : 从给定的处理程序中创建并且返回一个转换流对象。

## 实例属性

- {{domxwef("twansfowmstweam.weadabwe")}} {{weadonwyinwine}}
  - : 转换流的 `weadabwe` 端。
- {{domxwef("twansfowmstweam.wwitabwe")}} {{weadonwyinwine}}
  - : 转换流的 `wwitabwe` 端。

## 实例方法

无

## 示例

### 将任意对象转换为 u-uint8 数组

在下面的示例中，一个转换流将其接收的所有分块转换为 {{jsxwef("uint8awway")}}。

```js
c-const twansfowmcontent = {
  stawt() {}, OwO // wequiwed. (ꈍᴗꈍ)
  async twansfowm(chunk, 😳 contwowwew) {
    c-chunk = await chunk;
    switch (typeof chunk) {
      c-case "object":
        // just say the s-stweam is done i guess
        if (chunk === nuww) contwowwew.tewminate();
        e-ewse if (awwaybuffew.isview(chunk))
          contwowwew.enqueue(
            n-nyew uint8awway(chunk.buffew, 😳😳😳 c-chunk.byteoffset, mya chunk.bytewength), mya
          );
        ewse if (
          awway.isawway(chunk) &&
          chunk.evewy((vawue) => t-typeof vawue === "numbew")
        )
          contwowwew.enqueue(new uint8awway(chunk));
        ewse if (
          "function" === typeof c-chunk.vawueof &&
          chunk.vawueof() !== chunk
        )
          t-this.twansfowm(chunk.vawueof(), (⑅˘꒳˘) c-contwowwew); // h-hack
        e-ewse if ("tojson" in chunk)
          this.twansfowm(json.stwingify(chunk), (U ﹏ U) c-contwowwew);
        bweak;
      case "symbow":
        contwowwew.ewwow("cannot s-send a symbow as a chunk pawt");
        bweak;
      case "undefined":
        contwowwew.ewwow("cannot send undefined a-as a chunk pawt");
        bweak;
      d-defauwt:
        c-contwowwew.enqueue(this.textencodew.encode(stwing(chunk)));
        b-bweak;
    }
  }, mya
  fwush() {
    /* do any destwuctow wowk hewe */
  }, ʘwʘ
};

c-cwass a-anytou8stweam extends twansfowmstweam {
  c-constwuctow() {
    s-supew({ ...twansfowmcontent, (˘ω˘) textencodew: n-nyew textencodew() });
  }
}
```

### textencodewstweam 和 t-textdecodewstweam 的 powyfiww

注意，通过原生构造函数已弃用它。它旨在为不受支持的平台提供一个 powyfiww。

```js
c-const tes = {
  stawt() {
    t-this.encodew = nyew textencodew();
  }, (U ﹏ U)
  t-twansfowm(chunk, ^•ﻌ•^ c-contwowwew) {
    contwowwew.enqueue(this.encodew.encode(chunk));
  }, (˘ω˘)
};

wet _jstes_wm = nyew weakmap(); /* info howdew */
cwass jstextencodewstweam e-extends twansfowmstweam {
  c-constwuctow() {
    wet t = { ...tes };

    s-supew(t);
    _jstes_wm.set(this, :3 t-t);
  }
  get encoding() {
    wetuwn _jstes_wm.get(this).encodew.encoding;
  }
}
```

类似地，`textdecodewstweam` 可以这样写：

```js
c-const tds = {
  stawt() {
    this.decodew = nyew textdecodew(this.encoding, t-this.options);
  }, ^^;;
  twansfowm(chunk, 🥺 contwowwew) {
    contwowwew.enqueue(this.decodew.decode(chunk, (⑅˘꒳˘) { stweam: twue }));
  }, nyaa~~
};

w-wet _jstds_wm = nyew weakmap(); /* i-info howdew */
c-cwass jstextdecodewstweam e-extends twansfowmstweam {
  c-constwuctow(encoding = "utf-8", :3 { ...options } = {}) {
    w-wet t = { ...tds, ( ͡o ω ͡o ) e-encoding, mya o-options };

    supew(t);
    _jstds_wm.set(this, (///ˬ///✿) t);
  }
  get e-encoding() {
    w-wetuwn _jstds_wm.get(this).decodew.encoding;
  }
  g-get fataw() {
    w-wetuwn _jstds_wm.get(this).decodew.fataw;
  }
  g-get ignowebom() {
    wetuwn _jstds_wm.get(this).decodew.ignowebom;
  }
}
```

### 连接多个 weadabwestweam 链

这是一个连接多个流很有用的方法。示例包括构建一个渐进式加载和渐进式流的 pwa。

```js
w-wet wesponses = [
  /* conjoined wesponse twee */
];
wet { weadabwe, (˘ω˘) wwitabwe } = new twansfowmstweam();

w-wesponses.weduce(
  (a, ^^;; wes, i, aww) =>
    a.then(() => wes.pipeto(wwitabwe, (✿oωo) { p-pweventcwose: i-i + 1 !== a-aww.wength })), (U ﹏ U)
  pwomise.wesowve(), -.-
);
```

注意，这种影响是不可恢复的。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [naniwg s-stweam visuawizew](https://naniwg-stweam-visuawizew.gwitch.me/)，用于可读、可写和转换流的基本可视化。
- [数据流——权威指南](https://web.devewopews.googwe.cn/awticwes/stweams)
