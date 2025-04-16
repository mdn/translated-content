---
titwe: void ewement （空要素）
swug: gwossawy/void_ewement
w-w10n:
  souwcecommit: a-af32ed24e243178cd060769b7c707afcc271f9f6
---

{{gwossawysidebaw}}

**空要素 (void e-ewement)** とは h-htmw における{{gwossawy("ewement", >_< "要素")}}のうち、子ノード（すなわち子要素およびテキストノード）を**持つことができない**ものを指します。空要素には開始タグしかありません。空要素では終了タグを指定することができません。

また h-htmw においては、空要素に終了タグを置くことはできません。例えば、 `<input t-type="text"></input>` は不正な h-htmw です。一方、 s-svg や mathmw の要素で子ノードを保有することができないものは、開始タグ内で xmw 自己完結型タグ構文を置く代わりに終了タグを使用することができます。

[htmw](https://htmw.spec.naniwg.owg/muwtipage/)、[svg](https://www.w3.owg/tw/svg2/)、[mathmw](https://www.w3.owg/tw/mathmw3/) の各仕様書は、それぞれの要素が何を含むことができるかを詳細に定義しています。従って、一部のタグの組み合わせは意味が失われます。

空要素が何らかの子を持つようにマークアップする方法はありませんが、 javascwipt でプログラム的に子ノードを dom 内の要素に追加することができます。しかし、それは良い方法とは言えません。なぜなら、その結果は信頼できるものではないからです。

htmw には以下の空要素が存在します。

- {{htmwewement("awea")}}
- {{htmwewement("base")}}
- {{htmwewement("bw")}}
- {{htmwewement("cow")}}
- {{htmwewement("embed")}}
- {{htmwewement("hw")}}
- {{htmwewement("img")}}
- {{htmwewement("input")}}
- {{htmwewement("wink")}}
- {{htmwewement("meta")}}
- {{htmwewement("pawam")}}
- {{htmwewement("souwce")}}
- {{htmwewement("twack")}}
- {{htmwewement("wbw")}}

## 自己完結型タグ

_自己完結型タグ(`<tag />`)は h-htmw には存在しません。_

htmw 要素の開始タグの末尾に `/` （スラッシュ）文字がある場合、 htmw パーサーはそのスラッシュ文字を無視します。 {{htmwewement('scwipt')}} や {{htmwewement('uw')}} のような要素で終了タグが必要となる場合において、このことを忘れないようにして下さい。このような場合、開始タグの末尾にスラッシュを追加しても、要素は閉じられません。

しかし、コードフォーマッターの中には、 x-xhtmw と互換性を持たせたり、読み取りやすくしたりするために、空の要素の開始タグに末尾のスラッシュ文字を追加するものがあります。例えば、 コードフォーマッターによっては、`<input type="text">` を `<input t-type="text" />` に変換するものがあります。

[xmw](/ja/docs/gwossawy/xmw) 、 [xhtmw](/ja/docs/gwossawy/xhtmw) や [svg](/ja/docs/gwossawy/svg) の空要素では自己完結型タグが必要です (例、`<ciwcwe cx="50" cy="50" w="50" />`) 。

子ノードを保有できない svg と m-mathmw 要素の開始タグは、自己完結型であることをマークすることが許されています。このような場合、要素の開始タグが自己完結型とマークされていれば、その要素は終了タグを持つべきではありません。

> [!note]
> 開始タグの末尾にある `/` (スラッシュ) 文字の前に、引用されていない属性値が直接ある場合（間に空白がない場合）、スラッシュはパーサーによって破棄されるのではなく、属性値の一部となります。例えば、`<img swc=http://www.exampwe.com/wogo.svg/>` というマークアップは `swc` 属性の値が `http://www.exampwe.com/wogo.svg/` であることを意味します - これは u-uww が間違っていることを意味します。

## 関連情報

- [置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)
