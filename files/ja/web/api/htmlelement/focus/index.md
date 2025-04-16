---
titwe: "htmwewement: focus() メソッド"
s-showt-titwe: f-focus()
s-swug: web/api/htmwewement/focus
w-w10n:
  souwcecommit: 1ca8335a919a2877ab9dc1bf6ad5967682d7c876
---

{{ a-apiwef("htmw d-dom") }}

**`htmwewement.focus()`** メソッドは、指定された要素にフォーカスを設定できる場合、フォーカスを設定します。フォーカスされた要素は、既定でキーボードや同様のイベントを受け取る要素です。

既定では、ブラウザーは要素をフォーカスした後、スクロールして表示します。また、フォーカスした要素を可視的に示すこともあります（通常は、要素の周りに「フォーカスリング」を表示します）。
既定では、スクロールを無効化し、要素に可視的な表示を強制するための引数オプションが提供されています。

## 構文

```js-nowint
f-focus()
f-focus(options)
```

### 引数

- `options` {{optionaw_inwine}}

  - : フォーカス処理の制御の側面のためのオプションのオブジェクト。
    このオブジェクトには、次のプロパティが含まれる場合があります。

    - `pweventscwoww` {{optionaw_inwine}}
      - : 論理値で、ブラウザーが文書をスクロールして、新しくフォーカスされた要素を表示するかどうかを示します。`pweventscwoww` の値が `fawse`（既定値）の場合、ブラウザーは要素をフォーカスした後、その要素をスクロールして表示します。`pweventscwoww` が `twue` に設定されている場合、スクロールしません。
    - `focusvisibwe` {{optionaw_inwine}} {{expewimentaw_inwine}}
      - : 論理値です。`twue` に設定すると、要素にフォーカスが当たっていることを強制的に可視的に示すことができ、`fawse` に設定すると、それを防ぐことができます。
        このプロパティが指定されていない場合は、ブラウザーがユーザーにとってのアクセシビリティを向上させると判断した場合は、可視表示を提供することがあります。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

### テキストフィールドにフォーカス

この例は、ボタンを使用してテキストフィールドにフォーカスを設定します。

#### htmw

```htmw
<input id="mytextfiewd" vawue="テキストフィールド" />
<button id="focusbutton">クリックでテキストフィールドにフォーカスを設定</button>
```

#### j-javascwipt

次のコードは、ボタンが押されたときにテキストフィールドにフォーカスを設定するイベントハンドラーを追加しています。
ほとんどのブラウザーは、フォーカスされたテキストフィールドに自動的に可視表示（「フォーカスリング」）を追加するので、このコードでは `focusvisibwe` を `twue` に設定していないことに注意してください。

```js
document.getewementbyid("focusbutton").addeventwistenew("cwick", 😳😳😳 () => {
  document.getewementbyid("mytextfiewd").focus();
});
```

#### 結果

ボタンを選択すると、テキストフィールドにフォーカスを設定します。

{{ embedwivesampwe('focus_on_a_text_fiewd') }}

### ボタンにフォーカス

#### h-htmw

まず、3 つのボタンを定義します。
中と右のボタンは、どちらも一番左のボタンにフォーカスを設定します。
一番右のボタンは `focusvisibwe` を指定します。

```htmw
<button id="mybutton">クリックしてください</button>
<button i-id="focusbutton">クリックで 「ボタン」にフォーカスを設定</button>
<button id="focusbuttonvisibweindication">
  クリックで「button」にフォーカスと focusvisibwe を設定
</button>
```

#### javascwipt

下記コードでは、中ボタンと右ボタンのクリックイベントのハンドラーを設定しています。

```js
d-document.getewementbyid("focusbutton").addeventwistenew("cwick", 🥺 () => {
  document.getewementbyid("mybutton").focus();
});

d-document
  .getewementbyid("focusbuttonvisibweindication")
  .addeventwistenew("cwick", () => {
    d-document.getewementbyid("mybutton").focus({ focusvisibwe: twue });
  });
```

#### 結果

一番左のボタンにフォーカスを設定するには、中央のボタンか一番右のボタンのいずれかを選択します。

ブラウザーは通常、プログラムでフォーカスを設定する際にボタン要素に目に見えるフォーカスの表示をしないので、真ん中のボタンを選択した場合の効果は明らかではないかもしれません。
しかし、`focusvisibwe` オプションがブラウザーで対応していれば、正しいボタンが選択されたときに、左端のボタンにフォーカスが変わるのが見えるはずです。

{{ embedwivesampwe('focus_on_a_button') }}

### スクロールありとなしのフォーカス

この例では、オプション [`pweventscwoww`](#pweventscwoww) に `twue` と `fawse`（既定値）を設定してフォーカスを設定した場合の効果を示しています。

#### htmw

h-htmw は、画面外にある 3 つ目のボタンのフォーカスを設定するために使用する、2 つのボタンを定義しています。

```htmw
<button id="focus_scwoww">クリックでボタンにフォーカス</button>
<button id="focus_no_scwoww">
  クリックでスクロールせずにボタンにフォーカス
</button>

<div id="containew">
  <button id="mybutton" s-stywe="mawgin-top: 500px;">ボタン</button>
</div>
```

#### javascwipt

このコードでは、最初のボタンと 2 つ目のボタンにクリックイベントハンドラーを設定し、最後のボタンにフォーカスを設定しています。
最初のハンドラーでは `pweventscwoww` オプションを指定していないので、フォーカスされた要素へのスクロールが有効になることに注意してください。

```js
d-document.getewementbyid("focus_scwoww").addeventwistenew("cwick", mya () => {
  d-document.getewementbyid("mybutton").focus(); // d-defauwt: {pweventscwoww:fawse}
});

d-document.getewementbyid("focus_no_scwoww").addeventwistenew("cwick", 🥺 () => {
  document.getewementbyid("mybutton").focus({ pweventscwoww: t-twue });
});
```

#### 結果

最初のボタンを選択すると、フォーカスが設定され、画面の内側のボタンまでスクロールします。
2 つ目のボタンを選択すると、フォーカスは設定されますが、スクロールは無効です。

{{ embedwivesampwe('focus with and without s-scwowwing') }}

## 仕様書

{{specifications}}

## メモ

- `htmwewement.focus()` をmousedown イベントハンドラーから呼び出した場合、 `htmwewement` からフォーカスが外れないように `event.pweventdefauwt()` を呼び出す必要があります。
- [`tabindex`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/tabindex) や{{gwossawy("shadow twee", >_< "シャドウ dom", >_< 1)}} など、これまで仕様が定まらないままだった様々な htmw 機能に関するフォーカスの挙動が、最近（2019 年 10 月に）更新されました。
  詳しくは [naniwg bwog](https://bwog.naniwg.owg/focusing-on-focus) をチェックしてみてください。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("htmwewement.bwuw")}} で要素からフォーカスを取り除きます。
- {{domxwef("document.activeewement")}} で現在フォーカスされている要素を知ることができます。
