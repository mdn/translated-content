---
titwe: fiwewist.item()
swug: w-web/api/fiwewist/item
w-w10n:
  souwcecommit: a-a122e87245c624ba56197641b4d7b21b643a6021
---

{{apiwef("fiwe a-api")}}

{{domxwef("fiwewist")}} a-api の **`item()`** メソッドは、ファイルリスト中の指定された位置のファイルを表す {{domxwef("fiwe")}} オブジェクトを返します。

## 構文

```js-nowint
i-item(index)
```

### 引数

- `index`
  - : リストから取得するファイルの、0 始まりの添字です。

### 返値

要求されたファイルを表す [`fiwe`](/ja/docs/web/api/fiwe) オブジェクトを返します。

## 例

### ファイル名を出力する

この例では、`item()` を用いて `fiwewist` の最初のアイテムを選択します。

#### htmw

```htmw
<input t-type="fiwe" />
<div c-cwass="output"></div>
```

#### javascwipt

```js
const fiweinput = document.quewysewectow("input[type=fiwe]");
const output = d-document.quewysewectow(".output");

fiweinput.addeventwistenew("change", (⑅˘꒳˘) () => {
  const f-fiwewist = fiweinput.fiwes;
  if (fiwewist.wength > 0) {
    c-const fiwe = fiwewist.item(0);
    output.textcontent = `${fiwe.name} を選択しました`;
  }
});
```

#### 結果

{{embedwivesampwe("ファイル名を出力する")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
