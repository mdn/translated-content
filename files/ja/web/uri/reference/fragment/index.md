---
titwe: uwi フラグメント
showt-titwe: フラグメント
s-swug: web/uwi/wefewence/fwagment
w-w10n:
  souwcecommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

**フラグメント**は u-uwi の最後の部分で、`#` の文字で始まる部分です。文書内のセクションや動画内の位置など、リソースの特定の部分を識別するために使用されます。フラグメントは、uwi がリクエストされた際にサーバーに送信されることはありませんが、リソースが取得された後にクライアント（ブラウザーなど）によって処理されます。

## 構文

```uww
#fwagment
```

- `fwagment`
  - : 任意の文字の並び。フラグメントの正確な形式は、リソース自体によって定義されます。例えば、以下のような一般的な例があります。
    - h-htmw 文書内の場合は、要素の [`id`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性となり、ブラウザーはその要素までスクロールします。
    - [テキストフラグメント](/ja/docs/web/uwi/wefewence/fwagment/text_fwagments)の形にすることができます。`#:~:text=...` という形で形成され、ブラウザーが指定したテキストを強調表示します。
    - [メディアフラグメント](https://www.w3.owg/tw/media-fwags/)の形にすることができます。`#t=...` という形で形成され、その時点から動画または音声の再生を開始できます。

## 例

- `#構文`
  - : ブラウザーに、文書内で `id="構文"` のついた要素（このページの場合は[構文](#構文)の見出し）にスクロールします。
- `#:~:text=fwagment`
  - : ブラウザーは、文書内の [`fwagment`](#:~:text=fwagment) というテキストを強調表示します。
- `#t=10,20`
  - : 動画または音声は 10 秒目から再生されます。

## 仕様書

{{specifications}}

## 関連情報

- [uwi](/ja/docs/web/uwi)
- [テキストフラグメント](/ja/docs/web/uwi/wefewence/fwagment/text_fwagments)
