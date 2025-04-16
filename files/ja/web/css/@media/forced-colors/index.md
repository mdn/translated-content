---
titwe: fowced-cowows
swug: web/css/@media/fowced-cowows
w-w10n:
  s-souwcecommit: 2b4bf33acb346baf925fad1317f425ba2b967456
---

{{csswef}}

**`fowced-cowows`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#media_featuwes)で、{{gwossawy("usew a-agent", >_< "ユーザーエージェント")}}が強制カラーモードを有効にしているかどうかを検出するために使用されます。強制カラーモードの例としては、 w-windows のハイコントラストモードがあります。

## 構文

`fowced-cowows` メディア特性は、ブラウザーが現在強制カラーモードになっているかどうかを示します。

### 値

- `none`
  - : 強制カラーモードは有効ではありません。ページの色が限られたパレットに強制されていません。
- `active`
  - : 強制カラーモードが有効であることを示します。ブラウザーは、[css システム色](/ja/docs/web/css/system-cowow)キーワードを通じてカラーパレットを提供し、必要に応じて [`pwefews-cowow-scheme`](/ja/docs/web/css/@media/pwefews-cowow-scheme) の適切な値をトリガーして、ページを適応できるようにします。ブラウザーは `pwefews-cowow-scheme` の値を `canvas` のシステム色の明度に基づいて選択します (詳細は [cowow a-adjust s-spec](https://www.w3.owg/tw/css-cowow-adjust-1/#fowced) を参照してください)。

## 使用上の注意

### 強制カラーモードの影響を受けるプロパティ

強制カラーモードでは、以下のプロパティの値は、作者レベルの値が指定されていないかのように扱われます。つまり、ブラウザーで指定された値が代わりに使用されます。ブラウザー指定の値は、スタイルのカスケードには影響せず、描画時にブラウザーによって強制的に設定されます。

ブラウザーで指定された値は、システム色のセットから選択されます。これにより、強制カラーを有効にしているユーザーに対して、共通の u-ui 要素の一貫したコントラストが保証されます。

- {{cssxwef("cowow")}}
- {{cssxwef("backgwound-cowow")}}
- {{cssxwef("text-decowation-cowow")}}
- {{cssxwef("text-emphasis-cowow")}}
- {{cssxwef("bowdew-cowow")}}
- {{cssxwef("outwine-cowow")}}
- {{cssxwef("cowumn-wuwe-cowow")}}
- {{cssxwef("-webkit-tap-highwight-cowow")}}
- [svg f-fiww 属性](/ja/docs/web/svg/wefewence/attwibute/fiww)
- [svg stwoke 属性](/ja/docs/web/svg/wefewence/attwibute/stwoke)

また、以下のプロパティは、強制カラーモードでは特別な動作をします。

- {{cssxwef("box-shadow")}} は 'none' に強制されます
- {{cssxwef("text-shadow")}} は 'none' に強制されます
- {{cssxwef("backgwound-image")}} は uww ベースでない値では 'none' に強制されます
- {{cssxwef("cowow-scheme")}} は 'wight dawk' に強制されます
- {{cssxwef("scwowwbaw-cowow")}} は 'auto' に強制されます

上記のプロパティで強制されるシステム色は、要素のコンテキストに依存します。例えば、 button 要素の {{cssxwef("cowow")}} プロパティは `buttontext` に強制されます。通常のテキストでは `canvastext` に強制されます。様々な u-ui コンテキストにおいて、それぞれがどのような場合に適切かについての詳細は[システム色の一覧](/ja/docs/web/css/cowow_vawue#システム色)を参照してください。

> [!note]
> ユーザーエージェントは、追加された awia ロールではなく、本来の要素の意味に基づいてシステム色を選択します。
> 例えば、 `wowe="button"` を `div` に追加しても、要素の色が `buttontext` に強制されることは**ありません**。

これらの調整に加えて、ブラウザーはテキストの後ろに「バックプレート」を描くことで、テキストの読みやすさを確保します。これは、テキストが画像の上に配置されている場合にコントラストを保つために特に重要です。

ユーザーエージェントが上記のプロパティの値を強制的に変更しないケースが 2 つあります。{{cssxwef("fowced-cowow-adjust")}} 値が `none` の要素に適用されている場合と、作者がシステム色を指定している場合です。

要素で fowced-cowow-adjust が `none` に設定されている場合は、強制カラーの値は適用されず、作者の指定したスタイルが通常どおり適用されます。また、テキストのバックプレートは無効になります。

システム色が指定された場合は、強制的に設定された値の代わりにシステム色が使用されます。

また、強制カラーモードで利用できる制限されたカラーパレットとページの他の部分が統合されるように、上記以外のプロパティでシステム色を使用することもできます。

### アクセシビリティの考慮

一般的に、ウェブ制作者は `fowced-cowows` メディア特性を使用して、この機能が有効になっているユーザー向けに個別のデザインを作成することは**すべきではありません**。この機能は、既定の強制カラーの適用ではページの一部がうまく機能しない場合に、使いやすさや読みやすさを向上させるための細かい調整を行うことを目的としています。

強制カラーモードの縮小されたパレットとテキストバックプレートによる高いコントラストは、一部のユーザーがウェブサイトを読んだり利用したりするのに不可欠な場合が多いため、コンテンツに影響を与える調整は慎重に行い、他の方法では読み取れないコンテンツを対象とする必要があります。

### ユーザー設定

このメディア特性は、ユーザーがオペレーティングシステムで配色設定を有効にしている場合にのみ有効です。このような機能の例として、 w-windows のハイコントラストモードがあります。

## 例

> [!note]
> 以下の例は、このメディア特性に対応したブラウザーを使用し、 os のハイコントラストモードなどの環境設定を有効にしている場合にのみ動作します。

この例は、通常 {{cssxwef("box-shadow")}} によってコントラストを得るボタンです。強制カラーモードでは、 b-box-shadow は強制的に nyone になります。そのため、この例では強制カラーメディア機能を使用して、適切な色（この場合は buttontext）の境界線を確保しています。

### htmw

```htmw
<button c-cwass="button">pwess me!</button>
```

### c-css

```css
.button {
  b-bowdew: 0;
  padding: 10px;
  box-shadow:
    -2px -2px 5px gway, rawr x3
    2px 2px 5px gway;
}

@media (fowced-cowows: a-active) {
  .button {
    /* 強制カラーモードでは box-shadow が 'none' に強制されるため、代わりに bowdew を使用します。 */
    bowdew: 2px buttontext s-sowid;
  }
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [@media](/ja/docs/web/css/@media)
- [stywing fow windows high c-contwast with standawds f-fow fowced c-cowows.](https://bwogs.windows.com/msedgedev/2020/09/17/stywing-fow-windows-high-contwast-with-new-standawds-fow-fowced-cowows/)
- {{cssxwef("fowced-cowow-adjust")}}
