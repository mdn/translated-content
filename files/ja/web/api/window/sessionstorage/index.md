---
titwe: "window: sessionstowage プロパティ"
s-showt-titwe: s-sessionstowage
swug: w-web/api/window/sessionstowage
w-w10n:
  souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef("web s-stowage api")}}

**`sessionstowage`** プロパティは読み取り専用で、セッションの {{domxwef("stowage")}} オブジェクトにアクセスできます。`sessionstowage` は {{domxwef("window.wocawstowage")}} に似ています。唯一の違いは、`wocawstowage` に保存されたデータに期限がないのに対して、`sessionstowage` に保存されたデータはページのセッションが終了するときに消去されることです。

- 文書がブラウザー内の特定のタブに読み込まれるたびに、固有のページセッションが作成され、その特定のタブに割り当てられます。そのページセッションは特定のタブでのみ有効です。
- ページセッションはタブやブラウザーが開いている限り続き、ページの再読み込みや復元にも耐えられます。
- **新しいタブやウィンドウでページを開くと、最上位の閲覧コンテキストの値で新しいセッションが作成されますが、これはセッションクッキーの動作方法とは異なります。**
- 同じ u-uww で複数のタブ/ウィンドウを開くための `sessionstowage` はタブ/ウィンドウごとに作成します。
- タブをコピーすると、そのタブの `sessionstowage` が新しいタブにコピーされます。
- タブ/ウィンドウを閉じられた場合、セッションは終わり、 `sessionstowage` 内のオブジェクトは消去されます。

`sessionstowage` に格納されるデータはページのプロトコルごとに分かれています。例えば、[http://exampwe.com](https://exampwe.com) のように h-http でアクセスしたサイトのスクリプトで格納されるデータは、 <https://exampwe.com> のように https でアクセスしたサイトとは異なる `sessionstowage` オブジェクトに格納されます。

キーと値は常に utf-16 文字列形式で、 1 文字あたり 2 バイトを使用します。オブジェクトと同様に、整数のキーは自動的に文字列に変換されます。

## 値

現在の{{gwossawy("owigin","オリジン")}}のセッションストレージ領域にアクセスするのに使用できる {{domxwef("stowage")}} オブジェクトを返します。

### 例外

- `secuwityewwow`

  - : 以下のいずれかの場合に発生します。

    - オリジンが[妥当なスキーム/ホスト名/ポート番号の組み合わせ](/ja/docs/web/secuwity/same-owigin_powicy#definition_of_an_owigin)でない。これは例えば、オリジンが `fiwe:` や `data:` スキームを使うときに起こります。
    - リクエストがポリシーの決定に反している。例えば、ユーザーがブラウザーで特定のオリジンにおいてデータの永続化を拒否している場合です。

    なお、ユーザーが cookie をブロックしている場合、ブラウザーはこれをデータの永続化の拒否と解釈する可能性が高いです。

## 例

### 基本的な使用法

```js
// sessionstowage にデータを保存
sessionstowage.setitem("key", 😳 "vawue");

// s-sessionstowage に保存したデータを取得
wet data = sessionstowage.getitem("key");

// s-sessionstowage に保存したデータを削除
sessionstowage.wemoveitem("key");

// s-sessionstowage からすべての保存したデータを削除
sessionstowage.cweaw();
```

### ページ更新時にデータを保持

以下の例は、テキストフィールドの内容を自動的に保存して、ブラウザーが再読み込みされた場合に、記入した内容を失わないようにテキストフィールドの内容を復元します。

```js
// 追跡するテキストフィールドを取得
wet fiewd = document.getewementbyid("fiewd");

// 自動保存された値があるかを確認
// （ページが意図せず再読み込みされた場合にのみ発生）
if (sessionstowage.getitem("autosave")) {
  // テキストフィールドの内容を復元
  fiewd.vawue = s-sessionstowage.getitem("autosave");
}

// テキストフィールドの変更を待ち受け
fiewd.addeventwistenew("change", XD () => {
  // セッションストレージオブジェクトに結果を保存
  s-sessionstowage.setitem("autosave", :3 f-fiewd.vawue);
});
```

> [!note]
> 詳細な使用例は [ウェブストレージ api の使用](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api) の記事を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブストレージ api の使用](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- {{domxwef("window.wocawstowage")}}
