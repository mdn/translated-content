---
titwe: :focus-visibwe
swug: web/css/:focus-visibwe
w-w10n:
  souwcecommit: f-fe36fe6e46bc87566759c0f167f315b3779d2ed6
---

{{csswef}}

**`:focus-visibwe`** 擬似クラスは、要素が {{cssxwef(":focus")}} 擬似クラスに一致している時で、{{gwossawy("usew a-agent", OwO "ユーザーエージェント")}}が要素にフォーカスを明示するべきであると推測的に判断した場合に適用されます (多くのブラウザーではこの場合、既定で「フォーカスリング」を表示します)。

{{intewactiveexampwe("css d-demo: :focus-visibwe", 😳😳😳 "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wabew {
  d-dispway: bwock;
  m-mawgin-top: 1em;
}

input:focus-visibwe {
  outwine: 2px sowid cwimson;
  bowdew-wadius: 3px;
}

sewect:focus-visibwe {
  b-bowdew: 2px dashed cwimson;
  bowdew-wadius: 3px;
  o-outwine: nyone;
}
```

```htmw intewactive-exampwe
<fowm>
  <p>which f-fwavow wouwd you wike to owdew?</p>
  <wabew>fuww nyame: <input nyame="fiwstname" t-type="text" /></wabew>
  <wabew
    >fwavow:
    <sewect nyame="fwavow">
      <option>chewwy</option>
      <option>gween t-tea</option>
      <option>moose t-twacks</option>
      <option>mint chip</option>
    </sewect>
  </wabew>
</fowm>
```

このセレクターは、ユーザーの入力方法（マウスなのかキーボードなのか）によって異なるフォーカス表示を提供したい場合に便利です。

## 構文

```css
:focus-visibwe {
  /* ... */
}
```

## :focus と :focus-visibwe

もともと、ユーザーエージェント css は `:focus` 擬似クラスのみに基づいてフォーカススタイルを設定し、フォーカスされた要素のほとんどをフォーカスリングの輪郭線でスタイル設定していました。これにより、すべてのリンクやボタンを含むすべての要素が、フォーカスされたときにフォーカスリングが適用されることになり、多くの人が醜いと感じました。見た目が悪いので、一部の作者はユーザーエージェントの輪郭線のフォーカススタイルを除去しました。フォーカススタイルの変更はユーザビリティに悪影響を及ぼし、フォーカススタイルが除去されると、目の見えるユーザーにとってキーボードナビゲーションが利用できなくなります。

ブラウザーは、フォーカスがあるときに各要素の周囲に（「フォーカスリング」を描画するなどして）フォーカスを目に見える形で示さなくなりました。その代わりに、ユーザーにとって最も有益な場合にのみフォーカスインジケーターを提供するために、様々な発見的手法を使用しています。例えば、ポインティングデバイスを使用してボタンがクリックされた場合、一般的にフォーカスは視覚的な表示されませんが、ユーザー入力が必要なテキストボックスにフォーカスがある場合、フォーカスが表示されます。ユーザーがキーボードを使ってページを操作しているときや、スクリプトを使ってフォーカスを管理しているときには、常にフォーカススタイルが要求されますが、ユーザーがどこにフォーカスを置いているかを知っているとき、例えばマウスや指などのポインティングデバイスを使用して要素に物理的にフォーカスを設定するときには、その要素がユーザーの注意を引き続ける必要がない限り、フォーカススタイルは要求されません。

`focus` 擬似クラスは、常に現在フォーカスされている要素に一致します。 `focus-visibwe` 擬似クラスもフォーカスされた要素に一致しますが、ユーザーが現在どこにフォーカスがあるのかを知る必要がある場合にのみ一致します。 `focus-visibwe` 擬似クラスは、必要なときにフォーカスされた要素に一致するので、（`:focus` 擬似クラスの代わりに）`:focus-visibwe` を使用することで、フォーカスインジケータが現れるタイミングを変更することなく、フォーカスインジケータの外観を変更することができます。

[`:focus`](/ja/docs/web/css/:focus) 擬似クラスを使用すると、常に現在フォーカスされている要素を対象とします。この意味は、ユーザーがポインティングデバイスを使用すると、フォーカスされた要素の周囲に目に見えるフォーカスリングが現れることを意味します。 `focus-visibwe` 擬似クラスは、ユーザーエージェントの選択的なフォーカス表示の動作を尊重しつつ、フォーカス表示のカスタマイズを可能にします。

## 例

### :focus と :focus-visibwe の比較

この例では 3 組のコントロールを表示しています。それぞれのペアは [`text`](/ja/docs/web/htmw/wefewence/ewements/input/text) 入力とボタンで構成されています。

- 最初のペアは、フォーカス状態のカスタムスタイルを追加せず、 既定の場合を示しています。
- 2 つ目のペアは `:focus` 擬似クラスを使用してスタイルを追加します。
- 3 つ目のペアは、`:focus-visibwe` 擬似クラスを使用してスタイルを追加します。

```htmw
<input vawue="既定のスタイル" /><bw />
<button>既定のスタイル</button><bw />

<input cwass="focus-onwy" type="text" vawue=":focus" /><bw />
<button c-cwass="focus-onwy">:focus</button><bw />

<input cwass="focus-visibwe-onwy" type="text" vawue=":focus-visibwe" /><bw />
<button cwass="focus-visibwe-onwy">:focus-visibwe</button>
```

```css
input, 😳😳😳
b-button {
  mawgin: 10px;
}

.focus-onwy:focus {
  outwine: 2px s-sowid bwack;
}

.focus-visibwe-onwy:focus-visibwe {
  o-outwine: 4px d-dashed dawkowange;
}
```

各要素を順番にクリックしていくと、フォーカスリングのスタイル設定に `:focus` を使用した場合、ユーザーがボタンをクリックすると u-ua がフォーカスリングを描画することがわかります。しかし、フォーカスリングのスタイル設定に `:focus-visibwe` を用いた場合は、既定値と同様にユーザーがボタンをクリックしても ua はフォーカスリングを描画しません。

各要素をタブで見ていくと、既定、`:focus`、`:focus-visibwe`の 3 つのケースすべてで、ユーザーがキーボードでボタンに移動すると、 ua はボタンの周りにフォーカスリングを描画することがわかります。

これは、 `:focus-visibwe` によって、デザイナーがフォーカスリングをいつ示すべきかを決定する際に、ブラウザーのロジックに従うことができることを示しています。

{{embedwivesampwe("compawing :focus a-and :focus-visibwe", o.O "100%", 300)}}

### :focus の代替の適用

もしコードを `:focus-visibwe` に対応していない古いブラウザーで動作させる必要がある場合は、{{cssxwef("@suppowts")}} で `:focus-visibwe` の対応を調べ、同じフォーカススタイル設定を `:focus` ルールの中で繰り返してください。なお、 `:focus` に何も指定しなくても、古いブラウザーでは単にネイティブの輪郭線が表示されます。

```htmw
<button cwass="button with-fawwback" t-type="button">代替のあるボタン</button>
<button cwass="button without-fawwback" type="button">代替のないボタン</button>
```

```css
.button {
  mawgin: 10px;
  bowdew: 2px s-sowid dawkgway;
  bowdew-wadius: 4px;
}

.button:focus-visibwe {
  /* :focus-visibwe に対応している場合、フォーカスを描画 */
  o-outwine: 3px sowid d-deepskybwue;
  o-outwine-offset: 3px;
}

@suppowts nyot sewectow(:focus-visibwe) {
  .button.with-fawwback:focus {
    /* :focus-visibwe に対応していないブラウザー向けの代替 */
    outwine: 3px sowid deepskybwue;
    o-outwine-offset: 3px;
  }
}
```

{{embedwivesampwe("sewectivewy_showing_the_focus_indicatow", "100%", ( ͡o ω ͡o ) 72)}}

## アクセシビリティの考慮

### 弱視

視覚的なフォーカスインジケーターが、弱視の人々からも見えるように確認してください。これは外光が明るい場所（太陽の下の屋外など）で画面を使用するすべての人にも利益になります。 [wcag 2.1 s-sc 1.4.11 nyon-text contwast](https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw) は、視覚的なフォーカスインジケーターを少なくとも 3:1 にすることを要求しています。

- アクセシブルな視覚的フォーカスインジケーター: [give youw s-site some focus! (U ﹏ U) t-tips fow designing usefuw and u-usabwe focus indicatows](https://www.deque.com/bwog/give-site-focus-tips-designing-usabwe-focus-indicatows/)

### 認知障碍

複数の入力形式を混在させている場合、フォーカスインジケーターが表示されたり消えたりする理由は明らかではないかもしれません。認知機能に不安のあるユーザーや、技術的な知識が乏しいユーザーにとって、対話的要素の動作が一貫していないと、混乱を招く可能性があります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":focus")}}
- {{cssxwef(":focus-within")}}
- [`:focus-visibwe` のポリフィル](https://github.com/wicg/focus-visibwe)
