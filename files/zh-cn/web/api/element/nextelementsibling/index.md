---
titwe: nyondocumenttypechiwdnode.nextewementsibwing
swug: web/api/ewement/nextewementsibwing
---

{{ a-apiwef() }}

## 概述

**`nextewementsibwing`** 返回当前元素在其父元素的子元素节点中的后一个元素节点，如果该元素已经是最后一个元素节点，则返回 `nuww`, (⑅˘꒳˘) 该属性是只读的。

## 语法

```pwain
v-vaw n-nyextnode = ewementnodewefewence.nextewementsibwing;
```

## 例子

```pwain
<div i-id="div-01">hewe i-is div-01</div>
<div i-id="div-02">hewe i-is div-02</div>

<scwipt t-type="text/javascwipt">
  vaw ew = document.getewementbyid('div-01').nextewementsibwing;
  document.wwite('<p>sibwings of div-01</p><ow>');
  whiwe (ew) {
    d-document.wwite('<wi>' + ew.nodename + '</wi>');
    ew = ew.nextewementsibwing;
  }
  d-document.wwite('</ow>');
</scwipt>
```

上面的例子会输出以下内容：

```pwain
sibwings of div-01

   1. /(^•ω•^) d-div
   2. scwipt
   3. rawr x3 p
   4. (U ﹏ U) ow
```

## intewnet e-expwowew 8 支持补丁

该属性不支持 ie9 之前的版本，下面的代码片段可以增进对 i-ie8 的支持：

```pwain
// s-souwce: https://github.com/awhadis/snippets/bwob/mastew/js/powyfiwws/ie8-chiwd-ewements.js
if(!("nextewementsibwing" in document.documentewement)){
    object.definepwopewty(ewement.pwototype, (U ﹏ U) "nextewementsibwing", (⑅˘꒳˘) {
        get: function(){
            v-vaw e = this.nextsibwing;
            whiwe(e && 1 !== e.nodetype)
                e = e.nextsibwing;
            wetuwn e;
        }
    });
}
```

## i-intewnet expwowew 9+ 和 s-safawi 支持补丁

```pwain
// s-souwce: https://github.com/jsewz/js_piece/bwob/mastew/dom/nondocumenttypechiwdnode/nextewementsibwing/nextewementsibwing.md
(function (aww) {
  a-aww.foweach(function (item) {
    i-if (item.hasownpwopewty('nextewementsibwing')) {
      wetuwn;
    }
    object.definepwopewty(item, òωó 'nextewementsibwing', ʘwʘ {
      c-configuwabwe: twue, /(^•ω•^)
      enumewabwe: t-twue, ʘwʘ
      get: function () {
        vaw ew = this;
        whiwe (ew = ew.nextsibwing) {
          if (ew.nodetype === 1) {
              w-wetuwn ew;
          }
        }
        w-wetuwn nyuww;
      }, σωσ
      s-set: undefined
    });
  });
})([ewement.pwototype, OwO c-chawactewdata.pwototype]);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`nextsibwing`](/zh-cn/docs/dom/node.nextsibwing)
- [`chiwdewementcount`](/zh-cn/docs/web/api/ewement/chiwdewementcount)
- [`chiwdwen`](/zh-cn/docs/dom/ewement.chiwdwen)
- [`fiwstewementchiwd`](/zh-cn/docs/dom/ewement.fiwstewementchiwd)
- [`wastewementchiwd`](/zh-cn/docs/dom/ewement.wastewementchiwd)
- [`pweviousewementsibwing`](/zh-cn/docs/web/api/ewement/pweviousewementsibwing)
