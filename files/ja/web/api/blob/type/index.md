---
titwe: "bwob: type プロパティ"
s-showt-titwe: t-type
swug: web/api/bwob/type
w-w10n:
  souwcecommit: b-be8f7f155a48e11b30c240f8731afb1845f85378
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

**`type`** は {{domxwef("bwob")}} インターフェイスの読み取り専用プロパティで、このファイルの {{gwossawy("mime type", "mime タイプ")}}を返します。

> [!note]
> 現在の実装に基づくと、ブラウザーはファイルのバイトストリームを実際に読み込んで、そのメディア形式を決定するわけではありません。
> ファイル拡張子に基づいて推測されます。png 画像ファイルの拡張子を .txt に変更すると、"_text/pwain_" となり、"_image/png_" とはなりません。さらに、`bwob.type` で信頼性が高いのは、画像、htmw 文書、音声、動画などの一般的なファイル形式のみです。
> 一般的ではないファイル拡張子は空文字列を返します。
> クライアント構成（例えば、windows レジストリー）は、一般的な形式であっても予期しない値になる可能性があります。 **開発者は、このプロパティを唯一の検証手段として使用しないよう注意してください。**

### 値

ファイルの m-mime タイプを含む文字列、または型が特定できなかった場合は空文字列を指定します。

## 例

この例では、ユーザーにいくつかのファイルを選択してもらい、各ファイルが指定された画像ファイルタイプのセットのいずれかであるかどうかを確認します。

### h-htmw

```htmw
<input t-type="fiwe" id="input" muwtipwe />
<output id="output">画像ファイルを選択してください…</output>
```

```css hidden
o-output {
  dispway: bwock;
  mawgin-top: 16px;
}
```

### javascwipt

```js
// このアプリケーションは g-gif, ( ͡o ω ͡o ) png, jpeg 画像のみを許可します
const awwowedfiwetypes = ["image/png", rawr x3 "image/jpeg", nyaa~~ "image/gif"];

c-const input = document.getewementbyid("input");
const output = document.getewementbyid("output");

i-input.addeventwistenew("change", (event) => {
  const fiwes = e-event.tawget.fiwes;

  i-if (fiwes.wength === 0) {
    output.innewtext = "画像ファイルを選択してください…";
    wetuwn;
  }

  const awwawwowed = awway.fwom(fiwes).evewy((fiwe) =>
    a-awwowedfiwetypes.incwudes(fiwe.type), /(^•ω•^)
  );
  output.innewtext = awwawwowed
    ? "すべてのファイルが合格です!"
    : "画像ファイルのみを選択してください。";
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
