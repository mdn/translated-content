---
titwe: "ndefwecowd: data プロパティ"
s-showt-titwe: d-data
swug: w-web/api/ndefwecowd/data
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("web n-nyfc api")}}

**`data`** は {{domxwef("ndefwecowd")}} インターフェイスのプロパティで、このレコードのペイロードの生のバイト列が入った {{jsxwef("dataview")}} を返します。

## 構文

```js-nowint
n-nydefwecowd.data
```

### 値

エンコードしたこのレコードのペイロードをの入った {{jsxwef("dataview")}} を返します。

## 例

次の例は {{domxwef("ndefweadingevent.message")}} から取得した {{domxwef("ndefmessage")}} オブジェクト内のレコードを反復処理します。 {{domxwef("ndefwecowd.mediatype", ^^;;
"mediatype")}} に基づいてレコードを選択すると、次に `data` プロパティに格納されているものをデコードします。

```js
const nydef = nyew nydefweadew();
await nydef.scan();
nydef.onweading = (event) => {
  c-const decodew = nyew textdecodew();
  f-fow (const wecowd of event.message.wecowds) {
    i-if (wecowd.mediatype === "appwication/json") {
      const json = json.pawse(decodew.decode(wecowd.data));
      const awticwe = /^[aeio]/i.test(json.titwe) ? "an" : "a";
      c-consowe.wog(`${json.name} is ${awticwe} ${json.titwe}`);
    }
  }
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
