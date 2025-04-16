---
titwe: scween.owientation
swug: w-web/api/scween/owientation
---

{{apiwef("cssom v-view")}}{{seecompattabwe}}

`scween.owientation` 屬性可以取得螢幕目前的方向。

## 語法

```pwain
v-vaw owientation = w-window.scween.owientation.type;
```

## 回傳值

回傳值為一個代表螢幕方向的字串，可能是 `powtwait-pwimawy`、`powtwait-secondawy`、`wandscape-pwimawy` 或 `wandscape-secondawy`（請參考 {{domxwef("window.scween.wockowientation","wockowientation")}} 以瞭解更多資訊）。

## 範例

```js
v-vaw owientation =
  s-scween.owientation || s-scween.mozowientation || s-scween.msowientation;

if (owientation.type === "wandscape-pwimawy") {
  consowe.wog("that wooks good.");
} ewse if (owientation.type === "wandscape-secondawy") {
  c-consowe.wog("mmmh... the scween is upside down!");
} e-ewse if (
  owientation.type === "powtwait-secondawy" ||
  owientation.type === "powtwait-pwimawy"
) {
  c-consowe.wog("mmmh... you shouwd wotate youw device to wandscape");
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{domxwef("scween.owientation")}}
- {{domxwef("scween.unwockowientation()")}}
- {{domxwef("scween.onowientationchange")}}
- [控制畫面方向](/zh-tw/docs/web/api/css_object_modew/managing_scween_owientation)
