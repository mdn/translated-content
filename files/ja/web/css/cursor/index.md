---
title: cursor
slug: Web/CSS/cursor
---

{{CSSRef}}

**`cursor`** は [CSS](/ja/docs/Web/CSS) のプロパティで、マウスポインターが要素の上にいるときに表示されるマウスカーソルの種類を設定します。

{{EmbedInteractiveExample("pages/css/cursor.html")}}

## 構文

```css
/* キーワード値 */
cursor: pointer;
cursor: auto;

/* URL とキーワードによる代替 */
cursor: url(hand.cur), pointer;

/* URL と座標とキーワードによる代替 */
cursor:
  url(cursor1.png) 4 12,
  auto;
cursor:
  url(cursor2.png) 2 2,
  pointer;

/* グローバル値 */
cursor: inherit;
cursor: initial;
cursor: revert;
cursor: unset;
```

`cursor` プロパティはゼロ個以上の `<url>` をカンマで区切ったものと、それに続く必須のキーワード値によって指定します。それぞれの `<url>` は画像ファイルを指します。ブラウザーは最初に指定された画像を読み込もうとし、ない場合は次に代替されて、いずれも画像が読み込めないとき (または指定がなかったとき) は、キーワード値に代替されます。

それぞれの `<url>` には空白で区切った 2 つの数値を続けることができ、`<x><y>` 座標を表します。これは画像の左上隅からの相対位置で、カーソルのホットスポットを設定します。

例えば、これは `<url>` 値を使用して 2 つの画像を指定し、`<x><y>` 座標を 2 つ目に設定し、どちらの画像も読み込めなかったときは `progress` キーワードで代替されるように指定しています。

```css
cursor:
  url(one.svg),
  url(two.svg) 5 5,
  progress;
```

### 値

- `<url>`
  `url(…)` の形式か、またはカンマ区切りのリスト `url(…), url(…), …` で画像の URL を指定します。複数の {{cssxref("url()")}} の指定は、前候補の画像形式がサポートされていなかった場合は代替として機能します。リストの最後には、キーワード値の何れかを一つ以上指定*しなければなりません*。詳細は [cursor プロパティにおける URL 値の使用](/ja/docs/Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property)を参照して下さい。
- `<x>` `<y>` {{experimental_inline}}
  - : 任意で x 座標と y 座標を指定します。2 つの 32 未満の非負数で、単位なしです。
