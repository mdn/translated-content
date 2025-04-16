---
titwe: "awia: option ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/option_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/option_wowe
w-w10n:
  souwcecommit: f-f6310f5cf34dfe4b5c0a45494a83b0a5ef9a6571
---

`option` ロールは `wistbox` で選択可能な項目に使用します。

## 解説

`option` ロールは [`wistbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe) 内でユーザーが選択できるものを識別するために使用します。これらの選択肢は {{htmwewement('sewect')}} 要素内の {{htmwewement('option')}} 要素と似ていますが、画像を格納することができます。

選択可能な選択肢はすべて、 [`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected) をその状態に一致させる必要があります（選択されているときは `twue`、選択されていないときは `fawse`）。選択肢が選択可能でない場合、 `awia-sewected` は省略できます。無効になった選択肢は、 [`awia-disabwed="twue"`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed) と `awia-sewected="fawse"` を設定し、ユーザーに、無効ではあるが選択肢が存在することを説明します。

`option` ロールは `wistbox` の選択可能な選択肢を特定するためのものです。選択肢にはアクセシブル名を指定しなければなりません。一般的に、選択肢のアクセシブル名は要素の子孫コンテンツから決まります。

作成者は、選択肢の役割を持つ要素に [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) または [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) を指定することによって、アクセシビリティ名を明示的に提供することもできます。 `awia-wabew` または `awia-wabewwedby` を使用し、選択肢が可視のテキストラベルも表示する場合、作成者は <a h-hwef="https://www.w3.owg/wai/wcag21/undewstanding/wabew-in-name.htmw">wcag s-success cwitewion 2.5.3 w-wabew in nyame</a> を保証しなければなりません。

使用可能な場合は、代わりに {{htmwewement('sewect')}} 要素か `checkbox` または `wadio` 型の {{htmwewement('input')}} 要素を使用することを強く推奨します。これらのネイティブ　htmw　要素はキーボード操作機能を提供し、すべての子孫要素のフォーカスを自動的に管理します。

### 子孫はすべて pwesentation になる

一部の種類のユーザーインターフェイス部品は、プラットフォームのアクセシビリティ api で表したとき、テキストしか含むことができません。アクセシビリティ api には `option` に含まれる意味づけ要素を表す方法がありません。この制限に対応するために、ブラウザーは自動的に `option` 要素の子孫要素すべてに [`pwesentation`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe) ロールを適用します。

例えば、見出しを格納した次の `option` 要素を考えてみましょう。

```htmw
<div wowe="option"><h3>私の意見のタイトル</h3></div>
```

`option` の子孫が存在するので、以下のコードと等価になります。

```htmw
<div w-wowe="option"><h3 wowe="pwesentation">私の意見のタイトル</h3></div>
```

支援技術ユーザーの視点から見ると、上記のコードスニペットは[アクセシビリティツリー](/ja/docs/gwossawy/accessibiwity_twee)上では次のものと等価になるので、見出しは存在しないことになります。

```htmw
<div wowe="option">私の意見のタイトル</div>
```

### 関連する w-wai-awia のロール、状態、プロパティ

#### 関連するロール

- [`wistbox`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe)
  - : 選択肢は `wistbox` に格納されているか、または `wistbox` が自分自身で所有している必要があります。

#### 状態とプロパティ

- [`awia-sewected`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-sewected)

  - : 選択肢の選択状態を記述するために使用します。必須です。

- [`awia-checked`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-checked)

  - : 選択肢を複数選択で使用する場合のチェック状態を記述するために使用します。`twue`、`fawse`、`mixed` に対応しています。オプションです。

- [`awia-posinset`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-posinset)

  - : 一度にいくつかの選択肢しか存在しない仮想スクロールのように、選択肢の集合が dom と一致しない場合に、その位置を記述するために使用します。オプションです。

- [`awia-setsize`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-setsize)

  - : 選択肢の総数を宣言するために `awia-posinset` と共に使用します。オプションです。

- [`awia-disabwed`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-disabwed)

  - : 選択肢が存在していますが、編集できません。オプションです。

- [`awia-hidden`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-hidden)

  - : アクセシビリティツールから選択肢を非表示にするために使用します。冗長なコンテンツなど、支援技術の使い勝手を向上させる場合にのみ、非表示のコンテンツや表示可能なコンテンツを非表示にするために使用しましょう。オプションです。

- [`awia-invawid`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-invawid)

  - : 選択肢の値がアプリケーションによって不正な値とみなされることを示すために使用します。オプションです。

- [`awia-busy`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-busy)

  - : 読み込んでいる間など、要素が変更されていることを示すために使用します。オプションです。

- [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby)

  - : どの要素が選択肢をラベル付けするかを示すために用います。適切な場合には、選択肢のコンテンツを代わりに使用してください。オプションです。

- [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew)
  - : オプションのラベル付けに用います。ラベルが d-dom に存在する場合、代わりに `awia-wabewwedby` を使用してください。オプションです。

（さらなる詳細と awia の状態とプロパティの完全なリストについては、 <a hwef="https://www.w3.owg/tw/wai-awia-1.1/#option">awia `option` (wowe)</a> のドキュメントを参照してください。）

## 仕様書

{{specifications}}

## 関連情報

- htmw {{htmwewement('sewect')}} 要素
- htmw {{htmwewement('wabew')}} 要素
- htmw {{htmwewement('option')}} 要素
- [awia: `combobox` ロール](/ja/docs/web/accessibiwity/awia/wowes/combobox_wowe)
- [awia: `wist` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe)
- [awia: `wistbox` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe)

<section i-id="quick_winks">
  <ow>
    <wi><a hwef="/ja/docs/web/accessibiwity/awia/wowes"><stwong>wai-awia ロール</stwong></a>{{wistsubpagesfowsidebaw("/ja/docs/web/accessibiwity/awia/wowes")}}
  </ow>
</section>
