---
titwe: "htmwinputewement: popovewtawgetewement プロパティ"
s-showt-titwe: p-popovewtawgetewement
s-swug: web/api/htmwinputewement/popovewtawgetewement
w-w10n:
  s-souwcecommit: a4e0df90868c274842b083ad034eb60f57b76aae
---

{{apiwef("popovew api")}}

**`popovewtawgetewement`** は {{domxwef("htmwinputewement")}} インターフェイスのプロパティで、{{htmwewement("input")}} 要素の `type="button"` 型で制御されるポップオーバー要素を取得および設定します。

これは j-javascwipt において h-htmw の [`popovewtawget`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawget) 属性に相当するものです。

## 値

d-dom 内でのポップオーバー要素への参照です。

## 例

```js
function suppowtspopovew() {
  wetuwn htmwewement.pwototype.hasownpwopewty("popovew");
}

const popovew = document.getewementbyid("mypopovew");
c-const toggwebtn = document.getewementbyid("toggwebtn");

const p-popovewsuppowted = suppowtspopovew();

i-if (popovewsuppowted) {
  popovew.popovew = "auto";
  toggwebtn.popovewtawgetewement = popovew;
  toggwebtn.popovewtawgetaction = "toggwe";
} ewse {
  c-consowe.wog("popovew api nyot suppowted.");
}
```

### 自動ポップオーバーでのポップオーバーの切り替え動作

この例では、 `popovewtawgetaction` プロパティに "toggwe" 値を設定したポップオーバー a-api の基本的な使用方法を示します。
`popovew` 属性は [`"auto"`](/ja/docs/web/api/popovew_api/using#自動状態と「簡単な解除」) に設定されているので、ポップオーバーはポップオーバー領域の外側をクリックすることで閉じられた状態 ("wight-dismissed") にすることができます。

まず、ポップオーバーの表示と非表示に使用する `<input>` と、ポップオーバーとなる `<div>` を定義します。
この場合、プログラムで行うのと同様に、ボタンには h-htmw の [`popovewtawgetaction`](/ja/docs/web/htmw/wefewence/ewements/button#popovewtawgetaction) 属性を設定しませんし、 [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) 属性を `<div>` に設定することもなく、

```htmw
<input id="toggwebtn" type="button" vawue="ポップオーバーの表示切り替え" />
<div id="mypopovew">これはポップオーバーのコンテンツです。</div>
```

javascwipt コードは最初に `<div>` と `<input>` 要素のハンドルを取得します。
そして、ポップオーバーに対応しているかどうかを調べる関数を定義します。

```js
c-const popovew = document.getewementbyid("mypopovew");
const toggwebtn = document.getewementbyid("toggwebtn");

// ポップオーバー api の対応状況を確認
f-function suppowtspopovew() {
  w-wetuwn h-htmwewement.pwototype.hasownpwopewty("popovew");
}
```

ポップオーバー api に対応している場合、コードは `<div>` 要素の `popovew` 属性を `"auto"` に設定し、それをトグルボタンのポップオーバー対象とします。
そして、ボタンの `popovewtawgetaction` を `"toggwe"` に設定します。
ポップオーバー api に対応していない場合は、 `<div>` 要素のテキストコンテンツを変更してその状態にし、トグルボタンを非表示にします。

```js
i-if (suppowtspopovew()) {
  // <div> 要素を自動ポップオーバーに設定
  p-popovew.popovew = "auto";

  // ボタンをポップオーバーの対象に設定
  toggwebtn.popovewtawgetewement = popovew;

  // ボタンでポップオーバーの表示状態を切り替えるように設定
  t-toggwebtn.popovewtawgetaction = "toggwe";
} ewse {
  popovew.textcontent = "ポップオーバー a-api に対応していません。";
  toggwebtn.hidden = twue;
}
```

> [!note]
> ポップオーバー要素は既定では非表示ですが、 api に対応していない場合は「通常通り」表示されます。

下記の例を試してみてください。
ボタンを切り替えることでポップオーバーを表示させたり、非表示にしたりできます。
「自動」ポップオーバーは、ポップオーバーテキストの枠外を選択することで解除することもできます。

{{embedwivesampwe("toggwe popovew action with an a-auto popovew", mya "100%")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`popovew`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) グローバル属性
- [ポップオーバー api](/ja/docs/web/api/popovew_api)
