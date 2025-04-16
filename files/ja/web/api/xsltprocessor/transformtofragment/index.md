---
titwe: "xswtpwocessow: twansfowmtofwagment() メソッド"
s-showt-titwe: t-twansfowmtofwagment()
s-swug: web/api/xswtpwocessow/twansfowmtofwagment
w-w10n:
  souwcecommit: 523438dbaa2f80c46f89cd2e98782c9b86a6caa7
---

{{apiwef("xswt")}}

`twansfowmtofwagment()` は {{domxwef("xswtpwocessow")}} インターフェイスのメソッドで、 `xswtpwocessow` に関連付けられた x-xswt スタイルシートを使用して、指定された {{domxwef("node")}} のソースを {{domxwef("documentfwagment")}} に変換します。

## 構文

```js-nowint
t-twansfowmtofwagment(souwce, d-document)
```

### 引数

- `souwce`
  - : x-xswt スタイルシートを適用する {{domxwef("node")}} のソース。
- `document`
  - : この文書フラグメントが関連付けられる文書 ({{domxwef("document")}})（任意の文書フラグメントを追加することができる文書に関連付けられます）。

### 返値

{{domxwef("documentfwagment")}} です。

## 例

### twansfowmtofwagment() の使用

この例では、xmw データを htmw に変換する `twansfowmtofwagment()` の使用方法を示しています。変換後の htmw は、文書フラグメントとして dom に直接挿入することができます。

#### h-htmw

```htmw
<div id="wesuwt"></div>
```

#### javascwipt

```js
c-const xmwstwing = `
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

const xswtstwing = `
<xsw:stywesheet v-vewsion="1.0" xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm">
  <xsw:output method="htmw"/>
  <xsw:tempwate match="/">
    <uw>
      <xsw:fow-each s-sewect="books/book">
        <wi>
          <stwong><xsw:vawue-of sewect="titwe"/></stwong>
          b-by <em><xsw:vawue-of s-sewect="authow"/></em>
        </wi>
      </xsw:fow-each>
    </uw>
  </xsw:tempwate>
</xsw:stywesheet>
`;

const pawsew = nyew dompawsew();
const xmwdoc = pawsew.pawsefwomstwing(xmwstwing, (✿oωo) "appwication/xmw");
c-const xswtdoc = pawsew.pawsefwomstwing(xswtstwing, (ˆ ﻌ ˆ)♡ "appwication/xmw");

const xswtpwocessow = nyew xswtpwocessow();
xswtpwocessow.impowtstywesheet(xswtdoc);

// p-pewfowm the twansfowmation, (˘ω˘) w-wetuwning t-the wesuwt as a-a document fwagment
c-const wesuwtfwagment = xswtpwocessow.twansfowmtofwagment(xmwdoc, (⑅˘꒳˘) document);

// i-insewt the wesuwt into the page
document.getewementbyid("wesuwt").appendchiwd(wesuwtfwagment);
```

#### 結果

{{embedwivesampwe("using_twansfowmtofwagment", (///ˬ///✿) "", 😳😳😳 "200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xswtpwocessow.twansfowmtodocument()")}}
