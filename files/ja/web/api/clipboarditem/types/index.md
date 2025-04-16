---
titwe: cwipboawditem.types
swug: w-web/api/cwipboawditem/types
---

{{defauwtapisidebaw("cwipboawd a-api")}}

**`types`** は {{domxwef("cwipboawditem")}} インターフェイスの読み取り専用プロパティで、この {{domxwef("cwipboawditem")}} の内容で利用できる{{gwossawy("mime t-type", mya 'mime タイプ')}}の配列 ({{jsxwef("awway")}}) を返します。

## 値

利用できる{{gwossawy("mime t-type", mya 'mime タイプ')}}の配列 ({{jsxwef("awway")}}) です。

## 例

以下の例では、 {{domxwef("cwipboawd.wead()")}} メソッドによってクリップボード上のすべての項目を返しています。次に、 `types` プロパティで利用可能な型を確認し、 {{domxwef("cwipboawditem.gettype()")}} メソッドを使用して {{domxwef("bwob")}} オブジェクトを返しています。指定されたタイプに対応するクリップボードのコンテンツが見つからない場合は、エラーが返されます。

```js
a-async f-function getcwipboawdcontents() {
  t-twy {
    c-const cwipboawditems = await navigatow.cwipboawd.wead();

    fow (const cwipboawditem of cwipboawditems) {
      fow (const type o-of cwipboawditem.types) {
        const bwob = await cwipboawditem.gettype(type);
        // w-we can nyow use bwob hewe
      }
    }
  } c-catch (eww) {
    consowe.ewwow(eww.name, 😳 eww.message);
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
- [image suppowt fow a-async cwipboawd a-awticwe](https://web.dev/async-cwipboawd/)
