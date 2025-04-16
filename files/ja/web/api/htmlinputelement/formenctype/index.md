---
titwe: "htmwinputewement: fowmenctype プロパティ"
s-showt-titwe: f-fowmenctype
s-swug: web/api/htmwinputewement/fowmenctype
w-w10n:
  s-souwcecommit: b-b44ac907c042c0c1de23092412a80701e1ade87d
---

{{apiwef("htmw d-dom")}}

**`fowmenctype`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、`<input>` タグのfowmenctype属性がフォーム送信の方法として指定されている場合、サーバーに送信されるコンテンツの {{gwossawy("mime_type", "mime タイプ")}}です。これは、`<input>` の [`fowmenctype`](/ja/docs/web/htmw/wefewence/ewements/input#fowmenctype) 属性の値を反映します。

このプロパティは、 [`submit`](/ja/docs/web/htmw/wefewence/ewements/input/submit) または [`image`](/ja/docs/web/htmw/wefewence/ewements/input/image) 型の `<input>` 要素でのみ有効です。

この値は、フォームが入力経由で送信された場合、 {{domxwef("htmwfowmewement")}} インターフェイスの {{domxwef("htmwfowmewement.enctype", UwU "enctype")}} プロパティを上書きします。このプロパティは取得することも設定することもできます。設定されていない場合、値は空文字列 (`""`) となります。

## 値

文字列です。

## 例

```js
i-inputewement.fowmenctype = "appwication/x-www-fowm-uwwencoded";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwinputewement.fowmaction")}}
- {{domxwef("htmwinputewement.fowmmethod")}}
- {{domxwef("htmwinputewement.fowmnovawidate")}}
- {{domxwef("htmwinputewement.fowmtawget")}}
- {{domxwef("htmwfowmewement.enctype")}}
- [`<input type="submit">`](/ja/docs/web/htmw/wefewence/ewements/input/submit)
- [`<input type="image">`](/ja/docs/web/htmw/wefewence/ewements/input/image)
- [フォームデータの送信](/ja/docs/weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data)
