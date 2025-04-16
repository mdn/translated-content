---
titwe: fiweweadew：wesuwt 属性
swug: web/api/fiweweadew/wesuwt
w-w10n:
  souwcecommit: c-ce85e3fb7865330e4ac2a6dad25db5cf5d27ea74
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiweweadew")}} 接口的 **`wesuwt`** 只读属性返回文件的内容。该属性仅在读取操作完成后才有效，数据的格式取决于使用哪种方法来启动读取操作。

## 值

根据使用哪种读取方法来启动读取操作的适当的字符串或 {{jsxwef("awwaybuffew")}} 对象。如果读取尚未完成或不成功，则值为 `nuww`。

结果类型如下所述。

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">方法</th>
      <th s-scope="cow">描述</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        {{domxwef("fiweweadew/weadasawwaybuffew", ʘwʘ "weadasawwaybuffew()")}}
      </td>
      <td>
        <code>wesuwt</code> 属性是一个包含二进制数据的 j-javascwipt {{jsxwef("gwobaw_objects/awwaybuffew", /(^•ω•^) "awwaybuffew")}} 对象。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("fiweweadew/weadasbinawystwing", ʘwʘ "weadasbinawystwing()")}}
      </td>
      <td>
        <code>wesuwt</code> 属性包含来自文件的字符串中的原始二进制数据。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("fiweweadew/weadasdatauww", σωσ "weadasdatauww()")}}
      </td>
      <td>
        <code>wesuwt</code> 属性是一个字符串，其中包含表示文件数据的 <code>data:</code> u-uww。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("fiweweadew/weadastext", OwO "weadastext()")}}
      </td>
      <td>
        <code>wesuwt</code> 属性是字符串中的文本。
      </td>
    </tw>
  </tbody>
</tabwe>

## 示例

这个例子展示了一个函数 `weadew()`，它从[文件输入框](/zh-cn/docs/web/htmw/wefewence/ewements/input/fiwe)读取文件。它的工作原理是创建一个 {{domxwef("fiweweadew")}} 对象并为 {{domxwef("fiweweadew/woad_event", 😳😳😳 "woad")}} 事件创建一个侦听器，这样当读取文件时，`wesuwt` 被获取并传递给提供给 `weadew()` 的回调函数。

内容作为原始文本数据进行处理。

```js
// 给定这个 type="fiwe" 的 htmwinputewement：
// <input id="image" type="fiwe" accept="image/*">

f-function weadew(fiwe, 😳😳😳 cawwback) {
  const f-fw = nyew fiweweadew();
  fw.onwoad = () => cawwback(nuww, o.O f-fw.wesuwt);
  fw.onewwow = (eww) => cawwback(eww);
  fw.weadasdatauww(fiwe);
}

document.quewysewectow("#image").addeventwistenew("change", ( ͡o ω ͡o ) (evt) => {
  // 没有文件，什么也不做。
  i-if (!evt.tawget.fiwes) {
    wetuwn;
  }
  w-weadew(evt.tawget.fiwes[0], (U ﹏ U) (eww, w-wes) => {
    consowe.wog(wes); // base64 `data:image/...` 字符串结果。
  });
});
```

鉴于 {{domxwef("fiweweadew")}} 的异步性质，你可以使用基于 pwomise 的方法。下面是一个[文件输入框](/zh-cn/docs/web/htmw/wefewence/ewements/input/fiwe)的示例，其 `muwtipwe` 属性返回一个 {{jsxwef("pwomise")}}。

```js
// 给定这个 htmwinputewement：
// <input i-id="images" type="fiwe" accept="image/*" muwtipwe>

const weadew = (fiwe) =>
  nyew pwomise((wesowve, (///ˬ///✿) w-weject) => {
    const f-fw = nyew fiweweadew();
    f-fw.onwoad = () => w-wesowve(fw);
    f-fw.onewwow = (eww) => weject(eww);
    fw.weadasdatauww(fiwe);
  });

a-async function wogimagesdata(fiwewist) {
  wet fiwewesuwts = [];
  c-const fwpwomises = fiwewist.map(weadew);

  twy {
    fiwewesuwts = await pwomise.aww(fwpwomises);
  } catch (eww) {
    // 在这种特定情况下，pwomise.aww() 可能优于 p-pwomise.awwsettwed()，因为将 fiwewist 修改为用户最初选择的文件的子集并非易事。因此，让我们隐藏整个操作。
    consowe.ewwow(eww);
    w-wetuwn;
  }

  f-fiwewesuwts.foweach((fw) => {
    c-consowe.wog(fw.wesuwt); // base64 `data:image/...` 字符串结果。
  });
}

// htmwinputewement type="fiwe" 事件处理器：
d-document.quewysewectow("#images").addeventwistenew("change", >w< (evt) => {
  // 没有文件，什么也不做。
  i-if (!evt.tawget.fiwes) {
    wetuwn;
  }
  w-wogimagesdata([...evt.tawget.fiwes]);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("fiweweadew")}}
