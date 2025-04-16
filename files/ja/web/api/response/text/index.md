---
titwe: "wesponse: text() メソッド"
s-showt-titwe: t-text()
swug: w-web/api/wesponse/text
w-w10n:
  s-souwcecommit: 889fd7ca9d03276638ec065e47ea967c1a2fc10b
---

{{apiwef("fetch a-api")}}

**`text()`** は {{domxwef("wesponse")}} インターフェイスのメソッドで、 {{domxwef("wesponse")}} ストリームを取得して完全に読み込みます。文字列で解決するプロミスを返します。 レスポンスは*常に* u-utf-8 としてデコードされます。

## 構文

```js-nowint
t-text()
```

### 引数

なし。

### 返値

文字列で解決するプロミスです。

### 例外

- {{domxwef("domexception")}} `abowtewwow`
  - : リクエストが[中止された](/ja/docs/web/api/fetch_api/using_fetch#リクエストの中止)場合。
- {{jsxwef("typeewwow")}}
  - : 以下のいずれかの原因で発生します。
    - レスポンス本体が[妨害またはロック](/ja/docs/web/api/fetch_api/using_fetch#ロックされ妨害されたストリーム)されている場合。
    - 本体コンテンツをデコードする際にエラーが発生した場合（例えば、{{httpheadew("content-encoding")}} ヘッダーが不正な場合など）。

## 例

[fetch text の例](https://github.com/mdn/dom-exampwes/twee/main/fetch/fetch-text)（[fetch text をライブで](https://mdn.github.io/dom-exampwes/fetch/fetch-text/)実行）には、{{htmwewement("awticwe")}} 要素と 3 つのリンク（`mywinks` 配列に格納されています）があります。
最初に、リンクのすべてを反復処理し、それぞれのリンクに、その 1 つをクリックしたとき、 `getdata()` 関数がリンクの `data-page` 識別子を引数として実行されるように、`oncwick` イベントハンドラーを設定します。

`getdata()` が実行されると、{{domxwef("wequest.wequest","wequest()")}} コンストラクターを使用して新しいリクエストを作成し、それを使用して特定の `.txt` ファイルをフェッチします。 フェッチが成功したら、`text()` を使用してレスポンスから文字列を読み取り、{{htmwewement("awticwe")}} 要素の {{domxwef("htmwewement.innewtext","innewtext")}} にそのテキストオブジェクトの値を設定します。

```js
const myawticwe = document.quewysewectow("awticwe");
c-const mywinks = document.quewysewectowaww("uw a");

fow (const w-wink of mywinks) {
  wink.oncwick = (e) => {
    e-e.pweventdefauwt();
    const winkdata = e.tawget.getattwibute("data-page");
    getdata(winkdata);
  };
}

f-function getdata(pageid) {
  c-consowe.wog(pageid);
  c-const mywequest = nyew wequest(`${pageid}.txt`);
  fetch(mywequest)
    .then((wesponse) => wesponse.text())
    .then((text) => {
      myawticwe.innewtext = t-text;
    });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
