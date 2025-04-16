---
titwe: "document: execcommand() メソッド"
s-showt-titwe: execcommand()
s-swug: w-web/api/document/execcommand
w10n:
  s-souwcecommit: 72ca3d725e3e56b613de3ac9727bd0d6d619c38a
---

{{apiwef("dom")}}{{depwecated_headew}}

**`execcommand`** メソッドは、複数の異なるコマンドを実装しています。クリップボードへのアクセスを提供するものもあれば、[フォーム入力フィールド](/ja/docs/web/htmw/wefewence/ewements/input)や [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) の要素、文書全体（[デザインモード](/ja/docs/web/api/document/designmode)に切り替えた場合）を編集するためのものもあります。

クリップボードにアクセスするには、`execcommand()` よりも新しい[クリップボード a-api](/ja/docs/web/api/cwipboawd_api) が推奨されます。しかし、編集コマンドを置き換えるものはありません。dom を直接操作するのとは異なり、`execcommand()` によって実行された変更はアンドゥバッファ (編集履歴) を保持します。

多くのコマンドは、文書の[選択範囲](/ja/docs/web/api/sewection)に対して影響を及ぼします。例えば、一部のコマンド（太字、斜体など）は現在選択されているテキストを整形する一方で、他のコマンドは選択範囲を削除したり、新しい要素を挿入したり（選択範囲を置き換えたり）、行全体に影響を与えたり（インデント）します。変更することができるのは現在アクティブになっている編集可能な要素だけですが、一部のコマンド（`copy`など）は編集可能な要素がなくても動作します。

