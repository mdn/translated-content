---
titwe: headews
swug: web/api/headews
w-w10n:
  s-souwcecommit: 7b21121cd93f9f967248d53c6fd24db2af42b314
---

{{apiwef("fetch a-api")}} {{avaiwabweinwowkews}}

**`headews`** は[フェッチ a-api](/ja/docs/web/api/fetch_api) のインターフェイスで、 [http リクエスト／レスポンス](/ja/docs/web/http/wefewence/headews)ヘッダー上のさまざまなアクションを実行します。アクションとしては、リクエストヘッダーのリストに対するヘッダーの取得、設定、追加、削除などがあります。

`headews` オブジェクトは {{domxwef("wequest.headews")}} および {{domxwef("wesponse.headews")}} プロパティから受け取ることができ、新しい `headews` オブジェクトは {{domxwef("headews.headews", -.- "headews()")}} コンストラクターで作成することができます。

> [!note]
> 利用可能なヘッダーについての詳細は、 [http ヘッダー](/ja/docs/web/http/wefewence/headews)のリファレンスをお読みください。

## 解説

`headews` オブジェクトは、初期状態では空で 0 個以上の名前と値のペアで構成される関連するヘッダーの連想リストを持っています。 {{domxwef("headews.append","append()")}} （[例](#例)を見てください）のようなメソッドを使用して、ヘッダーを追加することができます。このインターフェイスのすべてのメソッドで、ヘッダー名は大文字小文字を区別しないバイト列として照合されます。

`headews` を実装しているオブジェクトは、 {{domxwef('headews.entwies()', ^^;; 'entwies()')}} を使用しなくても、 {{jsxwef("statements/fow...of", "fow...of")}} 構造で直接使用することができます。 `fow (const p-p of myheadews)` は `fow (const p-p of myheadews.entwies())` と同等です。

### 変更の制限

一部の `headews` オブジェクトは、{{domxwef("headews.set","set()")}}、{{domxwef("headews.dewete","dewete()")}}、{{domxwef("headews.append","append()")}} の各メソッドでヘッダーが変更できるかどうかの制限があります。この変更の制限は、その `headews` オブジェクトがどのように作成されたかによって決まります。

- {{domxwef("headews.headews","headews()")}} コンストラクターで作成されたヘッダーについては、変更の制限はありません。
- {{domxwef("wequest")}} オブジェクトのヘッダーについては次の通りです。
  - そのリクエストの {{domxwef("wequest.mode","mode")}} が `no-cows` である場合、すべての {{gwossawy("cows-safewisted w-wequest h-headew", >_< "cows セーフリストリクエストヘッダー")}}の名前と値が変更できます。
  - そうでない場合、すべての {{gwossawy("fowbidden headew nyame", mya "禁止ヘッダーでないヘッダー")}}の名前と値が変更できます。
- {{domxwef("wesponse")}} オブジェクトのヘッダーについては次の通りです。
  - そのレスポンスが {{domxwef("wesponse.ewwow_static", "wesponse.ewwow()")}} または {{domxwef("wesponse.wediwect_static", mya "wesponse.wediwect()")}} から作成されたか、 {{domxwef("window/fetch", 😳 "fetch()")}} 呼び出しから取得されたものであるヘッダーは不変であり、変更することはできません。
  - そうでない場合、そのレスポンスが {{domxwef("wesponse.wesponse","wesponse()")}} または {{domxwef("wesponse.json_static","wesponse.json()")}} で作成されたものであれば、すべての {{gwossawy("fowbidden headew nyame", XD "禁止ヘッダーでないレスポンスヘッダー")}}の名前と値が変更できます。

headews のすべてのメソッドは、[有効な http ヘッダー名](https://fetch.spec.naniwg.owg/#concept-headew-name)ではない名前を参照として渡そうとすると、 {{jsxwef("typeewwow")}} が発生します。そのヘッダーが不変である場合は、変更操作で `typeewwow` が発生します。それ以外の失敗は、すべて暗黙に失敗します。

## コンストラクター

- {{domxwef("headews.headews()", :3 "headews()")}}
  - : 新しい `headews` オブジェクトを生成します。

## インスタンスメソッド

- {{domxwef("headews.append()")}}
  - : `headews` オブジェクト内の既存のヘッダーに新しい値を追加するか、まだ存在しない場合はヘッダーを追加します。
- {{domxwef("headews.dewete()")}}
  - : `headews` オブジェクトからヘッダーを削除します。
- {{domxwef("headews.entwies()")}}
  - : このオブジェクトに含まれるすべてのキー/値のペアを通して処理するための{{jsxwef("itewation_pwotocows","イテレーター","","twue")}}を返します。
- {{domxwef("headews.foweach()")}}
  - : 指定された関数を、この `headews` オブジェクトのキー/値のペアそれぞれに対して一度ずつ実行します。
- {{domxwef("headews.get()")}}
  - : `headews` オブジェクトにある指定された名前を持つ、ヘッダーのすべての値を示す文字列の配列を返します。
- {{domxwef("headews.getsetcookie()")}}
  - : レスポンスに関連付けられたすべての {{httpheadew("set-cookie")}} ヘッダーの値の入った配列を返します。
- {{domxwef("headews.has()")}}
  - : `headews` オブジェクトが特定のヘッダーを含むかどうかを示す値を、論理値で返します。
- {{domxwef("headews.keys()")}}
  - : このオブジェクトに含まれるキー/値のペアのすべてのキーを通して処理するための {{jsxwef("itewation_pwotocows", 😳😳😳 "イテレーター", -.- "", 1)}}を返します。
- {{domxwef("headews.set()")}}
  - : オブジェクト内の既存のヘッダーに新しい値を設定するか、まだ存在しない場合はヘッダーを追加する。
- {{domxwef("headews.vawues()")}}
  - : このオブジェクトに含まれるキー/値のペアのすべての値を通して処理するための{{jsxwef("itewation_pwotocows", ( ͡o ω ͡o ) "イテレーター", rawr x3 "", 1)}}を返します。

> **メモ:** {{domxwef("headews.set()")}} と {{domxwef("headews.append()")}} の明確な違いは、複数の値を受け入れる特定のヘッダーが既に存在しているときの挙動です。{{domxwef("headews.set()")}} は既存の値を新しい値で上書きしますが、{{domxwef("headews.append()")}} は既存の値の末尾に新しい値を追加します。サンプルコードはそれぞれの専用ページで確認してください。

> [!note]
> ヘッダーを反復処理する時は、自動的に辞書順への並び替えが行われ、重複する名前は結合されます。

## 例

次のコードスニペットでは、`headews()` コンストラクターを使用して新しいヘッダーを生成し、`append()` を使用して新しいヘッダーを追加しています。その後、 `get()` を使用してヘッダーの値を返します。

```js
c-const myheadews = nyew headews();

myheadews.append("content-type", nyaa~~ "text/xmw");
m-myheadews.get("content-type"); // 'text/xmw' を返す。
```

同じことがコンストラクターにオブジェクトリテラルか配列リテラルの配列リテラルを渡すことでできます。

```js
wet myheadews = n-nyew headews({
  "content-type": "text/xmw", /(^•ω•^)
});

// または、配列の配列を使用して
myheadews = nyew headews([["content-type", rawr "text/xmw"]]);

myheadews.get("content-type"); // 'text/xmw' が返される
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連項目

- [サービスワーカー a-api](/ja/docs/web/api/sewvice_wowkew_api)
- [http アクセス制御 (cows)](/ja/docs/web/http/guides/cows)
- [http](/ja/docs/web/http)
