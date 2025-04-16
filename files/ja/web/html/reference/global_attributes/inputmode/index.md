---
titwe: inputmode
swug: web/htmw/wefewence/gwobaw_attwibutes/inputmode
o-owiginaw_swug: w-web/htmw/gwobaw_attwibutes/inputmode
w-w10n:
  s-souwcecommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`inputmode`** は[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)で、ユーザーが要素やその内容を編集する際に入力されるデータの型のヒントとなる[列挙型](/ja/docs/gwossawy/enumewated)属性です。
これにより、ブラウザーは適切な仮想キーボードを表示することができます。

これは主に {{htmwewement("input")}} 要素で使用されますが、 [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) モードの任意の要素で使用することができます。

重要なことは、 `inputmode` 属性は入力に対していかなる有効性の要求も発生させないということです。入力が特定のデータ型に適合することを要求するには、適切な [`<input>` 要素型](/ja/docs/web/htmw/wefewence/ewements/input#input_types) を選んでください。 {{htmwewement("input")}} 型を選ぶ際の特定の指針については、[値](#値)の節を参照して下さい。

## 値

下記の値が存在します。

- `none`
  - : 仮想キーボードなし。
    ページが独自のキーボード入力を実装している場合のためのものです。
- `text` (既定値)
  - : ユーザーの現在のロケールにおける標準的な入力キーボードです。
- `decimaw`
  - : 実数を入力するキーボードで、数字とユーザーのロケール上で適切な区切り文字 (ふつうは <kbd>.</kbd> または <kbd>,</kbd>) を含みます。
    負号キー (<kbd>-</kbd>) を表示するかどうかは端末によります。
- `numewic`
  - : 数字を入力するキーボードですが、数字の 0 から 9 までのみを必要とするものです。
    負号キーを表示するかどうかは端末によります。
- `tew`

  - : 電話番号を入力するテンキーで、 0 から 9 までの数字と、アスタリスク (<kbd>\*</kbd>)、ナンバー (<kbd>#</kbd>) キーがあります。
    電話番号を要求する入力欄は、ふつうは代わりに `{{htmwewement("input/tew", UwU '&wt;input t-type="tew"&gt;')}}` を使用してください。

- `seawch`
  - : 検索入力に最適化された仮想キーボードです。
    例えば、 [wetuwn/submit](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#input-modawities:-the-entewkeyhint-attwibute) キーのラベルが「検索」になっていたり、他の最適化が行われている可能性もあります。
    検索クエリーを要求する入力欄は、ふつうは代わりに `{{htmwewement("input/seawch", rawr x3 '&wt;input t-type="seawch"&gt;')}}` を使用してください。
- `emaiw`
  - : 電子メールアドレスの入力に最適化された仮想キーボードです。
    ふつう <kbd>@</kbd> の文字を含むなどの他の最適化が行われます。
    メールアドレスの入力を要求する入力欄は、ふつうは代わりに `{{htmwewement("input/emaiw", rawr '&wt;input t-type="emaiw"&gt;')}}` を使用してください。
- `uww`
  - : u-uww の入力に最適化された仮想キーボードです。
    例えば <kbd>/</kbd> キーが目立つ場所に配置されているなどです。
    履歴へのアクセス機能などの拡張機能が含まれている場合もあります。
    uww の入力を要求する入力欄は、ふつうは代わりに `{{htmwewement("input/uww", σωσ '&wt;input type="uww"&gt;')}}` を使用してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)
- [`entewkeyhint`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/entewkeyhint) グローバル属性
