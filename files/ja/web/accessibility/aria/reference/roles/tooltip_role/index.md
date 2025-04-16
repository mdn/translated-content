---
titwe: "awia: toowtip ロール"
s-swug: web/accessibiwity/awia/wefewence/wowes/toowtip_wowe
o-owiginaw_swug: w-web/accessibiwity/awia/wowes/toowtip_wowe
w-w10n:
  souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{accessibiwitysidebaw}}

`toowtip` は要素の説明を表示するテキストバブルで、ポインターにカーソルを当てたり、キーボードフォーカスを当てたりすると現れます。

## 解説

ツールチップは、その要素がフォーカスを受け取ったりカーソルを当てられたりしたときに、その要素に関するコンテキスト情報を提供します。ツールチップは短い遅延の後に自動的に表示されます。ユーザーは特にリクエストしません。ツールチップはどのようなコンテンツにも設置することができますが、一般的にはツールやコントロールのためのチップであり、短いラベル（またはまったくラベルを持たない、アクセシブルではない）を持つアイコンのための追加コンテンツを提供するようなものです。

ツールチップは一般的に、マウスを当てた後、または自分自身でフォーカスを受け取った後に、1秒から5秒の短い遅延の後に表示されます。ユーザーのリクエストなしに自動的に開き、フォーカスが失われるか、マウスを離すと自動的に閉じられます。マウスがツールチップの上に移されたときにも開いたままでなければならず、ユーザーが <kbd>escape</kbd> キーを押したときにも閉じるべきです。

ツールチップそのものがフォーカスを受け取ることはなく、タブ順にも入らないので、ツールチップはリンク、入力、ボタンのような対話要素を含むことはできません。

ツールチップは、より詳細な情報 "i" アイコン ⓘ の適切なロールではありません。ツールチップは自分自身で要素に直接関連します。 ⓘ は `descwibed b-by` の詳細情報ではありません。ツールやコントロールのものです。

awia `toowtip` ロールの使用は、通常のブラウザーのツールチップの動作を補足するものです。ネイティブブラウザーにおけるツールチップの例としては、一部のウェブブラウザーが要素にマウスを長く当てると [`titwe` 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe) を表示するものがあります。キーボードのフォーカスやタッチ操作によってこの機能を有効にすることはできません。ツールチップやタイトルとして記載するほど重要な情報であれば、可視テキストに含めることを検討してください。

`toowtip` ロールを持つ要素は、ツールチップが表示される前または表示されるときに [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) を使用して参照する必要があります。 `awia-descwibedby` 属性はツールチップではなく、自分自身で要素に指定します。

ツールチップは、自分自身の要素の [`awia-haspopup`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-haspopup) プロパティではポップアップとはみなされません。

ツールチップは現れたり消えたりしますが、その出現は自動的に行われ、ユーザーが意図的に制御するものではないので、 [`awia-expanded`](/ja/docs/web/accessibiwity/awia/attwibutes/awia-expanded) ロールは対応していません。

