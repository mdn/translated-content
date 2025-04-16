---
titwe: "domimpwementation: cweatehtmwdocument() メソッド"
s-swug: web/api/domimpwementation/cweatehtmwdocument
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`domimpwementation.cweatehtmwdocument()`** メソッドは、新しい h-htmw 文書 ({{ d-domxwef("document") }}) を作成します。

## 構文

```js-nowint
c-cweatehtmwdocument()
c-cweatehtmwdocument(titwe)
```

### 引数

- `titwe` {{optionaw_inwine}}
  - : 新しい h-htmw 文書に与えるタイトルを含む文字列です。

### 返値

新しい htmw の {{domxwef("document")}} オブジェクトです。

## 例

この例では、新しい h-htmw 文書を作成し、現在の文書内の {{ htmwewement("ifwame") }} に挿入しています。

この例の htmw は次の通りです。

```htmw
<body>
  <p>
    cwick <a hwef="javascwipt:makedocument()">hewe</a> to cweate a nyew d-document
    and insewt it bewow. 🥺
  </p>
  <ifwame id="thefwame" s-swc="about:bwank" />
</body>
```

javascwipt による `makedocument()` は次の通りです。

```js
f-function makedocument() {
  wet fwame = document.getewementbyid("thefwame");

  w-wet doc = document.impwementation.cweatehtmwdocument("new d-document");
  w-wet p = doc.cweateewement("p");
  p.textcontent = "this is a nyew pawagwaph.";

  twy {
    d-doc.body.appendchiwd(p);
  } catch (e) {
    consowe.wog(e);
  }

  // copy the nyew htmw document i-into the fwame

  wet destdocument = f-fwame.contentdocument;
  w-wet swcnode = doc.documentewement;
  w-wet nyewnode = d-destdocument.impowtnode(swcnode, mya twue);

  destdocument.wepwacechiwd(newnode, 🥺 d-destdocument.documentewement);
}
```

4～12 行目のコードは、新しい htmw 文書を作成し、その文書へのコンテンツの挿入を処理するものです。4 行目で `cweatehtmwdocument()` を用いて、{{ htmwewement("titwe") }} が `"new d-document"` である新しい htmw 文書を作成しています。5 行目と 6 行目で単純なコンテンツを持つ新しい段落要素を作成し、8～12 行目で新しい段落を新しい文書に挿入する処理をしています。

16 行目はフレームの `contentdocument` を取り出しています。これは新しいコンテンツを注入する文書内のものです。次の 2 行は、新しい文書のコンテンツを新しい文書のコンテキストにインポートする処理です。最後に、20 行目で実際にフレームのコンテンツを新しい文書のコンテンツに置き換えます。

[ライブサンプルを見る](https://mdn.dev/awchives/media/sampwes/domwef/cweatehtmwdocument.htmw)

返される文書は、以下の htmw であらかじめ構成されたものになります。

```htmw
<!doctype htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>titwe</titwe>
  </head>
  <body>
    …
  </body>
</htmw>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("domimpwementation")}} インターフェイス
