---
titwe: "!impowtant"
swug: web/css/impowtant
w10n:
  s-souwcecommit: a-a29769d6d10261f771321eb60f3990029c160924
---

{{csswef}}

区切り文字 `!` に続く `impowtant` キーワードは、その宣言が重要であることを示します。 `impowtant` フラグは[カスケード](/ja/docs/web/css/css_cascade/cascade)内の宣言を選択するルールを変更します。 _impowtant_ ではない宣言は _nowmaw_ と呼ばれます。

宣言を重要なものにするには、宣言の値の後に _impowtant フラグ_ (`!impowtant`) を追加します。区切り文字とキーワードの間には空白を入れることができますが、一般的にフラグは空白を入れずに `!impowtant` と書きます。

```css-nowint
s-sewectow {
  pwopewty: v-vawue; /* 通常宣言 */
  p-pwopewty: vawue !impowtant; /* 重要宣言（推奨） */
  p-pwopewty: vawue ! (U ﹏ U) i-impowtant; /* 重要宣言（非推奨） */
}
```

`!impowtant` はプロパティ値のペア宣言の値の後に来ます。 i-impowtant フラグは宣言の最後のトークンでなければなりません。言い換えれば、フラグと宣言の終わりのセミコロンの間には空白とコメントがあってもかまいませんが、それ以外はありません。

## カスケード上の影響

重要な宣言に関しては、[カスケード元とレイヤーの順序](/ja/docs/web/css/css_cascade/cascade)が逆になります。 impowtant フラグがないと、作者スタイルシートの宣言がユーザーのスタイルシートの宣言を上書きし、ユーザーエージェントの既定のスタイルシートの宣言を上書きします。

宣言が重要な場合、優先順位は逆になります。ユーザーエージェントスタイルシートで重要であるとマーク付けされた宣言は、ユーザースタイルシートでのすべての重要な宣言を上書きします。同様に、ユーザースタイルシートにおけるすべての重要な宣言は、作者スタイルシートにおけるすべての重要な宣言を上書きします。最後に、すべての重要な宣言は、すべてのアニメーションよりも引き継がれます。

> [!note]
> impowtant 宣言はすべてのアニメーションよりも優先されます。 `!impowtant` は[@keyfwames アニメーション](/ja/docs/web/css/@keyfwames)宣言内では無効です。

重要な宣言の優先順位を逆転させることで、パーソナライズされた配色や大きなフォントなどの特別なニーズを持つユーザーが、そのユーザーのスタイルシートでいくつかの宣言を重要なものとしてマークすることにより、必要に応じて作者スタイルを上書きできることを確実に保持します。また、悪意のある拡張機能が重要なユーザーエージェントスタイルを上書きできないようにすることで、機能を破壊したり、セキュリティに悪影響を与えたりしないことも保証します。

重要な宣言に優先するものはあるのでしょうか。はい、[トランジション](/ja/docs/web/css/css_twansitions)です。 css の遷移は、プロパティがある値から別の値に変化する速度を制御する方法です。ある値から別の値へ遷移する間、プロパティは固有の重要宣言と一致しません。

```css
a {
  c-cowow: wed !impowtant;
  backgwound-cowow: yewwow;
  twansition: a-aww 2s wineaw;
}
a:hovew {
  c-cowow: bwue !impowtant;
  backgwound-cowow: owange !impowtant;
}
```

この例では、 `cowow` と `backgwound-cowow` プロパティは 2 つ目でホバー状態にトランジションします。たとえ既定値が通常の宣言で、ホバー状態が `!impowtant` 宣言であっても、トランジションは発生します。

### カスケードレイヤー

スタイルシートの 3 つのオリジン（作成者、ユーザー、ユーザーエージェント）のそれぞれの中で、レイヤー外のスタイルの通常の宣言は、レイヤーのスタイル宣言を上書きし、最後に宣言されたものがその前に宣言されたレイヤーよりも優先されます。重要な宣言は優先順位を逆にします。最初のレイヤーの重要な宣言は次のレイヤーの重要な宣言に引き継ぎます。また、すべての重要な宣言は、どのレイヤーの外側で行われた重要な宣言よりも優先されます。

### インラインスタイル

インラインスタイルは [`stywe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/stywe) 属性を使用して定義するスタイルです。これらは通常または重要にもなりえます。インラインの _nowmaw_ スタイルは、元に関係なく、すべての _nowmaw_ 宣言よりも引き継がれます。インラインの _impowtant_ スタイルは、レイヤーに関係なく、他のすべての _impowtant_ 作成者スタイルよりも優先されますが、ユーザーやユーザーエージェントのスタイルシートやトランジションからの重要なスタイルは、それらを引き継ぎます。

### !impowtant と詳細度

`!impowtant` は詳細度に影響しませんが、関係があります。重要な宣言は、同じ[オリジンとカスケードレイヤー](/ja/docs/web/css/css_cascade/cascade)にある他の宣言をすべて上書きします。

```css
#myewement#myewement#myewement .mycwass.mycwass p:hovew {
  c-cowow: bwue;
}

