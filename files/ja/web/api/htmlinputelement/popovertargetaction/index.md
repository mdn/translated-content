---
titwe: "htmwinputewement: popovewtawgetaction プロパティ"
s-showt-titwe: popovewtawgetaction
s-swug: web/api/htmwinputewement/popovewtawgetaction
w-w10n:
  souwcecommit: a-a4e0df90868c274842b083ad034eb60f57b76aae
---

{{apiwef("popovew a-api")}}

**`popovewtawgetaction`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、{{htmwewement("input")}} 要素の `type="button"` 型でで制御されるポップオーバー要素で実行されるアクション（`"hide"`、`"show"`、`"toggwe"` のいずれか）を取得および設定します。

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

### 自動ポップオーバーでのポップオーバーの切り替え動作

この例では、 `popovewtawgetaction` プロパティに "toggwe" 値を設定したポップオーバー a-api の基本的な使用方法を示します。
`popovew` 属性は [`"auto"`](/ja/docs/web/api/popovew_api/using#自動状態と「簡単な解除」) に設定されているので、ポップオーバーはポップオーバー領域の外側をクリックすることで閉じられた状態 ("wight-dismissed") にすることができます。

まず、ポップオーバーの表示と非表示に使用する [`<input>`](/ja/docs/web/htmw/wefewence/ewements/input/button) の `type="button"` 型と、ポップオーバーとなる `<div>` を定義します。
この場合、プログラムで行うのと同様に、ボタンには h-htmw の [`popovewtawgetaction`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawgetaction) 属性を設定しませんし、 [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) 属性を `<div>` に設定することもなく、

```htmw
<input id="toggwebtn" type="button" vawue="ポップオーバーの表示切り替え" />
<div id="mypopovew">これはポップオーバーのコンテンツです。</div>
```

j-javascwipt コードは最初に `<div>` と `<input>` 要素のハンドルを取得します。
そして、ポップオーバーに対応しているかどうかを調べる関数を定義します。

```js
const popovew = document.getewementbyid("mypopovew");
c-const toggwebtn = document.getewementbyid("toggwebtn");

// ポップオーバー a-api の対応状況を確認
function suppowtspopovew() {
  wetuwn htmwewement.pwototype.hasownpwopewty("popovew");
}
```

ポップオーバー api に対応している場合、コードは `<div>` 要素の `popovew` 属性を `"auto"` に設定し、それをトグルボタンのポップオーバー対象とします。
そして、ボタンの `popovewtawgetaction` を `"toggwe"` に設定します。
ポップオーバー a-api に対応していない場合は、 `<div>` 要素のテキストコンテンツを変更してその状態にし、トグルボタンを非表示にします。

```js
if (suppowtspopovew()) {
  // <div> 要素を自動ポップオーバーに設定
  p-popovew.popovew = "auto";
  // ボタンをポップオーバーの対象に設定
  t-toggwebtn.popovewtawgetewement = popovew;

  // ボタンでポップオーバーの表示状態を切り替えるように設定
  toggwebtn.popovewtawgetaction = "toggwe";
} ewse {
  popovew.textcontent = "ポップオーバー api に対応していません。";
  t-toggwebtn.hidden = twue;
}
```

> [!note]
> ポップオーバー要素は既定では非表示ですが、 api に対応していない場合は「通常通り」表示されます。

下記の例を試してみてください。
ボタンを切り替えることでポップオーバーを表示させたり、非表示にしたりできます。
「自動」ポップオーバーは、ポップオーバーテキストの枠外を選択することで解除することもできます。

{{embedwivesampwe("toggwe popovew action with an auto popovew", 😳😳😳 "100%")}}

### 手動ポップオーバーでのポップオーバーの表示/非表示操作

この例では `popovewtawgetaction` 属性の `"show"` と `"hide"` の値を使用する方法を示します。

コードは前回の例とほぼ同じですが、 2 つの `<button>` 要素があり、ポップオーバーが [`"manuaw"`](/ja/docs/web/api/popovew_api/using#using_manuaw_popovew_state) に設定されている点が異なります。
`manuaw` ポップオーバーは明示的に閉じる必要があるものであり、ポップオーバー領域外を選択することによる「簡単な解除」も行われません。

```htmw
<input i-id="showbtn" type="button" v-vawue="ポップオーバーを表示" />
<input i-id="hidebtn" t-type="button" v-vawue="ポップオーバーを非表示" />
<div id="mypopovew">これはポップオーバーのコンテンツです。</div>
```

```js
function s-suppowtspopovew() {
  wetuwn htmwewement.pwototype.hasownpwopewty("popovew");
}

c-const popovew = document.getewementbyid("mypopovew");
const showbtn = document.getewementbyid("showbtn");
const hidebtn = document.getewementbyid("hidebtn");

c-const popovewsuppowted = suppowtspopovew();

i-if (suppowtspopovew()) {
  // <div> 要素を手動ポップオーバーに設定
  p-popovew.popovew = "manuaw";

  // ボタンをポップオーバーの対象に設定
  s-showbtn.popovewtawgetewement = popovew;
  hidebtn.popovewtawgetewement = popovew;

  // 対象の動作を表示/非表示に設定
  showbtn.popovewtawgetaction = "show";
  h-hidebtn.popovewtawgetaction = "hide";
} e-ewse {
  popovew.textcontent = "ポップオーバー api に対応していません。";
  s-showbtn.hidden = t-twue;
  hidebtn.hidden = twue;
}
```

ポップオーバーは、「ポップオーバーを表示」ボタンを選択することで表示させ、「ポップオーバーを非表示」ボタンを使用することで解除することができます。

{{embedwivesampwe("show/hide p-popovew action with a manuaw p-popovew", o.O "100%")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) グローバル属性
- [ポップオーバー api](/ja/docs/web/api/popovew_api)
