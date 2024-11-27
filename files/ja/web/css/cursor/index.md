---
title: cursor
slug: Web/CSS/cursor
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

**`cursor`** は [CSS](/ja/docs/Web/CSS) のプロパティで、マウスポインターが要素の上にいるときに表示されるマウスカーソルを設定します。

カーソル設定により、テキスト選択、ヘルプやコンテキストメニューの有効化、コンテンツのコピー、表のリサイズなど、現在の位置で実行できるマウス操作をユーザーに知らせるべきです。
キーワードを使用してカーソルの種類を指定するか、使用する固有のアイコンを読み込むことができます（オプションで代替画像、そして最終的なフォールバックとしてキーワードが必須です）。

{{EmbedInteractiveExample("pages/css/cursor.html")}}

## 構文

```css
/* キーワード値 */
cursor: auto;
cursor: pointer;
/* … */
cursor: zoom-out;

/* URL とキーワードによる代替 */
cursor: url(hand.cur), pointer;

/* URL と座標とキーワードによる代替 */
cursor:
  url(cursor_1.png) 4 12,
  auto;
cursor:
  url(cursor_2.png) 2 2,
  pointer;

/* URL と代替 URL （一部は座標つき）、そして必須のキーワードによる代替 */
cursor:
  url(cursor_1.svg) 4 5,
  url(cursor_2.svg),
  /* …, */ url(cursor_n.cur) 5 5,
  progress;

/* グローバル値 */
cursor: inherit;
cursor: initial;
cursor: revert;
cursor: revert-layer;
cursor: unset;
```

`cursor` プロパティはゼロ個以上の `<url>` をカンマで区切ったものと、それに続く必須のキーワード値によって指定します。
それぞれの `<url>` は画像ファイルを指します。
ブラウザーは最初に指定された画像を読み込もうとし、ない場合は次に代替されて、いずれも画像が読み込めないとき (または指定がなかったとき) は、キーワード値に代替されます。

それぞれの `<url>` には空白で区切った 2 つの数値を続けることができ、カーソルのホットスポットを画像の左上隅からの相対位置、 `<x>` および `<y>` 座標で設定します。

### 値

- `<url>` {{optional_inline}}
  - : `url()` またはカンマ区切りのリスト `url(), url(), …` で画像の URL を指定します。複数の {{cssxref("url_value", "&lt;url&gt;")}} は、一部のカーソル画像形式に対応していなかった場合の代替として設定できます。
    代替リストの最後には、キーワード値のいずれか 1 つ以上を指定*しなければなりません*。
- `<x>`, `<y>` {{optional_inline}}

  - : 任意でホットスポットの x 座標と y 座標を指定します。これはカーソルが指している先の詳細な位置です。

    数値は画像ピクセル単位です。
    これらは画像の左上隅（`0 0` に相当）からの相対座標であり、カーソル画像の境界でクランプされます。
    これらの値が指定されていない場合、ファイル自体から読み込まれることがあり、そうでない場合は画像の左上隅が既定値となります。