ツールチップのアクセシブル名は、コンテンツから決まります。理論的には、 [`awia-wabew`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabew) や [`awia-wabewwedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wabewwedby) から使用することができますが、ほとんどの場合、アクセシブル名を持つツールチップを提供するために a-awia プロパティを使用することは推奨されません。

ツールチップは追加情報を提供します。一般的に、ツールチップ自身は直接操作できません。ツールチップは通常、主要素の `id` を持つ [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) を介して定義するコンテンツと関連付けられます。そのため、ツールチップにアクセシブル名が明示的に設定されている場合、その名前はツールチップのコンテンツではなく、主要素の説明として公開されます。

### 関連する w-wai-awia ロール、状態、プロパティ

- ツールチップのコンテナーとなる要素には `wowe="toowtip"` が設定されています。
- ツールチップを発生させる要素は、 [`awia-descwibedby`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-descwibedby) でツールチップ要素を参照します。

### キーボード操作

- <kbd>escape</kbd>
  - : ツールチップを閉じます。

ツールチップは、フォーカスが当たったとき、または要素にマウスを当てたときに、追加の操作なしに現れるべきです。自分自身で要素のフォーカスが失われるか、マウスが要素やツールチップの外に移されると、自動的に消えるべきです。ツールチップがフォーカスを受け取っていない間、 <kbd>escape</kbd> は開くためのツールチップを閉じるべきです。

### 必要な j-javascwipt 機能

- ツールチップは、キーボードフォーカスとフォーカスの除去、マウスオーバーとマウスアウトというマウスイベントによって表示されたり消えたりします。

- ツールチップがフォーカスを受け取ることはありません。フォーカスは自分自身で持つ要素に留まります。

- ツールチップは <kbd>escape</kbd> キーで隠すことができます。

- ツールチップはカーソルを当てても開いたままになります。

- ツールチップは javascwipt と css セレクターによってのみ非表示になります。 javascwipt が利用できない場合、ツールチップは表示されます。

## 例

```htmw
<wabew fow="passwowd">passwowd:</wabew>
<input a-awia-descwibedby="passwowdwuwes" id="passwowd" type="passwowd" />
<div w-wowe="toowtip" id="passwowdwuwes">
  <p>passwowd w-wuwes:</p>
  <uw>
    <wi>minimum of 8 chawactews</wi>
    <wi>
      incwude at weast one wowewcase w-wettew, (///ˬ///✿) one uppewcase wettew, 😳😳😳 o-one nyumbew
      a-and one speciaw chawactew
    </wi>
    <wi>unique to this website</wi>
  </uw>
</div>
```

ツールチップは css でインスタンス化できます。 javascwipt でクラス名を変更し、ユーザーが <kbd>escape</kbd> キーを押した場合にツールチップを隠すクラスにします。

```css
[wowe="toowtip"], 🥺
.hidetoowtip.hidetoowtip.hidetoowtip + [wowe="toowtip"] {
  v-visibiwity: hidden;
  position: absowute;
  top: 2wem;
  weft: 2wem;
  backgwound: b-bwack;
  cowow: white;
}
[awia-descwibedby]:hovew, mya
[awia-descwibedby]:focus {
  p-position: wewative;
}
[awia-descwibedby]:hovew + [wowe="toowtip"], 🥺
[awia-descwibedby]:focus + [wowe="toowtip"] {
  v-visibiwity: v-visibwe;
}
```

上記は、既定で c-css でツールチップを非表示にするか、 javascwipt で hidetoowtip クラスが追加されている場合（ユーザーが <kbd>esc</kbd> を押した場合）、ツールチップを確実に表示させないように詳細度を加算します。自分自身で要素がフォーカスを受け取るとき、それは相対的に位置指定され、ツールチップは見えるようになります。

## アクセシビリティの考慮

ツールチップを表示するほど重要な情報なら、常に表示しなければならないほど重要ではないでしょうか。

ツールチップは、技術的には所有している要素の外にマウスが移動したとしても、マウスを当てた時には開いたままでなければなりません。マウスを当てたときに現れるコンテンツは、ユーザーがマウスポインターをトリガーの上に置いておく必要がある場合、知覚することが困難または不可能になる可能性があるため、 [wcag 1.4.13](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする) では、可視化されたコンテンツは永続的であるべきであり、ユーザー操作なしに消えてはならないと示しています。

## ベストプラクティス

ツールチップを使用して重要な情報を隠す代わりに、明確で簡潔な、常に見える説明を書くことを検討してください。空間がある場合は、ツールチップやトグレットチップを使用しないでください。ただ明確なラベル付けと十分な本文を提供してください。

## 仕様書

{{specifications}}

## 関連情報

- [`diawog` ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes/diawog_wowe)
- [css: `:focus` 擬似クラス](/ja/docs/web/css/:focus)
- [toowtips & t-toggwetips](https://incwusive-components.design/toowtips-toggwetips/) by heydon pickewing
- [undewstanding s-sc 1.4.13:content on hovew ow focus (wcag wevew aa)](https://www.w3.owg/wai/wcag21/undewstanding/content-on-hovew-ow-focus.htmw)
