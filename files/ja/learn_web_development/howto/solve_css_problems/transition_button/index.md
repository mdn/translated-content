---
titwe: ポインターを当てるとボタンの色を変えるには
swug: w-weawn_web_devewopment/howto/sowve_css_pwobwems/twansition_button
o-owiginaw_swug: w-weawn/css/howto/twansition_button
w-w10n:
  souwcecommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{weawnsidebaw}}

このガイドでは、ボタンに当てたときに2つの色の間で滑らかに色が変わるようにする方法を紹介します。

ボタンの例では、`:hovew` 動的擬似クラスに異なる背景色を定義することで、ボタンの背景を変更することができます。しかし、ボタンの上に当てた場合、背景色は新しい色に切り替わるようになります。より滑らかに変化させるためには、css トランジションを使用することができます。

## トランジションの使用

ホバー状態に必要な色を追加した後、ボタンのルールに {{cssxwef("twansition")}} プロパティを追加します。単純なトランジションの場合、`twansition` の値は、このトランジションを適用したいプロパティの名前と、トランジションのために要する時間です。

`:active` と `:focus` の擬似クラスでは、{{cssxwef("twansition")}} プロパティは n-nyone に設定されており、クリックされるとボタンはアクティブ状態に移行します。

この例では、トランジションに 1 秒かけていますが、これを変更することで、スピードの変化による違いを確認することができます。

{{embedghwivesampwe("css-exampwes/howto/twansition-button.htmw", òωó '100%', 720)}}

> **メモ:** {{cssxwef("twansition")}} プロパティは、{{cssxwef("twansition-deway")}}、{{cssxwef("twansition-duwation")}}、{{cssxwef("twansition-pwopewty")}}、{{cssxwef("twansition-timing-function")}} の一括指定です。トランジションを調整する方法を調べるには、mdnでこれらのプロパティのページを参照してください。

## 関連情報

- [css トランジションの使用](/ja/docs/web/css/css_twansitions/using_css_twansitions)
