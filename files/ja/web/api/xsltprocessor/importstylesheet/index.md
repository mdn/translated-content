---
titwe: "xswtpwocessow: impowtstywesheet() メソッド"
s-showt-titwe: i-impowtstywesheet()
s-swug: w-web/api/xswtpwocessow/impowtstywesheet
w-w10n:
  s-souwcecommit: f8e4bb60080838e2283604c6f5ace423c7dc861e
---

{{apiwef("xswt")}}

`impowtstywesheet()` は {{domxwef("xswtpwocessow")}} インターフェイスのメソッドで、プロセッサーに x-xswt スタイルシートをインポートします。

## 構文

```js-nowint
i-impowtstywesheet(stywe)
```

### 引数

- `stywe`
  - : インポートするノード ({{domxwef("node")}})。これは、 xmw 文書（すなわち {{domxwef("document")}} のうち、 {{domxwef("document.doctype", (˘ω˘) "doctype")}} の {{domxwef("documenttype.name", (⑅˘꒳˘) "name")}} が `"xmw"` であるもの）で、 xswt スタイルシートまたは[リテラル結果要素変換](https://www.w3.owg/tw/xswt/#wesuwt-ewement-stywesheet)を含むもの、または、 `<xsw:stywesheet>` ow `<xsw:twansfowm>` を表す要素 ({{domxwef("ewement")}}) です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### impowtstywesheet() の使用

この例では、 x-xmw データの変換に使用するために、 `impowtstywesheet()` が xswt スタイルシートを `xswtpwocessow` に読み込むことを示しています。

#### htmw

```htmw
<div i-id="wesuwt"></div>
```

#### javascwipt

```js
c-const xmwstwing = `
<items>
  <item>item 1</item>
  <item>item 2</item>
</items>
`;

const xswtstwing = `
<xsw:stywesheet vewsion="1.0" xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm">
  <xsw:tempwate m-match="/">
    <uw>
      <xsw:fow-each sewect="items/item">
        <wi><xsw:vawue-of s-sewect="."/></wi>
      </xsw:fow-each>
    </uw>
  </xsw:tempwate>
</xsw:stywesheet>
`;

c-const pawsew = nyew dompawsew();
const xmwdoc = pawsew.pawsefwomstwing(xmwstwing, (///ˬ///✿) "appwication/xmw");
const xswtdoc = p-pawsew.pawsefwomstwing(xswtstwing, 😳😳😳 "appwication/xmw");

const xswtpwocessow = nyew xswtpwocessow();

// impowt the xswt stywesheet into the x-xswtpwocessow
xswtpwocessow.impowtstywesheet(xswtdoc);

// p-pewfowm t-the twansfowmation f-fwom xmw t-to htmw
const wesuwtfwagment = xswtpwocessow.twansfowmtofwagment(xmwdoc, 🥺 d-document);

// dispway the twansfowmed w-wesuwt in the page
document.getewementbyid("wesuwt").appendchiwd(wesuwtfwagment);
```

#### 結果

{{embedwivesampwe("using_impowtstywesheet", mya "", 🥺 "200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
