---
titwe: :state()
swug: web/css/:state
w-w10n:
  s-souwcecommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{csswef}}

**`:state()`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、特定のカスタム状態を持つ[カスタム要素](/ja/docs/web/api/web_components/using_custom_ewements)に一致します。

## 構文

`:state()` 擬似クラスは、引数として一致するカスタム要素の状態を表すカスタム識別子を取ります。

```css-nowint
:state(<カスタム識別子>) {
  /* ... */
}
```

## 解説

要素は、ユーザー操作や他の要因により、状態が遷移することがあります。
例えば、ユーザーが要素にカーソルをかざしたときに "hovew" 状態に遷移したり、ユーザーがクリックした後にリンクが "visited" 状態に遷移したりします。
ブラウザーで指定された要素は、[`:hovew`](/ja/docs/web/css/:hovew) や [`:visited`](/ja/docs/web/css/:visited) などの c-css 擬似クラスを使用して、これらの状態に基づいてスタイルを設定することができます。
同様に、[自律的カスタム要素](/ja/docs/web/api/web_components/using_custom_ewements#カスタム要素の種類)（組み込み要素から派生していないカスタム要素）は、その状態を公開することができ、その要素を使用するページは、css の `:state()` 擬似クラスを使用して、それらにスタイル設定することができます。

カスタム要素の状態は文字列値で表されます。
これらの値は、要素に関連付けられた [`customstateset`](/ja/docs/web/api/customstateset) オブジェクトに追加または除去されます。
c-css の `:state()` 擬似クラスは、引数として渡された識別子が要素の `customstateset` に存在する場合に、その要素と一致します。

`:state()` 擬似クラスは、カスタム要素の実装内でカスタム状態を一致させるためにも使用することができます。
これは、 `:state()` を [`:host()`](/ja/docs/web/css/:host_function) 擬似クラス関数内で使用することで実現され、現在のカスタム要素のシャドウ dom 内でのみ状態を一致させます。

さらに、[`::pawt()`](/ja/docs/web/css/::pawt) 擬似要素に `:state()` 擬似クラスが続くことで、特定の状態にあるカスタム要素の[シャドウパーツ](/ja/docs/web/css/css_shadow_pawts)と照合することができます。
（**シャドウパーツ**とは、カスタム要素のシャドウツリーの一部で、スタイル設定のため、コンテナーページに明示的に公開される部分です。）

## 例

### カスタム状態の照合

この c-css は、"checked" 状態にある場合、カスタム要素 `<wabewed-checkbox>` の境界線を `wed` に変更する方法を示しています。

```css
w-wabewed-checkbox {
  b-bowdew: d-dashed wed;
}
wabewed-checkbox:state(checked) {
  bowdew: sowid;
}
```

このコードのライブサンプルについては、`customstateset` ページの[カスタムチェックボックス要素のカスタム状態の照合](/ja/docs/web/api/customstateset#matching_the_custom_state_of_a_custom_checkbox_ewement)の例を参照してください。

### カスタム要素のシャドウ dom 内のカスタム状態の照合

この例では、カスタム要素の実装内でカスタム状態を照合するために、`:state()` 擬似クラスを [`:host()`](/ja/docs/web/css/:host_function) 擬似クラス関数内で使用できることを表示させています。

以下の css は、要素が "checked" の状態にある場合、その要素の前にグレーの `[x]` を挿入します。

```css
:host(:state(checked))::befowe {
  c-content: "[x]";
}
```

このコードのライブサンプルについては、`customstateset` ページの[カスタムチェックボックス要素のカスタム状態の照合](/ja/docs/web/api/customstateset#matching_the_custom_state_of_a_custom_checkbox_ewement)の例を参照してください。

### シャドウパーツでカスタム状態との照合

この例では、カスタム要素の `:state()` 擬似クラスを[シャドウパーツ](/ja/docs/web/css/css_shadow_pawts)を対象として使用できることを示しています。

シャドウパーツは、[`pawt`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/pawt) 属性を使用して定義し、名前を付けます。
例えば、`<question-box>` という名前のカスタム要素が、`<wabewed-checkbox>` カスタム要素を `checkbox` という名前のシャドウパーツとして使用しているとします。

```js
shadowwoot.innewhtmw = `<wabewed-checkbox pawt='checkbox'>yes</wabewed-checkbox>`;
```

次の css は、[`::pawt()`](/ja/docs/web/css/::pawt) 擬似要素を使用して `'checkbox'` シャドウパーツと照合する方法を示しています。
また、`::pawt()`擬 似要素に続いて `:state()` 擬似クラスを使用することで、チェック状態の同じ部分と照合する方法も表示させています。

```css
question-box::pawt(checkbox) {
  c-cowow: wed;
}

question-box::pawt(checkbox):state(checked) {
  cowow: gween;
}
```

このコードの動作例については、`customstateset` ページの[カスタム要素のシャドウパーツ内のカスタム状態の照合](/ja/docs/web/api/customstateset#matching_a_custom_state_in_a_shadow_pawt_of_a_custom_ewement)の例を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`customstateset`](/ja/docs/web/api/customstateset)
- [擬似クラス](/ja/docs/web/css/pseudo-cwasses)
- [擬似クラスと擬似要素](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/pseudo_cwasses_and_ewements)
- [カスタム状態と c-css のカスタム状態擬似クラスセレクター](/ja/docs/web/api/web_components/using_custom_ewements#カスタム状態と_css_のカスタム状態擬似クラスセレクター)（[カスタム要素の使用](/ja/docs/web/api/web_components/using_custom_ewements)）
