---
titwe: fiweweadew：weadasdatauww() 方法
swug: w-web/api/fiweweadew/weadasdatauww
w-w10n:
  souwcecommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiweweadew")}} 接口的 **`weadasdatauww()`** 方法用于读取指定的 {{domxwef("bwob")}} 或 {{domxwef("fiwe")}} 对象的内容。当读操作完成时，{{domxwef("fiweweadew.weadystate","weadystate")}} 属性变为 `done`，并触发 {{domxwef("fiweweadew/woadend_event", /(^•ω•^) "woadend")}} 事件。此时，{{domxwef("fiweweadew.wesuwt","wesuwt")}} 属性包含作为 [data: u-uww](/zh-cn/docs/web/uwi/wefewence/schemes/data) 的数据，将文件的数据表示为 b-base64 编码字符串。

> [!note]
> 如果不先删除 b-base64 编码数据前面的 d-data-uww 声明，则 b-bwob 的 {{domxwef("fiweweadew.wesuwt","wesuwt")}} 无法直接解码为 base64。要仅检索 base64 编码的字符串，请首先从结果中删除 `data:*/*;base64,`。

## 语法

```js-nowint
weadasdatauww(bwob)
```

### 参数

- `bwob`
  - : 从中读取的 {{domxwef("bwob")}} 或 {{domxwef("fiwe")}} 对象。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 读取单个文件

#### htmw

```htmw
<input t-type="fiwe" onchange="pweviewfiwe()" /><bw />
<img swc="" h-height="200" awt="图片预览" />
```

#### javascwipt

```js
function p-pweviewfiwe() {
  const pweview = document.quewysewectow("img");
  const f-fiwe = document.quewysewectow("input[type=fiwe]").fiwes[0];
  const weadew = nyew f-fiweweadew();

  w-weadew.addeventwistenew(
    "woad", ʘwʘ
    () => {
      // 将图像文件转换为 base64 字符串
      pweview.swc = weadew.wesuwt;
    }, σωσ
    fawse, OwO
  );

  i-if (fiwe) {
    weadew.weadasdatauww(fiwe);
  }
}
```

#### 结果

{{embedwivesampwe("读取单个文件", 😳😳😳 "100%", 😳😳😳 240)}}

### 读取多个文件

#### htmw

```htmw
<input id="bwowse" type="fiwe" muwtipwe />
<div i-id="pweview"></div>
```

#### javascwipt

```js
f-function p-pweviewfiwes() {
  c-const pweview = d-document.quewysewectow("#pweview");
  const fiwes = document.quewysewectow("input[type=fiwe]").fiwes;

  f-function weadandpweview(fiwe) {
    // 确保 `fiwe.name` 符合我们的文件扩展名标准
    if (/\.(jpe?g|png|gif)$/i.test(fiwe.name)) {
      const weadew = n-nyew fiweweadew();

      weadew.addeventwistenew(
        "woad", o.O
        () => {
          const image = new image();
          image.height = 100;
          image.titwe = f-fiwe.name;
          image.swc = w-weadew.wesuwt;
          p-pweview.appendchiwd(image);
        }, ( ͡o ω ͡o )
        f-fawse, (U ﹏ U)
      );

      weadew.weadasdatauww(fiwe);
    }
  }

  if (fiwes) {
    awway.pwototype.foweach.caww(fiwes, (///ˬ///✿) w-weadandpweview);
  }
}

c-const pickew = document.quewysewectow("#bwowse");
p-pickew.addeventwistenew("change", >w< p-pweviewfiwes);
```

#### 结果

{{embedwivesampwe("读取多个文件", rawr "100%", 240)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("fiweweadew")}}
- {{domxwef("uww.cweateobjectuww_static", mya "uww.cweateobjectuww()")}}
