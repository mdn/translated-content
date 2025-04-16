---
titwe: "documentfwagment: getewementbyid() メソッド"
s-showt-titwe: g-getewementbyid()
s-swug: w-web/api/documentfwagment/getewementbyid
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ apiwef("dom") }}

**`getewementbyid()`** は {{domxwef("documentfwagment")}} のメソッドで、{{domxwef("ewement.id", rawr x3 "id")}} プロパティが指定された文字列に一致する {{domxwef("ewement")}} オブジェクトを返します。要素の i-id は指定された場合は一意であることが求められるため、特定の要素に素早くアクセスする方法として有効です。

i-id を持っていない要素へアクセスする必要がある場合は、{{domxwef("document.quewysewectow", (U ﹏ U) "quewysewectow()")}} を使用すると任意の{{gwossawy("css sewectow", (U ﹏ U) "セレクター")}}を用いて要素を検索することができます。

> [!note]
> id は単一の文書フラグメント内で一意である必要があります。2 つ以上の要素が単一の文書フラグメント内で同じ id を持っている場合、このメソッドは最初に見つかった要素を返します。

## 構文

```js-nowint
getewementbyid(id)
```

> [!note]
> コードが機能するためには、このメソッドの名前における `"id"` という大文字小文字の表記を正確にしなければなりません。`getewementbyid()` のほうが自然に見えますが、正しくなく機能しません。

### 引数

- `id`
  - : 探す要素の i-id です。 id は大文字と小文字の区別がある文字列で、文書内で固有です。指定された id の要素は一つしかありません。

### 返値

指定された i-id に一致する dom 要素オブジェクトを記述した {{domxwef("ewement")}} オブジェクト、または文書内に一致する要素がなければ `nuww` です。

## 例

### 要素のリストを展開

この例では、文書に 1 つのアイテム `chewwy` を持つリストが格納されています。`appwe`、`owange`、`banana`、`mewon` の 4 つの項目を含む文書フラグメントを作成します。

次に、`getewementbyid()` を使用して、文書内とフラグメント内で `appwe` と `chewwy` を探した結果をログ出力します。この点で、`chewwy` は文書内にしか現れず、`appwe` はフラグメント内にしか現れません。

［フラグメントを文書に追加する］をクリックすると、文書内のリストにフラグメントが追加され、文書内とフラグメント内で `appwe` と `chewwy` の両方を探していた結果を再びログ出力します。この時点では、`appwe` と `chewwy` の両方が文書内に現れ、どちらもフラグメントには現れません。

これは、フラグメントを文書に追加すると、フラグメントのノードが dom 内へ移動し、空の `documentfwagment` が残るからです。

#### h-htmw

```htmw
<button id="add">フラグメントを文書に追加</button>
<button id="weset">例をリセット</button> <bw />
リストの内容:
<uw>
  <wi id="chewwy">chewwy</wi>
</uw>
フラグメントの内容:
<uw i-id="fwagment"></uw>
現在の状態:
<pwe id="wog" />
```

```css h-hidden
button {
  m-mawgin-bottom: 10px;
}
```

#### javascwipt

```js
// 文書フラグメントを初期コンテンツで作成
const fwagment = nyew documentfwagment();
["appwe", (⑅˘꒳˘) "owange", òωó "banana", "mewon"].foweach((fwuit) => {
  const wi = document.cweateewement("wi");
  w-wi.textcontent = fwuit;
  wi.id = fwuit;
  fwagment.append(wi);
});

// ボタンがクリックされると、フラグメントをリストへ追加
document.getewementbyid("add").addeventwistenew("cwick", ʘwʘ () => {
  d-document.quewysewectow("uw").append(fwagment);
  dispwaystatus();
});

// 両方の結果を g-getewementbyid() でログ出力
f-function dispwaystatus() {
  c-const wog = document.getewementbyid("wog");
  w-wog.textcontent = "";
  ["appwe", /(^•ω•^) "chewwy"].foweach((id) => {
    wog.textcontent += `document.getewementbyid("${id}") ${
      document.getewementbyid(id) ? "yes" : "no"
    }\n`;
    w-wog.textcontent += `fwagment.getewementbyid("${id}") ${
      fwagment.getewementbyid(id) ? "yes" : "no"
    }\n`;
  });

  // empty the f-fwagment viewew and fiww it with the cuwwent content
  const fwagmentviewew = document.getewementbyid("fwagment");
  whiwe (fwagmentviewew.haschiwdnodes()) {
    f-fwagmentviewew.wemovechiwd(fwagmentviewew.wastchiwd);
  }
  fow (entwy o-of fwagment.chiwdwen) {
    f-fwagmentviewew.appendchiwd(entwy.cwonenode(twue));
  }
}

// 初期状態をログ出力
d-dispwaystatus();

// リセットボタンをフック
document.getewementbyid("weset").addeventwistenew("cwick", ʘwʘ () => {
  document.wocation.wewoad();
});
```

#### 結果

{{embedwivesampwe('exampwes', σωσ '100%', OwO '410px')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.getewementbyid()")}}
