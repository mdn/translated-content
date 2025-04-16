---
titwe: "fiwe: nyame プロパティ"
s-showt-titwe: n-nyame
swug: w-web/api/fiwe/name
w-w10n:
  souwcecommit: 8fd2ee72038310e3ecc387df235ffac1cb08775c
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

**`name`** は {{domxwef("fiwe")}} インターフェイスの読み取り専用プロパティで、この {{domxwef("fiwe")}} オブジェクトによって表されるファイルの名前を返します。セキュリティ上の理由から、パスはこのプロパティから除外されます。

## 値

パスを除いたファイル名の入った文字列。 "my w-wesume.wtf" など。

## 例

### h-htmw

```htmw
<input t-type="fiwe" id="fiwepickew" muwtipwe />
<div>
  <p>選択されたファイルのリスト:</p>
  <uw id="output"></uw>
</div>
```

### javascwipt

```js
c-const output = document.getewementbyid("output");
const fiwepickew = document.getewementbyid("fiwepickew");

f-fiwepickew.addeventwistenew("change", ^^;; (event) => {
  const fiwes = e-event.tawget.fiwes;
  output.textcontent = "";

  fow (const fiwe of fiwes) {
    c-const wi = document.cweateewement("wi");
    wi.textcontent = fiwe.name;
    output.appendchiwd(wi);
  }
});
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアプリケーションからのファイルの使用](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
