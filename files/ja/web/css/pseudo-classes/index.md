---
title: 擬似クラス
slug: Web/CSS/Pseudo-classes
l10n:
  sourceCommit: 462dc4b2f5c9eaef94d21da0f37ec3bf977c5592
---

[CSS](/ja/docs/Web/CSS) の**擬似クラス** (_pseudo-class_) は、セレクターに付加するキーワードであり、選択された要素の特定の状態についてスタイル設定することができます。例えば、擬似クラス {{CSSxRef(":hover")}} を使用すると、ユーザーのポインターがボタンの上に乗ったときにボタンを選択し、この選択されたボタンをスタイル設定することができます。

```css
/* ユーザーのポインターが乗っているすべてのボタン */
button:hover {
  color: blue;
}
```

擬似クラスはコロン (`:`) の後に擬似クラス名が続きます（例えば `:hover`）。関数形式の擬似クラスは、引数を定義するために括弧のペアも持ちます（例えば `:dir()`）。擬似クラスが装着されている要素（例えば `button:hover` の場合は `button`）はアンカー要素として定義されます。

擬似クラスにより、文書ツリーのコンテンツに関するものだけでなく、閲覧履歴（例えば {{CSSxRef(":visited")}}）、内容物の状態（例えばフォーム要素における {{CSSxRef(":checked")}}）、マウスポインターの位置（例えばマウスポインターが要素上にあるかを知ることができる {{CSSxRef(":hover")}}）といった外的要因との関係についてスタイルを適用することができるようになります。

> [!NOTE]
> 擬似クラスとは対照的に、[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)は要素の*特定の部分*にスタイルを適用するために使います。

## 要素擬似クラス

これらの擬似クラスは、要素のコアアイデンティティに関連しています。

- {{CSSxRef(":defined")}}
  - : 定義されている要素と一致します。

## 表示状態擬似クラス

これらの擬似クラスにより、表示状態に基づいて要素を選択することができます。

- {{CSSxRef(":open")}}
  - : 開いているか閉じているかの状態を持つ要素で、現在開いている要素と一致します。
- {{CSSxRef(":popover-open")}}
  - : 現在表示状態にあるポップオーバー要素と一致します。
- {{CSSxRef(":modal")}}
  - : 操作が終了するまで、その外の要素への操作をすべて排除する状態にある要素に一致します。
- {{CSSxRef(":fullscreen")}}
  - : 現在全画面モードの要素に一致します。
- {{CSSxRef(":picture-in-picture")}}
  - : 現在ピクチャインピクチャモードの要素に一致します。

## 入力擬似クラス

これらの擬似クラスはフォーム要素に関連し、 HTML 属性を操作する前後のフィールドの状態に基づいて要素を選択できるようにします。

- {{CSSxRef(":enabled")}}
  - : ユーザーインターフェイス要素が有効な状態であることを表します。
- {{CSSxRef(":disabled")}}
  - : ユーザーインターフェイス要素が無効な状態であることを表します。
- {{CSSxRef(":read-only")}}
  - : ユーザーが変更できない要素を表します。
- {{CSSxRef(":read-write")}}
  - : ユーザーが編集することができる要素を表します。
- {{CSSxRef(":placeholder-shown")}}
  - : プレイスホルダーテキスト、例えば `placeholder` 属性のものが表示されている{{htmlelement("input")}} および {{htmlelement("textarea")}} 要素に一致します。
- {{CSSxRef(":autofill")}}
  - : {{htmlelement("input")}} をブラウザーが自動補完した場合に一致します。
- {{CSSxRef(":default")}}
  - : 一連の要素のうち、1 つ以上の既定の UI 要素に一致します。
- {{CSSxRef(":checked")}}
  - : チェックボックスやラジオボタンなどがオンになっている要素に一致します。
- {{CSSxRef(":indeterminate")}}
  - : UI 要素が不定状態になっている場合に一致します。
- {{CSSxRef(":blank")}}
  - : ユーザーが入力する要素が空である場合に一致します。空文字列が入っているか、その他の空入力であることを表します。
