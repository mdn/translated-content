---
title: slider ロールの使用
slug: Web/Accessibility/ARIA/Roles/slider_role
---

このテクニックは、[`slider`](http://www.w3.org/TR/wai-aria/#slider) ロールの使い方を示し、ブラウザーと支援技術に及ぼす影響について説明します。

`slider` ロールは、ユーザーが所定の範囲内から値を選択できるマークアップに使用されます。 `slider` ロールは、値を変更するために調節するコントロールである「つまみ」に割り当てられます。 ユーザーがつまみとやり取りするとき、アプリケーションはスライダーの `aria-valuenow`（および可能なら `aria-valuetext`）属性をプログラムで調整して現在の値を反映する必要があります。 詳細については、下記の[例](#examples)のセクションを参照してください。

### キーボードとフォーカス

スライダーはキーボードでフォーカス可能で操作可能であるべきです。 ユーザーがタブキーでスライダーにフォーカスを合わせると、フォーカスはつまみに当たるべきです。 つまみはマウスのユーザーがドラッグするコントロールです。 矢印キーは、次のように操作する必要があります（右から左の言語のローカライゼーションは矢印の方向を逆にする必要があります）。

| キー                       | 動作                                                                            |
| -------------------------- | ------------------------------------------------------------------------------- |
| 右矢印と上矢印             | 選択した値を増やす                                                              |
| 左矢印と下矢印             | 選択した値を減らす                                                              |
| ページアップとページダウン | オプションで、設定した量だけ値を増減します（例えば、0 ～ 100 の範囲で 10 ずつ） |

## ユーザーエージェントと支援技術への影響

> **メモ:** 支援技術がこの手法をどのように扱うべきかについての意見は異なる場合があります。 上記の情報は、これらの意見の 1 つで、したがって規範的ではありません。

## 例

### 例 1: 単純な数値範囲

次の例では、単純なスライダーを使用して 1 ～ 100 の値を選択しています。 現在のボリュームは 50 です。 アプリケーションは、ユーザーの入力に応じてプログラムで `aria-valuenow` の値を更新します。

```html
<label for="fader">ボリューム</label>
<input
  type="range"
  id="fader"
  min="1"
  max="100"
  value="50"
  step="1"
  aria-valuemin="1"
  aria-valuemax="100"
  aria-valuenow="50"
  oninput="outputUpdate(value)" />
<output for="fader" id="volume">50</output>
```

次のコードスニペットを使用すると、ユーザー入力によって更新された出力を返すことができます。

```
function outputUpdate(vol) {
  document.querySelector('#volume').value = vol;
}
```

### 例 2: テキスト値

時には、意味的には数字ではない値を選択するためにスライダーが使用されることがあります。 このような場合、`aria-valuetext` 属性を使用して、現在選択されている値に対して適切なテキスト名を指定します。 次の例では、スライダーを使用して曜日を選択しています。

```html
<label id="day-label">曜日</label>
<div class="day-slider">
  <div id="day-handle" class="day-slider-handle" role="slider" aria-labelledby="day-label"
     aria-valuemin="1"
     aria-valuemax="7"
     aria-valuenow="2
     aria-valuetext="月曜日">
 </div>
</div>
```

以下のコードスニペットは、ユーザーの入力に応答して `aria-valuenow` および `aria-valuetext` 属性を更新する関数を示しています。

```js
var dayNames = [
  "日曜日",
  "月曜日",
  "火曜日",
  "水曜日",
  "木曜日",
  "金曜日",
  "土曜日",
];
var updateSlider = function (newValue) {
  var handle = document.getElementById("day-handle");
  handle.setAttribute("aria-valuenow", newValue.toString());
  handle.setAttribute("aria-valuetext", dayNames[newValue]);
};
```

## 注

## 使用された ARIA 属性

- [aria-valuemin](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemin_attribute)
- [aria-valuemax](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuemax_attribute)
- [aria-valuenow](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuenow_attribute)
- [aria-valuetext](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-valuetext_attribute)
- [aria-orientation](/ja/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-orientation_attribute)

## 関連する ARIA 技術

## 互換性

TBD: 一般的な UA と AT 製品の組み合わせに関するサポート情報を追加する

## その他のリソース

- [slider ロールの WAI-ARIA 仕様](https://www.w3.org/TR/wai-aria-1.1/#slider)（英語）
