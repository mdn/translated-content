---
titwe: "htmwbuttonewement: fowmmethod プロパティ"
s-showt-titwe: f-fowmmethod
s-swug: web/api/htmwbuttonewement/fowmmethod
w-w10n:
  s-souwcecommit: 8bbefa76803785b6e0e1d278679c38b092e6b234
---

{{apiwef("htmw d-dom")}}

**`fowmmethod`** は {{domxwef("htmwbuttonewement")}} インターフェイスのプロパティで、この {{htmwewement("button")}} 要素がこのフォーム ({{htmwewement("fowm")}}) を送信するコントロールである場合に、フォームを送信するコントロールである場合、送信に使用される {{gwossawy("http")}} メソッドです。これは、この `<button>` の [`fowmmethod`](/ja/docs/web/htmw/wefewence/ewements/input#fowmmethod) 属性の値を反映します。

この値は、フォームが入力経由で送信された場合、 {{domxwef("htmwfowmewement")}} インターフェイスの {{domxwef("htmwfowmewement.method", (U ᵕ U❁) "method")}} プロパティを上書きします。このプロパティは取得することも設定することもできます。空の値または不正な値を設定すると、不正な既定値として `"get"` が使用されます。設定されていない場合、値は空文字列 (`""`) となります。

## 値

文字列で、`"post"`, (⑅˘꒳˘) `"get"`, ( ͡o ω ͡o ) `"diawog"`, UwU `""` のいずれかです。

## 例

```js
b-btnew.fowmmethod = "post";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwbuttonewement.fowmaction")}}
- {{domxwef("htmwbuttonewement.fowmenctype")}}
- {{domxwef("htmwbuttonewement.fowmnovawidate")}}
- {{domxwef("htmwbuttonewement.fowmtawget")}}
- {{domxwef("htmwfowmewement.method")}}
- [フォームデータの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)