- {{CSSxRef(":valid")}}
  - : 内容が妥当である要素に一致します。例えば、 'email' 型の入力要素で、有効なフォームのメールアドレスを格納したもの、またはコントロールが必須ではない場合は空の値を格納したものです。
- {{CSSxRef(":invalid")}}
  - : 無効な内容を持つ要素に一致します。例えば、'email' 型の入力要素に名前が入力されている場合です。
- {{CSSxRef(":in-range")}}
  - : スライダーコントロールなどの範囲制限のある要素で、選択した値が許容範囲内にある場合に適用されます。
- {{CSSxRef(":out-of-range")}}
  - : スライダーコントロールなどの範囲制限のある要素で、選択した値が許容範囲外の場合に適用されます。
- {{CSSxRef(":required")}}
  - : フォーム要素が必須項目である場合に一致します。
- {{CSSxRef(":optional")}}
  - : フォーム要素が省略可能である場合に一致します。
- {{CSSxRef(":user-valid")}}
  - : 正しく入力された要素を表します。ただし、ユーザーがその要素を操作した場合のみです。
- {{CSSxRef(":user-invalid")}}
  - : 不正確な値が入力されている要素を表します。ただし、ユーザーがその要素を操作した場合のみです。

## 言語擬似クラス

これらの擬似クラスは、文書の言語を反映し、言語や書字方向に基づいた要素を選択できるようにします。

- {{CSSxRef(":dir", ":dir()")}}
  - : 書字方向擬似クラスは、文書の言語によって決定される書字方向に基づいて要素を選択します。
- {{CSSxRef(":lang", ":lang()")}}
  - : 内容物の言語に基づいて要素を選択します。

## 位置擬似クラス

これらの擬似クラスは、リンクと、現在の文書内の対象となる要素に関連しています。

- {{CSSxRef(":any-link")}}
  - : 要素が {{CSSxRef(":link")}} または {{CSSxRef(":visited")}} のいずれかに一致する場合に一致します。
- {{CSSxRef(":link")}}
  - : まだ訪問していないリンクに一致します。
- {{CSSxRef(":visited")}}
  - : 訪問したことのあるリンクに一致します。
- {{CSSxRef(":local-link")}}
  - : 絶対 URL が対象 URL と同じリンク、例えば同じページへのアンカーリンクである場合に一致します。
- {{CSSxRef(":target")}}
  - : 文書の URL の対象である要素に一致します。
- {{CSSxRef(":target-within")}}
  - : 文書の URL の対象である要素だけでなく、文書 URL の対象である子孫を持つ要素にも一致します。
- {{CSSxRef(":scope")}}
  - : セレクターを照合するための参照点となる要素を表します。

## リソース状態擬似クラス

これらの擬似クラスは、動画など再生と表現できる状態にあるメディアに適用されます。

- {{CSSxRef(":playing")}}
  - : その要素が再生可能なメディア要素であり、再生中であることを表します。
- {{CSSxRef(":paused")}}
  - : その要素が再生可能なメディア要素であり、一時停止中であることを表します。
- {{CSSxRef(":seeking")}}
  - : 再生可能な要素で、メディアリソース内で現在再生位置を探しているものを表します。
- {{CSSxRef(":buffering")}}
  - : 再生可能な要素で、再生中であるが、メディアリソースのダウンロード中であるため一時的に停止しているものを表します。
- {{CSSxRef(":stalled")}}
  - : 再生可能な要素で、再生中であるが、メディアリソースをダウンロードできないために停止しているものを表します。
- {{CSSxRef(":muted")}}
  - : 音を発する要素がミュートされていることを表します。
- {{CSSxRef(":volume-locked")}}
  - : 音を発する要素で、音量がブラウザーによって固定されているものを表します。

## 時間軸擬似クラス

これらの擬似クラスは、 [WebVTT](/ja/docs/Web/API/WebVTT_API) キャプショントラックのようなタイミングを持つものを閲覧する際に適用されるものです。

- {{CSSxRef(":current")}}
  - : 表示されている要素またはその祖先を表します。
- {{CSSxRef(":past")}}
  - : 完全に {{CSSxRef(":current")}} 要素の前に発生する要素を表します。
