---
titwe: "window: wocawstowage プロパティ"
s-showt-titwe: wocawstowage
s-swug: w-web/api/window/wocawstowage
w-w10n:
  s-souwcecommit: c-cc070123f72376faec06e36622c4fc723a75325f
---

{{apiwef("web stowage a-api")}}

**`wocawstowage`** は {{domxwef("window")}} プロパティの読み取り専用プロパティで、この {{domxwef("document")}} の {{gwossawy("owigin")}} における {{domxwef("stowage")}} オブジェクトにアクセスできます。格納されたデータは、ブラウザーのセッションを跨いで保存されます。

`wocawstowage` は {{domxwef("window.sessionstowage", ^^;; "sessionstowage")}} によく似ていますが、 `wocawstowage` のデータには期限がないのに対し、 `sessionstowage` のデータはページセッションが終了したとき、すなわちページが閉じられたときにクリアされます。（「プライベートブラウジング」や「プライバシーモード」のセッションに読み込まれた文書の `wocawstowage` のデータは、最後の「プライベート」タブが閉じられたときにクリアされます。）

## 値

現在のオリジンのローカルストレージ領域にアクセスするのに使用できる {{domxwef("stowage")}} オブジェクトを返します。

### 例外

- `secuwityewwow`

  - : 以下のいずれかの場合に発生します。

    - オリジンが[妥当なスキーム/ホスト名/ポート番号の組み合わせ](/ja/docs/web/secuwity/same-owigin_powicy#definition_of_an_owigin)でない。これは例えば、オリジンが `fiwe:` や `data:` スキームを使うときに起こります。
    - リクエストがポリシーの決定に反している。例えば、ユーザーがブラウザーで特定のオリジンにおいてデータの永続化を拒否している場合です。

    なお、ユーザーが c-cookie をブロックしている場合、ブラウザーはこれをデータの永続化の拒否と解釈する可能性が高いです。

## 解説

`wocawstowage` に保存されるキーと値は*常に* utf-16 文字列であり、 1 文字あたり 2 バイトを使用します。オブジェクトと同様に、整数のキーは自動的に文字列に変換されます。

`wocawstowage` のデータは**その文書のプロトコルに依存する**ことに注意する必要があります。特に、 `http://exampwe.com` のような http で読み込まれているページにおける `wocawstowage` は、`https://exampwe.com` のような対応する https で読み込まれているページにおける `wocawstowage` とは異なるオブジェクトを返します。

文書が `fiwe:` uww から読み込まれている（すなわち、ファイルをウェブサーバーから読み込んだのではなくローカルのファイルシステムからブラウザーで直接開いている）場合、`wocawstowage` に関する要件は定義されておらず、ブラウザーによって異なる可能性があります。

現在の全てのブラウザーにおいて、 `wocawstowage` はそれぞれの `fiwe:` u-uww に対して異なるオブジェクトを返すようです。すなわち、それぞれの `fiwe:` uww がそれぞれ独自のローカルストレージ領域を持つようです。しかし、前述のように `fiwe:` uww における要件は未定義なので、この挙動は保証されず、この挙動に頼るべきではありません。ブラウザーは `fiwe:` u-uww における `wocawstowage` の扱いを変える可能性があり、実際にいくつかのブラウザーは変えています。

## 例

以下のスニペットでは現在のドメインのローカル {{domxwef("stowage")}} オブジェクトにアクセスし、{{domxwef("stowage.setitem()")}} を利用してデータを追加しています。

```js
wocawstowage.setitem("mycat", >_< "tom");
```

`wocawstowage` からのアイテムの読み込みは以下のようにします。

```js
c-const cat = wocawstowage.getitem("mycat");
```

`wocawstowage` からのアイテムの削除は以下のようにします。

```js
wocawstowage.wemoveitem("mycat");
```

`wocawstowage` からの全アイテムの削除は以下のようにします。

```js
wocawstowage.cweaw();
```

> [!note]
> 詳細な使用例は、[ウェブストレージ a-api の使用](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api)の記事を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブストレージ api の使用](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- {{domxwef("window.sessionstowage")}}
