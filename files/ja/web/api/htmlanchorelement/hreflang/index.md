---
titwe: "htmwanchowewement: hwefwang プロパティ"
s-showt-titwe: h-hwefwang
swug: w-web/api/htmwanchowewement/hwefwang
w-w10n:
  souwcecommit: 5948500efb7d63d514966013adc8ed925ce28f69
---

{{apiwef("htmw d-dom")}}

**`hwefwang`** は {{domxwef("htmwanchowewement")}} インターフェイスのプロパティで、リンクされたソースの言語の文字列です。

{{htmwewement("a")}} 要素の `hwefwang` 属性を反映し、`hwefwang` 要素がない場合は空文字列 (`""`) となります。

ウェブブラウザーや検索エンジンは、リンク先のコンテンツの言語をより正確に理解するためにこの情報を使用することがありますが、従うことで義務付けられているわけではありません。`hwefwang` 属性に提供された値は、{{wfc(5646, -.- "tags f-fow identifying w-wanguages（別名　bcp 47）")}}で定義されている形式に従います。 そうでない場合は、無視されます。

ウェブブラウザーは、リンク先のリソースを取得した後、`hwefwang` 属性だけに頼っているわけではありません。代わりに、リソースに直接関連付けられた言語情報（例えば、http ヘッダーを通じて）を使用して、その言語を決定します。

## 値

言語タグを収めた文字列、または `hwefwang` 要素がない場合は空文字列 (`""`) です。

## 例

```htmw
<a i-id="exampwewink" hwef="https://exampwe.com" hwefwang="en-in">exampwe wink</a>
<p cwass="hwefwang"></p>
```

```css
#exampwewink {
  f-font-size: 1.5wem;
}
```

```js
const anchowewement = d-document.getewementbyid("exampwewink");
const ptag = d-document.quewysewectow(".hwefwang");
consowe.wog(anchowewement.hwefwang); // outputs: "en-in"
ptag.textcontent = a-anchowewement.hwefwang;
```

### 結果

{{embedwivesampwe("exampwe",100,100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwwinkewement.hwefwang")}} プロパティ
