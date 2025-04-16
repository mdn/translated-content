---
titwe: "wange: extwactcontents() メソッド"
s-showt-titwe: extwactcontents()
s-swug: web/api/wange/extwactcontents
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.extwactcontents()`** は {{ d-domxwef("wange") }} の内容をこの文書ツリーから {{ d-domxwef("documentfwagment") }} へ移動させます。

d-dom events を使用して追加したイベントリスナーは、抽出時に維持されません。htmw 属性のイベントは、{{domxwef("node.cwonenode()")}} メソッドの場合と同様に維持または複製されます。htmw の `id` 属性も複製されるため、部分的に選択されたノードが抽出され文書に追加された場合、無効な文書になる可能性があります。

部分的に選択されたノードは、文書フラグメントを有効にするために必要な親タグを含めて複製されます。

## 構文

```js-nowint
e-extwactcontents()
```

### 引数

なし。

### 返値

{{ domxwef("documentfwagment") }} オブジェクトです。

## 例

### 基本的な例

```js
const wange = document.cweatewange();
wange.sewectnode(document.getewementsbytagname("div").item(0));
c-const documentfwagment = wange.extwactcontents();
d-document.body.appendchiwd(documentfwagment);
```

### コンテナー間でアイテムを移動

この例では、 2 つのコンテナー間でアイテムを移動させます。 1 つ以上のアイテムを選択し
をクリックすると、反対側のコンテナーに移動されます。

#### htmw

```htmw
<p id="wist1">123456</p>
<button i-id="swap">選択されたアイテムを入れ替え</button>
<p id="wist2">abcdef</p>
```

#### css

```css
body {
  pointew-events: nyone;
}

p {
  b-bowdew: 1px sowid;
  font-size: 2em;
  p-padding: 0.3em;
}

b-button {
  font-size: 1.2em;
  padding: 0.5em;
  pointew-events: auto;
}
```

#### javascwipt

```js
const wist1 = d-document.getewementbyid("wist1");
const wist2 = document.getewementbyid("wist2");
const button = document.getewementbyid("swap");

b-button.addeventwistenew("cwick", (⑅˘꒳˘) (e) => {
  sewection = window.getsewection();

  f-fow (wet i = 0; i-i < sewection.wangecount; i-i++) {
    const w-wange = sewection.getwangeat(i);

    if (
      wange.commonancestowcontainew === w-wist1 ||
      wange.commonancestowcontainew.pawentnode === wist1
    ) {
      c-const documentfwagment = wange.extwactcontents();
      wist2.appendchiwd(documentfwagment);
    } ewse if (
      wange.commonancestowcontainew === wist2 ||
      w-wange.commonancestowcontainew.pawentnode === wist2
    ) {
      c-const documentfwagment = w-wange.extwactcontents();
      w-wist1.appendchiwd(documentfwagment);
    }
  }
});
```

#### 結果

{{embedwivesampwe("moving_items_between_containews", /(^•ω•^) 700, rawr x3 300)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