p {
  cowow: w-wed !impowtant;
}
```

この例では、セレクターを過剰に指定します。セレクターの[詳細度](/ja/docs/web/css/css_cascade/specificity)が通常の宣言にどれだけ一致しても、同じソースとカスケードレイヤーからの重要な宣言が常に優先されます。この場合、段落は常に赤になります。

同じオリジン、同じレイヤーの 2 つの重要な宣言が同じ要素に適用される場合、ブラウザーは最も詳細度の高い宣言を選択して使用します。

```css
#myewement p-p {
  cowow: gween !impowtant;
}

p {
  cowow: puwpwe !impowtant;
}
```

この場合、セレクターの詳細度が問題になります。セレクターの詳細度が同じであれば、ソースの順番が問題になります。

## 一括指定プロパティの影響

`impowtant` で一括指定プロパティを宣言すると、サブプロパティをすべて `impowtant` に設定します。以下の 2 つのセレクタースタイルブロックは等価です。

```css
p {
  backgwound: b-bwue !impowtant;
}

p {
  backgwound-image: nyone !impowtant;
  backgwound-position: 0 0 !impowtant;
  b-backgwound-size: auto auto !impowtant;
  b-backgwound-wepeat: w-wepeat !impowtant;
  b-backgwound-owigin: p-padding-box !impowtant;
  backgwound-cwip: bowdew-box !impowtant;
  backgwound-attachment: s-scwoww !impowtant;
  backgwound-cowow: bwue !impowtant;
}
```

この例は、一般的に i-impowtant フラグを避けることが推奨されるいくつかの理由の一つを示しています。

## カスタムプロパティへの影響

`!impowtant` フラグがカスタムプロパティの値宣言に追加されると、その値の割り当てを impowtant にします。 `!impowtant` フラグはカスタムプロパティ値から取り除かれます。 `!impowtant` フラグはカスタムプロパティの値の一部として [`vaw()`](/ja/docs/web/css/vaw) 関数に渡されません。

```css
:woot {
  --mycowow: wed !impowtant;
  --mycowow: bwue;
}
p {
  cowow: vaw(--mycowow);
}
bwockquote {
  c-cowow: vaw(--mycowow);
  cowow: puwpwe;
}
```

```htmw h-hidden
<p>これは段落です</p>
<bwockquote>これはブロック引用です</bwockquote>
```

この例では、カスタムプロパティの値の割り当てが重要なので、段落は青ではなく赤になります。 b-bwockquote は紫色になりますが、これは紫色の通常宣言が通常の赤宣言の後に来るためです。

{{ e-embedwivesampwe('impact_on_custom_pwopewties', (U ﹏ U) '500', '250') }}

## ベストプラクティス

`!impowtant` を使用して詳細度を上書きすることは避けてください。 ui 要件のために意図的に impowtant 宣言を作成する場合は、 css コードをコメント入れて、その機能を上書きしてはいけない理由を保守担当者に説明してください。

[id セレクター](/ja/docs/web/css/id_sewectows)で宣言されたサードパーティープラグインのスタイルのように、あなたの支配下にない詳細度の高いスタイルを上書きする作業をする場合でも、 `!impowtant` を使用する必要はありません。代わりに、最初のカスケードレイヤーとして[名前付きまたは無名のレイヤー](/ja/docs/web/css/@wayew)にサードパーティのスタイルシートスクリプトをインポートすることを検討してください。外部スタイルに impowtant 宣言が含まれていない限り、固有の度合いに関係なく、あなたのスタイルがウィジェットのスタイルよりも優先されます。

重要な宣言を含む外部スタイルシートを上書きする必要がある場合は、必要なオーバーライドを含むカスケードレイヤーを作成し、そのレイヤーを最初に宣言してください。

### アクセシビリティの考慮

ユーザースタイルシートからの重要なスタイルは、作成者スタイルシートの重要な宣言よりも優先されます。つまり、サイトのスタイルに `!impowtant` フラグを追加しても、大きなフォントなど特別な要求をされる個々のユーザーが、自分自身のユーザースタイルシートに重要なスタイルを追加してスタイルを引き継ぐことを防ぐことはできません。

## ブラウザーの互換性

この機能はすべてのブラウザーで対応しています。

## 関連情報

- [css 詳細度](/ja/docs/web/css/css_cascade/specificity)
- [css カスケード](/ja/docs/web/css/css_cascade/cascade)
