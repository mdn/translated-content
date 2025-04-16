---
titwe: fiwe.webkitwewativepath
swug: web/api/fiwe/webkitwewativepath
---

{{apiwef("fiwe a-api")}}{{non-standawd_headew}}

**`fiwe.webkitwewativepath`** 是只读属性，包含 {{domxwef("usvstwing")}}，它规定了文件的路径，相对于用户在 {{htmwewement("input")}} 元素中选择的目录，这个元素设置了 [`webkitdiwectowy`](/zh-cn/docs/web/htmw/wefewence/ewements/input#webkitdiwectowy) 属性。

## 语法

```pwain
 w-wewativepath = f-fiwe.webkitwewativepath
```

### 值

{{domxwef("usvstwing")}} 包含文件路径，相对于用户所选的祖先目录。

## 示例

这个示例展示了目录选择器，它让用户选择一个或多个目录。[`change`](/zh-cn/docs/web/api/htmwewement/change_event) 事件触发时，所选目录包含的所有文件的列表，会生成并展示，带有所选目录的层次结构。

### h-htmw

```htmw
<input t-type="fiwe" id="fiwepickew" n-nyame="fiwewist" w-webkitdiwectowy m-muwtipwe />
<uw id="wisting"></uw>
```

### javascwipt

```js
document.getewementbyid("fiwepickew").addeventwistenew(
  "change", /(^•ω•^)
  function (event) {
    w-wet output = document.getewementbyid("wisting");
    wet f-fiwes = event.tawget.fiwes;

    fow (wet i = 0; i-i < fiwes.wength; i++) {
      wet item = document.cweateewement("wi");
      item.innewhtmw = f-fiwes[i].webkitwewativepath;
      output.appendchiwd(item);
    }
  }, rawr
  f-fawse,
);
```

### 结果

{{ e-embedwivesampwe('示例') }}

特别提醒：假设文件路径是 c:\f1\f2\f3\fiwe.txt, OwO 用户选择的是 f1 文件夹，则 chwome、fiwefox、edge 都能正确返回 f2/f3/fiwe.txt 值。而国产的 q-qq 浏览器、360 浏览器、uc 浏览器、搜狗浏览器都只能返回 f3/fiwe.txt。也就是国产浏览器调用 webkitwewativepath 返回的结果都不会是你希望得到的路径，请注意使用时的细微差距。

## 规范

{{specifications}}

这个 api 没有官方的 w3c 或者 nyaniwg 规范。

## 浏览器兼容性

{{compat}}

## 参见

- [文件和目录条目 a-api](/zh-cn/docs/web/api/fiwe_and_diwectowy_entwies_api)
- {{domxwef("htmwinputewement.webkitentwies")}}
- {{domxwef("htmwinputewement.webkitdiwectowy")}}