- {{CSSxRef(":future")}}
  - : 完全に {{CSSxRef(":current")}} 要素の後に発生する要素を表します。

## ツリー構造擬似クラス

これらの擬似クラスは、文書ツリー内の要素の位置に関するものです。

- {{CSSxRef(":root")}}
  - : 文書のルートである要素を表します。 HTML では、ふつうは `<html>` 要素です。
- {{CSSxRef(":empty")}}
  - : ホワイトスペース文字以外に子がない要素を表します。
- {{CSSxRef(":nth-child", ":nth-child()")}}
  - : `An+B` の表記を用いて、兄弟要素のリストから要素を選択します。
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
  - : `An+B` の表記を用いて、兄弟要素のリストから、リストの末尾から逆方向に数えて要素を選択します。
- {{CSSxRef(":first-child")}}
  - : 兄弟のうちの最初の要素に一致します。
- {{CSSxRef(":last-child")}}
  - : 兄弟のうちの最後の要素に一致します。
- {{CSSxRef(":only-child")}}
  - : 要素に兄弟がいない場合に一致します。例えば、リスト内に他のリスト項目が存在しないリスト項目が該当します。
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}
  - : `An+B` の表記を用いて、兄弟要素のリストから、特定の型に一致する要素を選択します。
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
  - : `An+B` の表記を用いて、兄弟要素のリストから、リストの末尾から逆方向に数えて特定の型に一致する要素を選択します。
- {{CSSxRef(":first-of-type")}}
  - : 兄弟のうちの最初の特定の型に一致する要素に一致します。
- {{CSSxRef(":last-of-type")}}
  - : 兄弟のうちの最後の特定の型に一致する要素に一致します。
- {{CSSxRef(":only-of-type")}}
  - : 指定された型セレクターで兄弟要素がない要素に一致します。

## シャドウ構造擬似クラス

これらの擬似クラスは、シャドウ DOM に関連しています。

- {{CSSxRef(":host")}}
  - : シャドウツリーのシャドウホストに一致します。
- {{CSSxRef(":host_function", ":host()")}}
  - : {{CSSxRef(":host")}} に一致し、指定されたリスト内のセレクターのいずれかに一致する要素に一致します。
- {{CSSxRef(":host-context", ":host-context()")}}
  - : シャドウホストのコンテキストで、シャドウツリー以外の要素を選択します。
- {{CSSxRef(":has-slotted")}}
  - : コンテンツが割り当てられたスロット要素と一致します。

## ユーザー操作擬似クラス

これらの擬似クラスは、マウスポインターを要素にかざすなど、ユーザーによる何らかの操作を必要とするものです。

- {{CSSxRef(":hover")}}
  - : ユーザーがポインティングデバイスでアイテムを指した場合（例えば、マウスポインターをその項目にかざした場合）に一致します。
- {{CSSxRef(":active")}}
  - : アイテムがクリックされるなど、ユーザーによってアクティブになっているときに一致します。
- {{CSSxRef(":focus")}}
  - : 要素にフォーカスがあるときに一致します。
- {{CSSxRef(":focus-visible")}}
  - : 要素にフォーカスがあり、ユーザーエージェントがその要素のフォーカスを可視化する必要があると判断した場合に一致します。
- {{CSSxRef(":focus-within")}}
  - : {{CSSxRef(":focus")}} が適用される要素に加え、 {{CSSxRef(":focus")}} が適用される子孫要素を持つ要素にも一致します。
- {{CSSxRef(":target-current")}}
  - : 現在スクロールされている {{cssxref("scroll-marker-group")}} の {{cssxref("::scroll-marker")}} 擬似要素、言い換えれば**アクティブな**スクロールマーカーに一致します。

## 関数擬似クラス

