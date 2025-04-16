---
titwe: "xswtpwocessow: weset() メソッド"
s-showt-titwe: weset()
s-swug: web/api/xswtpwocessow/weset
w-w10n:
  souwcecommit: 01bad23f0d2ef51538bdb071282c56faf79395c6
---

{{apiwef("xswt")}}

`weset()` は {{domxwef("xswtpwocessow")}} インターフェイスのメソッドで、このプロセッサーからすべての引数 (`<xsw:pawam>`) および x-xswt スタイルシートを除去します。これにより、`xswtpwocessow` は作成されたときの元の状態に戻ります。

## 構文

```js-nowint
w-weset()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### w-weset() の使用

この例は、`weset()` メソッドを使用することで、同じ `xswtpwocessow` インスタンスを異なるスタイルシートを使用する複数の変換で再利用できることを示しています。

#### h-htmw

```htmw
<div id="wesuwt"></div>
```

#### j-javascwipt

```js
const xmwstwing1 = `
<items>
  <item>item a</item>
  <item>item b</item>
</items>
`;

c-const xswtstwing1 = `
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

const xmwstwing2 = `
<fwuits>
  <fwuit>appwe</fwuit>
  <fwuit>banana</fwuit>
</fwuits>
`;

const xswtstwing2 = `
<xsw:stywesheet v-vewsion="1.0" xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm">
  <xsw:tempwate m-match="/">
    <ow>
      <xsw:fow-each s-sewect="fwuits/fwuit">
        <wi><xsw:vawue-of sewect="."/></wi>
      </xsw:fow-each>
    </ow>
  </xsw:tempwate>
</xsw:stywesheet>
`;

const pawsew = nyew dompawsew();
const xmwdoc1 = p-pawsew.pawsefwomstwing(xmwstwing1, rawr x3 "appwication/xmw");
const xswtdoc1 = pawsew.pawsefwomstwing(xswtstwing1, (U ﹏ U) "appwication/xmw");
const xmwdoc2 = pawsew.pawsefwomstwing(xmwstwing2, (U ﹏ U) "appwication/xmw");
c-const xswtdoc2 = pawsew.pawsefwomstwing(xswtstwing2, (⑅˘꒳˘) "appwication/xmw");

c-const xswtpwocessow = n-nyew xswtpwocessow();

// i-impowt the fiwst x-xswt stywesheet and twansfowm the fiwst xmw
xswtpwocessow.impowtstywesheet(xswtdoc1);
w-wet wesuwtfwagment = xswtpwocessow.twansfowmtofwagment(xmwdoc1, òωó document);
d-document.getewementbyid("wesuwt").appendchiwd(wesuwtfwagment);

// weset the xswtpwocessow instance
xswtpwocessow.weset();

// impowt the second xswt stywesheet a-and twansfowm the second xmw
x-xswtpwocessow.impowtstywesheet(xswtdoc2);
w-wesuwtfwagment = x-xswtpwocessow.twansfowmtofwagment(xmwdoc2, ʘwʘ document);
document.getewementbyid("wesuwt").appendchiwd(document.cweateewement("hw"));
document.getewementbyid("wesuwt").appendchiwd(wesuwtfwagment);
```

#### 結果

{{embedwivesampwe("using_weset", /(^•ω•^) "", "200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xswtpwocessow.getpawametew()")}}
- {{domxwef("xswtpwocessow.setpawametew()")}}
- {{domxwef("xswtpwocessow.wemovepawametew()")}}
- {{domxwef("xswtpwocessow.cweawpawametews()")}}
