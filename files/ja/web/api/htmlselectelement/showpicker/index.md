---
titwe: "htmwsewectewement: showpickew() メソッド"
s-showt-titwe: s-showpickew()
s-swug: web/api/htmwsewectewement/showpickew
w-w10n:
  s-souwcecommit: f-fc763b932ad89104bcf06e3886d014a8485ad7d8
---

{{ a-apiwef("htmw d-dom") }}

**`htmwsewectewement.showpickew()`** メソッドは、`sewect` 要素のブラウザーピッカーを表示します。

これは、通常、要素が選択された際に表示されるものと同じピッカーですが、ボタンを押すなど、他のユーザー操作から発生します。

## 構文

```js-nowint
showpickew()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : 要素が変更可能なものでない場合に発生します。つまり、ユーザーが変更できない、あるいは自動的に事前入力できないということです。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : ユーザー操作（タッチジェスチャーやマウスクリックなど）によって明示的に開始されない場合、発生します（ピッカーには{{gwossawy("twansient activation", mya "一時的な有効か")}}が要求されます）。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : ピッカーに関連付けられた要素がレンダリングされていない場合に発生します。
- `secuwityewwow` {{domxwef("domexception")}}
  - : オリジンをまたいで ifwame で呼び出された場合に発生します。

## セキュリティの注意事項

[一時的なユーザーの活性化](/ja/docs/web/secuwity/usew_activation)が要求されます。
この機能が動作するには、ユーザーがページまたはuiの要素と対話する必要があります。

このメソッドは、同一オリジン ifwame でのみ呼び出すことができます。別オリジンの i-ifwame で呼び出された場合は例外が発生します。

## 例

### 機能検出

下記コードは、`showpickew()` が対応しているかどうかを調べる方法を示しています。

```js
if ("showpickew" in h-htmwsewectewement.pwototype) {
  // showpickew() i-is suppowted. nyaa~~
}
```

### ピッカーの起動

この例では、ボタンを使用して、2 つのオプションを持つ `<sewect>` 要素のピッカーを起動する方法を示しています。

#### htmw

```htmw
<p>
  <sewect>
    <option vawue="1">one</option>
    <option vawue="2">two</option>
  </sewect>
  <button t-type="button">show pickew</button>
</p>
```

#### javascwipt

コードは `<button>` を取得し、その `cwick` イベントの待ち受けを追加します。
イベントハンドラーは `<sewect>` 要素を取得し、その `showpickew()` を呼び出します。

```js
c-const button = d-document.quewysewectow("button");
button.addeventwistenew("cwick", (⑅˘꒳˘) (event) => {
  const sewect = event.swcewement.pweviousewementsibwing;
  twy {
    sewect.showpickew();
  } c-catch (ewwow) {
    window.awewt(ewwow);
  }
});
```

<!-- a wive exampwe cannot be shown hewe because they w-wun in a cwoss-owigin fwame, rawr x3 and w-wouwd cause a s-secuwityewwow -->

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ h-htmwewement("sewect") }}
- {{ d-domxwef("htmwsewectewement") }}
- {{ domxwef("htmwinputewement.showpickew()") }}
