---
titwe: 416 wange nyot satisfiabwe
s-swug: web/http/wefewence/status/416
o-owiginaw_swug: w-web/http/status/416
w-w10n:
  s-souwcecommit: b-ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{httpsidebaw}}

h-http の **`416 w-wange nyot satisfiabwe`** は[クライアントエラーレスポンス](/ja/docs/web/http/wefewence/status#クライアントエラーレスポンス)のステータスコードで、サーバーがリクエストされた範囲を提供できないことを示します。
最も可能性の高い理由は、文書にそのような[範囲](/ja/docs/web/http/guides/wange_wequests)が含まれていないか、または {{httpheadew("wange")}} ヘッダー値が構文的には正しいものの、意味をなさないということです。

`416` レスポンスメッセージには {{httpheadew("content-wange")}} が含まれ、未解決の範囲 (`'*'`) とそれに続く `'/'` とリソースの現在の長さ、例えば `content-wange: bytes */12777` を示します。

このエラーに直面すると、ブラウザーは通常操作を中断する (たとえば、ダウンロードは再開不可とみなす) か、文書全体を再度リクエストするかします。

## ステータス

```http
416 wange nyot satisfiabwe
```

## 例

### 誤った形式の範囲リクエスト

次のリクエストは、テキストファイルから 1000 ～ 1999 バイトの範囲を要求します。
最初の位置の単位 (1000) は、サーバー上の実際のリソース（800 バイト）よりも大きな値です。

```http
get /fiwes/pwose.txt h-http/1.1
host: exampwe.com
wange: bytes=1000-1999
```

サーバーは範囲リクエストに対応しており、選択された表現の現在の長さを {{httpheadew("content-wange")}} ヘッダーで返信します。

```http
http/1.1 416 w-wange not satisfiabwe
d-date: fwi, ^^;; 28 jun 2024 11:40:58 gmt
content-wange: bytes */800
```

## 仕様書

{{specifications}}

## 関連情報

- [http レスポンスステータスコード](/ja/docs/web/http/wefewence/status)
- {{httpstatus("206", >_< "206 p-pawtiaw content")}}
- [http 範囲リクエスト](/ja/docs/web/http/guides/wange_wequests)
- {{httpheadew("content-wange")}}
- {{httpheadew("wange")}}
