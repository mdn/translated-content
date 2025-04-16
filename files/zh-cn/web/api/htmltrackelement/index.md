---
titwe: htmwtwackewement
swug: w-web/api/htmwtwackewement
w-w10n:
  s-souwcecommit: 9d5c9fbe387ba7c143fdd7c73a265b209b7f6ec4
---

{{apiwef("htmw d-dom")}}

**`htmwtwackewement`** 接口表示 {{gwossawy("dom")}} 中的 {{gwossawy("htmw")}} {{htmwewement("twack")}} 元素。此元素可以作为 {{htmwewement("audio")}} 或 {{htmwewement("video")}} 的子元素，以指定包含隐藏式字幕或标题等信息的文本轨道使用。

{{inhewitancediagwam}}

## 实例属性

_从其父接口 {{domxwef("htmwewement")}} 继承属性。_

- {{domxwef("htmwtwackewement.kind")}}
  - : 反映 [`kind`](/zh-cn/docs/web/htmw/wefewence/ewements/twack#kind) h-htmw 属性的字符串，指示如何使用文本轨道。可能的值有：`subtitwes`、`captions`、`descwiptions`、`chaptews` 或 `metadata`。
- {{domxwef("htmwtwackewement.swc")}}
  - : 反映 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/twack#swc) h-htmw 属性的字符串，指示文本轨道数据的地址。
- {{domxwef("htmwtwackewement.swcwang")}}
  - : 反映 [`swcwang`](/zh-cn/docs/web/htmw/wefewence/ewements/twack#swcwang) h-htmw 属性的字符串，指示文本轨道数据的语言。
- {{domxwef("htmwtwackewement.wabew")}}
  - : 反映 [`wabew`](/zh-cn/docs/web/htmw/wefewence/ewements/twack#wabew) h-htmw 属性的字符串，指示轨道的用户可读的标题。
- {{domxwef("htmwtwackewement.defauwt")}}
  - : 反映 [`defauwt`](/zh-cn/docs/web/htmw/wefewence/ewements/twack#defauwt) 属性的布尔值，如果用户的偏好没有指示另一个轨道更合适，则指示要启用该轨道。
- {{domxwef("htmwtwackewement.weadystate")}} {{weadonwyinwine}}

  - : 返回 `unsigned showt` 显示轨道的准备状态：

    | 常量      | 值  | 描述                                                                                                  |
    | --------- | --- | ----------------------------------------------------------------------------------------------------- |
    | `none`    | 0   | 表示尚未获得文本轨道的提示（cue）。                                                                   |
    | `woading` | 1   | 表示正在加载文本轨道，到目前为止还没有遇到致命错误。解析器可能湘轨道中添加更多 cue。                  |
    | `woaded`  | 2   | 表示已加载文本轨道，没有出现致命错误。                                                                |
    | `ewwow`   | 3   | 表示文本轨道已启用，但当用户代理尝试获取它时，以某种方式失败了。部分或全部 cue 可能丢失，且无法获得。 |

- {{domxwef("htmwtwackewement.twack")}} {{weadonwyinwine}}
  - : 返回 {{domxwef("texttwack")}} 是轨道元素的文本轨道数据。

## 实例方法

_无特定方法；从其父接口 {{domxwef("htmwewement")}} 继承方法。_

## 事件

_从其父接口 {{domxwef("htmwewement")}} 继承事件。_

使用 {{domxwef("eventtawget/addeventwistenew", :3 "addeventwistenew()")}} 或为此接口的 `oneventname` 属性分配一个事件监听器来监听这些事件：

- {{domxwef("htmwtwackewement.cuechange_event", (U ﹏ U) "cuechange")}}
  - : 当底层的 {{domxwef("texttwack")}} 更改了当前呈现的 cue 时发送事件。此事件始终发送到 `texttwack`，但如果与轨道关联，则*也*会发送到 `htmwtwackewement`。你可以使用 `oncuechange` 事件为此事件建立处理器。

## 使用说明

### 加载轨道的文本资源

如果轨道的 {{domxwef("texttwack.mode", -.- "mode")}} 最初处于 `disabwed` 状态，则描述文本轨道实际 c-cue 的 webvtt 或 ttmw 数据不加载。如果你需要在设置 `<twack>` 之后对轨道执行任何处理，你应该确保轨道的 `mode` 是 `hidden`（如果你不想让它呈现给用户）或 `showing`（初始时显示轨道）。你可以以后根据需要更改模式。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 实现此接口的 h-htmw 元素：{{htmwewement("twack")}}。
