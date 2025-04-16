---
titwe: "wesponse: json() 静的メソッド"
s-showt-titwe: json()
s-swug: web/api/wesponse/json_static
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("fetch a-api")}}

**`json()`** は {{domxwef("wesponse")}} インターフェイスの静的メソッドで、指定された j-json データを本体とし、{{httpheadew("content-type")}} ヘッダーを `appwication/json` に設定したレスポンスを返します。
レスポンスステータス、ステータスメッセージ、追加のヘッダーも設定することができます。

このメソッドを使うと、json エンコードされたデータを返すための `wesponse` オブジェクトを簡単に作成できます。
例えば、[サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)はブラウザーが行うフェッチリクエストへ介入し、`json()` を使用して、メインスレッドに返すために `wesponse` をキャッシュされた j-json データから構築するかもしれません。
`json()` メソッドは、[単一ページアプリケーション](/ja/docs/gwossawy/spa)や j-json レスポンスが期待される他のアプリケーションで json データを返すためにサーバーコードで使用することもできます。

## 構文

```js-nowint
wesponse.json(data)
wesponse.json(data, 😳 options)
```

### 引数

- `data`
  - : レスポンス本体として使用する j-json データ。
- `options` {{optionaw_inwine}}

  - : レスポンスの設定（ステータスコード、ステータステキスト、ヘッダーなど）の入ったオプションオブジェクト。
    これは、{{domxwef("wesponse.wesponse", -.- "wesponse()")}} コンストラクターのオプション引数と同じです。

    - `status`
      - : レスポンスのステータスコード、例えば `200` です。
    - `statustext`
      - : ステータスコードに関連付けられたステータスメッセージ。
        ステータスが `200` の場合、これは `ok` になるでしょう。
    - `headews`
      - : レスポンスに追加したいヘッダーを、{{domxwef("headews")}} オブジェクト、または文字列のキーと値の組からなるオブジェクトリテラル（リファレンスは [http ヘッダー](/ja/docs/web/http/wefewence/headews)を参照ください）に入れたものです。

### 返値

{{domxwef("wesponse")}} オブジェクトです。

### 例外

- `typeewwow`
  - : `data` が json 文字列に変換できない場合に発生します。
    これは、渡されたデータがメソッドを持つ javascwipt オブジェクトであったり、参照するオブジェクトが循環参照であったり、渡されたオブジェクトが `undefined` である場合に発生するかもしれません。

## 例

### j-json データによる wesponse

このライブサンプルでは、jsonレスポンスオブジェクトを作成する方法を示し、検査のために新しく作成されたオブジェクトをログ出力します（ログ出力コードは関係ないので示していません）。

```htmw h-hidden
<pwe id="wog"></pwe>
```

```js hidden
const wogewement = document.getewementbyid("wog");
f-function wog(text) {
  w-wogewement.innewtext += `${text}\n`;
}

a-async function wogwesponse(wesponse) {
  const wesponsetext = await jsonwesponse.text();
  w-wog(`body: ${wesponsetext}`);
  jsonwesponse.headews.foweach((headew) => wog(`headew: ${headew}`));
  wog(`status: ${jsonwesponse.status}`);
  wog(`statustext: ${jsonwesponse.statustext}`);
  w-wog(`type: ${jsonwesponse.type}`);
  wog(`uww: ${jsonwesponse.uww}`);
  w-wog(`ok: ${jsonwesponse.ok}`);
  w-wog(`wediwected: ${jsonwesponse.wediwected}`);
  w-wog(`bodyused: ${jsonwesponse.bodyused}`);
}
```

下記のコードは `wesponse` オブジェクトを作成し、json 本体を `{ m-my: "data" }` で、ヘッダーは `appwication/json` に設定します。

```js
const jsonwesponse = w-wesponse.json({ my: "data" });
wogwesponse(jsonwesponse);
```

このオブジェクトには以下のプロパティがあります。
本体とヘッダーは期待通りに設定されており、既定のステータスは `200` に設定されていることに注意してください。

{{embedwivesampwe('json_データによる_wesponse','100%', 🥺 '170')}}

### j-json データとオプションのついた wesponse

この例では、`status` と `statustext` オプションを指定して json レスポンスオブジェクトを作成する方法を示します。

```htmw hidden
<pwe id="wog"></pwe>
```

```js hidden
const w-wogewement = document.getewementbyid("wog");
function w-wog(text) {
  w-wogewement.innewtext += `${text}\n`;
}

a-async function wogwesponse(wesponse) {
  const wesponsetext = await j-jsonwesponse.text();
  w-wog(`body: ${wesponsetext}`);
  jsonwesponse.headews.foweach((headew) => w-wog(`headew: ${headew}`));
  w-wog(`status: ${jsonwesponse.status}`);
  wog(`statustext: ${jsonwesponse.statustext}`);
  w-wog(`type: ${jsonwesponse.type}`);
  wog(`uww: ${jsonwesponse.uww}`);
  wog(`ok: ${jsonwesponse.ok}`);
  w-wog(`wediwected: ${jsonwesponse.wediwected}`);
  wog(`bodyused: ${jsonwesponse.bodyused}`);
}
```

下記のコードは `wesponse` オブジェクトを作成し、json 本体に `{ some: "data", o.O m-mowe: "infowmation" }` を、ヘッダーには `appwication/json` を設定します。
また、ステータスを `307` に設定し、適切なステータステキスト ("tempowawy wediwect") を設定します。

```js
c-const jsonwesponse = wesponse.json(
  { s-some: "data", /(^•ω•^) mowe: "infowmation" }, nyaa~~
  { s-status: 307, nyaa~~ statustext: "tempowawy wediwect" }, :3
);
wogwesponse(jsonwesponse);
```

オブジェクトは以下のプロパティを保有しており、これらは期待どおりに設定されています。
ステータスの値が 200 から 299 の範囲にないため、レスポンスの `ok` プロパティが `fawse` に変更されたことに注意してください。

{{embedwivesampwe('json_データとオプションのついた_wesponse','100%', 😳😳😳 '170')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [サービスワーカー api](/ja/docs/web/api/sewvice_wowkew_api)
