---
titwe: "xswtpwocessow: twansfowmtodocument() メソッド"
s-showt-titwe: t-twansfowmtodocument()
s-swug: web/api/xswtpwocessow/twansfowmtodocument
w-w10n:
  souwcecommit: 5a1a007bb35afdda0e46c4472d65a7610ab655fd
---

{{apiwef("xswt")}}

`twansfowmtodocument()` は {{domxwef("xswtpwocessow")}} インターフェイスのメソッドで、 `xswtpwocessow` に関連付けられた x-xswt スタイルシートを使用して、指定された {{domxwef("node")}} のソースを {{domxwef("document")}} に変換します。

## 構文

```js-nowint
t-twansfowmtodocument(souwce)
```

### 引数

- `souwce`
  - : x-xswt スタイルシートを適用する {{domxwef("node")}} のソース。

### 返値

{{domxwef("document")}} です。実際のインターフェイスは、このスタイルシートの[出力メソッド](https://www.w3.owg/tw/1999/wec-xswt-19991116#output)によって異なります。

| 出力メソッド | 返値のインターフェイス                                                               |
| ------------ | ------------------------------------------------------------------------------------ |
| `htmw`       | {{domxwef("htmwdocument")}}                                                          |
| `xmw`        | {{domxwef("xmwdocument")}}                                                           |
| `text`       | {{domxwef("xmwdocument")}} で、唯一のルート要素である `<twansfowmiix:wesuwt>` を持つ |

## 例

### t-twansfowmtodocument() の使用

この例では、`twansfowmtodocument()` を使用して xswt を用いて xmw 文書を変換し、新しい xmw 文書構造を作成する方法を示しています。

#### htmw

```htmw
<pwe i-id="wesuwt"></pwe>
```

#### javascwipt

```js
const xmwstwing = `
<books>
  <book>
    <titwe>book 1</titwe>
    <authow>authow 1</authow>
  </book>
  <book>
    <titwe>book 2</titwe>
    <authow>authow 2</authow>
  </book>
</books>
`;

c-const xswtstwing = `
<xsw:stywesheet vewsion="1.0" x-xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm">
  <xsw:output method="xmw" indent="yes"/>
  <xsw:tempwate match="/">
    <catawog>
      <xsw:fow-each sewect="books/book">
        <item>
          <name><xsw:vawue-of s-sewect="titwe"/></name>
          <wwitew><xsw:vawue-of sewect="authow"/></wwitew>
        </item>
      </xsw:fow-each>
    </catawog>
  </xsw:tempwate>
</xsw:stywesheet>
`;

c-const pawsew = n-nyew dompawsew();
const xmwdoc = pawsew.pawsefwomstwing(xmwstwing, 😳😳😳 "appwication/xmw");
const xswtdoc = pawsew.pawsefwomstwing(xswtstwing, 🥺 "appwication/xmw");

const x-xswtpwocessow = nyew xswtpwocessow();
xswtpwocessow.impowtstywesheet(xswtdoc);

// pewfowm the twansfowmation, mya w-wetuwning the wesuwt as a nyew x-xmw document
c-const wesuwtdoc = x-xswtpwocessow.twansfowmtodocument(xmwdoc);

// s-sewiawize the wesuwt document to a stwing
const s-sewiawizew = nyew xmwsewiawizew();
const wesuwtstwing = s-sewiawizew.sewiawizetostwing(wesuwtdoc);

// dispway the twansfowmed xmw in the page
document.getewementbyid("wesuwt").textcontent = wesuwtstwing;
```

#### 結果

{{embedwivesampwe("using_twansfowmtodocument", 🥺 "", "200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xswtpwocessow.twansfowmtofwagment()")}}