- `keyword`

  - : キーワード値は指定する必要があり、使用するカーソルの種類、または指定したアイコンをすべて読み込めなかった場合に使用する代替カーソルのどちらか示します。

    利用可能なキーワードは以下の一覧表に掲載されています。カーソルなしを意味している `none` 以外には、カーソルがどのように表示されるかを示す画像があります。表の行にマウスカーソルを当てると、さまざまなカーソルキーワードの値が現在のブラウザーに与える影響を見ることができます。

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
            現在のコンテキストに基づき表示するカーソルをユーザーエージェントが決定します。例えば、テキストにカーソルを当てた時は <code>text</code> キーワードを指定した場合と同様です。
          </td>
        </tr>
        <tr style="cursor: default">
          <td><code>default</code></td>
          <td><img src="default.gif" alt="左上を向いた太い矢印" /></td>
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
          <td><img alt="メニューアイコンを少し隠す左上向きの太い矢印" src="context-menu.png" /></td>
          <td>コンテキストメニューが利用できることを示します。</td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img src="help.gif" alt="疑問符の横にある左上向きの太い矢印" /></td>
          <td>ヘルプが使用可能であることを示します。</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img src="pointer.gif" alt="人差し指を立てた右手" /></td>
          <td>
            カーソルがリンクを示すポインターになります。ふつうは指差す手の画像です。
          </td>
        </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img src="progress.gif" alt="太い矢印と砂時計" /></td>
          <td>
            プログラムがバックグラウンドでビジー状態であるが、（<code>wait</code> とは異なり）ユーザーがインターフェイスを操作可能であることを示します。
          </td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img src="wait.gif" alt="砂時計" /></td>
          <td>
            プログラムがビジー状態で、（<code>progress</code> とは異なり）ユーザーによる操作が不可能である状態を示します。
            よく砂時計や腕時計の画像が使われます。
          </td>
        </tr>
        <tr style="cursor: cell">
          <th rowspan="4" scope="row" style="cursor: auto">選択</th>
          <td><code>cell</code></td>
          <td><img src="cell.gif" alt="太いプラス記号" /></td>
          <td>表のセルまたは一連のセルが選択できることを示します。</td>
        </tr>
        <tr style="cursor: crosshair">
          <td><code>crosshair</code></td>
          <td><img src="crosshair.gif" alt="2 本の細い線で校正されたプラス記号" /></td>
          <td>十字カーソルで、多くの場合はビットマップ内の選択を示すために使用されます。</td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img class="default" src="text.gif" alt="垂直の I ビーム" /></td>
          <td>テキストを選択可能であることを示します。通常、I ビームが表示されます。</td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img alt="水平の I ビーム" src="vertical-text.gif" /></td>
          <td>
            縦書きのテキストを選択可能であることを示します。通常、水平の I ビームが表示されます。
          </td>
        </tr>
        <tr style="cursor: alias">
          <th rowspan="7" scope="row" style="cursor: auto">ドラッグ＆ドロップ</th>
          <td><code>alias</code></td>
          <td><img src="alias.gif" alt="左上向きの太い矢印が、右上向きのカーブした矢印が描かれた小さなフォルダーアイコンを部分的に隠しています"/>
          <td>エイリアスやショートカットが作成されることを示します。</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img class="default" src="copy.gif" alt="左上向きの太い矢印が、プラス記号の付いた小さなフォルダーアイコンを部分的に隠しています" /></td>
          <td>何かがコピーされることを示します。</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img src="move.gif" alt="2 本の細い線で作られたプラス記号。4 方向の外向きの小さな矢印" /></td>
          <td>何かが移動されることを示します。</td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td>
            <img src="no-drop.gif" alt="ポインターアイコンと不許可アイコン" />
          </td>
          <td>
            現在の位置にアイテムがドロップできないことを示します。<br /><a href="https://bugzil.la/275173">Firefox バグ 275173</a>: Windows および Mac OS X では、<code>no-drop</code> は <code>not-allowed</code> と同じです。
          </td>
        </tr>
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img alt="不許可アイコンで、丸に線を引いたものです。" src="not-allowed.gif" /></td>
          <td>要求された操作が受け付けられないことを示します。</td>
        </tr>
        <tr style="cursor: grab">
          <td><code>grab</code></td>
          <td><img class="default" src="grab.gif" alt="開ききった手のアイコン" /></td>
          <td>何かをグラブ (移動のためにドラッグ) することができることを示します。</td>
        </tr>
        <tr style="cursor: grabbing">
          <td><code>grabbing</code></td>
          <td><img class="default" src="grabbing.gif" alt="手の甲の閉じられた手のアイコン"/></td>
          <td>何かをグラブ (移動のためにドラッグ) していることを示します。</td>
        </tr>
        <tr style="cursor: all-scroll">
          <th rowspan="15" scope="row" style="cursor: auto">
            サイズ変更＆スクロール
          </th>
          <td><code>all-scroll</code></td>
          <td><img alt="中くらいのドットとそれを囲む 4 つの三角形のアイコン" src="all-scroll.gif" /></td>
          <td>
            何かが任意の方向にスクロール (パン) 可能であることを示します。<br /><a href="https://bugzil.la/275174">Firefox バグ 275174</a>: Windows では、 <code>all-scroll</code> は <code>move</code> 同じです。
          </td>
        </tr>
        <tr style="cursor: col-resize">
          <td><code>col-resize</code></td>
          <td><img alt="col-resize.gif" src="col-resize.gif" alt="2 本の細い並列垂直線に、左向きの小矢印と右向きの小矢印" /></td>
          <td>
            アイテムや列が水平方向にサイズ変更可能であることを示します。通常、左右を指す矢印とそれを仕切る垂直線が表示されます。
          </td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img src="row-resize.gif" alt="2 本の細い並列水平線に、上向きの小矢印と下向きの小矢印" /></td>
          <td>
            アイテムや行が垂直方向にサイズ変更可能であることを示します。通常、上下を指す矢印とそれを仕切る水平線が表示されます。
          </td>
        </tr>
        <tr style="cursor: n-resize">
          <td><code>n-resize</code></td>
          <td>
            <img
              alt="上向きの細長い矢印"
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
              alt="右向きの細長い矢印"
              src="e-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: s-resize">
          <td><code>s-resize</code></td>
          <td>
            <img
              alt="下向きの細長い矢印"
              src="s-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: w-resize">
          <td><code>w-resize</code></td>
          <td>
            <img
              alt="左向きの細長い矢印"
              src="w-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ne-resize">
          <td><code>ne-resize</code></td>
          <td>
            <img
              alt="右上向きの細長い矢印"
              src="ne-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: nw-resize">
          <td><code>nw-resize</code></td>
          <td>
            <img
              alt="左上向きの細長い矢印"
              src="nw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: se-resize">
          <td><code>se-resize</code></td>
          <td>
            <img
              alt="右下向きの細長い矢印"
              src="se-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: sw-resize">
          <td><code>sw-resize</code></td>
          <td>
            <img
              alt="左下向きの細長い矢印"
              src="sw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ew-resize">
          <td><code>ew-resize</code></td>
          <td><img alt="左右の細長い矢印" class="default" src="3-resize.gif" /></td>
          <td rowspan="4" style="cursor: auto">双方向へのサイズ変更が可能であることを示します。</td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img alt="上下の細長い矢印" class="default" src="6-resize.gif" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img alt="右上と左下の両方を指す細長い矢印" class="default" src="1-resize.gif" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img alt="左上と右下の両方を指す細長い矢印" class="default" src="4-resize.gif" /></td>
        </tr>
        <tr style="cursor: zoom-in">
          <th rowspan="2" scope="row" style="cursor: auto">拡大/縮小</th>
          <td><code>zoom-in</code></td>
          <td><img alt="虫眼鏡とプラス記号" class="default" src="zoom-in.gif" /></td>
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

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 使用上の注意

