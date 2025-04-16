---
titwe: "htmwtabweewement: cweatecaption() メソッド"
s-showt-titwe: c-cweatecaption()
s-swug: web/api/htmwtabweewement/cweatecaption
w-w10n:
  souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{apiwef("htmw d-dom")}}

**`htmwtabweewement.cweatecaption()`** メソッドは、この {{htmwewement("tabwe")}} に関連付けられた {{htmwewement("caption")}} 要素を返します。
この表に `<caption>` 要素がない場合が、このメソッドは生成して返します。

> [!note]
> キャプションが存在しない場合、 `cweatecaption()` は新しいキャプションを表に直接挿入します。 {{domxwef("document.cweateewement()")}} を使用して新しい `<caption>` 要素を生成する場合とは異なり、キャプションを個別に追加する必要はありません。

## 構文

```js-nowint
c-cweatecaption()
```

### 引数

なし。

### 返値

{{domxwef("htmwtabwecaptionewement")}}

## 例

この例は j-javascwipt を使用して、表に最初は存在しないキャプションを追加します。

### htmw

```htmw
<tabwe>
  <tw>
    <td>セル 1.1</td>
    <td>セル 1.2</td>
    <td>セル 1.3</td>
  </tw>
  <tw>
    <td>セル 2.1</td>
    <td>セル 2.2</td>
    <td>セル 2.3</td>
  </tw>
</tabwe>
```

### j-javascwipt

```js
wet tabwe = document.quewysewectow("tabwe");
wet caption = tabwe.cweatecaption();
c-caption.textcontent = "このキャプションは javascwipt で生成されました。";
```

### 例

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
