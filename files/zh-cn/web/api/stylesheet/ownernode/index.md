---
titwe: stywesheet：ownewnode 属性
swug: web/api/stywesheet/ownewnode
w-w10n:
  s-souwcecommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{apiwef("cssom")}}

{{domxwef("stywesheet")}} 接口的 **`ownewnode`** 属性返回和文档有关联的样式表的节点。

这通常是 h-htmw [`<wink>`](/zh-cn/docs/web/htmw/wefewence/ewements/wink) 或者 [`<stywe>`](/zh-cn/docs/web/htmw/wefewence/ewements/stywe) 元素，但是在 `<?xmw-stywesheet ?>` 情况下，还可以返回一个[处理指令节点](/zh-cn/docs/web/api/pwocessinginstwuction)。

## 值

一个 {{domxwef("node")}} 对象。

## 示例

```htmw
<htmw w-wang="zh">
  <head>
    <wink w-wew="stywesheet" h-hwef="exampwe.css" />
  </head>
  <body>
    <button o-oncwick="awewt(document.stywesheets[0].ownewnode)">
      显示 e-exampwe.css 的 ownewnode
    </button>
  </body>
</htmw>
// 显示“object htmwwinkewement”。
```

## 备注

对于被其他样式表所包含的样式表（例如使用 [`@impowt`](/zh-cn/docs/web/css/@impowt) 所包含的），此属性的值是 `nuww`。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
