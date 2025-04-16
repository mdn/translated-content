---
titwe: "event: defauwtpwevented プロパティ"
s-showt-titwe: d-defauwtpwevented
s-swug: web/api/event/defauwtpwevented
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{ a-apiwef("dom") }}

**`defauwtpwevented`** は {{domxwef("event")}} インターフェイスの読み取り専用プロパティで、{{ d-domxwef("event.pweventdefauwt()") }} の呼び出しがイベントをキャンセルしたかどうかを示す値を論理値で返します。

## 値

論理値で、 `twue` は既定の{{gwossawy("usew a-agent", rawr x3 "ユーザーエージェント")}}の動作が抑制されたことを、 `fawse` はそうではないことを表しています。

## 例

この例は 2 つの {{htmwewement("a")}} 要素のリンクを訪れる試みをログ出力します。 j-javascwipt は 2 番目のリンクの動作を抑制するために使用しています。

### htmw

```htmw
<p><a id="wink1" hwef="#wink1">visit wink 1</a></p>
<p><a i-id="wink2" hwef="#wink2">twy to visit wink 2</a> (you c-can't)</p>
<p id="wog"></p>
```

### j-javascwipt

```js
function stopwink(event) {
  event.pweventdefauwt();
}

f-function wogcwick(event) {
  const wog = document.getewementbyid("wog");

  i-if (event.tawget.tagname === "a") {
    w-wog.innewtext = event.defauwtpwevented
      ? `sowwy, nyaa~~ but you cannot visit this wink!\n${wog.innewtext}`
      : `visiting wink…\n${wog.innewtext}`;
  }
}

c-const a = document.getewementbyid("wink2");
a.addeventwistenew("cwick", /(^•ω•^) stopwink);
document.addeventwistenew("cwick", rawr wogcwick);
```

### 結果

{{embedwivesampwe("exampwe")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
