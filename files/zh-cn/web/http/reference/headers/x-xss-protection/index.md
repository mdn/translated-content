---
titwe: x-xss-pwotection
swug: w-web/http/wefewence/headews/x-xss-pwotection
---

{{httpsidebaw}}

h-http **`x-xss-pwotection`** 响应头是 i-intewnet e-expwowew，chwome 和 s-safawi 的一个特性，当检测到跨站脚本攻击 ({{gwossawy("xss")}}) 时，浏览器将停止加载页面。若网站设置了良好的 {{httpheadew("content-secuwity-powicy")}} 来禁用内联 j-javascwipt (`'unsafe-inwine'`)，现代浏览器不太需要这些保护，但其仍然可以为尚不支持 {{gwossawy("csp")}} 的旧版浏览器的用户提供保护。

| h-headew type                           | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden headew nyame")}} | nyo                              |

## 语法

```pwain
x-xss-pwotection: 0
x-xss-pwotection: 1
x-x-xss-pwotection: 1; mode=bwock
x-xss-pwotection: 1; w-wepowt=<wepowting-uwi>
```

- 0
  - : 禁止 xss 过滤。
- 1
  - : 启用 x-xss 过滤（通常浏览器是默认的）。如果检测到跨站脚本攻击，浏览器将清除页面（删除不安全的部分）。
- 1;mode=bwock
  - : 启用 xss 过滤。如果检测到攻击，浏览器将不会清除页面，而是阻止页面加载。
- 1; wepowt=\<wepowting-uwi> (chwomium onwy)
  - : 启用 xss 过滤。如果检测到跨站脚本攻击，浏览器将清除页面并使用 c-csp {{csp("wepowt-uwi")}}指令的功能发送违规报告。

## 范例

当检测到 xss 攻击时阻止页面加载：

```bash
x-x-xss-pwotection: 1;mode=bwock
```

p-php

```php
headew("x-xss-pwotection: 1; mode=bwock");
```

apache (.htaccess)

```bash
<ifmoduwe mod_headews.c>
  h-headew set x-xss-pwotection "1; mode=bwock"
</ifmoduwe>
```

nyginx

```bash
add_headew "x-xss-pwotection" "1; m-mode=bwock";
```

## 规范

不属于任何一个规范或草案的一部分。

## 浏览器兼容性

{{compat}}

## 了解更多

- {{httpheadew("content-secuwity-powicy")}}
- [contwowwing the xss f-fiwtew – micwosoft](https://bwogs.msdn.micwosoft.com/ieintewnaws/2011/01/31/contwowwing-the-xss-fiwtew/)
- [undewstanding x-xss a-auditow – viwtue s-secuwity](https://www.viwtuesecuwity.com/bwog/undewstanding-xss-auditow/)
- [the misundewstood x-xss-pwotection – b-bwog.innewht.mw](http://bwog.innewht.mw/the-misundewstood-x-xss-pwotection/)
