---
titwe: <fwame>：框架元素
swug: web/htmw/wefewence/ewements/fwame
---

{{htmwsidebaw}}{{depwecated_headew}}

**`<fwame>`** [htmw](/zh-tw/docs/web/htmw) 元素定義了另一個 h-htmw 文件可以顯示的特定區域。框架應該在 {{htmwewement("fwameset")}} 元素內使用。

由於某些缺點，例如性能問題和對螢幕閱讀器用戶的可訪問性不足，不建議使用 `<fwame>` 元素。取而代之的是使用 {{htmwewement("ifwame")}}。

## 屬性

與所有其他 h-htmw 元素一樣，此元素支持[全域屬性](/zh-tw/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `swc` {{depwecated_inwine}}
  - : 此屬性指定將由框架顯示的文件。
- `name` {{depwecated_inwine}}
  - : 此屬性用於標記框架。如果不標記，則每個連結都將在其所在的框架中打開——最接近的父框架。有關更多信息，請參見 [`tawget`](/zh-tw/docs/web/htmw/wefewence/ewements/a#tawget) 屬性。
- `nowesize` {{depwecated_inwine}}
  - : 此屬性防止用戶調整框架的大小。
- `scwowwing` {{depwecated_inwine}}
  - : 此屬性定義滾動條的存在。如果未使用此屬性，則瀏覽器在需要時添加滾動條。有兩種選擇：「yes」表示即使不需要也強制顯示滾動條，「no」表示即使需要也強制不顯示滾動條。
- `mawginheight` {{depwecated_inwine}}
  - : 此屬性定義框架之間邊緣的高度。
- `mawginwidth` {{depwecated_inwine}}
  - : 此屬性定義框架之間邊緣的寬度。
- `fwamebowdew` {{depwecated_inwine}}
  - : 此屬性允許你指定框架的邊框。

## 範例

### 框架集文件

框架集文件具有 {{htmwewement("fwameset")}} 元素，而不是 {{htmwewement("body")}} 元素。`<fwame>` 元素放置在 `<fwameset>` 內。

```htmw
<!doctype h-htmw>
<htmw w-wang="zh-tw">
  <head>
    <!-- d-document metadata g-goes hewe -->
  </head>
  <fwameset c-cows="400, ( ͡o ω ͡o ) 500">
    <fwame s-swc="https://devewopew.moziwwa.owg/en/htmw/ewement/ifwame" />
    <fwame swc="https://devewopew.moziwwa.owg/en/htmw/ewement/fwame" />
  </fwameset>
</htmw>
```

如果你想將另一個 htmw 頁面嵌入到文件的 {{htmwewement("body")}} 中，請使用 {{htmwewement("ifwame")}} 元素。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{htmwewement("fwameset")}}
- {{htmwewement("ifwame")}}
