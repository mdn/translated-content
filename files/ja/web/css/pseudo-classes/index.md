---
title: 擬似クラス
slug: Web/CSS/Pseudo-classes
tags:
  - CSS
  - ガイド
  - 概要
  - 擬似クラス
  - リファレンス
  - セレクター
translation_of: Web/CSS/Pseudo-classes
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) の**擬似クラス** (_pseudo-classes_) は、セレクターに付加するキーワードであり、選択された要素に対して特定の状態を指定します。例えば {{CSSxRef(":hover")}} 擬似クラスで、ユーザーのポインターが当たったときにボタンの色を変更することができます。

```css
/* ユーザーのポインターが当たっているすべてのボタン */
button:hover {
  color: blue;
}
```

擬似クラスにより、文書ツリーのコンテンツに関するものだけでなく、閲覧履歴 (例えば {{CSSxRef(":visited")}})、内容物の状態 (例えばフォーム要素における {{CSSxRef(":checked")}})、マウスポインターの位置 (例えばマウスポインターが要素上にあるかを知ることができる {{CSSxRef(":hover")}}) といった外的要因との関係についてスタイルを適用することができるようになります。

> **Note:** 擬似クラスとは対照的に、[擬似要素](/ja/docs/Web/CSS/Pseudo-elements)は要素の*特定の部分*にスタイルを適用するために使います。

## 言語擬似クラス

これらの擬似クラスは、文書の言語を反映し、言語や書字方向に基づいた要素を選択できるようにします。

- {{CSSxRef(":dir")}}
  - : 方向性擬似クラスは、文書の言語によって決定される書字方向に基づいて要素を選択します。
- {{CSSxRef(":lang")}}
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

## 時間軸擬似クラス

これらの擬似クラスは、 [WebVTT](/ja/docs/Web/API/WebVTT_API) キャプショントラックのようなタイミングを持つものを閲覧する際に適用されるものです。

- {{CSSxRef(":current")}}
  - : 表示されている要素またはその祖先を表します。
- {{CSSxRef(":past")}}
  - : 完全に {{CSSxRef(":current")}} 要素の前に発生する要素を表します。
- {{CSSxRef(":future")}}
  - : 完全に {{CSSxRef(":current")}} 要素の後に発生する要素を表します。

## リソース状態擬似クラス

これらの擬似クラスは、動画など再生と表現できる状態にあるメディアに適用されます。

- {{CSSxRef(":playing")}}
  - : その要素が再生可能なメディア要素であり、再生中であることを表します。
- {{CSSxRef(":paused")}}
  - : その要素が再生可能なメディア要素であり、一時停止中であることを表します。

## 入力擬似クラス

これらの擬似クラスはフォーム要素に関連し、 HTML 属性を操作する前後のフィールドの状態に基づいて要素を選択できるようにします。

- {{CSSxRef(":autofill")}}
  - : {{htmlelement("input")}} をブラウザーが自動補完した場合に一致します。
- {{CSSxRef(":enabled")}}
  - : ユーザーインターフェイス要素が有効な状態であることを表します。
- {{CSSxRef(":disabled")}}
  - : ユーザーインターフェイス要素が無効な状態であることを表します。
- {{CSSxRef(":read-only")}}
  - : ユーザーが変更できない要素を表します。
- {{CSSxRef(":read-write")}}
  - : ユーザーが編集することができる要素を表します。
- {{CSSxRef(":placeholder-shown")}}
  - : プレイスホルダーテキスト、例えば HTML5 の `placeholder` 属性のものが表示されている入力要素に一致します。
- {{CSSxRef(":default")}}
  - : 一連の要素のうち、1 つ以上の既定の UI 要素に一致します。
- {{CSSxRef(":checked")}}
  - : チェックボックスやラジオボタンなどがオンになっている要素に一致します。
- {{CSSxRef(":indeterminate")}}
  - : UI 要素が不定状態になっている場合に一致します。
- {{CSSxRef(":blank")}}
  - : ユーザーが入力する要素が空である場合に一致します。空文字列が入っているか、その他の空入力であることを表します。
- {{CSSxRef(":valid")}}
  - : 内容が妥当である要素に一致します。例えば、 'email' 型の入力要素に正しい形式のメールアドレスが入力されている場合です。
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
- {{CSSxRef(":user-invalid")}}
  - : 不正確な値が入力されている要素を表します。ただし、ユーザーがその要素を操作した場合のみです。

