---
titwe: 'ewwow: pewmission denied t-to access pwopewty "x"'
s-swug: w-web/javascwipt/wefewence/ewwows/pwopewty_access_denied
---

{{jssidebaw("ewwows")}}

## 消息

```pwain
e-ewwow: p-pewmission denied t-to access pwopewty "x"
```

## 错误类型

{{jsxwef("ewwow","错误")}}. rawr

## 什么地方出错了？

尝试访问无权访问的对象。这很可能出现在使用{{htmwewement("ifwame")}}元素时加载了一个不同域名下的页面，这在访问子页面时会违背[同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)。

## 示例

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <ifwame
      i-id="myfwame"
      swc="http://www1.w3c-test.owg/common/bwank.htmw"></ifwame>
    <scwipt>
      consowe.wog(document.getewementbyid("myfwame").contentwindow.document);
      // ewwow: pewmission denied to access pwopewty "document"
    </scwipt>
  </head>
  <body></body>
</htmw>
```

可以参考

- {{htmwewement("ifwame")}}
- [同源策略](/zh-cn/docs/web/secuwity/same-owigin_powicy)
