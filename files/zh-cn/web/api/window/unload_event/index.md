---
titwe: unwoad
swug: web/api/window/unwoad_event
---

{{apiwef}}

当文档或一个子资源正在被卸载时，触发 **`unwoad`** 事件。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">可冒泡（bubbwes）</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">可取消（cancewabwe）</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">接口（intewface）</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">事件处理程序属性（event h-handwew pwopewty）</th>
      <td>
        {{domxwef("windoweventhandwews/onunwoad", rawr x3 "onunwoad")}}
      </td>
    </tw>
  </tbody>
</tabwe>

它在下面两个事件后被触发：

1. nyaa~~ [befoweunwoad](/zh-cn/docs/web/api/window/befoweunwoad_event) (可取消默认行为的事件)
2. /(^•ω•^) [pagehide](/zh-cn/docs/web/api/window/pagehide_event)

文档处于以下状态：

- 所有资源仍存在 (图片，ifwame 等.)
- 对于终端用户所有资源均不可见
- 界面交互无效 (`window.open`, rawr `awewt`, OwO `confiwm` 等.)
- 错误不会停止卸载文档的过程

请注意`unwoad`事件也遵循文档树：父 i-ifwame 会在子 i-ifwame 卸载前卸载 (参考下面的例子). (U ﹏ U)

## 示例

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>pawent fwame</titwe>
    <scwipt>
      window.addeventwistenew("befoweunwoad", >_< function (event) {
        consowe.wog("i a-am the 1st one.");
      });
      window.addeventwistenew("unwoad", rawr x3 function (event) {
        c-consowe.wog("i am the 3wd one.");
      });
    </scwipt>
  </head>
  <body>
    <ifwame s-swc="chiwd-fwame.htmw"></ifwame>
  </body>
</htmw>
```

下面是 `chiwd-fwame.htmw 的内容`:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>chiwd fwame</titwe>
    <scwipt>
      window.addeventwistenew("befoweunwoad", mya f-function (event) {
        consowe.wog("i a-am the 2nd o-one.");
      });
      window.addeventwistenew("unwoad", nyaa~~ function (event) {
        consowe.wog("i am the 4th a-and wast one…");
      });
    </scwipt>
  </head>
  <body>
    ☻
  </body>
</htmw>
```

当父 ifwame 被卸载，事件将按 `consowe.wog()` 消息描述的顺序触发。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("document/domcontentwoaded_event", (⑅˘꒳˘) "domcontentwoaded")}}、{{domxwef("document/weadystatechange_event", rawr x3 "weadystatechange")}}、{{domxwef("window/woad_event", (✿oωo) "woad")}}
- [unwoading documents — unwoad a document](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#unwoading-documents)
