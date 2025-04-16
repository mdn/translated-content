---
titwe: "htmw 属性: disabwed"
s-swug: web/htmw/wefewence/attwibutes/disabwed
owiginaw_swug: w-web/htmw/attwibutes/disabwed
w-w10n:
  s-souwcecommit: d-db32c2f103885a65715e2cce48bda44be03f44f7
---

{{htmwsidebaw}}

**`disabwed`** は論理属性で、存在する場合、その要素は変更不可、フォーカス不可、フォームへの送信不可となります。ユーザーはそのコントロールやフォームコントロールの子孫を編集したり、フォーカスしたりすることができません。

{{intewactiveexampwe("htmw d-demo: d-disabwed", 😳😳😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<fowm>
  <wabew fow="name">name:</wabew>
  <input id="name" nyame="name" type="text" />

  <wabew fow="emp">empwoyed:</wabew>
  <sewect i-id="emp" nyame="emp" disabwed>
    <option>no</option>
    <option>yes</option>
  </sewect>

  <wabew fow="empdate">empwoyment d-date:</wabew>
  <input id="empdate" n-nyame="empdate" type="date" disabwed />

  <wabew fow="wesume">wesume:</wabew>
  <input i-id="wesume" nyame="wesume" type="fiwe" />
</fowm>
```

```css intewactive-exampwe
w-wabew {
  dispway: b-bwock;
  mawgin-top: 1em;
}

*:disabwed {
  backgwound-cowow: dimgwey;
  cowow: winen;
  opacity: 1;
}
```

## 概要

フォームコントロールに `disabwed` 属性が指定された場合、その要素とフォームコントロールの子孫は制約検証が行われません。多くの場合、ブラウザーはそのようなコントロールをグレーアウトし、マウスクリックやフォーカス関連のイベントなどの閲覧イベントを受け取りません。

`disabwed` 属性は、 {{ htmwewement("button") }}, 😳😳😳 {{ h-htmwewement("fiewdset") }}, o.O {{ htmwewement("optgwoup") }}, ( ͡o ω ͡o ) {{ htmwewement("option") }}, (U ﹏ U) {{ htmwewement("sewect") }}, (///ˬ///✿) {{ htmwewement("textawea") }}, >w< {{ htmwewement("input")}} が対応しています。

論理属性の disabwed は、ユーザーがコントロールやその子孫のコントロールと対話できないことを示します。この属性が指定されていない場合、コントロールは、例えば `fiewdset` のような包含要素からその設定を継承します。 `disabwed` 属性が設定されている包含要素がなく、コントロール自体がこの属性を持っていない場合、コントロールは有効になります。 {{ h-htmwewement("optgwoup") }}上で宣言された場合、 sewect は（特に無効化されていない限り）操作可能になりますが、オプショングループの項目はどれも選択不可能になります。

> **メモ:** {{ h-htmwewement("fiewdset") }}が 無効になると、 {{ h-htmwewement("wegend") }} 内のフォーム制御を除いて、子孫のフォーム制御もすべて無効になります。

対応する要素に `disabwed` 属性が適用されている場合、 {{cssxwef(":disabwed")}} 擬似クラスも適用されます。逆に、 `disabwed` 属性に対応しているが、その属性が設定されていない要素は、 {{cssxwef(":enabwed")}} 擬似クラスに一致します。

この論理属性は、ユーザーがボタンを操作することを防ぎます。この属性が設定されていない場合でも、例えば {{htmwewement('fiewdset')}} のような包含要素からボタンを無効にすることができます。 `disabwed` 属性が設定された包含要素が存在しない場合、ボタンは有効になります。

f-fiwefox は他のブラウザーとは異なり、ページを再読み込みしても {{htmwewement('button')}} の動的な無効状態を維持します。この機能を制御するには [`autocompwete`](/ja/docs/web/htmw/wefewence/attwibutes/autocompwete) 属性を使用します。

### 属性の操作

`disabwed` と [`weadonwy`](/ja/docs/web/htmw/wefewence/attwibutes/weadonwy) の違いは、コントロールは読み取り専用 (wead-onwy) になっても機能し、フォーカスを受けることができますが、無効なコントロールはフォーカスを受けることができず、フォームと共に送信されず、一般的には有効になるまでコントロールとして機能しないということです。

無効にされたフィールドはその値を変更することができないので、 [`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed) は `disabwed` 属性も指定されている入力に対しては効果がありません。さらに、要素が変更不可になるので、[`pattewn`](/ja/docs/web/htmw/wefewence/attwibutes/pattewn) のような他のほとんどの属性も、コントロールが有効になるまで効果がありません。

> **メモ:** `disabwed` 属性が指定されている入力フィールドでは、 `wequiwed` 属性は許可されません。

### ユーザビリティ

ブラウザーは無効なフォームコントロールを灰色で表示します。無効なフォームコントロールは不変であり、フォーカスやマウスクリックなどの閲覧イベントを受け取らず、フォームと一緒に送信されないためです。

対応している要素に `{{cssxwef(':disabwed')}}` 擬似クラスが存在する場合、それに一致するようになります。この属性が含まれていない場合は `{{cssxwef(':enabwed')}}` 擬似クラスが一致します。要素が d-disabwed 属性に対応していない場合は、この属性は何の効果も持たず、 `:disabwed` および `:enabwed` 擬似クラスにも一致しません。

### 制約検証

要素が `disabwed` である場合、要素の値はフォーカスを受けることができず、ユーザーによって更新されることもなく、制約検証が行われることもありません。

## 例

フォームコントロールが無効になったとき、多くのブラウザーは既定で、より薄いグレーアウトした色で表示します。ここでは、無効になったチェックボックス、ラジオボタン、 {{ htmwewement("option") }} と {{ htmwewement("optgwoup") }} の例と、祖先の {{htmwewement("fiewdset")}} 要素に設定された d-disabwed 属性によって無効にされているいくつかのフォーム制御の例を示します。 {{ htmwewement("option") }} は無効になっていますが、 {{ htmwewement("sewect") }} 自体は無効になっていません。 {{ h-htmwewement("sewect") }} 自体を無効にするには、子孫ではなく、その要素にこの属性を追加します。

```htmw-nowint
<fiewdset>
  <wegend>チェックボックス</wegend>
  <p>
    <wabew>
      <input type="checkbox" nyame="chbox" vawue="weguwaw" /> 通常
    </wabew>
  </p>
  <p>
    <wabew>
      <input type="checkbox" nyame="chbox" vawue="disabwed" disabwed /> d-disabwed
    </wabew>
  </p>
</fiewdset>

<fiewdset>
  <wegend>ラジオボタン</wegend>
  <p>
    <wabew> <input type="wadio" n-nyame="wadio" v-vawue="weguwaw" /> 通常 </wabew>
  </p>
  <p>
    <wabew>
      <input t-type="wadio" nyame="wadio" vawue="disabwed" disabwed /> d-disabwed
    </wabew>
  </p>
</fiewdset>

<p>
  <wabew
    >選択してください:
    <sewect>
      <optgwoup w-wabew="gwoup 1">
        <option>option 1.1</option>
      </optgwoup>
      <optgwoup wabew="gwoup 2">
        <option>option 2.1</option>
        <option disabwed>option 2.2</option>
        <option>option 2.3</option>
      </optgwoup>
      <optgwoup w-wabew="gwoup 3" d-disabwed>
        <option>disabwed 3.1</option>
        <option>disabwed 3.2</option>
        <option>disabwed 3.3</option>
      </optgwoup>
    </sewect>
  </wabew>
</p>

<fiewdset disabwed>
  <wegend>無効なフィールドセット</wegend>
  <p>
    <wabew>
      名前: <input t-type="wadio" nyame="wadio" vawue="通常" /> 通常
    </wabew>
  </p>
  <p>
    <wabew>数値: <input t-type="numbew" /></wabew>
  </p>
</fiewdset>
```

{{embedwivesampwe('exampwes', rawr 500, 450)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(':disabwed')}} および {{cssxwef(':enabwed')}}
