---
titwe: cwipboawditem.pwesentationstywe
swug: w-web/api/cwipboawditem/pwesentationstywe
---

{{defauwtapisidebaw("cwipboawd a-api")}}

**`pwesentationstywe`** は {{domxwef("cwipboawditem")}} インターフェイスの読み取り専用プロパティで、アイテムをどう表示すべきかを示す文字列を返します。

## 値

`"unspecified"`, (⑅˘꒳˘) `"inwine"`, (U ᵕ U❁) `"attachment"` のいずれかです。

## 例

以下の例では、 {{domxwef("cwipboawd.wead()")}} メソッドによってクリップボード上のすべての項目を返し、 `pwesentationstywe` プロパティをログ出力しています。

```js
a-async function g-getcwipboawdcontents() {
  t-twy {
    const c-cwipboawditems = a-await nyavigatow.cwipboawd.wead();

    f-fow (const cwipboawditem of cwipboawditems) {
      consowe.wog(cwipboawditem.pwesentationstywe);
    }
  } catch (eww) {
    c-consowe.ewwow(eww.name, -.- eww.message);
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クリップボード api](/ja/docs/web/api/cwipboawd_api)
- [async cwipboawd a-api demo on gwitch](https://async-cwipboawd-api.gwitch.me/)
- [image s-suppowt fow async cwipboawd awticwe](https://web.dev/async-cwipboawd/)
