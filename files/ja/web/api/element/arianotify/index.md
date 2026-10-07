---
title: "Element: ariaNotify() メソッド"
short-title: ariaNotify()
slug: Web/API/Element/ariaNotify
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{ApiRef("DOM")}}

{{domxref("Element")}} インターフェイスの **`ariaNotify()`** メソッドは、{{glossary("screen reader", "スクリーンリーダー")}} によって読み上げられる文字列をキューに追加します。

## 構文

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### 引数

- `announcement`
  - : 読み上げるテキストを指定する文字列。
- `options` {{optional_inline}}
  - : 以下のプロパティを含むオプションオブジェクトです。
    - `priority`
      - : 読み上げの優先度を指定する列挙値です。
        指定できる値は以下のとおりです。
        - `normal`
          - : 読み上げは通常の優先度を持ちます。
            スクリーンリーダーが現在行っている読み上げの後に読み上げられます。
            これが既定値です。
        - `high`
          - : 読み上げは高い優先度を持ちます。
            スクリーンリーダーが現在行っている読み上げに割り込んで、即座に読み上げられます。

### 返値

なし ({{jsxref("undefined")}})。

## 解説

**`ariaNotify()`** メソッドは、プログラムからスクリーンリーダーの読み上げを発生させるために使用できます。このメソッドは [ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) と似た機能を提供しますが、いくつかの利点があります。

- ライブリージョンは DOM の変更後にしか読み上げを行えませんが、`ariaNotify()` の読み上げはいつでも発生させられます。
- ライブリージョンの読み上げは変更された DOM ノードの更新後の内容を読み上げますが、`ariaNotify()` の読み上げ内容は DOM の内容とは独立して定義できます。

開発者は、ライブリージョンが設定された非表示の DOM ノードを用意し、読み上げたい内容でその内容を更新するという方法で、ライブリージョンの制限を回避することがよくあります。これは非効率的でエラーが起きやすく、`ariaNotify()` はこのような問題を避ける手段を提供します。

一部のスクリーンリーダーは複数の `ariaNotify()` の読み上げを順番に読み上げますが、これはすべてのスクリーンリーダーやプラットフォームで保証されるものではありません。通常は、直近の読み上げのみが発声されます。複数の読み上げを一つにまとめる方が信頼性が高くなります。

例えば、以下の呼び出しは、

```js
elemRef.ariaNotify("Hello there.");
elemRef.ariaNotify("The time is now 8 o'clock.");
```

次のようにまとめたほうがよいでしょう。

```js
elemRef.ariaNotify("Hello there. The time is now 8 o'clock.");
```

`ariaNotify()` の呼び出しは DOM 内のどの要素に対しても発生させられますが、ブラウザーがアクセシビリティ上「意味のある」要素とみなさず、アクセシビリティツリーの構築時に無視する要素は例外です。具体的にどの要素が無視されるかはブラウザーによって異なりますが、一般的には {{htmlelement("html")}} 要素や {{htmlelement("body")}} 要素のような、意味的な価値がほとんど、あるいはまったくないコンテナー要素が含まれます。

`ariaNotify()` の読み上げには {{glossary("transient activation", "Transient activation")}} は必要ありません。ユーザー体験を損なわないよう、スクリーンリーダーの利用者に対して通知を送りすぎないように注意してください。

### 読み上げの優先度

`priority: high` が設定された `ariaNotify()` の読み上げは、`priority: normal` が設定された `ariaNotify()` の読み上げよりも先に読み上げられます。

`ariaNotify()` の読み上げは、おおよそ以下のように ARIA ライブリージョンの読み上げに相当します。

- `ariaNotify()` の `priority: high`: `aria-live="assertive"`
- `ariaNotify()` の `priority: normal`: `aria-live="polite"`

ただし、`aria-live` による読み上げは `ariaNotify()` の読み上げよりも優先されます。

### 言語の選択

スクリーンリーダーは、要素の [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性、要素に `lang` 属性が指定されていない場合は最も近い祖先要素に設定されている `lang` 属性で指定された言語に基づいて、`ariaNotify()` の読み上げに使用する適切な音声（アクセントや発音など）を選択します。HTML 内に `lang` 属性が指定されていない場合は、ユーザーエージェントの既定の言語が使用されます。

### パーミッションポリシーとの統合

文書や {{htmlelement("iframe")}} における `ariaNotify()` の使用は、{{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy) によって制御できます。

具体的には、定義されたポリシーが使用をブロックしている場合、`ariaNotify()` で作成された読み上げはすべて黙って失敗します（送信されません）。

## 例

より本格的な例については、{{domxref("Document.ariaNotify()")}} のページにある [アクセシブルな買い物リストの例](/ja/docs/Web/API/Document/ariaNotify#アクセシブルな買い物リストの例) を参照してください。この例は、`Document` オブジェクトの代わりに要素の参照に対して `ariaNotify()` を呼び出しても、まったく同じように動作します。

### `ariaNotify()` の基本的な使用方法

この例には、クリックするとそれ自体に対してスクリーンリーダーの読み上げを発生させる {{htmlelement("button")}} が含まれています。

```html live-sample___basic-arianotify
<button>Press</button>
```

```css hidden live-sample___basic-arianotify
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```js live-sample___basic-arianotify
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("button").ariaNotify("You ain't seen me, right?");
});
```

#### 結果

出力は以下のようになります。

{{EmbedLiveSample("basic-arianotify", "100%", 60, , , , "aria-notify")}}

スクリーンリーダーを起動してからボタンを押してみてください。スクリーンリーダーが "You ain't seen me, right?" と読み上げるはずです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.ariaNotify()")}}
- [ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)