## ツリー構造擬似クラス

これらの擬似クラスは、文書ツリー内の要素の位置に関するものです。

- {{CSSxRef(":root")}}
  - : 文書のルートである要素を表します。 HTML では、ふつうは `<html>` 要素です。
- {{CSSxRef(":empty")}}
  - : ホワイトスペース文字以外に子がない要素を表します。
- {{CSSxRef(":nth-child")}}
  - : A*n*+B の表記を用いて、兄弟要素のリストから要素を選択します。
- {{CSSxRef(":nth-last-child")}}
  - : A*n*+B の表記を用いて、兄弟要素のリストから、リストの末尾から逆方向に数えて要素を選択します。
- {{CSSxRef(":first-child")}}
  - : 兄弟のうちの最初の要素に一致します。
- {{CSSxRef(":last-child")}}
  - : 兄弟のうちの最後の要素に一致します。
- {{CSSxRef(":only-child")}}
  - : 要素に兄弟がいない場合に一致します。例えば、リスト内に他のリスト項目が存在しないリスト項目が該当します。
- {{CSSxRef(":nth-of-type")}}
  - : A*n*+B の表記を用いて、兄弟要素のリストから、特定の型に一致する要素を選択します。
- {{CSSxRef(":nth-last-of-type")}}
  - : A*n*+B の表記を用いて、兄弟要素のリストから、リストの末尾から逆方向に数えて特定の型に一致する要素を選択します。
- {{CSSxRef(":first-of-type")}}
  - : 兄弟のうちの最初の特定の型に一致する要素に一致します。
- {{CSSxRef(":last-of-type")}}
  - : 兄弟のうちの最後の特定の型に一致する要素に一致します。
- {{CSSxRef(":only-of-type")}}
  - : 指定された型セレクターで兄弟要素がない要素に一致します。

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
- {{CSSxRef(":any-link")}}
- {{CSSxRef(":autofill")}}

B

- {{CSSxRef(":blank")}} {{Experimental_Inline}}

C

- {{CSSxRef(":checked")}}
- {{CSSxRef(":current")}} {{Experimental_Inline}}

D

- {{CSSxRef(":default")}}
- {{CSSxRef(":defined")}}
- {{CSSxRef(":dir", ":dir()")}} {{Experimental_Inline}}
- {{CSSxRef(":disabled")}}

E

- {{CSSxRef(":empty")}}
- {{CSSxRef(":enabled")}}

F

- {{CSSxRef(":first")}}
- {{CSSxRef(":first-child")}}
- {{CSSxRef(":first-of-type")}}
- {{CSSxRef(":fullscreen")}}
- {{CSSxRef(":future")}} {{Experimental_Inline}}
- {{CSSxRef(":focus")}}
- {{CSSxRef(":focus-visible")}}
- {{CSSxRef(":focus-within")}}

H

- {{CSSxRef(":has", ":has()")}} {{Experimental_Inline}}
- {{CSSxRef(":host")}}
- {{CSSxRef(":host()")}}
- {{CSSxRef(":host-context()")}} {{Experimental_Inline}}
- {{CSSxRef(":hover")}}

I

- {{CSSxRef(":indeterminate")}}
- {{CSSxRef(":in-range")}}
- {{CSSxRef(":invalid")}}
- {{CSSxRef(":is", ":is()")}}

L

- {{CSSxRef(":lang", ":lang()")}}
- {{CSSxRef(":last-child")}}
- {{CSSxRef(":last-of-type")}}
- {{CSSxRef(":left")}}
- {{CSSxRef(":link")}}
- {{CSSxRef(":local-link")}} {{Experimental_Inline}}

N

- {{CSSxRef(":not", ":not()")}}
- {{CSSxRef(":nth-child", ":nth-child()")}}
- {{CSSxRef(":nth-col", ":nth-col()")}} {{Experimental_Inline}}
- {{CSSxRef(":nth-last-child", ":nth-last-child()")}}
- {{CSSxRef(":nth-last-col", ":nth-last-col()")}} {{Experimental_Inline}}
- {{CSSxRef(":nth-last-of-type", ":nth-last-of-type()")}}
- {{CSSxRef(":nth-of-type", ":nth-of-type()")}}

