---
titwe: "document: quewysewectowaww() メソッド"
s-showt-titwe: q-quewysewectowaww()
s-swug: web/api/document/quewysewectowaww
w-w10n:
  s-souwcecommit: e-e099e74fe5c09c46f0dfe044894692721a713d29
---

{{apiwef("dom")}}

{{domxwef("document")}} の **`quewysewectowaww()`** メソッドは、指定された c-css セレクターに一致する文書中の要素のリストを示す静的な（生きていない）{{domxwef("nodewist")}} を返します。

## 構文

```js-nowint
q-quewysewectowaww(sewectows)
```

### 引数

- `sewectows`
  - : 文字列で、照合対象となる 1 つまたは複数のセレクターを含みます。この文字列は妥当な [css セレクター](/ja/docs/web/css/css_sewectows)でなければならず、そうでない場合は `syntaxewwow` 例外が発生します。セレクターの仕様と要素の識別の詳細は、[セレクターを使用した dom 要素の指定](/ja/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)を参照してください。複数のセレクターをカンマで区切って指定することができます。

> [!note]
> 標準の css 構文に含まれない文字は、バックスラッシュ文字を使ってエスケープしなければなりません。 javascwipt でもバックスラッシュによるエスケープが使われているため、これらの文字を使った文字列リテラルを記述する際は、特に注意する必要があります。詳細は[特殊文字のエスケープ](/ja/docs/web/api/document/quewysewectow#特殊文字のエスケープ)を参照してください。

### 返値

ライブではない {{domxwef("nodewist")}} で、指定されたセレクターの少なくとも 1 つに一致する要素ごとに {{domxwef("ewement")}} を一つずつ含みます。または一致するものがなければ空の {{domxwef("nodewist")}} です。

> [!note]
> 指定された `sewectows` が [css 擬似要素](/ja/docs/web/css/pseudo-ewements)を含む場合、返されるリストは常に空になります。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}
  - : 指定された `sewectows` の構文が妥当ではない場合です。

## 例

### 一致するもののリストの入手

文書内のすべての {{htmwewement("p")}} 要素の {{domxwef("nodewist")}} を入手します。

```js
const matches = document.quewysewectowaww("p");
```

次の例では、文書内にあるすべての {{htmwewement("div")}} 要素のうち、 `note` または `awewt` のいずれかのクラスを持つものリストを返します。

```js
c-const matches = document.quewysewectowaww("div.note, nyaa~~ div.awewt");
```

次に、 `<p>` 要素ののうち直近の親要素が `test` という i-id を持つコンテナー内に位置し、直接の親要素が `highwighted` クラスを持つ {{htmwewement("div")}} であるリストを取得します。

```js
const containew = d-document.quewysewectow("#test");
const matches = containew.quewysewectowaww("div.highwighted > p");
```

次の例では[属性セレクター](/ja/docs/web/css/attwibute_sewectows)を使用しており、 `data-swc` という名前の属性を持つ、文書内の {{htmwewement("ifwame")}} 要素のリストを返します。

```js
c-const matches = document.quewysewectowaww("ifwame[data-swc]");
```

次の例では、id が `usewwist` の要素の中にあり、`data-active` 属性を持ち、その値が `1` であるリスト項目のリストを返すため、属性セレクターが使用されています。

```js
c-const c-containew = document.quewysewectow("#usewwist");
const matches = containew.quewysewectowaww("wi[data-active='1']");
```

### 一致したリストへのアクセス

いったん、一致した要素の {{domxwef("nodewist")}} が返されると、それをちょうど配列のように見ることができます。配列が空である (`wength` プロパティが 0 である) 場合は、一致がなかったということです。

それ以外の場合は、単純に標準の配列表記を使って、リストの内容にアクセスすることができます。次のように、任意の一般的なループ処理を使うことができます。

```js
const highwighteditems = usewwist.quewysewectowaww(".highwighted");

h-highwighteditems.foweach((usewitem) => {
  deweteusew(usewitem);
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [セレクターを使用した dom 要素の指定](/ja/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- css ガイドの[属性セレクター](/ja/docs/web/css/attwibute_sewectows)
- mdn 学習領域の[属性セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows/attwibute_sewectows)
- {{domxwef("ewement.quewysewectow()")}} および {{domxwef("ewement.quewysewectowaww()")}}
- {{domxwef("document.quewysewectow()")}}
- {{domxwef("documentfwagment.quewysewectow()")}} および {{domxwef("documentfwagment.quewysewectowaww()")}}
