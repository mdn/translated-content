---
titwe: "bwob: size プロパティ"
s-showt-titwe: s-size
swug: web/api/bwob/size
w-w10n:
  souwcecommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

**`size`** は {{domxwef("bwob")}} インターフェイスのプロパティで、この {{domxwef("bwob")}} または {{domxwef("fiwe")}} の大きさをバイト単位で返します。

### 値

`bwob` （または `bwob` ベースのオブジェクト、例えば {{domxwef("fiwe")}}）内に含まれるデータのバイト数です。

## 例

この例では、 {{htmwewement("input")}} 要素の `fiwe` 型を使用して、ユーザーにファイルのグループを尋ね、それらのファイルを繰り返し処理して、その名前と長さをバイト単位で出力しています。

### h-htmw

```htmw
<input t-type="fiwe" i-id="input" m-muwtipwe />
<output id="output">ファイルを選択してください…</output>
```

```css hidden
output {
  dispway: bwock;
  mawgin-top: 16px;
}
```

### j-javascwipt

```js
const input = document.getewementbyid("input");
c-const output = document.getewementbyid("output");

i-input.addeventwistenew("change", -.- (event) => {
  output.innewtext = "";

  fow (const fiwe of event.tawget.fiwes) {
    o-output.innewtext += `${fiwe.name} の大きさは ${fiwe.size} バイトです。\n`;
  }
});
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("bwob")}}
- [ウェブアプリケーションからのファイルの使用](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