[セレクターリスト](/ja/docs/Web/CSS/Selector_list)または[寛容なセレクターリスト](/ja/docs/Web/CSS/Selector_list#寛容なセレクターリスト)を引数として受け取る擬似クラスです。

- {{CSSxRef(":is", ":is()")}}
  - : matches-any 擬似クラスは、指定されたリストのセレクターのどれかに一致する要素に一致します。リストは寛容です。
- {{CSSxRef(":not", ":not()")}}
  - : 否定 (matches-none) 擬似クラスは、引数で表されない要素を表します。
- {{CSSxRef(":where", ":where()")}}
  - : 詳細度を調整する擬似クラスは、指定されたリストのセレクターのいずれかに一致する要素であれば、詳細度の重みを追加することなく照合します。リストは寛容です。
- {{CSSxRef(":has", ":has()")}}
  - : 関係擬似クラスは、付属の要素に対してアンカーを付けたときに、相対セレクターのどれかが一致する場合に要素を表します。

## カスタム状態擬似クラス

これらの擬似クラスは、独自の要素に適用されます。

- {{CSSxRef(":state", ":state()")}}
  - : 指定されたカスタム状態を持つカスタム要素と一致します。

## ページ擬似クラス

これらの擬似クラスは、印刷された文書内のページに関連し、{{CSSxRef("@page")}} アットルールと組み合わせて使用されます。

- {{CSSxRef(":left")}}
  - : 印刷された文書のすべての左ページを表します。
- {{CSSxRef(":right")}}
  - : 印刷された文書のすべての右ページを表します。
- {{CSSxRef(":first")}}
  - : 印刷された文書の最初のページを表します。
- `:blank`
  - : 印刷された文書内の空白ページを表します。

## ビュー遷移擬似クラス

これらの擬似クラスは、[ビュー遷移](/ja/docs/Web/API/View_Transition_API)に関与する要素に関連しています。

- {{cssxref(":active-view-transition")}}
  - : [ビュー遷移](/ja/docs/Web/API/View_Transition_API#概念と使い方)が進行中 (_active_) のときに、文書のルート要素に一致し、トランジションが完了すると一致しなくなります。
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
  - : 指定した[ビュー遷移](/ja/docs/Web/API/View_Transition_API#概念と使い方)が進行中 (_active_) の場合に、文書のルート要素に一致し、トランジションが完了すると一致しなくなります。

## 構文

```css
selector:pseudo-class {
  property: value;
}
```

通常のクラスと同様に、セレクターの中で好きなだけ擬似クラスを連結することができます。

## アルファベット順の索引

CSS の一連の仕様書で定義されている擬似クラスには、以下のようなものがあります。

A

- {{CSSxRef(":active")}}
- {{CSSxRef(":active-view-transition")}}
- {{cssxref(":active-view-transition-type", ":active-view-transition-type()")}}
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}} （入力欄） {{Experimental_Inline}}
- `:blank` （ページ）
- {{CSSxRef(":buffering")}}

C

- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}} {{Experimental_Inline}}

D

- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}}
- {{CSSxRef(":disabled")}}

E

- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}

F

- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}
- {{CSSxRef(":fullscreen")}}
- {{CSSxRef(":future")}}

H

- {{CSSxRef(":has-slotted")}}
- {{CSSxRef(":has", ":has()")}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host_function", ":host()")}}
- {{CSSxRef(":host-context", ":host-context()")}}
- {{CSSxRef(":hover")}}

I

- {{CSSxRef(":in-range")}}
- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is", ":is()")}}

L

- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}} {{Experimental_Inline}}

M

- {{CSSxRef(":modal")}}
- {{CSSxRef(":muted")}}

N

- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}

O

- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":open")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}

P

- {{CSSxRef(":past")}}
- {{CSSxRef(":paused")}}
- {{CSSxRef(":picture-in-picture")}}
- {{CSSxRef(":placeholder-shown")}}
- {{CSSxRef(":playing")}}
- {{CSSxRef(":popover-open")}}

R

- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}

S

- {{CSSxRef(":scope")}}
- {{CSSxRef(":seeking")}}
- {{CSSxRef(":stalled")}}
- {{CSSxRef(":state", ":state()")}}

T

- {{CSSxRef(":target")}}
- {{CSSxRef(":target-current")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}

U

- {{CSSxRef(":user-invalid")}}
- {{CSSxRef(":user-valid")}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}
- {{CSSxRef(":volume-locked")}}

W

- {{CSSxRef(":where", ":where()")}}

## 仕様書

{{Specifications}}

## 関連情報

- [擬似要素](/ja/docs/Web/CSS/Pseudo-elements)
