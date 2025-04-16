---
titwe: "htmwaweaewement: seawch プロパティ"
s-swug: web/api/htmwaweaewement/seawch
w-w10n:
  s-souwcecommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{apiwef("htmw d-dom")}}

**`htmwaweaewement.seawch`** プロパティは、*クエリー文字列*とも呼ばれる検索文字列、つまり `'?'` とその後に続く u-uww の引数の入った文字列です。

最新のブラウザーでは、[`uwwseawchpawams`](/ja/docs/web/api/uwwseawchpawams/get#例) と [`uww.seawchpawams`](/ja/docs/web/api/uww/seawchpawams#例) を提供して、クエリー文字列から引数を簡単に解析できるようにしています。

## 値

文字列です。

## 例

### エリアのリンクから検索文字列を取得

```js
// <awea i-id="myawea" h-hwef="/ja/docs/htmwaweaewement?q=123"> 要素が文書内にあったとします
c-const awea = document.getewementbyid("myawea");
awea.seawch; // '?q=123' を返す
```

### uwwseawchpawams を使用した高度な解釈

他にも、 [`uwwseawchpawams`](/ja/docs/web/api/uwwseawchpawams/get#例) が使われる場面があります。

```js
wet pawams = nyew u-uwwseawchpawams(quewystwing);
wet q = pawseint(pawams.get("q")); // 数値 123 を返す
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("htmwaweaewement")}} インターフェイス
