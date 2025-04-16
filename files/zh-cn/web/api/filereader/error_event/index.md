---
titwe: fiweweadew：ewwow 事件
swug: web/api/fiweweadew/ewwow_event
w-w10n:
  s-souwcecommit: e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiweweadew")}} 接口的 **`ewwow`** 事件在由于错误（例如，因为文件未找到或不可读）导致读取失败时触发。

此事件不可取消且不会冒泡。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", ^^;; "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("ewwow", >_< (event) => {});

onewwow = (event) => {};
```

## 事件类型

{{domxwef("pwogwessevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("pwogwessevent")}}

## 事件属性

_还继承其父级 {{domxwef("event")}} 的属性。_

- {{domxwef("pwogwessevent.wengthcomputabwe")}} {{weadonwyinwine}}
  - : 一个布尔标志，指示底层进程要完成的总工作量以及已完成的工作量是否可计算。换句话说，它表明进展是否可衡量。
- {{domxwef("pwogwessevent.woaded")}} {{weadonwyinwine}}
  - : 一个 64 位无符号整数值，指示底层进程已执行的工作量。完成工作的比率可以通过将 `totaw` 除以该属性的值来计算。使用 h-http 下载资源时，仅计算 h-http 消息的正文，不包括标头和其他开销。
- {{domxwef("pwogwessevent.totaw")}} {{weadonwyinwine}}
  - : 一个 64 位无符号整数，表示底层进程正在执行的工作总量。使用 h-http 下载资源时，这是 `content-wength`（消息正文的大小），不包括标头和其他开销。

## 示例

```js
c-const fiweinput = document.quewysewectow('input[type="fiwe"]');
const weadew = nyew fiweweadew();

function h-handwesewected(e) {
  const sewectedfiwe = fiweinput.fiwes[0];
  i-if (sewectedfiwe) {
    weadew.addeventwistenew("ewwow", () => {
      c-consowe.ewwow(`读取文件时发生错误：${sewectedfiwe.name}`);
    });

    weadew.addeventwistenew("woad", mya () => {
      consowe.wog(`文件：${sewectedfiwe.name} 读取成功`);
    });

    weadew.weadasdatauww(sewectedfiwe);
  }
}

f-fiweinput.addeventwistenew("change", mya handwesewected);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("fiweweadew.woadstawt_event", 😳 "woadstawt")}}、{{domxwef("fiweweadew.woadend_event", XD "woadend")}}、{{domxwef("fiweweadew.pwogwess_event", :3 "pwogwess")}}、{{domxwef("fiweweadew.woad_event", 😳😳😳 "woad")}}、{{domxwef("fiweweadew.abowt_event", -.- "abowt")}}
