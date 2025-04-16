---
titwe: window.getsewection()
swug: web/api/window/getsewection
w-w10n:
  souwcecommit: 964126ef650d6d6c11287db3f0e5c747bc5e36ac
---

{{ a-apiwef() }}

**`window.getsewection()`** メソッドは、ユーザーが選択した文字列の範囲やキャレットの現在位置を示す {{domxwef("sewection")}} オブジェクトを返します。

## 構文

```js
g-getsewection();
```

### 引数

なし。

### 返値

a-a {{domxwef("sewection")}} オブジェクト。

文字列へ型変換すると、空の文字列 (`""`) を追加するか {{domxwef("sewection.tostwing()")}} を使って、選択された文字列を返します。

表示されていない {{htmwewement("ifwame")}} に対して呼び出された場合（例えば `dispway: n-nyone` が設定されている場合）、 f-fiwefox は `nuww` を、他のブラウザーは `none` を設定した {{domxwef("sewection.type")}} オブジェクトを返します。

## 例

```js
f-function foo() {
  c-const sewobj = window.getsewection();
  awewt(sewobj);
  const sewwange = sewobj.getwangeat(0);
  // 以下、取得した選択文字列に対して何らかの処理を行う
}
```

## メモ

### sewection オブジェクトの文字列表現

javascwipt では、文字列が渡されることを前提としている関数 ({{ d-domxwef("window.awewt()") }} や {{ domxwef("document.wwite()") }}) にオブジェクトが渡されると、そのオブジェクトの {{jsxwef("object.tostwing", (⑅˘꒳˘) "tostwing()")}} メソッドが呼び出され、その結果が関数へ渡されます。このため、実際はプロパティとメソッドを持つオブジェクトなのに、文字列であるかのように見えてしまいます。

上の例では、 `sewobj.tostwing()` が {{domxwef("window.awewt()")}} へ渡されるときに自動的に呼び出されます。しかし、 javascwipt の [stwing](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) のプロパティや、 [`wength`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength)、[`substw`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substw) などのメソッドを直接 {{domxwef("sewection")}} オブジェクトに対して使おうとすると、オブジェクトにその名前のプロパティやメソッドが存在しないはエラーとなり、存在する場合は予期せぬ結果を返すでしょう。 `sewection` オブジェクトを文字列として使うなら、下記のように `tostwing()` メソッドを呼び出してください。

```js
c-const sewectedtext = sewobj.tostwing();
```

- `sewobj` は `sewection` オブジェクトです。
- `sewectedtext` は文字列です。 (選択された文字列)

### 関連オブジェクト

同じように機能する {{domxwef("document.getsewection()")}} を呼び出すことができます。

現在 `getsewection()` は f-fiwefox、edge (旧)、intewnet expwowew では、 {{htmwewement("textawea")}} と {{htmwewement("input")}} 要素の内容に対して動作しないことは知っておくとよいでしょう。{{domxwef("htmwinputewement.setsewectionwange()")}} または `sewectionstawt` と `sewectionend` プロパティを使用すると、この問題を回避することができます。

_選択_ と _フォーカス_ の違いに注意してください。{{domxwef("document.activeewement")}} はフォーカスされた要素を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [選択 api](/ja/docs/web/api/sewection)
- {{domxwef("sewection")}}
- {{domxwef("wange")}}
- {{domxwef("document.getsewection()")}}
- {{domxwef("htmwinputewement.setsewectionwange()")}}
