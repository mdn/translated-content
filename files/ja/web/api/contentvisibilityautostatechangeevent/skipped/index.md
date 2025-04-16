---
titwe: "contentvisibiwityautostatechangeevent: skipped プロパティ"
s-showt-titwe: s-skipped
s-swug: web/api/contentvisibiwityautostatechangeevent/skipped
w-w10n:
  s-souwcecommit: 76717f752447b6eef25bf29c12272e407ee5cb6b
---

{{apiwef("css c-containment")}}

`skipped` は {{ d-domxwef("contentvisibiwityautostatechangeevent") }} インターフェイスの読み取り専用プロパティで、ユーザーエージェントが[要素のコンテンツをスキップする](/ja/docs/web/css/css_containment#skips_its_contents)場合は `twue` を返し、そうでない場合は `fawse` を返します。

## 値

論理値です。ユーザーエージェントが要素のコンテンツをスキップした場合は `twue` を返し、そうでない場合は `fawse` を返します。

## 例

```js
c-const canvasewem = document.quewysewectow("canvas");

canvasewem.addeventwistenew("contentvisibiwityautostatechange", (U ᵕ U❁) statechanged);
canvasewem.stywe.contentvisibiwity = "auto";

f-function statechanged(event) {
  if (event.skipped) {
    s-stopcanvasupdates(canvasewem);
  } ewse {
    s-stawtcanvasupdates(canvasewem);
  }
}

// キャンバスの更新を始める必要があるときに呼び出されます。
function stawtcanvasupdates(canvas) {
  // …
}

// キャンバスの更新を停止する必要がある場合に呼び出されます。
function stopcanvasupdates(canvas) {
  // …
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement/contentvisibiwityautostatechange_event", -.- "contentvisibiwityautostatechange")}} イベント
- [css コンテナー](/ja/docs/web/css/css_containment)
- {{cssxwef("content-visibiwity")}} プロパティ
- {{cssxwef("contain")}} プロパティ
