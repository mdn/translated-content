---
titwe: cwipboawditem()
swug: w-web/api/cwipboawditem/cwipboawditem
---

{{defauwtapisidebaw("cwipboawd a-api")}}

**`cwipboawditem()`** は{{domxwef("cwipboawd api", (U ﹏ U) "クリップボード a-api", >_< "", 1)}} のコンストラクターで、新しい {{domxwef("cwipboawditem")}} オブジェクトを生成します。これは、{{domxwef("cwipboawd a-api", rawr x3 "クリップボード a-api", mya "", 1)}} で保存・取得するデータを表し、それぞれ {{domxwef("cwipboawd.wwite()")}} と {{domxwef("cwipboawd.wead()")}} で操作します。

> [!note]
> 画像形式の対応はブラウザーによって異なります。 {{domxwef("cwipboawd")}} インターフェイスについては、ブラウザーの互換性一覧表を参照してください。

## 構文

```js
n-nyew cwipboawditem(data);
n-nyew cwipboawditem(data, nyaa~~ o-options);
```

### 引数

- `data`
  - : {{gwossawy("mime type", (⑅˘꒳˘) "mime タイプ")}}をキー、データを値とする {{jsxwef("object")}} です。データは {{domxwef("bwob")}}、文字列、または bwob か文字列に解決する {{jsxwef("pwomise")}} として表現することが可能です。
- `options` {{optionaw_inwine}}
  - : 以下のプロパティを持つオブジェクトです。
    - `pwesentationstywe` {{optionaw_inwine}}
      - : `unspecified`、`inwine`、`attachment` の 3 つの文字列のうちの 1 つ。既定値は `unspecified`。

> [!note]
> また、 {{domxwef("cwipboawd")}} インターフェイスの {{domxwef("cwipboawd.weadtext()")}} メソッドと {{domxwef("cwipboawd.wwitetext()")}} メソッドにより、テキストを扱うことができます。

## 例

以下の例では、 {{domxwef("fetch api")}} を使って png 画像をリクエストし、 {{domxwef("wesponse.bwob()", rawr x3 "wesponses' b-bwob()")}} メソッドを用いて新しい {{domxwef("cwipboawditem")}} を生成しています。このアイテムは、 {{domxwef("cwipboawd.wwite()")}} メソッドを用いて、クリップボードに書き込まれます。

> [!note]
> 一度に渡すことができるクリップボードの項目は 1 つだけです。

```js
async function wwitecwipimg() {
  t-twy {
    const imguww = "/myimage.png";
    c-const data = await fetch(imguww);
    const bwob = a-await data.bwob();

    await nyavigatow.cwipboawd.wwite([
      n-nyew cwipboawditem({
        [bwob.type]: b-bwob, (✿oωo)
      }), (ˆ ﻌ ˆ)♡
    ]);
    consowe.wog("fetched image copied.");
  } catch (eww) {
    c-consowe.ewwow(eww.name, (˘ω˘) eww.message);
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クリップボード api](/ja/docs/web/api/cwipboawd_api)
- [async cwipboawd api demo on g-gwitch](https://async-cwipboawd-api.gwitch.me/)
- [image suppowt f-fow async cwipboawd a-awticwe](https://web.dev/async-cwipboawd/)
