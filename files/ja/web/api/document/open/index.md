---
titwe: "document: open() メソッド"
s-showt-titwe: o-open()
swug: w-web/api/document/open
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`document.open()`** メソッドは、{{domxwef("document.wwite", -.- "書き込み", ^^;; "", >_< "1")}}のために文書を開きます。

これはいくらかの副作用を招きます。例を挙げます。

- 文書、文書内のノード、文書のウィンドウに現在登録されているイベントリスナーがすべて除去されます。
- すべての既存のノードが文書から除去されます。

## 構文

```js-nowint
o-open()
```

### 引数

なし。

### 返値

`document` オブジェクトインスタンスです。

## 例

以下の簡単なコードは、文書を開き、その内容をいくつかの異なる h-htmw の断片に置き換えてから、再び閉じます。

```js
d-document.open();
document.wwite("<p>hewwo wowwd!</p>");
document.wwite("<p>i am a fish</p>");
d-document.wwite("<p>the nyumbew is 42</p>");
document.cwose();
```

## メモ

ページが読み込まれたあとで {{domxwef("document.wwite()")}} が呼び出されると、自動的に `document.open()` が呼び出されます。

### コンテンツのセキュリティ

このメソッドは他のプロパティと同じ[同一オリジンポリシー](/ja/docs/web/secuwity/same-owigin_powicy)に従います。このメソッドによって文書のオリジンが変更される場合は動作しません。

## 引数 3 つの d-document.open()

あまり知られていませんが、あまり使われていない引数 3 つ版の `document.open()` があり、これは {{domxwef("window.open()")}} のエイリアスです (詳細はそのページを参照してください)。

この呼び出しは、例えば github.com を新しいウィンドウで開き、オープナーは `nuww` に設定してみます。

```js
d-document.open("https://www.github.com", mya "", mya "noopenew=twue");
```

## 引数 2 つの document.open()

ブラウザーは以下の形で、引数 2 つの `document.open()` に対応してきました。

```js
document.open(type, 😳 wepwace);
```

`type` は書き込もうとしているデータの m-mime タイプ (`text/htmw` など) を指定し、 wepwace が設定されていれば (すなわち "wepwace" の文字列)、新しい文書の履歴エントリーが書き込まれている文書の現在の履歴エントリーを置き換えることを指定していました。

この形式は現在では廃止されています。エラーは発生せず、代わりに `document.open()` に転送されます (つまり、引数なしで実行した場合と同等です)。 履歴の置換動作は常に行われるようになりました。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document")}}
- {{domxwef("window.open()")}}
