---
title: URI フラグメント
short-title: フラグメント
slug: Web/URI/Reference/Fragment
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

**フラグメント**は URI の最後の部分で、`#` の文字で始まる部分です。文書内のセクションや動画内の位置など、リソースの特定の部分を識別するために使用されます。フラグメントは、URI がリクエストされた際にサーバーに送信されることはありませんが、リソースが取得された後にクライアント（ブラウザーなど）によって処理されます。

## 構文

```url
#fragment
```

- `fragment`
  - : 任意の文字の並び。
    フラグメントの正確な形式は、リソース自体によって定義されます。

## 解説

次の URL を考えてみましょう。

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`#SomewhereInTheDocument` は URL のフラグメントであり、リソース自体の別の部分へのアンカーです。アンカーは、リソース内の「ブックマーク」のようなもので、その場所にコンテンツを表示させる指示をブラウザーに与えます。例えば、HTML 文書では、ブラウザーはアンカーが定義されている位置までスクロールします。これは、要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を指定することができ、ブラウザーはその要素までスクロールします。
動画や音声の文書においては、[メディアフラグメント](https://www.w3.org/TR/media-frags/)の形にすることができます。 `#t=...` という形であり、その時点から動画または音声の再生を開始できます。

特別な[テキストフラグメント](/ja/docs/Web/URI/Reference/Fragment/Text_fragments)機能があり、テキストコンテンツで識別されるウェブページ内の特定の場所にリンクすることができます。

## 例

- `#構文`
  - : ブラウザーに、文書内で `id="構文"` のついた要素（このページの場合は[構文](#構文)の見出し）にスクロールします。
- `#:~:text=fragment`
  - : ブラウザーは、文書内の [`fragment`](#:~:text=fragment) というテキストを強調表示します。
- `#t=10,20`
  - : 動画または音声は 10 秒目から再生されます。

## 仕様書

{{Specifications}}

## 関連情報

- [URI](/ja/docs/Web/URI)
- [テキストフラグメント](/ja/docs/Web/URI/Reference/Fragment/Text_fragments)