- キーワード値

  - : _値の上にマウスを当てると、各項目の実際の表示を確認できます。_

    <table class="standard-table">
      <thead>
        <tr>
          <th scope="col">カテゴリー</th>
          <th scope="col">CSS 値</th>
          <th scope="col">例</th>
          <th scope="col">説明</th>
        </tr>
      </thead>
      <tbody>
        <tr style="cursor: auto">
          <th rowspan="3" scope="row">一般</th>
          <td><code>auto</code></td>
          <td></td>
          <td>
            現在のコンテキストに基づき表示するカーソルをユーザーエージェントが決定します。例えば、テキストにマウスオーバーした時には <code>text</code> キーワードを指定した場合と同様です。
          </td>
        </tr>
        <tr style="cursor: default">
          <td><code>default</code></td>
          <td><img src="default.gif" /></td>
          <td>プラットフォームに依存する既定のカーソルです。ふつうは矢印です。</td>
        </tr>
        <tr style="cursor: none">
          <td><code>none</code></td>
          <td></td>
          <td>カーソルを表示しません。</td>
        </tr>
        <tr style="cursor: context-menu">
          <th rowspan="5" scope="row" style="cursor: auto">リンクおよび状態</th>
          <td><code>context-menu</code></td>
          <td><img alt="context-menu.png" src="context-menu.png" /></td>
          <td>コンテキストメニューが利用できることを示します。</td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img src="help.gif" /></td>
          <td>ヘルプが使用可能であることを示します。</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img src="pointer.gif" /></td>
          <td>
            カーソルがリンクを示すポインターになります。ふつうは指差す手の画像です。
          </td>
          </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img src="progress.gif" /></td>
          <td>
            プログラムがバックグラウンドでビジー状態であるが、(<code>wait</code> とは異なり) ユーザーがインターフェイスを操作可能であることを示します。
          </td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img src="wait.gif" /></td>
          <td>
            プログラムがビジー状態で、(<code>progress</code> とは異なり) ユーザーによる操作が不可能である状態を示します。よく砂時計や腕時計の画像が使われます。
          </td>
        </tr>
        <tr style="cursor: cell">
          <th rowspan="4" scope="row" style="cursor: auto;">選択</th>
          <td><code>cell</code></td>
          <td><img src="cell.gif" /></td>
          <td>表のセルまたは一連のセルが選択できることを示します。</td>
        </tr>
        <tr style="cursor: crosshair">
          <td><code>crosshair</code></td>
          <td><img src="crosshair.gif" /></td>
          <td>十字カーソルで、多くの場合はビットマップ内の選択を示すために使用されます。</td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img class="default" src="text.gif" /></td>
          <td>テキストを選択可能であることを示します。通常、I ビームが表示されます。</td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img alt="vertical-text.gif" src="vertical-text.gif" /></td>
          <td>
            縦書きのテキストを選択可能であることを示します。通常、水平の I ビームが表示されます。
          </td>
        </tr>
        <tr style="cursor: alias">
          <th rowspan="7" scope="row" style="cursor: auto">ドラッグ＆ドロップ</th>
          <td><code>alias</code></td>
          <td><img src="alias.gif" /></td>
          <td>エイリアスやショートカットが作成されることを示します。</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img class="default" src="copy.gif" /></td>
          <td>何かがコピーされることを示します。</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img src="move.gif" /></td>
          <td>何かが移動されることを示します。</td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td>
            <img
              alt="no-drop.gif"
              class="lwrap"
              src="no-drop.gif"
              style="float: left"
            />
          </td>
          <td>
            現在の位置にアイテムがドロップできないことを示します。<br />[Firefox バグ 275173](https://bugzil.la/275173): Windows および Mac OS X では、<code>no-drop</code> は <code>not-allowed</code> と同じです。
          </td>
        </tr>
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img alt="not-allowed.gif" src="not-allowed.gif" /></td>
          <td>要求された操作が受け付けられないことを示します。</td>
        </tr>
        <tr style="cursor: grab">
          <td><code>grab</code></td>
          <td><img class="default" src="grab.gif" /></td>
          <td>何かをグラブ (移動のためにドラッグ) することができることを示します。</td>
        </tr>
        <tr style="cursor: grabbing">
          <td><code>grabbing</code></td>
          <td><img class="default" src="grabbing.gif" /></td>
          <td>何かをグラブ (移動のためにドラッグ) していることを示します。</td>
        </tr>
        <tr style="cursor: all-scroll">
          <th rowspan="15" scope="row" style="cursor: auto">
            サイズ変更＆スクロール
          </th>
          <td><code>all-scroll</code></td>
          <td><img alt="all-scroll.gif" src="all-scroll.gif" /></td>
          <td>
            何かが任意の方向にスクロール (パン) 可能であることを示します。<br />[Firefox バグ 275174](https://bugzil.la/275174): Windows では、 <code>all-scroll</code> は <code>move</code> 同じです。
          </td>
        </tr>
        <tr style="cursor: col-resize">
          <td><code>col-resize</code></td>
          <td><img alt="col-resize.gif" src="col-resize.gif" /></td>
          <td>
            アイテムや列が水平方向にサイズ変更可能であることを示します。通常、左右を指す矢印とそれを仕切る垂直線が表示されます。
          </td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img alt="row-resize.gif" src="row-resize.gif" /></td>
          <td>
            アイテムや行が垂直方向にサイズ変更可能であることを示します。通常、上下を指す矢印とそれを仕切る水平線が表示されます。
          </td>
        </tr>
        <tr style="cursor: n-resize">
          <td><code>n-resize</code></td>
          <td>
            <img
              alt="上方向へのサイズ変更カーソルの例"
              src="n-resize.gif"
              style="border-style: solid; border-width: 0px"
            />
          </td>
        <td rowspan="8" style="cursor: auto">辺が移動できることを表します。例えば、<code>se-resize</code> のカーソルはボックスの*南東* (south-east) の角から移動を開始した時に使われます。<br />環境によっては、等価の双方向のサイズ変更カーソルが表示されます。例えば、 <code>n-resize</code> と <code>s-resize</code> は <code>ns-resize</code> と同じになります。</td>
        </tr>
        <tr style="cursor: e-resize">
          <td><code>e-resize</code></td>
          <td>
            <img
              alt="右方向へのサイズ変更カーソルの例"
              src="e-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: s-resize">
          <td><code>s-resize</code></td>
          <td>
            <img
              alt="下方向へのサイズ変更カーソルの例"
              src="s-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: w-resize">
          <td><code>w-resize</code></td>
          <td>
            <img
              alt="左方向へのサイズ変更カーソルの例"
              src="w-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ne-resize">
          <td><code>ne-resize</code></td>
          <td>
            <img
              alt="右上方向へのサイズ変更カーソルの例"
              src="ne-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: nw-resize">
          <td><code>nw-resize</code></td>
          <td>
            <img
              alt="左上方向へのサイズ変更カーソルの例"
              src="nw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: se-resize">
          <td><code>se-resize</code></td>
          <td>
            <img
              alt="右下方向へのサイズ変更カーソルの例"
              src="se-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: sw-resize">
          <td><code>sw-resize</code></td>
          <td>
            <img
              alt="左下方向へのサイズ変更カーソルの例"
              src="sw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ew-resize">
          <td><code>ew-resize</code></td>
          <td><img alt="3-resize.gif" class="default" src="3-resize.gif" /></td>
          <td rowspan="4" style="cursor: auto">双方向へのサイズ変更が可能であることを示します。</td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img alt="6-resize.gif" class="default" src="6-resize.gif" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img alt="1-resize.gif" class="default" src="1-resize.gif" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img alt="4-resize.gif" class="default" src="4-resize.gif" /></td>
        </tr>
        <tr style="cursor: zoom-in">
          <th rowspan="2" scope="row" style="cursor: auto">拡大/縮小</th>
          <td><code>zoom-in</code></td>
          <td><img alt="zoom-in.gif" class="default" src="zoom-in.gif" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>拡大/縮小が可能であることを示します。</p>
          </td>
        </tr>
        <tr style="cursor: zoom-out">
          <td><code>zoom-out</code></td>
          <td><img alt="zoom-out.gif" class="default" src="zoom-out.gif" /></td>
        </tr>
      </tbody>
    </table>

## 使用上の注意

仕様書では `cursor` について寸法の制限は定義されていませんが、それぞれの{{Glossary("user agent", "ユーザーエージェント")}}には制限がある場合があります。ブラウザーが対応している寸法の範囲を超えた画像を使用してカーソルを変更しようとすると、一般的には単に無視されます。

カーソルの寸法の制限に関するメモは、[ブラウザーの互換性](#browser_compatibility)の表をチェックしてください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="Setting_cursor_types">カーソルの種類の設定</h3>

```css
.foo {
  cursor: crosshair;
}

.bar {
  cursor: zoom-in;
}

/* URL を使用する場合は、代替のキーワード値が必要です。 */
.baz {
  cursor: url("hyper.cur"), auto;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [cursor プロパティにおける URL 値の使用](/ja/docs/Web/CSS/CSS_Basic_User_Interface/Using_URL_values_for_the_cursor_property)
- {{cssxref("pointer-events")}}
- {{cssxref("url()", "url()")}} 関数
