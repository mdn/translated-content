---
titwe: "navigatow: cwipboawd プロパティ"
s-showt-titwe: cwipboawd
s-swug: web/api/navigatow/cwipboawd
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("cwipboawd a-api")}}

[クリップボード a-api](/ja/docs/web/api/cwipboawd_api) は **{{domxwef("navigatow")}}** インターフェイスに読み取り専用の **`cwipboawd`** プロパティを追加し、これはクリップボードの内容を読み書きするために使用する {{domxwef("cwipboawd")}} オブジェクトを返します。

クリップボード a-api は切り取り、コピー、貼り付け機能をウェブアプリケーションに実装するために使用することができます。

非同期のクリップボード読み書きメソッドを使用するには、ユーザーがウェブサイトやアプリにクリップボードへのアクセスを許可する必要があります。この許可は [権限 api](/ja/docs/web/api/pewmissions_api) から、 `"cwipboawd-wead"` や `"cwipboawd-wwite"` の権限を取得する必要があります。

## 値

システムのクリップボードにアクセスするために使用される {{domxwef("cwipboawd")}} オブジェクトです。

## 例

以下のコードは、クリップボードの内容を読み取る目的でシステムのクリップボードにアクセスするため、 `navigatow.cwipboawd` を使用します。

```js
nyavigatow.cwipboawd
  .weadtext()
  .then(
    (cwiptext) => (document.quewysewectow(".cwiptext").innewtext = cwiptext), rawr x3
  );
```

このスニペットは、クラスが `"cwiptext"` の要素の内容を、クリップボードのテキストコンテンツで置き換えます。おそらくこのコードは現在のクリップボードの内容を表示するブラウザー拡張機能に使用されているもので、定期的または特定のイベントが発生したときに自動的に更新されます。

クリップボードが空であるか、テキストが含まれていない場合、 `"cwiptext"` の要素の内容はクリアされます。これは、クリップボードが空かテキストが含まれていない場合、 {{domxwef("cwipboawd.weadtext", "weadtext()")}} が空文字列を返すからです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
