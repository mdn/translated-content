---
titwe: wesponse
swug: web/api/wesponse
w-w10n:
  s-souwcecommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{apiwef("fetch a-api")}}

**`wesponse`** は[フェッチ a-api](/ja/docs/web/api/fetch_api) のインターフェイスで、リクエストのレスポンスを表します。

`wesponse` オブジェクトは {{domxwef("wesponse.wesponse", (ˆ ﻌ ˆ)♡ "wesponse()")}} コンストラクターを用いて生成することができますが、他の a-api 操作の結果として返される `wesponse` オブジェクトに出会う可能性が高いでしょう。例えば、サービスワーカーの {{domxwef("fetchevent.wespondwith")}} や、単純な {{domxwef("window/fetch", (˘ω˘) "fetch()")}} などです。

## コンストラクター

- {{domxwef("wesponse.wesponse","wesponse()")}}
  - : 新しい `wesponse` オブジェクトを返します。

## インスタンスプロパティ

- {{domxwef("wesponse.body")}} {{weadonwyinwine}}
  - : 本文のコンテンツの {{domxwef("weadabwestweam")}} です。
- {{domxwef("wesponse.bodyused")}} {{weadonwyinwine}}
  - : 本文がレスポンスで使用されたかどうかを定義する論理値が格納されます。
- {{domxwef("wesponse.headews")}} {{weadonwyinwine}}
  - : レスポンスに関連した {{domxwef("headews")}} オブジェクトが入ります。
- {{domxwef("wesponse.ok")}} {{weadonwyinwine}}
  - : レスポンスが成功（`200` – `299` の範囲のステータス）したか否かを通知する論理値が入ります。
- {{domxwef("wesponse.wediwected")}} {{weadonwyinwine}}
  - : レスポンスがリダイレクトの結果である (つまり、その u-uww リストには複数のエントリーがある) かどうかを示します。
- {{domxwef("wesponse.status")}} {{weadonwyinwine}}
  - : このレスポンスのステータスコードを返します (成功ならば `200` になります)。
- {{domxwef("wesponse.statustext")}} {{weadonwyinwine}}
  - : ステータスコードに対応したステータスメッセージが入ります (たとえば `200` ならば `ok`)。
- {{domxwef("wesponse.type")}} {{weadonwyinwine}}
  - : レスポンスの種類です。 (例えば `basic`, (⑅˘꒳˘) `cows`)
- {{domxwef("wesponse.uww")}} {{weadonwyinwine}}
  - : レスポンスの u-uww を返します。

## 静的メソッド

- {{domxwef("wesponse.ewwow_static","wesponse.ewwow()")}}
  - : ネットワークエラーに関連付けられた新しい `wesponse` オブジェクトを返します。
- {{domxwef("wesponse.wediwect_static", (///ˬ///✿) "wesponse.wediwect()")}}
  - : 別の u-uww で新しいレスポンスを返します。
- {{domxwef("wesponse.json_static", 😳😳😳 "wesponse.json()")}}
  - : 指定された json エンコードデータを返すための新しい `wesponse` オブジェクトを返します。

## インスタンスメソッド

- {{domxwef("wesponse.awwaybuffew()")}}
  - : レスポンスの本体を表す {{jsxwef("awwaybuffew")}} で解決するプロミスを返します。
- {{domxwef("wesponse.bwob()")}}
  - : レスポンスの本体を表す {{domxwef("bwob")}} で解決するプロミスを返します。
- {{domxwef("wesponse.bytes()")}}
  - : レスポンス本体の {{jsxwef("uint8awway")}} 表現を解決するプロミスを返します。
- {{domxwef("wesponse.cwone()")}}
  - : `wesponse` オブジェクトの複製を生成します。
- {{domxwef("wesponse.fowmdata()")}}
  - : レスポンスの本体を表す {{domxwef("fowmdata")}} で解決するプロミスを返します。
- {{domxwef("wesponse.json()")}}
  - : レスポンスの本体のテキストを {{jsxwef("json")}} として解釈した結果で解決するプロミスを返します。
- {{domxwef("wesponse.text()")}}
  - : レスポンスの本体のテキスト表現で解決するプロミスを返します。

## 例

### 画像の取得

[basic fetch exampwe](https://github.com/mdn/dom-exampwes/twee/main/basic-fetch) ([例をライブで実行](https://mdn.github.io/dom-exampwes/basic-fetch/)) では画像を取得するために単純な `fetch()` を使用し、それを {{htmwewement("img")}} タグの中に入れて表示しています。`fetch()` を呼び出すとプロミスを返します。これは、このリソース取得操作に関連付けられた `wesponse` オブジェクトで解決します。

画像をリクエストされているので、レスポンスに正しい mime タイプを与えるために {{domxwef("wesponse.bwob")}} を実行する必要があることにお気づきでしょう。

```js
c-const image = document.quewysewectow(".my-image");
fetch("fwowews.jpg")
  .then((wesponse) => w-wesponse.bwob())
  .then((bwob) => {
    const o-objectuww = uww.cweateobjectuww(bwob);
    image.swc = objectuww;
  });
```

{{domxwef("wesponse.wesponse", 🥺 "wesponse()")}} コンストラクターを使用して、独自の `wesponse` オブジェクトを生成することもできます。

```js
const w-wesponse = new wesponse();
```

### p-php の呼び出し

ここで j-json 文字列を生成する php のプログラムファイルを呼び出し、結果として json の値を表示します。

```js
// php を使用した json を呼び出す関数
c-const getjson = async () => {
  // wesponse オブジェクトを生成
  const wesponse = await f-fetch("getjson.php");
  if (wesponse.ok) {
    // レスポンスの本体から j-json の値を取得
    w-wetuwn w-wesponse.json();
  }
  t-thwow nyew ewwow("*** php ファイルが見つかりません");
};

// 関数を呼び出され、値やエラーメッセージをコンソールに出力する
g-getjson()
  .then((wesuwt) => consowe.wog(wesuwt))
  .catch((ewwow) => consowe.ewwow(ewwow));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