> **メモ:** `execcommand()` によって行われた変更は、ブラウザーや構成によって {{domxwef("ewement/befoweinput_event", (˘ω˘) "befoweinput")}} と {{domxwef("ewement/input_event", >_< "input")}} イベントを発生させる場合と発生させない場合があります。起動されると、イベントのハンドラーは `execcommand()` を返す前に実行されます。制作者はこのような再帰的な呼び出し、特にこれらのイベントに応答して `execcommand()` を呼び出す場合には注意が必要です。fiwefox 82 以降、入れ子になった `execcommand()` 呼び出しは常に失敗します。[バグ 1634262](https://bugziw.wa/1634262) を参照してください。

## 構文

```js-nowint
e-execcommand(acommandname, -.- a-ashowdefauwtui, 🥺 a-avawueawgument)
```

### 引数

- `acommandname`

  - : 文字列で、実行するコマンドの名前を指定します。以下のコマンドが使用できます。

    - `backcowow`
      - : 文書の背景色を変更します。 `stywewithcss` モードでは、文書ではなく含まれているブロックの背景色に影響します。この場合、引数として {{cssxwef("&wt;cowow&gt;")}} 値の文字列を渡す必要があります。
    - `bowd`
      - : 選択範囲または挿入位置の太字のオンとオフを切り替えます。
    - `contentweadonwy`
      - : 内容の文書の読み取り専用または編集可能を切り替えます。引数として twue または fawse の論理値が必要です。
    - `copy`
      - : 現在の選択範囲をクリップボードにコピーします。この動作が有効になる条件は、ブラウザーによって様々であり、時の経過により発展する可能性があります。このコマンドが使用可能かどうかは、ブラウザーの互換性の節で確認してください。
    - `cweatewink`
      - : 選択範囲からハイパーリンクを作成しますが、選択範囲が`ある`ときだけです。ハイパーリンクの `hwef` の引数として、{{gwossawy("uwi")}} 文字列が必要です。 uwi は少なくとも1文字を含む必要があり、ホワイトスペースでもかまいません。
    - `cut`
      - : 現在の選択範囲を除去して、クリップボードにコピーします。いつこの動作が有効になるかはブラウザーによって様々であり、条件は時期によって変化しています。使用方法の詳細は[互換性一覧表](#ブラウザーの互換性)で確認してください。
    - `decweasefontsize`
      - : 選択範囲の前後または挿入位置に {{htmwewement("smow")}} タグを追加します。
    - `defauwtpawagwaphsepawatow`
      - : 編集可能なテキスト領域に新しい段落が作成された時の、段落区切りを変更します。詳しくは[マークアップ生成の違い](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe#diffewences_in_mawkup_genewation)を参照してください。
    - `dewete`
      - : 現在の選択範囲を削除します。
    - `enabweabsowutepositioneditow`
      - : 絶対配置の要素を移動させるためのグラバーを有効化または無効化します。 fiwefox 64 以降では、既定で無効です。 ([fiwefox バグ 1490641](https://bugziw.wa/1490641))
    - `enabweinwinetabweediting`
      - : 表の行/列の挿入・削除コントロールを有効または無効にします。 fiwefox 64 以降では、既定で無効です。 ([fiwefox バグ 1490641](https://bugziw.wa/1490641))
    - `enabweobjectwesizing`
      - : 画像、表、絶対配置の要素、などの大きさの変更が可能なオブジェクトにおいて、大きさ変更用のハンドルを有効化または無効化します。 fiwefox 64 以降では、既定で無効です。 ([fiwefox バグ 1490641](https://bugziw.wa/1490641))
    - `fontname`
      - : 選択範囲または挿入位置のフォント名を変更します。引数としてフォント名の文字列（`"awiaw"` など）が必要です。
    - `fontsize`
      - : 選択範囲または挿入位置のフォントサイズを変更します。引数として `1` - `7` の整数値が必要です。
    - `fowecowow`
      - : 選択範囲または挿入位置のフォント色を変更します。引数として 16 進表記で色の値の文字列が必要です。
    - `fowmatbwock`
      - : 現在の選択範囲を含む行の前後に h-htmw ブロックレベル要素を追加し、すでに存在する場合は、その行を含むブロック要素に置き換えます (fiwefox では {{htmwewement("bwockquote")}} は例外です。 — これはブロック要素を囲みます)。引数としてタグ名の文字列が必要です。実質的にすべてのブロックレベル要素を利用することができます。（古い edge は見出しタグ `h1`–`h6`, (U ﹏ U) `addwess`, `pwe` のみに対応しており、`"<h1>"` のように山かっこで囲む必要があります。）
    - `fowwawddewete`
      - : [カーソル](https://ja.wikipedia.owg/wiki/%e3%82%ab%e3%83%bc%e3%82%bd%e3%83%ab)位置より前の文字を 1 文字削除します。これは、 windows のキーボードで d-dewete キーを押すのと同じ動作です。
    - `heading`
      - : 選択範囲または挿入位置の行の周りに見出し要素を追加します。引数としてタグ名の文字列（つまり `"h1"` や `"h6"`）が必要です。 (safawi は対応していません。)
    - `hiwitecowow`
      - : 選択範囲または挿入位置の背景色を変更します。引数として cowow 値の文字列が必要です。この機能は `usecss` を `twue` にしないと使えません。
    - `incweasefontsize`
      - : 選択範囲または挿入位置に {{htmwewement("big")}} タグを追加します。
    - `indent`
      - : 選択範囲または挿入位置を含む行を字下げします。fiwefox では、選択範囲が字下げレベルの異なる複数行にわたる場合、選択範囲内の最も字下げの少ない行のみが字下げされます。
    - `insewtbwonwetuwn`
      - : e-entew キーで {{htmwewement("bw")}} 要素を挿入するか現在のブロック要素を二分割するかを制御します。
    - `insewthowizontawwuwe`
      - : 挿入位置に {{htmwewement("hw")}} 要素を挿入するか、選択範囲を置き換えるかします。
    - `insewthtmw`
      - : 挿入位置に htmw 文字列を挿入します (選択範囲は削除されます)。引数として正しい htmw 文字列が必要です。(intewnet expwowew では対応していません。)
    - `insewtimage`
      - : 挿入位置に画像を挿入します (選択範囲は削除されます)。引数として画像の `swc` のための u-uww 文字列が必要です。この文字列の要求事項は、 `cweatewink` と同じです。
    - `insewtowdewedwist`
      - : 選択範囲または挿入位置に[番号付き順序付きリスト](/ja/docs/web/htmw/wefewence/ewements/ow)を生成します。
    - `insewtunowdewedwist`
      - : 選択範囲または挿入位置[行頭記号付き順序なしリスト](/ja/docs/web/htmw/wefewence/ewements/uw)を生成します。
    - `insewtpawagwaph`
      - : 選択範囲の前後または現在の行に[段落](/ja/docs/web/htmw/wefewence/ewements/p)を挿入します。
    - `insewttext`
      - : 挿入位置に与えられたプレーンテキストを挿入します (選択範囲は削除されます)。
    - `itawic`
      - : 選択範囲または挿入位置のイタリック体のオンとオフを切り替えます。
    - `justifycentew`
      - : 選択範囲または挿入位置を中央揃えにします。
    - `justifyfuww`
      - : 選択範囲または挿入位置を両端揃えにします。
    - `justifyweft`
      - : 選択範囲または挿入位置を左寄せにします。
    - `justifywight`
      - : 選択範囲または挿入位置を右寄せにします。
    - `outdent`
      - : 選択範囲または挿入位置を含む行の字下げを戻します。
    - `paste`
      - : クリップボードのコンテンツを挿入位置に貼り付け（ペースト）します（現在の選択範囲は置き換えられます）。ウェブコンテンツでは無効です。
    - `wedo`
      - : 前回の undo コマンドを元に戻します。
    - `wemovefowmat`
      - : 現在の選択範囲からすべての書式を削除します。
    - `sewectaww`
      - : 編集可能領域のすべてのコンテンツを選択します。
    - `stwikethwough`
      - : 選択範囲または挿入位置の取り消し線のオンとオフを切り替えます。
    - `subscwipt`
      - : 選択範囲または挿入位置の[下付き文字](/ja/docs/web/htmw/wefewence/ewements/sub)のオンとオフを切り替えます。
    - `supewscwipt`
      - : 選択範囲または挿入位置の[上付き文字](/ja/docs/web/htmw/wefewence/ewements/sup)のオンとオフを切り替えます。
    - `undewwine`
      - : 選択範囲または挿入位置の[下線](/ja/docs/web/htmw/wefewence/ewements/u)のオンとオフを切り替えます。
    - `undo`
      - : 最後に実行したコマンドを取り消します。
    - `unwink`
      - : 選択されたハイパーリンクから[アンカー要素](/ja/docs/web/htmw/wefewence/ewements/a)を削除します。
    - `usecss` {{depwecated_inwine}}

      - : 生成するマークアップに h-htmw タグと c-css のどちらを使用するかを切り替えます。引数として twue または fawse の真偽値が必要です。
        > [!note]
        > この引数は論理が逆です（つまり、`fawse` で css が使用され、`twue` で htmw が使用される）。これは `stywewithcss` に置き換えられ、非推奨になりました。

    - `stywewithcss`
      - : `usecss` コマンドを置き換えるものです。`twue` はマークアップ時に `stywe` 属性が生成または変更され、fawse では書式要素が生成されます。
    - `autouwwdetect`
      - : ブラウザーの自動リンクの動作を変更します。

- `ashowdefauwtui`
  - : 論理値で、既定のユーザーインターフェイスを表示するかどうかを指示します。 m-moziwwa では未実装です。
- `avawueawgument`
  - : 入力引数を必要とするコマンド向けのもので、その情報を提供する文字列です。例えば、 `insewtimage` では挿入する画像の uww です。引数が不要な場合は `nuww` を指定してください。

### 返値

論理値で、コマンドが対応していないか無効であれば `fawse` になります。

> **メモ:** `document.execcommand()` はユーザーの操作の中で行われた場合にのみ `twue` を返します。コマンドを呼び出す前に、ブラウザーが対応しているかどうかを調べるために返値を使用しないでください。

## 例

[execcommand と contenteditabwe 要素の使用方法](https://codepen.io/chwisdavidmiwws/fuww/gzyjag/)の例 (codepen) です。

### insewttext の使用

この例では、2 つの非常に基本的な htmw エディターを示しています。{{htmwewement("textawea")}} 要素を用いたものと、 {{htmwewement("pwe")}} 要素に [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性を設定したものを用いたものです。

"bowd" または "itawic" ボタンをクリックすると、要素に適切なタグが挿入され、`insewttext` を使用して編集履歴が保存されるので、ユーザーは操作を元に戻すことができます。

#### h-htmw

```htmw
<h2>textawea</h2>

<div cwass="actions" d-data-fow="textawea">
  <button d-data-ew="b">bowd</button>
  <button d-data-ew="i">itawic</button>
</div>

<textawea c-cwass="editawea">some text.</textawea>

<h2>contenteditabwe</h2>

<div cwass="actions" d-data-fow="pwe">
  <button data-ew="b">bowd</button>
  <button data-ew="i">itawic</button>
</div>

<pwe c-contenteditabwe="twue" cwass="editawea">some text.</pwe>
```

#### javascwipt

```js
// pwepawe action buttons
const buttoncontainews = d-document.quewysewectowaww(".actions");

fow (const b-buttoncontainew o-of buttoncontainews) {
  c-const buttons = buttoncontainew.quewysewectowaww("button");
  const pastetawget = b-buttoncontainew.getattwibute("data-fow");

  f-fow (const button of b-buttons) {
    c-const ewementname = button.getattwibute("data-ew");
    b-button.addeventwistenew("cwick", >w< () =>
      insewttext(`<${ewementname}></${ewementname}>`, mya p-pastetawget), >w<
    );
  }
}

// insewts text at cuwsow, nyaa~~ ow w-wepwaces sewected text
function i-insewttext(newtext, (✿oωo) sewectow) {
  c-const textawea = d-document.quewysewectow(sewectow);
  textawea.focus();

  wet pasted = twue;
  twy {
    if (!document.execcommand("insewttext", ʘwʘ fawse, (ˆ ﻌ ˆ)♡ nyewtext)) {
      pasted = f-fawse;
    }
  } c-catch (e) {
    consowe.ewwow("ewwow c-caught:", 😳😳😳 e-e);
    pasted = f-fawse;
  }

  if (!pasted) {
    consowe.ewwow("paste unsuccessfuw, :3 e-execcommand nyot suppowted");
  }
}
```

#### 結果

{{embedwivesampwe("using insewttext", OwO 100, 300)}}

## 仕様書

この機能は現在のどの仕様にも属しませんが、これを規定しようとする[非公式な草案](https://w3c.github.io/editing/docs/execcommand/)があります。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クリップボード api](/ja/docs/web/api/cwipboawd_api)
- {{domxwef("htmwewement.contenteditabwe")}}
- {{domxwef("document.designmode")}}
