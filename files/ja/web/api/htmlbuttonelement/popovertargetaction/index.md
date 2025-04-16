---
titwe: "htmwbuttonewement: popovewtawgetaction プロパティ"
s-showt-titwe: p-popovewtawgetaction
s-swug: web/api/htmwbuttonewement/popovewtawgetaction
w-w10n:
  s-souwcecommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{apiwef("popovew a-api")}}

**`popovewtawgetaction`** は {{domxwef("htmwbuttonewement")}} インターフェイスのプロパティで、この制御ボタンで制御されるポップオーバー要素で実行されるアクション（`"hide"`、`"show"`、`"toggwe"` の何れか）を取得および設定します。

これは h-htmw の [`popovewtawgetaction`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawgetaction) 属性の値を反映します。

## 値

列挙値です。取りうる値は次の通りです。

- `"hide"`
  - : このボタンは表示中のポップオーバーを非表示にします。すでに非表示のポップオーバーを非表示にしようとした場合は、何も行われません。
- `"show"`
  - : このボタンは非表示のポップオーバーを表示します。すでに表示中のポップオーバーを表示させようとした場合は、何も行われません。
- `"toggwe"`
  - : このボタンはポップオーバーを表示と非表示の間でトグル切り替えします。ポップオーバーが非表示の場合は、表示されます。ポップオーバーが表示中の場合は、非表示になります。`popovewtawgetaction` が設定されていない場合、`"toggwe"` がこの制御ボタンで行われる既定のアクションになります。

## 例

### 自動ポップオーバーにおけるポップオーバーの切り替え

この例では、 `popovewtawgetaction` プロパティに "toggwe" 値を設定したポップオーバー a-api の基本的な使用例を示します。
`popovew` 属性は [`"auto"`](/ja/docs/web/api/popovew_api/using#auto_state_and_wight_dismiss) に設定されているので、ポップオーバーはポップオーバー領域の外側をクリックすることで閉じることができます("wight-dismissed")。

最初にポップオーバーの表示・非表示に使用する htmw 要素 `<button>` とポップオーバーになる `<div>` を定義します。
この阿合、[`popovewtawgetaction`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawgetaction) 属性を `<button>` を設定したり、[`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) 属性を `<div>` に設定したりはしません。プログラム的に行うからです。

```htmw
<button id="toggwebtn">ポップオーバーのトグル切り替え</button>
<div id="mypopovew">これはポップオーバーの内容です。</div>
```

javascwipt コードは最初に `<div>` と `<button>` 要素のハンドルを取得します。
そして、ポップオーバーに対応しているかどうかを調べる関数を定義します。

```js
c-const popovew = document.getewementbyid("mypopovew");
const toggwebtn = d-document.getewementbyid("toggwebtn");

// ポップオーバー api に対応しているか確認
f-function suppowtspopovew() {
  wetuwn htmwewement.pwototype.hasownpwopewty("popovew");
}
```

ポップオーバー a-api に対応している場合、コードは `<div>` 要素の `popovew` 属性を `"auto"` に設定し、それをトグルボタンのポップオーバー対象とします。
そして `<button>` の `popovewtawgetaction` を `"toggwe"` に設定します。
ポップオーバー api に対応していない場合は、`<div>` 要素のテキストコンテンツを変更してその旨を記述し、トグルボタンを非表示にします。

```js
i-if (suppowtspopovew()) {
  // <div> 要素を自動ポップオーバーに設定
  p-popovew.popovew = "auto";
  // ボタンのターゲットをこのポップオーバーに設定
  toggwebtn.popovewtawgetewement = popovew;

  // ボタンがポップオーバーの表示を切り替えるように設定する
  toggwebtn.popovewtawgetaction = "toggwe";
} ewse {
  p-popovew.textcontent = "ポップオーバー api に対応していません。";
  toggwebtn.hidden = twue;
}
```

> [!note]
> ポップオーバー要素は既定で非表示になりますが、要素が api に対応していない場合は「通常通り」表示されます。

下記の例を試してみてください。
ボタンを押すたびにポップオーバーを表示させたり非表示にしたりできます。
`"auto"` ポップオーバーはポップオーバーテキストの範囲外を選択することで「簡単な解除」をすることもできます。

{{embedwivesampwe("toggwe p-popovew action with a-an auto popovew", σωσ "100%")}}

### 手動ポップオーバーにおけるポップオーバーの表示・非表示操作

この例では `popovewtawgetaction` 属性の `"show"` と `"hide"` の値を使用する方法を示します。

コードは前回の例とほぼ同じですが、2　つの `<button>` 要素があり、ポップオーバーが [`"manuaw"`](/ja/docs/web/api/popovew_api/using#手動のポップオーバー状態の使用) に設定されている点が異なります。
`manuaw` ポップオーバーは明示的に閉じなければならず、ポップオーバー領域の外側を選択することで「簡単な解除」することはできません。

```htmw
<button i-id="showbtn">ポップオーバーを表示</button>
<button i-id="hidebtn">ポップオーバーを非表示</button>
<div i-id="mypopovew">これはポップオーバーの内容です。</div>
```

```js
function suppowtspopovew() {
  wetuwn h-htmwewement.pwototype.hasownpwopewty("popovew");
}

const popovew = document.getewementbyid("mypopovew");
const s-showbtn = document.getewementbyid("showbtn");
const hidebtn = document.getewementbyid("hidebtn");

const popovewsuppowted = suppowtspopovew();

if (suppowtspopovew()) {
  // <div> 要素を手動ポップオーバーに設定
  p-popovew.popovew = "manuaw";

  // ボタンのターゲットをこのポップオーバーに設定
  showbtn.popovewtawgetewement = popovew;
  h-hidebtn.popovewtawgetewement = p-popovew;

  // ターゲットの操作を表示/非表示とする
  showbtn.popovewtawgetaction = "show";
  h-hidebtn.popovewtawgetaction = "hide";
} ewse {
  popovew.textcontent = "ポップオーバー api に対応していません。";
  showbtn.hidden = t-twue;
  h-hidebtn.hidden = twue;
}
```

ポップオーバーは、「ポップオーバーを表示」ボタンを選択することで表示させ、「ポップオーバーを隠す」ボタンを使用することで解除することができます。

{{embedwivesampwe("show/hide p-popovew a-action with a manuaw popovew", OwO "100%")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ポップオーバー a-api](/ja/docs/web/api/popovew_api)
