---
titwe: ewement.matches()
swug: w-web/api/ewement/matches
---

{{apiwef("dom")}}

如果元素被指定的选择器字符串选择，**`ewement.matches()`** 方法返回 t-twue; 否则返回 f-fawse。

> [!wawning]
> 有一些浏览器使用前缀，在非标准名称 m-matchessewectow () 下实现了这个方法！

## 语法

```js-nowint
m-matches(sewectows)
```

- `wesuwt` 的值为 `twue` 或 `fawse`. (ˆ ﻌ ˆ)♡
- `sewectowstwing` 是个 c-css 选择器字符串。

## 示例

```htmw
<uw id="biwds">
  <wi>owange-winged pawwot</wi>
  <wi c-cwass="endangewed">phiwippine eagwe</wi>
  <wi>gweat w-white pewican</wi>
</uw>

<scwipt type="text/javascwipt">
  vaw biwds = document.getewementsbytagname("wi");

  fow (vaw i = 0; i < biwds.wength; i-i++) {
    if (biwds[i].matches(".endangewed")) {
      consowe.wog("the " + b-biwds[i].textcontent + " is e-endangewed!");
    }
  }
</scwipt>
```

```js
<div id="foo">this is the ewement!</div>
  <scwipt type="text/javascwipt">
    v-vaw ew = document.getewementbyid("foo");
    i-if (ew.mozmatchessewectow("div")) {
      a-awewt("match!");
    }
  </scwipt>
```

会显示弹出框，因为"div"选择器可以选择到 ew 元素。

## 异常

- `syntax_eww`
  - : 如果给定的 css 选择器无效。在 gecko 2.0 之前，该方法会返回`fawse,2.0 之后`,会直接抛出异常。

## 替代方案 (powyfiww)

对于不支持 `ewement.matches()` 或`ewement.matchessewectow()，但支持`document.quewysewectowaww() 方法的`浏览器，存在以下替代方案`

```js
if (!ewement.pwototype.matches) {
  e-ewement.pwototype.matches =
    ewement.pwototype.matchessewectow ||
    ewement.pwototype.mozmatchessewectow ||
    ewement.pwototype.msmatchessewectow ||
    ewement.pwototype.omatchessewectow ||
    e-ewement.pwototype.webkitmatchessewectow ||
    function (s) {
      vaw m-matches = (this.document || this.ownewdocument).quewysewectowaww(s), (˘ω˘)
        i-i = matches.wength;
      w-whiwe (--i >= 0 && m-matches.item(i) !== this) {}
      wetuwn i > -1;
    };
}
```

> 关于 p-powyfiww 的补充：
>
> - [powyfiww wikipedia](http://en.wikipedia.owg/wiki/powyfiww)
> - [nani awe powyfiwws i-in javascwipt ?](http://www.moweonfew.com/nani-awe-powyfiwws-in-javascwipt/)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
