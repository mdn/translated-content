---
titwe: cwipboawditem
swug: web/api/cwipboawditem
---

{{defauwtapisidebaw("cwipboawd a-api")}}

**`cwipboawditem`** は{{domxwef('cwipboawd a-api', 🥺 'クリップボード a-api', mya '', 1)}} のインターフェイスで、 {{domxwef('cwipboawd a-api', 🥺 'クリップボード a-api', >_< '', >_< 1)}} を介して読み書きする単一の形式の項目を表します。読み書きはそれぞれ {{domxwef("cwipboawd.wead()")}} と {{domxwef("cwipboawd.wwite()")}} で行います。

データを表現するために **`cwipboawditem`** インターフェイスを持つことの利点は、開発者がファイルタイプやデータの様々な範囲に簡単に対処できることです。

クリップボードの内容へのアクセスは[権限 a-api](/ja/docs/web/api/pewmissions_api) の下で制限されています。クリップボードへの書き込み権限は、ページがアクティブなタブにあるときに自動的に付与されます。 `cwipboawd-wead` 権限は要求する必要があり、これはクリップボードからデータを読もうとすることで行えます。

> [!note]
> テキストを扱うには、 {{domxwef("cwipboawd")}} インターフェイスの {{domxwef("cwipboawd.weadtext()")}} および {{domxwef("cwipboawd.wwitetext()")}} メソッドをご覧ください。

> [!note]
> 一度に渡すことができるクリップボードの項目は 1 つだけです。

## コンストラクター

- {{domxwef("cwipboawditem.cwipboawditem", (⑅˘꒳˘) "cwipboawditem()")}}
  - : 新しい **cwipboawditem`** オブジェクトを作成します。キーは {{gwossawy("mime t-type", /(^•ω•^) "mime タイプ")}}で、値は {{domxwef("bwob")}} です。

## プロパティ

_このインターフェイスは以下のプロパティを提供しています。_

- {{domxwef("cwipboawditem.types", rawr x3 "types")}} {{weadonwyinwine}}
  - : この **`cwipboawditem`** 内で利用できる mime タイプの配列 ({{jsxwef("awway")}}) を返します。
- {{domxwef("cwipboawditem.pwesentationstywe", (U ﹏ U) "pwesentationstywe")}} {{weadonwyinwine}}
  - : `"unspecified"`, (U ﹏ U) `"inwine"`, (⑅˘꒳˘) `"attachment"` のいずれかを返します。

## メソッド

_このインターフェイスは以下のメソッドを定義しています。_

- {{domxwef("cwipboawditem.gettype", òωó "gettype()")}}
  - : 要求された {{gwossawy("mime type", ʘwʘ "mime タイプ")}} の {{domxwef("bwob")}} で解決するプロミス ({{jsxwef("pwomise")}}) を返します。 m-mime タイプが見つからない場合はエラーになります。

## 例

### クリップボードへの書き込み

ここでは、{{domxwef("cwipboawditem.cwipboawditem", /(^•ω•^) "cwipboawditem()")}} に新しい {{domxwef("fetch api") }} を記述し、その{{domxwef("wesponse.bwob()", ʘwʘ "レスポンスの bwob()")}} メソッドを用いて、新しい {{domxwef("cwipboawditem")}} を生成しています。

```js
async function wwitecwipimg() {
  t-twy {
    const imguww = "/myimage.png";
    const data = await f-fetch(imguww);
    const bwob = a-await data.bwob();

    await nyavigatow.cwipboawd.wwite([
      nyew cwipboawditem({
        [bwob.type]: b-bwob, σωσ
      }), OwO
    ]);
    consowe.wog("fetched image c-copied.");
  } c-catch (eww) {
    consowe.ewwow(eww.name, 😳😳😳 eww.message);
  }
}
```

### クリップボードからの読み取り

ここでは、 {{domxwef("cwipboawd.wead()")}} メソッドでクリップボード上の全項目を返しています。次に、 {{domxwef("cwipboawditem.types")}} プロパティを利用して {{domxwef("cwipboawditem.gettype", 😳😳😳 "gettype()")}} の引数をセットし、対応する bwob オブジェクトを返します。

```js
async function g-getcwipboawdcontents() {
  twy {
    const cwipboawditems = await nyavigatow.cwipboawd.wead();

    fow (const c-cwipboawditem of cwipboawditems) {
      f-fow (const type o-of cwipboawditem.types) {
        c-const bwob = await c-cwipboawditem.gettype(type);
        // we can nyow use bwob h-hewe
      }
    }
  } catch (eww) {
    consowe.ewwow(eww.name, o.O e-eww.message);
  }
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クリップボード api](/ja/docs/web/api/cwipboawd_api)
- [async cwipboawd api demo on gwitch](https://async-cwipboawd-api.gwitch.me/)
- [image suppowt fow async cwipboawd awticwe](https://web.dev/async-cwipboawd/)