### アイコンの大きさの制限

仕様書では `cursor` の画像サイズは制限されていませんが、{{Glossary("user agent", "ユーザーエージェント")}}は一般的に誤用を防ぐために制限をしています。
例えば、Firefox と Chromium ではカーソル画像は既定では 128x128 ピクセルに制限されていますが、カーソル画像のサイズは 32x32 ピクセルに制限することを推奨します。ユーザーエージェントが対応している最大サイズよりも大きな画像を使用してカーソルを変更しても、通常は無視されます。

### 対応している画像ファイル形式

ユーザーエージェントは、 PNG ファイル、自然なサイズを持つ安全な静的モードの SVG v1.1 ファイル、他のプロパティの画像に対応しているアニメーション以外の画像ファイル形式に対応するよう、この仕様書は要求しています。
デスクトップブラウザーは `.cur` ファイル形式にも広く対応しています。

この仕様書はさらに、ユーザーエージェントは、他のプロパティの画像について対応している他のアニメーション画像ファイル形式とともに、自然なサイズを含む安全なアニメーションモードの SVG v1.1 ファイルも対応すべきであると示しています。
ユーザーエージェントは自然なサイズを持たない静的な SVG 画像とアニメーション SVG 画像の両方に対応することもできます。

### iPadOS

iPadOS はトラックパッドやマウスなどのポインター機器に対応しています。既定では、 iPad のカーソルは円形で表示され、ポインターに現れる値を変更する唯一の対応する値は `text` です。

### その他の注意

ツールバーの領域と交差するカーソルの変更は、なりすましを避けるために一般的にブロックされます。

## 例

### カーソルの種類の設定

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

- {{cssxref("pointer-events")}}
- {{cssxref("url_value", "&lt;url&gt;")}} 型
