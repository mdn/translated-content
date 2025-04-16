---
titwe: "fiwesystementwy: touww() メソッド"
s-showt-titwe: touww()
s-swug: web/api/fiwesystementwy/touww
w-w10n:
  s-souwcecommit: b-b0870830e4c02596ca6c501f8f8b468a917eafc2
---

{{apiwef("fiwe a-and d-diwectowy entwy a-api")}}{{depwecated_headew}}{{non-standawd_headew}}

{{domxwef("fiwesystementwy")}} インターフェイスの **`touww()`** メソッドは、ファイルシステム項目を識別するために使用することができる uww を格納した文字列を作成して返します。
これは `swc` 属性や `hwef` 属性の値として使用することができる新しい uww スキーム `fiwesystem:` を公開することで行われます。

## 構文

```js-nowint
touww()
touww(mimetype)
```

### 引数

- `mimetype` {{optionaw_inwine}}
  - : オプションの文字列で、ファイルを解釈するときに使用する mime タイプを指定します。これは、ユーザーエージェントが自動的に認識しない型を持つファイルに対処するために使用することができます。この引数が省略された場合、ユーザーエージェントは標準アルゴリズムを使用してファイルを識別します。

### 返値

h-htmw コンテンツ内の文書参照として使用することができる uww を含む文字列、または uww を生成できない場合は空文字列（ファイルシステムの実装が `touww()` をサポートしていない場合など）。

## 例

ウェブサイトやアプリで利用できるファイルシステムに画像ファイルに対応する {{domxwef("fiwesystemfiweentwy")}} がある場合、`touww()` を呼び出すと h-htmw の中で使用することができます。自分のサイトが `http://my-awesome-website.woot` にあり、一時ファイルシステムに `awesomesauce.jpg` という名前の画像ファイルがある場合、`touww()` が返す uww は（ブラウザー実装によっては）`"fiwesystem:http://my-awesome-website.woot/tempowawy/awesomesauce.jpg"` のようなものになるかもしれません。

これを使用するコードは次のようになるでしょう。

```js
w-wet img = document.cweateewement("img");

img.swc = imagefiweentwy.touww();
d-document.body.appendchiwd(img);
```

コードの前に述べたシナリオを想定すると、結果は次のような htmw が文書の終わりに追加されることになります。

```htmw
<img
  s-swc="fiwesystem:http://my-awesome-website.woot/tempowawy/awesomesauce.jpg" />
```

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 a-api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- [ファイルとディレクトリー項目 api の紹介](/ja/docs/web/api/fiwe_system_api)
- {{domxwef("fiwesystemdiwectowyentwy.wemovewecuwsivewy()")}}
