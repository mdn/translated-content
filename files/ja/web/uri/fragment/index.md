---
title: URI フラグメント
slug: Web/URI/Fragment
l10n:
  sourceCommit: 6b730e3cfdf0f51940b44efa71bd59c84ce76e71
---

{{QuickLinksWithSubpages("/ja/docs/Web/URI")}}

**フラグメント**は URI の最後の部分で、`#` の文字で始まる部分です。文書内のセクションや動画内の位置など、リソースの特定の部分を識別するために使用されます。フラグメントは、URI がリクエストされた際にサーバーに送信されることはありませんが、リソースが取得された後にクライアント（ブラウザーなど）によって処理されます。

## 構文

```url
#fragment
```

- fragment

  - : 任意の文字の並び。フラグメントの正確な形式は、リソース自体によって定義されます。例えば、以下のような一般的な例があります。

    - HTML 文書内の場合は、要素の [`id`](/ja/docs/Web/HTML/Global_attributes/id) 属性となり、ブラウザーはその要素までスクロールします。
    - [テキストフラグメント](/ja/docs/Web/URI/Fragment/Text_fragments)の形にすることができます。`#:~:text=...` という形で形成され、ブラウザーが指定したテキストを強調表示します。
    - [メディアフラグメント](https://www.w3.org/TR/media-frags/)の形にすることができます。`#t=...` という形で形成され、その時点から動画または音声の再生を開始できます。

## 例

- `#構文`
  - : ブラウザーに、文書内で `id="構文"` のついた要素（このページの場合は[構文](#構文)の見出し）にスクロールします。
- `#:~:text=fragment`
  - : ブラウザーは、文書内の [`fragment`](#:~:text=fragment) というテキストを強調表示します。
- `#t=10,20`
  - : 動画または音声は 10 秒目から再生されます。

## 関連情報

- [URI](/ja/docs/Web/URI)
- [テキストフラグメント](/ja/docs/Web/URI/Fragment/Text_fragments)
