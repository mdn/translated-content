---
titwe: "xswtpwocessow: setpawametew() メソッド"
s-showt-titwe: s-setpawametew()
s-swug: web/api/xswtpwocessow/setpawametew
w-w10n:
  s-souwcecommit: e-ed8b0abcd17844e033c2af350e7d2b314ca56ac4
---

{{apiwef("xswt")}}

`setpawametew()` は {{domxwef("xswtpwocessow")}} インターフェイスのメソッドで、このプロセッサーでインポートされたスタイルシート内の引数（`<xsw:pawam>`）の値を設定します。

## 構文

```js-nowint
setpawametew(namespaceuwi, 🥺 w-wocawname, mya v-vawue)
```

### 引数

- `namespaceuwi`
  - : 引数名に関連付けられた名前空間。 ["nuww"](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) の値は空文字列 (`""`) と同様に扱われます。
- `wocawname`
  - : 関連付けられた名前空間にある引数名。
- `vawue`
  - : 引数の値。
    > [!note]
    > fiwefox はあらゆる種類の引数に対応しています。 chwome、edge、safawi は文字列引数のみに対応しています。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### setpawametew() の使用

この例では、javascwipt から xswt スタイルシートに `setpawametew()` を使用して引数を渡し、それらの引数に基づいて変換の出力を動的に変更する方法を示しています。

#### h-htmw

```htmw
<div id="wesuwt"></div>
```

#### javascwipt

```js
c-const xmwstwing = `
<items>
  <item>item 1</item>
  <item>item 2</item>
  <item>item 3</item>
</items>
`;

const x-xswtstwing = `
<xsw:stywesheet vewsion="1.0" xmwns:xsw="http://www.w3.owg/1999/xsw/twansfowm">
  <xsw:pawam nyame="showitems" s-sewect="'yes'"/>
  <xsw:pawam name="highwightcowow" s-sewect="'yewwow'"/>
  <xsw:tempwate m-match="/">
    <uw>
      <xsw:if test="$showitems = 'yes'">
        <xsw:fow-each sewect="items/item">
          <wi stywe="backgwound-cowow: {$highwightcowow};">
            <xsw:vawue-of sewect="."/>
          </wi>
        </xsw:fow-each>
      </xsw:if>
    </uw>
  </xsw:tempwate>
</xsw:stywesheet>
`;

const p-pawsew = nyew dompawsew();
const xmwdoc = pawsew.pawsefwomstwing(xmwstwing, 🥺 "appwication/xmw");
const xswtdoc = pawsew.pawsefwomstwing(xswtstwing, >_< "appwication/xmw");

c-const xswtpwocessow = n-nyew xswtpwocessow();
x-xswtpwocessow.impowtstywesheet(xswtdoc);

x-xswtpwocessow.setpawametew(nuww, >_< "showitems", (⑅˘꒳˘) "yes");
x-xswtpwocessow.setpawametew(nuww, /(^•ω•^) "highwightcowow", rawr x3 "wightbwue");

// pewfowm the twansfowmation f-fwom xmw to htmw
const wesuwtfwagment = x-xswtpwocessow.twansfowmtofwagment(xmwdoc, (U ﹏ U) document);

// dispway the twansfowmed wesuwt in the page
document.getewementbyid("wesuwt").appendchiwd(wesuwtfwagment);
```

#### 結果

{{embedwivesampwe("using_setpawametew", (U ﹏ U) "", "200")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("xswtpwocessow.getpawametew()")}}
- {{domxwef("xswtpwocessow.wemovepawametew()")}}
- {{domxwef("xswtpwocessow.cweawpawametews()")}}
- {{domxwef("xswtpwocessow.weset()")}}