O

- {{CSSxRef(":only-child")}}
- {{CSSxRef(":only-of-type")}}
- {{CSSxRef(":optional")}}
- {{CSSxRef(":out-of-range")}}

P

- {{CSSxRef(":past")}} {{Experimental_Inline}}
- {{CSSxRef(":picture-in-picture")}}
- {{CSSxRef(":placeholder-shown")}}
- {{CSSxRef(":paused")}}
- {{CSSxRef(":playing")}}

R

- {{CSSxRef(":read-only")}}
- {{CSSxRef(":read-write")}}
- {{CSSxRef(":required")}}
- {{CSSxRef(":right")}}
- {{CSSxRef(":root")}}

S

- {{CSSxRef(":scope")}}
- {{CSSxRef(":state", ":state()")}} {{Experimental_Inline}}

T

- {{CSSxRef(":target")}}
- {{CSSxRef(":target-within")}} {{Experimental_Inline}}

U

- {{CSSxRef(":user-invalid")}} {{Experimental_Inline}}

V

- {{CSSxRef(":valid")}}
- {{CSSxRef(":visited")}}

W

- {{CSSxRef(":where", ":where()")}}

## 仕様書

| 仕様書                                         | 状態                        | 備考                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------------------------------------------- | --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("Fullscreen")}}                     | {{Spec2("Fullscreen")}}     | `:fullscreen` を定義。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| {{SpecName("HTML WHATWG", "#pseudo-classes")}} | {{Spec2("HTML WHATWG")}}    | 特定のセレクターがいつ HTML 要素に一致するのかを定義。                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| {{SpecName("CSS4 Selectors")}}                 | {{Spec2("CSS4 Selectors")}} | `:any-link`, `:blank`, `:local-link`, `:scope`, `:drop`, `:current`, `:past`, `:future`, `:placeholder-shown`, `:user-invalid`, `:nth-col()`, `:nth-last-col()`, `:is()`, `:where()` を定義。 `:empty` を {{CSSxRef(":-moz-only-whitespace")}} {{Non-standard_Inline}} のように動作するように変更。 {{SpecName("CSS3 Selectors")}} および {{SpecName("HTML5 W3C")}} で定義されたその他の擬似クラスには目立った変更なし（意味論的な意味は引き継いでいない）。 |
| {{SpecName("HTML5 W3C")}}                      | {{Spec2("HTML5 W3C")}}      | 正規の (WHATWG) HTML 仕様書から関連する節を複写。                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| {{SpecName("CSS3 Basic UI")}}                  | {{Spec2("CSS3 Basic UI")}}  | `:default`, `:valid`, `:invalid`, `:in-range`, `:out-of-range`, `:required`, `:optional`, `:read-only`, `:read-write` を定義、ただし意味論的な意味には関連付けを行わず。                                                                                                                                                                                                                                                                                                                        |
| {{SpecName("CSS3 Selectors")}}                 | {{Spec2("CSS3 Selectors")}} | `:target`, `:root`, `:nth-child()`, `:nth-last-of-child()`, `:nth-of-type()`, `:nth-last-of-type()`, `:last-child`, `:first-of-type`, `:last-of-type`, `:only-child`, `:only-of-type`, `:empty`, `:not()` を定義。 `:enabled`, `:disabled`, `:checked`, `:indeterminate` の構文を定義、ただし意味論定期な意味の定義は行わず。 {{SpecName('CSS2.1')}} で定義された擬似クラスについては、目立った変更なし。                                                                 |
| {{SpecName("CSS2.1")}}                         | {{Spec2("CSS2.1")}}         | `:lang()`, `:first-child`, `:hover`, `:focus` を定義。 {{SpecName('CSS1')}} で定義された擬似クラスには目立った変更なし。                                                                                                                                                                                                                                                                                                                                                         |
| {{SpecName("CSS1")}}                           | {{Spec2("CSS1")}}           | `:link`, `:visited`, `:active` を定義。ただし意味論的な意味は定義なし。                                                                                                                                                                                                                                                                                                                                                                                                             |

## 関連情報

- [擬似要素](/ja/docs/Web/CSS/Pseudo-elements)
