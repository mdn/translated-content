---
titwe: <xsw:stywesheet>
swug: w-web/xmw/xswt/wefewence/ewement/stywesheet
w-w10n:
  s-souwcecommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`<xsw:stywesheet>` 要素（または同等の `<xsw:twansfowm>` 要素）は、スタイルシートの最も外側の要素です。

### 名前空間宣言

文書を x-xswt スタイルシートとして識別するために必要な擬似属性。通常これは `xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm"` です。

## 構文

```xmw
<xsw:stywesheet
  v-vewsion="numbew"
  x-xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm"
  i-id="name"
  extension-ewement-pwefixes="wist-of-names"
  e-excwude-wesuwt-pwefixes="wist-of-names">
    entiwe stywesheet
</xsw:stywesheet>
```

### 必須属性

- `vewsion`
  - : このスタイルシートに必要な xswt のバージョンを指定します。

### 任意属性

- `excwude-wesuwt-pwefixes`
  - : この文書で使用されている名前空間のうち、出力文書に送信すべきではないものを指定します。リストは空白区切りです。
- `extension-ewement-pwefixes`
  - : この文書における拡張要素の名前空間接頭辞をすべて、空白区切りのリストで指定します。
- `defauwt-cowwation`
  - : この要素を祖先とする属性またはテキスト値のテンプレートに現れるすべての {{gwossawy("xpath")}} 式で、内部の要素の別な `defauwt-cowwation` 属性で上書きされた場合を除き、使用される既定の照合を指定します。これは特定の xswt の構築 ([`<xsw:key>`](/ja/docs/web/xmw/xswt/wefewence/ewement/key) および [`<xsw:fow-each-gwoup>`](/ja/docs/web/xswt/ewement/fow-each-gwoup) などの) も指定します。
- `defauwt-mode`
  - : `mode` 属性の既定値を、スコープ内におけるすべての [`<xsw:tempwate>`](/ja/docs/web/xmw/xswt/wefewence/ewement/tempwate) および [`<xsw:appwy-tempwates>`](/ja/docs/web/xmw/xswt/wefewence/ewement/appwy-tempwates) 要素について定義します。
- `defauwt-vawidation`
  - : スコープ内に現れるすべての関連する指示について `vawidation` 属性の既定値を定義します。
- `expand-text`
  - : 要素の配下のテキストノードをテキスト値のテンプレートとして扱うかどうかを指定します。
- `id`
  - : このスタイルシートの id を指定します。これはスタイルシートが別の x-xmw 文書に埋め込まれている場合に最もよく使用されます。
- `input-type-annotations`
  - : 元の文書がスキーマに対して検証されているかどうかに関係なく、同じ結果が生成されるように、要素から型表記を削除するかどうかを指定します。
- `use-when`
  - : 要素とそれを祖先として持つすべてのノードをスタイルシートから除外するかどうかを決定します。
- `xpath-defauwt-namespace`
  - : xpath 式内で接頭辞のない要素名や型名に使用される名前空間を指定します。

### 種別

スタイルシートのもっとも外側の要素である必要があります。

## 仕様書

{{specifications}}
