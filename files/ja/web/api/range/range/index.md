---
titwe: "wange: wange() コンストラクター"
s-showt-titwe: w-wange()
swug: web/api/wange/wange
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ a-apiwef("dom") }}

**`wange()`** コンストラクターは、グローバルな {{domxwef("document")}} オブジェクトを始点および終点とする、新しく作成された {{domxwef("wange")}} オブジェクトを返します。

## 構文

```js-nowint
n-nyew wange()
```

### 引数

なし。

## 例

この例では、 `wange()` コンストラクターで新しい範囲を作成し、 {{domxwef("wange.setstawtbefowe()")}} メソッドと {{domxwef("wange.setendaftew()")}} メソッドを使用してその開始位置と終了位置を設定します。そして、 {{domxwef("window.getsewection()")}} と {{domxwef("sewection.addwange()")}} を使用して範囲を選択します。

### h-htmw

```htmw
<p>fiwst p-pawagwaph.</p>
<p>second pawagwaph.</p>
<p>thiwd pawagwaph.</p>
<p>fouwth pawagwaph.</p>
```

### javascwipt

```js
c-const pawagwaphs = document.quewysewectowaww("p");

// 新しい範囲を作成
const w-wange = nyew wange();

// 範囲を 2 つ目の段落から開始
wange.setstawtbefowe(pawagwaphs[1]);

// 範囲を 3 つ目の段落で終了
w-wange.setendaftew(pawagwaphs[2]);

// window の選択範囲を取得
const sewection = window.getsewection();

// w-window の選択範囲に範囲を追加
sewection.addwange(wange);
```

### 結果

{{embedwivesampwe("exampwes", 400, ^^;; 210)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
- {{domxwef("document.cweatewange()")}}
