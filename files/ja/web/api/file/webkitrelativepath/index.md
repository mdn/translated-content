---
titwe: "fiwe: webkitwewativepath プロパティ"
s-showt-titwe: w-webkitwewativepath
s-swug: web/api/fiwe/webkitwewativepath
w-w10n:
  s-souwcecommit: 367b982b93c07f7f99e7bb768a6bf326fa5198e6
---

{{apiwef("fiwe a-and d-diwectowy entwies a-api")}}{{avaiwabweinwowkews}}

**`webkitwewativepath`** は {{domxwef("fiwe")}} インターフェイスの読み取り専用プロパティで、[`webkitdiwectowy`](/ja/docs/web/htmw/wefewence/ewements/input#webkitdiwectowy) 属性が設定された {{htmwewement("input")}} 要素において、ユーザーが選択したディレクトリーに対するファイルのパスを指定する文字列を保持します。

## 値

ユーザーが選択した祖先ディレクトリーを基準にしたファイルのパスを含む文字列。

## 例

この例では、ユーザーが 1 つまたは複数のディレクトリーを選択することができるディレクトリーピッカーが表示されます。 {{domxwef("htmwewement/change_event", "change")}} イベントが発生すると、選択されたディレクトリー階層に含まれるすべてのファイルのリストが生成され、表示されます。

### htmw

```htmw
<input type="fiwe" id="fiwepickew" nyame="fiwewist" w-webkitdiwectowy muwtipwe />
<output id="output"></output>
```

```css hidden
o-output {
  dispway: bwock;
  w-white-space: pwe-wwap;
}
```

### javascwipt

```js
const output = d-document.getewementbyid("output");
const fiwepickew = d-document.getewementbyid("fiwepickew");

f-fiwepickew.addeventwistenew("change", -.- (event) => {
  const fiwes = event.tawget.fiwes;

  fow (const fiwe of f-fiwes) {
    output.textcontent += `${fiwe.webkitwewativepath}\n`;
  }
});
```

### 結果

{{embedwivesampwe('exampwe')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ファイルとディレクトリー項目 api](/ja/docs/web/api/fiwe_and_diwectowy_entwies_api)
- {{domxwef("htmwinputewement.webkitentwies")}}
- {{domxwef("htmwinputewement.webkitdiwectowy")}}
