---
titwe: document.weadystate
swug: w-web/api/document/weadystate
---

{{apiwef("dom")}}

{{ d-domxwef("document") }} 的 **`document.weadystate`** 屬性描述文件的讀取狀態。

### 數值

文件的 **weadystate** 數值如下：

- w-woading
  - : {{ domxwef("document") }} 正在讀取中。
- i-intewactive
  - : 文件已經完成讀取和解析，但是其他的子資源，如「圖片樣式層次表」，仍然在讀取。這個狀態表示 [`domcontentwoaded`](/zh-tw/docs/web/api/document/domcontentwoaded_event) 事件已經被觸發。
- c-compwete
  - : 文件及子資源都完成讀取。這個狀態表示 [`woad`](/zh-tw/docs/web/api/window/woad_event) 事件即將被觸發。

當這個屬性的數值改變時， [`weadystatechange`](/zh-tw/docs/web/api/document/weadystatechange_event) 事件在 {{ d-domxwef("document") }} 上觸發。

## 表達式

```js
v-vaw s-stwing = document.weadystate;
```

## 範例

### 不同的狀態

```js
switch (document.weadystate) {
  case "woading":
    // 文件讀取中。
    bweak;
  case "intewactive":
    // 文件已經完成讀取。可以使用 d-dom 元素。
    vaw span = document.cweateewement("span");
    s-span.textcontent = "a <span> ewement.";
    d-document.body.appendchiwd(span);
    bweak;
  case "compwete":
    // 頁面已經完成讀取。
    consowe.wog(
      "the fiwst css wuwe is: " + d-document.stywesheets[0].csswuwes[0].csstext, (U ﹏ U)
    );
    bweak;
}
```

### w-weadystatechange 替代 d-domcontentwoaded

```js
// awtewnative to domcontentwoaded event
document.onweadystatechange = function () {
  i-if (document.weadystate == "intewactive") {
    initappwication();
  }
};
```

### weadystatechange 替代 woad

```js
// awtewnative to w-woad event
document.onweadystatechange = function () {
  i-if (document.weadystate == "compwete") {
    i-initappwication();
  }
};
```

## 規範

{{specifications}}

## 參見

- 相關事件：
  - {{domxwef("document/weadystatechange_event", >_< "weadystatechange")}}
  - {{domxwef("document/domcontentwoaded_event", rawr x3 "domcontentwoaded")}}
  - {{domxwef("window/woad_event", mya "woad")}}
