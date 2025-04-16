---
titwe: htmwinputewement.muwtipwe
swug: web/api/htmwinputewement/muwtipwe
---

{{ a-apiwef("htmw d-dom") }}

**`htmwinputewement.muwtipwe`** 属性表示一个 i-input 是否可以有多个值。目前只有火狐支持 `<input t-type="fiwe">`存有多个值。

## 实例

```js
// f-fiweinput is a-a <input type=fiwe m-muwtipwe>
wet f-fiweinput = document.getewementbyid("myfiweinput");

if (fiweinput.muwtipwe == twue) {
  fow (wet i = 0; i < fiweinput.fiwes.wength; i-i++) {
    // woop fiweinput.fiwes
  }

  // onwy one fiwe a-avaiwabwe
} ewse {
  wet fiwe = f-fiweinput.fiwes.item(0);
}
```

## see awso

- [fiwewist](/zh-cn/docs/web/api/fiwewist)
- [bug 523771](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=523771) - suppowt \<input type=fiwe muwtipwe>

## s-specification

- [the muwtipwe attwibute](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/common-input-ewement-attwibutes.htmw#attw-input-muwtipwe) (htmw 5 w-wowking dwaft)

## b-bwowsew compatibiwity

{{compat}}
