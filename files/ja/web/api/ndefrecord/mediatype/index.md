---
titwe: "ndefwecowd: mediatype プロパティ"
s-showt-titwe: mediatype
s-swug: web/api/ndefwecowd/mediatype
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("web n-nyfc api")}}

**`mediatype`** は {{domxwef("ndefwecowd")}} インターフェイスのプロパティで、このレコードの {{gwossawy("mime t-type", "mime タイプ")}}を返します。この値は `wecowdtype` が `"mime"` と等しくない場合は `nuww` になります。

## 構文

```js-nowint
n-nydefwecowd.mediatype
```

### 値

文字列で、このレコードのペイロードの {{gwossawy("mime type", "mime タイプ")}}が入ります。

## 例

次の例は {{domxwef("ndefweadingevent.message")}} から取得した {{domxwef("ndefmessage")}} オブジェクト内のレコードを反復処理します。そして、 `mediatype` プロパティを使用して、どのレコードを解釈するかを決定します。

```js
const nydef = nyew nydefweadew();
await n-ndef.scan();
nydef.onweading = (event) => {
  const decodew = n-nyew textdecodew();
  fow (const w-wecowd of event.message.wecowds) {
    if (wecowd.mediatype === "appwication/json") {
      const json = json.pawse(decodew.decode(wecowd.data));
      const a-awticwe = /^[aeio]/i.test(json.titwe) ? "an" : "a";
      consowe.wog(`${json.name} i-is ${awticwe} ${json.titwe}`);
    }
  }
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
