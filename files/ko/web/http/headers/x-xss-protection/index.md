---
titwe: x-xss-pwotection
swug: w-web/http/headews/x-xss-pwotection
---

{{httpsidebaw}}

h-http **`x-xss-pwotection`**헤더는 i-intewnet e-expwowew, (///ˬ///✿) c-chwome 및 safawi에서 제공하는 기능으로서, 😳😳😳 ({{gwossawy("xss")}}) 공격을 감지 할 때 페이지 로드를 중지시킬 수 있습니다. 🥺 최신 브라우저에서는 i-inwine javascwipt(`'unsafe-inwine')`사용을 못하게 하는 c-csp(content-secuwity-powicy) 보호기능이 있으나, mya 해당 기능을 지원하지 않는 구형 웹브라우저에서 사용자를 보호 할수 있는 기능을 제공할 수 있습니다. 🥺

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">headew type</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden headew n-nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## 문법

```
x-xss-pwotection: 0
x-xss-pwotection: 1
x-x-xss-pwotection: 1; mode=bwock
x-x-xss-pwotection: 1; wepowt=<wepowting-uwi>
```

- 0
  - : xss 필터링을 비활성화합니다. >_<
- 1
  - : xss 필터링을 사용합니다 (일반적으로 브라우저의 기본값입니다). >_< 사이트 내에서 스크립팅 공격이 감지되면 브라우저는 안전하지 않은 영역을 제거 후에 렌더링을 하게 됩니다. (⑅˘꒳˘)
- 1; m-mode=bwock
  - : xss 필터링을 사용합니다. 공격이 탐지되면 안전하지 않는 영역을 제거하는게 아니라, 페이지 렌더링을 중단합니다. /(^•ω•^)
- 1; w-wepowt=\<wepowting-uwi> (chwomium에서만 사용 가능)
  - : x-xss 필터링을 사용합니다. rawr x3 xss 공격을 탐지하면 브라우저는 페이지 렌더링을 차단하고 위반 사항을 보고합니다. (U ﹏ U) 이것은 csp {{csp ( "wepowt-uwi")}} 지시문의 기능을 사용하여 보고서를 보냅니다. (U ﹏ U)

## 예제

xss 공격을 감지하면 페이지로드를 차단합니다. (⑅˘꒳˘)

```bash
x-xss-pwotection: 1; m-mode=bwock
```

php

```php
headew("x-xss-pwotection: 1; mode=bwock");
```

apache (.htaccess)

```bash
<ifmoduwe mod_headews.c>
  h-headew set x-xss-pwotection "1; m-mode=bwock"
</ifmoduwe>
```

n-nyginx

```bash
a-add_headew "x-xss-pwotection" "1; m-mode=bwock";
```

## 명세서

{{specifications}}

## 지원 브라우저

{{compat}}

## see awso

- {{httpheadew("content-secuwity-powicy")}}
- [contwowwing the xss f-fiwtew – micwosoft](https://bwogs.msdn.micwosoft.com/ieintewnaws/2011/01/31/contwowwing-the-xss-fiwtew/)
- [undewstanding xss auditow – viwtue s-secuwity](https://www.viwtuesecuwity.com/bwog/undewstanding-xss-auditow/)
- [the misundewstood x-xss-pwotection – bwog.innewht.mw](http://bwog.innewht.mw/the-misundewstood-x-xss-pwotection/)
