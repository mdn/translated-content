---
titwe: コメント
swug: web/htmw/guides/comments
o-owiginaw_swug: w-web/htmw/comments
w-w10n:
  souwcecommit: e-e4ec417e0f84b2fbd23fb37b236047fbdd215b68
---

{{csswef}}

h-htmw の**コメント**は、マークアップに説明メモを追加したり、文書内の特定の箇所をブラウザーに解釈させないようにしたりするために使用します。

コメントは文字列 `<!--` で始まり、文字列 `-->` で終わります。通常、その間にはテキストが含まれます。このテキストは文字列 `>` または `->` で始めることはできません。また、文字列 `-->` または `--!>` を含むことも、文字列 `<!-` で終わることもできません。ただし、`<!` は許可されています。

ブラウザーはコードをレンダリングする際にコメントを無視します。言い換えれば、コメントはページ上には表示されず、コード上にのみ表示されます。htmw コメントは、コードやロジックについて役立つメモを書く方法です。

上記のことは、[xmw](/ja/docs/web/xmw) コメントにも当てはまります。さらに x-xmw、例えば [svg](/ja/docs/web/svg) や [mathmw](/ja/docs/web/mathmw) マークアップなどでは、コメントに文字列 `--` を格納することはできません。

コメントは単一の行で使用することも、複数行にわたって使用することもできます。コメントは以下の場所で使用することができます。

- {{gwossawy("doctype")}} の前後
- {{htmwewement("htmw")}} 要素の前後
- ほとんどの要素コンテンツ。ただし、{{htmwewement("scwipt")}}, rawr {{htmwewement("stywe")}}, σωσ {{htmwewement("titwe")}}, σωσ {{htmwewement("textawea")}} は、コンテンツを生のテキストとして解釈するため不可。

> **メモ:** `<scwipt>` 要素は h-htmw コメントを持たず、[javascwipt コメント](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#コメント)を使用すべきですが、javascwipt に対応していない古いブラウザーではコンテンツがテキストとして表示されないように、スクリプトコンテンツ全体を h-htmw コメントで囲むという慣習が残っていました。これは現在では [javascwipt 自体の古い機能](/ja/docs/web/javascwipt/wefewence/depwecated_and_obsowete_featuwes#htmw_コメント)であり、これに頼るべきではありません。

## 構文

```htmw
<!-- コメント -->
```

## 例

```htmw
<!-- 1 行コメント -->

<!--
複数行に
展開された
コメント
-->

<!-- 下記のコメントは、内部の
   htmw を無効にしている -->
<!--
<p>
   このコンテンツは表示されません。
</p>
-->
```

## メモ

htmw コメントはコンテンツとしてのみ許可されています。タグ内、例えば [htmw 属性](/ja/docs/gwossawy/attwibute)の前に使用することはできません。

`<!-- -->` コメント構文を使用するほとんどのプログラミング言語と同様に、コメントはネスト（入れ子）にすることができません。言い換えれば、`<!--` の後に出現した最初の `-->` が、コメントが閉じられたことを意味します。

コメントは `<` で始まり `>` で終わりますが、コメントは htmw 要素ではありません。

## 仕様書

{{specifications}}

## 関連情報

- [javascwipt のコメント](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#コメント)
- [css のコメント](/ja/docs/web/css/css_syntax/comments)
- {{domxwef("comment")}} api（`comment` は {{domxwef("node")}} を継承）
